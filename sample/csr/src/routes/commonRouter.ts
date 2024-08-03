import express from 'express';
const router = express.Router();
import axios from 'axios';
import { z } from 'zod';
//
const FormData = z.object({
  title: z
      .string()
      .min(1, { message: '1文字以上入力してください。' }),
  content: z
      .string()
      .min(1, { message: '1文字以上入力してください。' }),
});
/**
*
* @param
*
* @return
*/   
router.post('/send_post_validate', async function(req: any, res: any) {
  const retObj ={ret: "NG", data:{}, errors: {}}
  try{  
    const path = req.body.api_url;	
    console.log("path=", path);
    if(req.body && path === "/test/create"){
      FormData.parse(req.body);
    }
  } catch (error: any) {
    console.error(error);
    retObj.errors = error.flatten().fieldErrors;
    return res.json(retObj);
  }
  try {
    //console.log("url=", process.env.API_URL);
    const url = process.env.EXTERNAL_API_URL; 
    const path = req.body.api_url;	
    console.log("path=", url + path);
    const response = await axios.post(url + path, req.body, 
    {headers: { 'Content-Type': 'application/json'}
    });
    //console.log(data);
    //@ts-ignore
    return res.json(response.data);
  } catch (error: any) {
    res.sendStatus(500);
  }
});
/**
*
* @param
*
* @return
*/   
router.post('/send_post', async function(req: any, res: any) {
  const retObj ={ret: "NG", data:{}, errors: {}}
  try{  
    const path = req.body.api_url;	
    console.log("path=", path);
    if(req.body && path === "/test/create"){
      FormData.parse(req.body);
    }
  } catch (error: any) {
    console.error(error);
    retObj.errors = error.flatten().fieldErrors;
    return res.json(retObj);
  }
  try {
    //console.log("url=", process.env.API_URL);
    const url = process.env.EXTERNAL_API_URL; 
    const path = req.body.api_url;	
    console.log("path=", url + path);
    const response = await axios.post(url + path, req.body, 
    {headers: { 'Content-Type': 'application/json'}
    });
    //console.log(data);
    //@ts-ignore
    return res.json(response.data);
  } catch (error: any) {
    res.sendStatus(500);
  }
});

export default router;
/*
*/
