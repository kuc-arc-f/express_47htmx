import axios from 'axios';
//
const CrudIndex = {
  /**
  * 
  * @param
  *
  * @return
  */ 
  getList: async function() : Promise<any>
  {
    try {
      const url = process.env.EXTERNAL_API_URL; 
      const path = "/test/get_list";	
      console.log("path=", url + path);
      const item  = {
        "userId": 0,
      } 
      const response = await axios.post(url + path, item, 
        {headers: { 'Content-Type': 'application/json'}
      });
      const data = response.data;
//console.log(data.ret);
      //@ts-ignore
      return data.data;
    } catch (error) {
      console.error(error);
      throw new Error('Error , getList');
    }
  },
  /**
  * 
  * @param
  *
  * @return
  */ 
  get: async function(id : number) : Promise<any>
  {
    try {
      let ret = {};
      /*
      const client = await LibTurso.getClient();
      const sql = `SELECT * FROM todos WHERE id=${id};`;
console.log(sql);
      const resulte = await client.execute(sql);
      if(resulte.rows.length){
        ret = resulte.rows[0];
      }
      */
    //console.log(ret);
      return ret;
    } catch (error) {
      console.error(error);
      throw new Error('Error , get');
    }
  },  
}
export default CrudIndex;