import  Koa from 'koa';
import  config from './config';
const app = new Koa();
app.use(async ctx=>{
	ctx.body = 'hello world koa2'
})
app.listen(config.port,()=>{
	console.log(`server is running : ${config.port}`)
})