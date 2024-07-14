import Layout from './Layout';
//
export default function Page(item: any) {
console.log("#TestApi");
//console.log(pegeItems);
  //
  return (
  <Layout>
    <h1>TestApiShow.tsx</h1>
    <hr />
    <h1>{item.title}</h1>
    <span>ID: {item.id} , {item.createdAt}</span>
    <hr />
    <div>{item.content}</div>
    <hr />
  </Layout>
  )
}
/*
        <form
        hx-post="/api/turso_todo/delete"
        hx-trigger="submit"
        hx-target="#h2"
        hx-on="htmx:afterRequest: location.href='/htmxtodo'"
        >
          <input type="text" name="id" defaultValue={item.id} /><br />
          <button type="submit">Delete</button>
        </form>
        <hr />
        <h3 id="h2">ここに表示</h3>
*/
