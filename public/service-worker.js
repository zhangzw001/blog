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

var precacheConfig = [["2019/09/19/2-部署elk7-2-0/index.html","65498f5e4f38a1cf8b685caa41af8040"],["2019/09/19/首次搭建hexo博客系统/index.html","bcfee5e86dc12e1e521f9f5f112c33ad"],["2019/09/20/3-k8s遇到的一些问题统计总结/index.html","085b11c3359342a7b314233c8d9c7095"],["2019/09/24/4-hexo鼠标移动和鼠标点击特效/index.html","ea10c5ed8f06f586b89cfb9904fe8208"],["2019/09/24/5-hexo添加看板娘/index.html","e5b6ff439feb45d24e0b00869e72fab4"],["2019/09/26/6-ceph安装部署/index.html","73665ff66932f9680cb19a4c4f9fb0fe"],["2019/09/26/7-k8s部署storageclass动态创建pv-nfs-rbd/index.html","10f72617d92388e49c8dd7bc371b5e9b"],["2019/09/26/8-mysql5-7二进制部署/index.html","6d796bcbc98ef26768698923ee3e6449"],["2019/09/26/9-linux遇到一些问题统计总结/index.html","7069773bf2e0aded641a92d836076447"],["2019/09/27/10-centos6安装nginx1-16-php7-2/index.html","34615143c7d73cdeae6c51697bb06b11"],["2019/10/10/11-mysql简单记录/index.html","a1293d72ed2273c156df6859b8c27127"],["2019/10/11/12-awk简单记录/index.html","10522db5a098d09bcf9a1a7da39703c2"],["2019/10/12/13-云原生博客汇总/index.html","7b9351aa6f6da2419f0dd258c1d0c0ad"],["2019/10/15/14-mysql目录copy方式迁移/index.html","9a507e5fb59db39adff841970bbdbc10"],["2019/10/16/15-docker简介和使用/index.html","f782e1bf5faa17d5de0fa42ac907c298"],["2019/10/16/16-dockerfile介绍/index.html","652d7ba6ddc979cbd31ec4bcbeac8833"],["2019/10/16/17-markdown一些写法记录/index.html","c1adc33a17f2e00d015a1418d540bf32"],["2019/10/17/18-收藏链接/index.html","a7afd5dfc62d22fae03ab442d7d9aaff"],["2019/10/17/19-shell中gt和>的区别/index.html","b1c6241fb1d5b7616ae9da29d7d7fbb4"],["2019/10/24/20-k8s搭建mysql5-7-24主从/index.html","249f458a321513e73a02aa4c89a4f664"],["2019/10/28/21-流量复制工具gor/index.html","7cd667cddb5a6837805a17e05fe4df1f"],["2019/10/28/22-es集群磁盘扩容/index.html","d5e875552f722b562e822b55a088e217"],["2019/10/29/23-mysql5-5主与mysql5-7从部署配置/index.html","246dad21f80f27b2bd017adea7c276b9"],["2019/10/30/24-filebeat7收集mysql慢日志到es/index.html","e0509a18b3d71ba77a14d7622fa4f71f"],["2019/11/01/25-linux一些脚本汇总/index.html","f760bc00e855bfbca4298487848baaa4"],["2019/11/01/25-一些脚本汇总/index.html","5b1002a7380156104dc2d32ad628ca74"],["2019/11/08/26-logstash配置/index.html","b21277501907c3f30209fa846238ffc2"],["2019/11/21/27-k8s一条命令部署es5-2-0集群/index.html","120ea7384952368d48a2794b4c1868e1"],["2019/11/25/28-k8s1-16使用旧yml部署配置问题/index.html","6b9656e0a63246a281c7779792c2f593"],["2019/11/25/30-k3s集群部署项目报挂载nfs错误/index.html","7bf87cc21edd2c5391013361df5a3c7d"],["2019/11/26/31-systemd一些命令/index.html","72cda69080444fab0c8413c5c38f65a8"],["2019/12/02/32-php错误502问题总结/index.html","0c1d31f4bb8d4e6537e759c9beb85c7c"],["2019/12/03/29-k3s安装配置/index.html","a1523fe0016654e9d3267457a59d461b"],["2019/12/03/33-k3s1.16部署nginx+php5.2.17/index.html","0499fdd636fbdccf4b6f1c365776a311"],["2019/12/05/34-k8s一些命令总结/index.html","621e8e8c307d046accf8cd32cac0fa10"],["2020/02/27/35-raid1盘数据迁移/index.html","9dfe297dc7e1140fc0d7660de7ab8aef"],["2020/02/27/36-centos单网卡配置多ip的几种方法/index.html","fd7e43b9381f4fa852cbc9be7dbd0ad8"],["2020/03/10/37-mac一些常用命令/index.html","fa1687fc82a35fb5049c78155450adb3"],["2020/03/12/38-es集群节点出现overhead脱机的问题/index.html","1a563bf8b3a42aa84c15e50765c8c2f1"],["2020/03/18/39-记一次nginx的request-time-和upstream-response-time差值很大问题/index.html","b801827784813935867915e9fdaa9578"],["2020/03/18/40-记一次跨域的nginx配置问题/index.html","e671f960305f5055d964852c8ef2f9ff"],["archives/2019/09/index.html","0fa2412485e6843170057485f42e58ed"],["archives/2019/10/index.html","e1ab91501b76a2295880dca21407ad01"],["archives/2019/11/index.html","6974473fb57ae405650c881f988f15bb"],["archives/2019/12/index.html","047566211173defe5547a4270ba5ca71"],["archives/2019/index.html","696ea4072b304469423ffc5046a40cce"],["archives/2019/page/2/index.html","dbca3a2e4fb800fada5b01cd5538b5f7"],["archives/2020/02/index.html","1d7d722906841762d4352a366a953a76"],["archives/2020/03/index.html","8243f134fe05e5b85b1dcfe4a3c7183d"],["archives/2020/index.html","c2881199b84b55b7a82fa923387b0c10"],["archives/index.html","14d7aeccd2d5cb71e7f1993bae1e0b49"],["archives/page/2/index.html","655fd2ab4399b1dba50830a27ea06a3a"],["archives/page/3/index.html","933c8bbc7d432868aa7ba1ee7eea8255"],["categories/docker/Dockerfile/index.html","4c14d1d8fd3a166b08ae9de0f6c99bed"],["categories/docker/index.html","deacdf76932496842185f838fb79bae4"],["categories/elk/elasticsearch5/index.html","08b51d95129c365365a8cbe1f2acc36b"],["categories/elk/elasticsearch7/index.html","3961af28b1c6c5798a0fdd088b106b50"],["categories/elk/index.html","9113b4af10ab2128f695842111cbf6fa"],["categories/elk/logstash/index.html","142d5d256fbd7a50ae7e535694fa38b6"],["categories/elk7/filebeat7/index.html","47a8c22ec4e7042849c624957aa60330"],["categories/elk7/index.html","9d858bec362fbb8af0253f060d2dca1b"],["categories/index.html","684142e3ffe10a7e257a89763ade7cdd"],["categories/item2/index.html","1960fd7a666c0573853bfe046c7bf355"],["categories/k3s/index.html","db7fcc482467128c7bd9a5ef6652d1d2"],["categories/k3s/lnmp/index.html","8559c888b3ad62ace8ef33cabb12a2ea"],["categories/k8s/elk5/index.html","d05cf5f91ba1b0abb8c6a7de2d6c234c"],["categories/k8s/elk7/index.html","7cb3890e6eb16f51f3a5513e4e83f796"],["categories/k8s/index.html","bc2fd1d5d9912ab06751f62245bbf9c9"],["categories/k8s/kubectl/index.html","2e553d8509e43c86052f8a8376600571"],["categories/k8s/mysql/index.html","d5d8b26458e07a7830c05dff15faf128"],["categories/k8s/storageclass/index.html","ffea91e55494d6bf03172fcc1c67f4e7"],["categories/k8s/问题总结/index.html","5431bb5f958f17218a33f4854e2b1c02"],["categories/linux/awk/index.html","b054e2b012f1afaceed6b60f2c0a2cc9"],["categories/linux/index.html","ed6f9393332f315cf67297aaeed6db76"],["categories/linux/shell/index.html","86d24d6c59f908a0a35d2a894e462ffa"],["categories/linux/systemd/index.html","5c006bf8f0633f5180903308cb4d1498"],["categories/linux/问题总结/index.html","94abbff35847ddb7b903205329db18e8"],["categories/mac/index.html","ed4820cd71f931cb571c319e2dc26d22"],["categories/markdown/index.html","f712c962c5f0036ac5d5c7b492ec4c3a"],["categories/mysql/index.html","c8d6ec34b78c7f8601c5c0f87075f1e8"],["categories/mysql/主从/index.html","57877e9db7d24d5a3a5d908bf30772c5"],["categories/nfs/index.html","2fd9cc7f7059b9e91de0546ec556ed84"],["categories/nginx/index.html","0ef87bd10653923d63c824f31e5d96a8"],["categories/nginx/问题总结/index.html","a4e5b8f831d14216ead07b5e6685150c"],["categories/php/index.html","ec9e1b4cf22435d44c80c761d5d3cf8e"],["categories/php/问题总结/index.html","6b6fb1147499fef081970d0040d0e424"],["categories/raid/index.html","1d4e0cd645e2b108bdd69c0752d7ad7e"],["categories/博客/index.html","e58bf4d3301c984569d7374356d0f260"],["categories/博客/美化/index.html","a0c2c5c9c533ce0c9db1f528517e8b1a"],["categories/存储/ceph/index.html","a31b630dfe6376c3b4695a09ac1bf398"],["categories/存储/index.html","34f23c3ff810b35f036ec49227dab163"],["categories/存储/nfs/index.html","7ac638632edc20d546ed440793194bee"],["categories/技术文档/index.html","11b594768ee23adf34dd0bf3edfb2c16"],["categories/技术文档/page/2/index.html","8c764a19b230129830c2969ef99c8891"],["categories/有趣/index.html","199ac44749d0e5ce948330a7f593d35a"],["categories/有趣/二次元/index.html","bf8b7d1ab701bf958430934aec947070"],["categories/流量复制工具/gor/index.html","ec98fd4b55661be799d53500a754468e"],["categories/流量复制工具/index.html","108dd574447cb2b569bf98a44b74ab26"],["categories/网卡/index.html","e9817b885883a36c5911fcecffeb1c1c"],["categories/网址/index.html","13a870d6466a55f04c43678ebbb1c120"],["categories/网址/大佬博客/index.html","1ed88aa5c21c82f2adcd4ece67d936f6"],["categories/网址/收藏/index.html","04eb0969e7e13ee9976ac7c26b6b4c29"],["css/main.css","4487864ee8efb94147be7a08318ad24e"],["images/16/容器的原理-1.png","1c184a092af6b6829c49ee20e70d132a"],["images/27/img1.png","74279f54a523a47f82a95a04ccfc9eb4"],["images/27/img2.jpg","93a32e8f4e52a9ea2a28b72a4223c2a9"],["images/38/gc1.jpg","dc31455119def3534b8b78213e6dcd29"],["images/38/gc2.jpg","ef5563c2f902a9b8550ed006747c94f5"],["images/38/gc3.jpg","3bef257bda43708e5c6d00598e5a6ccf"],["images/38/gc4.jpg","df24a1184fff79f3513b73fc1f4a6938"],["images/38/gc5.jpg","3e0fd4156b9666c1488b49d332875416"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["images/blog6/rancher-pv.png","d2a7e4bbfad5f71e75c9d5459cf5a464"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/docker1.jpg","5c611dd864017adeff648bca93d53f41"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/jixie-title.jpg","3ebd10201e23ecf68aba4524c020db0d"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["images/tcp三次握手图.png","32ddd8df35bd5762604327b25758370e"],["images/tcp四次挥手图.png","684b2b4a0286acadc32247d693dbd961"],["images/test1/test1.jpg","60b725f10c9c85c70d97880dfe8191b3"],["images/title1.jpg","fa2db043867c4c5654471e21ad36e5c0"],["images/title2.jpg","b6e57860ebc3fcdcf150a6a4cf3402ab"],["images/title3.jpg","f0b1554cfa4dd1193719dcfeb9e4de28"],["images/title4.jpg","6eb7bcbb846d1123e830488d75028df7"],["index.html","234c53252f904687e5608e137660a7fa"],["js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["js/src/instantclick.js","865d92a4a07409b7fed739e6a108e9c4"],["js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["js/src/live2d.js","3359a94d733737dbdd290dd41f9cef0b"],["js/src/love.js","7bcfdb57debd43483174cf9e15ab37cc"],["js/src/love2.js","2b51ddac5207cba4153da31e9132414c"],["js/src/motion.js","706d085e6cfec6f3e92dedc590d68d68"],["js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["js/src/schemes/pisces.js","1bd23ed75238ebf11afe2aa6b1c3a25b"],["js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["js/src/utils.js","f06ffce70453ad3a4d9611fdde5ca6c3"],["lib/canvas-nest/canvas-nest.min.js","2361106788cc4ea719ed76f52b413e46"],["lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["live2d-widget/README.html","9941b5173b7915eb6158e62f02cd9ea3"],["live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["live2d-widget/autoload.js","fc45c81e48138bde62e7e742cbbdabb9"],["live2d-widget/demo/demo1.html","82a14d37dbd83931644a4ad6ea1f9eb2"],["live2d-widget/demo/demo2.html","6babb045ef6905badc0dbc5e0d98cede"],["live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["live2d-widget/waifu.css","c4dae5924f2fb0b5ea6ef26aaab80db9"],["page/2/index.html","ff3489547362edce43c7468712fbe309"],["page/3/index.html","5677743cdfbd9e83cbe2819ca89fe45f"],["page/4/index.html","74a306b6d99e54ef3d6a387353f107d3"],["page/5/index.html","a8aa40b01d3a90dfebd70c7e5e472f25"],["tags/awk/index.html","fe889d47d1aa177f1848170743f92224"],["tags/ceph/index.html","9cc596f27ec606e5bea0f19d5b06907c"],["tags/cephfs/index.html","d8ac8c49346efdda1cd3d2f5eb322fc0"],["tags/cloud-native/index.html","74895b251b68eab947e98dd8c2a349ed"],["tags/docker/index.html","17335b5a98b880550de356a1a23f1376"],["tags/elasticsearch5/index.html","dde6d0968a41589bd52bb1ade656e275"],["tags/elasticsearch7/index.html","9bc3aa5aeac8bc476bcfde0e2c32bea9"],["tags/elk/index.html","97634de5914fd705f0807e5f0f2db14e"],["tags/elk5/index.html","521f5dc7a20fa64fa4fe1656a5436cd8"],["tags/elk7/index.html","47aa599f2453067e489db0434408613a"],["tags/filebeat7/index.html","9faaace09a0dd0eb2e67109df39f9319"],["tags/gor/index.html","dfbf9b8f8078681caa38f750bf9377c2"],["tags/hexo6/index.html","c56e8f7cb33ba85c5c5a9ce461543f6c"],["tags/hexo美化/index.html","96fd9398d1c52117efab6780f4cfcb59"],["tags/http流量复制工具/index.html","6545e903761e6670022de46c0244ffc7"],["tags/index.html","4172436ba769275f2f3c40b1f2d0e490"],["tags/ip/index.html","b26f6b43093ad710a26f1956998c9b5a"],["tags/k3s/index.html","2cb49bdaec2dfa508e4e7c2267e88cb2"],["tags/k8s/index.html","fbe48e9b402438877489e7fb1e304941"],["tags/k8s存储/index.html","bd07ad383f47d0d71216d69b3389c181"],["tags/kubectl/index.html","f380d066b9b14e757ffd59cd50aef070"],["tags/linux/index.html","7b279a1bf0da63fe724900664c11fbf1"],["tags/logstash/index.html","05e57a9df1275aa72ffa5e8109dd53b0"],["tags/mac/index.html","05972797b6fbfae28b36806e45e0177c"],["tags/markdown/index.html","94d03cfa2061e26559e68d72d72b3e5d"],["tags/mysql/index.html","deed8a5cded87b447663ce07d52cfdae"],["tags/mysql5-7/index.html","d2e8e6ee30d96ad291d39b826d321c8e"],["tags/nfs/index.html","aa61e85e48653241f1a9dc3cdd83f4c6"],["tags/nginx/index.html","04fed0abdf05da4ddc365c24cde9d0ae"],["tags/php/index.html","4a93c1d5b7fd542d6ff78205e9ba268b"],["tags/php5/index.html","3eccb174097c5e194b13c93c60f32ddc"],["tags/php7/index.html","4ed29cad45f815825fa2c0554d2b7cbf"],["tags/raid/index.html","e1234fa54588d8aa8c6015c17e8a52ba"],["tags/shell/index.html","7b037cf74f95201636cfe5ccf3b5c6c9"],["tags/storageclass/index.html","e9b1dd3f3f8ea42affd8c2e00b56f630"],["tags/systemd/index.html","ee966b17fef57d6fb9376792095920df"],["tags/云原生/index.html","7a63f5f3b7217460b47499f03429e119"],["tags/大佬博客/index.html","9baf64de6624cf092a5cbed55a538abc"],["tags/收藏/index.html","61be2b7d559341ddbf5769a7afc24f21"],["tags/特效/index.html","8a49713324b50fc42e7c64211675b104"],["tags/网址/index.html","82b308cd4d8aefbe58e1e61be4dc9848"]];
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







