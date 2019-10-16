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

var precacheConfig = [["2019/09/19/2-部署elk7-2-0/index.html","59b30260ecb608cb5db705e14b01f3a0"],["2019/09/19/首次搭建hexo博客系统/index.html","5f185e92791360a366ed0482efd72f02"],["2019/09/20/3-k8s遇到的一些问题统计总结/index.html","f093054e0396f646d2a472db4cb2561d"],["2019/09/24/4-hexo鼠标移动和鼠标点击特效/index.html","137ee519b2afa69c6f4a62a374588c53"],["2019/09/24/5-hexo添加看板娘/index.html","fc9bc0a55f9053eeeb725960bcc99b1b"],["2019/09/26/6-ceph安装部署/index.html","50e1b6df072f6cf720bcf7bbfd68a460"],["2019/09/26/7-k8s部署storageclass动态创建pv-nfs-rbd/index.html","d2e6f0fb520594a44b9158977e54132b"],["2019/09/26/8-mysql5-7二进制部署/index.html","9d1c709c10ab8551115e72c41c1a1ea9"],["2019/09/26/9-linux遇到一些问题统计总结/index.html","951d2c64c5de79f0d695d9d93fee8199"],["2019/09/27/10-centos6安装nginx1-16-php7-2/index.html","bed3dab9188c148aae3b445d072fa952"],["2019/10/10/11-mysql简单记录/index.html","ad5ac1a9f49db542a01c52ecdd5cd45b"],["2019/10/11/12-awk简单记录/index.html","9efd4c9d69acc424a45483fb3a6a9b8f"],["2019/10/12/13-云原生博客汇总/index.html","a048b83d5b6707f6a1134a0e923c7023"],["2019/10/15/14-mysql目录copy方式迁移/index.html","1190258998e3f0ec105384295dbf859e"],["2019/10/16/15-docker简介和使用/index.html","aebc2a82bad282819e003f884c3a3397"],["2019/10/16/16-dockerfile介绍/index.html","4070b7dd5280d12696310b5842095133"],["2019/10/16/17-markdown一些写法记录/index.html","891f32eec9470fbfa30ed31c428aa950"],["archives/index.html","bdc74c81766e7b55f32d167cf04545e7"],["categories/docker/Dockerfile/index.html","71e6ae28c23f16f278fc42f82c1d0478"],["categories/docker/index.html","c940c6c9d648421a899e1dc6138e3ae6"],["categories/index.html","5d8c9c0b908c7bce507254fda04c8980"],["categories/k8s/elk7/index.html","9b6e17b142e56adfb30248bc433babee"],["categories/k8s/index.html","b021a489922518f2dec93a17261fae66"],["categories/k8s/storageclass/index.html","e23c68e84cdfe3e29ea4f06272f00d6a"],["categories/k8s/问题总结/index.html","03ea535e139d9b4edcfdcf8700f22871"],["categories/linux/awk/index.html","04222bddc8c1281178b1b0b150bbdcd7"],["categories/linux/index.html","12a941eb8c75baaebcf5b68626b8061b"],["categories/linux/问题总结/index.html","02b7c3a868983a0187d3836878264536"],["categories/markdown/index.html","0196b203d58d366f3a96ebe7b9cec471"],["categories/mysql/index.html","1797f759d3b495a54d9d88050152e3d5"],["categories/nginx/index.html","1f571530988e3913f61a4cc7a453af62"],["categories/博客/index.html","faec9f7b30cad878f583376135d32337"],["categories/博客/美化/index.html","034718d48e85638d43914347bb8f323d"],["categories/存储/ceph/index.html","cb2e2c86edb23530c3e62eec5852aea7"],["categories/存储/index.html","0a3d9eb395e1b3bf0b488bb5e335e58b"],["categories/存储/nfs/index.html","0bf94a1cddc3e057dd35124da7904968"],["categories/技术文档/index.html","c8b3f8086037368f04dd840040f15ec1"],["categories/有趣/index.html","e663b306c9c72a1bb14e2861a786c706"],["categories/有趣/二次元/index.html","15353fc1e425d0f08cfa0534924eadeb"],["categories/网址/index.html","0c5bbc30dfd72182cdc8e691b9816214"],["categories/网址/大佬博客/index.html","5b25c67de37b4af1e5b14df164bdb132"],["css/main.css","d8507731cd8afe9ad2b5d374f55c2fcd"],["images/16/容器的原理-1.png","1c184a092af6b6829c49ee20e70d132a"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["images/blog6/rancher-pv.png","d2a7e4bbfad5f71e75c9d5459cf5a464"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/docker1.jpg","5c611dd864017adeff648bca93d53f41"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/jixie-title.jpg","3ebd10201e23ecf68aba4524c020db0d"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["images/tcp三次握手图.png","32ddd8df35bd5762604327b25758370e"],["images/tcp四次挥手图.png","684b2b4a0286acadc32247d693dbd961"],["images/test1/test1.jpg","60b725f10c9c85c70d97880dfe8191b3"],["images/title1.jpg","fa2db043867c4c5654471e21ad36e5c0"],["images/title2.jpg","b6e57860ebc3fcdcf150a6a4cf3402ab"],["images/title3.jpg","f0b1554cfa4dd1193719dcfeb9e4de28"],["images/title4.jpg","6eb7bcbb846d1123e830488d75028df7"],["index.html","1e52d513e257ebbfb2319e6ca35ffd91"],["js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["js/src/instantclick.js","865d92a4a07409b7fed739e6a108e9c4"],["js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["js/src/live2d.js","3359a94d733737dbdd290dd41f9cef0b"],["js/src/love.js","7bcfdb57debd43483174cf9e15ab37cc"],["js/src/love2.js","2b51ddac5207cba4153da31e9132414c"],["js/src/motion.js","706d085e6cfec6f3e92dedc590d68d68"],["js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["js/src/schemes/pisces.js","1bd23ed75238ebf11afe2aa6b1c3a25b"],["js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["js/src/utils.js","f06ffce70453ad3a4d9611fdde5ca6c3"],["lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["live2d-widget/README.html","9941b5173b7915eb6158e62f02cd9ea3"],["live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["live2d-widget/autoload.js","fc45c81e48138bde62e7e742cbbdabb9"],["live2d-widget/demo/demo1.html","82a14d37dbd83931644a4ad6ea1f9eb2"],["live2d-widget/demo/demo2.html","6babb045ef6905badc0dbc5e0d98cede"],["live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["live2d-widget/waifu.css","c4dae5924f2fb0b5ea6ef26aaab80db9"],["page/2/index.html","319e30ebb841459f08f2b57eea708353"],["tags/awk/index.html","dfb2d8cdcae013978639c93932a7e59b"],["tags/ceph/index.html","4c2687e3b8e704ccce4fb804932d8a26"],["tags/cephfs/index.html","1d30685ad936b0a3655679c94cf27a8d"],["tags/cloud-native/index.html","8d63948f3140da0ec47ff1afee01492e"],["tags/docker/index.html","a06bbca5f62633b0e36f382a3375f9fe"],["tags/elk/index.html","eb567ef6f82b5610a244b207ec33c93f"],["tags/elk7/index.html","d4fe0df468c9fc808e9531530a38cf59"],["tags/hexo6/index.html","839624ec8665d4ec23e99c454f5fc85a"],["tags/hexo美化/index.html","0f6c1eae3de436610d9695dd98b30a64"],["tags/index.html","1e531ab71d38f04ddc757e7ee25fbff2"],["tags/k8s/index.html","fa4b2064e18712558c2b2b7bc56f4dd2"],["tags/k8s存储/index.html","41e31e054ed38be067b0c5b7f84f5b59"],["tags/linux/index.html","78bac41956b6ddf7c7b7bd153d7e89f0"],["tags/markdown/index.html","159ef8accd02661804414e96cd7f24cc"],["tags/mysql/index.html","a66d190ef36b37872a8ab4aabb245c59"],["tags/mysql5-7/index.html","75eb9a1d7b0ffaa5e63a1ea7ab6697c3"],["tags/nfs/index.html","bbc1133039ab9fa61db59d48b4a2e38d"],["tags/nginx/index.html","1f93cd4a2215129a4e8b6a537bbe34e2"],["tags/php7/index.html","b3a6e5bea442659e2e03065938d756f6"],["tags/storageclass/index.html","2516a28d7ca00241a63771782990c910"],["tags/云原生/index.html","cc53f36950f09eb25861f6819080794b"],["tags/大佬博客/index.html","53af36355262d6e719b88229d5e2697b"],["tags/特效/index.html","8ed111da7dca34777411bad46971295f"]];
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







