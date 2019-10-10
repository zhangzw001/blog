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

var precacheConfig = [["/2019/09/19/2-部署elk7-2-0/index.html","5b597c6bf58a00e24884d07df3382f40"],["/2019/09/19/首次搭建hexo博客系统/index.html","d393ff25b93db672e09acf5df31f717d"],["/2019/09/20/3-k8s遇到的一些问题统计总结/index.html","35b27aa46b62bd89c2e7f8e5be7f8b8b"],["/2019/09/24/4-hexo鼠标移动和鼠标点击特效/index.html","358649e01b00aa3a5e58ef83557e68c3"],["/2019/09/24/5-hexo添加看板娘/index.html","f7dc81c72ad1c77b6599636d2cea1d69"],["/2019/09/26/6-ceph安装部署/index.html","94965b7bfe852b9b900dc79ac3444b26"],["/2019/09/26/7-k8s部署storageclass动态创建pv-nfs-rbd/index.html","1795df3d9e55263f5b1e3d75c0495226"],["/2019/09/26/8-mysql5-7二进制部署/index.html","1f0e5a82c7d7e0d5b6e48f308d02a420"],["/2019/09/26/9-linux遇到一些问题统计总结/index.html","4ec7d2de2afb0183727f5dfe89086348"],["/2019/09/27/10-centos6安装nginx1-16-php7-2/index.html","aa42442ff752bd82ca757f434826db55"],["/2019/10/10/11-mysql简单记录/index.html","fa23009fad7156f3bb959e91ceed30f3"],["/archives/index.html","4e920f10938480640a3b1e69b066f6dd"],["/categories/index.html","6375cc9130f16a7b5879ca662bd61c24"],["/categories/k8s/elk7/index.html","0bcd726ce6849cf5738287c1944c07fb"],["/categories/k8s/index.html","029f92d723c749823116e3d1c4a18ee2"],["/categories/k8s/storageclass/index.html","3798be0bb357faa0768459b29bf4d541"],["/categories/k8s/问题总结/index.html","02217bc6c0c4370b52e090e830bf2d0a"],["/categories/linux/index.html","3f96d682340084d8d6c88c849b0435a5"],["/categories/linux/问题总结/index.html","b9973d5dbcfbe0e7f5e3353adc590d54"],["/categories/mysql/index.html","29b0bddaee222f5d06fdc6743cc2498a"],["/categories/nginx/index.html","06d23c56be2c66757d8413ec933e00c7"],["/categories/博客/index.html","68c727a66472c8a98711bc807bd9b479"],["/categories/博客/美化/index.html","62bc710bda9abb106789c8b41a5e6949"],["/categories/存储/ceph/index.html","e29785dfcc018df0f26ca47b7786567f"],["/categories/存储/index.html","c5efd0a269b5381469326a3af2b3d242"],["/categories/存储/nfs/index.html","26f2a502907d35c9e4236728dda5e6ef"],["/categories/技术文档/index.html","dc9a71238004b2fb44da9c8005796213"],["/categories/有趣/index.html","18667fe0d825ebcdeb50a22c306e8ad0"],["/categories/有趣/二次元/index.html","d2584f9c47b0931ba9dd88824cc3e03a"],["/css/main.css","27de55ab17f44b2f0330448b63a32451"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/blog6/rancher-pv.png","d2a7e4bbfad5f71e75c9d5459cf5a464"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/docker1.jpg","5c611dd864017adeff648bca93d53f41"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/jixie-title.jpg","3ebd10201e23ecf68aba4524c020db0d"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/test1/test1.jpg","60b725f10c9c85c70d97880dfe8191b3"],["/images/title1.jpg","fa2db043867c4c5654471e21ad36e5c0"],["/images/title2.jpg","b6e57860ebc3fcdcf150a6a4cf3402ab"],["/images/title3.jpg","f0b1554cfa4dd1193719dcfeb9e4de28"],["/images/title4.jpg","6eb7bcbb846d1123e830488d75028df7"],["/index.html","b1f7e018a46c4e76cf85e3b1e7d2f9e6"],["/js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["/js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["/js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["/js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["/js/src/instantclick.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/live2d.js","3359a94d733737dbdd290dd41f9cef0b"],["/js/src/love.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/src/love2.js","2b51ddac5207cba4153da31e9132414c"],["/js/src/motion.js","706d085e6cfec6f3e92dedc590d68d68"],["/js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["/js/src/schemes/pisces.js","1bd23ed75238ebf11afe2aa6b1c3a25b"],["/js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["/js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["/js/src/utils.js","f06ffce70453ad3a4d9611fdde5ca6c3"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2d-widget/README.html","9941b5173b7915eb6158e62f02cd9ea3"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","fc45c81e48138bde62e7e742cbbdabb9"],["/live2d-widget/demo/demo1.html","82a14d37dbd83931644a4ad6ea1f9eb2"],["/live2d-widget/demo/demo2.html","6babb045ef6905badc0dbc5e0d98cede"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["/live2d-widget/waifu.css","c4dae5924f2fb0b5ea6ef26aaab80db9"],["/page/2/index.html","bfa1d31bf8a6d287fa2ff4a21df4e73d"],["/tags/ceph/index.html","81434e4ae1721b8e34b95c64ab05d4fa"],["/tags/cephfs/index.html","a3232684b6b8c0487192427ab0304a51"],["/tags/elk/index.html","90d4140c22789d69e3ed7605058a6ee1"],["/tags/elk7/index.html","b8e5d05d41ad67a73256ad882e967e5d"],["/tags/hexo6/index.html","e0cb108bab8728fa412a28bda965d114"],["/tags/hexo美化/index.html","64f2729652992fcd94793ad53b202bcb"],["/tags/index.html","beccec93914181d345485265dd14e513"],["/tags/k8s/index.html","34e83a83e6a8166de61117d422eeb6a0"],["/tags/k8s存储/index.html","db7adc0a19baf2363b6a39700d64b0a4"],["/tags/linux/index.html","b335ddb9b12b20b1786f4beb387538c5"],["/tags/mysql/index.html","7c0dc97369d0dce4fe68eac3501a6c0b"],["/tags/mysql5-7/index.html","cd535265463aeb473913c98875ee213f"],["/tags/nfs/index.html","052c53a65a60756d92ff099d511f3b0f"],["/tags/nginx/index.html","d245f8c62c1a4fc5f929407ec1682b10"],["/tags/php7/index.html","3b979e077c598bfe22046b5257cc04c6"],["/tags/storageclass/index.html","7a039891b0374e60a15c9827db3ea880"],["/tags/特效/index.html","e24037b485781aadc1d5252b789fefee"]];
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







