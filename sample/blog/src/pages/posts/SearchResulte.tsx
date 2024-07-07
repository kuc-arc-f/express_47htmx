
export function countZeroCompo(props: any) {
  return(
  <div className=" container mx-auto my-2 px-2">
    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded" 
      role="alert">
      <strong className="font-bold">Error, Nothing Item</strong><br />
      <span className="block sm:inline"></span>
    </div>
  </div>
  );
}
//<div>Error, Nothing Item</div>
//
export default function Page(props: any) {
  //console.log(pegeItems);
  //
  return (
  <>
    {/* List post_list_wrap*/}
    <div className=" container mx-auto my-2 px-2">
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
