const Mustache = require("mustache");
const { mkdirp, readdir, readFile, statSync, writeFile,removeSync } = require("fs-extra");
const { resolve } = require("path");
const { ifExist, logger } = require("./utils");

const generate = async (from, to, options) => {
  const gen = async function (from, to) {
    const dirs = await readdir(from);
    for (const dir of dirs) {
      const target = resolve(from, dir);
      const stat = statSync(target);
      if (stat.isDirectory()) {
        await mkdirp(resolve(to, dir));
        await gen(target, resolve(to, dir));
      } else {
        const content = await readFile(target, "utf8");
        const parsedContent = Mustache.render(content, options);
        await writeFile(
          resolve(to, dir.replace(".tpl", "")),
          parsedContent,
          "utf8"
        );
      }
    }
  };
  await gen(from, to);
}

// 生成区块模板
const generateTemplate = async (options) => {
  const { name } = options
  const from = resolve(__dirname,'../template');
  const to = resolve(process.cwd(), name);
  if (await ifExist(to)) {
    removeSync(to)
  }
  await mkdirp(to);
  await generate(from, to, options);
  logger.success("生成成功.")
}

module.exports = {
  generate,
  generateTemplate
}