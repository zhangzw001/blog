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

var precacheConfig = [["2019/09/19/2-部署elk7-2-0/index.html","bdcae9557db3d107c0eeea3bb8de26e2"],["2019/09/19/首次搭建hexo博客系统/index.html","5632d96c7eefcc32c97320c5c8716f77"],["2019/09/20/3-k8s遇到的一些问题统计总结/index.html","43c1f0d66faa43e78b6692b7456659bd"],["2019/09/24/4-hexo鼠标移动和鼠标点击特效/index.html","5f264273c29824fed288aaffcef2a6ec"],["2019/09/24/5-hexo添加看板娘/index.html","92a24fbd5dee60de77cc4d1749957bb7"],["2019/09/26/6-ceph安装部署/index.html","1d50325a5e8c7933fc7185b3ccea9038"],["2019/09/26/7-k8s部署storageclass动态创建pv-nfs-rbd/index.html","584a35345bd68d2f8c3989e210fa7dcb"],["2019/09/26/8-mysql5-7二进制部署/index.html","b254c0d90a3d359a0c09a5585626a291"],["2019/09/26/9-linux遇到一些问题统计总结/index.html","999351458c615cb1d629ec3c71bb8214"],["2019/09/27/10-centos6安装nginx1-16-php7-2/index.html","137ba8f289f11b2f316678f946bc7f0d"],["2019/10/10/11-mysql简单记录/index.html","d9bea2480fd35b57209ce07aa461e2be"],["2019/10/11/12-awk简单记录/index.html","878d9761247ce6c9056050420663f627"],["2019/10/12/13-云原生博客汇总/index.html","8ff2895f284aeeb79eee9208554b76ac"],["2019/10/15/14-mysql目录copy方式迁移/index.html","48b0facb40f51a206e8778889b9773a0"],["2019/10/16/15-docker简介和使用/index.html","173166e93fce5db1cfa49f461d52f80b"],["2019/10/16/16-dockerfile介绍/index.html","bfdccfae14aa861bb20594a21f1546f2"],["2019/10/16/17-markdown一些写法记录/index.html","95c1a4d2e455c22802d91bf45acf4bb3"],["2019/10/17/18-收藏链接/index.html","802cdb0559ea7251ff6534a921d9d7d8"],["2019/10/17/19-shell中gt和-的区别/index.html","db7840ca7fd47cfe0f31d16ea4d54bad"],["2019/10/17/19-shell中gt和>的区别/index.html","2a09c6d720fd80ac00dcb65765aa0413"],["2019/10/24/20-k8s搭建mysql5-7-24主从/index.html","05b88c60669be819b0c53bcf490bbe8c"],["2019/10/28/21-流量复制工具gor/index.html","26cbf30d3449eb4ccb173937695a11b5"],["2019/10/28/22-es集群磁盘扩容/index.html","f151ae3e8bd344671b9512ecff06c12b"],["2019/10/29/23-mysql5-5主与mysql5-7从部署配置/index.html","9453f669aa1481b63c16e0f80324ef7e"],["2019/10/30/24-filebeat7收集mysql慢日志到es/index.html","17fd2f744027caf8b91d40e4ad9e7207"],["2019/11/01/25-一些脚本汇总/index.html","f320dadf6ddab5e0c5ebf8d634ca6e41"],["2019/11/08/26-logstash配置/index.html","97db8ac272a5d9743463bf287c09e802"],["2019/11/21/27-k8s一条命令部署es5-2-0集群/index.html","94c51a0baa6e8daf1d96d09e83203585"],["archives/2019/09/index.html","7ca3ba98febad9368b79ba31db21d476"],["archives/2019/10/index.html","d9013d51c87e0ca2e4273838c523d859"],["archives/2019/11/index.html","47de38dbb3c5f242ee92df58168a696e"],["archives/2019/index.html","5e1a35f3222f8ebf93389a39bb3c4648"],["archives/2019/page/2/index.html","9142f82484935a1a1d229d5d5369a5d9"],["archives/index.html","13f5ee99a3d4c91858f79b111ce94181"],["archives/page/2/index.html","fe57ac9b7a94544eebaaf83ad372e5fe"],["categories/docker/Dockerfile/index.html","d19179b2332bdae90945e9b5ed040f0f"],["categories/docker/index.html","0516480b9d201822c48b49c803756279"],["categories/elk/elasticsearch5/index.html","5efa91455de012aa2d90772bbaadb966"],["categories/elk/elasticsearch7/index.html","02c44c6f9ccaa36e61b70802bda8098f"],["categories/elk/index.html","0a2c490247aba90c2b7a10a90763e5fa"],["categories/elk/logstash/index.html","ecc7c8ab7967ccd8ca2a31e943c21c10"],["categories/elk7/filebeat7/index.html","bcd985c64916cfec4a28dec2fe88f7ee"],["categories/elk7/index.html","fd4d91a0482aa075589e87b0b592c91e"],["categories/index.html","41a471b97c7e2cf8198bad235a5a33f1"],["categories/k8s/elk7/index.html","c714c2307ab5128cedb904c7cc805232"],["categories/k8s/index.html","228ee0bd01c1308fb199bd40bf1ddb4c"],["categories/k8s/mysql/index.html","2a4ecf60e3096880f5f5def775e30d27"],["categories/k8s/storageclass/index.html","dafb3ee3cb47b436a814263433414683"],["categories/k8s/问题总结/index.html","9de27097b591369beace66bf2bfc04a9"],["categories/linux/awk/index.html","96c9d9692d12c2795b90d128b9348edd"],["categories/linux/index.html","f71eead3a6d2110771c70d8932f75edd"],["categories/linux/shell/index.html","3af9666ec36feffea148c1d440569660"],["categories/linux/问题总结/index.html","ecaaff51f72dde4a0e8b1d8249d471cd"],["categories/markdown/index.html","46ceb0df99e9754d77762a4612edab21"],["categories/mysql/index.html","26b00322aff7393cd752318bd5664dbc"],["categories/mysql/主从/index.html","edc7acd2b343610f1e10606731aeb19d"],["categories/nginx/index.html","1fa2798b88576980f42561539878602c"],["categories/博客/index.html","7442b08a06c3867f602891f6485ce3a2"],["categories/博客/美化/index.html","a205546184f88756d04f3286189c2504"],["categories/存储/ceph/index.html","2cd27fdb541b205e00420b923e292e6f"],["categories/存储/index.html","fee45cb08e12a1230ea99bca972f27ed"],["categories/存储/nfs/index.html","ad0b41f7d13a77c434c28fc2729ed734"],["categories/技术文档/index.html","6180166aef7c35cc1f9211f15a9b3687"],["categories/有趣/index.html","3598a79a331e265a8152211295a644e9"],["categories/有趣/二次元/index.html","0d99621fa23915e98c2cdec23ed2190e"],["categories/流量复制工具/gor/index.html","dab483f472744b380456e161b4b9718b"],["categories/流量复制工具/index.html","83552288d3fc7dec4fa04d0ccc2f484f"],["categories/网址/index.html","f8d6879388868a28562f53f71b7d131b"],["categories/网址/大佬博客/index.html","d329a04be7809c677d4431ea968e3eaa"],["categories/网址/收藏/index.html","c9f892caf8aecbb5b56a475e7245975a"],["css/main.css","e4806fe3735c3e19b9a567171f588af5"],["images/16/容器的原理-1.png","1c184a092af6b6829c49ee20e70d132a"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["images/blog6/rancher-pv.png","d2a7e4bbfad5f71e75c9d5459cf5a464"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/docker1.jpg","5c611dd864017adeff648bca93d53f41"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/jixie-title.jpg","3ebd10201e23ecf68aba4524c020db0d"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["images/tcp三次握手图.png","32ddd8df35bd5762604327b25758370e"],["images/tcp四次挥手图.png","684b2b4a0286acadc32247d693dbd961"],["images/test1/test1.jpg","60b725f10c9c85c70d97880dfe8191b3"],["images/title1.jpg","fa2db043867c4c5654471e21ad36e5c0"],["images/title2.jpg","b6e57860ebc3fcdcf150a6a4cf3402ab"],["images/title3.jpg","f0b1554cfa4dd1193719dcfeb9e4de28"],["images/title4.jpg","6eb7bcbb846d1123e830488d75028df7"],["index.html","46ea43685e8e9256e664c086e8ccb33e"],["js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["js/src/instantclick.js","865d92a4a07409b7fed739e6a108e9c4"],["js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["js/src/live2d.js","3359a94d733737dbdd290dd41f9cef0b"],["js/src/love.js","7bcfdb57debd43483174cf9e15ab37cc"],["js/src/love2.js","2b51ddac5207cba4153da31e9132414c"],["js/src/motion.js","706d085e6cfec6f3e92dedc590d68d68"],["js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["js/src/schemes/pisces.js","1bd23ed75238ebf11afe2aa6b1c3a25b"],["js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["js/src/utils.js","f06ffce70453ad3a4d9611fdde5ca6c3"],["lib/canvas-nest/canvas-nest.min.js","2361106788cc4ea719ed76f52b413e46"],["lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["live2d-widget/README.html","9941b5173b7915eb6158e62f02cd9ea3"],["live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["live2d-widget/autoload.js","fc45c81e48138bde62e7e742cbbdabb9"],["live2d-widget/demo/demo1.html","82a14d37dbd83931644a4ad6ea1f9eb2"],["live2d-widget/demo/demo2.html","6babb045ef6905badc0dbc5e0d98cede"],["live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["live2d-widget/waifu.css","c4dae5924f2fb0b5ea6ef26aaab80db9"],["page/2/index.html","ff4a0bdae503ac9c6fba7e7b93af4100"],["page/3/index.html","3aca328cbc02ae0ed98638afa20d1085"],["tags/awk/index.html","ccb1f1520a979ae97679d5402dd0ed59"],["tags/ceph/index.html","d78d9b88a8dd4bcd78754113926fa803"],["tags/cephfs/index.html","3c82133cd1ebbcf6d2669ce8f8c84e37"],["tags/cloud-native/index.html","9c3c6c3b75c3947f4923a13ac3fda6ec"],["tags/docker/index.html","5c19a822e8ba19505f0b40edcf485b26"],["tags/elasticsearch5/index.html","64807fbff0d5b5a698313d9f105bfd5c"],["tags/elasticsearch7/index.html","b7c79b699d5594df7ffafb197efed503"],["tags/elk/index.html","f22f408eda483283d32dd993c6c4e913"],["tags/elk7/index.html","386aa41c85f265596423032724e74ec5"],["tags/filebeat7/index.html","a778bffaa1d075b4edf1d5577d85828c"],["tags/gor/index.html","f4838a0ad73ddab99bd208deef761f41"],["tags/hexo6/index.html","246bbb7f25f49e95077f79b8ed24fdc9"],["tags/hexo美化/index.html","46bdb61b437606f79344784f3854974d"],["tags/http流量复制工具/index.html","418f253a35c729463cc61a68d2acca19"],["tags/index.html","ffef4fa5f8f9e035f6ad8eb8533c4be3"],["tags/k8s/index.html","db434e2445a1047ec69565196e784fef"],["tags/k8s存储/index.html","9b7be2b6550fc2a65529c9c40f080293"],["tags/linux/index.html","e49ecfc0561f50da1bb09f22db2720b5"],["tags/logstash/index.html","68ba27532eba09b8e79880856eac8b19"],["tags/markdown/index.html","9b9837ccf88d061d9de83c825ea478e9"],["tags/mysql/index.html","8f471e91ad91b8bc2bb409ee42f7cfe3"],["tags/mysql5-7/index.html","4b8fc8c307252e522bb776678e12b800"],["tags/nfs/index.html","b9daa6302d632ef0bb25d6905b31eb46"],["tags/nginx/index.html","6a5410d451c90236ba36ea2c11ad87a2"],["tags/php7/index.html","fc34b77aa54a96f846c865254ebab63e"],["tags/shell/index.html","7da43bf58fd6d91ec49b6cab10cf37e7"],["tags/storageclass/index.html","47c1b75a28a4d9e781940ab7dc040e9c"],["tags/云原生/index.html","fcab732e369a5846162936adf91f0543"],["tags/大佬博客/index.html","be8d8d830fcf94a8245f4ce6e66a04fc"],["tags/收藏/index.html","79bc20cebbcb8c90dd3f65053d272723"],["tags/特效/index.html","552e14f05afb285726eecb7ce8d22a24"],["tags/网址/index.html","9c99a1d0f03b8ef981a997d877809c9c"]];
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







