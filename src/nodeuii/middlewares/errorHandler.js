const errorHanler = {
  error(app, logger) {
    app.use(async (ctx, next) => {
      try {
        await next();
      } catch (error) {
        // 错误日志
        logger.error(error);
        ctx.status = error.status || 500;
        ctx.body = "server is 500";
      }
    });

    app.use(async (ctx, next) => {
      await next();
      if (404 != ctx.status) return;
      logger.error("页面丢了");
      ctx.status = 404;
      ctx.body =
        '<script type="text/javascript" src="//qzonestyle.gtimg.cn/qzone/hybrid/app/404/search_children.js" charset="utf-8" homePageUrl="http://yoursite.com/yourPage.html" homePageName="回到我的主页"></script>';
    });
  }
};

export default errorHanler;
