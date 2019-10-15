/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/2019/09/19/2-部署elk7-2-0/index.html","bd26f0a2dab0e6cabcc0976e3a30ecf3"],["/2019/09/19/首次搭建hexo博客系统/index.html","214cd47f2419426310c7dd3ce619d72d"],["/2019/09/20/3-k8s遇到的一些问题统计总结/index.html","1ae2f6dc01bf6f1704f85d8c7a31bb5b"],["/2019/09/24/4-hexo鼠标移动和鼠标点击特效/index.html","ac4cb1f65d833a212ab5401795470ecd"],["/2019/09/24/5-hexo添加看板娘/index.html","9507ad24907b7dad1a2442470196b82e"],["/2019/09/26/6-ceph安装部署/index.html","9dfc6cfe8cbac23f988fa37874ad7fd6"],["/2019/09/26/7-k8s部署storageclass动态创建pv-nfs-rbd/index.html","c96f8a6c8e7764b583150daa8c5664c3"],["/2019/09/26/8-mysql5-7二进制部署/index.html","a88ede0e6388653bcf185c377edaab80"],["/2019/09/26/9-linux遇到一些问题统计总结/index.html","16bf2d3c24561d1415caa98401880bda"],["/2019/09/27/10-centos6安装nginx1-16-php7-2/index.html","c00f9932207f32d66c0a8fdf3114e3bc"],["/2019/10/10/11-mysql简单记录/index.html","f714d5e953f49fec09bfa75b775e81d7"],["/2019/10/11/12-awk简单记录/index.html","47b33b1faf04cb12be3b49e6c42ebb24"],["/2019/10/12/13-云原生博客汇总/index.html","205d6c9f886fbd39bfb2f8510b63d47e"],["/2019/10/15/14-mysql目录copy方式迁移/index.html","f28f266a3efdac5076c8b26e88f0a520"],["/archives/index.html","04285f736ae9672e313f206cdbaf3451"],["/categories/awk/index.html","2020a4b63e2033b25db072f19d9ce030"],["/categories/index.html","2a649e10513e735f1dffa5ffc0b3fc5a"],["/categories/k8s/elk7/index.html","ce6519795f06cc7022431f05460f903d"],["/categories/k8s/index.html","4ad51319b9040b3d2057ee52d2f46a76"],["/categories/k8s/storageclass/index.html","3317333595866e83c6994f1b75a69d35"],["/categories/k8s/问题总结/index.html","bbee94849739573576518e27234a6184"],["/categories/linux/index.html","8c0106af87d5c76f986e2a8ab5f603a3"],["/categories/linux/问题总结/index.html","8d97e459785c05af4987bb83acbd0f73"],["/categories/mysql/index.html","47512b3619e0598bf55191781fa40526"],["/categories/nginx/index.html","ece3767bb409876fb27fbe6443c41ddf"],["/categories/博客/index.html","bbac0a000429d823e26a7c0d514e685a"],["/categories/博客/美化/index.html","c202a24d339c5b2e80c33cd289fea60e"],["/categories/存储/ceph/index.html","2bc8ae2b77171a8e0ccd2d3ca306a4c8"],["/categories/存储/index.html","142c61cf253f125d3dfb824c22ba525e"],["/categories/存储/nfs/index.html","9a014f791bca1dca5bfd482828dbeda5"],["/categories/技术文档/index.html","ee34076294b5c366f500b5cba5029b07"],["/categories/有趣/index.html","0dd79c27e2f79509a02e8c00e89db06a"],["/categories/有趣/二次元/index.html","11c99e0370d074006852c6435f56f477"],["/categories/网址/index.html","09aa78f1fa288ebebdfaa11263cc4d94"],["/categories/网址/大佬博客/index.html","5f298834d8baca7f86198eca87fa6b02"],["/css/main.css","528d5f96b041eded9c9c2c7ca9159eea"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/blog6/rancher-pv.png","d2a7e4bbfad5f71e75c9d5459cf5a464"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/docker1.jpg","5c611dd864017adeff648bca93d53f41"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/jixie-title.jpg","3ebd10201e23ecf68aba4524c020db0d"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/test1/test1.jpg","60b725f10c9c85c70d97880dfe8191b3"],["/images/title1.jpg","fa2db043867c4c5654471e21ad36e5c0"],["/images/title2.jpg","b6e57860ebc3fcdcf150a6a4cf3402ab"],["/images/title3.jpg","f0b1554cfa4dd1193719dcfeb9e4de28"],["/images/title4.jpg","6eb7bcbb846d1123e830488d75028df7"],["/index.html","56add285eea493280de370f8049bbff3"],["/js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["/js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["/js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["/js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["/js/src/instantclick.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/live2d.js","3359a94d733737dbdd290dd41f9cef0b"],["/js/src/love.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/src/love2.js","2b51ddac5207cba4153da31e9132414c"],["/js/src/motion.js","706d085e6cfec6f3e92dedc590d68d68"],["/js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["/js/src/schemes/pisces.js","1bd23ed75238ebf11afe2aa6b1c3a25b"],["/js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["/js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["/js/src/utils.js","f06ffce70453ad3a4d9611fdde5ca6c3"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2d-widget/README.html","9941b5173b7915eb6158e62f02cd9ea3"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","fc45c81e48138bde62e7e742cbbdabb9"],["/live2d-widget/demo/demo1.html","82a14d37dbd83931644a4ad6ea1f9eb2"],["/live2d-widget/demo/demo2.html","6babb045ef6905badc0dbc5e0d98cede"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["/live2d-widget/waifu.css","c4dae5924f2fb0b5ea6ef26aaab80db9"],["/page/2/index.html","661061a87e6e17480684263eef9340d4"],["/tags/awk/index.html","a63dc08962c393d7b8f883034b1a8c46"],["/tags/ceph/index.html","8b19acfdf001dd9dd8a2d9dcb1f2a2e1"],["/tags/cephfs/index.html","adac498a0c5e17d718471e1ee4ff2b3d"],["/tags/cloud-native/index.html","729c09c978a8af4a8b410854fe4c78bb"],["/tags/elk/index.html","b11823389eb97b3cd5972523b80589f2"],["/tags/elk7/index.html","8860e301186269aa4969cf0cdadf1ee9"],["/tags/hexo6/index.html","df4efab571a74468c770457ef37c70b6"],["/tags/hexo美化/index.html","78d08b7cc0f7785c147c6adae9fba780"],["/tags/index.html","9a31f8cdd74e089e3865675565addb75"],["/tags/k8s/index.html","c951378d033544fdcab19ae456837802"],["/tags/k8s存储/index.html","dc67a7a2576cd44a2ea1894ed04f456d"],["/tags/linux/index.html","b49e3361e797e92b61ddbab6d73d5726"],["/tags/mysql/index.html","e7fefa7e6eb49925427d0da5de8c67ac"],["/tags/mysql5-7/index.html","9bde6c450bec42bcb53a7fb36aca69d6"],["/tags/nfs/index.html","997569fe63e195f4a015929b7118d254"],["/tags/nginx/index.html","9173653a6f48efa7da962b78c2d4193c"],["/tags/php7/index.html","d4da1df37e027c720a02f949674bacfd"],["/tags/storageclass/index.html","8989438343bb42c47da666af135432b5"],["/tags/云原生/index.html","67a1b91ef03434c1ba696e35ec586d11"],["/tags/大佬博客/index.html","a942e28713cd5966064e5b0c91b9f3ff"],["/tags/特效/index.html","18a40a3f931e353206a694156481552c"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







