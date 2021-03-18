const commander = require('commander')
const program = commander;

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
  .action((name,options,command) => {
    console.log(name)
    console.log(options)
    console.log(command.opts())
  })

commander.parse(process.argv);