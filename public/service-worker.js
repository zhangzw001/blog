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

var precacheConfig = [["2019/09/19/2-部署elk7-2-0/index.html","6b75d4ca9566ef3e846d52da468b2402"],["2019/09/19/首次搭建hexo博客系统/index.html","3035d33808282db4afa7ba58165f70e8"],["2019/09/20/3-k8s遇到的一些问题统计总结/index.html","4c2a170bde21a604cc78a9214e427d71"],["2019/09/24/4-hexo鼠标移动和鼠标点击特效/index.html","0eb510fb8f9bdae8a1932b247f54e6c1"],["2019/09/24/5-hexo添加看板娘/index.html","feb7b1d31ec1550efd1ed0794c9f20ca"],["2019/09/26/6-ceph安装部署/index.html","6824d4633f436f9e0526969a67a6a519"],["2019/09/26/7-k8s部署storageclass动态创建pv-nfs-rbd/index.html","5657383083218ffefbae3c9b4dfe1660"],["2019/09/26/8-mysql5-7二进制部署/index.html","d72b54de5810fbdd886201a23c21c71a"],["2019/09/26/9-linux遇到一些问题统计总结/index.html","6eaf43fe3b89212bb1cab9a54cc5bdfb"],["2019/09/27/10-centos6安装nginx1-16-php7-2/index.html","f5b9727d256442737c8eab3daaef2313"],["2019/10/10/11-mysql简单记录/index.html","76631ec25a0221a65a07d3bdc96864f1"],["2019/10/11/12-awk简单记录/index.html","dee4aad8f66d38dbd562c17e284a661b"],["2019/10/12/13-云原生博客汇总/index.html","3b1df3c2e2673694337a2f597fae2dc0"],["2019/10/15/14-mysql目录copy方式迁移/index.html","978267ac771d992aa5629955f8404c72"],["2019/10/16/15-docker简介和使用/index.html","bc97b0ee6cd52877246cf02c125e0fc9"],["2019/10/16/16-dockerfile介绍/index.html","bdbecf78c68462a5cd7cee510ae4c48d"],["2019/10/16/17-markdown一些写法记录/index.html","d5b153e6ff131e8cb372065909cf519c"],["2019/10/17/18-收藏链接/index.html","f839235066d5f9ae780cf019ded8c264"],["2019/10/17/19-shell中gt和>的区别/index.html","ca5e15a79a0c1c2085ed8c978c8a6491"],["2019/10/24/20-k8s搭建mysql5-7-24主从/index.html","7b414dda835339e9f6bd796e2b78603a"],["2019/10/28/21-流量复制工具gor/index.html","ca780aff6725e05b2216ecc91b06fb52"],["2019/10/28/22-es集群磁盘扩容/index.html","bf2600fa9d5e16fbc2f97659ff7faa8e"],["archives/index.html","d497c7d985fec2c2f2b6ced7543445d0"],["categories/docker/Dockerfile/index.html","18425ae2c34106b46be1eda78b2af61a"],["categories/docker/index.html","8ba6400427c37ca9ced912ef81dfc269"],["categories/elk/elasticsearch5/index.html","036abbbdd759741604d4c69722de4541"],["categories/elk/elasticsearch7/index.html","2a0ebb43390d16eaef0db11679c7e5c1"],["categories/elk/index.html","90f5cdeadb708626b2647bb28c40070a"],["categories/index.html","6e395a4faf1487a13cddd7ec24c1f3dd"],["categories/k8s/elk7/index.html","466ad822b13df81f6e48f0227270d46b"],["categories/k8s/index.html","93355ba407f11f6a3d9fddc1360b89cd"],["categories/k8s/mysql/index.html","d460f70d7806fe1ffacf9319610f73f6"],["categories/k8s/storageclass/index.html","640cb6b3dca73fcf7c11812851cf0015"],["categories/k8s/问题总结/index.html","e89ff6313f74a27e1c406a00345b77e5"],["categories/linux/awk/index.html","669620cfa6b7b72a0f5fa9aa5988b055"],["categories/linux/index.html","47132d0e2894e2795410b3a255a5577a"],["categories/linux/shell/index.html","20d8917a55e3d5f8d6c3abbc1b27e8f6"],["categories/linux/问题总结/index.html","59fe681bc2ffe40d3c0f21962583bf06"],["categories/markdown/index.html","e36c765c917c15d24bd83e14af3da290"],["categories/mysql/index.html","491163e3977cd01b17e2b56d1e280ce7"],["categories/nginx/index.html","dcd8e14748f772b2b6ecebb04bea7b79"],["categories/博客/index.html","2e6af9ca79555a16a53f5a5600f1c404"],["categories/博客/美化/index.html","0777a638fee2d3cf9b5131626fb943e2"],["categories/存储/ceph/index.html","3cd939f93cd947a343be46ed3adea99a"],["categories/存储/index.html","1de07bdd76b5d6d738f90a32ae94264f"],["categories/存储/nfs/index.html","82d0a579f59cb4446072445d5fb1881b"],["categories/技术文档/index.html","f697c09fb0dafea56d5cb244b0177454"],["categories/有趣/index.html","b58f2713aa73becd10facb2a5a69e016"],["categories/有趣/二次元/index.html","86866f8513fa335d17528a808fae8c92"],["categories/流量复制工具/gor/index.html","1ba5041d824a1f715fdc8802a6d9b14d"],["categories/流量复制工具/index.html","2490cf8fdb49c937e6badcc41bcc4e2d"],["categories/网址/index.html","1c9f9765f0dec3b48be2b8c64cb2877c"],["categories/网址/大佬博客/index.html","de5b39e3133c2f44ec1d13f6435bf856"],["categories/网址/收藏/index.html","70609c9d0ddf83b824c055ff111364e1"],["css/main.css","e0357149640345298a912783773ae9e8"],["images/16/容器的原理-1.png","1c184a092af6b6829c49ee20e70d132a"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["images/blog6/rancher-pv.png","d2a7e4bbfad5f71e75c9d5459cf5a464"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/docker1.jpg","5c611dd864017adeff648bca93d53f41"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/jixie-title.jpg","3ebd10201e23ecf68aba4524c020db0d"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["images/tcp三次握手图.png","32ddd8df35bd5762604327b25758370e"],["images/tcp四次挥手图.png","684b2b4a0286acadc32247d693dbd961"],["images/test1/test1.jpg","60b725f10c9c85c70d97880dfe8191b3"],["images/title1.jpg","fa2db043867c4c5654471e21ad36e5c0"],["images/title2.jpg","b6e57860ebc3fcdcf150a6a4cf3402ab"],["images/title3.jpg","f0b1554cfa4dd1193719dcfeb9e4de28"],["images/title4.jpg","6eb7bcbb846d1123e830488d75028df7"],["index.html","e300d01c9a71212a243134efed17d712"],["js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["js/src/instantclick.js","865d92a4a07409b7fed739e6a108e9c4"],["js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["js/src/live2d.js","3359a94d733737dbdd290dd41f9cef0b"],["js/src/love.js","7bcfdb57debd43483174cf9e15ab37cc"],["js/src/love2.js","2b51ddac5207cba4153da31e9132414c"],["js/src/motion.js","706d085e6cfec6f3e92dedc590d68d68"],["js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["js/src/schemes/pisces.js","1bd23ed75238ebf11afe2aa6b1c3a25b"],["js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["js/src/utils.js","f06ffce70453ad3a4d9611fdde5ca6c3"],["lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["live2d-widget/README.html","9941b5173b7915eb6158e62f02cd9ea3"],["live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["live2d-widget/autoload.js","fc45c81e48138bde62e7e742cbbdabb9"],["live2d-widget/demo/demo1.html","82a14d37dbd83931644a4ad6ea1f9eb2"],["live2d-widget/demo/demo2.html","6babb045ef6905badc0dbc5e0d98cede"],["live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["live2d-widget/waifu.css","c4dae5924f2fb0b5ea6ef26aaab80db9"],["page/2/index.html","a50e008a6bb81b67a451d9ee292dd294"],["page/3/index.html","6b325d2533bec69f0b62ef60a4558b2a"],["tags/awk/index.html","b10d5a83fe0b6e9646c5640e2f8ccbf9"],["tags/ceph/index.html","d1aba2f3fd5c20f3057d42454354e93e"],["tags/cephfs/index.html","6d47988b7739ca46a084627eddde5006"],["tags/cloud-native/index.html","add09b05d929a4c4feb1a31b88ce81fa"],["tags/docker/index.html","5d526a26630d551a20c128096be28644"],["tags/elasticsearch5/index.html","3dc82517a3585be2194746b3ef910530"],["tags/elasticsearch7/index.html","a74af8bef9ba94145e0c5d6c05221327"],["tags/elk/index.html","27d6d31815a826deeeaab1dd75fb306d"],["tags/elk7/index.html","0f2e5c96cba1ced36258865f2314f4c7"],["tags/gor/index.html","1e1f69032d4e0040ed69a1d2d9c1fbe6"],["tags/hexo6/index.html","a8ee29d30b6d049d20d313a32affb04a"],["tags/hexo美化/index.html","b8abd5e88d463cf5a5fee70e099fab11"],["tags/http流量复制工具/index.html","84bd41c2fec71c8afc39082619329875"],["tags/index.html","48e871854d5c064d85fc0885e62cd79f"],["tags/k8s/index.html","75680a6f238ac4d67003e0c06f20d405"],["tags/k8s存储/index.html","dcc1d3de7688dbe6c6ceb28dfa3e96f7"],["tags/linux/index.html","aa9cee49bcd48078f0f979d1fe7587f4"],["tags/markdown/index.html","c457f9ab5551b36ad377c4472e821995"],["tags/mysql/index.html","377005c6bfcd44d4764338906d88f772"],["tags/mysql5-7/index.html","3560e196a95f1e5bd9096e9831e4b896"],["tags/nfs/index.html","78d3d5c2f9a459994ece955f177505f3"],["tags/nginx/index.html","37ab5de5deb9d6aa720e8f65328d7172"],["tags/php7/index.html","317a805d45a448b09d635982701ebd67"],["tags/shell/index.html","994c90a22b31f5fd89eefb5743ecb78a"],["tags/storageclass/index.html","1ecfc6e64fd847042f06cb309b1171e9"],["tags/云原生/index.html","e22b0ca7b34a856c390e6def64313dec"],["tags/大佬博客/index.html","45b27d13cd22ce234945c9a5bbae1f89"],["tags/收藏/index.html","dd67038c99210172ff0c845a1c579378"],["tags/特效/index.html","7faace3577303e2ef4ded1f93d08b913"],["tags/网址/index.html","18157b5375c655047226d989bb90bc60"]];
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







