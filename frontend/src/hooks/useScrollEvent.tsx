import { useCallback, useEffect } from 'react';
import { throttle } from 'lodash';

import { MouseEvent } from 'react';

export const useScrollEvent = (onScroll: (scrollPercentage: number) => void, throttleMilliseconds: number) => {
    const handleMouseScroll = useCallback(
        (event: MouseEvent<HTMLDivElement>) => {
            const element = event.currentTarget;
            if (element) {
                const clientHeight = element.scrollHeight - element.clientHeight;
                onScroll?.(element.scrollTop / clientHeight);
            }
        },
        [onScroll],
    );

    useEffect(() => {
        const element = document.querySelector('.parallax-container');
        const throttledScroll = throttle(handleMouseScroll, throttleMilliseconds) as any;

        element?.addEventListener('scroll', throttledScroll);
        return () => element?.removeEventListener('scroll', throttledScroll);
    }, [handleMouseScroll, throttleMilliseconds]);
};
