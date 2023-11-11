import { Button } from 'components/common/Button';
import { Tag } from 'types/graphql';
import { getColor } from 'utils/colorUtils';

type Props = {
    projectTag: Tag;
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
    const { title, color } = projectTag;
    return (
        <Button
            styles={{ color: getColor(color), fontSize: 13, height: '32px', padding: styles?.padding }}
            isSelected={isSelected}
            isDisabled={isDisabled}
            onClick={onClick}
            text={title}
        />
    );
};
