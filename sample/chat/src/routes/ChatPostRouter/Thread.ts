//import LibConfig from '$lib/LibConfig';
import HttpCommon from '../../lib/HttpCommon';

//
const Thread = {
  /**
  * getItems
  * @param chatPostId: number
  *
  * @return
  */   
  getItems : async function (chatPostId: number): Promise<any>
  {
   try{
     const item = {
       chatPostId: chatPostId,
     }      
     const json = await HttpCommon.serverPost(item, "/threads/get_list");
//console.log(json);
     return json.data;
   } catch (e) {
     console.error(e);
     throw new Error('Error, getItems');
   }
  },
  /**
  * getChatItems : chat単位リスト
  * @param chatId: number
  *
  * @return
  */   
  getChatItems : async function (chatId: number): Promise<any>
  {
   try{
     const item = {
      chatId: chatId,
     }      
     const json = await HttpCommon.serverPost(item, "/threads/get_list_chat");
//console.log(json);
     return json.data;
   } catch (e) {
     console.error(e);
     throw new Error('Error, getChatItems');
   }
  },
 
  /**
  * create
  * @param chatPostId: number
  *
  * @return
  */   
  create : async function (req: any)  {
    try{
      const body = req.body;
      const item = {
        title: '',
        body: body.thread_body,
        userId: body.userId,
        chatId: body.chatId,
        chatPostId: body.chatPostId,
      }
//console.log(item);
      const json = await HttpCommon.serverPost(item, "/threads/create");
      //console.log(json);
      return json;
    } catch (e) {
      console.error(e);
      throw new Error('Error, create');
    }
   },  
  /**
  *
  * @param id: number
  *
  * @return
  */
  delete: async function (id: number): Promise<any>
   {
    try{
      let ret = false;
      const item = {
        id: id
      }
      const json = await HttpCommon.serverPost(item, "/threads/delete");
      console.log(json);
      return ret;
    } catch (e) {
      console.error(e);
      throw new Error('Error, delete');
    }
   }, 
  /**
  *
  * @param
  *
  * @return
  */
  search: async function(chatId: number, searchKey: string): Promise<any>
  {
    try {
        let items = [];
        const item = {
          chatId: chatId,
          seachKey : searchKey,
        }
        const json = await HttpCommon.serverPost(item, "/threads/search");
        items = json.data
// /console.log(items);	      
      return items;
    } catch (e) {
      console.error(e);
    }
  },       
}
export default Thread;
