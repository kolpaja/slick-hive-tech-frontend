import QueryString from 'qs';
import axios from 'axios';

export const url = process.env.NEXT_PUBLIC_IHSAN_API || 'https://hive-cms-production.up.railway.app/api';

export const getApps = async ({ page = 1, pageSize = 10 }: { page?: number; pageSize?: number }) => {
	const query = QueryString.stringify(
		{
			populate: {
				cover: {
					fields: ['url', 'formats', 'alternativeText'],
				},

				techs: {
					fields: ['name', 'icon'],
				},

				user_profile: {
					fields: ['full_name'],
				},

				links: true,
			},

			pagination: {
				page,
				pageSize,
			},

			sort: ['createdAt:desc'],
		},
		{ encodeValuesOnly: true },
	);

	try {
		const res = await axios.get(`${url}/apps?${query}`);
		return res.data;
	} catch (e) {
		console.log('🚀 ~ fetch apps ~ e:', e);
	}
};
