import Layout from './Layout';
//
export default function Page(item: any) {
console.log("#TestApi");
//console.log(pegeItems);
  //
  return (
  <Layout>
    {/* load */}
    <div className="load_wrap d-none">
      <form hx-post="/api/csr/get"
      hx-trigger="load" hx-target="#resulte_load" >
        <label>name: </label><br />
        <input type="text" name="item_id" defaultValue={item.id}/>
      </form>
    </div>
    <div className="container mx-auto my-2 px-2">
      {/* load_resulte */}
      <div id="resulte_load"></div>
      <hr className="my-1" />
      <form
        hx-post="/api/common/send_post"
        hx-trigger="submit"
        hx-target="#h2"
        hx-on--after-request="location.href='/csr' "
        className= "my-0"
        >
        <input type="text" name="api_url" defaultValue="/test/delete"
        className="d-none" />
        <input type="text" name="id" defaultValue={item.id}  />
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
