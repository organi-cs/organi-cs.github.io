export default function manifest() {
    return {
        name: 'Samputhy Khim',
        short_name: 'Samputhy',
        description: 'Student from Cambodia. Math, data science, and building things.',
        start_url: '/',
        display: 'standalone',
        background_color: '#fff',
        theme_color: '#fff',
        icons: [
            {
                src: '/favicon.ico',
                sizes: 'any',
                type: 'image/x-icon',
            },
        ],
    }
}
