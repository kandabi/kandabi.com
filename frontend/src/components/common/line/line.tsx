import { ReactNode } from 'react';
import styled, { css, FlattenInterpolation, ThemeProps } from 'styled-components';
import { IAppTheme } from 'styles/theme';

interface ILineStyled {
   animation: FlattenInterpolation<ThemeProps<IAppTheme>>;
   bottom?: string;
   $width: string;
}

const LineStyled = styled.span<ILineStyled>`
   ${({ theme: { flex } }) => flex.center}
   gap: 3px;

   &:hover::after {
      width: ${({ $width }) => $width};
      opacity: 1;
   }

   &::after {
      border-bottom: 2px solid ${({ theme: { color } }) => color.white_1};
      transition: width 0.4s, opacity 0.5s ease-out;
      bottom: ${({ bottom = '-8px' }) => bottom};
      border-radius: 8px;
      position: absolute;
      content: ' ';
      opacity: 0;
      width: 0;
      left: 0;
      ${({ animation }) => animation};
   }
`;

enum LineVariant {
   LEFT = 'LEFT',
   CENTER = 'CENTER',
}

interface ILineConfig {
   animation: FlattenInterpolation<ThemeProps<IAppTheme>>;
   width: string;
}

const lineConfig: {
   [key in LineVariant]: ILineConfig;
} = {
   [LineVariant.LEFT]: {
      width: '100%',
      animation: css`
         opacity: 0;
         left: 0;
      `,
   },
   [LineVariant.CENTER]: {
      width: '110%',
      animation: css`
         transform: translate(-50%, 0);
         left: 50%;
      `,
   },
};

interface ILine {
   children: ReactNode;
   variant?: LineVariant;
   styles?: {
      bottom?: string;
   };
}

const Line = ({ children, styles, variant = LineVariant.CENTER }: ILine) => {
   const config = lineConfig[variant];
   return (
      <LineStyled bottom={styles?.bottom} $width={config.width} animation={config.animation}>
         {children}
      </LineStyled>
   );
};

export { Line, LineVariant };
