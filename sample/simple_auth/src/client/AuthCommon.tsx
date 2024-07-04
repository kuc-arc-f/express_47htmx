
import LibConfig from './lib/LibConfig';
//
const AuthCommon = {
  /**
   *
   * @param key: any
   *
   * @return
   */  
  startProc : async function() : Promise<any>
  {
console.log("#AuthCommon.startProc");
    let ret = false;
    const parsedUrl = new URL(window.location.href);
    if(
        !(parsedUrl.pathname === '/login' ||
        parsedUrl.pathname === '/user/create'
        )
    )
    {
console.log("LibLayout.pathname=", parsedUrl.pathname);
//      const name = process.env.VITE_APP_NAME + "_auth";
      const authValue = localStorage.getItem(LibConfig.STORAGE_KEY_AUTH);
      console.log(authValue);
      if(!authValue){
        location.href = '/login';
        return;
      }
    }
    return ret;
  }
}
AuthCommon.startProc();

export default AuthCommon;
