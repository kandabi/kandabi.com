import { useMemo } from 'react';
import styled, { FlattenInterpolation, ThemeProps, css } from 'styled-components';
import { Device, useDeviceDetector } from 'hooks/useDeviceDetector';
import { useAppStore } from 'store';
import { Gutters } from 'components/common/Gutters';
import { Logo } from 'components/common/Logo';
import { Navbar } from 'components/common/Navbar';
import { NavbarItemProps } from 'components/common/Navbar';
import { NavbarItemVariants } from 'components/common/Navbar/NavbarItem';
import { ScrollToSection } from 'utils/scrollToSectionUtils';
import { styles } from 'utils/styleUtils';

const headerStyles = css`
    background: linear-gradient(346deg, rgba(15, 23, 42, 0.75) 10%, rgba(15, 23, 42, 0.75) 65%);
    filter: drop-shadow(0px 3px 4px rgba(144, 149, 255, 0.15));
    backdrop-filter: blur(6px);
`;

type HeaderStyledProps = {
    headerStyles?: FlattenInterpolation<ThemeProps<any>>;
    $_opacity?: number;
    top?: string;
};

const HeaderStyled = styled.header<HeaderStyledProps>`
    transition:
        top 0.65s ease-out,
        opacity 0.5s ease-out;
    opacity: ${({ $_opacity = 1 }) => $_opacity};
    top: ${({ top = '0' }) => top};
    pointer-events: none;
    position: absolute;
    overflow-x: hidden;
    z-index: 100;
    height: 68px;

    ${({ headerStyles }) => headerStyles};
    ${styles.flex.between};
    ${Gutters}
`;

const HeaderProgressStyled = styled.div<{ $_width: string }>`
    border-bottom: 2px solid ${styles.color.GREY_200};
    width: ${({ $_width }) => $_width};
    transition: width 0.6s ease-out;
    border-radius: 1px;
    position: absolute;
    bottom: 0;
    left: 0;
`;

export enum HeaderVariant {
    FIXED = 'FIXED',
    STICKY = 'STICKY',
}

type HeaderVariantProps = {
    headerStyles?: FlattenInterpolation<ThemeProps<any>>;
    lineStyles: { bottom: string };
    showProgress?: boolean;
    opacity?: number;
    top?: string;
};

const headerConfig: Record<HeaderVariant, { visible: HeaderVariantProps; hidden?: HeaderVariantProps }> = {
    [HeaderVariant.FIXED]: {
        visible: {
            lineStyles: { bottom: '-12px' },
            headerStyles: css`
                background: transparent;
            `,
            showProgress: false,
            opacity: 1,
            top: '6.5vh',
        },
    },
    [HeaderVariant.STICKY]: {
        visible: {
            lineStyles: { bottom: '-8px' },
            showProgress: true,
            headerStyles,
            opacity: 1,
            top: '0',
        },
        hidden: {
            lineStyles: { bottom: '-8px' },
            showProgress: true,
            headerStyles,
            opacity: 0,
            top: '-60px',
        },
    },
};

type Props = {
    variant: HeaderVariant;
};

export const Header = ({ variant = HeaderVariant.FIXED }: Props) => {
    const { device } = useDeviceDetector();
    const { currentScrollPosition, setScrollToSection } = useAppStore(state => ({
        currentScrollPosition: state.currentScrollPercentage,
        setScrollToSection: state.setScrollToSection,
    }));

    const config = headerConfig[variant];
    const isActive = variant === HeaderVariant.FIXED || currentScrollPosition > 0.15;
    const styles = isActive ? config.visible : config.hidden;

    const navbarItems: NavbarItemProps[] = useMemo(
        () => [
            { title: 'Home', onClick: () => setScrollToSection(ScrollToSection.HERO) },
            { title: 'Projects', onClick: () => setScrollToSection(ScrollToSection.PROJECTS) },
            { title: 'About', onClick: () => setScrollToSection(ScrollToSection.ABOUT_ME) },
            { title: 'Contact', onClick: () => setScrollToSection(ScrollToSection.CONTACT) },
            { title: 'Github', link: 'https://example.com', variant: NavbarItemVariants.LINK },
        ],
        [setScrollToSection],
    );

    return (
        <HeaderStyled headerStyles={styles?.headerStyles} $_opacity={styles?.opacity} top={styles?.top}>
            <Logo />
            {device === Device.DESKTOP && <Navbar items={navbarItems} lineStyles={styles?.lineStyles} />}
            {styles?.showProgress && <HeaderProgressStyled $_width={`${Math.round(currentScrollPosition * 100)}%`} />}
        </HeaderStyled>
    );
};
