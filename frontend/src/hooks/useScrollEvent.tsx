import { MutableRefObject, useCallback, useEffect } from 'react';
import { throttle } from 'lodash';

const useScrollEvent = (
    elementRef: MutableRefObject<HTMLDivElement> | undefined,
    onScrollChange: (scrollPercentage: number) => void,
    throttleMilliseconds: number,
) => {
    const handleMouseScroll = useCallback(() => {
        const element = elementRef?.current;
        if (element) {
            const clientHeight = element.scrollHeight - element.clientHeight;
            onScrollChange?.(element.scrollTop / clientHeight);
        }
    }, [elementRef, onScrollChange]);

    useEffect(() => {
        const element = elementRef?.current;
        const throttledScroll = throttle(handleMouseScroll, throttleMilliseconds);
        element?.addEventListener('scroll', throttledScroll);

        return () => element?.removeEventListener('scroll', throttledScroll);
    }, [elementRef, handleMouseScroll, onScrollChange, throttleMilliseconds]);
};

export default useScrollEvent;
