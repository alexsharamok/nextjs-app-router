import type { CLIConfiguration } from '@uniformdev/cli/config';

const backupBase = './uniform-promote';

/**
 * Configuration for local development
 * This will synchronize the local files with the remote Uniform content
 * Be sure your Uniform sandbox is ready.
 */
const backupConfig: CLIConfiguration = {
  locales: {
    locales: [
      'en'
    ],
    defaultLocale: 'en'
  },
  serialization: {
    format: 'yaml',
    // 'mirror' mode synchronizes your local files with the remote Uniform content
    // It will create, update, and delete local files to match the remote state
    mode: 'createOrUpdate',
    directory: backupBase,
    entitiesConfig: {
      contentType: {
        push: {
          directory: `${backupBase}/contenttypes`
        }
      },
      dataType: {
        push: {
          directory: `${backupBase}/datatypes`
        }
      },
      component: {
        push: {
          directory: `${backupBase}/components`
        }
      }
    }
  }
} as CLIConfiguration;

// Using CommonJS export for better compatibility with Uniform CLI
module.exports = backupConfig;