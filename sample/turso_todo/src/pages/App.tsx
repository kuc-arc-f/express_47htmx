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
        <a href="/htmx2">[ htmx2 ]</a>
        <a href="/htmx3">[ htmx3 ]</a>
        <a href="/htmxtodo">[ HtmxTodo ]</a>
        <hr />        
        <div id="root"></div>
        <h1 className="text-4xl font-bold">hello</h1>
    </html>
    );
}
/*
*/
