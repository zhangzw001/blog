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

var precacheConfig = [["2019/09/19/2-部署elk7-2-0/index.html","1bb2e98c3b61396e8d32b46d984ceb8b"],["2019/09/19/首次搭建hexo博客系统/index.html","f09be75ec4c0d27af9973da894843b16"],["2019/09/20/3-k8s遇到的一些问题统计总结/index.html","513b78cc8b2feb1482fd5acd854a8ee4"],["2019/09/24/4-hexo鼠标移动和鼠标点击特效/index.html","ae7128c822d6928c1099c582df5ddc39"],["2019/09/24/5-hexo添加看板娘/index.html","e57cf1225f0f1f8c0644913161e5c4f1"],["2019/09/26/6-ceph安装部署/index.html","fc4b6656a806e37007fd8006b8eaee50"],["2019/09/26/7-k8s部署storageclass动态创建pv-nfs-rbd/index.html","a0100973d904509609c355b1d4ce2f28"],["2019/09/26/8-mysql5-7二进制部署/index.html","61bdeb9de3b14c7a880b0a65c2c99dae"],["2019/09/26/9-linux遇到一些问题统计总结/index.html","533640329cdb32bf87ecb18da6aaca63"],["2019/09/27/10-centos6安装nginx1-16-php7-2/index.html","bf3554ec38486417a8001ac1dc26aec3"],["2019/10/10/11-mysql简单记录/index.html","e5217249ccf4e2b65c82029b9040070c"],["2019/10/11/12-awk简单记录/index.html","8e3a85d7a634e3bbafbdd650e9974f84"],["2019/10/12/13-云原生博客汇总/index.html","e9cde5694810a1bc9a74057b5d5f6e23"],["2019/10/15/14-mysql目录copy方式迁移/index.html","0e0696805756b36a85ea60ba03e0c317"],["2019/10/16/15-docker简介和使用/index.html","d7dfb367150629d699c619b816533509"],["2019/10/16/16-dockerfile介绍/index.html","a152ba9a130571bd75bb1c8361cc05c3"],["2019/10/16/17-markdown一些写法记录/index.html","ce27d20075435dc3960cb9cf265ebf39"],["2019/10/17/18-收藏链接/index.html","7ab582e21393696bb978df709fa298f7"],["2019/10/17/19-shell中gt和-的区别/index.html","77ac7c5565cc4de88e5c3d9513ac3b15"],["archives/index.html","35029da5ff2bac36e9a67238a3974d28"],["categories/docker/Dockerfile/index.html","bb92c35f296f3955babdf95b0a351f07"],["categories/docker/index.html","719ce33ae42b4576b53a1a0dca1aa4cb"],["categories/index.html","db517652bdb7c0132eb0cc5edc734111"],["categories/k8s/elk7/index.html","7fbbc73bd31f2262afb58a934bfa706f"],["categories/k8s/index.html","75023273c081314b7a5151304998b2be"],["categories/k8s/storageclass/index.html","51f51ace26c191b3c4f645486c9cc779"],["categories/k8s/问题总结/index.html","b14d3b5f5c81f856063587bdebfb35d1"],["categories/linux/awk/index.html","2b936886548850c945d1cba32f634454"],["categories/linux/index.html","9b8c768954e9621caae0905d9049bfe7"],["categories/linux/问题总结/index.html","c3d2490fd71683730fb388c6628ad23b"],["categories/markdown/index.html","3976cbe152309d397e055546c364ca32"],["categories/mysql/index.html","bc7e3391ac416bb002636c88dfac9bc1"],["categories/nginx/index.html","73dedbc8df79170de25c0639bfbd6b15"],["categories/博客/index.html","208e0abcf027d9aaa00267839b4d81d1"],["categories/博客/美化/index.html","bc2892ed4f98d8eee8d9ad6e335b23f3"],["categories/存储/ceph/index.html","ed83dbfb85ec515b05c9befa1043d0c4"],["categories/存储/index.html","554e3d4fa065bf4a37bd68a7af24d4dc"],["categories/存储/nfs/index.html","373e3de0de5e1512fe3240bf53fd41b4"],["categories/技术文档/index.html","d5a375b90b256e050452161c33646f37"],["categories/有趣/index.html","b60804dfc7aeb53d2446e0cf8987a629"],["categories/有趣/二次元/index.html","ddc73ad80c4ed1d9e47109c65eba23d1"],["categories/网址/index.html","155acdb6f421a17868a9ff451ba36982"],["categories/网址/大佬博客/index.html","6c3fd8f3e873f9a551b17ce2d201abb3"],["categories/网址/收藏/index.html","eaf97d8177355792bbe60edc59a3fe3c"],["css/main.css","ae1b632c25693b617556a9afc5071aa0"],["images/16/容器的原理-1.png","1c184a092af6b6829c49ee20e70d132a"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["images/blog6/rancher-pv.png","d2a7e4bbfad5f71e75c9d5459cf5a464"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/docker1.jpg","5c611dd864017adeff648bca93d53f41"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/jixie-title.jpg","3ebd10201e23ecf68aba4524c020db0d"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["images/tcp三次握手图.png","32ddd8df35bd5762604327b25758370e"],["images/tcp四次挥手图.png","684b2b4a0286acadc32247d693dbd961"],["images/test1/test1.jpg","60b725f10c9c85c70d97880dfe8191b3"],["images/title1.jpg","fa2db043867c4c5654471e21ad36e5c0"],["images/title2.jpg","b6e57860ebc3fcdcf150a6a4cf3402ab"],["images/title3.jpg","f0b1554cfa4dd1193719dcfeb9e4de28"],["images/title4.jpg","6eb7bcbb846d1123e830488d75028df7"],["index.html","bbe563e6663d5dfdf5a9b4e37a1f736f"],["js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["js/src/instantclick.js","865d92a4a07409b7fed739e6a108e9c4"],["js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["js/src/live2d.js","3359a94d733737dbdd290dd41f9cef0b"],["js/src/love.js","7bcfdb57debd43483174cf9e15ab37cc"],["js/src/love2.js","2b51ddac5207cba4153da31e9132414c"],["js/src/motion.js","706d085e6cfec6f3e92dedc590d68d68"],["js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["js/src/schemes/pisces.js","1bd23ed75238ebf11afe2aa6b1c3a25b"],["js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["js/src/utils.js","f06ffce70453ad3a4d9611fdde5ca6c3"],["lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["live2d-widget/README.html","9941b5173b7915eb6158e62f02cd9ea3"],["live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["live2d-widget/autoload.js","fc45c81e48138bde62e7e742cbbdabb9"],["live2d-widget/demo/demo1.html","82a14d37dbd83931644a4ad6ea1f9eb2"],["live2d-widget/demo/demo2.html","6babb045ef6905badc0dbc5e0d98cede"],["live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["live2d-widget/waifu.css","c4dae5924f2fb0b5ea6ef26aaab80db9"],["page/2/index.html","904f6af55f9d5f9aae6d26b570f52013"],["tags/awk/index.html","a6f127be0fa38ebcd99969afa490873b"],["tags/ceph/index.html","f104fc5bc259f7808d53752d8a52971a"],["tags/cephfs/index.html","e5cde3507ce7e52a9861099356a687f3"],["tags/cloud-native/index.html","45c1e9f6fd23bd26c0fc01044da3b745"],["tags/docker/index.html","a24328e7d5035f75f984941a0829e21e"],["tags/elk/index.html","a573c3ce832c8872fb4e62a219741cfd"],["tags/elk7/index.html","5220725787b0206e817ef6c4c166c818"],["tags/hexo6/index.html","0e29dcb995228d33c0888e6cac16686d"],["tags/hexo美化/index.html","84db9a9a6f75b3b1e6f3bd42576e76e1"],["tags/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/k8s/index.html","9139011799581088496d84ee07b6f548"],["tags/k8s存储/index.html","f44344889953346576ba779a0e314f66"],["tags/linux/index.html","707589c0ea9e4df71fb01b053218132f"],["tags/markdown/index.html","2a1cf592e9b8f749098fc269a82e5a23"],["tags/mysql/index.html","7afe1289e0a63efbf56a533069f131f2"],["tags/mysql5-7/index.html","71e4a6a78f4dba5d52660c38a4746b3f"],["tags/nfs/index.html","4bfa16ed51a64a5a66aef68d91eed9f3"],["tags/nginx/index.html","40ac0ad403514218b0eb28aa1317a3cf"],["tags/php7/index.html","b2b24954a73153a17be336fe44eb5303"],["tags/storageclass/index.html","1a5660d89f69abd46441f5df732405bc"],["tags/云原生/index.html","209cf9b4b0b3a3a193c51503ceb8bd05"],["tags/大佬博客/index.html","8b5da2c1380495356c538776b0bec035"],["tags/收藏/index.html","c4f047ca3ec55a3d49b4870c6fb8837c"],["tags/特效/index.html","16c75bc6a33085cd3d57ac5aaa781824"],["tags/网址/index.html","b993a5029038037508ff8503be90ff24"]];
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







