import { MutableRefObject, ReactNode } from 'react';
import { View } from '@react-three/drei';

type Props = {
    glViewport: MutableRefObject<HTMLDivElement>;
    children: ReactNode;
};

export const Viewport = ({ glViewport, children }: Props) => {
    return <View track={glViewport}>{children}</View>;
};
