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

var precacheConfig = [["2019/09/19/2-部署elk7-2-0/index.html","936bef1b17824220a16bfb0515445193"],["2019/09/19/首次搭建hexo博客系统/index.html","8dac55f977dcb9ac836e37f1f4cc4dc2"],["2019/09/20/3-k8s遇到的一些问题统计总结/index.html","3cd0d85158eff643e66b5dd379e5f442"],["2019/09/24/4-hexo鼠标移动和鼠标点击特效/index.html","48d11b9ac93a3b1b062d9d497c14704b"],["2019/09/24/5-hexo添加看板娘/index.html","9814334fd63a4e63d06a06209051a093"],["2019/09/26/6-ceph安装部署/index.html","70fe67c119ba7d0f7e17d4228f2c1a00"],["2019/09/26/7-k8s部署storageclass动态创建pv-nfs-rbd/index.html","ed07293cd7f883ad44445519f80babe2"],["2019/09/26/8-mysql5-7二进制部署/index.html","900dc3d4fafe96d45ff0b01d6f583a94"],["2019/09/26/9-linux遇到一些问题统计总结/index.html","bfc424bc9f4a8239b72e6518229a8bf4"],["2019/09/27/10-centos6安装nginx1-16-php7-2/index.html","17030bfaa147911b38bf55fc7b27ab26"],["2019/10/10/11-mysql简单记录/index.html","ac1c6f7d1edd5bbb9b61e0b1fd1b9b41"],["2019/10/11/12-awk简单记录/index.html","9af435709d28895435d513fc180942c9"],["2019/10/12/13-云原生博客汇总/index.html","3351bc51bd2107c694bbb0725ed847a4"],["2019/10/15/14-mysql目录copy方式迁移/index.html","772ce2067ec3db6548b431b7e5a83833"],["2019/10/16/15-docker简介和使用/index.html","af6643c4fa49438d7241e1d218b2dbb4"],["2019/10/16/16-dockerfile介绍/index.html","b257b7abdc5e26bf210b05947cf99df7"],["2019/10/16/17-markdown一些写法记录/index.html","1d8df0b98499c67afd651bb1da4ab724"],["2019/10/17/18-收藏链接/index.html","443cb3c621d62a87b8b600efc205defb"],["2019/10/17/19-shell中gt和>的区别/index.html","9b6c5c1ae4a3576fdfb80c7e0dfb1efe"],["2019/10/24/20-k8s搭建mysql5-7-24主从/index.html","083f0f8e56434a659fd4a6091fe83986"],["2019/10/28/21-流量复制工具gor/index.html","415787946a2d4a13c42eb96dbd3a171e"],["2019/10/28/22-es集群磁盘扩容/index.html","c313c95956475de8d8ae9f76712a8f27"],["2019/10/29/23-mysql5-5主与mysql5-7从部署配置/index.html","8060bfc27afe9e542f8d25f4fbb57404"],["2019/10/30/24-filebeat7收集mysql慢日志到es/index.html","7262446f6a0cc41542cfa0e268761e71"],["2019/11/01/25-linux一些脚本汇总/index.html","971096ccbd62a6c720fe0f450c83932a"],["2019/11/08/26-logstash配置/index.html","77454c22a732e3cc28f7903f541780e8"],["2019/11/21/27-k8s一条命令部署es5-2-0集群/index.html","86440178739f8d6c6a41d2cfa2fa382a"],["2019/11/25/28-k8s1-16使用旧yml部署配置问题/index.html","3fa0349203af1594e02ff92dc8031b10"],["2019/11/25/29-k3s集群部署项目报挂载nfs错误/index.html","593685111193bb1c6411f32a639ae0f7"],["2019/11/25/30-k3s集群部署项目报挂载nfs错误/index.html","415692d7911fe7824c5e0226c5b450d2"],["2019/11/26/31-systemd一些命令/index.html","32f9fc5569b107cb97b6533af6a19217"],["2019/12/02/32-php错误502问题总结/index.html","40ac85db68f82348ab3a71de5226b767"],["2019/12/03/29-k3s安装配置/index.html","c563bc06c19fffd7156a50176cb058f0"],["2019/12/03/33-k3s1.16部署nginx+php5.2.17/index.html","1ef23df1dfef7e42dd7539db250571d3"],["2019/12/05/34-k8s一些命令总结/index.html","2d883e0fa5a746a7b99ef9be45b13365"],["2020/02/27/35-raid1盘数据迁移/index.html","771bf8d8be3c76d1f9997bb335749379"],["2020/02/27/36-centos单网卡配置多ip的几种方法/index.html","72f35774f0d54fcd3c56e70a023655fd"],["2020/03/10/37-mac一些常用命令/index.html","bf8f9f696c24c2dde5807f03f9ebc9b5"],["2020/03/12/38-es集群节点出现overhead脱机的问题/index.html","7bad21005156c0ba2eb4bf1418dcc38f"],["2020/03/18/39-记一次nginx的request-time-和upstream-response-time差值很大问题/index.html","ad22e6f886ac42bc02f6b59ad6bb3e6a"],["2020/03/18/40-记一次跨域的nginx配置问题/index.html","575c3645266df2342118c75a72fcea3a"],["2020/03/19/41-记一次es集群内存溢出的问题/index.html","7ba4cb35b3d2d62c48a7234b41317a57"],["2020/03/24/42-kubeadm安装高可用k8s集群/index.html","eb60bc97dfa5487333e36864c37826e9"],["2020/03/31/43-k8s的yaml配置名词解释-模板/index.html","6d9f7fba73978330b535de622e46a30b"],["2020/04/09/44-k8s部署fluentd-kafka-logstash-es/index.html","21a8de094641032a54401c563afdd94a"],["2020/04/23/45-gitlab-ci与k8s结合/index.html","01ccfc4b22bdc0d0611d480ec2b504c9"],["2020/05/13/46-docker安装nginx第三方模块/index.html","2d12a257cb40538e34a3c43ceefbea65"],["2020/05/14/47-k8s安装promethues-alertmanager-grafana/index.html","146cc29ecf1b2d1d5c8d90b677d52b74"],["2020/05/18/48-k8s升级-1-10-1-15/index.html","4fc81a5b171147740e1cf9f8dfcff1ac"],["2020/05/27/49-go简单记录/index.html","7283df6d0611d568dfb0dbddebdd9e5f"],["2020/06/12/50-记一次windows安装OpenSSH问题/index.html","065c40029fcdad044a00571f498a9b5d"],["2020/07/27/51-k8s搭建radius/index.html","ff93e21a1c9d926c45d9f22d883dcf05"],["2020/08/04/52-istio测试nginx-php项目/index.html","c6047aea9bc9e800e6596e6b5df4949e"],["2020/08/07/53-hexo部署到coding-net开启静态网站/index.html","1488f311f473b524ce0ff5763b2da42e"],["2020/08/12/54-go单元测试和性能测试/index.html","05fb5d175373db2f96f1a9996c2dd7ee"],["archives/2019/09/index.html","9b2487a77d9f77464964149a632181fe"],["archives/2019/10/index.html","73cc5b02235ba9bf92caceb2fdd14c36"],["archives/2019/11/index.html","bd1d49925fbfda79c85662e7742cf838"],["archives/2019/12/index.html","b93713c90588d9acbdfed045f2937c02"],["archives/2019/index.html","561d9086d204275322c235bbf56ba8b8"],["archives/2019/page/2/index.html","fac7c15c4d3eb5d0d97b4402d5a45bd8"],["archives/2020/02/index.html","baa777aa3ec5b60757dd003633db1bd8"],["archives/2020/03/index.html","69c38c9ed192698fe0f809d76259fda1"],["archives/2020/04/index.html","6c5ce3290fa51c5e52f7a6ac0b228951"],["archives/2020/05/index.html","c991c3ce42e1f3ff42c067236bb6887e"],["archives/2020/06/index.html","d55d9eadc047c0aaf4ad06fda3f95b84"],["archives/2020/07/index.html","ce56d1b85f87bc57c3de870874cf5aa2"],["archives/2020/08/index.html","17048e84b25af8d11801a13f2f0e472d"],["archives/2020/index.html","79e71d49164330b54ed410fc808e0843"],["archives/index.html","1de8ead07f66581bc72fafb2c7409b7e"],["archives/page/2/index.html","0c0a1cb26b98cfc64eda0d239062ced3"],["archives/page/3/index.html","6f99ae7fbc58294cad4d1f3d82bb8e32"],["assets/algolia_logo.svg","8e0e9838589ad42418fe5fa23fa7e9f1"],["assets/example_qr.png","851a661c0c87f5cf06e68dc5d603ffdb"],["assets/loading.svg","e213e506bd18e78aac4008b258ee195d"],["avatar/Misaka.jpg","5b007d28d8184757ae475eb62afd6202"],["baidu_verify_Og0HzH3bO9.html","f60583a176869b90d38eb1139b92f5c4"],["baidu_verify_SIdT0vzXib.html","6578f92f1892db4e895d951c26a5d4cf"],["categories/docker/Dockerfile/index.html","6ab8f7386fb92fdeeaebd93d1739c044"],["categories/docker/index.html","a053a49c6a52b19cdb7c019f6f97ac22"],["categories/elk/elasticsearch5/index.html","03b5f0e6258a4e802e603fa8af46f742"],["categories/elk/elasticsearch7/index.html","76e9d2a1b744b3947b45c90c7d0a145b"],["categories/elk/index.html","9a5f946045d169343fdc1d05f030b026"],["categories/elk/logstash/index.html","9df0e3c4bec9c8a0f8634bb85040ff10"],["categories/elk7/filebeat7/index.html","3bd67d9db97b298012b5240fb40cf91e"],["categories/elk7/index.html","65e782af6d2b24790446a778203d07b7"],["categories/fluentd/index.html","265b563e1f7fe73a885657874a4c3d21"],["categories/gitlab-ci/index.html","980c609e2cedcb8a598cc1655b35b5fa"],["categories/go/index.html","f47056c5111419e3bd0808e22e0ad9a4"],["categories/index.html","d33b7584b95c719d6f201cbe69e5ffde"],["categories/item2/index.html","c5ad8ea03168856183056bd7d0803bfc"],["categories/k3s/index.html","f2fa05ee9e55f80d1b7d5067b6a5337b"],["categories/k3s/lnmp/index.html","353a3e044def45f37168f1ff61743254"],["categories/k8s/elk5/index.html","10547cb2f6dfd557054b6278ec52a6be"],["categories/k8s/elk7/index.html","e149d0f888fc8e987238bc87c7e63bc5"],["categories/k8s/index.html","46009249e0179b569659d93beba846a6"],["categories/k8s/kubectl/index.html","947582ffa5508cc75c86b9f503f80524"],["categories/k8s/mysql/index.html","7d6c29ef6c68217800c4a5078e5a8ab8"],["categories/k8s/prometheus/index.html","c3cb829654ab5aaccbbf03ac42ecaade"],["categories/k8s/storageclass/index.html","dd505a11962b52ad0e1f44990cff578c"],["categories/k8s/问题总结/index.html","0d8e1dcea0ea14bc53a40763d2af3607"],["categories/linux/awk/index.html","c0720904bc09de7116289394fe4f7a26"],["categories/linux/index.html","17f7bc224110c28db08947e259176540"],["categories/linux/shell/index.html","a7f199e35659f275a32a4248edae3f40"],["categories/linux/systemd/index.html","8cc1c0800115a153a9bad533ec639cb3"],["categories/linux/问题总结/index.html","7f62152a98d826e00f3db2254763189e"],["categories/mac/index.html","bb8140d911dd38ff2812e06ba7de6991"],["categories/markdown/index.html","d845c777cd1cfa04b86539c3c70f6f7d"],["categories/mysql/index.html","fef52227046fe9141e8bbe32a28c7982"],["categories/mysql/主从/index.html","1ef7c143c29f46c44a7b55bbeb04611e"],["categories/nfs/index.html","44561d614e06635451f2476af7fec7ec"],["categories/nginx/index.html","71b7a07156d4de8cfa7a5552d3b74f4c"],["categories/nginx/问题总结/index.html","77a9ac2f4f020993c7883567d1ff6d21"],["categories/php/index.html","604506d6b4f54351b6ca85ddf39b18f6"],["categories/php/问题总结/index.html","be7b59a3fd7f080e46def1abde4c1422"],["categories/radius/index.html","7653647b31c410008e9a5a93c21d921b"],["categories/raid/index.html","9c372046afaef647c8d8a427a6199672"],["categories/windows/index.html","1b2655631b1392286d1582cd1893fd2c"],["categories/博客/index.html","d0b10ac1dc45de6b1e39727d51c73a59"],["categories/博客/美化/index.html","b4266ca16706bb4676bc2b3e94f16fb4"],["categories/存储/ceph/index.html","582e39365e6dd566fbb4f7bd9236047c"],["categories/存储/index.html","e1b7718fc66142d39e8b8df4f7b3f75f"],["categories/存储/nfs/index.html","53c9a68483150b5d95eea8c7be46c3cf"],["categories/技术文档/index.html","5bb90c870dbe8936f10283e0bc5bb0d9"],["categories/技术文档/page/2/index.html","a0bffac5ec46da075d3ef712601997f2"],["categories/有趣/index.html","da0fd5b01ab00bd1d1ca8dbda7162687"],["categories/有趣/二次元/index.html","0444b8796aea694879b194c65535e258"],["categories/流量复制工具/gor/index.html","d5afcf5563df6efd5302b2b11353f4c5"],["categories/流量复制工具/index.html","6ee1f0048134f2d3b9be94bf950b3f4a"],["categories/网卡/index.html","dbf7cf574ea84f288a6bce54d0694c4d"],["categories/网址/index.html","b680870bee5c5d883e41d3cb90fed83e"],["categories/网址/大佬博客/index.html","6169638f2514a4c9e0cd9e6c761bca9e"],["categories/网址/收藏/index.html","ea2b39c428ec3b01f1a9144d8c996654"],["css/mobile.css","9cdba0b7411a49fe8851a58b651b76d4"],["css/style.css","65d0f57ab033cbd012cebefe3c92d91f"],["font/Oswald-Regular.ttf","69f4403ef57d4268b2f4dffdf9e7cfe1"],["font/Source Sans Pro.woff","5097f81039d71344019a2ffbf6160f6c"],["font/SourceCodePro-Regular.ttf.woff","b6ba243267725a84615cfaba137a6f55"],["images/16/容器的原理-1.png","1c184a092af6b6829c49ee20e70d132a"],["images/27/img1.png","74279f54a523a47f82a95a04ccfc9eb4"],["images/27/img2.jpg","93a32e8f4e52a9ea2a28b72a4223c2a9"],["images/38/gc1.jpg","dc31455119def3534b8b78213e6dcd29"],["images/38/gc2.jpg","ef5563c2f902a9b8550ed006747c94f5"],["images/38/gc3.jpg","3bef257bda43708e5c6d00598e5a6ccf"],["images/38/gc4.jpg","df24a1184fff79f3513b73fc1f4a6938"],["images/38/gc5.jpg","3e0fd4156b9666c1488b49d332875416"],["images/42/01.png","2a7524daaed26030a260df4e3fb58197"],["images/42/02.png","9c6ea26880ea0a13e900835c3fc75d65"],["images/42/03.png","d25c88fa33688ffe4a39aa59797e9e5d"],["images/42/04.png","8816231bb00c27abc8c97fc86797d474"],["images/45/01.png","95bacc819ae17e7e307034050799f3fb"],["images/45/02.png","be5e8c526b05c276cb9a1507a1a42323"],["images/45/03.png","c090ec8f8b444e05087d92b717e3ea8a"],["images/51/img.jpg","a2f5989183a4451b86968567755127c9"],["images/51/img2.jpg","572e1ec28c81be6cf350eb07ce52dcf5"],["images/52/img-all.png","0a63c2085b097a61f51611c9f48edc02"],["images/52/img-all2.jpg","9439588475c4cf0b60cb5dd1e05e1d4f"],["images/52/img-fpm-1-9.png","64d3bc0dd7c3ac24c6aa8aacb953fb14"],["images/53/img1.jpg","945011815dcef30570766dadef1e80b2"],["images/53/img2.jpg","a613182827884dbc4013e3fab5c5cda8"],["images/53/img3.jpg","42fa19420f095cd0c8dbd7d752b83935"],["images/53/img4.jpg","1c97844a91851b91acbd94c1ef4229b2"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["images/avatar.jpg","5b007d28d8184757ae475eb62afd6202"],["images/blog6/rancher-pv.png","d2a7e4bbfad5f71e75c9d5459cf5a464"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/docker1.jpg","5c611dd864017adeff648bca93d53f41"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/go1.gif","9b54b5b653edf8ad46925cb8bcb1b516"],["images/jixie-title.jpg","3ebd10201e23ecf68aba4524c020db0d"],["images/k8s_3part.jpg","8c72197f0daf342bc8b87d908527d638"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["images/tcp三次握手图.png","32ddd8df35bd5762604327b25758370e"],["images/tcp四次挥手图.png","684b2b4a0286acadc32247d693dbd961"],["images/test1/test1.jpg","60b725f10c9c85c70d97880dfe8191b3"],["images/title1.jpg","fa2db043867c4c5654471e21ad36e5c0"],["images/title2.jpg","b6e57860ebc3fcdcf150a6a4cf3402ab"],["images/title3.jpg","f0b1554cfa4dd1193719dcfeb9e4de28"],["images/title4.jpg","6eb7bcbb846d1123e830488d75028df7"],["images/wechat.jpg","a9d6b6d5bc4c08de2dcb03653946168d"],["index.html","36c4a05c3c3b3f7b8f9a44b685967e78"],["intro/404-bg.jpg","bb987c26e0a0f36f7a4350cfdfc6b4ca"],["intro/about-bg.jpg","5c2f59e45c2d19a12cfa4e3305380e9a"],["intro/index-bg.jpg","10f3e3cf901a4d033fc208efff20e9a4"],["intro/post-bg.jpg","87bd4714afa098591e0cba60aae86f10"],["lib/jquery.min.js","a09e13ee94d51c524b7e2a728c7d4039"],["lib/webfontloader.min.js","b03e20d628025187c3ac981299387cc0"],["page/2/index.html","da47870d26cb408f75f16376b99fa6b3"],["page/3/index.html","c8a87ed21deffc6da4a766ad7a66e8b3"],["page/4/index.html","951d83c49282269892d4e9229a13cc72"],["page/5/index.html","8904ae666b4418df370ffb101f0b3769"],["page/6/index.html","82982401c721eaf6564cf12c3a734e24"],["scripts/main.js","daa7eca40f5b50fa75baf7d98f5390d7"],["scripts/search.js","366fbc102b7ccc5c9554bed0bb945f66"],["scripts/share.js","9ec0687984e4e409f1bcc935e6dd18f9"],["tags/awk/index.html","f0443656e14be2829ee3ddf149db96c5"],["tags/ceph/index.html","9603c5c963e76b7dcac6ce649271aee9"],["tags/cephfs/index.html","405d3ba5bf357d9c6cf5a7015f60cbcc"],["tags/cloud-native/index.html","1afce899234f2523cc503797e7854962"],["tags/daloradius/index.html","49510fc93b4aaf22d7b3152fe396b429"],["tags/docker/index.html","12c3960da4b01882fd0900891039f52b"],["tags/elasticsearch5/index.html","5b9abd87c5752f88c7e0db8a695608e7"],["tags/elasticsearch7/index.html","121919a1c601d8a938774b521494e16d"],["tags/elk/index.html","ad7c69e7103bfe9d924bcc9a3875f88e"],["tags/elk5/index.html","cc0d289e1f9cb66013674f4ce37748d8"],["tags/elk7/index.html","f51f5ac75fd6d6a3f7c5d27dfe8040cd"],["tags/filebeat7/index.html","85d97a9a4ee1628cd77aa51b1081af7c"],["tags/fluentd/index.html","25881617b910910e3faa4c1f8a1b74c2"],["tags/freeradius/index.html","f8964ac24a20b3f30d66432f3d415407"],["tags/gitlab-runner/index.html","bf9bfc8b711e4ff1927ce4c622dc6995"],["tags/go/index.html","157f4ceacc64ecd690d4cc58abeadb3a"],["tags/gor/index.html","790af6a4aa5a7a7ed2d95f25e7d6efec"],["tags/hexo6/index.html","7270d057a01cdfd88917c184a28f9da3"],["tags/hexo美化/index.html","715e820e43ea14278d2e9207e364769c"],["tags/http流量复制工具/index.html","9426a296ef2a68f0af125050fca44ec0"],["tags/index.html","297c4cfdc530e90195dc426a29bae5ff"],["tags/ip/index.html","e819eeea123a3f707be9adb96dad4e9d"],["tags/istio/index.html","9ec719434c4703c93d85127e852e61f7"],["tags/k3s/index.html","559f94340c6b7d77683a8f6d3149f31e"],["tags/k8s/index.html","5180452cd7e473e65ff5379a52608e90"],["tags/k8s存储/index.html","5601ab364e3b6d5f55bc9da781ed3304"],["tags/kubectl/index.html","c9a8fc12502cfd8d9e3ed93d5d0941a3"],["tags/linux/index.html","f010e5a75767fca5b605107be20d21d4"],["tags/logstash/index.html","d0e84552c7885293503dc2da109fd4e3"],["tags/mac/index.html","b06bbc0fd84442392f2f61ecf34134ba"],["tags/markdown/index.html","0ed33f407f99c4c7bb49bf0f8c5ea833"],["tags/mysql/index.html","a7c01ee141c5d53d0d468636b526d361"],["tags/mysql5-7/index.html","6dfbc1fa5d25bb9934fd54e6583d3ac3"],["tags/nfs/index.html","b71a57618117e176f550d2c0321e2cdc"],["tags/nginx/index.html","f6219ef349d1bbec745894646f082c7a"],["tags/php/index.html","8181e43abf0f1d91d1bffcca3d088b00"],["tags/php5/index.html","d5ab039431ad6e341412725f2fb5b7de"],["tags/php7/index.html","c655171055ff603b31163174f672718e"],["tags/promethues/index.html","14b584b546947885b0d5ee4ba330ded9"],["tags/raid/index.html","ebd9ffc18cdeb641081f9ce7e30e5da7"],["tags/shell/index.html","7e1d1720382121273eeaf183a47b4412"],["tags/ssh/index.html","9e420c96bb4ea654488a350e553ee633"],["tags/storageclass/index.html","3cf2c04a3347df8dc8616fed21dc7175"],["tags/systemd/index.html","2d42844b10648d8b22e2a89ff529781f"],["tags/windows/index.html","5d81cface6462fa7c3a32ccc172e2730"],["tags/云原生/index.html","94755fc0166c6f308411fa36ff58e9b3"],["tags/大佬博客/index.html","e586f2737df4c8dfe7a60ac5d7e3ea3e"],["tags/收藏/index.html","d7d27c58ec95a66ffcc2c7642971f699"],["tags/特效/index.html","25423d686646deabd92d59fedd8d3e7e"],["tags/网址/index.html","91e2369a5cabd846bb25e76a7db8e11e"]];
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







