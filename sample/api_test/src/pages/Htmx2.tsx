// GET-send, Test
import Layout from './Layout';

export default function Page() {
  return (
  <Layout>
    <h1 className="text-4xl font-bold">HTMX</h1>
    <button
      hx-get="https://jsonplaceholder.typicode.com/users/1"
      hx-target="#h2"
    >
      Click
    </button>
    <h3 id="h2">ここに表示</h3>
  </Layout>
  )
}
/*
*/
