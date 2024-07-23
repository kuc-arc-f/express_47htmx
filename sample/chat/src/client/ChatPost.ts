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
  //beforePostForm1
  beforePostForm1: function()  {
    try{
      console.log("#startProc: Login");
      /*
      Util.clearErrorsItem([
        'error_message_title', 'error_message_content'
      ]);
      */
      const resulte_form1 = document.querySelector('#resulte_form1') as HTMLElement;
      if(!resulte_form1){
        return;
      }
      const htm = resulte_form1.innerHTML;
      const obj = JSON.parse(htm);
      console.log(obj);
    } catch (e) {
      console.error(e);
    }
  },
  /**
  *
  * @param
  *
  * @return
  */   
  afterPostForm1: function()  {
    try{
      console.log("#startProc: Login");
      const resulte_form1 = document.querySelector('#resulte_form1') as HTMLElement;
      if(!resulte_form1){
        return;
      }
      const htm = resulte_form1.innerHTML;
      const obj = JSON.parse(htm);
      console.log(obj);
      //console.log("resulte_code=", obj.success);
      if(obj.ret !== "OK" && obj.errors) {
        //Util.dialogShow(ERROR_DIALOG_NAME1);
        console.log(obj.errors);  
        if(obj.errors.body){
          const s = "body: " + obj.errors.body + "\n";
          Util.setInnerHTMLById("error_message_body", s);
        }
      }else{
        alert("OK, save");
        location.reload();
      }
      /*
      */
    } catch (e) {
      console.error(e);
      alert("Error, Save");
    }
  },
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
