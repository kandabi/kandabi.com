import styled from 'styled-components';
import { Image } from 'components/common/image';
import { getMediaItemUrl } from 'utils/getMediaItemUrl';
import { IProject } from 'types/project';

const ProjectItemStyled = styled.div`
   background: linear-gradient(180.1deg, rgba(33, 46, 82, 0.5) 0.09%, rgba(52, 73, 130, 0.5) 99.92%),
      linear-gradient(180.1deg, #142548 0.09%, #1d2949 99.92%);
   box-shadow: 2px 4px 5px 3px rgba(0, 0, 0, 0.25);
   border-radius: 0px 25px;
   overflow: hidden;
   cursor: pointer;
   height: 290px;
   width: 287px;
`;

interface Props {
   project: IProject;
}

const ProjectItem = ({ project }: Props) => {
   const { title, thumbnail } = project.attributes;
   return (
      <ProjectItemStyled>
         <Image src={getMediaItemUrl(thumbnail)} width='100%' height={165} alt='Project thumbnail' />
         {title}
      </ProjectItemStyled>
   );
};

export { ProjectItem };
