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

var precacheConfig = [["2019/09/19/2-部署elk7-2-0/index.html","2aa90c1adb0af66cd66a6173997d6bbe"],["2019/09/19/首次搭建hexo博客系统/index.html","39fc8c3dba0820c6ae000afbf6b40403"],["2019/09/20/3-k8s遇到的一些问题统计总结/index.html","d855436507bc0c6e5e0fac1d9e42dd9e"],["2019/09/24/4-hexo鼠标移动和鼠标点击特效/index.html","75bf3c5684f1d23860afb1ac5464338d"],["2019/09/24/5-hexo添加看板娘/index.html","dd9f9ee9d67ded0410065f525eb13f46"],["2019/09/26/6-ceph安装部署/index.html","47523c553365249ed1cef2b3b651e962"],["2019/09/26/7-k8s部署storageclass动态创建pv-nfs-rbd/index.html","a9cb46642b9f2d639a74570f07235476"],["2019/09/26/8-mysql5-7二进制部署/index.html","b6050ac17fba178a930cc9f7589f7544"],["2019/09/26/9-linux遇到一些问题统计总结/index.html","8cb4af646a50ac19b0d36d306c031b17"],["2019/09/27/10-centos6安装nginx1-16-php7-2/index.html","caa9344921f928205593d48df99ff526"],["2019/10/10/11-mysql简单记录/index.html","285cef8c1fa24e836a7a8d01620eaee7"],["2019/10/11/12-awk简单记录/index.html","0db989d6c3cbd685bcf390cb7c69fa37"],["2019/10/12/13-云原生博客汇总/index.html","fb8f2d2eb305d25668d777f6db70782e"],["2019/10/15/14-mysql目录copy方式迁移/index.html","301f0c00edfd7f93cbe56cdd26824dbf"],["2019/10/16/15-docker简介和使用/index.html","0b58767b8a704c69fca29245c96dd7de"],["2019/10/16/16-dockerfile介绍/index.html","77b74b9fc03934e1185b23d9ad01b6e8"],["2019/10/16/17-markdown一些写法记录/index.html","55f2bf6a0fc7f4421f394e4b1c79b82f"],["2019/10/17/18-收藏链接/index.html","74c9c78cfe99813629fe222d4d703fcc"],["2019/10/17/19-shell中gt和>的区别/index.html","6cc35e74518288c4bd21a0edf80725ac"],["2019/10/24/20-k8s搭建mysql5-7-24主从/index.html","d4298ed06749527ea925a28c92dd2039"],["2019/10/28/21-流量复制工具gor/index.html","9ce96058de8e28acd046dde86e693809"],["2019/10/28/22-es集群磁盘扩容/index.html","d5ffe011e0ce5439609cc40b1382e9fd"],["archives/index.html","5d4883ade569c72c09b4459373e73d00"],["categories/docker/Dockerfile/index.html","f540b9a1b6329732c966039f7b160a36"],["categories/docker/index.html","3ed59ada365c31e8de63eadac79be63f"],["categories/elk/elasticsearch7/index.html","17e809f0b9b1d8625415740658f1a6a8"],["categories/elk/index.html","f5465903bd1ba9c50deecec2ca14a1a0"],["categories/index.html","4cd94e52353b4f51664b0575d50be5bc"],["categories/k8s/elk7/index.html","d0b1d38e8cecfe78ecfe146ba5cee068"],["categories/k8s/index.html","fb0e38b5eaa759d3098ac9820b4baf29"],["categories/k8s/mysql/index.html","43be0986e66051c93c1cca7f6630a76b"],["categories/k8s/storageclass/index.html","bdedbb845841f8186f2aec411d18148e"],["categories/k8s/问题总结/index.html","5cd4283aeaf005d9a1742b902ecdc788"],["categories/linux/awk/index.html","9176d781162d1908e2018187b3b59a30"],["categories/linux/index.html","ae596b59445074baaa69ac3a8111b7a5"],["categories/linux/shell/index.html","1aa60673a7de9b7b7dc4b1979ca0c207"],["categories/linux/问题总结/index.html","9e22d39eb2b05d56112a9a91f63637fb"],["categories/markdown/index.html","98db3ce4d6221966d794cbe9975cca1b"],["categories/mysql/index.html","6a8fe7745bff1bbdd969ce4ef23adf92"],["categories/nginx/index.html","f1ce36e6d7d9edaadd5138348b7a7c5a"],["categories/博客/index.html","60b5f59e48dd5c45fb7d3d166ec04d81"],["categories/博客/美化/index.html","41e93f39f098a1cdc0da2584736c0a13"],["categories/存储/ceph/index.html","5db207a12f96c115c4a2f662d320cf24"],["categories/存储/index.html","7f39f7721be1967ce0bd528871a368a5"],["categories/存储/nfs/index.html","dc83e63737432f95f276ad584bf97867"],["categories/技术文档/index.html","488d856f1c1c7c685990bf374e5078c0"],["categories/有趣/index.html","1ff645cc6145612ea325bdafd5403143"],["categories/有趣/二次元/index.html","c88e053f7d8bdf65f28d8b09dca06ae7"],["categories/流量复制工具/gor/index.html","39b84677845298dc116e1be03281f1ee"],["categories/流量复制工具/index.html","2bad896ce6f242b42d36663cf011a527"],["categories/网址/index.html","050d4bc209305803f7c686fa436a6c7d"],["categories/网址/大佬博客/index.html","95d009b2e58419e292150901ab4d62be"],["categories/网址/收藏/index.html","3bc2bb940cbbb102b45d05ef35ffc958"],["css/main.css","f4dd3c0689ede261a926140ad133b814"],["images/16/容器的原理-1.png","1c184a092af6b6829c49ee20e70d132a"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["images/blog6/rancher-pv.png","d2a7e4bbfad5f71e75c9d5459cf5a464"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/docker1.jpg","5c611dd864017adeff648bca93d53f41"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/jixie-title.jpg","3ebd10201e23ecf68aba4524c020db0d"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["images/tcp三次握手图.png","32ddd8df35bd5762604327b25758370e"],["images/tcp四次挥手图.png","684b2b4a0286acadc32247d693dbd961"],["images/test1/test1.jpg","60b725f10c9c85c70d97880dfe8191b3"],["images/title1.jpg","fa2db043867c4c5654471e21ad36e5c0"],["images/title2.jpg","b6e57860ebc3fcdcf150a6a4cf3402ab"],["images/title3.jpg","f0b1554cfa4dd1193719dcfeb9e4de28"],["images/title4.jpg","6eb7bcbb846d1123e830488d75028df7"],["index.html","e9b3d5e419701d28ede76e9f578329d9"],["js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["js/src/instantclick.js","865d92a4a07409b7fed739e6a108e9c4"],["js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["js/src/live2d.js","3359a94d733737dbdd290dd41f9cef0b"],["js/src/love.js","7bcfdb57debd43483174cf9e15ab37cc"],["js/src/love2.js","2b51ddac5207cba4153da31e9132414c"],["js/src/motion.js","706d085e6cfec6f3e92dedc590d68d68"],["js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["js/src/schemes/pisces.js","1bd23ed75238ebf11afe2aa6b1c3a25b"],["js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["js/src/utils.js","f06ffce70453ad3a4d9611fdde5ca6c3"],["lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["live2d-widget/README.html","9941b5173b7915eb6158e62f02cd9ea3"],["live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["live2d-widget/autoload.js","fc45c81e48138bde62e7e742cbbdabb9"],["live2d-widget/demo/demo1.html","82a14d37dbd83931644a4ad6ea1f9eb2"],["live2d-widget/demo/demo2.html","6babb045ef6905badc0dbc5e0d98cede"],["live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["live2d-widget/waifu.css","c4dae5924f2fb0b5ea6ef26aaab80db9"],["page/2/index.html","9172a25ec8033dbe08e5078329090045"],["page/3/index.html","6944eff22133a1e391393e9e8114856e"],["tags/awk/index.html","7567e0742ad2b8dc822d58c897ef1f31"],["tags/ceph/index.html","de97b79e7579585aa60388881de60736"],["tags/cephfs/index.html","d054069465067c8dd954d220d77e176d"],["tags/cloud-native/index.html","28627e9f414faddddeb732159f4fcb00"],["tags/docker/index.html","8eebc11140b5975b8329613828822bca"],["tags/elasticsearch7/index.html","4dd75430c8f1e2668e37d05cfd26fe53"],["tags/elk/index.html","eedbcf8d951abc70addc4cbeb922f6f1"],["tags/elk7/index.html","33f980612abd5e9a3228ed966a90eef0"],["tags/gor/index.html","494598bd68475a49bbed7403f4e238a8"],["tags/hexo6/index.html","01f6d4fbff1f1f26b88943e84f6a5ed7"],["tags/hexo美化/index.html","2672cd661ab40f692ac33bdda91b1ded"],["tags/http流量复制工具/index.html","861099aaefefc17232f0d433031eb577"],["tags/index.html","5375278699785413e29f7ef1d5fe36ba"],["tags/k8s/index.html","3a678cf11748222c9257489cbe5c7e32"],["tags/k8s存储/index.html","f43ee98a01eb8ecb7adb6e664e73a9e3"],["tags/linux/index.html","717abd6679952fad0fb70bc5ecbb5b8f"],["tags/markdown/index.html","24431f27caf8930703918c5d0c0f2c06"],["tags/mysql/index.html","64a059d80b3c86ebae4eb71d47fdd6e2"],["tags/mysql5-7/index.html","1d4b3b051c14c36166b53938b6b7e2a9"],["tags/nfs/index.html","30d5b746d43ae1328fbe0a74efdbfc7f"],["tags/nginx/index.html","36f58f552df41651f2d1a309c473efb0"],["tags/php7/index.html","f3a7afe51b2577b0711d6fc6d43751b7"],["tags/shell/index.html","aae8188e0dd952bcebcd032e5d4fdfba"],["tags/storageclass/index.html","1cfdd9715a00151581e3ec70ada81758"],["tags/云原生/index.html","7df824a923c7ba140469193507ecd930"],["tags/大佬博客/index.html","0411dbf0639225ed5a8e5c30d2c35c06"],["tags/收藏/index.html","1c81ec8ad64d7d8f6c0375b0d3c3d52c"],["tags/特效/index.html","1b9c6df128bb903d6743f39abfe6eece"],["tags/网址/index.html","190eb0527c145bac6ad04716c35374b0"]];
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







