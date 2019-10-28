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

var precacheConfig = [["2019/09/19/2-部署elk7-2-0/index.html","790d5871646d340423458697a7df092b"],["2019/09/19/首次搭建hexo博客系统/index.html","4e51652340c9715f6cf0af6c9c02b454"],["2019/09/20/3-k8s遇到的一些问题统计总结/index.html","2d008491f5d5988e5669ab6dda1d1c24"],["2019/09/24/4-hexo鼠标移动和鼠标点击特效/index.html","b0fd10df809b3265a017d5c18a183fc5"],["2019/09/24/5-hexo添加看板娘/index.html","da941dc5c7dd4cbaaf861a70ef629c4b"],["2019/09/26/6-ceph安装部署/index.html","a35b630cecd6db2ccfbaad34a0b8adc3"],["2019/09/26/7-k8s部署storageclass动态创建pv-nfs-rbd/index.html","d7e4f85f2f9f3797d847f3a135cd75c1"],["2019/09/26/8-mysql5-7二进制部署/index.html","61c2f3ca0f7b81fbda007337a10a3826"],["2019/09/26/9-linux遇到一些问题统计总结/index.html","eee90813a4d8725fb02db11728742f52"],["2019/09/27/10-centos6安装nginx1-16-php7-2/index.html","90196a2360f06393b08ecdb4d9c99618"],["2019/10/10/11-mysql简单记录/index.html","2c6d39b4b97508a62f8bfb0fef4fa55d"],["2019/10/11/12-awk简单记录/index.html","0c1b665d5e5f58ca716d35346248771d"],["2019/10/12/13-云原生博客汇总/index.html","3fa00504eabda09a39584cfa8ddc6cf7"],["2019/10/15/14-mysql目录copy方式迁移/index.html","09bab7e35349465eaad3f4b1cd5ecb00"],["2019/10/16/15-docker简介和使用/index.html","727cffd66df52784f53fc1771935a1a2"],["2019/10/16/16-dockerfile介绍/index.html","0f8db1b86a79757d5bb2b7cc99a5161f"],["2019/10/16/17-markdown一些写法记录/index.html","1fea93fd04a23c8ec0c7d323aabf3662"],["2019/10/17/18-收藏链接/index.html","d417b1b9dc94e00274067b8e69a05918"],["2019/10/17/19-shell中gt和>的区别/index.html","f4ee5c728280dbbc05524e17e9cbcf01"],["2019/10/24/20-k8s搭建mysql5-7-24主从/index.html","439162272dcab0c7f34d8d11b08d98c4"],["2019/10/28/21-流量复制工具gor/index.html","8d13865dbf85328b53103bc99bcfcb1a"],["archives/index.html","58989665937eddb6cbfc8cd94b34291b"],["categories/docker/Dockerfile/index.html","8722430a9ed33fa9bf465da7abb25ec7"],["categories/docker/index.html","2b6e254c3adf6e706c770319665749cd"],["categories/index.html","9830253d59ed04f363b8c93d40576032"],["categories/k8s/elk7/index.html","7ee0c4eca6c5439f9b359fc568687d02"],["categories/k8s/index.html","fb000be45f1813c62882a44a0c5b7b7c"],["categories/k8s/mysql/index.html","686028d98158b423012a1eb9091b329c"],["categories/k8s/storageclass/index.html","855405a65d790f2163d33d14f3dfb40d"],["categories/k8s/问题总结/index.html","1699671af5b16f0b6dd5aaffd06bbc4b"],["categories/linux/awk/index.html","1d7468575d60b2e95eac72a179ccc763"],["categories/linux/index.html","dec5141df4bf232f7788c4160c8fd420"],["categories/linux/shell/index.html","259648db465a94e1c1743b7eb0b65535"],["categories/linux/问题总结/index.html","97918e25a7f9fb4dbbd811c705127318"],["categories/markdown/index.html","0dcbcc3a1d0cbecdd9e3199ca887b629"],["categories/mysql/index.html","ae07bc1a31d9fe1c92edc098f64093ad"],["categories/nginx/index.html","48759d0b72f4f0590e3dc5535f65227f"],["categories/博客/index.html","5d075e3c8df41b4a0358c842761239c0"],["categories/博客/美化/index.html","f205db6a5d7ee49b3a7f7ef3c03128fb"],["categories/存储/ceph/index.html","007d00db2c0f67b7fe69b3f86ffc6fbe"],["categories/存储/index.html","405f18c817c5941e05c88045bf7c306a"],["categories/存储/nfs/index.html","1e38bd0cee596418ffd7a92fbe341d7e"],["categories/技术文档/index.html","11ef97d6d9e437071996d1b29ff53f1a"],["categories/有趣/index.html","76622272b39872247e7305b514ddde4d"],["categories/有趣/二次元/index.html","2e430cb5047805f121440d79e6365ed8"],["categories/流量复制工具/gor/index.html","1faebd3a51113c9f0755c29896e25027"],["categories/流量复制工具/index.html","c2f4b28977b458d46f24f60b8f07ccaf"],["categories/网址/index.html","969e3dfb080b179df920b3da5d34c044"],["categories/网址/大佬博客/index.html","922a171f692512cf268731b70ec34285"],["categories/网址/收藏/index.html","3563613e2b4eb4ed3ea49625933f70f6"],["css/main.css","211d356f0d4a5e3defd70df7d1eb82e6"],["images/16/容器的原理-1.png","1c184a092af6b6829c49ee20e70d132a"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["images/blog6/rancher-pv.png","d2a7e4bbfad5f71e75c9d5459cf5a464"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/docker1.jpg","5c611dd864017adeff648bca93d53f41"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/jixie-title.jpg","3ebd10201e23ecf68aba4524c020db0d"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["images/tcp三次握手图.png","32ddd8df35bd5762604327b25758370e"],["images/tcp四次挥手图.png","684b2b4a0286acadc32247d693dbd961"],["images/test1/test1.jpg","60b725f10c9c85c70d97880dfe8191b3"],["images/title1.jpg","fa2db043867c4c5654471e21ad36e5c0"],["images/title2.jpg","b6e57860ebc3fcdcf150a6a4cf3402ab"],["images/title3.jpg","f0b1554cfa4dd1193719dcfeb9e4de28"],["images/title4.jpg","6eb7bcbb846d1123e830488d75028df7"],["index.html","5d9a4be06f6aa01d0c635338d6ca6c89"],["js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["js/src/instantclick.js","865d92a4a07409b7fed739e6a108e9c4"],["js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["js/src/live2d.js","3359a94d733737dbdd290dd41f9cef0b"],["js/src/love.js","7bcfdb57debd43483174cf9e15ab37cc"],["js/src/love2.js","2b51ddac5207cba4153da31e9132414c"],["js/src/motion.js","706d085e6cfec6f3e92dedc590d68d68"],["js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["js/src/schemes/pisces.js","1bd23ed75238ebf11afe2aa6b1c3a25b"],["js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["js/src/utils.js","f06ffce70453ad3a4d9611fdde5ca6c3"],["lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["live2d-widget/README.html","9941b5173b7915eb6158e62f02cd9ea3"],["live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["live2d-widget/autoload.js","fc45c81e48138bde62e7e742cbbdabb9"],["live2d-widget/demo/demo1.html","82a14d37dbd83931644a4ad6ea1f9eb2"],["live2d-widget/demo/demo2.html","6babb045ef6905badc0dbc5e0d98cede"],["live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["live2d-widget/waifu.css","c4dae5924f2fb0b5ea6ef26aaab80db9"],["page/2/index.html","8a8bd4f25bfbb1a2f8314bdda8976ba5"],["page/3/index.html","28a04835633c431c5865d32b7893c5e2"],["tags/awk/index.html","9f3789854b15bbc53127abce03a66503"],["tags/ceph/index.html","d87d562ce2809d2b6f9d5ed7cf73f1be"],["tags/cephfs/index.html","84f03fdc417a5a3583383fd121584faa"],["tags/cloud-native/index.html","19d5fb4409a272d07e5d4d644183f7a2"],["tags/docker/index.html","474c34b15dcfa18f808f786f4dd6bf30"],["tags/elk/index.html","032ebc623723aec6f8703a56367b1d85"],["tags/elk7/index.html","09dc5276e3e77bc6b963a48c07fffd4e"],["tags/gor/index.html","660b6d8fdd914f1a9af780d88d8717c4"],["tags/hexo6/index.html","14c9139932e69b989d197f0532a80ce3"],["tags/hexo美化/index.html","03ee6437ede0de3c521ea72f00cb99a8"],["tags/http流量复制工具/index.html","9308372e24351b66b2aeaa0f9543a3d2"],["tags/index.html","eaf92eead8246bea47a35a24947c2632"],["tags/k8s/index.html","bb0f14550d464944c1db66276ccaab94"],["tags/k8s存储/index.html","fa4864a261426774adbe9417052e4303"],["tags/linux/index.html","5ad21f75f19bd16cbc91975f238f038a"],["tags/markdown/index.html","d2770394060b9adc10cdc0bc8f16ced0"],["tags/mysql/index.html","12e465194789c65f1c89bd56bf64e53e"],["tags/mysql5-7/index.html","6138fb1ff13ab0b7314a59a6e806d9e8"],["tags/nfs/index.html","7f70873a11b3663203056401e358a715"],["tags/nginx/index.html","b1c1aa2dd94b94b44fc56da9f310faeb"],["tags/php7/index.html","f1b5ad7b9729b85f7a93c98fcfba2183"],["tags/shell/index.html","b5f4823526daef691c2db379645cdcf5"],["tags/storageclass/index.html","09b6084cab12241595f3a300f6bde402"],["tags/云原生/index.html","38e55d7fca31fab3e0c944c1e2371ffd"],["tags/大佬博客/index.html","422cb7016fbf14f873b80af5420f21b1"],["tags/收藏/index.html","46ef843ab69e55e1670ac21901e40e32"],["tags/特效/index.html","bed80cbda6f893a4616a91ae1ea0cf71"],["tags/网址/index.html","69ab990817f4467fac246fde9cd7ac57"]];
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







