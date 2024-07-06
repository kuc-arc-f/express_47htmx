import HttpCommon from '../lib/HttpCommon';
import LibPagenate from '../lib/LibPagenate';

const perPage = 10;
//
interface Env {
    DB: Database
}
const retObj = {ret: "NG", data: [], message: "Error, Internal Server Error"};

const Router = {
    /**
     *
     * @param
     *
     * @return
     */ 
    get_list: async function()
    {
//console.log("#get_list");
        try{    
            const item = {
            };
            const json = await HttpCommon.post(item, "/api/posts/get_list");
//console.log(json.data);
            return json.data;
        } catch (e) {
            console.error(e);
            return [];
        } 
    },
    /**
     *
     * @param
     *
     * @return
     */ 
    get_list_page: async function(page: number)
    {
//console.log("#get_list");
        try{    
            const pinfo = LibPagenate.getPageStart(page, perPage);
console.log(pinfo);
            const item = {
                "limit": pinfo.end,
                "offset": pinfo.start,
            };
            const json = await HttpCommon.post(item, "/api/posts/get_list_page");
            /*
            */
//console.log(json.data);
            return json.data;
        } catch (e) {
            console.error(e);
            return [];
        } 
    },

    /**
     *
     * @param
     *
     * @return
     */ 
    search: async function(body, c)
    {
//console.log("#search");
        try{    
            try{    
                const item = {
                    "seachKey": body.seachKey,
                };
                const json = await HttpCommon.post(item, "/api/posts/search");
    //console.log(json.data);
                return json.data;
            } catch (e) {
                console.error(e);
                return [];
            } 
        } catch (e) {
            console.error(e);
            return [];
        } 
    },
    /**
     *
     * @param
     *
     * @return
     */    
    get: async function(id: number)
    {
        //console.log("#get");
        try{    
            const item = {
                id: id
            };
            const json = await HttpCommon.post(item, "/api/posts/get");
//console.log(json);
            return json.data;
        } catch (e) {
            console.error(e);
            return {};
        } 
    },    

}
export default Router;