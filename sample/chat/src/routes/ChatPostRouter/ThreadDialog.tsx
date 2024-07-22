//import {items1} from '../../pages/Htmx6/data';
//import Thread from './Thread';
import ThreadList from './ThreadList';
//
let pageItem : any[] = [];
let postItem: any = {};
//
function Compo(props: any) {
//console.log("#ThreadDialog.tsx");
//console.log(props);
  pageItem = props.items;
  if(props.post){
    postItem = props.post;
  }
//console.log(postItem);
  return (
  <dialog id={`modalDialog_${props.id}`} className="dialog">
    <div className="bg-white px-8 pt-3 pb-3 dialog_body_wrap">
      <span className="text-2xl font-bold mb-2">{postItem.user_name}
      </span>
      <span className="mb-2 ms-2">{postItem.createdAt}
      </span>
      <hr className="my-1" />
      <p className="mb-2">{postItem.body}</p>
      {/* add_thread */}
      <form className="my-0"
      hx-post="/api/thread/create"
      hx-trigger="submit"
      hx-target="#resulte_add_thread"
      hx-on--before-request=""
      hx-on--after-request="ChatPost.afterAddThread()"
      >
        <label>
          <input type="text" name="thread_body" id="thread_body"
          className="mx-0 w-full border border-gray-400 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
          />
        </label>
        <div className="error_message" id="error_message_title"></div>
        {/*  */}
        <input type="hidden" name="userId" defaultValue={props.userId} />
        <input type="hidden" name="chatId" defaultValue={props.chatId} />
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
        <ThreadList id={props.id} items={pageItem} ></ThreadList>    
      </div>
      {/* footer */}
      <hr className="my-2" />
      <button id={`button_modalDialog_${props.id}`}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-8 rounded"
      type="submit" value="OK">Close</button>
      <form
        hx-post="/api/chatpost/delete"
        hx-trigger="submit"
        hx-target="#resulte_post_delete"
        hx-on--after-request="location.reload()"
        className= "my-0"
        >
        <input type="hidden" name="id" defaultValue={props.id} 
        />
        <button 
        className="ms-2 bg-transparent hover:bg-purple-500 text-purple-700 font-semibold hover:text-white py-1 px-4 border border-purple-500 hover:border-transparent rounded"
        type="submit"
        >Delete</button>
      </form>
      <span id="resulte_post_delete"></span>
      <hr className="my-1" />
    </div>
  </dialog>
  );
}
export default Compo;
/*

*/