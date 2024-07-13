
console.log("js/Login.js");
//
const Zod1 ={
  /**
  * startProc
  * @param
  *
  * @return
  */   
  afterPostForm1: function()  {
    try{
      console.log("#startProc: Login");
      const resulte_form1 = document.querySelector('#resulte_form1');
      if(!resulte_form1){
        return;
      }
      const htm = resulte_form1.innerHTML;
      const obj = JSON.parse(htm);
      console.log(obj);
      //console.log("resulte_code=", obj.success);
      if(!obj.success) {
        console.log(obj.errors);  
        let s = "";
        if(obj.errors.title){
          s += "title: " + obj.errors.title + "\n";
        }
        if(obj.errors.content){
          s += "content: " + obj.errors.content + "\n";
        }
        alert(s);
      }else{
        alert("OK");
      }
    } catch (e) {
      console.error(e);
    }
  }
}
