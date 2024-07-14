import * as React from 'react';
import Layout from './Layout';

console.log("env=", process.env.NODE_ENV)
//
export default function Page() { 
  return (
  <Layout>
    <div id="root"></div>
    <h1>about</h1>
  </Layout>
  );
}
/*
    {(process.env.NODE_ENV === "develop") ? (
        <script type="module" src="/static/about.js"></script>
    ): (
        <script type="module" src="/public/static/about.js"></script>
    )}        
*/
