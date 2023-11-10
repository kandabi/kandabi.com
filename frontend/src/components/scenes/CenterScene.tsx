import { MutableRefObject } from 'react';
import { Shapes, Viewport } from 'components/common/Webgl';

type Props = {
    glViewport: MutableRefObject<HTMLDivElement>;
};

export const CenterScene = ({ glViewport }: Props) => {
    return (
        <Viewport glViewport={glViewport}>
            <Shapes />
            {/* <LinearGradient strength={5} baseStrength={0.05} length={0.5} topColor='#080a14' bottomColor='#0c1f3b' /> */}
        </Viewport>
    );
};
