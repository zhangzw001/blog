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

var precacheConfig = [["2019/09/19/2-部署elk7-2-0/index.html","ee34018060ad05729efdd678ec2598eb"],["2019/09/19/首次搭建hexo博客系统/index.html","037bb93c1e94f76b34747d5bfa57cd01"],["2019/09/20/3-k8s遇到的一些问题统计总结/index.html","372a96abe278d0aa0abf420e7b0fc4d0"],["2019/09/24/4-hexo鼠标移动和鼠标点击特效/index.html","ec23772ff2a58b672b8f61620329cb79"],["2019/09/24/5-hexo添加看板娘/index.html","f613ea3a70d505f8da8f413bce6020d1"],["2019/09/26/6-ceph安装部署/index.html","572c1d385ca918e284beaa7ede01c043"],["2019/09/26/7-k8s部署storageclass动态创建pv-nfs-rbd/index.html","8d4563f159b9c9cfe24955770ae90090"],["2019/09/26/8-mysql5-7二进制部署/index.html","58227276cb4c32104e719f53aecec494"],["2019/09/26/9-linux遇到一些问题统计总结/index.html","01af45186713b5500aa937ebb8ae47c5"],["2019/09/27/10-centos6安装nginx1-16-php7-2/index.html","c7a99ce9117a5e712607cbc7af44c2a4"],["2019/10/10/11-mysql简单记录/index.html","84058e406b48d7fab00d1834289ac4b1"],["2019/10/11/12-awk简单记录/index.html","7f47084fec256848d2a28843f0e7ad97"],["2019/10/12/13-云原生博客汇总/index.html","3f994b855269e342848b59fc253b4ec3"],["2019/10/15/14-mysql目录copy方式迁移/index.html","ced396a8cfd9d705d3c1d9bb1aa9c407"],["2019/10/16/15-docker简介和使用/index.html","e9384003d61432a58822eae1172a0176"],["2019/10/16/16-dockerfile介绍/index.html","0cd7d8c7cdccf33cad9c6dc3e52aa9b0"],["2019/10/16/17-markdown一些写法记录/index.html","fbea9b641b6020b07f1879c17bc24618"],["2019/10/17/18-收藏链接/index.html","caa58939e6b15a3466f59cacbaed32d8"],["2019/10/17/19-shell中gt和>的区别/index.html","9afa77c8d63a9be81eea1f149bf74143"],["2019/10/24/20-k8s搭建mysql5-7-24主从/index.html","fe612d1d3dc99bbd414a86803ef0cf07"],["2019/10/28/21-流量复制工具gor/index.html","254ee319ee83f3274510e1d2f2798883"],["2019/10/28/22-es集群磁盘扩容/index.html","448e21cce92a1f4656f06cf44e58ca79"],["2019/10/29/23-mysql5-5主与mysql5-7从部署配置/index.html","483db913d1d3c894c1153bab675fafb5"],["2019/10/30/24-filebeat7收集mysql慢日志到es/index.html","9784e6dbb5749d0b07f35cbf4d94f0c1"],["2019/11/01/25-一些脚本汇总/index.html","bc9dc3b875d6c899d38b079cde4bab20"],["2019/11/08/26-logstash配置/index.html","fc8791eef903ebdb0f73f7c941b29372"],["archives/index.html","e0bd0e272e59cbc434f51fa5ce27b200"],["categories/docker/Dockerfile/index.html","a01321294cf5e27029d7c6818be0e6e3"],["categories/docker/index.html","2e0342712292009edb8e8d1feede0956"],["categories/elk/elasticsearch5/index.html","c74a754a8675b95228cfbb162bd500c6"],["categories/elk/elasticsearch7/index.html","86ef15e6baf01701a8dee290ba580b10"],["categories/elk/index.html","aed2f3a26f6dbedaccbd9f7859ab1216"],["categories/elk/logstash/index.html","59e9991a1268a5b95fdf8f58f9dfb023"],["categories/elk7/filebeat7/index.html","e206f46d1946c76ae6a39cdb1a0f9eaa"],["categories/elk7/index.html","87415fc35bd2eb97614345076759a74f"],["categories/index.html","eb6b09e647fa2c8944eaa868cbe5ea03"],["categories/k8s/elk7/index.html","61fce861ef71cf34a5b686755c5bbc80"],["categories/k8s/index.html","62e90cfc7e7c4f7b45de7ef8136cbab1"],["categories/k8s/mysql/index.html","ef7820f7dcb10f09528b1789610bc6aa"],["categories/k8s/storageclass/index.html","72dd27be91497b129ade78d7967a56c1"],["categories/k8s/问题总结/index.html","9855065f6f36ab90b733ef23f5f20758"],["categories/linux/awk/index.html","4205b392a2743701440cac955c5f7d79"],["categories/linux/index.html","e5ed70d8a89ec35d38cc9e3041cf6f32"],["categories/linux/shell/index.html","1bdc87a64cd85592e50306567d48a4a6"],["categories/linux/问题总结/index.html","e097f590216636944db05d2f79ebc5ba"],["categories/markdown/index.html","eff6fda1bff8e8247ffa07aeaf9b2648"],["categories/mysql/index.html","a5c3dc610502adedb9363549f8bb88d5"],["categories/mysql/主从/index.html","d96c57996ce94b1ac9cea29324f65bfc"],["categories/nginx/index.html","e08e21b9890ed0d43ae7d0d68e4c7795"],["categories/博客/index.html","142102cab1a4c02bbd4bb7cae889cf7a"],["categories/博客/美化/index.html","5098621c2e7e00a152978674c071b262"],["categories/存储/ceph/index.html","2cb8d8ca0dee0a7d8869369e7f4a87ec"],["categories/存储/index.html","582cf1c5a6cb3bbeacbfb8f3ebe0e694"],["categories/存储/nfs/index.html","00680c7a3d2beecbf5ca283860398d81"],["categories/技术文档/index.html","4f52fe9be758f02eaa0c1bb8e269a3ef"],["categories/有趣/index.html","fd915558fd6d4de9af51b6df95063d77"],["categories/有趣/二次元/index.html","b98745f7422ac4b7d0b00dbc04878be7"],["categories/流量复制工具/gor/index.html","87d14fb6b678f2a933ec1928e91a186e"],["categories/流量复制工具/index.html","527b3c06f587b0f41ffc5e154e47a182"],["categories/网址/index.html","33bd4b4a19976b2d7d8e20ceddcc7850"],["categories/网址/大佬博客/index.html","f1c9e6186874348cb2f55d8c4b95bb95"],["categories/网址/收藏/index.html","4b2854dae6016380e74f24dbfdb86d18"],["css/main.css","d1734008fce00ab504b5be6bdb4a557e"],["images/16/容器的原理-1.png","1c184a092af6b6829c49ee20e70d132a"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["images/blog6/rancher-pv.png","d2a7e4bbfad5f71e75c9d5459cf5a464"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/docker1.jpg","5c611dd864017adeff648bca93d53f41"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/jixie-title.jpg","3ebd10201e23ecf68aba4524c020db0d"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["images/tcp三次握手图.png","32ddd8df35bd5762604327b25758370e"],["images/tcp四次挥手图.png","684b2b4a0286acadc32247d693dbd961"],["images/test1/test1.jpg","60b725f10c9c85c70d97880dfe8191b3"],["images/title1.jpg","fa2db043867c4c5654471e21ad36e5c0"],["images/title2.jpg","b6e57860ebc3fcdcf150a6a4cf3402ab"],["images/title3.jpg","f0b1554cfa4dd1193719dcfeb9e4de28"],["images/title4.jpg","6eb7bcbb846d1123e830488d75028df7"],["index.html","db839691f19de4c15a421588738478f5"],["js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["js/src/instantclick.js","865d92a4a07409b7fed739e6a108e9c4"],["js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["js/src/live2d.js","3359a94d733737dbdd290dd41f9cef0b"],["js/src/love.js","7bcfdb57debd43483174cf9e15ab37cc"],["js/src/love2.js","2b51ddac5207cba4153da31e9132414c"],["js/src/motion.js","706d085e6cfec6f3e92dedc590d68d68"],["js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["js/src/schemes/pisces.js","1bd23ed75238ebf11afe2aa6b1c3a25b"],["js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["js/src/utils.js","f06ffce70453ad3a4d9611fdde5ca6c3"],["lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["live2d-widget/README.html","9941b5173b7915eb6158e62f02cd9ea3"],["live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["live2d-widget/autoload.js","fc45c81e48138bde62e7e742cbbdabb9"],["live2d-widget/demo/demo1.html","82a14d37dbd83931644a4ad6ea1f9eb2"],["live2d-widget/demo/demo2.html","6babb045ef6905badc0dbc5e0d98cede"],["live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["live2d-widget/waifu.css","c4dae5924f2fb0b5ea6ef26aaab80db9"],["page/2/index.html","e423224fcabe96c4192ebf554193b1aa"],["page/3/index.html","1693a36c4aca36f3771ec7366ca12410"],["tags/awk/index.html","5c509ac9d92b575f07c98d48917f5ae7"],["tags/ceph/index.html","3337b6becac3f2481ae58e7cba535414"],["tags/cephfs/index.html","74d1bec65833088e42a9eae3bf4f34d3"],["tags/cloud-native/index.html","4f5948a14de50c35354ede860b33b345"],["tags/docker/index.html","ccd018570bae6c3fb089e7dab286644e"],["tags/elasticsearch5/index.html","8cff57e49ba915181e86c9eeeefd7bd6"],["tags/elasticsearch7/index.html","5ec2612da647c541c462ecc359d0c032"],["tags/elk/index.html","676e52c858467043f59105a3d9060f21"],["tags/elk7/index.html","a284904635947a402e5d8e90151bc06d"],["tags/filebeat7/index.html","f0a1e74406bdf397dc670b30ad448fd4"],["tags/gor/index.html","5bed85e4999e717c7b9a8210ffb9dd83"],["tags/hexo6/index.html","dbd0784f2d74d56f5a9c46e298ea3d46"],["tags/hexo美化/index.html","2fffe7f005b8a7e76c3f54eceaa1db70"],["tags/http流量复制工具/index.html","de6cb3c40af792e87aac9e61fe7cdc5c"],["tags/index.html","0ca748e21ac90548252d3956052d6bfb"],["tags/k8s/index.html","95e87513a92b4df59e3c8e5b37204881"],["tags/k8s存储/index.html","967f0dc9b58d8f9e62ecd552fa1a54a4"],["tags/linux/index.html","0dcb1cf0cb06a7b90f3f5878f55408d9"],["tags/logstash/index.html","df69b69ab55809338cbfe99680bed615"],["tags/markdown/index.html","0af829ef48bf0c7921c4b54b71674c6f"],["tags/mysql/index.html","9ad9151f272c8ce97e336438f0f64850"],["tags/mysql5-7/index.html","c0a3c1b79c48b53914b1a72bc801df72"],["tags/nfs/index.html","e1d8067f114d649894eb6a91d6a168c1"],["tags/nginx/index.html","c9fa4361ca5d758792fecd3744b919a8"],["tags/php7/index.html","833361d6ac868b8f55802e733542e6a4"],["tags/shell/index.html","701fefe70d1d7bfc0fcd839f4dac3586"],["tags/storageclass/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/云原生/index.html","7e2d4175df68d6906b1a20766ad985d3"],["tags/大佬博客/index.html","ede3907c97939d9ad92082efa63d2c61"],["tags/收藏/index.html","243db87276a2ba3f3742199c24b89d8c"],["tags/特效/index.html","3a17e271eb216952f9183f5473ae9e05"],["tags/网址/index.html","6aba600ad2b1319be63e0f4f4e644a2a"]];
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







