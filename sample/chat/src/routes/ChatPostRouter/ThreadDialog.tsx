import {items1} from '../../pages/Htmx6/data';
import Thread from './Thread';

let pageItem : any[] = [];
//
function Compo(props: any) {
//console.log(props);
  pageItem = props.items;
console.log(pageItem);
  return (
  <dialog id={`modalDialog_${props.id}`} className="dialog">
    <div className="bg-white px-8 pt-3 pb-3 dialog_body_wrap">
      <p className="text-3xl font-bold">titleTest1</p>
      {/* add_thread */}
      <form className="my-0"
      hx-post="/api/thread/create"
      hx-trigger="submit"
      hx-target="#resulte_add_thread"
      hx-on--before-request=""
      hx-on--after-request="ChatPost.afterAddThread()"
      >
        <label>body:
          <input type="text" name="thread_body" id="thread_body"
          className="mx-0 w-full border border-gray-400 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
          />
        </label>
        <div className="error_message" id="error_message_title"></div>
        {/*  */}
        <input type="hidden" name="userId" defaultValue={1} />
        <input type="hidden" name="chatId" defaultValue={12} />
        <input type="hidden" name="chatPostId" defaultValue={props.id} />
        <input type="hidden" name="api_url" defaultValue="/chat_posts/create"
        className="d-none" />
        <hr className="my-1" />        
        <button type="submit"
        className="ms-2 bg-transparent hover:bg-purple-500 text-purple-700 font-semibold hover:text-white py-1 px-4 border border-purple-500 hover:border-transparent rounded"
        >Reply</button>
      </form>
      <hr className="my-1" />
      {/*list pageItem_wrap */}
      <div id="resulte_add_thread" className="">
        {pageItem.map((item: any, index: number) => {
        return (
        <div key={index}>
          <div className="text-1xl">{item.user_name}: {item.createdAt} </div>
          <span>ID: {item.thread_id}</span>
          <div className="text-1xl">{item.body}</div>
          <form className="my-0"
          hx-post="/api/thread/delete"
          hx-trigger="submit"
          hx-target="#resulte_add_thread"
          hx-on--after-request=""
          >
            <input type="hidden" name="id" defaultValue={item.thread_id} />
            <input type="hidden" name="chatPostId" defaultValue={props.id} />
            <button type="submit"
            className="ms-2 bg-transparent hover:bg-purple-500 text-purple-700 font-semibold hover:text-white py-1 px-4 border border-purple-500 hover:border-transparent rounded"
            >Delete</button>
          </form>
          <hr />
        </div>
        )
        })}      
       </div>
       {/*  <div id="resulte_delete"></div>  */}
      {/* footer */}
      <button id={`button_modalDialog_${props.id}`}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-8 rounded"
      type="submit" value="OK">Ok</button>
    </div>
  </dialog>
  );
}
export default Compo;