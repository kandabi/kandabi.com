import { Button } from 'components/common/Button';
import { ColorType } from 'utils/colorUtils';

export type ProjectTagProps = {
    id: number;
    attributes: {
        createdAt: Date;
        updatedAt: Date;
        publishedAt?: Date;
        title: string;
        color?: ColorType;
        order?: number;
    };
};

type Props = {
    projectTag: ProjectTagProps;
    onClick?: () => void;
    isSelected?: boolean;
    isDisabled?: boolean;
    styles?: {
        padding?: string;
    };
};

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
