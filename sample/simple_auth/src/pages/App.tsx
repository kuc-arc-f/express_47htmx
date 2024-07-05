import * as React from 'react';
import Layout from './Layout';

console.log("env=", process.env.NODE_ENV)
//
export default function Page() { 
  return (
  <html>
    <head>
        <title>welcome</title>
    </head>
    <Layout>
      <a href="/">[ home ]</a>
      <a href="/about">[ about ]</a>
      <a href="/htmx2">[ Htmx2 ]</a>
      <a href="/login">[ Login ]</a>
      <hr />        
      <div id="root"></div>
      <h1 className="text-4xl font-bold">hello</h1>

    </Layout>
  </html>
  );
}
/*
*/
