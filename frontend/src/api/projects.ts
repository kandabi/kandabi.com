import axios from 'axios';
import { IProjectCard } from 'components/common/project/project-card';
import { NEXT_PUBLIC_API_URL } from 'utils/constants';

const projectsUrl = `${NEXT_PUBLIC_API_URL}/api/projects?populate=*&sort=order`;

class ProjectsApi {
   static async get(apiToken: string): Promise<IProjectCard[]> {
      const { data: response } = await axios.get(projectsUrl, {
         headers: { Authorization: `Bearer ${apiToken}` },
      });

      return response.data;
   }
}

export { ProjectsApi };
