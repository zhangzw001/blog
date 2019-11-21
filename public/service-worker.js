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

var precacheConfig = [["2019/09/19/2-部署elk7-2-0/index.html","bc4faa2861cea17c6f6ee86e1b08d442"],["2019/09/19/首次搭建hexo博客系统/index.html","9519f78cf893b1dca7fb68359bfd220e"],["2019/09/20/3-k8s遇到的一些问题统计总结/index.html","111c01bf1cf5e48ee1a449742a067d2e"],["2019/09/24/4-hexo鼠标移动和鼠标点击特效/index.html","66410cdecfdf683fe2a681264acaa166"],["2019/09/24/5-hexo添加看板娘/index.html","828350fa308336f436f38e2bb57b2e8a"],["2019/09/26/6-ceph安装部署/index.html","d3e6699d5fe741c3ce13f831fad6de3f"],["2019/09/26/7-k8s部署storageclass动态创建pv-nfs-rbd/index.html","952452d9420e67ab8fd2f5dafef559f3"],["2019/09/26/8-mysql5-7二进制部署/index.html","f4c5599ffb269f41f1e236e3acb5e2dc"],["2019/09/26/9-linux遇到一些问题统计总结/index.html","448213a68b2797c5185d9bb713c9691d"],["2019/09/27/10-centos6安装nginx1-16-php7-2/index.html","7384b5fa4888ad8ff225210c2e98c76d"],["2019/10/10/11-mysql简单记录/index.html","7b7beeca25edbe7a8d56cae159b496ac"],["2019/10/11/12-awk简单记录/index.html","5b5dce9750e1164e0228155bb116fbca"],["2019/10/12/13-云原生博客汇总/index.html","f978f76e4b61af5077296a7693cfa2c1"],["2019/10/15/14-mysql目录copy方式迁移/index.html","96904d8b270eb9b100c8227d0ada5afd"],["2019/10/16/15-docker简介和使用/index.html","286dab00a3cb88ef104966a6d9039b4b"],["2019/10/16/16-dockerfile介绍/index.html","57205acf1adcc4ddfdfae717ae31ad75"],["2019/10/16/17-markdown一些写法记录/index.html","7c9d03236a3dca965d42325545e2888e"],["2019/10/17/18-收藏链接/index.html","1a6366c7cb581072bf9d25543c5a0698"],["2019/10/17/19-shell中gt和>的区别/index.html","f22daf15f7ff04defb4e6c645ddb5aa2"],["2019/10/24/20-k8s搭建mysql5-7-24主从/index.html","91c72dc863099f83162d8fa83b3b7759"],["2019/10/28/21-流量复制工具gor/index.html","d4c4f7b9ad955b7c55b289b70da25f8d"],["2019/10/28/22-es集群磁盘扩容/index.html","64a20a589cef7cf7aa81658e3bd0888e"],["2019/10/29/23-mysql5-5主与mysql5-7从部署配置/index.html","af32271ce38ac9b8e9b6ee17bba0fdf9"],["2019/10/30/24-filebeat7收集mysql慢日志到es/index.html","1bf1cd2a21c8dc41070c98c7372dcf34"],["2019/11/01/25-一些脚本汇总/index.html","312ad8744d70d1ed0d3789a1b1f69d0a"],["2019/11/08/26-logstash配置/index.html","ee8cb43ebcc6adafc2cd2afa8b6e3236"],["2019/11/21/27-k8s一条命令部署es5-2-0集群/index.html","b7fca6c2757c44bb5f382a316c1a7bd1"],["archives/2019/09/index.html","a43d04f604d3d693eee0bc0ad155a0cf"],["archives/2019/10/index.html","2cd4ca72d7f097303408b6cfb459d31b"],["archives/2019/11/index.html","c6d895430729296535be980926f066af"],["archives/2019/index.html","77725afa2c80cf4afd4ecc62d62c9c5d"],["archives/2019/page/2/index.html","f3549e970d0cf357177d6060a6ae560b"],["archives/index.html","d34f1853a616d38135a6e1bf6d2d3b09"],["archives/page/2/index.html","49adf328a3420eb12b37d3a6e27c882a"],["categories/docker/Dockerfile/index.html","895b1a8b8a54bd4db6bc856024eeaa00"],["categories/docker/index.html","74802e66b9284d39fd85ebb0dc01272c"],["categories/elk/elasticsearch5/index.html","198dd037f29e8b16c3f1dafe2a23b4f7"],["categories/elk/elasticsearch7/index.html","09e592e703e61b493deeeb91f5ce4fef"],["categories/elk/index.html","51721fefe4bfb2240cafe6690c594a55"],["categories/elk/logstash/index.html","bd15d9ffd1d5b05886961f64e0ef595f"],["categories/elk7/filebeat7/index.html","ca3bfa598e8ce4339e0c42d136e306b0"],["categories/elk7/index.html","b1bda2badc61dddd84f183c838b7465a"],["categories/index.html","980943d7b38598364c6b34c521feef8e"],["categories/k8s/elk5/index.html","67b46ae09bfd7a9286b4edded5c0681c"],["categories/k8s/elk7/index.html","66d77c549053b3806b0dd46ed8f7536d"],["categories/k8s/index.html","c0e0f20be4039496042fe1b7b05aa133"],["categories/k8s/mysql/index.html","245bce530aa155748c936933eff7976b"],["categories/k8s/storageclass/index.html","b82c1eefbacf13cd6f5bf28f0a7c30f7"],["categories/k8s/问题总结/index.html","a42b119e61e1469289526e1b8bec4772"],["categories/linux/awk/index.html","d43ffff1d0695216592cfe96de6399bf"],["categories/linux/index.html","af7f1c3e93dd0cdb8e178caaee8c80ef"],["categories/linux/shell/index.html","a11c33d742d22c5f8adef46ea7f4c691"],["categories/linux/问题总结/index.html","3d07bec5a94e6090415bd9fb55128d9d"],["categories/markdown/index.html","63f11f5db58e22ff498addafff36b61d"],["categories/mysql/index.html","2b0bc69cef7b705a67eb31a75a07193a"],["categories/mysql/主从/index.html","902d81b5a2d8b9365a44c1f7b753c8ed"],["categories/nginx/index.html","6eb2bb631f24df794cc1454019fffa23"],["categories/博客/index.html","60c8e444a3432c4db0974def1d150ca3"],["categories/博客/美化/index.html","a89a19af8b505338909b1f84010a8241"],["categories/存储/ceph/index.html","1159c2e7837cd9c36424a4914b76e77c"],["categories/存储/index.html","d794661729b44481b573b79b4084d1b2"],["categories/存储/nfs/index.html","6e74ca4d2f1e1a88aeeb68436e07d764"],["categories/技术文档/index.html","823170ae87ffdb1525e9384d261e887d"],["categories/有趣/index.html","b7466cfcba297c4d677b03315201c578"],["categories/有趣/二次元/index.html","b589a224d04efb73deaae9c29ffc9050"],["categories/流量复制工具/gor/index.html","5dad84e08d3744d3793987279356da9b"],["categories/流量复制工具/index.html","abc0e9f5483595ddcb1bcc0348273f23"],["categories/网址/index.html","fb78c6700c704efa0f9e922cb3a2789f"],["categories/网址/大佬博客/index.html","8406de6221551e17e13a158bccc667c1"],["categories/网址/收藏/index.html","f5ec32aec3d263e2d987eefcc3595fe6"],["css/main.css","9b1f09f66a4277e04f1209d11700591a"],["images/16/容器的原理-1.png","1c184a092af6b6829c49ee20e70d132a"],["images/27/img1.png","74279f54a523a47f82a95a04ccfc9eb4"],["images/27/img2.jpg","93a32e8f4e52a9ea2a28b72a4223c2a9"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["images/blog6/rancher-pv.png","d2a7e4bbfad5f71e75c9d5459cf5a464"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/docker1.jpg","5c611dd864017adeff648bca93d53f41"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/jixie-title.jpg","3ebd10201e23ecf68aba4524c020db0d"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["images/tcp三次握手图.png","32ddd8df35bd5762604327b25758370e"],["images/tcp四次挥手图.png","684b2b4a0286acadc32247d693dbd961"],["images/test1/test1.jpg","60b725f10c9c85c70d97880dfe8191b3"],["images/title1.jpg","fa2db043867c4c5654471e21ad36e5c0"],["images/title2.jpg","b6e57860ebc3fcdcf150a6a4cf3402ab"],["images/title3.jpg","f0b1554cfa4dd1193719dcfeb9e4de28"],["images/title4.jpg","6eb7bcbb846d1123e830488d75028df7"],["index.html","9e7bea5ebed667ccde48dbba1e2532ac"],["js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["js/src/instantclick.js","865d92a4a07409b7fed739e6a108e9c4"],["js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["js/src/live2d.js","3359a94d733737dbdd290dd41f9cef0b"],["js/src/love.js","7bcfdb57debd43483174cf9e15ab37cc"],["js/src/love2.js","2b51ddac5207cba4153da31e9132414c"],["js/src/motion.js","706d085e6cfec6f3e92dedc590d68d68"],["js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["js/src/schemes/pisces.js","1bd23ed75238ebf11afe2aa6b1c3a25b"],["js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["js/src/utils.js","f06ffce70453ad3a4d9611fdde5ca6c3"],["lib/canvas-nest/canvas-nest.min.js","2361106788cc4ea719ed76f52b413e46"],["lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["live2d-widget/README.html","9941b5173b7915eb6158e62f02cd9ea3"],["live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["live2d-widget/autoload.js","fc45c81e48138bde62e7e742cbbdabb9"],["live2d-widget/demo/demo1.html","82a14d37dbd83931644a4ad6ea1f9eb2"],["live2d-widget/demo/demo2.html","6babb045ef6905badc0dbc5e0d98cede"],["live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["live2d-widget/waifu.css","c4dae5924f2fb0b5ea6ef26aaab80db9"],["page/2/index.html","8d37f035b3539eb85fc06fa9f2881f86"],["page/3/index.html","b0ef9fba692fa93f75f93628a80ef83c"],["tags/awk/index.html","4a2b8a94885c79c8ac7b5ad7fed1ec4f"],["tags/ceph/index.html","9c8806b915bbf62d9c60c6518721ac1f"],["tags/cephfs/index.html","0e5bf711284331c2939ce0a57013a4f5"],["tags/cloud-native/index.html","31bc66904793bc95d862b120744b46bf"],["tags/docker/index.html","27386ebf62b383c212c1156ec730937c"],["tags/elasticsearch5/index.html","92f94dd87888bd43ee2b80d8c656232a"],["tags/elasticsearch7/index.html","df476122f2f369847832f7f398c93170"],["tags/elk/index.html","8f2c634df9a1bf19bd6281ee10413567"],["tags/elk5/index.html","decc6f03d9e33aadf5491a4c11882df1"],["tags/elk7/index.html","99a9ed0219223a3fddd8b99a1fbf1b5b"],["tags/filebeat7/index.html","5d39b9f9ee5652ec2e33faa7fbf8bd5b"],["tags/gor/index.html","5a8c4db54b2f26a1f2195ba3cc77bb6a"],["tags/hexo6/index.html","9d32c045d82c3e1c985db7afa6d63dd8"],["tags/hexo美化/index.html","a5b37ec21fc3daefe3548df994e1ab4d"],["tags/http流量复制工具/index.html","eaf847dd1e4ea707fd02828ce220ead2"],["tags/index.html","97929df0d02ae344ae541c633b4b900f"],["tags/k8s/index.html","63c7aa5a638779362352a7f29fd8461e"],["tags/k8s存储/index.html","b3bc49090dac5c02af1bc1b8cdd65303"],["tags/linux/index.html","316378b07a0dbc8ad123adf608535158"],["tags/logstash/index.html","79665bf9da206e4409891a82b189be1e"],["tags/markdown/index.html","66782fee810c1b452acbcfbcfccff36c"],["tags/mysql/index.html","dd18c84d9123a22abf30548194a54701"],["tags/mysql5-7/index.html","47718fb6598acfb0822916af6949b629"],["tags/nfs/index.html","5a36c368ff92c0e562ea312f526baee1"],["tags/nginx/index.html","0a30231fa27f4bdd81bf2c85fdb316bf"],["tags/php7/index.html","4ceaa6e0aae812ba4dedb500bcb2f4a5"],["tags/shell/index.html","f3a520654cd3b702c79154a5ce220d15"],["tags/storageclass/index.html","3d95ee78f78d037451c59d8234a6530e"],["tags/云原生/index.html","b3c8404035ee8038e733ce5feb23db67"],["tags/大佬博客/index.html","338f16c1a90bdf87e7883ed7accdeac5"],["tags/收藏/index.html","85ad97471e464f34aae4ae3ee48fe757"],["tags/特效/index.html","3695c241bc461cf57778991cf39e8901"],["tags/网址/index.html","62c6b06126c207c35eefca76088aabe4"]];
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







