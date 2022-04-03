module.exports = {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            height: (theme) => ({
                body: "calc(100vh - 1.25rem * 2)",
            }),
        },
    },
    plugins: [require("daisyui")],
};
