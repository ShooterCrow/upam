import React, { useEffect, useRef } from 'react';

/**
 * GoogleTranslate Component
 * Injects the Google Translate widget into the page.
 * Uses translate="no" to prevent specific elements from being translated.
 */
const GoogleTranslate = () => {
    const isScriptAdded = useRef(false);

    useEffect(() => {
        // Prevent multiple script injections
        if (isScriptAdded.current) return;

        // Check if the script already exists in the document
        const existingScript = document.getElementById('google-translate-script');
        if (!existingScript) {
            const script = document.createElement('script');
            script.id = 'google-translate-script';
            script.type = 'text/javascript';
            script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
            script.async = true;
            document.body.appendChild(script);
        }

        isScriptAdded.current = true;
    }, []);

    return (
        <div className="google-translate-container flex items-center">
            {/* The widget will be rendered inside this div */}
            <div id="google_translate_element"></div>
        </div>
    );
};

export default GoogleTranslate;
