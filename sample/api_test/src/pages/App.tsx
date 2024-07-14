import * as React from 'react';

console.log("env=", process.env.NODE_ENV)
//
export default function Page() { 
    return (
    <html>
        <head>
            <title>welcome</title>
        </head>
        <a href="/">[ home ]</a>
        <a href="/about">[ about ]</a>
        <a href="/htmx2">[ Htmx2 ]</a>
        <a href="/htmx3">[ Htmx3 ]</a>
        <a href="/htmx4">[ Htmx4 ]</a>
        <a href="/testapi">[ TestApi ]</a>
        <hr />        
        <div id="root"></div>
        <h1 className="text-4xl font-bold">hello</h1>
    </html>
    );
}
/*
*/
