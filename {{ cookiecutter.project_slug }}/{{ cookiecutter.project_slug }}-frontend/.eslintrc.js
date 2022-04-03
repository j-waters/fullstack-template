module.exports = {
    env: {
        node: true,
    },
    globals: {
        defineProps: "readonly",
        defineEmits: "readonly",
        withDefaults: "readonly",
    },
    extends: [
        "@vue/typescript/recommended",
        "eslint:recommended",
        "plugin:vue/vue3-recommended",
        "prettier",
    ],
    rules: {
        "no-unused-vars": "warn",
    },
};
