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
*/
