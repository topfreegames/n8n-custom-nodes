import {
    PROVISIONING_BUNDLE_ID_CAPABILITIES_METHODS,
    USER_INVITATIONS_METHODS,
    USER_METHODS,
    SANDBOX_TESTERS_METHODS,
    DEVICE_METHODS,
    PROVISIONING_BUNDLE_ID_METHODS,
    PROVISIONING_CERTIFICATES_METHODS,
    PROVISIONING_PROFILES_METHODS,
		PROVISIONING_MERCHANT_IDS_METHODS,
		PROVISIONING_PASSTYPE_IDS_METHODS,
        APP_METHODS
} from "./methods_constants";

export let USERS_OPERATIONS = [
    {
        name: 'List Users',
        value: USER_METHODS.LIST_USERS,
        description: 'Get a list of users',
        group: ['Users'],
        action: 'List Users',
    },
    {
        name: 'Get User By Email',
        value: USER_METHODS.GET_USER_BY_EMAIL,
        description: 'Get a user by their email',
        group: ['Users'],
        action: 'Get User By Email',
    },
    {
        name: 'Read User Information',
        value: USER_METHODS.READ_USER_INFORMATION,
        description: 'Get a user by their ID',
        group: ['Users'],
        action: 'Read User Information',
    },
    {
        name: 'Modify a User Account',
        value: USER_METHODS.MODIFY_A_USER_ACCOUNT,
        description: 'Modify a user account by ID',
        group: ['Users'],
        action: 'Modify a User Account',
    },
    {
        name: 'Remove a User Account',
        value: USER_METHODS.REMOVE_A_USER_ACCOUNT,
        description: 'Remove a user account by ID',
        group: ['Users'],
        action: 'Remove a User Account',
    },
    {
        name: 'List Visible Apps for User',
        value: USER_METHODS.LIST_ALL_APPS_VISIBLE_TO_A_USER,
        description: 'Get a list of apps that a user can view',
        group: ['Users'],
    },
    {
        name: 'Get All Visible App Resource IDs for a User',
        value: USER_METHODS.GET_ALL_VISIBLE_APP_RESOURCE_IDS_FOR_A_USER,
        description: 'Get all visible app resource IDs for a user by ID',
        group: ['Users'],
        action: 'List Visible Apps for User',
    },
    {
        name: 'Add Visible Apps to a User',
        value: USER_METHODS.ADD_VISIBLE_APPS_TO_A_USER,
        description: 'Add visible apps to a user by ID',
        group: ['Users'],
        action: 'Add Visible Apps to a User',
    },
    {
        name: 'Replace Visible Apps for a User',
        value: USER_METHODS.REPLACE_THE_LIST_OF_VISIBLE_APPS_FOR_A_USER,
        description: 'Replace the list of visible apps for a user',
        group: ['Users'],
        action: 'Replace Visible Apps for a User',
    },
    {
        name: 'Remove Visible Apps From a User Account',
        value: USER_METHODS.REMOVE_VISIBLE_APPS_FROM_A_USER,
        description: 'Useful if you want to revoke user access to some app',
        group: ['Users'],
        action: 'Remove Visible Apps from a User',
    }
];

export const APPS_OPERATIONS = [
    {
        name: 'Get All Apps',
        value: APP_METHODS.GET_ALL_APPS,
        description: 'Get a list of all apps',
        group: ['Apps'],
    },
    {
        name: 'Get Apps by List of Names',
        value: APP_METHODS.GET_APPS_BY_LIST_OF_NAMES,
        description: 'Get a list of apps by their names',
        group: ['Apps'],
    }
]

export const USER_INVITATIONS_OPERATIONS = [
    {
        name: 'List Invited Users',
        value: USER_INVITATIONS_METHODS.LIST_INVITED_USERS,
        description: 'Get a list of invited users',
        group: ['User Invitations'],
        action: 'List Invited Users',
    },
    {
        name: 'Get User Invitation by Email',
        value: USER_INVITATIONS_METHODS.READ_USER_INVITATION_BY_EMAIL,
        description: 'Get a user invitation based on email',
        group: ['User Invitations'],
        action: 'Get User Invitation by Email'
    },
    {
        name: 'Read User Invitation Information',
        value: USER_INVITATIONS_METHODS.READ_USER_INVITATION_INFORMATION,
        description: 'Get information about a pending invitation to join your team',
        group: ['User Invitations'],
        action: 'Read User Invitation Information',
    },
    {
        name: 'Invite a User',
        value: USER_INVITATIONS_METHODS.INVITE_A_USER,
        description: 'Invite a user with assigned user roles to join your team',
        group: ['User Invitations'],
        action: 'Invite a User',
    },
    {
        name: 'List Visible Apps for Invited User',
        value: USER_INVITATIONS_METHODS.LIST_ALL_APPS_VISIBLE_TO_AN_INVITED_USER,
        description: 'List all apps visible to an invited user',
        group: ['User Invitations'],
        action: 'List Visible Apps for Invited User',
    },

    {
        name: 'List Visible App Relationships for Invited User',
        value: USER_INVITATIONS_METHODS.LIST_VISIBLE_APP_RELATIONSHIPS_FOR_INVITED_USER,
        description: 'List app relationship links for a user invitation',
    },
    {
        name: 'Cancel User Invitation',
        value: USER_INVITATIONS_METHODS.CANCEL_USER_INVITATION,
        description: 'Cancel a pending user invitation',
        group: ['User Invitations'],
        action: 'Cancel User Invitation',
    },
];

export const SANDBOX_TESTERS_OPERATIONS = [
    {
        name: 'List Sandbox Testers',
        value: SANDBOX_TESTERS_METHODS.LIST_SANDBOX_TESTERS,
        description: 'Get a list of Sandbox Testers for your team',
        group: ['Sandbox Testers'],
        action: 'List Sandbox Testers',
    },
    {
        name: 'Modify a Sandbox Tester',
        value: SANDBOX_TESTERS_METHODS.MODIFY_A_SANDBOX_TESTER,
        description: 'Change the subscription renewal time rate, set interrupted purchases or change territory of Sandbox Apple Account',
        group: ['Sandbox Testers'],
        action: 'Modify a Sandbox Tester',
    },
    {
        name: 'Clear Purchase History for a Sandbox Tester',
        value: SANDBOX_TESTERS_METHODS.CLEAR_PURCHASE_HISTORY_FOR_A_SANDBOX_TESTER,
        description: 'Remove purchase history from a Sandbox Apple Account',
        group: ['Sandbox Testers'],
    }
];

export const PROVISIONING_BUNDLE_ID_OPERATIONS = [
		{
			name: 'List Bundle IDs',
			value: PROVISIONING_BUNDLE_ID_METHODS.LIST_BUNDLE_IDS,
			description: 'List all bundle IDs',
			group: ['Bundle ID'],
			action: 'List Bundle IDs',
		},
    {
        name: 'Register a Bundle ID',
        value: PROVISIONING_BUNDLE_ID_METHODS.REGISTER_NEW_BUNDLE_ID,
        description: 'Register a new bundle ID',
        group: ['Bundle ID'],
				action: 'Register a Bundle ID',
    },
		{
			name: 'Read Bundle ID Information',
			value: PROVISIONING_BUNDLE_ID_METHODS.READ_BUNDLE_ID_INFORMATION,
			description: 'Read a bundle ID information',
			group: ['Bundle ID'],
			action: 'Read Bundle ID Information',
		},
		{
			name: 'Delete Bundle ID',
			value: PROVISIONING_BUNDLE_ID_METHODS.DELETE_BUNDLE_ID,
			description: 'Delete a bundle ID',
			group: ['Bundle ID'],
			action: 'Delete Bundle ID',
		},
		{
			name: 'List Profiles for a Bundle ID',
			value: PROVISIONING_BUNDLE_ID_METHODS.LIST_ALL_PROFILES_FOR_BUNDLE_ID,
			description: 'List all profiles for a bundle ID',
			group: ['Bundle ID'],
			action: 'List All Profiles for a Bundle ID',
		},
		{
			name: 'List Capabilities for a Bundle ID',
			value: PROVISIONING_BUNDLE_ID_METHODS.LIST_ALL_CAPABILITIES_FOR_BUNDLE_ID,
			description: 'List all capabilities for a bundle ID',
			group: ['Bundle ID'],
			action: 'List All Capabilities for a Bundle ID',
		},
		{
			name: 'Get Bundle ID Relationship with Apps',
			value: PROVISIONING_BUNDLE_ID_METHODS.GET_BUNDLEID_APP_RELATIONSHIP,
			description: 'Get a bundle ID relationship with apps',
			group: ['Bundle ID'],
			action: 'Get Bundle ID Relationship with Apps',
		},
		{
			name: 'Get Bundle ID Relationship with Capabilities',
			value: PROVISIONING_BUNDLE_ID_METHODS.GET_BUNDLEID_CAPABILITIES_RELATIONSHIP,
			description: 'Get a bundle ID relationship with capabilities',
			group: ['Bundle ID'],
			action: 'Get Bundle ID Relationship with Capabilities',
		},
		{
			name: 'Get Bundle ID Relationship with Profiles',
			value: PROVISIONING_BUNDLE_ID_METHODS.GET_BUNDLEID_PROFILES_RELATIONSHIP,
			description: 'Get a bundle ID relationship with profiles',
			group: ['Bundle ID'],
			action: 'Get Bundle ID Relationship with Profiles',
		},
        {
            name: "Modify a Bundle ID",
            value: PROVISIONING_BUNDLE_ID_METHODS.MODIFY_BUNDLE_ID,
            description: 'Update a specific bundle ID’s name',
            group: ['Bundle ID'],
            action: 'Modify a Bundle ID'
        }
]

export const PROVISIONING_BUNDLE_ID_CAPABILITIES_OPERATIONS = [
    {
        name: 'Disable a Capability',
        value: PROVISIONING_BUNDLE_ID_CAPABILITIES_METHODS.DISABLE_CAPABILITY,
        description: 'Disable a capability of a bundle ID',
        group: ['Bundle ID Capabilities'],
        action: 'Disable a Capability',
    },
    {
        name: 'Enable a Capability',
        value: PROVISIONING_BUNDLE_ID_CAPABILITIES_METHODS.ENABLE_CAPABILITY,
        description: 'Enable a capability of a bundle ID',
        group: ['Bundle ID Capabilities'],
        action: 'Enable a Capability',
    },
    {
        name: 'Modify a Capability',
        value: PROVISIONING_BUNDLE_ID_CAPABILITIES_METHODS.MODIFY_CAPABILITY,
        description: 'Modify a capability of a bundle ID',
        group: ['Bundle ID Capabilities'],
        action: 'Modify a Capability',
    }
];

export const PROVISIONING_CERTIFICATES_OPERATIONS = [
    {
        name: 'Create Certificate',
        value: PROVISIONING_CERTIFICATES_METHODS.CREATE_CERTIFICATE,
        description: 'Create a new certificate using a CSR',
        group: ['Certificates'],
        action: 'Create Certificate',
    },
    {
        name: 'Modify Certificate',
        value: PROVISIONING_CERTIFICATES_METHODS.MODIFY_CERTIFICATE,
        description: 'Update the activation status of an existing certificate',
        group: ['Certificates'],
        action: 'Modify Certificate',
    },
	{
		name: 'List Certificates',
		value: PROVISIONING_CERTIFICATES_METHODS.LIST_AND_DOWNLOAD_CERTIFICATES,
		description: 'List all certificates',
		group: ['Certificates'],
		action: 'List Certificates',
	},
	{
		name: 'Read Certificate Information',
		value: PROVISIONING_CERTIFICATES_METHODS.READ_AND_DOWNLOAD_CERTIFICATE_INFORMATION,
		description: 'Read a certificate information',
		group: ['Certificates'],
		action: 'Read Certificate Information',
	},
	{
		name: 'List Pass Type IDs for a Certificate',
		value: PROVISIONING_CERTIFICATES_METHODS.LIST_PASSTYPEID_IDS_FOR_CERTIFICATE,
		description: 'List all pass type IDs for a certificate',
		group: ['Certificates'],
		action: 'List Pass Type IDs for a Certificate',
	},
	{
		name: 'Get Pass Type ID Relationship for a Certificate',
		value: PROVISIONING_CERTIFICATES_METHODS.GET_CERTIFICATE_PASSTYPEID_RELATIONSHIP,
		description: 'Get a pass type ID relationship for a certificate',
		group: ['Certificates'],
		action: 'Get Pass Type ID Relationship for a Certificate',
	},
	{
		name: 'Revoke a Certificate',
		value: PROVISIONING_CERTIFICATES_METHODS.REVOKE_CERTIFICATE,
		description: 'Revoke a certificate by ID',
		group: ['Certificates'],
		action: 'Revoke a Certificate',
	}
]

export const DEVICES_OPERATIONS = [
	{
		name: 'Register a Device',
		value: DEVICE_METHODS.REGISTER_DEVICE,
		description: 'Register a new device to the App Store Connect account',
        group: ['Devices'],
        action: 'Register Device',
	},

	{
		name: 'List Devices',
		value: DEVICE_METHODS.LIST_DEVICES,
		description: 'List registered devices',
        group: ['Devices'],
        action: 'List Devices',
	},
    {
        name: 'Read Device Information',
        value: DEVICE_METHODS.READ_DEVICE,
        description: 'Read information about a registered device',
        group: ['Devices'],
        action: 'Read Device Information'
    },
    { name: 'Modify a Registered Device',
      value: DEVICE_METHODS.MODIFY_DEVICE,
      description: 'Modify a registered device by ID',
      group: ['Devices'],
      action: 'Modify a Registered Device'
    },

];

export const PROVISIONING_PROFILES_OPERATIONS = [
    {
        name: 'Create a Profile',
        value: PROVISIONING_PROFILES_METHODS.CREATE_PROFILE,
        description: 'Create a new provisioning profile',
        group: ['Profiles'],
        action: 'Create Profile',
    },
    {
        name: 'Delete a Profile',
        value: PROVISIONING_PROFILES_METHODS.DELETE_PROFILE,
        description: 'Delete an existing provisioning profile',
        group: ['Profiles'],
        action: 'Delete Profile',
    },
    {
        name: 'List and Download Profiles',
        value: PROVISIONING_PROFILES_METHODS.LIST_AND_DOWNLOAD_PROFILES,
        description: 'List all provisioning profiles and optionally download their binary data',
        group: ['Profiles'],
        action: 'List Profiles',
    },
    {
        name: 'Read and Download Profile Information',
        value: PROVISIONING_PROFILES_METHODS.READ_AND_DOWNLOAD_PROFILE_INFORMATION,
        description: 'Read metadata for a single provisioning profile and optionally download its binary data',
        group: ['Profiles'],
        action: 'Read Profile Information',
    },
    {
        name: 'Read the Bundle ID in a Profile',
        value: PROVISIONING_PROFILES_METHODS.READ_BUNDLE_ID_IN_PROFILE,
        description: 'Fetch the Bundle ID relationship or resource for a given provisioning profile',
        group: ['Profiles'],
        action: 'Read Bundle ID',
    },
		{
			name: 'Get Bundle ID Relationship with Profiles',
			value: PROVISIONING_BUNDLE_ID_METHODS.GET_BUNDLEID_PROFILES_RELATIONSHIP,
			description: 'Get a bundle ID relationship with profiles',
			group: ['Bundle ID'],
			action: 'Get Bundle ID Relationship with Profiles',
		},
		{
			name: 'List Certificates for a Profile',
			value: PROVISIONING_PROFILES_METHODS.LIST_PROFILE_CERTIFICATES,
			description: 'List all certificates for a profile',
			group: ['Profiles'],
			action: 'List Certificates for a Profile',
		},
		{
			name: 'Get Certificates Relationship with Profiles',
			value: PROVISIONING_PROFILES_METHODS.GET_PROFILE_CERTIFICATES_RELATIONSHIP,
			description: 'Get a certificates relationship with profiles',
			group: ['Profiles'],
			action: 'Get Certificates Relationship with Profiles',
		},
		{
			name: 'List Devices for a Profile',
			value: PROVISIONING_PROFILES_METHODS.LIST_PROFILE_DEVICES,
			description: 'List all devices for a profile',
			group: ['Profiles'],
			action: 'List Devices for a Profile',
		},
		{
			name: 'Get Devices Relationship with Profiles',
			value: PROVISIONING_PROFILES_METHODS.GET_PROFILE_DEVICES_RELATIONSHIP,
			description: 'Get a devices relationship with profiles',
			group: ['Profiles'],
			action: 'Get Devices Relationship with Profiles',
		},
];

export const PROVISIONING_MERCHANT_IDS_OPERATIONS = [
    {
        name: 'Create Merchant ID',
        value: PROVISIONING_MERCHANT_IDS_METHODS.CREATE_MERCHANT_ID,
        description: 'Creates a Merchant ID',
        group: ['Merchant IDs'],
        action: 'Create Merchant ID'
    },
	{
		name: 'List Merchant IDs',
		value: PROVISIONING_MERCHANT_IDS_METHODS.LIST_MERCHANT_IDS,
		description: 'List all merchant IDs',
		group: ['Merchant IDs'],
		action: 'List Merchant IDs',
	},
	{
		name: 'Read Merchant ID Details',
		value: PROVISIONING_MERCHANT_IDS_METHODS.READ_MERCHANT_ID_DETAILS,
		description: 'Read details about a merchant ID',
		group: ['Merchant IDs'],
		action: 'Read Merchant ID Details',
	},
	{
		name: 'List Certificates for a Merchant ID',
		value: PROVISIONING_MERCHANT_IDS_METHODS.LIST_CERTIFICATES_FOR_MERCHANT_ID,
		description: 'List all certificates for a merchant ID',
		group: ['Merchant IDs'],
		action: 'List Certificates for a Merchant ID',
	},
    {
        name: 'Modify Merchant ID',
		value: PROVISIONING_MERCHANT_IDS_METHODS.MODIFY_MERCHANT_IDS,
		description: 'Update a specific merchant ID',
		group: ['Merchant IDs'],
		action: 'Modify Merchant ID',
    },
	{
		name: 'Get Certificates Relationship for a Merchant ID',
		value: PROVISIONING_MERCHANT_IDS_METHODS.GET_MERCHANTID_CERTIFICATES_RELATIONSHIP,
		description: 'Get a certificates relationship for a merchant ID',
		group: ['Merchant IDs'],
		action: 'Get Certificates Relationship for a Merchant ID',
	},
	{
		name: 'Delete Merchant ID',
		value: PROVISIONING_MERCHANT_IDS_METHODS.DELETE_MERCHANT_ID,
		description: 'Delete a merchant ID',
		group: ['Merchant IDs'],
		action: 'Delete Merchant ID',
	},
]

export const PROVISIONING_PASSTYPE_IDS_OPERATIONS = [
	{
		name: 'List PassTypeID IDs by Certificate',
		value: PROVISIONING_PASSTYPE_IDS_METHODS.LIST_BY_CERT,
		group: ['Pass Type IDs'],
		action: 'List PassTypeID Ids by Certificate'
	},
	{
		name : 'Get Certificate PassTypeID Relationship',
		value: PROVISIONING_PASSTYPE_IDS_METHODS.GET_RELATION_BY_CERT,
		description: 'Get the relationship between a certificate and a PassTypeID',
		group: ['Pass Type IDs'],
		action: 'Get Certificate PassTypeID Relationship',
	},
	{
		name: 'List Pass Type IDs',
		value: PROVISIONING_PASSTYPE_IDS_METHODS.LIST_ALL_PASS_TYPE_IDS,
		description: 'List all Pass Type IDs',
		group: ['Pass Type IDs'],
		action: 'List Pass Type Ids'
	},
	{
		name: 'Read Pass Type ID Information',
		value: PROVISIONING_PASSTYPE_IDS_METHODS.READ_PASSTYPEID_INFORMATION,
		description: 'Read information about a pass type ID',
		group: ['Pass Type IDs'],
		action: 'Read Pass Type ID Information',
	},
	{
		name: 'List Certificates for a Pass Type ID',
		value: PROVISIONING_PASSTYPE_IDS_METHODS.LIST_CERTIFICATES_FOR_PASSTYPEID,
		description: 'List all certificates for a pass type ID',
		group: ['Pass Type IDs'],
		action: 'List Certificates for a Pass Type ID',
	},
	{
		name: 'Get Certificates Relationship for a Pass Type ID',
		value: PROVISIONING_PASSTYPE_IDS_METHODS.GET_PASSTYPEID_CERTIFICATES_RELATIONSHIP,
		description: 'Get a certificates relationship for a pass type ID',
		group: ['Pass Type IDs'],
		action: 'Get Certificates Relationship for a Pass Type ID',

	},
	{
		name: 'Create a Pass Type ID',
		value: PROVISIONING_PASSTYPE_IDS_METHODS.CREATE_PASSTYPEID,
		description: 'Create a new pass type ID',
		group: ['Pass Type IDs'],
		action: 'Create a Pass Type ID',
	},
    {
        name: 'Modify the Pass Type ID Name',
		value: PROVISIONING_PASSTYPE_IDS_METHODS.MODIFY_PASSTYPEID,
		description: 'Modifies the Pass Type ID name',
		group: ['Pass Type IDs'],
		action: 'Modify the Pass Type ID name',
    },
	{
		name: 'Delete Pass Type ID',
		value: PROVISIONING_PASSTYPE_IDS_METHODS.DELETE_PASSTYPEID,
		description: 'Delete a pass type ID',
		group: ['Pass Type IDs'],
		action: 'Delete Pass Type ID',
	},
]