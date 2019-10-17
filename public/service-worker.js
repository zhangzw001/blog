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

var precacheConfig = [["2019/09/19/2-部署elk7-2-0/index.html","ca751f231bd75bcc6fe6459549e6af2e"],["2019/09/19/首次搭建hexo博客系统/index.html","de10ee585e2a7cd8062207db26f13e6d"],["2019/09/20/3-k8s遇到的一些问题统计总结/index.html","844211cbfeb2b020b3b7cbe25e55e6b2"],["2019/09/24/4-hexo鼠标移动和鼠标点击特效/index.html","3b0a6633ef9466aab6989bcf02187a56"],["2019/09/24/5-hexo添加看板娘/index.html","29533b666f73c07554e21a35fb8a55dc"],["2019/09/26/6-ceph安装部署/index.html","fbb3233e421541bdbdc2ece34256266f"],["2019/09/26/7-k8s部署storageclass动态创建pv-nfs-rbd/index.html","0eae04376fc1e571c0d568302bba8f8a"],["2019/09/26/8-mysql5-7二进制部署/index.html","a600721968c0ada0df3d6b061f0e4558"],["2019/09/26/9-linux遇到一些问题统计总结/index.html","a885c762bb6f536a801254f67924d2a8"],["2019/09/27/10-centos6安装nginx1-16-php7-2/index.html","a70b4b801bdd5ac204ed14f444dafcce"],["2019/10/10/11-mysql简单记录/index.html","a2ac1e9b8354cb60effd7c57d368111c"],["2019/10/11/12-awk简单记录/index.html","091641b099c2d70c845866aeb1708a1b"],["2019/10/12/13-云原生博客汇总/index.html","f93837543694b0db3caa9a9198066c30"],["2019/10/15/14-mysql目录copy方式迁移/index.html","4241e94d4ea113dda9ad4e67df9c93a9"],["2019/10/16/15-docker简介和使用/index.html","7d94f091cbaaf37927555c51f84ccd54"],["2019/10/16/16-dockerfile介绍/index.html","36661fa9e93881fa03f3cc3c0224f82c"],["2019/10/16/17-markdown一些写法记录/index.html","f22e752fc6c88db2b0e2f2c5f5102eaf"],["2019/10/17/18-收藏链接/index.html","25fd428f44194095a4b676cb61366643"],["archives/index.html","52ea48fc5564a11f6fef3a69e5852f16"],["categories/docker/Dockerfile/index.html","4dc410d22c7812b1d663d3fc8e486519"],["categories/docker/index.html","ff53ff2bb3020dc4e300018bfd8903bf"],["categories/index.html","a91c4d05c14690eb79b376d2d68f21c5"],["categories/k8s/elk7/index.html","7505450250c10b54f4c7b07d2787314a"],["categories/k8s/index.html","6d68e37fbd0d7ab3d532f1b3c892168e"],["categories/k8s/storageclass/index.html","70d030a862f646c07629da4850d1f55c"],["categories/k8s/问题总结/index.html","0dee18b4e026a4063274249f399453bd"],["categories/linux/awk/index.html","f6da4ab13b4cf6746535550ad224dcd9"],["categories/linux/index.html","e4b0cd42390e797857c4d7ef8de81865"],["categories/linux/问题总结/index.html","9bf002337d137d146657b140e7305e62"],["categories/markdown/index.html","1317e744afc21b312c453ab93e587e35"],["categories/mysql/index.html","61d13c7f98dd1bcb5c16b8d98e964733"],["categories/nginx/index.html","c3bbf3d640ed616a2af1765c4e4d8191"],["categories/博客/index.html","10beac5fc14e2d74cb596ff9a6477ac0"],["categories/博客/美化/index.html","af53a28a81da74ab47f01831cd1eca94"],["categories/存储/ceph/index.html","b23b45cfe8957e2870ebe103c31fd22d"],["categories/存储/index.html","77f26130289caba5fd524cae9ee2162e"],["categories/存储/nfs/index.html","6c73139cff79840c43e33fd91d868cfb"],["categories/技术文档/index.html","0e7976c61a32c1b8d4f1aa8b8c228c58"],["categories/有趣/index.html","7ad39fd31be780dbd0b2299b9503eed0"],["categories/有趣/二次元/index.html","73a4385de4ec5f1a4f209dc964a2f80b"],["categories/网址/index.html","8995b70044dc9dfcda939d2820f25653"],["categories/网址/大佬博客/index.html","61f45faf4c0a179577b2a1f521be155e"],["css/main.css","9fc18ac037110f6ccf603d90da446839"],["images/16/容器的原理-1.png","1c184a092af6b6829c49ee20e70d132a"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["images/blog6/rancher-pv.png","d2a7e4bbfad5f71e75c9d5459cf5a464"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/docker1.jpg","5c611dd864017adeff648bca93d53f41"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/jixie-title.jpg","3ebd10201e23ecf68aba4524c020db0d"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["images/tcp三次握手图.png","32ddd8df35bd5762604327b25758370e"],["images/tcp四次挥手图.png","684b2b4a0286acadc32247d693dbd961"],["images/test1/test1.jpg","60b725f10c9c85c70d97880dfe8191b3"],["images/title1.jpg","fa2db043867c4c5654471e21ad36e5c0"],["images/title2.jpg","b6e57860ebc3fcdcf150a6a4cf3402ab"],["images/title3.jpg","f0b1554cfa4dd1193719dcfeb9e4de28"],["images/title4.jpg","6eb7bcbb846d1123e830488d75028df7"],["index.html","fd06f573eb70a694c3a967cfb8816ab9"],["js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["js/src/instantclick.js","865d92a4a07409b7fed739e6a108e9c4"],["js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["js/src/live2d.js","3359a94d733737dbdd290dd41f9cef0b"],["js/src/love.js","7bcfdb57debd43483174cf9e15ab37cc"],["js/src/love2.js","2b51ddac5207cba4153da31e9132414c"],["js/src/motion.js","706d085e6cfec6f3e92dedc590d68d68"],["js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["js/src/schemes/pisces.js","1bd23ed75238ebf11afe2aa6b1c3a25b"],["js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["js/src/utils.js","f06ffce70453ad3a4d9611fdde5ca6c3"],["lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["live2d-widget/README.html","9941b5173b7915eb6158e62f02cd9ea3"],["live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["live2d-widget/autoload.js","fc45c81e48138bde62e7e742cbbdabb9"],["live2d-widget/demo/demo1.html","82a14d37dbd83931644a4ad6ea1f9eb2"],["live2d-widget/demo/demo2.html","6babb045ef6905badc0dbc5e0d98cede"],["live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["live2d-widget/waifu.css","c4dae5924f2fb0b5ea6ef26aaab80db9"],["page/2/index.html","9a505ecad7fd43e01806c6f64e991ac6"],["tags/awk/index.html","3b099834f713275f5b8cb7422593b80d"],["tags/ceph/index.html","6f39f9d25ad9b23fb1bfdc1760f31b1a"],["tags/cephfs/index.html","98e056e8163687b90ee4dbd5e80e2e4d"],["tags/cloud-native/index.html","858805750a2ae21c982adf39c760b5a3"],["tags/docker/index.html","ab084f8275f102aa2cf68d84f95bb92a"],["tags/elk/index.html","bd467ed4f455c20a23325629583a3b1f"],["tags/elk7/index.html","58f4bf4a969ecaac1279495e37d84c4c"],["tags/hexo6/index.html","760350ac1a1acfcba62c570f08b45ea1"],["tags/hexo美化/index.html","0f1a462e8d233f1cbb6e25fd15d03beb"],["tags/index.html","9612d2dcc1549c58aa42b3c6ce8e7b68"],["tags/k8s/index.html","c5aedb49c4ea20ea2f01c223c1ada23a"],["tags/k8s存储/index.html","e107b4ad25357eafae8f1414f42280f5"],["tags/linux/index.html","b364e66d0cd6e4aeebc053d98b0b8972"],["tags/markdown/index.html","0451118b1066fd561b171b990704a584"],["tags/mysql/index.html","ab7ed20817d7a694764f74d41fd96c72"],["tags/mysql5-7/index.html","f3e5fdb3f9b181fbcdc2ce5ff0e49d86"],["tags/nfs/index.html","20869f20860eefd553746f7a44cdaa72"],["tags/nginx/index.html","468d1febae12815bbfea2b655c325682"],["tags/php7/index.html","0a52f91639c1bc4521a4de820c9d46e1"],["tags/storageclass/index.html","e75c18b7bb22d59c6fa54816e09723bf"],["tags/云原生/index.html","a90742ac03843f332153b9dd520f909d"],["tags/大佬博客/index.html","bd7eda7a5fcabebe7683a60b1120bcf2"],["tags/特效/index.html","535f7292203115c9246c35f006e2a571"]];
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







