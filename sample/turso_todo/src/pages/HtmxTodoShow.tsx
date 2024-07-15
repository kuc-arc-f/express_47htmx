import Layout from './Layout';

export default function Page(item: any) {
//console.log("#HtmxTodoShow.tsx");
//console.log(item);
    //
    return (
    <Layout>
      <div className="container mx-auto my-2 px-2">
        <a href="/htmxtodo">[ back ]</a>
        <hr className="my-2" />
        <h1 className="text-4xl font-bold">{item.title}</h1>
        <span>ID: {item.id} , {item.createdAt}</span>
        <hr />
        <div>{item.content}</div>
        <hr />
        <form
        hx-post="/api/turso_todo/delete"
        hx-trigger="submit"
        hx-target="#h2"
        hx-on="htmx:afterRequest: location.href='/htmxtodo'"
        >
          <input type="hidden" name="id" defaultValue={item.id} />
          <button type="submit"
          className="ms-2 bg-transparent hover:bg-purple-500 text-purple-700 font-semibold hover:text-white py-1 px-4 border border-purple-500 hover:border-transparent rounded"
          >Delete</button>
        </form>
        <hr />
        <h3 id="h2" className="d-none">ここに表示</h3>
      </div>
    </Layout>
    )
  }
  /*
  */
  //
