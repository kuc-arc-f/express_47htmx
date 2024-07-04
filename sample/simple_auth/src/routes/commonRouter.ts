//const express = require('express');
import express from 'express';
const router = express.Router();
//require('dotenv').config();
import axios from 'axios';

/*****************************
todos -index
******************************/
router.post('/send_post', async function(req: any, res: any) {
  try {
    //console.log("url=", process.env.API_URL);
    const url = process.env.EXTERNAL_API_URL; 
//console.log(req.body);
    const path = req.body.api_url;	
console.log("path=", url + path);
    const response = await axios.post(url + path, req.body, 
    {headers: { 'Content-Type': 'application/json'}
    });
    const data = response.data;
//console.log(data);
    //@ts-ignore
    return res.json(response.data);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});
/**
 * user_login
 * @param
 *
 * @return
 */
router.post('/user_login', async function(req: any, res: any) {
  const resObj = {ret: "NG", data: {}, message: "" };
  try {
console.log(req.body);
   const email = process.env.VITE_AUTH_USER;
    const password = process.env.VITE_AUTH_PASSWORD;
    //console.log("email=", email);
    //console.log("password=", password);
    if(
        (req.body.email === email) && (req.body.password === password)
    ){
      //@ts-ignore
      resObj.ret = "OK";
      return res.json(resObj);
    }
//console.log(data);
    //@ts-ignore
    //resObj.ret = "OK";
    return res.json(resObj);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});
export default router;
