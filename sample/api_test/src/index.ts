
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

//
import TestApiIndex from "./pages/TestApi/CrudIndex";;
//
//import testRouter from './routes/test'; 
import commonRouter from './routes/commonRouter';
//
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
console.log("env=", process.env.NODE_ENV);
//
const errorObj = {ret: "NG", messase: "Error"};
// route
//app.use('/api/test', testRouter);
app.use('/api/common', commonRouter);

//MPA
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