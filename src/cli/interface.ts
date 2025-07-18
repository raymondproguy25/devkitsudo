import chalk from 'chalk';

export function showWelcomeMessage() {
  console.log(chalk.green.bold('=== DevKitSudo ==='));
  console.log(chalk.blue('A powerful project scaffolding tool\n'));
}

export function showSuccess(message: string) {
  console.log(chalk.green(`✓ ${message}`));
}

export function showError(message: string, details?: string) {
  console.error(chalk.red(`✗ ${message}`));
  if (details) console.error(chalk.gray(details));
}

export function showWarning(message: string) {
  console.warn(chalk.yellow(`⚠ ${message}`));
}
