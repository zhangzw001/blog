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

var precacheConfig = [["2019/09/19/2-部署elk7-2-0/index.html","b586a4e40016468b3bdd9b5bdbba2f94"],["2019/09/19/首次搭建hexo博客系统/index.html","94952b9a997266b6268b249e730485c5"],["2019/09/20/3-k8s遇到的一些问题统计总结/index.html","dced2a920c4dfe56995fdbd5801412bb"],["2019/09/24/4-hexo鼠标移动和鼠标点击特效/index.html","2d7a4ac65e9c878ce548a55569e831b4"],["2019/09/24/5-hexo添加看板娘/index.html","7a5eecde50d07835cfe3190a92106736"],["2019/09/26/6-ceph安装部署/index.html","4158b40b157ee7823c4f739f24407668"],["2019/09/26/7-k8s部署storageclass动态创建pv-nfs-rbd/index.html","24b4618afad8327c3013f3fbb90b39a6"],["2019/09/26/8-mysql5-7二进制部署/index.html","f872bf1f4eff5d61172f6043ccfe9d71"],["2019/09/26/9-linux遇到一些问题统计总结/index.html","7d88dff97c7bde4461ab03e6f7cd47bc"],["2019/09/27/10-centos6安装nginx1-16-php7-2/index.html","6d4ca390a7c1ed8ef06095ae87054472"],["2019/10/10/11-mysql简单记录/index.html","c2fdb1a7e58146c9123093054f8c9800"],["2019/10/11/12-awk简单记录/index.html","c7268f3810b976261f5b8e68d2a91ac1"],["2019/10/12/13-云原生博客汇总/index.html","a94eb16ad6773147dfb5c0a82e513801"],["2019/10/15/14-mysql目录copy方式迁移/index.html","0d4f874978d25cbf5d4bf7ad8df7a852"],["2019/10/16/15-docker简介和使用/index.html","5c153bbed20918ab2d2adec7a97ff2d0"],["2019/10/16/16-dockerfile介绍/index.html","6d18047440230a3327904278c9f67966"],["2019/10/16/17-markdown一些写法记录/index.html","54c10bcc073391a33d513a337b5e64b1"],["2019/10/17/18-收藏链接/index.html","d5629a3a3f129800a2dc42e98e8193af"],["2019/10/17/19-shell中gt和>的区别/index.html","9222830cd5a72e852c45dd1795b75824"],["2019/10/24/20-k8s搭建mysql5-7-24主从/index.html","c781968f62e4487e24dd2cdc6c42afba"],["2019/10/28/21-流量复制工具gor/index.html","d6bb54c29d2bef5bb6c6d89296b274f6"],["2019/10/28/22-es集群磁盘扩容/index.html","dfa8c041cb1238a7f9692b0bdc0a9f60"],["2019/10/29/23-mysql5-5主与mysql5-7从部署配置/index.html","8ea1ae41d99d3ced6e03df1d6ad21fd4"],["2019/10/30/24-filebeat7收集mysql慢日志到es/index.html","524837dc0a1c68784d082dd84346d0c2"],["2019/11/01/25-linux一些脚本汇总/index.html","5a7c86c5ce559661b3e8f18211b68bca"],["2019/11/01/25-一些脚本汇总/index.html","f8ca170e87f9e280517dd96455414172"],["2019/11/08/26-logstash配置/index.html","d9c2d1cba02359a9908b131cc1b22a1b"],["2019/11/21/27-k8s一条命令部署es5-2-0集群/index.html","8c09a2f9c31a6ca35c7f8bc696a48eff"],["2019/11/25/28-k8s1-16使用旧yml部署配置问题/index.html","2fb23a8c34588fcdccd6371738560ed2"],["2019/11/25/29-k3s集群部署项目报挂载nfs错误/index.html","ff61b47ec6e3d62439623e89347865e7"],["2019/11/25/30-k3s集群部署项目报挂载nfs错误/index.html","dce77ce1953c2b11cef98b040c514074"],["2019/11/26/31-systemd一些命令/index.html","3cd1fee0158d260545fb0529f2e6e496"],["2019/12/02/32-php错误502问题总结/index.html","8300bf852ae63798be5381e5a108d836"],["2019/12/03/29-k3s安装配置/index.html","8bebe1a8695d2acfcb5bfdd323eafd6e"],["2019/12/03/33-k3s1.16部署nginx+php5.2.17/index.html","eacd2fe54445c514f8b8a14250395e66"],["2019/12/05/34-k8s一些命令总结/index.html","c89ab5806bddbdb7dd74a2c93153d7d3"],["2020/02/27/35-raid1盘数据迁移/index.html","1847c9c0a5eb56a98754fd9f4a1e501b"],["2020/02/27/36-centos单网卡配置多ip的几种方法/index.html","396baf4976b30bad2ff3e8837a925b1e"],["2020/03/10/37-mac一些常用命令/index.html","12a354eddc375a31963579df69db1029"],["2020/03/12/38-es集群节点出现overhead脱机的问题/index.html","f0d8633f2c31675d2acb58c2ffe9cc0f"],["2020/03/18/39-记一次nginx的request-time-和upstream-response-time差值很大问题/index.html","3a42556bc1f0ca6b6814ade875746374"],["2020/03/18/40-记一次跨域的nginx配置问题/index.html","6fc7efc27b305a1c38e04a10137a777e"],["2020/03/19/41-记一次es集群内存溢出的问题/index.html","794c13dc3e3284f6fe16917c026e5baf"],["2020/03/24/42-kubeadm安装高可用k8s集群/index.html","afb256ba65b6bdfa5a744d85387d38ba"],["2020/03/31/43-k8s的yaml配置名词解释-模板/index.html","98ebbeab5e44fa66ead141187c7f055c"],["2020/04/09/44-k8s部署fluentd-kafka-logstash-es/index.html","15b6e6cc5ade0e6245cab7bcfa8f46f7"],["2020/04/23/45-gitlab-ci与k8s结合/index.html","89550a147edef199424248cc094e2107"],["archives/2019/09/index.html","a87fee44fea3909ef025ae6dd52bdf1c"],["archives/2019/10/index.html","62677a9318821c5812e9a90b9fd53d27"],["archives/2019/11/index.html","c3efe3e699ccc8dd1160d3b764363f39"],["archives/2019/12/index.html","788c00122f1368cce4e7b5a067d7bb35"],["archives/2019/index.html","74d6d3e20cd4e3638254d3bbc9c2d231"],["archives/2019/page/2/index.html","7b65d84332304824adb4aa5f8e0163ec"],["archives/2020/02/index.html","9b169b3b4f31cfee75128c3527f043f9"],["archives/2020/03/index.html","8f68ade7622781cbc5a33f7772da5292"],["archives/2020/04/index.html","3c87d141656b655f673e0703d062bdf1"],["archives/2020/index.html","29a014fededf655f1ce17528e82b5e30"],["archives/index.html","5c9020c50ab0e226d71df13e450ef18c"],["archives/page/2/index.html","3ec331ac15d819243d246d8cffeda5b7"],["archives/page/3/index.html","150bb94a9677db37200a54cb7919a08a"],["categories/docker/Dockerfile/index.html","5363676dc9df6bb78f77c7e2754591e1"],["categories/docker/index.html","575978f02e1bf083bf152213ee60fdb5"],["categories/elk/elasticsearch5/index.html","8c1ab2795b3226c2ba53f7f3464e4a90"],["categories/elk/elasticsearch7/index.html","43b04fb1d71e24df9f060d0d666a4d57"],["categories/elk/index.html","aa9a7db1bd02659f092dbadb4207e0bd"],["categories/elk/logstash/index.html","b3a44ef477dc18a161fb4ab836c78e73"],["categories/elk7/filebeat7/index.html","34666921309e0027f5f24be2db006d55"],["categories/elk7/index.html","b0eb4014be77ef42f30809b7bf2a23ab"],["categories/fluentd/index.html","ac2fe01fc6d81405aba5630484dfc173"],["categories/gitlab-ci/index.html","4ada382d55481421d9f5728ef8bb52cc"],["categories/index.html","1a3508c055a663eb49b7fb532b2cf45a"],["categories/item2/index.html","9dfec9e56db087110a7bc9be668bf6c3"],["categories/k3s/index.html","2c7b0d75aa35c55e793bcd7628c99b76"],["categories/k3s/lnmp/index.html","e28334a01edb897d79d08e5e4c9a6876"],["categories/k8s/elk5/index.html","8aa0254c20535efe1dcd4950904bfad5"],["categories/k8s/elk7/index.html","2ac64d8559046101ef6296d5c0ed580d"],["categories/k8s/index.html","a6312dd9aefce2a1e99a09769d501549"],["categories/k8s/kubectl/index.html","3f16b5cd71158c9e82570d34be9cc691"],["categories/k8s/mysql/index.html","c79c8bedc4c6ca6a5cc8024e067a55c6"],["categories/k8s/storageclass/index.html","8b64284f8a50a8cb7b07a63c53506a17"],["categories/k8s/问题总结/index.html","edca79362a8a462721f0d26043cc5923"],["categories/linux/awk/index.html","5c3fb6f455d1dc6ade418d041af69e98"],["categories/linux/index.html","dcc368cd319f5aee2780f3d4e906255d"],["categories/linux/shell/index.html","757de226bce3ea0c1b9a2e8c2f20c9bd"],["categories/linux/systemd/index.html","97fb0c450607c7ff232ffad108ebea3c"],["categories/linux/问题总结/index.html","4298131aa383f10f882df145485d72f5"],["categories/mac/index.html","7419b186a6a557215d67d18f6bf60a11"],["categories/markdown/index.html","47197b22ba07d43f05e98d95565484f0"],["categories/mysql/index.html","dacfc66a09b800c430dbba71f352dd5d"],["categories/mysql/主从/index.html","3d18da29ffcea2376d1719d43483300e"],["categories/nfs/index.html","eccad50f3f564bb86f0f15cdcab6f9a1"],["categories/nginx/index.html","cead1403a6d60b8034044724b31bfddf"],["categories/nginx/问题总结/index.html","97ee09ebea3a253cae0a6d0bfc07dbe5"],["categories/php/index.html","0a5aa591d1d8f22f567944eb57ae40e6"],["categories/php/问题总结/index.html","a7f8953d7d866f702b5573a8b5815a40"],["categories/raid/index.html","8f4cca3b331ec56cb6dd5512435ef185"],["categories/博客/index.html","9409dbfab983e5680f625d5d0861dafc"],["categories/博客/美化/index.html","1db3c3c71d8d884fe799b249ede3813e"],["categories/存储/ceph/index.html","210a090fd357375624594ef476c5d76b"],["categories/存储/index.html","154a4a888596c0b59668019391cc5ea1"],["categories/存储/nfs/index.html","5088ca0493abaa4cda83e0b4f2c1f2b0"],["categories/技术文档/index.html","a9faeee517d5d971d269fab575a5e37c"],["categories/技术文档/page/2/index.html","5d10f80d61729600defcc04410290cc9"],["categories/有趣/index.html","53039f0bcf253de53fea59c11c4f1122"],["categories/有趣/二次元/index.html","7141182e400b7b683e033226cc9e614c"],["categories/流量复制工具/gor/index.html","edd3c446cf12a4a45e0b08668a5ccabe"],["categories/流量复制工具/index.html","2bf6ce5cab5f98a7ee5cba2f8145eee1"],["categories/网卡/index.html","761f46163178349dc5a1df933247d88f"],["categories/网址/index.html","5f4d0e35f2a02cd390a7525ec1922d7a"],["categories/网址/大佬博客/index.html","33fda30af9f07212d65c295faf15a7b1"],["categories/网址/收藏/index.html","d1635002d0aad7ee9f932a3343e95bce"],["css/main.css","04510ec2892e2fedc164997db6690659"],["images/16/容器的原理-1.png","1c184a092af6b6829c49ee20e70d132a"],["images/27/img1.png","74279f54a523a47f82a95a04ccfc9eb4"],["images/27/img2.jpg","93a32e8f4e52a9ea2a28b72a4223c2a9"],["images/38/gc1.jpg","dc31455119def3534b8b78213e6dcd29"],["images/38/gc2.jpg","ef5563c2f902a9b8550ed006747c94f5"],["images/38/gc3.jpg","3bef257bda43708e5c6d00598e5a6ccf"],["images/38/gc4.jpg","df24a1184fff79f3513b73fc1f4a6938"],["images/38/gc5.jpg","3e0fd4156b9666c1488b49d332875416"],["images/42/01.png","2a7524daaed26030a260df4e3fb58197"],["images/42/02.png","9c6ea26880ea0a13e900835c3fc75d65"],["images/42/03.png","d25c88fa33688ffe4a39aa59797e9e5d"],["images/42/04.png","8816231bb00c27abc8c97fc86797d474"],["images/45/01.png","95bacc819ae17e7e307034050799f3fb"],["images/45/02.png","be5e8c526b05c276cb9a1507a1a42323"],["images/45/03.png","c090ec8f8b444e05087d92b717e3ea8a"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["images/blog6/rancher-pv.png","d2a7e4bbfad5f71e75c9d5459cf5a464"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/docker1.jpg","5c611dd864017adeff648bca93d53f41"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/jixie-title.jpg","3ebd10201e23ecf68aba4524c020db0d"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["images/tcp三次握手图.png","32ddd8df35bd5762604327b25758370e"],["images/tcp四次挥手图.png","684b2b4a0286acadc32247d693dbd961"],["images/test1/test1.jpg","60b725f10c9c85c70d97880dfe8191b3"],["images/title1.jpg","fa2db043867c4c5654471e21ad36e5c0"],["images/title2.jpg","b6e57860ebc3fcdcf150a6a4cf3402ab"],["images/title3.jpg","f0b1554cfa4dd1193719dcfeb9e4de28"],["images/title4.jpg","6eb7bcbb846d1123e830488d75028df7"],["index.html","5e4d1d865cf7db199c386fcafb9d4565"],["js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["js/src/instantclick.js","865d92a4a07409b7fed739e6a108e9c4"],["js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["js/src/live2d.js","3359a94d733737dbdd290dd41f9cef0b"],["js/src/love.js","7bcfdb57debd43483174cf9e15ab37cc"],["js/src/love2.js","2b51ddac5207cba4153da31e9132414c"],["js/src/motion.js","706d085e6cfec6f3e92dedc590d68d68"],["js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["js/src/schemes/pisces.js","1bd23ed75238ebf11afe2aa6b1c3a25b"],["js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["js/src/utils.js","f06ffce70453ad3a4d9611fdde5ca6c3"],["lib/canvas-nest/canvas-nest.min.js","2361106788cc4ea719ed76f52b413e46"],["lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["live2d-widget/README.html","9941b5173b7915eb6158e62f02cd9ea3"],["live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["live2d-widget/autoload.js","fc45c81e48138bde62e7e742cbbdabb9"],["live2d-widget/demo/demo1.html","82a14d37dbd83931644a4ad6ea1f9eb2"],["live2d-widget/demo/demo2.html","6babb045ef6905badc0dbc5e0d98cede"],["live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["live2d-widget/waifu.css","c4dae5924f2fb0b5ea6ef26aaab80db9"],["page/2/index.html","e57e83bcecec9ddd0ff1cccc1d52eb16"],["page/3/index.html","a58ae9eb5c054fafb638aaa1cf883525"],["page/4/index.html","9a2d27997bf82ba82e3a5ee2f3f40e0d"],["page/5/index.html","1fbd6661bbeda6290c9ee2bb5bbd27cb"],["tags/awk/index.html","34f40cdcd60734719284619472e2987d"],["tags/ceph/index.html","9492971070e6ee2e7437987c4cc8072e"],["tags/cephfs/index.html","35364551d56ba7ef29a416645fb3f7cf"],["tags/cloud-native/index.html","b305eecab813bc2472f5d031ecd005c0"],["tags/docker/index.html","cbdfa02576645a64acfbc3889ec694b8"],["tags/elasticsearch5/index.html","06348a5ad90ee08eee6216bfdd20a402"],["tags/elasticsearch7/index.html","5bdbf095dc61c778dc382a1f305774bc"],["tags/elk/index.html","88af2cf0b0a6429bb774a4ad69e3923f"],["tags/elk5/index.html","fc7ffe4c10b84478fa70f69a3114ad58"],["tags/elk7/index.html","0e7cc0d9c39da576d690256cce1b4d9c"],["tags/filebeat7/index.html","4dff61b3bcb378af1c4e9f91997fe333"],["tags/fluentd/index.html","9603676639b291562781b3ddc3ff41de"],["tags/gitlab-runner/index.html","3cea2a3597ea0f71a5e1290d0bad42b4"],["tags/gor/index.html","eaa59def7bed33f95d574311a14e964e"],["tags/hexo6/index.html","0f0609e5820a61b5bd8cb455ffcff2a7"],["tags/hexo美化/index.html","ddf540f7e24034a055762454221c166c"],["tags/http流量复制工具/index.html","fb2729420c5aa4b41f818f0a5b287e61"],["tags/index.html","a09b77bf20aee65704731337e5a488a6"],["tags/ip/index.html","09128bb61054288dd7c0b4315734dbd6"],["tags/k3s/index.html","5cb4e2c1cb1b0da6bb6cf595557d2cbd"],["tags/k8s/index.html","21a14bfca445ae974891b9ea4cea7574"],["tags/k8s存储/index.html","38ac9b4fbeabd5298d430275db4ae2cb"],["tags/kubectl/index.html","65e2ed939024b1db12a23582f7eb2a90"],["tags/linux/index.html","1fb2353fc83d4d2692e37abc31a26cc1"],["tags/logstash/index.html","ef6ee72d50ae19eb12fe6ff4af38218f"],["tags/mac/index.html","756028ada9dfbd3e2494b353376045c6"],["tags/markdown/index.html","c377cc0bf01c15e945ff0aa3697f294b"],["tags/mysql/index.html","61f03058b3a9a5f02c1cdc6b5b32dfd3"],["tags/mysql5-7/index.html","b98f625f0f47030efdda2642a07b49a0"],["tags/nfs/index.html","723acb58ab8fe9f6f60efa394c536a57"],["tags/nginx/index.html","8817541124908b88faed4340754f9067"],["tags/php/index.html","e57ad51beff1ac0d7700b0b0ebe3dfa2"],["tags/php5/index.html","bd93080ae6c5fd59d8f140d494b8b5b5"],["tags/php7/index.html","b0c95b1cd065816d99ea50966174b590"],["tags/raid/index.html","206933434ee096eb2cc816397e9f43a3"],["tags/shell/index.html","f8e40e48bc87561e3d798cdb98f955bf"],["tags/storageclass/index.html","9916f3814d32ca9fc01f7bbce80545b8"],["tags/systemd/index.html","021de8877bebd87493b8b2feb019cf52"],["tags/云原生/index.html","b27181a627ad9a53380bc1a9c1114fe0"],["tags/大佬博客/index.html","14a328d379c393ab8de8fbe92cf50ae5"],["tags/收藏/index.html","a38b78cf34f4e8f79f177ec30fad81b8"],["tags/特效/index.html","1fbd1c6d7d3ed2d0df19a2f0a4888a37"],["tags/网址/index.html","e8d689e320c37925c9037c80580cd894"]];
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







