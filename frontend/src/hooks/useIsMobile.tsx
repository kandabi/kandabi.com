import { useEffect, useState } from 'react';
import { isMobile as isMobileDevice, isMobileSafari } from 'react-device-detect';

const useIsMobile = () => {
   const [isMobile, setIsMobile] = useState<boolean>(false);
   useEffect(() => setIsMobile(isMobileSafari || isMobileDevice), []);

   return {
      isMobile,
   };
};

export { useIsMobile };
