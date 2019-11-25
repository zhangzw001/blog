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

var precacheConfig = [["2019/09/19/2-部署elk7-2-0/index.html","e8f7f9d331188e2221bfb6f6927028e8"],["2019/09/19/首次搭建hexo博客系统/index.html","1caddf6e9d91b613a78b8baba442ab19"],["2019/09/20/3-k8s遇到的一些问题统计总结/index.html","096961b821710488be921107f94b9715"],["2019/09/24/4-hexo鼠标移动和鼠标点击特效/index.html","556954cc8e6eb879e0871bf01974deb0"],["2019/09/24/5-hexo添加看板娘/index.html","a88a635f6b4177665e5f5e8b20d7b556"],["2019/09/26/6-ceph安装部署/index.html","7f47dd658ed6523654b507e19ed6ec7a"],["2019/09/26/7-k8s部署storageclass动态创建pv-nfs-rbd/index.html","79896aa6de83a2d9604e85c59d51e5ad"],["2019/09/26/8-mysql5-7二进制部署/index.html","e3d0933c02cd695b4f7c2e455dba7125"],["2019/09/26/9-linux遇到一些问题统计总结/index.html","4758397202320428fe9584478bace3db"],["2019/09/27/10-centos6安装nginx1-16-php7-2/index.html","6d5c74bf18921faeb29b5fd03ee18d16"],["2019/10/10/11-mysql简单记录/index.html","fba4830f976f67a37d57ac102a030ecd"],["2019/10/11/12-awk简单记录/index.html","87e207d40f690c1eb7a73b494d3d0200"],["2019/10/12/13-云原生博客汇总/index.html","1ba92ea8ab830883aae683396729c295"],["2019/10/15/14-mysql目录copy方式迁移/index.html","f9a58d4dc3dfe0589f96dad7991280fc"],["2019/10/16/15-docker简介和使用/index.html","923520c012e5c4694212c1671bba2aef"],["2019/10/16/16-dockerfile介绍/index.html","3c7434c39b00bf387dc6d51d5b02efd5"],["2019/10/16/17-markdown一些写法记录/index.html","4a4a88c261b6a29495a77bb32cbd3db8"],["2019/10/17/18-收藏链接/index.html","34486f6c738a52b3ea26fefb72158ee3"],["2019/10/17/19-shell中gt和>的区别/index.html","ee6fff894c13feb6ad72353870b72921"],["2019/10/24/20-k8s搭建mysql5-7-24主从/index.html","f702d5d05b92b80f09990f3922e72b85"],["2019/10/28/21-流量复制工具gor/index.html","5ce3e0b9b563853e701aa7d851cfc7e1"],["2019/10/28/22-es集群磁盘扩容/index.html","522b404853d0207ab91c467844750872"],["2019/10/29/23-mysql5-5主与mysql5-7从部署配置/index.html","434c4f50c5d7c1e462da7c300295aa3d"],["2019/10/30/24-filebeat7收集mysql慢日志到es/index.html","c2663377bbf7e71336d1a4c3af563d17"],["2019/11/01/25-一些脚本汇总/index.html","1c2c006d1b28242b3f1019f11ca28cbd"],["2019/11/08/26-logstash配置/index.html","43bd90ad5c93bd7fe84eefa5ad193dcb"],["2019/11/21/27-k8s一条命令部署es5-2-0集群/index.html","81df0e8fc4329b1329b9d35c67e30b5b"],["2019/11/25/28-k8s1-16使用旧yml部署配置问题/index.html","68e80a11f3cf9041e5d10f4ab895956b"],["2019/11/25/29-k3s安装配置/index.html","3cdfa64b84a1ba6f8e8ecd65f3fb6ee2"],["archives/2019/09/index.html","cc6414fba009d53c1d8702dd90298bcc"],["archives/2019/10/index.html","34264ce461524c7c45af256bab09f82f"],["archives/2019/11/index.html","9bb0110deec4f0886cc6ada4c0273a77"],["archives/2019/index.html","1a8d57fcc8da5536592af19ea00dc36c"],["archives/2019/page/2/index.html","380f26c3de8e71142c14e737b1925b70"],["archives/index.html","b2f274160683d454dcf212ea19353a59"],["archives/page/2/index.html","c37e8d261896632ca7e4232a0715e647"],["categories/docker/Dockerfile/index.html","8800d753678be3ab0a108ba328df9f2b"],["categories/docker/index.html","f38d6ca13f35a699960b794b55962c64"],["categories/elk/elasticsearch5/index.html","31aeb8c1da8a9454712db8b04abc49d4"],["categories/elk/elasticsearch7/index.html","ee18585bb4091bd11844ae74b78476fc"],["categories/elk/index.html","8db02a0b92c8d6486ddc53aaf169b4c1"],["categories/elk/logstash/index.html","68e9ed6dbdaf0d583807bff6218c6922"],["categories/elk7/filebeat7/index.html","b28e99357bda73a20b2d6bf85f5977fb"],["categories/elk7/index.html","4d0cbab59a1552c81e9106e67259dab4"],["categories/index.html","669585cde0ac4ebfa3d1e31f13e49df4"],["categories/k3s/index.html","70a4e545bd742d8b803c849ea51b80bd"],["categories/k8s/elk5/index.html","84a83a42d7f759188957019d4f70bd53"],["categories/k8s/elk7/index.html","1b277e3047945d8beda48f51bde87ad6"],["categories/k8s/index.html","ea7d5c0020cb3e0b33ae525889bc40b6"],["categories/k8s/mysql/index.html","24010583cfcd5ebf22941f941d3d6cef"],["categories/k8s/storageclass/index.html","0a6d5ee96ded5c89d4850648991ea79b"],["categories/k8s/问题总结/index.html","a99ab07092c53a313740a0c523216f35"],["categories/linux/awk/index.html","5caca48e07ce20a09a8f3776f1ac4aa4"],["categories/linux/index.html","d35ad3011b6d6a95bb94fa3ece11ffff"],["categories/linux/shell/index.html","8482c2eb3cbc281e33e785fe7c10ecea"],["categories/linux/问题总结/index.html","3057a593bac5079345c6dd9264bbf9dc"],["categories/markdown/index.html","9e2fcedb915ca30a4fb25271a33e2d67"],["categories/mysql/index.html","5d8e7678aa551621f53c99a2c60fac82"],["categories/mysql/主从/index.html","08937c761ba43f35e069bc90967e8609"],["categories/nginx/index.html","06487771c202b9b44665efd00e0a8bcb"],["categories/博客/index.html","eef0eab6f41d32ad421906c504047d34"],["categories/博客/美化/index.html","049cd9baa66ced3b4d495197e8d0a757"],["categories/存储/ceph/index.html","87251a1d45f803ed591926f839e8d472"],["categories/存储/index.html","80d2f8829dbae8299a0a720779a80403"],["categories/存储/nfs/index.html","73c6213d9b214d314d9764d6d4df2e3c"],["categories/技术文档/index.html","bfd08f45b7320e44f09c6015c938f6e7"],["categories/有趣/index.html","7d666b25559750b1e3c387981c7dc710"],["categories/有趣/二次元/index.html","d835895facdb7dbcaa7991d708aee642"],["categories/流量复制工具/gor/index.html","a862eded7d3639d2659ba6ea0d8f2567"],["categories/流量复制工具/index.html","7f09109cda63fc9620fff190ac7d4324"],["categories/网址/index.html","f15c2b4d375cba3cc4ccce5b8ca2e31e"],["categories/网址/大佬博客/index.html","4cccf47659d9d69219ed781573f7f834"],["categories/网址/收藏/index.html","fab038d0711ca5626e6c6cfdbb6e3cb2"],["css/main.css","ddaf6d735784da208d661d2dc2faea93"],["images/16/容器的原理-1.png","1c184a092af6b6829c49ee20e70d132a"],["images/27/img1.png","74279f54a523a47f82a95a04ccfc9eb4"],["images/27/img2.jpg","93a32e8f4e52a9ea2a28b72a4223c2a9"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["images/blog6/rancher-pv.png","d2a7e4bbfad5f71e75c9d5459cf5a464"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/docker1.jpg","5c611dd864017adeff648bca93d53f41"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/jixie-title.jpg","3ebd10201e23ecf68aba4524c020db0d"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["images/tcp三次握手图.png","32ddd8df35bd5762604327b25758370e"],["images/tcp四次挥手图.png","684b2b4a0286acadc32247d693dbd961"],["images/test1/test1.jpg","60b725f10c9c85c70d97880dfe8191b3"],["images/title1.jpg","fa2db043867c4c5654471e21ad36e5c0"],["images/title2.jpg","b6e57860ebc3fcdcf150a6a4cf3402ab"],["images/title3.jpg","f0b1554cfa4dd1193719dcfeb9e4de28"],["images/title4.jpg","6eb7bcbb846d1123e830488d75028df7"],["index.html","9160bca4e535cb2e8964f01a06777bee"],["js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["js/src/instantclick.js","865d92a4a07409b7fed739e6a108e9c4"],["js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["js/src/live2d.js","3359a94d733737dbdd290dd41f9cef0b"],["js/src/love.js","7bcfdb57debd43483174cf9e15ab37cc"],["js/src/love2.js","2b51ddac5207cba4153da31e9132414c"],["js/src/motion.js","706d085e6cfec6f3e92dedc590d68d68"],["js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["js/src/schemes/pisces.js","1bd23ed75238ebf11afe2aa6b1c3a25b"],["js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["js/src/utils.js","f06ffce70453ad3a4d9611fdde5ca6c3"],["lib/canvas-nest/canvas-nest.min.js","2361106788cc4ea719ed76f52b413e46"],["lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["live2d-widget/README.html","9941b5173b7915eb6158e62f02cd9ea3"],["live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["live2d-widget/autoload.js","fc45c81e48138bde62e7e742cbbdabb9"],["live2d-widget/demo/demo1.html","82a14d37dbd83931644a4ad6ea1f9eb2"],["live2d-widget/demo/demo2.html","6babb045ef6905badc0dbc5e0d98cede"],["live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["live2d-widget/waifu.css","c4dae5924f2fb0b5ea6ef26aaab80db9"],["page/2/index.html","3afa958dbf522709a7b8817350ce8bcc"],["page/3/index.html","eb94fca782d6b570949ea722fa7a09f0"],["tags/awk/index.html","96a1b31a4856abdf4e07eb9238058580"],["tags/ceph/index.html","b9ddfb4a5e228601387688692efe55c0"],["tags/cephfs/index.html","c307b855b38961a2e677157c313f3b13"],["tags/cloud-native/index.html","0b5bfb1e174a5b6f4171c9cd0a7e4528"],["tags/docker/index.html","cc2a088cde5ab56c36c422dac020ece4"],["tags/elasticsearch5/index.html","605078c945c9ad76b914e45ca8ac1aaf"],["tags/elasticsearch7/index.html","bbc9f70bc728595f4f9a655c9542d8ef"],["tags/elk/index.html","c7f577a497fbcb85b2f9a4cf789871cc"],["tags/elk5/index.html","9dbf439d9cb4753a6fc0356a1bb234c3"],["tags/elk7/index.html","f693992edc49377e6c41edde7dc4c37a"],["tags/filebeat7/index.html","362b6551b03bcac8b847e1db5c7c0938"],["tags/gor/index.html","c0ebbc6786a2e28e565d05d18556bf0f"],["tags/hexo6/index.html","fd179363f404d1afddf44534a5a0f96b"],["tags/hexo美化/index.html","1bc153dc6da49477039897eec20083ae"],["tags/http流量复制工具/index.html","a0dbb6a7771fbcd1f08cff94f76c0544"],["tags/index.html","740ba18b30f2b8181a9d170062a998f6"],["tags/k3s/index.html","5f8255eb234693f11aebfd12024b5331"],["tags/k8s/index.html","ff1cc908c1780d10cfd43bfd1603830a"],["tags/k8s存储/index.html","e931aacb8234d055e2e78a07aa5efe7e"],["tags/linux/index.html","e290223cfcc6b2cbc4dd81a6f2697d61"],["tags/logstash/index.html","0aea0bc6ed561db3e7c52b8c23fee8a6"],["tags/markdown/index.html","390a1e636222a5c1caa0ba4fbffd2d02"],["tags/mysql/index.html","885e613f988db62110a99d6e834ce5f3"],["tags/mysql5-7/index.html","8277ca1681b2d8e525d4af3101b8fc9f"],["tags/nfs/index.html","3d668c1ac9d398ead6673c2d75037b60"],["tags/nginx/index.html","86a89186aa75659c7115d953fd0448ad"],["tags/php7/index.html","8b8fac58ea02417eb4c23f32d8eda737"],["tags/shell/index.html","843b381e2016d5f217fba3cb2fcc845f"],["tags/storageclass/index.html","edd36f94cda809b9dd07ec48d5da3292"],["tags/云原生/index.html","012bc277a5015986317f711cb2a76ac7"],["tags/大佬博客/index.html","877964dcae501eea5474d1e52a2a0429"],["tags/收藏/index.html","29fabdddf2a47bf107931150f8dd944a"],["tags/特效/index.html","459814ea48fbad4c6d722d15bd89b526"],["tags/网址/index.html","d0187368b4ca268da139916bc6b8edd6"]];
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







