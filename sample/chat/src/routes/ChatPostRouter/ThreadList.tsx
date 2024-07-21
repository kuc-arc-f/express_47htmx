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
        <hr />
      </div>
      )
    })} 
  </div>
  );
}
export default Compo;