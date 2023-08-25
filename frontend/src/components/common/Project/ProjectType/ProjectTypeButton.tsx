import { ProjectType } from './ProjectType';
import { Button } from 'components/common/Button';
import { ColorType } from 'utils/colors';
import { MapConfig } from 'utils/types';

const projectTypeConfig: MapConfig<ProjectType, { color: ColorType; text: string }> = {
    [ProjectType.WEB]: { color: 'blue_100', text: 'Web' },
    [ProjectType.GAME]: { color: 'orange_100', text: 'Game' },
    [ProjectType.OTHER]: { color: 'yellow_100', text: 'Other' },
};

interface Props {
    projectType: ProjectType;
    onClick?: () => void;
    isSelected?: boolean;
    isDisabled?: boolean;
}

export const ProjectTypeButton = ({ projectType, onClick, isSelected, isDisabled }: Props) => {
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
