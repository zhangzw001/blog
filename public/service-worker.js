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

var precacheConfig = [["2019/09/19/2-部署elk7-2-0/index.html","b89f06480d4d980922e1efc458c2cc77"],["2019/09/19/首次搭建hexo博客系统/index.html","4d710009302fbfa9f417d1357780a2e5"],["2019/09/20/3-k8s遇到的一些问题统计总结/index.html","3ecf917cbf815d996863a269d2c30397"],["2019/09/24/4-hexo鼠标移动和鼠标点击特效/index.html","5adbf4c4dc9c7f979c9b0a9f0743c91e"],["2019/09/24/5-hexo添加看板娘/index.html","78908c9e22f76211137413d39ee18650"],["2019/09/26/6-ceph安装部署/index.html","0e92dedbc7ea14c338628a92001297f9"],["2019/09/26/7-k8s部署storageclass动态创建pv-nfs-rbd/index.html","2f5fb7457ba1c06852d034ebcf76e903"],["2019/09/26/8-mysql5-7二进制部署/index.html","f33b92ece923ff7d7f324545b0db6cdb"],["2019/09/26/9-linux遇到一些问题统计总结/index.html","ae224620559ab28e93ee93352b286ce5"],["2019/09/27/10-centos6安装nginx1-16-php7-2/index.html","13efcc48f4fd2b9d4d6d372ff9f2b3ff"],["2019/10/10/11-mysql简单记录/index.html","b5aa6ad40654f3b7779078c72db634c9"],["2019/10/11/12-awk简单记录/index.html","cd08f086800571648db65e9e7221a733"],["2019/10/12/13-云原生博客汇总/index.html","9c15920a3e41c9efd08f505f4a218915"],["2019/10/15/14-mysql目录copy方式迁移/index.html","dbb172bdb0cb8c7fbf3639d4ae20898d"],["2019/10/16/15-docker简介和使用/index.html","bfa445159a7c759c31d9a5fa5aec90be"],["2019/10/16/16-dockerfile介绍/index.html","efc9ebd34b787ca0fffe0ded9b70aba3"],["2019/10/16/17-markdown一些写法记录/index.html","5d5cfe93eeb40b4383cac24e052b49a9"],["2019/10/17/18-收藏链接/index.html","100189dea99cffe426aaee9cf9dc4c14"],["2019/10/17/19-shell中gt和>的区别/index.html","7a5e2b4f9aa9e98a504e40be3e720f25"],["2019/10/24/20-k8s搭建mysql5-7-24主从/index.html","1abc832bdde7b5ce678097b077304de3"],["2019/10/28/21-流量复制工具gor/index.html","5f39d74a8e5931897549039dd0ae62ef"],["2019/10/28/22-es集群磁盘扩容/index.html","993df5faf2dc898a98c11e521d7321a3"],["2019/10/29/23-mysql5-5主与mysql5-7从部署配置/index.html","6fc5b7ee58929cdcf51da3abdcca14ee"],["2019/10/30/24-filebeat7收集mysql慢日志到es/index.html","1a5c200f966a0ebc8bd363355d9af29c"],["2019/11/01/25-linux一些脚本汇总/index.html","4927014c0c67ae3a065a92cb9ea34456"],["2019/11/01/25-一些脚本汇总/index.html","3ca5b9ba83669c1e80afdc264bbce350"],["2019/11/08/26-logstash配置/index.html","8db0a12b4a104080718bdc8da135eb7b"],["2019/11/21/27-k8s一条命令部署es5-2-0集群/index.html","3e38005e3764525addce65d09dd6321c"],["2019/11/25/28-k8s1-16使用旧yml部署配置问题/index.html","e9e8a3d97efd53cd3216bd4216f72e84"],["2019/11/25/29-k3s集群部署项目报挂载nfs错误/index.html","71832a9570bfd3bceb354a40b9567fc2"],["2019/11/25/30-k3s集群部署项目报挂载nfs错误/index.html","923ee4cf42e1ec33be65894ab8aafcd8"],["2019/11/26/31-systemd一些命令/index.html","cb2dfdb200977c69f714627567091f19"],["2019/12/02/32-php错误502问题总结/index.html","3c0583be08c9a20bab563c82bd6fbaf7"],["2019/12/03/29-k3s安装配置/index.html","b73a5ae93e92fb8d6b3b1cc843d81614"],["2019/12/03/33-k3s1.16部署nginx+php5.2.17/index.html","58cd91a1ae269e74829fb3f83bfcad67"],["2019/12/05/34-k8s一些命令总结/index.html","ab641706c3c05e431a57426587f00b95"],["2020/02/27/35-raid1盘数据迁移/index.html","cc70c0b01a69da65e21229bf80ce2072"],["2020/02/27/36-centos单网卡配置多ip的几种方法/index.html","43510b07877ca3c8fedc9961aa837e7e"],["2020/03/10/37-mac一些常用命令/index.html","71fe3bbc4ef4494a231b774ee0c45508"],["2020/03/12/38-es集群节点出现overhead脱机的问题/index.html","a1956a8d001ac28a0578c4b1d91508e3"],["2020/03/18/39-记一次nginx的request-time-和upstream-response-time差值很大问题/index.html","14834f47077297d385fd888468fb463f"],["2020/03/18/40-记一次跨域的nginx配置问题/index.html","f5410fe52f4ca4bd08ef26eb26c97768"],["2020/03/19/41-记一次es集群内存溢出的问题/index.html","51a5cef48886a25d8d66da276dd0dae1"],["2020/03/24/42-kubeadm安装高可用k8s集群/index.html","455ce3a6b486b9c2f6117abc70ea86ed"],["2020/03/31/43-k8s的yaml配置名词解释-模板/index.html","62923dc16f856679b8feca4066fd9829"],["2020/04/09/44-k8s部署fluentd-kafka-logstash-es/index.html","ab04583a0c48ab89fe0addd3a1c6f341"],["archives/2019/09/index.html","981df5ae746e496aff2fe7d1afd4bfbe"],["archives/2019/10/index.html","1b66f1b61e121e1bcba583b6d2ff02de"],["archives/2019/11/index.html","65aae1c2aa90b0113929efc7663081cc"],["archives/2019/12/index.html","47f1cf03e569cb417476f2fb46fa959e"],["archives/2019/index.html","ae6d2be2b9009a842ce7b9028d04695d"],["archives/2019/page/2/index.html","f31c67318e53c8e6531bee0226bcfd02"],["archives/2020/02/index.html","56200e088ababe6e0045a04d95014982"],["archives/2020/03/index.html","90c2b128bb2a33e13c9115ddde1a19bc"],["archives/2020/04/index.html","9e85e86f59f24ba3386c80d25d717bd3"],["archives/2020/index.html","d9c3b24524ebdbf6b92815f6a902df96"],["archives/index.html","f8fc0b8cb141dd0fdfb9d48b4f14a099"],["archives/page/2/index.html","e8bfb0dbf3448215184d0a338f9fd273"],["archives/page/3/index.html","8c8f1e3a298976a1603a3572da234ad5"],["categories/docker/Dockerfile/index.html","f1c72133b6e89dd052b2873f057c6161"],["categories/docker/index.html","c36a940785405c3dc2883f0fb3e21d27"],["categories/elk/elasticsearch5/index.html","0dc4964960bd7c3b56701a45c72e6ad6"],["categories/elk/elasticsearch7/index.html","c4836bc3dce5fedb96a758c80e6007d7"],["categories/elk/index.html","091fcd90e7fdbc4610cdf185bcd01b76"],["categories/elk/logstash/index.html","7b59486182eca38f8dea24ffb5f8b295"],["categories/elk7/filebeat7/index.html","309b42520951130ebc6ce305c013d2c2"],["categories/elk7/index.html","2d5583b62115c8ea80035ef8b36ce5be"],["categories/index.html","07ab59bb15c4f94c02910c9efb944e9b"],["categories/item2/index.html","75c3a49b17ad2d940e5028fd3b78bcb4"],["categories/k3s/index.html","f3cf73767e7ffd05a2c644a45591995d"],["categories/k3s/lnmp/index.html","4dda8abb360113c8dc14e265b9dd693d"],["categories/k8s/elk5/index.html","2b7540b0cd36dabd34133916f8600980"],["categories/k8s/elk7/index.html","850015cb2929e4aa42d8ba2edc3d1356"],["categories/k8s/index.html","2db295947bfda0a71fce241e4a5f6863"],["categories/k8s/kubectl/index.html","9f58121dec1b912d47fbf38fa82f9d82"],["categories/k8s/mysql/index.html","5b34bf1d162b181e1fb8f3d6eaf93096"],["categories/k8s/storageclass/index.html","b34f11da9933d30495747b5b2437799d"],["categories/k8s/问题总结/index.html","ae545cce6b38038fe145c9a9307c546f"],["categories/linux/awk/index.html","aab9e6dad017a7188218de9b98aa6afb"],["categories/linux/index.html","f5964b6a11e706ced80d3a0bc3b0b661"],["categories/linux/shell/index.html","e46c10a2ba8c2a15c6a8699efe2738c0"],["categories/linux/systemd/index.html","d394d6f87aedd69455fdc909494a4369"],["categories/linux/问题总结/index.html","9be880e537600e3460a3f662c490cb8d"],["categories/mac/index.html","f981aeaaaaea2648ed7a04be55baefd5"],["categories/markdown/index.html","6496f302445a4d85dad43cc358878ba8"],["categories/mysql/index.html","0fc63ffcb44dc34384fd9c9059cefc85"],["categories/mysql/主从/index.html","a1d6bad394b1cdacba95ba7bfa7f8376"],["categories/nfs/index.html","4a54ef5f98e692e21ca9960357a201d1"],["categories/nginx/index.html","0decc66f96a40be6a84a4a81aedc0c9d"],["categories/nginx/问题总结/index.html","bbf2594b68b5a2021707087f077c3a78"],["categories/php/index.html","c9e8c209a8af0319372f25933d4565aa"],["categories/php/问题总结/index.html","ee6a00d651f2551cfbe36fdf50c12457"],["categories/raid/index.html","29004d974773c24eab277aa8bcd6add7"],["categories/博客/index.html","1c6a077e6fb157fa94f082ffe7e6df92"],["categories/博客/美化/index.html","bd49fb2988cfc0bbd41b545439a589f8"],["categories/存储/ceph/index.html","fd620fd3fff3a4a9613d013bbfb7f71b"],["categories/存储/index.html","3fd93d065506e0e435b7589a3a20609a"],["categories/存储/nfs/index.html","0edc140ba2d2fe8b0e37aa65b7c95365"],["categories/技术文档/index.html","603df04ceb75ba384f375df57c0f5748"],["categories/技术文档/page/2/index.html","714d6f3b1731e5ac9b3b1a7f5884225d"],["categories/有趣/index.html","72753337c41cd364664c4e354e44b38b"],["categories/有趣/二次元/index.html","f953796e7809d00979a79f8745cc2702"],["categories/流量复制工具/gor/index.html","59582b62bd8335cf07b80a00cde125cb"],["categories/流量复制工具/index.html","fd266969d996100be51e3b2777975560"],["categories/网卡/index.html","f4b78d242a7d376acd48108032e9ee76"],["categories/网址/index.html","a92c853ae62e8051b904b5924cad6571"],["categories/网址/大佬博客/index.html","07d6018188b81e49e487994b27d67fbf"],["categories/网址/收藏/index.html","318a95cb985d5388f461f73d07550f41"],["css/main.css","a478910392174616ef6a8a281f75ad7d"],["images/16/容器的原理-1.png","1c184a092af6b6829c49ee20e70d132a"],["images/27/img1.png","74279f54a523a47f82a95a04ccfc9eb4"],["images/27/img2.jpg","93a32e8f4e52a9ea2a28b72a4223c2a9"],["images/38/gc1.jpg","dc31455119def3534b8b78213e6dcd29"],["images/38/gc2.jpg","ef5563c2f902a9b8550ed006747c94f5"],["images/38/gc3.jpg","3bef257bda43708e5c6d00598e5a6ccf"],["images/38/gc4.jpg","df24a1184fff79f3513b73fc1f4a6938"],["images/38/gc5.jpg","3e0fd4156b9666c1488b49d332875416"],["images/42/01.png","2a7524daaed26030a260df4e3fb58197"],["images/42/02.png","9c6ea26880ea0a13e900835c3fc75d65"],["images/42/03.png","d25c88fa33688ffe4a39aa59797e9e5d"],["images/42/04.png","8816231bb00c27abc8c97fc86797d474"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["images/blog6/rancher-pv.png","d2a7e4bbfad5f71e75c9d5459cf5a464"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/docker1.jpg","5c611dd864017adeff648bca93d53f41"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/jixie-title.jpg","3ebd10201e23ecf68aba4524c020db0d"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["images/tcp三次握手图.png","32ddd8df35bd5762604327b25758370e"],["images/tcp四次挥手图.png","684b2b4a0286acadc32247d693dbd961"],["images/test1/test1.jpg","60b725f10c9c85c70d97880dfe8191b3"],["images/title1.jpg","fa2db043867c4c5654471e21ad36e5c0"],["images/title2.jpg","b6e57860ebc3fcdcf150a6a4cf3402ab"],["images/title3.jpg","f0b1554cfa4dd1193719dcfeb9e4de28"],["images/title4.jpg","6eb7bcbb846d1123e830488d75028df7"],["index.html","70aace56a469fdd4b2ef2a14f6e61389"],["js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["js/src/instantclick.js","865d92a4a07409b7fed739e6a108e9c4"],["js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["js/src/live2d.js","3359a94d733737dbdd290dd41f9cef0b"],["js/src/love.js","7bcfdb57debd43483174cf9e15ab37cc"],["js/src/love2.js","2b51ddac5207cba4153da31e9132414c"],["js/src/motion.js","706d085e6cfec6f3e92dedc590d68d68"],["js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["js/src/schemes/pisces.js","1bd23ed75238ebf11afe2aa6b1c3a25b"],["js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["js/src/utils.js","f06ffce70453ad3a4d9611fdde5ca6c3"],["lib/canvas-nest/canvas-nest.min.js","2361106788cc4ea719ed76f52b413e46"],["lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["live2d-widget/README.html","9941b5173b7915eb6158e62f02cd9ea3"],["live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["live2d-widget/autoload.js","fc45c81e48138bde62e7e742cbbdabb9"],["live2d-widget/demo/demo1.html","82a14d37dbd83931644a4ad6ea1f9eb2"],["live2d-widget/demo/demo2.html","6babb045ef6905badc0dbc5e0d98cede"],["live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["live2d-widget/waifu.css","c4dae5924f2fb0b5ea6ef26aaab80db9"],["page/2/index.html","5c5d16bea94292b44c5b9fbc056e58c0"],["page/3/index.html","1ea2cff2190ea91522d7f48c764fc560"],["page/4/index.html","0ca5a1d373cf6c95dc7fdf76f1be58c5"],["page/5/index.html","a16d0c40ddb1c7189fda37e7e6b419c5"],["tags/awk/index.html","dfca0ba0c7c3d964c05617b5c9f22124"],["tags/ceph/index.html","4478766b13c2bede996246c1dac6d86d"],["tags/cephfs/index.html","b84c2cdfdcaad0ef27edad22690651a6"],["tags/cloud-native/index.html","374b04e72f346d0a43a96b89c221ece1"],["tags/docker/index.html","1b1e55322afd37ca171c3431f99c4183"],["tags/elasticsearch5/index.html","962d94f4858745de257eb78acc519f34"],["tags/elasticsearch7/index.html","cd8fec0441ec8d770e414c4604b4a6d7"],["tags/elk/index.html","4c1e5de63014b45c3a8faaf0603e4093"],["tags/elk5/index.html","5b7ab65af16cc394043b3d7db4e86be0"],["tags/elk7/index.html","a025c9fe26442cd4367da2a3b070d48a"],["tags/filebeat7/index.html","3d4f14261b969064b17cd030995dd417"],["tags/gor/index.html","2d4177fc2c375bccb583936dad963af7"],["tags/hexo6/index.html","881e23da798b16002ff1fd73a6a0068a"],["tags/hexo美化/index.html","8b7a61bed14a143e0032812f81a4e65d"],["tags/http流量复制工具/index.html","cf37d029c9928d5821ae0db3609d5545"],["tags/index.html","135015945f8a634836551ac80374821e"],["tags/ip/index.html","d8bd2e097e01a67d6db89dd113b9c995"],["tags/k3s/index.html","9aa746d5b50ace66d3610ed6e72f366c"],["tags/k8s/index.html","db56ee3b03c136261fe7d3a27fa2a341"],["tags/k8s存储/index.html","97dc524344298a6e727a8b7d18cff5b0"],["tags/kubectl/index.html","caf48a10424c67609b755d9027b6a391"],["tags/linux/index.html","46564fd4a6410786a575196b1bdb4652"],["tags/logstash/index.html","624dc71e49236253381658daff494f51"],["tags/mac/index.html","4fbbd0ac5bdbb9fe066c02cdb82b6e76"],["tags/markdown/index.html","f60c65a9c5f4e0dafeb1e45080df2383"],["tags/mysql/index.html","a64d44df725122155ccd3ec05ed43fcb"],["tags/mysql5-7/index.html","296a27ce13cb10ac7f19a1cc415a2344"],["tags/nfs/index.html","01e1e03f15aae33352e53689be4f5b7c"],["tags/nginx/index.html","45fb904be9947b27b0ffd115bb2e43f6"],["tags/php/index.html","71891af5271373e9622c7e27d09ddd35"],["tags/php5/index.html","2a5b0e903d9b901d29737eac71fc7a5d"],["tags/php7/index.html","a4f2da3bfe3092ed9efbd7d46940ba28"],["tags/raid/index.html","6979b7f135c0593bcc8325ee7c08501c"],["tags/shell/index.html","d5a490fb8db8bde9f0db719eb22364bf"],["tags/storageclass/index.html","d6a70d6ae4f6e7521bf3dd4b128f23b8"],["tags/systemd/index.html","f42dad2fc9d1cbe08d9945d50e475ec3"],["tags/云原生/index.html","56e23b13f8b93e5f73bf0c8852891314"],["tags/大佬博客/index.html","fd29982eb89bff8e20616b1524146392"],["tags/收藏/index.html","b974a5fb3dbccd8e18898123ed4cbf72"],["tags/特效/index.html","8b462e57178fa7ab6423cd8948018fdc"],["tags/网址/index.html","403cd8546d74414019cdbca12e803a45"]];
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







