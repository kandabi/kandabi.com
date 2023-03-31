import { Button } from 'components/common/button';
import { IColor } from 'types/color';
import { ProjectTypes } from 'types/project';

const projectTypeConfig: { [key in ProjectTypes]: { color: IColor; text: string } } = {
   [ProjectTypes.WEB]: { color: 'blue_100', text: 'Web' },
   [ProjectTypes.GAME]: { color: 'orange_100', text: 'Game' },
   [ProjectTypes.OTHER]: { color: 'yellow_100', text: 'Other' },
};

interface IProjectType {
   projectType: ProjectTypes;
   onClick?: () => void;
   isSelected?: boolean;
}

const ProjectType = ({ projectType, onClick, isSelected }: IProjectType) => {
   const { color, text } = projectTypeConfig[projectType];

   return (
      <Button
         styles={{ color, fontSize: 13, height: '32px', padding: '0 24px' }}
         isSelected={isSelected}
         onClick={onClick}
         text={text}
      />
   );
};

export { ProjectType };
