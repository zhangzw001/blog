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

var precacheConfig = [["2019/09/19/2-部署elk7-2-0/index.html","b915c394712576fd71677155202282e8"],["2019/09/19/首次搭建hexo博客系统/index.html","64930c4c6ddd1c6f94c9c20f67e02367"],["2019/09/20/3-k8s遇到的一些问题统计总结/index.html","4732584b5f24f9387b9d6b7f2ad75eb2"],["2019/09/24/4-hexo鼠标移动和鼠标点击特效/index.html","7410461719ae0ad7857f0145d863e570"],["2019/09/24/5-hexo添加看板娘/index.html","37ac099f2f674e0d79508e31807d2bb0"],["2019/09/26/6-ceph安装部署/index.html","9aecca48cf986cd4be434df112acd560"],["2019/09/26/7-k8s部署storageclass动态创建pv-nfs-rbd/index.html","c344b32cf04b1ed880f1d767a0c77011"],["2019/09/26/8-mysql5-7二进制部署/index.html","5a42867afd3fd45310ca373fd914c7c4"],["2019/09/26/9-linux遇到一些问题统计总结/index.html","eaf68d07e527436a4eba4895cb833b23"],["2019/09/27/10-centos6安装nginx1-16-php7-2/index.html","707d461b2ac6c6c988da72eef34e49ae"],["2019/10/10/11-mysql简单记录/index.html","5347318160bb836862b6062ddf10c382"],["2019/10/11/12-awk简单记录/index.html","f8bbafe5adaee05e67b88a85fffd0835"],["2019/10/12/13-云原生博客汇总/index.html","9270360e2c5fb31cbd5f104f58ee20ba"],["2019/10/15/14-mysql目录copy方式迁移/index.html","78e5d44c85d1fb431f384151f002390c"],["2019/10/16/15-docker简介和使用/index.html","58355248a9bed2595d3d4026c3943215"],["2019/10/16/16-dockerfile介绍/index.html","bde0e0c3fcdf29d3a58f44abacedae1b"],["2019/10/16/17-markdown一些写法记录/index.html","4635c824e07a3e7e4a896bd6dbb64e73"],["2019/10/17/18-收藏链接/index.html","e352b07d8448c34aaed42f867edef22c"],["2019/10/17/19-shell中gt和>的区别/index.html","82a12c1500d5823c74cc4e44118a9203"],["2019/10/24/20-k8s搭建mysql5-7-24主从/index.html","106bfe6bc21d180dcfe072c6dbe20b3d"],["2019/10/28/21-流量复制工具gor/index.html","3ca9f690bcb3d93d6f16a04f2043a341"],["2019/10/28/22-es集群磁盘扩容/index.html","0ac84fff7cb61ecb0db5c410e5c2e37d"],["2019/10/29/23-mysql5-5主与mysql5-7从部署配置/index.html","b8bc6317c92e2a55d720d7d5d5afe3dc"],["2019/10/30/24-filebeat7收集mysql慢日志到es/index.html","ad26021edef102349361c73215eee259"],["2019/11/01/25-一些脚本汇总/index.html","005fb220dd89bc2f9571dfb4f6e6fb8e"],["2019/11/08/26-logstash配置/index.html","7e83a73991b00a621218598df145adb5"],["2019/11/21/27-k8s一条命令部署es5-2-0集群/index.html","f01e0370c81ee46737e4dc9e9c479314"],["2019/11/25/28-k8s1-16使用旧yml部署配置问题/index.html","6c33d21954ab8a27c9f86514ed50e89f"],["archives/2019/09/index.html","db6a85241af8dd8a3bb911550ce8792d"],["archives/2019/10/index.html","82ed753a1a0a583fddaf1af5a13aa1cd"],["archives/2019/11/index.html","73fd6a509219410325df45c5c77ffc8a"],["archives/2019/index.html","78ca06a8677ff99f96ac4b6cd57fabdf"],["archives/2019/page/2/index.html","299635e9916092ecd26c7b4cdde36f1e"],["archives/index.html","0872f1bff7f96f71bb7f826e0c577142"],["archives/page/2/index.html","df1151a1667569da37b796d78f4fd770"],["categories/docker/Dockerfile/index.html","5ae4ddc433a72f8a59e3c7c3c6f9a3eb"],["categories/docker/index.html","31d20ea41da9dcab3fbfd29f4d1763bf"],["categories/elk/elasticsearch5/index.html","fb80301cd9cc12c8c4c98eab785a7001"],["categories/elk/elasticsearch7/index.html","93071bbf5797d67d3499a3339992149a"],["categories/elk/index.html","16cf0765ff957a53d043bdae377b817e"],["categories/elk/logstash/index.html","e389f54d23209b0d143a6e106ab31341"],["categories/elk7/filebeat7/index.html","0afcc506b435ab77f49e6685dd4842ff"],["categories/elk7/index.html","7d75c7b46334e06296cecd04ad98ab7c"],["categories/index.html","9b124a2ebb0ec27e3a7205b56a134e49"],["categories/k8s/elk5/index.html","edc9f8c2effec6149eec4f7c0dcf1a54"],["categories/k8s/elk7/index.html","8c2395217bc64d0c9bc06cceedb3d785"],["categories/k8s/index.html","3edd65c4d8d19892973ed9b948ce59c3"],["categories/k8s/mysql/index.html","a9cb1e792352ab88ae1cf2932db7042d"],["categories/k8s/storageclass/index.html","86cc8b9e8a48f842c37b032351b18d91"],["categories/k8s/问题总结/index.html","d3ee4304b92f669619d31f2d85ddd7a1"],["categories/linux/awk/index.html","8d402a99b63e998dfedd34cd3b37c6a3"],["categories/linux/index.html","d80b834094abfa4a61d8276da2090239"],["categories/linux/shell/index.html","99c81440bcaf9abc6ce6a99586e2ce70"],["categories/linux/问题总结/index.html","9257feabfcc147f6e30eae67c185f833"],["categories/markdown/index.html","797c9538db4d6649f83bb0920a7d8a5f"],["categories/mysql/index.html","d53c8ccb562445612417730898690268"],["categories/mysql/主从/index.html","cf78c5597871ddccd93112e51ee6df89"],["categories/nginx/index.html","17c4bee00f46df12b3c0bb06fbedd482"],["categories/博客/index.html","38bee801197de2f770801a01f4ca06a9"],["categories/博客/美化/index.html","e8a22d1754d754609fd6b3b1752a005c"],["categories/存储/ceph/index.html","85c05316fe6b92d0e6d4272712077433"],["categories/存储/index.html","efa85e896e88c9513417a399bf2a9125"],["categories/存储/nfs/index.html","ce0231845cd74bf7b0e8fa3f6c842517"],["categories/技术文档/index.html","f735d9965bf068714b04a9058a056b35"],["categories/有趣/index.html","accae104116c1b644907f047f0c88a24"],["categories/有趣/二次元/index.html","c8288ac663ebca50afc2365fde5baeb0"],["categories/流量复制工具/gor/index.html","eee626a22fa8571899391c94faa4e0ff"],["categories/流量复制工具/index.html","7dc949b73069073f7b61805dbdaa74d2"],["categories/网址/index.html","ec5fb6e8674e7b7500472e685bf31626"],["categories/网址/大佬博客/index.html","8d83323e6325362a3aa860b4366d44d0"],["categories/网址/收藏/index.html","8fbfd5c4006d7da0874835074ddbde81"],["css/main.css","dd017bd9355a43bf3b34f331f0158582"],["images/16/容器的原理-1.png","1c184a092af6b6829c49ee20e70d132a"],["images/27/img1.png","74279f54a523a47f82a95a04ccfc9eb4"],["images/27/img2.jpg","93a32e8f4e52a9ea2a28b72a4223c2a9"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["images/blog6/rancher-pv.png","d2a7e4bbfad5f71e75c9d5459cf5a464"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/docker1.jpg","5c611dd864017adeff648bca93d53f41"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/jixie-title.jpg","3ebd10201e23ecf68aba4524c020db0d"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["images/tcp三次握手图.png","32ddd8df35bd5762604327b25758370e"],["images/tcp四次挥手图.png","684b2b4a0286acadc32247d693dbd961"],["images/test1/test1.jpg","60b725f10c9c85c70d97880dfe8191b3"],["images/title1.jpg","fa2db043867c4c5654471e21ad36e5c0"],["images/title2.jpg","b6e57860ebc3fcdcf150a6a4cf3402ab"],["images/title3.jpg","f0b1554cfa4dd1193719dcfeb9e4de28"],["images/title4.jpg","6eb7bcbb846d1123e830488d75028df7"],["index.html","759415ed503e39a757e514a7ace8d1cc"],["js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["js/src/instantclick.js","865d92a4a07409b7fed739e6a108e9c4"],["js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["js/src/live2d.js","3359a94d733737dbdd290dd41f9cef0b"],["js/src/love.js","7bcfdb57debd43483174cf9e15ab37cc"],["js/src/love2.js","2b51ddac5207cba4153da31e9132414c"],["js/src/motion.js","706d085e6cfec6f3e92dedc590d68d68"],["js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["js/src/schemes/pisces.js","1bd23ed75238ebf11afe2aa6b1c3a25b"],["js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["js/src/utils.js","f06ffce70453ad3a4d9611fdde5ca6c3"],["lib/canvas-nest/canvas-nest.min.js","2361106788cc4ea719ed76f52b413e46"],["lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["live2d-widget/README.html","9941b5173b7915eb6158e62f02cd9ea3"],["live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["live2d-widget/autoload.js","fc45c81e48138bde62e7e742cbbdabb9"],["live2d-widget/demo/demo1.html","82a14d37dbd83931644a4ad6ea1f9eb2"],["live2d-widget/demo/demo2.html","6babb045ef6905badc0dbc5e0d98cede"],["live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["live2d-widget/waifu.css","c4dae5924f2fb0b5ea6ef26aaab80db9"],["page/2/index.html","59612f92f2935626ea8fd64d7910522c"],["page/3/index.html","3e188f9c8e9d5b070db3b1bd943ae352"],["tags/awk/index.html","df57db5904968278a4b6a6596a6eb3c4"],["tags/ceph/index.html","eeb4be9ff9e14635843b8d2b2499204d"],["tags/cephfs/index.html","76561aa13656a377101d8a5f60136cb2"],["tags/cloud-native/index.html","8cc309cd0fd56126509453ac2600230a"],["tags/docker/index.html","a1bc165420126b388fa96d39016f9832"],["tags/elasticsearch5/index.html","eb6666c7b772102d22e5a7f794ad7923"],["tags/elasticsearch7/index.html","a051d24d32449bb6d04811962f9b0468"],["tags/elk/index.html","fb1b14f9a5b237b85d256bf0a290f9fc"],["tags/elk5/index.html","2a7fce0090468c713f5b11897388e553"],["tags/elk7/index.html","58dec86ad9f9e60e8bcc92e3994bd953"],["tags/filebeat7/index.html","b907c978c5ccbfec6d8beb238984b78e"],["tags/gor/index.html","e1e591e76776a7c713c9b84daec88ab3"],["tags/hexo6/index.html","e11c762fed1f5414172ee355843d7af9"],["tags/hexo美化/index.html","b9b8a6e4859f5b716f097033be9f9824"],["tags/http流量复制工具/index.html","1e47fecbd5497a501a8c5001b47750d8"],["tags/index.html","7b5dad8290758f188cac69cde61dea0b"],["tags/k8s/index.html","2b6a916772363ade7f1f17e6a4d5419e"],["tags/k8s存储/index.html","4732129a46964a434a625f0ff03f66d7"],["tags/linux/index.html","700e804f55382612d9698131786b6527"],["tags/logstash/index.html","34edf06f57d5ceff547f12cbbb4b5369"],["tags/markdown/index.html","41738659bfa9d7a34d596816bef0e9e5"],["tags/mysql/index.html","0dea058f17c181aec7ef3135831c975c"],["tags/mysql5-7/index.html","e4ca7a4d56387486c61fe776610db50a"],["tags/nfs/index.html","fb6907a09868fe54bb42b669e3e5dbbd"],["tags/nginx/index.html","1d0b2c4d144ede7e02e7a6d7de54ac33"],["tags/php7/index.html","29b05255a1e3e9c7c4e385b77f7549cf"],["tags/shell/index.html","7d56997eae2013279008102b76f60a3c"],["tags/storageclass/index.html","a2c3f0046ca4d723fc18d4fc977549f5"],["tags/云原生/index.html","cdbbb050c34eaba307bcf359f188a1ec"],["tags/大佬博客/index.html","38ed183e00c46165ea110fb27dfad46d"],["tags/收藏/index.html","5c0ef04b9a1a9f4fed207cde1733a4b9"],["tags/特效/index.html","336bbd0adc934a25818d899e29c3cf53"],["tags/网址/index.html","6338ea32b659796efe3f1f66e02d155c"]];
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







