#!/usr/bin/env node
import { showWelcomeMessage, showError } from './cli/interface';
import { getProjectOptions } from './cli/prompts';

async function main() {
  try {
    showWelcomeMessage();
    const options = await getProjectOptions();
    console.log('\nSelected options:', options);
    // TODO: Add template generation here
  } catch (error) {
    showError('Failed to run DevKitSudo', error instanceof Error ? error.message : String(error));
    process.exit(1);
  }
}

main();
