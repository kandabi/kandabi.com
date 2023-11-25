import { Button } from 'components/common/Button';
import { Tag } from 'types/graphql';
import { getColor } from 'utils/colorUtils';

type Props = {
    projectTag: Tag;
    onClick?: () => void;
    isSelected?: boolean;
    isDisabled?: boolean;
    padding?: string;
};

export const ProjectTag = ({ projectTag, onClick, isSelected, isDisabled, padding = '0 16px' }: Props) => {
    const { title, color } = projectTag;
    return (
        <Button
            color={getColor(color)}
            fontSize={13}
            height={'32px'}
            padding={padding}
            isSelected={isSelected}
            isDisabled={isDisabled}
            onClick={onClick}
            text={title}
        />
    );
};
