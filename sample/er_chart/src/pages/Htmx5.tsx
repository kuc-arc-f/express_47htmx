// post-send, Test
import Layout from './Layout';
//
const pageItems = [
  {id: 1, title: "title_1", content: "content1"},
  {id: 2, title: "title_2", content: "content2"},
  {id: 3, title: "title_3", content: "content3"},
];
//
export default function Page() {
  return (
  <Layout>
    <h1 className="text-4xl font-bold">Htmx5.tsx</h1>
    <hr />
    <span>delete confirm, example</span>
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
        hx-post="/api/test/render_confirm1"
        hx-trigger="submit"
        hx-target={`#resulte_text${item.id}`} >
        <input type="text" name="id" defaultValue={item.id} />
        <button type="submit">[ Delete ]</button>
      </form>
      <div id={`resulte_text${item.id}`}></div>
      <hr />
    </div>
    )
    })}
    {/* script */}
    {(process.env.NODE_ENV === "develop") ? (
        <script src="/static/Htmx5.js"></script>
    ): (
        <script src="/public/static/Htmx5.js"></script> 
    )}    
  </Layout>
  )
}
/*
    <form className="my-0"
    hx-post="/api/test/render_confirm1"
    hx-trigger="submit"
    hx-target="#resulte_text11" >
      <input type="text" name="id" defaultValue={121} />
      <button type="submit">Add</button>
    </form>
    <div id="resulte_text11"></div>
    <hr />
*/
