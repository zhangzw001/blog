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

var precacheConfig = [["2019/09/19/2-部署elk7-2-0/index.html","4b7354779e4287132216c971002bc02d"],["2019/09/19/首次搭建hexo博客系统/index.html","5ebc8b0bdf6e6082277eaca400e29094"],["2019/09/20/3-k8s遇到的一些问题统计总结/index.html","7d0fb9bb67759f2328cee4ab362d737d"],["2019/09/24/4-hexo鼠标移动和鼠标点击特效/index.html","f85a2ba857d62c694a48179ce789c655"],["2019/09/24/5-hexo添加看板娘/index.html","2dcaf7419753e419bbbb4ea42de2dd1c"],["2019/09/26/6-ceph安装部署/index.html","fd50c9b9a9d4333583f72200dfc6f669"],["2019/09/26/7-k8s部署storageclass动态创建pv-nfs-rbd/index.html","066a599f7b4c3d4419b830d4b10e017f"],["2019/09/26/8-mysql5-7二进制部署/index.html","99bd37f45c3d8ccea43999fa91adad43"],["2019/09/26/9-linux遇到一些问题统计总结/index.html","abf1d0f6b9c837867e36b6e94ba91a4a"],["2019/09/27/10-centos6安装nginx1-16-php7-2/index.html","f2e87c70c13743932019afa99b12786e"],["2019/10/10/11-mysql简单记录/index.html","899a6cc13c4c650bb86257f699e68d82"],["2019/10/11/12-awk简单记录/index.html","64d2df488603f2added82d58808a83cb"],["2019/10/12/13-云原生博客汇总/index.html","43684e443a0ad4cb6894cdfdb868dc12"],["2019/10/15/14-mysql目录copy方式迁移/index.html","fe5939584c62a5458fe190cd7315fb49"],["2019/10/16/15-docker简介和使用/index.html","2ec9867675c36e2c1cd1e923a6ac27f4"],["2019/10/16/16-dockerfile介绍/index.html","c96bd1614aea633480d7d6894e494ca4"],["2019/10/16/17-markdown一些写法记录/index.html","7bb44f0359fed77e6151ef53cc91fb17"],["2019/10/17/18-收藏链接/index.html","998569e61eca161094bc533754b3b467"],["2019/10/17/19-shell中gt和>的区别/index.html","92b5c918dfef6af62f95b4106922e375"],["2019/10/24/20-k8s搭建mysql5-7-24主从/index.html","91f75da6a8d8b9e2568d620eb2796fb9"],["2019/10/28/21-流量复制工具gor/index.html","6d90178c414eec50d8bbf2c3f94a165c"],["2019/10/28/22-es集群磁盘扩容/index.html","ecd85bd45e087ad9f4c3ad4f4855a85b"],["2019/10/29/23-mysql5-5主与mysql5-7从部署配置/index.html","1ad57004d13ce82cf3ba4568dd73c669"],["2019/10/30/24-filebeat7收集mysql慢日志到es/index.html","2cc33095d47da88bef72db02fde47c77"],["2019/11/01/25-一些脚本汇总/index.html","c7d39af1ddadaa0d72363129a8147a6d"],["2019/11/08/26-logstash配置/index.html","c38c19690b5c9bb274ab17a8218713ca"],["2019/11/21/27-k8s一条命令部署es5-2-0集群/index.html","f21aaf31660c4ee5c83e359e8526b787"],["2019/11/25/28-k8s1-16使用旧yml部署配置问题/index.html","ff5b90c071d9fb78e441d3e7e47d2ff3"],["2019/11/25/30-k3s集群部署项目报挂载nfs错误/index.html","a90d50ab1bfebea5ea340b5999d14c0e"],["2019/11/26/31-systemd一些命令/index.html","8bd040fc1eb6329d6c539c2ac0085a74"],["2019/12/02/32-php错误502问题总结/index.html","d03b144c1feef4d0eb6507d762a4430e"],["2019/12/03/29-k3s安装配置/index.html","8d650de2a635913b1a6be3e145e10631"],["2019/12/03/33-k3s1.16部署nginx+php5.2.17/index.html","c1a58a97fd204b017d998da4baabcb85"],["archives/2019/09/index.html","0beefafadc434cba091867f440691260"],["archives/2019/10/index.html","0a94fde7de4735d27bae3e01d09ce10e"],["archives/2019/11/index.html","f6b2cc4dcf1159e48e67c869cdfaf8d6"],["archives/2019/12/index.html","33fbf9bda63b4f727730d93cfd0e09ae"],["archives/2019/index.html","0ee0ce68dd42ffea3d8ccf555c336a47"],["archives/2019/page/2/index.html","0dbc8a153a8c74c48e177ffa9ce4d591"],["archives/index.html","dc0e16447ca992b8f9157902e531bf58"],["archives/page/2/index.html","b1e446f49a2e7ab4810198e6170ec1de"],["categories/docker/Dockerfile/index.html","79e1356c505817303b26e0108496a42d"],["categories/docker/index.html","8fba3569bb66b6f36b13903b26e3bc16"],["categories/elk/elasticsearch5/index.html","e96d44b68a8acf52b5159054ad9b3067"],["categories/elk/elasticsearch7/index.html","63ae974f9d730d95fc6e333d61299e31"],["categories/elk/index.html","f3a433dca8986818aa6a5ff800ed417e"],["categories/elk/logstash/index.html","2e4cdcc670eec2f3fd8fc3de99880845"],["categories/elk7/filebeat7/index.html","f896b814f6a9e9f644302e005cee25e9"],["categories/elk7/index.html","f04100ca70b4dff6217b5b937cf6f543"],["categories/index.html","098e34b825466880d945c2f167f70867"],["categories/k3s/index.html","471beefb5f20b7ed075c768b3ddb712e"],["categories/k3s/lnmp/index.html","4f1c95a03e80179f9930295029346f34"],["categories/k8s/elk5/index.html","b726a99f1addd92f8428fa0a7f86205b"],["categories/k8s/elk7/index.html","3824d901d2150d2210e6d50c96c2bf5d"],["categories/k8s/index.html","0307c8c32315ea1670770003f6cc8e8e"],["categories/k8s/mysql/index.html","3cc58e247575bb36d65a4c02c40cef85"],["categories/k8s/storageclass/index.html","ac5151434b5d1e56087c8cd32cf8cea1"],["categories/k8s/问题总结/index.html","f4dc7f1e7835c5d180f05bbce8d675f2"],["categories/linux/awk/index.html","e00fa9150c58ef4f9afb79d72e21b612"],["categories/linux/index.html","74e4acfb3440d14ca9b5a92f681d0e84"],["categories/linux/shell/index.html","67878af9c59da4dfb86040c84c39bc11"],["categories/linux/systemd/index.html","8e577df55afb7670d632feecf703e40a"],["categories/linux/问题总结/index.html","160df83421832d13f6012cf8e67acf5c"],["categories/markdown/index.html","3697e9ed0cc7b7916a92931964fb6e2f"],["categories/mysql/index.html","2cd9327e109a6c5f4b9bb01c39d012b1"],["categories/mysql/主从/index.html","1d4c2a6b093382b4836d43d9bf48103d"],["categories/nfs/index.html","6c79f0c5ef3f4851eae4c86e572841a9"],["categories/nginx/index.html","9d8034ad94aa4ff83d67616e7f848811"],["categories/php/index.html","d7901cd81b5d20a2b4646fa5b9378441"],["categories/php/问题总结/index.html","d8ac1928058494f5006161242a24636c"],["categories/博客/index.html","db7076e24cfd278373eb657e8c6578d9"],["categories/博客/美化/index.html","8af216c52bc23d8305bb9c678f7915a0"],["categories/存储/ceph/index.html","d7758613646d858af56e7dc5f8116cfc"],["categories/存储/index.html","e3d558d635d1c1f980b18129719e39b5"],["categories/存储/nfs/index.html","3978c71d3fdd9eb82bee32c58a9a8d71"],["categories/技术文档/index.html","b70c546ad1b86eb90ef2da21687cbb00"],["categories/有趣/index.html","4cb6deca573292fb155555ccfab6d6be"],["categories/有趣/二次元/index.html","779fd3669adee5a2bebfca5ad71c0186"],["categories/流量复制工具/gor/index.html","f6b2b424945b076f30aebd8b3c04f917"],["categories/流量复制工具/index.html","af29f8f2312167a76de0f670da939366"],["categories/网址/index.html","cdcffcc3621c834ffbd6ad239996c13d"],["categories/网址/大佬博客/index.html","bb1191696c482a1e99141bc5cafa4402"],["categories/网址/收藏/index.html","fa398fdfd1913043a8eef364ca0fc396"],["css/main.css","567a7fab54dd4dd62935859a8e0dd627"],["images/16/容器的原理-1.png","1c184a092af6b6829c49ee20e70d132a"],["images/27/img1.png","74279f54a523a47f82a95a04ccfc9eb4"],["images/27/img2.jpg","93a32e8f4e52a9ea2a28b72a4223c2a9"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["images/blog6/rancher-pv.png","d2a7e4bbfad5f71e75c9d5459cf5a464"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/docker1.jpg","5c611dd864017adeff648bca93d53f41"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/jixie-title.jpg","3ebd10201e23ecf68aba4524c020db0d"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["images/tcp三次握手图.png","32ddd8df35bd5762604327b25758370e"],["images/tcp四次挥手图.png","684b2b4a0286acadc32247d693dbd961"],["images/test1/test1.jpg","60b725f10c9c85c70d97880dfe8191b3"],["images/title1.jpg","fa2db043867c4c5654471e21ad36e5c0"],["images/title2.jpg","b6e57860ebc3fcdcf150a6a4cf3402ab"],["images/title3.jpg","f0b1554cfa4dd1193719dcfeb9e4de28"],["images/title4.jpg","6eb7bcbb846d1123e830488d75028df7"],["index.html","4d74e0e7431dc3041de157b10e2a2897"],["js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["js/src/instantclick.js","865d92a4a07409b7fed739e6a108e9c4"],["js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["js/src/live2d.js","3359a94d733737dbdd290dd41f9cef0b"],["js/src/love.js","7bcfdb57debd43483174cf9e15ab37cc"],["js/src/love2.js","2b51ddac5207cba4153da31e9132414c"],["js/src/motion.js","706d085e6cfec6f3e92dedc590d68d68"],["js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["js/src/schemes/pisces.js","1bd23ed75238ebf11afe2aa6b1c3a25b"],["js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["js/src/utils.js","f06ffce70453ad3a4d9611fdde5ca6c3"],["lib/canvas-nest/canvas-nest.min.js","2361106788cc4ea719ed76f52b413e46"],["lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["live2d-widget/README.html","9941b5173b7915eb6158e62f02cd9ea3"],["live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["live2d-widget/autoload.js","fc45c81e48138bde62e7e742cbbdabb9"],["live2d-widget/demo/demo1.html","82a14d37dbd83931644a4ad6ea1f9eb2"],["live2d-widget/demo/demo2.html","6babb045ef6905badc0dbc5e0d98cede"],["live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["live2d-widget/waifu.css","c4dae5924f2fb0b5ea6ef26aaab80db9"],["page/2/index.html","fe8e62162782702c66d78da818582c9b"],["page/3/index.html","9a6461e308a28f3447dacabd55aadcc5"],["page/4/index.html","457b1953a7aa4e065263205f84d6cede"],["tags/awk/index.html","dae89b73197bc378a6fe4957f371b122"],["tags/ceph/index.html","99924e70b3712808a996512d22f674a3"],["tags/cephfs/index.html","db17bcb6c1f415c88c77f13e31655889"],["tags/cloud-native/index.html","19ee01296495803d99387100ef6d259b"],["tags/docker/index.html","f4f42a9d96ce8544f38d07d5799a6806"],["tags/elasticsearch5/index.html","1bfba9f7afe0a146f1bda4ebba44e322"],["tags/elasticsearch7/index.html","f04db66b6957194c50ec3d52bbe00ce6"],["tags/elk/index.html","0a97931f1ec7d93d02710ad5a44c926d"],["tags/elk5/index.html","ab8f64fad0dfb6e27d9a2fb20b190644"],["tags/elk7/index.html","0f3c464a7495dd70e8f477cd711600ad"],["tags/filebeat7/index.html","af81da929486d65cf12b4edc6423a2e5"],["tags/gor/index.html","dbe34b8c15aa3178b0e56aca56a80dfe"],["tags/hexo6/index.html","a47dcc962410a82fa7cf618fafc47b39"],["tags/hexo美化/index.html","156f85a043f139acfc8299677bfc7bcb"],["tags/http流量复制工具/index.html","3d04da2f4d3f17296420b04d63391df2"],["tags/index.html","d3a469b1a42af1cc5f83a70192b7956d"],["tags/k3s/index.html","134b00152e5d2d85c228d715d3710c90"],["tags/k8s/index.html","65de4be62a14227b0dd4499952d53528"],["tags/k8s存储/index.html","474b7fdece4ad1ac87c50b8de024d656"],["tags/linux/index.html","50a2438741f543af9c5a9b5e8bb4a69c"],["tags/logstash/index.html","96442dc7c17b87aab2572fb4a7bc8829"],["tags/markdown/index.html","e67c4c0204212b2729377b263391c49c"],["tags/mysql/index.html","ea144de093fa6b1d7902a8de72b8358c"],["tags/mysql5-7/index.html","a2bc1c060dc614d52af96e773ef0779e"],["tags/nfs/index.html","30b55ee6437a02030fafa2035a384ca2"],["tags/nginx/index.html","f771428d869ab265b1c99eb84bd6fb41"],["tags/php/index.html","7c3d508070ca71505d331407d5bc6e33"],["tags/php5/index.html","36ea6110a1b84a1a50e01db38f44c592"],["tags/php7/index.html","e049d4716fe0d789915afdab52337ab8"],["tags/shell/index.html","22b60e4244473496f06ad166a6448106"],["tags/storageclass/index.html","a0db7a472a67e221aaff2f6a204b8524"],["tags/systemd/index.html","073ba0bb36a1fa55a8cdf0dadbc6b01c"],["tags/云原生/index.html","a7d865da7bdefb8991ba2942dfcb36b9"],["tags/大佬博客/index.html","52d440e0e84a570fe3b55ee55aa208db"],["tags/收藏/index.html","d02cd0c716f655340038607d757e6f1d"],["tags/特效/index.html","c4a529449bfb855f6b7e3c5baac0d0da"],["tags/网址/index.html","d062a1a366031195b47fa9802d0d0688"]];
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







