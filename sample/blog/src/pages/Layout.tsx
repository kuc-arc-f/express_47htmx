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
    <body className="bg-gray-100 min-h-screen flex flex-col">
      <div>
        <header className="bg-gray-100 text-gray-900 text-center py-4 fixed top-0 left-0 right-0">
          <a href="/">[ Home ]</a>
        </header>                
        <main>{children}</main>
      </div>
      {/* footer */}
      <footer className="bg-gray-400 text-white py-4 text-center fixed bottom-0 w-full">
        Visit: https://github.com/kuc-arc-f
      </footer>
    </body>
  </html>    
  );
};
export default Layout;
/*
<a href="/">[ home ]</a>
<hr />
<a href="/htmx3">[ htmx3 ]</a>
{(process.env.NODE_ENV === "develop") ? (
    <script type="module" src="/static/AuthCommon.js"></script>
): (
  <script type="module" src="/public/static/AuthCommon.js"></script>
)}
*/
