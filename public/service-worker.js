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

var precacheConfig = [["2019/09/19/2-部署elk7-2-0/index.html","a73aaa814bd8072a0d567928be58df1a"],["2019/09/19/首次搭建hexo博客系统/index.html","9c6b2b58ea5a5ec4bd54edca362d54a4"],["2019/09/20/3-k8s遇到的一些问题统计总结/index.html","e5404984ef4d838ffbc035af884f3d96"],["2019/09/24/4-hexo鼠标移动和鼠标点击特效/index.html","5b912072f06314260578856128f4a349"],["2019/09/24/5-hexo添加看板娘/index.html","6345cfa30bb09b919e2c42edb9a8710a"],["2019/09/26/6-ceph安装部署/index.html","d1ea405b6cc4e2a73df97d3a6623857e"],["2019/09/26/7-k8s部署storageclass动态创建pv-nfs-rbd/index.html","6b0b646a787d1fe934842365e3244fb6"],["2019/09/26/8-mysql5-7二进制部署/index.html","ab99a5c59f9133f75aed4013f48c11e8"],["2019/09/26/9-linux遇到一些问题统计总结/index.html","fd1a16e31767c4e38e22457ae0217362"],["2019/09/27/10-centos6安装nginx1-16-php7-2/index.html","c8399e7b0a5b50beb5ea26e901736446"],["2019/10/10/11-mysql简单记录/index.html","7225386ec2115ae88e770814c0284cf1"],["2019/10/11/12-awk简单记录/index.html","150c5f8be21fefcc083e172bace93185"],["2019/10/12/13-云原生博客汇总/index.html","ad21a4f3aef96e34d1202f8fe0d27e32"],["2019/10/15/14-mysql目录copy方式迁移/index.html","15e67e15dd869ee15afb1a7c32b83fd8"],["2019/10/16/15-docker简介和使用/index.html","59530437c55c0cac55038b24d049ce02"],["2019/10/16/16-dockerfile介绍/index.html","ed41d7a77fb02ec20dabec46bff94cb3"],["2019/10/16/17-markdown一些写法记录/index.html","0418cf70f571120069acc8bd88532355"],["2019/10/17/18-收藏链接/index.html","c775c5d6ab17c41bc3322cce6537b041"],["2019/10/17/19-shell中gt和>的区别/index.html","230258ce3ee48d9d67ff917a697bf768"],["2019/10/24/20-k8s搭建mysql5-7-24主从/index.html","33c53ecd6ccfdeb0a9b48cfbf16ae336"],["2019/10/28/21-流量复制工具gor/index.html","49156b0cfb680dbfa8262de0ec1f27bb"],["2019/10/28/22-es集群磁盘扩容/index.html","ad77f99228c9d468953cae7574e9cb8c"],["2019/10/29/23-mysql5-5主与mysql5-7从部署配置/index.html","8985b4324199d73b64d1767872e83322"],["2019/10/30/24-filebeat7收集mysql慢日志到es/index.html","3e1ca7760ef2d9c26a87693c808b6e38"],["2019/11/01/25-一些脚本汇总/index.html","e8416c5903ef78c603564c722694728c"],["2019/11/08/26-logstash配置/index.html","166a3e358085867982e88ed4ae0d9ae5"],["2019/11/21/27-k8s一条命令部署es5-2-0集群/index.html","059d619fcb6caa17b2b9c2ab2e8427ef"],["2019/11/25/28-k8s1-16使用旧yml部署配置问题/index.html","0c19ee16fadbfb02a3a2bd483a876b0e"],["2019/11/25/29-k3s安装配置/index.html","0398f4e1893fa3f0b1f761e8bf382b59"],["2019/11/25/30-k3s集群部署项目报挂载nfs错误/index.html","15dfca0a919aca1ecd3b7893c8e0804d"],["2019/11/26/31-systemd一些命令/index.html","01fd70da56df3e2419520170d73cf5ab"],["archives/2019/09/index.html","0238b4658376960ce359b0a8c45599bb"],["archives/2019/10/index.html","e953cdd47bc6e2326674484979561778"],["archives/2019/11/index.html","0b7fd784992be0d1e6897b042d407dcd"],["archives/2019/index.html","58e3ee4a090109fa63104742f24b749f"],["archives/2019/page/2/index.html","889ad33096f8cecee70a33c25fcec0ce"],["archives/index.html","b1ece70e04a36e3c9c121aee6c69d60b"],["archives/page/2/index.html","d2527d1ef2eb0d0350fdf1d6b9ccb81d"],["categories/docker/Dockerfile/index.html","c0f7b4131e0ecf50c320feede9cf56ee"],["categories/docker/index.html","46f41dd1a36a2a72632dcaa2390ae570"],["categories/elk/elasticsearch5/index.html","fe20fc3f5278471faad66728c3d3503b"],["categories/elk/elasticsearch7/index.html","6d3abef2bb5ee22f5be329ef79e7cb4a"],["categories/elk/index.html","fb9053653ee5300e72acf36bb9a7bbf2"],["categories/elk/logstash/index.html","2ebe0ce74c8bd9d8c0fa66ffc58e7605"],["categories/elk7/filebeat7/index.html","b1c073ad26146cba5410afc95ed98510"],["categories/elk7/index.html","0e57c15f46bf6598dc9fda80efbbbef9"],["categories/index.html","89314fd2523bb134d99bd51c8910a736"],["categories/k3s/index.html","0329ce7783ff7a550134b695f5780eff"],["categories/k8s/elk5/index.html","756616efdebe60e0dda60a963780658c"],["categories/k8s/elk7/index.html","39653a01c5746eccef7a118ee760efdb"],["categories/k8s/index.html","e9063451a23a1c139ee3330e14d88732"],["categories/k8s/mysql/index.html","2a5da58300a20b422f385b2edc5afd9b"],["categories/k8s/storageclass/index.html","d144b183457362b5c65ab91d25cb4f97"],["categories/k8s/问题总结/index.html","fb0cba28cff6661e72a2245102931dde"],["categories/linux/awk/index.html","62b25a3b42df006b3ad17c80f91cc8e6"],["categories/linux/index.html","95a4c5384218e5efcf3a1b4a8ea847f0"],["categories/linux/shell/index.html","3f62361b35be739182e5c05a0a2af4d0"],["categories/linux/systemd/index.html","719eb523aba80a28ca42668d4445d2b2"],["categories/linux/问题总结/index.html","79e3203ce11ade074381ff9b723501c1"],["categories/markdown/index.html","3baa220eb17fa07bd281a4855d02e22f"],["categories/mysql/index.html","72484d9f0b5af6ab552638d26992f8fe"],["categories/mysql/主从/index.html","8790bb27f4cbe948c32e1c105e7b1e32"],["categories/nfs/index.html","8252499209ce1a845f07d6b620ba4e41"],["categories/nginx/index.html","2a1a1b7afb5829315b7c126d42090711"],["categories/shell/index.html","c7e47391577426049d071b3533c0aef1"],["categories/shell/systemd/index.html","56f3172f95c836f076dffc66f2c57ff6"],["categories/博客/index.html","721470b5a0f69a897f4e30adc2e2e9e4"],["categories/博客/美化/index.html","0e00ca1f725c33cb1b0b3dc86b5dc905"],["categories/存储/ceph/index.html","e914e385dcf84e30b0bed7044716b865"],["categories/存储/index.html","fdbaa5fafa82145d7cd43d3553133e1a"],["categories/存储/nfs/index.html","05ca51ca24ed74fab474becacd47666d"],["categories/技术文档/index.html","cbd70960cbd97502ebb009533679a7a3"],["categories/有趣/index.html","6d02ecea981edf62c84e66a50ac615ec"],["categories/有趣/二次元/index.html","dc0c033930674378bd1caf1c4c0c3850"],["categories/流量复制工具/gor/index.html","583b449e504f909836b553422c2b9695"],["categories/流量复制工具/index.html","1ab6efa4d693c229ebddcb3d4f7b6bcf"],["categories/网址/index.html","4ed52d82d66f3c6396c4314240e8261f"],["categories/网址/大佬博客/index.html","70ec294a4cb057e8dbb968f648b45b8a"],["categories/网址/收藏/index.html","ec13202502d19ba403feb1ae999f2623"],["css/main.css","cf5f6009684999a292858ff00d7cbe92"],["images/16/容器的原理-1.png","1c184a092af6b6829c49ee20e70d132a"],["images/27/img1.png","74279f54a523a47f82a95a04ccfc9eb4"],["images/27/img2.jpg","93a32e8f4e52a9ea2a28b72a4223c2a9"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["images/blog6/rancher-pv.png","d2a7e4bbfad5f71e75c9d5459cf5a464"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/docker1.jpg","5c611dd864017adeff648bca93d53f41"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/jixie-title.jpg","3ebd10201e23ecf68aba4524c020db0d"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["images/tcp三次握手图.png","32ddd8df35bd5762604327b25758370e"],["images/tcp四次挥手图.png","684b2b4a0286acadc32247d693dbd961"],["images/test1/test1.jpg","60b725f10c9c85c70d97880dfe8191b3"],["images/title1.jpg","fa2db043867c4c5654471e21ad36e5c0"],["images/title2.jpg","b6e57860ebc3fcdcf150a6a4cf3402ab"],["images/title3.jpg","f0b1554cfa4dd1193719dcfeb9e4de28"],["images/title4.jpg","6eb7bcbb846d1123e830488d75028df7"],["index.html","b60c601328c9e1d63f90a20ae214b761"],["js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["js/src/instantclick.js","865d92a4a07409b7fed739e6a108e9c4"],["js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["js/src/live2d.js","3359a94d733737dbdd290dd41f9cef0b"],["js/src/love.js","7bcfdb57debd43483174cf9e15ab37cc"],["js/src/love2.js","2b51ddac5207cba4153da31e9132414c"],["js/src/motion.js","706d085e6cfec6f3e92dedc590d68d68"],["js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["js/src/schemes/pisces.js","1bd23ed75238ebf11afe2aa6b1c3a25b"],["js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["js/src/utils.js","f06ffce70453ad3a4d9611fdde5ca6c3"],["lib/canvas-nest/canvas-nest.min.js","2361106788cc4ea719ed76f52b413e46"],["lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["live2d-widget/README.html","9941b5173b7915eb6158e62f02cd9ea3"],["live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["live2d-widget/autoload.js","fc45c81e48138bde62e7e742cbbdabb9"],["live2d-widget/demo/demo1.html","82a14d37dbd83931644a4ad6ea1f9eb2"],["live2d-widget/demo/demo2.html","6babb045ef6905badc0dbc5e0d98cede"],["live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["live2d-widget/waifu.css","c4dae5924f2fb0b5ea6ef26aaab80db9"],["page/2/index.html","51b15ff35b0487967d9ccc1895b63efc"],["page/3/index.html","35389a5ef794b9bcc70968b6161f9136"],["page/4/index.html","794f06a80d4bf2e9cd89e5e8c236144e"],["tags/awk/index.html","46e1f296dccaa3dbd173b720cc239d09"],["tags/ceph/index.html","f9ddeb9a6d92fa371643b268dc6abe87"],["tags/cephfs/index.html","0c57da167446ca6ec054cd96add10c90"],["tags/cloud-native/index.html","152b92cc3bb2e7470901388b58afb821"],["tags/docker/index.html","625ae7a5bfa38e7f12375f9f836a7194"],["tags/elasticsearch5/index.html","535f3fda3b04dcbd77aa753b7ad66f03"],["tags/elasticsearch7/index.html","3a7761d8ef18a2ddaf276ecab3159bde"],["tags/elk/index.html","f822fe54d59e23e3284b900495d8cd09"],["tags/elk5/index.html","8b0ab462f95bf1d182255d2ffb37cd03"],["tags/elk7/index.html","eb38a806a5cfd680d703e8e38e79a305"],["tags/filebeat7/index.html","5ebdeba58182e2ffc984d3d0673e6c51"],["tags/gor/index.html","7c229fd6eb946332fc8a572f356f44aa"],["tags/hexo6/index.html","d4507b8298e2dc90ef01f77007d30752"],["tags/hexo美化/index.html","2f3a4b71a4a2178ee1f48b8412733e71"],["tags/http流量复制工具/index.html","f2cf8323d1041cb16a6cf430515c41aa"],["tags/index.html","3d0f790e96f2f970dac5dc6dec16d0b0"],["tags/k3s/index.html","b9f4dc76692765a64e83791a1968affb"],["tags/k8s/index.html","37e32f81ae850150df23ed8ee5e12ebb"],["tags/k8s存储/index.html","a1078bf117dfac151a2716304ec3d818"],["tags/linux/index.html","a1fd46f4443237c22f66a0a80be1b299"],["tags/logstash/index.html","5ed94ab9b991c8104fccde91886885ce"],["tags/markdown/index.html","83c3bcf6aa0f557fa025611911421f17"],["tags/mysql/index.html","0674e97d7e10bab57881fd6849e32600"],["tags/mysql5-7/index.html","ef9d94224df124962ac0d07413fe201e"],["tags/nfs/index.html","f7fc5e0a664bc6fc858c2d4104fe9370"],["tags/nginx/index.html","0257473792bf74d7fe842497255cda4d"],["tags/php7/index.html","4d7f21cddfc1c47ada46c18aed75ba79"],["tags/shell/index.html","e1066e6492db3409862804ad936a232e"],["tags/storageclass/index.html","a0bae6d5c75efb199a32fac43dd4dd9f"],["tags/systemd/index.html","d1ee6cbf7f5f79f227ea9365e5ff6173"],["tags/云原生/index.html","4bf9860b61d31c5c1fe9cb581982381e"],["tags/大佬博客/index.html","3accafb2d45f6996867a369c9242220c"],["tags/收藏/index.html","fe0fff3862f0e252273e19773def10a8"],["tags/特效/index.html","db32c13a6972318412f8da618d448e7e"],["tags/网址/index.html","b23567e4b01857b359e87720ed054860"]];
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







