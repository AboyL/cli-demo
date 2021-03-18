const chalk = require('chalk')
const { access } = require('fs-extra')

async function ifExist (p) {
  try {
    await access(p);
    return true;
  } catch (error) {
    return false;
  }
}

const logger = {
  info: (word) => {
    console.log(chalk.blue(word));
  },
  warn: (word) => {
    console.log(chalk.yellow(word));
  },
  success: (word) => {
    console.log(chalk.green(word));
  },
  error: (word) => {
    console.log(chalk.red(word));
  },
  debug: (...args) => {
    process.env.NODE_ENV === 'development' && console.log(chalk.redBright('DEBUG:'), ...args);
  }
};


module.exports = {
  ifExist,
  logger
}