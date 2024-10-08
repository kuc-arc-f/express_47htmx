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
    const url = process.env.VITE_API_URL; 
    req.body.api_key = process.env.VITE_API_KEY; 
    const path = req.body.api_url;	
console.log("path=", url + path);
    const siteId = process.env.VITE_SITE_ID;
    req.body.siteId = Number(siteId);
console.log(req.body);
    const response = await axios.post(url + path, req.body, 
      {headers: { 'Content-Type': 'application/json'}
    });
    const data = response.data;
/*
    if(response.data.result_code !== 200) {
        console.error(response.data);
        throw new Error(`Error, result_code <>200`);
    }      
*/
console.log(data);
    //@ts-ignore
    return res.json(response.data);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

export default router;
