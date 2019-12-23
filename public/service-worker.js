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

var precacheConfig = [["2019/09/19/2-部署elk7-2-0/index.html","55c2d4777d53dd80a8e42b23888f6a1a"],["2019/09/19/首次搭建hexo博客系统/index.html","735fda80d5a1560f79be7598328a89a2"],["2019/09/20/3-k8s遇到的一些问题统计总结/index.html","40e90dcbbd657c1da1302c8abb9c419c"],["2019/09/24/4-hexo鼠标移动和鼠标点击特效/index.html","2e8f848820b51eb88b967b2cecc0e6dc"],["2019/09/24/5-hexo添加看板娘/index.html","06e704e4e11bfe65f0bb40c5694191c4"],["2019/09/26/6-ceph安装部署/index.html","29a3a11e53677d549bde798cd38bfd0e"],["2019/09/26/7-k8s部署storageclass动态创建pv-nfs-rbd/index.html","363c7b2f23fbea93b5db4ab5c5f87635"],["2019/09/26/8-mysql5-7二进制部署/index.html","04d610f1dd85107f886a43fa669efbad"],["2019/09/26/9-linux遇到一些问题统计总结/index.html","3447fed3ad57069177627037a723dd1f"],["2019/09/27/10-centos6安装nginx1-16-php7-2/index.html","72b1bd28cccdb641249c525f109ef75e"],["2019/10/10/11-mysql简单记录/index.html","b99e7d869138a063bd23e6617259aedf"],["2019/10/11/12-awk简单记录/index.html","0fbf24278bc93ffa93af2827457bc0b2"],["2019/10/12/13-云原生博客汇总/index.html","81b77b6417b0db6fadc1fdffc9ca4c4f"],["2019/10/15/14-mysql目录copy方式迁移/index.html","42d999cd95a12a991c69b80f5bb28e23"],["2019/10/16/15-docker简介和使用/index.html","a6a7c7aac6a82f655c34f4c7b4c33f13"],["2019/10/16/16-dockerfile介绍/index.html","36242b4ca458ff1a372c9338825cd118"],["2019/10/16/17-markdown一些写法记录/index.html","552c762988741006f69e6c128708a4bb"],["2019/10/17/18-收藏链接/index.html","e3e5d84791a0fe3d890a1b9f32e0b489"],["2019/10/17/19-shell中gt和>的区别/index.html","f57bfc87ea05d0a4298630bea5282dae"],["2019/10/24/20-k8s搭建mysql5-7-24主从/index.html","23c4eec3143df5bb28137d0e02b98ded"],["2019/10/28/21-流量复制工具gor/index.html","c654c26a81f90b9011592521e03aa3dc"],["2019/10/28/22-es集群磁盘扩容/index.html","3988d56536171da9087e6e88bdf2d8a8"],["2019/10/29/23-mysql5-5主与mysql5-7从部署配置/index.html","0fe7bb5dc96a814a46c7941654ec41ce"],["2019/10/30/24-filebeat7收集mysql慢日志到es/index.html","8c5298d690c1ea625e4d4109d86abe17"],["2019/11/01/25-一些脚本汇总/index.html","55f8608c09468433514014d4e3aa68d0"],["2019/11/08/26-logstash配置/index.html","8dfd59bcb09e36e2f2d0986f8a471297"],["2019/11/21/27-k8s一条命令部署es5-2-0集群/index.html","2343192fb7462fd19ec605bd341e4a8a"],["2019/11/25/28-k8s1-16使用旧yml部署配置问题/index.html","2f246f07d55127f58b1d763055325aa9"],["2019/11/25/30-k3s集群部署项目报挂载nfs错误/index.html","5c9a8b78794a1ff610fb58830cc39bf4"],["2019/11/26/31-systemd一些命令/index.html","67903d24521d65333aa57438798557df"],["2019/12/02/32-php错误502问题总结/index.html","9f12c9b7d843615031f438c75175666a"],["2019/12/03/29-k3s安装配置/index.html","2a6d19b8cdc4f1c6f35737e7564510f4"],["2019/12/03/33-k3s1.16部署nginx+php5.2.17/index.html","cfa79d93991598a6ac37dcbe458b4f5b"],["2019/12/05/34-k8s一些命令总结/index.html","6a9c0360a1637641563b75da59dc2b51"],["archives/2019/09/index.html","95b103112c946be5e75b4692ad94a9ae"],["archives/2019/10/index.html","bdcefeed6262203f154dc0d43caf2c80"],["archives/2019/11/index.html","cb28a315f9217bf0c62e4cd960da8944"],["archives/2019/12/index.html","01b21023b99d874e05a27ba79dba9d00"],["archives/2019/index.html","b612f43da4cefcb6ff1242a4989e5a1c"],["archives/2019/page/2/index.html","ab8ef5426c6889ab08f09763f4e57d81"],["archives/index.html","140a56b79e5e782f59a845f9769a360d"],["archives/page/2/index.html","cd006b5f66601be00818f69a25d8597f"],["categories/docker/Dockerfile/index.html","47a060c26f79f6521b38c415568a2c38"],["categories/docker/index.html","bb81bb90a1b6596eec3e6f85c81a70b7"],["categories/elk/elasticsearch5/index.html","7bd9dc53d72c9dd324ac0a085f725c27"],["categories/elk/elasticsearch7/index.html","8168db78cd90240459cac2d958e84061"],["categories/elk/index.html","b825b0becc4a5e8c38c295ebb7475fc4"],["categories/elk/logstash/index.html","ed481a4663f8973521f2cc900da5304f"],["categories/elk7/filebeat7/index.html","8c60380706785cc418b2e3469c2e73fc"],["categories/elk7/index.html","f07b6d0f24e64a62c6dad2e954df4fbd"],["categories/index.html","739a270a004f6fd56fbc5da6c0d54e97"],["categories/k3s/index.html","75d9d2c969c8335c89339cc708539bbe"],["categories/k3s/lnmp/index.html","2fd032e5847370f75010f48066c79363"],["categories/k8s/elk5/index.html","122a16d9f3c870125a19e8bea065ce6d"],["categories/k8s/elk7/index.html","f14685ce15e3f3ae4d775b7357e0f175"],["categories/k8s/index.html","149b75081ed269628b346d552a43b1dd"],["categories/k8s/kubectl/index.html","70f76387c60c8e7640f24563d3dc5b08"],["categories/k8s/mysql/index.html","814b2d845bcc8fdde972ed1c817f950c"],["categories/k8s/storageclass/index.html","c08595fa3705c1e161585b5f6836b2a3"],["categories/k8s/问题总结/index.html","e68e90dba4c4efed8fbb9b1e9164e389"],["categories/linux/awk/index.html","805b4755c12a4d5432e14b3e878fd4fb"],["categories/linux/index.html","bda379caa5d41526bd63ceec4db5109f"],["categories/linux/shell/index.html","970f56a18c1140eea2a80534b24c3978"],["categories/linux/systemd/index.html","3e29aaf606057c66209dca6ecfe98bee"],["categories/linux/问题总结/index.html","b0bbba1a9ec4a0af74055c2d11d9f4bf"],["categories/markdown/index.html","a8baac18ed9200dbf8289e264a9bfa2f"],["categories/mysql/index.html","8e2365b94e8bb61eccd9120611955631"],["categories/mysql/主从/index.html","fca141e73c4a977376a823a7c47a6704"],["categories/nfs/index.html","0cd83778be2558fb138d4b9216bf770b"],["categories/nginx/index.html","7514ac4cd9ee1b309b6b0a216719074f"],["categories/php/index.html","aa71544363b51585bc45faa944fe9937"],["categories/php/问题总结/index.html","065f6f064212ce7639889ab6b879edfe"],["categories/博客/index.html","873572ed7d7d40c636480fab38aea2a6"],["categories/博客/美化/index.html","325590ce90380f125645e73fa7341bf8"],["categories/存储/ceph/index.html","b98e047523125af8cee411d599ef38eb"],["categories/存储/index.html","62f5a7caa9e32e2e94050dc47482adcc"],["categories/存储/nfs/index.html","74bdb049344f59b9c78820fb57fddf94"],["categories/技术文档/index.html","f4dd3e4139b527e836106b5268ca9085"],["categories/有趣/index.html","91968e120041bb7a5952c13b69b74750"],["categories/有趣/二次元/index.html","ef8f596e8e0f2807f6cd511994d915d0"],["categories/流量复制工具/gor/index.html","c81ec6f33aed5a7dbb8454265572ea39"],["categories/流量复制工具/index.html","aa3b3eac1b0897178721e7838e16d009"],["categories/网址/index.html","05daeb53da07a043908f964e58f30cc5"],["categories/网址/大佬博客/index.html","540b12ba1077e6bb5148386dcc08a820"],["categories/网址/收藏/index.html","696ccc20668d5ea93844310b69ad8f6a"],["css/main.css","d92ba13d5a1ca8a6be3dc802b8c5460c"],["images/16/容器的原理-1.png","1c184a092af6b6829c49ee20e70d132a"],["images/27/img1.png","74279f54a523a47f82a95a04ccfc9eb4"],["images/27/img2.jpg","93a32e8f4e52a9ea2a28b72a4223c2a9"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["images/blog6/rancher-pv.png","d2a7e4bbfad5f71e75c9d5459cf5a464"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/docker1.jpg","5c611dd864017adeff648bca93d53f41"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/jixie-title.jpg","3ebd10201e23ecf68aba4524c020db0d"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["images/tcp三次握手图.png","32ddd8df35bd5762604327b25758370e"],["images/tcp四次挥手图.png","684b2b4a0286acadc32247d693dbd961"],["images/test1/test1.jpg","60b725f10c9c85c70d97880dfe8191b3"],["images/title1.jpg","fa2db043867c4c5654471e21ad36e5c0"],["images/title2.jpg","b6e57860ebc3fcdcf150a6a4cf3402ab"],["images/title3.jpg","f0b1554cfa4dd1193719dcfeb9e4de28"],["images/title4.jpg","6eb7bcbb846d1123e830488d75028df7"],["index.html","375c4a3e9dcf2ed25788af3b0e8e16a6"],["js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["js/src/instantclick.js","865d92a4a07409b7fed739e6a108e9c4"],["js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["js/src/live2d.js","3359a94d733737dbdd290dd41f9cef0b"],["js/src/love.js","7bcfdb57debd43483174cf9e15ab37cc"],["js/src/love2.js","2b51ddac5207cba4153da31e9132414c"],["js/src/motion.js","706d085e6cfec6f3e92dedc590d68d68"],["js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["js/src/schemes/pisces.js","1bd23ed75238ebf11afe2aa6b1c3a25b"],["js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["js/src/utils.js","f06ffce70453ad3a4d9611fdde5ca6c3"],["lib/canvas-nest/canvas-nest.min.js","2361106788cc4ea719ed76f52b413e46"],["lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["live2d-widget/README.html","9941b5173b7915eb6158e62f02cd9ea3"],["live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["live2d-widget/autoload.js","fc45c81e48138bde62e7e742cbbdabb9"],["live2d-widget/demo/demo1.html","82a14d37dbd83931644a4ad6ea1f9eb2"],["live2d-widget/demo/demo2.html","6babb045ef6905badc0dbc5e0d98cede"],["live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["live2d-widget/waifu.css","c4dae5924f2fb0b5ea6ef26aaab80db9"],["page/2/index.html","70ee826fb1a80e0d61556c480ee4cb07"],["page/3/index.html","860650b10f514c36f02a2c1c56fc4343"],["page/4/index.html","4afff28df070ab1d7150c12e38349e77"],["tags/awk/index.html","4e5840b4fdf1bda345536f3879ea71b8"],["tags/ceph/index.html","87ebe37febe825ce0dc55088a27216b5"],["tags/cephfs/index.html","37151f6e50da4f66df55244eeeb259cb"],["tags/cloud-native/index.html","2e9a6b2a80632341f4f527e5e1367009"],["tags/docker/index.html","e9859c51eabdfca6f711a0f17475a46b"],["tags/elasticsearch5/index.html","0c5706656998625f641639169935dd5f"],["tags/elasticsearch7/index.html","d4e2ed74860ed1cda6f31a02ea336138"],["tags/elk/index.html","ea875a4ace319d374e51fdad8d0e3a9a"],["tags/elk5/index.html","1247dcb887a9e20b9455e7134997704b"],["tags/elk7/index.html","4e3aba696ba4465a1ff2b0c507951f91"],["tags/filebeat7/index.html","4abf93d49200f6cd956059440dc3e9a4"],["tags/gor/index.html","c58f487868c0f7b2398243be869baa2a"],["tags/hexo6/index.html","e69b47e176ae7d77c8c2aedb43c74667"],["tags/hexo美化/index.html","30bfb0b17131220ec32d248887677f34"],["tags/http流量复制工具/index.html","889dcef6cf0e3d884486459f5e0f30f8"],["tags/index.html","42fee347bfea01fb042781f18b312233"],["tags/k3s/index.html","9107c1231422ab01bac9f0703d58f0fc"],["tags/k8s/index.html","7b777597afd12e0ff8852aa9cb3f7794"],["tags/k8s存储/index.html","e3ea50eaebbad50e7d84fd4c7a52c844"],["tags/kubectl/index.html","ac1d240a0f5c2194ed7de7eb575b8bc5"],["tags/linux/index.html","907fb5af5573a70ab447cd3905d435d5"],["tags/logstash/index.html","c70972da913d024ed7a0f74dc7c641ef"],["tags/markdown/index.html","5bd9c6f540cc3c8dba76030d36b36731"],["tags/mysql/index.html","7661a613ea5f2b167a4439638dbacbf6"],["tags/mysql5-7/index.html","a6a96ecc8810a9c2bb1df8e28b91fc34"],["tags/nfs/index.html","ef15481466959cb8a4081969a95987dc"],["tags/nginx/index.html","2fcb372340a06e5a9b2dfd2894d0aeb2"],["tags/php/index.html","cab1ed4c813ea444834c79e655359442"],["tags/php5/index.html","27df9a262090d5ffba564d19ee64a1a5"],["tags/php7/index.html","c04b5428ceb79572aa1da79618ec9e68"],["tags/shell/index.html","2f18f7a2fbf2e501f0318dfa7c2476bb"],["tags/storageclass/index.html","9025858b67cb64dda2e25ff365e5c5a9"],["tags/systemd/index.html","7b2c752fae5d151d3fdac0b53ffaa3e3"],["tags/云原生/index.html","7aae7d98a016ae211ff337dc3f10c5db"],["tags/大佬博客/index.html","e9ed10ff5cc9b32c9251e4006b4986b0"],["tags/收藏/index.html","20d391e6cc4b505bd51429ab0aa1a0e2"],["tags/特效/index.html","8835ecbd71bdaeee4baec98900d0e6c1"],["tags/网址/index.html","e2e9e3e16db467d271bb64bf64c8957e"]];
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







