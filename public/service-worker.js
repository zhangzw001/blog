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

var precacheConfig = [["2019/09/19/2-部署elk7-2-0/index.html","4b47eebfafbfd473bb87e8dc62e2917a"],["2019/09/19/首次搭建hexo博客系统/index.html","bebebb5cae6f4dc56e1e18b6176661aa"],["2019/09/20/3-k8s遇到的一些问题统计总结/index.html","1e226d43dc334f65b8759c38f46d70ec"],["2019/09/24/4-hexo鼠标移动和鼠标点击特效/index.html","f0e8046d8b462f764407b57d4dcb7d29"],["2019/09/24/5-hexo添加看板娘/index.html","40407f4214b03a42b5721260d3b5efac"],["2019/09/26/6-ceph安装部署/index.html","528f726881be90de9f446e8f32f4b0d5"],["2019/09/26/7-k8s部署storageclass动态创建pv-nfs-rbd/index.html","a51359f94a6ccedd778b8be3adde9a38"],["2019/09/26/8-mysql5-7二进制部署/index.html","f96be2249d77682ebd7e77de348a8f3d"],["2019/09/26/9-linux遇到一些问题统计总结/index.html","af82a960a8672c9215f6e4d65c89c11a"],["2019/09/27/10-centos6安装nginx1-16-php7-2/index.html","400260105df8a02fa25f9695af1f32ec"],["2019/10/10/11-mysql简单记录/index.html","a675d348c0c5deace50d7e1d8da52ea5"],["2019/10/11/12-awk简单记录/index.html","fc3e3f3432e2f4c4b54087c84971e800"],["2019/10/12/13-云原生博客汇总/index.html","a019625f0ae9f3b61addae40d1a67301"],["2019/10/15/14-mysql目录copy方式迁移/index.html","6bd2d755820f64f71568822037fac3a0"],["2019/10/16/15-docker简介和使用/index.html","020ca62530185701f15cbe5197d510d1"],["2019/10/16/16-dockerfile介绍/index.html","bf535fb4c1ca62395b6fc8d096313a14"],["2019/10/16/17-markdown一些写法记录/index.html","f6df67360beb13240e235f5e01e65b68"],["2019/10/17/18-收藏链接/index.html","38b8b197c051da55107423bc7fdecc18"],["2019/10/17/19-shell中gt和>的区别/index.html","33b5dddb5464f4edb39ffbcda2bf195a"],["2019/10/24/20-k8s搭建mysql5-7-24主从/index.html","26e8a230e8617cf615fc4c4df84bc979"],["2019/10/28/21-流量复制工具gor/index.html","f73c6e485499c8574919d50c47c875cc"],["2019/10/28/22-es集群磁盘扩容/index.html","7967d47e93ab5e12520519cd37c485fc"],["2019/10/29/23-mysql5-5主与mysql5-7从部署配置/index.html","e3fcd902732acc3e63684fec32d2a266"],["2019/10/30/24-filebeat7收集mysql慢日志到es/index.html","459d9b79cdb8e860af5fc2de4c663e34"],["2019/11/01/25-linux一些脚本汇总/index.html","151a7c2ac2dfe44000620436d9ef52a1"],["2019/11/01/25-一些脚本汇总/index.html","62450f6777a2472f3a38c70e76b9a9a6"],["2019/11/08/26-logstash配置/index.html","28b1ed7c07aa42b90b7a979e22a6d6ca"],["2019/11/21/27-k8s一条命令部署es5-2-0集群/index.html","982d8e641d4ac94596f1fc687c5654a8"],["2019/11/25/28-k8s1-16使用旧yml部署配置问题/index.html","854a61c1a6635916830b3fa6f7ed9a9d"],["2019/11/25/29-k3s集群部署项目报挂载nfs错误/index.html","7ee9e521ad65427c33fcebcc553a6faf"],["2019/11/25/30-k3s集群部署项目报挂载nfs错误/index.html","3ba4cf5116ea573b02dea70c2630ae87"],["2019/11/26/31-systemd一些命令/index.html","49256086cdf6060199c024509ee55275"],["2019/12/02/32-php错误502问题总结/index.html","7c66e1598cade319483457b59da503b5"],["2019/12/03/29-k3s安装配置/index.html","cd35b4cf1574a0e7dec0560408989ee9"],["2019/12/03/33-k3s1.16部署nginx+php5.2.17/index.html","a84b14418e42d6077dc5e80dacc9f10b"],["2019/12/05/34-k8s一些命令总结/index.html","70d8eb0754fb356deecde1a75516ac75"],["2020/02/27/35-raid1盘数据迁移/index.html","eaa0d8133285cdaee75ae8c294a3bbb1"],["2020/02/27/36-centos单网卡配置多ip的几种方法/index.html","8817548eb02fe5573b229d8b48224eeb"],["2020/03/10/37-mac一些常用命令/index.html","741b36a8ddf2e1599e9fa7a9ea6abc6c"],["2020/03/12/38-es集群节点出现overhead脱机的问题/index.html","710b9eb7945397ea5c93f98369234767"],["2020/03/18/39-记一次nginx的request-time-和upstream-response-time差值很大问题/index.html","ad401ecc3d7185334a5a9dc3aee854c4"],["2020/03/18/40-记一次跨域的nginx配置问题/index.html","23ebefabf88866450f185d52d02220dd"],["2020/03/19/41-记一次es集群内存溢出的问题/index.html","156cb30a0fe7d1225652996dfa45fcbf"],["2020/03/24/42-kubeadm安装高可用k8s集群/index.html","972556f230d4f0ed6d3515e9cd463874"],["archives/2019/09/index.html","4410d5b566edc91908f855a272031c6c"],["archives/2019/10/index.html","26da9beb41ee1a49461648b4606e68bb"],["archives/2019/11/index.html","956ca96104bafeb32d4d8fb5ab4b9e77"],["archives/2019/12/index.html","5f38de3465e40862c978156a8f3c1a2a"],["archives/2019/index.html","9151bb59e2accbb867c0b3fce4d7b2f8"],["archives/2019/page/2/index.html","b13ed260ff5563b8473cbe0ae975c397"],["archives/2020/02/index.html","a8eef6256ba0968ed71eec05928d3d3f"],["archives/2020/03/index.html","acedd761606770c9c2814f76b0b2cd90"],["archives/2020/index.html","3b6dd0f59fcb2713ddf0faf195c56132"],["archives/index.html","90e21a4898e1d98ab447748791b19d74"],["archives/page/2/index.html","81c57200c23af78e38dfe6fbdbb35b9d"],["archives/page/3/index.html","a2c8a8e0b1f2c62ab8768e202b059e84"],["categories/docker/Dockerfile/index.html","b32127821f073999b7d8e8aaab8b987b"],["categories/docker/index.html","9627112edddd2cb55151b8c71c534f54"],["categories/elk/elasticsearch5/index.html","c5bb85a2b64df05828df723798c716cb"],["categories/elk/elasticsearch7/index.html","2d7f39c232d2333a49b9f8ce28dc7ffd"],["categories/elk/index.html","89387fc8f6e762d5fad734dd79e56048"],["categories/elk/logstash/index.html","1976ac9665e29ccd4abd92b7a6bcec9c"],["categories/elk7/filebeat7/index.html","b67e8209c411d59e56095966cede19a0"],["categories/elk7/index.html","c95621b6082e940918b39995b6a5d3e5"],["categories/index.html","c93fbd80fca88b3a150516a66a693e69"],["categories/item2/index.html","79f2d9d6916ac014ca386e3d7194efe7"],["categories/k3s/index.html","bbcb054f720dd21b7d86b3cb835178dd"],["categories/k3s/lnmp/index.html","7845c97db2149fbee08a81d6b8343eea"],["categories/k8s/elk5/index.html","c8f337e856f72889dfbdade184bf5e47"],["categories/k8s/elk7/index.html","aeeffbe9824e6526e7706848328c347c"],["categories/k8s/index.html","c380cf144dfd733033f71f404c856482"],["categories/k8s/kubectl/index.html","b44942803a1d27795cb664f76d3e0bc1"],["categories/k8s/mysql/index.html","6117200576ffcb7a13c3862dca62c1c0"],["categories/k8s/storageclass/index.html","85f57eb80c347a2edc4c6891fd194d82"],["categories/k8s/问题总结/index.html","9150499b802f66e13f6dab870b23f03c"],["categories/linux/awk/index.html","5af49870d07165528bedcbdfcb130dce"],["categories/linux/index.html","dbe19a50a64f2ed16255a9f423f52390"],["categories/linux/shell/index.html","b6f7176c898e44f6b856fce789a7a123"],["categories/linux/systemd/index.html","86ca85c544821396b95b805e2a385eb3"],["categories/linux/问题总结/index.html","c5612055578a86078decf4d16c8a7d09"],["categories/mac/index.html","ee396ac6c99b7917249ce52300b38875"],["categories/markdown/index.html","cfd9a526be267edd7a29bd516acaf5d0"],["categories/mysql/index.html","29b6097264d1f736723b4a4d2f667577"],["categories/mysql/主从/index.html","d47feac0d563338463844b51f133c6a7"],["categories/nfs/index.html","6059d22e0c89477ede7b9db749067c87"],["categories/nginx/index.html","c6cb9ec05b73889673f428eea3dba673"],["categories/nginx/问题总结/index.html","5396bd9ceec2b4eb87773374b3990330"],["categories/php/index.html","669c8548c2b7da916c1021cec0ed7bdb"],["categories/php/问题总结/index.html","3d4235a8f5654eea61897c9b1c01cd98"],["categories/raid/index.html","17f003e429acf5bc403935d9fed60e09"],["categories/博客/index.html","6a8601064d81d4432e60dc4dffffa94c"],["categories/博客/美化/index.html","6a5b95f539d8a01a421d5ecfc3af7948"],["categories/存储/ceph/index.html","bd65303a658276b752ed655f13961068"],["categories/存储/index.html","5969e7ba105d60c7dfa2d2a83c7c8f96"],["categories/存储/nfs/index.html","70fa7b6c79a4332938c69c320286b17c"],["categories/技术文档/index.html","481e909258becf7957ac5b93f631fa02"],["categories/技术文档/page/2/index.html","26046e9f2992e73d333bef0659c18973"],["categories/有趣/index.html","c05262f8d9fb869ee02d50ad05de9a73"],["categories/有趣/二次元/index.html","8b563bc82a9c328a38e9b4e0a8ec6d99"],["categories/流量复制工具/gor/index.html","3874cff6080a3881e5e7f8bbf6bf9b0f"],["categories/流量复制工具/index.html","340d01cec20c24d8fcfc78ddec0b3abb"],["categories/网卡/index.html","b6ac462d5ae760f37c502a7cd67e81ed"],["categories/网址/index.html","729349f882604827f1db0f26a7cfa39c"],["categories/网址/大佬博客/index.html","c54cf250445bcfe662718e4725e05072"],["categories/网址/收藏/index.html","ec9e24dbea4a2cea3f9f32904cfd227d"],["css/main.css","d09015cca3ab2fa3d1886350e6f8e2f7"],["images/16/容器的原理-1.png","1c184a092af6b6829c49ee20e70d132a"],["images/27/img1.png","74279f54a523a47f82a95a04ccfc9eb4"],["images/27/img2.jpg","93a32e8f4e52a9ea2a28b72a4223c2a9"],["images/38/gc1.jpg","dc31455119def3534b8b78213e6dcd29"],["images/38/gc2.jpg","ef5563c2f902a9b8550ed006747c94f5"],["images/38/gc3.jpg","3bef257bda43708e5c6d00598e5a6ccf"],["images/38/gc4.jpg","df24a1184fff79f3513b73fc1f4a6938"],["images/38/gc5.jpg","3e0fd4156b9666c1488b49d332875416"],["images/42/01.png","2a7524daaed26030a260df4e3fb58197"],["images/42/02.png","9c6ea26880ea0a13e900835c3fc75d65"],["images/42/03.png","d25c88fa33688ffe4a39aa59797e9e5d"],["images/42/04.png","8816231bb00c27abc8c97fc86797d474"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["images/blog6/rancher-pv.png","d2a7e4bbfad5f71e75c9d5459cf5a464"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/docker1.jpg","5c611dd864017adeff648bca93d53f41"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/jixie-title.jpg","3ebd10201e23ecf68aba4524c020db0d"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["images/tcp三次握手图.png","32ddd8df35bd5762604327b25758370e"],["images/tcp四次挥手图.png","684b2b4a0286acadc32247d693dbd961"],["images/test1/test1.jpg","60b725f10c9c85c70d97880dfe8191b3"],["images/title1.jpg","fa2db043867c4c5654471e21ad36e5c0"],["images/title2.jpg","b6e57860ebc3fcdcf150a6a4cf3402ab"],["images/title3.jpg","f0b1554cfa4dd1193719dcfeb9e4de28"],["images/title4.jpg","6eb7bcbb846d1123e830488d75028df7"],["index.html","2a3f051c0109e3203e7f2eb6445d6c5f"],["js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["js/src/instantclick.js","865d92a4a07409b7fed739e6a108e9c4"],["js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["js/src/live2d.js","3359a94d733737dbdd290dd41f9cef0b"],["js/src/love.js","7bcfdb57debd43483174cf9e15ab37cc"],["js/src/love2.js","2b51ddac5207cba4153da31e9132414c"],["js/src/motion.js","706d085e6cfec6f3e92dedc590d68d68"],["js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["js/src/schemes/pisces.js","1bd23ed75238ebf11afe2aa6b1c3a25b"],["js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["js/src/utils.js","f06ffce70453ad3a4d9611fdde5ca6c3"],["lib/canvas-nest/canvas-nest.min.js","2361106788cc4ea719ed76f52b413e46"],["lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["live2d-widget/README.html","9941b5173b7915eb6158e62f02cd9ea3"],["live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["live2d-widget/autoload.js","fc45c81e48138bde62e7e742cbbdabb9"],["live2d-widget/demo/demo1.html","82a14d37dbd83931644a4ad6ea1f9eb2"],["live2d-widget/demo/demo2.html","6babb045ef6905badc0dbc5e0d98cede"],["live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["live2d-widget/waifu.css","c4dae5924f2fb0b5ea6ef26aaab80db9"],["page/2/index.html","593bf0f799ba6a259d07d8b814c6fb3e"],["page/3/index.html","0adfd23069331cd9ba433db539baa0d6"],["page/4/index.html","7587cae474099310df2f3383e629ee6a"],["page/5/index.html","95b514b44c4fae0f43e616adc98c2d92"],["tags/awk/index.html","36c3295388abefdd18ee57f25218716c"],["tags/ceph/index.html","09656da7c3c6436ceff1cb2a3cfd04b0"],["tags/cephfs/index.html","3e94891a4eafc0d2c5ab1d74a9df971f"],["tags/cloud-native/index.html","9f718c5175a27a56f93ce25d9ea9e547"],["tags/docker/index.html","694bbce0b6fce262add0323a3b0d159f"],["tags/elasticsearch5/index.html","3827d297e21ed86cefa8e224d679d3f3"],["tags/elasticsearch7/index.html","a262a282835ee9970a94366bd2eddf97"],["tags/elk/index.html","27c85d19aab7562ada68ab0a094d6e0f"],["tags/elk5/index.html","f87cfbcfa169cae95988d7fb3bc53eb9"],["tags/elk7/index.html","a3bd60a32afde598c8630beced91f241"],["tags/filebeat7/index.html","ad60c8f6114c5416840b498a762cb524"],["tags/gor/index.html","f5c520125c6db23767fe73d755bc31f1"],["tags/hexo6/index.html","93a0cd7ee9eb5b22bb4ec388e3d3b31f"],["tags/hexo美化/index.html","cffd0d6f2425f5f02cc323807b3e632d"],["tags/http流量复制工具/index.html","3da80f91b38e2424abe197eeb22f7e23"],["tags/index.html","d79162400c2a241f687b160f199f14e0"],["tags/ip/index.html","6218d7d8f8281e4f69a8c4ed2402a861"],["tags/k3s/index.html","ddcc10de47111532b9f1e84bfa7b875c"],["tags/k8s/index.html","580268f71b68eca6db91a95466d22840"],["tags/k8s存储/index.html","3909c5c64eef8992aac1a070c732f60a"],["tags/kubectl/index.html","32b37444b0a48c019916618ecbdf928a"],["tags/linux/index.html","772b2a596f19b30d34df3422e05e2d64"],["tags/logstash/index.html","9a8130636fc0a7e8fe86151c25ce7326"],["tags/mac/index.html","6807268de2bc9e4a7237087ef2831965"],["tags/markdown/index.html","5f72dd7fdb541cb60155cc4b622f031c"],["tags/mysql/index.html","e70e9892918025d7f7cff5a780c82767"],["tags/mysql5-7/index.html","5e2fcc5782e94ec95facd68a979cccb0"],["tags/nfs/index.html","70f13520d3a2c5f0ced93abd8a60af78"],["tags/nginx/index.html","e6d8a0c91a522a81793573c3e322267f"],["tags/php/index.html","4055656f9deb9c0836ac6295694f7b6b"],["tags/php5/index.html","c9fec4268fbdb792b69f6d92348bc7f6"],["tags/php7/index.html","c12047aa2ce9a5165eab5af10e66ede5"],["tags/raid/index.html","7ec8a9543a8021f08fa617b431878f71"],["tags/shell/index.html","1d228eb59c558ce072135f20af824d54"],["tags/storageclass/index.html","9ea59397ed85731af00c70e86b66afda"],["tags/systemd/index.html","e7e53ef410a8b5b1c60831c4b79f7f86"],["tags/云原生/index.html","dd3bf19b9325457d7492811349588ccc"],["tags/大佬博客/index.html","d5453ffb866555335e97775acc41ad86"],["tags/收藏/index.html","f1c0b36c84e4dfc5df3ecf3cbf0e137f"],["tags/特效/index.html","85bacc17a56df4dd851a18c4833abf6a"],["tags/网址/index.html","18d10f78e240d4480e98feeff2660cd8"]];
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







