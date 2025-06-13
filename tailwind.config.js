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
    theme: {
        extend: {
          minHeight: {
            '80vh': '80vh',
          }
        }
    },
    variants: {
        extend: {
            borderRadius: ['hover'],
        },
    },
    plugins: [],
}