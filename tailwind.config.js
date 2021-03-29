module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        colors: {
            greenPrimary: '#6dd170',
            grayPrimary: '#ebebe9',
        },
        extend: {
            backgroundImage: {
                'header-background': "url('../img/header-background.jpg')",
            },
            height: {
                '70vh': '70vh',
            },
            keyframes: {
                fadeInLeft: {
                    '0%': { opacity: 0, transform: 'translateX(-100px)' },
                    '100%': { opacity: 1, transform: 'translateX(0px)' },
                },
                fadeInRight: {
                    '0%': { opacity: 0, transform: 'translateX(100px)' },
                    '100%': { opacity: 1, transform: 'translateX(0px)' },
                },
            },
            animation: {
                fadeInLeft: 'fadeInLeft 1s ease-out',
                fadeInRight: 'fadeInRight 1s ease-out',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
