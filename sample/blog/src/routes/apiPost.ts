import express from 'express';
const router = express.Router();
import axios from 'axios';
import { renderToString } from 'react-dom/server';
import SearchResulte from '../pages/posts/SearchResulte'

/**
* 
* @param
*
* @return
*/ 
router.post('/test', async function(req: any, res: any) {
  try {
console.log(req.body);
    res.json(req.body);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

/**
* 
* @param
*
* @return
*/ 
router.post('/search_elem', async function(req: any, res: any) {
  try {
    const url = process.env.VITE_API_URL; 
    req.body.api_key = process.env.VITE_API_KEY; 
    const path = req.body.api_url;	
    console.log("path=", url + path);
    const siteId = process.env.VITE_SITE_ID;
    req.body.siteId = Number(siteId);
    //console.log(req.body);
    const response = await axios.post(url + path, req.body, 
      {headers: { 'Content-Type': 'application/json'}
    });
    const data = response.data;
    //console.log(data);
    const htm = renderToString(SearchResulte({items: data.data}));
    return res.send(htm);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});
export default router;
