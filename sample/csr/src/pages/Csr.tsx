import Layout from './Layout';
import ErrorDialogBox from '../components/ErrorDialogBox';
import DialogBox from '../components/DialogBox';
//
const ERROR_DIALOG_NAME1 = "errorModalDialog_1";
const DIALOG_NAME1 = "modalDialog_1";

//
export default function Page(pegeItems) {
console.log("#TestApi");
//console.log(pegeItems);
  //
  return (
  <Layout>
    {/* load */}
    <div className="load_wrap d-none">
      <form hx-post="/api/csr/load_list"
      hx-trigger="load" hx-target="#resulte_load" >
        <label>name: </label><br />
        <input type="text" name="name" defaultValue={`name123`}/>
      </form>
    </div>
    {/* container */}
    <div className="container mx-auto my-2 px-2">
      <h1 className="text-4xl font-bold">Csr.tsx</h1>
      <hr className="my-2" />
      <form className="my-0"
      hx-post="/api/common/send_post_validate"
      hx-trigger="submit"
      hx-target="#resulte_form1"
      hx-on--before-request="Csr.beforePostForm1()"
      hx-on--after-request="Csr.afterPostForm1()"
      >
        <label>title:
          <input type="text" name="title" 
          className="mx-2 border border-gray-400 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
          />
        </label>
        <div className="error_message" id="error_message_title"></div>
        <hr className="my-1" />
        <label>Content:
          <input type="text" name="content"
          className="mx-2 border border-gray-400 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
          />
        </label>
        <br />
        <div className="error_message" id="error_message_content"></div>
        {/*  */}
        <input type="text" name="api_url" defaultValue="/test/create"
        className="d-none" />
        <hr className="my-1" />
        <button type="submit"
        className="ms-2 bg-transparent hover:bg-purple-500 text-purple-700 font-semibold hover:text-white py-1 px-4 border border-purple-500 hover:border-transparent rounded"
        >Add</button>
      </form>
      <h3 id="resulte_form1" className="d-none"></h3>
      <hr />
      {/* List */}
      <div id="resulte_load"></div>
    </div>
    {/* dialog */}
    <DialogBox message={`OK, Save`} id={DIALOG_NAME1} />
    <ErrorDialogBox message={`NG, Check!`} id={ERROR_DIALOG_NAME1} />
    {/* script */}
    {(process.env.NODE_ENV === "develop") ? (
    <>
      <script src="/static/Util.js"></script>
      <script src="/static/Csr.js"></script>
    </>  
    ): (
    <>
      <script src="/public/static/Util.js"></script>
      <script src="/public/static/Csr.js"></script> 
    </>
    )}

  </Layout>
  )
} 
/*
*/
