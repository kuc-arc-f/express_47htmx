import * as React from 'react';

console.log("env=", process.env.NODE_ENV)
//
export default function Page() { 
    return (
    <html>
        <head>
            <title>welcome!</title>
        </head>
        <div id="root"></div>
        {(process.env.NODE_ENV === "develop") ? (
            <script type="module" src="/static/Test.js"></script>
        ): (
            <script type="module" src="/public/static/Test.js"></script>
        )}        
    </html>
    );
}
/*
*/
