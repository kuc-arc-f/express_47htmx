import Layout from './Layout';
//
export default function Page(item: any) {
console.log("#TestApi");
//console.log(pegeItems);
  //
  return (
  <Layout>
    <div className="container mx-auto my-2 px-2">
      <h1 className="text-4xl font-bold">TestApiShow.tsx</h1>
      <hr />
      <h1>{item.title}</h1>
      <span>ID: {item.id} , {item.createdAt}</span>
      <hr />
      <div>{item.content}</div>
      <hr className="my-1" />
      <form
        hx-post="/api/common/send_post"
        hx-trigger="submit"
        hx-target="#h2"
        hx-on--after-request="location.href='/testapi' "
        className= "my-0"
        >
        <input type="text" name="api_url" defaultValue="/test/delete"
        className="d-none" />
          <input type="text" name="id" defaultValue={item.id} 
          />
          <button 
          className="ms-2 bg-transparent hover:bg-purple-500 text-purple-700 font-semibold hover:text-white py-1 px-4 border border-purple-500 hover:border-transparent rounded"
          type="submit"
          >Delete</button>
        </form>
        <hr className="my-1" />
        <h3 id="h2"></h3>
    </div>
  </Layout>
  )
}
/*
*/
