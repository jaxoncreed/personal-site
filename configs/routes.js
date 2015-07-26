module.exports = {
    home: {
        path: '/',
        method: 'get',
        page: 'home',
        title: 'Home',
        handler: require('../components/home/Home')
    },
    blogList: {
        path: '/blog',
        method: 'get',
        page: 'blog',
        title: 'Blog',
        handler: require('../components/blog/Blog')
    },
    post: {
        path: '/blog/:name',
        method: 'get',
        page: 'post',
        title: 'Blog Post',
        handler: require('../components/blog/Post'),
        action: require('../actions/getPost')
    },
    contact: {
        path: '/contact',
        method: 'get',
        page: 'contact',
        title: 'Contact',
        handler: require('../components/tempContact')
    }
};
