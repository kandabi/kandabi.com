import { useEffect, useState } from 'react';
import { isIOS, isMobile as isMobileDevice, isMobileSafari } from 'react-device-detect';

const useIsMobile = () => {
   const [isMobile, setIsMobile] = useState<boolean>(false);
   useEffect(() => setIsMobile(isIOS || isMobileSafari || isMobileDevice), []);

   return {
      isMobile,
   };
};

export { useIsMobile };
