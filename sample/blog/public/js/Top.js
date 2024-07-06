const Top = {
    /*
    search : async function() {
      try{
        const searchKey = document.querySelector("#searchKey");
        let ret= [];
        const item = {
            siteId: 0,
            seachKey: searchKey?.value,
        }
        const json = await HttpCommon.serverPost(item, "/api/posts/search");
  console.log(json);
        ret = json.data;
        return ret;
      } catch (e) {
          console.error(e);
          throw new Error('Error , search');
      }
    },   
    */
    /**
     *
     * @param key: any
     *
     * @return
     */
    hiddenListArea: async function() {
  //    console.log("#initProc");
      const post_list_wrap = document.querySelector(`.post_list_wrap`);
      if (!post_list_wrap.classList.contains('d-none')) 
      {
          post_list_wrap?.classList.add('d-none');
      }
    },
    /*
     initProc: async function() {
      console.log("#initProc");
      const btn_search = document.querySelector('#btn_search');
      btn_search?.addEventListener('click', async () => {
          const post_list_wrap = document.querySelector(`.post_list_wrap`);
          if (!post_list_wrap.classList.contains('d-none')) {
              post_list_wrap?.classList.add('d-none');
          }
          const res = await this.search();
      });  
    },
    */
  }