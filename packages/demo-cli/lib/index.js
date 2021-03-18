const commander = require('commander')
const program = commander;
const inquirer = require('inquirer');

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
  .action(async (name, options, command) => {
    const answers = await inquirer
      .prompt([
        {
          type: 'list',
          name: 'webpack-version',
          message: 'choose webpack version',
          choices: [
            4,
            5
          ],
        },
        {
          type: 'input',
          name: 'author',
          message: 'the author of package.json',
        },
      ])
    console.log(JSON.stringify(answers, null, '  '));
  })

commander.parse(process.argv);