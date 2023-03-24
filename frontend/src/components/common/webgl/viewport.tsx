import { ReactNode, RefObject } from 'react';
import { View } from '@react-three/drei';

interface IViewport {
   glViewport: RefObject<HTMLDivElement>;
   children: ReactNode;
}

const Viewport = ({ glViewport, children }: IViewport) => {
   return <View track={glViewport as any}>{children}</View>;
};

export { Viewport };
