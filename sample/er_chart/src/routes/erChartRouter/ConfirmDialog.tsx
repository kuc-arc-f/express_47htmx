//import {items1} from '../../pages/Htmx6/data';
let pageItem = {};
//
function Compo(props: any) {
console.log(props);
/*
  const target = items1.filter((item) => item.id === Number(props.id));
  if(target.length > 0){
    pageItem = target[0];
    console.log(pageItem);
  }
*/
  if(props.item){
    pageItem = props.item;
  }
  //
  return (
  <div>
    <dialog id={`modalDialog_${props.id}`} className="dialog">
      <div className="bg-white px-8 pt-3 pb-3 dialog_body_wrap">
        <p className="text-3xl font-bold">{pageItem.title}</p>
        <hr className="my-1" />
        {pageItem.content ? (
        <pre className="mermaid">{pageItem.content}</pre>
        ) : null}
        <button id={`button_modalDialog_${props.id}`}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-8 rounded"
          type="submit" value="OK">Ok</button>
      </div>
    </dialog>
    {/* script */}
    <script type="module" src="/mermaid_load.js"></script>
  </div>
  );
}
export default Compo;