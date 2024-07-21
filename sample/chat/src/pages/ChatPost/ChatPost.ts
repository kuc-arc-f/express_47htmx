//import LibConfig from '../../lib/LibConfig';
import HttpCommon from '../../lib/HttpCommon';

//
const ChatPost = {
  /**
   * getList:
   * @param key: any
   *
   * @return
   */ 
  getList: async function(chatId: number): Promise<any>
  {
    try {
      let items = [];
      const item = {
        chatId: chatId,
        userId : 0,
      }
      const json = await HttpCommon.serverPost(item, "/chat_posts/get_list");
      items = json.data
      //console.log(items);	      
      return items;
    } catch (e) {
      console.error(e);
    }
  },

}
export default ChatPost;
