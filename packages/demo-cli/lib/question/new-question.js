module.exports =[
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
]