import { Button } from 'Components/common/Button';
import { ProjectTypes } from 'types/project';
import { ColorType } from 'utils/color';

const projectTypeConfig: { [key in ProjectTypes]: { color: ColorType; text: string } } = {
    [ProjectTypes.WEB]: { color: 'blue_100', text: 'Web' },
    [ProjectTypes.GAME]: { color: 'orange_100', text: 'Game' },
    [ProjectTypes.OTHER]: { color: 'yellow_100', text: 'Other' },
};

interface Props {
    projectType: ProjectTypes;
    onClick?: () => void;
    isSelected?: boolean;
    isDisabled?: boolean;
}

export const ProjectType = ({ projectType, onClick, isSelected, isDisabled }: Props) => {
    const { color, text } = projectTypeConfig[projectType];

    return (
        <Button
            styles={{ color, fontSize: 13, height: '32px', padding: '0 24px' }}
            isSelected={isSelected}
            isDisabled={isDisabled}
            onClick={onClick}
            text={text}
        />
    );
};
