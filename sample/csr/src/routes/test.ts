import express from 'express';
const router = express.Router();
//import LibConfig from '../lib/LibConfig';
import {htmConfirm1} from './test/renderHtml';
import ConfirmDialog from './test/ConfirmDialog';
import ErrorDialogBox from '../components/ErrorDialogBox';
import DialogBox from '../components/DialogBox';
import { renderToString } from 'react-dom/server';
//
const ERROR_DIALOG_NAME1 = "errorModalDialog_1";
const DIALOG_NAME1 = "modalDialog_1";

/**
* 
* @param
*
* @return
*/ 
router.post('/render_confirm2', async function(req: any, res: any) {
  try {
console.log(req.body);
    const id = req.body.id;
    const htm = renderToString(
      ConfirmDialog({message: "OK, Save", id: Number(id) })
    );
console.log(htm);
    res.send(htm);
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
router.post('/render_confirm1', async function(req: any, res: any) {
  try {
console.log(req.body);
    const htm = htmConfirm1(req.body.id);
    res.send(htm);
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
router.post('/test1', async function(req: any, res: any) {
  try {
console.log(req.body);
    res.json({ret: "OK", data: []});
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
router.post('/create', async function(req: any, res: any) {
  try {
//console.log(body.userId);
console.log(req.body);
      const body = req.body;
      const text = `
      INSERT INTO public."Todo" (title, content, complete,
      "userId", "createdAt", "updatedAt") 
      VALUES($1, $2, 0, $3, current_timestamp, current_timestamp) RETURNING *
      `;
      const values = [body.title, body.content, body.userId ]
      const client = LibPg.getClient();
      const result = await client.query(text, values);
      client.end();
//console.log(result.rows);
      res.json({ret: "OK", data: result.rows});
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

export default router;
