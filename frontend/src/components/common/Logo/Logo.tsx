import styled from 'styled-components';
import { useAppStore } from 'store';
import { Image } from 'components/common/Image';
import { ScrollToSection } from 'utils/scrollToSectionUtils';
import logoFull from 'assets/svgs/logo-full.svg';

const LogoStyled = styled(Image)`
    pointer-events: initial;
    cursor: pointer;
    height: 26px;
`;

interface Props {
    className?: string;
}

export const Logo = ({ className }: Props) => {
    const setScrollToSection = useAppStore(state => state.setScrollToSection);

    return (
        <LogoStyled
            onClick={() => setScrollToSection(ScrollToSection.HERO)}
            alt='aviv kandabi main logo'
            className={className}
            src={logoFull.src}
            loading='eager'
            height={26}
            width={142}
        />
    );
};
