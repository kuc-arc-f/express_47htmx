// post-send, Test
import Layout from './Layout';

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
      <Layout>
        <a href="/">[ Top ]</a>
        <hr />
        <h1>Htmx3.tsx</h1>
        <form
        hx-post="/api/test/test1"
        hx-trigger="submit"
        hx-target="#h2"
        hx-on="htmx:afterRequest: alert('OK, post send')"
        >
          <input type="text" name="name" />
          <button type="submit">Add</button>
        </form>
        <hr />
        <h3 id="h2">ここに表示</h3>
      </Layout>
    </body>
  </html>
  </>
  )
}
/*
*/
