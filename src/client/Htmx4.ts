console.log("# Htmx4.tsx");

/**
 *
 * @param
 *
 * @return
 */  
function afterPostForm1(){
  try{
    console.log("afterPostForm1");
    const resulte_form1 = document.querySelector('#resulte_form1');
    if(!resulte_form1){
      return;
    }
    const htm = resulte_form1.innerHTML;
    const obj = JSON.parse(htm);
console.log(obj);
  } catch (e) {
    console.error(e);
  }
}

