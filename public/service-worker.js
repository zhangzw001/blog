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

var precacheConfig = [["2019/09/19/2-部署elk7-2-0/index.html","68ffba439ce68bb9b1ee7052d7858766"],["2019/09/19/首次搭建hexo博客系统/index.html","5caf1318697c94a3e686060e75d8fdf2"],["2019/09/20/3-k8s遇到的一些问题统计总结/index.html","08dc4d53f8ac01b494221efd9a8dd397"],["2019/09/24/4-hexo鼠标移动和鼠标点击特效/index.html","c368bf93bc12b44504187285c94ec723"],["2019/09/24/5-hexo添加看板娘/index.html","7750969070f4544d95f130f0e68a3857"],["2019/09/26/6-ceph安装部署/index.html","29ee046c8500056bc1a8fd5623309b11"],["2019/09/26/7-k8s部署storageclass动态创建pv-nfs-rbd/index.html","cfda1e139f3cb925f56e3064a4e19cbe"],["2019/09/26/8-mysql5-7二进制部署/index.html","dd830cfdb29415f76e54c225a9167001"],["2019/09/26/9-linux遇到一些问题统计总结/index.html","0e89792d7ee17a46c3f1356ce640a1db"],["2019/09/27/10-centos6安装nginx1-16-php7-2/index.html","dd47e10816111b9abc44b4ad0cd244d5"],["2019/10/10/11-mysql简单记录/index.html","ac07b7fa0f760f135ea649e26f030484"],["2019/10/11/12-awk简单记录/index.html","907af709a4d3f3d71cd90463e86cffe6"],["2019/10/12/13-云原生博客汇总/index.html","5a84a3ceb3d0f1e3df01bdafbba70190"],["2019/10/15/14-mysql目录copy方式迁移/index.html","453aa86d3b83d3513cd31309881a570f"],["2019/10/16/15-docker简介和使用/index.html","8950a3e6c78bcbeae94de5c5e1447807"],["2019/10/16/16-dockerfile介绍/index.html","007d4813c1cea55157496f206d2a428b"],["2019/10/16/17-markdown一些写法记录/index.html","67d44204f8bb8b5a4da80c0b5b503e43"],["2019/10/17/18-收藏链接/index.html","6ed7af9fc41f62cbb89b2c12a8b44735"],["2019/10/17/19-shell中gt和>的区别/index.html","2155660e41523a88dc18e3e070a0d3c6"],["2019/10/24/20-k8s搭建mysql5-7-24主从/index.html","34d2b26c843dfaaa4a0ff0d12e7f2228"],["2019/10/28/21-流量复制工具gor/index.html","ebf75dddfac544d4bcf565f63f5ecfff"],["2019/10/28/22-es集群磁盘扩容/index.html","b1f277472b7c661e835b96e920893dbb"],["2019/10/29/23-mysql5-5主与mysql5-7从部署配置/index.html","06093db4133ffcdbc2b967ad3d350c85"],["2019/10/30/24-filebeat7收集mysql慢日志到es/index.html","99f71f0dffa51d38e831c52f6e808d21"],["2019/11/01/25-linux一些脚本汇总/index.html","fcd75acd422c21253b8b594c8ed2a189"],["2019/11/01/25-一些脚本汇总/index.html","6b9e045d8815f02551f53be35e47750b"],["2019/11/08/26-logstash配置/index.html","dd03c9c2a207cf0609418e24c20d627e"],["2019/11/21/27-k8s一条命令部署es5-2-0集群/index.html","e3fb995266e5ee023885268e208eed4d"],["2019/11/25/28-k8s1-16使用旧yml部署配置问题/index.html","82df25f785101b3c56157a0dc56f2ed3"],["2019/11/25/29-k3s集群部署项目报挂载nfs错误/index.html","f80355d41e35e077edcc4dcdb7237d68"],["2019/11/25/30-k3s集群部署项目报挂载nfs错误/index.html","3efc872295a92772d69320f4af0c8518"],["2019/11/26/31-systemd一些命令/index.html","fae89638d6a82604c83443cf3b48b5d5"],["2019/12/02/32-php错误502问题总结/index.html","7ffb924a76f0a830e1e860177c4eb1df"],["2019/12/03/29-k3s安装配置/index.html","a01b1e2d3a25353bd5fcaf312006cb31"],["2019/12/03/33-k3s1.16部署nginx+php5.2.17/index.html","cb0c36b340aac87bf6c8c9351bb3b646"],["2019/12/05/34-k8s一些命令总结/index.html","0c8ab5aedbca276af1f7d39940e63b91"],["2020/02/27/35-raid1盘数据迁移/index.html","f236c2ea483dd3e13dd0ca33dcdd5e72"],["2020/02/27/36-centos单网卡配置多ip的几种方法/index.html","cf8b76d5c4246167e74f33494532521b"],["2020/03/10/37-mac一些常用命令/index.html","1e2af72a24b1b4ceccdc812125a7ad4d"],["2020/03/12/38-es集群节点出现overhead脱机的问题/index.html","0f3fdb3230c509ba1fe3d88bb52c85a9"],["2020/03/18/39-记一次nginx的request-time-和upstream-response-time差值很大问题/index.html","4f632033286a00dd003c022ee777de23"],["2020/03/18/40-记一次跨域的nginx配置问题/index.html","f7ebd5e5e1654264eaa331ed5de1b488"],["2020/03/19/41-记一次es集群内存溢出的问题/index.html","5bf826e9fc68c27bab379382b7448f38"],["2020/03/24/42-kubeadm安装高可用k8s集群/index.html","bb34539eca176523246b909897612b69"],["2020/03/31/43-k8s的yaml配置名词解释-模板/index.html","a7f0c6643a1951361ae0a873a791164b"],["archives/2019/09/index.html","70cc815da120e6afc87e385f15ff6430"],["archives/2019/10/index.html","36d3db8624c32f802bb9d3a88424b95e"],["archives/2019/11/index.html","41a1d94a0cb1dc0e0af25d3647759925"],["archives/2019/12/index.html","06d62802d703fe68b556662ba0b539f5"],["archives/2019/index.html","420eaf801efa8b4eac8ffad588e15aa6"],["archives/2019/page/2/index.html","672356dbbbcab2087e6fb8e63433898c"],["archives/2020/02/index.html","cb035de7502823cf0c76bddb9f07c458"],["archives/2020/03/index.html","5fcf07c549e54a63183608a188baf679"],["archives/2020/index.html","4a9e057a735ae6f824ce86c712fd06c0"],["archives/index.html","ca2148902a65709f79fa93aa1bd1348b"],["archives/page/2/index.html","92d0b19c069ea1d4484320a7fbd3eafc"],["archives/page/3/index.html","7ea38d1390e625b4ea8bf34c5de609dd"],["categories/docker/Dockerfile/index.html","f7b52ca5cc122594692963e0620cf675"],["categories/docker/index.html","74ebb4c6c33d837f3d0e8dd3a1aaca66"],["categories/elk/elasticsearch5/index.html","fe18782e3cb8f68f68014985dda6c6a8"],["categories/elk/elasticsearch7/index.html","fedf215d59f6089d1584e50bd918cb08"],["categories/elk/index.html","156e5c23c394a4f59071461da5221f18"],["categories/elk/logstash/index.html","e705c5ab8d641e340456d0dd0e5c1eb2"],["categories/elk7/filebeat7/index.html","71d2945ce4633e031d85df628d8a9319"],["categories/elk7/index.html","2c80003b705be141dd5f41797ab66d81"],["categories/index.html","85b3bafc1dd9d79843537c290d1c053d"],["categories/item2/index.html","f0d77554460699d81fe0bdc784d2d18d"],["categories/k3s/index.html","f118df917e39e31cdaba51418fa00c88"],["categories/k3s/lnmp/index.html","f97f890ae06b49e7103bf778774afec4"],["categories/k8s/elk5/index.html","0578abddc25089af12228e415b9f034e"],["categories/k8s/elk7/index.html","9d0d11d226fcd01f3d509cc98b17a062"],["categories/k8s/index.html","5dcbaf2b7d114fa42ee53eb208067a12"],["categories/k8s/kubectl/index.html","5147042bdafde5257b2eb94c9ffaafef"],["categories/k8s/mysql/index.html","f5e929972df204a04b80a75efc4c6f16"],["categories/k8s/storageclass/index.html","5ecd7d805049d826fbe47eda95c76a22"],["categories/k8s/问题总结/index.html","6d4770955204cef56e9d671461b359ab"],["categories/linux/awk/index.html","016cfaab007daed624ccefc2dca4db7e"],["categories/linux/index.html","9a36e0a10b0c53cc08383e747645ed21"],["categories/linux/shell/index.html","2af793425b2e9093fe33e3672a09850f"],["categories/linux/systemd/index.html","0257aac9db3b3d13093692bb6d041a96"],["categories/linux/问题总结/index.html","3d59f989c78023cb95f6dd001ce9f90f"],["categories/mac/index.html","93fbce9ff769a7a3943fb0f025439106"],["categories/markdown/index.html","8ea93e28423b868392dd004d4a2f1e83"],["categories/mysql/index.html","0d44775381d1322b5283c834a4e52fb1"],["categories/mysql/主从/index.html","4b2f6b6bdfeeff2c37582cd5a9a33168"],["categories/nfs/index.html","551f47369ca357cdce166d2119eff92b"],["categories/nginx/index.html","363e36b865dbe02d3d1f3f4c2f15cb7e"],["categories/nginx/问题总结/index.html","e7a29baf0df74f9c682c6cc32437d4b1"],["categories/php/index.html","963125af20a505c58311153da403d8a2"],["categories/php/问题总结/index.html","1b35ef8863357e29fd344bf5167f1dbf"],["categories/raid/index.html","c65d2019ff4834ba91658047c90eb4d0"],["categories/博客/index.html","0accd8458ede07477d18f3b25eb12540"],["categories/博客/美化/index.html","3a7d0d18ff1932b88d477d59e888c8eb"],["categories/存储/ceph/index.html","1d59728269f7c46e56af2dc86a240444"],["categories/存储/index.html","d054fd117adc4eb1ee4728bb99cc0379"],["categories/存储/nfs/index.html","034dfbcfe4aef16ece79a7fa07b59b1e"],["categories/技术文档/index.html","ea2f0e760fcf345767c0fa1ea21d826b"],["categories/技术文档/page/2/index.html","d1d7962eaef6c88e82036175d7c8fc69"],["categories/有趣/index.html","da9722a48b421c35c3d87364d94f2258"],["categories/有趣/二次元/index.html","327b61e8175560fd7d1eb129ff0d4773"],["categories/流量复制工具/gor/index.html","089dbc451f38d89e98a825209a3e333d"],["categories/流量复制工具/index.html","eb13ee206dcb00381a9af74d954bc691"],["categories/网卡/index.html","caa0537e101d27b4804370f1032ad089"],["categories/网址/index.html","ee16584db2fd96842d581c3009977d3b"],["categories/网址/大佬博客/index.html","53e34ac07726ac3f6a00088bf3417ea8"],["categories/网址/收藏/index.html","11efeaee611e7a5ae4b43adaf7c05e6a"],["css/main.css","8f760074ac94d9e9140dc06280a54ea1"],["images/16/容器的原理-1.png","1c184a092af6b6829c49ee20e70d132a"],["images/27/img1.png","74279f54a523a47f82a95a04ccfc9eb4"],["images/27/img2.jpg","93a32e8f4e52a9ea2a28b72a4223c2a9"],["images/38/gc1.jpg","dc31455119def3534b8b78213e6dcd29"],["images/38/gc2.jpg","ef5563c2f902a9b8550ed006747c94f5"],["images/38/gc3.jpg","3bef257bda43708e5c6d00598e5a6ccf"],["images/38/gc4.jpg","df24a1184fff79f3513b73fc1f4a6938"],["images/38/gc5.jpg","3e0fd4156b9666c1488b49d332875416"],["images/42/01.png","2a7524daaed26030a260df4e3fb58197"],["images/42/02.png","9c6ea26880ea0a13e900835c3fc75d65"],["images/42/03.png","d25c88fa33688ffe4a39aa59797e9e5d"],["images/42/04.png","8816231bb00c27abc8c97fc86797d474"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["images/blog6/rancher-pv.png","d2a7e4bbfad5f71e75c9d5459cf5a464"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/docker1.jpg","5c611dd864017adeff648bca93d53f41"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/jixie-title.jpg","3ebd10201e23ecf68aba4524c020db0d"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["images/tcp三次握手图.png","32ddd8df35bd5762604327b25758370e"],["images/tcp四次挥手图.png","684b2b4a0286acadc32247d693dbd961"],["images/test1/test1.jpg","60b725f10c9c85c70d97880dfe8191b3"],["images/title1.jpg","fa2db043867c4c5654471e21ad36e5c0"],["images/title2.jpg","b6e57860ebc3fcdcf150a6a4cf3402ab"],["images/title3.jpg","f0b1554cfa4dd1193719dcfeb9e4de28"],["images/title4.jpg","6eb7bcbb846d1123e830488d75028df7"],["index.html","24f1dc60f66c39aecb5ef3bc080f3abe"],["js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["js/src/instantclick.js","865d92a4a07409b7fed739e6a108e9c4"],["js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["js/src/live2d.js","3359a94d733737dbdd290dd41f9cef0b"],["js/src/love.js","7bcfdb57debd43483174cf9e15ab37cc"],["js/src/love2.js","2b51ddac5207cba4153da31e9132414c"],["js/src/motion.js","706d085e6cfec6f3e92dedc590d68d68"],["js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["js/src/schemes/pisces.js","1bd23ed75238ebf11afe2aa6b1c3a25b"],["js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["js/src/utils.js","f06ffce70453ad3a4d9611fdde5ca6c3"],["lib/canvas-nest/canvas-nest.min.js","2361106788cc4ea719ed76f52b413e46"],["lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["live2d-widget/README.html","9941b5173b7915eb6158e62f02cd9ea3"],["live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["live2d-widget/autoload.js","fc45c81e48138bde62e7e742cbbdabb9"],["live2d-widget/demo/demo1.html","82a14d37dbd83931644a4ad6ea1f9eb2"],["live2d-widget/demo/demo2.html","6babb045ef6905badc0dbc5e0d98cede"],["live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["live2d-widget/waifu.css","c4dae5924f2fb0b5ea6ef26aaab80db9"],["page/2/index.html","0ae96647adf121e413569717c4d951eb"],["page/3/index.html","6be4b18448b16f659be0b32521ace7fe"],["page/4/index.html","dd80338b39959109c735b353e64b54d9"],["page/5/index.html","efd838fb181c95eafa8b7d0ffba1a4c3"],["tags/awk/index.html","37d0a5fd4a5f82f322ef950d8baa0436"],["tags/ceph/index.html","d21f4191b805b21635bbd4f0c86a096c"],["tags/cephfs/index.html","674963d3bf1b0dc03b04580523c04d1f"],["tags/cloud-native/index.html","95be7d701bd49e1cd1f05f10dd6d3f22"],["tags/docker/index.html","270b546d70c08e066cdd25d429524bde"],["tags/elasticsearch5/index.html","336b22248b17fe290919260f942d21f9"],["tags/elasticsearch7/index.html","e5e7854fb27f637b531b9fb623ed0d29"],["tags/elk/index.html","c1f159002862a651449c9ac4c44b1452"],["tags/elk5/index.html","6adaa5a3cd764bd84b39aaa81301269d"],["tags/elk7/index.html","9e58c0aad38ab91404b2238ef3186c60"],["tags/filebeat7/index.html","2c3e8a21081be0f1ef5aa6c256d8249e"],["tags/gor/index.html","ccbdabed5905afe0e3f8a9c95b94261c"],["tags/hexo6/index.html","48e3af30dc56f5ffcdd8ed3b3cdbde65"],["tags/hexo美化/index.html","42468d7a8a0452f5c44d5124f0cf7eb3"],["tags/http流量复制工具/index.html","bbb8ef92554cda214c6b3bb191b4e388"],["tags/index.html","9cea3536ef3c2816dd0a8403d6797c99"],["tags/ip/index.html","92efd360f8248f2f08d3c11f317b649e"],["tags/k3s/index.html","5fd2e1ba3a85ea7b8b1a924ec408f112"],["tags/k8s/index.html","87dff0c0fcef59353064f0c393259bbf"],["tags/k8s存储/index.html","f93bbeb12b29500b288e973ce5055b1d"],["tags/kubectl/index.html","5b44f163beb864f825d74df2182be160"],["tags/linux/index.html","ce2a9f5ec74f8b698fa79dacae4c9183"],["tags/logstash/index.html","e09c10ce81ea2bd0d53b1ceb34da86e5"],["tags/mac/index.html","3de29da98d0c1fb3d9b9204da0e58b9a"],["tags/markdown/index.html","345b9bfb6189ecd177e6106ca52fddbd"],["tags/mysql/index.html","1119316481b98dacf04263556b9e61f7"],["tags/mysql5-7/index.html","947f405dfc34ac37df956dc65d832a92"],["tags/nfs/index.html","ab9cd402543ffde1bb898efeb54b2ceb"],["tags/nginx/index.html","fec1891a445237b0184d53a0b16598d6"],["tags/php/index.html","2e9119bbeef8ed2669dbed9281b487ba"],["tags/php5/index.html","a021ca1fca72ef4383bcf324214eca22"],["tags/php7/index.html","773a1f48cb2d8d9d6444b60f8ef9e6c0"],["tags/raid/index.html","205710303f1ff28adca7f34b146cacbb"],["tags/shell/index.html","a7c41e423e970dac157757fda739aea5"],["tags/storageclass/index.html","301ad92288e1d9f86e445c61b27d0e68"],["tags/systemd/index.html","5583eac478544ecf63c9984254856146"],["tags/云原生/index.html","5191f4250d1c3559e91683790385a9e2"],["tags/大佬博客/index.html","e2f59d95e867642a6398bf7558cf861f"],["tags/收藏/index.html","baf5a2fc5cbf94ff3e5ffb5b845ff17d"],["tags/特效/index.html","d62d377dc32b42eef6e14ecd594c827a"],["tags/网址/index.html","7e21c326d6cdf4b8f1088d10fab4c047"]];
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







