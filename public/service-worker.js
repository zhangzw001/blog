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

var precacheConfig = [["2019/09/19/2-部署elk7-2-0/index.html","337a5fa847ab7c24c3b0deeba7da21c2"],["2019/09/19/首次搭建hexo博客系统/index.html","bffda30085569085bbd9cef4e6190ac5"],["2019/09/20/3-k8s遇到的一些问题统计总结/index.html","1d14e8f1ee8eca84345709c0ff3d2449"],["2019/09/24/4-hexo鼠标移动和鼠标点击特效/index.html","ff061b00c9dbbfa2c4dd11edfffdd490"],["2019/09/24/5-hexo添加看板娘/index.html","0abf350b89c2fb3d730c381c6b8b2eba"],["2019/09/26/6-ceph安装部署/index.html","e56fd92fa7ece1fcd7a414d3c2373c70"],["2019/09/26/7-k8s部署storageclass动态创建pv-nfs-rbd/index.html","e81fd73088435e440dde0d55c5d3dc43"],["2019/09/26/8-mysql5-7二进制部署/index.html","9e29e7cded0233ad5e7f02a07d141783"],["2019/09/26/9-linux遇到一些问题统计总结/index.html","324705adb91c10b86beb3e6f8866e571"],["2019/09/27/10-centos6安装nginx1-16-php7-2/index.html","7c8dfbf7dcfde424be1f5f91a407d278"],["2019/10/10/11-mysql简单记录/index.html","d59bf93bb553068a511a46aef60cd10e"],["2019/10/11/12-awk简单记录/index.html","00f51000fa91399ad22db9befeb2df6f"],["2019/10/12/13-云原生博客汇总/index.html","8dcdf3588f76fff96a1c5f3bd129646c"],["2019/10/15/14-mysql目录copy方式迁移/index.html","9d1aa1a6ebb89c2cda44cba5a0c3f806"],["2019/10/16/15-docker简介和使用/index.html","e3a1d07384353690d11e38a990663376"],["2019/10/16/16-dockerfile介绍/index.html","8ef41011fad8980f401598677972d48d"],["2019/10/16/17-markdown一些写法记录/index.html","26a4884a253dd8b9ac3b7ddabe11ec61"],["2019/10/17/18-收藏链接/index.html","71c0bd5f67303c5d05aebfbbe752ed49"],["2019/10/17/19-shell中gt和>的区别/index.html","53dbf1adee288b4b9d00d7640ec39795"],["2019/10/24/20-k8s搭建mysql5-7-24主从/index.html","02d701de3c9d666534acd60b1986aaac"],["2019/10/28/21-流量复制工具gor/index.html","65525b51591d16b15b3ba7b65a065e53"],["2019/10/28/22-es集群磁盘扩容/index.html","8817dba458850f49e99b51d99c181621"],["2019/10/29/23-mysql5-5主与mysql5-7从部署配置/index.html","00911752e48a8543da8b2f00ec8f4f95"],["2019/10/30/24-filebeat7收集mysql慢日志到es/index.html","3f4564e82faf50956f8a8098ee878024"],["2019/11/01/25-linux一些脚本汇总/index.html","41d0d3885c79caf4fef3c863475ffcd2"],["2019/11/08/26-logstash配置/index.html","f65fa64af3ae12c23045f7e7ce83b8f9"],["2019/11/21/27-k8s一条命令部署es5-2-0集群/index.html","9e2a4faf5f2359ca2337d372431dcbde"],["2019/11/25/28-k8s1-16使用旧yml部署配置问题/index.html","7015806254a1b0fbc1b3aa40c507e439"],["2019/11/25/30-k3s集群部署项目报挂载nfs错误/index.html","8aa7587b2bd6766f9621151bd16fed69"],["2019/11/26/31-systemd一些命令/index.html","244a27de1c3b5d30a4652fbecd5157f7"],["2019/12/02/32-php错误502问题总结/index.html","6873aa2d93aa0a21effe9500a56dcdef"],["2019/12/03/29-k3s安装配置/index.html","ec36eb83f23abba9cd53af2eb1913660"],["2019/12/03/33-k3s1.16部署nginx+php5.2.17/index.html","3d3dcd1f233c10d7f64e18f10defa9ff"],["2019/12/05/34-k8s一些命令总结/index.html","a7b592cab23e581f250888d576cdf1f7"],["archives/2019/09/index.html","3f7cf6b571f399184c17e24819f76b21"],["archives/2019/10/index.html","52daf4ad6c7c457ac87390aa23bdb2ea"],["archives/2019/11/index.html","8bce9d107d1eb54974eac171d95f374a"],["archives/2019/12/index.html","57d9261f23e1cda6ef9462013e393db4"],["archives/2019/index.html","c03ddd9a993f6ba3b73012bd5c9a2156"],["archives/2019/page/2/index.html","0e7a52c9509d7604b4afc447dfed0b46"],["archives/index.html","7b068542e24a874330008252f58184af"],["archives/page/2/index.html","262168c6cd35b3495694ff7565cb0b1d"],["categories/docker/Dockerfile/index.html","6c59bdfe3a7ee7d7914fee3ae867c70f"],["categories/docker/index.html","44861b5ce040a65be26ca52ebdf1360e"],["categories/elk/elasticsearch5/index.html","67f16777470da0464b779cd9cae46b4e"],["categories/elk/elasticsearch7/index.html","1d3919b37d8604422975844887893b00"],["categories/elk/index.html","bf587f921f2c6902997b2d92a606d1e6"],["categories/elk/logstash/index.html","73df788ddf8ec41e572bd7c27afd9a17"],["categories/elk7/filebeat7/index.html","fd0d30f3c7e27a1734025fa975b0fa0e"],["categories/elk7/index.html","9ce1bc79a42f8e054bdc4b08f5deb7da"],["categories/index.html","b94b8c1d0344ac2c98801d970a94f6f0"],["categories/k3s/index.html","b4018d2fb1d6bea7e067dd7660d8528f"],["categories/k3s/lnmp/index.html","7a03cdae095709780c8dce22c59c9809"],["categories/k8s/elk5/index.html","1d15cb07bfb27ac01eacee68a8bdb53d"],["categories/k8s/elk7/index.html","39680038b98bd8f39da39eb043217d94"],["categories/k8s/index.html","341620df2333b378f6e4bc5efed93d0f"],["categories/k8s/kubectl/index.html","9a49e1c96192d9816d63c1abf6aee0f8"],["categories/k8s/mysql/index.html","81a60019f52a8754504b3deac52a6f95"],["categories/k8s/storageclass/index.html","611406750596f46a801f817d9c1c9b31"],["categories/k8s/问题总结/index.html","9d3d835751a1a479ef66fd46911e936c"],["categories/linux/awk/index.html","d7da7818802d26b029326c4d6e9534b3"],["categories/linux/index.html","cb3a10605616242d76539c5385cec05a"],["categories/linux/shell/index.html","a2977500b80aae62ac490686f21e46c3"],["categories/linux/systemd/index.html","f4a0b3a2881a5db75c81f367b8e0398d"],["categories/linux/问题总结/index.html","56a3ea56c579fe482e46b73712f03a37"],["categories/markdown/index.html","b69796eec9c6741fe9bea2003f455d8f"],["categories/mysql/index.html","3d9c826b23b7a87eae3b6a278c0ba095"],["categories/mysql/主从/index.html","3c53caf421fb7876a3f34602cb40abfb"],["categories/nfs/index.html","d0c8bb1b0912ace025a3ea058754b14b"],["categories/nginx/index.html","79d3aa7d8700a5c8f3965c28251563a1"],["categories/php/index.html","d9594f5a028ac21b4db9116d19a28310"],["categories/php/问题总结/index.html","0131e76d3f163b714be1ace4f408698c"],["categories/博客/index.html","9cb907840c7a229e6437baceda692054"],["categories/博客/美化/index.html","eaac697a5112a64bb0959e02fcef0206"],["categories/存储/ceph/index.html","1cede328a67c3660b68d9531a2f3b837"],["categories/存储/index.html","c72b674328a83993c02c15b2d7ae1595"],["categories/存储/nfs/index.html","f395e353875f71fc0b1228e351b6bace"],["categories/技术文档/index.html","66be54ba6eb0b202cd04398661d028b8"],["categories/有趣/index.html","2b6931927643793c4452a76ee71708c7"],["categories/有趣/二次元/index.html","d039b776624513d83ac07b3bc5741c9c"],["categories/流量复制工具/gor/index.html","1dc0d92308523a1a71a446a1683ef18e"],["categories/流量复制工具/index.html","02f7028b0501308dad22c1084d879c50"],["categories/网址/index.html","27e4fe58ffb3b1fb20d09c87afea22cf"],["categories/网址/大佬博客/index.html","4b08fb6f638794f938391df36f552a9a"],["categories/网址/收藏/index.html","dc35ff4d59b1e659c6f1152baff63b39"],["css/main.css","4c2d8081eab6f6fdb71674931110b184"],["images/16/容器的原理-1.png","1c184a092af6b6829c49ee20e70d132a"],["images/27/img1.png","74279f54a523a47f82a95a04ccfc9eb4"],["images/27/img2.jpg","93a32e8f4e52a9ea2a28b72a4223c2a9"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["images/blog6/rancher-pv.png","d2a7e4bbfad5f71e75c9d5459cf5a464"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/docker1.jpg","5c611dd864017adeff648bca93d53f41"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/jixie-title.jpg","3ebd10201e23ecf68aba4524c020db0d"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["images/tcp三次握手图.png","32ddd8df35bd5762604327b25758370e"],["images/tcp四次挥手图.png","684b2b4a0286acadc32247d693dbd961"],["images/test1/test1.jpg","60b725f10c9c85c70d97880dfe8191b3"],["images/title1.jpg","fa2db043867c4c5654471e21ad36e5c0"],["images/title2.jpg","b6e57860ebc3fcdcf150a6a4cf3402ab"],["images/title3.jpg","f0b1554cfa4dd1193719dcfeb9e4de28"],["images/title4.jpg","6eb7bcbb846d1123e830488d75028df7"],["index.html","b95f6ee84a45c011072c05e15cc804ec"],["js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["js/src/instantclick.js","865d92a4a07409b7fed739e6a108e9c4"],["js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["js/src/live2d.js","3359a94d733737dbdd290dd41f9cef0b"],["js/src/love.js","7bcfdb57debd43483174cf9e15ab37cc"],["js/src/love2.js","2b51ddac5207cba4153da31e9132414c"],["js/src/motion.js","706d085e6cfec6f3e92dedc590d68d68"],["js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["js/src/schemes/pisces.js","1bd23ed75238ebf11afe2aa6b1c3a25b"],["js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["js/src/utils.js","f06ffce70453ad3a4d9611fdde5ca6c3"],["lib/canvas-nest/canvas-nest.min.js","2361106788cc4ea719ed76f52b413e46"],["lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["live2d-widget/README.html","9941b5173b7915eb6158e62f02cd9ea3"],["live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["live2d-widget/autoload.js","fc45c81e48138bde62e7e742cbbdabb9"],["live2d-widget/demo/demo1.html","82a14d37dbd83931644a4ad6ea1f9eb2"],["live2d-widget/demo/demo2.html","6babb045ef6905badc0dbc5e0d98cede"],["live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["live2d-widget/waifu.css","c4dae5924f2fb0b5ea6ef26aaab80db9"],["page/2/index.html","57e3d25472352f94b79f540382b86e7c"],["page/3/index.html","68705f0b78f2a8bedf85406cc03cf23f"],["page/4/index.html","d45b8612f12ee62946ad57b3f3ed93b2"],["tags/awk/index.html","f6b6a1cbd19d6a20b2bb29f2bfcadf19"],["tags/ceph/index.html","fcc222ee6daae06141a5ffd04ec4eb71"],["tags/cephfs/index.html","271c2a8d3e4437b3143456421bb2e15d"],["tags/cloud-native/index.html","216a65ea3fd2f3bc954a5c0ace5b1dda"],["tags/docker/index.html","6909b0208d8d7603517359a20ecc267f"],["tags/elasticsearch5/index.html","31e40e336cc8e177fe82d68288a3f662"],["tags/elasticsearch7/index.html","896f53e9549a9329a9af7088da3327a7"],["tags/elk/index.html","0fbd3b1ccabf0d11a9afb32436ea1af2"],["tags/elk5/index.html","23dbe421731dc394d3beab2d91ba8de2"],["tags/elk7/index.html","43af749ef761e85d36d493facf17b314"],["tags/filebeat7/index.html","c6ff50cd595d619af819e6b2e67185e9"],["tags/gor/index.html","2d0129c9b74afcadb1ecd03cbdb0a37e"],["tags/hexo6/index.html","752bff80c622bf31847626d1e530d042"],["tags/hexo美化/index.html","9f068e68bd80a2746554a6c629e5ea20"],["tags/http流量复制工具/index.html","01f67b38469112ab9a76de626eefc942"],["tags/index.html","c1fa3e071dcb88df091ece6f0f48b6d5"],["tags/k3s/index.html","172d8681ecbab47ded1ade3fdbbcfe73"],["tags/k8s/index.html","6152436d57695e8685fc3a5767fb61bf"],["tags/k8s存储/index.html","e150a7cf4d1511815cac4bc242c99612"],["tags/kubectl/index.html","16191c444127eb259bf1ac40535578c5"],["tags/linux/index.html","9944f1db19d314fb162f1b9ecf41967f"],["tags/logstash/index.html","48c6e0c215338cc52df6fd2d9cdb2790"],["tags/markdown/index.html","38711a668179284ab70e28373c56551a"],["tags/mysql/index.html","fed1beabc4c22377a3e4c65c716b53ed"],["tags/mysql5-7/index.html","29d8a88d92731ad6d4203a0d99d6b8d6"],["tags/nfs/index.html","17b2ff07cfe63e578edb68f3f6d5d887"],["tags/nginx/index.html","d351fd0ffe6d5b82da3cd712bcd5a04a"],["tags/php/index.html","bf2b04a10eb728deb35df0f3dc3ea2b5"],["tags/php5/index.html","99514d40349729200cffc2ee7a66b322"],["tags/php7/index.html","b15bde16842e0218a1da22559eeee417"],["tags/shell/index.html","fa1d099d4c4000a705813bc613a2448d"],["tags/storageclass/index.html","21ceb4409b220d71aba620ef061f2d22"],["tags/systemd/index.html","1294cfef50ebf6eb5b5a74d04a8d31fb"],["tags/云原生/index.html","cff2b53419db019acad965407a44a74d"],["tags/大佬博客/index.html","e42f3eb1405eed260d94e1d1ee17c4b2"],["tags/收藏/index.html","684832fd7c91e8316ad5cedf575b5914"],["tags/特效/index.html","7d35e48e6da913481f95557422d06f3a"],["tags/网址/index.html","62d85efb69b98f42e9fb4aa4130ea7f2"]];
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







