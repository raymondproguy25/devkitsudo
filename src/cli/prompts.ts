import inquirer from 'inquirer';
import chalk from 'chalk';

interface ProjectOptions {
  projectName: string;
  description: string;
  author: string;
  templateType: 'basic' | 'advanced' | 'custom';
  license: string;
}

export async function getProjectOptions(): Promise<ProjectOptions> {
  console.log(chalk.blue.bold('\nDevKitSudo Project Setup\n'));
  
  const questions: inquirer.QuestionCollection = [
    {
      type: 'input',
      name: 'projectName',
      message: 'Project name:',
      validate: (input: string) => 
        /^[a-z0-9-]+$/i.test(input) || 
        chalk.red('Name must be alphanumeric with hyphens only')
    },
    {
      type: 'input',
      name: 'description',
      message: 'Project description:',
      validate: (input: string) =>
        input.trim().length > 0 ||
        chalk.red('Description cannot be empty')
    },
    {
      type: 'input',
      name: 'author',
      message: 'Author:',
      default: () => {
        try {
          return require('os').userInfo().username;
        } catch {
          return '';
        }
      }
    },
    {
      type: 'list',
      name: 'templateType',
      message: 'Template type:',
      choices: [
        { name: chalk.blue('Basic (HTML/CSS/JS)'), value: 'basic' },
        { name: chalk.magenta('Advanced (React/Vite)'), value: 'advanced' },
        { name: chalk.green('Custom (Your own setup)'), value: 'custom' }
      ]
    },
    {
      type: 'list',
      name: 'license',
      message: 'License:',
      choices: [
        { name: chalk.gray('MIT'), value: 'MIT' },
        { name: chalk.gray('Apache-2.0'), value: 'Apache-2.0' },
        { name: chalk.gray('GPL-3.0'), value: 'GPL-3.0' },
        { name: chalk.red('None'), value: 'none' }
      ],
      default: 'MIT'
    }
  ];

  return inquirer.prompt<ProjectOptions>(questions);
}
