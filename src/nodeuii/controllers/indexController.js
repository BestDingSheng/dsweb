import IndexModel from '../models/indexModel'
const indexController = {
  indexAction(){
    return async(ctx,next)=>{
      const indexModel = new IndexModel();
      const result = await indexModel.getData()
      ctx.body = await ctx.render('index');
    }
  },
  testAction() {
    return (ctx, next) => {
        ctx.body = {
            data:"hello test"
        };
    }
}
}


export default indexController
