import Layout from './Layout';
import ErrorDialogBox from '../components/ErrorDialogBox';
import DialogBox from '../components/DialogBox';
import ErChartBox from './ErChart/ErChartBox';
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
    <div className="container mx-auto my-2 px-2">
      <h1 className="text-4xl font-bold">ErChart.tsx</h1>
      <hr className="my-2" />
      <form className="my-0"
      hx-post="/api/common/send_post_validate"
      hx-trigger="submit"
      hx-target="#resulte_form1"
      hx-on--before-request="ErChart.beforePostForm1()"
      hx-on--after-request="ErChart.afterPostForm1()"
      >
        <label>title:
          <input type="text" name="title" 
          className="mx-0 border border-gray-400 rounded-md px-0 py-2 w-full focus:outline-none focus:border-blue-500"
          />
        </label>
        <div className="error_message" id="error_message_title"></div>
        <hr className="my-1" />
        <label>
        <div>Content:</div>
        <textarea  
        rows={5}
        className="border border-gray-400 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"
        name="content" id="content"
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
      {pegeItems.map((item: any, index: number) => {
      return (
      <div key={index}>
        <h3 className="text-3xl font-bold">{item.title}</h3>
        <span>ID: {item.id}, {item.createdAt}</span>
        <a href={`/erchartshow/${item.id}`}>
          <button
          className="ms-2 bg-transparent hover:bg-purple-500 text-purple-700 font-semibold hover:text-white py-1 px-4 border border-purple-500 hover:border-transparent rounded"
          >Show</button>
        </a>
        {/* delete */}
        <form className="my-0"
          hx-post="/api/test/render_confirm1"
          hx-trigger="submit"
          hx-target={`#resulte_text${item.id}`} >
          <input type="hidden" name="id" defaultValue={item.id} />
          <button type="submit"
          className="ms-2 bg-transparent hover:bg-purple-500 text-purple-700 font-semibold hover:text-white py-1 px-4 border border-purple-500 hover:border-transparent rounded"
          >Delete</button>
        </form>
        <div id={`resulte_text${item.id}`}></div>
        {/* Show */}
        {/*
        <form className="my-0"
          hx-post="/api/er_chart/render_confirm2"
          hx-trigger="submit"
          hx-target={`#resulte_text${item.id}`} 
          hx-on--before-request={`beforePostForm1(${item.id})`}
          hx-on--after-request={`afterPostForm1(${item.id})`}
          >
          <input type="text" name="id" defaultValue={item.id} />
          <button type="submit">[ open ]</button>
        </form>
        <div id={`resulte_text${item.id}`}></div>
        */}
        <hr />
      </div>
      )
      })}
    </div>
    {/* dialog */}
    <DialogBox message={`OK, Save`} id={DIALOG_NAME1} />
    <ErrorDialogBox message={`NG, Check!`} id={ERROR_DIALOG_NAME1} />
    {/* script */}
    {(process.env.NODE_ENV === "develop") ? (
    <>
      <script src="/static/Util.js"></script>
      <script src="/static/ErChart.js"></script>
    </>  
    ): (
    <>
      <script src="/public/static/Util.js"></script>
      <script src="/public/static/ErChart.js"></script> 
    </>
    )}

  </Layout>
  )
} 
/*
<script type="module" src="/public/mermaid_load.js"></script>
*/
