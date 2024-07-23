import Layout from './Layout';

let pegeItems: any[] = [];
//
//export default function Page(pegeItems: any) {
export default function Page(popps: any) {
console.log("#TestApi");
  pegeItems = popps.item;
console.log("chatId=", popps.chatId);
console.log("userId=", popps.userId);
  //
  return (
  <Layout>
    <div className="container mx-auto my-2 px-2">
      <h1 className="text-4xl font-bold">ChatPost.tsx</h1>
      <hr />
      <span>chatId: {popps.chatId}</span>
      <hr className="my-1" />
      <form className="my-0"
      hx-post="/api/chatpost/create"
      hx-trigger="submit"
      hx-target="#resulte_form1"
      hx-on--before-request=""
      hx-on--after-request="ChatPost.afterPostForm1()"
      >
        <label>
          <input type="text" name="body" placeholder="message input please."
          className="mx-2 w-full border border-gray-400 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
          />
        </label>
        <div className="error_message" id="error_message_body"></div>
        {/*  */}
        <input type="hidden" name="userId" defaultValue={popps.userId} />
        <input type="hidden" name="chatId" defaultValue={popps.chatId} />
        <input type="text" name="api_url" defaultValue="/chat_posts/create"
        className="d-none" />
        <hr className="my-1" />
        <button type="submit"
        className="ms-2 bg-transparent hover:bg-purple-500 text-purple-700 font-semibold hover:text-white py-1 px-4 border border-purple-500 hover:border-transparent rounded"
        >Add</button>
      </form>
      <h3 id="resulte_form1" className=""></h3>
      <hr className="my-1" />
      {/* List */}
      {pegeItems.map((item: any, index: number) => {
      return (
      <div key={index}>
        <h3 className="text-2xl font-bold">{item.user_name}</h3>
        <div>{item.body}</div>
        <span>ID: {item.id} , {item.createdAt}</span>
        {/* dialog_show */}
        <form className="my-0"
          hx-post="/api/chatpost/render_confirm2"
          hx-trigger="submit"
          hx-target="#resulte_text"
          hx-on--before-request={`beforePostForm1(${item.id})`}
          hx-on--after-request={`afterPostForm1(${item.id})`}
          >
          <input type="hidden" name="id" defaultValue={item.id} />
          <input type="hidden" name="userId" defaultValue={popps.userId} />
          <input type="hidden" name="chatId" defaultValue={popps.chatId} />
          <button type="submit"
          className="ms-2 bg-transparent hover:bg-purple-500 text-purple-700 font-semibold hover:text-white py-1 px-4 border border-purple-500 hover:border-transparent rounded"
          >Show
          </button>
        </form>
        <hr />
      </div>
      )
      })}
      <div id="resulte_text"></div>
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
*/
