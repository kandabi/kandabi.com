import { ColorType } from './color';
import { MediaItemProps } from './media-item';

export enum ProjectTypes {
    WEB = 'WEB',
    GAME = 'GAME',
    OTHER = 'OTHER',
}

export interface ProjectTagProps {
    id?: number;
    attributes: {
        title: string;
        color: ColorType;
    };
}

export interface IProject {
    id: number;
    attributes: {
        description: string;
        title: string;
        link?: string;
        projectType: ProjectTypes;
        tags: { data: ProjectTagProps[] };
        thumbnail: MediaItemProps;
        video?: MediaItemProps;
    };
}
