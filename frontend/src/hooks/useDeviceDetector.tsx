import { useEffect, useState } from 'react';
import { isMobile as isMobileDevice } from 'is-mobile';

const useDeviceDetector = () => {
   const [isMobile, setIsMobile] = useState<boolean>(false);
   useEffect(() => setIsMobile(isMobileDevice()), []);

   return { isMobile, isDesktop: !isMobile };
};

export { useDeviceDetector };