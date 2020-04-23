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

<<<<<<< HEAD
var precacheConfig = [["2019/09/19/2-部署elk7-2-0/index.html","b586a4e40016468b3bdd9b5bdbba2f94"],["2019/09/19/首次搭建hexo博客系统/index.html","94952b9a997266b6268b249e730485c5"],["2019/09/20/3-k8s遇到的一些问题统计总结/index.html","dced2a920c4dfe56995fdbd5801412bb"],["2019/09/24/4-hexo鼠标移动和鼠标点击特效/index.html","2d7a4ac65e9c878ce548a55569e831b4"],["2019/09/24/5-hexo添加看板娘/index.html","7a5eecde50d07835cfe3190a92106736"],["2019/09/26/6-ceph安装部署/index.html","4158b40b157ee7823c4f739f24407668"],["2019/09/26/7-k8s部署storageclass动态创建pv-nfs-rbd/index.html","24b4618afad8327c3013f3fbb90b39a6"],["2019/09/26/8-mysql5-7二进制部署/index.html","f872bf1f4eff5d61172f6043ccfe9d71"],["2019/09/26/9-linux遇到一些问题统计总结/index.html","7d88dff97c7bde4461ab03e6f7cd47bc"],["2019/09/27/10-centos6安装nginx1-16-php7-2/index.html","6d4ca390a7c1ed8ef06095ae87054472"],["2019/10/10/11-mysql简单记录/index.html","c2fdb1a7e58146c9123093054f8c9800"],["2019/10/11/12-awk简单记录/index.html","c7268f3810b976261f5b8e68d2a91ac1"],["2019/10/12/13-云原生博客汇总/index.html","a94eb16ad6773147dfb5c0a82e513801"],["2019/10/15/14-mysql目录copy方式迁移/index.html","0d4f874978d25cbf5d4bf7ad8df7a852"],["2019/10/16/15-docker简介和使用/index.html","5c153bbed20918ab2d2adec7a97ff2d0"],["2019/10/16/16-dockerfile介绍/index.html","6d18047440230a3327904278c9f67966"],["2019/10/16/17-markdown一些写法记录/index.html","54c10bcc073391a33d513a337b5e64b1"],["2019/10/17/18-收藏链接/index.html","d5629a3a3f129800a2dc42e98e8193af"],["2019/10/17/19-shell中gt和>的区别/index.html","9222830cd5a72e852c45dd1795b75824"],["2019/10/24/20-k8s搭建mysql5-7-24主从/index.html","c781968f62e4487e24dd2cdc6c42afba"],["2019/10/28/21-流量复制工具gor/index.html","d6bb54c29d2bef5bb6c6d89296b274f6"],["2019/10/28/22-es集群磁盘扩容/index.html","dfa8c041cb1238a7f9692b0bdc0a9f60"],["2019/10/29/23-mysql5-5主与mysql5-7从部署配置/index.html","8ea1ae41d99d3ced6e03df1d6ad21fd4"],["2019/10/30/24-filebeat7收集mysql慢日志到es/index.html","524837dc0a1c68784d082dd84346d0c2"],["2019/11/01/25-linux一些脚本汇总/index.html","5a7c86c5ce559661b3e8f18211b68bca"],["2019/11/01/25-一些脚本汇总/index.html","f8ca170e87f9e280517dd96455414172"],["2019/11/08/26-logstash配置/index.html","d9c2d1cba02359a9908b131cc1b22a1b"],["2019/11/21/27-k8s一条命令部署es5-2-0集群/index.html","8c09a2f9c31a6ca35c7f8bc696a48eff"],["2019/11/25/28-k8s1-16使用旧yml部署配置问题/index.html","2fb23a8c34588fcdccd6371738560ed2"],["2019/11/25/29-k3s集群部署项目报挂载nfs错误/index.html","ff61b47ec6e3d62439623e89347865e7"],["2019/11/25/30-k3s集群部署项目报挂载nfs错误/index.html","dce77ce1953c2b11cef98b040c514074"],["2019/11/26/31-systemd一些命令/index.html","3cd1fee0158d260545fb0529f2e6e496"],["2019/12/02/32-php错误502问题总结/index.html","8300bf852ae63798be5381e5a108d836"],["2019/12/03/29-k3s安装配置/index.html","8bebe1a8695d2acfcb5bfdd323eafd6e"],["2019/12/03/33-k3s1.16部署nginx+php5.2.17/index.html","eacd2fe54445c514f8b8a14250395e66"],["2019/12/05/34-k8s一些命令总结/index.html","c89ab5806bddbdb7dd74a2c93153d7d3"],["2020/02/27/35-raid1盘数据迁移/index.html","1847c9c0a5eb56a98754fd9f4a1e501b"],["2020/02/27/36-centos单网卡配置多ip的几种方法/index.html","396baf4976b30bad2ff3e8837a925b1e"],["2020/03/10/37-mac一些常用命令/index.html","12a354eddc375a31963579df69db1029"],["2020/03/12/38-es集群节点出现overhead脱机的问题/index.html","f0d8633f2c31675d2acb58c2ffe9cc0f"],["2020/03/18/39-记一次nginx的request-time-和upstream-response-time差值很大问题/index.html","3a42556bc1f0ca6b6814ade875746374"],["2020/03/18/40-记一次跨域的nginx配置问题/index.html","6fc7efc27b305a1c38e04a10137a777e"],["2020/03/19/41-记一次es集群内存溢出的问题/index.html","794c13dc3e3284f6fe16917c026e5baf"],["2020/03/24/42-kubeadm安装高可用k8s集群/index.html","afb256ba65b6bdfa5a744d85387d38ba"],["2020/03/31/43-k8s的yaml配置名词解释-模板/index.html","98ebbeab5e44fa66ead141187c7f055c"],["2020/04/09/44-k8s部署fluentd-kafka-logstash-es/index.html","15b6e6cc5ade0e6245cab7bcfa8f46f7"],["2020/04/23/45-gitlab-ci与k8s结合/index.html","506eef580d7c430a57a731aaf6849532"],["archives/2019/09/index.html","a87fee44fea3909ef025ae6dd52bdf1c"],["archives/2019/10/index.html","62677a9318821c5812e9a90b9fd53d27"],["archives/2019/11/index.html","c3efe3e699ccc8dd1160d3b764363f39"],["archives/2019/12/index.html","788c00122f1368cce4e7b5a067d7bb35"],["archives/2019/index.html","74d6d3e20cd4e3638254d3bbc9c2d231"],["archives/2019/page/2/index.html","7b65d84332304824adb4aa5f8e0163ec"],["archives/2020/02/index.html","9b169b3b4f31cfee75128c3527f043f9"],["archives/2020/03/index.html","8f68ade7622781cbc5a33f7772da5292"],["archives/2020/04/index.html","3c87d141656b655f673e0703d062bdf1"],["archives/2020/index.html","29a014fededf655f1ce17528e82b5e30"],["archives/index.html","5c9020c50ab0e226d71df13e450ef18c"],["archives/page/2/index.html","3ec331ac15d819243d246d8cffeda5b7"],["archives/page/3/index.html","150bb94a9677db37200a54cb7919a08a"],["categories/docker/Dockerfile/index.html","5363676dc9df6bb78f77c7e2754591e1"],["categories/docker/index.html","575978f02e1bf083bf152213ee60fdb5"],["categories/elk/elasticsearch5/index.html","8c1ab2795b3226c2ba53f7f3464e4a90"],["categories/elk/elasticsearch7/index.html","43b04fb1d71e24df9f060d0d666a4d57"],["categories/elk/index.html","aa9a7db1bd02659f092dbadb4207e0bd"],["categories/elk/logstash/index.html","b3a44ef477dc18a161fb4ab836c78e73"],["categories/elk7/filebeat7/index.html","34666921309e0027f5f24be2db006d55"],["categories/elk7/index.html","b0eb4014be77ef42f30809b7bf2a23ab"],["categories/fluentd/index.html","ac2fe01fc6d81405aba5630484dfc173"],["categories/gitlab-ci/index.html","4ada382d55481421d9f5728ef8bb52cc"],["categories/index.html","1a3508c055a663eb49b7fb532b2cf45a"],["categories/item2/index.html","9dfec9e56db087110a7bc9be668bf6c3"],["categories/k3s/index.html","2c7b0d75aa35c55e793bcd7628c99b76"],["categories/k3s/lnmp/index.html","e28334a01edb897d79d08e5e4c9a6876"],["categories/k8s/elk5/index.html","8aa0254c20535efe1dcd4950904bfad5"],["categories/k8s/elk7/index.html","2ac64d8559046101ef6296d5c0ed580d"],["categories/k8s/index.html","a6312dd9aefce2a1e99a09769d501549"],["categories/k8s/kubectl/index.html","3f16b5cd71158c9e82570d34be9cc691"],["categories/k8s/mysql/index.html","c79c8bedc4c6ca6a5cc8024e067a55c6"],["categories/k8s/storageclass/index.html","8b64284f8a50a8cb7b07a63c53506a17"],["categories/k8s/问题总结/index.html","edca79362a8a462721f0d26043cc5923"],["categories/linux/awk/index.html","5c3fb6f455d1dc6ade418d041af69e98"],["categories/linux/index.html","dcc368cd319f5aee2780f3d4e906255d"],["categories/linux/shell/index.html","757de226bce3ea0c1b9a2e8c2f20c9bd"],["categories/linux/systemd/index.html","97fb0c450607c7ff232ffad108ebea3c"],["categories/linux/问题总结/index.html","4298131aa383f10f882df145485d72f5"],["categories/mac/index.html","7419b186a6a557215d67d18f6bf60a11"],["categories/markdown/index.html","47197b22ba07d43f05e98d95565484f0"],["categories/mysql/index.html","dacfc66a09b800c430dbba71f352dd5d"],["categories/mysql/主从/index.html","3d18da29ffcea2376d1719d43483300e"],["categories/nfs/index.html","eccad50f3f564bb86f0f15cdcab6f9a1"],["categories/nginx/index.html","cead1403a6d60b8034044724b31bfddf"],["categories/nginx/问题总结/index.html","97ee09ebea3a253cae0a6d0bfc07dbe5"],["categories/php/index.html","0a5aa591d1d8f22f567944eb57ae40e6"],["categories/php/问题总结/index.html","a7f8953d7d866f702b5573a8b5815a40"],["categories/raid/index.html","8f4cca3b331ec56cb6dd5512435ef185"],["categories/博客/index.html","9409dbfab983e5680f625d5d0861dafc"],["categories/博客/美化/index.html","1db3c3c71d8d884fe799b249ede3813e"],["categories/存储/ceph/index.html","210a090fd357375624594ef476c5d76b"],["categories/存储/index.html","154a4a888596c0b59668019391cc5ea1"],["categories/存储/nfs/index.html","5088ca0493abaa4cda83e0b4f2c1f2b0"],["categories/技术文档/index.html","a9faeee517d5d971d269fab575a5e37c"],["categories/技术文档/page/2/index.html","5d10f80d61729600defcc04410290cc9"],["categories/有趣/index.html","53039f0bcf253de53fea59c11c4f1122"],["categories/有趣/二次元/index.html","7141182e400b7b683e033226cc9e614c"],["categories/流量复制工具/gor/index.html","edd3c446cf12a4a45e0b08668a5ccabe"],["categories/流量复制工具/index.html","2bf6ce5cab5f98a7ee5cba2f8145eee1"],["categories/网卡/index.html","761f46163178349dc5a1df933247d88f"],["categories/网址/index.html","5f4d0e35f2a02cd390a7525ec1922d7a"],["categories/网址/大佬博客/index.html","33fda30af9f07212d65c295faf15a7b1"],["categories/网址/收藏/index.html","d1635002d0aad7ee9f932a3343e95bce"],["css/main.css","a49fd58fade3657016bde14b5b55d9d8"],["images/16/容器的原理-1.png","1c184a092af6b6829c49ee20e70d132a"],["images/27/img1.png","74279f54a523a47f82a95a04ccfc9eb4"],["images/27/img2.jpg","93a32e8f4e52a9ea2a28b72a4223c2a9"],["images/38/gc1.jpg","dc31455119def3534b8b78213e6dcd29"],["images/38/gc2.jpg","ef5563c2f902a9b8550ed006747c94f5"],["images/38/gc3.jpg","3bef257bda43708e5c6d00598e5a6ccf"],["images/38/gc4.jpg","df24a1184fff79f3513b73fc1f4a6938"],["images/38/gc5.jpg","3e0fd4156b9666c1488b49d332875416"],["images/42/01.png","2a7524daaed26030a260df4e3fb58197"],["images/42/02.png","9c6ea26880ea0a13e900835c3fc75d65"],["images/42/03.png","d25c88fa33688ffe4a39aa59797e9e5d"],["images/42/04.png","8816231bb00c27abc8c97fc86797d474"],["images/45/01.png","95bacc819ae17e7e307034050799f3fb"],["images/45/02.png","be5e8c526b05c276cb9a1507a1a42323"],["images/45/03.png","c090ec8f8b444e05087d92b717e3ea8a"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["images/blog6/rancher-pv.png","d2a7e4bbfad5f71e75c9d5459cf5a464"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/docker1.jpg","5c611dd864017adeff648bca93d53f41"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/jixie-title.jpg","3ebd10201e23ecf68aba4524c020db0d"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["images/tcp三次握手图.png","32ddd8df35bd5762604327b25758370e"],["images/tcp四次挥手图.png","684b2b4a0286acadc32247d693dbd961"],["images/test1/test1.jpg","60b725f10c9c85c70d97880dfe8191b3"],["images/title1.jpg","fa2db043867c4c5654471e21ad36e5c0"],["images/title2.jpg","b6e57860ebc3fcdcf150a6a4cf3402ab"],["images/title3.jpg","f0b1554cfa4dd1193719dcfeb9e4de28"],["images/title4.jpg","6eb7bcbb846d1123e830488d75028df7"],["index.html","9b49bea5498b67ff7de99ac51532fafb"],["js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["js/src/instantclick.js","865d92a4a07409b7fed739e6a108e9c4"],["js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["js/src/live2d.js","3359a94d733737dbdd290dd41f9cef0b"],["js/src/love.js","7bcfdb57debd43483174cf9e15ab37cc"],["js/src/love2.js","2b51ddac5207cba4153da31e9132414c"],["js/src/motion.js","706d085e6cfec6f3e92dedc590d68d68"],["js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["js/src/schemes/pisces.js","1bd23ed75238ebf11afe2aa6b1c3a25b"],["js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["js/src/utils.js","f06ffce70453ad3a4d9611fdde5ca6c3"],["lib/canvas-nest/canvas-nest.min.js","2361106788cc4ea719ed76f52b413e46"],["lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["live2d-widget/README.html","9941b5173b7915eb6158e62f02cd9ea3"],["live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["live2d-widget/autoload.js","fc45c81e48138bde62e7e742cbbdabb9"],["live2d-widget/demo/demo1.html","82a14d37dbd83931644a4ad6ea1f9eb2"],["live2d-widget/demo/demo2.html","6babb045ef6905badc0dbc5e0d98cede"],["live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["live2d-widget/waifu.css","c4dae5924f2fb0b5ea6ef26aaab80db9"],["page/2/index.html","e57e83bcecec9ddd0ff1cccc1d52eb16"],["page/3/index.html","f2e53dacce348940e2addd708eea5573"],["page/4/index.html","9a2d27997bf82ba82e3a5ee2f3f40e0d"],["page/5/index.html","1fbd6661bbeda6290c9ee2bb5bbd27cb"],["tags/awk/index.html","34f40cdcd60734719284619472e2987d"],["tags/ceph/index.html","9492971070e6ee2e7437987c4cc8072e"],["tags/cephfs/index.html","35364551d56ba7ef29a416645fb3f7cf"],["tags/cloud-native/index.html","b305eecab813bc2472f5d031ecd005c0"],["tags/docker/index.html","cbdfa02576645a64acfbc3889ec694b8"],["tags/elasticsearch5/index.html","06348a5ad90ee08eee6216bfdd20a402"],["tags/elasticsearch7/index.html","5bdbf095dc61c778dc382a1f305774bc"],["tags/elk/index.html","88af2cf0b0a6429bb774a4ad69e3923f"],["tags/elk5/index.html","fc7ffe4c10b84478fa70f69a3114ad58"],["tags/elk7/index.html","0e7cc0d9c39da576d690256cce1b4d9c"],["tags/filebeat7/index.html","4dff61b3bcb378af1c4e9f91997fe333"],["tags/fluentd/index.html","9603676639b291562781b3ddc3ff41de"],["tags/gitlab-runner/index.html","3cea2a3597ea0f71a5e1290d0bad42b4"],["tags/gor/index.html","eaa59def7bed33f95d574311a14e964e"],["tags/hexo6/index.html","0f0609e5820a61b5bd8cb455ffcff2a7"],["tags/hexo美化/index.html","ddf540f7e24034a055762454221c166c"],["tags/http流量复制工具/index.html","fb2729420c5aa4b41f818f0a5b287e61"],["tags/index.html","a09b77bf20aee65704731337e5a488a6"],["tags/ip/index.html","09128bb61054288dd7c0b4315734dbd6"],["tags/k3s/index.html","5cb4e2c1cb1b0da6bb6cf595557d2cbd"],["tags/k8s/index.html","21a14bfca445ae974891b9ea4cea7574"],["tags/k8s存储/index.html","38ac9b4fbeabd5298d430275db4ae2cb"],["tags/kubectl/index.html","65e2ed939024b1db12a23582f7eb2a90"],["tags/linux/index.html","1fb2353fc83d4d2692e37abc31a26cc1"],["tags/logstash/index.html","ef6ee72d50ae19eb12fe6ff4af38218f"],["tags/mac/index.html","756028ada9dfbd3e2494b353376045c6"],["tags/markdown/index.html","c377cc0bf01c15e945ff0aa3697f294b"],["tags/mysql/index.html","61f03058b3a9a5f02c1cdc6b5b32dfd3"],["tags/mysql5-7/index.html","b98f625f0f47030efdda2642a07b49a0"],["tags/nfs/index.html","723acb58ab8fe9f6f60efa394c536a57"],["tags/nginx/index.html","8817541124908b88faed4340754f9067"],["tags/php/index.html","e57ad51beff1ac0d7700b0b0ebe3dfa2"],["tags/php5/index.html","bd93080ae6c5fd59d8f140d494b8b5b5"],["tags/php7/index.html","b0c95b1cd065816d99ea50966174b590"],["tags/raid/index.html","206933434ee096eb2cc816397e9f43a3"],["tags/shell/index.html","f8e40e48bc87561e3d798cdb98f955bf"],["tags/storageclass/index.html","9916f3814d32ca9fc01f7bbce80545b8"],["tags/systemd/index.html","021de8877bebd87493b8b2feb019cf52"],["tags/云原生/index.html","b27181a627ad9a53380bc1a9c1114fe0"],["tags/大佬博客/index.html","14a328d379c393ab8de8fbe92cf50ae5"],["tags/收藏/index.html","a38b78cf34f4e8f79f177ec30fad81b8"],["tags/特效/index.html","1fbd1c6d7d3ed2d0df19a2f0a4888a37"],["tags/网址/index.html","e8d689e320c37925c9037c80580cd894"]];
=======
var precacheConfig = [["2019/09/19/2-部署elk7-2-0/index.html","c3571cb00097932ada0ecd76b8447c46"],["2019/09/19/首次搭建hexo博客系统/index.html","e12b2d2363d16807513889ae9eb6cfe0"],["2019/09/20/3-k8s遇到的一些问题统计总结/index.html","768e2491427b7db1c8c38afc58709717"],["2019/09/24/4-hexo鼠标移动和鼠标点击特效/index.html","7545e2d0782230ea8039dc9e730746b4"],["2019/09/24/5-hexo添加看板娘/index.html","424a2c8735c9587db722889e9a8adf43"],["2019/09/26/6-ceph安装部署/index.html","3d3f0463981bd033693bd641f52c02bb"],["2019/09/26/7-k8s部署storageclass动态创建pv-nfs-rbd/index.html","51002a5c764f9acecba0f75687564c8e"],["2019/09/26/8-mysql5-7二进制部署/index.html","f31c89b947dcabba11c4676feed61389"],["2019/09/26/9-linux遇到一些问题统计总结/index.html","a9ca6442996368765457c4bd7266037f"],["2019/09/27/10-centos6安装nginx1-16-php7-2/index.html","edce147c701ff8ccc15abf26512b01bc"],["2019/10/10/11-mysql简单记录/index.html","067a322da78bd08f418381d9b52129c8"],["2019/10/11/12-awk简单记录/index.html","2c2b7e30c389595906b82b9f3da2832a"],["2019/10/12/13-云原生博客汇总/index.html","1dd3966d0513dd7a692dacce146a7622"],["2019/10/15/14-mysql目录copy方式迁移/index.html","3272e0b6fbb39e401feadea708da9561"],["2019/10/16/15-docker简介和使用/index.html","2a40083cf39058d0ccd7b6a401c7190a"],["2019/10/16/16-dockerfile介绍/index.html","b9f936e3b70fdc31ac72be89b4961f73"],["2019/10/16/17-markdown一些写法记录/index.html","6393acd2b7a8e5b1e9a48202ed2e6915"],["2019/10/17/18-收藏链接/index.html","daca7b58d81f828310bc07ad784b741f"],["2019/10/17/19-shell中gt和>的区别/index.html","fa29b5901e7a74997aa7ac2a7b435348"],["2019/10/24/20-k8s搭建mysql5-7-24主从/index.html","3a824f5c0489751adcdf2455eedb2544"],["2019/10/28/21-流量复制工具gor/index.html","09bcf11105cf56e988eec6673c71821a"],["2019/10/28/22-es集群磁盘扩容/index.html","d112cbc4a5bbf4e58c11418ebf2c78d7"],["2019/10/29/23-mysql5-5主与mysql5-7从部署配置/index.html","2fee72e23c87a038e14b918e41e9462c"],["2019/10/30/24-filebeat7收集mysql慢日志到es/index.html","c09a19c3be61f7c4fd80428a541c0bb5"],["2019/11/01/25-linux一些脚本汇总/index.html","3b4c5887464ebcc4ace164a2963e7367"],["2019/11/01/25-一些脚本汇总/index.html","2443e6494deb9ebd557c508ee1c25f7a"],["2019/11/08/26-logstash配置/index.html","48de84b92684cb89a24375cb2c254297"],["2019/11/21/27-k8s一条命令部署es5-2-0集群/index.html","2c0a33a1d9fb814d8aa7ad6580c05bf6"],["2019/11/25/28-k8s1-16使用旧yml部署配置问题/index.html","304486df66af1fc1a9593d2224bc075a"],["2019/11/25/29-k3s集群部署项目报挂载nfs错误/index.html","cbf7e9f60dde6715a91f1a24e99ddca8"],["2019/11/25/30-k3s集群部署项目报挂载nfs错误/index.html","c09d91d13a01f1c1cd4ea947779281b3"],["2019/11/26/31-systemd一些命令/index.html","0e5fffb1a6aef5599d966b3f4080c717"],["2019/12/02/32-php错误502问题总结/index.html","53d27a93a7fc3717c5c82bdc0e6d3b72"],["2019/12/03/29-k3s安装配置/index.html","2e2bb557c69bcb7cb3e5e2d15220c8f2"],["2019/12/03/33-k3s1.16部署nginx+php5.2.17/index.html","e660b8f9958c09dc9326561ae9b5d1cf"],["2019/12/05/34-k8s一些命令总结/index.html","98d6b66d53a2c2f1b4413b8d509ed3d4"],["2020/02/27/35-raid1盘数据迁移/index.html","22ae0f00dcc4e0e8ffbdfbdf0f7217a0"],["2020/02/27/36-centos单网卡配置多ip的几种方法/index.html","31707ef40df06ecbe1366bbf62ad4616"],["2020/03/10/37-mac一些常用命令/index.html","e54dc2e95fbdd79caccdc0029662c704"],["2020/03/12/38-es集群节点出现overhead脱机的问题/index.html","8becb3c501a819c28b189bc609bd2a5f"],["2020/03/18/39-记一次nginx的request-time-和upstream-response-time差值很大问题/index.html","09d9b1b07bd6a71a45176ea2a3ab8cad"],["2020/03/18/40-记一次跨域的nginx配置问题/index.html","df317e56a36639efdff66c13b47c7b12"],["2020/03/19/41-记一次es集群内存溢出的问题/index.html","5267dba40dcefa52457f33b4ab799ec5"],["2020/03/24/42-kubeadm安装高可用k8s集群/index.html","61e46bd40da5fe40cdd8a5b9b28c4dbd"],["2020/03/31/43-k8s的yaml配置名词解释-模板/index.html","3c620eb5218cddf8c61e4f6f21a6797f"],["2020/04/09/44-k8s部署fluentd-kafka-logstash-es/index.html","17dfe2c608fabef2adbfd1027f29866e"],["2020/04/23/45-gitlab-ci与k8s结合/index.html","13cf1672aac57433cd66671b31e0a1c4"],["archives/2019/09/index.html","d114bd19e19ae35d427b6d9b2f6eec4f"],["archives/2019/10/index.html","3f609992d506b34bc375c9ee43777ba6"],["archives/2019/11/index.html","4bc283020ff249081dd1b2caba932548"],["archives/2019/12/index.html","3148b3587f36e45030e8a446e58781a8"],["archives/2019/index.html","b69ae6f767b8cdd02aa2ad841a9744c3"],["archives/2019/page/2/index.html","370f5cbbce770755a01f9d8319e4dee8"],["archives/2020/02/index.html","e6bf5076703059af5b30d2a96f3069dc"],["archives/2020/03/index.html","37007325787011ee69f233de23314bb7"],["archives/2020/04/index.html","73d0c18fc7744ecc241b98457c6f23d6"],["archives/2020/index.html","12c07fb66edbe283691bd9a0407bb3df"],["archives/index.html","b644dca1c80a5189db157a55b95400e1"],["archives/page/2/index.html","961fe915be69de70fe52ba9680ef6dc5"],["archives/page/3/index.html","233924e463d5444856f8c752d1e65d15"],["categories/docker/Dockerfile/index.html","0bc52a7401ac004cc7275b2703d1df85"],["categories/docker/index.html","5c04de4f936361ca1d92575434a52676"],["categories/elk/elasticsearch5/index.html","8e0e54a49cd0c000a41161e717b134f3"],["categories/elk/elasticsearch7/index.html","3fbba75ab8de7a42780d382362fdabb5"],["categories/elk/index.html","09f097e654426ad522a49851ee670f3f"],["categories/elk/logstash/index.html","ed13d11f9d674a6ba1b96488bafe1fdd"],["categories/elk7/filebeat7/index.html","760c59e32e61be8586f15e4167af81b8"],["categories/elk7/index.html","0dd2b3de884a4f66f2351f6e88948cba"],["categories/gitlab-ci/index.html","242ebac29f6f250fc144d192438a3c6f"],["categories/index.html","54dddcc3ed78cfbfa8dfc007154254f0"],["categories/item2/index.html","feac8fd631c892388b96049a6a1e78c0"],["categories/k3s/index.html","6c8d8aaf70dfa4de2b197b6334efd8bb"],["categories/k3s/lnmp/index.html","d1931f49dcb4f0542fde677e4af6a578"],["categories/k8s/elk5/index.html","d6f58423d13502b79f8efe005bc14205"],["categories/k8s/elk7/index.html","4a671e9449c1261c2649b79d3640efd6"],["categories/k8s/index.html","144cb79648af785d46f9a332788919f6"],["categories/k8s/kubectl/index.html","3fd137e3376c65ba804cc1e5ba29267e"],["categories/k8s/mysql/index.html","c2437c4f9f8a5c8b791e02ae3299b57c"],["categories/k8s/storageclass/index.html","966201f195f141e718c3036a0ee4d266"],["categories/k8s/问题总结/index.html","b41efeaabb820bdd213e7211746440bc"],["categories/linux/awk/index.html","52948e465c7b03e2196f230f27a628e7"],["categories/linux/index.html","0efaaa62e91f36380dc23fa39141822d"],["categories/linux/shell/index.html","ef26912910903bade173087111d4ca49"],["categories/linux/systemd/index.html","ff96c57f97d73b46dd3d49de87b9ca3d"],["categories/linux/问题总结/index.html","c0bab1616a9511274a446ee7d6b061c6"],["categories/mac/index.html","6d42fe4659cfcc1f17b5e9c466418a14"],["categories/markdown/index.html","01c3be95b57385073c691857e25b24c0"],["categories/mysql/index.html","ab9c206ac2123d0456e72fcdc0568bc4"],["categories/mysql/主从/index.html","b7be559dfdfdbe4ea4677243b7269493"],["categories/nfs/index.html","f832f912e50c21159b05e549bfea821b"],["categories/nginx/index.html","92e31e81751316f4fefe53c1094f85d1"],["categories/nginx/问题总结/index.html","e1bcba18ebf218c850f01e0ee7756c54"],["categories/php/index.html","46e82d298c373de41a007e991e0f1358"],["categories/php/问题总结/index.html","225bf2b2728252b81340ee4c605a3207"],["categories/raid/index.html","c00a4fed346e8038584915884c30f91f"],["categories/博客/index.html","0f8539481e8111cb3a4c91eefcde7426"],["categories/博客/美化/index.html","114ddd6705c166159364da95a4643942"],["categories/存储/ceph/index.html","4178e4a44cbc2f2dfc05d2829248d263"],["categories/存储/index.html","7fa9c76731f9ddf55c43088a0d7977f0"],["categories/存储/nfs/index.html","871cb9138ed32224031c96d67d73606d"],["categories/技术文档/index.html","725a7f6d1a6c5cda0591d0629cbf3e72"],["categories/技术文档/page/2/index.html","f86efe895063098b41f9208acdc411fb"],["categories/有趣/index.html","4667795b97cbb73c66cecbd28c93031d"],["categories/有趣/二次元/index.html","de7c011359c76415d9e32b749c1df9bb"],["categories/流量复制工具/gor/index.html","74678e75b1895e7cdc247060fbc437a1"],["categories/流量复制工具/index.html","b13955bfdd716143a6c08591f1a16bf2"],["categories/网卡/index.html","08ad34a35365d571ed333a01cfa19095"],["categories/网址/index.html","084977122885de586f5b65e7243453f6"],["categories/网址/大佬博客/index.html","f6f83929c3bfa7f7b64b657dc77e5d46"],["categories/网址/收藏/index.html","6f2df68bd0ba221a6ba0512aaf44fe28"],["css/main.css","a49fd58fade3657016bde14b5b55d9d8"],["images/16/容器的原理-1.png","1c184a092af6b6829c49ee20e70d132a"],["images/27/img1.png","74279f54a523a47f82a95a04ccfc9eb4"],["images/27/img2.jpg","93a32e8f4e52a9ea2a28b72a4223c2a9"],["images/38/gc1.jpg","dc31455119def3534b8b78213e6dcd29"],["images/38/gc2.jpg","ef5563c2f902a9b8550ed006747c94f5"],["images/38/gc3.jpg","3bef257bda43708e5c6d00598e5a6ccf"],["images/38/gc4.jpg","df24a1184fff79f3513b73fc1f4a6938"],["images/38/gc5.jpg","3e0fd4156b9666c1488b49d332875416"],["images/42/01.png","2a7524daaed26030a260df4e3fb58197"],["images/42/02.png","9c6ea26880ea0a13e900835c3fc75d65"],["images/42/03.png","d25c88fa33688ffe4a39aa59797e9e5d"],["images/42/04.png","8816231bb00c27abc8c97fc86797d474"],["images/45/01.png","95bacc819ae17e7e307034050799f3fb"],["images/45/02.png","be5e8c526b05c276cb9a1507a1a42323"],["images/45/03.png","c090ec8f8b444e05087d92b717e3ea8a"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["images/blog6/rancher-pv.png","d2a7e4bbfad5f71e75c9d5459cf5a464"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/docker1.jpg","5c611dd864017adeff648bca93d53f41"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/jixie-title.jpg","3ebd10201e23ecf68aba4524c020db0d"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["images/tcp三次握手图.png","32ddd8df35bd5762604327b25758370e"],["images/tcp四次挥手图.png","684b2b4a0286acadc32247d693dbd961"],["images/test1/test1.jpg","60b725f10c9c85c70d97880dfe8191b3"],["images/title1.jpg","fa2db043867c4c5654471e21ad36e5c0"],["images/title2.jpg","b6e57860ebc3fcdcf150a6a4cf3402ab"],["images/title3.jpg","f0b1554cfa4dd1193719dcfeb9e4de28"],["images/title4.jpg","6eb7bcbb846d1123e830488d75028df7"],["index.html","fa7847eb6d97f94be502e0849b6f2d6b"],["js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["js/src/instantclick.js","865d92a4a07409b7fed739e6a108e9c4"],["js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["js/src/live2d.js","3359a94d733737dbdd290dd41f9cef0b"],["js/src/love.js","7bcfdb57debd43483174cf9e15ab37cc"],["js/src/love2.js","2b51ddac5207cba4153da31e9132414c"],["js/src/motion.js","706d085e6cfec6f3e92dedc590d68d68"],["js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["js/src/schemes/pisces.js","1bd23ed75238ebf11afe2aa6b1c3a25b"],["js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["js/src/utils.js","f06ffce70453ad3a4d9611fdde5ca6c3"],["lib/canvas-nest/canvas-nest.min.js","2361106788cc4ea719ed76f52b413e46"],["lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["live2d-widget/README.html","9941b5173b7915eb6158e62f02cd9ea3"],["live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["live2d-widget/autoload.js","fc45c81e48138bde62e7e742cbbdabb9"],["live2d-widget/demo/demo1.html","82a14d37dbd83931644a4ad6ea1f9eb2"],["live2d-widget/demo/demo2.html","6babb045ef6905badc0dbc5e0d98cede"],["live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["live2d-widget/waifu.css","c4dae5924f2fb0b5ea6ef26aaab80db9"],["page/2/index.html","f6c6bd87d4dddbcc0b8a78f486420b94"],["page/3/index.html","b280d28be7db48ae3bca9c769fc07aeb"],["page/4/index.html","ed187ab0ddf58a9224f6d078921003ea"],["page/5/index.html","69dd6b5253e21838b124628767c11a61"],["tags/awk/index.html","5c510d366fcd7772e415b6e584af542e"],["tags/ceph/index.html","ad2c46cddfacdd392d1d29832cb21ec3"],["tags/cephfs/index.html","696fc3e83567452a1eeaaf93b081be52"],["tags/cloud-native/index.html","919c4dab8b45b86d72f851fbe80eaf80"],["tags/docker/index.html","90ed305313119e8f4888c38d6a62851d"],["tags/elasticsearch5/index.html","0473884ddd150fa80803624bf2c8ea5a"],["tags/elasticsearch7/index.html","f2e46f5377114a4f1f84e9e63723d40e"],["tags/elk/index.html","00787b50371ae93ee56c6969f7a78469"],["tags/elk5/index.html","6b1fc171253c4fdea5a2b00d424f181b"],["tags/elk7/index.html","9d667bbfc826370f578019620cb5bb06"],["tags/filebeat7/index.html","d5346bd83db48927062553e4b7846dfb"],["tags/gitlab-runner/index.html","c1f132a1e57a3c1a46f1a99465959df5"],["tags/gor/index.html","f7e61eb556b2e3063ccb2a0267c89252"],["tags/hexo6/index.html","d3a74e114c72cb38c53c2bc64469c43c"],["tags/hexo美化/index.html","5a6447d179c5fc0a6cc0d996451fa148"],["tags/http流量复制工具/index.html","34449e2a858e6152d9e2da35d89b8238"],["tags/index.html","40fac7afa670001029ebd7de7f9948a5"],["tags/ip/index.html","71ae5be896c328fa1ed73b32a241ad8a"],["tags/k3s/index.html","9461188e0b48e1522d1470df38dde0ef"],["tags/k8s/index.html","4756f6adeb1119b846e2499016f98a33"],["tags/k8s存储/index.html","a26b510e99a628119839b24b73e4ac3c"],["tags/kubectl/index.html","57b53254bbd4937ff3df98f5a40067e6"],["tags/linux/index.html","fdc684d6e39c668f116a1422cd320543"],["tags/logstash/index.html","dff6afbf6c29ba4ab335e2d15f4232aa"],["tags/mac/index.html","9d7bd7610dad5ee5c9720e2ab12a7b93"],["tags/markdown/index.html","dd19cd9a6b4b0ffedd318981c17f42ba"],["tags/mysql/index.html","2f7c86a5b3be89a679c31af59ce8094a"],["tags/mysql5-7/index.html","bfa638872cd1953492177b748a147edb"],["tags/nfs/index.html","ad1edfd1de6c4d1f02f31f55d2e0746e"],["tags/nginx/index.html","aa1ddf725fd34f14f5accae24bba6c42"],["tags/php/index.html","8455c4101e1d0a4857ee4ead9d454128"],["tags/php5/index.html","11cf9bf6747eb0298c25db8cdafd2fd5"],["tags/php7/index.html","44d3dd8003d9f234e55f9886f855b5a3"],["tags/raid/index.html","3f598e21e6221920c86d2c13ad7dabf1"],["tags/shell/index.html","249f597a08b2a44b99be1dfe53dda382"],["tags/storageclass/index.html","8dce3d318dba69b0d20bbd4934bff6ca"],["tags/systemd/index.html","9222753d40d6bfbae1c0cd52f7708b60"],["tags/云原生/index.html","95a6727b4bc522fe1a9a788a4a4bfeee"],["tags/大佬博客/index.html","1c5b689329f08e1034e39cf855c142d6"],["tags/收藏/index.html","1825f422a987a78cd8be6fc7620c3038"],["tags/特效/index.html","8ff8855242791d66968b64b8b13feed1"],["tags/网址/index.html","0ecc578d95b522bdef04b65ae18fe6e0"]];
>>>>>>> a4ff283e537af20d52689341e13de3e70adfc5eb
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







