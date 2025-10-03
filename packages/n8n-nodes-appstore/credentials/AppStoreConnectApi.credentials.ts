import {
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class AppStoreConnectApi implements ICredentialType {
	name = 'appStoreConnectApi';
	displayName = 'App Store Connect API';
	documentationUrl = 'https://developer.apple.com/documentation/appstoreconnectapi';
	properties: INodeProperties[] = [
		{
			displayName: 'Issuer ID',
			name: 'issuerId',
			type: 'string',
			default: '',
			required: true,
			description: 'Your issuer ID from the API Keys page in App Store Connect',
		},
		{
			displayName: 'Key ID',
			name: 'keyId',
			type: 'string',
			typeOptions: { password: true },
			default: '',
			required: true,
			description: 'Your private key ID from App Store Connect',
		},
		{
			displayName: 'Private Key',
			name: 'privateKey',
			type: 'string',
			typeOptions: {
				password: true,
				multiline: true,
			},
			default: '',
			required: true,
			description: 'Your private key content from the .p8 file (including -----BEGIN PRIVATE KEY----- and -----END PRIVATE KEY-----)',
		},
	];

	// Note: Test functionality handled by the node itself due to JWT token requirements
}
