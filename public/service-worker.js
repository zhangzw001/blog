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

var precacheConfig = [["2019/09/19/2-部署elk7-2-0/index.html","8b4a73aed489f362ce570dff74b2ebda"],["2019/09/19/首次搭建hexo博客系统/index.html","48bece5554471279d156b06aa9f7c10b"],["2019/09/20/3-k8s遇到的一些问题统计总结/index.html","d36c370d328e771fa6c4bf115523aaec"],["2019/09/24/4-hexo鼠标移动和鼠标点击特效/index.html","e459459ee6fa2c1ecc944d7d5bdc56db"],["2019/09/24/5-hexo添加看板娘/index.html","d58cb8b1fd4fafa8f064781d34ac7abd"],["2019/09/26/6-ceph安装部署/index.html","bb654ec6f772cfb960298b2fcfe761b5"],["2019/09/26/7-k8s部署storageclass动态创建pv-nfs-rbd/index.html","721729d1eda7149ddd7ff1af332f5ac3"],["2019/09/26/8-mysql5-7二进制部署/index.html","9e05f4d8aa17c0d2bd8f0056f2753a6e"],["2019/09/26/9-linux遇到一些问题统计总结/index.html","941e0f677cf37697f0262dabd3949a7e"],["2019/09/27/10-centos6安装nginx1-16-php7-2/index.html","2927e41fbab376c5a07c74eac4b50408"],["2019/10/10/11-mysql简单记录/index.html","a921aca9f4eaf7668ea9de2704b08465"],["2019/10/11/12-awk简单记录/index.html","502c96a9de2e386c4e40e3163b44906f"],["2019/10/12/13-云原生博客汇总/index.html","2f58a9699e01b083b109a971019812f0"],["2019/10/15/14-mysql目录copy方式迁移/index.html","b912c2f47a093e85e55ffdd4f7a6ef80"],["2019/10/16/15-docker简介和使用/index.html","f960268e66add2ce362b6dbe4fe542b3"],["2019/10/16/16-dockerfile介绍/index.html","f2dd1e3bbbdff3b21229d095f5a6d3f1"],["2019/10/16/17-markdown一些写法记录/index.html","d66fbb3a90514bbab8633bd1bba41025"],["2019/10/17/18-收藏链接/index.html","91ddbea1f99942b07cd5b44a30cbc43e"],["2019/10/17/19-shell中gt和>的区别/index.html","e231e2b47d18aca9d5ae001bdd402bee"],["2019/10/24/20-k8s搭建mysql5-7-24主从/index.html","11e0404bffb5f47822de3fb5d75fe92e"],["2019/10/28/21-流量复制工具gor/index.html","270e434330c1047da95c0bb84e04b970"],["2019/10/28/22-es集群磁盘扩容/index.html","e7d446169b60303db271896c53209ab5"],["2019/10/29/23-mysql5-5主与mysql5-7从部署配置/index.html","8b70242f1ea5576d16db2c5fa0d34a5d"],["2019/10/30/24-filebeat7收集mysql慢日志到es/index.html","1c3eeeddf7afdf29fb0e6bf7d651b3f2"],["2019/11/01/25-linux一些脚本汇总/index.html","74faccfdcee9f3efb0c3424daa5565d3"],["2019/11/08/26-logstash配置/index.html","cb52da91a7ade8c15eaf75349aad802b"],["2019/11/21/27-k8s一条命令部署es5-2-0集群/index.html","72d1e1eea791f961e39a2eb383b95d9a"],["2019/11/25/28-k8s1-16使用旧yml部署配置问题/index.html","bc690313b069836181613fa3daafe5c3"],["2019/11/25/30-k3s集群部署项目报挂载nfs错误/index.html","b4e1aee48fd54f2bf1b97d464b9a4785"],["2019/11/26/31-systemd一些命令/index.html","17de65c8c348e3c271a63168d48dce5a"],["2019/12/02/32-php错误502问题总结/index.html","4ff460d892d12be81c3cdcc4afd3ecef"],["2019/12/03/29-k3s安装配置/index.html","13efd18b1d4809f87d61e615a4ab3723"],["2019/12/03/33-k3s1.16部署nginx+php5.2.17/index.html","23b1620deca05ee25a27c7e2642e7190"],["2019/12/05/34-k8s一些命令总结/index.html","3cfe8abad650e42bb2559e77852bc428"],["2020/02/27/35-raid1盘数据迁移/index.html","09e68a3aa08cd00fb82847c0fcfa0fea"],["2020/02/27/36-centos单网卡配置多ip的几种方法/index.html","878c4cd3835ce7e05f863feaf8bf1079"],["archives/2019/09/index.html","3b002802a35d2d4fd96d053e2bb66e6e"],["archives/2019/10/index.html","c79305de05a9685161433e550fbdb4c5"],["archives/2019/11/index.html","237060fc913eb5a16c5d003769e4ff33"],["archives/2019/12/index.html","c3acd7bcfdbe588bd27a9afd6fa1d616"],["archives/2019/index.html","c41ba8370a4ffd347cb18f1604020803"],["archives/2019/page/2/index.html","e7065283f7833873ddfde033c70ab96e"],["archives/2020/02/index.html","c562b46414961fa6e672b2b917e720bc"],["archives/2020/index.html","06fc5967e36965d14e6dad88ff06ea0e"],["archives/index.html","c6181e25c9fced612098406e5caefb10"],["archives/page/2/index.html","3a687024e9f2b007426075a2caa0f824"],["categories/docker/Dockerfile/index.html","98e63807dc630cb30cae066c8e8bc45b"],["categories/docker/index.html","84356cd9f3ef760fa2f3d98abc9686b4"],["categories/elk/elasticsearch5/index.html","e04fe187c3d4b6795d868174e936ffe8"],["categories/elk/elasticsearch7/index.html","81f3aae6dcb068404e01f8c31dcfd60f"],["categories/elk/index.html","665750969b4af6c2011dac88e0abd304"],["categories/elk/logstash/index.html","70b33db244d1704887f41d21afb7eab7"],["categories/elk7/filebeat7/index.html","28c8c0a8ac2fec69fc42161ed23551dc"],["categories/elk7/index.html","dba74993a34022a652422b5a016ca160"],["categories/index.html","5d58f5135af325ca53a83d96354a58d3"],["categories/k3s/index.html","348a9038b99c9388a0464a04cadd68af"],["categories/k3s/lnmp/index.html","1952e0f895734d19e51e1ddb97a2bb17"],["categories/k8s/elk5/index.html","0c02f7315bfbf809ed55c368d7bb696d"],["categories/k8s/elk7/index.html","3893b78e7fe5a46ba63d05b951270740"],["categories/k8s/index.html","35423039251a586508df4dc1a662326f"],["categories/k8s/kubectl/index.html","9328ada7d27fb15db35eae2f717a9aaf"],["categories/k8s/mysql/index.html","cdf30467afb0a15b681bf20aebf1b213"],["categories/k8s/storageclass/index.html","108260c1dfcdb7ccebbf1cda794f0a1f"],["categories/k8s/问题总结/index.html","c0ecc3462e9ea657c3bb24e48ef85239"],["categories/linux/awk/index.html","8930605a345398349b65ecfc57c9cfe2"],["categories/linux/index.html","0b6d116e658f9b11e76cdaf9efc17217"],["categories/linux/shell/index.html","258ae06f14d24c06231d08c2c5699ee0"],["categories/linux/systemd/index.html","94f574658bc68d96f8bb2ed26e923ab8"],["categories/linux/问题总结/index.html","ea32493cf1900f9a4a2abfaf75076d28"],["categories/markdown/index.html","e9792acc73222eb466c1491051504b54"],["categories/mysql/index.html","aa9ca5b2673349cfad7b23bad68af9fa"],["categories/mysql/主从/index.html","15fc4a500f9a7809b5955c7fa98f88ab"],["categories/nfs/index.html","2ffea11e8116946fc5541f68367970eb"],["categories/nginx/index.html","8dd8e5bfd03fc6ac3c34fb80b484f132"],["categories/php/index.html","1d8653711aaca671851a3226f78cef1b"],["categories/php/问题总结/index.html","8b4b7944b0aedb29a0335a96a05bdc7e"],["categories/raid/index.html","42619d6d0833e7051f953e63384bff5c"],["categories/博客/index.html","c3136d6362117be4a2f95783f439401f"],["categories/博客/美化/index.html","74df4473eda4d44a46d5c2870ac47a27"],["categories/存储/ceph/index.html","c7bec0d1868000939369850efb7dbec2"],["categories/存储/index.html","ecf6fa41cf015ac0288cd68782310bf1"],["categories/存储/nfs/index.html","11f25bd68060f95266fb8a0103cc8bce"],["categories/技术文档/index.html","e6d58ba67ad765ae555ee4e22fca060a"],["categories/有趣/index.html","0603feb6007181bf265587b8fb906c9a"],["categories/有趣/二次元/index.html","3b5fadd17fcf1d358e6e2fee434cbe87"],["categories/流量复制工具/gor/index.html","6e35ee5ff81f8b4d52c9c91046b7aab6"],["categories/流量复制工具/index.html","cedc667abfd0370d66aeae081756d706"],["categories/网卡/index.html","2737e70b3c4352d78c63702a4e2b2a08"],["categories/网址/index.html","73bd944da51ad702d60bd185d2fe775f"],["categories/网址/大佬博客/index.html","a98c7bd199467552c603dc4a5cb98810"],["categories/网址/收藏/index.html","6aea335b8248477e455484c408bd88b8"],["css/main.css","127598c5fd433f8be913a277469f134c"],["images/16/容器的原理-1.png","1c184a092af6b6829c49ee20e70d132a"],["images/27/img1.png","74279f54a523a47f82a95a04ccfc9eb4"],["images/27/img2.jpg","93a32e8f4e52a9ea2a28b72a4223c2a9"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["images/blog6/rancher-pv.png","d2a7e4bbfad5f71e75c9d5459cf5a464"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/docker1.jpg","5c611dd864017adeff648bca93d53f41"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/jixie-title.jpg","3ebd10201e23ecf68aba4524c020db0d"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["images/tcp三次握手图.png","32ddd8df35bd5762604327b25758370e"],["images/tcp四次挥手图.png","684b2b4a0286acadc32247d693dbd961"],["images/test1/test1.jpg","60b725f10c9c85c70d97880dfe8191b3"],["images/title1.jpg","fa2db043867c4c5654471e21ad36e5c0"],["images/title2.jpg","b6e57860ebc3fcdcf150a6a4cf3402ab"],["images/title3.jpg","f0b1554cfa4dd1193719dcfeb9e4de28"],["images/title4.jpg","6eb7bcbb846d1123e830488d75028df7"],["index.html","cf08f0105cfe49dac0ec8151f9e3c111"],["js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["js/src/instantclick.js","865d92a4a07409b7fed739e6a108e9c4"],["js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["js/src/live2d.js","3359a94d733737dbdd290dd41f9cef0b"],["js/src/love.js","7bcfdb57debd43483174cf9e15ab37cc"],["js/src/love2.js","2b51ddac5207cba4153da31e9132414c"],["js/src/motion.js","706d085e6cfec6f3e92dedc590d68d68"],["js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["js/src/schemes/pisces.js","1bd23ed75238ebf11afe2aa6b1c3a25b"],["js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["js/src/utils.js","f06ffce70453ad3a4d9611fdde5ca6c3"],["lib/canvas-nest/canvas-nest.min.js","2361106788cc4ea719ed76f52b413e46"],["lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["live2d-widget/README.html","9941b5173b7915eb6158e62f02cd9ea3"],["live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["live2d-widget/autoload.js","fc45c81e48138bde62e7e742cbbdabb9"],["live2d-widget/demo/demo1.html","82a14d37dbd83931644a4ad6ea1f9eb2"],["live2d-widget/demo/demo2.html","6babb045ef6905badc0dbc5e0d98cede"],["live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["live2d-widget/waifu.css","c4dae5924f2fb0b5ea6ef26aaab80db9"],["page/2/index.html","2e90570282fcd8598359e3011d1892ad"],["page/3/index.html","ffe04c4ef853d084a8885a054af5ace0"],["page/4/index.html","60ccd3ac1b0002497b7e496755d3236a"],["tags/awk/index.html","48d5197022e6722a400f96ea416b7557"],["tags/ceph/index.html","4637412b7c4df15bd803e79001137d89"],["tags/cephfs/index.html","f7dd22ad1ddab6a34fe706e802c8a0d6"],["tags/cloud-native/index.html","12eedc1f5efe795beac944c3c4108eed"],["tags/docker/index.html","22cece8e7b22bcd5164910420f2176ce"],["tags/elasticsearch5/index.html","d8cbd3627840f09d6d1bd6c2c7db5e65"],["tags/elasticsearch7/index.html","cbaddaee313bd6a622e209e2568c1732"],["tags/elk/index.html","e641c84373d7c366a2369863939784b7"],["tags/elk5/index.html","1b81da47271e350a8e05c2cc8bb54465"],["tags/elk7/index.html","0c8f049492fb33af6ac0e842a74fc80f"],["tags/filebeat7/index.html","f58a9bd57afabc72549e938c72eb011e"],["tags/gor/index.html","7898367cbe893e4e6a582e9b235e5758"],["tags/hexo6/index.html","0f2a80a3dda9525f530f1e7f1ab27a6b"],["tags/hexo美化/index.html","33347c9e6b828cdb980980d1a5230ea2"],["tags/http流量复制工具/index.html","7849f26b8f5df4b3b275d5b41621418e"],["tags/index.html","a86dd7e74dec98781f7e6bfbd1e7b56f"],["tags/ip/index.html","8ff7dde7b7a8195113577378576560cc"],["tags/k3s/index.html","f0df386e44fc6c4dfd34f37a4f37af3c"],["tags/k8s/index.html","7bcca6b32444940219b6dc4befb766b0"],["tags/k8s存储/index.html","1ed9893e7733b4517c23d831e16d6a3c"],["tags/kubectl/index.html","612c8c19322cff39253e0bd40a0af240"],["tags/linux/index.html","ce7e4afaa627d6862aa904c5d29e8fb8"],["tags/logstash/index.html","081851d848c7988c9bad9677f6bf439a"],["tags/markdown/index.html","8b1775c1741684ae16d194eba3dc99a7"],["tags/mysql/index.html","82fa0384d0f5c005892ae7b7ac19fc3f"],["tags/mysql5-7/index.html","3b48933238140c4c43af96181cc71833"],["tags/nfs/index.html","61ec467e401acdc5ec1d37b248d64450"],["tags/nginx/index.html","4747160dc9b569c4a138912f339c4dc9"],["tags/php/index.html","e5b60a818d77fe85d32671a599fe0d9b"],["tags/php5/index.html","1445313d7b09a3960086cbf9f3b1d37a"],["tags/php7/index.html","46ae46963744eda7f7c102af5a9fdb43"],["tags/raid/index.html","37198f6be63821b9db31bf3d3d019dd0"],["tags/shell/index.html","51181f62db68bfdf1140ab4515c0593f"],["tags/storageclass/index.html","061731905fc8bbb5024a6f486d0d6d2d"],["tags/systemd/index.html","b85866aace9e04c7540cc0aaba60ef5f"],["tags/云原生/index.html","89b40e86a7d446e92a19b3b9f278ff20"],["tags/大佬博客/index.html","ba4a0a9fe46a59ae75b0198541746468"],["tags/收藏/index.html","8314ce8dbbd71dba8a2392355ccfd428"],["tags/特效/index.html","36c1812b62e2367640f052f5e101d501"],["tags/网址/index.html","dfbbc504c063a86fdaa7c8fe7055217b"]];
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







