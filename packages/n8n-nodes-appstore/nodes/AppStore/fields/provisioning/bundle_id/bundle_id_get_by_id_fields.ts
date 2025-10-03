import { NodePropertyTypes } from "n8n-workflow";
import { PROVISIONING_BUNDLE_ID_METHODS } from "../../../utils/constants/methods_constants";

export let BUNDLE_ID_FIELD = {
	displayName: 'Bundle ID',
	name: 'bundleId',
	type: 'string' as NodePropertyTypes,
	required: true,
	default: '',
	description: 'The ID of the bundle to retrieve, remove or modify',
	displayOptions: {
			show: {
					operation: [
						PROVISIONING_BUNDLE_ID_METHODS.READ_BUNDLE_ID_INFORMATION,
						PROVISIONING_BUNDLE_ID_METHODS.DELETE_BUNDLE_ID,
						PROVISIONING_BUNDLE_ID_METHODS.LIST_ALL_CAPABILITIES_FOR_BUNDLE_ID,
						PROVISIONING_BUNDLE_ID_METHODS.LIST_ALL_PROFILES_FOR_BUNDLE_ID,
						PROVISIONING_BUNDLE_ID_METHODS.GET_BUNDLEID_APP_RELATIONSHIP,
						PROVISIONING_BUNDLE_ID_METHODS.GET_BUNDLEID_CAPABILITIES_RELATIONSHIP,
						PROVISIONING_BUNDLE_ID_METHODS.GET_BUNDLEID_PROFILES_RELATIONSHIP,
						PROVISIONING_BUNDLE_ID_METHODS.MODIFY_BUNDLE_ID
					],
			},
	},
}
