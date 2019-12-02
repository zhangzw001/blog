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

var precacheConfig = [["2019/09/19/2-部署elk7-2-0/index.html","cb3e77e1704d9b527b690cd680995cad"],["2019/09/19/首次搭建hexo博客系统/index.html","2c85103b14e5f4e7f1963157716d567a"],["2019/09/20/3-k8s遇到的一些问题统计总结/index.html","7d66bd1528e1f1feec4bf6d0909ff2f8"],["2019/09/24/4-hexo鼠标移动和鼠标点击特效/index.html","0a9eb4f729cd00ab8ccef7cccdad334a"],["2019/09/24/5-hexo添加看板娘/index.html","f3393f62a2009efed4edf174fb67ac3e"],["2019/09/26/6-ceph安装部署/index.html","d810e760874b75a23d3086a06519a393"],["2019/09/26/7-k8s部署storageclass动态创建pv-nfs-rbd/index.html","e4dbbce606f8e1d955f493ab3f7b02f1"],["2019/09/26/8-mysql5-7二进制部署/index.html","e69c7ebce5e923e29fa81f33194bb4bf"],["2019/09/26/9-linux遇到一些问题统计总结/index.html","3eda0f3f561171cd3a81d17fae2b030d"],["2019/09/27/10-centos6安装nginx1-16-php7-2/index.html","b44381582c4213f63907a3fd5ad29b88"],["2019/10/10/11-mysql简单记录/index.html","3d675434f39dc9cf8ec36aae18031a95"],["2019/10/11/12-awk简单记录/index.html","0bdfa4d7135fc2f6bb1c58005877e1d4"],["2019/10/12/13-云原生博客汇总/index.html","023b75aa93b892062b1f9e080dc24f8b"],["2019/10/15/14-mysql目录copy方式迁移/index.html","1a37f27d91850441a602b5e522f56816"],["2019/10/16/15-docker简介和使用/index.html","63da9cca56e4b7c4dc1176b3f449027a"],["2019/10/16/16-dockerfile介绍/index.html","0ce352dc88ee85f5e0167a89cc40812f"],["2019/10/16/17-markdown一些写法记录/index.html","6e32b61d756d36f738ee18fe1a5dcc7f"],["2019/10/17/18-收藏链接/index.html","65d454d723b75cfb1fe83a5a126ef51c"],["2019/10/17/19-shell中gt和>的区别/index.html","b5cd888e029f6a5c02682e3794c4d518"],["2019/10/24/20-k8s搭建mysql5-7-24主从/index.html","6a9c3326e629439e95d00b18944bdf04"],["2019/10/28/21-流量复制工具gor/index.html","52e95cc6e0885315dff00cc8715e508a"],["2019/10/28/22-es集群磁盘扩容/index.html","0584638b55f64042686b696fc468f171"],["2019/10/29/23-mysql5-5主与mysql5-7从部署配置/index.html","445716c8b5cde490d6e89f604c8099a6"],["2019/10/30/24-filebeat7收集mysql慢日志到es/index.html","ae3873e5fcef4e1f58ed8e4517a6ec2a"],["2019/11/01/25-一些脚本汇总/index.html","da95bfc26b45fc6bdae805c3655d8bf8"],["2019/11/08/26-logstash配置/index.html","7abc3cef5b7fe3c5771daa48a6371e8b"],["2019/11/21/27-k8s一条命令部署es5-2-0集群/index.html","c401116ced5fe8599400f18310b994ab"],["2019/11/25/28-k8s1-16使用旧yml部署配置问题/index.html","98a3239969c74ec5a118160962a3e559"],["2019/11/25/29-k3s安装配置/index.html","a79f854c32e0e9c3da30c922496c9d84"],["2019/11/25/30-k3s集群部署项目报挂载nfs错误/index.html","5684ae72dcb5ddc90a729569e042ac62"],["2019/11/26/31-systemd一些命令/index.html","bbb9f766617e396657d6d9a7eddc1b1d"],["2019/12/02/32-php错误502问题总结/index.html","8fe3f153bf29f1f4bae16c219d24137e"],["archives/2019/09/index.html","b4de93047db85c5384558089bda9aead"],["archives/2019/10/index.html","90f59b1ea85b6918ac167fcd738849e5"],["archives/2019/11/index.html","c8bd802e4246b27f47b99e526be3cca5"],["archives/2019/12/index.html","cd239ed5ffe2dbe23e453194fe5bc618"],["archives/2019/index.html","d754ce9591e5889d4b75a3e900e11669"],["archives/2019/page/2/index.html","d3498077463865d04c53cca13698c931"],["archives/index.html","8306d2a0720e4c09f97a965b15dd6efb"],["archives/page/2/index.html","7873c6221916de4ae850ffd855ee9f91"],["categories/docker/Dockerfile/index.html","766e46e7d37847c033c8487e094b832e"],["categories/docker/index.html","f96b22d081b2338618c990b49d3e0ed8"],["categories/elk/elasticsearch5/index.html","9ec6640909cbb55725b44489eff2bc46"],["categories/elk/elasticsearch7/index.html","0cd7c844b079103a07995b8c91e20d44"],["categories/elk/index.html","a5e5931a7e681a520b20db928935d753"],["categories/elk/logstash/index.html","c98b711a8fd1183ee14a73672db0ffdf"],["categories/elk7/filebeat7/index.html","4aa20548acec2e796cac1e775d423fca"],["categories/elk7/index.html","e4dbb374ff9ece37a33981b93efa2129"],["categories/index.html","00ff9417f49b342393d869ce08d53753"],["categories/k3s/index.html","9e89d89d465a2af91a51277e3d2b3101"],["categories/k8s/elk5/index.html","d5ff9ffbcc9e0e6b0bd0b5d33ec291d0"],["categories/k8s/elk7/index.html","f21680a60c5352e8a4f6f4afde88ea19"],["categories/k8s/index.html","2f3b6845c0cf57ce670d4983b80a5583"],["categories/k8s/mysql/index.html","998a0e88ce7f2db3c916db86568dec1e"],["categories/k8s/storageclass/index.html","63c0ebb49912f86f0e57d3d39d59a96e"],["categories/k8s/问题总结/index.html","3a26d798fec8a16c0792fd6d4c39bc92"],["categories/linux/awk/index.html","f868a3914385142f6f5c1401b3ac1542"],["categories/linux/index.html","cddcb9a0593cf94c859b850c79806bf6"],["categories/linux/shell/index.html","a3a374730883abc553e3ef7ec5d44416"],["categories/linux/systemd/index.html","9b77144c900ca43331d86c94a9c85975"],["categories/linux/问题总结/index.html","0202f5c70eee1ad5d78e4b79f12bef09"],["categories/markdown/index.html","106edb5379b36e3ec018b77d3c7b6912"],["categories/mysql/index.html","c17cdd57303d786ccf169ab352c8c87b"],["categories/mysql/主从/index.html","0f276c740ad973283ec03da5812a12ed"],["categories/nfs/index.html","a0d86fb629b1a54088d6fc8434183958"],["categories/nginx/index.html","33e85d5937634cd47ce7c4d8eaf69961"],["categories/php/index.html","6a47e9d2a98af7e1e453a514b959540d"],["categories/php/问题总结/index.html","81425d72563c0ee76bb46c7b258c2406"],["categories/博客/index.html","b8d27793367928ef1aba0f36a3a20b71"],["categories/博客/美化/index.html","ac4b9b922c229660f2d3dcbd8a9be30e"],["categories/存储/ceph/index.html","9dd221946c4f923c3ba0413f5c13088b"],["categories/存储/index.html","067be28396a02b3fc5567be480c16471"],["categories/存储/nfs/index.html","6e923a7c7c5a579a4b787e4b626079ad"],["categories/技术文档/index.html","f74fec7267891586304caf514bdbf577"],["categories/有趣/index.html","5d842ab8da0db5a8dd3470eb58d89fa5"],["categories/有趣/二次元/index.html","050c867244b4e198661c8807321e311c"],["categories/流量复制工具/gor/index.html","35a1ed5e5e89ce9597ed7deb617147b6"],["categories/流量复制工具/index.html","6f9e28a21a4610dd18f98af663fd6134"],["categories/网址/index.html","715077c8eecd6fb7e4386f49b8abd964"],["categories/网址/大佬博客/index.html","c9acf35b52c1af7d992698112e7b8720"],["categories/网址/收藏/index.html","e7df1725da9653a50000ee48420aa4ce"],["css/main.css","32ca0d9d1f8f3cd840b3c12f3f20ac09"],["images/16/容器的原理-1.png","1c184a092af6b6829c49ee20e70d132a"],["images/27/img1.png","74279f54a523a47f82a95a04ccfc9eb4"],["images/27/img2.jpg","93a32e8f4e52a9ea2a28b72a4223c2a9"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["images/blog6/rancher-pv.png","d2a7e4bbfad5f71e75c9d5459cf5a464"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/docker1.jpg","5c611dd864017adeff648bca93d53f41"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/jixie-title.jpg","3ebd10201e23ecf68aba4524c020db0d"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["images/tcp三次握手图.png","32ddd8df35bd5762604327b25758370e"],["images/tcp四次挥手图.png","684b2b4a0286acadc32247d693dbd961"],["images/test1/test1.jpg","60b725f10c9c85c70d97880dfe8191b3"],["images/title1.jpg","fa2db043867c4c5654471e21ad36e5c0"],["images/title2.jpg","b6e57860ebc3fcdcf150a6a4cf3402ab"],["images/title3.jpg","f0b1554cfa4dd1193719dcfeb9e4de28"],["images/title4.jpg","6eb7bcbb846d1123e830488d75028df7"],["index.html","1198d08e0aa17475ff79d8972edf8f11"],["js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["js/src/instantclick.js","865d92a4a07409b7fed739e6a108e9c4"],["js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["js/src/live2d.js","3359a94d733737dbdd290dd41f9cef0b"],["js/src/love.js","7bcfdb57debd43483174cf9e15ab37cc"],["js/src/love2.js","2b51ddac5207cba4153da31e9132414c"],["js/src/motion.js","706d085e6cfec6f3e92dedc590d68d68"],["js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["js/src/schemes/pisces.js","1bd23ed75238ebf11afe2aa6b1c3a25b"],["js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["js/src/utils.js","f06ffce70453ad3a4d9611fdde5ca6c3"],["lib/canvas-nest/canvas-nest.min.js","2361106788cc4ea719ed76f52b413e46"],["lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["live2d-widget/README.html","9941b5173b7915eb6158e62f02cd9ea3"],["live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["live2d-widget/autoload.js","fc45c81e48138bde62e7e742cbbdabb9"],["live2d-widget/demo/demo1.html","82a14d37dbd83931644a4ad6ea1f9eb2"],["live2d-widget/demo/demo2.html","6babb045ef6905badc0dbc5e0d98cede"],["live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["live2d-widget/waifu.css","c4dae5924f2fb0b5ea6ef26aaab80db9"],["page/2/index.html","3f6404cf21efddcd8b86014530e33bdf"],["page/3/index.html","58679b9222b0e42368fe471ab8ca20f5"],["page/4/index.html","d4e433ddf28e527cc9929497f7d9f0bd"],["tags/awk/index.html","c9bb0b328a880ca103f4915cf3463ccf"],["tags/ceph/index.html","6d2e93aa81d060eac8c7acafb0a71765"],["tags/cephfs/index.html","34248f6e3272cc25dfaa79f6cab273e4"],["tags/cloud-native/index.html","209311f0f155250fb7d2af5e3be228cc"],["tags/docker/index.html","576e507e85c94414ac64fa7bc8ed08ea"],["tags/elasticsearch5/index.html","e7e58634e24400cd8b4ce6ef134e6ec7"],["tags/elasticsearch7/index.html","8724a3604d99cb64480890cdc3a916c5"],["tags/elk/index.html","19df66f7ad4997662941c600e887a662"],["tags/elk5/index.html","9d97545a524bb5300154a1b1c9dc50e6"],["tags/elk7/index.html","4b1b76b9831fd9bda73d13ebf23e5e9c"],["tags/filebeat7/index.html","9661884c60d16855a1cc3893dc56a102"],["tags/gor/index.html","3fc38f2e2822aeed0b70ee91e5190359"],["tags/hexo6/index.html","7ff1b14c84651e17d16b96d743948fd5"],["tags/hexo美化/index.html","e09319baa42a39fd4708fe5f48bf37e6"],["tags/http流量复制工具/index.html","16de4e98a39002e6df4d36e64ee32970"],["tags/index.html","42f8738790e8fc21665214d1d7d3d074"],["tags/k3s/index.html","3b3e93a495ce6fa5be695092244f1fc2"],["tags/k8s/index.html","2b93dbc2ffb00766a2bcf8aca08c5c8d"],["tags/k8s存储/index.html","2beefc6fe2b9bf05f45599267d8dc79d"],["tags/linux/index.html","48e82890e90da82b08750e410e8bea0f"],["tags/logstash/index.html","fa21c7faf27f3d2ff256e6b1a66ceb21"],["tags/markdown/index.html","dee4804b1c61438a414e787412b3c01a"],["tags/mysql/index.html","349c6e9ed893bf73e7ba63ec2d442d8b"],["tags/mysql5-7/index.html","a374cd3b9582122d3c1f38a292a460a7"],["tags/nfs/index.html","2eaec1c262d4f8746c8144253d1c2b58"],["tags/nginx/index.html","b750069d02b122d976ae416aadea8950"],["tags/php/index.html","32bae9aaf0a84236a13cd8e60f9c11cd"],["tags/php7/index.html","4db752ad28315606eb772daa1742db42"],["tags/shell/index.html","96bc9a946f1043a0849d5cfc62198381"],["tags/storageclass/index.html","ed6d3ee5132394434d491b1834a4fb59"],["tags/systemd/index.html","20c7ab28b54d5f6b9f047ba90e2e32c0"],["tags/云原生/index.html","ba2f5726099c470006a648116c06f0d7"],["tags/大佬博客/index.html","f1c7d24b6a162447f1146f65be2c100d"],["tags/收藏/index.html","0cc90689866fd7343f251d84868528c1"],["tags/特效/index.html","7d242994909a9343e424124c0abe0162"],["tags/网址/index.html","56f7a3393b4828a4129af8a638b87553"]];
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







