module.exports = {
    home: {
        path: '/',
        method: 'get',
        page: 'home',
        title: 'Home',
        handler: require('../components/home/Home')
    },
    blog: {
        path: '/blog',
        method: 'get',
        page: 'blog',
        title: 'Blog',
        handler: require('../components/blog/Blog')
    },
    contact: {
        path: '/contact',
        method: 'get',
        page: 'contact',
        title: 'Contact',
        handler: require('../components/tempContact')
    }
};
