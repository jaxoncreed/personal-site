// Yes, I'm not using a database for my blog posts.
// I'm lazy, and just want to pump this out quickly,
// I know setting up a database is easy... shut up. I'll do it later.

module.exports = {
    "fluxiblemaster": {
        title: "Building a Site Using Isomorphic Flux with Fluxible",
        summary: "This is a summary.",
        component: require('./fluxibleMaster')
    },
    "asyncfunctions" : {
        title: "Asynchonous Functions in JavaScript",
        summary: "This is a summary.",
        component: require('./asyncFunctions')
    }
}