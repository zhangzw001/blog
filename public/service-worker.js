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

var precacheConfig = [["2019/09/19/2-部署elk7-2-0/index.html","8ec1401eab5689e84dedac30b904c1c3"],["2019/09/19/首次搭建hexo博客系统/index.html","a59c1448ebdc5d2d66ba7af42359d82d"],["2019/09/20/3-k8s遇到的一些问题统计总结/index.html","5c3ca660816c6392d1f107d78c959c48"],["2019/09/24/4-hexo鼠标移动和鼠标点击特效/index.html","c3cce67ac6154ca0aadaa3b622bd23ba"],["2019/09/24/5-hexo添加看板娘/index.html","09d6c4a53933d8846c8666b8ee690f10"],["2019/09/26/6-ceph安装部署/index.html","6a97935526926d21324521f8b1064b38"],["2019/09/26/7-k8s部署storageclass动态创建pv-nfs-rbd/index.html","e42b26409b6c5e681b15451a59fa6708"],["2019/09/26/8-mysql5-7二进制部署/index.html","5e14640cca63998b0785ba9d29f329d2"],["2019/09/26/9-linux遇到一些问题统计总结/index.html","cd52224d298659935fdde00135c69ea0"],["2019/09/27/10-centos6安装nginx1-16-php7-2/index.html","53da8d14374c465bedcc2ec73d15721c"],["2019/10/10/11-mysql简单记录/index.html","d91b09a06380762dc1e19197371f31f0"],["2019/10/11/12-awk简单记录/index.html","7f04c7cd2888b8ab91c4a4251a2c446b"],["2019/10/12/13-云原生博客汇总/index.html","b9195b216788280388fc228cbbf3df2a"],["2019/10/15/14-mysql目录copy方式迁移/index.html","f9b076ad005cc069aebd961c32e5adee"],["2019/10/16/15-docker简介和使用/index.html","e30fcdd6ecf1331651df9cff29934f74"],["2019/10/16/16-dockerfile介绍/index.html","487da6805bc15159ddb350dd5b89918c"],["2019/10/16/17-markdown一些写法记录/index.html","d3643473584d6c18e887b20ae63662fa"],["2019/10/17/18-收藏链接/index.html","45c8009e9240984665385154fb3a23d6"],["2019/10/17/19-shell中gt和>的区别/index.html","e1ef43357689cdabcc363bffd3dd825d"],["2019/10/24/20-k8s搭建mysql5-7-24主从/index.html","f83121d0502d51a49be841d6516bdf1d"],["2019/10/28/21-流量复制工具gor/index.html","2eaea6991d116f3277e774e007df2942"],["2019/10/28/22-es集群磁盘扩容/index.html","9fefeea836a7ecbddb8b03d58d2a6510"],["2019/10/29/23-mysql5-5主与mysql5-7从部署配置/index.html","853883706e1ce5622c81c4ab92ee3f41"],["2019/10/30/24-filebeat7收集mysql慢日志到es/index.html","0882446a7cf7de2319d9381007cd95e3"],["2019/11/01/25-linux一些脚本汇总/index.html","bf8726cee7b990812a906f6c36a6fd79"],["2019/11/08/26-logstash配置/index.html","a6cdcdb224520957319df1c883353a44"],["2019/11/21/27-k8s一条命令部署es5-2-0集群/index.html","264db5091d7f307b324530944b133443"],["2019/11/25/28-k8s1-16使用旧yml部署配置问题/index.html","e51d89f67315e94dc60136b4bbbcd5c6"],["2019/11/25/29-k3s集群部署项目报挂载nfs错误/index.html","99349b8f10796d6637db7858c73a7ce0"],["2019/11/25/30-k3s集群部署项目报挂载nfs错误/index.html","73049e7c36e7d42178c31c6d91f38b5c"],["2019/11/26/31-systemd一些命令/index.html","ac9150cdb68029c21cb8bb72f232f7c7"],["2019/12/02/32-php错误502问题总结/index.html","235c620a9513e0effc547381f243439e"],["2019/12/03/29-k3s安装配置/index.html","b5163c87ca2323b4b137d8f43e0bf103"],["2019/12/03/33-k3s1.16部署nginx+php5.2.17/index.html","20fdd69c168ea4fd58e1380fc866c7db"],["2019/12/05/34-k8s一些命令总结/index.html","a00eac01ea016c29ade4338f951f31b8"],["2020/02/27/35-raid1盘数据迁移/index.html","bf1a79c2ae6a15ee81e615c99266967c"],["2020/02/27/36-centos单网卡配置多ip的几种方法/index.html","16d47a6670ac01d61676574fdd243d09"],["2020/03/10/37-mac一些常用命令/index.html","955c2071e0702d5838130b5322f46ca7"],["2020/03/12/38-es集群节点出现overhead脱机的问题/index.html","ca7781a1b75999b3d88bd9c199a05b03"],["2020/03/18/39-记一次nginx的request-time-和upstream-response-time差值很大问题/index.html","3bb2ac689e96f07586224aade0aee95c"],["2020/03/18/40-记一次跨域的nginx配置问题/index.html","d30a26f929fe76a1a943bc8f8b3b52a9"],["2020/03/19/41-记一次es集群内存溢出的问题/index.html","04c3d66d059e5fafc184a245c0665c67"],["2020/03/24/42-kubeadm安装高可用k8s集群/index.html","800f914f15616ea630b61478da337fcb"],["2020/03/31/43-k8s的yaml配置名词解释-模板/index.html","8e4465a63b53005e4b93fa861a35b76f"],["2020/04/09/44-k8s部署fluentd-kafka-logstash-es/index.html","645116159193a8d991cf4e216d51e7b7"],["2020/04/23/45-gitlab-ci与k8s结合/index.html","f1b8156f6ac73995ad1bae6bd674d9f6"],["2020/05/13/46-docker安装nginx第三方模块/index.html","6674fc4ebbeece335ee517598636df96"],["2020/05/14/47-k8s安装promethues-alertmanager-grafana/index.html","1a5ae4dd534e3d0c6694c4872b581168"],["2020/05/18/48-k8s升级-1-10-1-15/index.html","32c65e2d49d1030beba64df2db000c11"],["2020/05/27/49-go简单记录/index.html","908a46749238d6c85e21dc722636c92c"],["2020/06/12/50-记一次windows安装OpenSSH问题/index.html","bac07c3f0a2f4fbc8e7b92d0b68da4c5"],["2020/07/27/51-k8s搭建radius/index.html","4911dcccc9362c1a3e0291b3dcf9a337"],["2020/08/04/52-istio测试nginx-php项目/index.html","40756a24890b0909153884a1d363d343"],["2020/08/07/53-hexo部署到coding-net开启静态网站/index.html","e71722e50220758e21387584dcd9c76a"],["2020/08/12/54-go单元测试和性能测试/index.html","165d78247c1091ed2ebb42359fbe2ded"],["archives/2019/09/index.html","0c196a2bfac2dbf674fadd9e95485fa0"],["archives/2019/10/index.html","8acdb00bb2d61534745858e707a09b14"],["archives/2019/11/index.html","71997aaf8aa47dcab85a43b653632451"],["archives/2019/12/index.html","a1878ce8a27241eba47c8e47dc401fce"],["archives/2019/index.html","b237b9ce69b34f441d837a5db74a5389"],["archives/2019/page/2/index.html","49fecc7efe021606a729075cf6bbf52e"],["archives/2020/02/index.html","32e0695ef2c0bbac76a6057b345b1f8b"],["archives/2020/03/index.html","0f3fd340e1ba717a7d865ca7b6ad6b05"],["archives/2020/04/index.html","62a2976b20c329e9b46aa0aa9b23a6fc"],["archives/2020/05/index.html","0c4cb693b0f2060a5261c29c01ab7470"],["archives/2020/06/index.html","485dc210942d80f9714ca156b11bc25e"],["archives/2020/07/index.html","ccce17f95a16e61305074d0734a56ff7"],["archives/2020/08/index.html","fc61187c447d084ad721b574ad00e8a9"],["archives/2020/index.html","6ed3051300543eea3d567054f456a9cc"],["archives/index.html","c668af31118ab0f7a7fb5620d2cdf521"],["archives/page/2/index.html","1861ccc82139527554bdc57f80f9136d"],["archives/page/3/index.html","9fc0bb339ec7103a65b871989a80af84"],["assets/algolia_logo.svg","8e0e9838589ad42418fe5fa23fa7e9f1"],["assets/example_qr.png","851a661c0c87f5cf06e68dc5d603ffdb"],["assets/loading.svg","e213e506bd18e78aac4008b258ee195d"],["avatar/Misaka.jpg","5b007d28d8184757ae475eb62afd6202"],["baidu_verify_Og0HzH3bO9.html","15c780fff6b58c602e6c4aca2d6f724e"],["baidu_verify_SIdT0vzXib.html","81e686afda38bc1d9503135af6aa1ee6"],["categories/docker/Dockerfile/index.html","c040e49d1c2f3932545ddef65365009a"],["categories/docker/index.html","ab9b81b5967b8c67b11330332d02f7a3"],["categories/elk/elasticsearch5/index.html","84ffd994dd2d4930703d387f445baeec"],["categories/elk/elasticsearch7/index.html","d57bed5cb49169e592192ccd515b8f4a"],["categories/elk/index.html","50641b1bacfa6299e048dc453f1361e2"],["categories/elk/logstash/index.html","9047dd5a38492f51313d20e702ea83c8"],["categories/elk7/filebeat7/index.html","b8e6bbb4081c036f03c95127310c509d"],["categories/elk7/index.html","09045e8ac241e8afe4e5359388f34827"],["categories/fluentd/index.html","9b3754d49bfb0d4111aa9f3baa6f7fe7"],["categories/gitlab-ci/index.html","25e696201c8e482a708fc6f81013e138"],["categories/go/index.html","c64cb851875b6a8f63495dedef55fea9"],["categories/index.html","a2384b41cf06aa8b1d36f4e56aefbc72"],["categories/item2/index.html","b23c04c6c035d29c96b0c7f50533f0eb"],["categories/k3s/index.html","1fb5bc465cb6b8e335cce4cd023dd5ff"],["categories/k3s/lnmp/index.html","817e9313f7cc947cf06a15b8840812b9"],["categories/k8s/elk5/index.html","3f9585a752d56b66fb3c16a588dbe8d6"],["categories/k8s/elk7/index.html","ce4914de87f228fb690027f18f91855c"],["categories/k8s/index.html","91c43d6659d8984884e7829f21239c5c"],["categories/k8s/kubectl/index.html","60932e9b80b206b0cdfc0419bbbcfe00"],["categories/k8s/mysql/index.html","5d29a5040834bbfe3b120ed437ca622b"],["categories/k8s/prometheus/index.html","7bcd9ff83cb5fa00aac9255678c200ba"],["categories/k8s/storageclass/index.html","fa1d4e7cf9b8605d2d6624a8236fb699"],["categories/k8s/问题总结/index.html","3e88088c87aea5c120de008a2404c170"],["categories/linux/awk/index.html","3f6cafe9042cd1ccf5c3346686350ae0"],["categories/linux/index.html","102a235364743c333cbe0372c001166f"],["categories/linux/shell/index.html","e7dc5076b98e10664da09ded034caf22"],["categories/linux/systemd/index.html","c7d5ddf59b31795bba4433cee35d1cd3"],["categories/linux/问题总结/index.html","af74b5a0890d8224dbefeb6f28d72547"],["categories/mac/index.html","221ed7cca435380b611bc6f5363fa709"],["categories/markdown/index.html","23e5edc75a17f116090e9ccd1cf189a3"],["categories/mysql/index.html","45c553e3e8978cf68cf76fa28933d0ec"],["categories/mysql/主从/index.html","d5cea7f66fa670deb443e393ed910cb8"],["categories/nfs/index.html","5697ad6b610a9796a4d210505ecde6df"],["categories/nginx/index.html","eb12483996bf345292535948c6106c24"],["categories/nginx/问题总结/index.html","14a88ded63261a7730ffc297ac297796"],["categories/php/index.html","1f705bf7d7830d035b5482a28a43c661"],["categories/php/问题总结/index.html","2dfb852dcd798155eca643c3d99ec62e"],["categories/radius/index.html","7d8da0471abe2fe8d8a69f06c9b689b0"],["categories/raid/index.html","e531706a9a043202f13beda9cf2c05e8"],["categories/windows/index.html","23fc6936c2ce1a4b3bbb03f6205bbeda"],["categories/博客/index.html","ca7a7d4760af2497295a83862b742bdc"],["categories/博客/美化/index.html","323c5c6821e6b8b36523472af5f2049e"],["categories/存储/ceph/index.html","c51a89ff7f9c81aa113a6991222589df"],["categories/存储/index.html","87330f1c1f4c1b2c3ee5cac8dd289ac8"],["categories/存储/nfs/index.html","4a6f990e03a487418a9f566b76f44d30"],["categories/技术文档/index.html","70feb697d60991f24e8af4126dd8d61e"],["categories/技术文档/page/2/index.html","b9f72ed0041214b52afd6d73167135f7"],["categories/有趣/index.html","c63cb91cde39bfeea4785f27b52817a4"],["categories/有趣/二次元/index.html","2545f083c120b37f4782e2f702d775c2"],["categories/流量复制工具/gor/index.html","a69571a291ca67e98ee1d82e57095e00"],["categories/流量复制工具/index.html","13d3503ab11fdbf50e2888dc4b5c11ff"],["categories/网卡/index.html","b9bafb6f21a5f1879d820f375cf9ca0e"],["categories/网址/index.html","21e2eeadb2ab523bd3379252657b6c4e"],["categories/网址/大佬博客/index.html","0d180a9774253bda3d1bf8024f454284"],["categories/网址/收藏/index.html","76bc5a35319f5005e428b3d38dafc30f"],["css/mobile.css","9cdba0b7411a49fe8851a58b651b76d4"],["css/style.css","65d0f57ab033cbd012cebefe3c92d91f"],["font/Oswald-Regular.ttf","69f4403ef57d4268b2f4dffdf9e7cfe1"],["font/Source Sans Pro.woff","5097f81039d71344019a2ffbf6160f6c"],["font/SourceCodePro-Regular.ttf.woff","b6ba243267725a84615cfaba137a6f55"],["images/16/容器的原理-1.png","1c184a092af6b6829c49ee20e70d132a"],["images/27/img1.png","74279f54a523a47f82a95a04ccfc9eb4"],["images/27/img2.jpg","93a32e8f4e52a9ea2a28b72a4223c2a9"],["images/38/gc1.jpg","dc31455119def3534b8b78213e6dcd29"],["images/38/gc2.jpg","ef5563c2f902a9b8550ed006747c94f5"],["images/38/gc3.jpg","3bef257bda43708e5c6d00598e5a6ccf"],["images/38/gc4.jpg","df24a1184fff79f3513b73fc1f4a6938"],["images/38/gc5.jpg","3e0fd4156b9666c1488b49d332875416"],["images/42/01.png","2a7524daaed26030a260df4e3fb58197"],["images/42/02.png","9c6ea26880ea0a13e900835c3fc75d65"],["images/42/03.png","d25c88fa33688ffe4a39aa59797e9e5d"],["images/42/04.png","8816231bb00c27abc8c97fc86797d474"],["images/45/01.png","95bacc819ae17e7e307034050799f3fb"],["images/45/02.png","be5e8c526b05c276cb9a1507a1a42323"],["images/45/03.png","c090ec8f8b444e05087d92b717e3ea8a"],["images/51/img.jpg","a2f5989183a4451b86968567755127c9"],["images/51/img2.jpg","572e1ec28c81be6cf350eb07ce52dcf5"],["images/52/img-all.png","0a63c2085b097a61f51611c9f48edc02"],["images/52/img-all2.jpg","9439588475c4cf0b60cb5dd1e05e1d4f"],["images/52/img-fpm-1-9.png","64d3bc0dd7c3ac24c6aa8aacb953fb14"],["images/53/img1.jpg","945011815dcef30570766dadef1e80b2"],["images/53/img2.jpg","a613182827884dbc4013e3fab5c5cda8"],["images/53/img3.jpg","42fa19420f095cd0c8dbd7d752b83935"],["images/53/img4.jpg","1c97844a91851b91acbd94c1ef4229b2"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["images/avatar.jpg","5b007d28d8184757ae475eb62afd6202"],["images/blog6/rancher-pv.png","d2a7e4bbfad5f71e75c9d5459cf5a464"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/docker1.jpg","5c611dd864017adeff648bca93d53f41"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/go1.gif","9b54b5b653edf8ad46925cb8bcb1b516"],["images/jixie-title.jpg","3ebd10201e23ecf68aba4524c020db0d"],["images/k8s_3part.jpg","8c72197f0daf342bc8b87d908527d638"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["images/tcp三次握手图.png","32ddd8df35bd5762604327b25758370e"],["images/tcp四次挥手图.png","684b2b4a0286acadc32247d693dbd961"],["images/test1/test1.jpg","60b725f10c9c85c70d97880dfe8191b3"],["images/title1.jpg","fa2db043867c4c5654471e21ad36e5c0"],["images/title2.jpg","b6e57860ebc3fcdcf150a6a4cf3402ab"],["images/title3.jpg","f0b1554cfa4dd1193719dcfeb9e4de28"],["images/title4.jpg","6eb7bcbb846d1123e830488d75028df7"],["images/wechat.jpg","a9d6b6d5bc4c08de2dcb03653946168d"],["index.html","f00578710aeabd0f18a4520eb1b7bad1"],["intro/404-bg.jpg","bb987c26e0a0f36f7a4350cfdfc6b4ca"],["intro/about-bg.jpg","5c2f59e45c2d19a12cfa4e3305380e9a"],["intro/index-bg.jpg","10f3e3cf901a4d033fc208efff20e9a4"],["intro/post-bg.jpg","87bd4714afa098591e0cba60aae86f10"],["lib/jquery.min.js","a09e13ee94d51c524b7e2a728c7d4039"],["lib/webfontloader.min.js","b03e20d628025187c3ac981299387cc0"],["page/2/index.html","2d0d847e67394df6f5873e8afda1c01d"],["page/3/index.html","23d94651e08df41aa10147ee41aca7a0"],["page/4/index.html","919d16f5336d9e164cfb76e36652adc6"],["page/5/index.html","548c37ff09f241bb1105be76b0acbb75"],["page/6/index.html","45e6ea88748bba6fa0187109852a3194"],["scripts/main.js","daa7eca40f5b50fa75baf7d98f5390d7"],["scripts/search.js","366fbc102b7ccc5c9554bed0bb945f66"],["scripts/share.js","9ec0687984e4e409f1bcc935e6dd18f9"],["tags/awk/index.html","343be422c96a9a02ddaa6f2ebc864ea6"],["tags/ceph/index.html","35e7eed94526bdf729cf6e0f759f5a51"],["tags/cephfs/index.html","3603105b8177a54c29ffe3c0097efc2c"],["tags/cloud-native/index.html","783651396715c7fc1c447a7344247faa"],["tags/daloradius/index.html","f53ed623252b9834543f7bc71c4d5423"],["tags/docker/index.html","ee643a675f939c1723634e55759858cc"],["tags/elasticsearch5/index.html","7d06f069fd1ff45b3686627bba1c7748"],["tags/elasticsearch7/index.html","f5c2d0a598ea03d2bc89449a075af0e7"],["tags/elk/index.html","b6b5a073f624dff3c293169048e22128"],["tags/elk5/index.html","0ed3e9bc9695bd57a162b1e78c280050"],["tags/elk7/index.html","7d1d85242d2bb9bbe7e38ee6d0f6a3f5"],["tags/filebeat7/index.html","47fc373dffb258ec0f6c0094d27d6c50"],["tags/fluentd/index.html","cde5d5375938fb19be28731ea8d9224f"],["tags/freeradius/index.html","36801ada481ccf3021995cbd6d106ffd"],["tags/gitlab-runner/index.html","8860a2bec565fcb92267c57f1f3f9a89"],["tags/go/index.html","38d2a72c72fd7d9fb8536780a3d2923f"],["tags/gor/index.html","c89bfb94d60c9b209770d38d3477064b"],["tags/hexo6/index.html","5a46bfcb6e70dc77b16e924eaa431604"],["tags/hexo美化/index.html","fd330fdf2f591c87262cb43eab539688"],["tags/http流量复制工具/index.html","759a1ff097d8a88994850b2746439eaa"],["tags/index.html","6fddb2a63ff55f6e98a6d2f11357b5a8"],["tags/ip/index.html","0ea486098778e53d8686addc626071d9"],["tags/istio/index.html","4b21a86bde85f39b62adb297b1af52be"],["tags/k3s/index.html","e8d37773c0af4b3e77f4fa6a72210d31"],["tags/k8s/index.html","4adc8b1e712d4d95f2062a399cdad6c3"],["tags/k8s存储/index.html","69bd3144ed4d155be19f8990d45fe19f"],["tags/kubectl/index.html","d9031d5a27c893bebf9d2800c09dbf53"],["tags/linux/index.html","dd5a4caae846ce066f934646b3176a3e"],["tags/logstash/index.html","b12ba33e467f797b990ab436078aaafd"],["tags/mac/index.html","132957aca7fea062dbf9c182842de1c5"],["tags/markdown/index.html","75c091c2ea39b7905da9d8227ebf2036"],["tags/mysql/index.html","a1cf3f753c26d1f254219cf4a9c01c70"],["tags/mysql5-7/index.html","7edff45eaa380761c1e05564f8eb31a5"],["tags/nfs/index.html","13d1a3536bda98ac8798357ca499ca06"],["tags/nginx/index.html","cf377704db456422ba14a91a9bbd0736"],["tags/php/index.html","954354b89d636883a43e28289ba203d0"],["tags/php5/index.html","a15f28da75bcacfa951f92fc09e7b4a1"],["tags/php7/index.html","baaebef5b63f0266f028b14332e23a4f"],["tags/promethues/index.html","c59b1333f55ef4dddead0b60c2d8ca8e"],["tags/raid/index.html","c53951deec83582f3c98902cd9791625"],["tags/shell/index.html","1ebfccf2e459e11b7663e5002da5196c"],["tags/ssh/index.html","f61701f7890e5c74b9c265e90b10410d"],["tags/storageclass/index.html","0c9e19a0e8ca692473a802e68bf93530"],["tags/systemd/index.html","df67b315718dd64cf782e9afa1cadc48"],["tags/windows/index.html","12f0a719e182401a6dab3ac86a8b4d99"],["tags/云原生/index.html","8a6d8e2eb26f1e89eb99d716bcdba4fe"],["tags/大佬博客/index.html","3fbdae8594a2d0c87e330a8927679518"],["tags/收藏/index.html","3c2aa4f53a9ba29e6045d7f3594e8d1e"],["tags/特效/index.html","0339522e922c5428386f9d2e0581b38a"],["tags/网址/index.html","8d1faac98a6ee4abee9ba5e2ae97146e"]];
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







