import { NEXT_PUBLIC_API_URL } from './constants';
import { MediaItemProps } from 'types/media-item';

export const getMediaItemUrl = (item: MediaItemProps) => {
    return `${NEXT_PUBLIC_API_URL}${item.data.attributes.url}`;
};
