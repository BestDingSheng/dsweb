import indexController from "./indexController";
// 路由注册中心
const controllerInit = {
  init(app, router) {
    app.use(
      router(_ => {
        _.get("/index", indexController.indexAction());
         _.get('/index/test', indexController.testAction());
      })
    );
  }
};

export default controllerInit;
