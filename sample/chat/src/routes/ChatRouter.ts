import express from 'express';
const router = express.Router();
//import LibConfig from '../lib/LibConfig';
//import {htmConfirm1} from './test/renderHtml';
//import ThreadDialog from './ChatPostRouter/ThreadDialog';
import Chat from './ChatPostRouter/Chat';
import { renderToString } from 'react-dom/server';
//import Thread from './ChatPostRouter/Thread';
//
/**
* 
* @param
*
* @return
*/ 
router.post('/create', async function(req: any, res: any) {
  try {
console.log(req.body);
    const reulte = await Chat.create(req);
console.log(reulte);
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
router.post('/delete', async function(req: any, res: any) {
  try {
console.log(req.body);
    res.json(req.body);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});


export default router;
