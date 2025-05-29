/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "./public/index.html"
    ],
    theme: {
        extend: {
            height: {
                'screen-58': 'calc(100vh - 58px)',
                'screen-80': 'calc(100vh - 80px)',
            }
        },
    },
    variants: {
        extend: {
            borderRadius: ['hover'],
        },
    },
    plugins: [],
}