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

var precacheConfig = [["2019/09/19/2-部署elk7-2-0/index.html","ce8322aacb3f11a950ec2ab5108e3365"],["2019/09/19/首次搭建hexo博客系统/index.html","b4a2505051996b1a98787f82fae6787f"],["2019/09/20/3-k8s遇到的一些问题统计总结/index.html","8fb42c030acd8c7452a563503f7e6adc"],["2019/09/24/4-hexo鼠标移动和鼠标点击特效/index.html","b6ed7145aa31184d279a74dbc191726d"],["2019/09/24/5-hexo添加看板娘/index.html","0b011ac5653b986d2982c40a9294d6ac"],["2019/09/26/6-ceph安装部署/index.html","a258417475cc97a6ba098d0f36e4d764"],["2019/09/26/7-k8s部署storageclass动态创建pv-nfs-rbd/index.html","2db0864a836d45fd41b8527dce5c1428"],["2019/09/26/8-mysql5-7二进制部署/index.html","14f83302f8db1889f97e17362042f190"],["2019/09/26/9-linux遇到一些问题统计总结/index.html","0a2e38a181d74113801071ce604b92d2"],["2019/09/27/10-centos6安装nginx1-16-php7-2/index.html","df722a5d69846c1c02bbfa6cc1899824"],["2019/10/10/11-mysql简单记录/index.html","fd76b26e59e7ecb008fcea22e0f3c7cc"],["2019/10/11/12-awk简单记录/index.html","eb7c0c172f38ec649ce6b7650f13080a"],["2019/10/12/13-云原生博客汇总/index.html","1d8246fe22694a6c9be9972d6bea1fcd"],["2019/10/15/14-mysql目录copy方式迁移/index.html","0c66e1f9d0f8b6d40ff0171b90427fd1"],["2019/10/16/15-docker简介和使用/index.html","6f92a4b795fb20fd35bc3228d204cd8c"],["2019/10/16/16-dockerfile介绍/index.html","c5e1acbb3a1c75fe7eb92b57830c04dc"],["2019/10/16/17-markdown一些写法记录/index.html","9d99bed8b22fbf300b1328c2ee301ff6"],["2019/10/17/18-收藏链接/index.html","d35166ed71e959ef198df0914be34089"],["2019/10/17/19-shell中gt和>的区别/index.html","7cb6005d3d01a180ac0d56472545693d"],["2019/10/24/20-k8s搭建mysql5-7-24主从/index.html","30606805c4f37f1d461fbfc5a151478c"],["2019/10/28/21-流量复制工具gor/index.html","6ffeba19d9e8eda29859227a6f9bf2ea"],["2019/10/28/22-es集群磁盘扩容/index.html","34953fa912b2cec948857fe5339ec8e7"],["2019/10/29/23-mysql5-5主与mysql5-7从部署配置/index.html","546e8d6efb5ae28c9cabcd9b8cf99940"],["2019/10/30/24-filebeat7收集mysql慢日志到es/index.html","0a5d9753506c4fad64def765f57b78c5"],["2019/11/01/25-一些脚本汇总/index.html","204c1e3d8f5cd1ad3604ac822f876435"],["2019/11/08/26-logstash配置/index.html","964eeb844162d8da0aa1679533e2354c"],["2019/11/21/27-k8s一条命令部署es5-2-0集群/index.html","6f50be4aa5f7d9bd12617b1b1e61d9e6"],["2019/11/25/28-k8s1-16使用旧yml部署配置问题/index.html","79b99e21cc4088e951a3373e447e08fd"],["2019/11/25/29-k3s安装配置/index.html","289fd772ea30402e929be9db1bc76fbe"],["2019/11/25/30-k3s集群部署项目报挂载nfs错误/index.html","585cb8a6e98f169bcc5ccda56a3f55bf"],["archives/2019/09/index.html","7a32891f14cfa3a9475a0d9206e0a86f"],["archives/2019/10/index.html","44383aacf7d7cce23ea34c51960b8f5b"],["archives/2019/11/index.html","70d234e2122c85815e2c2c0fda59a7a0"],["archives/2019/index.html","7a8f760c2f2ac631d4a11137ebaa4c93"],["archives/2019/page/2/index.html","6fca0215610e7e3047c973157103fc91"],["archives/index.html","fc0838bd49ab2b52a5ae42fc4ac1fed0"],["archives/page/2/index.html","0b5aed9089fe2c3568be4d68b70f87dd"],["categories/docker/Dockerfile/index.html","805fca937fca74d391508b045035b562"],["categories/docker/index.html","66f16a9833c755d2248583721e02252c"],["categories/elk/elasticsearch5/index.html","bd79a01040a9b3a93b1a31de7cfe0958"],["categories/elk/elasticsearch7/index.html","1b0b6741bc27ed37e340eb62ba6e0cc9"],["categories/elk/index.html","7047a03377802dd3d2759ccd00eae231"],["categories/elk/logstash/index.html","bcb49fee555943349c50ef52afa2c230"],["categories/elk7/filebeat7/index.html","77512c20e26b783e9609198c03deb785"],["categories/elk7/index.html","4e6a5259f8c4952c7630228dac205679"],["categories/index.html","0b5139a4c8e9ea428ccb8fc86135cad5"],["categories/k3s/index.html","03903801e37c6107761d06170aceb254"],["categories/k8s/elk5/index.html","8f4cbab58aae0ec4ced0404e033a880d"],["categories/k8s/elk7/index.html","817428b46564cfb1471a966cbb1f45e0"],["categories/k8s/index.html","5828180bd3cd7aa602d64c152faaacc6"],["categories/k8s/mysql/index.html","535ebb941e921bf06af9b81421be7535"],["categories/k8s/storageclass/index.html","ad0ce7c1fe559719949fbd1f7502b17a"],["categories/k8s/问题总结/index.html","b1d5897868f3aa0ea03d019de9ac7f3b"],["categories/linux/awk/index.html","d4c33bd5e2a43b7b97b87fddd2efebbb"],["categories/linux/index.html","82c3d92b62678fa0e771e544351c0fbf"],["categories/linux/shell/index.html","57a18e20b980461d53e81710f21629bd"],["categories/linux/问题总结/index.html","99fb5d29c8273af0c1e1821805ac434b"],["categories/markdown/index.html","25c191a3eabd94ffd9d9c0b291ae5f99"],["categories/mysql/index.html","c5c591fd4104de24d7cda5edd83f75db"],["categories/mysql/主从/index.html","d807c51b786712a6286a99e711cf33c8"],["categories/nfs/index.html","2ee63c93a506424004a24477676b5acf"],["categories/nginx/index.html","ffe89e73a6640c302f32d2baa339c27c"],["categories/博客/index.html","7696f7412684b24ee9313509215a62fb"],["categories/博客/美化/index.html","8d524370c67040cecde231709aeed030"],["categories/存储/ceph/index.html","923129922d8336280d737e69719215c4"],["categories/存储/index.html","c13cba13b33d7b7cd9585c14296b58a0"],["categories/存储/nfs/index.html","c674c19dd0395c897d4e1ed1b39ae000"],["categories/技术文档/index.html","ae2e04bc7fe9ccdadba1fe3e07ff5e65"],["categories/有趣/index.html","4ed678f6fb6ca73b55e84c898c5ffe16"],["categories/有趣/二次元/index.html","67a00b81a4841a4a38a5fa02fe7c332e"],["categories/流量复制工具/gor/index.html","5d56d0d1a90696f30b8ab3dc3002bf5a"],["categories/流量复制工具/index.html","c8415f0854090d925ba08e676e34799e"],["categories/网址/index.html","aafdc6dd44ab27eefa62811339c9b058"],["categories/网址/大佬博客/index.html","9e3c5999ecd1ffc217ca7d7916d70c54"],["categories/网址/收藏/index.html","86ca93fc985ba6bdfdfa4689ccbd84ef"],["css/main.css","c4ace43697a72080e6e6da7ed7d5067b"],["images/16/容器的原理-1.png","1c184a092af6b6829c49ee20e70d132a"],["images/27/img1.png","74279f54a523a47f82a95a04ccfc9eb4"],["images/27/img2.jpg","93a32e8f4e52a9ea2a28b72a4223c2a9"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["images/blog6/rancher-pv.png","d2a7e4bbfad5f71e75c9d5459cf5a464"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/docker1.jpg","5c611dd864017adeff648bca93d53f41"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/jixie-title.jpg","3ebd10201e23ecf68aba4524c020db0d"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["images/tcp三次握手图.png","32ddd8df35bd5762604327b25758370e"],["images/tcp四次挥手图.png","684b2b4a0286acadc32247d693dbd961"],["images/test1/test1.jpg","60b725f10c9c85c70d97880dfe8191b3"],["images/title1.jpg","fa2db043867c4c5654471e21ad36e5c0"],["images/title2.jpg","b6e57860ebc3fcdcf150a6a4cf3402ab"],["images/title3.jpg","f0b1554cfa4dd1193719dcfeb9e4de28"],["images/title4.jpg","6eb7bcbb846d1123e830488d75028df7"],["index.html","538da88ec66794f96d2ea53c95849f03"],["js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["js/src/instantclick.js","865d92a4a07409b7fed739e6a108e9c4"],["js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["js/src/live2d.js","3359a94d733737dbdd290dd41f9cef0b"],["js/src/love.js","7bcfdb57debd43483174cf9e15ab37cc"],["js/src/love2.js","2b51ddac5207cba4153da31e9132414c"],["js/src/motion.js","706d085e6cfec6f3e92dedc590d68d68"],["js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["js/src/schemes/pisces.js","1bd23ed75238ebf11afe2aa6b1c3a25b"],["js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["js/src/utils.js","f06ffce70453ad3a4d9611fdde5ca6c3"],["lib/canvas-nest/canvas-nest.min.js","2361106788cc4ea719ed76f52b413e46"],["lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["live2d-widget/README.html","9941b5173b7915eb6158e62f02cd9ea3"],["live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["live2d-widget/autoload.js","fc45c81e48138bde62e7e742cbbdabb9"],["live2d-widget/demo/demo1.html","82a14d37dbd83931644a4ad6ea1f9eb2"],["live2d-widget/demo/demo2.html","6babb045ef6905badc0dbc5e0d98cede"],["live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["live2d-widget/waifu.css","c4dae5924f2fb0b5ea6ef26aaab80db9"],["page/2/index.html","e119ad91f51c291e87677175ab5267a1"],["page/3/index.html","112795d74d6d1df7e73e7eeedadea8e0"],["tags/awk/index.html","4526b692dbce3043e21f7e3a787e7bfb"],["tags/ceph/index.html","894989c4075ae4b3c48d445ba8d9685f"],["tags/cephfs/index.html","eb8ebe40075bf9b43f6fd7d6c0e16740"],["tags/cloud-native/index.html","e5dab757cfa52d7db6f0ad53c476aaf1"],["tags/docker/index.html","86497471d1900bc959def4e613287b47"],["tags/elasticsearch5/index.html","1f631383c148c01c95e69506b6b0c436"],["tags/elasticsearch7/index.html","11f882d462abff945bdf7cc73199898f"],["tags/elk/index.html","058fe70011fa558b0840643c2ff453a5"],["tags/elk5/index.html","e82fe859c683ab8da68874ec06a5e8ea"],["tags/elk7/index.html","d303675b3ac5429e4f9ba1d1982ec0d4"],["tags/filebeat7/index.html","1f4ad3fa4fe2b7e8148d4aca9b00cbf6"],["tags/gor/index.html","bff088968ed1a3f629235069335ac8d8"],["tags/hexo6/index.html","4c38fb46cc21d190627fc96f06ef0587"],["tags/hexo美化/index.html","a9bc6ee70dd1e5fbcddfe034b2aae04f"],["tags/http流量复制工具/index.html","40ba97935500b70a37a71e6e3943bd2a"],["tags/index.html","8e827dd11de8acad43a1fb0f439f584d"],["tags/k3s/index.html","55974d62e25712612a773894bd269f22"],["tags/k8s/index.html","3748f6b9af6474870eb4812892ef106d"],["tags/k8s存储/index.html","afedbb79e5f3aa54aefb5bfb12cde4a5"],["tags/linux/index.html","64230cf607a94e65e9a2294bb0353516"],["tags/logstash/index.html","37de16b76bdcd16cd4bd3d90400ca1fd"],["tags/markdown/index.html","5fecb9c12ff35def3566b06ef6d1722e"],["tags/mysql/index.html","18fd70bbbe760d31c0b79abf10f6e02c"],["tags/mysql5-7/index.html","57692d76c4ac3eebdd671d33948f98be"],["tags/nfs/index.html","72956ca419d7cdfdb174ae2abc16a99b"],["tags/nginx/index.html","6142f4104403a4c1256f5613e604a3e9"],["tags/php7/index.html","d118dfc56b58a9ee38b8ea4b61823358"],["tags/shell/index.html","d3780d9221bc0fbf4b45356bc97ab30a"],["tags/storageclass/index.html","18ef7216e0fb3a7d79b3f72eba274d66"],["tags/云原生/index.html","637572d67432caf328909e25b4647209"],["tags/大佬博客/index.html","da5db9a4473e0471ab1e2f82462a2cfd"],["tags/收藏/index.html","4ac6bf0bd6c7405c4ccc2c43f52e0aeb"],["tags/特效/index.html","2d3721b4d407356f9fdb3ba9d19b2260"],["tags/网址/index.html","0008cb80659139bedcfcde7fc2542e08"]];
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







