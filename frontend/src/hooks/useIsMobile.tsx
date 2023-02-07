import { useEffect, useState } from 'react';
import MobileDetect from 'is-mobile';

const useIsMobile = () => {
   const [isMobile, setIsMobile] = useState<boolean>(false);
   useEffect(() => setIsMobile(MobileDetect()), []);

   return {
      isMobile,
   };
};

export { useIsMobile };
