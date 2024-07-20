console.log("#Htmx5.tsx");
//btn
const btn = document.getElementById(`btn_test`);
btn?.addEventListener('click', async () => {
  console.log("btn-start");
  alert("btn-start");
  //
  const frm = document.getElementById(`form1`) as HTMLFormElement;
  if(frm){
    frm.submit();
  }
}); 
/**
 *
 * @param
 *
 * @return
 */  
function afterPostForm1(){
  try{
    console.log("afterPostForm1");
    const resulte_form1 = document.querySelector('#resulte_form1') as HTMLElement;
    if(!resulte_form1){
      return;
    }
    const htm: string = resulte_form1.innerHTML;
    const obj = JSON.parse(htm);
console.log(obj);
  } catch (e) {
    console.error(e);
  }
}

