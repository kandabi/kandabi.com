import axios from 'axios';
import { ProjectProps } from 'components/common/Project/ProjectCard';
import { NEXT_PUBLIC_API_URL } from 'utils/constantUtils';

const projectsUrl = `${NEXT_PUBLIC_API_URL}/api/projects?populate=*&sort=order`;

export class ProjectsApi {
    static async get(apiToken: string): Promise<ProjectProps[]> {
        const { data: response } = await axios.get(projectsUrl, {
            headers: { Authorization: `Bearer ${apiToken}` },
        });

        return response.data;
    }
}
