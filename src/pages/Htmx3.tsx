// post-send, Test
import Layout from './Layout';
//
export default function Page() {
  return (
  <Layout>
    <h1>Htmx3.tsx</h1>
    <form
    hx-post="/api/test/test"
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
  )
}
/*
*/
