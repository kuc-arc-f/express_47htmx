
import express from 'express';
import { renderToString } from 'react-dom/server';
const app = express();
import 'dotenv/config'
//
import Top from './pages/App';
import About from './pages/about';
import TestApi from './pages/TestApi';
import TestApiShow from './pages/TestApiShow';
import Htmx2 from './pages/Htmx2';
import Htmx3 from './pages/Htmx3';
import Htmx4 from './pages/Htmx4';
import Htmx6 from './pages/Htmx6';
import Chat from './pages/Chat';
import ChatPost from './pages/ChatPost';

//
import ChatIndex from "./pages/Chat/CrudIndex";;
import ChatPostIndex from "./pages/ChatPost/ChatPost";;
//
import testRouter from './routes/test'; 
import commonRouter from './routes/commonRouter';
import ChatPostRouter from './routes/ChatPostRouter'; 
import ThreadRouter from './routes/ThreadRouter'; 
//
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
console.log("env=", process.env.NODE_ENV);
//console.log("API_URL=", process.env.PUBLIC_API_URL);
//
const errorObj = {ret: "NG", messase: "Error"};
// route
app.use('/api/test', testRouter);
app.use('/api/common', commonRouter);
app.use('/api/chatpost', ChatPostRouter);
app.use('/api/thread', ThreadRouter);

//MPA
app.get('/chats', async (req: any, res: any) => {
  try {
    const items = await ChatIndex.getList();
    //console.log(items);
    res.send(renderToString(Chat(items)));
  } catch (error) {
    console.error(error)
    res.sendStatus(500);
  }
});
app.get('/chats/:id', async (req: any, res: any) => {
  console.log("id=", req.params.id  );
    try {
      const item = await ChatPostIndex.getList(Number(req.params.id));
      //console.log(item);
      res.send(renderToString(ChatPost(item)));
    } catch (error) { 
      console.error(error)
      res.sendStatus(500);
    }
  });
/*
app.get('/testapi', async (req: any, res: any) => {
  try {
    const items = await TestApiIndex.getList();
    res.send(renderToString(TestApi(items)));
  } catch (error) {
    console.error(error)
     res.sendStatus(500);
  }
});
app.get('/testapishow/:id', async (req: any, res: any) => {
console.log("id=", req.params.id  );
  try {
    const item = await TestApiIndex.get(Number(req.params.id));
console.log(item);
    res.send(renderToString(TestApiShow(item)));
  } catch (error) { res.sendStatus(500);}
});
*/
app.get('/htmx2', (req: any, res: any) => {
  try {res.send(renderToString(Htmx2()));} catch (error) { res.sendStatus(500);}
});
app.get('/htmx3', (req: any, res: any) => {
  try {res.send(renderToString(Htmx3()));} catch (error) { res.sendStatus(500);}
});
app.get('/htmx4', (req: any, res: any) => {
  try {res.send(renderToString(Htmx4()));} catch (error) { res.sendStatus(500);}
});
app.get('/htmx6', (req: any, res: any) => {
  try {res.send(renderToString(Htmx6()));} catch (error) { res.sendStatus(500);}
});

app.get('/about', (req: any, res: any) => {
  try {
    res.send(renderToString(About()));
  } catch (error) {
    res.sendStatus(500);
  }
});
app.get('/', (req: any, res: any) => {
  try {
    res.send(renderToString(Top()));
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
