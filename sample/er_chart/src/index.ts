
import express from 'express';
import { renderToString } from 'react-dom/server';
const app = express();
import 'dotenv/config'
//
import Top from './pages/App';
import About from './pages/about';
//import TestApi from './pages/TestApi';
//import TestApiShow from './pages/TestApiShow';
import Htmx2 from './pages/Htmx2';
import Htmx3 from './pages/Htmx3';
import Htmx4 from './pages/Htmx4';
import Htmx6 from './pages/Htmx6';
import ErChart from './pages/ErChart';
import ErChartShow from './pages/ErChartShow';
//
import ErChartIndex from "./pages/ErChart/CrudIndex";
//
import testRouter from './routes/test'; 
import commonRouter from './routes/commonRouter';
import erChartRouter from './routes/erChartRouter';
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
app.use('/api/er_chart', erChartRouter);

//MPA
app.get('/er_chart', async (req: any, res: any) => {
  try {
    const items = await ErChartIndex.getList();
    //console.log(items);
    res.send(renderToString(ErChart(items)));
  } catch (error) {
    console.error(error)
     res.sendStatus(500);
  }
});
app.get('/erchartshow/:id', async (req: any, res: any) => {
  console.log("id=", req.params.id  );
    try {
      const item = await ErChartIndex.get(Number(req.params.id));
  console.log(item);
      res.send(renderToString(ErChartShow(item)));
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

