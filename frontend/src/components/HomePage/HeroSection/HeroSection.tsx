import { RefObject } from 'react';
import { ParallaxLayer } from '@react-spring/parallax';
import styled from 'styled-components';
import { Device, useDeviceDetector } from 'hooks/useDeviceDetector';
import { useAppStore } from 'store';
import { Button } from 'components/common/Button';
import { CoolText } from 'components/common/CoolText';
import { Header } from 'components/common/Header';
import { HeaderVariants } from 'components/common/Header';
import { Image } from 'components/common/Image';
import { Section } from 'components/common/Section';
import { ScrollToSection } from 'utils/scrollToSectionUtils';
import { styles } from 'utils/styleUtils';
import arrowDown from 'assets/svgs/arrow-down.svg';

const HeroStyled = styled.div`
    position: relative;
    display: flex;
    height: 100%;
    width: 100%;
`;

const YellowStyled = styled.i`
    color: ${styles.color.YELLOW_100};
    font-style: normal;
`;

const TitleStyled = styled.h1`
    text-shadow: 2px 4px 4px rgba(0, 0, 0, 0.75);
    color: ${styles.color.WHITE_100};
    line-height: 1.16em;
    font-size: 42px;
    margin-top: 20vh;
    ${styles.breakpoint.md} {
        margin-top: initial;
        font-size: 55px;
    }
`;

const SubtitleStyled = styled.p`
    font-size: 20px;
    ${styles.breakpoint.md} {
        font-size: 32px;
    }
`;

const TechStyled = styled(CoolText)`
    ${styles.breakpoint.md} {
        margin-top: 20px;
        font-size: 20px;
    }
    line-height: 1.5rem;
    margin-top: 10px;
    font-size: 14px;
`;

interface CenterContainerStyledProps {
    $_isVisible: boolean;
}

const CenterContainerStyled = styled.div<CenterContainerStyledProps>`
    opacity: ${({ $_isVisible }) => ($_isVisible ? 1 : 0)};
    transition: opacity 0.2s ease-out;
    ${styles.flex.center}
    width: 100%;
`;

const ScrollDownContainerStyled = styled.div`
    transition: transform 0.2s ease-out;
    flex-direction: column;
    position: absolute;
    padding: 6px 10px;
    cursor: pointer;
    bottom: 160px;
    gap: 6px;
    ${styles.flex.center}

    ${styles.breakpoint.lg} {
        bottom: 200px;
    }

    &:hover {
        transform: scale(1.06) translateY(-6px);
    }

    &:active {
        transform: scale(0.8) translateY(4px);
    }
`;

const ScrollDownTextStyled = styled.span`
    font-size: 20px;
`;

const GlViewStyled = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
`;

interface ParallaxConfigType {
    gap: string;
}

const parallaxConfig: Record<Device, ParallaxConfigType> = {
    [Device.DESKTOP]: { gap: '20px' },
    [Device.MOBILE]: { gap: '8px' },
};

interface Props {
    glViewport: RefObject<HTMLDivElement>;
}

export const HeroSection = ({ glViewport }: Props) => {
    const { device } = useDeviceDetector();
    const { gap } = parallaxConfig[device];
    const currentScrollPosition = useAppStore(
        ({ currentScrollPercentage: currentScrollPosition }) => currentScrollPosition,
    );

    const setScrollToSection = useAppStore(state => state.setScrollToSection);
    const handleScrollDown = () => setScrollToSection(ScrollToSection.PROJECTS);

    return (
        <ParallaxLayer factor={1.0} offset={0} speed={0.4}>
            <Header variant={HeaderVariants.FIXED} />
            <HeroStyled>
                <Section gap={gap}>
                    <TitleStyled>
                        <YellowStyled>A</YellowStyled>viv <YellowStyled>K</YellowStyled>andabi
                    </TitleStyled>
                    <SubtitleStyled>Freelance Software Developer</SubtitleStyled>
                    <TechStyled text='Javascript | Typescript | React | C# | Node.js | Three.js' />
                    <Button onClick={handleScrollDown} text='My Work' styles={{ margin: '15px 0 0 0' }} />
                    {device === Device.DESKTOP && (
                        <CenterContainerStyled $_isVisible={currentScrollPosition < 0.2}>
                            <ScrollDownContainerStyled onClick={handleScrollDown}>
                                <ScrollDownTextStyled>Scroll Down</ScrollDownTextStyled>
                                <Image src={arrowDown.src} width={20} height={20} alt='down arrow' />
                            </ScrollDownContainerStyled>
                        </CenterContainerStyled>
                    )}
                </Section>
                <GlViewStyled ref={glViewport} />
            </HeroStyled>
        </ParallaxLayer>
    );
};
