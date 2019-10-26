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

var precacheConfig = [["2019/09/19/2-部署elk7-2-0/index.html","215b07616330626604e4274912946d13"],["2019/09/19/首次搭建hexo博客系统/index.html","60e68bdb5a00fa8064f02605b8367c33"],["2019/09/20/3-k8s遇到的一些问题统计总结/index.html","18c5fb90a3bc9be56a094fbaedc7d8bb"],["2019/09/24/4-hexo鼠标移动和鼠标点击特效/index.html","a1a5dccb4c245f9aa5e7112050d04d59"],["2019/09/24/5-hexo添加看板娘/index.html","c88d5247ab685cd16f3de5b0f8341bfc"],["2019/09/26/6-ceph安装部署/index.html","f481b0b27ce9e193415ad55a357afbcd"],["2019/09/26/7-k8s部署storageclass动态创建pv-nfs-rbd/index.html","4856930b613c689e16d8b06549d31722"],["2019/09/26/8-mysql5-7二进制部署/index.html","6a126eb72cbccc985c325f83ff461f29"],["2019/09/26/9-linux遇到一些问题统计总结/index.html","ece0f50bd46e75deeef6ea9ef797cfe9"],["2019/09/27/10-centos6安装nginx1-16-php7-2/index.html","4e1693b5985fb8bcf3056305443478bd"],["2019/10/10/11-mysql简单记录/index.html","b315952999fddace2047dff077f25b7f"],["2019/10/11/12-awk简单记录/index.html","7501eb3a6ac87989c7f320797560a97b"],["2019/10/12/13-云原生博客汇总/index.html","c19842db74cf0f9c5acafde79d046299"],["2019/10/15/14-mysql目录copy方式迁移/index.html","e5c44d30e95a7788f4c06461f2504011"],["2019/10/16/15-docker简介和使用/index.html","c93dbdd2eecaf18d50d351408694118f"],["2019/10/16/16-dockerfile介绍/index.html","176ab52afcce53afab25cfc8c9400d9e"],["2019/10/16/17-markdown一些写法记录/index.html","247d286e1b6a817a2d2926adff51ec1f"],["2019/10/17/18-收藏链接/index.html","246c36c09c0174cf76ee9b4968a865ec"],["2019/10/17/19-shell中gt和>的区别/index.html","7d3d7448ac19230d0355203f624c88f0"],["2019/10/24/20-k8s搭建mysql5-7-24主从/index.html","342b262b453559f75656835b2a738c8b"],["archives/index.html","0626066b20104b558bee1a00724a2e5d"],["categories/docker/Dockerfile/index.html","51a3d8c1f76dcb0ffbd6cdfa45cd0290"],["categories/docker/index.html","b92105a24cf6dfac537a488857b35694"],["categories/index.html","404796e2d0e883d7a6058fbab3068933"],["categories/k8s/elk7/index.html","b1b1edc14b14568958395578820984a4"],["categories/k8s/index.html","7c52d981018e24502940d9c6bfbd7ee2"],["categories/k8s/mysql/index.html","e26c49241f87e6994f6087908e510f52"],["categories/k8s/storageclass/index.html","715ff86da410af0ad2fcfcefbf018c6c"],["categories/k8s/问题总结/index.html","20dca21f0da5841143c532a58911ba89"],["categories/linux/awk/index.html","42893519474833db0d954ba15d2b6f6f"],["categories/linux/index.html","2d1513bdb298a7ee2c3696c8fc3db4e7"],["categories/linux/shell/index.html","d7fc9f58f5ed7ebc7c3e329508144a16"],["categories/linux/问题总结/index.html","97895b382fd941575a7fe13f1aaa6311"],["categories/markdown/index.html","6a9e7cab2e09280d4610f27de1d4a55d"],["categories/mysql/index.html","ba4f8a5e7d4021d1aea3fdd7babcd196"],["categories/nginx/index.html","75dc02f43cd5d3f92749956ce00caa03"],["categories/博客/index.html","e68142f2d770cd349a5d8e225aa20568"],["categories/博客/美化/index.html","726e26f911d4dc606d7a5c71d832407a"],["categories/存储/ceph/index.html","6ff5306fd7afc621a7c7b7d0fec4f4d5"],["categories/存储/index.html","95f79552197dc42e8ebe0334840b31d4"],["categories/存储/nfs/index.html","81a72636ac2cbd410cd3e4fc5e04e8d6"],["categories/技术文档/index.html","d7bee932a3d5eac97c011752ccd51f12"],["categories/有趣/index.html","0a5e920e86eb5be4c68fb7ef9a97094e"],["categories/有趣/二次元/index.html","a480606dbb6b93d4ef4b6feb3dc1b823"],["categories/网址/index.html","67f523be80621ae3db1e26de6bfb778b"],["categories/网址/大佬博客/index.html","10538d7c3878d99ac417b6b63d85a2db"],["categories/网址/收藏/index.html","e9c7e6b3a495dfd4da6d6e5fb59e5c70"],["css/main.css","ff4387d24d7aae66653aeeec6ffc731a"],["images/16/容器的原理-1.png","1c184a092af6b6829c49ee20e70d132a"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["images/blog6/rancher-pv.png","d2a7e4bbfad5f71e75c9d5459cf5a464"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/docker1.jpg","5c611dd864017adeff648bca93d53f41"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/jixie-title.jpg","3ebd10201e23ecf68aba4524c020db0d"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["images/tcp三次握手图.png","32ddd8df35bd5762604327b25758370e"],["images/tcp四次挥手图.png","684b2b4a0286acadc32247d693dbd961"],["images/test1/test1.jpg","60b725f10c9c85c70d97880dfe8191b3"],["images/title1.jpg","fa2db043867c4c5654471e21ad36e5c0"],["images/title2.jpg","b6e57860ebc3fcdcf150a6a4cf3402ab"],["images/title3.jpg","f0b1554cfa4dd1193719dcfeb9e4de28"],["images/title4.jpg","6eb7bcbb846d1123e830488d75028df7"],["index.html","13f83863f167d4ab557183a5947c2e6a"],["js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["js/src/instantclick.js","865d92a4a07409b7fed739e6a108e9c4"],["js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["js/src/live2d.js","3359a94d733737dbdd290dd41f9cef0b"],["js/src/love.js","7bcfdb57debd43483174cf9e15ab37cc"],["js/src/love2.js","2b51ddac5207cba4153da31e9132414c"],["js/src/motion.js","706d085e6cfec6f3e92dedc590d68d68"],["js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["js/src/schemes/pisces.js","1bd23ed75238ebf11afe2aa6b1c3a25b"],["js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["js/src/utils.js","f06ffce70453ad3a4d9611fdde5ca6c3"],["lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["live2d-widget/README.html","9941b5173b7915eb6158e62f02cd9ea3"],["live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["live2d-widget/autoload.js","fc45c81e48138bde62e7e742cbbdabb9"],["live2d-widget/demo/demo1.html","82a14d37dbd83931644a4ad6ea1f9eb2"],["live2d-widget/demo/demo2.html","6babb045ef6905badc0dbc5e0d98cede"],["live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["live2d-widget/waifu.css","c4dae5924f2fb0b5ea6ef26aaab80db9"],["page/2/index.html","ae7feaaaf7b3619f6235e47b66db0dde"],["tags/awk/index.html","40a9d082fb9ae2011f92c7961a453297"],["tags/ceph/index.html","853de8ce523a36a80272f91fe1ad1a6b"],["tags/cephfs/index.html","81366817b3183e02bd63268cbbcde472"],["tags/cloud-native/index.html","131555b695b18a0b57270d218f13e5ee"],["tags/docker/index.html","41db9fbd9e2980f450869a79fd9141bc"],["tags/elk/index.html","95b9708906a413647fb67e1786402478"],["tags/elk7/index.html","3bb754aa0c2074100e854982dce6b995"],["tags/hexo6/index.html","28b0e962986c39d95c8b56c3bcdde4d0"],["tags/hexo美化/index.html","5af65779f6f25e5718c733e59f15ca50"],["tags/index.html","68155424a252b9877042b020299545df"],["tags/k8s/index.html","78533118651b71b6023ba0d86bed0a40"],["tags/k8s存储/index.html","7896c5bd778337f20333cde6bff91ea0"],["tags/linux/index.html","9b93d01dab489696ebd9fbef5838336a"],["tags/markdown/index.html","80dff2d5174cf8d8e61fde3b66c9b8f0"],["tags/mysql/index.html","dad3c913269dd82969565528362650d2"],["tags/mysql5-7/index.html","0f743bfa15a0fa91aaba64671f540160"],["tags/nfs/index.html","d0f3140fb6ad38b544020e219b8495a3"],["tags/nginx/index.html","0e06caa340e10a027d5a27a378889cbc"],["tags/php7/index.html","0e241bb7befe9ccd001a57dd9bf52030"],["tags/shell/index.html","bbfc5505e12c5c8f275b1f9c253de637"],["tags/storageclass/index.html","59e2851880b7f8433ae5cb129404d31a"],["tags/云原生/index.html","9c3e989ed1697ce4daf3af9a28d987ee"],["tags/大佬博客/index.html","cd724de81df27588e5523e035b5df574"],["tags/收藏/index.html","2cd9674a5ee17f61ac18d4faf9333b30"],["tags/特效/index.html","6d22703e97a90daa28aa566deba9a36c"],["tags/网址/index.html","0e356d3aa5edfd09315bc7612ef2eb30"]];
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







