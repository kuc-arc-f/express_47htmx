
console.log("js/TestApi.js");
const DIALOG_NAME1 = "modalDialog_1";
const ERROR_DIALOG_NAME1 = "errorModalDialog_1";
//
const TestApi ={
  //beforePostForm1
  beforePostForm1: function()  {
    try{
      console.log("#startProc: Login");
      Util.clearErrorsItem([
        'error_message_title', 'error_message_content'
      ]);
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
      if(obj.ret !== "OK" && obj.errors) {
        Util.dialogShow(ERROR_DIALOG_NAME1);
        console.log(obj.errors);  
        let s = "";
        if(obj.errors.title){
          const s = "title: " + obj.errors.title + "\n";
          Util.setInnerHTMLById("error_message_title", s);
        }
        if(obj.errors.content){
          const s = "content: " + obj.errors.content + "\n";
          Util.setInnerHTMLById("error_message_content", s);
        }
        //alert(s);
      }else{
//        Util.dialogShow(DIALOG_NAME1);
        alert("OK, save");
        location.reload();
      }
    } catch (e) {
      console.error(e);
      alert("Error, Save");
    }
  }
}
