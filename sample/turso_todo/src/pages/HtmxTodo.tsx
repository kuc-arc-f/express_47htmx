import Layout from './Layout';
//
export default function Page(pegeItems) {
//console.log(pegeItems);
  //
  return (
  <Layout>
    <div className="container mx-auto my-2 px-2">
      <h1 className="text-4xl font-bold">HtmxTodo.tsx</h1>
      <hr className="my-2" />
      <form
      hx-post="/api/turso_todo/create"
      hx-trigger="submit"
      hx-target="#h2"
      hx-on="htmx:afterRequest: location.reload()"
      className="mb-1"
      >
        <label>title:</label>
        <input type="text" name="title" 
        className="mx-2 border border-gray-400 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
        /><br />
        <hr className="my-1" />
        <label>Content:</label>
        <input type="text" name="content" 
        className="mx-2 border border-gray-400 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
        /><br />
        <hr className="my-2" />
        <button type="submit"
        className="ms-2 bg-transparent hover:bg-purple-500 text-purple-700 font-semibold hover:text-white py-1 px-4 border border-purple-500 hover:border-transparent rounded"
        >Add</button>
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
            <button
            className="ms-2 bg-transparent hover:bg-purple-500 text-purple-700 font-semibold hover:text-white py-1 px-4 border border-purple-500 hover:border-transparent rounded" 
            >Show</button>
          </a>
          <hr />
      </div>
      )
      })}      
    </div>
  </Layout>
  )
}
/*
*/
