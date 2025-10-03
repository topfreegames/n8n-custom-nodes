import { appStoreGeneralRequest } from "../../requests/general_request";
import { ROUTE_USER_BY_ID } from "../../requests/api_routes";

export async function node_remove_user(context: any, jwtToken: string) {
    const userId = context.getNodeParameter('userId', 0) as string;
    try {
        const response = await appStoreGeneralRequest({
            method: 'DELETE',
            endpoint: ROUTE_USER_BY_ID(userId),
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