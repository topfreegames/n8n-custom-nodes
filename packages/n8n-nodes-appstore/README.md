# n8n-nodes-appstore

This is an n8n community node. It lets you use Apple App Store Connect API in your n8n workflows.

Apple App Store Connect API allows you to manage your apps, users, certificates, devices, and other resources programmatically. This node provides comprehensive access to the App Store Connect API endpoints.

[n8n](https://n8n.io/) is a [fair-code licensed](https://docs.n8n.io/reference/license/) workflow automation platform.

[Installation](#installation)  
[Operations](#operations)  
[Credentials](#credentials)  
[Compatibility](#compatibility)  
[Usage](#usage)  
[Resources](#resources)  

## Installation

Follow the [installation guide](https://docs.n8n.io/integrations/community-nodes/installation/) in the n8n community nodes documentation.

## Operations

This node supports operations across multiple App Store Connect API resources:

### Apps
- Get all apps
- Get apps by list of names

### Users
- List users
- Get user by email
- Read user information
- Modify user account
- Remove user account
- List all apps visible to a user
- Get all visible app resource IDs for a user
- Add visible apps to a user
- Replace the list of visible apps for a user
- Remove visible apps from a user

### User Invitations
- List invited users
- Read user invitation information
- Read user invitation by email
- Invite a user
- List all apps visible to an invited user
- List visible app relationships for invited user
- Cancel user invitation

### Sandbox Testers
- List sandbox testers
- Modify a sandbox tester
- Clear purchase history for a sandbox tester

### Bundle IDs
- List bundle IDs
- Register new bundle ID
- Read bundle ID information
- Delete bundle ID
- Modify bundle ID
- List all capabilities for bundle ID
- Get bundle ID app relationship
- Get bundle ID capabilities relationship
- Get bundle ID profiles relationship

### Bundle ID Capabilities
- Disable capability
- Enable capability
- Modify capability

### Certificates
- Create certificate
- Modify certificate
- List and download certificates
- Read and download certificate information
- List pass type IDs for certificate
- Get certificate pass type ID relationship
- Revoke certificate

### Devices
- Register device
- List devices
- Read device
- Modify device

### Profiles
- List and download profiles
- Read and download profile information
- Read bundle ID in profile
- Get profile bundle ID relationship
- Create profile
- List profile certificates
- Get profile certificates relationship
- List profile devices
- Get profile devices relationship

### Merchant IDs
- Create merchant ID
- List merchant IDs
- Read merchant ID details
- Delete merchant ID
- List certificates for merchant ID
- Get merchant ID certificates relationship
- Modify merchant IDs

### Pass Type IDs
- Read pass type ID information
- Delete pass type ID
- List certificates for pass type ID
- Get pass type ID certificates relationship
- List by certificate
- Get relation by certificate
- List all pass type IDs
- Create pass type ID
- Modify pass type ID

## Credentials

To use this node, you need to authenticate with the Apple App Store Connect API using JWT tokens. You'll need:

1. **Issuer ID**: Your issuer ID from the API Keys page in App Store Connect
2. **Key ID**: Your private key ID from App Store Connect  
3. **Private Key**: Your private key content from the .p8 file (including the BEGIN and END markers)

### Setting up credentials:

1. Log in to [App Store Connect](https://appstoreconnect.apple.com/)
2. Go to Users and Access > Keys
3. Create a new API key or use an existing one
4. Download the .p8 private key file
5. Note down the Key ID and Issuer ID
6. In n8n, create new credentials using the "App Store Connect API" credential type
7. Fill in the Issuer ID, Key ID, and paste the entire contents of the .p8 file into the Private Key field

## Compatibility

- Minimum n8n version: 1.82.0
- Node.js version: >=20.15
- Tested with n8n versions 1.82.0+

## Usage

This node is designed for developers and teams who need to automate App Store Connect operations. Common use cases include:

- Automated user management and access control
- Certificate and provisioning profile management
- Device registration and management
- App metadata and relationship management
- Sandbox testing automation

Each operation provides detailed field options and supports the full range of parameters available in the App Store Connect API.

## Resources

* [n8n community nodes documentation](https://docs.n8n.io/integrations/#community-nodes)
* [Apple App Store Connect API Documentation](https://developer.apple.com/documentation/appstoreconnectapi)
* [App Store Connect API Keys](https://developer.apple.com/documentation/appstoreconnectapi/creating_api_keys_for_app_store_connect_api)