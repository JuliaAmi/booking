import './bootstrap';

import { createApp, h } from 'vue'
import { createInertiaApp, Link, Head } from '@inertiajs/vue3'
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';

createInertiaApp({
    // resolve: name => {
    //     const pages = import.meta.glob('./Pages/**/*.vue')
    //     return pages[`./Pages/${name}.vue`]()
    // },

    resolve: (name) => {
        let parts = name.split('::');

        if (parts.length > 1) {
            return resolvePageComponent(`../../Modules/${parts[0]}/Resources/assets/js/Pages/${parts[1]}.vue`, import.meta.glob(`../../Modules/**/*.vue`));
        } else {
            return resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue'));
        }
    },
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            .component('inertia-link', Link)
            .component('inertia-head', Head)
            .mount(el)
    },
});
