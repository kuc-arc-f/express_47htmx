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
      <p className="text-3xl font-bold">{pageItem.title}</p>
      <hr className="my-1" />
      {/*list */}
      {pageItem.map((item: any, index: number) => {
      return (
      <div key={index}>
        <div className="text-1xl">{item.user_name}: {item.createdAt} </div>
        <div className="text-1xl">{item.body}</div>
        <hr />
      </div>
      )
      })}      
      <button id={`button_modalDialog_${props.id}`}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-8 rounded"
      type="submit" value="OK">Ok</button>
    </div>
  </dialog>
  );
}
export default Compo;