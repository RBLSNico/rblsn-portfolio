declare module 'react-slick' {
    import React from 'react';

    export interface Settings {
        dots?: boolean;
        infinite?: boolean;
        speed?: number;
        slidesToShow?: number;
        slidesToScroll?: number;
        // Add any other settings you need
    }

    export default class Slider extends React.Component<Settings> {}
} 