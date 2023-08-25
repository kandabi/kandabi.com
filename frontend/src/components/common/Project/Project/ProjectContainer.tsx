import styled from 'styled-components';
import { Project } from './Project';
import { ProjectProps } from 'components/common/Project/projectUtils';

const ContainerStyled = styled.div`
    position: relative;
    height: 100%;
    width: 68%;
    left: -15px;
    top: -10px;
`;

const ItemsContainerStyled = styled.div`
    grid-template-columns: repeat(3, 30%);
    justify-content: space-between;
    border-radius: 0px 25px;
    padding-right: 5px;
    padding-left: 10px;
    padding-top: 10px;
    perspective: 300px;
    overflow-y: scroll;
    position: relative;
    display: grid;
    height: 100%;
    gap: 25px 0;

    &::-webkit-scrollbar-track {
        margin-top: 8px;
    }
`;

const InnerShadowStyled = styled.div`
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 85%, rgba(0, 0, 0, 0.08) 100%);
    pointer-events: none;
    position: absolute;
    height: 100%;
    width: 100%;
    inset: 0px;
`;

interface Props {
    projects: ProjectProps[];
}

export const ProjectContainer = ({ projects }: Props) => {
    return (
        <ContainerStyled>
            <ItemsContainerStyled>
                {projects.map(project => (
                    <Project project={project} key={project.id} />
                ))}
                {projects.map(project => (
                    <Project project={project} key={project.id} />
                ))}
                {projects.map(project => (
                    <Project project={project} key={project.id} />
                ))}
                {projects.map(project => (
                    <Project project={project} key={project.id} />
                ))}
                {projects.map(project => (
                    <Project project={project} key={project.id} />
                ))}
                {projects.map(project => (
                    <Project project={project} key={project.id} />
                ))}
                {projects.map(project => (
                    <Project project={project} key={project.id} />
                ))}
                {projects.map(project => (
                    <Project project={project} key={project.id} />
                ))}
            </ItemsContainerStyled>
            <InnerShadowStyled />
        </ContainerStyled>
    );
};
