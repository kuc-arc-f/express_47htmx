import Layout from './Layout';
//let pegeItems: any[] = [];
//
export default function Page(pegeItems) {
console.log("#TestApi");
//console.log(pegeItems);
  //
  return (
  <Layout>
    <h1>TestApi.tsx</h1>
    <hr />
    <form
    hx-post="/api/common/send_post"
    hx-trigger="submit"
    hx-target="#h2"
    hx-on="htmx:afterRequest: location.reload()"
    >
      <label>title:</label>
      <input type="text" name="title" /><br />
      <label>Content:</label>
      <input type="text" name="content" /><br />
      {/*  */}
      <input type="text" name="api_url" defaultValue="/test/create" /><br />
      <button type="submit">Add</button>
    </form>
    <hr />
    <h3 id="h2">ここに表示</h3>
    <hr />
    {/* List */}
    {pegeItems.map((item: any ,index: number) => {
    return (
    <div key={index}>
      <h3 className="text-3xl font-bold">{item.title}</h3>
      <a href={`/testapishow/${item.id}`}> [ Show ]
      </a>
      <span>ID: {item.id}, {item.createdAt}</span>
      <hr />
    </div>
    )
    })}
  </Layout>
  )
}
/*
*/
