import { NodePropertyTypes } from "n8n-workflow";
import { USER_METHODS } from "../../utils/constants/methods_constants";

export let INCLUDE_VISIBLE_APPS_FIELD = {
    displayName: 'Include Visible Apps?',
    name: 'allAppsVisible',
    type: 'boolean' as NodePropertyTypes,
    default: false,
    description: 'Should be true if you want to include all visible apps',
    displayOptions: {
        show: {
            operation: [USER_METHODS.READ_USER_INFORMATION],
        },
    },
};