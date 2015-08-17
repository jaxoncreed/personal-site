var React = require('react');

var FluxibleMaster = React.createClass({
    render: function() {
        return (
            <div>

<p>So, you've decided that you're the next Zuckerberg and you're primed to make the next Facebook. Great! Just one problem: you need to actually build the site. Fortunately, you have some web design experience, and you know your way around JavaScript. Maybe you've worked with frameworks like Angular, Ember, or React. But, your over a billion future users deserve a quality front-end architecture that works better than that seizure script you wrote in middle school that changes the background colour every 5 milliseconds.</p>

<p>Enter Fluxible, a framework developed at Yahoo! and built on top of NodeJS and Facebook's ReactJS that abstracts much of the functionality that goes into building an isomorphic flux application so that you can create one quickly and with ease. That might have just been a bunch of buzzwords, but in this tutorial I'll explain all this, make a case for why isomorphic flux works well for your front end web architecture, and provide step-by-step instructions that will help you build the sure-fire success that is your next Facebook.</p>

<p>Fluxible is pretty awesome, and once you get past the learning curve, you can start easily building very scalable web applications. In this tutorial, I try to provide you all the tools you need to succeed using fluxible, and thus the size of this document is a bit large. I've also provided a github repo that you can use to follow along with this tutorial.</p>

<h1>Why Should I Use Fluxible</h1>

<p>”Yeah, why can’t I just slap a few HTML files together and throw it up on an Apache server somewhere, and call it done?” Well, you could, and you could also use Squarespace to make your site. When you’re building a site with Fluxible, you’re going beyond what’s required for a group of web-pages. You’re not building a website, you’re building a web-app.</p>

<h2>Fluxible Builds Single Page Applications</h2>

<p>To understand the importance of Single Page Applications, here’s a history lesson! When the web started it really was just a bunch of html files that were requested by web browsers. Then we got a little smarter and said, “Hey, what if instead of having a bunch of these files lying around on our servers, our servers dynamically built an HTML document and pretended like it was an HTML file. It’s all the same to the web browser.” And, with that in mind, we were able to build pages that populated themselves with data and forms that could post information. But, everything was still treated as individual pages.</p>

<p>When JavaScript gained wide support among browsers, developers started to add cool interactive portions to each page. Then we started asking why we needed to work within the constraints of a site made up of individual pages. We could start using this JavaScript thing to do everything we needed to build a site, and thus Single Page Applications were born!</p>

<p>Single Page Applications (SPAs) are treated more like building regular programs than a web site. When the page is first loaded by the browser, all the base data for the framework is sent over, and instead of reloading the page and getting all of that data again when the user clicks on a link or requests new information, the SPA will ask the server for only the information it needs.</p>

<p>SPAs are good when you’re building a site that requires a lot of interactivity. If you’re just going to build something simple that displays text, a SPA is probably overkill (I say as I write text in a blog on a site made with fluxible).</p>

<p>There are a ton of frameworks out there that allow you to build SPAs, though (React, Other Flux Implementations, Angular, Meteor, Backbone, Ember...), so now let’s see what differentiates Fluxible from these</p>

<h2>Fluxible Allows Server-Side Rendering</h2>

<p>A big problem that comes with SPAs is that they use JavaScript to construct the page in the user’s web browser. This can cause a performance hit for the user depending on how powerful his/her computer is, and the performance problem isn’t the user’s problem. Imagine if Google said, “Hey, we know loading Gmail’s slow to load, but we’ve got an awesome work-around. Get a better computer! Preferably one where you don’t have a bunch of toolbars you never use taking up half the screen space on your web browser!”</p>

<p>More importantly, SPAs confuse web crawlers, autonomous programs used by search engines and other services to try to understand what your site is all about. Most crawlers don’t run JavaScript, so when loading a SPA site, it will just see a blank page that’s supposed to be populated by JavaScript, and assume that there’s nothing to see here.</p>

<p>The solution to both of these problems is server-side rendering. Instead of the server saying, “Here’s a complete web-page. Call me again when you want something new,” like it does in Multi Page Applications, or saying, “Here’s a page with a bunch of JavaScript. You figure it out,” like it does for many SPA applications, server-side rendering allows the server to say, “Hey you know all that JavaScript I would have asked you to run to build the HTML to load our first view? Yeah, I ran it already. Here’s the HTML! Oh, and here’s a bunch of JavaScript for you to run after the page is loaded.” Now we get the benefits of having a Single Page Application while not suffering a performance hit on initial load or confusing crawlers.</p>

<h2>Fluxible is Isomorphic</h2>

<p>But, server side rendering poses a new problem. Now I could be rendering my site on either the client or the server, so I need to write different code depending on the environment, right? Well, not with Fluxible. It’s Isomorphic, meaning that the same code that’s written for the server is used on the client, so you’re development can be much faster!</p>

<h2>Fluxible Supports Plugins</h2>
<p>Finally, if you become adept with fluxible, you can start writing plugins pretty easily</p>

<h1>Okay, now What’s Flux?</h1>

<p>Before you start using Fluxible, it’s pretty important to understand the flux design pattern. Put simply, Flux is a design pattern by Facebook that organizes information flow throughout your application into a single direction. Put complexly:</p>

<img src="https://facebook.github.io/flux/img/flux-simple-f8-diagram-with-client-action-1300w.png" alt="Fluxible Diagram" />

<p>The flux design pattern is made up of four items: <strong>Actions</strong>, <strong>a Dispatcher</strong>, <strong>Stores</strong>, and <strong>Views</strong>. Information in the app flows in that order and only in that order. That’s really it. You can read more about flux on Facebook’s <a href="https://facebook.github.io/flux/docs/overview.html" target="_blank">Flux Overview Page</a>.</p>

<p>Of course, the implementation is a bit more complex than that, and the various implementations of flux do it differently. So, let’s take a look at the way Fluxible tackles each of these.</p>

<h2>Actions</h2>

<p>Actions are exactly as they’re named. They’re responsible for action doing something. Keep in mind that actions only manipulate data. They don’t alter what’s stored or what’s displayed. That’s the responsibility of the other items.</p>

<h2>Dispatcher</h2>

<p>When working with Fluxible, you don’t need to worry about the dispatcher very much as it’s abstracted by the framework. But, in short, when actions are done manipulating their data, they will “dispatch” an event. The dispatcher is responsible for transferring that data to all the stores that are listening to that event.</p>

<h2>Stores</h2>

<p>Stores are responsible for… storing all the data handled by the application. They simply take in the data provided by an action and update their model. When stores are updated, they will “emit change” to indicate to any Views listening that the store has updated.</p>

<h2>Views</h2>

<p>Views handle displaying information to the user. While the flux views could be implemented with many frameworks, because flux is Facebook’s, views usually implemented using Facebook’s React <strong>Components</strong> (from here on out, we’ll refer to the views as “components”). This remains true with Fluxible. Components are able to listen to various Stores and update when the Stores update. They’re also able to trigger Actions.</p>

<h2>Services</h2>

<p>Fluxible has one other item that’s pretty useful: services. Actions, the Dispatcher, Stores, and Views are all shared between the client and server, but there are some things that should only ever be done on the server, like database lookups and http requests to external servers.</p>

<p>Think of services like an extension of an action that always lives on the server. Actions will make requests to it. Once it receives a response, the flux flow continues as normal.</p>

<h1>Getting Started - Installing Prerequisites</h1>

<p>Assuming you're starting with a completely clean slate, there are a few things you need to install:</p>

<p>Firstly, the entire system is built on <a href="https://nodejs.org/" target="_blank">NodeJS</a>, a server-side language that uses the JavaScript syntax. Installation is different depending on the OS you're using, so you can get instructions regarding installation on your machine <a href="https://github.com/joyent/node/wiki/Installation#installing-on-mac" target="_blank">here</a>.</p>

<p>Run the following commands to ensure that you have successfully installed both NodeJS and <a href="https://www.npmjs.com/" target="_blank">npm (node package manager)</a> which should have been installed along with NodeJS.</p>

            </div>
        );
    }
});

module.exports = FluxibleMaster;