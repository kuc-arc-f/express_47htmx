
export default function Page(item: any) {
//console.log("#HtmxTodoShow.tsx");
//console.log(item);
    //
    return (
    <>
    <html lang="ja">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
        <script
          src="https://unpkg.com/htmx.org@1.9.10"
          integrity="sha384-D1Kt99CQMDuVetoL1lrYwg5t+9QdHe7NLX/SoJYkXDFfX37iInKRy5xLSi8nO7UC"
          crossorigin="anonymous"
        ></script>
      </head>
      <body>
        <a href="/">[ Top ]</a>
        <hr />
        <a href="/htmxtodo">[ back ]</a>
        <hr />
        <h1>{item.title}</h1>
        <span>ID: {item.id} , {item.createdAt}</span>
        <hr />
        <div>{item.content}</div>
        <hr />
        <form
        hx-post="/api/turso_todo/delete"
        hx-trigger="submit"
        hx-target="#h2"
        hx-on="htmx:afterRequest: location.href='/htmxtodo'"
        >
          <input type="text" name="id" defaultValue={item.id} /><br />
          <button type="submit">Delete</button>
        </form>
        <hr />
        <h3 id="h2">ここに表示</h3>
      </body>
    </html>
    </>
    )
  }
  /*
  */
  //
