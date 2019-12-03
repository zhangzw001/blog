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

var precacheConfig = [["2019/09/19/2-部署elk7-2-0/index.html","15b1b72ee849e8bfcccb17733e730766"],["2019/09/19/首次搭建hexo博客系统/index.html","8af220228fb5e3768f8a0df2e85d4e70"],["2019/09/20/3-k8s遇到的一些问题统计总结/index.html","81b8dd811edd0e1bfc6d3c9f785ee12e"],["2019/09/24/4-hexo鼠标移动和鼠标点击特效/index.html","c19e926ee70179f997f4ac9cffadfc52"],["2019/09/24/5-hexo添加看板娘/index.html","30b4c58be6d18b16f5dbc7e7b070ac8f"],["2019/09/26/6-ceph安装部署/index.html","736d195746a82ed802ca4d7739a39682"],["2019/09/26/7-k8s部署storageclass动态创建pv-nfs-rbd/index.html","32e2e7f61499a486baa456907f830fcf"],["2019/09/26/8-mysql5-7二进制部署/index.html","fad3c611fd29761c42e70788f8f692e3"],["2019/09/26/9-linux遇到一些问题统计总结/index.html","86334444160ecb2bbc0fd7b61be014bd"],["2019/09/27/10-centos6安装nginx1-16-php7-2/index.html","979fdc85ffb1e100f64dc12b3280b93a"],["2019/10/10/11-mysql简单记录/index.html","658390acb61d340c06bf02e99a690a39"],["2019/10/11/12-awk简单记录/index.html","07c485c038445962856337eaa58cd4fa"],["2019/10/12/13-云原生博客汇总/index.html","4e5c74832860c36b4d1bd33570a74c6d"],["2019/10/15/14-mysql目录copy方式迁移/index.html","75a7134caa45bc40a1a2121865e44619"],["2019/10/16/15-docker简介和使用/index.html","e59d63fdd822b173c3c21276c99610cb"],["2019/10/16/16-dockerfile介绍/index.html","cdb3108f02e9da82598b40114180502a"],["2019/10/16/17-markdown一些写法记录/index.html","d3a1f256c6284e8e1c1a67d3c5454945"],["2019/10/17/18-收藏链接/index.html","34356bc5c42f3b7d620b8896e3cca839"],["2019/10/17/19-shell中gt和>的区别/index.html","811739cdfab6d79f2d862d6af8fdbf07"],["2019/10/24/20-k8s搭建mysql5-7-24主从/index.html","e4a908405887a49bba7056c5b7e3406d"],["2019/10/28/21-流量复制工具gor/index.html","2368fd4de5023167009c538b713b441c"],["2019/10/28/22-es集群磁盘扩容/index.html","1f417acd24b647f8b4a16c6959469617"],["2019/10/29/23-mysql5-5主与mysql5-7从部署配置/index.html","52ca629fd07d7ad6e6a3914bf0fe00f9"],["2019/10/30/24-filebeat7收集mysql慢日志到es/index.html","efbbc0a75c2c476de37a96794943c493"],["2019/11/01/25-一些脚本汇总/index.html","b97e80af90aeac9968116294339bff37"],["2019/11/08/26-logstash配置/index.html","1da5cced4e3f294e960c97c6833527f0"],["2019/11/21/27-k8s一条命令部署es5-2-0集群/index.html","1ab217ff863cdf117298c2b47a0ae60a"],["2019/11/25/28-k8s1-16使用旧yml部署配置问题/index.html","cb882be1c2a5f6a4455fab968bf3d86c"],["2019/11/25/29-k3s集群部署项目报挂载nfs错误/index.html","6e8d28f38c4d450d0dd364d0d34d21cc"],["2019/11/25/30-k3s集群部署项目报挂载nfs错误/index.html","3a32126e1432541246dd4e814f4026a9"],["2019/11/26/31-systemd一些命令/index.html","b07e36d9455d9f1ed17defe90e6cd395"],["2019/12/02/32-php错误502问题总结/index.html","4dd54c28d9fb70e22cefd24ffc6ee68f"],["2019/12/03/29-k3s安装配置/index.html","2686aae97a061c08ae9c16b37a401d82"],["2019/12/03/33-k3s1.16部署nginx+php5.2.17/index.html","169c6ecfd800d5be83cdd18968160f4f"],["archives/2019/09/index.html","2f7a1c7ec0888943649596e98bd2a930"],["archives/2019/10/index.html","1f8f3dc0d1de9c09c9bee492a52bffcb"],["archives/2019/11/index.html","996f1716dcf3b6ec01b8627aca20be8b"],["archives/2019/12/index.html","6659fe80bd959b8e2b14006846ecbf78"],["archives/2019/index.html","a0f32e699cee4ff4f3162a003d320ce7"],["archives/2019/page/2/index.html","d5c573c7ba8ffc778a46d17388103d82"],["archives/index.html","598c63fa4e8a72ad4a3fb0194e8106ab"],["archives/page/2/index.html","6a8ce7683fbf635de5731f3b91a880ae"],["categories/docker/Dockerfile/index.html","9f3e51734755539c5b5b679b6a734c69"],["categories/docker/index.html","3fbf4141f2eb8d83b0d4ff803fdd3570"],["categories/elk/elasticsearch5/index.html","f6456f6e9f892012301c446d4f3ab83f"],["categories/elk/elasticsearch7/index.html","cf47aea53d89843c54e8c612d5535bfb"],["categories/elk/index.html","3d9d7f59231b13847a76da02445f1e91"],["categories/elk/logstash/index.html","9b24dca4c2b0af284cc46af0349adcfd"],["categories/elk7/filebeat7/index.html","ffd852faef139a914cfb2a2d2bf57743"],["categories/elk7/index.html","a2cff748de8678e47f4d8f8444809f7a"],["categories/index.html","0c36329a5a2147b48e827ef5a6d301aa"],["categories/k3s/index.html","5e7e8033f980f5b412bff25ab27c5e27"],["categories/k3s/lnmp/index.html","ced94eebffc64a82a9864c98e7b73976"],["categories/k8s/elk5/index.html","962811a08463df45a4a452c240617c0b"],["categories/k8s/elk7/index.html","3ed9976e417f9b9ba4dde48f00bc7504"],["categories/k8s/index.html","6300e351c494fa70c86fab310b96de46"],["categories/k8s/lnmp/index.html","2de6265409cb2dfbf68983fdec32ece0"],["categories/k8s/mysql/index.html","7753a932d97081598f48de335e1ccb9e"],["categories/k8s/storageclass/index.html","0301d14908086d3d31b6987aeb173343"],["categories/k8s/问题总结/index.html","278cae116cdc951952d082a5da301ff9"],["categories/linux/awk/index.html","6dd27700371239dc0c9a218080d46bb2"],["categories/linux/index.html","425ebdbb19ccb0614861e43088adb472"],["categories/linux/shell/index.html","43bc7038283afbbed3e4881ea6b0680e"],["categories/linux/systemd/index.html","1d4a066ec1e7a295a5a3195f1a0d6157"],["categories/linux/问题总结/index.html","7a25780fb1a1afa4b5f6c12a81df0119"],["categories/lnmp/index.html","ef4fc817693457f8b6ceaffe24a2a9f3"],["categories/lnmp/nginx/index.html","5a955f10bf77bdf8f1796bb55c2c34a6"],["categories/lnmp/php5/index.html","330cc87969dd2b69602837d1605183dd"],["categories/markdown/index.html","cba61615388536631558fabe03075eab"],["categories/mysql/index.html","332281d607fc846f3077c20766873aca"],["categories/mysql/主从/index.html","959a8bc17d26e464e465a0d592d6c19f"],["categories/nfs/index.html","25c151185dff1c76fb223b425747ad00"],["categories/nginx/index.html","71e626a9afacf879bb22e15e6953f78e"],["categories/php/index.html","049d8308367065799647f0ecb3d78b08"],["categories/php/问题总结/index.html","04989e72f09a13e6e1cf7fa0e8d58163"],["categories/博客/index.html","9122cb66871be3a570e82dba79d6915f"],["categories/博客/美化/index.html","487af5a6afc8da82f1e6ffefae5d9683"],["categories/存储/ceph/index.html","41562d7eda6b3e69ea0e8b86ee9aadb6"],["categories/存储/index.html","930b1c48815747968538f532f7f63adb"],["categories/存储/nfs/index.html","fc8c1b10c40506e1b791c16185087bde"],["categories/技术文档/index.html","dda2c87ef7799396eea69e96f8abfcca"],["categories/有趣/index.html","49a8bf2125b0e31fa636619aec57dfa9"],["categories/有趣/二次元/index.html","b066d36f9eabd018dac7349df3fb1b27"],["categories/流量复制工具/gor/index.html","2f6c4c291529985933e11cb540badf92"],["categories/流量复制工具/index.html","de9cf434c4cc01542cb908a29fbc0ac2"],["categories/网址/index.html","ebe20732c8ead6ed8b58c634cbf8611a"],["categories/网址/大佬博客/index.html","f61d86dd7527624f024c8bb19834bdd3"],["categories/网址/收藏/index.html","46ba23b99c9c5daf57a0815ef53907dc"],["css/main.css","a68015d8a05d75fd5a224e3c9b86a0f8"],["images/16/容器的原理-1.png","1c184a092af6b6829c49ee20e70d132a"],["images/27/img1.png","74279f54a523a47f82a95a04ccfc9eb4"],["images/27/img2.jpg","93a32e8f4e52a9ea2a28b72a4223c2a9"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["images/blog6/rancher-pv.png","d2a7e4bbfad5f71e75c9d5459cf5a464"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/docker1.jpg","5c611dd864017adeff648bca93d53f41"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/jixie-title.jpg","3ebd10201e23ecf68aba4524c020db0d"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["images/tcp三次握手图.png","32ddd8df35bd5762604327b25758370e"],["images/tcp四次挥手图.png","684b2b4a0286acadc32247d693dbd961"],["images/test1/test1.jpg","60b725f10c9c85c70d97880dfe8191b3"],["images/title1.jpg","fa2db043867c4c5654471e21ad36e5c0"],["images/title2.jpg","b6e57860ebc3fcdcf150a6a4cf3402ab"],["images/title3.jpg","f0b1554cfa4dd1193719dcfeb9e4de28"],["images/title4.jpg","6eb7bcbb846d1123e830488d75028df7"],["index.html","a38e1950d3c7ec2d950ac80142822597"],["js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["js/src/instantclick.js","865d92a4a07409b7fed739e6a108e9c4"],["js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["js/src/live2d.js","3359a94d733737dbdd290dd41f9cef0b"],["js/src/love.js","7bcfdb57debd43483174cf9e15ab37cc"],["js/src/love2.js","2b51ddac5207cba4153da31e9132414c"],["js/src/motion.js","706d085e6cfec6f3e92dedc590d68d68"],["js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["js/src/schemes/pisces.js","1bd23ed75238ebf11afe2aa6b1c3a25b"],["js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["js/src/utils.js","f06ffce70453ad3a4d9611fdde5ca6c3"],["lib/canvas-nest/canvas-nest.min.js","2361106788cc4ea719ed76f52b413e46"],["lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["live2d-widget/README.html","9941b5173b7915eb6158e62f02cd9ea3"],["live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["live2d-widget/autoload.js","fc45c81e48138bde62e7e742cbbdabb9"],["live2d-widget/demo/demo1.html","82a14d37dbd83931644a4ad6ea1f9eb2"],["live2d-widget/demo/demo2.html","6babb045ef6905badc0dbc5e0d98cede"],["live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["live2d-widget/waifu.css","c4dae5924f2fb0b5ea6ef26aaab80db9"],["page/2/index.html","f824f4a28ad4a3e81b645347941abe83"],["page/3/index.html","273f5a5bd32e0ab4f0ecbd62809d126c"],["page/4/index.html","f84596d4520db8ad9e46d470baf7fe91"],["tags/awk/index.html","8b9d5d5ffcc15cde45d8f89abffcffd2"],["tags/ceph/index.html","9e5575fca1f4c7023409d60cf1cec274"],["tags/cephfs/index.html","5345d823e9feeee1e638023453c19583"],["tags/cloud-native/index.html","b37637257ecd4c081a2dff19e05c9ce8"],["tags/docker/index.html","b3e02e44bf0cbd7cc418264ab10ef2bb"],["tags/elasticsearch5/index.html","6a9b37e488c42ccc5b7688f834427a88"],["tags/elasticsearch7/index.html","68bef6e4d3ac286d26244fd7585f3d94"],["tags/elk/index.html","dcec73a8c18ed01365e6f05eb0787bec"],["tags/elk5/index.html","0075468bb3935ac1bb802f5417cbca0e"],["tags/elk7/index.html","c9d0abef38eade69930357ce0824eb0a"],["tags/filebeat7/index.html","c9f147c6a79636f5be98d745e30fe8de"],["tags/gor/index.html","0edf1799ece5605920d2695aa9b82af7"],["tags/hexo6/index.html","a9b83d22d44f65c588a882f50e293de2"],["tags/hexo美化/index.html","9b1fbdaac221a04e9cc4c9b5a0a7a755"],["tags/http流量复制工具/index.html","53d171f8d8df12f225f39fe1c9073db1"],["tags/index.html","65079cbc7e6118fe2528b3bc09c30233"],["tags/k3s/index.html","9b84db520c3db4d27fc5e8e8b3afd197"],["tags/k8s/index.html","b8476436e38f1e270bbed1225c5cc727"],["tags/k8s存储/index.html","0356cb029ce6aa5042ab9e0a22e6cbe9"],["tags/linux/index.html","0bf2f06e7f1f2fea153176659f6a13bb"],["tags/lnmp/index.html","cc1ba4b8c87eea8eb21de9c336fcb87c"],["tags/logstash/index.html","a1630d03e93e5570b9decb0ffde5d54b"],["tags/markdown/index.html","91805289b578f1d658d35620e7bde310"],["tags/mysql/index.html","85843d854a28e2329a8c3c7708de33b9"],["tags/mysql5-7/index.html","e8c3976ef2ce9634c497597d556fdfb0"],["tags/nfs/index.html","a6a0ea3e924b76f20048ae9ea8d9f531"],["tags/nginx/index.html","f6ee3743db7cd2c0a26d3c87590b48d8"],["tags/php/index.html","c4248952282a2ae8c9351139fae9cd09"],["tags/php5/index.html","7eb0766d3739f5e7bb2551c0ec9426da"],["tags/php7/index.html","05856272285b2217f85422a611ddbb4a"],["tags/shell/index.html","eab32d52658e6281033e302a75667ee6"],["tags/storageclass/index.html","439515d2830a6969db044555e3c8b151"],["tags/systemd/index.html","784119add896f61df38454e16d7faa0f"],["tags/云原生/index.html","dc1ec11d9b4dc77a72f170ca9159aa0a"],["tags/大佬博客/index.html","3560adc31c72168c0774c4d3ce88bc7a"],["tags/收藏/index.html","5280658865b52678c2d353ebe12c6acc"],["tags/特效/index.html","d2c8c8059577cd35469fe02fae03ee4d"],["tags/网址/index.html","3574d0bc0be1984ffd06530e99b09fdd"]];
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







