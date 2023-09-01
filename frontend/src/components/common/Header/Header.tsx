import { useMemo } from 'react';
import styled, { FlattenInterpolation, ThemeProps, css } from 'styled-components';
import { useDeviceDetector } from 'hooks/useDeviceDetector';
import { useStore } from 'store';
import { Gutters } from 'components/common/Gutters';
import { Logo } from 'components/common/Logo';
import { Navbar } from 'components/common/Navbar';
import { NavbarItemProps } from 'components/common/Navbar';
import { NavbarItemVariants } from 'components/common/Navbar/NavbarItem';
import { styles } from 'utils/styleUtils';
import { MapConfig } from 'utils/typeUtils';

const headerStyles = css`
    background: linear-gradient(346deg, rgba(15, 23, 42, 0.75) 10%, rgba(15, 23, 42, 0.75) 65%);
    filter: drop-shadow(0px 3px 4px rgba(144, 149, 255, 0.15));
    backdrop-filter: blur(6px);
`;

interface HeaderStyledProps {
    headerStyles?: FlattenInterpolation<ThemeProps<any>>;
    $_opacity?: number;
    top?: string;
}

const HeaderStyled = styled.header<HeaderStyledProps>`
    transition: top 0.65s ease-out, opacity 0.5s ease-out;
    opacity: ${({ $_opacity = 1 }) => $_opacity};
    top: ${({ top = '0' }) => top};
    pointer-events: none;
    position: absolute;
    z-index: 100;
    height: 68px;

    ${({ headerStyles }) => headerStyles};
    ${styles.flex.between};
    ${Gutters}
`;

interface HeaderProgressStyledProps {
    $_width: string;
}

const HeaderProgressStyled = styled.div<HeaderProgressStyledProps>`
    border-bottom: 2px solid ${styles.color.grey_200};
    width: ${({ $_width }) => $_width};
    transition: width 0.6s ease-out;
    border-radius: 1px;
    position: absolute;
    bottom: 0;
    left: 0;
`;

export enum HeaderVariants {
    FIXED = 'FIXED',
    STICKY = 'STICKY',
}

interface IHeaderVariants {
    headerStyles?: FlattenInterpolation<ThemeProps<any>>;
    lineStyles: { bottom: string };
    showProgress?: boolean;
    opacity?: number;
    top?: string;
}

const headerConfig: MapConfig<HeaderVariants, { visible: IHeaderVariants; hidden?: IHeaderVariants }> = {
    [HeaderVariants.FIXED]: {
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
    [HeaderVariants.STICKY]: {
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

interface Props {
    variant: HeaderVariants;
}

export const Header = ({ variant = HeaderVariants.FIXED }: Props) => {
    const { isMobile } = useDeviceDetector();
    const { currentScrollPosition, setGoToScrollPosition } = useStore(state => ({
        currentScrollPosition: state.currentScrollPosition,
        setGoToScrollPosition: state.setGoToScrollPosition,
    }));

    const config = headerConfig[variant];
    const isActive = variant === HeaderVariants.FIXED || currentScrollPosition > 0.15;
    const styles = isActive ? config.visible : config.hidden;

    const navbarItems: NavbarItemProps[] = useMemo(
        () => [
            { title: 'Home', onClick: () => setGoToScrollPosition(0) },
            { title: 'Projects', onClick: () => setGoToScrollPosition(0.35) },
            { title: 'About', onClick: () => setGoToScrollPosition(0.6) },
            { title: 'Contact', onClick: () => setGoToScrollPosition(0.9) },
            { title: 'Github', link: 'https://example.com', variant: NavbarItemVariants.Link },
        ],
        [setGoToScrollPosition],
    );

    return (
        <HeaderStyled headerStyles={styles?.headerStyles} $_opacity={styles?.opacity} top={styles?.top}>
            <Logo />
            {!isMobile ? <Navbar items={navbarItems} lineStyles={styles?.lineStyles} /> : null}
            {styles?.showProgress && <HeaderProgressStyled $_width={`${Math.round(currentScrollPosition * 100)}%`} />}
        </HeaderStyled>
    );
};
