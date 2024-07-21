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
  } catch (e) {
    console.error(e);
  }
}
//
const ChatPost = {
  /**
   *
   * @param
   *
   * @return
   */  
  afterAddThread(){
    try{
      console.log("afterAddThread");
      const elem = document.querySelector<HTMLInputElement>('#thread_body');
      if(elem){
        elem.value = "";
      }
    } catch (e) {
      console.error(e);
    }
  },  
}
