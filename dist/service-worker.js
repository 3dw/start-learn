if(!self.define){let i,n={};const e=(e,o)=>(e=new URL(e+".js",o).href,n[e]||new Promise((n=>{if("document"in self){const i=document.createElement("script");i.src=e,i.onload=n,document.head.appendChild(i)}else i=e,importScripts(e),n()})).then((()=>{let i=n[e];if(!i)throw new Error(`Module ${e} didn’t register its module`);return i})));self.define=(o,c)=>{const r=i||("document"in self?document.currentScript.src:"")||location.href;if(n[r])return;let s={};const a=i=>e(i,r),l={module:{uri:r},exports:s,require:a};n[r]=Promise.all(o.map((i=>l[i]||a(i)))).then((i=>(c(...i),s)))}}define(["./workbox-b11bf415"],(function(i){"use strict";i.setCacheNameDetails({prefix:"start-learn"}),self.skipWaiting(),i.clientsClaim(),i.precacheAndRoute([{url:"/ad-be.jpg",revision:"3455d756e0c8284d83834384403fda68"},{url:"/css/about.3b9c6223.css",revision:null},{url:"/css/app.945d0703.css",revision:null},{url:"/css/chunk-vendors.fdda065f.css",revision:null},{url:"/favicon-16x16.png",revision:"85671e4ab9512962497bccb5f7bf2c55"},{url:"/favicon.ico",revision:"8938aacdfcb2aa14c5207f9d646beb1d"},{url:"/favicon.png",revision:"4848fd51dd8339e3507e274583ae58c0"},{url:"/fonts/brand-icons.1a368124.ttf",revision:null},{url:"/fonts/brand-icons.a5c2b578.eot",revision:null},{url:"/fonts/brand-icons.d3632e64.woff2",revision:null},{url:"/fonts/brand-icons.ff793786.woff",revision:null},{url:"/fonts/icons.004393de.woff",revision:null},{url:"/fonts/icons.62a2bfb1.woff2",revision:null},{url:"/fonts/icons.8ec0357f.ttf",revision:null},{url:"/fonts/icons.fa5c061f.eot",revision:null},{url:"/fonts/outline-icons.315b68a4.woff",revision:null},{url:"/fonts/outline-icons.3c7c2806.eot",revision:null},{url:"/fonts/outline-icons.ba204dab.ttf",revision:null},{url:"/fonts/outline-icons.d24ca609.woff2",revision:null},{url:"/img/1s.198c50fc.webp",revision:null},{url:"/img/2s.f0ae2c4a.webp",revision:null},{url:"/img/3s.556c0212.webp",revision:null},{url:"/img/4s.9a48c000.webp",revision:null},{url:"/img/android-chrome-192x192.png",revision:"361681287eb35f2342c23ab9bb3048eb"},{url:"/img/android-chrome-512x512.png",revision:"83042c0ead2da36a3d23f9978af9ae8b"},{url:"/img/android-chrome-maskable-192x192.png",revision:"361681287eb35f2342c23ab9bb3048eb"},{url:"/img/android-chrome-maskable-512x512.png",revision:"83042c0ead2da36a3d23f9978af9ae8b"},{url:"/img/apple-touch-icon-120x120.png",revision:"77fefef1a0cf11a84d00131b88facd23"},{url:"/img/apple-touch-icon-152x152.png",revision:"4a8f914b34ecdf9c9ef61ae334b930d6"},{url:"/img/apple-touch-icon-180x180.png",revision:"fe4640ca3848d7ba008a8dcd925054a1"},{url:"/img/apple-touch-icon-60x60.png",revision:"64ee81ecec7da27a96d1defa8b33424b"},{url:"/img/apple-touch-icon-76x76.png",revision:"8e45ada08450a76b12f66370b65bf40c"},{url:"/img/apple-touch-icon.png",revision:"fe4640ca3848d7ba008a8dcd925054a1"},{url:"/img/brand-icons.b0ccb869.svg",revision:null},{url:"/img/favicon-16x16.png",revision:"85671e4ab9512962497bccb5f7bf2c55"},{url:"/img/favicon-32x32.png",revision:"4848fd51dd8339e3507e274583ae58c0"},{url:"/img/favicon.ico",revision:"8938aacdfcb2aa14c5207f9d646beb1d"},{url:"/img/flags.6989ab0a.png",revision:null},{url:"/img/icons.a93cf03c.svg",revision:null},{url:"/img/icons/favicon-16x16.png",revision:"85671e4ab9512962497bccb5f7bf2c55"},{url:"/img/icons/favicon-32x32.png",revision:"4848fd51dd8339e3507e274583ae58c0"},{url:"/img/icons/favicon.ico",revision:"8938aacdfcb2aa14c5207f9d646beb1d"},{url:"/img/logo.d05fb2e6.png",revision:null},{url:"/img/manifest.json",revision:"ca9b72d123a80d2915c1292b975dfec1"},{url:"/img/msapplication-icon-144x144.png",revision:"a4727d1d1eecf2015e5b07d31e0c99e5"},{url:"/img/mstile-150x150.png",revision:"e81073373f15d072b86ac4a9ed382360"},{url:"/img/outline-icons.7af2e9ac.svg",revision:null},{url:"/img/safari-pinned-tab.svg",revision:"998c9090411decc7f357666a89011e72"},{url:"/index.html",revision:"a2d11c3d5e78b2bee780dc35280c8fbd"},{url:"/js/about.bfc893ac.js",revision:null},{url:"/js/about.bfc893ac.js.map",revision:"ddc3abb6ea12310d3ef3fc84ff29c953"},{url:"/js/app.a74a929d.js",revision:null},{url:"/js/app.a74a929d.js.map",revision:"4a90a95cfc4529842eca4f1c50f8126b"},{url:"/js/chunk-vendors.a8aaff58.js",revision:null},{url:"/js/chunk-vendors.a8aaff58.js.map",revision:"c8f7753084ddbb6a4211e2f1dbea9a66"},{url:"/logo.png",revision:"ef1c0ff9692ea499ca9cc835a5bbf29c"},{url:"/manifest.json",revision:"be0f68fbe734db061c73d8dcc9570f23"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
