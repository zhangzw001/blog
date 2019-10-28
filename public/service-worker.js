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

var precacheConfig = [["2019/09/19/2-部署elk7-2-0/index.html","568eda63cf07178f31cedbc00a2b1b95"],["2019/09/19/首次搭建hexo博客系统/index.html","52e0361b6ec3ed4d98328d4a00526522"],["2019/09/20/3-k8s遇到的一些问题统计总结/index.html","e22e27f491aa032557b90c7bdb3b9a1e"],["2019/09/24/4-hexo鼠标移动和鼠标点击特效/index.html","e27b8d77104a290647a0f36282bc1c6e"],["2019/09/24/5-hexo添加看板娘/index.html","2591b1c52ee14f24c38cc75ef55ec7e9"],["2019/09/26/6-ceph安装部署/index.html","266e18e4308c6aadaa5e868ec0f4d440"],["2019/09/26/7-k8s部署storageclass动态创建pv-nfs-rbd/index.html","ddd605c059f944c3410ef737dc1a6234"],["2019/09/26/8-mysql5-7二进制部署/index.html","5bd7c8b4d4098dce3ba3339c056f7038"],["2019/09/26/9-linux遇到一些问题统计总结/index.html","33eac65932e1d4b8494b043068c6826d"],["2019/09/27/10-centos6安装nginx1-16-php7-2/index.html","663eedb14eccfd74aacf3160180aadb3"],["2019/10/10/11-mysql简单记录/index.html","6013aa75385fc944e7cbd814c6c7abd8"],["2019/10/11/12-awk简单记录/index.html","d6f6cda563b683b6befdb7ea1841e4bd"],["2019/10/12/13-云原生博客汇总/index.html","b35b6fef1852853ae6eedfa04409bb71"],["2019/10/15/14-mysql目录copy方式迁移/index.html","1a097a77104afce30c849bc824b56082"],["2019/10/16/15-docker简介和使用/index.html","82c012bb9e6db34fba0adbed4a088fde"],["2019/10/16/16-dockerfile介绍/index.html","1f611abeecc679389f8d3b35534ac930"],["2019/10/16/17-markdown一些写法记录/index.html","f6bb0fd990ba4ed92a6425a3611fcd76"],["2019/10/17/18-收藏链接/index.html","9c9e8317616e3bc3c0c25ca63ac935a4"],["2019/10/17/19-shell中gt和>的区别/index.html","d17a500c06fd077eba0da05356b72b16"],["2019/10/24/20-k8s搭建mysql5-7-24主从/index.html","c9084453526dd10ed914a2869889856c"],["2019/10/28/21-流量复制工具gor/index.html","76825d4fc2ac3c2d14d464b9a85760e3"],["2019/10/28/22-es集群磁盘扩容/index.html","9709cc420b15451789d7f5688463fc98"],["archives/index.html","84a46812ebe403ad098b14c5503534b7"],["categories/docker/Dockerfile/index.html","38400f21276e86656a093693adf6b707"],["categories/docker/index.html","5429af6bb2ae5b07f79afc2f4e327282"],["categories/index.html","d465e2b0a5280f204c1e16c1972943aa"],["categories/k8s/elk7/index.html","1b84c4fe733b7aacaa4d3376ef579d66"],["categories/k8s/index.html","4aca74f076f0d074df9c589a21a16ac1"],["categories/k8s/mysql/index.html","1de76eb3681870017e2fbd346595f743"],["categories/k8s/storageclass/index.html","091e76c256d8cdb51c0686e5ec7f3149"],["categories/k8s/问题总结/index.html","bac895a6e3fe319e4cb1981c8c7cf077"],["categories/linux/awk/index.html","b51dd346b8f10e7867cd449f5e2f2697"],["categories/linux/index.html","c014df8ce6d20f3f611ed2212e8b1006"],["categories/linux/shell/index.html","fe2efd70abad932a14e6f8b52fbd80fb"],["categories/linux/问题总结/index.html","fe2d76a2010079b9cad882473d18f9fa"],["categories/markdown/index.html","5b2d212fd76ea5880366decd65806f78"],["categories/mysql/index.html","006f943ed64f660efdfa2845928836e6"],["categories/nginx/index.html","0286e2f7d03a8fb85cdb5ed9abdcd42a"],["categories/博客/index.html","5a01e4ddd6778eba297b75a6fe2cf712"],["categories/博客/美化/index.html","ad6d50c8b64eaf4d145c145f33adaed6"],["categories/存储/ceph/index.html","2628c4867007b11594e0ab93d6a356ba"],["categories/存储/index.html","81c8e636bcbf8ffad2951b28a3e9c13e"],["categories/存储/nfs/index.html","b02116ea485bdfbf00b7c90eac2d3f2b"],["categories/技术文档/index.html","e317515b130a8c3ca7121e2990726c94"],["categories/有趣/index.html","4cabf4dcf94f68aeae3e7392fdde1631"],["categories/有趣/二次元/index.html","d41398b5dc3c761cec0e108bba7f2e77"],["categories/流量复制工具/gor/index.html","c71ea0ae4fdbc9eb044eb1e6cc563848"],["categories/流量复制工具/index.html","5fee928ebd73a0fe7a34e10ae0d752fd"],["categories/网址/index.html","7aa097db28502c217b6ce392c9910a77"],["categories/网址/大佬博客/index.html","6fc90b4634cead6a5c0788c11061c9b0"],["categories/网址/收藏/index.html","e68d6ee9c0a2774c648eb57be4b4e87f"],["css/main.css","6ad733c93b8af2366e45eec69a404ddc"],["images/16/容器的原理-1.png","1c184a092af6b6829c49ee20e70d132a"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["images/blog6/rancher-pv.png","d2a7e4bbfad5f71e75c9d5459cf5a464"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/docker1.jpg","5c611dd864017adeff648bca93d53f41"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/jixie-title.jpg","3ebd10201e23ecf68aba4524c020db0d"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["images/tcp三次握手图.png","32ddd8df35bd5762604327b25758370e"],["images/tcp四次挥手图.png","684b2b4a0286acadc32247d693dbd961"],["images/test1/test1.jpg","60b725f10c9c85c70d97880dfe8191b3"],["images/title1.jpg","fa2db043867c4c5654471e21ad36e5c0"],["images/title2.jpg","b6e57860ebc3fcdcf150a6a4cf3402ab"],["images/title3.jpg","f0b1554cfa4dd1193719dcfeb9e4de28"],["images/title4.jpg","6eb7bcbb846d1123e830488d75028df7"],["index.html","8f90532987e3a3eb019970e137d8ab93"],["js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["js/src/instantclick.js","865d92a4a07409b7fed739e6a108e9c4"],["js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["js/src/live2d.js","3359a94d733737dbdd290dd41f9cef0b"],["js/src/love.js","7bcfdb57debd43483174cf9e15ab37cc"],["js/src/love2.js","2b51ddac5207cba4153da31e9132414c"],["js/src/motion.js","706d085e6cfec6f3e92dedc590d68d68"],["js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["js/src/schemes/pisces.js","1bd23ed75238ebf11afe2aa6b1c3a25b"],["js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["js/src/utils.js","f06ffce70453ad3a4d9611fdde5ca6c3"],["lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["live2d-widget/README.html","9941b5173b7915eb6158e62f02cd9ea3"],["live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["live2d-widget/autoload.js","fc45c81e48138bde62e7e742cbbdabb9"],["live2d-widget/demo/demo1.html","82a14d37dbd83931644a4ad6ea1f9eb2"],["live2d-widget/demo/demo2.html","6babb045ef6905badc0dbc5e0d98cede"],["live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["live2d-widget/waifu.css","c4dae5924f2fb0b5ea6ef26aaab80db9"],["page/2/index.html","e3284ccfd35176ac0a857424b98678f2"],["page/3/index.html","432e852c45afa93428840c9a69e7346e"],["tags/awk/index.html","d4f66b14d88ae28edd6c1e7a52855ed0"],["tags/ceph/index.html","74b223b4bd42e5912f3d4bcd2917fe80"],["tags/cephfs/index.html","e207b820f95f861fac7d60b37147ba1f"],["tags/cloud-native/index.html","a11bf8b0da8ca75bdc637a81ca4289b2"],["tags/docker/index.html","cb00e255b42315b48053fa67fc0794b4"],["tags/elk/index.html","c171056d8fe7b4b139dd296affa328cb"],["tags/elk7/index.html","96e5bbbdb9da41d45b6598d126e9add1"],["tags/gor/index.html","d106554a924b6e48921d79e5bbc8c6e0"],["tags/hexo6/index.html","524518b98885913321a0076a9173dc13"],["tags/hexo美化/index.html","5a742eedc39fad3f67ff14118c4e4e2c"],["tags/http流量复制工具/index.html","ff89b1298749363e38dec8784456056f"],["tags/index.html","92c902d07145f2e425128fee9fcc9407"],["tags/k8s/index.html","7be9a29bc5bd64a23007a8ea3dd10121"],["tags/k8s存储/index.html","d2fa72069f86336754b322047201ade1"],["tags/linux/index.html","6b07d34f92c20e622dc86f7da56e5c9c"],["tags/markdown/index.html","8fda4ef31453ef9b76ad06d7f24b1861"],["tags/mysql/index.html","d0391c5de0122e615755c47d550f7932"],["tags/mysql5-7/index.html","da0fa4c5ab435cdb70d42c201322e77a"],["tags/nfs/index.html","b3283b21b4f64e4408922bfa805bec2f"],["tags/nginx/index.html","a9c7c76eb06a2b377e33131bc949a07c"],["tags/php7/index.html","aa1cfd0bbd725bd4f901318e89c34435"],["tags/shell/index.html","278090700d05302a0f0914199e359626"],["tags/storageclass/index.html","4377cb4547654b9fb4e0a506c2514ad3"],["tags/云原生/index.html","f35192fdb728fc5851ee56524f065826"],["tags/大佬博客/index.html","f5bfc2e0df31bc7b85cee588ae3c8993"],["tags/收藏/index.html","957688388979b332a07c7a2786a68184"],["tags/特效/index.html","391478392073ccc5a474ba18250104a2"],["tags/网址/index.html","21130d9f35abe38a42247f9d527d068c"]];
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







