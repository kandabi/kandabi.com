import { useEffect, useState } from 'react';
import { isMobile as isMobileDevice } from 'is-mobile';

export enum Device {
    DESKTOP = 'DESKTOP',
    MOBILE = 'MOBILE',
}

export const useDeviceDetector = (): { device: Device } => {
    const [isMobile, setIsMobile] = useState<boolean>(false);
    useEffect(() => setIsMobile(isMobileDevice()), []);

    return { device: isMobile ? Device.MOBILE : Device.DESKTOP };
};
