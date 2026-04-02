import React, { useEffect, useRef } from 'react';

/**
 * GoogleTranslate Component
 * Injects the Google Translate widget into the page.
 * Uses translate="no" to prevent specific elements from being translated.
 */
const GoogleTranslate = () => {
    const isScriptAdded = useRef(false);

    useEffect(() => {
        // Function to initialize or re-initialize the widget
        const initWidget = () => {
            if (window.googleTranslateElementInit) {
                // Small delay to ensure the DOM node #google_translate_element is ready
                setTimeout(() => {
                    window.googleTranslateElementInit();
                }, 100);
            }
        };

        // If the script is already added, just try to init
        if (document.getElementById('google-translate-script')) {
            initWidget();
            return;
        }

        // Otherwise, add the script
        const script = document.createElement('script');
        script.id = 'google-translate-script';
        script.type = 'text/javascript';
        script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
        script.async = true;
        document.body.appendChild(script);

        // Note: The 'cb=googleTranslateElementInit' in the URL will call the global function 
        // once the script loads for the first time.
    }, []);

    return (
        <div className="google-translate-container flex items-center">
            {/* The widget will be rendered inside this div */}
            <div id="google_translate_element"></div>
        </div>
    );
};

export default GoogleTranslate;
