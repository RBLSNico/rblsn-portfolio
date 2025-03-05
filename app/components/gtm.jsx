import { useEffect } from "react";

const GoogleTagManager = () => {
    useEffect(() => {
        const script1 = document.createElement("script");
        script1.async = true;
        script1.src = "https://www.googletagmanager.com/gtag/js?id=G-SM8ZNVT9LK";
        document.head.appendChild(script1);

        const script2 = document.createElement("script");
        script2.innerHTML = `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-SM8ZNVT9LK');
        `;
        document.head.appendChild(script2);

        return () => {
            document.head.removeChild(script1);
            document.head.removeChild(script2);
        };
    }, []);

    return null; // No visible UI component
};

export default GoogleTagManager;
