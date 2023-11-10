import { MutableRefObject, useCallback, useEffect } from 'react';
import { throttle } from 'lodash';

const useScrollEvent = (
    elementRef: MutableRefObject<HTMLDivElement> | undefined,
    onScroll: (scrollPercentage: number) => void,
    throttleMilliseconds: number,
) => {
    const handleMouseScroll = useCallback(() => {
        const element = elementRef?.current;
        if (element) {
            const clientHeight = element.scrollHeight - element.clientHeight;
            onScroll?.(element.scrollTop / clientHeight);
        }
    }, [elementRef, onScroll]);

    useEffect(() => {
        const element = elementRef?.current;
        const throttledScroll = throttle(handleMouseScroll, throttleMilliseconds);
        element?.addEventListener('scroll', throttledScroll);

        return () => element?.removeEventListener('scroll', throttledScroll);
    }, [elementRef, handleMouseScroll, onScroll, throttleMilliseconds]);
};

export default useScrollEvent;
