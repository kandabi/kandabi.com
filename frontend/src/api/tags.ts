import axios from 'axios';
import { ProjectTagProps } from 'components/common/Project/projectUtils';
import { NEXT_PUBLIC_API_URL } from 'utils/constantUtils';

const tagsUrl = `${NEXT_PUBLIC_API_URL}/api/tags?populate=*&sort=order`;

export class TagsApi {
    static async get(apiToken: string): Promise<ProjectTagProps[]> {
        const { data: response } = await axios.get(tagsUrl, {
            headers: { Authorization: `Bearer ${apiToken}` },
        });

        return response.data;
    }
}
