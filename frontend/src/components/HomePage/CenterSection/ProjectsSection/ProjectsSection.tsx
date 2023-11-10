import { useState } from 'react';
import styled from 'styled-components';
import { ProjectContainer, ProjectSelection } from 'components/common/Project/ProjectCard';
import { ProjectTagContainer, ProjectTagProps } from 'components/common/Project/ProjectTag';
import { ProjectType, ProjectTypeContainer } from 'components/common/Project/ProjectType';
import { Section } from 'components/common/Section';
import { styles } from 'utils/styleUtils';
import { ProjectEntity } from 'types/graphql';

const TitleStyled = styled.h2`
    text-shadow: 2px 4px 4px rgba(0, 0, 0, 0.75);
    color: ${styles.color.WHITE_100};
    line-height: 1.16em;
    font-size: 40px;
    ${styles.breakpoint.md} {
        font-size: 52px;
    }
`;

const ProjectContainerStyled = styled.div`
    ${styles.flex.between}
    height: 640px;
    width: 100%;
    gap: 25px;
`;

const ProjectFiltersStyled = styled.div`
    ${styles.flex.start}
    gap: 40px;
`;

export type ProjectsSectionProps = {
    projects: ProjectEntity[];
    projectTags: ProjectTagProps[];
};

export const ProjectsSection = ({ projects, projectTags }: ProjectsSectionProps) => {
    const [activeProjectTags, setActiveProjectTags] = useState<ProjectTagProps[]>([]);
    const [activeProjectType, setActiveProjectType] = useState<ProjectType>();

    return (
        <Section gap='26px'>
            <TitleStyled>Projects</TitleStyled>
            <ProjectFiltersStyled>
                <ProjectTypeContainer
                    setActiveProjectType={setActiveProjectType}
                    activeProjectType={activeProjectType}
                />
                <ProjectTagContainer
                    setActiveProjectTags={setActiveProjectTags}
                    activeProjectTags={activeProjectTags}
                    projectTags={projectTags}
                />
            </ProjectFiltersStyled>
            <ProjectContainerStyled>
                <ProjectContainer projects={projects} />
                {/* {projectsData.projects?.data.length > 0 && <ProjectSelection project={projectsData[0]} />} */}
            </ProjectContainerStyled>
        </Section>
    );
};
