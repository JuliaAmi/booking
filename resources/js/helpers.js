import {router} from "@inertiajs/vue3";

export default function replaceHtmlLinksToInertiaLinks(target) {
    const links = $(target).find('a');

    Array.from(links).forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const url = e.target.href;

            if (e.target.getAttribute('data-method')) {
                router.delete(url, {preserveState: false});
            } else {
                router.get(url);
            }
        })
    });
}
