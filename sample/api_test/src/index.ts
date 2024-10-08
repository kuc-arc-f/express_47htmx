
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

//
import TestApiIndex from "./pages/TestApi/CrudIndex";;
//
import testRouter from './routes/test'; 
import commonRouter from './routes/commonRouter';
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

//MPA
app.get('/testapi', async (req: any, res: any) => {
  try {
    const items = await TestApiIndex.getList();
    //console.log(items);
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
