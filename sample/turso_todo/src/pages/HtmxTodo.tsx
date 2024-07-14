import Layout from './Layout';
//
export default function Page(pegeItems) {
//console.log(pegeItems);
  //
  return (
  <Layout>
      <h1>HtmxTodo.tsx</h1>
      <hr />
      <form
      hx-post="/api/turso_todo/create"
      hx-trigger="submit"
      hx-target="#h2"
      hx-on="htmx:afterRequest: location.reload()"
      >
        <label>title:</label>
        <input type="text" name="title" /><br />
        <label>Content:</label>
        <input type="text" name="content" /><br />
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
          <span>ID: {item.id}, {item.createdAt}</span>
          <a href={`/htmxtodoshow/${item.id}`}>
            <button className="btn-outline-purple ms-2">Show</button>
          </a>
          <hr />
      </div>
      )
      })}      
  </Layout>
  )
}
/*
*/
