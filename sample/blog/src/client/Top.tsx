import HttpCommon from './lib/HttpCommon';

function test_func1(){
  console.log("#test_func1");
}
test_func1();

//
const Top = {
  /**
   *
   * @param
   *
   * @return
   */   
  search : async function(): Promise<any>
  {
    try{
//      const siteId = import.meta.env.VITE_SITE_ID;
      const searchKey = document.querySelector("#searchKey");
      let ret: any[] = [];
      const item = {
          siteId: 0,
          seachKey: searchKey?.value,
      }
      //console.log(item);
      const json = await HttpCommon.serverPost(item, "/api/posts/search");
console.log(json);
      ret = json.data;
      return ret;
    } catch (e) {
        console.error(e);
        throw new Error('Error , search');
    }
  },   
  /**
   *
   * @param key: any
   *
   * @return
   */
  hiddenListArea: async function() {
//    console.log("#initProc");
    const post_list_wrap = document.querySelector(`.post_list_wrap`) as HTMLInputElement;
    if (!post_list_wrap.classList.contains('d-none')) 
    {
        post_list_wrap?.classList.add('d-none');
    }
  },
   /**
   *
   * @param key: any
   *
   * @return
   */
   initProc: async function() {
    console.log("#initProc");
//    const siteId = import.meta.env.VITE_SITE_ID;
    const btn_search = document.querySelector('#btn_search');
    btn_search?.addEventListener('click', async () => {
        const post_list_wrap = document.querySelector(`.post_list_wrap`) as HTMLInputElement;
        if (!post_list_wrap.classList.contains('d-none')) {
            post_list_wrap?.classList.add('d-none');
        }
        const res = await this.search();
//        this.displayItems(res);
//console.log(res);
    });  
  },
}
//export default Top;
