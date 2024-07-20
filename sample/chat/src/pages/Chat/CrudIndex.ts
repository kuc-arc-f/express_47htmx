//import LibConfig from '$lib/LibConfig';
import axios from 'axios';
import HttpCommon from '../../lib/HttpCommon';
//
const CrudIndex = {
  /**
  * getList
  * @param
  *
  * @return
  */
  getList :async function (): Promise<any>
  {
    try{
      const json = await HttpCommon.serverPost({}, "/chats/get_list");
      //console.log(json);
      return json.data;
    } catch (e) {
      console.error(e);
      throw new Error("Error, getList");
    } 
  }  ,  
  /**
  *
  * @param
  *
  * @return
  */
  get :async function (id: number): Promise<any>
  {
    try{
      const json = await HttpCommon.serverPost({}, "/chats/get_list");
      return json;
    } catch (e) {
      console.error(e);
      throw new Error("Error, getList");
    } 
  },

}

export default CrudIndex;
