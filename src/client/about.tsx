import React from 'react'
import ReactDOM from 'react-dom/client'
import {Link } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
console.log("#about.tsx");
import Head from '../components/Head'
//
function Page(){
  return(
  <div>
    <Head />
    <hr />
    <h1 className="text-4xl font-bold">about!!</h1>
  </div>
  );
}
//
ReactDOM.createRoot(document.getElementById('root')!).render(
  <Page />
)
/*
<Head />
<a href="/">Home</a>
*/