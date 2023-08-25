import { MutableRefObject, ReactNode } from 'react';
import { View } from '@react-three/drei';

interface IViewport {
    glViewport: MutableRefObject<HTMLDivElement>;
    children: ReactNode;
}

export const Viewport = ({ glViewport, children }: IViewport) => {
    return <View track={glViewport}>{children}</View>;
};
