
import express from 'express';
import { renderToString } from 'react-dom/server';
const app = express();
import 'dotenv/config'
//
import Top from './pages/App';
import About from './pages/about';
import Htmx2 from './pages/Htmx2';
import Htmx3 from './pages/Htmx3';
import Htmx4 from './pages/Htmx4';
import HtmxTodo from './pages/HtmxTodo';
import HtmxTodoShow from './pages/HtmxTodoShow';
//
import HtmxTodoIndex from "./pages/HtmxTodo/CrudIndex";
//
import testRouter from './routes/test'; 
import commonRouter from './routes/commonRouter';
import tursoTodoRouter from './routes/tursoTodoRouter';
//
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
console.log("env=", process.env.NODE_ENV);
//console.log("VITE_API_URL=", import.meta.env.VITE_API_URL);
//
const errorObj = {ret: "NG", messase: "Error"};

// route
app.use('/api/test', testRouter);
app.use('/api/common', commonRouter);
app.use('/api/turso_todo', tursoTodoRouter);

//MPA
app.get('/htmxtodo', async (req: any, res: any) => {
  try {
    const items = await HtmxTodoIndex.getList();
    res.send(renderToString(HtmxTodo(items)));
  } catch (error) {
     res.sendStatus(500);
  }
});
app.get('/htmxtodoshow/:id', async (req: any, res: any) => {
  //console.log("id=", req.params.id  );
  try {
    const item = await HtmxTodoIndex.get(Number(req.params.id));
    res.send(renderToString(HtmxTodoShow(item)));
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
