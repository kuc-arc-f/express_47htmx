
import express from 'express';
import { renderToString } from 'react-dom/server';
const app = express();
import 'dotenv/config'
//
import Top from './pages/App';
import About from './pages/about';
import Csr from './pages/Csr';
import CsrShow from './pages/CsrShow';

import Htmx3 from './pages/Htmx3';
import Htmx4 from './pages/Htmx4';
//import Htmx6 from './pages/Htmx6';
//
import TestApiIndex from "./pages/Csr/CrudIndex";;
//
import testRouter from './routes/test'; 
import commonRouter from './routes/commonRouter';
import csrRouter from './routes/csr'; 
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
app.use('/api/csr', csrRouter);

//MPA
app.get('/csr', async (req: any, res: any) => {
  try {
//    const items = await TestApiIndex.getList();
    //console.log(items);
    res.send(renderToString(Csr([])));
  } catch (error) {
    console.error(error)
     res.sendStatus(500);
  }
});
app.get('/csrshow/:id', async (req: any, res: any) => {
  console.log("id=", req.params.id  );
  try {
    const item = await TestApiIndex.get(Number(req.params.id));
console.log(item);
    res.send(renderToString(CsrShow(item)));
  } catch (error) { res.sendStatus(500);}
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
