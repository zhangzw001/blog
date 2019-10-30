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

var precacheConfig = [["2019/09/19/2-部署elk7-2-0/index.html","c355b26f547e87fcece57173e8adac49"],["2019/09/19/首次搭建hexo博客系统/index.html","d5c960d7a030a4e43240a823f45eefc7"],["2019/09/20/3-k8s遇到的一些问题统计总结/index.html","6b286ed4583eeed6c8418979639a7088"],["2019/09/24/4-hexo鼠标移动和鼠标点击特效/index.html","e57ca08d5bc56f8743dbd04c938b5169"],["2019/09/24/5-hexo添加看板娘/index.html","36ff11215aaafc03e34993c7264b276e"],["2019/09/26/6-ceph安装部署/index.html","e9633d8f0a1899bff0c16f17a6bc68c4"],["2019/09/26/7-k8s部署storageclass动态创建pv-nfs-rbd/index.html","b5ce06b39f86a1d69d029de86b9c83bc"],["2019/09/26/8-mysql5-7二进制部署/index.html","7f2b0b7e8632cbd164970d321a526f29"],["2019/09/26/9-linux遇到一些问题统计总结/index.html","af7f35b7956edc3f1ea436168752a7af"],["2019/09/27/10-centos6安装nginx1-16-php7-2/index.html","be864ff74053dcb93394ab3e447e28fa"],["2019/10/10/11-mysql简单记录/index.html","37c0f81772a0d197c1af2daaa63f98e7"],["2019/10/11/12-awk简单记录/index.html","29da50bafb1cd6b405c8889fc5f6d13b"],["2019/10/12/13-云原生博客汇总/index.html","03e93f1bb2f99ed957149b32673d34ea"],["2019/10/15/14-mysql目录copy方式迁移/index.html","b8b95e9fa61cdd6b197fd6d441876cd0"],["2019/10/16/15-docker简介和使用/index.html","4de0f7e021b72bb0b9294a374fef9c9b"],["2019/10/16/16-dockerfile介绍/index.html","cfdd6cb76a23074388866ba00e8ec033"],["2019/10/16/17-markdown一些写法记录/index.html","2dfee87c7b58763f69c220f4827cf200"],["2019/10/17/18-收藏链接/index.html","9c4a43de7ac02c37450118c556162caf"],["2019/10/17/19-shell中gt和>的区别/index.html","e8497c3b79250320b24b94b7b683b60a"],["2019/10/24/20-k8s搭建mysql5-7-24主从/index.html","080084b95c3c201072ee67f687bff5a0"],["2019/10/28/21-流量复制工具gor/index.html","e1f03e0a7cd2a2792ef47775f31cce0f"],["2019/10/28/22-es集群磁盘扩容/index.html","36fc618ae25b02f1ee7ddc354c970a7c"],["2019/10/29/23-mysql5-5主与mysql5-7从部署配置/index.html","ecbc14730b191a59dfe7c83d491edd48"],["archives/index.html","bbc6e168362d780c33469b9aba723b4c"],["categories/docker/Dockerfile/index.html","67d0160ef0b91f1e9737a0a0972f9abb"],["categories/docker/index.html","3ac261b54236bdf0716deb02459554f6"],["categories/elk/elasticsearch5/index.html","1c4bb32bbdb527f7ffc67b373eccdbe2"],["categories/elk/elasticsearch7/index.html","dfa07b1e687bc7a295644e74d194f621"],["categories/elk/index.html","a4edd10da50dfe74a7687617ec2cb474"],["categories/index.html","88cae059988bb15680d03d652a6b7faf"],["categories/k8s/elk7/index.html","a6904cdbea1afa2a834afbbfdf97ee17"],["categories/k8s/index.html","c85b372d77c5d7075687ac35ec7e2e4a"],["categories/k8s/mysql/index.html","e8be4b5d56e8e614bc4e02b47e3b97c9"],["categories/k8s/storageclass/index.html","ea755bd211aada52ca3e93ee9b275c40"],["categories/k8s/问题总结/index.html","fa57e87ecda88935ac87f354e7768777"],["categories/linux/awk/index.html","569e072ab03e38b854f6423bcb5e797d"],["categories/linux/index.html","2c6c7756621a59a392776593b60d9a15"],["categories/linux/shell/index.html","52826bc1c4c93261b25ee29e2a4cafb1"],["categories/linux/问题总结/index.html","3c09920620e8a632b8565f26b91a4d8c"],["categories/markdown/index.html","d7051a2fd1992d1e890cb4e321bb2a42"],["categories/mysql/index.html","8ea71fba3dcc504da7bb59297878ed06"],["categories/mysql/主从/index.html","299ed63d64b4a10bf821c5dc8efcbd1a"],["categories/nginx/index.html","34c9f001a0e8de867751893a87419f6e"],["categories/博客/index.html","b1fc9a18bbde772995ea21a36bb633f9"],["categories/博客/美化/index.html","314ceca7a656bddc327f24c534bd10ec"],["categories/存储/ceph/index.html","b0d8b22e068c47b8b74b89d6f99e3f22"],["categories/存储/index.html","e8339d38ef822f2c811e6c4681747ab7"],["categories/存储/nfs/index.html","ca9c7976e2fb6a4c06f772b6f64132d0"],["categories/技术文档/index.html","f0c9fe3df725a04a89e1682215df6630"],["categories/有趣/index.html","5a7c717df468e76305ce58fae329b21f"],["categories/有趣/二次元/index.html","dcd1bb80b920683717ddd4bf198ad1bd"],["categories/流量复制工具/gor/index.html","1ff5d5b42c7cda2e01b35af7b5959f87"],["categories/流量复制工具/index.html","048c0b035385283d7e17f22f3ae4ac77"],["categories/网址/index.html","aa9031752086f1571118b8f4774fdc49"],["categories/网址/大佬博客/index.html","55088f2dc9dce687c5c082b0399d9a21"],["categories/网址/收藏/index.html","b089df7615b82586e92d8abd447c3e4b"],["css/main.css","3fd290eeb680ed478d63b13ad4314508"],["images/16/容器的原理-1.png","1c184a092af6b6829c49ee20e70d132a"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["images/blog6/rancher-pv.png","d2a7e4bbfad5f71e75c9d5459cf5a464"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/docker1.jpg","5c611dd864017adeff648bca93d53f41"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/jixie-title.jpg","3ebd10201e23ecf68aba4524c020db0d"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["images/tcp三次握手图.png","32ddd8df35bd5762604327b25758370e"],["images/tcp四次挥手图.png","684b2b4a0286acadc32247d693dbd961"],["images/test1/test1.jpg","60b725f10c9c85c70d97880dfe8191b3"],["images/title1.jpg","fa2db043867c4c5654471e21ad36e5c0"],["images/title2.jpg","b6e57860ebc3fcdcf150a6a4cf3402ab"],["images/title3.jpg","f0b1554cfa4dd1193719dcfeb9e4de28"],["images/title4.jpg","6eb7bcbb846d1123e830488d75028df7"],["index.html","2f1c3bc5e143bd2c9d85d3bd6872b55b"],["js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["js/src/instantclick.js","865d92a4a07409b7fed739e6a108e9c4"],["js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["js/src/live2d.js","3359a94d733737dbdd290dd41f9cef0b"],["js/src/love.js","7bcfdb57debd43483174cf9e15ab37cc"],["js/src/love2.js","2b51ddac5207cba4153da31e9132414c"],["js/src/motion.js","706d085e6cfec6f3e92dedc590d68d68"],["js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["js/src/schemes/pisces.js","1bd23ed75238ebf11afe2aa6b1c3a25b"],["js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["js/src/utils.js","f06ffce70453ad3a4d9611fdde5ca6c3"],["lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["live2d-widget/README.html","9941b5173b7915eb6158e62f02cd9ea3"],["live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["live2d-widget/autoload.js","fc45c81e48138bde62e7e742cbbdabb9"],["live2d-widget/demo/demo1.html","82a14d37dbd83931644a4ad6ea1f9eb2"],["live2d-widget/demo/demo2.html","6babb045ef6905badc0dbc5e0d98cede"],["live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["live2d-widget/waifu.css","c4dae5924f2fb0b5ea6ef26aaab80db9"],["page/2/index.html","30f7148aa96c71566aa4a3b9e5defd87"],["page/3/index.html","716aa3928d7b1f5d8cb7d83918402893"],["tags/awk/index.html","bb9e52be2b1288c31da55bc540bd8c59"],["tags/ceph/index.html","163229b48da1cab7a984c21c80f05c5f"],["tags/cephfs/index.html","c9c611eb710906e77a10ecdb22fab710"],["tags/cloud-native/index.html","b765ea07be66ec6bee9e72e34da29d99"],["tags/docker/index.html","3141623ce7d26f278f44ed6296e1b763"],["tags/elasticsearch5/index.html","52eec347902ccc8f01286ab6664a7ebe"],["tags/elasticsearch7/index.html","f303f728f4a7063b6c6b5c5dec1d67ce"],["tags/elk/index.html","ee718d61f4032a4dd82c611bddb37029"],["tags/elk7/index.html","a20459233f8d055cbed14a63282d3c1e"],["tags/gor/index.html","df9c3ee51fbc387a8a2ceb4270de3007"],["tags/hexo6/index.html","482d981a7419909a9c50971b6a2b8763"],["tags/hexo美化/index.html","5efb04ffbbcfdb878a260ec6ecb1db5a"],["tags/http流量复制工具/index.html","222bdc7a40e888f16851008d6806c1df"],["tags/index.html","4ca43ba5396436522f29bbd180ebfabb"],["tags/k8s/index.html","e90ab80b0c93317fe5d3fa0c8523c004"],["tags/k8s存储/index.html","ef606db0f740fa3b4b96b9ae755e00d3"],["tags/linux/index.html","7f71ac27a23495834c70c3636e3a4150"],["tags/markdown/index.html","99e7735d79a01f4f56356fe25a7e09e4"],["tags/mysql/index.html","6a141adccda62fbae0a8144bb8b15c65"],["tags/mysql5-7/index.html","67f36dc5506674c6d79354a12bc30e58"],["tags/nfs/index.html","df60f01dd8fdf0a112c20e0a6c671bfd"],["tags/nginx/index.html","9aa403036d0335de1818c4238d970c12"],["tags/php7/index.html","0940f05e20d58b1e4a962ee4220bb0b2"],["tags/shell/index.html","6cc2410ea4bf2d6cd5cd053b8142fdb0"],["tags/storageclass/index.html","0e01d6fad0eb112467c22b38c61208f9"],["tags/云原生/index.html","2847514ebd0fd9b4b01fe584b938a82c"],["tags/大佬博客/index.html","a94b5638f205a5ee802f0113e1115ab9"],["tags/收藏/index.html","db62a525d699d4f6c2d62ae6382de2de"],["tags/特效/index.html","1c93d96134b35f662087f64ab6366ec5"],["tags/网址/index.html","62eef7fca2bf203999724b5d17f2e612"]];
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







