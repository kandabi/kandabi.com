import styled from 'styled-components';

interface IImageStyled {
   width: number;
}

const ImageStyled = styled.img<IImageStyled>`
   width: ${({ width }) => `${width}px`};
`;

interface IImage {
   sources?: { src: string; media: string }[];
   loading?: 'eager' | 'lazy';
   onClick?: () => void;
   className?: string;
   height: number;
   width: number;
   src: string;
   alt: string;
}

const Image = ({ onClick, className, height, width, alt, src, sources, loading = 'lazy' }: IImage) => {
   return (
      <picture>
         {sources?.map((item, index) => (
            <source key={index} srcSet={item.src} media={item.media} />
         ))}
         <ImageStyled
            className={className}
            onClick={onClick}
            loading={loading}
            height={height}
            width={width}
            src={src}
            alt={alt}
         />
      </picture>
   );
};

export { Image };
