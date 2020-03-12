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

var precacheConfig = [["2019/09/19/2-部署elk7-2-0/index.html","e1ed5332e0e6b0fcc2a87fa62cfaff49"],["2019/09/19/首次搭建hexo博客系统/index.html","2daba48b5f77b015f2d86340957cba32"],["2019/09/20/3-k8s遇到的一些问题统计总结/index.html","a603b31a3f468738014d9c3277962cb5"],["2019/09/24/4-hexo鼠标移动和鼠标点击特效/index.html","4a77b98bb6fdb198c5d00fe9e74ab47d"],["2019/09/24/5-hexo添加看板娘/index.html","f7f82ff90df68a584224d381471f2195"],["2019/09/26/6-ceph安装部署/index.html","9cdffc6d4d8ad5b5dc5b467eeddc700a"],["2019/09/26/7-k8s部署storageclass动态创建pv-nfs-rbd/index.html","8859d00376f29e1a576ff43682d64535"],["2019/09/26/8-mysql5-7二进制部署/index.html","8edf880293c84ebaa878ef789581f997"],["2019/09/26/9-linux遇到一些问题统计总结/index.html","1681bba4c796f0233e9c917662b48720"],["2019/09/27/10-centos6安装nginx1-16-php7-2/index.html","a13d114fd1095b0d6f2ede75ca848be4"],["2019/10/10/11-mysql简单记录/index.html","0ba6691dc75f1de0be45eb8bd61315d2"],["2019/10/11/12-awk简单记录/index.html","0e91174a9bebeb792e2167eea4c6d25d"],["2019/10/12/13-云原生博客汇总/index.html","619b468fe8ed263ab08b1aa9d5594ff9"],["2019/10/15/14-mysql目录copy方式迁移/index.html","5b6187c3c101db919cfbf58721813541"],["2019/10/16/15-docker简介和使用/index.html","81a9414a419c743fe26a4b8ec3451c11"],["2019/10/16/16-dockerfile介绍/index.html","c59b1002603928c9cd4466eb62cc8f44"],["2019/10/16/17-markdown一些写法记录/index.html","d085eb8107f51fff4ad271cbc50fc0c5"],["2019/10/17/18-收藏链接/index.html","bdcec9e32ced4f3c2a7e5b5458d2b01b"],["2019/10/17/19-shell中gt和>的区别/index.html","01c1af0c400a5428471068913e1952dc"],["2019/10/24/20-k8s搭建mysql5-7-24主从/index.html","aa6159075ae3d149ad09f88e8bc96356"],["2019/10/28/21-流量复制工具gor/index.html","ac0216ee317bf8cf7705d9db6ace24b8"],["2019/10/28/22-es集群磁盘扩容/index.html","c127aeb806b1da9234b63ca1bbcf88d4"],["2019/10/29/23-mysql5-5主与mysql5-7从部署配置/index.html","cfffc6525c2e0703767cbd442e5c7258"],["2019/10/30/24-filebeat7收集mysql慢日志到es/index.html","b4a42790883b347a75f3ce57986436b8"],["2019/11/01/25-linux一些脚本汇总/index.html","29538971444813fa277e9e08a92c0fdb"],["2019/11/08/26-logstash配置/index.html","334cde61f763823236a64a7ebc59ed81"],["2019/11/21/27-k8s一条命令部署es5-2-0集群/index.html","b7da5682d45db8ad39cfdde9264055ad"],["2019/11/25/28-k8s1-16使用旧yml部署配置问题/index.html","252285045d0b70bfd57947496ddd344f"],["2019/11/25/30-k3s集群部署项目报挂载nfs错误/index.html","7d92d09c678799020375a6e737e7e83b"],["2019/11/26/31-systemd一些命令/index.html","297a95fb866e99178533fa469c387d13"],["2019/12/02/32-php错误502问题总结/index.html","baa56568d320dda22fe92315af749e66"],["2019/12/03/29-k3s安装配置/index.html","c162445c3d976744712982e99c9965e0"],["2019/12/03/33-k3s1.16部署nginx+php5.2.17/index.html","0b74e1d49f19ef54c14c0a4bf5a2b0f4"],["2019/12/05/34-k8s一些命令总结/index.html","bf2ae91a4f866ab1ef5a9be9d57cf0b6"],["2020/02/27/35-raid1盘数据迁移/index.html","a8f018718c958ab6dd39f6b0d9fc7e54"],["2020/02/27/36-centos单网卡配置多ip的几种方法/index.html","d746f1ea034a1f672cc3b46a0bc6ccfc"],["2020/03/10/37-mac一些常用命令/index.html","a35b5deb592474c68206e327090099a8"],["2020/03/12/38-es集群节点出现overhead脱机的问题/index.html","c9570ce748de695e2698448a2be8c6eb"],["archives/2019/09/index.html","1b247bdc4cd2883c190a7e2334a80ff0"],["archives/2019/10/index.html","2654ad939d43032367fb8543e39b1bff"],["archives/2019/11/index.html","58d75536f04ef8e00eb329fd5bdc70fd"],["archives/2019/12/index.html","122773cb5a97fb8b441d8932687362bc"],["archives/2019/index.html","e9948c768aaa9a5e755b4a9f6f526e09"],["archives/2019/page/2/index.html","7f300c5160e590254bc30e8f065ad0e1"],["archives/2020/02/index.html","3fa293f641fc741cf29028af69f9ae6e"],["archives/2020/03/index.html","89758e03fcf94b50a35d1a369d472ece"],["archives/2020/index.html","e8895cd65ae5ed2a3e64bdea189e5225"],["archives/index.html","c230ed01793d925188b83a1c01b7b15c"],["archives/page/2/index.html","0e9b62208233d6c30d2f10aa0f94634b"],["categories/docker/Dockerfile/index.html","8039818904a206deb15132a53edb0868"],["categories/docker/index.html","67e43c5a62eea702e7c6de2ad8206d48"],["categories/elk/elasticsearch5/index.html","38ee030b0eb00303dcfa5437bb77b4bf"],["categories/elk/elasticsearch7/index.html","f5f28a076c0850564ccdeedda4d1bddf"],["categories/elk/index.html","98dd1d4d60e5f5d53d8c89f4e44c1954"],["categories/elk/logstash/index.html","f6412ae77e89d751f72f353f33e9f582"],["categories/elk7/filebeat7/index.html","85bc82ded5020d28c51f2e41e289f854"],["categories/elk7/index.html","bc7af314f7384c50371374a4b155d86c"],["categories/index.html","9f6e5d2277d0b8c1e6a351a8c5b0baea"],["categories/item2/index.html","47a29550809f06441ab44e7c9fb52d43"],["categories/k3s/index.html","e9b9d918a9ae0386a4b7a2d6a87a4cee"],["categories/k3s/lnmp/index.html","0eb02accb081971b72cb25bb2af264f9"],["categories/k8s/elk5/index.html","60e9a0d39708a1cc022bc453cde811cb"],["categories/k8s/elk7/index.html","6a97214dcdc5a562900f29b26ee35506"],["categories/k8s/index.html","0ebdde422133a6e18ca5899b2a0dbab1"],["categories/k8s/kubectl/index.html","2a236132d08c658080d3f199d06eed8c"],["categories/k8s/mysql/index.html","4d8b05897225185b25d951987f41652b"],["categories/k8s/storageclass/index.html","7df3ce5050aa9f593670efd98dd0a6fc"],["categories/k8s/问题总结/index.html","46f2ff0483bef89c5e2241acb5959404"],["categories/linux/awk/index.html","68e87bef99fa96ad88b01ee527e0afd5"],["categories/linux/index.html","1db18515b6c71e879f623e4cdf11f8b6"],["categories/linux/shell/index.html","227f634992f0f72635f25776d9f402d6"],["categories/linux/systemd/index.html","5d6a9ff655468d73f2c152c27b56638c"],["categories/linux/问题总结/index.html","83fdc384e350b65c136e95f633b1d84c"],["categories/mac/index.html","d3c55ba9e83caaa7485c04bda026cbca"],["categories/markdown/index.html","f4bdd1987503d3638f4d1a4ec3df8549"],["categories/mysql/index.html","7e0a6b07ed0057084376f7c4882fb775"],["categories/mysql/主从/index.html","2856545b067cb7c5c697c49e8dda6f58"],["categories/nfs/index.html","ee78f369e4b14a9e1dcc45ab5e712071"],["categories/nginx/index.html","4b0c41fa717a0a78a5247cf88350bede"],["categories/php/index.html","9478f2cdc538925ef59e63bdf12e0173"],["categories/php/问题总结/index.html","2d8e7298702fadac4ebba17150909fa3"],["categories/raid/index.html","8f0cd9b0a499b45f421756ed0d5db66b"],["categories/博客/index.html","b99945f2f53bb0f9cd79519f9e7014aa"],["categories/博客/美化/index.html","c3eaf0f88bf7c79b5c69c851197bc0b2"],["categories/存储/ceph/index.html","378efff06c4137c4809304040bddc0a7"],["categories/存储/index.html","fd483975e17e1a1ff0911df3d4ae92b7"],["categories/存储/nfs/index.html","0dd35715e0f45fe088cdd2acd56b8169"],["categories/技术文档/index.html","e0b0a74e6928a01c0b58ddc3e8158f17"],["categories/有趣/index.html","31c87d04f1e33dc1ffa4587bf5230b45"],["categories/有趣/二次元/index.html","3f92e338a83d26966760edfe37d8c2a4"],["categories/流量复制工具/gor/index.html","ebd7905d88b3fbb9040a79c31109d3dd"],["categories/流量复制工具/index.html","1c20e70dcb07bdd830babe7a31f13388"],["categories/网卡/index.html","4b64a612b1d8f6593dd92cdb488061b5"],["categories/网址/index.html","adfcf3974c2d02ec7911bd621a94587c"],["categories/网址/大佬博客/index.html","80c0fda2551b84bc30339ecc16ccf937"],["categories/网址/收藏/index.html","c052f2f1313e218f95e7dc604ef1ca6f"],["css/main.css","6fc8396a83c53e3c141f6f8627e3d84a"],["images/16/容器的原理-1.png","1c184a092af6b6829c49ee20e70d132a"],["images/27/img1.png","74279f54a523a47f82a95a04ccfc9eb4"],["images/27/img2.jpg","93a32e8f4e52a9ea2a28b72a4223c2a9"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["images/blog6/rancher-pv.png","d2a7e4bbfad5f71e75c9d5459cf5a464"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/docker1.jpg","5c611dd864017adeff648bca93d53f41"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/jixie-title.jpg","3ebd10201e23ecf68aba4524c020db0d"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["images/tcp三次握手图.png","32ddd8df35bd5762604327b25758370e"],["images/tcp四次挥手图.png","684b2b4a0286acadc32247d693dbd961"],["images/test1/test1.jpg","60b725f10c9c85c70d97880dfe8191b3"],["images/title1.jpg","fa2db043867c4c5654471e21ad36e5c0"],["images/title2.jpg","b6e57860ebc3fcdcf150a6a4cf3402ab"],["images/title3.jpg","f0b1554cfa4dd1193719dcfeb9e4de28"],["images/title4.jpg","6eb7bcbb846d1123e830488d75028df7"],["index.html","ec99566cd16ef2202ec94a277e57bbae"],["js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["js/src/instantclick.js","865d92a4a07409b7fed739e6a108e9c4"],["js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["js/src/live2d.js","3359a94d733737dbdd290dd41f9cef0b"],["js/src/love.js","7bcfdb57debd43483174cf9e15ab37cc"],["js/src/love2.js","2b51ddac5207cba4153da31e9132414c"],["js/src/motion.js","706d085e6cfec6f3e92dedc590d68d68"],["js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["js/src/schemes/pisces.js","1bd23ed75238ebf11afe2aa6b1c3a25b"],["js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["js/src/utils.js","f06ffce70453ad3a4d9611fdde5ca6c3"],["lib/canvas-nest/canvas-nest.min.js","2361106788cc4ea719ed76f52b413e46"],["lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["live2d-widget/README.html","9941b5173b7915eb6158e62f02cd9ea3"],["live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["live2d-widget/autoload.js","fc45c81e48138bde62e7e742cbbdabb9"],["live2d-widget/demo/demo1.html","82a14d37dbd83931644a4ad6ea1f9eb2"],["live2d-widget/demo/demo2.html","6babb045ef6905badc0dbc5e0d98cede"],["live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["live2d-widget/waifu.css","c4dae5924f2fb0b5ea6ef26aaab80db9"],["page/2/index.html","0510a101193aec3bac8b04bafc49a135"],["page/3/index.html","784d4fa8b9996ce637bbf0744471d6dd"],["page/4/index.html","a3efaaa0fa7c55f4b65691e9cf3bb649"],["tags/awk/index.html","41c68685d14eaec92166fbec14474fd0"],["tags/ceph/index.html","f3d0cc7f07758a965b7c3136eda37d63"],["tags/cephfs/index.html","349754fb37729ee362b86122314c5e9b"],["tags/cloud-native/index.html","c910733553642faef748fa2ce2a46762"],["tags/docker/index.html","9a7bb2c1f8f4d643806e243496ed23b3"],["tags/elasticsearch5/index.html","793550ff34650d343c3c9e681c7bccf4"],["tags/elasticsearch7/index.html","b7b7298b4ddad66df0043f14dc11d7db"],["tags/elk/index.html","72f5316fe1ab12f62dc5ec7d7af2930b"],["tags/elk5/index.html","5e8ced8827668ee4048d0121bacb596a"],["tags/elk7/index.html","eba7d4b82578b913d3cab5de686e7c82"],["tags/filebeat7/index.html","a622a0721477cc6da44dbffaaec3d3c1"],["tags/gor/index.html","e74761c305e0ddda6aa06e6cfe37d62c"],["tags/hexo6/index.html","21005055354e5f3eb9e7522f4dceda32"],["tags/hexo美化/index.html","7618eed78aa469d073fe42c12c4e5c08"],["tags/http流量复制工具/index.html","9b0540284b5e8f0bb071455d7e6b51a5"],["tags/index.html","cd04516f2828bee053ac83c665e9dbf6"],["tags/ip/index.html","e4ed5324326199ea064ce8056913033d"],["tags/k3s/index.html","05c72ffc60e190d9b564de3eafec7f68"],["tags/k8s/index.html","0a1ff92d3de03f9b809945907e799336"],["tags/k8s存储/index.html","1be62539fcf02cfa35fbf0e9d7a283df"],["tags/kubectl/index.html","b07a7c8bc70e7c555ba6b8b0172bbabb"],["tags/linux/index.html","394ce67e3065ca22a3940efd69c7a2c9"],["tags/logstash/index.html","d422c07bb1dc028ccec44c97f20637f1"],["tags/mac/index.html","13cd915ae4288a6677823ccebb6d0634"],["tags/markdown/index.html","9decbad4166c772443c8ae2cdf8a37f1"],["tags/mysql/index.html","1270bc07a4d82b111643cacefdc32efd"],["tags/mysql5-7/index.html","7c3f4454509de3c1084dec4344b6fd6a"],["tags/nfs/index.html","a0efd93ab99d0f6bd9ce080b1cb1ba14"],["tags/nginx/index.html","d2f4b085a3653724fe6f5930efb0cad1"],["tags/php/index.html","64225a20e35a239c452eb19530dde46d"],["tags/php5/index.html","53b746a6caa214d4bb5335ccf99195cb"],["tags/php7/index.html","ca4b6f375af0f10f7ce2f18463f421ee"],["tags/raid/index.html","9b242095297361c1fcd1874d25076771"],["tags/shell/index.html","f7168bb9773e5bfe109efcd1458e4829"],["tags/storageclass/index.html","99811a7a0296addb1f293702889736b0"],["tags/systemd/index.html","09979e9f51fb2a3a69cd369a923b6ef3"],["tags/云原生/index.html","859eb32ad6af491436ec0b71777aba6f"],["tags/大佬博客/index.html","c356ea2e2a754527c775c7fa85d809f9"],["tags/收藏/index.html","cb4c618cbe01d4506084aa62e9fc29bf"],["tags/特效/index.html","a5d34d93984c91fe23c384ee816d7675"],["tags/网址/index.html","70f99b05cff1ce1ab8ec317fe3695853"]];
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







