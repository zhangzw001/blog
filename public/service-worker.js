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

var precacheConfig = [["2019/09/19/2-部署elk7-2-0/index.html","40be970ef0e36ec1bc4432d26a6a41a6"],["2019/09/19/首次搭建hexo博客系统/index.html","8c3f7109ca2b104597079602460dbe3e"],["2019/09/20/3-k8s遇到的一些问题统计总结/index.html","3ede0294ac3f7c040750bba1584a5377"],["2019/09/24/4-hexo鼠标移动和鼠标点击特效/index.html","cfe4370c31617c6fe5d548e1e61c3a03"],["2019/09/24/5-hexo添加看板娘/index.html","61d6ab5e8380c45ddbf3e3d4fbf1e838"],["2019/09/26/6-ceph安装部署/index.html","b9eca8514de745ab37fb2297ccb96232"],["2019/09/26/7-k8s部署storageclass动态创建pv-nfs-rbd/index.html","f3756b2b6bd55ab5ed211feb1c1dea58"],["2019/09/26/8-mysql5-7二进制部署/index.html","a19c1587a46e39558b6cfeec1189495a"],["2019/09/26/9-linux遇到一些问题统计总结/index.html","52ed7e1b32efe902a91bb8a86d897e1d"],["2019/09/27/10-centos6安装nginx1-16-php7-2/index.html","2d7e4d12c25f331f336d17029dc9923c"],["2019/10/10/11-mysql简单记录/index.html","37f0b97f4fa35aa83782d18d528a1fd9"],["2019/10/11/12-awk简单记录/index.html","5ca9406b788f2c83d17d315366c9d5f7"],["2019/10/12/13-云原生博客汇总/index.html","7301c78f2ffb0620127979cdfbe8226b"],["2019/10/15/14-mysql目录copy方式迁移/index.html","dc90ddd8f0c41fd1bf93c7b03357f249"],["2019/10/16/15-docker简介和使用/index.html","43a071a280f5e689ab6ca4739013461a"],["2019/10/16/16-dockerfile介绍/index.html","4ccce169e75714aaed56c9e23089055c"],["2019/10/16/17-markdown一些写法记录/index.html","67a76c26e96c62ad4ccb12fd350a2acb"],["2019/10/17/18-收藏链接/index.html","468194a8eb15852c95c885a0ed522024"],["2019/10/17/19-shell中gt和>的区别/index.html","fb1c30dacf0154ac219ed29909047f97"],["2019/10/24/20-k8s搭建mysql5-7-24主从/index.html","8551130a6327682e6d4e0f2672718cbd"],["archives/index.html","c3f89cefd110f957ac0c7cc468af094b"],["categories/docker/Dockerfile/index.html","8a650cccaa2057f6309989c105a67c12"],["categories/docker/index.html","1e7f8f83569791cbd9919774c80dd51a"],["categories/index.html","73891b75b8d5e090918b1ff8f64e8e29"],["categories/k8s/elk7/index.html","dab1800b0d8d7cc386fc7f71d6176a34"],["categories/k8s/index.html","13e1740cee973ef2832a4c69240a0bf3"],["categories/k8s/storageclass/index.html","19417e318372d9638b3c7f33de47df72"],["categories/k8s/问题总结/index.html","65b40cbc6317a43072068829c48084ac"],["categories/linux/awk/index.html","7457136a3dc32a7591e42aeba6062b25"],["categories/linux/index.html","2111de7b341a11486c31191b74d04faf"],["categories/linux/shell/index.html","5f0095f8e6a563e77987e4d0336d8496"],["categories/linux/问题总结/index.html","8b9b73792175bb7264f8cce7218f95cf"],["categories/markdown/index.html","22eac3e4d6c144a70837f47fbec13047"],["categories/mysql/index.html","a1dcdbe418a783283b26f4cf34a2213b"],["categories/nginx/index.html","0c84a4f895786e45e55772d46c9ea14f"],["categories/博客/index.html","a0240b03a8f166fcb02e06ea27e695a2"],["categories/博客/美化/index.html","85c7b53b296348fcf82f86433843afc7"],["categories/存储/ceph/index.html","7616a69f6bf3d1beea77e99f8b2053b4"],["categories/存储/index.html","9f1ba9551bbd243ef2bc1a38e34a72ab"],["categories/存储/nfs/index.html","375a8237acd8e69dc1ebdafab7dbeb75"],["categories/技术文档/index.html","e1d9acd09b8403126022d89f811bb4f1"],["categories/有趣/index.html","6040ca0bc6ebb74b608031b491bb33d8"],["categories/有趣/二次元/index.html","cb88cf0fa5778facb1c98003fbc18923"],["categories/网址/index.html","624ad4397d131e4b2e9a1426c33573f6"],["categories/网址/大佬博客/index.html","30d45455ff1578ecb35feda1091c33fe"],["categories/网址/收藏/index.html","7259df249c428c8bc4cb8fd253545f6b"],["css/main.css","db0dce39f401504a62656574d31b1ac3"],["images/16/容器的原理-1.png","1c184a092af6b6829c49ee20e70d132a"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["images/blog6/rancher-pv.png","d2a7e4bbfad5f71e75c9d5459cf5a464"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/docker1.jpg","5c611dd864017adeff648bca93d53f41"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/jixie-title.jpg","3ebd10201e23ecf68aba4524c020db0d"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["images/tcp三次握手图.png","32ddd8df35bd5762604327b25758370e"],["images/tcp四次挥手图.png","684b2b4a0286acadc32247d693dbd961"],["images/test1/test1.jpg","60b725f10c9c85c70d97880dfe8191b3"],["images/title1.jpg","fa2db043867c4c5654471e21ad36e5c0"],["images/title2.jpg","b6e57860ebc3fcdcf150a6a4cf3402ab"],["images/title3.jpg","f0b1554cfa4dd1193719dcfeb9e4de28"],["images/title4.jpg","6eb7bcbb846d1123e830488d75028df7"],["index.html","d181cff29589046607d651351d8a8ff0"],["js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["js/src/instantclick.js","865d92a4a07409b7fed739e6a108e9c4"],["js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["js/src/live2d.js","3359a94d733737dbdd290dd41f9cef0b"],["js/src/love.js","7bcfdb57debd43483174cf9e15ab37cc"],["js/src/love2.js","2b51ddac5207cba4153da31e9132414c"],["js/src/motion.js","706d085e6cfec6f3e92dedc590d68d68"],["js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["js/src/schemes/pisces.js","1bd23ed75238ebf11afe2aa6b1c3a25b"],["js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["js/src/utils.js","f06ffce70453ad3a4d9611fdde5ca6c3"],["lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["live2d-widget/README.html","9941b5173b7915eb6158e62f02cd9ea3"],["live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["live2d-widget/autoload.js","fc45c81e48138bde62e7e742cbbdabb9"],["live2d-widget/demo/demo1.html","82a14d37dbd83931644a4ad6ea1f9eb2"],["live2d-widget/demo/demo2.html","6babb045ef6905badc0dbc5e0d98cede"],["live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["live2d-widget/waifu.css","c4dae5924f2fb0b5ea6ef26aaab80db9"],["page/2/index.html","fd46f0713a18c02358ce1f1ae713a6c6"],["tags/awk/index.html","cf45b5871e155ffa769e0f2c7ae0dc24"],["tags/ceph/index.html","47fdc071468e6070cfdbf2548e5ac6d2"],["tags/cephfs/index.html","06b74ba0460ac01edfb7fb19b8db8fbf"],["tags/cloud-native/index.html","49439aebb6943009b493e175a9159f07"],["tags/docker/index.html","f52458a1c2c83b4a6c96699402733776"],["tags/elk/index.html","3d19260f29a306c35d84e60881be9be7"],["tags/elk7/index.html","4ad44e300f5e995bd3864902ca885ad1"],["tags/hexo6/index.html","48e62e150fd690a547e7f23a4fba907f"],["tags/hexo美化/index.html","c155e3eb77845f96eb27c1c2def8bbc2"],["tags/index.html","c63d1c05b42e36f0a8a7c1586bcdd424"],["tags/k8s/index.html","75822ebabb2f95e3a2b105e108b5dbd9"],["tags/k8s存储/index.html","e3c3a58b7bdbb3d0fcf678cb5eb5b1c6"],["tags/linux/index.html","6635e47eb3f8548e0149980be5835eef"],["tags/markdown/index.html","259c8bcfc14ceac836226a008d8a5795"],["tags/mysql/index.html","eee97df184e89a205ed78e16a37a79a9"],["tags/mysql5-7/index.html","a6d6753ad7cddb457c09d711c533d86b"],["tags/nfs/index.html","904e29931adeed0683efcf2d00c659fb"],["tags/nginx/index.html","d189b5746d81c7a3194d88d1417db61a"],["tags/php7/index.html","6d2b2ab9c245ae46d3f245abd7d280b1"],["tags/shell/index.html","2beebcadf85f600a5dd89c39ea033409"],["tags/storageclass/index.html","b0444438939038364ab2983e8838c0bd"],["tags/云原生/index.html","608deae2785c0f123d8cc21b57d33769"],["tags/大佬博客/index.html","6bdfa9ea2cfa0c12e461d7eb70eda594"],["tags/收藏/index.html","7ec6edab856d245e9bd69a82b62c67f4"],["tags/特效/index.html","14c724e8daf2726be4e18717f2103dc3"],["tags/网址/index.html","8b75c4b754776ae98d4bde653abb1205"]];
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







