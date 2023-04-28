import { router } from "@inertiajs/vue3";
import Zooming from "zooming";
function replaceHtmlLinksToInertiaLinks(target) {
  const links = $(target).find("a");
  Array.from(links).forEach((link) => {
    link.addEventListener("click", function(e) {
      const url = e.target.href;
      if (checkIsInternalURL(url)) {
        e.preventDefault();
        if (e.target.getAttribute("data-method")) {
          router.delete(url, { preserveState: false });
        } else {
          router.get(url);
        }
      } else {
        return true;
      }
    });
  });
}
function checkIsInternalURL(url) {
  return url.includes("http://booking") && !url.includes("storage");
}
function zoomImages() {
  new Zooming().listen("img");
}
function wrapTables(target, wrapClass = "table-wrapper") {
  $(`${target} table`).wrap('<div class="' + wrapClass + '"></div>');
}
export {
  checkIsInternalURL as c,
  replaceHtmlLinksToInertiaLinks as r,
  wrapTables as w,
  zoomImages as z
};
