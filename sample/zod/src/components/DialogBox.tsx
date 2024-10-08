//
function Compo(props: any) {
console.log(props);
  /*
  const closeButton = function(){
    const dlg = document.getElementById('modalDialog');
    if(dlg) {
      dlg.close();
    }
  }
  */
  return (
  <dialog id={`${props.id}`} className="dialog">
    <div className="bg-white px-8 pt-3 pb-3 dialog_body_wrap">
      <p className="text-3xl font-bold">{props.message}</p>
      <hr className="my-3" />
      <button id={`button_${props.id}`}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-8 rounded"
        type="submit" value="OK">Ok</button>
    </div>
  </dialog>
  );
}
export default Compo;
/*
*/