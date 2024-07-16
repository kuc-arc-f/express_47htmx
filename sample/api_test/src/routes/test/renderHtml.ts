
export function htmConfirm1(id: string){
  return `
  <div class="bg-red-100 p-2">
    <hr />
    <h3 class="text-3xl font-bold ">Confirm, OK?</h3>
    <form class="my-0"
    hx-post="/api/common/send_post"
    hx-trigger="submit"
    hx-target="#resulte_confirm${id}"
    hx-on--after-request="location.reload()"
    >
      <input type="hidden" name="id" value="${id}" />
      <input type="text" name="api_url" value="/test/delete"
      class="d-none" />      
      <button type="submit"
      class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
      >Delete</button>
    </form>
    <div id="resulte_confirm${id}"></div>
  </div>
  `;
}