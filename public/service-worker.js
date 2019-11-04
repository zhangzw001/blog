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

var precacheConfig = [["2019/09/19/2-部署elk7-2-0/index.html","9357154b70348398918f3516f33fe6ad"],["2019/09/19/首次搭建hexo博客系统/index.html","ce00cad9fa353e5375f49cfc1a956968"],["2019/09/20/3-k8s遇到的一些问题统计总结/index.html","062ac087da80a5a033ddff07278d748f"],["2019/09/24/4-hexo鼠标移动和鼠标点击特效/index.html","1dea8b73da84cf7728e9d11c22461dfc"],["2019/09/24/5-hexo添加看板娘/index.html","b3d91140c59be455b27814ddafee6499"],["2019/09/26/6-ceph安装部署/index.html","fe528247cbac27eb5cfbe4f2effc727a"],["2019/09/26/7-k8s部署storageclass动态创建pv-nfs-rbd/index.html","41e63e5f13351a748b1d0c3f3cfdd49b"],["2019/09/26/8-mysql5-7二进制部署/index.html","4b9c564039f84b3db76abda592f07a3f"],["2019/09/26/9-linux遇到一些问题统计总结/index.html","f6fd0c33d72e51cd926ea3346007c126"],["2019/09/27/10-centos6安装nginx1-16-php7-2/index.html","7bbee6fcc9bf7a8d4ab04828aaede87a"],["2019/10/10/11-mysql简单记录/index.html","87b0686f98ea21f74a74e6aef5b8de13"],["2019/10/11/12-awk简单记录/index.html","12050cbef5e6f0af8fadba2cedfec08c"],["2019/10/12/13-云原生博客汇总/index.html","4be9f209ce60657aa76334ed396890ae"],["2019/10/15/14-mysql目录copy方式迁移/index.html","4eab850235879a3108a79dc99ac693a1"],["2019/10/16/15-docker简介和使用/index.html","8063c3b13880fd69dbb5b2443ca3f7aa"],["2019/10/16/16-dockerfile介绍/index.html","a19ea41dd89eeb321316a73a6476f961"],["2019/10/16/17-markdown一些写法记录/index.html","2f286a47eed6f62699033751d383cdc8"],["2019/10/17/18-收藏链接/index.html","6720e5bc9f67628701ba4eaf7a8b4a12"],["2019/10/17/19-shell中gt和>的区别/index.html","9adb1469e8bada6ee1abd74d23a4bdeb"],["2019/10/24/20-k8s搭建mysql5-7-24主从/index.html","abcc263026ea8224421dcbc5f065fab7"],["2019/10/28/21-流量复制工具gor/index.html","cb31a898d21e87e2dd247f0317a40d82"],["2019/10/28/22-es集群磁盘扩容/index.html","d0641ccc0013a7f76c49c30fc0a47809"],["2019/10/29/23-mysql5-5主与mysql5-7从部署配置/index.html","23dcb3b8aa5657ea9a5c30f58de8c49c"],["2019/10/30/24-filebeat7收集mysql慢日志到es/index.html","bde794f723a32042a1d69a5a7eb1faa0"],["2019/11/01/25-一些脚本汇总/index.html","d42fb816f600dd347b41e42315659e26"],["archives/index.html","49394330f6be9b63919a058d648b9582"],["categories/docker/Dockerfile/index.html","9c30f3c656aa9b92a0a7d7a3753fb6b0"],["categories/docker/index.html","0f469501aacd64164c5d55a480193911"],["categories/elk/elasticsearch5/index.html","49afedcbe9d0148da904cab7c81843c9"],["categories/elk/elasticsearch7/index.html","2a76e17ed8f8b55cb70532f8067fa658"],["categories/elk/index.html","1247163f483a31b765188ca2ec9ce08e"],["categories/elk7/filebeat7/index.html","3c2b68cf770b0db06c406dde3e2e1fc8"],["categories/elk7/index.html","2c6a4d8e2ef05823278b451328264d8d"],["categories/index.html","3dfbb55a6ac43458461a0d90717c45ed"],["categories/k8s/elk7/index.html","22cf69877aaa0c3aa2aca9d895151f67"],["categories/k8s/index.html","eb6f8004f2d00ccca0a963114eb77cdc"],["categories/k8s/mysql/index.html","fd6203a75362ef2e316c3a0d8573bd69"],["categories/k8s/storageclass/index.html","8e6a2ef6bd868f35da208d3e84817c7a"],["categories/k8s/问题总结/index.html","9d7a2d40457191d1a9edbec35bed6a82"],["categories/linux/awk/index.html","cdd68dc557aebc7553a74f3394bc9071"],["categories/linux/index.html","19f4479a870c7ec1fc0afd6c4dc0d4ea"],["categories/linux/shell/index.html","fc8d4b26440f0ee2ed4017effaef3e50"],["categories/linux/问题总结/index.html","b020ba002cbf37336ca3f7bbb67f315b"],["categories/markdown/index.html","ad25624624c3f384e81f98f84617b535"],["categories/mysql/index.html","17e2f58732f034a4e61e98b465c96ae7"],["categories/mysql/主从/index.html","f3de51683c69581a02da9f31fe564b73"],["categories/nginx/index.html","d9bccf21b641e65bc2c041f142f56fe8"],["categories/博客/index.html","2bc7ade35be87acb0d4b61f45edd508b"],["categories/博客/美化/index.html","943d90c378edee3d920a00d299434894"],["categories/存储/ceph/index.html","d039dc3c588f7d7c16998dfd173296c7"],["categories/存储/index.html","a88f21dcb3c7a1e388b2e8c7916a8d83"],["categories/存储/nfs/index.html","1f0a9f81ae34351cf15d70e0136bf2fa"],["categories/技术文档/index.html","389a365a52b3e172f601e0b9b921824b"],["categories/有趣/index.html","df67f920718cab81558d8ff04f5deb1c"],["categories/有趣/二次元/index.html","e3bd8d8efaf31a189bdc47775aff3c92"],["categories/流量复制工具/gor/index.html","738dbeee086e505321c73994f3e7d383"],["categories/流量复制工具/index.html","fd6e786a643e2cc656acc597c37bf0f3"],["categories/网址/index.html","5d68b989dc16f94ca7146e669b1da18b"],["categories/网址/大佬博客/index.html","3ed6c99fcbe9e538eee33a998a1a9ef0"],["categories/网址/收藏/index.html","1564f62a75ab0eba968d96ae956adb6a"],["css/main.css","d9fd4fe8caa1286145035d0cdde7972a"],["images/16/容器的原理-1.png","1c184a092af6b6829c49ee20e70d132a"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["images/blog6/rancher-pv.png","d2a7e4bbfad5f71e75c9d5459cf5a464"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/docker1.jpg","5c611dd864017adeff648bca93d53f41"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/jixie-title.jpg","3ebd10201e23ecf68aba4524c020db0d"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["images/tcp三次握手图.png","32ddd8df35bd5762604327b25758370e"],["images/tcp四次挥手图.png","684b2b4a0286acadc32247d693dbd961"],["images/test1/test1.jpg","60b725f10c9c85c70d97880dfe8191b3"],["images/title1.jpg","fa2db043867c4c5654471e21ad36e5c0"],["images/title2.jpg","b6e57860ebc3fcdcf150a6a4cf3402ab"],["images/title3.jpg","f0b1554cfa4dd1193719dcfeb9e4de28"],["images/title4.jpg","6eb7bcbb846d1123e830488d75028df7"],["index.html","da541ce9e69a4a4fbd92fbc53d3e39eb"],["js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["js/src/instantclick.js","865d92a4a07409b7fed739e6a108e9c4"],["js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["js/src/live2d.js","3359a94d733737dbdd290dd41f9cef0b"],["js/src/love.js","7bcfdb57debd43483174cf9e15ab37cc"],["js/src/love2.js","2b51ddac5207cba4153da31e9132414c"],["js/src/motion.js","706d085e6cfec6f3e92dedc590d68d68"],["js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["js/src/schemes/pisces.js","1bd23ed75238ebf11afe2aa6b1c3a25b"],["js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["js/src/utils.js","f06ffce70453ad3a4d9611fdde5ca6c3"],["lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["live2d-widget/README.html","9941b5173b7915eb6158e62f02cd9ea3"],["live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["live2d-widget/autoload.js","fc45c81e48138bde62e7e742cbbdabb9"],["live2d-widget/demo/demo1.html","82a14d37dbd83931644a4ad6ea1f9eb2"],["live2d-widget/demo/demo2.html","6babb045ef6905badc0dbc5e0d98cede"],["live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["live2d-widget/waifu.css","c4dae5924f2fb0b5ea6ef26aaab80db9"],["page/2/index.html","a54c547af9533c256ba56e948caa3fd4"],["page/3/index.html","1f390fe0aa3d694318f0f8f766ba5e49"],["tags/awk/index.html","ef590f783f0557cdd47cc44fbbda0c7f"],["tags/ceph/index.html","1b87f9dc7aab942cff719ce0452d29ea"],["tags/cephfs/index.html","7ae3b2c5b45542ae2a31be41d84db412"],["tags/cloud-native/index.html","9afdf496fe92b562f70ce74ddaf1a21d"],["tags/docker/index.html","d67565d8109feaf5423611808a070157"],["tags/elasticsearch5/index.html","f488a78d3c80309eadc60f40cd0d91ed"],["tags/elasticsearch7/index.html","e45b85dae7c899d30cf929c830a94ae7"],["tags/elk/index.html","d0bd55a90cfd9f491c404c8ca8774c05"],["tags/elk7/index.html","9410094beb763932b35af3c285a5fd4d"],["tags/filebeat7/index.html","b4270dadbb5cd0006013a9859b6b6de0"],["tags/gor/index.html","0b53706e93adc820e26470e4e8ccfa8b"],["tags/hexo6/index.html","0b7591b2e2398dca2dd3d3ab4b71be07"],["tags/hexo美化/index.html","2c9ea887313a5f0ea5e86ae9dbe875ce"],["tags/http流量复制工具/index.html","f3b64d0335e1773d3a59e9d0cd6b2b14"],["tags/index.html","9b16f0deb65e4d6768f7fa5e812ff514"],["tags/k8s/index.html","ace712a00faa4dee2a7c81f35425c53a"],["tags/k8s存储/index.html","05eeaa579451bacabfb44da8bb0343d6"],["tags/linux/index.html","4093f4475f2afffa57ec966aabe8a03f"],["tags/markdown/index.html","2c1c43f50f6163ea5c23ed2e22d36a9f"],["tags/mysql/index.html","c26f95a535126af2fb19d5f6c064d901"],["tags/mysql5-7/index.html","97cbd7700570c7f69b1f784497b4f769"],["tags/nfs/index.html","d327679e1ac637b63ff1be1a5ecd0749"],["tags/nginx/index.html","9cdf5d4be4b420984976102e08defd13"],["tags/php7/index.html","68fb37975fd9fe7f3482bd38614fd452"],["tags/shell/index.html","fd640d6242309ae62459c89180fce1e9"],["tags/storageclass/index.html","d7a3e5f7581d29b2496e3413c21132ce"],["tags/云原生/index.html","8947da5aedd29de1f0423d622b2866af"],["tags/大佬博客/index.html","838ac1159c893dca0a3fe3372327495f"],["tags/收藏/index.html","145ed6d762d8835e2d91617d4d4d446b"],["tags/特效/index.html","1c0e875a184bd86316388dbb29edf4cc"],["tags/网址/index.html","81726bdfc445f7d6681edba99b8a5681"]];
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







