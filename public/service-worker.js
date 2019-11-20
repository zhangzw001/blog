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

var precacheConfig = [["2019/09/19/2-部署elk7-2-0/index.html","318d7167d8f1e6969b6f1045393caa5f"],["2019/09/19/首次搭建hexo博客系统/index.html","ac155b4f7ee1e91b2bfee29577fa3366"],["2019/09/20/3-k8s遇到的一些问题统计总结/index.html","64bb286a5f92b1caa317bf2a3dacbf5e"],["2019/09/24/4-hexo鼠标移动和鼠标点击特效/index.html","1edc1850806f98521aceb6c4e6d105f7"],["2019/09/24/5-hexo添加看板娘/index.html","5132b598959c568864fe6e1b39fd46e2"],["2019/09/26/6-ceph安装部署/index.html","6e879813c51d797dccbcc5ba025e7d04"],["2019/09/26/7-k8s部署storageclass动态创建pv-nfs-rbd/index.html","b047344420bb49e001517c9bd0c2836e"],["2019/09/26/8-mysql5-7二进制部署/index.html","ba37bb004918d0caefba243c21c80948"],["2019/09/26/9-linux遇到一些问题统计总结/index.html","610fcb7a327dd1f7dd8bd576b7e4a570"],["2019/09/27/10-centos6安装nginx1-16-php7-2/index.html","4c9182d6e6689794cef90590635d6f61"],["2019/10/10/11-mysql简单记录/index.html","432faa86da4a6895b1ef5ac5a248225c"],["2019/10/11/12-awk简单记录/index.html","51c079737e2afb2043385d5deb111a5f"],["2019/10/12/13-云原生博客汇总/index.html","0c79d8b7e8d2839543164b15c46939ff"],["2019/10/15/14-mysql目录copy方式迁移/index.html","25b7294d0b4773b6679d9b1034850e1e"],["2019/10/16/15-docker简介和使用/index.html","521527d9e79a8513eb76e824aa55b719"],["2019/10/16/16-dockerfile介绍/index.html","a11691aa2d116fd81d227e0a45e9de34"],["2019/10/16/17-markdown一些写法记录/index.html","d16ef3f52c9a040d30a07e6aee5cc74b"],["2019/10/17/18-收藏链接/index.html","dc283cc92cf1357d65edde6de7ba66d0"],["2019/10/17/19-shell中gt和-的区别/index.html","a08686a8ed63e5ff07faae56924ec490"],["2019/10/17/19-shell中gt和>的区别/index.html","7b5d642e1f8d6ba9294f4938226a0375"],["2019/10/24/20-k8s搭建mysql5-7-24主从/index.html","96653170a522e4da8388ebca088add9a"],["2019/10/28/21-流量复制工具gor/index.html","4e949e40520df7298308af9c3fce87d3"],["2019/10/28/22-es集群磁盘扩容/index.html","7b23f3de40fee0dfd13af5af95a59e38"],["2019/10/29/23-mysql5-5主与mysql5-7从部署配置/index.html","c0a77eadbae5f14eeb68ca0cafaa7f2f"],["2019/10/30/24-filebeat7收集mysql慢日志到es/index.html","7e440340f59488dcb6c1320ec7b0426a"],["2019/11/01/25-一些脚本汇总/index.html","6e4d7d928cc90485977c811c2543f42f"],["2019/11/08/26-logstash配置/index.html","e87bbfedb595271330972a8070003f84"],["archives/2019/09/index.html","51df04bda036380e788308446c62fd77"],["archives/2019/10/index.html","a9d8fab57c7d9c5ed94b77214ac21d7b"],["archives/2019/11/index.html","ced86b5710d2931b16169db11405d501"],["archives/2019/index.html","fc04cb67de8b34a858c8d0346915f348"],["archives/2019/page/2/index.html","3a422445f00e72e1b51f09c8f42557a4"],["archives/index.html","a85cf06212b21e493f4e06c534b1658f"],["archives/page/2/index.html","f21de4f7487a8b98416824c09ce792ab"],["categories/docker/Dockerfile/index.html","84048e7ab7e592e7b7b43a82055f1621"],["categories/docker/index.html","7d025613974cc1db6d31e74cf7a7363f"],["categories/elk/elasticsearch5/index.html","cbf897f1a97ecec21fef92b62d5b5ba4"],["categories/elk/elasticsearch7/index.html","6d27129a227c3a3b7fbab861a4286728"],["categories/elk/index.html","fb881b2ea9e295d2fd7dfdda2b78ca99"],["categories/elk/logstash/index.html","3e7009748688e9724964f054e266c554"],["categories/elk7/filebeat7/index.html","221b10ae8825c34345487b82ad7f789a"],["categories/elk7/index.html","c5e991cf090c4ddd725c0b64dfa40dfa"],["categories/index.html","6f9666becf99c1ab1bf5096c5b50be1a"],["categories/k8s/elk7/index.html","88b6802afa229385133a52f1fbc82f5b"],["categories/k8s/index.html","7c7c222a627a918bd246d966433c05ad"],["categories/k8s/mysql/index.html","5d5fa50e29bb6689f67cd684c2bff85d"],["categories/k8s/storageclass/index.html","0d19eb38ac03ea389cb8f5398ee21d0a"],["categories/k8s/问题总结/index.html","2e7663edbde1ed397c1998474e4b3b68"],["categories/linux/awk/index.html","e772fdb7ed0e418e431de7b133af3ef7"],["categories/linux/index.html","19e1065db60f0b4d0da0e4bc5037e568"],["categories/linux/shell/index.html","45d5ea11a42b871334ffcdb6c9674d3f"],["categories/linux/问题总结/index.html","c5a2e4815879d98ebab7ff774824ef24"],["categories/markdown/index.html","0008d202c66244710a365c4cdeb6ce52"],["categories/mysql/index.html","453aed7aed6669b7ec62c854d46a6673"],["categories/mysql/主从/index.html","ae59df50f45d03341b656f3203d0ae1f"],["categories/nginx/index.html","48f2c225bbf847ac6ee3fe76853c0590"],["categories/博客/index.html","44c5ebe176900257431695dec57dbe33"],["categories/博客/美化/index.html","199242f911ffd5ae5471562df3547629"],["categories/存储/ceph/index.html","91055389a81f253b277743232c794aec"],["categories/存储/index.html","1220e738f65c3d880cd35a74233a3b5f"],["categories/存储/nfs/index.html","78714cca9a6632cf1fc1f0872537c007"],["categories/技术文档/index.html","0305373037a0b34f32c2a79e61c65b3c"],["categories/有趣/index.html","e270dbe744dab2d23caa8b6d5fb23f41"],["categories/有趣/二次元/index.html","6272916db72a4cdd52a1361a5aac62b1"],["categories/流量复制工具/gor/index.html","329a2811947f7c0086643590a6d54e97"],["categories/流量复制工具/index.html","3d97ac8818cdb68aae8a0fd47d4bae6b"],["categories/网址/index.html","7f7704bff8a95bbc52bcb3c909fcb6ee"],["categories/网址/大佬博客/index.html","ea971460197c2d6d0dab0aa9f186a4d8"],["categories/网址/收藏/index.html","66fd4466000d1e773ca77258fb94112e"],["css/main.css","312d6db7597f3f28ddefcd7e74bf21df"],["images/16/容器的原理-1.png","1c184a092af6b6829c49ee20e70d132a"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["images/blog6/rancher-pv.png","d2a7e4bbfad5f71e75c9d5459cf5a464"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/docker1.jpg","5c611dd864017adeff648bca93d53f41"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/jixie-title.jpg","3ebd10201e23ecf68aba4524c020db0d"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["images/tcp三次握手图.png","32ddd8df35bd5762604327b25758370e"],["images/tcp四次挥手图.png","684b2b4a0286acadc32247d693dbd961"],["images/test1/test1.jpg","60b725f10c9c85c70d97880dfe8191b3"],["images/title1.jpg","fa2db043867c4c5654471e21ad36e5c0"],["images/title2.jpg","b6e57860ebc3fcdcf150a6a4cf3402ab"],["images/title3.jpg","f0b1554cfa4dd1193719dcfeb9e4de28"],["images/title4.jpg","6eb7bcbb846d1123e830488d75028df7"],["index.html","c1f2ef639330b02a24274f35ea678dc0"],["js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["js/src/instantclick.js","865d92a4a07409b7fed739e6a108e9c4"],["js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["js/src/live2d.js","3359a94d733737dbdd290dd41f9cef0b"],["js/src/love.js","7bcfdb57debd43483174cf9e15ab37cc"],["js/src/love2.js","2b51ddac5207cba4153da31e9132414c"],["js/src/motion.js","706d085e6cfec6f3e92dedc590d68d68"],["js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["js/src/schemes/pisces.js","1bd23ed75238ebf11afe2aa6b1c3a25b"],["js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["js/src/utils.js","f06ffce70453ad3a4d9611fdde5ca6c3"],["lib/canvas-nest/canvas-nest.min.js","2361106788cc4ea719ed76f52b413e46"],["lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["live2d-widget/README.html","9941b5173b7915eb6158e62f02cd9ea3"],["live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["live2d-widget/autoload.js","fc45c81e48138bde62e7e742cbbdabb9"],["live2d-widget/demo/demo1.html","82a14d37dbd83931644a4ad6ea1f9eb2"],["live2d-widget/demo/demo2.html","6babb045ef6905badc0dbc5e0d98cede"],["live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["live2d-widget/waifu.css","c4dae5924f2fb0b5ea6ef26aaab80db9"],["page/2/index.html","03a2a119870931cb89ebd3487e3f0ab9"],["page/3/index.html","f215924ac95608034c74b9f16fcab521"],["tags/awk/index.html","25da872de9692d011829737ee2c7dcb6"],["tags/ceph/index.html","fbf1090d0107e9b68ec068baeb6f2881"],["tags/cephfs/index.html","e997c196379752fbaa9670a3815203da"],["tags/cloud-native/index.html","3ea6bd28433af6253f5a348934b07369"],["tags/docker/index.html","410087284bd0d268bcfa7df24afe6a89"],["tags/elasticsearch5/index.html","8fa8b0a91a354c98a579d6b8f1cfbfed"],["tags/elasticsearch7/index.html","63aaee3dbd453995ab297840bb211179"],["tags/elk/index.html","2963c9584baf6086d661544b9374c105"],["tags/elk7/index.html","b87c8f92dc31e2ad36caf2067103a0d8"],["tags/filebeat7/index.html","f81d2ff8f4925f099d12827c5d1fa1f6"],["tags/gor/index.html","6fe65326da2edb0bbd492d07213f199c"],["tags/hexo6/index.html","23b1b891a4ef4cfb35702011b9198c7d"],["tags/hexo美化/index.html","17ff3c130292c8b763bf478871f03f95"],["tags/http流量复制工具/index.html","84121b8ec8a7851f5c48ccae81f21fe0"],["tags/index.html","53d56a80b310d9baf734c6445c6eae3b"],["tags/k8s/index.html","8ef59d75f7df240383997bbaf232e4df"],["tags/k8s存储/index.html","76e85fab5bf8a4e590731e24e9b91aef"],["tags/linux/index.html","81c0e986e9b572fe5ab6e75481d60966"],["tags/logstash/index.html","c2c1174ac479c0cc1a7b73904d202563"],["tags/markdown/index.html","47a665cfef7644fa47f118ec53a188f9"],["tags/mysql/index.html","4a6f0a09d428062a553b328058c3c250"],["tags/mysql5-7/index.html","894adc383316569c8b431555e9a0ba4b"],["tags/nfs/index.html","3c82a67b93f2248a02daed4223e9efac"],["tags/nginx/index.html","554d30ede6a1d97e0b99632f438f109c"],["tags/php7/index.html","79101d66f2b6ff66ffc13292c1af7e59"],["tags/shell/index.html","8b26b9b61e719fea33ac3f7b21aa2cf5"],["tags/storageclass/index.html","a96bd8b99c6ddd1b6b86157cf45622c1"],["tags/云原生/index.html","d18b5877ed8f70253061e52c13d1b83a"],["tags/大佬博客/index.html","104049709d6bf843212d4c6b207b4f96"],["tags/收藏/index.html","bce2de84522474830cf787257743f9a9"],["tags/特效/index.html","cd55fab9736d7c57059d65b8dacc9447"],["tags/网址/index.html","fc47aad6375a9d1d0ac434a280a0b6f1"]];
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







