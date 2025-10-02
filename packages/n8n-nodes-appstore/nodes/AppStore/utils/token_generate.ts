import jwt from 'jsonwebtoken';

export function generateAppStoreJwt(issuerId: string, keyId: string, privateKey: string): string {
    const now = Math.floor(Date.now() / 1000);
    const payload = {
        iss: issuerId,
        iat: now,
        exp: now + 300,
        aud: 'appstoreconnect-v1',
    };

    let formattedKey = privateKey.trim();
    
    // Remove surrounding quotes if they exist
    if (formattedKey.startsWith('"') && formattedKey.endsWith('"')) {
        formattedKey = formattedKey.slice(1, -1);
    } else if (formattedKey.startsWith("'") && formattedKey.endsWith("'")) {
        formattedKey = formattedKey.slice(1, -1);
    }
    
    // Replace literal \n with actual newlines
    formattedKey = formattedKey.replace(/\\n/g, '\n');
    
    // Ensure proper PEM format with line breaks
    if (!formattedKey.includes('\n')) {
        // If it's all on one line, try to format it properly
        const lines = formattedKey.split('-----');
        if (lines.length >= 3) {
            const header = '-----BEGIN PRIVATE KEY-----';
            const footer = '-----END PRIVATE KEY-----';
            const keyContent = lines[2].replace(/\s/g, ''); // Remove any whitespace
            
            // Split into 64-character lines
            const keyLines = [];
            for (let i = 0; i < keyContent.length; i += 64) {
                keyLines.push(keyContent.slice(i, i + 64));
            }
            
            formattedKey = header + '\n' + keyLines.join('\n') + '\n' + footer;
        }
    }
    
    // Validate the key format
    if (!formattedKey.startsWith('-----BEGIN PRIVATE KEY-----')) {
        throw new Error('Private key must start with -----BEGIN PRIVATE KEY-----');
    }
    if (!formattedKey.endsWith('-----END PRIVATE KEY-----')) {
        throw new Error('Private key must end with -----END PRIVATE KEY-----');
    }
    if (!formattedKey.includes('\n')) {
        throw new Error('Private key must contain line breaks');
    }
    
    try {
        return jwt.sign(payload, formattedKey, {
            algorithm: 'ES256',
            keyid: keyId,
        });
    } catch (error) {
        console.error('JWT signing failed:', error);
        console.error('Key structure:');
        console.error('- Starts with BEGIN:', formattedKey.startsWith('-----BEGIN PRIVATE KEY-----'));
        console.error('- Ends with END:', formattedKey.endsWith('-----END PRIVATE KEY-----'));
        console.error('- Has newlines:', formattedKey.includes('\n'));
        console.error('- Length:', formattedKey.length);
        throw new Error(`JWT signing failed: ${error.message}`);
    }
} 