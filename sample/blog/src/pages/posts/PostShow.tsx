import Layout from '../Layout';
import { marked } from 'marked';

//let pegeItems: any[] = [];
//
export default function Page(props: any) {
  console.log("#TestApi");
  const content = marked.parse(props.item.content);
console.log(content);

//console.log(pegeItems);
  //
  return (
  <Layout>
    <div className="post_show_wrap container bg-white mx-auto mt-14 mb-8 px-8 py-4">
      <a href="/" 
      className={`bg-transparent hover:bg-purple-500 text-purple-700 font-semibold hover:text-w hite 
      py-2 px-4 
      border border-purple-500 hover:border-transparent rounded ms-2 my-0`}
      >back</a>
      <hr className="my-4" />
      <div id="root"></div>
      <h1 className="text-4xl font-bold">{props.item.title}</h1>
      <p>id: {props.item.id}, {props.item.createdAt}</p>
      <hr />
      <div dangerouslySetInnerHTML={{ __html: content }} id="content_html"
      className="mb-8" />
      <hr className="my-12" />
      <style>{`
      .post_show_wrap {min-height : 600px;}
      `}
      </style>
    </div>
  </Layout>
  )
}
/*
<a href="/">[ Top ]</a>
<hr />
<button className="btn-outline-purple ms-2">Show</button>
*/
