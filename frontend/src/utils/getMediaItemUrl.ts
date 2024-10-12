import { IMediaItem } from 'types/media-item';
import { NEXT_PUBLIC_API_URL } from './constants';

const getMediaItemUrl = (item: IMediaItem) => {
   return `${NEXT_PUBLIC_API_URL}${item.data.attributes.url}`;
};

export { getMediaItemUrl };
