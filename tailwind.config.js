module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        colors: {
            greenPrimary: '#6dd170',
        },
        extend: {
            backgroundImage: {
                'header-background': "url('/img/header-background.jpg')",
            },
            height: {
                '70vh': '70vh',
            },
            textShadow: {
                '2xl': '1px 1px 5px rgb(33 34 43 / 20%)',
                '3xl': '0 0 3px rgba(0, 0, 0, .8), 0 0 5px rgba(0, 0, 0, .9)',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
