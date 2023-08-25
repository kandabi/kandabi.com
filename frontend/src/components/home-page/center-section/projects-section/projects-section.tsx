import { useState } from 'react';
import styled from 'styled-components';
import { styles } from 'styles';
import { ProjectItemSelection, ProjectItemsContainer } from 'components/common/project/project-item';
import { ProjectTagsContainer } from 'components/common/project/project-tag';
import { ProjectTypesContainer } from 'components/common/project/project-type';
import { Section } from 'components/common/section';
import { IProject, ProjectTagProps, ProjectTypes } from 'types/project';

const ProjectsStyled = styled.div`
    ${styles.flex.start}
    position: relative;
    top: 200px;
`;

const TitleStyled = styled.h2`
    text-shadow: 2px 4px 4px rgba(0, 0, 0, 0.75);
    color: ${styles.color.white_100};
    line-height: 1.16em;
    font-size: 40px;
    ${styles.breakpoint.md} {
        font-size: 52px;
    }
`;

const ProjectsContainerStyled = styled.div`
    ${styles.flex.between}
    height: 640px;
    width: 100%;
    gap: 25px;
`;

const ProjectFiltersStyled = styled.div`
    ${styles.flex.start}
    gap: 40px;
`;

export interface ProjectsSectionProps {
    projects: IProject[];
    projectTags: ProjectTagProps[];
}

export const ProjectsSection = ({ projects, projectTags }: ProjectsSectionProps) => {
    const [activeProjectTags, setActiveProjectTags] = useState<ProjectTagProps[]>([]);
    const [activeProjectType, setActiveProjectType] = useState<ProjectTypes>();

    return (
        <ProjectsStyled>
            <Section gap='26px'>
                <TitleStyled>Projects</TitleStyled>
                <ProjectFiltersStyled>
                    <ProjectTypesContainer
                        setActiveProjectType={setActiveProjectType}
                        activeProjectType={activeProjectType}
                    />
                    <ProjectTagsContainer
                        setActiveProjectTags={setActiveProjectTags}
                        activeProjectTags={activeProjectTags}
                        projectTags={projectTags}
                    />
                </ProjectFiltersStyled>
                <ProjectsContainerStyled>
                    <ProjectItemsContainer projects={projects} />
                    {projects.length > 0 && <ProjectItemSelection project={projects[0]} />}
                </ProjectsContainerStyled>
            </Section>
        </ProjectsStyled>
    );
};
