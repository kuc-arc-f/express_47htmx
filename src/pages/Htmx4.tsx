// post-send, Test
import Layout from './Layout';
//
export default function Page() {
  return (
  <Layout>
    <h1>Htmx4.tsx</h1>
    <form
    hx-post="/api/test/test"
    hx-trigger="submit"
    hx-target="#resulte_form1"
    hx-on--before-request="alert('Making a request!')"
    hx-on--after-request="afterPostForm1()"
    >
      <input type="text" name="name" />
      <button type="submit">Add</button>
    </form>
    <hr />
    <h3 id="resulte_form1">ここに表示</h3>
    {/* script */}
    {(process.env.NODE_ENV === "develop") ? (
        <script src="/static/Htmx4.js"></script>
    ): (
        <script src="/public/static/Htmx4.js"></script> 
    )}    
  </Layout>
  )
}
/*
type="module"
*/
