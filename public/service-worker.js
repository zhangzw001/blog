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

var precacheConfig = [["2019/09/19/2-部署elk7-2-0/index.html","06811cb2d154a8deb19e75413ba519c6"],["2019/09/19/首次搭建hexo博客系统/index.html","73caeec158429cef4bf102fecfeb7699"],["2019/09/20/3-k8s遇到的一些问题统计总结/index.html","345c8a29bd621d1f092bfd0fe3de5321"],["2019/09/24/4-hexo鼠标移动和鼠标点击特效/index.html","e601f991fde6c65a5749e3c2261831bd"],["2019/09/24/5-hexo添加看板娘/index.html","b85ba96a6ca4df72dc90e688749bd2e0"],["2019/09/26/6-ceph安装部署/index.html","d80be605d54a47d5349682ee54f36c36"],["2019/09/26/7-k8s部署storageclass动态创建pv-nfs-rbd/index.html","1934d683a344d41bd105c4bb8154b613"],["2019/09/26/8-mysql5-7二进制部署/index.html","e1d0f808cd71c9ae1c7d1895406fd444"],["2019/09/26/9-linux遇到一些问题统计总结/index.html","54635990cddb84400356642966124d3b"],["2019/09/27/10-centos6安装nginx1-16-php7-2/index.html","5ec46b918bf80c244f6bedffc186e5e2"],["2019/10/10/11-mysql简单记录/index.html","98a31160e484087eb6ec74632d0f8fdc"],["2019/10/11/12-awk简单记录/index.html","56b922bb76811d7db6069b4b788f3820"],["2019/10/12/13-云原生博客汇总/index.html","f8b15433c94c75fcf20515ad9dd28b02"],["2019/10/15/14-mysql目录copy方式迁移/index.html","aeaba3322c1f720fdf9c279e1b4bd728"],["2019/10/16/15-docker简介和使用/index.html","affddc329378db6e8fabb1929a32f6cd"],["2019/10/16/16-dockerfile介绍/index.html","dc2cd95f268c7951679733cc57dd3719"],["2019/10/16/17-markdown一些写法记录/index.html","8a76b181eb51abf8c92a1ad34e946b69"],["2019/10/17/18-收藏链接/index.html","66fb5a6b2892434aa9fbfc98b21da592"],["2019/10/17/19-shell中gt和>的区别/index.html","8edd120a09680f60dd8a452754ef25fa"],["2019/10/24/20-k8s搭建mysql5-7-24主从/index.html","fd3336e77e315f485a133df81b74f08a"],["2019/10/28/21-流量复制工具gor/index.html","f54b9aedb3eeed08043f675549d9ed55"],["2019/10/28/22-es集群磁盘扩容/index.html","732bf32fb5cf03be60505553b6b4be2c"],["2019/10/29/23-mysql5-5主与mysql5-7从部署配置/index.html","2e2bd7baeb85571b928b0641051d8903"],["2019/10/30/24-filebeat7收集mysql慢日志到es/index.html","a49c758809dc4cf11828bafab37aaf5e"],["2019/11/01/25-linux一些脚本汇总/index.html","38569d7933e20c452bad758a8a29ba0c"],["2019/11/01/25-一些脚本汇总/index.html","92ac92f57116655ea02b26648b8ade55"],["2019/11/08/26-logstash配置/index.html","2e1c65e93eee4220a5ae0b6e0c5ce9a6"],["2019/11/21/27-k8s一条命令部署es5-2-0集群/index.html","a8c5ead2cb7b19ce981abd75acbda453"],["2019/11/25/28-k8s1-16使用旧yml部署配置问题/index.html","0798b5cd4a9f0d45ca96d7702cf5571a"],["2019/11/25/30-k3s集群部署项目报挂载nfs错误/index.html","64e7537aac06a5f147785e893a268ea9"],["2019/11/26/31-systemd一些命令/index.html","d91489536e8097b1db9cd624e2d14033"],["2019/12/02/32-php错误502问题总结/index.html","e8971b3693c116d6cd21704c4ed6200e"],["2019/12/03/29-k3s安装配置/index.html","3bec51f1b3f7d4074ef89606f2177ae8"],["2019/12/03/33-k3s1.16部署nginx+php5.2.17/index.html","82eff32e1564ce6275826c97e462ed65"],["2019/12/05/34-k8s一些命令总结/index.html","7c25566a892ff18a3997dd5a169820bc"],["2020/02/27/35-raid1盘数据迁移/index.html","719bb53c28c21ca3f2eb4e030bce7338"],["2020/02/27/36-centos单网卡配置多ip的几种方法/index.html","fd3504b3056d0379845c87f2195e0b7a"],["2020/03/10/37-mac一些常用命令/index.html","3f7f400de4357cac70ced5bd7b7cda02"],["2020/03/12/38-es集群节点出现overhead脱机的问题/index.html","cd6f982626d19df4d7866a58fa9fb449"],["2020/03/18/39-记一次nginx的request-time-和upstream-response-time差值很大问题/index.html","d92bec933381ab42e7b60147a2d9a46f"],["archives/2019/09/index.html","0f4e24e3acb8e282b25555092a463373"],["archives/2019/10/index.html","74ec959baf715b3aaac9d98294e62d0d"],["archives/2019/11/index.html","b6d6d569df17f1c1c0b3e42d9c2b77c4"],["archives/2019/12/index.html","0fac39f5ee896d609e7e7ac339f31c7e"],["archives/2019/index.html","5092f8581f9e87a61de6eb195e1abc24"],["archives/2019/page/2/index.html","ce99f3fb801042a3fd0b1b6a44e004e2"],["archives/2020/02/index.html","eb47fb448ad72583c4474dc12ebd5792"],["archives/2020/03/index.html","a827a4396784d21007beb1e3f6da9c04"],["archives/2020/index.html","2ecdea1d41587b7d8782950790a3a143"],["archives/index.html","27feaa6a9715e6db4793392edb594ae0"],["archives/page/2/index.html","896c7f8299d5e400123265362c74ba7f"],["categories/docker/Dockerfile/index.html","d08144afa6df214907b7a5c4fa0a71a5"],["categories/docker/index.html","dff24e3d4f272c4d1880bf0e6d4cb34e"],["categories/elk/elasticsearch5/index.html","df0a5de97a27a4888393e63b30bd79ff"],["categories/elk/elasticsearch7/index.html","c2df48c0a7f3fe21ee148b00bf6fe210"],["categories/elk/index.html","2ea7dc50ba45016ec08a231b64d21abf"],["categories/elk/logstash/index.html","fe6cf58db2ead29bda8ed863afa7cf72"],["categories/elk7/filebeat7/index.html","34e076bd5fe59aaae8489f9c034cf6d3"],["categories/elk7/index.html","aa584d7ec823cadfa79e26689c45350e"],["categories/index.html","5df738c7dcae174a79eaeaacc47c606d"],["categories/item2/index.html","1d8c1a28630b8dc75cfcbb7cc28e626e"],["categories/k3s/index.html","7fe720b4e62ac5cd37f4ccc436ea2326"],["categories/k3s/lnmp/index.html","b3717ce132633b83194a2b7a24d4aee2"],["categories/k8s/elk5/index.html","6d3b2cadcd53072b244eef3cf364c04f"],["categories/k8s/elk7/index.html","6cde54f9b4c88bcacebc3c51f7f6a312"],["categories/k8s/index.html","90eac945e3376347ab01d6bf433caec8"],["categories/k8s/kubectl/index.html","029a93174312a366aa361674809c19d2"],["categories/k8s/mysql/index.html","13fce6b52faf866c21b9a26af6988189"],["categories/k8s/storageclass/index.html","0ef4691ea8b9782d33fc9012feff6948"],["categories/k8s/问题总结/index.html","59702cb2c174203d03761895b8b8e400"],["categories/linux/awk/index.html","f0acfd38a4695e6ac652e7540dd8d3f3"],["categories/linux/index.html","4c030f7b4fdf2c8905839d5e6cd9951d"],["categories/linux/shell/index.html","079586f983596f512af2e3a7bfa16a48"],["categories/linux/systemd/index.html","79a0516606337060481fdfdbb015faf2"],["categories/linux/问题总结/index.html","340e4130bc912622501efd5e638bdf0c"],["categories/mac/index.html","bedae4f433faa9d9b9a7f2333380ef58"],["categories/markdown/index.html","84f09958a63471ffe3a31d34b718b513"],["categories/mysql/index.html","cd28761b71be161ac61b036f2ba119fc"],["categories/mysql/主从/index.html","02980892ba97ea6177daa6fb205885b0"],["categories/nfs/index.html","31a176033d2539a7347efd7eab515891"],["categories/nginx/index.html","62a410d5287140b305a95eff64812837"],["categories/nginx/问题总结/index.html","b447f18c20405144ba921785d8038a11"],["categories/php/index.html","83d16ed9931a0c6292f04029c0f42830"],["categories/php/问题总结/index.html","292aab9a46e098a6a130cef2aeb5a309"],["categories/raid/index.html","b934daa0ecf3f785512b615c0e2d58ce"],["categories/博客/index.html","30b1619e3ebba5bc866ba911c2107950"],["categories/博客/美化/index.html","30cc89eaf1e76bb5de0b001cdb000c06"],["categories/存储/ceph/index.html","3343f231ac5376de7702cfd71e87f537"],["categories/存储/index.html","3ac55188d81a3a9ab844f7ba0d6bcacf"],["categories/存储/nfs/index.html","67ed72511250b9752ffc00c5405cc072"],["categories/技术文档/index.html","7ce757d86a143be279d599d9ed6d1ddc"],["categories/技术文档/page/2/index.html","1b3877d157cac5eafa0c627bdade7ddc"],["categories/有趣/index.html","db3df975af62705cc7b5f4e9897c6f80"],["categories/有趣/二次元/index.html","78fb927308b036186b4b996164ce99b7"],["categories/流量复制工具/gor/index.html","3a506bad617f560a0bc71a551ce4706c"],["categories/流量复制工具/index.html","e18d66352ced0dcad7702ebcb0eec2c4"],["categories/网卡/index.html","172f03f68d965b48c67e0dbbc7ab5f74"],["categories/网址/index.html","47f8a27b43a934f51afde311cb991e6b"],["categories/网址/大佬博客/index.html","136733b6247a3a826dce2c3fc18afbe8"],["categories/网址/收藏/index.html","1b1fb13eaa3239576f51b6c720b31349"],["css/main.css","cb79a82cf5ade26a34c3a24f63cebabb"],["images/16/容器的原理-1.png","1c184a092af6b6829c49ee20e70d132a"],["images/27/img1.png","74279f54a523a47f82a95a04ccfc9eb4"],["images/27/img2.jpg","93a32e8f4e52a9ea2a28b72a4223c2a9"],["images/38/gc1.jpg","dc31455119def3534b8b78213e6dcd29"],["images/38/gc2.jpg","ef5563c2f902a9b8550ed006747c94f5"],["images/38/gc3.jpg","3bef257bda43708e5c6d00598e5a6ccf"],["images/38/gc4.jpg","df24a1184fff79f3513b73fc1f4a6938"],["images/38/gc5.jpg","3e0fd4156b9666c1488b49d332875416"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["images/blog6/rancher-pv.png","d2a7e4bbfad5f71e75c9d5459cf5a464"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/docker1.jpg","5c611dd864017adeff648bca93d53f41"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/jixie-title.jpg","3ebd10201e23ecf68aba4524c020db0d"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["images/tcp三次握手图.png","32ddd8df35bd5762604327b25758370e"],["images/tcp四次挥手图.png","684b2b4a0286acadc32247d693dbd961"],["images/test1/test1.jpg","60b725f10c9c85c70d97880dfe8191b3"],["images/title1.jpg","fa2db043867c4c5654471e21ad36e5c0"],["images/title2.jpg","b6e57860ebc3fcdcf150a6a4cf3402ab"],["images/title3.jpg","f0b1554cfa4dd1193719dcfeb9e4de28"],["images/title4.jpg","6eb7bcbb846d1123e830488d75028df7"],["index.html","b13b8dbc07e77ae97b6331b885046b8f"],["js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["js/src/instantclick.js","865d92a4a07409b7fed739e6a108e9c4"],["js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["js/src/live2d.js","3359a94d733737dbdd290dd41f9cef0b"],["js/src/love.js","7bcfdb57debd43483174cf9e15ab37cc"],["js/src/love2.js","2b51ddac5207cba4153da31e9132414c"],["js/src/motion.js","706d085e6cfec6f3e92dedc590d68d68"],["js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["js/src/schemes/pisces.js","1bd23ed75238ebf11afe2aa6b1c3a25b"],["js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["js/src/utils.js","f06ffce70453ad3a4d9611fdde5ca6c3"],["lib/canvas-nest/canvas-nest.min.js","2361106788cc4ea719ed76f52b413e46"],["lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["live2d-widget/README.html","9941b5173b7915eb6158e62f02cd9ea3"],["live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["live2d-widget/autoload.js","fc45c81e48138bde62e7e742cbbdabb9"],["live2d-widget/demo/demo1.html","82a14d37dbd83931644a4ad6ea1f9eb2"],["live2d-widget/demo/demo2.html","6babb045ef6905badc0dbc5e0d98cede"],["live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["live2d-widget/waifu.css","c4dae5924f2fb0b5ea6ef26aaab80db9"],["page/2/index.html","460b816b545f9fbe4832fb44e464e865"],["page/3/index.html","20c6a2db128d8501cbac920fe68f6cfd"],["page/4/index.html","b4f6ac974b590e4fcd223312fd1a905a"],["tags/awk/index.html","36300292da0cac20d2fa41ffebd072c3"],["tags/ceph/index.html","337a96d2782cdbf62ad76f64bea825e5"],["tags/cephfs/index.html","076273f4a5b8fdd62669f30d18cd82fe"],["tags/cloud-native/index.html","86b5d37bf91ab9af8db007b87d810783"],["tags/docker/index.html","45352d0c122d387fba631595d89131bf"],["tags/elasticsearch5/index.html","ef72bad069396410249bb1303d739ef8"],["tags/elasticsearch7/index.html","335a8506c1d3be859310a3d72ca9eefc"],["tags/elk/index.html","9dfa1e6d4f0231c988e212500c828996"],["tags/elk5/index.html","a1ea14ce55787320fe5cfd7f4778400e"],["tags/elk7/index.html","0c492e8f1cee8206b14ec341c84e304a"],["tags/filebeat7/index.html","f932aba423ba5de477ded7058515dd3e"],["tags/gor/index.html","198de76bc8a0ab906a4a4b083d640807"],["tags/hexo6/index.html","d9c2e2401deb35317a1ea31896d6f48c"],["tags/hexo美化/index.html","ea4de720432da7bbd7338590e2d990ac"],["tags/http流量复制工具/index.html","5c8fd933fc1541925dcfcc5398001ad1"],["tags/index.html","f3505d6d7417c24af8649597a5a8e2d8"],["tags/ip/index.html","149a0f578d003ffe568e951dba390c19"],["tags/k3s/index.html","3ec64361c99a3cc96b9ee76efd50ce00"],["tags/k8s/index.html","d207330eb67805ab0ba677add9a81a62"],["tags/k8s存储/index.html","801eba4b8dcc8cc5520fd4ece1bc7156"],["tags/kubectl/index.html","5342bfdd10cef9b53eaebbb94f260c43"],["tags/linux/index.html","c05e1dda53c3c85b7320ded432720909"],["tags/logstash/index.html","0a1d7e56331c2335e6f1bbe0feb8c0bd"],["tags/mac/index.html","5124f6cad3a04024598e66de88ef3b0d"],["tags/markdown/index.html","8f3f3dd7357747d9b4465ac5886ef192"],["tags/mysql/index.html","c34e2fe71807577125adb8ac8669a20a"],["tags/mysql5-7/index.html","6385e1943a4df051351ef2d861886ea0"],["tags/nfs/index.html","5e9ed2f0d2b3e92aa46b810ed1266d5c"],["tags/nginx/index.html","0ec2cc4b1471c06a8dc1ec46f43b7d9d"],["tags/php/index.html","d4fa603dccaedcb8e4bbedb59c23e37b"],["tags/php5/index.html","8852e56d271a12107d848dc9cdac93e5"],["tags/php7/index.html","0a2db7dd6ef5c0acf55971152263c8fd"],["tags/raid/index.html","829cc2b4130f4eec0bae419aa244586d"],["tags/shell/index.html","14ca41e6fc3523b1680b39d1138659ff"],["tags/storageclass/index.html","3bf43aae1973918640dc4a081334484d"],["tags/systemd/index.html","299b045a2e164238d92d43bf5f06db46"],["tags/云原生/index.html","3fac0401d0a24a57218507f79d2c0a61"],["tags/大佬博客/index.html","47c39669d4a3210cb695c15defbd9b1f"],["tags/收藏/index.html","9a84ca7b476e7fa4f19820e9d7b891d7"],["tags/特效/index.html","e644652915dbdf286afc7137dbf6404c"],["tags/网址/index.html","e28f9839be566059aad6938179901afb"]];
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







