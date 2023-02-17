import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { Group } from 'three';
import { Assign } from 'utility-types';
import { ReactThreeFiber, useThree } from '@react-three/fiber';

export interface HtmlProps
   extends Omit<
      Assign<React.HTMLAttributes<HTMLDivElement>, ReactThreeFiber.Object3DNode<Group, typeof Group>>,
      'ref'
   > {
   as?: string;
}

const FastHtml = React.forwardRef(({ children, as = 'div' }: HtmlProps, ref: React.Ref<HTMLDivElement>) => {
   const { gl } = useThree();

   const [el] = React.useState(() => document.createElement(as));
   const root = React.useRef<ReactDOM.Root>();
   const group = React.useRef<Group>(null!);
   const target = gl.domElement.parentNode as HTMLElement;

   React.useLayoutEffect(() => {
      if (group.current) {
         const currentRoot = (root.current = ReactDOM.createRoot(el));
         if (target) {
            target.prepend(el);
         }

         return () => {
            if (target) target.removeChild(el);
            currentRoot.unmount();
         };
      }
   }, [target]);

   React.useLayoutEffect(() => {
      root.current?.render(<div ref={ref} children={children} />);
   });

   return <group ref={group} />;
});

export { FastHtml };
