import { IMediaItem } from './media-item';
import { IColor } from './color';

enum ProjectTypes {
   WEB = 'WEB',
   GAME = 'GAME',
   OTHER = 'OTHER',
}

interface IProjectTag {
   id?: number;
   attributes: {
      title: string;
      color: IColor;
   };
}

interface IProject {
   id: number;
   attributes: {
      description: string;
      title: string;
      link?: string;
      projectType: ProjectTypes;
      tags: { data: IProjectTag[] };
      thumbnail: IMediaItem;
      video?: IMediaItem;
   };
}

export { ProjectTypes };
export type { IProject, IProjectTag };
