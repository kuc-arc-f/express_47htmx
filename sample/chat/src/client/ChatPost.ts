console.log("#Htmx6.tsx");
let dialogId = 0;
/**
 *
 * @param
 *
 * @return
 */  
function beforePostForm1(id: number){
  try{
    console.log("beforePostForm1" , id);
    dialogId = id;
    console.log("dialogId" , dialogId);
  } catch (e) {
    console.error(e);
  }
}

/**
 *
 * @param
 *
 * @return
 */  
function afterPostForm1(id: number){
  try{
    console.log("afterPostForm1");
    console.log("id=", `modalDialog_${id}`);
    Util.dialogShow(`modalDialog_${id}`);
    /*
    const resulte_form1 = document.querySelector('#resulte_form1') as HTMLElement;
    if(!resulte_form1){
      return;
    }
    const htm: string = resulte_form1.innerHTML;
    const obj = JSON.parse(htm);
console.log(obj);
     */
  } catch (e) {
    console.error(e);
  }
}

