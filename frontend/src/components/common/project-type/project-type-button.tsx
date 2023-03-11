import { Button } from 'components/common/button';
import { IColor } from 'styles';

enum ProjectType {
   WEB = 'WEB',
   GAME = 'GAME',
   OTHER = 'OTHER',
}

const projectTypeButtonConfig: { [key in ProjectType]: { color: IColor; text: string } } = {
   [ProjectType.WEB]: { color: 'blue_100', text: 'Web' },
   [ProjectType.GAME]: { color: 'orange_100', text: 'Game' },
   [ProjectType.OTHER]: { color: 'yellow_100', text: 'Other' },
};

interface IProjectTypeButton {
   projectType: ProjectType;
   onClick?: () => void;
   isSelected?: boolean;
}

const ProjectTypeButton = ({ projectType, onClick, isSelected }: IProjectTypeButton) => {
   const { color, text } = projectTypeButtonConfig[projectType];

   return (
      <Button
         styles={{ color, fontSize: 13, height: '32px', padding: '0 24px' }}
         isSelected={isSelected}
         onClick={onClick}
         text={text}
      />
   );
};

export { ProjectTypeButton, ProjectType };
