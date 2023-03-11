import { Button } from 'components/common/button';
import { IColor } from 'styles';

interface IProjectTag {
   id: number;
   attributes: {
      title: string;
      color: IColor;
   };
}

interface IProjectTypeButton {
   projectTag: IProjectTag;
   onClick?: () => void;
   isSelected?: boolean;
}

const ProjectTagButton = ({ projectTag, onClick, isSelected }: IProjectTypeButton) => {
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

export { ProjectTagButton };
export type { IProjectTag };
