import * as React from 'react';
import Layout from './Layout';

console.log("env=", process.env.NODE_ENV)
//
export default function Page() { 
  return (
  <Layout>
      <div id="root"></div>
      <h1 className="text-4xl font-bold">hello</h1>
  </Layout>
  );
}
/*
      <a href="/about">[ about ]</a>
      <a href="/htmx2">[ Htmx2 ]</a>
      <a href="/htmx3">[ Htmx3 ]</a>
      <a href="/htmx4">[ Htmx4 ]</a>
      <a href="/testapi">[ TestApi ]</a>
*/
