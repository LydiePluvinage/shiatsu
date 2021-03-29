module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                greenPrimary: '#6dd170',
                grayPrimary: '#ebebe9',
            },
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
            gridRowStart: {
                8: '8',
                9: '9',
                10: '10',
                11: '11',
                12: '12',
                13: '13',
            },
        },
        screens: {
            sm: { max: '850px' },
            md: { max: '1000px' },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
