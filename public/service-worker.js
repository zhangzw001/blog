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

var precacheConfig = [["2019/09/19/2-部署elk7-2-0/index.html","57b60ae257f8d967ff666301612f95cc"],["2019/09/19/首次搭建hexo博客系统/index.html","ac28d0972192f82feb973ff5b6e0cddb"],["2019/09/20/3-k8s遇到的一些问题统计总结/index.html","93b76b6e170e150de29eab62a5d0e7b6"],["2019/09/24/4-hexo鼠标移动和鼠标点击特效/index.html","4ad94674affdba88f6b16832f1599fa3"],["2019/09/24/5-hexo添加看板娘/index.html","5b5d781f544dd4cf2685093c9bf24d12"],["2019/09/26/6-ceph安装部署/index.html","360f97ecc116c4a6d9c30712e4140aee"],["2019/09/26/7-k8s部署storageclass动态创建pv-nfs-rbd/index.html","0d7aa9a4fed3fac43fa82c84dab023e4"],["2019/09/26/8-mysql5-7二进制部署/index.html","1bac034bee3ec7dd0a1a70be535977f8"],["2019/09/26/9-linux遇到一些问题统计总结/index.html","2c17bd5216c2a895cefb6d2b3de71736"],["2019/09/27/10-centos6安装nginx1-16-php7-2/index.html","60ead24f3fd8f5d08e5c339c6ab4a119"],["2019/10/10/11-mysql简单记录/index.html","26625ba00c36a95a36cfcca2c6c9060b"],["2019/10/11/12-awk简单记录/index.html","81733fe50734cf72a7ac9060c1a8d04e"],["2019/10/12/13-云原生博客汇总/index.html","67b317d9f3d89c059a94b05c68de6572"],["2019/10/15/14-mysql目录copy方式迁移/index.html","b11b261fc75a09de1c1fd25c60c65104"],["2019/10/16/15-docker简介和使用/index.html","c849733e4334b6535c9112210f494369"],["2019/10/16/16-dockerfile介绍/index.html","29e3c2db856e7d4e7db57d9b097628c4"],["2019/10/16/17-markdown一些写法记录/index.html","09ede40d0e65d8f1377471b0e8c69435"],["2019/10/17/18-收藏链接/index.html","21682c4265df2fb3460f7e638c0aabd6"],["2019/10/17/19-shell中gt和-的区别/index.html","7f3c90a70bb9fb7fb188b56286b6bee3"],["2019/10/17/19-shell中gt和>的区别/index.html","a04cab947d250c1ddbcb68336f58e388"],["2019/10/24/20-k8s搭建mysql5-7-24主从/index.html","b5de3c7a558ba887b9576f55e3d622ec"],["2019/10/28/21-流量复制工具gor/index.html","220cf0c54889c208a67ae8ae29347289"],["2019/10/28/22-es集群磁盘扩容/index.html","778fc804a739768d181e69c61fe60de7"],["2019/10/29/23-mysql5-5主与mysql5-7从部署配置/index.html","6c97d3a6bfb736b80857b904ae4b6513"],["2019/10/30/24-filebeat7收集mysql慢日志到es/index.html","784633c1f2443d4f8931edee2b34cb87"],["2019/11/01/25-一些脚本汇总/index.html","9791f2d336561e795ff88b54dad65d27"],["2019/11/08/26-logstash配置/index.html","55b6dacb5e9e950289ccd8a96a892c44"],["archives/index.html","0c095b0621b6019c1ff51cbf7ff87c39"],["categories/docker/Dockerfile/index.html","d8b8e8a003dff50dfc999663a51af6db"],["categories/docker/index.html","9b2dd392c0c711189ee6c41ea0734ae1"],["categories/elk/elasticsearch5/index.html","670d6a775a2b7ffc120c19367940ae3d"],["categories/elk/elasticsearch7/index.html","8c8c63c6dae611fcf7eaf10b2ddcf477"],["categories/elk/index.html","18e8c577b541258b89050b23000d59ed"],["categories/elk/logstash/index.html","56caf8ee8de77f12cb1810077053d307"],["categories/elk7/filebeat7/index.html","d9e4bceb231d8e2dd5d92b5a5ef098e4"],["categories/elk7/index.html","cbfda1471b3cfcc644152ce63df6fd30"],["categories/index.html","a67cda8b98dd33e04761bcb7d502b060"],["categories/k8s/elk7/index.html","632a698946fa69d2df2936ec918ff835"],["categories/k8s/index.html","3ddc4ed8e78cdf0d1b7719e0bec66312"],["categories/k8s/mysql/index.html","b444dfff6a43a5250eb2bac5e29944d5"],["categories/k8s/storageclass/index.html","2acd32994a0419fff41c4a9625a4ae18"],["categories/k8s/问题总结/index.html","2c38fda93a57ffdc429ba0309ee656f3"],["categories/linux/awk/index.html","77ae432596b03f3a67170308c1ca0267"],["categories/linux/index.html","a64f5f785e40617395ce3f02a9212bdd"],["categories/linux/shell/index.html","0dcafcde1975bea58e04905e87c611c8"],["categories/linux/问题总结/index.html","64b0a29c92a668fe252024a817361f7f"],["categories/markdown/index.html","310a9300335aa9478cd47d92b08e8878"],["categories/mysql/index.html","35433922d24aa5ca917c1068c66e5241"],["categories/mysql/主从/index.html","2e4b5e4be67b575eb59313234b9c6ac8"],["categories/nginx/index.html","4ce42e236829303b0cd9028d87794770"],["categories/博客/index.html","5a1ace889f3d6a65a15f99c0087d6340"],["categories/博客/美化/index.html","eab9f6b15c10c337b92354a09abee443"],["categories/存储/ceph/index.html","727a7ced5872eff1b5c92b11760f45fe"],["categories/存储/index.html","41551bba3f1f2f5a72e18b99007bb69c"],["categories/存储/nfs/index.html","a7b22a11c6d467d171d2e9748a78feba"],["categories/技术文档/index.html","b1d0ae4447a929c91f362b6412569572"],["categories/有趣/index.html","0d1794de8a76825571d45a78487fb323"],["categories/有趣/二次元/index.html","a916d52d1c7ee58920ad2937311310a8"],["categories/流量复制工具/gor/index.html","0ecc7603ddb6054c8a4ad1ab82deedae"],["categories/流量复制工具/index.html","b481055795a7a879420677f53e5abc06"],["categories/网址/index.html","e46ef2b2d09db441f26ec73609dcde3f"],["categories/网址/大佬博客/index.html","5ea91a1dbe3f7f0af0d072a822cc1bda"],["categories/网址/收藏/index.html","e8b0db2a29a353cbf278038cb90aedb5"],["css/main.css","9dffc4bcbe61eea60b9bfe7111c5c8fd"],["images/16/容器的原理-1.png","1c184a092af6b6829c49ee20e70d132a"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["images/blog6/rancher-pv.png","d2a7e4bbfad5f71e75c9d5459cf5a464"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/docker1.jpg","5c611dd864017adeff648bca93d53f41"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/jixie-title.jpg","3ebd10201e23ecf68aba4524c020db0d"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["images/tcp三次握手图.png","32ddd8df35bd5762604327b25758370e"],["images/tcp四次挥手图.png","684b2b4a0286acadc32247d693dbd961"],["images/test1/test1.jpg","60b725f10c9c85c70d97880dfe8191b3"],["images/title1.jpg","fa2db043867c4c5654471e21ad36e5c0"],["images/title2.jpg","b6e57860ebc3fcdcf150a6a4cf3402ab"],["images/title3.jpg","f0b1554cfa4dd1193719dcfeb9e4de28"],["images/title4.jpg","6eb7bcbb846d1123e830488d75028df7"],["index.html","95a6846f98447d0833614b43ed2564a8"],["js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["js/src/instantclick.js","865d92a4a07409b7fed739e6a108e9c4"],["js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["js/src/live2d.js","3359a94d733737dbdd290dd41f9cef0b"],["js/src/love.js","7bcfdb57debd43483174cf9e15ab37cc"],["js/src/love2.js","2b51ddac5207cba4153da31e9132414c"],["js/src/motion.js","706d085e6cfec6f3e92dedc590d68d68"],["js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["js/src/schemes/pisces.js","1bd23ed75238ebf11afe2aa6b1c3a25b"],["js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["js/src/utils.js","f06ffce70453ad3a4d9611fdde5ca6c3"],["lib/canvas-nest/canvas-nest.min.js","2361106788cc4ea719ed76f52b413e46"],["lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["live2d-widget/README.html","9941b5173b7915eb6158e62f02cd9ea3"],["live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["live2d-widget/autoload.js","fc45c81e48138bde62e7e742cbbdabb9"],["live2d-widget/demo/demo1.html","82a14d37dbd83931644a4ad6ea1f9eb2"],["live2d-widget/demo/demo2.html","6babb045ef6905badc0dbc5e0d98cede"],["live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["live2d-widget/waifu.css","c4dae5924f2fb0b5ea6ef26aaab80db9"],["page/2/index.html","e8224ac9924f7c39fc46094406f3ffa8"],["page/3/index.html","1575ae28bd66e40fb3e018a9713475b7"],["tags/awk/index.html","9e5eb4c9f4d41f65f87a6976cb82847e"],["tags/ceph/index.html","71fb003973d9fe1ddb5c2a4d0999232b"],["tags/cephfs/index.html","dcbce130c6c369e0a29adebec66cef7a"],["tags/cloud-native/index.html","cbc3c2b8001d888fce0b7709ee715a15"],["tags/docker/index.html","64d4cd5aa1d414385c7945b3702f2bee"],["tags/elasticsearch5/index.html","87900cd6eb0bf647786cde91223b6dce"],["tags/elasticsearch7/index.html","e4bfebc78b2c572255e0364344e81d2d"],["tags/elk/index.html","f81a0796558511353d0717e241c91500"],["tags/elk7/index.html","f67dc1eb29fea3a5ba8a6945a77f7f33"],["tags/filebeat7/index.html","97b0d5dd276d4cae7a22dfb6c2856106"],["tags/gor/index.html","b8143b3cc3c3fd656a038e2e0c58ebeb"],["tags/hexo6/index.html","27a03605ab93ccbb93ffb8a57d11a733"],["tags/hexo美化/index.html","bda59c0841b01f342311f4409ac4377e"],["tags/http流量复制工具/index.html","4b3913c7d13ae3f68452eb0071c6fa3f"],["tags/index.html","dda5b6a7c84b8af868df0276cca07c32"],["tags/k8s/index.html","fb7d20d027d9be9af061f89f3513eaf3"],["tags/k8s存储/index.html","3e8e341ad5d72781a7935bb80c0c05ad"],["tags/linux/index.html","e9381e67f4303beaee44a4b345b26dc1"],["tags/logstash/index.html","abe90d049f31d5f86b1f972ebf48f430"],["tags/markdown/index.html","c9c90d595059bc6baedca8cd959d6d0c"],["tags/mysql/index.html","d89b96052dde56530198a3cfffab80bf"],["tags/mysql5-7/index.html","c5c0b0499ff5548c0bf10c638fecb24c"],["tags/nfs/index.html","75bab82cc2549003e2bf0290b1b7c144"],["tags/nginx/index.html","aa0c17f7eabe75bf2a8cbbb9a86c8ed4"],["tags/php7/index.html","c20c487832a82054739a7f2f5a9306ab"],["tags/shell/index.html","6bdd807b4e74b5bdbbda4af1461c73ea"],["tags/storageclass/index.html","f8c223a66c837c5e938bbf592d75ad3e"],["tags/云原生/index.html","4d4fa864cc9b15104a44231a38f1d042"],["tags/大佬博客/index.html","e09d063ba30d2c27a0330c1d04639632"],["tags/收藏/index.html","9546c14d6fbe95240f7d72ada0090334"],["tags/特效/index.html","dc86d39aaaace31170cb4ea945402a9b"],["tags/网址/index.html","90c1490479b05a775849d2504a6b15ce"]];
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







