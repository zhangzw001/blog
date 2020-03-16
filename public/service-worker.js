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

var precacheConfig = [["2019/09/19/2-部署elk7-2-0/index.html","55283a48d3f48bc6fde09ae9db91d198"],["2019/09/19/首次搭建hexo博客系统/index.html","e5e3df6c411cf87a60361c0c831a13cd"],["2019/09/20/3-k8s遇到的一些问题统计总结/index.html","ad107a4725f57aec7656e5e841c9512c"],["2019/09/24/4-hexo鼠标移动和鼠标点击特效/index.html","2ef8647d5a73f18b614a182ca04b6b00"],["2019/09/24/5-hexo添加看板娘/index.html","9958283cf3b37aedb5dde7c359f3206d"],["2019/09/26/6-ceph安装部署/index.html","90b7f8f18b892b033f2640166932445d"],["2019/09/26/7-k8s部署storageclass动态创建pv-nfs-rbd/index.html","ae2d32a38c7d6909cbe1d7c857b63368"],["2019/09/26/8-mysql5-7二进制部署/index.html","0c0591c83562359302c5616a2ac82f72"],["2019/09/26/9-linux遇到一些问题统计总结/index.html","622a3d134eb0c534a0775231d1e3d14a"],["2019/09/27/10-centos6安装nginx1-16-php7-2/index.html","a2f568517d16e4a3fa4ee386b9ab2f81"],["2019/10/10/11-mysql简单记录/index.html","e644d066cacdeed2a0ffe9b2dbd9c6b5"],["2019/10/11/12-awk简单记录/index.html","fb7519e19c4d99ef7a745e030fac28b2"],["2019/10/12/13-云原生博客汇总/index.html","bfe208b9b39e921206934d0f9f73249f"],["2019/10/15/14-mysql目录copy方式迁移/index.html","4eded38eb896670badc3879617c36851"],["2019/10/16/15-docker简介和使用/index.html","b18211b6a238e7777d17e60ebb8d3bc8"],["2019/10/16/16-dockerfile介绍/index.html","f1d3864c738c12f586129bd7798d42d8"],["2019/10/16/17-markdown一些写法记录/index.html","2a40b1c3c0f60a5a7d5c7b78ffc8b4ec"],["2019/10/17/18-收藏链接/index.html","f2d2fe8c2bc41aa5f7f934a00d733117"],["2019/10/17/19-shell中gt和>的区别/index.html","b2b47c01c98c8ad4264c2e736eb7aabd"],["2019/10/24/20-k8s搭建mysql5-7-24主从/index.html","8e680f89268bd2699f3fc33d73897112"],["2019/10/28/21-流量复制工具gor/index.html","f3f1a1437b37470b22826636737882b1"],["2019/10/28/22-es集群磁盘扩容/index.html","96a00e9eb96d146261a3f78980c9cdcb"],["2019/10/29/23-mysql5-5主与mysql5-7从部署配置/index.html","ce9f94d0b39ca1a1af0503828c22e1aa"],["2019/10/30/24-filebeat7收集mysql慢日志到es/index.html","cc0997f8b44941e54ea011bb3ff98cb1"],["2019/11/01/25-linux一些脚本汇总/index.html","166ebfe8ee25141c801acf55c5493156"],["2019/11/01/25-一些脚本汇总/index.html","211f48c233646a977d217f2cf75a1854"],["2019/11/08/26-logstash配置/index.html","acca33a90110d7e935768bc598655fc8"],["2019/11/21/27-k8s一条命令部署es5-2-0集群/index.html","bade5da004d69265b9b21de775b6f13d"],["2019/11/25/28-k8s1-16使用旧yml部署配置问题/index.html","8140c17fff7216b7015af7ea5edb819b"],["2019/11/25/29-k3s集群部署项目报挂载nfs错误/index.html","60ee08498a1ce0d723610c183a152817"],["2019/11/25/30-k3s集群部署项目报挂载nfs错误/index.html","928b82b0262c9db7abbadf0a1debda89"],["2019/11/26/31-systemd一些命令/index.html","d52ff30390d3f45aaba98f189715f191"],["2019/12/02/32-php错误502问题总结/index.html","49dea366dbf890abba4c1915903c2e46"],["2019/12/03/29-k3s安装配置/index.html","7bd00734ae9e3ab075dfdf1fa021db8a"],["2019/12/03/33-k3s1.16部署nginx+php5.2.17/index.html","0b4eb4c6c1b2260ba0f96e462a8060ac"],["2019/12/05/34-k8s一些命令总结/index.html","f25b4f5970a3b27315545d7c5ef45aaa"],["2020/02/27/35-raid1盘数据迁移/index.html","a2bec3c17d3e180f977ee53b88be471c"],["2020/02/27/36-centos单网卡配置多ip的几种方法/index.html","19d32da058176f197cce604ad9bce2e6"],["2020/03/10/37-mac一些常用命令/index.html","8dd8db944de205f9678b53be3eb1caba"],["2020/03/12/38-es集群节点出现overhead脱机的问题/index.html","26af55fd3a258cf7966baab4008a52b1"],["archives/2019/09/index.html","f29794b571e0de5aa7c9fc806d6e0760"],["archives/2019/10/index.html","222cda86abd66d0cff21aeaa3f87d87b"],["archives/2019/11/index.html","fbd8f4a0758161331fab92dc3a3401b8"],["archives/2019/12/index.html","350b61cdf6654489f2088c557125acb1"],["archives/2019/index.html","f66259457b872db69614976c8425451c"],["archives/2019/page/2/index.html","6d2fef2838c7693656cf573dc225a46f"],["archives/2020/02/index.html","e7135eb26d9bd92774f4772b6aef947e"],["archives/2020/03/index.html","238d9f9e3105ce4720c935a72ae7b317"],["archives/2020/index.html","e4ccfab77ba26fd0ba62c6e2435fbf5e"],["archives/index.html","c9c8372a579326e6cc07611da1cc84a7"],["archives/page/2/index.html","6b4c37590d892788d6c69c092a9074cc"],["categories/docker/Dockerfile/index.html","2ca23ec1a9158e2f2cfeb5d73db0a070"],["categories/docker/index.html","c5bcccecee13eee48740df556f1d1148"],["categories/elk/elasticsearch5/index.html","e4baf53d475fde036f75c0ecf264901d"],["categories/elk/elasticsearch7/index.html","477c97032fa23f791bb6ee8b758897ee"],["categories/elk/index.html","120a3eb31589b8e480af76cf7d7ade2c"],["categories/elk/logstash/index.html","b2e406f4cc12112a35e6f5d41bdffd75"],["categories/elk7/filebeat7/index.html","b23743cc7ec341b51c5e802f90f2388f"],["categories/elk7/index.html","9f8ab7ee256bad72743b95ab0001c8db"],["categories/index.html","036ef0be2626f183efd208249d522306"],["categories/item2/index.html","5dee4cf8d9985d1b4e8da06157ed761b"],["categories/k3s/index.html","1dc8a39a7f1c17436f18fd4f2697038e"],["categories/k3s/lnmp/index.html","e68ac1be55a607aebd9e23789703ba59"],["categories/k8s/elk5/index.html","a444ac844c4d2120473327a64bc7f609"],["categories/k8s/elk7/index.html","baa8b0ac4aead1a4ad8d873a1c38e068"],["categories/k8s/index.html","36b956719abd9b3237027443e4fc6f6c"],["categories/k8s/kubectl/index.html","5666067680d59f96e254be8e0fc9c604"],["categories/k8s/mysql/index.html","9c1162bd98be4bfd4039f6082ff42ae9"],["categories/k8s/storageclass/index.html","8b9242e00cf369834535cf72a94bf887"],["categories/k8s/问题总结/index.html","2b84b2114fb8525d335d8ade57e59036"],["categories/linux/awk/index.html","6e0d02d5156ef35be4a959ade565cb4b"],["categories/linux/index.html","fcc870c934241fa6c30269d301cecebe"],["categories/linux/shell/index.html","26a4679f368a42af88ef2827f02d4cd4"],["categories/linux/systemd/index.html","7dc092595be6f6ffd6aa5f5535a130a8"],["categories/linux/问题总结/index.html","7d3797ff916dea88f7a87511159f4c25"],["categories/mac/index.html","836508008b938269e7f20857144fc53b"],["categories/markdown/index.html","111b6ae52576acc4a9eeca9a86405715"],["categories/mysql/index.html","14f4e3178d86072634b379a297cff5eb"],["categories/mysql/主从/index.html","d98fa261003f910fd61972b010b45c05"],["categories/nfs/index.html","be81a94bd679d76b216bdc8c78e67618"],["categories/nginx/index.html","ab71a590a1c5f8c4167ef9f72a274431"],["categories/php/index.html","3cef18fa23743a53abd4d21a4cadf682"],["categories/php/问题总结/index.html","1aa6dc827acb57aa4a80fe7d27789fb1"],["categories/raid/index.html","6916184bd6c20417ff3e54a6d74c3c40"],["categories/博客/index.html","75be63551d99ea00256845745eab5ea5"],["categories/博客/美化/index.html","1ffa71235ab637ede7d66ff5b90558f9"],["categories/存储/ceph/index.html","2a356de45707891a77c4e0faecf3874b"],["categories/存储/index.html","7b4a81b502f57d10f6adbcf738f9541e"],["categories/存储/nfs/index.html","b2446f8648e216cd4000a15dfa4db051"],["categories/技术文档/index.html","eeb7dbe1006c3c6e2346e59b540aad92"],["categories/有趣/index.html","0d384374f5a76453a59a35a933e5cdd0"],["categories/有趣/二次元/index.html","3d4b4f9aa79ae5ccce54e55e8e6345ad"],["categories/流量复制工具/gor/index.html","1f68965a0998df82ea9aebadb7b0fc3f"],["categories/流量复制工具/index.html","da360027f87ff475f7ae229753b9ac57"],["categories/网卡/index.html","5932eda3fa64f510a45c9d71cbf4f4ef"],["categories/网址/index.html","eed3b24a3bbebf48573b09d343f046f4"],["categories/网址/大佬博客/index.html","9eb72cfdfa9b5f167f1af52fd6b3cd78"],["categories/网址/收藏/index.html","8bf44faf32802e273ab34625a13942e6"],["css/main.css","05431c8322ed7a81799f11601633ddac"],["images/16/容器的原理-1.png","1c184a092af6b6829c49ee20e70d132a"],["images/27/img1.png","74279f54a523a47f82a95a04ccfc9eb4"],["images/27/img2.jpg","93a32e8f4e52a9ea2a28b72a4223c2a9"],["images/38/gc1.jpg","dc31455119def3534b8b78213e6dcd29"],["images/38/gc2.jpg","ef5563c2f902a9b8550ed006747c94f5"],["images/38/gc3.jpg","3bef257bda43708e5c6d00598e5a6ccf"],["images/38/gc4.jpg","df24a1184fff79f3513b73fc1f4a6938"],["images/38/gc5.jpg","3e0fd4156b9666c1488b49d332875416"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["images/blog6/rancher-pv.png","d2a7e4bbfad5f71e75c9d5459cf5a464"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/docker1.jpg","5c611dd864017adeff648bca93d53f41"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/jixie-title.jpg","3ebd10201e23ecf68aba4524c020db0d"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["images/tcp三次握手图.png","32ddd8df35bd5762604327b25758370e"],["images/tcp四次挥手图.png","684b2b4a0286acadc32247d693dbd961"],["images/test1/test1.jpg","60b725f10c9c85c70d97880dfe8191b3"],["images/title1.jpg","fa2db043867c4c5654471e21ad36e5c0"],["images/title2.jpg","b6e57860ebc3fcdcf150a6a4cf3402ab"],["images/title3.jpg","f0b1554cfa4dd1193719dcfeb9e4de28"],["images/title4.jpg","6eb7bcbb846d1123e830488d75028df7"],["index.html","ba6feb53d4f1dab9640f87f61f3de53f"],["js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["js/src/instantclick.js","865d92a4a07409b7fed739e6a108e9c4"],["js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["js/src/live2d.js","3359a94d733737dbdd290dd41f9cef0b"],["js/src/love.js","7bcfdb57debd43483174cf9e15ab37cc"],["js/src/love2.js","2b51ddac5207cba4153da31e9132414c"],["js/src/motion.js","706d085e6cfec6f3e92dedc590d68d68"],["js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["js/src/schemes/pisces.js","1bd23ed75238ebf11afe2aa6b1c3a25b"],["js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["js/src/utils.js","f06ffce70453ad3a4d9611fdde5ca6c3"],["lib/canvas-nest/canvas-nest.min.js","2361106788cc4ea719ed76f52b413e46"],["lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["live2d-widget/README.html","9941b5173b7915eb6158e62f02cd9ea3"],["live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["live2d-widget/autoload.js","fc45c81e48138bde62e7e742cbbdabb9"],["live2d-widget/demo/demo1.html","82a14d37dbd83931644a4ad6ea1f9eb2"],["live2d-widget/demo/demo2.html","6babb045ef6905badc0dbc5e0d98cede"],["live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["live2d-widget/waifu.css","c4dae5924f2fb0b5ea6ef26aaab80db9"],["page/2/index.html","0ebf30952cef3d0ef97f30dd9b4df51d"],["page/3/index.html","dfe6d36a4f9b69305cfe9d3f0786dcfa"],["page/4/index.html","8cb8104b84e4da62770a8bfc289c569e"],["tags/awk/index.html","fd42ca147f721e7d0cb2066cef6bc808"],["tags/ceph/index.html","53510516df3f61639a56e4c5490ace86"],["tags/cephfs/index.html","1b7440f2f88bc20106a1d2655625a15a"],["tags/cloud-native/index.html","8229dc4b359a380fad559a4aad8d2791"],["tags/docker/index.html","7ba6bdc87a83cd7bc450b815ef196424"],["tags/elasticsearch5/index.html","8ecfa13fdca9af7b242dbbdbe27e0a32"],["tags/elasticsearch7/index.html","9a8098e134e699b641075eb485c4f6ab"],["tags/elk/index.html","47743188cf47babdab1adf66405cad08"],["tags/elk5/index.html","acf6c108608103eb83eaf428cd806f64"],["tags/elk7/index.html","3656d2ab934d5d00bc9aeb09a702141a"],["tags/filebeat7/index.html","0a728e2c89b20764bd163c0f59eba112"],["tags/gor/index.html","1a67ecb57b5c14633588ec9a5bcbaf6d"],["tags/hexo6/index.html","844ae26c4c18801f8c3db887787e089d"],["tags/hexo美化/index.html","fc13e49c39f1f9d441c059b7299fbb6d"],["tags/http流量复制工具/index.html","102d8609237156f75251e5a0fd3acff8"],["tags/index.html","b892aa466c8fd44cdf2a6c91d9ae503a"],["tags/ip/index.html","328ef65aace59c7c6cda99ca44478865"],["tags/k3s/index.html","f490f39a6eb9a7c51574c2a3c4098f14"],["tags/k8s/index.html","669a26b7036c9325c2f62d3a882e09de"],["tags/k8s存储/index.html","f4b3436b268c7fdab6ad2192f9e3e550"],["tags/kubectl/index.html","5a93e9aedb89ae08c8878137ebb6bc45"],["tags/linux/index.html","057aa4975bbfaeb95016ec3e0effcd0d"],["tags/logstash/index.html","aba8d9d5b99b648d33ca9db0f0a4aef3"],["tags/mac/index.html","8a3bd358ab8ce2a432e1288fd7fa1398"],["tags/markdown/index.html","0c252237d692ac3e0dea34ebf35d6bbe"],["tags/mysql/index.html","6fa14d0ac957139c948df90fddfd5adc"],["tags/mysql5-7/index.html","b9efcb99191e64a0abeca76123599e04"],["tags/nfs/index.html","ac3b9f6043fcbf4af05797c22daedafc"],["tags/nginx/index.html","3a014a23390ffb9f3204b3e9fbfaf9c9"],["tags/php/index.html","770c0f030ccd256fb42a6bbbc595d0fe"],["tags/php5/index.html","ef5ec3ee2463cbde5d8501ce0bd787eb"],["tags/php7/index.html","4676cc4e6768eb267db4235dbe852fa5"],["tags/raid/index.html","710a4b385beacd9dc4ae326b08035c3c"],["tags/shell/index.html","a13c661f1f686f609a79b9dbd791cb71"],["tags/storageclass/index.html","a9edb30a4c4355496af04d275e707781"],["tags/systemd/index.html","5a2b1601d5939d913686a4d688c860c2"],["tags/云原生/index.html","e1b39df7d4d67582e206a660d3cb5c2a"],["tags/大佬博客/index.html","0604e926a6b13aa0cad40ca13a2dffd1"],["tags/收藏/index.html","93e97a7b175dc1efc21f046be023bd04"],["tags/特效/index.html","b8bc37106c9fcd11c6a3a2a3ce346388"],["tags/网址/index.html","263b6edcddeeebdd851403444c5d407d"]];
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







