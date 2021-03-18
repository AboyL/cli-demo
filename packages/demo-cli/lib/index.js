const commander = require('commander')
const program = commander;
const inquirer = require('inquirer');
const newQuestion = require('./question/new-question')
const newAction = require('./actions/new-action')
const startAction = require('./actions/start-action')

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
    newAction(options)
  })

program
  .command('start')
  .alias('s')
  .description('start project')
  .action(async (name, opts, command) => {
    const options = {
      name,
      ...opts,
    }
    startAction(options)
  })

commander.parse(process.argv);