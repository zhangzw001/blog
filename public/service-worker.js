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

var precacheConfig = [["2019/09/19/2-部署elk7-2-0/index.html","c44d25b47a60204ff50182ec983369bc"],["2019/09/19/首次搭建hexo博客系统/index.html","fce8bcf0986aeb4278f9eb6895da6a44"],["2019/09/20/3-k8s遇到的一些问题统计总结/index.html","3eb2c06da3c1b261ef0bd8eb68b74ca6"],["2019/09/24/4-hexo鼠标移动和鼠标点击特效/index.html","822fcaa333ba631a72fa2c127b315361"],["2019/09/24/5-hexo添加看板娘/index.html","75ea17c5321f48566cb9b678ead1e3d0"],["2019/09/26/6-ceph安装部署/index.html","f7131fd8ddf23e0e3cb36a5a8b4e1318"],["2019/09/26/7-k8s部署storageclass动态创建pv-nfs-rbd/index.html","55ecccf3295db81e8f7c8c0179d1d487"],["2019/09/26/8-mysql5-7二进制部署/index.html","be8b563c3732c4ed69ff3ed3e597325c"],["2019/09/26/9-linux遇到一些问题统计总结/index.html","bfe20d1192c2b35c144558fdd20a2d6c"],["2019/09/27/10-centos6安装nginx1-16-php7-2/index.html","1775900fffffb3dfa1018bfef8898b5c"],["2019/10/10/11-mysql简单记录/index.html","a31b2cdf82b42f09b3e3bf043e6528df"],["2019/10/11/12-awk简单记录/index.html","ab5cdacc6abad146c249f2a0b96b2547"],["2019/10/12/13-云原生博客汇总/index.html","a39ccb7ebcf748927bba1ceb53453224"],["2019/10/15/14-mysql目录copy方式迁移/index.html","b84a0d84acb3f614b51d103ee5bd53e8"],["2019/10/16/15-docker简介和使用/index.html","068e66d01f02ef4874ab5f38fed9ac9c"],["2019/10/16/16-dockerfile介绍/index.html","74e08cf97b5c2c1d9c73f833236294ae"],["2019/10/16/17-markdown一些写法记录/index.html","7976ba5837b0c8e5e118e92c39dca3d4"],["2019/10/17/18-收藏链接/index.html","d7642d6b8bf88c0c47fd4509e5f3c709"],["2019/10/17/19-shell中gt和>的区别/index.html","69942aaff7a97ee88332bd378b7c568b"],["2019/10/24/20-k8s搭建mysql5-7-24主从/index.html","5ad2b48fbf34f8369dbb3c1abe569a08"],["2019/10/28/21-流量复制工具gor/index.html","646fa3fb507e748e9b8836626bbbae8b"],["2019/10/28/22-es集群磁盘扩容/index.html","d0756561af05d0ef1d06332f3adf5e31"],["2019/10/29/23-mysql5-5主与mysql5-7从部署配置/index.html","370716e57a7e81f3183d49a3971002b8"],["archives/index.html","55b7666df67ec015ce43c69c88a7bd9c"],["categories/docker/Dockerfile/index.html","a94727848139a9b753253bf8b7445f19"],["categories/docker/index.html","ef98567be1c4c130719a9e9499249d61"],["categories/elk/elasticsearch5/index.html","027614d13177964b022c93a52a3b6ff9"],["categories/elk/elasticsearch7/index.html","a4515a8a421631d5b2bee456b0a768f6"],["categories/elk/index.html","05139def409323338fe47e9186ab644a"],["categories/index.html","b7c1d3de00287aa3401ecced57fa347a"],["categories/k8s/elk7/index.html","d82de9cabf1a6bf853c969810d017643"],["categories/k8s/index.html","522577af3b5fad4c2ccb1770606e4208"],["categories/k8s/mysql/index.html","549b07b98b269ffceb4f90081d513af0"],["categories/k8s/storageclass/index.html","a925da25d5ad9485e89cd0bca39a2d91"],["categories/k8s/问题总结/index.html","aa788134ac3f27f6aeb5f6dc33c49cbc"],["categories/linux/awk/index.html","912efde241d530470eb0caee34fcf04a"],["categories/linux/index.html","d31fc7a1dbcd3ed6bd3f1bd61286d633"],["categories/linux/shell/index.html","314544a7fdc2da993c941a642ec3d2d3"],["categories/linux/问题总结/index.html","d2bef9db1dd030568099f6cdedbcac2f"],["categories/markdown/index.html","50b4312d97be7751abbcdb3b79bb7f83"],["categories/mysql/index.html","4c0fbd140c0e25a666b3a2d9a547517a"],["categories/nginx/index.html","36737074ea241c01ac456bba5a9eddd3"],["categories/博客/index.html","b0e292bfb21241c90160500ff59e3c90"],["categories/博客/美化/index.html","9bc94d649abd2e6016da8dd11f95a963"],["categories/存储/ceph/index.html","c6b173618bd2f88bab623289205dec52"],["categories/存储/index.html","23ffb19cf8d971f0177330526e9b04be"],["categories/存储/nfs/index.html","844b4d223d6588cd2b0741c16829ef69"],["categories/技术文档/index.html","a79ab418d17998cb5470a213103e3785"],["categories/有趣/index.html","acd93e9335dcffd7be26e4e36e693c77"],["categories/有趣/二次元/index.html","c15aee2d9f887a3d25415dc367848b06"],["categories/流量复制工具/gor/index.html","c9f14c39d4346e36b9887fdb366a3d61"],["categories/流量复制工具/index.html","8beef6bc558ca196010bcfb1a540bc5b"],["categories/网址/index.html","e1138960c88bb4e802cff09e3379ea9c"],["categories/网址/大佬博客/index.html","31d25df6e87a5dba479917b3b707656b"],["categories/网址/收藏/index.html","a120dddf2f1d358a6cd178edf7ce5917"],["css/main.css","58e38d6cc47b29157dd591fa554ee889"],["images/16/容器的原理-1.png","1c184a092af6b6829c49ee20e70d132a"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["images/blog6/rancher-pv.png","d2a7e4bbfad5f71e75c9d5459cf5a464"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/docker1.jpg","5c611dd864017adeff648bca93d53f41"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/jixie-title.jpg","3ebd10201e23ecf68aba4524c020db0d"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["images/tcp三次握手图.png","32ddd8df35bd5762604327b25758370e"],["images/tcp四次挥手图.png","684b2b4a0286acadc32247d693dbd961"],["images/test1/test1.jpg","60b725f10c9c85c70d97880dfe8191b3"],["images/title1.jpg","fa2db043867c4c5654471e21ad36e5c0"],["images/title2.jpg","b6e57860ebc3fcdcf150a6a4cf3402ab"],["images/title3.jpg","f0b1554cfa4dd1193719dcfeb9e4de28"],["images/title4.jpg","6eb7bcbb846d1123e830488d75028df7"],["index.html","cad344adfff69e60234bc8e6f000d3c6"],["js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["js/src/instantclick.js","865d92a4a07409b7fed739e6a108e9c4"],["js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["js/src/live2d.js","3359a94d733737dbdd290dd41f9cef0b"],["js/src/love.js","7bcfdb57debd43483174cf9e15ab37cc"],["js/src/love2.js","2b51ddac5207cba4153da31e9132414c"],["js/src/motion.js","706d085e6cfec6f3e92dedc590d68d68"],["js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["js/src/schemes/pisces.js","1bd23ed75238ebf11afe2aa6b1c3a25b"],["js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["js/src/utils.js","f06ffce70453ad3a4d9611fdde5ca6c3"],["lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["live2d-widget/README.html","9941b5173b7915eb6158e62f02cd9ea3"],["live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["live2d-widget/autoload.js","fc45c81e48138bde62e7e742cbbdabb9"],["live2d-widget/demo/demo1.html","82a14d37dbd83931644a4ad6ea1f9eb2"],["live2d-widget/demo/demo2.html","6babb045ef6905badc0dbc5e0d98cede"],["live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["live2d-widget/waifu.css","c4dae5924f2fb0b5ea6ef26aaab80db9"],["page/2/index.html","9a792232de35c1fc286762d844e347e1"],["page/3/index.html","721752549c14f5992135e21d324f110b"],["tags/awk/index.html","941cc493c34fda636f12b65b97ee02d6"],["tags/ceph/index.html","89ade5cbe7921824cada64a9a4a972ed"],["tags/cephfs/index.html","5dd56cf64f6d9af31f32a39f8ce8fa13"],["tags/cloud-native/index.html","230e094197a73749b835ed6a45208cdf"],["tags/docker/index.html","6279bac8b37399ac48ceaa2df06f371c"],["tags/elasticsearch5/index.html","fa7ed25557b221b3554dffeb7bdcb880"],["tags/elasticsearch7/index.html","a78d2f29c9555439a01666a7e1d0d129"],["tags/elk/index.html","d2fb6d3821ec959e489365a701095815"],["tags/elk7/index.html","0e08e45e73e6615964b151d62225e586"],["tags/gor/index.html","9cda0d7435cfbf1601546da6f62486ab"],["tags/hexo6/index.html","d92a04db5d523ce145be38bab8d0d890"],["tags/hexo美化/index.html","f4f54927ab2a84cac164f9fde761646b"],["tags/http流量复制工具/index.html","4d46729c8414baca6fa03363a8776fc2"],["tags/index.html","939eebed9f07007b9aba4533de5cdedb"],["tags/k8s/index.html","b7bd8acdcf9a102b38ad419c477c2c66"],["tags/k8s存储/index.html","8f799ae294aa28f14060ecee8d72ad6c"],["tags/linux/index.html","85b3453e94ab464921fd5bff184af167"],["tags/markdown/index.html","ae60b9e924f4221bc2f10effa046de77"],["tags/mysql/index.html","c36d2db4932ec067a4ef32a1b5cd5f19"],["tags/mysql5-7/index.html","82080ffcdd9f743607468b466fe9b6d6"],["tags/nfs/index.html","2a6ae12cf37c00ba605ad3378782ac07"],["tags/nginx/index.html","5786de6fb827ed713e16a6e9ab4118e1"],["tags/php7/index.html","e6668978e43afd8358e9b604799bf0b3"],["tags/shell/index.html","cfa51d5930d96ebb0eec8946d8c9e659"],["tags/storageclass/index.html","92ba90cf4231a7ac7be91f9e1cc37678"],["tags/云原生/index.html","2fdec291e589eb5cccd1205d81146111"],["tags/大佬博客/index.html","edbc5af6eb03056289f053ff9fe507f6"],["tags/收藏/index.html","c91770515a5a2486dd655f5cc04af614"],["tags/特效/index.html","58c6c2ac5e480b9852767b0fb4b7f417"],["tags/网址/index.html","de3ef5c138c573ab262537127660b4a4"]];
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







