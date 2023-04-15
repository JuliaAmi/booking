<template>
    <Editor
        api-key="xcnykoky7wz5aq4opt33o6n7eng7x7vjjt8qnmfpirm62ovi"
        :init="{
            height: 500,
            menubar:false,
            branding: false,
            plugins: ['wordcount', 'link', 'code', 'fullscreen', 'table', 'lists'],
            toolbar: ['link | bold italic underline blockquote | bullist numlist | align | formatselect | table | code fullscreen']
        }"
    />
</template>

<script>
import Editor from '@tinymce/tinymce-vue';

export default {
    name: "TinyEditor",
    components: {
        Editor
    }
}
</script>
