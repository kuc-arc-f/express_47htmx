import axios from 'axios';

const HttpCommon = {
    /*
    post: async function(item: any, path: string): Promise<any>
    {
      try {
        const url = PUBLIC_API_URL;
        const apiKey = PUBLIC_API_KEY;
  console.log(url, path);
        item.api_key = apiKey;
        const body: any = JSON.stringify(item);		
        const res = await fetch(url + path, {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},      
          body: body
        });
        const json = await res.json()
        if (res.status !== 200) {
          throw new Error(await res.text());
        }
        if (json.ret !==  LibConfig.OK_CODE) {
          console.error(json);
          throw new Error("Error, json.ret <> OK");
        } 
        return json;
      } catch (e) {
        console.error(e);
        throw new Error('Error , post');
      }
    }, 
    */
    /**
    * 
    * @param
    *
    * @return
    */ 
    serverPost: async function(item: any, path: string): Promise<any>
    {
      try {
        const url = process.env.PUBLIC_API_URL;
        const apiKey = process.env.PUBLIC_API_KEY;
  //console.log("#getList.apiKey=" + apiKey);
  /*
        const item  = {
            "userId": 0,
            api_key:  apiKey,
        } 
  */
        item.api_key = apiKey;
        item.path = path;
        console.log(item);
//        const path = "/chats/get_list";	
        console.log("path=", url + path);
        const response = await axios.post(url + path, item, 
            {headers: { 'Content-Type': 'application/json'}
        });
        const data = response.data;
console.log(data);
        //@ts-ignore
        return data;
    } catch (e) {
        console.error(e);
        throw new Error('Error , post');
      }
    },  
  }
  export default HttpCommon;
/*
const body: any = JSON.stringify(item);	
const res = await fetch("/api/api_send", {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},      
    body: body
});
const json = await res.json()
if (res.status !== 200) {
    console.log(json);   
    throw new Error(await res.text());
}
if (json.ret !==  "OK") {
    throw new Error("Error, json.ret <> OK");
} 
*/
