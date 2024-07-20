
console.log("js/Zod2.js");
const DIALOG_NAME1 = "modalDialog_1";
const ERROR_DIALOG_NAME1 = "errorModalDialog_1";
//
const Zod2 ={
  /**
  *
  * @param
  *
  * @return
  */   
  afterPostForm1: function()  {
    try{
      console.log("#startProc: Login");
      Util.clearErrorsItem([
        'error_message_title', 'error_message_content'
      ]);
      const resulte_form1 = document.querySelector('#resulte_form1') as HTMLElement;
      if(!resulte_form1){
        return;
      }
      const htm = resulte_form1.innerHTML;
      const obj = JSON.parse(htm);
      console.log(obj);
      //console.log("resulte_code=", obj.success);
      if(!obj.success) {
        Util.dialogShow(ERROR_DIALOG_NAME1);
        console.log(obj.errors);  
        let s = "";
        if(obj.errors.title){
          const tmp = "title: " + obj.errors.title + "\n";
          s += tmp;
          Util.setInnerHTMLById("error_message_title", tmp);
        }
        if(obj.errors.content){
          const tmp = "content: " + obj.errors.content + "\n";
          s += tmp;
          Util.setInnerHTMLById("error_message_content", tmp);
        }
        //alert(s);
      }else{
        Util.dialogShow(DIALOG_NAME1);
        //alert("OK");
      }
    } catch (e) {
      console.error(e);
    }
  }
}
