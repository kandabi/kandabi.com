export interface MediaProps {
    data: { attributes: { url: string } };
}

export const getMediaUrl = (item: MediaProps) => {
    return `asdf${item.data.attributes.url}`;
};
