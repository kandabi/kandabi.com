import { ProjectType } from './ProjectType';
import { Button } from 'components/common/Button';
import { Color } from 'utils/colorUtils';

const projectTypeConfig: Record<ProjectType, { color: Color; text: string }> = {
    [ProjectType.WEB]: { color: Color.blue_100, text: 'Web' },
    [ProjectType.GAME]: { color: Color.orange_100, text: 'Game' },
    [ProjectType.OTHER]: { color: Color.yellow_100, text: 'Other' },
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
