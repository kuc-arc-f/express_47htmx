import * as React from 'react';
import Layout from './Layout';

console.log("env=", process.env.NODE_ENV)
//
export default function Page() { 
  return (
  <html>
    <head>
      <title>welcome</title>
      {(process.env.NODE_ENV === "develop") ? (
          <link href="/main.css" rel="stylesheet" /> 
      ): (
          <link href="/public/main.css" rel="stylesheet" /> 
      )} 
    </head>
    <body>
      <Layout>
        <div id="root"></div>
        {(process.env.NODE_ENV === "develop") ? (
          <script type="module" src="/static/Login.js"></script>
        ): (
          <script type="module" src="/public/static/Login.js"></script>
        )}        
      </Layout>
    </body>
  </html>
  );
}
/*
*/
