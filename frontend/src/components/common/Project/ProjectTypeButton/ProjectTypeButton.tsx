import { Button } from 'components/common/Button';
import { ColorType } from 'utils/colors';

export enum ProjectType {
    WEB = 'WEB',
    GAME = 'GAME',
    OTHER = 'OTHER',
}

const projectTypeConfig: { [key in ProjectType]: { color: ColorType; text: string } } = {
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
