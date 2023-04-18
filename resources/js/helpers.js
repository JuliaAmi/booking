import {router} from "@inertiajs/vue3";

function replaceHtmlLinksToInertiaLinks(target) {
    const links = $(target).find('a');

    Array.from(links).forEach(link => {
        link.addEventListener('click', function (e) {

            const url = e.target.href;

            if (url.includes('booking')) {
                e.preventDefault();
                if (e.target.getAttribute('data-method')) {
                    router.delete(url, {preserveState: false});
                } else {
                    router.get(url);
                }
            } else {
                return true;
            }
        })
    });
}

export default replaceHtmlLinksToInertiaLinks
