// post-send, Test
import Layout from './Layout';
import {items1} from './Htmx6/data';

/*
const pageItems = [
  {id: 1, title: "title_1", content: "content1"},
  {id: 2, title: "title_2", content: "content2"},
  {id: 3, title: "title_3", content: "content3"},
];
*/
const pageItems = items1;
//
export default function Page() {
  return (
  <Layout>
    <h1 className="text-4xl font-bold">Htmx6.tsx</h1>
    <hr />
    <span>dialog open, example</span>
    <hr />
    {/* List */}
    {pageItems.map((item: any, index: number) => {
    return (
    <div key={index}>
      <h3 className="text-3xl font-bold">{item.title}</h3>
      <span>ID: {item.id}</span>
      <a href={`/testapishow/${item.id}`}>
        <button
        className="ms-2 bg-transparent hover:bg-purple-500 text-purple-700 font-semibold hover:text-white py-1 px-4 border border-purple-500 hover:border-transparent rounded"
        >Show</button>
      </a>
      <form className="my-0"
        hx-post="/api/test/render_confirm2"
        hx-trigger="submit"
        hx-target={`#resulte_text${item.id}`} 
        hx-on--before-request={`beforePostForm1(${item.id})`}
        hx-on--after-request={`afterPostForm1(${item.id})`}
        >
        <input type="text" name="id" defaultValue={item.id} />
        <button type="submit">[ open ]</button>
      </form>
      <div id={`resulte_text${item.id}`}></div>
      <hr />
    </div>
    )
    })}
    {/* script */}
    {(process.env.NODE_ENV === "develop") ? (
      <>
        <script src="/static/Util.js"></script>
        <script src="/static/Htmx6.js"></script>
      </>
    ): (
      <>
        <script src="/public/static/Util.js"></script>
        <script src="/public/static/Htmx6.js"></script> 
      </>
  )}    
  </Layout>
  )
}
/*
*/
