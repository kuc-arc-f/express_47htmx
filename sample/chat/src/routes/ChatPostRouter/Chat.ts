//import LibConfig from '$lib/LibConfig';
import HttpCommon from '../../lib/HttpCommon';

//
const Chat = {
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
  * 
  * @param chatPostId: number
  *
  * @return
  */     
  get : async function (chatPostId: number): Promise<any>
  {
   try{
     const item = {
      id: chatPostId,
    }   
     const json = await HttpCommon.serverPost(item, "/chat_posts/get");
//console.log(json);
     return json.data;
   } catch (e) {
     console.error(e);
     throw new Error('Error, get');
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
  create : async function (req: any): Promise<void>
   {
    try{
      const body = req.body;
      const item = {
        title: '',
        name: body.name,
        userId: 0,
//        chatId: Number(body.chatId),
      }
console.log(item);
      const json = await HttpCommon.serverPost(item, '/chats/create');
      console.log(json);
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
      const json = await HttpCommon.serverPost(item, "/chats/delete");
      console.log(json);
      return ret;
    } catch (e) {
      console.error(e);
      throw new Error('Error, delete');
    }
   }, 
     
}
export default Chat;
