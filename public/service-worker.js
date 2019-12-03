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

var precacheConfig = [["2019/09/19/2-部署elk7-2-0/index.html","f6b2489a295727c98b068a59db9da3ab"],["2019/09/19/首次搭建hexo博客系统/index.html","cef7e1b4f7a3daf94ce1a5c374814aeb"],["2019/09/20/3-k8s遇到的一些问题统计总结/index.html","35ffd380b0c66a362a53c61eb77b9b30"],["2019/09/24/4-hexo鼠标移动和鼠标点击特效/index.html","cb6d78f1aa516bdd28819e5d49ebc915"],["2019/09/24/5-hexo添加看板娘/index.html","ca2ea816322383f8c63367dad6c9626c"],["2019/09/26/6-ceph安装部署/index.html","335e58fe914190726ecf9fc64129a01a"],["2019/09/26/7-k8s部署storageclass动态创建pv-nfs-rbd/index.html","b8c9448b18234b35dd511981a6da7923"],["2019/09/26/8-mysql5-7二进制部署/index.html","d5817a5d1f66e15f97d344c90933eb76"],["2019/09/26/9-linux遇到一些问题统计总结/index.html","5d015ca38f2f48ee6a6053c2cbe3aa30"],["2019/09/27/10-centos6安装nginx1-16-php7-2/index.html","c25b68e1957a2d03bf7edb8bb3de9047"],["2019/10/10/11-mysql简单记录/index.html","486cb1c98a3448ea12baf3f07504ae30"],["2019/10/11/12-awk简单记录/index.html","3037bd9132462321f5f0d328a858448a"],["2019/10/12/13-云原生博客汇总/index.html","28ccd39b1fdef1c2ae230af0172f33f8"],["2019/10/15/14-mysql目录copy方式迁移/index.html","7fdc61e5ac56f6e13b5f371f5202ba01"],["2019/10/16/15-docker简介和使用/index.html","e6f69abd6de6322ed148c8fdaaf077e0"],["2019/10/16/16-dockerfile介绍/index.html","2671a15ca9d204c9bce0e2fc61a91ac2"],["2019/10/16/17-markdown一些写法记录/index.html","d9dec2eae516c35ecd9de2be60220422"],["2019/10/17/18-收藏链接/index.html","ab538c6f5da7284f12af401222498036"],["2019/10/17/19-shell中gt和>的区别/index.html","9b958eee46ad61ffc4106214c14becb5"],["2019/10/24/20-k8s搭建mysql5-7-24主从/index.html","f9db6e47ce4d583ff19db4ee5088ef0b"],["2019/10/28/21-流量复制工具gor/index.html","dee36b42f5607cdf1ae48e328b46f6cf"],["2019/10/28/22-es集群磁盘扩容/index.html","df4f87d273dabd1f89cf2510b7abf377"],["2019/10/29/23-mysql5-5主与mysql5-7从部署配置/index.html","1a7cf472eee3690df540906c6e9aee56"],["2019/10/30/24-filebeat7收集mysql慢日志到es/index.html","73c8c4ada0c188c22bb325db859a2394"],["2019/11/01/25-一些脚本汇总/index.html","1edeb1f5e559ff3fc087a15b588ed6f9"],["2019/11/08/26-logstash配置/index.html","f89941ba6e76fdfddc9e873913582d69"],["2019/11/21/27-k8s一条命令部署es5-2-0集群/index.html","d2e1634b1a60f968e40aeecae4728000"],["2019/11/21/33-k3s1.16部署nginx+php5.2.17/index.html","1f600fdac5efafc57cb120da735ff1b7"],["2019/11/25/28-k8s1-16使用旧yml部署配置问题/index.html","d70401c6aadf3a8373b1372743081e02"],["2019/11/25/29-k3s安装配置/index.html","ea8ca020da27fe3db07ba7b2273f8be7"],["2019/11/25/30-k3s集群部署项目报挂载nfs错误/index.html","af8e6ff3e2c2ad418a0dacbcd8101228"],["2019/11/26/31-systemd一些命令/index.html","cda1254063869db845cc971a0c275193"],["2019/12/02/32-php错误502问题总结/index.html","378e559ad36d00852fe50de614f12eaf"],["archives/2019/09/index.html","311450587e8cfec334a10439f006b2a3"],["archives/2019/10/index.html","40944ea91b38fbdbc527af4ad9e8a7d8"],["archives/2019/11/index.html","ab67c2026d315cfefc00801937a48f77"],["archives/2019/12/index.html","3f40388f6036c06184ef78cf3a3ffe80"],["archives/2019/index.html","b86412f68769d1d22ef45e19e3d9cb1b"],["archives/2019/page/2/index.html","dec1f551507ff40f4527cefaa73774ce"],["archives/index.html","1ffc259d1ed5e419fdfbf241026d16a9"],["archives/page/2/index.html","5fc747d55b80ce3c1fc3806b417b2791"],["categories/docker/Dockerfile/index.html","a10938a0868ccbde4df89b47b90bef9d"],["categories/docker/index.html","7742b4c6b471a3d6a7f4c89aa89e156f"],["categories/elk/elasticsearch5/index.html","cbcb5b91a903295231ac5171a6d6b4b9"],["categories/elk/elasticsearch7/index.html","a4e7d7e0ebb77d2fed480f23da77f43b"],["categories/elk/index.html","7406b0c2a61b347604e530977dee3a1d"],["categories/elk/logstash/index.html","e5d45d338a7785d24065d8d38f496bbc"],["categories/elk7/filebeat7/index.html","caee12f75ffeec903862fab9f5ca1664"],["categories/elk7/index.html","ea094fded75970515527db509e4e8046"],["categories/index.html","f146ac5b21afb1640defc2cd63c80f57"],["categories/k3s/index.html","f0d3a283eec487cc0a282e6e5a95c5a6"],["categories/k8s/elk5/index.html","a9ced7ff916c6fad783096a48680bc83"],["categories/k8s/elk7/index.html","46734234d0dc7d4633ec994f66e8dec6"],["categories/k8s/index.html","5412c9c90cccbf42c53df744e28faf0b"],["categories/k8s/mysql/index.html","8487149ba7a66b2609f474dcbf9d17cb"],["categories/k8s/storageclass/index.html","cda40260e22fd6efce84fad293bb4376"],["categories/k8s/问题总结/index.html","2f0025ee957b497060e83f62da3c02fe"],["categories/linux/awk/index.html","3a1558fc101030bfe03467d756f508b7"],["categories/linux/index.html","3ae5d9e4887bd09c736a5d0aab865b42"],["categories/linux/shell/index.html","4e93322b17012f622f38b45132f09b43"],["categories/linux/systemd/index.html","7aa30bdfa7f1184488f64258467a61ac"],["categories/linux/问题总结/index.html","a5525639edc3f36364485753a4c734b2"],["categories/markdown/index.html","40bf84f7fa281341037c4228afe0c080"],["categories/mysql/index.html","1000db7f4edcb6726d84b1690c203891"],["categories/mysql/主从/index.html","301cc41a8f467987ae941ed18c53b2bf"],["categories/nfs/index.html","8a864137e6d4024bfdc3f5f05af448c9"],["categories/nginx/index.html","7f3a99c816dcb3d9872e1918b1884982"],["categories/php/index.html","72577bc6b98bca12f9533350ecee1e6f"],["categories/php/问题总结/index.html","af7c323c4a02b0594997f3f8d544fabd"],["categories/博客/index.html","fd8fb199febf0eb788a3fec9de1df01b"],["categories/博客/美化/index.html","018b4fcccccde78f149cbd8b4c6081b2"],["categories/存储/ceph/index.html","392281ad432fd2e30763bea25e7c306c"],["categories/存储/index.html","eeb9db3cce00d3d87f91d73b28930fe3"],["categories/存储/nfs/index.html","6460af71d7abb245fe047f777a4f88fd"],["categories/技术文档/index.html","c98eef5326a661e30b6f89e9f6ef207b"],["categories/有趣/index.html","7daa5a59015412bc5bda449d672409d9"],["categories/有趣/二次元/index.html","2c20e802970b5517c733612b554027e7"],["categories/流量复制工具/gor/index.html","af310df1a8e7ea618348751c4cc77d3f"],["categories/流量复制工具/index.html","ccca9b8d9d7d26cc5b8dc1fe199437e4"],["categories/网址/index.html","689bfe518153a773d1451d0a5d90c743"],["categories/网址/大佬博客/index.html","64cf37eb8e294769176cfadeddae3109"],["categories/网址/收藏/index.html","24217133ad9d4f6bef6429235a28fb4b"],["css/main.css","92f20e749450a2d41e815b8b8fb0a794"],["images/16/容器的原理-1.png","1c184a092af6b6829c49ee20e70d132a"],["images/27/img1.png","74279f54a523a47f82a95a04ccfc9eb4"],["images/27/img2.jpg","93a32e8f4e52a9ea2a28b72a4223c2a9"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["images/blog6/rancher-pv.png","d2a7e4bbfad5f71e75c9d5459cf5a464"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/docker1.jpg","5c611dd864017adeff648bca93d53f41"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/jixie-title.jpg","3ebd10201e23ecf68aba4524c020db0d"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["images/tcp三次握手图.png","32ddd8df35bd5762604327b25758370e"],["images/tcp四次挥手图.png","684b2b4a0286acadc32247d693dbd961"],["images/test1/test1.jpg","60b725f10c9c85c70d97880dfe8191b3"],["images/title1.jpg","fa2db043867c4c5654471e21ad36e5c0"],["images/title2.jpg","b6e57860ebc3fcdcf150a6a4cf3402ab"],["images/title3.jpg","f0b1554cfa4dd1193719dcfeb9e4de28"],["images/title4.jpg","6eb7bcbb846d1123e830488d75028df7"],["index.html","9f6dbd7d5df1709c1a0f83f8ebdc2129"],["js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["js/src/instantclick.js","865d92a4a07409b7fed739e6a108e9c4"],["js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["js/src/live2d.js","3359a94d733737dbdd290dd41f9cef0b"],["js/src/love.js","7bcfdb57debd43483174cf9e15ab37cc"],["js/src/love2.js","2b51ddac5207cba4153da31e9132414c"],["js/src/motion.js","706d085e6cfec6f3e92dedc590d68d68"],["js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["js/src/schemes/pisces.js","1bd23ed75238ebf11afe2aa6b1c3a25b"],["js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["js/src/utils.js","f06ffce70453ad3a4d9611fdde5ca6c3"],["lib/canvas-nest/canvas-nest.min.js","2361106788cc4ea719ed76f52b413e46"],["lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["live2d-widget/README.html","9941b5173b7915eb6158e62f02cd9ea3"],["live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["live2d-widget/autoload.js","fc45c81e48138bde62e7e742cbbdabb9"],["live2d-widget/demo/demo1.html","82a14d37dbd83931644a4ad6ea1f9eb2"],["live2d-widget/demo/demo2.html","6babb045ef6905badc0dbc5e0d98cede"],["live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["live2d-widget/waifu.css","c4dae5924f2fb0b5ea6ef26aaab80db9"],["page/2/index.html","d022d80da73f1f0ad32013f20a3ad9ed"],["page/3/index.html","ac3e956a3e4190e4d231e39ffb12cb33"],["page/4/index.html","e320a512d284a7cb099cee244b2f7ee9"],["tags/awk/index.html","c5c004ca5b04b8adc3f7acf38df37356"],["tags/ceph/index.html","60dafba571d8d818320764999fb88bd8"],["tags/cephfs/index.html","0da76f8cb962906f9a02c39721cddc07"],["tags/cloud-native/index.html","df75d6f8dd7e88180000a2cff8b48589"],["tags/docker/index.html","d33a47fabc2f860309cdda2e9eb6ab19"],["tags/elasticsearch5/index.html","e4bf006ad91604bb28c17b14aaea679d"],["tags/elasticsearch7/index.html","32003ab513e6a1d14fde41486f9994b0"],["tags/elk/index.html","db7a5e49255870c87f87db6929d9d9ef"],["tags/elk5/index.html","d926f168d05856d5e6fee60f71280c5c"],["tags/elk7/index.html","15239a714179965f6f937aeeddc5af43"],["tags/filebeat7/index.html","fa22f3c8efac94e590b0d43519958b1a"],["tags/gor/index.html","3ba1468de0f71704fc2d328b98a36695"],["tags/hexo6/index.html","cfe84da3e7a1c0bed489351f1094f72a"],["tags/hexo美化/index.html","de8011c1e1ea07eab00f3f27af2b0590"],["tags/http流量复制工具/index.html","a8082ca1feaffe85fae67567e6504dcb"],["tags/index.html","2a73a8b51a55f1cf99193803055dbb4d"],["tags/k3s/index.html","b6b1fc25bdc36f8186819d66197a4924"],["tags/k8s/index.html","ad025af9179f2abc129f5575b1b6f3a5"],["tags/k8s存储/index.html","acb9bc3737adb4d4fd947a0ce47f7635"],["tags/linux/index.html","a0bb5d6a1e0b9ef9c29fa39efcdc500d"],["tags/logstash/index.html","da3546afddb17f02e621abdeebbeaaa4"],["tags/markdown/index.html","ce54110d20903fc064c6e86d29ea27d9"],["tags/mysql/index.html","3cafda8861272f56538169a58bfb4301"],["tags/mysql5-7/index.html","4be23b39a338f9d898e19f273b43ef82"],["tags/nfs/index.html","888ab59b0cec1d277e348c895b998410"],["tags/nginx/index.html","c7a1c6efab5c6b1ffb98fd69c606da38"],["tags/php/index.html","b170f680187c94fec72658ec2e79d7d4"],["tags/php7/index.html","46cc160f6281a5b2190496902d70c3a3"],["tags/shell/index.html","f2edf345b91fa1794d3d2ad97782d821"],["tags/storageclass/index.html","80b9e24762947462740c8c89806e8fe1"],["tags/systemd/index.html","ae565e20630cdd94e675ca37aebebc7e"],["tags/云原生/index.html","45fca7d314649c686baf020aea9a5d6f"],["tags/大佬博客/index.html","64893ff11b60a2faad119e726c529f7d"],["tags/收藏/index.html","4543b57171327fa7c7e84aec8c8ac30c"],["tags/特效/index.html","956f44072693dd8d37a546acf28030df"],["tags/网址/index.html","cff2ef971cc8bd17e67fc2ae84b107fc"]];
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







