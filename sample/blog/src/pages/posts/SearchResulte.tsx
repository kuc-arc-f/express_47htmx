//
export default function Page(props: any) {
  //console.log(pegeItems);
  //
  return (
  <>
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
      <hr className="my-8" />
    </div>
  </>
  )
}
/*
*/
