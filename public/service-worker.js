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

var precacheConfig = [["2019/09/19/2-部署elk7-2-0/index.html","f4866f21c47e0bbf0ad36d4b6352a548"],["2019/09/19/首次搭建hexo博客系统/index.html","70e07bb8853bb50b33fe46a4ce203e23"],["2019/09/20/3-k8s遇到的一些问题统计总结/index.html","a87d03cb0974a5e8bdcb79730a0cc34c"],["2019/09/24/4-hexo鼠标移动和鼠标点击特效/index.html","a42d7e2d53e6fe0aaa63eb6e660c64a9"],["2019/09/24/5-hexo添加看板娘/index.html","96657b8d7601bf279c8002e6d77910d2"],["2019/09/26/6-ceph安装部署/index.html","439f1449aee9b121a1a4a270a2459e24"],["2019/09/26/7-k8s部署storageclass动态创建pv-nfs-rbd/index.html","7d3b870b15e5bea3fdf1cc9417aad97e"],["2019/09/26/8-mysql5-7二进制部署/index.html","e1d1adead27e003d16d47df6fe192e8d"],["2019/09/26/9-linux遇到一些问题统计总结/index.html","f1af90e7dfd216622d7cef72ce830991"],["2019/09/27/10-centos6安装nginx1-16-php7-2/index.html","d7286b484e5788dbbd9a13b2c7187a53"],["2019/10/10/11-mysql简单记录/index.html","4e76e6c22722b9c3f81ee00b6875419f"],["2019/10/11/12-awk简单记录/index.html","ab765b4edf14431ef0c37ee124d74632"],["2019/10/12/13-云原生博客汇总/index.html","aba2f99f66fd7dc5938d5a87eb5dedf0"],["2019/10/15/14-mysql目录copy方式迁移/index.html","ff65edd347dbdce0575f0d17a7d4fb3a"],["2019/10/16/15-docker简介和使用/index.html","36242a23713be81e848a1e07cc9488e5"],["2019/10/16/16-dockerfile介绍/index.html","1e22f1ad32c39eb24d07dc9783eecc33"],["2019/10/16/17-markdown一些写法记录/index.html","a8bb0aee038549a6fcd5d8776b934952"],["2019/10/17/18-收藏链接/index.html","fcfd7a766d52940b69e5e983d7ea1dcc"],["2019/10/17/19-shell中gt和>的区别/index.html","dc875f165ceb6e25a4ebbc3fba12f31f"],["2019/10/24/20-k8s搭建mysql5-7-24主从/index.html","914ae4930fe7256bdf4c3f80fa0383e3"],["2019/10/28/21-流量复制工具gor/index.html","e8fc158aabc98f7b2d7e68ebe5247c17"],["2019/10/28/22-es集群磁盘扩容/index.html","263a6d22aa15cd8bc8f990d3cab99d54"],["2019/10/29/23-mysql5-5主与mysql5-7从部署配置/index.html","42bb19d3bd2bc7be27f9e8d7ced336b1"],["2019/10/30/24-filebeat7收集mysql慢日志到es/index.html","9c6760c96eb2f1463bb015912dd885ec"],["archives/index.html","80fd87e4510ca571819c8f77cbdefdca"],["categories/docker/Dockerfile/index.html","b12662ffeccf127c21995638955112b5"],["categories/docker/index.html","80f5d8b895220df1ab2c02c9e6ea9a2c"],["categories/elk/elasticsearch5/index.html","1f8f5ce227be32263c3ac98bbba1d124"],["categories/elk/elasticsearch7/index.html","a3e5aa201f6454d6a1231c1ab792e483"],["categories/elk/index.html","f0b00c84c3607ed80f2110e70ffac5fe"],["categories/index.html","604304304f7f9aff5282c2d7d53f77ee"],["categories/k8s/elk7/index.html","83079486c15575011fbc871ac3f8c7fd"],["categories/k8s/index.html","e0f97eb5a04fbf127826cd85619b5bad"],["categories/k8s/mysql/index.html","59e9011b004e310eb2e7d7e2bfbc733c"],["categories/k8s/storageclass/index.html","47e8439dcc0341f852da5fcdf8124641"],["categories/k8s/问题总结/index.html","3f5fc8ed26b9d3b74b6522b5b83b4d02"],["categories/linux/awk/index.html","07ecc655a9c400d9dcec53d88002b7d7"],["categories/linux/index.html","ebc510bfbdd95d9d7cbedbff52583bbb"],["categories/linux/shell/index.html","56bfa0967eb92d90150651e0dda4e0b0"],["categories/linux/问题总结/index.html","e46039dafa1ad785b51c3ad8d3b486b5"],["categories/markdown/index.html","c111e3175b62c42d56d0b7b9b22de162"],["categories/mysql/index.html","9b40707ad36f2cf15d1fd8aa2a284699"],["categories/mysql/主从/index.html","6e702e202d43b8603f2048efa9c0450e"],["categories/nginx/index.html","c3b48954e2e01717151aca0c268ba8d1"],["categories/博客/index.html","f5fbcb40dfa0da4b2412b3b623ef5b96"],["categories/博客/美化/index.html","744de6715775d9ea9f29b597b1d6a46b"],["categories/存储/ceph/index.html","998bca53d71918b743dcbd939a2e5926"],["categories/存储/index.html","24272ba4dfd57e4614e70e4db7e06607"],["categories/存储/nfs/index.html","50f19f6736f70cd1925e3d93761ca6be"],["categories/技术文档/index.html","dc209e063259d9ce460bddf680c7e356"],["categories/有趣/index.html","69cfb75559cb7a6f0a762b08c08f569f"],["categories/有趣/二次元/index.html","733c9749ae988c123551259ed54a3475"],["categories/流量复制工具/gor/index.html","6e43e5f395b2d258f7971695abc96f6a"],["categories/流量复制工具/index.html","79384972e7139e118a5f63097d67037f"],["categories/网址/index.html","978e203932e789491e71baf93f7ff6aa"],["categories/网址/大佬博客/index.html","38a9920fc31dd999e49d94963ed6618f"],["categories/网址/收藏/index.html","e9595885233cffaaf7078a58d4418c5f"],["css/main.css","42e20e64d1acb50475bed11804e4565a"],["images/16/容器的原理-1.png","1c184a092af6b6829c49ee20e70d132a"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["images/blog6/rancher-pv.png","d2a7e4bbfad5f71e75c9d5459cf5a464"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/docker1.jpg","5c611dd864017adeff648bca93d53f41"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/jixie-title.jpg","3ebd10201e23ecf68aba4524c020db0d"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["images/tcp三次握手图.png","32ddd8df35bd5762604327b25758370e"],["images/tcp四次挥手图.png","684b2b4a0286acadc32247d693dbd961"],["images/test1/test1.jpg","60b725f10c9c85c70d97880dfe8191b3"],["images/title1.jpg","fa2db043867c4c5654471e21ad36e5c0"],["images/title2.jpg","b6e57860ebc3fcdcf150a6a4cf3402ab"],["images/title3.jpg","f0b1554cfa4dd1193719dcfeb9e4de28"],["images/title4.jpg","6eb7bcbb846d1123e830488d75028df7"],["index.html","7d2cb10b9c3a77bd2af541d330fc4c4a"],["js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["js/src/instantclick.js","865d92a4a07409b7fed739e6a108e9c4"],["js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["js/src/live2d.js","3359a94d733737dbdd290dd41f9cef0b"],["js/src/love.js","7bcfdb57debd43483174cf9e15ab37cc"],["js/src/love2.js","2b51ddac5207cba4153da31e9132414c"],["js/src/motion.js","706d085e6cfec6f3e92dedc590d68d68"],["js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["js/src/schemes/pisces.js","1bd23ed75238ebf11afe2aa6b1c3a25b"],["js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["js/src/utils.js","f06ffce70453ad3a4d9611fdde5ca6c3"],["lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["live2d-widget/README.html","9941b5173b7915eb6158e62f02cd9ea3"],["live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["live2d-widget/autoload.js","fc45c81e48138bde62e7e742cbbdabb9"],["live2d-widget/demo/demo1.html","82a14d37dbd83931644a4ad6ea1f9eb2"],["live2d-widget/demo/demo2.html","6babb045ef6905badc0dbc5e0d98cede"],["live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["live2d-widget/waifu.css","c4dae5924f2fb0b5ea6ef26aaab80db9"],["page/2/index.html","ea926ca2f8153edbf7b5a01fd114d204"],["page/3/index.html","a2c8660937923ef71151bc60839e9be1"],["tags/awk/index.html","4301bd7a25d2000b5de72f5cf17cd6ab"],["tags/ceph/index.html","8a50968b3160e72b87fb29d0612a8395"],["tags/cephfs/index.html","1e9a837d61f29fae93e40e3f6263b350"],["tags/cloud-native/index.html","107c4438ccb15f847a10b6d94f265412"],["tags/docker/index.html","c83990aa54556b864617d2417f21930f"],["tags/elasticsearch5/index.html","779b8817c9465bdaf96085eb46db400e"],["tags/elasticsearch7/index.html","92de7407bed5b4f6e589675cf2befd36"],["tags/elk/index.html","4fed845833f0c0468e7bce06fec071ee"],["tags/elk7/index.html","826d3bc7aa255e924a62207cdc3e55c4"],["tags/gor/index.html","8b39e48f88fbc45fdd67742c38491b4d"],["tags/hexo6/index.html","a38741776684abcbdfbf0ec77c17bf68"],["tags/hexo美化/index.html","c25b96c06df5ce510449ae0699b3fa7f"],["tags/http流量复制工具/index.html","51850a4ee81dc18d0dce426fe0b129ec"],["tags/index.html","ae814b893dd257920e4fbfc1bf8c15d9"],["tags/k8s/index.html","a12b376527ec40d85dcd057701894b00"],["tags/k8s存储/index.html","85dc7f6b2f868d7f9b95e82ba6bdc84b"],["tags/linux/index.html","f56a6b8bde5556c1012f943dd38b459f"],["tags/markdown/index.html","e746af36a1539cf4b6c2b74cadeb38a2"],["tags/mysql/index.html","0b72e6df5c9393f0a5291c1ba1ea7ef9"],["tags/mysql5-7/index.html","e530e85f667668260dad449762126089"],["tags/nfs/index.html","3f9fc055e30f4582738c981b609c6253"],["tags/nginx/index.html","4b23c9a3156b6f92daebb245ea0a4c5c"],["tags/php7/index.html","0e2e9d162bc66326b5b9e204f5ca8158"],["tags/shell/index.html","8e0a6d0e19e31fbbe456d855fe495c4b"],["tags/storageclass/index.html","a8874fe62eafe556724d61d1a61943b1"],["tags/云原生/index.html","0ea8dd9948c12055b99c5c6c78b0fc3c"],["tags/大佬博客/index.html","657d6cae4b64e82d9ab4c56b30bd25d2"],["tags/收藏/index.html","7d9cb95e50970e51e44d10a3326926e9"],["tags/特效/index.html","d1bd75aa1e91bcdeb3f586db3cbcb6e1"],["tags/网址/index.html","d9b28939912a2887bcf5908d09335b52"]];
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







