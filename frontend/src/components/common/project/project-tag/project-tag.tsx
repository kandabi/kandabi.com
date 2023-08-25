import { Button } from 'components/common/button';
import { ProjectTagProps } from 'types/project';

interface Props {
    projectTag: ProjectTagProps;
    onClick?: () => void;
    isSelected?: boolean;
    isDisabled?: boolean;
    styles?: {
        padding?: string;
    };
}

const ProjectTag = ({
    projectTag,
    onClick,
    isSelected,
    isDisabled,
    styles = {
        padding: '0 16px',
    },
}: Props) => {
    const { title, color } = projectTag.attributes;
    return (
        <Button
            styles={{ color, fontSize: 13, height: '32px', padding: styles?.padding }}
            isSelected={isSelected}
            isDisabled={isDisabled}
            onClick={onClick}
            text={title}
        />
    );
};

export { ProjectTag };
