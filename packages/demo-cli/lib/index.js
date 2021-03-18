const commander = require('commander')
const program = commander;
const inquirer = require('inquirer');
const newQuestion = require('./question/new-question')
const { generateTemplate } = require('./generate')

program
  .version(require('../package.json').version, '-v, --version')
  .usage('<command> [options]');

program
  .command('new <name>')
  .alias('n')
  .description('Generate Hzero application')
  .option(
    '-t, --template <template-name>',
    'choose template'
  )
  .option(
    '-ts, --template-ss <template-name>',
    'choose template',
    'test'
  )
  .action(async (name, opts, command) => {
    const answers = await inquirer.prompt(newQuestion)
    const options = {
      name,
      ...opts,
      ...answers
    }
    console.log(options)
    generateTemplate(options)
  })

commander.parse(process.argv);