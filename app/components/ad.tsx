'use client'; // This directive ensures the component is treated as a client component

import { useEffect } from 'react';

declare global {
  interface Window {
    adsbygoogle: any[];
  }
}

const AdSenseAd = () => {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error('Adsense error:', e);
    }
  }, []);

  return (
    <div>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="your-ad-client-id"
        data-ad-slot="your-ad-slot-id"
        data-ad-format="auto"
      ></ins>
    </div>
  );
};

export default AdSenseAd;
