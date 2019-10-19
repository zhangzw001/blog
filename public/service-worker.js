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

var precacheConfig = [["2019/09/19/2-部署elk7-2-0/index.html","7755b25efc794b3facf12130b540583d"],["2019/09/19/首次搭建hexo博客系统/index.html","d5cace3df21e3ee93fc55edf64c811ce"],["2019/09/20/3-k8s遇到的一些问题统计总结/index.html","8cf6f438d18905b7c818c1080f0b247c"],["2019/09/24/4-hexo鼠标移动和鼠标点击特效/index.html","c8cf1e67e5be0f7cbed90f335a47d669"],["2019/09/24/5-hexo添加看板娘/index.html","e5aa9737b20a5ea7022da6d08ee6e3aa"],["2019/09/26/6-ceph安装部署/index.html","d73e13ccca813fe92096658953a36736"],["2019/09/26/7-k8s部署storageclass动态创建pv-nfs-rbd/index.html","008e99b6982e013fbb75775aa6ec8bda"],["2019/09/26/8-mysql5-7二进制部署/index.html","ee952fe63fdff9712dae70e9b58f83aa"],["2019/09/26/9-linux遇到一些问题统计总结/index.html","b77945b465784335593265a826dcb409"],["2019/09/27/10-centos6安装nginx1-16-php7-2/index.html","9077d5344a0b8416c5890e8fc7c99aac"],["2019/10/10/11-mysql简单记录/index.html","37dab99e482cbd1a68ce9b2747199660"],["2019/10/11/12-awk简单记录/index.html","8aa1c562fd5967cf03387e70990aeb2d"],["2019/10/12/13-云原生博客汇总/index.html","2941e7c6dc3fa47952950d91ef2a985c"],["2019/10/15/14-mysql目录copy方式迁移/index.html","62901cd220924b058a49dc68ce7838d8"],["2019/10/16/15-docker简介和使用/index.html","984b72a7e45e38165c302ae65ee38d83"],["2019/10/16/16-dockerfile介绍/index.html","2f7ef8b70db10f8388c242518f528ba8"],["2019/10/16/17-markdown一些写法记录/index.html","4e813143a69ea66f4a90330c01ac0fd7"],["2019/10/17/18-收藏链接/index.html","5133c800a559a83dcca37fbc78b1efce"],["2019/10/17/19-shell中gt和>的区别/index.html","c02b4a55666a481de13c2287ff5dafa3"],["archives/index.html","4444e7493917a01564bede5639ce5707"],["categories/docker/Dockerfile/index.html","efd461f69da2f15bfc4f47812b73707a"],["categories/docker/index.html","1ec7f4926866929cd26e53f22ad340c4"],["categories/index.html","4a26c25fad327775ba8fd48cad9d6fc5"],["categories/k8s/elk7/index.html","7709ad9e009246c8faf0e78bff8f0411"],["categories/k8s/index.html","f04c25318f34f03af947d4ef5078d21d"],["categories/k8s/storageclass/index.html","dc16faf1e63b52572268ad9b1e38f58b"],["categories/k8s/问题总结/index.html","8fa80e1b4ae8e78366da3e9fd2741f7e"],["categories/linux/awk/index.html","7124f83574ef1b07f31bfbf70e0c7a5c"],["categories/linux/index.html","47d783b5fe20283cd7470d3e3ee5354f"],["categories/linux/shell/index.html","faf9e64e01f233db3c9d723d0a60d0f6"],["categories/linux/问题总结/index.html","26be0c890812df06df90deba0bbb39c7"],["categories/markdown/index.html","f11a5fe30b134a5ada1f1562d0d50148"],["categories/mysql/index.html","bc2b6bb020a6ba3d107f545a9decbc9a"],["categories/nginx/index.html","f7b7bc4a2f79ed2e425f039c7553e592"],["categories/博客/index.html","9090ce755f6827c56c9157fd31ef8255"],["categories/博客/美化/index.html","17d34d55332a34f51f0cb1b05cfbcac1"],["categories/存储/ceph/index.html","ad790b1f51d6903c26d8fe8820a21b6b"],["categories/存储/index.html","3c125e75c1219402186b61155b94c07f"],["categories/存储/nfs/index.html","4f32ed2e469fb746f08d2eaa6858e48e"],["categories/技术文档/index.html","beac7c0eb742ca74581a5386f8ec8bf1"],["categories/有趣/index.html","46195c778a25fe43b11acd1fd7bb7969"],["categories/有趣/二次元/index.html","d7ab44799aa6fc8340d6037118d46d40"],["categories/网址/index.html","2a31d990603793f306741c5d4309d4e7"],["categories/网址/大佬博客/index.html","2d0ffdc0ae79af184da529b6e2397a84"],["categories/网址/收藏/index.html","a3da5e11d7c64e28b3e3251f15ddf8fd"],["css/main.css","14d98b0ae339b4653fa581ef0b024c61"],["images/16/容器的原理-1.png","1c184a092af6b6829c49ee20e70d132a"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["images/blog6/rancher-pv.png","d2a7e4bbfad5f71e75c9d5459cf5a464"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/docker1.jpg","5c611dd864017adeff648bca93d53f41"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/jixie-title.jpg","3ebd10201e23ecf68aba4524c020db0d"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["images/tcp三次握手图.png","32ddd8df35bd5762604327b25758370e"],["images/tcp四次挥手图.png","684b2b4a0286acadc32247d693dbd961"],["images/test1/test1.jpg","60b725f10c9c85c70d97880dfe8191b3"],["images/title1.jpg","fa2db043867c4c5654471e21ad36e5c0"],["images/title2.jpg","b6e57860ebc3fcdcf150a6a4cf3402ab"],["images/title3.jpg","f0b1554cfa4dd1193719dcfeb9e4de28"],["images/title4.jpg","6eb7bcbb846d1123e830488d75028df7"],["index.html","bd48b01cef38a118ebc2461e417332ca"],["js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["js/src/instantclick.js","865d92a4a07409b7fed739e6a108e9c4"],["js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["js/src/live2d.js","3359a94d733737dbdd290dd41f9cef0b"],["js/src/love.js","7bcfdb57debd43483174cf9e15ab37cc"],["js/src/love2.js","2b51ddac5207cba4153da31e9132414c"],["js/src/motion.js","706d085e6cfec6f3e92dedc590d68d68"],["js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["js/src/schemes/pisces.js","1bd23ed75238ebf11afe2aa6b1c3a25b"],["js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["js/src/utils.js","f06ffce70453ad3a4d9611fdde5ca6c3"],["lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["live2d-widget/README.html","9941b5173b7915eb6158e62f02cd9ea3"],["live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["live2d-widget/autoload.js","fc45c81e48138bde62e7e742cbbdabb9"],["live2d-widget/demo/demo1.html","82a14d37dbd83931644a4ad6ea1f9eb2"],["live2d-widget/demo/demo2.html","6babb045ef6905badc0dbc5e0d98cede"],["live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["live2d-widget/waifu.css","c4dae5924f2fb0b5ea6ef26aaab80db9"],["page/2/index.html","a834f0063e26423c12e130b9698f4172"],["tags/awk/index.html","25f5729357bedf1482ebd24da2ec4506"],["tags/ceph/index.html","0ee0f5e13a2c901ebb9347efaf1dbbc8"],["tags/cephfs/index.html","176ee5dff6aed6df556b472579e4fd8e"],["tags/cloud-native/index.html","2f0d43e7fc1a0edbc2b79b476af87c37"],["tags/docker/index.html","9424b84c1d845156d0952324721d48de"],["tags/elk/index.html","da5c80543018df9f1d5b2286a5914ceb"],["tags/elk7/index.html","6334e0c593ab78422cab47ad39dc0e29"],["tags/hexo6/index.html","aa6eb29d07d3ddef071615849c0348d1"],["tags/hexo美化/index.html","d0e1b48401859919ad5eb5c35a47d5b1"],["tags/index.html","7a7e3850d1cd3db64e660b0ef13c0af9"],["tags/k8s/index.html","fb2d5df4ee9d6445a2cd793bea91b686"],["tags/k8s存储/index.html","ff48c69d341b15ecf8e9240fb8ec814d"],["tags/linux/index.html","9d033f3a65ced43b26bd79151f6038bb"],["tags/markdown/index.html","7a2d342554b9c7b0a73c4f25d5e915a3"],["tags/mysql/index.html","e1d3677ae4600318d086d62086289868"],["tags/mysql5-7/index.html","a226f2fb123824c987fa83e1bfab8681"],["tags/nfs/index.html","999a278ed403e7e0feaa211074a21071"],["tags/nginx/index.html","b56178f9783412db8a2d58437581d111"],["tags/php7/index.html","32583fc14655ec15082e45ad3bb3bd7d"],["tags/shell/index.html","2e430df752e1f0cf13c13252170b42f0"],["tags/storageclass/index.html","c355285ffc21486f7bba601b5a1e61ab"],["tags/云原生/index.html","223172376e02d3ff4926a860c76f7d6f"],["tags/大佬博客/index.html","7ff6e3aeb6166056d13b9727c3aae453"],["tags/收藏/index.html","3ca9cd9dff0ddc7ddeb05526b5a5b2c8"],["tags/特效/index.html","c44734d3f80fdac891890042787b74ac"],["tags/网址/index.html","1337e69edce4b348adfb8a5a808c7a2d"]];
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







