import { NEXT_PUBLIC_API_URL } from './constants';

export interface MediaItemProps {
    data: { attributes: { url: string } };
}

export const getMediaItemUrl = (item: MediaItemProps) => {
    return `${NEXT_PUBLIC_API_URL}${item.data.attributes.url}`;
};
