import React, { ElementType, useState } from 'react';
import styled from 'styled-components';
import { Color, getColor } from 'utils/colorUtils';
import { styles } from 'utils/styleUtils';
import { Line } from 'components/common/Line';

const INPUT_COLOR = getColor(Color.WHITE_100);

const StyledInput = styled.input`
    transition: box-shadow ease-out 0.35s;
    box-shadow: 0px 2px 2px 2px rgba(0, 0, 0, 0.15);
    background-color: ${styles.color.BLUE_500};
    border-radius: 8px 8px 2px 2px;
    color: ${INPUT_COLOR};
    padding: 16px 24px;
    font-size: 16px;
    color: #fff;
    border: none;
    resize: none;
    width: 100%;
    ${styles.font.rubik};

    ${styles.breakpoint.md} {
        font-size: 20px;
    }

    &:focus {
        box-shadow: 0px 2px 2px 4px rgba(0, 0, 0, 0.25);
        outline: none;
    }

    ::placeholder {
        color: ${INPUT_COLOR};
        opacity: 0.35;
    }
`;

type Props = {
    placeholder: string;
    value: string;
    name: string;
    as?: ElementType;
    rows?: number;
};

export const Input = ({ placeholder, value, name, rows, as = 'input' }: Props) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <Line isOpen={isOpen} styles={{ bottom: '0px', width: '100%' }}>
            <StyledInput
                onFocus={() => setIsOpen(true)}
                onBlur={() => setIsOpen(false)}
                placeholder={placeholder}
                value={value}
                name={name}
                rows={rows}
                as={as}
            />
        </Line>
    );
    5;
};
