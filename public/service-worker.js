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

var precacheConfig = [["2019/09/19/2-部署elk7-2-0/index.html","756b1b4bcde072d032110b61359a47a6"],["2019/09/19/首次搭建hexo博客系统/index.html","89531b89ba048c596536c45dcc982247"],["2019/09/20/3-k8s遇到的一些问题统计总结/index.html","0bb7d405ee635aefdfbaa840ddb0ce37"],["2019/09/24/4-hexo鼠标移动和鼠标点击特效/index.html","0016f6ecd29f4837d472efe84dd34085"],["2019/09/24/5-hexo添加看板娘/index.html","011617aec4c89f92ccd4a25a209774a5"],["2019/09/26/6-ceph安装部署/index.html","558fdb5046a51a0cf15a01be61d31d13"],["2019/09/26/7-k8s部署storageclass动态创建pv-nfs-rbd/index.html","19c186bf018ba174c5c2acc12b0125ce"],["2019/09/26/8-mysql5-7二进制部署/index.html","8e332f0ce5058c3122e101da022f231f"],["2019/09/26/9-linux遇到一些问题统计总结/index.html","2ed48b663df708e1b0f19415cb407285"],["2019/09/27/10-centos6安装nginx1-16-php7-2/index.html","6b92656b3ffdcc7c374fb7b7c79fc2ac"],["2019/10/10/11-mysql简单记录/index.html","11c940ddf69f18bf2b4e39b85f3faef4"],["2019/10/11/12-awk简单记录/index.html","929ed7a76a7e54579de9700f39a36d61"],["2019/10/12/13-云原生博客汇总/index.html","bed3d25ed643543a76e16f5762670956"],["2019/10/15/14-mysql目录copy方式迁移/index.html","69701109e9fb0117cd89a12b9b2f085f"],["2019/10/16/15-docker简介和使用/index.html","5b605a728c135aa8ccb2c5e1acb0b608"],["2019/10/16/16-dockerfile介绍/index.html","0d5efda457d08a145a1574293db44561"],["2019/10/16/17-markdown一些写法记录/index.html","fea4cb99b77eaf6b6caf190bd530cac3"],["2019/10/17/18-收藏链接/index.html","21203e999eb7c95cdc27edaf85fb9286"],["2019/10/17/19-shell中gt和>的区别/index.html","e30d788d2c3ae0f4e94563e999724494"],["2019/10/24/20-k8s搭建mysql5-7-24主从/index.html","8d5dd8f18f8e7413f95bb59d17e04aea"],["2019/10/28/21-流量复制工具gor/index.html","bc6f76860039eab284311684548e34c5"],["2019/10/28/22-es集群磁盘扩容/index.html","fc7d24f51f91d6f6f5a08a90aec46b59"],["2019/10/29/23-mysql5-5主与mysql5-7从部署配置/index.html","811d0275fac97510e863091863efa7fb"],["2019/10/30/24-filebeat7收集mysql慢日志到es/index.html","1bf5a16b6a24f7fcfc8f847de1fde6ae"],["2019/11/01/25-linux一些脚本汇总/index.html","e21dcfed8ed11abcccd729e881a1120e"],["2019/11/01/25-一些脚本汇总/index.html","37b79f7c3fc8ab26997c38c725a961da"],["2019/11/08/26-logstash配置/index.html","0a01d36a85cdb461db2af93f31b297f8"],["2019/11/21/27-k8s一条命令部署es5-2-0集群/index.html","da79a15c219cb51ff1d8665cdf832684"],["2019/11/25/28-k8s1-16使用旧yml部署配置问题/index.html","dcb46b47c744839b30ee29516faf361b"],["2019/11/25/29-k3s集群部署项目报挂载nfs错误/index.html","9bb67d024541fcb1291febbb27b7c2de"],["2019/11/25/30-k3s集群部署项目报挂载nfs错误/index.html","4e0538ac9368ccc57b4c90d930e648bb"],["2019/11/26/31-systemd一些命令/index.html","9203b78c09608de0053c47a418fc090e"],["2019/12/02/32-php错误502问题总结/index.html","ea666e1dd646c2f03db02e5e1d828f16"],["2019/12/03/29-k3s安装配置/index.html","913c259ae79bb072a4783c76f13edbf9"],["2019/12/03/33-k3s1.16部署nginx+php5.2.17/index.html","6a53b094d3a9ee62a0a31d211529eb19"],["2019/12/05/34-k8s一些命令总结/index.html","71b1e3a5ca1c5ffdd11e19c43047c94a"],["2020/02/27/35-raid1盘数据迁移/index.html","4cd80bf3b78cbf26363b1ccfe9b86e83"],["2020/02/27/36-centos单网卡配置多ip的几种方法/index.html","2dcbec5855c8e0971feb2ac971b39e85"],["2020/03/10/37-mac一些常用命令/index.html","309c9d2d5b6728f5fcc1463dc81eba1b"],["2020/03/12/38-es集群节点出现overhead脱机的问题/index.html","a07613ece2ea95be073e7bcbf4786465"],["2020/03/18/39-记一次nginx的request-time-和upstream-response-time差值很大问题/index.html","f2b8ee2d5b2a8dc5e6af16dd92856575"],["2020/03/18/40-记一次跨域的nginx配置问题/index.html","9738e7b708e877fe6fd1c7c4b3237e2b"],["2020/03/19/41-记一次es集群内存溢出的问题/index.html","6948bc8377624e8485935485173fe9a0"],["2020/03/24/42-kubeadm安装高可用k8s集群/index.html","dc0e8691988106cd925ec1aa5819f080"],["2020/03/31/43-k8s的yaml配置名词解释-模板/index.html","9cc54088394c89afcbf5efa9a255bd7d"],["2020/04/09/44-k8s部署fluentd-kafka-logstash-es/index.html","a8c9970f427b6f6446eb66505ffbe72e"],["2020/04/23/45-gitlab-ci与k8s结合/index.html","a396e5387adea3e2d484a0682802beba"],["2020/05/13/46-docker安装nginx第三方模块/index.html","1873c8c7b8343646ab4008ccea62f8d0"],["archives/2019/09/index.html","e73986b4eb7df777689175bf9342fd4c"],["archives/2019/10/index.html","6e881cd19bb37aae1412d69e51bfc7cd"],["archives/2019/11/index.html","5eed6b87b691690c01c6f2d0beb56024"],["archives/2019/12/index.html","fbc58f3fbd702f472e376d2e3ffdaac2"],["archives/2019/index.html","7978423bffa156a56b0e0275c25a052a"],["archives/2019/page/2/index.html","75ea2a058669e1cf46e1bebda7cfde50"],["archives/2020/02/index.html","92b69eedd577fa86082c70b92b3f5663"],["archives/2020/03/index.html","a44c6a4d2464631ba88ac75ce5669450"],["archives/2020/04/index.html","bbfd2c459eeed99326663ce5462a3611"],["archives/2020/05/index.html","6bd206c68b4caf6db7de829c0d08e588"],["archives/2020/index.html","e3858822f0eb8e2eecaa5b6796ba0d3f"],["archives/index.html","108b8425199075db4d20163b59802e2b"],["archives/page/2/index.html","ba797ac1950c72d3a224d054262228cc"],["archives/page/3/index.html","4019bff8afea8354ed57b949f02b87c4"],["categories/docker/Dockerfile/index.html","97b48c6de43caa3809cc88a54c56daff"],["categories/docker/index.html","b76adc6a6ba730bc8021c19a268636f6"],["categories/elk/elasticsearch5/index.html","dde7a0c52689bcc906dca79f55acd474"],["categories/elk/elasticsearch7/index.html","44163149daeb4fd95ec37aa408e01bc5"],["categories/elk/index.html","c6649b07c09e3942273b8ef3a654fd43"],["categories/elk/logstash/index.html","289d2fed75c61065076dc5e4cb7aac23"],["categories/elk7/filebeat7/index.html","0ff00aa7c27878a8972a6759e209736f"],["categories/elk7/index.html","eafd95af6b907de5c22ba557874e2c32"],["categories/fluentd/index.html","dc3fa4c27e43227aabecb97cb3aae613"],["categories/gitlab-ci/index.html","c4f3dfec55e87b1c0b79269a27d499e3"],["categories/index.html","9eb814e6a81f6f87d4bb30b9dd94c3e3"],["categories/item2/index.html","4871caaf3f26e8b768c9cecac4a02478"],["categories/k3s/index.html","8e05b5bae7e6e6881fbdf7c1ef55c2e4"],["categories/k3s/lnmp/index.html","4c7015864fd700ba6e8c85a7f946977f"],["categories/k8s/elk5/index.html","17cdb3d4c24bfa015bded0998ffb075f"],["categories/k8s/elk7/index.html","c2751bed034e78ee96f8feb45a107ce8"],["categories/k8s/index.html","7683155cd673f6e92b10dc95e6f53d68"],["categories/k8s/kubectl/index.html","6f2251993c2c524509556fd90a291b15"],["categories/k8s/mysql/index.html","47da5dc42a9de39290d67d587cfe3388"],["categories/k8s/storageclass/index.html","36636300c1c0d2bf1c04ef47b3ae358a"],["categories/k8s/问题总结/index.html","b45d64c4b59b4a61bbdb1ee7c87f192c"],["categories/linux/awk/index.html","e7c95466a5d59af4e70f4e8200f7d5f1"],["categories/linux/index.html","6d0be18404be7d3b469d33b3b7803d8c"],["categories/linux/shell/index.html","23d6cb8c583aa71a27a8bf15b78fb2c9"],["categories/linux/systemd/index.html","eb408f3c6c5dacae43c173081b5fb9a6"],["categories/linux/问题总结/index.html","1484889e391e54086c01b6c32d482161"],["categories/mac/index.html","c9eb16e9c5e9b02cdf5a559e803f4fac"],["categories/markdown/index.html","b5b93240ddf528c1ccd4f52af3507cc8"],["categories/mysql/index.html","0c712e60150da6b1c8b6230f9f65d7ab"],["categories/mysql/主从/index.html","dadf6124259b9f164aa8a15b7d9ab56b"],["categories/nfs/index.html","7ca0554d8e2c529958616fb39cddcb28"],["categories/nginx/index.html","a4f7b74bcd440aa7f61bb329f94bab20"],["categories/nginx/问题总结/index.html","1566507c430c81aea7220edafa81e1d9"],["categories/php/index.html","2768842f9b372caf7458c87d8a4e39cb"],["categories/php/问题总结/index.html","48eb4194123b9021818e4101b644bc7c"],["categories/raid/index.html","05418ed8056486e87203bf5774077427"],["categories/博客/index.html","8bb27f5cef59543bd432e4b32a37fc5a"],["categories/博客/美化/index.html","e94f55b4148d09bb3f044129a932b2a8"],["categories/存储/ceph/index.html","36357711147408e2ccba0c83c342d15d"],["categories/存储/index.html","3588f55d84a401b547bdcd786fbacc64"],["categories/存储/nfs/index.html","51bcdd1d3436e3477b4d0f35dbdabc64"],["categories/技术文档/index.html","5a5f8ea6fb414ca00d4b923c2f622eeb"],["categories/技术文档/page/2/index.html","5e09fae1c2e4cf4f02f8767ead4984f4"],["categories/有趣/index.html","167bcadb0f24d985e10cc4549b2a869e"],["categories/有趣/二次元/index.html","332cdd3609d1b2369a8bed01a442e4a2"],["categories/流量复制工具/gor/index.html","421babe25f24fa0ce02e8df2e041ec22"],["categories/流量复制工具/index.html","0a268d44dba2de22f86fb7b376b59717"],["categories/网卡/index.html","bd5754c8b9357f4d79f8cf71185fad4d"],["categories/网址/index.html","2f9f1aa00589775d7a82d107d563cbf0"],["categories/网址/大佬博客/index.html","7cee764e0367ef85ffb09e42127c994f"],["categories/网址/收藏/index.html","454d223a6d72ab6bb88ccee975c714a5"],["css/main.css","abe6a0cd521af3c3d16095d0443dbea3"],["images/16/容器的原理-1.png","1c184a092af6b6829c49ee20e70d132a"],["images/27/img1.png","74279f54a523a47f82a95a04ccfc9eb4"],["images/27/img2.jpg","93a32e8f4e52a9ea2a28b72a4223c2a9"],["images/38/gc1.jpg","dc31455119def3534b8b78213e6dcd29"],["images/38/gc2.jpg","ef5563c2f902a9b8550ed006747c94f5"],["images/38/gc3.jpg","3bef257bda43708e5c6d00598e5a6ccf"],["images/38/gc4.jpg","df24a1184fff79f3513b73fc1f4a6938"],["images/38/gc5.jpg","3e0fd4156b9666c1488b49d332875416"],["images/42/01.png","2a7524daaed26030a260df4e3fb58197"],["images/42/02.png","9c6ea26880ea0a13e900835c3fc75d65"],["images/42/03.png","d25c88fa33688ffe4a39aa59797e9e5d"],["images/42/04.png","8816231bb00c27abc8c97fc86797d474"],["images/45/01.png","95bacc819ae17e7e307034050799f3fb"],["images/45/02.png","be5e8c526b05c276cb9a1507a1a42323"],["images/45/03.png","c090ec8f8b444e05087d92b717e3ea8a"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["images/blog6/rancher-pv.png","d2a7e4bbfad5f71e75c9d5459cf5a464"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/docker1.jpg","5c611dd864017adeff648bca93d53f41"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/jixie-title.jpg","3ebd10201e23ecf68aba4524c020db0d"],["images/k8s_3part.jpg","8c72197f0daf342bc8b87d908527d638"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["images/tcp三次握手图.png","32ddd8df35bd5762604327b25758370e"],["images/tcp四次挥手图.png","684b2b4a0286acadc32247d693dbd961"],["images/test1/test1.jpg","60b725f10c9c85c70d97880dfe8191b3"],["images/title1.jpg","fa2db043867c4c5654471e21ad36e5c0"],["images/title2.jpg","b6e57860ebc3fcdcf150a6a4cf3402ab"],["images/title3.jpg","f0b1554cfa4dd1193719dcfeb9e4de28"],["images/title4.jpg","6eb7bcbb846d1123e830488d75028df7"],["index.html","ab54ebb819b0e8d981555026c40ff0c4"],["js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["js/src/instantclick.js","865d92a4a07409b7fed739e6a108e9c4"],["js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["js/src/live2d.js","3359a94d733737dbdd290dd41f9cef0b"],["js/src/love.js","7bcfdb57debd43483174cf9e15ab37cc"],["js/src/love2.js","2b51ddac5207cba4153da31e9132414c"],["js/src/motion.js","706d085e6cfec6f3e92dedc590d68d68"],["js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["js/src/schemes/pisces.js","1bd23ed75238ebf11afe2aa6b1c3a25b"],["js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["js/src/utils.js","f06ffce70453ad3a4d9611fdde5ca6c3"],["lib/canvas-nest/canvas-nest.min.js","2361106788cc4ea719ed76f52b413e46"],["lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["live2d-widget/README.html","9941b5173b7915eb6158e62f02cd9ea3"],["live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["live2d-widget/autoload.js","fc45c81e48138bde62e7e742cbbdabb9"],["live2d-widget/demo/demo1.html","82a14d37dbd83931644a4ad6ea1f9eb2"],["live2d-widget/demo/demo2.html","6babb045ef6905badc0dbc5e0d98cede"],["live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["live2d-widget/waifu.css","c4dae5924f2fb0b5ea6ef26aaab80db9"],["page/2/index.html","e0a3eb70972128025d18367892ead971"],["page/3/index.html","3dd5892aaf83736af98ba7dc072f7901"],["page/4/index.html","0999f57cc9f22bcd13abed9eaf6b20c3"],["page/5/index.html","6bc3edf851e2922f0f07ac2aabb8a213"],["tags/awk/index.html","c0a6c65cfdf4b3ada591f50c4d79cc4e"],["tags/ceph/index.html","887af8bb6db6b25157629dbff91684a5"],["tags/cephfs/index.html","75ad843b586e223d6e783a6c08bd0e14"],["tags/cloud-native/index.html","3f6529f0bcc54ba885ed1e65ecd7d067"],["tags/docker/index.html","7573c9950912868d3168ed544e135c64"],["tags/elasticsearch5/index.html","9e526c01c9e6e592e43834496ecb95db"],["tags/elasticsearch7/index.html","6e747cbf95845bebf822033eb7c3f58a"],["tags/elk/index.html","9f80d46c60a546e134820348d8a82e03"],["tags/elk5/index.html","db7e99b27e30b6f77a0b9c7b2342b20a"],["tags/elk7/index.html","69c81cb233bbaf1984ca830186a92123"],["tags/filebeat7/index.html","09935f212395e3d59453fc12d6bec4ce"],["tags/fluentd/index.html","d88ad0373e74b1ac40a6a0376d3fad7b"],["tags/gitlab-runner/index.html","c3cd4900c810f5176ba90bfdb177e6d4"],["tags/gor/index.html","cb3e19a3edeb397bc5dbb352f95d379e"],["tags/hexo6/index.html","ae1929aaec40582f3de9d725ddeac944"],["tags/hexo美化/index.html","6000d2c382561092ef733c9d542c9959"],["tags/http流量复制工具/index.html","bcf0101ea963d5fffbdda8326f6a3678"],["tags/index.html","6de53cb6b22a0e04930df9c1ec98800e"],["tags/ip/index.html","dad04ce4e0c4fd738679f6cf7abcaab5"],["tags/k3s/index.html","942480d8a4892d39ece8559edcb17786"],["tags/k8s/index.html","22ba7f87461fc94aa87f2be5213fd890"],["tags/k8s存储/index.html","9ab03e334602a5bc9f8386f7c82bfec6"],["tags/kubectl/index.html","240a9b7247ca6f9fc1b5601aca97daaa"],["tags/linux/index.html","73c79732bafcd91b71710ae18351331f"],["tags/logstash/index.html","65a46c3353e3f99785fdad9ce3ae259c"],["tags/mac/index.html","9ba8322656f801c2ac5460e5f6d6ef2d"],["tags/markdown/index.html","ff4d6abf607216a15c7b5adea1fa4945"],["tags/mysql/index.html","db94b4d47c94b9019f1ece6befb59f27"],["tags/mysql5-7/index.html","66b2d01b5705b58dca161716e44c3283"],["tags/nfs/index.html","171abae2b4448635049d1d1cc583fc3a"],["tags/nginx/index.html","9df69304ac28ba8416d7745b67cf9447"],["tags/php/index.html","19975a64494f52101dd9cc3051904d8c"],["tags/php5/index.html","db789ae8fcef22782a0f8ba730ca7fe5"],["tags/php7/index.html","9c3990151dce7a4e3b726e987e010de9"],["tags/raid/index.html","4abae5af12ba458a67b0f45b5f91a5e0"],["tags/shell/index.html","728c39f135bfdbb18b7ce4272e37da52"],["tags/storageclass/index.html","3168e62886ada987b75b14ad4ad6987e"],["tags/systemd/index.html","2d9955e63e3ed0beaf1034f42e101602"],["tags/云原生/index.html","8a978c7de4360a1e1ff36675ca749707"],["tags/大佬博客/index.html","4c042d558cab18e05f39b5fc22e6e0b2"],["tags/收藏/index.html","9f9db959a841989be27dbc197feb0075"],["tags/特效/index.html","85f4895e98fbc094507f770f5630c6ea"],["tags/网址/index.html","d754426ebe1ff28ed5cb2573f5c7994a"]];
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







