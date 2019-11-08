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

var precacheConfig = [["2019/09/19/2-部署elk7-2-0/index.html","334b4d730c68a75f0aff2f60f1dabb71"],["2019/09/19/首次搭建hexo博客系统/index.html","a9eeceb0c81b58a326f8ca45306826ff"],["2019/09/20/3-k8s遇到的一些问题统计总结/index.html","e77515c23a65f0c9e65cb9880c17004c"],["2019/09/24/4-hexo鼠标移动和鼠标点击特效/index.html","56558fe35cbee7c04eb0e87952a1ca81"],["2019/09/24/5-hexo添加看板娘/index.html","918eb435c18a31bda37b44c411fc741d"],["2019/09/26/6-ceph安装部署/index.html","1f7ee4ffdf91bd1e1bf6c90c7ab80622"],["2019/09/26/7-k8s部署storageclass动态创建pv-nfs-rbd/index.html","b632f6f6c41a3a4baea8268608c8baf9"],["2019/09/26/8-mysql5-7二进制部署/index.html","10f9e8c0ff71f4bb4b5b9ccd17d43c46"],["2019/09/26/9-linux遇到一些问题统计总结/index.html","bb49828c176f5c4a5934c18f9f1057bf"],["2019/09/27/10-centos6安装nginx1-16-php7-2/index.html","878c7e6eb10dc6626e8b83e3ccc80b5f"],["2019/10/10/11-mysql简单记录/index.html","bf2e8f4e0642896e5da040207019aae5"],["2019/10/11/12-awk简单记录/index.html","bcde25b38273a9780a9f02d7e533e619"],["2019/10/12/13-云原生博客汇总/index.html","947d2d087bcf5de6a4c0c6bd03ad5a3e"],["2019/10/15/14-mysql目录copy方式迁移/index.html","a8702676ae66401260a62a852316ad20"],["2019/10/16/15-docker简介和使用/index.html","ef6e6ccf8bc17a79d783d70422f3fa2c"],["2019/10/16/16-dockerfile介绍/index.html","e284ba23a5dd838b9bac1edac09138cf"],["2019/10/16/17-markdown一些写法记录/index.html","c2eb6460e884a5ca3e37eb54250ee9f3"],["2019/10/17/18-收藏链接/index.html","9bb2451a708ecd539636d927f057a066"],["2019/10/17/19-shell中gt和>的区别/index.html","86be7ccaa74b3a052778c38c55f149f0"],["2019/10/24/20-k8s搭建mysql5-7-24主从/index.html","401db409d00a4a2ba7912c105f0e71e7"],["2019/10/28/21-流量复制工具gor/index.html","31c2b791434b6135dff60b508de3a401"],["2019/10/28/22-es集群磁盘扩容/index.html","f16a449ee84dadc3d0b4162c503e8cda"],["2019/10/29/23-mysql5-5主与mysql5-7从部署配置/index.html","5803b3e0899924e6c3e115d34a1655dd"],["2019/10/30/24-filebeat7收集mysql慢日志到es/index.html","0facd6c8dc3e51b09ddc1f6e8527e7e3"],["2019/11/01/25-一些脚本汇总/index.html","733c1dd86168960294c210f2e6ee602f"],["2019/11/08/26-logstash配置/index.html","fc2f3777102e956f1dd0e59440ca9a14"],["archives/index.html","ad8d89ec7b0e1acc5fa3256df5fa563e"],["categories/docker/Dockerfile/index.html","7b4ba552e762288e3874671b1d64217d"],["categories/docker/index.html","729d9d4b8ad9caa2a1c34c779bd4cc4b"],["categories/elk/elasticsearch5/index.html","d7bb22f6c832d6f114f7a83c3c9634a2"],["categories/elk/elasticsearch7/index.html","f6571e6ded260f5f889207932c18b553"],["categories/elk/index.html","e667c199b91bcc24798aa39abef4b800"],["categories/elk7/filebeat7/index.html","95c5e8fa5c0522693e596ef35f572429"],["categories/elk7/index.html","f22438389389629a9799c70e27bf1286"],["categories/index.html","df8233af03a6d86b7cd931333baf8bc2"],["categories/k8s/elk7/index.html","db3bc5ca20497c7a22ed4bf289381af1"],["categories/k8s/index.html","1696f923462dc1bbc89cea6176c79d9c"],["categories/k8s/mysql/index.html","209d7465439d4cbb21b28a031c6becf7"],["categories/k8s/storageclass/index.html","54653dfed9d0fb0b85322960852ad1e9"],["categories/k8s/问题总结/index.html","a3c04a54dd70f98b1648f3260a52c4ca"],["categories/linux/awk/index.html","cae6380ca2822f9260896c72e5fe7380"],["categories/linux/index.html","ae3b641ce33c7177e0a5f6164a64fbf5"],["categories/linux/shell/index.html","967c0caeffa21595d5c718bfcdb5f929"],["categories/linux/问题总结/index.html","f7dee0f213dd528a9b4c9d4e60442998"],["categories/markdown/index.html","055142e48846fad6e0437ae3af362518"],["categories/mysql/index.html","db572299f86ecf9260187ed453670f4e"],["categories/mysql/主从/index.html","c3800797385f864f0c74b8707eb1a9d0"],["categories/nginx/index.html","740431f929c16ff8ce99a540c9937af7"],["categories/博客/index.html","6803ce48051e001a1bfb2d80dfe8d6a6"],["categories/博客/美化/index.html","b07273bb8b548e84b3eb4f29727baf4f"],["categories/存储/ceph/index.html","233ce3ad580eb16e475e6874e5d1afa1"],["categories/存储/index.html","e5e74ae50996a6adf73af1384dde6c13"],["categories/存储/nfs/index.html","9a21e01c14290af4b84fd6b7076729ea"],["categories/技术文档/index.html","35d3f8ad45eb0cabedb1a3be1eaa8a87"],["categories/有趣/index.html","819b8d90e8d8e9e2332c38478751bf05"],["categories/有趣/二次元/index.html","f68319165510c7e2bb13a1cf87e0e07a"],["categories/流量复制工具/gor/index.html","b9a2718aa7a95323c833ea80e375f139"],["categories/流量复制工具/index.html","977f384a10359f9a916df0f7f060cd66"],["categories/网址/index.html","953e176392aeadb2907381e4330e9f35"],["categories/网址/大佬博客/index.html","fbd6dc9bc16c2cebae4c58151d008d6c"],["categories/网址/收藏/index.html","619a14480d2900e3b431c5ffa6a1097a"],["css/main.css","e88cd8df20b925b46349944205ed7cef"],["images/16/容器的原理-1.png","1c184a092af6b6829c49ee20e70d132a"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["images/blog6/rancher-pv.png","d2a7e4bbfad5f71e75c9d5459cf5a464"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/docker1.jpg","5c611dd864017adeff648bca93d53f41"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/jixie-title.jpg","3ebd10201e23ecf68aba4524c020db0d"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["images/tcp三次握手图.png","32ddd8df35bd5762604327b25758370e"],["images/tcp四次挥手图.png","684b2b4a0286acadc32247d693dbd961"],["images/test1/test1.jpg","60b725f10c9c85c70d97880dfe8191b3"],["images/title1.jpg","fa2db043867c4c5654471e21ad36e5c0"],["images/title2.jpg","b6e57860ebc3fcdcf150a6a4cf3402ab"],["images/title3.jpg","f0b1554cfa4dd1193719dcfeb9e4de28"],["images/title4.jpg","6eb7bcbb846d1123e830488d75028df7"],["index.html","05cf2bacc9db53a1463e7be3ae0381d5"],["js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["js/src/instantclick.js","865d92a4a07409b7fed739e6a108e9c4"],["js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["js/src/live2d.js","3359a94d733737dbdd290dd41f9cef0b"],["js/src/love.js","7bcfdb57debd43483174cf9e15ab37cc"],["js/src/love2.js","2b51ddac5207cba4153da31e9132414c"],["js/src/motion.js","706d085e6cfec6f3e92dedc590d68d68"],["js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["js/src/schemes/pisces.js","1bd23ed75238ebf11afe2aa6b1c3a25b"],["js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["js/src/utils.js","f06ffce70453ad3a4d9611fdde5ca6c3"],["lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["live2d-widget/README.html","9941b5173b7915eb6158e62f02cd9ea3"],["live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["live2d-widget/autoload.js","fc45c81e48138bde62e7e742cbbdabb9"],["live2d-widget/demo/demo1.html","82a14d37dbd83931644a4ad6ea1f9eb2"],["live2d-widget/demo/demo2.html","6babb045ef6905badc0dbc5e0d98cede"],["live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["live2d-widget/waifu.css","c4dae5924f2fb0b5ea6ef26aaab80db9"],["page/2/index.html","8d9abfb6ade28a810301ad53dcfd3e29"],["page/3/index.html","f9e56b24a122ea84732052e0f1c39cac"],["tags/awk/index.html","baf675d8c65c17881c47b01e57ed507a"],["tags/ceph/index.html","24263f1640f933218572672a4708a86b"],["tags/cephfs/index.html","df46827e3fe9d942685fd22618af9467"],["tags/cloud-native/index.html","e008d0bcba40ee65aaed14859a586236"],["tags/docker/index.html","5c1c7c56505cc2f1e74d609cfd45150b"],["tags/elasticsearch5/index.html","ca0fc757273629f631c69d5a1dc3b552"],["tags/elasticsearch7/index.html","34de464071d57caafed543df1a34a6a2"],["tags/elk/index.html","67e379dbd96dc46cc0bee8c51379cb76"],["tags/elk7/index.html","9ad6f5309bf482a8e0342486a80fb66a"],["tags/filebeat7/index.html","bbd89791bb050fa0ad28c677a8d1076e"],["tags/gor/index.html","a54b5ee227506bb4a2072a69c159dbcd"],["tags/hexo6/index.html","adf038bc1a8ed7692787891a6ed5519b"],["tags/hexo美化/index.html","6936fe9d4cbfbb3e025427ccbb545ae7"],["tags/http流量复制工具/index.html","67fd2e0de8c9177d362f946c951a9c1d"],["tags/index.html","42d755a6b38d3830ba147866baad45a2"],["tags/k8s/index.html","1f6fb011a72397be9483d135d3c58c88"],["tags/k8s存储/index.html","6df110db61ea28cb36b44df041f5813a"],["tags/linux/index.html","143c2d0070a96e40ed625e8f41cd4e03"],["tags/markdown/index.html","367aba3000bc7606e55403c26bb891b6"],["tags/mysql/index.html","35aa159c77f96a96b761f72ca77d1e53"],["tags/mysql5-7/index.html","95922af59b9fc029fc8e756e8a0660d5"],["tags/nfs/index.html","a3db8087e2566f0ef57a5503c9ed2b0f"],["tags/nginx/index.html","ffff1c3a899883004fad787d6317e605"],["tags/php7/index.html","dbcbee2039a57f001a02ae4a1940f08d"],["tags/shell/index.html","a2aef123460565aa4b541a1f5012fd6c"],["tags/storageclass/index.html","6adc2fd432ff5485a721c2b86d3a729a"],["tags/云原生/index.html","e4d00b2360bde0b33b725958efe2324e"],["tags/大佬博客/index.html","4dd96d206ed6ecf6e0e40c5be97b61fa"],["tags/收藏/index.html","fe9560ac6085f1131b8833f2de520132"],["tags/特效/index.html","b4c3c111c5b1c196e21323944f3718d0"],["tags/网址/index.html","d80698f14760b49ad593de1d7c7af547"]];
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







