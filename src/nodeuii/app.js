import Koa from "koa";
import config from "./config";
import log4js from "log4js";
import router from "koa-simple-router";
import render from "koa-swig";
import serve from "koa-static";
import co from "co";
import controllerInit from "./controllers/controllerInit";
import errorHandler from "./middlewares/errorHandler.js";
const app = new Koa();
log4js.configure({
  appenders: { cheese: { type: "file", filename: "./log/dingsheng.log" } },
  categories: { default: { appenders: ["cheese"], level: "error" } }
});
const logger = log4js.getLogger("cheese");
errorHandler.error(app, logger);
// 设置静态模板
app.context.render = co.wrap(
  render({
    // ...your setting
    writeBody: false,
    varControls: ["[[", "]]"],
    root: config.viewDir,
    autoescape: true,
    cache: "memory", // disable, set to false
    ext: "html"
  })
);
//  初始化所有的路由
controllerInit.init(app, router);
// 设置静态资源
app.use(serve(config.staticDir));

app.listen(config.port, () => {
  console.log(`server is running : ${config.port}`);
});

module.exports = app;
