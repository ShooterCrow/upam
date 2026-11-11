import { useEffect, useRef } from "react";

/**
 * Infinite auto-scrolling marquee that the user can also scroll with the mouse.
 *
 * - Auto-scrolls continuously (pauses while hovered or dragged).
 * - Mouse wheel (vertical or horizontal) scrolls it horizontally while hovered.
 * - Click-and-drag scrolls it.
 *
 * The scroll container's content must be the item list rendered twice in a row,
 * so that the position can wrap seamlessly at half of the scroll width.
 *
 * @param {object} options
 * @param {number} options.duration Seconds to scroll through one full set of items.
 * @param {boolean} options.reverse Auto-scroll towards the right instead of left.
 */
const useMarqueeScroll = ({ duration = 40, reverse = false } = {}) => {
    const ref = useRef(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const reduceMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

        let pos = 0;
        let initialized = false;
        let hovered = false;
        let dragging = false;
        let dragStartX = 0;
        let dragStartPos = 0;
        let lastTime = performance.now();
        let frame;

        const half = () => el.scrollWidth / 2;

        const apply = () => {
            const h = half();
            if (h <= 0) return;
            pos = ((pos % h) + h) % h; // wrap into [0, h)
            el.scrollLeft = pos;
        };

        const tick = (now) => {
            const dt = Math.min((now - lastTime) / 1000, 0.1);
            lastTime = now;

            const h = half();
            if (h > 0) {
                if (!initialized) {
                    pos = reverse ? h : 0;
                    initialized = true;
                }
                if (!hovered && !dragging && !reduceMotion) {
                    const speed = h / duration; // px per second
                    pos += reverse ? -speed * dt : speed * dt;
                }
                apply();
            }
            frame = requestAnimationFrame(tick);
        };

        const onWheel = (e) => {
            const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
            if (!delta) return;
            e.preventDefault();
            pos += delta;
            apply();
        };

        const onPointerDown = (e) => {
            if (e.pointerType !== "mouse" || e.button !== 0) return;
            dragging = true;
            dragStartX = e.clientX;
            dragStartPos = pos;
            el.style.cursor = "grabbing";
            el.setPointerCapture(e.pointerId);
        };

        const onPointerMove = (e) => {
            if (!dragging) return;
            pos = dragStartPos - (e.clientX - dragStartX);
            apply();
        };

        const endDrag = (e) => {
            if (!dragging) return;
            dragging = false;
            el.style.cursor = "";
            if (el.hasPointerCapture?.(e.pointerId)) el.releasePointerCapture(e.pointerId);
        };

        // Touch devices scroll natively; keep our position in sync with it.
        const onScroll = () => {
            if (Math.abs(el.scrollLeft - pos) > 1) pos = el.scrollLeft;
        };

        const onEnter = () => { hovered = true; };
        const onLeave = () => { hovered = false; };

        el.addEventListener("wheel", onWheel, { passive: false });
        el.addEventListener("pointerdown", onPointerDown);
        el.addEventListener("pointermove", onPointerMove);
        el.addEventListener("pointerup", endDrag);
        el.addEventListener("pointercancel", endDrag);
        el.addEventListener("scroll", onScroll, { passive: true });
        el.addEventListener("mouseenter", onEnter);
        el.addEventListener("mouseleave", onLeave);
        frame = requestAnimationFrame(tick);

        return () => {
            cancelAnimationFrame(frame);
            el.removeEventListener("wheel", onWheel);
            el.removeEventListener("pointerdown", onPointerDown);
            el.removeEventListener("pointermove", onPointerMove);
            el.removeEventListener("pointerup", endDrag);
            el.removeEventListener("pointercancel", endDrag);
            el.removeEventListener("scroll", onScroll);
            el.removeEventListener("mouseenter", onEnter);
            el.removeEventListener("mouseleave", onLeave);
        };
    }, [duration, reverse]);

    return ref;
};

export default useMarqueeScroll;
