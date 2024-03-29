import styled from 'styled-components';
import { Image } from 'components/common/Image';
import { Line } from 'components/common/Line';
import { styles } from 'utils/styleUtils';
import linkIcon from 'assets/svgs/link.svg';

const LinkStyled = styled.a<{ fontSize?: number }>`
    font-size: ${({ fontSize = 18 }) => `${fontSize}px`};
    ${styles.flex.center};
    position: relative;
    cursor: pointer;
    gap: 3px;
`;

type Props = {
    className?: string;
    text: string;
    href: string;
    showLine?: boolean;
    styles?: {
        lineBottom?: string;
        iconWidth?: number;
        fontSize?: number;
    };
};

export const Link = ({ className, text, href, styles, showLine = true }: Props) => {
    const renderLink = () => {
        return (
            <>
                <span>{text}</span>
                <Image src={linkIcon.src} width={styles?.iconWidth ?? 12} height={14} alt='Outside link' />
            </>
        );
    };

    return (
        <LinkStyled href={href} className={className} target='_blank'>
            {showLine ? <Line styles={{ bottom: styles?.lineBottom }}>{renderLink()}</Line> : renderLink()}
        </LinkStyled>
    );
};
