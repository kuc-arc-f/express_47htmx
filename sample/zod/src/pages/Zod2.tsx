// GET-send, Test
import Layout from './Layout';
import ErrorDialogBox from '../components/ErrorDialogBox';
import DialogBox from '../components/DialogBox';
const ERROR_DIALOG_NAME1 = "errorModalDialog_1";
const DIALOG_NAME1 = "modalDialog_1";
//
export default function Page() {
  return (
  <Layout>
    <div className="container mx-auto my-2 px-2">
      <h1 className="text-4xl font-bold">Zod2.tsx</h1>
      <hr className="my-2" />
      <form
      hx-post="/api/zod/test"
      hx-trigger="submit"
      hx-target="#resulte_form1"
      hx-on="htmx:afterRequest: Zod2.afterPostForm1()"
      >
        <label>title</label>
        <input type="text" name="title"
        className="mx-2 border border-gray-400 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500" 
        /><br />
        <div className="error_message" id="error_message_title"></div>

        <hr className="my-2" />
        <label>content</label>
        <input type="text" name="content"
        className="mx-2 border border-gray-400 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
        />   
        <div className="error_message" id="error_message_content"></div>
        <hr className="my-2" />
        <button type="submit"
        className="ms-2 bg-transparent hover:bg-purple-500 text-purple-700 font-semibold hover:text-white py-2 px-4 border border-purple-500 hover:border-transparent rounded"
        >Add</button>
      </form>
      <hr />
      <div id="resulte_form1" className="d-none">ここに表示</div>
    </div>
    {/* dialog */}
    <DialogBox message={`OK, Check Complete!!`} id={DIALOG_NAME1} />
    <ErrorDialogBox message={`NG, Check!`} id={ERROR_DIALOG_NAME1} />
    {/* script */}
    {(process.env.NODE_ENV === "develop") ? (
    <>
      <script src="/static/Util.js"></script>
      <script src="/static/Zod2.js"></script>
    </>  
    ): (
    <>
      <script src="/public/static/Util.js"></script>
      <script src="/public/static/Zod2.js"></script> 
    </>
    )}
  </Layout>
  )
}
/*
*/
