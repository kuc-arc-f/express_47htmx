
function Compo(props :any){
  //
  return (
  <div>
      {/* List */}
      {props.items.map((item: any, index: number) => {
      return (
      <div key={index}>
        <h3 className="text-3xl font-bold">{item.title}</h3>
        <span>ID: {item.id}, {item.createdAt}</span>
        <a href={`/csrshow/${item.id}`}>
          <button
          className="ms-2 bg-transparent hover:bg-purple-500 text-purple-700 font-semibold hover:text-white py-1 px-4 border border-purple-500 hover:border-transparent rounded"
          >Show</button>
        </a>
        <hr />
      </div>
      )
      })}

  </div>
  );
}
export default Compo;