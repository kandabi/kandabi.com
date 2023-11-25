import React from 'react';
import styled from 'styled-components';
import { Color, ColorType, getColor } from 'utils/colorUtils';
import { styles } from 'utils/styleUtils';

const INPUT_COLOR = getColor(Color.WHITE_100);

const StyledInput = styled.input`
    border: 1px solid ${INPUT_COLOR};
    background-color: transparent;
    color: ${INPUT_COLOR};
    padding: 10px 20px;
    border-radius: 0;
    font-size: 20px;
    color: #fff;
    resize: none;
    width: 100%;
    ${styles.font.rubik};

    &:focus {
        outline: none;
    }

    ::placeholder {
        color: ${INPUT_COLOR};
    }
`;

type Props = {
    placeholder: string;
    value: string;
    name: string;
    as?: 'input' | 'textarea';
    rows?: number;
};

export const Input = ({ placeholder, value, name, rows, as = 'input' }: Props) => {
    return <StyledInput placeholder={placeholder} value={value} name={name} as={as} rows={rows} />;
};
