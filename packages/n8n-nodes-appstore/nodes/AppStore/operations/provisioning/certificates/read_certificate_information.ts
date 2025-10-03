import { ROUTE_CERTIFICATE_BY_ID } from "../../../requests/api_routes";
import { appStoreGeneralRequest } from "../../../requests/general_request";


export async function node_read_certificate_information(context: any, jwtToken: string) {
	const certificateId = context.getNodeParameter('certificateId', 0) as string;
	try {
			const response = await appStoreGeneralRequest({
					method: 'GET',
					endpoint: ROUTE_CERTIFICATE_BY_ID(certificateId),
					jwtToken,
					helpers: context.helpers,
			});
			if (response.data) {
					return response.data;
			} else {
					return response;
			}
	} catch (error: any) {
			throw new Error(`AppStore API request failed: ${JSON.stringify(error?.response?.data?.errors?.[0] ?? {})}`);
	}
}