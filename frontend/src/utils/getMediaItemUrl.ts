import { MediaItemProps } from 'types/media-item';
import { NEXT_PUBLIC_API_URL } from './constants';

export const getMediaItemUrl = (item: MediaItemProps) => {
   return `${NEXT_PUBLIC_API_URL}${item.data.attributes.url}`;
};
