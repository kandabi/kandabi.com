import { useEffect, useState } from 'react';

export const useSsrDetector = (): { isSsr: boolean } => {
    const [isSsr, setIsSsr] = useState<boolean>(true);
    useEffect(() => setIsSsr(false), []);

    return { isSsr };
};
