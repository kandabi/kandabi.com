import { Button } from 'components/common/button';
import { IColor } from 'styles';

interface IProjectTag {
   id: number;
   attributes: {
      title: string;
      color: IColor;
   };
}

interface IProjectType {
   projectTag: IProjectTag;
   onClick?: () => void;
   isSelected?: boolean;
}

const ProjectTag = ({ projectTag, onClick, isSelected }: IProjectType) => {
   const { title, color } = projectTag.attributes;
   return (
      <Button
         styles={{ color, fontSize: 13, height: '32px', padding: '0 24px' }}
         isSelected={isSelected}
         onClick={onClick}
         text={title}
      />
   );
};

export { ProjectTag };
export type { IProjectTag };
