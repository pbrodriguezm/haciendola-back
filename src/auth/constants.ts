import * as crypto from 'crypto';

const generateSecureSecret = (): string => {
  return crypto.randomBytes(64).toString('hex');
};

export const jwtConstants = {
  secret: generateSecureSecret(),
};
