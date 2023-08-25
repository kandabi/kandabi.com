import axios from 'axios';
import { IProject } from 'types/project';
import { NEXT_PUBLIC_API_URL } from 'utils/constants';

const projectsUrl = `${NEXT_PUBLIC_API_URL}/api/projects?populate=*&sort=order`;

export class ProjectsApi {
    static async get(apiToken: string): Promise<IProject[]> {
        const { data: response } = await axios.get(projectsUrl, {
            headers: { Authorization: `Bearer ${apiToken}` },
        });

        return response.data;
    }
}
