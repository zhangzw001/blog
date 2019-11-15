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

var precacheConfig = [["2019/09/19/2-部署elk7-2-0/index.html","cf4c2de6301ce52f5060e7f3469ff17e"],["2019/09/19/首次搭建hexo博客系统/index.html","625b1c6ef4c8cfdcda6d385c983aca57"],["2019/09/20/3-k8s遇到的一些问题统计总结/index.html","f92b7e78cec70f10ee2325e049f011d8"],["2019/09/24/4-hexo鼠标移动和鼠标点击特效/index.html","9c40f9244aa60aa3a690f3e14948875c"],["2019/09/24/5-hexo添加看板娘/index.html","51a6e23e74d4fee2b5c09d1e16534008"],["2019/09/26/6-ceph安装部署/index.html","b7c45bd6c5a181a2e3e5e6ad6b03fef9"],["2019/09/26/7-k8s部署storageclass动态创建pv-nfs-rbd/index.html","fccfa6a84d934bf33c27dd94b38facb5"],["2019/09/26/8-mysql5-7二进制部署/index.html","8526b68d7696bc2eacdf78baf8f6a4e2"],["2019/09/26/9-linux遇到一些问题统计总结/index.html","dc206d73417916a1c527d3d38e591928"],["2019/09/27/10-centos6安装nginx1-16-php7-2/index.html","2ead7bfca29759563f400a19e6e897ca"],["2019/10/10/11-mysql简单记录/index.html","4117c808afab04369446ab5a56d99d36"],["2019/10/11/12-awk简单记录/index.html","efc10eedfe8402845fa41803e583eae7"],["2019/10/12/13-云原生博客汇总/index.html","6a486b2fea888aed4f263c00d751c976"],["2019/10/15/14-mysql目录copy方式迁移/index.html","e4d28d1b8a7a160a89b0d39ab1a0a3ff"],["2019/10/16/15-docker简介和使用/index.html","a4d24d725ea158aa9f4b284019e4f103"],["2019/10/16/16-dockerfile介绍/index.html","2fc8181d2214973c385ab604ed6ae933"],["2019/10/16/17-markdown一些写法记录/index.html","3678787a50f1538b4a122501e40ac084"],["2019/10/17/18-收藏链接/index.html","ce3fd993fc13d7bc1933308932b0e9d0"],["2019/10/17/19-shell中gt和>的区别/index.html","bcb2e91e967b78f88d00ed0fe3be14c0"],["2019/10/24/20-k8s搭建mysql5-7-24主从/index.html","1aeb007b73cbd2fce96a2a05bfc142bc"],["2019/10/28/21-流量复制工具gor/index.html","70ef039135a3d8001d61958d3ee3cc65"],["2019/10/28/22-es集群磁盘扩容/index.html","0f9762a56d2b3238f203744dfb2e11ec"],["2019/10/29/23-mysql5-5主与mysql5-7从部署配置/index.html","9b326f3ba5bd701b29609ef8212ed5a0"],["2019/10/30/24-filebeat7收集mysql慢日志到es/index.html","ecfdda1e7cbf804fbfd808c66c6b5622"],["2019/11/01/25-一些脚本汇总/index.html","5a1684f3a1bcf0bd6c0a54dfcde52824"],["2019/11/08/26-logstash配置/index.html","e4a57abbd52b0862adb878c34fc91ed5"],["archives/index.html","6236ee97532a2bb1a53be5e58d40e26f"],["categories/docker/Dockerfile/index.html","ba726b70344cee21c28113d35c91fd85"],["categories/docker/index.html","2e4e8acbd04e4ba4e0a76bcb62f73fb4"],["categories/elk/elasticsearch5/index.html","966ef89a6302bb1a527552aaaf4e27cf"],["categories/elk/elasticsearch7/index.html","61d606e2fed19e892dfe8c1ebea1a9e5"],["categories/elk/index.html","24bafa3696349bb5cb99e2b86ab91e2d"],["categories/elk/logstash/index.html","221b825d38b10a1f46661ad08f797c64"],["categories/elk7/filebeat7/index.html","d993518606282a494e53d57d2ee390bf"],["categories/elk7/index.html","4cf5870647774ea41188a58bb0e28d68"],["categories/index.html","9667f4744497544e323c52085687bb19"],["categories/k8s/elk7/index.html","20ba00c6ebb49493fcc263edffe5ce22"],["categories/k8s/index.html","e7d4adda54f4108a8d90deb82a251cdf"],["categories/k8s/mysql/index.html","540a87aa3a12879e20973c8fac2a158d"],["categories/k8s/storageclass/index.html","5590fa5ceb9c5a79b71dda868ec23aff"],["categories/k8s/问题总结/index.html","273fa777117b4ef86956b254a7073a34"],["categories/linux/awk/index.html","08166acfec038ce8045b8338a8b597ed"],["categories/linux/index.html","1fd7686b9a611ccd5501fe279558e8f4"],["categories/linux/shell/index.html","94beef0dad02f26b112140a7d279ffdf"],["categories/linux/问题总结/index.html","d865162cd658cf463f0b02d19ff959fa"],["categories/markdown/index.html","c520e307cbe54be57f885f21b6dcd865"],["categories/mysql/index.html","1f6a0e03c151f60288e5f141503a528f"],["categories/mysql/主从/index.html","ee651f2bd0831903237af73bc6695c1c"],["categories/nginx/index.html","5fa09a660d17c482a7c2810423d189ab"],["categories/博客/index.html","a5a5f58c780f5e1e7450b9e2f88cc171"],["categories/博客/美化/index.html","a403d22bac57c1ab20b211c31bfade1c"],["categories/存储/ceph/index.html","c57a4c2c0968bfaf9e7128afcdbd30d4"],["categories/存储/index.html","5b04c25c29440313a935c085b16def11"],["categories/存储/nfs/index.html","6153790aa03d2843c952fcbed471c669"],["categories/技术文档/index.html","8d931fef1994e65c3daa2fda98a7486b"],["categories/有趣/index.html","999857a91303e4f416882509811c3e9f"],["categories/有趣/二次元/index.html","35b4b9107d8c7d3602c6dbb1fa1ae1b3"],["categories/流量复制工具/gor/index.html","aa664b1658322306f65c59e69b8fee9d"],["categories/流量复制工具/index.html","b78dc08fff96ca54577b5a6de9a7aa95"],["categories/网址/index.html","ddf2ea895bf4998c3773e8c1ba206681"],["categories/网址/大佬博客/index.html","3f9d9d1cc50ffbac9d4294f2eda19986"],["categories/网址/收藏/index.html","895638e724f760aab3b6d751fad2e439"],["css/main.css","e92da3d1cade79efe0ae3b94f480abb0"],["images/16/容器的原理-1.png","1c184a092af6b6829c49ee20e70d132a"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["images/blog6/rancher-pv.png","d2a7e4bbfad5f71e75c9d5459cf5a464"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/docker1.jpg","5c611dd864017adeff648bca93d53f41"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/jixie-title.jpg","3ebd10201e23ecf68aba4524c020db0d"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["images/tcp三次握手图.png","32ddd8df35bd5762604327b25758370e"],["images/tcp四次挥手图.png","684b2b4a0286acadc32247d693dbd961"],["images/test1/test1.jpg","60b725f10c9c85c70d97880dfe8191b3"],["images/title1.jpg","fa2db043867c4c5654471e21ad36e5c0"],["images/title2.jpg","b6e57860ebc3fcdcf150a6a4cf3402ab"],["images/title3.jpg","f0b1554cfa4dd1193719dcfeb9e4de28"],["images/title4.jpg","6eb7bcbb846d1123e830488d75028df7"],["index.html","93f9d6b476f6dd6782e4e468bb6700e3"],["js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["js/src/instantclick.js","865d92a4a07409b7fed739e6a108e9c4"],["js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["js/src/live2d.js","3359a94d733737dbdd290dd41f9cef0b"],["js/src/love.js","7bcfdb57debd43483174cf9e15ab37cc"],["js/src/love2.js","2b51ddac5207cba4153da31e9132414c"],["js/src/motion.js","706d085e6cfec6f3e92dedc590d68d68"],["js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["js/src/schemes/pisces.js","1bd23ed75238ebf11afe2aa6b1c3a25b"],["js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["js/src/utils.js","f06ffce70453ad3a4d9611fdde5ca6c3"],["lib/canvas-nest/canvas-nest.min.js","2361106788cc4ea719ed76f52b413e46"],["lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["live2d-widget/README.html","9941b5173b7915eb6158e62f02cd9ea3"],["live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["live2d-widget/autoload.js","fc45c81e48138bde62e7e742cbbdabb9"],["live2d-widget/demo/demo1.html","82a14d37dbd83931644a4ad6ea1f9eb2"],["live2d-widget/demo/demo2.html","6babb045ef6905badc0dbc5e0d98cede"],["live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["live2d-widget/waifu.css","c4dae5924f2fb0b5ea6ef26aaab80db9"],["page/2/index.html","f634e364dcfa494ce92661131c5e06b2"],["page/3/index.html","21f59dcc0a4a8cef7d6a2450b4c9091b"],["tags/awk/index.html","6a9a72498fe2ef92beceaab43055e831"],["tags/ceph/index.html","cc74257dde5c7c464c977b3f8b609d18"],["tags/cephfs/index.html","a2aa0babf8be71944573b08289260ba8"],["tags/cloud-native/index.html","ec4d58688f9e88e153be4e6103d039b5"],["tags/docker/index.html","fd265d25fe5be846f937076836d8cca4"],["tags/elasticsearch5/index.html","e21dd0cb2532e0cc1a6c396f06efffed"],["tags/elasticsearch7/index.html","326e11d646b58e73a42f63d44fd366bb"],["tags/elk/index.html","7172a6e25b6abe40d36d64efa09b5d63"],["tags/elk7/index.html","a3d99afb88f7a93cd7ebe4bf6ef77c12"],["tags/filebeat7/index.html","0ccfa89943325602b67b4a2b70b05ffb"],["tags/gor/index.html","5f51b79c12813b60f77e97ef651afdc2"],["tags/hexo6/index.html","cc49bce79059a3beb0e905e470e46e37"],["tags/hexo美化/index.html","b96f1e3fd4446f5b9dec64fb81ce1f39"],["tags/http流量复制工具/index.html","61b2f2b7244bb4fc369f8940c6b9cc0b"],["tags/index.html","55d10f6c3a4bd00ebc1cc4aee5a54b4d"],["tags/k8s/index.html","87a8ea8af2b20d139520e24f7659a93a"],["tags/k8s存储/index.html","5a4b93c5fe28b06e4a605d6320e7bd25"],["tags/linux/index.html","ce68c1ef7f33d427d012e599de895445"],["tags/logstash/index.html","5a0c1fa455997cdda7d1ed51a0b3efbd"],["tags/markdown/index.html","093d318ba03d2fd13901b251ef5fe1ef"],["tags/mysql/index.html","496d00a3a09c6acab89bcbfd48875589"],["tags/mysql5-7/index.html","20fa39fbba34691251b3f531656bb445"],["tags/nfs/index.html","d95e265ca7ff13e3ed9cc776bf19f3a8"],["tags/nginx/index.html","2ff71403d69a15efb791d07617b53fe8"],["tags/php7/index.html","f196a80bb7a7044f8ed6d81e858db7bf"],["tags/shell/index.html","ccee6de4be7d69dd08b1e930c3ffde6d"],["tags/storageclass/index.html","375f3ab8fb5bdb728b9145c57f9f3e4c"],["tags/云原生/index.html","013406b08bfc5a4c141ffce98eae398e"],["tags/大佬博客/index.html","3049202a981b5ad4c2cadd2fad548653"],["tags/收藏/index.html","bd2bc4c17243f2605073f4b050272085"],["tags/特效/index.html","ff230970e63ff9f8c9670b030e99ec67"],["tags/网址/index.html","7d5d1a5b8703561fbddd8d7fb90a9c2b"]];
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







