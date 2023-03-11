import axios from 'axios';
import { IProjectTag } from 'components/common/project-tag/project-tag-button';
import { NEXT_PUBLIC_API_URL } from 'utils/constants';

const tagsUrl = `${NEXT_PUBLIC_API_URL}/api/tags?populate=*&sort=order`;

class TagsApi {
   static async get(apiToken: string): Promise<IProjectTag[]> {
      const { data: response } = await axios.get(tagsUrl, {
         headers: { Authorization: `Bearer ${apiToken}` },
      });

      return response.data;
   }
}

export { TagsApi };
