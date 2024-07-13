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
        {(process.env.NODE_ENV === "develop") ? (
            <script type="module" src="/static/about.js"></script>
        ): (
            <script type="module" src="/public/static/about.js"></script>
        )}        
    </Layout>
    );
}
/*
*/