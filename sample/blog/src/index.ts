
import express from 'express';
import { renderToString } from 'react-dom/server';
const app = express();
import 'dotenv/config'
//
import Top from './pages/App';
import About from './pages/about';
import Test from './pages/Test';
import TestShow from './pages/Test/TestShow'; 
import TestApi from './pages/TestApi';
import Htmx2 from './pages/Htmx2';
import Htmx3 from './pages/Htmx3';
import PostsIndex from './pages/posts/PostIndex';
import PostShow from './pages/posts/PostShow';
//
import TestApiIndex from "./pages/TestApi/CrudIndex";;
//
import testRouter from './routes/test'; 
import commonRouter from './routes/commonRouter';
import postRouter from './routes/post';
import siteRouter from './routes/site';
//
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
console.log("env=", process.env.NODE_ENV);
//
const errorObj = {ret: "NG", messase: "Error"};
// route
app.use('/api/test', testRouter);
app.use('/api/common', commonRouter);
//postRouter

//MPA
app.get('/posts/:id',async (req: any, res: any) => {
  try {
//console.log("id=", req.params.id  );
    const item = await postRouter.get(Number(req.params.id));
console.log(item);
    res.send(renderToString(PostShow({item: item, id: 0}))); 
  } catch (error) { res.sendStatus(500); }
});
app.get('/', async (req: any, res: any) => {
  try {
    let {page } = req.query;
    if(!page) { page = '1';}
console.log("page=", page);
    const site = await siteRouter.get();
    const items = await postRouter.get_list_page(Number(page));
console.log("len=", items.length);
//console.log(items);
    res.send(
      renderToString(PostsIndex({items: items, page: Number(page), site: site}))
    );
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});
/*
app.get('/testapi', async (req: any, res: any) => {
  try {
    const items = await TestApiIndex.getList();
    res.send(renderToString(PostsIndex(items)));
  } catch (error) {
     res.sendStatus(500);
  }
});
*/

app.get('/testapi', async (req: any, res: any) => {
  try {
    const items = await TestApiIndex.getList();
    //console.log(items);
    res.send(renderToString(TestApi(items)));
  } catch (error) {
     res.sendStatus(500);
  }
});
app.get('/htmx2', (req: any, res: any) => {
  try {res.send(renderToString(Htmx2()));} catch (error) { res.sendStatus(500);}
});
app.get('/htmx3', (req: any, res: any) => {
  try {res.send(renderToString(Htmx3()));} catch (error) { res.sendStatus(500);}
});
app.get('/test/show', (req: any, res: any) => {
  try {res.send(renderToString(TestShow()));} catch (error) { res.sendStatus(500);}
});
app.get('/test', (req: any, res: any) => {
  try {res.send(renderToString(Test()));} catch (error) { res.sendStatus(500);}
});
app.get('/about', (req: any, res: any) => {
  try {
    res.send(renderToString(About()));
  } catch (error) {
    res.sendStatus(500);
  }
});

//start
const PORT = 3000;
app.listen({ port: PORT }, () => {
  console.log(`Server ready at http://localhost:${PORT}`);
});
//export const viteNodeApp = app;