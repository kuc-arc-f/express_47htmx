// post-send, Test

export default function Page() {
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
    {/* body */}
    <body>
      <a href="/">[ Top ]</a>
      <hr />
      <h1>Htmx4</h1>
      <form
      hx-post="/api/common/send_post"
      hx-trigger="submit"
      hx-target="#h2"
      hx-on="htmx:beforeRequest: alert('Making a request!')
      htmx:afterRequest: alert('Done making a request!')"
      >
        <input type="text" name="name" />
        <input type="text" 
          className="" 
          name="seachKey" id="seachKey"
          placeholder="Title search" />
          <input type="text" name="api_url" defaultValue="/api/posts/search"/>        
        <button type="submit">Add</button>
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
