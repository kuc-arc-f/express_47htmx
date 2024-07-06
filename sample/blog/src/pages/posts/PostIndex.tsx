import Layout from '../Layout';
//let pegeItems: any[] = [];
let nextPage = 1;
let beforePage = 1;
//
export default function Page(props: any) {
  if(props.page){
    nextPage = Number(props.page) + 1;
    beforePage = Number(props.page) - 1;
    if(beforePage <= 1) { beforePage = 1;}
  }
  //console.log(pegeItems);
  //
  return (
  <Layout>
    <div className="text-center py-16 bg-gray-400 text-white mt-10">
      <h1 className="text-4xl font-bold">{props.site.name}</h1>
    </div>
    <input type="text" className="d-none" id="item_id" defaultValue={0} />
    <div className="col-md-6 text-end  bg-white py-1">
      <span className="search_key_wrap">
        <form
        hx-post="/api/post/search_elem"
        hx-trigger="submit"
        hx-target="#search_result"
        hx-on="htmx:beforeRequest: Top.hiddenListArea()
        htmx:afterRequest: console.log('#afterRequest')"        
        >
          <input type="text" 
          className="mx-2 border border-gray-400 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500" 
          name="seachKey" id="seachKey"
          placeholder="Title search" />
          <input type="text" name="api_url" className="d-none" defaultValue="/api/posts/search"/>
          <button type="submit"
          className="ms-2 bg-transparent hover:bg-purple-500 text-purple-700 font-semibold hover:text-white py-2 px-4 border border-purple-500 hover:border-transparent rounded" 
          id="btn_search"
          >Search</button>
        </form>
      </span> 
    </div>  
    <div id="search_result"></div>
    <hr />
    {/* List */}
    <div className="post_list_wrap container mx-auto my-2 px-2">
      {props.items.map((item: any ,index: number) => {
      return (
      <div key={item.id} className="rounded-md bg-white my-2  p-4">
        <div className="flex flex-row">
          <div className="flex-1 p-2 m-1">
            <a href={`/posts/${item.id}`}>
              <h3 className="text-3xl font-bold">{item.title}</h3>
              <span>ID: {item.id}, {item.createdAt}</span>
            </a>
          </div>
          <div className="flex-1 p-2 m-1">
            <a href={`/posts/${item.id}`}>
              <button  
              className="ms-2 mt-2 bg-transparent hover:bg-purple-500 text-purple-700 font-semibold hover:text-white py-2 px-4 border border-purple-500 hover:border-transparent rounded"
              >Show</button>
            </a>
          </div>
        </div>
      </div>
      )
      })}
      {/* paginate */}
      <div className="paginate_wrap py-4">
        <a href={`/?page=${beforePage}`}>
          <button
          className={`bg-transparent hover:bg-purple-500 text-purple-700 font-semibold hover:text-white py-2 px-4 
             border border-purple-500 hover:border-transparent rounded`}
          > ＜ </button>
        </a>
        <a href={`/?page=${nextPage}`}>
          <button 
            className={`bg-transparent hover:bg-purple-500 text-purple-700 font-semibold hover:text-white py-2 px-4 
            border border-purple-500 hover:border-transparent rounded`}
          > ＞ </button>
        </a>
      </div>
      <div id="app"></div>
      {(process.env.NODE_ENV === "develop") ? (
          <script src="/js/Top.js"></script>
      ): (
          <script src="/public/js/Top.js"></script> 
      )}
      <hr className="my-8" />
    </div>
  </Layout>
  )
}
/*
<script type="module" src="/static/Top.js"></script>
*/
