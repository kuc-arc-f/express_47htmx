import LibTurso from '../../lib/LibTurso';
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
      const client = await LibTurso.getClient();
      //console.log("url=", process.env.API_URL);
      const resulte = await client.execute("SELECT * FROM todos ORDER BY id desc");
//      console.log(resulte.rows);
      return resulte.rows
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
      const client = await LibTurso.getClient();
      const sql = `SELECT * FROM todos WHERE id=${id};`;
console.log(sql);
      const resulte = await client.execute(sql);
      if(resulte.rows.length){
        ret = resulte.rows[0];
      }
    //console.log(ret);
      return ret;
    } catch (error) {
      console.error(error);
      throw new Error('Error , get');
    }
  },  
}
export default CrudIndex;