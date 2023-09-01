import { NEXT_PUBLIC_API_URL } from './constantUtils';

export interface MediaProps {
    data: { attributes: { url: string } };
}

export const getMediaUrl = (item: MediaProps) => {
    return `${NEXT_PUBLIC_API_URL}${item.data.attributes.url}`;
};
