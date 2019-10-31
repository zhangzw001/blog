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

var precacheConfig = [["2019/09/19/2-部署elk7-2-0/index.html","d4f49638ef98fa1bc3aedacc93538bca"],["2019/09/19/首次搭建hexo博客系统/index.html","c3b6e8248d2e8127a1ead77f09da38ab"],["2019/09/20/3-k8s遇到的一些问题统计总结/index.html","f7b5aee117f36068f3d2ae7d9baa0852"],["2019/09/24/4-hexo鼠标移动和鼠标点击特效/index.html","83198d9b69945edbccd66356649ba364"],["2019/09/24/5-hexo添加看板娘/index.html","692da42ea97420393262886acc45990a"],["2019/09/26/6-ceph安装部署/index.html","83f61646a0c115b72dbdc9e37cf25db1"],["2019/09/26/7-k8s部署storageclass动态创建pv-nfs-rbd/index.html","cb770b4cbc28d0d3e3878b97d4f0b358"],["2019/09/26/8-mysql5-7二进制部署/index.html","32cd51eaeac0ce7e6aef7b9745348d9b"],["2019/09/26/9-linux遇到一些问题统计总结/index.html","fc25376a72ea11074d6c5314e433ea0b"],["2019/09/27/10-centos6安装nginx1-16-php7-2/index.html","886aa0dcf366efe079f8ee58fd6c80ac"],["2019/10/10/11-mysql简单记录/index.html","81370106e8126c860d98acc0e7b581d6"],["2019/10/11/12-awk简单记录/index.html","9b66c1e68c4b498e5383af8a67e7da22"],["2019/10/12/13-云原生博客汇总/index.html","3ecd356099ded21d7184589cb81cfbbf"],["2019/10/15/14-mysql目录copy方式迁移/index.html","b61316607a928b22cb19cd89fdf58c79"],["2019/10/16/15-docker简介和使用/index.html","9ca4b37d42c99645d5dc10547b95e8e8"],["2019/10/16/16-dockerfile介绍/index.html","618251328b387027dac96c5ff430a76e"],["2019/10/16/17-markdown一些写法记录/index.html","c785dcea1f2cc4e274adaa98c68d83f1"],["2019/10/17/18-收藏链接/index.html","f583cc83fdafcb5445744958645ebcc2"],["2019/10/17/19-shell中gt和>的区别/index.html","55a137ae4f2dd89411fa48a9699c1cee"],["2019/10/24/20-k8s搭建mysql5-7-24主从/index.html","0cc70917c576ab09c1d93b6708d3fbac"],["2019/10/28/21-流量复制工具gor/index.html","d0bdde3d9c3d645a8a08d3c4ae3e9e94"],["2019/10/28/22-es集群磁盘扩容/index.html","2229ce3f2f8d330204db11208f3e3ebc"],["2019/10/29/23-mysql5-5主与mysql5-7从部署配置/index.html","4ae694d0a3f3ad2e0a815cb34858250b"],["2019/10/30/24-filebeat7收集mysql慢日志到es/index.html","91c345162f4bc1b21f6515cf991b60bc"],["archives/index.html","bee2218a1d053ae880b1c6f579a8c11c"],["categories/docker/Dockerfile/index.html","eea621f65aadcb6ad5c22c963868e519"],["categories/docker/index.html","5ad33560f67481e048078b99f15a317a"],["categories/elk/elasticsearch5/index.html","6bec291c4bb642ca6d005578aee7e483"],["categories/elk/elasticsearch7/index.html","82aba06b11021587d514e1d056d9d9ec"],["categories/elk/index.html","67ed6caca0c3cc3b83619516ed939557"],["categories/elk7/filebeat7/index.html","d91721775887a5be3d61cf032f1b9e90"],["categories/elk7/index.html","1536a5c60a8bcd147174a1939554da10"],["categories/index.html","8d39b68187a8c4eb780af160f086fb0f"],["categories/k8s/elk7/index.html","88205d98d63e025c8437fa79f08299b6"],["categories/k8s/index.html","7f98612901d34f2bc2c7573ad5ac191f"],["categories/k8s/mysql/index.html","56a1e31494b56d1d36c969bab7e6feb4"],["categories/k8s/storageclass/index.html","646336917187e14b11bb6d485d44b6a4"],["categories/k8s/问题总结/index.html","b20e8eb766ee4381c1cb9fdaf4ebf2ee"],["categories/linux/awk/index.html","9386f8dd8dcf44ac2e1bf3a96d186e6a"],["categories/linux/index.html","e2e50a386efecf82c113844f6dc276f4"],["categories/linux/shell/index.html","c899045e4abf2f2799ba1862750a4d39"],["categories/linux/问题总结/index.html","c94e9c1af86f98977bbe33da54c749e4"],["categories/markdown/index.html","096eefbb0546d3e0d766089f73feb31c"],["categories/mysql/index.html","95b79cefd40944f286693f2601a6a943"],["categories/mysql/主从/index.html","749a14858a284c348af3dae668d9948e"],["categories/nginx/index.html","e4ad83befcf07705cf9a1f37be873b9b"],["categories/博客/index.html","4ad362bbe5743d544e82bc850fa4cf39"],["categories/博客/美化/index.html","2217530f30559e9e048cf6fd0b4920c7"],["categories/存储/ceph/index.html","e313d3168ce315681ba330d5c7315067"],["categories/存储/index.html","b9fb7c6e703d432c9033b681e8577f20"],["categories/存储/nfs/index.html","88ea5210329b905dde48e9a5ab3b90db"],["categories/技术文档/index.html","f8e53b8c1c90836fbe7d3a8a33a3cacf"],["categories/有趣/index.html","18dab55a30299af8ac8a2bb6ed8e105d"],["categories/有趣/二次元/index.html","1e390f24c251c73e48d24b55225759b6"],["categories/流量复制工具/gor/index.html","6fda69e0e2423220876f26459aa6f082"],["categories/流量复制工具/index.html","bfc2c20a0b8e687c9c00d52c1710a4e1"],["categories/网址/index.html","dba3555126b2119ed7ca40923770d8e8"],["categories/网址/大佬博客/index.html","1992ed9578c72e5fb19dc1b505b8abf3"],["categories/网址/收藏/index.html","782638879054282adfc89a0d15318066"],["css/main.css","c3bcef4265fad2e841f54c0fd14f15ab"],["images/16/容器的原理-1.png","1c184a092af6b6829c49ee20e70d132a"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["images/blog6/rancher-pv.png","d2a7e4bbfad5f71e75c9d5459cf5a464"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/docker1.jpg","5c611dd864017adeff648bca93d53f41"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/jixie-title.jpg","3ebd10201e23ecf68aba4524c020db0d"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["images/tcp三次握手图.png","32ddd8df35bd5762604327b25758370e"],["images/tcp四次挥手图.png","684b2b4a0286acadc32247d693dbd961"],["images/test1/test1.jpg","60b725f10c9c85c70d97880dfe8191b3"],["images/title1.jpg","fa2db043867c4c5654471e21ad36e5c0"],["images/title2.jpg","b6e57860ebc3fcdcf150a6a4cf3402ab"],["images/title3.jpg","f0b1554cfa4dd1193719dcfeb9e4de28"],["images/title4.jpg","6eb7bcbb846d1123e830488d75028df7"],["index.html","8369df8ef9d4cf33776cf44f0028eab0"],["js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["js/src/instantclick.js","865d92a4a07409b7fed739e6a108e9c4"],["js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["js/src/live2d.js","3359a94d733737dbdd290dd41f9cef0b"],["js/src/love.js","7bcfdb57debd43483174cf9e15ab37cc"],["js/src/love2.js","2b51ddac5207cba4153da31e9132414c"],["js/src/motion.js","706d085e6cfec6f3e92dedc590d68d68"],["js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["js/src/schemes/pisces.js","1bd23ed75238ebf11afe2aa6b1c3a25b"],["js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["js/src/utils.js","f06ffce70453ad3a4d9611fdde5ca6c3"],["lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["live2d-widget/README.html","9941b5173b7915eb6158e62f02cd9ea3"],["live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["live2d-widget/autoload.js","fc45c81e48138bde62e7e742cbbdabb9"],["live2d-widget/demo/demo1.html","82a14d37dbd83931644a4ad6ea1f9eb2"],["live2d-widget/demo/demo2.html","6babb045ef6905badc0dbc5e0d98cede"],["live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["live2d-widget/waifu.css","c4dae5924f2fb0b5ea6ef26aaab80db9"],["page/2/index.html","f4891843f5b75eab42677bf59f158696"],["page/3/index.html","2c170927a07f6f3649409c555ae2278b"],["tags/awk/index.html","b244b4928d1da2f96df98ce33a1b25ea"],["tags/ceph/index.html","9fc59f1ac0990f8805e40a00be2995f7"],["tags/cephfs/index.html","800d56f3e4b55f776b5126f57e271c5c"],["tags/cloud-native/index.html","343ee0c84b50e409d5059bd35369832f"],["tags/docker/index.html","3a128d990507409f625f534057ce7b09"],["tags/elasticsearch5/index.html","cd40dbb6f9d287972b7da75b19652cd1"],["tags/elasticsearch7/index.html","39363304156e11d54bf9b0ed7782754c"],["tags/elk/index.html","eeee5640845bd9a554ea41c0f253dcd9"],["tags/elk7/index.html","0bc050f9d354644a36ec99e88eab9326"],["tags/filebeat7/index.html","e6c68fb0d2385868c94108256595b9c0"],["tags/gor/index.html","b530fb469fa1cd63c936c828c0f70c79"],["tags/hexo6/index.html","526672f901a1cd311c39503f0b947319"],["tags/hexo美化/index.html","7693c979ccf9dda8ab87274d107658dc"],["tags/http流量复制工具/index.html","d8a46bb53469c00f65f9cc973a484972"],["tags/index.html","a232767bfafdfb116990d956e695c7fc"],["tags/k8s/index.html","cf042a7f9af79325bc35d3dddf92c877"],["tags/k8s存储/index.html","d32bbfd7fa825941f0907112654bf57b"],["tags/linux/index.html","9aae6cdbc025da36d5ffbf73eab9cb44"],["tags/markdown/index.html","79177245a15abcce16ad4e270bc55bed"],["tags/mysql/index.html","5820cce25d63feaaf86bd689d8c2f2ef"],["tags/mysql5-7/index.html","972d351e1c745e337f3e0564f4f3380f"],["tags/nfs/index.html","f79c86ff3b7a0bd9ff50333fb347503c"],["tags/nginx/index.html","a159614b23bdb73e054830dbcabb07e1"],["tags/php7/index.html","a717ec261a6fcdf390ea8990c63da2c3"],["tags/shell/index.html","4f2c655293c67ececd917499993628b2"],["tags/storageclass/index.html","95bb82133afe2a2bc314e535781e6b21"],["tags/云原生/index.html","93c2273e294003bbf40991830c5a1bd9"],["tags/大佬博客/index.html","c667c4ec2578e3583bfeec670367eda1"],["tags/收藏/index.html","1af4e067f29d0b6d19f8a6b54edf562a"],["tags/特效/index.html","96dd4024f3fe21056b4b97a425bce539"],["tags/网址/index.html","811a58d7869d840433cb0ddff165089d"]];
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







