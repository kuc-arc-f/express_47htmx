import Layout from './Layout';
//
export default function Page(pegeItems: any) {
console.log("#TestApi");
console.log(pegeItems);
  //
  return (
  <Layout>
    <div className="container mx-auto my-2 px-2">
      <h1 className="text-4xl font-bold">ChatPost.tsx</h1>
      <hr />
      <h1>1</h1>
      <span>ID:</span>
      <hr className="my-1" />
      {/* List */}
      {pegeItems.map((item: any, index: number) => {
      return (
      <div key={index}>
        <h3 className="text-3xl font-bold">{item.user_name}</h3>
        <div>{item.body}</div>
        {/* dialog_show */}
        <form className="my-0"
          hx-post="/api/chatpost/render_confirm2"
          hx-trigger="submit"
          hx-target={`#resulte_text${item.id}`} 
          hx-on--before-request={`beforePostForm1(${item.id})`}
          hx-on--after-request={`afterPostForm1(${item.id})`}
          >
          <input type="hidden" name="id" defaultValue={item.id} />
          <span>{item.createdAt}</span>
          <button type="submit"
          className="ms-2 bg-transparent hover:bg-purple-500 text-purple-700 font-semibold hover:text-white py-1 px-4 border border-purple-500 hover:border-transparent rounded"
          >Show
          </button>
        </form>
        <div id={`resulte_text${item.id}`}></div>
        <hr />
      </div>
      )
      })}

    </div>
        {/* script */}
        {(process.env.NODE_ENV === "develop") ? (
    <>
      <script src="/static/Util.js"></script>
      <script src="/static/ChatPost.js"></script>
    </>  
    ): (
    <>
      <script src="/public/static/Util.js"></script>
      <script src="/public/static/ChatPost.js"></script> 
    </>
    )}
  </Layout>
  )
}
/*
<span>{item.createdAt}</span>
<a href={`/chats/${item.id}`}>
  <button
  className="ms-2 bg-transparent hover:bg-purple-500 text-purple-700 font-semibold hover:text-white py-1 px-4 border border-purple-500 hover:border-transparent rounded"
  >Show</button>
</a>
*/
