if(!self.define){let i,n={};const e=(e,o)=>(e=new URL(e+".js",o).href,n[e]||new Promise((n=>{if("document"in self){const i=document.createElement("script");i.src=e,i.onload=n,document.head.appendChild(i)}else i=e,importScripts(e),n()})).then((()=>{let i=n[e];if(!i)throw new Error(`Module ${e} didn’t register its module`);return i})));self.define=(o,c)=>{const s=i||("document"in self?document.currentScript.src:"")||location.href;if(n[s])return;let r={};const l=i=>e(i,s),a={module:{uri:s},exports:r,require:l};n[s]=Promise.all(o.map((i=>a[i]||l(i)))).then((i=>(c(...i),r)))}}define(["./workbox-b11bf415"],(function(i){"use strict";i.setCacheNameDetails({prefix:"start-learn"}),self.skipWaiting(),i.clientsClaim(),i.precacheAndRoute([{url:"/ad-be.jpg",revision:"3455d756e0c8284d83834384403fda68"},{url:"/css/about.802ecc50.css",revision:null},{url:"/css/app.8d0de2e4.css",revision:null},{url:"/css/chunk-vendors.fdda065f.css",revision:null},{url:"/favicon-16x16.png",revision:"85671e4ab9512962497bccb5f7bf2c55"},{url:"/favicon.ico",revision:"8938aacdfcb2aa14c5207f9d646beb1d"},{url:"/favicon.png",revision:"4848fd51dd8339e3507e274583ae58c0"},{url:"/fonts/brand-icons.1a368124.ttf",revision:null},{url:"/fonts/brand-icons.a5c2b578.eot",revision:null},{url:"/fonts/brand-icons.d3632e64.woff2",revision:null},{url:"/fonts/brand-icons.ff793786.woff",revision:null},{url:"/fonts/icons.004393de.woff",revision:null},{url:"/fonts/icons.62a2bfb1.woff2",revision:null},{url:"/fonts/icons.8ec0357f.ttf",revision:null},{url:"/fonts/icons.fa5c061f.eot",revision:null},{url:"/fonts/outline-icons.315b68a4.woff",revision:null},{url:"/fonts/outline-icons.3c7c2806.eot",revision:null},{url:"/fonts/outline-icons.ba204dab.ttf",revision:null},{url:"/fonts/outline-icons.d24ca609.woff2",revision:null},{url:"/img/1s.198c50fc.webp",revision:null},{url:"/img/2s.f0ae2c4a.webp",revision:null},{url:"/img/3s.556c0212.webp",revision:null},{url:"/img/4s.9a48c000.webp",revision:null},{url:"/img/brand-icons.b0ccb869.svg",revision:null},{url:"/img/favicon-16x16.png",revision:"85671e4ab9512962497bccb5f7bf2c55"},{url:"/img/favicon-32x32.png",revision:"4848fd51dd8339e3507e274583ae58c0"},{url:"/img/favicon.ico",revision:"8938aacdfcb2aa14c5207f9d646beb1d"},{url:"/img/flags.6989ab0a.png",revision:null},{url:"/img/freemath.e42862fc.png",revision:null},{url:"/img/icons.a93cf03c.svg",revision:null},{url:"/img/icons/android-chrome-192x192.png",revision:"361681287eb35f2342c23ab9bb3048eb"},{url:"/img/icons/android-chrome-512x512.png",revision:"83042c0ead2da36a3d23f9978af9ae8b"},{url:"/img/icons/android-chrome-maskable-192x192.png",revision:"361681287eb35f2342c23ab9bb3048eb"},{url:"/img/icons/android-chrome-maskable-512x512.png",revision:"83042c0ead2da36a3d23f9978af9ae8b"},{url:"/img/icons/apple-touch-icon-120x120.png",revision:"77fefef1a0cf11a84d00131b88facd23"},{url:"/img/icons/apple-touch-icon-152x152.png",revision:"4a8f914b34ecdf9c9ef61ae334b930d6"},{url:"/img/icons/apple-touch-icon-180x180.png",revision:"fe4640ca3848d7ba008a8dcd925054a1"},{url:"/img/icons/apple-touch-icon-60x60.png",revision:"64ee81ecec7da27a96d1defa8b33424b"},{url:"/img/icons/apple-touch-icon-76x76.png",revision:"8e45ada08450a76b12f66370b65bf40c"},{url:"/img/icons/apple-touch-icon.png",revision:"fe4640ca3848d7ba008a8dcd925054a1"},{url:"/img/icons/favicon-16x16.png",revision:"85671e4ab9512962497bccb5f7bf2c55"},{url:"/img/icons/favicon-32x32.png",revision:"4848fd51dd8339e3507e274583ae58c0"},{url:"/img/icons/favicon.ico",revision:"8938aacdfcb2aa14c5207f9d646beb1d"},{url:"/img/icons/msapplication-icon-144x144.png",revision:"a4727d1d1eecf2015e5b07d31e0c99e5"},{url:"/img/icons/mstile-150x150.png",revision:"e81073373f15d072b86ac4a9ed382360"},{url:"/img/icons/safari-pinned-tab.svg",revision:"998c9090411decc7f357666a89011e72"},{url:"/img/logo.d05fb2e6.png",revision:null},{url:"/img/outline-icons.7af2e9ac.svg",revision:null},{url:"/img/wikipedia.c76f2874.png",revision:null},{url:"/index.html",revision:"f1778661d74eaf213565c8c3810bd7c5"},{url:"/js/about.beb8adbf.js",revision:null},{url:"/js/about.beb8adbf.js.map",revision:"dd62fdc8841adbf6c0be0bbda3835230"},{url:"/js/app.15032395.js",revision:null},{url:"/js/app.15032395.js.map",revision:"e62bd99e28b22b2c10d637e8eac25fb4"},{url:"/js/chunk-vendors.914e2ff3.js",revision:null},{url:"/js/chunk-vendors.914e2ff3.js.map",revision:"69683c0510c6314417ca0d0f9d41fdd3"},{url:"/logo.png",revision:"ef1c0ff9692ea499ca9cc835a5bbf29c"},{url:"/manifest.json",revision:"80dbdd9784823eb334306425dc11e3f0"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
