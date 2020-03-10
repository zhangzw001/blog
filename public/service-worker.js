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

var precacheConfig = [["2019/09/19/2-部署elk7-2-0/index.html","0fa727c1da78383be262f7cf9783115d"],["2019/09/19/首次搭建hexo博客系统/index.html","cddebeb8b426ee8c4e7e83f361d6d612"],["2019/09/20/3-k8s遇到的一些问题统计总结/index.html","120bc6c014f016167d42c25cfbf39f05"],["2019/09/24/4-hexo鼠标移动和鼠标点击特效/index.html","a5b3f349cc50c71bcad8cb1da31774fe"],["2019/09/24/5-hexo添加看板娘/index.html","6403d7d4d57fb1e824b0f9b7d1640f2a"],["2019/09/26/6-ceph安装部署/index.html","f8044bf9fbb76b4009021ae36a3f91ce"],["2019/09/26/7-k8s部署storageclass动态创建pv-nfs-rbd/index.html","21525cbde3560ad56170feb60fb331cb"],["2019/09/26/8-mysql5-7二进制部署/index.html","991381efa5300b5051d8deeba45ee6a8"],["2019/09/26/9-linux遇到一些问题统计总结/index.html","9d031c0d68cb2fea73856283705278d5"],["2019/09/27/10-centos6安装nginx1-16-php7-2/index.html","131580c3578f51153526eb57c3059b97"],["2019/10/10/11-mysql简单记录/index.html","5264ac20616a6db328ff71d4d391a39a"],["2019/10/11/12-awk简单记录/index.html","e36366412af774ce131d464b72280432"],["2019/10/12/13-云原生博客汇总/index.html","605749d197331dc33a7666439f96dadd"],["2019/10/15/14-mysql目录copy方式迁移/index.html","9e3f97adcf431e7e287dc3d1ac33425f"],["2019/10/16/15-docker简介和使用/index.html","4cda3c2eecc22e3ef94a2fa75dbc4c46"],["2019/10/16/16-dockerfile介绍/index.html","aea35265af01b2a3e678dc723b4cf50a"],["2019/10/16/17-markdown一些写法记录/index.html","ccfc1bda142b04067b62289a8932d549"],["2019/10/17/18-收藏链接/index.html","4124bf4ad10803db4b57590919a6d4e7"],["2019/10/17/19-shell中gt和>的区别/index.html","8587389163d5234630ac5db67b75f439"],["2019/10/24/20-k8s搭建mysql5-7-24主从/index.html","8131fdd8e0191a50cdbc0ddc60a7f5df"],["2019/10/28/21-流量复制工具gor/index.html","6adbc8c2784621f0fadfc258b79d8620"],["2019/10/28/22-es集群磁盘扩容/index.html","f1a9e9d599c37995126dabf8a8593cf5"],["2019/10/29/23-mysql5-5主与mysql5-7从部署配置/index.html","f3f6b0f9967ffd2da26d591bfa9c3916"],["2019/10/30/24-filebeat7收集mysql慢日志到es/index.html","ffdc2605ff5f3e9b64ff79328b37a431"],["2019/11/01/25-linux一些脚本汇总/index.html","a82068958c1742bacde0c1ded370eaa2"],["2019/11/08/26-logstash配置/index.html","13aa60530811b36884c7eed556442e08"],["2019/11/21/27-k8s一条命令部署es5-2-0集群/index.html","633c42e0a6cc8880004d74020886ef83"],["2019/11/25/28-k8s1-16使用旧yml部署配置问题/index.html","25597833891293dac7d27d75b3fc371b"],["2019/11/25/30-k3s集群部署项目报挂载nfs错误/index.html","d26b9ca32612bf7c614694ad8d0b0a9e"],["2019/11/26/31-systemd一些命令/index.html","5f5950fcb81c1ccaa52a258bfb2ca055"],["2019/12/02/32-php错误502问题总结/index.html","8d3dd299f740c63dcbb8697ab11caa09"],["2019/12/03/29-k3s安装配置/index.html","02cd0ec301a738bcb4841be8ee531de7"],["2019/12/03/33-k3s1.16部署nginx+php5.2.17/index.html","90e5d1ec37acc0e1add0ce681257a44f"],["2019/12/05/34-k8s一些命令总结/index.html","66b43628e0ab1ce1e809baa29051d74f"],["2020/02/27/35-raid1盘数据迁移/index.html","ffb93a6d03c5e350e2574c493d1c8662"],["2020/02/27/36-centos单网卡配置多ip的几种方法/index.html","107a67b3669ad197adcf69e37dc91af2"],["2020/03/10/37-mac一些常用命令/index.html","5b8da9baf47e942ef239a759d67185aa"],["archives/2019/09/index.html","fb8053811285c3e31363a71e1dbb5656"],["archives/2019/10/index.html","29be147b42ca44d5743ffbe296664199"],["archives/2019/11/index.html","906c4a8bf8a8f85d672a00560760462e"],["archives/2019/12/index.html","e4db0b9e9551cb0a13770464945b3e38"],["archives/2019/index.html","3fbbfea795dd5cf87f4bf1ec72d4c753"],["archives/2019/page/2/index.html","52b28fabf835506ff2ef23de7f5b5e77"],["archives/2020/02/index.html","dc30707ff984dbd5ccba1f7238d53f10"],["archives/2020/03/index.html","e88f1d729e175d033248a750682f2231"],["archives/2020/index.html","e963aac574a96e4658e4c780dd09790f"],["archives/index.html","e9fc26c902df0e5a8aaa832beca6bb2f"],["archives/page/2/index.html","1997b203c1e50d46d3b3dfc2e8fb594d"],["categories/docker/Dockerfile/index.html","7d7a48860a071d39a242b247599cab74"],["categories/docker/index.html","3b2cd455f91abf435dbaea75f8432265"],["categories/elk/elasticsearch5/index.html","b2f0503f0ed4b7e811f4354add9565ca"],["categories/elk/elasticsearch7/index.html","55468b6afddafff1299af8ac3a5294ea"],["categories/elk/index.html","ebc2fbd43cf3813a834efbdc40085d1b"],["categories/elk/logstash/index.html","f2ccfbaa538dec9d7e6637e8e06744f9"],["categories/elk7/filebeat7/index.html","0c622ad94c23451281ddd0892e8fd15d"],["categories/elk7/index.html","5aa54c0036eb7bf668a1cc56062d6b8a"],["categories/index.html","19271fc16a57db6bcfa7f7511a58bbcd"],["categories/item2/index.html","9634f9375337a2211dcbd5690f071997"],["categories/k3s/index.html","0b21bf4539ce9f42de78d05ca039a2a3"],["categories/k3s/lnmp/index.html","0e54e206e06eb1e8620ec192016cda66"],["categories/k8s/elk5/index.html","6bf1402119609f7f2146a33720944e84"],["categories/k8s/elk7/index.html","0fc1bc1f54cd2ba53dea539dde68f64a"],["categories/k8s/index.html","fcf55b998d48c98c03b33817e1db1c23"],["categories/k8s/kubectl/index.html","d2500bfdf80ff5c36d6032ec9735bfe3"],["categories/k8s/mysql/index.html","7dbdafe8d33be2bd99fbff8eabd6c8a3"],["categories/k8s/storageclass/index.html","f351345c10401fba1436cb03faeff4bc"],["categories/k8s/问题总结/index.html","9db97504f58719a0b79e28340bdd93ee"],["categories/linux/awk/index.html","2af2f9ff08def840555c0007404f78ee"],["categories/linux/index.html","0ef3317dc564aba53e9a9c2207459aba"],["categories/linux/shell/index.html","58590e3e98b21d0b53d04a43afda4c94"],["categories/linux/systemd/index.html","b394357b35be205c5bd449ab86e41c29"],["categories/linux/问题总结/index.html","7313a825d7db20ffd5ac17b56be806f7"],["categories/mac/index.html","c356bb71fb8fa99bea7460bab9c1a29a"],["categories/markdown/index.html","3c02bf654e9928b27672b8150a776a8b"],["categories/mysql/index.html","5a65841597981a19e7307690a9505cc8"],["categories/mysql/主从/index.html","d35fc909d49a89741c461819536fc3c4"],["categories/nfs/index.html","d38ca4166a1b166fe1d88cb0d363fc28"],["categories/nginx/index.html","fc9de5f42fdbc9d816be9ff5b16a5a3e"],["categories/php/index.html","ef263975b15019473a90f12f05526e46"],["categories/php/问题总结/index.html","5670faa451fd79903088ac308232c23a"],["categories/raid/index.html","b5a003dcc18d019e3d83dcb63de0fea5"],["categories/博客/index.html","1da8dd1b4f4299083d595ec0e4220f67"],["categories/博客/美化/index.html","e59a893a55b2ddc893c8997fecdae45b"],["categories/存储/ceph/index.html","200f48355157b75e6958ff09165eefdc"],["categories/存储/index.html","99f3fa80840f1947edf56a1b5a7376fc"],["categories/存储/nfs/index.html","882d92483995ed92b28f7afa7944cb50"],["categories/技术文档/index.html","006d9ee4bd159fc4c49e97afcc4c3e62"],["categories/有趣/index.html","b84475912b0b6942b42f98d430309fb3"],["categories/有趣/二次元/index.html","9ed543aa7e75d9772586055545863c33"],["categories/流量复制工具/gor/index.html","c342c69f4dd56895d0d0e236cf32a596"],["categories/流量复制工具/index.html","0e18f9ef917bc5fcdba6999be53c8ba9"],["categories/网卡/index.html","b7373238e70ba8c44f787cef0db89adb"],["categories/网址/index.html","8fc51542764822d93288ce1153b36e9c"],["categories/网址/大佬博客/index.html","9e43dd8f30fde34f5d23dde8d5ac5d17"],["categories/网址/收藏/index.html","0670ffc75831d7ea03e5b0b702fda871"],["css/main.css","5794273856dbc218f2baafd2496adcd4"],["images/16/容器的原理-1.png","1c184a092af6b6829c49ee20e70d132a"],["images/27/img1.png","74279f54a523a47f82a95a04ccfc9eb4"],["images/27/img2.jpg","93a32e8f4e52a9ea2a28b72a4223c2a9"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["images/blog6/rancher-pv.png","d2a7e4bbfad5f71e75c9d5459cf5a464"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/docker1.jpg","5c611dd864017adeff648bca93d53f41"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/jixie-title.jpg","3ebd10201e23ecf68aba4524c020db0d"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["images/tcp三次握手图.png","32ddd8df35bd5762604327b25758370e"],["images/tcp四次挥手图.png","684b2b4a0286acadc32247d693dbd961"],["images/test1/test1.jpg","60b725f10c9c85c70d97880dfe8191b3"],["images/title1.jpg","fa2db043867c4c5654471e21ad36e5c0"],["images/title2.jpg","b6e57860ebc3fcdcf150a6a4cf3402ab"],["images/title3.jpg","f0b1554cfa4dd1193719dcfeb9e4de28"],["images/title4.jpg","6eb7bcbb846d1123e830488d75028df7"],["index.html","742186f61fade6d77747a6b8d15f530e"],["js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["js/src/instantclick.js","865d92a4a07409b7fed739e6a108e9c4"],["js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["js/src/live2d.js","3359a94d733737dbdd290dd41f9cef0b"],["js/src/love.js","7bcfdb57debd43483174cf9e15ab37cc"],["js/src/love2.js","2b51ddac5207cba4153da31e9132414c"],["js/src/motion.js","706d085e6cfec6f3e92dedc590d68d68"],["js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["js/src/schemes/pisces.js","1bd23ed75238ebf11afe2aa6b1c3a25b"],["js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["js/src/utils.js","f06ffce70453ad3a4d9611fdde5ca6c3"],["lib/canvas-nest/canvas-nest.min.js","2361106788cc4ea719ed76f52b413e46"],["lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["live2d-widget/README.html","9941b5173b7915eb6158e62f02cd9ea3"],["live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["live2d-widget/autoload.js","fc45c81e48138bde62e7e742cbbdabb9"],["live2d-widget/demo/demo1.html","82a14d37dbd83931644a4ad6ea1f9eb2"],["live2d-widget/demo/demo2.html","6babb045ef6905badc0dbc5e0d98cede"],["live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["live2d-widget/waifu.css","c4dae5924f2fb0b5ea6ef26aaab80db9"],["page/2/index.html","baa9fa377b74c5fc47e304f74979c695"],["page/3/index.html","f56db028c7d76c8abb7b80a85ff892c8"],["page/4/index.html","a956a65fba19a37f3423baafc6c23aeb"],["tags/awk/index.html","b01f2b4cb831f3d062f03f48baa6f6ca"],["tags/ceph/index.html","5056c59cefad08e0e5df260429bd8bd3"],["tags/cephfs/index.html","90f0d604e58531b68bff8ad9fbce0cfc"],["tags/cloud-native/index.html","d878dc08297a072d63e3b77d4ba16a10"],["tags/docker/index.html","a42891d39f972e0e177f364cfbf1f152"],["tags/elasticsearch5/index.html","9b0a013bc7a1d3ba51c0370d850d0185"],["tags/elasticsearch7/index.html","8c6719d4245ba5094cbd023446816abe"],["tags/elk/index.html","bd4c827b1b4436632a919dcc73a84502"],["tags/elk5/index.html","4276af2eed3be138d5cbee1e8d86a7dd"],["tags/elk7/index.html","dea23d20a75e5e7f1995cb2e2d1b605b"],["tags/filebeat7/index.html","db22898ce6587fa539fa7bbfa77de1d6"],["tags/gor/index.html","2364933709e5d1ccf441afd12221fd9b"],["tags/hexo6/index.html","a92f8184ae674574180efd821bca27fe"],["tags/hexo美化/index.html","ba55f4eb447753c6b1823b330430acaf"],["tags/http流量复制工具/index.html","c1bdaff589211b9d860c4da970b58ec7"],["tags/index.html","fa427b0d63b3d70ecd1f472cf962841a"],["tags/ip/index.html","79b85d972d51c9e6606450116142d8b2"],["tags/k3s/index.html","b3f1304f2237271611c4910313ff6257"],["tags/k8s/index.html","96bbf851018ff4b9553a83d81a1e0f3f"],["tags/k8s存储/index.html","4dddbcf2bf57650c05addf09adc2997f"],["tags/kubectl/index.html","735e85931f3cc82ddf9441b93c7ca80c"],["tags/linux/index.html","a304f16ee1c624aac0a362904fa7b08f"],["tags/logstash/index.html","f09f156d509add30a5ff24fd85a123a6"],["tags/mac/index.html","b07ca5ac067843a4a51208bdaf9a4829"],["tags/markdown/index.html","1535369692fbea9e77b61ef3189e1d88"],["tags/mysql/index.html","379d08b93c83340fb8fc19f2f0710ab2"],["tags/mysql5-7/index.html","397cb669214fc7df8e2c10f7571eb620"],["tags/nfs/index.html","b80630dd722085eb8eaccbf38472a640"],["tags/nginx/index.html","52db0c893d098b4caa4c70bd9dab1087"],["tags/php/index.html","7d6166feed143171677d0389a56547b4"],["tags/php5/index.html","a0a8e311fa40aebba3ded97410368113"],["tags/php7/index.html","c11a4e179c83dc556efc8f9bc9a44329"],["tags/raid/index.html","c1e272c0d05e73534bfc0ccb733e3225"],["tags/shell/index.html","00daeb6aab1855c0a034c81054731093"],["tags/storageclass/index.html","e70a3feabb51862a015e01b4b3326bd0"],["tags/systemd/index.html","ccce851ca0170c5d8be6e40bae4d68df"],["tags/云原生/index.html","8a1d3b762bd1b384218ab635352268c2"],["tags/大佬博客/index.html","aeaae1b971121ab15833c37008bc2c22"],["tags/收藏/index.html","8b33153efdda3ce6fcaf7d91f84d09cd"],["tags/特效/index.html","edb253d3886766b680d7ac9413377113"],["tags/网址/index.html","45bc1291313a5a7c0c64fb554f16789a"]];
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







