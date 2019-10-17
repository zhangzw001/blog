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

var precacheConfig = [["2019/09/19/2-部署elk7-2-0/index.html","f976df10172adc0bf11a9bd0a7afbfef"],["2019/09/19/首次搭建hexo博客系统/index.html","5197f4c63b0a656f750334e4b865d533"],["2019/09/20/3-k8s遇到的一些问题统计总结/index.html","c0e063e552560d76d099ec673a75e4e9"],["2019/09/24/4-hexo鼠标移动和鼠标点击特效/index.html","a0d9e2ae9e39a0ced24ac38b2a705c64"],["2019/09/24/5-hexo添加看板娘/index.html","fa856913c45e316cec735c22f2d38e71"],["2019/09/26/6-ceph安装部署/index.html","d18592f45cc1e0c2d73b7a73389eeaa0"],["2019/09/26/7-k8s部署storageclass动态创建pv-nfs-rbd/index.html","735e22ac5cce9c49949dc6438528d65d"],["2019/09/26/8-mysql5-7二进制部署/index.html","59456e841901dfd7c6730e5d332f3452"],["2019/09/26/9-linux遇到一些问题统计总结/index.html","51a83dfbcc61c520d77b3ede8ab91289"],["2019/09/27/10-centos6安装nginx1-16-php7-2/index.html","297b9396eead699926509cbde2eea030"],["2019/10/10/11-mysql简单记录/index.html","ecf38568407533eab475e2ccd082309f"],["2019/10/11/12-awk简单记录/index.html","7e39c5495181b24fbf2d1ce3e7168eb9"],["2019/10/12/13-云原生博客汇总/index.html","dcf06ca60317c8177252b8e49bcd5cbc"],["2019/10/15/14-mysql目录copy方式迁移/index.html","16359f3e76a56862c6baf2830760298c"],["2019/10/16/15-docker简介和使用/index.html","0c18dead0b7b64269c617c86fdbbaca5"],["2019/10/16/16-dockerfile介绍/index.html","a3ef5edf6675982a566b5556f04d0612"],["2019/10/16/17-markdown一些写法记录/index.html","a907e058e29e6b99069e3663ea1519a9"],["2019/10/17/18-收藏链接/index.html","10479ccbed597f1deff867d8c77009b3"],["archives/index.html","878b8dd1d74d663912e9251dcf33eb89"],["categories/docker/Dockerfile/index.html","7d3d5d5ad4c156cea6712a75396c780c"],["categories/docker/index.html","239d06401fe5e0528376c7ead126965a"],["categories/index.html","e1cb7145c011d5bcf6412ea9c6c5c4c6"],["categories/k8s/elk7/index.html","cec3590acd384795071bb98e7508a6ba"],["categories/k8s/index.html","3cb27f60ff25d4b0ce462740c6124796"],["categories/k8s/storageclass/index.html","3cd1c0309ea604777f89b8824b145708"],["categories/k8s/问题总结/index.html","849ba94790ec561169fd4eb061d22430"],["categories/linux/awk/index.html","1781f1c9fbf91443b7db589b460b1c70"],["categories/linux/index.html","3a582d156ee9843bea6bcaad5fbe7498"],["categories/linux/问题总结/index.html","0461b97a0b975ddcb01529a7fa434e55"],["categories/markdown/index.html","cc8a5d677e4f5c2a6c14e1ec5d41f5be"],["categories/mysql/index.html","ece0b28f411f5cf71bf517c1e2cb41bd"],["categories/nginx/index.html","2d95e0f0c8e6e1e8c5b7cb29b57dea04"],["categories/博客/index.html","ed83f9a2390581863ef85397d9045ad6"],["categories/博客/美化/index.html","777782ef910a91dfd6e5fcbfc562e88e"],["categories/存储/ceph/index.html","298bfeb9545fe6e082d3342918a4aa65"],["categories/存储/index.html","810977b3ab47ab2ca71126cb5e681a54"],["categories/存储/nfs/index.html","b69248adca01f718eca0e9f1f60a8966"],["categories/技术文档/index.html","476b00fd1f082cb17316631b682d84a7"],["categories/有趣/index.html","1a2cfd5c89b482aae90816524f84b83d"],["categories/有趣/二次元/index.html","973224a409418a6bb852a648af7867bf"],["categories/网址/index.html","a9421e980561cf87ed12d0ae51b7e892"],["categories/网址/大佬博客/index.html","1a5dce32f739a4fd2d174238fa5aeb04"],["categories/网址/收藏/index.html","1b41d91d0e8f4117403fd18e5964de56"],["css/main.css","02294d699b07c44c82f615488245b9c9"],["images/16/容器的原理-1.png","1c184a092af6b6829c49ee20e70d132a"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["images/blog6/rancher-pv.png","d2a7e4bbfad5f71e75c9d5459cf5a464"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/docker1.jpg","5c611dd864017adeff648bca93d53f41"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/jixie-title.jpg","3ebd10201e23ecf68aba4524c020db0d"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["images/tcp三次握手图.png","32ddd8df35bd5762604327b25758370e"],["images/tcp四次挥手图.png","684b2b4a0286acadc32247d693dbd961"],["images/test1/test1.jpg","60b725f10c9c85c70d97880dfe8191b3"],["images/title1.jpg","fa2db043867c4c5654471e21ad36e5c0"],["images/title2.jpg","b6e57860ebc3fcdcf150a6a4cf3402ab"],["images/title3.jpg","f0b1554cfa4dd1193719dcfeb9e4de28"],["images/title4.jpg","6eb7bcbb846d1123e830488d75028df7"],["index.html","ab4d9843bb22df676dc41a25ba45a1db"],["js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["js/src/instantclick.js","865d92a4a07409b7fed739e6a108e9c4"],["js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["js/src/live2d.js","3359a94d733737dbdd290dd41f9cef0b"],["js/src/love.js","7bcfdb57debd43483174cf9e15ab37cc"],["js/src/love2.js","2b51ddac5207cba4153da31e9132414c"],["js/src/motion.js","706d085e6cfec6f3e92dedc590d68d68"],["js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["js/src/schemes/pisces.js","1bd23ed75238ebf11afe2aa6b1c3a25b"],["js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["js/src/utils.js","f06ffce70453ad3a4d9611fdde5ca6c3"],["lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["live2d-widget/README.html","9941b5173b7915eb6158e62f02cd9ea3"],["live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["live2d-widget/autoload.js","fc45c81e48138bde62e7e742cbbdabb9"],["live2d-widget/demo/demo1.html","82a14d37dbd83931644a4ad6ea1f9eb2"],["live2d-widget/demo/demo2.html","6babb045ef6905badc0dbc5e0d98cede"],["live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["live2d-widget/waifu.css","c4dae5924f2fb0b5ea6ef26aaab80db9"],["page/2/index.html","caa80f57f82736e91e8d183b96327f40"],["tags/awk/index.html","2911334a8b9664ddfbe1f5a53ac17473"],["tags/ceph/index.html","f3ea79cdc6122ef79e50dcb452970d70"],["tags/cephfs/index.html","809bbe07461f15dc192ae0ff00103089"],["tags/cloud-native/index.html","5882c568daee9033718551af03a6b44f"],["tags/docker/index.html","783fc5fd80e639ad3fd2adb1f2cd78af"],["tags/elk/index.html","d36632baccd5d8b583d053f9d5fd3626"],["tags/elk7/index.html","800649c888ea588c3014c39c2c4eb90f"],["tags/hexo6/index.html","7d6283f3761e30fb2df6fe336d7a7221"],["tags/hexo美化/index.html","2edfda97dcdc3e40fbca943702514780"],["tags/index.html","a18d022290ec0cb6230b891beba3f713"],["tags/k8s/index.html","fe1cbb87bc0cb872a6231413115d15d5"],["tags/k8s存储/index.html","f3833e66ce63a682efaa16b8b492c357"],["tags/linux/index.html","35f041852861bfc313ee2c5503fe7b0a"],["tags/markdown/index.html","b9cdcf97b5cfd00fcea895db74d2b85e"],["tags/mysql/index.html","f553b92483df550746f4d70b79a72109"],["tags/mysql5-7/index.html","aca0d1030db220baf39dac01f5d0653e"],["tags/nfs/index.html","b87d7364bf0c32ad32c11cbd1c88c292"],["tags/nginx/index.html","08ee7c4ace329d188b0bc78aed63bd51"],["tags/php7/index.html","db95c3c5f4ae29a13e96e17a6b9730cb"],["tags/storageclass/index.html","3cf68d14ecdad126247dd392a52fb3c7"],["tags/云原生/index.html","82e75a32ae91cc47af8f302e7675526f"],["tags/大佬博客/index.html","85a748bd333df4158345d4d4d7fbda25"],["tags/收藏/index.html","0c1ef26f22698920b0b2506c8bf851f1"],["tags/特效/index.html","5ad8e9b19f054c73d8ab7340b61e7148"],["tags/网址/index.html","f6774f59b6638ae7b72a11132214defd"]];
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







