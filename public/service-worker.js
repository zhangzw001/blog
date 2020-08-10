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

var precacheConfig = [["2019/09/19/2-部署elk7-2-0/index.html","cf77bf34a4a9b6e897ffb10644be1c3d"],["2019/09/19/首次搭建hexo博客系统/index.html","a69b4792bbda477906f9e8582591b1aa"],["2019/09/20/3-k8s遇到的一些问题统计总结/index.html","a1741dd37788265b2009c4dec8d8f3db"],["2019/09/24/4-hexo鼠标移动和鼠标点击特效/index.html","7bd7fb854fd83a825feec1e390333406"],["2019/09/24/5-hexo添加看板娘/index.html","64d238abcfd38dadb9d97e97cc11d828"],["2019/09/26/6-ceph安装部署/index.html","d495ddb6138779ebbf792fbe92721e20"],["2019/09/26/7-k8s部署storageclass动态创建pv-nfs-rbd/index.html","90fa7b3f39dba493c2bd3a468b038df4"],["2019/09/26/8-mysql5-7二进制部署/index.html","3d89849730c48ace003f64a929ab9a07"],["2019/09/26/9-linux遇到一些问题统计总结/index.html","d612afb170773e3e0cd75bf10b66ed3a"],["2019/09/27/10-centos6安装nginx1-16-php7-2/index.html","2cb7b8ad745d4f86b81b3efae967a894"],["2019/10/10/11-mysql简单记录/index.html","f603e549db0d231c3520ad088e5d9144"],["2019/10/11/12-awk简单记录/index.html","11a1a99dc99feb2f8903262a28baf215"],["2019/10/12/13-云原生博客汇总/index.html","3ac72bbfadf33b26f1174ab1e097ab8c"],["2019/10/15/14-mysql目录copy方式迁移/index.html","644e0d36f8ba07fae007e0fa770a8607"],["2019/10/16/15-docker简介和使用/index.html","2a5d3c43bc7a569de8a54773416cde47"],["2019/10/16/16-dockerfile介绍/index.html","57f2b861e6cd37f61e0fd71d539a21d5"],["2019/10/16/17-markdown一些写法记录/index.html","7e6300604b7ff4cb0e45b9f63bc6f77c"],["2019/10/17/18-收藏链接/index.html","574dcb361afa3fe2766e1007f6c37774"],["2019/10/17/19-shell中gt和>的区别/index.html","3128607564f848c7508f2e2ffd50fc6e"],["2019/10/24/20-k8s搭建mysql5-7-24主从/index.html","f16bc1f49c7b1c2b194786608805fe19"],["2019/10/28/21-流量复制工具gor/index.html","c6d19bda21b3a15f6c493293da473f59"],["2019/10/28/22-es集群磁盘扩容/index.html","333d89e94e026342e0ff6ff40caa7bf4"],["2019/10/29/23-mysql5-5主与mysql5-7从部署配置/index.html","8a9a968ed97ee2dfab5bd8f1e714805a"],["2019/10/30/24-filebeat7收集mysql慢日志到es/index.html","393b5ef2605e4c056440a0e8b5ba6d83"],["2019/11/01/25-linux一些脚本汇总/index.html","8d0df873cd0ea7f4ef4856bdfa2f7b85"],["2019/11/08/26-logstash配置/index.html","9fa9df2b99f2ac41baf0f908891e3acc"],["2019/11/21/27-k8s一条命令部署es5-2-0集群/index.html","a2f41640235748a988a70e575d4dffa1"],["2019/11/25/28-k8s1-16使用旧yml部署配置问题/index.html","5dcfe55b87d9f35a15dfc8d88cc974da"],["2019/11/25/29-k3s集群部署项目报挂载nfs错误/index.html","002dbbf62f74de5035eb401dd1cca2ac"],["2019/11/25/30-k3s集群部署项目报挂载nfs错误/index.html","2b2b7f89547f8c3b98dd588c2d869547"],["2019/11/26/31-systemd一些命令/index.html","c7dbd93b711ce1294e047deefbbea296"],["2019/12/02/32-php错误502问题总结/index.html","7cbf4618db71dde234c0617844bec243"],["2019/12/03/29-k3s安装配置/index.html","49b750b28861e6adb490a8084235236f"],["2019/12/03/33-k3s1.16部署nginx+php5.2.17/index.html","aa5e36d85e861e1d8b973ca9cf7fcee7"],["2019/12/05/34-k8s一些命令总结/index.html","2693041d77cefc50e2f2d27bb27848ce"],["2020/02/27/35-raid1盘数据迁移/index.html","699e99f47b022372c73700907910b887"],["2020/02/27/36-centos单网卡配置多ip的几种方法/index.html","3a817f546642336b859bd51f39881bb4"],["2020/03/10/37-mac一些常用命令/index.html","2c7a04b3e2d94c5f3e36205ad078d501"],["2020/03/12/38-es集群节点出现overhead脱机的问题/index.html","e757a8371be769de24ed4a35c2e0e53d"],["2020/03/18/39-记一次nginx的request-time-和upstream-response-time差值很大问题/index.html","0b5f986413f5fc44eb6af6be02f0b9c4"],["2020/03/18/40-记一次跨域的nginx配置问题/index.html","c303464abb91a7ed7dc27a9f355b98b0"],["2020/03/19/41-记一次es集群内存溢出的问题/index.html","b71a10c52a8e6431ad020482149c8618"],["2020/03/24/42-kubeadm安装高可用k8s集群/index.html","fa479f3be6593e76207ad8986aadb3bc"],["2020/03/31/43-k8s的yaml配置名词解释-模板/index.html","451d098317a0a3c5ea58de8ea724e966"],["2020/04/09/44-k8s部署fluentd-kafka-logstash-es/index.html","94c03f00dfaf635761d16dbbaa093700"],["2020/04/23/45-gitlab-ci与k8s结合/index.html","35ba2b2123b57e103db1073e84705ddc"],["2020/05/13/46-docker安装nginx第三方模块/index.html","be1bf14a390afd05018ef8073f5baaa3"],["2020/05/14/47-k8s安装promethues-alertmanager-grafana/index.html","8e15f8f51220710462d1cbb89ec12e40"],["2020/05/18/48-k8s升级-1-10-1-15/index.html","a049c844934600417966309351d211f3"],["2020/05/27/49-go简单记录/index.html","66dcb0492ff959be4ebc0674b9ece7ce"],["2020/06/12/50-记一次windows安装OpenSSH问题/index.html","ff12b05071a6344dc5439d92d595638a"],["2020/07/27/51-k8s搭建radius/index.html","3634214d5cab9b4de7d545826e1008e3"],["2020/08/04/52-istio测试nginx-php项目/index.html","73eafc7fe8691430427ef72a7b6910ab"],["2020/08/07/53-hexo部署到coding-net开启静态网站/index.html","7dc2fe23319a3d73886d338b07288373"],["archives/2019/09/index.html","0e6768a2d18272edc7de7f6493328d63"],["archives/2019/10/index.html","f3ff96ca696ffb985f3b4a1548191777"],["archives/2019/11/index.html","e10d4de2dac6997f1ddc5418b7e7c2f5"],["archives/2019/12/index.html","50e4f24c9121d66ba6edcc46991358b1"],["archives/2019/index.html","52fce31c9dbd208be539e44159f3cd10"],["archives/2019/page/2/index.html","588d24010a429161f55f0a178096a375"],["archives/2020/02/index.html","27304ded7eed20ad8571c579f8e9a767"],["archives/2020/03/index.html","ca61596e7f9c236ef42b9bec9b2f2c15"],["archives/2020/04/index.html","960bd13dd61d6fb361bf848419962433"],["archives/2020/05/index.html","84ad774b1bf4a8e335688dc12c6f2763"],["archives/2020/06/index.html","72220a53385a3a2ed8641957dca43cae"],["archives/2020/07/index.html","67c29e3a3794a402b80d6b1738bab272"],["archives/2020/08/index.html","d7b6ff717cd79e78efc701e4e5ace451"],["archives/2020/index.html","b9f3e4e977a30b9101bce3e889f736d9"],["archives/index.html","44d7724c1f451d26c856cb74e2ce5e1f"],["archives/page/2/index.html","6ff8d61d060fe0fefa34a6750d9a3352"],["archives/page/3/index.html","2d37aafec40ed8070a717c36bb21960f"],["assets/algolia_logo.svg","8e0e9838589ad42418fe5fa23fa7e9f1"],["assets/example_qr.png","851a661c0c87f5cf06e68dc5d603ffdb"],["assets/loading.svg","e213e506bd18e78aac4008b258ee195d"],["avatar/Misaka.jpg","1f4eaa2515eeaab36d2acd2af5d29262"],["baidu_verify_Og0HzH3bO9.html","1ca91fe55c3bd36b5847967c4bec2bb2"],["baidu_verify_SIdT0vzXib.html","345b897f4d8c7ddd7b80904a3b9ab325"],["categories/docker/Dockerfile/index.html","7fd6e1838bcf909f90bc9fe58f8e90a6"],["categories/docker/index.html","f18e18691b22a8d5461b48701eb26b77"],["categories/elk/elasticsearch5/index.html","f4781c2dfc02d46bd77af9d2e5ddf831"],["categories/elk/elasticsearch7/index.html","1fe550d80dc972c8d08a6725ffb15c30"],["categories/elk/index.html","88478c640bd4fc8441454a6d415045af"],["categories/elk/logstash/index.html","d61dc7d78fa5f902c531014e7e51b0b3"],["categories/elk7/filebeat7/index.html","f639d0cf24b59737df86b82aa23d1ec1"],["categories/elk7/index.html","93e839a3080fb22fdc37063f0dedaa3a"],["categories/fluentd/index.html","054d41277ef39eb661f1275fbe59f2dc"],["categories/gitlab-ci/index.html","9206ce4ceb725d7fca670ebb615aa7e8"],["categories/go/index.html","0dbfd76f5db523ea1514b5d22cb06150"],["categories/index.html","c811a45d6bd87853a3c517f3e256f31a"],["categories/item2/index.html","1e45429e7d956e348c817052564bec60"],["categories/k3s/index.html","82e2f0fbbd25c6191d3c394df4660b88"],["categories/k3s/lnmp/index.html","a45cc3be1b5aaaf5d245efaf69a63a65"],["categories/k8s/elk5/index.html","81e1024d51bfb5e77e050a8cc27030ea"],["categories/k8s/elk7/index.html","3c30914ed6dc8a675aac2cd02391149e"],["categories/k8s/index.html","76349160a843cdd1bbbb27c6bd581a1b"],["categories/k8s/kubectl/index.html","1d6b715d64a3b40e214c7c52bb74f0b6"],["categories/k8s/mysql/index.html","cbdfca60eb2519f096702d86bbbf530e"],["categories/k8s/prometheus/index.html","c23b66725c3143a2018ff5714bf46cb3"],["categories/k8s/storageclass/index.html","ef20dc9b2a9cb924a96a5b381e106cfb"],["categories/k8s/问题总结/index.html","327368d7ffb66dec8130c4fb5671f931"],["categories/linux/awk/index.html","6e26f4af736aa5565d73c8ce6afaf810"],["categories/linux/index.html","f604e7e059c6910d317acfd02b5881e5"],["categories/linux/shell/index.html","a5780b76c4502b6799932ffa62b16cf6"],["categories/linux/systemd/index.html","44dc27c3b7eafc6887fadf08be7a8761"],["categories/linux/问题总结/index.html","c12f0988055f3f47264d913e7d1c7b8d"],["categories/mac/index.html","bb1548f40b9147c9a6949d05234a47df"],["categories/markdown/index.html","953bc8b879a670774076325bf8a82a77"],["categories/mysql/index.html","7db18f2834164e2669de7d1683539f07"],["categories/mysql/主从/index.html","6f3fd91b9217fc5954af221ffa53fa42"],["categories/nfs/index.html","bcb1f21028fcb0287cd876919bb1b4e6"],["categories/nginx/index.html","28ebe4e0984d86933fd9b37cb6e217c6"],["categories/nginx/问题总结/index.html","3cd34fbaf3dffefa549da61ef8a9fa32"],["categories/php/index.html","babd9cd3407a3fd600ca91be4b941124"],["categories/php/问题总结/index.html","f24a7f129aa20ec3c9db649c93b624b3"],["categories/radius/index.html","a0218042b99c5b3a5015f2834f8549ea"],["categories/raid/index.html","da83676d34efe353fb1af6c57d677b25"],["categories/windows/index.html","2fc1a8f31d85e42c19e99b56ca47812b"],["categories/博客/index.html","2a3b82daa946e33da2e9422e7af22775"],["categories/博客/美化/index.html","c754072de45eba92e25177220c13cd88"],["categories/存储/ceph/index.html","b695bdb442389ac93773f98dc9fb3a05"],["categories/存储/index.html","e1419be568c30e313b941e345405ced5"],["categories/存储/nfs/index.html","16175eaf9f43ade4d7455deb9467659a"],["categories/技术文档/index.html","267e433dab4f305a909892ee35caa411"],["categories/技术文档/page/2/index.html","ce30c24387cf8668ad070a0b6c96f4f8"],["categories/有趣/index.html","5d26062eefd9493ede9c24020141b3c1"],["categories/有趣/二次元/index.html","474ccf239e077342899aa279b3f3606f"],["categories/流量复制工具/gor/index.html","6661d885c0237bd1aa3fc3b860ab60a4"],["categories/流量复制工具/index.html","078492f5ae3c27c0bd17c579e666a094"],["categories/网卡/index.html","8bd8db2af7415e5cfc43a6e56d9ba8a2"],["categories/网址/index.html","10f894c2da57c86a9acb90beba774fb0"],["categories/网址/大佬博客/index.html","84f92a331a13948c2fce69281623260c"],["categories/网址/收藏/index.html","9f13ecacb6e5a890c430ab931b92b0bc"],["css/main.css","d41d8cd98f00b204e9800998ecf8427e"],["css/mobile.css","9cdba0b7411a49fe8851a58b651b76d4"],["css/style.css","65d0f57ab033cbd012cebefe3c92d91f"],["font/Oswald-Regular.ttf","69f4403ef57d4268b2f4dffdf9e7cfe1"],["font/Source Sans Pro.woff","5097f81039d71344019a2ffbf6160f6c"],["font/SourceCodePro-Regular.ttf.woff","b6ba243267725a84615cfaba137a6f55"],["images/16/容器的原理-1.png","1c184a092af6b6829c49ee20e70d132a"],["images/27/img1.png","74279f54a523a47f82a95a04ccfc9eb4"],["images/27/img2.jpg","93a32e8f4e52a9ea2a28b72a4223c2a9"],["images/38/gc1.jpg","dc31455119def3534b8b78213e6dcd29"],["images/38/gc2.jpg","ef5563c2f902a9b8550ed006747c94f5"],["images/38/gc3.jpg","3bef257bda43708e5c6d00598e5a6ccf"],["images/38/gc4.jpg","df24a1184fff79f3513b73fc1f4a6938"],["images/38/gc5.jpg","3e0fd4156b9666c1488b49d332875416"],["images/42/01.png","2a7524daaed26030a260df4e3fb58197"],["images/42/02.png","9c6ea26880ea0a13e900835c3fc75d65"],["images/42/03.png","d25c88fa33688ffe4a39aa59797e9e5d"],["images/42/04.png","8816231bb00c27abc8c97fc86797d474"],["images/45/01.png","95bacc819ae17e7e307034050799f3fb"],["images/45/02.png","be5e8c526b05c276cb9a1507a1a42323"],["images/45/03.png","c090ec8f8b444e05087d92b717e3ea8a"],["images/51/img.jpg","a2f5989183a4451b86968567755127c9"],["images/51/img2.jpg","572e1ec28c81be6cf350eb07ce52dcf5"],["images/52/img-all.png","0a63c2085b097a61f51611c9f48edc02"],["images/52/img-all2.jpg","9439588475c4cf0b60cb5dd1e05e1d4f"],["images/52/img-fpm-1-9.png","64d3bc0dd7c3ac24c6aa8aacb953fb14"],["images/53/img1.jpg","945011815dcef30570766dadef1e80b2"],["images/53/img2.jpg","a613182827884dbc4013e3fab5c5cda8"],["images/53/img3.jpg","42fa19420f095cd0c8dbd7d752b83935"],["images/53/img4.jpg","1c97844a91851b91acbd94c1ef4229b2"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["images/avatar.jpg","5b007d28d8184757ae475eb62afd6202"],["images/blog6/rancher-pv.png","d2a7e4bbfad5f71e75c9d5459cf5a464"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/docker1.jpg","5c611dd864017adeff648bca93d53f41"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/jixie-title.jpg","3ebd10201e23ecf68aba4524c020db0d"],["images/k8s_3part.jpg","8c72197f0daf342bc8b87d908527d638"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["images/tcp三次握手图.png","32ddd8df35bd5762604327b25758370e"],["images/tcp四次挥手图.png","684b2b4a0286acadc32247d693dbd961"],["images/test1/test1.jpg","60b725f10c9c85c70d97880dfe8191b3"],["images/title1.jpg","fa2db043867c4c5654471e21ad36e5c0"],["images/title2.jpg","b6e57860ebc3fcdcf150a6a4cf3402ab"],["images/title3.jpg","f0b1554cfa4dd1193719dcfeb9e4de28"],["images/title4.jpg","6eb7bcbb846d1123e830488d75028df7"],["images/wechat.jpg","a9d6b6d5bc4c08de2dcb03653946168d"],["index.html","b0faea698b970c3a0966fe58b2af523b"],["intro/404-bg.jpg","bb987c26e0a0f36f7a4350cfdfc6b4ca"],["intro/about-bg.jpg","5c2f59e45c2d19a12cfa4e3305380e9a"],["intro/index-bg.jpg","10f3e3cf901a4d033fc208efff20e9a4"],["intro/post-bg.jpg","87bd4714afa098591e0cba60aae86f10"],["js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["js/src/instantclick.js","865d92a4a07409b7fed739e6a108e9c4"],["js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["js/src/live2d.js","3359a94d733737dbdd290dd41f9cef0b"],["js/src/love.js","7bcfdb57debd43483174cf9e15ab37cc"],["js/src/love2.js","2b51ddac5207cba4153da31e9132414c"],["js/src/motion.js","706d085e6cfec6f3e92dedc590d68d68"],["js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["js/src/schemes/pisces.js","1bd23ed75238ebf11afe2aa6b1c3a25b"],["js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["js/src/utils.js","f06ffce70453ad3a4d9611fdde5ca6c3"],["lib/canvas-nest/canvas-nest.min.js","2361106788cc4ea719ed76f52b413e46"],["lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["lib/jquery.min.js","a09e13ee94d51c524b7e2a728c7d4039"],["lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["lib/webfontloader.min.js","b03e20d628025187c3ac981299387cc0"],["live2d-widget/README.html","9941b5173b7915eb6158e62f02cd9ea3"],["live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["live2d-widget/autoload.js","fc45c81e48138bde62e7e742cbbdabb9"],["live2d-widget/demo/demo1.html","82a14d37dbd83931644a4ad6ea1f9eb2"],["live2d-widget/demo/demo2.html","6babb045ef6905badc0dbc5e0d98cede"],["live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["live2d-widget/waifu.css","c4dae5924f2fb0b5ea6ef26aaab80db9"],["page/2/index.html","ae88f30cc59f7a64a0fe3daef9eb4264"],["page/3/index.html","beb17485dc85d3b6b6ff81df97b00ea0"],["page/4/index.html","91a34027bf5222d454ee087e14968bf6"],["page/5/index.html","49cf5e0c3390bbd3dd8bb17dafa3f663"],["page/6/index.html","ada9cc48f7bbdcd06c84f904aa74235a"],["scripts/main.js","daa7eca40f5b50fa75baf7d98f5390d7"],["scripts/search.js","366fbc102b7ccc5c9554bed0bb945f66"],["scripts/share.js","9ec0687984e4e409f1bcc935e6dd18f9"],["tags/awk/index.html","4402a498e89ab9324afe131db2d4b87e"],["tags/ceph/index.html","fb7da5ab9e63071817897bfc9b467f40"],["tags/cephfs/index.html","16709428b992ef83b533eeae5a02bedb"],["tags/cloud-native/index.html","fdd736bc2d1608c46aa717529978978e"],["tags/daloradius/index.html","cb942c8bbca1e47020db55c79386480f"],["tags/docker/index.html","06ae371c6bdd386b34438c778a7c93cf"],["tags/elasticsearch5/index.html","23d9df7a5300c469b03be09efa27c62d"],["tags/elasticsearch7/index.html","a5c490ffb01d63a9dc008b175867700c"],["tags/elk/index.html","31645a9142522b84ea15c30dc5b344ad"],["tags/elk5/index.html","5cfa31a86f170929776a3151b8f01d01"],["tags/elk7/index.html","eab6c3981791592756cb9301c2602fc1"],["tags/filebeat7/index.html","a1fec9d2eb10d6d2918fd94fbfa92850"],["tags/fluentd/index.html","82434091475842f8f24b875fe0ec56cd"],["tags/freeradius/index.html","5cf6acb6e30b7cf0d757b74e31155cee"],["tags/gitlab-runner/index.html","6cfef67857a5d84b92dab9069c5f1702"],["tags/go/index.html","0795e5c7cf7d61fa0b9e38d5e58c4632"],["tags/gor/index.html","326082b23e3df4157f4061d06a43521e"],["tags/hexo6/index.html","30b97b19bbf8138f227a910d4b42af02"],["tags/hexo美化/index.html","8e9eb5d398e1f8b07f472ce375e9f882"],["tags/http流量复制工具/index.html","79de620d48e857231bcdf70cc9610e07"],["tags/index.html","6cd37f224cea3c22d654fad8b6437c32"],["tags/ip/index.html","234098ec89f6cc5bcf5a6fac0a80b93f"],["tags/istio/index.html","6f4a1b3dfcab918b10a693744a4e501f"],["tags/k3s/index.html","629f638cddca834fd57209d4ec4b2e33"],["tags/k8s/index.html","8193deaef216347415a4a80d8bf47b5e"],["tags/k8s存储/index.html","71171d7a1987d25a424e8e99f99dbd91"],["tags/kubectl/index.html","e6a3259a05234c82e87429556847f33b"],["tags/linux/index.html","127ecfe74e1f287266488c6ca4109b5e"],["tags/logstash/index.html","f08cbbe1a8da0f53d472385a5a025d0c"],["tags/mac/index.html","998d83aa7377bad26d8619a4fdd87369"],["tags/markdown/index.html","3d858daf988b0c95a4b5426eecbd9445"],["tags/mysql/index.html","24eed7a7f99a86fd88bdde291e369f27"],["tags/mysql5-7/index.html","6c3539f7fe56bc19c264305c6a954197"],["tags/nfs/index.html","0652610b2e2234ad5e971d7b60945144"],["tags/nginx/index.html","290d7b27a2888a01218cfe92bc97091b"],["tags/php/index.html","6e3322de64b3ab9cdc13af5067324963"],["tags/php5/index.html","b6e1a893d100c82a0d90e505dd65895f"],["tags/php7/index.html","9412d92bee45f56395e08da3e2c1f47f"],["tags/promethues/index.html","fa6d048a4b321bbc53c8f21c076157e1"],["tags/raid/index.html","be7dbe80b857260c7cd80a6770ceec23"],["tags/shell/index.html","a1112dabc402b5a5259633fc7b595b11"],["tags/ssh/index.html","ae067db81243b936cc04e86b189685b3"],["tags/storageclass/index.html","f98068216430b045ae02599db283a154"],["tags/systemd/index.html","0d75e75e71b645e55182f328afacc51f"],["tags/windows/index.html","419633a771d1a06b73479ab4eca13cd7"],["tags/云原生/index.html","015e97677f318af39c6c2ca17dbfeae9"],["tags/大佬博客/index.html","9dd084cc94055d36664f02cfd9e7bd64"],["tags/收藏/index.html","45ade55cc75f1c8f68a664d282da2949"],["tags/特效/index.html","6ed642f611fb8313bbe020a1c88c5f80"],["tags/网址/index.html","46ad2121590e352b739b8aac5539ed02"]];
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







