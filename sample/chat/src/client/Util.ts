//
const Util = {
  /**
  *
  * @param
  *
  * @return
  */
  clearErrorsItem: function(items : any): void 
  {
      try{
          const idList: any[] = items;
          idList.forEach((id) => {
              const inputElement = document.querySelector(`#${id}`) as HTMLElement;
              if (inputElement) {
                inputElement.innerHTML = "";
              }                
          });
      } catch (e) {
        console.error(e);
        throw new Error('Error , clearErrorsItem');
      }
  },  
  /**
  *
  * @param
  *
  * @return
  */  
  setInnerHTMLById: function(idName: string, value: string){
    try{    
      const elem = document.getElementById(idName) as HTMLElement;
      if(elem) {
        elem.innerHTML = value;
      }
    } catch (e) {
      console.error(e);
      throw new Error("Error, setInnerHTMLById");
    }
  }, 
  /**
  *
  * @param
  *
  * @return
  */
  dialogShow: function(idName: string){
    try{    
      const dlg = document.getElementById(idName);
      if(dlg) {
        //@ts-ignore
        dlg.showModal();
        //btn
        const btn = document.getElementById(`button_${idName}`);
        btn?.addEventListener('click', async () => {
          //@ts-ignore
          dlg.close();
        });  
      }
    } catch (e) {
      console.error(e);
      throw new Error("Error, dialogShow");
    }
  },

}
