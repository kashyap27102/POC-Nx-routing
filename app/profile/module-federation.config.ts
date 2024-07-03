import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'profile',

  exposes: {
    './Module': './src/remote-entry.ts',
  },
};

export default config;
