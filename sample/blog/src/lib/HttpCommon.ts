import LibConfig from './LibConfig';
//
const HttpCommon = {
  /**
  * 
  * @param
  *
  * @return
  */ 
  post: async function(item: any, path: string): Promise<any>
  {
    try {
      const url = process.env.VITE_API_URL;
      const siteId = process.env.VITE_SITE_ID;
      const apiKey = process.env.VITE_API_KEY;
//console.log("#getList.apiKey=" + apiKey);
      item.api_key = apiKey
      item.siteId = Number(siteId);
//console.log("#post");
//console.log(item);
      const body: any = JSON.stringify(item);		
      const res = await fetch(url + path, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},      
        body: body
      });
      const json = await res.json()
//console.log(json);   
      if (res.status !== 200) {
        console.error("error, status <> 200");
        throw new Error(await res.text());
      }
      if (json.ret !==  LibConfig.OK_CODE) {
        console.error("Error, json.ret <> OK");
        return {};
      } 
      return json;
    } catch (e) {
      console.error(e);
      throw new Error('Error , post');
    }
  }, 
  /**
  * 
  * @param
  *
  * @return
  */ 
  server_post: async function(item: any, path: string): Promise<any>
  {
    try {

    } catch (e) {
      console.error(e);
      throw new Error('Error , post');
    }
  },  
}
export default HttpCommon;
