// Global typing for the gtag.js snippet loaded in index.html.
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

export {};
