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
var precacheConfig = [["2019/09/19/2-部署elk7-2-0/index.html","31064f2ee216d1eeeb81ac620dc835c8"],["2019/09/19/首次搭建hexo博客系统/index.html","d828ac2873089899b6a0ab3e0f9ab27c"],["2019/09/20/3-k8s遇到的一些问题统计总结/index.html","02307c4350f29d25370669ac841a6f08"],["2019/09/24/4-hexo鼠标移动和鼠标点击特效/index.html","bb77a5e83330866f9800809e0080f196"],["2019/09/24/5-hexo添加看板娘/index.html","4a2e51ff5d8099768477093b7d866f5a"],["2019/09/26/6-ceph安装部署/index.html","ada3adb337119bfd299aceb3865020d0"],["2019/09/26/7-k8s部署storageclass动态创建pv-nfs-rbd/index.html","8fb743a88c7f487471d46b4f8ff1eca5"],["2019/09/26/8-mysql5-7二进制部署/index.html","5b7e012ca66e111ac0b3187aec4012c5"],["2019/09/26/9-linux遇到一些问题统计总结/index.html","1160d2fdf348797f82f2236c1cbc91b1"],["2019/09/27/10-centos6安装nginx1-16-php7-2/index.html","64be23ab38cba6efa2d812ece02ce9b5"],["2019/10/10/11-mysql简单记录/index.html","b5154825d71f973bc1312f03178a5e44"],["2019/10/11/12-awk简单记录/index.html","e07839337fcdf87c367fb9fd0e7fcf2e"],["2019/10/12/13-云原生博客汇总/index.html","d013210d073f04451a7be76387c90545"],["2019/10/15/14-mysql目录copy方式迁移/index.html","b7b5d9f714563c63c29cd796d3741e31"],["2019/10/16/15-docker简介和使用/index.html","fdb53a3f02d27edf2609921654b8b394"],["2019/10/16/16-dockerfile介绍/index.html","5a2b6c301ec4f027033fd21b63f4767d"],["2019/10/16/17-markdown一些写法记录/index.html","72a164d61ddb54bf47a761db20061cc6"],["2019/10/17/18-收藏链接/index.html","63f6b142d8edeb2372e5dbb1fce45473"],["2019/10/17/19-shell中gt和>的区别/index.html","0e346a0240f5378f45cc717ef89446c4"],["2019/10/24/20-k8s搭建mysql5-7-24主从/index.html","79e164631ad0c66147ff595af7846eaf"],["2019/10/28/21-流量复制工具gor/index.html","5281ad6bec2838dc91352bae935cb1be"],["2019/10/28/22-es集群磁盘扩容/index.html","2234f94fdc5ae692b23c5f58719073ef"],["2019/10/29/23-mysql5-5主与mysql5-7从部署配置/index.html","13c8ef8aea363d94447fe1f58e10eabb"],["2019/10/30/24-filebeat7收集mysql慢日志到es/index.html","4e8154b1773fa1020b56acc995bf1a60"],["2019/11/01/25-linux一些脚本汇总/index.html","6fb5d06c6e5630dcc4e0f9b223dcefec"],["2019/11/01/25-一些脚本汇总/index.html","965409d45967d23351fe4786d892c8fa"],["2019/11/08/26-logstash配置/index.html","3fdc3ff97ce0e101e6b4c78ad6e471be"],["2019/11/21/27-k8s一条命令部署es5-2-0集群/index.html","3ff655a4bf3b11e9abdf9c4e3cf47a30"],["2019/11/25/28-k8s1-16使用旧yml部署配置问题/index.html","5ce6d0875fa8095aa2a61165821ac471"],["2019/11/25/30-k3s集群部署项目报挂载nfs错误/index.html","71340fd4751495cc441466f7969279a2"],["2019/11/26/31-systemd一些命令/index.html","56c32cb207ec68e76f34257fb5495427"],["2019/12/02/32-php错误502问题总结/index.html","2c5ffeddd004a5436e40d77ef88250bf"],["2019/12/03/29-k3s安装配置/index.html","8e24899a8166036e77031747f17c460f"],["2019/12/03/33-k3s1.16部署nginx+php5.2.17/index.html","bcec2982e36337bef7a59d8f144e18fd"],["2019/12/05/34-k8s一些命令总结/index.html","2d473499ea40c77871dd3500a888e4aa"],["2020/02/27/35-raid1盘数据迁移/index.html","0cbaaa8da7ab63bd6af93488e35b8959"],["2020/02/27/36-centos单网卡配置多ip的几种方法/index.html","0e9036b4db34087327bff176abcf60cf"],["2020/03/10/37-mac一些常用命令/index.html","cde4e737dde59698ce832949ede0cbbc"],["2020/03/12/38-es集群节点出现overhead脱机的问题/index.html","330baf0a770fec8262a6d0746df924cf"],["2020/03/18/39-记一次nginx的request-time-和upstream-response-time差值很大问题/index.html","34c0fea7592dbc668242c036601f70c5"],["2020/03/18/40-记一次跨域的nginx配置问题/index.html","62834d892763b245c5018dd061c253bc"],["2020/03/19/41-记一次es集群内存溢出的问题/index.html","700ae22c4e273d518bd9ed9d5bd7bb7e"],["archives/2019/09/index.html","c0029c47c46b6e71343078a1568e1d47"],["archives/2019/10/index.html","a64bd83a8e6971499f4b9fc0a9fcd111"],["archives/2019/11/index.html","b4392ee34036bfd49cf432036d72cb25"],["archives/2019/12/index.html","101d72c1cd27062fb7fe796ffd4414be"],["archives/2019/index.html","5b40ac104d9aba1bd50195020a53d7be"],["archives/2019/page/2/index.html","09baa03fa46b8c9dcee016c3860edc63"],["archives/2020/02/index.html","e6807797f1672a41bcf76480ed4e24d7"],["archives/2020/03/index.html","91e6608a82e5b7da2f54042198e02de2"],["archives/2020/index.html","9549488de85877c02bb597a52ab2b14b"],["archives/index.html","bffb88ea087969585b3651a705067bb2"],["archives/page/2/index.html","2f9bcb170d5b68a6825173870809a8f9"],["archives/page/3/index.html","bedd97f3337b427d996782dcb1685c1e"],["categories/docker/Dockerfile/index.html","1f6d0193a6646bc553aa08a9e38d493b"],["categories/docker/index.html","09a527502030519a99a3066585bf16c6"],["categories/elk/elasticsearch5/index.html","fdb19e19332c45312f2b144ca06ea9fa"],["categories/elk/elasticsearch7/index.html","fdcdae486a2b911b8c6be4b3ab772098"],["categories/elk/index.html","062b5c1b4bac838bf4a650ddcbd423a8"],["categories/elk/logstash/index.html","70fbc645c6d11656d1fd040ba80f1684"],["categories/elk7/filebeat7/index.html","2a888a1bed580861b1f46cb113b01299"],["categories/elk7/index.html","89690fae1412f3d9ea158e821537a2a4"],["categories/index.html","b7b5278f50d542fef10df2203599e0aa"],["categories/item2/index.html","0cd699a9489c4605481fdbc629308e2e"],["categories/k3s/index.html","3f2f45b1f206358622c522721d39d41c"],["categories/k3s/lnmp/index.html","2ffc56fa659bb079c9990da679adf843"],["categories/k8s/elk5/index.html","cd1708faf14d7dfb014269f8f28ea491"],["categories/k8s/elk7/index.html","c200e8db45009f1acbaf84a59fd314d4"],["categories/k8s/index.html","c2f460c3049f1c063e266be4daade83e"],["categories/k8s/kubectl/index.html","3b5ea64594d194f54d1d0af929e937f3"],["categories/k8s/mysql/index.html","ac6645d42b90e003d64d2ef16a14e64d"],["categories/k8s/storageclass/index.html","51e27f9e1e5d824e3799860cd5f65114"],["categories/k8s/问题总结/index.html","ccec0fd7b5fa7c38b00e4e69fb8ac19c"],["categories/linux/awk/index.html","ffa653dc755faa58243789dc387d94b3"],["categories/linux/index.html","77a0193beb7703a0af035aea963b987d"],["categories/linux/shell/index.html","2152e06dd8af604ea66ecaaad6ce4472"],["categories/linux/systemd/index.html","b81494cb3abf05a6fb7500d155e5a1ae"],["categories/linux/问题总结/index.html","a6550c33177a2faf7f66ec9393141582"],["categories/mac/index.html","072b5130bc53ef5b76626d65d2eebfd2"],["categories/markdown/index.html","0b67f9eb943cbeb93facf335accb369b"],["categories/mysql/index.html","b59834714bef3a7ce3dc81bb6d5e7856"],["categories/mysql/主从/index.html","dbb66b3aebd1a9fa439219ea4822fe57"],["categories/nfs/index.html","952099bfd3e9ae151f06c43163a2b8ed"],["categories/nginx/index.html","8347f93188f5313ac1660eb82da82e8a"],["categories/nginx/问题总结/index.html","b3014b434dc318244f4a023df5207b97"],["categories/php/index.html","e32649ab26e72a3572bc00452bd2b1e9"],["categories/php/问题总结/index.html","edcd6fa6f7b040788b2ab3c913f9de7b"],["categories/raid/index.html","db38a43be53c4dc0dc3e0b171e5307c2"],["categories/博客/index.html","1663300b81f4a4546184e4840a042a03"],["categories/博客/美化/index.html","8e50504f300ae240075f2562582d8300"],["categories/存储/ceph/index.html","68bfebf61f584fc4ace7fab68ef19071"],["categories/存储/index.html","27b884a79cd632d0e57b8992a1e65e2e"],["categories/存储/nfs/index.html","79692770f97007621e0992eba2d3bade"],["categories/技术文档/index.html","370b26d868cbcfff47165985dc618aaf"],["categories/技术文档/page/2/index.html","ac0a3e9ab0aac5c85f9059b062a0d662"],["categories/有趣/index.html","f10773de7cf24e19b3868f7f020ed852"],["categories/有趣/二次元/index.html","a12319ebd598891153a33e5e5e0333de"],["categories/流量复制工具/gor/index.html","832f373e56895942a17f3c9dc65fdb01"],["categories/流量复制工具/index.html","5c25dc0146ac8cfb0f887a8a195bf3d3"],["categories/网卡/index.html","86f4fee783da7b0f26e58c5bdebeff82"],["categories/网址/index.html","a295852a63a89fc5845aaf562379db00"],["categories/网址/大佬博客/index.html","cefc44634ae9c4d43d3f8ebbdda384ce"],["categories/网址/收藏/index.html","bc7986152d0d36643f306791e848cd24"],["css/main.css","c02e63523a29d107a65de6f9b0dd4366"],["images/16/容器的原理-1.png","1c184a092af6b6829c49ee20e70d132a"],["images/27/img1.png","74279f54a523a47f82a95a04ccfc9eb4"],["images/27/img2.jpg","93a32e8f4e52a9ea2a28b72a4223c2a9"],["images/38/gc1.jpg","dc31455119def3534b8b78213e6dcd29"],["images/38/gc2.jpg","ef5563c2f902a9b8550ed006747c94f5"],["images/38/gc3.jpg","3bef257bda43708e5c6d00598e5a6ccf"],["images/38/gc4.jpg","df24a1184fff79f3513b73fc1f4a6938"],["images/38/gc5.jpg","3e0fd4156b9666c1488b49d332875416"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["images/blog6/rancher-pv.png","d2a7e4bbfad5f71e75c9d5459cf5a464"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/docker1.jpg","5c611dd864017adeff648bca93d53f41"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/jixie-title.jpg","3ebd10201e23ecf68aba4524c020db0d"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["images/tcp三次握手图.png","32ddd8df35bd5762604327b25758370e"],["images/tcp四次挥手图.png","684b2b4a0286acadc32247d693dbd961"],["images/test1/test1.jpg","60b725f10c9c85c70d97880dfe8191b3"],["images/title1.jpg","fa2db043867c4c5654471e21ad36e5c0"],["images/title2.jpg","b6e57860ebc3fcdcf150a6a4cf3402ab"],["images/title3.jpg","f0b1554cfa4dd1193719dcfeb9e4de28"],["images/title4.jpg","6eb7bcbb846d1123e830488d75028df7"],["index.html","a05a9af55f1f2bcd9bf9b4c9712dd2e7"],["js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["js/src/instantclick.js","865d92a4a07409b7fed739e6a108e9c4"],["js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["js/src/live2d.js","3359a94d733737dbdd290dd41f9cef0b"],["js/src/love.js","7bcfdb57debd43483174cf9e15ab37cc"],["js/src/love2.js","2b51ddac5207cba4153da31e9132414c"],["js/src/motion.js","706d085e6cfec6f3e92dedc590d68d68"],["js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["js/src/schemes/pisces.js","1bd23ed75238ebf11afe2aa6b1c3a25b"],["js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["js/src/utils.js","f06ffce70453ad3a4d9611fdde5ca6c3"],["lib/canvas-nest/canvas-nest.min.js","2361106788cc4ea719ed76f52b413e46"],["lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["live2d-widget/README.html","9941b5173b7915eb6158e62f02cd9ea3"],["live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["live2d-widget/autoload.js","fc45c81e48138bde62e7e742cbbdabb9"],["live2d-widget/demo/demo1.html","82a14d37dbd83931644a4ad6ea1f9eb2"],["live2d-widget/demo/demo2.html","6babb045ef6905badc0dbc5e0d98cede"],["live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["live2d-widget/waifu.css","c4dae5924f2fb0b5ea6ef26aaab80db9"],["page/2/index.html","370d5502937371ca672204cb795ccdfb"],["page/3/index.html","b270cb68a329c18eabc67eba48c97949"],["page/4/index.html","8cb99aa0cab3e1f7b8414536907baa7e"],["page/5/index.html","696a24e9b1b001de9da9959cf3a93302"],["tags/awk/index.html","3a0064681b0448c724b9b3bd937a2673"],["tags/ceph/index.html","ba80f2801b48f466a15b57e69e25e340"],["tags/cephfs/index.html","c703bcabc39712e5600ef115b078d5cd"],["tags/cloud-native/index.html","de89f84d59b82549d50db4594911a15b"],["tags/docker/index.html","ae95065b61fb1ed3b28222a3f26b7528"],["tags/elasticsearch5/index.html","6f4f41bf3d4f00622aa920ff3e795bdc"],["tags/elasticsearch7/index.html","9bcef6af669d39b9cd92dd3f03f18b3e"],["tags/elk/index.html","75be605e6b20f5fc21cb621055114932"],["tags/elk5/index.html","ba91d75a18ea066f9553bd33001e1db2"],["tags/elk7/index.html","2e8b01bbe14c3e3d54a72cfb31f77656"],["tags/filebeat7/index.html","a202dc62a1b32d102b84ce994354b121"],["tags/gor/index.html","78e4579684cad9a8484d9a4b20596de9"],["tags/hexo6/index.html","59291cb00ffc8921edd80cf1cda627da"],["tags/hexo美化/index.html","12bf76f80aea3d76ec893105fe713095"],["tags/http流量复制工具/index.html","9e89ec2fb23aa1252c2f951afe158fe6"],["tags/index.html","d73db944f32e53c0992f5c426622428c"],["tags/ip/index.html","d655fd57da0e24d173e76edce4519049"],["tags/k3s/index.html","f53c132b5c66db7d5c8fd00374604fff"],["tags/k8s/index.html","964c950276f361e904205c27f3a0b0fa"],["tags/k8s存储/index.html","3731add960466b3c6f28347039b4dfb2"],["tags/kubectl/index.html","701713ccd2e2f85af9a4b85f4239be9b"],["tags/linux/index.html","60d7b86f405ee33fea3b30171359ed14"],["tags/logstash/index.html","2364c2075169520cbe674de592b5bc7e"],["tags/mac/index.html","8168caffc95e56b045a6e3e49eb74d4d"],["tags/markdown/index.html","3d6680c90edef95e20a12d574451167d"],["tags/mysql/index.html","676e33ede67d68ea7cf0ed064d66b286"],["tags/mysql5-7/index.html","715f2f4f9d7e23f24ddfe385d87e196f"],["tags/nfs/index.html","162f697ee05491faeddfaa72563fcaf3"],["tags/nginx/index.html","b7d91d34efda166db416028b11ac6197"],["tags/php/index.html","d1f5d48a7f5cb055faa5bdda31ee1586"],["tags/php5/index.html","59b928d0259641c9db0e4c5c8515dfee"],["tags/php7/index.html","373925e545ae52a6d95a949e67700f81"],["tags/raid/index.html","a5e2d995df15eb7e8e76ce0d82c08443"],["tags/shell/index.html","15d8e04405a912aa57faa2396a072e8b"],["tags/storageclass/index.html","10d10f59779c4c8632da7951bb0ef447"],["tags/systemd/index.html","11f0b6237fa30c66f6b3ddd68e83dd37"],["tags/云原生/index.html","8dcff540544a1ed2dcca36692de4f0a2"],["tags/大佬博客/index.html","e9b40e727a192255a015213546a4583a"],["tags/收藏/index.html","d73cdc3617838473b6b0d8a4409116cd"],["tags/特效/index.html","62fd5ace793ad742544977330d2eabbc"],["tags/网址/index.html","7db39d0d1f86c643003f3d6a882cf22b"]];
=======
<<<<<<< HEAD
var precacheConfig = [["2019/09/19/2-部署elk7-2-0/index.html","65498f5e4f38a1cf8b685caa41af8040"],["2019/09/19/首次搭建hexo博客系统/index.html","bcfee5e86dc12e1e521f9f5f112c33ad"],["2019/09/20/3-k8s遇到的一些问题统计总结/index.html","085b11c3359342a7b314233c8d9c7095"],["2019/09/24/4-hexo鼠标移动和鼠标点击特效/index.html","ea10c5ed8f06f586b89cfb9904fe8208"],["2019/09/24/5-hexo添加看板娘/index.html","e5b6ff439feb45d24e0b00869e72fab4"],["2019/09/26/6-ceph安装部署/index.html","73665ff66932f9680cb19a4c4f9fb0fe"],["2019/09/26/7-k8s部署storageclass动态创建pv-nfs-rbd/index.html","10f72617d92388e49c8dd7bc371b5e9b"],["2019/09/26/8-mysql5-7二进制部署/index.html","6d796bcbc98ef26768698923ee3e6449"],["2019/09/26/9-linux遇到一些问题统计总结/index.html","7069773bf2e0aded641a92d836076447"],["2019/09/27/10-centos6安装nginx1-16-php7-2/index.html","34615143c7d73cdeae6c51697bb06b11"],["2019/10/10/11-mysql简单记录/index.html","a1293d72ed2273c156df6859b8c27127"],["2019/10/11/12-awk简单记录/index.html","10522db5a098d09bcf9a1a7da39703c2"],["2019/10/12/13-云原生博客汇总/index.html","7b9351aa6f6da2419f0dd258c1d0c0ad"],["2019/10/15/14-mysql目录copy方式迁移/index.html","9a507e5fb59db39adff841970bbdbc10"],["2019/10/16/15-docker简介和使用/index.html","f782e1bf5faa17d5de0fa42ac907c298"],["2019/10/16/16-dockerfile介绍/index.html","652d7ba6ddc979cbd31ec4bcbeac8833"],["2019/10/16/17-markdown一些写法记录/index.html","c1adc33a17f2e00d015a1418d540bf32"],["2019/10/17/18-收藏链接/index.html","a7afd5dfc62d22fae03ab442d7d9aaff"],["2019/10/17/19-shell中gt和>的区别/index.html","b1c6241fb1d5b7616ae9da29d7d7fbb4"],["2019/10/24/20-k8s搭建mysql5-7-24主从/index.html","249f458a321513e73a02aa4c89a4f664"],["2019/10/28/21-流量复制工具gor/index.html","7cd667cddb5a6837805a17e05fe4df1f"],["2019/10/28/22-es集群磁盘扩容/index.html","d5e875552f722b562e822b55a088e217"],["2019/10/29/23-mysql5-5主与mysql5-7从部署配置/index.html","246dad21f80f27b2bd017adea7c276b9"],["2019/10/30/24-filebeat7收集mysql慢日志到es/index.html","e0509a18b3d71ba77a14d7622fa4f71f"],["2019/11/01/25-linux一些脚本汇总/index.html","f760bc00e855bfbca4298487848baaa4"],["2019/11/01/25-一些脚本汇总/index.html","5b1002a7380156104dc2d32ad628ca74"],["2019/11/08/26-logstash配置/index.html","b21277501907c3f30209fa846238ffc2"],["2019/11/21/27-k8s一条命令部署es5-2-0集群/index.html","120ea7384952368d48a2794b4c1868e1"],["2019/11/25/28-k8s1-16使用旧yml部署配置问题/index.html","6b9656e0a63246a281c7779792c2f593"],["2019/11/25/30-k3s集群部署项目报挂载nfs错误/index.html","7bf87cc21edd2c5391013361df5a3c7d"],["2019/11/26/31-systemd一些命令/index.html","72cda69080444fab0c8413c5c38f65a8"],["2019/12/02/32-php错误502问题总结/index.html","0c1d31f4bb8d4e6537e759c9beb85c7c"],["2019/12/03/29-k3s安装配置/index.html","a1523fe0016654e9d3267457a59d461b"],["2019/12/03/33-k3s1.16部署nginx+php5.2.17/index.html","0499fdd636fbdccf4b6f1c365776a311"],["2019/12/05/34-k8s一些命令总结/index.html","621e8e8c307d046accf8cd32cac0fa10"],["2020/02/27/35-raid1盘数据迁移/index.html","9dfe297dc7e1140fc0d7660de7ab8aef"],["2020/02/27/36-centos单网卡配置多ip的几种方法/index.html","fd7e43b9381f4fa852cbc9be7dbd0ad8"],["2020/03/10/37-mac一些常用命令/index.html","fa1687fc82a35fb5049c78155450adb3"],["2020/03/12/38-es集群节点出现overhead脱机的问题/index.html","1a563bf8b3a42aa84c15e50765c8c2f1"],["2020/03/18/39-记一次nginx的request-time-和upstream-response-time差值很大问题/index.html","b801827784813935867915e9fdaa9578"],["2020/03/18/40-记一次跨域的nginx配置问题/index.html","e671f960305f5055d964852c8ef2f9ff"],["archives/2019/09/index.html","0fa2412485e6843170057485f42e58ed"],["archives/2019/10/index.html","e1ab91501b76a2295880dca21407ad01"],["archives/2019/11/index.html","6974473fb57ae405650c881f988f15bb"],["archives/2019/12/index.html","047566211173defe5547a4270ba5ca71"],["archives/2019/index.html","696ea4072b304469423ffc5046a40cce"],["archives/2019/page/2/index.html","dbca3a2e4fb800fada5b01cd5538b5f7"],["archives/2020/02/index.html","1d7d722906841762d4352a366a953a76"],["archives/2020/03/index.html","8243f134fe05e5b85b1dcfe4a3c7183d"],["archives/2020/index.html","c2881199b84b55b7a82fa923387b0c10"],["archives/index.html","14d7aeccd2d5cb71e7f1993bae1e0b49"],["archives/page/2/index.html","655fd2ab4399b1dba50830a27ea06a3a"],["archives/page/3/index.html","933c8bbc7d432868aa7ba1ee7eea8255"],["categories/docker/Dockerfile/index.html","4c14d1d8fd3a166b08ae9de0f6c99bed"],["categories/docker/index.html","deacdf76932496842185f838fb79bae4"],["categories/elk/elasticsearch5/index.html","08b51d95129c365365a8cbe1f2acc36b"],["categories/elk/elasticsearch7/index.html","3961af28b1c6c5798a0fdd088b106b50"],["categories/elk/index.html","9113b4af10ab2128f695842111cbf6fa"],["categories/elk/logstash/index.html","142d5d256fbd7a50ae7e535694fa38b6"],["categories/elk7/filebeat7/index.html","47a8c22ec4e7042849c624957aa60330"],["categories/elk7/index.html","9d858bec362fbb8af0253f060d2dca1b"],["categories/index.html","684142e3ffe10a7e257a89763ade7cdd"],["categories/item2/index.html","1960fd7a666c0573853bfe046c7bf355"],["categories/k3s/index.html","db7fcc482467128c7bd9a5ef6652d1d2"],["categories/k3s/lnmp/index.html","8559c888b3ad62ace8ef33cabb12a2ea"],["categories/k8s/elk5/index.html","d05cf5f91ba1b0abb8c6a7de2d6c234c"],["categories/k8s/elk7/index.html","7cb3890e6eb16f51f3a5513e4e83f796"],["categories/k8s/index.html","bc2fd1d5d9912ab06751f62245bbf9c9"],["categories/k8s/kubectl/index.html","2e553d8509e43c86052f8a8376600571"],["categories/k8s/mysql/index.html","d5d8b26458e07a7830c05dff15faf128"],["categories/k8s/storageclass/index.html","ffea91e55494d6bf03172fcc1c67f4e7"],["categories/k8s/问题总结/index.html","5431bb5f958f17218a33f4854e2b1c02"],["categories/linux/awk/index.html","b054e2b012f1afaceed6b60f2c0a2cc9"],["categories/linux/index.html","ed6f9393332f315cf67297aaeed6db76"],["categories/linux/shell/index.html","86d24d6c59f908a0a35d2a894e462ffa"],["categories/linux/systemd/index.html","5c006bf8f0633f5180903308cb4d1498"],["categories/linux/问题总结/index.html","94abbff35847ddb7b903205329db18e8"],["categories/mac/index.html","ed4820cd71f931cb571c319e2dc26d22"],["categories/markdown/index.html","f712c962c5f0036ac5d5c7b492ec4c3a"],["categories/mysql/index.html","c8d6ec34b78c7f8601c5c0f87075f1e8"],["categories/mysql/主从/index.html","57877e9db7d24d5a3a5d908bf30772c5"],["categories/nfs/index.html","2fd9cc7f7059b9e91de0546ec556ed84"],["categories/nginx/index.html","0ef87bd10653923d63c824f31e5d96a8"],["categories/nginx/问题总结/index.html","a4e5b8f831d14216ead07b5e6685150c"],["categories/php/index.html","ec9e1b4cf22435d44c80c761d5d3cf8e"],["categories/php/问题总结/index.html","6b6fb1147499fef081970d0040d0e424"],["categories/raid/index.html","1d4e0cd645e2b108bdd69c0752d7ad7e"],["categories/博客/index.html","e58bf4d3301c984569d7374356d0f260"],["categories/博客/美化/index.html","a0c2c5c9c533ce0c9db1f528517e8b1a"],["categories/存储/ceph/index.html","a31b630dfe6376c3b4695a09ac1bf398"],["categories/存储/index.html","34f23c3ff810b35f036ec49227dab163"],["categories/存储/nfs/index.html","7ac638632edc20d546ed440793194bee"],["categories/技术文档/index.html","11b594768ee23adf34dd0bf3edfb2c16"],["categories/技术文档/page/2/index.html","8c764a19b230129830c2969ef99c8891"],["categories/有趣/index.html","199ac44749d0e5ce948330a7f593d35a"],["categories/有趣/二次元/index.html","bf8b7d1ab701bf958430934aec947070"],["categories/流量复制工具/gor/index.html","ec98fd4b55661be799d53500a754468e"],["categories/流量复制工具/index.html","108dd574447cb2b569bf98a44b74ab26"],["categories/网卡/index.html","e9817b885883a36c5911fcecffeb1c1c"],["categories/网址/index.html","13a870d6466a55f04c43678ebbb1c120"],["categories/网址/大佬博客/index.html","1ed88aa5c21c82f2adcd4ece67d936f6"],["categories/网址/收藏/index.html","04eb0969e7e13ee9976ac7c26b6b4c29"],["css/main.css","4487864ee8efb94147be7a08318ad24e"],["images/16/容器的原理-1.png","1c184a092af6b6829c49ee20e70d132a"],["images/27/img1.png","74279f54a523a47f82a95a04ccfc9eb4"],["images/27/img2.jpg","93a32e8f4e52a9ea2a28b72a4223c2a9"],["images/38/gc1.jpg","dc31455119def3534b8b78213e6dcd29"],["images/38/gc2.jpg","ef5563c2f902a9b8550ed006747c94f5"],["images/38/gc3.jpg","3bef257bda43708e5c6d00598e5a6ccf"],["images/38/gc4.jpg","df24a1184fff79f3513b73fc1f4a6938"],["images/38/gc5.jpg","3e0fd4156b9666c1488b49d332875416"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["images/blog6/rancher-pv.png","d2a7e4bbfad5f71e75c9d5459cf5a464"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/docker1.jpg","5c611dd864017adeff648bca93d53f41"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/jixie-title.jpg","3ebd10201e23ecf68aba4524c020db0d"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["images/tcp三次握手图.png","32ddd8df35bd5762604327b25758370e"],["images/tcp四次挥手图.png","684b2b4a0286acadc32247d693dbd961"],["images/test1/test1.jpg","60b725f10c9c85c70d97880dfe8191b3"],["images/title1.jpg","fa2db043867c4c5654471e21ad36e5c0"],["images/title2.jpg","b6e57860ebc3fcdcf150a6a4cf3402ab"],["images/title3.jpg","f0b1554cfa4dd1193719dcfeb9e4de28"],["images/title4.jpg","6eb7bcbb846d1123e830488d75028df7"],["index.html","234c53252f904687e5608e137660a7fa"],["js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["js/src/instantclick.js","865d92a4a07409b7fed739e6a108e9c4"],["js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["js/src/live2d.js","3359a94d733737dbdd290dd41f9cef0b"],["js/src/love.js","7bcfdb57debd43483174cf9e15ab37cc"],["js/src/love2.js","2b51ddac5207cba4153da31e9132414c"],["js/src/motion.js","706d085e6cfec6f3e92dedc590d68d68"],["js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["js/src/schemes/pisces.js","1bd23ed75238ebf11afe2aa6b1c3a25b"],["js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["js/src/utils.js","f06ffce70453ad3a4d9611fdde5ca6c3"],["lib/canvas-nest/canvas-nest.min.js","2361106788cc4ea719ed76f52b413e46"],["lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["live2d-widget/README.html","9941b5173b7915eb6158e62f02cd9ea3"],["live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["live2d-widget/autoload.js","fc45c81e48138bde62e7e742cbbdabb9"],["live2d-widget/demo/demo1.html","82a14d37dbd83931644a4ad6ea1f9eb2"],["live2d-widget/demo/demo2.html","6babb045ef6905badc0dbc5e0d98cede"],["live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["live2d-widget/waifu.css","c4dae5924f2fb0b5ea6ef26aaab80db9"],["page/2/index.html","ff3489547362edce43c7468712fbe309"],["page/3/index.html","5677743cdfbd9e83cbe2819ca89fe45f"],["page/4/index.html","74a306b6d99e54ef3d6a387353f107d3"],["page/5/index.html","a8aa40b01d3a90dfebd70c7e5e472f25"],["tags/awk/index.html","fe889d47d1aa177f1848170743f92224"],["tags/ceph/index.html","9cc596f27ec606e5bea0f19d5b06907c"],["tags/cephfs/index.html","d8ac8c49346efdda1cd3d2f5eb322fc0"],["tags/cloud-native/index.html","74895b251b68eab947e98dd8c2a349ed"],["tags/docker/index.html","17335b5a98b880550de356a1a23f1376"],["tags/elasticsearch5/index.html","dde6d0968a41589bd52bb1ade656e275"],["tags/elasticsearch7/index.html","9bc3aa5aeac8bc476bcfde0e2c32bea9"],["tags/elk/index.html","97634de5914fd705f0807e5f0f2db14e"],["tags/elk5/index.html","521f5dc7a20fa64fa4fe1656a5436cd8"],["tags/elk7/index.html","47aa599f2453067e489db0434408613a"],["tags/filebeat7/index.html","9faaace09a0dd0eb2e67109df39f9319"],["tags/gor/index.html","dfbf9b8f8078681caa38f750bf9377c2"],["tags/hexo6/index.html","c56e8f7cb33ba85c5c5a9ce461543f6c"],["tags/hexo美化/index.html","96fd9398d1c52117efab6780f4cfcb59"],["tags/http流量复制工具/index.html","6545e903761e6670022de46c0244ffc7"],["tags/index.html","4172436ba769275f2f3c40b1f2d0e490"],["tags/ip/index.html","b26f6b43093ad710a26f1956998c9b5a"],["tags/k3s/index.html","2cb49bdaec2dfa508e4e7c2267e88cb2"],["tags/k8s/index.html","fbe48e9b402438877489e7fb1e304941"],["tags/k8s存储/index.html","bd07ad383f47d0d71216d69b3389c181"],["tags/kubectl/index.html","f380d066b9b14e757ffd59cd50aef070"],["tags/linux/index.html","7b279a1bf0da63fe724900664c11fbf1"],["tags/logstash/index.html","05e57a9df1275aa72ffa5e8109dd53b0"],["tags/mac/index.html","05972797b6fbfae28b36806e45e0177c"],["tags/markdown/index.html","94d03cfa2061e26559e68d72d72b3e5d"],["tags/mysql/index.html","deed8a5cded87b447663ce07d52cfdae"],["tags/mysql5-7/index.html","d2e8e6ee30d96ad291d39b826d321c8e"],["tags/nfs/index.html","aa61e85e48653241f1a9dc3cdd83f4c6"],["tags/nginx/index.html","04fed0abdf05da4ddc365c24cde9d0ae"],["tags/php/index.html","4a93c1d5b7fd542d6ff78205e9ba268b"],["tags/php5/index.html","3eccb174097c5e194b13c93c60f32ddc"],["tags/php7/index.html","4ed29cad45f815825fa2c0554d2b7cbf"],["tags/raid/index.html","e1234fa54588d8aa8c6015c17e8a52ba"],["tags/shell/index.html","7b037cf74f95201636cfe5ccf3b5c6c9"],["tags/storageclass/index.html","e9b1dd3f3f8ea42affd8c2e00b56f630"],["tags/systemd/index.html","ee966b17fef57d6fb9376792095920df"],["tags/云原生/index.html","7a63f5f3b7217460b47499f03429e119"],["tags/大佬博客/index.html","9baf64de6624cf092a5cbed55a538abc"],["tags/收藏/index.html","61be2b7d559341ddbf5769a7afc24f21"],["tags/特效/index.html","8a49713324b50fc42e7c64211675b104"],["tags/网址/index.html","82b308cd4d8aefbe58e1e61be4dc9848"]];
=======
var precacheConfig = [["2019/09/19/2-部署elk7-2-0/index.html","06811cb2d154a8deb19e75413ba519c6"],["2019/09/19/首次搭建hexo博客系统/index.html","73caeec158429cef4bf102fecfeb7699"],["2019/09/20/3-k8s遇到的一些问题统计总结/index.html","345c8a29bd621d1f092bfd0fe3de5321"],["2019/09/24/4-hexo鼠标移动和鼠标点击特效/index.html","e601f991fde6c65a5749e3c2261831bd"],["2019/09/24/5-hexo添加看板娘/index.html","b85ba96a6ca4df72dc90e688749bd2e0"],["2019/09/26/6-ceph安装部署/index.html","d80be605d54a47d5349682ee54f36c36"],["2019/09/26/7-k8s部署storageclass动态创建pv-nfs-rbd/index.html","1934d683a344d41bd105c4bb8154b613"],["2019/09/26/8-mysql5-7二进制部署/index.html","e1d0f808cd71c9ae1c7d1895406fd444"],["2019/09/26/9-linux遇到一些问题统计总结/index.html","54635990cddb84400356642966124d3b"],["2019/09/27/10-centos6安装nginx1-16-php7-2/index.html","5ec46b918bf80c244f6bedffc186e5e2"],["2019/10/10/11-mysql简单记录/index.html","98a31160e484087eb6ec74632d0f8fdc"],["2019/10/11/12-awk简单记录/index.html","56b922bb76811d7db6069b4b788f3820"],["2019/10/12/13-云原生博客汇总/index.html","f8b15433c94c75fcf20515ad9dd28b02"],["2019/10/15/14-mysql目录copy方式迁移/index.html","aeaba3322c1f720fdf9c279e1b4bd728"],["2019/10/16/15-docker简介和使用/index.html","affddc329378db6e8fabb1929a32f6cd"],["2019/10/16/16-dockerfile介绍/index.html","dc2cd95f268c7951679733cc57dd3719"],["2019/10/16/17-markdown一些写法记录/index.html","8a76b181eb51abf8c92a1ad34e946b69"],["2019/10/17/18-收藏链接/index.html","66fb5a6b2892434aa9fbfc98b21da592"],["2019/10/17/19-shell中gt和>的区别/index.html","8edd120a09680f60dd8a452754ef25fa"],["2019/10/24/20-k8s搭建mysql5-7-24主从/index.html","fd3336e77e315f485a133df81b74f08a"],["2019/10/28/21-流量复制工具gor/index.html","f54b9aedb3eeed08043f675549d9ed55"],["2019/10/28/22-es集群磁盘扩容/index.html","732bf32fb5cf03be60505553b6b4be2c"],["2019/10/29/23-mysql5-5主与mysql5-7从部署配置/index.html","2e2bd7baeb85571b928b0641051d8903"],["2019/10/30/24-filebeat7收集mysql慢日志到es/index.html","a49c758809dc4cf11828bafab37aaf5e"],["2019/11/01/25-linux一些脚本汇总/index.html","38569d7933e20c452bad758a8a29ba0c"],["2019/11/01/25-一些脚本汇总/index.html","92ac92f57116655ea02b26648b8ade55"],["2019/11/08/26-logstash配置/index.html","2e1c65e93eee4220a5ae0b6e0c5ce9a6"],["2019/11/21/27-k8s一条命令部署es5-2-0集群/index.html","a8c5ead2cb7b19ce981abd75acbda453"],["2019/11/25/28-k8s1-16使用旧yml部署配置问题/index.html","0798b5cd4a9f0d45ca96d7702cf5571a"],["2019/11/25/30-k3s集群部署项目报挂载nfs错误/index.html","64e7537aac06a5f147785e893a268ea9"],["2019/11/26/31-systemd一些命令/index.html","d91489536e8097b1db9cd624e2d14033"],["2019/12/02/32-php错误502问题总结/index.html","e8971b3693c116d6cd21704c4ed6200e"],["2019/12/03/29-k3s安装配置/index.html","3bec51f1b3f7d4074ef89606f2177ae8"],["2019/12/03/33-k3s1.16部署nginx+php5.2.17/index.html","82eff32e1564ce6275826c97e462ed65"],["2019/12/05/34-k8s一些命令总结/index.html","7c25566a892ff18a3997dd5a169820bc"],["2020/02/27/35-raid1盘数据迁移/index.html","719bb53c28c21ca3f2eb4e030bce7338"],["2020/02/27/36-centos单网卡配置多ip的几种方法/index.html","fd3504b3056d0379845c87f2195e0b7a"],["2020/03/10/37-mac一些常用命令/index.html","3f7f400de4357cac70ced5bd7b7cda02"],["2020/03/12/38-es集群节点出现overhead脱机的问题/index.html","cd6f982626d19df4d7866a58fa9fb449"],["2020/03/18/39-记一次nginx的request-time-和upstream-response-time差值很大问题/index.html","7a67fdac6b5ba40535dba711acfd9064"],["archives/2019/09/index.html","0f4e24e3acb8e282b25555092a463373"],["archives/2019/10/index.html","74ec959baf715b3aaac9d98294e62d0d"],["archives/2019/11/index.html","b6d6d569df17f1c1c0b3e42d9c2b77c4"],["archives/2019/12/index.html","0fac39f5ee896d609e7e7ac339f31c7e"],["archives/2019/index.html","5092f8581f9e87a61de6eb195e1abc24"],["archives/2019/page/2/index.html","ce99f3fb801042a3fd0b1b6a44e004e2"],["archives/2020/02/index.html","eb47fb448ad72583c4474dc12ebd5792"],["archives/2020/03/index.html","a827a4396784d21007beb1e3f6da9c04"],["archives/2020/index.html","2ecdea1d41587b7d8782950790a3a143"],["archives/index.html","27feaa6a9715e6db4793392edb594ae0"],["archives/page/2/index.html","896c7f8299d5e400123265362c74ba7f"],["categories/docker/Dockerfile/index.html","d08144afa6df214907b7a5c4fa0a71a5"],["categories/docker/index.html","dff24e3d4f272c4d1880bf0e6d4cb34e"],["categories/elk/elasticsearch5/index.html","df0a5de97a27a4888393e63b30bd79ff"],["categories/elk/elasticsearch7/index.html","c2df48c0a7f3fe21ee148b00bf6fe210"],["categories/elk/index.html","2ea7dc50ba45016ec08a231b64d21abf"],["categories/elk/logstash/index.html","fe6cf58db2ead29bda8ed863afa7cf72"],["categories/elk7/filebeat7/index.html","34e076bd5fe59aaae8489f9c034cf6d3"],["categories/elk7/index.html","aa584d7ec823cadfa79e26689c45350e"],["categories/index.html","5df738c7dcae174a79eaeaacc47c606d"],["categories/item2/index.html","1d8c1a28630b8dc75cfcbb7cc28e626e"],["categories/k3s/index.html","7fe720b4e62ac5cd37f4ccc436ea2326"],["categories/k3s/lnmp/index.html","b3717ce132633b83194a2b7a24d4aee2"],["categories/k8s/elk5/index.html","6d3b2cadcd53072b244eef3cf364c04f"],["categories/k8s/elk7/index.html","6cde54f9b4c88bcacebc3c51f7f6a312"],["categories/k8s/index.html","90eac945e3376347ab01d6bf433caec8"],["categories/k8s/kubectl/index.html","029a93174312a366aa361674809c19d2"],["categories/k8s/mysql/index.html","13fce6b52faf866c21b9a26af6988189"],["categories/k8s/storageclass/index.html","0ef4691ea8b9782d33fc9012feff6948"],["categories/k8s/问题总结/index.html","59702cb2c174203d03761895b8b8e400"],["categories/linux/awk/index.html","f0acfd38a4695e6ac652e7540dd8d3f3"],["categories/linux/index.html","4c030f7b4fdf2c8905839d5e6cd9951d"],["categories/linux/shell/index.html","079586f983596f512af2e3a7bfa16a48"],["categories/linux/systemd/index.html","79a0516606337060481fdfdbb015faf2"],["categories/linux/问题总结/index.html","340e4130bc912622501efd5e638bdf0c"],["categories/mac/index.html","bedae4f433faa9d9b9a7f2333380ef58"],["categories/markdown/index.html","84f09958a63471ffe3a31d34b718b513"],["categories/mysql/index.html","cd28761b71be161ac61b036f2ba119fc"],["categories/mysql/主从/index.html","02980892ba97ea6177daa6fb205885b0"],["categories/nfs/index.html","31a176033d2539a7347efd7eab515891"],["categories/nginx/index.html","62a410d5287140b305a95eff64812837"],["categories/nginx/问题总结/index.html","b447f18c20405144ba921785d8038a11"],["categories/php/index.html","83d16ed9931a0c6292f04029c0f42830"],["categories/php/问题总结/index.html","292aab9a46e098a6a130cef2aeb5a309"],["categories/raid/index.html","b934daa0ecf3f785512b615c0e2d58ce"],["categories/博客/index.html","30b1619e3ebba5bc866ba911c2107950"],["categories/博客/美化/index.html","30cc89eaf1e76bb5de0b001cdb000c06"],["categories/存储/ceph/index.html","3343f231ac5376de7702cfd71e87f537"],["categories/存储/index.html","3ac55188d81a3a9ab844f7ba0d6bcacf"],["categories/存储/nfs/index.html","67ed72511250b9752ffc00c5405cc072"],["categories/技术文档/index.html","7ce757d86a143be279d599d9ed6d1ddc"],["categories/技术文档/page/2/index.html","1b3877d157cac5eafa0c627bdade7ddc"],["categories/有趣/index.html","db3df975af62705cc7b5f4e9897c6f80"],["categories/有趣/二次元/index.html","78fb927308b036186b4b996164ce99b7"],["categories/流量复制工具/gor/index.html","3a506bad617f560a0bc71a551ce4706c"],["categories/流量复制工具/index.html","e18d66352ced0dcad7702ebcb0eec2c4"],["categories/网卡/index.html","172f03f68d965b48c67e0dbbc7ab5f74"],["categories/网址/index.html","47f8a27b43a934f51afde311cb991e6b"],["categories/网址/大佬博客/index.html","136733b6247a3a826dce2c3fc18afbe8"],["categories/网址/收藏/index.html","1b1fb13eaa3239576f51b6c720b31349"],["css/main.css","cb79a82cf5ade26a34c3a24f63cebabb"],["images/16/容器的原理-1.png","1c184a092af6b6829c49ee20e70d132a"],["images/27/img1.png","74279f54a523a47f82a95a04ccfc9eb4"],["images/27/img2.jpg","93a32e8f4e52a9ea2a28b72a4223c2a9"],["images/38/gc1.jpg","dc31455119def3534b8b78213e6dcd29"],["images/38/gc2.jpg","ef5563c2f902a9b8550ed006747c94f5"],["images/38/gc3.jpg","3bef257bda43708e5c6d00598e5a6ccf"],["images/38/gc4.jpg","df24a1184fff79f3513b73fc1f4a6938"],["images/38/gc5.jpg","3e0fd4156b9666c1488b49d332875416"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["images/blog6/rancher-pv.png","d2a7e4bbfad5f71e75c9d5459cf5a464"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/docker1.jpg","5c611dd864017adeff648bca93d53f41"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/jixie-title.jpg","3ebd10201e23ecf68aba4524c020db0d"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["images/tcp三次握手图.png","32ddd8df35bd5762604327b25758370e"],["images/tcp四次挥手图.png","684b2b4a0286acadc32247d693dbd961"],["images/test1/test1.jpg","60b725f10c9c85c70d97880dfe8191b3"],["images/title1.jpg","fa2db043867c4c5654471e21ad36e5c0"],["images/title2.jpg","b6e57860ebc3fcdcf150a6a4cf3402ab"],["images/title3.jpg","f0b1554cfa4dd1193719dcfeb9e4de28"],["images/title4.jpg","6eb7bcbb846d1123e830488d75028df7"],["index.html","efc1e7dd658094a3987735f0362409cc"],["js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["js/src/instantclick.js","865d92a4a07409b7fed739e6a108e9c4"],["js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["js/src/live2d.js","3359a94d733737dbdd290dd41f9cef0b"],["js/src/love.js","7bcfdb57debd43483174cf9e15ab37cc"],["js/src/love2.js","2b51ddac5207cba4153da31e9132414c"],["js/src/motion.js","706d085e6cfec6f3e92dedc590d68d68"],["js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["js/src/schemes/pisces.js","1bd23ed75238ebf11afe2aa6b1c3a25b"],["js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["js/src/utils.js","f06ffce70453ad3a4d9611fdde5ca6c3"],["lib/canvas-nest/canvas-nest.min.js","2361106788cc4ea719ed76f52b413e46"],["lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["live2d-widget/README.html","9941b5173b7915eb6158e62f02cd9ea3"],["live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["live2d-widget/autoload.js","fc45c81e48138bde62e7e742cbbdabb9"],["live2d-widget/demo/demo1.html","82a14d37dbd83931644a4ad6ea1f9eb2"],["live2d-widget/demo/demo2.html","6babb045ef6905badc0dbc5e0d98cede"],["live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["live2d-widget/waifu.css","c4dae5924f2fb0b5ea6ef26aaab80db9"],["page/2/index.html","460b816b545f9fbe4832fb44e464e865"],["page/3/index.html","20c6a2db128d8501cbac920fe68f6cfd"],["page/4/index.html","b4f6ac974b590e4fcd223312fd1a905a"],["tags/awk/index.html","36300292da0cac20d2fa41ffebd072c3"],["tags/ceph/index.html","337a96d2782cdbf62ad76f64bea825e5"],["tags/cephfs/index.html","076273f4a5b8fdd62669f30d18cd82fe"],["tags/cloud-native/index.html","86b5d37bf91ab9af8db007b87d810783"],["tags/docker/index.html","45352d0c122d387fba631595d89131bf"],["tags/elasticsearch5/index.html","ef72bad069396410249bb1303d739ef8"],["tags/elasticsearch7/index.html","335a8506c1d3be859310a3d72ca9eefc"],["tags/elk/index.html","9dfa1e6d4f0231c988e212500c828996"],["tags/elk5/index.html","a1ea14ce55787320fe5cfd7f4778400e"],["tags/elk7/index.html","0c492e8f1cee8206b14ec341c84e304a"],["tags/filebeat7/index.html","f932aba423ba5de477ded7058515dd3e"],["tags/gor/index.html","198de76bc8a0ab906a4a4b083d640807"],["tags/hexo6/index.html","d9c2e2401deb35317a1ea31896d6f48c"],["tags/hexo美化/index.html","ea4de720432da7bbd7338590e2d990ac"],["tags/http流量复制工具/index.html","5c8fd933fc1541925dcfcc5398001ad1"],["tags/index.html","f3505d6d7417c24af8649597a5a8e2d8"],["tags/ip/index.html","149a0f578d003ffe568e951dba390c19"],["tags/k3s/index.html","3ec64361c99a3cc96b9ee76efd50ce00"],["tags/k8s/index.html","d207330eb67805ab0ba677add9a81a62"],["tags/k8s存储/index.html","801eba4b8dcc8cc5520fd4ece1bc7156"],["tags/kubectl/index.html","5342bfdd10cef9b53eaebbb94f260c43"],["tags/linux/index.html","c05e1dda53c3c85b7320ded432720909"],["tags/logstash/index.html","0a1d7e56331c2335e6f1bbe0feb8c0bd"],["tags/mac/index.html","5124f6cad3a04024598e66de88ef3b0d"],["tags/markdown/index.html","8f3f3dd7357747d9b4465ac5886ef192"],["tags/mysql/index.html","c34e2fe71807577125adb8ac8669a20a"],["tags/mysql5-7/index.html","6385e1943a4df051351ef2d861886ea0"],["tags/nfs/index.html","5e9ed2f0d2b3e92aa46b810ed1266d5c"],["tags/nginx/index.html","0ec2cc4b1471c06a8dc1ec46f43b7d9d"],["tags/php/index.html","d4fa603dccaedcb8e4bbedb59c23e37b"],["tags/php5/index.html","8852e56d271a12107d848dc9cdac93e5"],["tags/php7/index.html","0a2db7dd6ef5c0acf55971152263c8fd"],["tags/raid/index.html","829cc2b4130f4eec0bae419aa244586d"],["tags/shell/index.html","14ca41e6fc3523b1680b39d1138659ff"],["tags/storageclass/index.html","3bf43aae1973918640dc4a081334484d"],["tags/systemd/index.html","299b045a2e164238d92d43bf5f06db46"],["tags/云原生/index.html","3fac0401d0a24a57218507f79d2c0a61"],["tags/大佬博客/index.html","47c39669d4a3210cb695c15defbd9b1f"],["tags/收藏/index.html","9a84ca7b476e7fa4f19820e9d7b891d7"],["tags/特效/index.html","e644652915dbdf286afc7137dbf6404c"],["tags/网址/index.html","e28f9839be566059aad6938179901afb"]];
>>>>>>> bf9dc185017d422fff12c3fad01fd1983a98a355
>>>>>>> f0eb8557502bb7b89616955eaea606fc1b067664
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







