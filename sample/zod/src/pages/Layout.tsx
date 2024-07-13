import React from 'react';
//
const Layout = ({ children }) => {
  return (
  <html>
    <head>
    <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>welcome</title>
      <script src="https://cdn.tailwindcss.com"></script>
      <script
        src="https://unpkg.com/htmx.org@1.9.10"
        integrity="sha384-D1Kt99CQMDuVetoL1lrYwg5t+9QdHe7NLX/SoJYkXDFfX37iInKRy5xLSi8nO7UC"
        crossOrigin="anonymous"
      ></script>      
      {/* CSS */}
      {(process.env.NODE_ENV === "develop") ? (
         <link href="/main.css" rel="stylesheet" /> 
      ): (
         <link href="/public/main.css" rel="stylesheet" /> 
      )}
    </head>
    <body>
        <div>
            <a href="/">[ home ]</a>
            <a href="/about">[ about ]</a>
            <a href="/htmx2">[ Htmx2 ]</a>
            <a href="/htmx3">[ Htmx3 ]</a>
            <a href="/zod1">[ Zod1 ]</a>      
            <hr />        
        </div>
        <main>{children}</main>

    </body>
  </html>    
  );
};
export default Layout;