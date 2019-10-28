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

var precacheConfig = [["2019/09/19/2-部署elk7-2-0/index.html","84736748cafb254a36bde41b057c556d"],["2019/09/19/首次搭建hexo博客系统/index.html","4ab55413fbfcd3516d0b55be08735b2c"],["2019/09/20/3-k8s遇到的一些问题统计总结/index.html","45ddb714c2ddde9d543d6e4a3e85393a"],["2019/09/24/4-hexo鼠标移动和鼠标点击特效/index.html","1fc616b2c3f0bc8f4ce3361c4968fcbe"],["2019/09/24/5-hexo添加看板娘/index.html","bfa08b611cfa3dff5b8517fabaf0cfbc"],["2019/09/26/6-ceph安装部署/index.html","a4f5511c755af19f6e76c1bd66cd22a0"],["2019/09/26/7-k8s部署storageclass动态创建pv-nfs-rbd/index.html","4f57f701e942ff33cad58d2543f87672"],["2019/09/26/8-mysql5-7二进制部署/index.html","e9c9317dba56d8ad91895e11f7da59c9"],["2019/09/26/9-linux遇到一些问题统计总结/index.html","c79b47fe566e5f63fc3257cb48378ed7"],["2019/09/27/10-centos6安装nginx1-16-php7-2/index.html","a82fa7530120684d3dfe0af14f6d8b72"],["2019/10/10/11-mysql简单记录/index.html","409476d3e9e3d9b9ae274b1bb8374c92"],["2019/10/11/12-awk简单记录/index.html","0aa511f0d076986b818e4a97b2dd1bcb"],["2019/10/12/13-云原生博客汇总/index.html","bb4e3b9a63e5f50702f1b2adbf7fe6cb"],["2019/10/15/14-mysql目录copy方式迁移/index.html","a48c5ba03636768c85ac9bc598dabddf"],["2019/10/16/15-docker简介和使用/index.html","457af9e2ff745cddac1d97e0cdf7895d"],["2019/10/16/16-dockerfile介绍/index.html","8d51655708b30ac276eecf3738e9b500"],["2019/10/16/17-markdown一些写法记录/index.html","c52c3b6d4b85a60ec7a0547bf9c0b765"],["2019/10/17/18-收藏链接/index.html","054ab75aa89bb1c3ca4b69c303b7f4db"],["2019/10/17/19-shell中gt和>的区别/index.html","d7f277a9a9f39af17106c4481b836e5a"],["2019/10/24/20-k8s搭建mysql5-7-24主从/index.html","24574e1e38612d4c232330afea988a4b"],["2019/10/28/21-流量复制工具gor/index.html","5adf233b5c3bc03e988f61574f59c02a"],["archives/index.html","314b4ba3bc8e19f7dd43625f1d16efde"],["categories/docker/Dockerfile/index.html","89e457ccf31d380a369bf21be98b93b7"],["categories/docker/index.html","bca31293e9e5920a7566762eb3120bf5"],["categories/index.html","ce7816b7fe43e521c26428901f950f94"],["categories/k8s/elk7/index.html","ead3a6028bccf10c63932f2694c10b9e"],["categories/k8s/index.html","aa5a130e8d5927d9892b279509ebbd7b"],["categories/k8s/mysql/index.html","e20b6f0d6d3f5eae9d9fea1b236bf46f"],["categories/k8s/storageclass/index.html","9a576973226801d6e0765d74f2c7382c"],["categories/k8s/问题总结/index.html","e99801f1a735b2d51110a82503384653"],["categories/linux/awk/index.html","595efab6383845a35d2c78973f7cfa54"],["categories/linux/index.html","4c50c0aeb02791fef3e658ada8ec09c3"],["categories/linux/shell/index.html","c8a8137a0438344f67f34254c5abfbf8"],["categories/linux/问题总结/index.html","9448e148d243461aa8b3659c9ee31673"],["categories/markdown/index.html","7d62eecae237b4a432174b3baa46378b"],["categories/mysql/index.html","5799983831f63882158cb22aaea0b842"],["categories/nginx/index.html","174260c94351f8e0f8f6c7389de4c3e0"],["categories/博客/index.html","084a58f8232e588434c4360ef0c1b9a5"],["categories/博客/美化/index.html","763a22a0221bf53a1287415873d7cf10"],["categories/存储/ceph/index.html","6448676ae2f6df67ed2a53e82e878ab1"],["categories/存储/index.html","e9a5ca4fb9ee9fcb2d8bfa038fab2b50"],["categories/存储/nfs/index.html","63764ca7267dc96a9337e38b16f6f3f2"],["categories/技术文档/index.html","9eeae7c20771fe757b7ac361c85dba37"],["categories/有趣/index.html","6474224bc4b2751d2d63359e9f553100"],["categories/有趣/二次元/index.html","d417526573d44e4a1ac008b5f27653c7"],["categories/网址/index.html","d25208ebb0d549cd17c7780369dc7c83"],["categories/网址/大佬博客/index.html","a1951e781f319e96ab2a76abc7495532"],["categories/网址/收藏/index.html","94218a0f4d7bfbb6e237a78e5a74412b"],["css/main.css","8087ce0dde01621b0f50dbc1dccd7c1d"],["images/16/容器的原理-1.png","1c184a092af6b6829c49ee20e70d132a"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["images/blog6/rancher-pv.png","d2a7e4bbfad5f71e75c9d5459cf5a464"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/docker1.jpg","5c611dd864017adeff648bca93d53f41"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/jixie-title.jpg","3ebd10201e23ecf68aba4524c020db0d"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["images/tcp三次握手图.png","32ddd8df35bd5762604327b25758370e"],["images/tcp四次挥手图.png","684b2b4a0286acadc32247d693dbd961"],["images/test1/test1.jpg","60b725f10c9c85c70d97880dfe8191b3"],["images/title1.jpg","fa2db043867c4c5654471e21ad36e5c0"],["images/title2.jpg","b6e57860ebc3fcdcf150a6a4cf3402ab"],["images/title3.jpg","f0b1554cfa4dd1193719dcfeb9e4de28"],["images/title4.jpg","6eb7bcbb846d1123e830488d75028df7"],["index.html","78c17ac41a4a29de8735dc9198ead775"],["js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["js/src/instantclick.js","865d92a4a07409b7fed739e6a108e9c4"],["js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["js/src/live2d.js","3359a94d733737dbdd290dd41f9cef0b"],["js/src/love.js","7bcfdb57debd43483174cf9e15ab37cc"],["js/src/love2.js","2b51ddac5207cba4153da31e9132414c"],["js/src/motion.js","706d085e6cfec6f3e92dedc590d68d68"],["js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["js/src/schemes/pisces.js","1bd23ed75238ebf11afe2aa6b1c3a25b"],["js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["js/src/utils.js","f06ffce70453ad3a4d9611fdde5ca6c3"],["lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["live2d-widget/README.html","9941b5173b7915eb6158e62f02cd9ea3"],["live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["live2d-widget/autoload.js","fc45c81e48138bde62e7e742cbbdabb9"],["live2d-widget/demo/demo1.html","82a14d37dbd83931644a4ad6ea1f9eb2"],["live2d-widget/demo/demo2.html","6babb045ef6905badc0dbc5e0d98cede"],["live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["live2d-widget/waifu.css","c4dae5924f2fb0b5ea6ef26aaab80db9"],["page/2/index.html","9906cc3bf67a769d9b6043d752b949d7"],["page/3/index.html","ff371ebfbcf5a0ee6490ef48722691d7"],["tags/awk/index.html","4af3cc03aa7a9331085fcc5a1ccfd6a0"],["tags/ceph/index.html","7ba5ff83641e50390bae7603615c0787"],["tags/cephfs/index.html","ca7348ccbfbf0d180e1ac6587a8dcc3f"],["tags/cloud-native/index.html","961fc98f37be73027973592b5620a9c1"],["tags/docker/index.html","372f13c8f736e84ce8136d8aa70e6cfb"],["tags/elk/index.html","9aa25272d219cb8de5170e281dff6f4f"],["tags/elk7/index.html","2d96604f827241b7dd72249a8b019cd9"],["tags/hexo6/index.html","b58cf2a02a7f0520d52da699a18f1843"],["tags/hexo美化/index.html","3d09a1d33c30824dfdd7d349f846c1ae"],["tags/index.html","4605317dfaf2228e0d287e6c24d71960"],["tags/k8s/index.html","4c509a71faf9dd1cf066e74180ba7e00"],["tags/k8s存储/index.html","d617c662a041c6a062398a18083472b8"],["tags/linux/index.html","6985d3cb8296dbfe4096d4f9908a21af"],["tags/markdown/index.html","32cac59fce6f767d79fb60610670dc7b"],["tags/mysql/index.html","1a318eac20721fd7962f4d4d91094ace"],["tags/mysql5-7/index.html","7dc092d041d789b7759fa46e87762ac8"],["tags/nfs/index.html","0aa632e70574f1e3975c71ef9d61b58f"],["tags/nginx/index.html","7a5cbf4323ad530b6bb35bcd0fc631c1"],["tags/php7/index.html","d836e09f6c93bab4dc7cf65fc96d1a5f"],["tags/shell/index.html","32df6c83d0d8e0893cecfca8cfad229d"],["tags/storageclass/index.html","be24a50ccf5601cae38450687d164556"],["tags/云原生/index.html","d54ddc6ec0fbe664d3aa2e60f2391c19"],["tags/大佬博客/index.html","8a98ff35f9d8626df48de3615b83cec1"],["tags/收藏/index.html","73351617224827a741ff6aeafc97b041"],["tags/特效/index.html","9f58eb5c32f1983e587d8d9c847ea219"],["tags/网址/index.html","1bd7aec55a620f56841477641bddbdfe"]];
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







