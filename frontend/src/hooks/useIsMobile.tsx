import { useEffect, useState } from 'react';
import { isMobile as isMobileDevice } from 'is-mobile';

const useIsMobile = () => {
   const [isMobile, setIsMobile] = useState<boolean>(false);
   useEffect(() => setIsMobile(isMobileDevice()), []);

   return { isMobile };
};

export { useIsMobile };
