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

var precacheConfig = [["2019/09/19/2-部署elk7-2-0/index.html","f1b8a49c3fc093348401d5e29be2a73b"],["2019/09/19/首次搭建hexo博客系统/index.html","8c4c51c00274696680dd8c77a5815047"],["2019/09/20/3-k8s遇到的一些问题统计总结/index.html","2c0353ae371516a2ff1d71b30797ff45"],["2019/09/24/4-hexo鼠标移动和鼠标点击特效/index.html","302c1f709f4bfec31c1788d183428972"],["2019/09/24/5-hexo添加看板娘/index.html","2c03a6569dfa40e1566e09ccd313831e"],["2019/09/26/6-ceph安装部署/index.html","5d8a97db2780cf530760e4bfc80b5899"],["2019/09/26/7-k8s部署storageclass动态创建pv-nfs-rbd/index.html","7b5f5b87ad9ceef15f98c51d48e31115"],["2019/09/26/8-mysql5-7二进制部署/index.html","fa8057a3be498a9e79754b2e9460edfe"],["2019/09/26/9-linux遇到一些问题统计总结/index.html","ef2c863955ec86139ea7a6144a4914ef"],["2019/09/27/10-centos6安装nginx1-16-php7-2/index.html","5aebc9ecd477fbf35704480ce4facc5f"],["2019/10/10/11-mysql简单记录/index.html","ccfe2d5c0baac83a890fba8c067ce618"],["2019/10/11/12-awk简单记录/index.html","ce33ebbffde053ac203ca1d67a6abb37"],["2019/10/12/13-云原生博客汇总/index.html","8379f01c9008854fb8b721ba40786b38"],["2019/10/15/14-mysql目录copy方式迁移/index.html","5482d59fecb8ad1d8aff9283117a6ebe"],["2019/10/16/15-docker简介和使用/index.html","b7b9f557bb32eef62e42b0f5fdaec84b"],["2019/10/16/16-dockerfile介绍/index.html","46dec349705a1335c034cd8cfef062e0"],["2019/10/16/17-markdown一些写法记录/index.html","99d2c7740a1c253ec2c19cdc0243f04f"],["2019/10/17/18-收藏链接/index.html","f9766932e4ddb5c03e702854f4f9b133"],["2019/10/17/19-shell中gt和>的区别/index.html","b67f8aad2e0321ba1fbc1ea426405d59"],["2019/10/24/20-k8s搭建mysql5-7-24主从/index.html","6cbcaa29f4303ddf13b270fc566ab3ab"],["2019/10/28/21-流量复制工具gor/index.html","3b0f509141efad7f4bb562d6c9f900c8"],["2019/10/28/22-es集群磁盘扩容/index.html","80fe01aee8bd321067236cd825789cf1"],["2019/10/29/23-mysql5-5主与mysql5-7从部署配置/index.html","6209be626623f4ff8883c18b29215879"],["2019/10/30/24-filebeat7收集mysql慢日志到es/index.html","8febd1cab5b2041004bfa1a78da2e2a3"],["2019/11/01/25-一些脚本汇总/index.html","7dfac8a3c2af7ee2c7c1dc7552967bf1"],["2019/11/08/26-logstash配置/index.html","06b2fcd7c5e3a556dde515aa58a3be5e"],["2019/11/21/27-k8s一条命令部署es5-2-0集群/index.html","7372f4145a172d56ff86802a3a4846dd"],["2019/11/25/28-k8s1-16使用旧yml部署配置问题/index.html","39306b69032a916263ca594e27f6cf6b"],["2019/11/25/29-k3s安装配置/index.html","5692e8fc0c65a19a31b1e2f835d846b3"],["2019/11/25/30-k3s集群部署项目报挂载nfs错误/index.html","2a9c4877530a4a46459016d3b5f8eb0b"],["2019/11/26/31-systemd一些命令/index.html","62d0838ed246a3d506088c3aafe353e9"],["archives/2019/09/index.html","71ed9e3892470311b9ee21a34f2a136c"],["archives/2019/10/index.html","dae210aba03ac7ccf9ad5adca86c2448"],["archives/2019/11/index.html","c4308658b2702058ed0eac660e4ed5c9"],["archives/2019/index.html","0ed831b55282ff1c2a82e9632c8aa38d"],["archives/2019/page/2/index.html","02e2dc6388d08df7e2fc67d7c28904b6"],["archives/index.html","0630caa2b140b35909a0a8e9225dda65"],["archives/page/2/index.html","14616ce8b68f0fe2d18b6599ee5a3e1b"],["categories/docker/Dockerfile/index.html","2c0b6f8d48a7d0e52b5ff2e17bf7fb67"],["categories/docker/index.html","6dc6744162b7485148bf936188f6d68a"],["categories/elk/elasticsearch5/index.html","f3c44750db7d378c87d8ae4003896aef"],["categories/elk/elasticsearch7/index.html","fc028734ef739212ced858184e5a7a0a"],["categories/elk/index.html","7ea990e9d0329a06e85a3673483142bd"],["categories/elk/logstash/index.html","c2a68cc722bcc8fff8e63e6bb68ebab3"],["categories/elk7/filebeat7/index.html","f3b96cb9f45f0f51946c6f68206469cd"],["categories/elk7/index.html","3e7990440d7c396b2311dac11153d742"],["categories/index.html","a43a9677a8ec2e1462f5173fd5ac6bc1"],["categories/k3s/index.html","56ee8d284ccbceee9686d073e496a0e8"],["categories/k8s/elk5/index.html","b4ed9e7d02dd996fb9c171ff9f0de1a0"],["categories/k8s/elk7/index.html","116329922afbf956d92cfb4ed80f12d5"],["categories/k8s/index.html","85700d723945e7988788d95d4bfa191a"],["categories/k8s/mysql/index.html","50332f63525a43eeda2255aa3cc0537b"],["categories/k8s/storageclass/index.html","f69cf78010501237dbe06e501485d852"],["categories/k8s/问题总结/index.html","7b7da25c6716577e63327bbab8acae6f"],["categories/linux/awk/index.html","6542adc336369b26ab324e31ecd89bf2"],["categories/linux/index.html","7b58179ab81f74a6e88fc5bfc5a47536"],["categories/linux/shell/index.html","08e613bb126ab2b24b120d51e3c766a2"],["categories/linux/systemd/index.html","ced8fca45304d874618d63bd9e7b34b8"],["categories/linux/问题总结/index.html","97cef2d648d891b27d7d73bbd6ffbdbe"],["categories/markdown/index.html","b08c80f51e2d192063f4fc50c17e1a68"],["categories/mysql/index.html","1bb70f2fb75e695282d429569ec83328"],["categories/mysql/主从/index.html","4bfeefae4c7da6663dad31136ca51b5a"],["categories/nfs/index.html","795cb64bef558615dcfe7b0e6e24d53d"],["categories/nginx/index.html","ede22e587bd2ac6ea28f2ff1ddb8c98f"],["categories/博客/index.html","7894aa9afbf9cfddfd3e233d5fe10ad6"],["categories/博客/美化/index.html","688c0b690ca52182216121f9118c4fe8"],["categories/存储/ceph/index.html","a1b26019a4198465b38b864aadef3e27"],["categories/存储/index.html","b61e3e9d9fb2a8c0678821c39ff00d4f"],["categories/存储/nfs/index.html","ed0b5691f5be9c096e4a4ee2d03d1fa7"],["categories/技术文档/index.html","98f4d83e83f135cd3a6d4253720a2848"],["categories/有趣/index.html","a715f123952df241a02f304c8a87be78"],["categories/有趣/二次元/index.html","eba7212705537c43af41cefa88aaf421"],["categories/流量复制工具/gor/index.html","eced392432929f7665f46b48e6b29b48"],["categories/流量复制工具/index.html","f6da624ce0f596b01d3f4653c4983c0d"],["categories/网址/index.html","bff0056b95658492f752effdb58f5915"],["categories/网址/大佬博客/index.html","fce71049588c0cd15fdbb9d860f377b3"],["categories/网址/收藏/index.html","cd122644ee5035c7519884bf37379156"],["css/main.css","eb6bdbb03f2d05236454e571a4e7049e"],["images/16/容器的原理-1.png","1c184a092af6b6829c49ee20e70d132a"],["images/27/img1.png","74279f54a523a47f82a95a04ccfc9eb4"],["images/27/img2.jpg","93a32e8f4e52a9ea2a28b72a4223c2a9"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["images/blog6/rancher-pv.png","d2a7e4bbfad5f71e75c9d5459cf5a464"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/docker1.jpg","5c611dd864017adeff648bca93d53f41"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/jixie-title.jpg","3ebd10201e23ecf68aba4524c020db0d"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["images/tcp三次握手图.png","32ddd8df35bd5762604327b25758370e"],["images/tcp四次挥手图.png","684b2b4a0286acadc32247d693dbd961"],["images/test1/test1.jpg","60b725f10c9c85c70d97880dfe8191b3"],["images/title1.jpg","fa2db043867c4c5654471e21ad36e5c0"],["images/title2.jpg","b6e57860ebc3fcdcf150a6a4cf3402ab"],["images/title3.jpg","f0b1554cfa4dd1193719dcfeb9e4de28"],["images/title4.jpg","6eb7bcbb846d1123e830488d75028df7"],["index.html","c8fca5eb868bc9d7dc57305c2dd8d634"],["js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["js/src/instantclick.js","865d92a4a07409b7fed739e6a108e9c4"],["js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["js/src/live2d.js","3359a94d733737dbdd290dd41f9cef0b"],["js/src/love.js","7bcfdb57debd43483174cf9e15ab37cc"],["js/src/love2.js","2b51ddac5207cba4153da31e9132414c"],["js/src/motion.js","706d085e6cfec6f3e92dedc590d68d68"],["js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["js/src/schemes/pisces.js","1bd23ed75238ebf11afe2aa6b1c3a25b"],["js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["js/src/utils.js","f06ffce70453ad3a4d9611fdde5ca6c3"],["lib/canvas-nest/canvas-nest.min.js","2361106788cc4ea719ed76f52b413e46"],["lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["live2d-widget/README.html","9941b5173b7915eb6158e62f02cd9ea3"],["live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["live2d-widget/autoload.js","fc45c81e48138bde62e7e742cbbdabb9"],["live2d-widget/demo/demo1.html","82a14d37dbd83931644a4ad6ea1f9eb2"],["live2d-widget/demo/demo2.html","6babb045ef6905badc0dbc5e0d98cede"],["live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["live2d-widget/waifu.css","c4dae5924f2fb0b5ea6ef26aaab80db9"],["page/2/index.html","3794d5f2b0f9e3ac902159e4b7dccee6"],["page/3/index.html","32b64c2a162fdc500179cbaadfddb7e4"],["page/4/index.html","3d8b398c763a964dfb28ebc0e62ab4d3"],["tags/awk/index.html","6dcc5c8460871fdd38dd4512f3e83fb8"],["tags/ceph/index.html","d1a4386086fa3d9dff065999cc055c7c"],["tags/cephfs/index.html","9401e7dd51e2a294238a2088eb699cd0"],["tags/cloud-native/index.html","7467deebc17894563f6c1c1e088a8bc1"],["tags/docker/index.html","b374e6b10cce804262a12c2da200db50"],["tags/elasticsearch5/index.html","f371d3bb3cbd6168cc47b8000270b747"],["tags/elasticsearch7/index.html","0af3570c0d0828179deb248a37695a9a"],["tags/elk/index.html","67080ea9f69a6d2f10550e8af56759f1"],["tags/elk5/index.html","29141f7bcbff7ec085bb1518aef4f2c4"],["tags/elk7/index.html","5a6bc1e65258b283ce02b1cd00ddc71b"],["tags/filebeat7/index.html","075b40bda338c961a2f7e068157eab27"],["tags/gor/index.html","d0ad4cff656416b18a2b2a4fbc64af16"],["tags/hexo6/index.html","d504d2b339707e600585cbcf3bd975a1"],["tags/hexo美化/index.html","168b3576d22a1923fd0a48844886d0fa"],["tags/http流量复制工具/index.html","e1ddc85cfa7a33de463ee01c7c5d89b7"],["tags/index.html","7865c21aeac50610b42094cf47676a11"],["tags/k3s/index.html","91b2e756b7f5a790ceac7dabde48a26c"],["tags/k8s/index.html","a1fc9278966d5169ac9243a75e655325"],["tags/k8s存储/index.html","b54aa81f2c184ffdf4a5713d6f4c57f7"],["tags/linux/index.html","1fa55410907767ff61e956a39c3abd5b"],["tags/logstash/index.html","ce5f0757eaa9f0453aef79c453a6a003"],["tags/markdown/index.html","979c000592c8bed41192ff22f2c0c145"],["tags/mysql/index.html","22bf6913eca3e7ea0ed90b82166e8126"],["tags/mysql5-7/index.html","61befd7093e814d7d8176aca348e72ad"],["tags/nfs/index.html","7ba0ed640d2a6a313946054f75f58fd0"],["tags/nginx/index.html","ce0578282537b4302ca75ba0eaf7a35e"],["tags/php7/index.html","e9b5c4b2382659df90bdf359979987a1"],["tags/shell/index.html","34ae6333e41475d0eeaccd1152277fcc"],["tags/storageclass/index.html","6fe2faf5f4e384b39933366d2b6fbdac"],["tags/systemd/index.html","1121d097d21673ac211253ddb2a10ee5"],["tags/云原生/index.html","f0ee24170977b6c87ac85212a13d120e"],["tags/大佬博客/index.html","7666ee533dfc31a78df6853377a1a6e2"],["tags/收藏/index.html","3a310e3319f5f98681893bb740812ac3"],["tags/特效/index.html","42f1336860cb103cffb6d4f644a336a6"],["tags/网址/index.html","f0af348af10ce49c53d3d3b3e0b013e6"]];
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







