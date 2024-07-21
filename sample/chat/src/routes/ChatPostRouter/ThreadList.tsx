import {items1} from '../../pages/Htmx6/data';
import Thread from './Thread';

let pageItem : any[] = [];
//
function Compo(props: any) {
//console.log(props);
  pageItem = props.items;
//console.log(pageItem);
  return (
  <div>
    {pageItem.map((item: any, index: number) => {
    return (
      <div key={index}>
        <div className="text-1xl">{item.user_name}: {item.createdAt} </div>
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
  );
}
export default Compo;