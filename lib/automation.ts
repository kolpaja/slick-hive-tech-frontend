import QueryString from 'qs';
import axios from 'axios';
import { url } from './api';

export const getAutoApps = async ({ page = 1, pageSize = 10 }: { page?: number; pageSize?: number }) => {
	const query = QueryString.stringify(
		{
			populate: {
				cover: {
					fields: ['url', 'formats', 'alternativeText'],
				},

				links: true,
			},

			pagination: {
				page,
				pageSize,
			},
		},
		{ encodeValuesOnly: true },
	);

	// console.log(`url`, `${url}/autos?${query}`);

	try {
		const res = await axios.get(`${url}/autos?${query}`);
		return res.data;
	} catch (e) {
		console.log('🚀 ~ fetch apps ~ e:', e);
	}
};
