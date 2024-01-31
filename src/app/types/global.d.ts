declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg';
declare module '*.vue' {
    import type { DefineComponent } from 'vue';
    // eslint-disable-next-line
    const component: DefineComponent<{}, {}, any>;
    export default component;
}

declare const DEV: boolean;
declare const API_URL: string;
