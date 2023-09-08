import { Button } from 'components/common/Button';
import { Color } from 'utils/colorUtils';

export interface ProjectTagProps {
    id?: number;
    attributes: {
        title: string;
        color: Color;
    };
}

interface Props {
    projectTag: ProjectTagProps;
    onClick?: () => void;
    isSelected?: boolean;
    isDisabled?: boolean;
    styles?: {
        padding?: string;
    };
}

export const ProjectTag = ({
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
