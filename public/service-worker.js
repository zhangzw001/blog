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

var precacheConfig = [["2019/09/19/2-部署elk7-2-0/index.html","bb4fff9b4ca849576f4b446ce1fa083b"],["2019/09/19/首次搭建hexo博客系统/index.html","1a29013ea5fc9c622989d95400bd2b29"],["2019/09/20/3-k8s遇到的一些问题统计总结/index.html","3532dfb0634e1bba5780ee75d6cdb84a"],["2019/09/24/4-hexo鼠标移动和鼠标点击特效/index.html","97e0f3e838eea053536711f95fb89a63"],["2019/09/24/5-hexo添加看板娘/index.html","4ccfa0df9115ab1c02db420c463e0e5e"],["2019/09/26/6-ceph安装部署/index.html","487212a4aadb958cf81ef130e376f656"],["2019/09/26/7-k8s部署storageclass动态创建pv-nfs-rbd/index.html","a28780c6cb233392381c84992619bab7"],["2019/09/26/8-mysql5-7二进制部署/index.html","161df535dca35e5570e97b2cddd44073"],["2019/09/26/9-linux遇到一些问题统计总结/index.html","001c5d9a0ff5dcb25c1a8e8e6ea91738"],["2019/09/27/10-centos6安装nginx1-16-php7-2/index.html","a706e6c951733cf91c9f0fb7d9e97741"],["2019/10/10/11-mysql简单记录/index.html","6ede6829b34cf357927c06dcfed4ae87"],["2019/10/11/12-awk简单记录/index.html","9a7b20a3f84fac745007943a82bf75eb"],["2019/10/12/13-云原生博客汇总/index.html","769db3b37fdc69ddf27dd11160db4a7b"],["2019/10/15/14-mysql目录copy方式迁移/index.html","9b8243a58c349446f7c017a8db478e33"],["2019/10/16/15-docker简介和使用/index.html","3453f00e0f831b7469df1bcaf3a93901"],["2019/10/16/16-dockerfile介绍/index.html","20dfb06bbc5ef7ea89c0f5c12e839530"],["2019/10/16/17-markdown一些写法记录/index.html","0dd5e06579a2c933d7fddcaee2526f4d"],["2019/10/17/18-收藏链接/index.html","11428896d6b33da2c9213cad84a7608f"],["2019/10/17/19-shell中gt和-的区别/index.html","ea9eafa397e6026a8e75d9509e97885f"],["2019/10/17/19-shell中gt和>的区别/index.html","d11be431f7a2a0c0d695f30b77823e04"],["2019/10/24/20-k8s搭建mysql5-7-24主从/index.html","bac263a93c91fd276d5196d09aeb6dc8"],["2019/10/28/21-流量复制工具gor/index.html","fb5db0f05d95c03d8c0641b894c52c69"],["2019/10/28/22-es集群磁盘扩容/index.html","3888084d93eefdb88755dd27628ecaff"],["2019/10/29/23-mysql5-5主与mysql5-7从部署配置/index.html","6b68034a85cb5f3b1e116b7a4d9c68d6"],["2019/10/30/24-filebeat7收集mysql慢日志到es/index.html","5652f39a5834f6406f41afa10296968d"],["2019/11/01/25-一些脚本汇总/index.html","693c12fa7627802284c9ebd3ced59b93"],["2019/11/08/26-logstash配置/index.html","11c7af6a3f7393deb435d655019604b9"],["archives/index.html","1dca15a07fca88de118bcc5755683017"],["categories/docker/Dockerfile/index.html","6d409588f556c1f5fb5b0f03be840f07"],["categories/docker/index.html","da6dfcca9fa0478df5c7857ec9114fc4"],["categories/elk/elasticsearch5/index.html","18541672920a213f883a50e88087e8f2"],["categories/elk/elasticsearch7/index.html","62e6afd56d82e18f712b9901ba1da4fc"],["categories/elk/index.html","be9365d1272e373d7becfd56f8a9333a"],["categories/elk/logstash/index.html","079aee9236c101b44e7a5174444623ed"],["categories/elk7/filebeat7/index.html","a3cda915097c4a2f53757bf819683653"],["categories/elk7/index.html","be2e63a25c2a83a6aa12b2777ca468ad"],["categories/index.html","58e067dfdced4f005d078ee3c7fa623e"],["categories/k8s/elk7/index.html","37c62334bf8a247d0889bd4c0e6b050e"],["categories/k8s/index.html","a111027aa24d11ef5b0ed9a05d323c5d"],["categories/k8s/mysql/index.html","fbdf47cca298163a271f28f3fa921f5a"],["categories/k8s/storageclass/index.html","b87aed428f0d690aa2ff3c1d994c9db3"],["categories/k8s/问题总结/index.html","37bb54e24fcf19a500fe9b92d0acec1d"],["categories/linux/awk/index.html","8c3c74f849ba63c0a15232bbc3403382"],["categories/linux/index.html","88f8fb9e0317b7ced3f9bb357f56beb2"],["categories/linux/shell/index.html","dc858ecf18b37752e509ecce2d9be1eb"],["categories/linux/问题总结/index.html","91abecf48ec3f721090ac5db2d21feb9"],["categories/markdown/index.html","58658dd81c8aef989bb991bd4ea251de"],["categories/mysql/index.html","b155976eda802666158d759a8c3e7b91"],["categories/mysql/主从/index.html","97822a595be5075648728b4ec342952f"],["categories/nginx/index.html","7721fe1804baa032966b42af1142ff17"],["categories/博客/index.html","ac050c3f56d9aba271276f49d0246c83"],["categories/博客/美化/index.html","1a6b7f3c4cc8518a6562b1488f6b23d8"],["categories/存储/ceph/index.html","c3c45279c61b5d0eae4972fc42751d63"],["categories/存储/index.html","00e063242a9f73f3f14b49d0e7248eb8"],["categories/存储/nfs/index.html","3485d862313b8c6ded9579f4b8a43cea"],["categories/技术文档/index.html","c88440709e9bb4a54fb16e7572e9290b"],["categories/有趣/index.html","6c75205e930c0646270aec2fe79e25be"],["categories/有趣/二次元/index.html","3ff06e57e8654fb658ba953469013c13"],["categories/流量复制工具/gor/index.html","0933773dc0a7f5bf99b74011e0a7cdf9"],["categories/流量复制工具/index.html","fcbe8123c9a0b13ecf370cf78d809411"],["categories/网址/index.html","cb85beb9676f0a7deb2fbe45a3124651"],["categories/网址/大佬博客/index.html","c29be8af22cc26f2d3e2d9953f167f29"],["categories/网址/收藏/index.html","f438890eda166969ed3dab953573b3c3"],["css/main.css","e15e5ce79dfa08e63c90d493d68a5560"],["images/16/容器的原理-1.png","1c184a092af6b6829c49ee20e70d132a"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["images/blog6/rancher-pv.png","d2a7e4bbfad5f71e75c9d5459cf5a464"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/docker1.jpg","5c611dd864017adeff648bca93d53f41"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/jixie-title.jpg","3ebd10201e23ecf68aba4524c020db0d"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["images/tcp三次握手图.png","32ddd8df35bd5762604327b25758370e"],["images/tcp四次挥手图.png","684b2b4a0286acadc32247d693dbd961"],["images/test1/test1.jpg","60b725f10c9c85c70d97880dfe8191b3"],["images/title1.jpg","fa2db043867c4c5654471e21ad36e5c0"],["images/title2.jpg","b6e57860ebc3fcdcf150a6a4cf3402ab"],["images/title3.jpg","f0b1554cfa4dd1193719dcfeb9e4de28"],["images/title4.jpg","6eb7bcbb846d1123e830488d75028df7"],["index.html","1503a458b970fa93fe6819597ed8fcfe"],["js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["js/src/instantclick.js","865d92a4a07409b7fed739e6a108e9c4"],["js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["js/src/live2d.js","3359a94d733737dbdd290dd41f9cef0b"],["js/src/love.js","7bcfdb57debd43483174cf9e15ab37cc"],["js/src/love2.js","2b51ddac5207cba4153da31e9132414c"],["js/src/motion.js","706d085e6cfec6f3e92dedc590d68d68"],["js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["js/src/schemes/pisces.js","1bd23ed75238ebf11afe2aa6b1c3a25b"],["js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["js/src/utils.js","f06ffce70453ad3a4d9611fdde5ca6c3"],["lib/canvas-nest/canvas-nest.min.js","2361106788cc4ea719ed76f52b413e46"],["lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["live2d-widget/README.html","9941b5173b7915eb6158e62f02cd9ea3"],["live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["live2d-widget/autoload.js","fc45c81e48138bde62e7e742cbbdabb9"],["live2d-widget/demo/demo1.html","82a14d37dbd83931644a4ad6ea1f9eb2"],["live2d-widget/demo/demo2.html","6babb045ef6905badc0dbc5e0d98cede"],["live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["live2d-widget/waifu.css","c4dae5924f2fb0b5ea6ef26aaab80db9"],["page/2/index.html","cc329f41a8efe0d6f6046bb7f3d50270"],["page/3/index.html","69d7df8b617ce8451c61410af6bbc4bb"],["tags/awk/index.html","79cff9450c6b223bd4378a2bfb3e5a69"],["tags/ceph/index.html","b316a78c57d9347002daa8ba589827c3"],["tags/cephfs/index.html","79c4bca618468b5f70a45da6e0cd8055"],["tags/cloud-native/index.html","37cb8a1adf2ae8e2ba24b7403e13414f"],["tags/docker/index.html","d34d45cf77f911806c95c9f37fd77651"],["tags/elasticsearch5/index.html","5e4c2ee30a66b01b2af5fc0b5e74116e"],["tags/elasticsearch7/index.html","57be661939b2b0e032290fb05405dc52"],["tags/elk/index.html","5aad404bed097aa2099df76447180522"],["tags/elk7/index.html","d4f9cdc957e74e72aafd44f07e33418e"],["tags/filebeat7/index.html","21286db8e9f4a58de43a76111a3bec06"],["tags/gor/index.html","50002be3fcef859f44f2d0e3441934de"],["tags/hexo6/index.html","9fbd086bfe41765de9a5355abc194aa4"],["tags/hexo美化/index.html","14852cca2696986b8d0e3c478130e51f"],["tags/http流量复制工具/index.html","36b6d765b9c15cf47a32b560be98c862"],["tags/index.html","d539058225f61d08569a276c1456b9af"],["tags/k8s/index.html","91e14ab563b8e7af581fb3143791f22f"],["tags/k8s存储/index.html","5d3436da2ad535c7d51416415e564099"],["tags/linux/index.html","ed3941a12720bf7095dd2ddb96514d14"],["tags/logstash/index.html","9b261d3e6fe358ce73cc54f15a758beb"],["tags/markdown/index.html","c9d14b44aa06cd4686840e998b5dba98"],["tags/mysql/index.html","2e2a1ff9e04047c0e3ec8fa3634d5b14"],["tags/mysql5-7/index.html","966cefc6edc01695706e3f0f5f7edbf9"],["tags/nfs/index.html","7ddb2ad084f46aaec3ec49ed718e4fdd"],["tags/nginx/index.html","ced3ffca49852bb729607c52b40c7d9e"],["tags/php7/index.html","03a2f4ea55c781fc1ce0c4fae5d83dbb"],["tags/shell/index.html","27753fd82f39725c0cc03312e165e485"],["tags/storageclass/index.html","8ff0223ada6eb0a10ea013ca5707f4da"],["tags/云原生/index.html","e43be2aac661743a5746502e2076bc9d"],["tags/大佬博客/index.html","343ed7cfe8a2ddc67ba7871a7c6974f8"],["tags/收藏/index.html","6e88253328f192a3f6f15a855dec2009"],["tags/特效/index.html","9ad0aea8bfa3906da21a20e0cb2c8627"],["tags/网址/index.html","80a7632857874f4c4f4a2b66b2fbd885"]];
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







