import * as React from 'react';
import Layout from './Layout';

console.log("env=", process.env.NODE_ENV)
//
export default function Page() { 
    return (
    <Layout>
        <head>
            <title>welcome</title>
        </head>
        <div id="root"></div>
        <h1>about</h1>
    </Layout>
    );
}
/*
*/
