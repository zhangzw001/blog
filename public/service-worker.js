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

var precacheConfig = [["2019/09/19/2-部署elk7-2-0/index.html","76c08e805c7d244e68f5b5589832f4e3"],["2019/09/19/首次搭建hexo博客系统/index.html","1a89e26137da1bf0190726020b9f8697"],["2019/09/20/3-k8s遇到的一些问题统计总结/index.html","4edbe544ca0f2b4c60dd9de2bea8d899"],["2019/09/24/4-hexo鼠标移动和鼠标点击特效/index.html","2cbb41f2b81f7d8fae00ead7ba2bdb2c"],["2019/09/24/5-hexo添加看板娘/index.html","b4f097f2ebb3675cc23214fd279df1de"],["2019/09/26/6-ceph安装部署/index.html","19ab2e7f39402ae2e4b9e9faede94026"],["2019/09/26/7-k8s部署storageclass动态创建pv-nfs-rbd/index.html","93f91c8a14bedbb373b06c5c845328d9"],["2019/09/26/8-mysql5-7二进制部署/index.html","fa8316aba489af38f2272fffc93719f7"],["2019/09/26/9-linux遇到一些问题统计总结/index.html","a43f8193c29878c45fc04ef585e33435"],["2019/09/27/10-centos6安装nginx1-16-php7-2/index.html","9e8466c80a0ea06f5449120f2009a6a1"],["2019/10/10/11-mysql简单记录/index.html","c76315611400c609d039a0aaf4b4b660"],["2019/10/11/12-awk简单记录/index.html","87db670981bb90030e92bf93a18bca21"],["2019/10/12/13-云原生博客汇总/index.html","00b7e4b683cdf476e625f3d2efd16006"],["2019/10/15/14-mysql目录copy方式迁移/index.html","bbaf689204409e5615ebea41bcc50ee6"],["2019/10/16/15-docker简介和使用/index.html","315ccd967827820d5e54a32868ce68f8"],["2019/10/16/16-dockerfile介绍/index.html","31a17970c11358b064216a24952d65fc"],["2019/10/16/17-markdown一些写法记录/index.html","45b1c8a36dea56d5259157ce51681655"],["2019/10/17/18-收藏链接/index.html","aeee2dd77508180a588e63fde3c24896"],["2019/10/17/19-shell中gt和>的区别/index.html","775f0d632a3ef0e375f2c44e11b9c227"],["2019/10/24/20-k8s搭建mysql5-7-24主从/index.html","fbaa4d7caf8fb5a7d240768412a6db5a"],["2019/10/28/21-流量复制工具gor/index.html","c9f9b83b209b0a076030d863cc694970"],["2019/10/28/22-es集群磁盘扩容/index.html","45760e54f06180a14718617451b7665d"],["2019/10/29/23-mysql5-5主与mysql5-7从部署配置/index.html","7615b0a18abd6bc54e5a8b0d77d3c3b7"],["2019/10/30/24-filebeat7收集mysql慢日志到es/index.html","ad1f49de527910d9910c5fddd595bffe"],["2019/11/01/25-linux一些脚本汇总/index.html","ad64349dd9aa3cb7d9d46264e3082bd0"],["2019/11/01/25-一些脚本汇总/index.html","646758482909244d4cffd84fe3503dc3"],["2019/11/08/26-logstash配置/index.html","3844df055188e66417cd7b9887f369a5"],["2019/11/21/27-k8s一条命令部署es5-2-0集群/index.html","888201c7a70b0a6fb011fbb5649616f3"],["2019/11/25/28-k8s1-16使用旧yml部署配置问题/index.html","48e5d8bf2d0ce7768624babf3cfa427f"],["2019/11/25/29-k3s集群部署项目报挂载nfs错误/index.html","1766e1544ed484826c202342898974e3"],["2019/11/25/30-k3s集群部署项目报挂载nfs错误/index.html","ee67117c7993cb2c15661f2a03ae7a9f"],["2019/11/26/31-systemd一些命令/index.html","55a0087f2ba7931d788697ecb9de4758"],["2019/12/02/32-php错误502问题总结/index.html","ba186904c0cd8d3a2d72fae9b262d15b"],["2019/12/03/29-k3s安装配置/index.html","dc2645ea9828d3a56c57a44c8b3edd5b"],["2019/12/03/33-k3s1.16部署nginx+php5.2.17/index.html","153d06cc678f249db417beb6d9878d87"],["2019/12/05/34-k8s一些命令总结/index.html","85fb11c9e842b49fba49b68f9c821967"],["2020/02/27/35-raid1盘数据迁移/index.html","0f76eff3d43c6cda9dfd1e91a86ea125"],["2020/02/27/36-centos单网卡配置多ip的几种方法/index.html","4bbb5bf232e316c4762b25d9f044f885"],["2020/03/10/37-mac一些常用命令/index.html","3c24ab30b82a896f90e9c5c2fc00e328"],["2020/03/12/38-es集群节点出现overhead脱机的问题/index.html","e4ac065fd9449c3b44b3dfa4007d51e2"],["2020/03/18/39-记一次nginx的request-time-和upstream-response-time差值很大问题/index.html","0797ecc5f3bad3b52c3062ff08a9bc43"],["2020/03/18/40-记一次跨域的nginx配置问题/index.html","8363ea46ce66d842e4094daab8ddfd73"],["2020/03/19/41-记一次es集群内存溢出的问题/index.html","00bc793a5cac341f4fd01cf7755097c0"],["2020/03/24/42-kubeadm安装高可用k8s集群/index.html","1badd693fa9fbf09ccfd220af9ada829"],["2020/03/31/43-k8s的yaml配置名词解释-模板/index.html","afde1c2778f8f5164a1ae5bdc59de30c"],["2020/04/09/44-k8s部署fluentd-kafka-logstash-es/index.html","22bb190f655f2450c76c7a947439b1fd"],["2020/04/23/45-gitlab-ci与k8s结合/index.html","7bdf2b80305a3f9d23f5d9136d5d9616"],["archives/2019/09/index.html","8b1691fa43bb546ce74367a36a9bf7b1"],["archives/2019/10/index.html","aecf596237068c72ac1d725e17329a62"],["archives/2019/11/index.html","4d241bc58d8609a427f68755d1f3f394"],["archives/2019/12/index.html","49a47309e301a64c1a29c9260cc6dbd3"],["archives/2019/index.html","ef58a36be0c04b9e703829d07812bc77"],["archives/2019/page/2/index.html","577df8faed54eda1ed7a1156d974da32"],["archives/2020/02/index.html","830e9a15ac1530799546d12b367a6d48"],["archives/2020/03/index.html","9fb7f4b2e3c94e9103b6e4dfaeea5fa8"],["archives/2020/04/index.html","e46fe013259b0e95b6bc50e3aef085ae"],["archives/2020/index.html","c22f3fdd62e51059f668f1320fa0ec95"],["archives/index.html","bbb13e40af22f4f3ef2ec072cfb00bf2"],["archives/page/2/index.html","e349b37e605d78a15e73e7e8bcfdb2d5"],["archives/page/3/index.html","98ed8dd32e7cc3723b0c1efa7ecb826d"],["categories/docker/Dockerfile/index.html","68548fb3934f81e06ca9813e4c689d4e"],["categories/docker/index.html","981b066c703d55464da118dd2feebc6f"],["categories/elk/elasticsearch5/index.html","6d02659e7726ff711078f2f6377dd376"],["categories/elk/elasticsearch7/index.html","a5ff2efc7cd48209a55b2f5e99a7123e"],["categories/elk/index.html","068fa4917c3d3dbd988a1cebd07c513f"],["categories/elk/logstash/index.html","9b65ea7890ae062b371c7c05ccebec8f"],["categories/elk7/filebeat7/index.html","d5df231515032bc8d5cc262408c66d2c"],["categories/elk7/index.html","53911e81ea73199d60592c2aa60eb904"],["categories/fluentd/index.html","3c16031ed8962f871178c664ff568426"],["categories/gitlab-ci/index.html","6fe35499e10a3438397ff2e7dcdcf50c"],["categories/index.html","32eabf721a6bd8448f13424c53effe42"],["categories/item2/index.html","458d106a4540b6770cecae5c9f4bec16"],["categories/k3s/index.html","f8ff638c3b492d0213ed8ac65b6a099e"],["categories/k3s/lnmp/index.html","a76e45bf6d8506b0a20ba680e8bc6140"],["categories/k8s/elk5/index.html","91a91c6586ed92e01d6e6dc9cb960812"],["categories/k8s/elk7/index.html","c6f811db73a90fb8c30cc5e375debf76"],["categories/k8s/index.html","413198092bf11fc2e837687f0cee47fd"],["categories/k8s/kubectl/index.html","d9a6a2a4504303133b295845e19a87d0"],["categories/k8s/mysql/index.html","6f0e8a17b247ba9ee56035cdce2466fd"],["categories/k8s/storageclass/index.html","ca7e4122c51f8bbcc8cae0307c419663"],["categories/k8s/问题总结/index.html","28b2a6d8199068b2419825ba43ba9227"],["categories/linux/awk/index.html","d086eb25a975fa1441885ab7ede3e453"],["categories/linux/index.html","4fc5fbbdbbe747bdef41a5f705329d9c"],["categories/linux/shell/index.html","404f0f87ac471db9150c4b848d529995"],["categories/linux/systemd/index.html","100044fcf74068362207fb8f6aad7524"],["categories/linux/问题总结/index.html","88cc33f8fd9abdaf50d7ffc3ba0faf0a"],["categories/mac/index.html","e5ba20b8f7b0e38d1ba1da783f8bf57c"],["categories/markdown/index.html","9bc577269cc46709616b3a55a54b6eda"],["categories/mysql/index.html","ab399f71e2363c017307d2b5cfb0601b"],["categories/mysql/主从/index.html","1d1cb98135e9b6b58e7f760fa6182323"],["categories/nfs/index.html","18f64d1b6714063b759149890a14e555"],["categories/nginx/index.html","9dc0788951eee6ed6ba9fbd36b156f67"],["categories/nginx/问题总结/index.html","997f6c946d3538d9e336f0b7e5b4f621"],["categories/php/index.html","1327ca3e398ecaf7c23751c9be9c807d"],["categories/php/问题总结/index.html","5e7a970507398ae4a87ba7b888322a95"],["categories/raid/index.html","14b3ce07a14c13f3f132fefb5eed133a"],["categories/博客/index.html","ceb41ccc27765f715f440e380d524ef5"],["categories/博客/美化/index.html","4666e5add329709c59ccf060fccc4bbc"],["categories/存储/ceph/index.html","f70ea4c1ce07328fc26846fb3217b5ae"],["categories/存储/index.html","33d2564e6bc44aca348b7977e84fcd9b"],["categories/存储/nfs/index.html","83f47df6ee2ffe2b41844594876d9461"],["categories/技术文档/index.html","bb70d796cc78e9b5f2c84c77e8afe8cc"],["categories/技术文档/page/2/index.html","3c73ccde692bfd2470086169158f3ec0"],["categories/有趣/index.html","938e55b28699046c63f0fdc9ab4d5d55"],["categories/有趣/二次元/index.html","34dffbc3dc0d45e6e559ef4e84d1a03b"],["categories/流量复制工具/gor/index.html","2d33874f060cf3e3a307e75e1c42fde5"],["categories/流量复制工具/index.html","aa6d10ba1f33c3972a10b74f6ff5799e"],["categories/网卡/index.html","615dde0ccc3e8bc4acf8895004b83e97"],["categories/网址/index.html","5b94e5c65a3788f94af590602171c713"],["categories/网址/大佬博客/index.html","f50ae4b95ebde61f2bb229b6026c4e8e"],["categories/网址/收藏/index.html","3ca2afda9c875f1d378f5de22da12293"],["css/main.css","8df07c184157677a718bbaa2613506fc"],["images/16/容器的原理-1.png","1c184a092af6b6829c49ee20e70d132a"],["images/27/img1.png","74279f54a523a47f82a95a04ccfc9eb4"],["images/27/img2.jpg","93a32e8f4e52a9ea2a28b72a4223c2a9"],["images/38/gc1.jpg","dc31455119def3534b8b78213e6dcd29"],["images/38/gc2.jpg","ef5563c2f902a9b8550ed006747c94f5"],["images/38/gc3.jpg","3bef257bda43708e5c6d00598e5a6ccf"],["images/38/gc4.jpg","df24a1184fff79f3513b73fc1f4a6938"],["images/38/gc5.jpg","3e0fd4156b9666c1488b49d332875416"],["images/42/01.png","2a7524daaed26030a260df4e3fb58197"],["images/42/02.png","9c6ea26880ea0a13e900835c3fc75d65"],["images/42/03.png","d25c88fa33688ffe4a39aa59797e9e5d"],["images/42/04.png","8816231bb00c27abc8c97fc86797d474"],["images/45/01.png","95bacc819ae17e7e307034050799f3fb"],["images/45/02.png","be5e8c526b05c276cb9a1507a1a42323"],["images/45/03.png","c090ec8f8b444e05087d92b717e3ea8a"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["images/blog6/rancher-pv.png","d2a7e4bbfad5f71e75c9d5459cf5a464"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/docker1.jpg","5c611dd864017adeff648bca93d53f41"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/jixie-title.jpg","3ebd10201e23ecf68aba4524c020db0d"],["images/k8s_3part.jpg","8c72197f0daf342bc8b87d908527d638"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["images/tcp三次握手图.png","32ddd8df35bd5762604327b25758370e"],["images/tcp四次挥手图.png","684b2b4a0286acadc32247d693dbd961"],["images/test1/test1.jpg","60b725f10c9c85c70d97880dfe8191b3"],["images/title1.jpg","fa2db043867c4c5654471e21ad36e5c0"],["images/title2.jpg","b6e57860ebc3fcdcf150a6a4cf3402ab"],["images/title3.jpg","f0b1554cfa4dd1193719dcfeb9e4de28"],["images/title4.jpg","6eb7bcbb846d1123e830488d75028df7"],["index.html","9779b8624fe3953d9691c47f33245af4"],["js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["js/src/instantclick.js","865d92a4a07409b7fed739e6a108e9c4"],["js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["js/src/live2d.js","3359a94d733737dbdd290dd41f9cef0b"],["js/src/love.js","7bcfdb57debd43483174cf9e15ab37cc"],["js/src/love2.js","2b51ddac5207cba4153da31e9132414c"],["js/src/motion.js","706d085e6cfec6f3e92dedc590d68d68"],["js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["js/src/schemes/pisces.js","1bd23ed75238ebf11afe2aa6b1c3a25b"],["js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["js/src/utils.js","f06ffce70453ad3a4d9611fdde5ca6c3"],["lib/canvas-nest/canvas-nest.min.js","2361106788cc4ea719ed76f52b413e46"],["lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["live2d-widget/README.html","9941b5173b7915eb6158e62f02cd9ea3"],["live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["live2d-widget/autoload.js","fc45c81e48138bde62e7e742cbbdabb9"],["live2d-widget/demo/demo1.html","82a14d37dbd83931644a4ad6ea1f9eb2"],["live2d-widget/demo/demo2.html","6babb045ef6905badc0dbc5e0d98cede"],["live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["live2d-widget/waifu.css","c4dae5924f2fb0b5ea6ef26aaab80db9"],["page/2/index.html","7f6e9c103e091aa22ee4e9e5cff51760"],["page/3/index.html","8a3120f4b22b7b4e232ffdc72fea1476"],["page/4/index.html","ed761100f5ce41f18f4aef889419d87a"],["page/5/index.html","565368ee243de91ea79cfe9a1e0031e3"],["tags/awk/index.html","986159dd5dbddccbf013efa568b6cde7"],["tags/ceph/index.html","6ebfaeaab4262863172208f5817065d9"],["tags/cephfs/index.html","656182f09cc3f1de9f39b7cd118314fc"],["tags/cloud-native/index.html","3657bf022e4c2a5cf3a7ee7a93742461"],["tags/docker/index.html","249f39ad08e5930f6c3fa03193645fea"],["tags/elasticsearch5/index.html","a9afde4e609b3b4b0cb0cfb31d6e5f0b"],["tags/elasticsearch7/index.html","782bc25c76d7477063a12fb59074be5b"],["tags/elk/index.html","2f12b571e44cf485d99ee462345f3353"],["tags/elk5/index.html","acf0d53608e30948c0903c63a8173741"],["tags/elk7/index.html","ebe8fcabce51841a4060c30db4d4a7ef"],["tags/filebeat7/index.html","16bb91819be8a3e588e8ed8a01dace4b"],["tags/fluentd/index.html","dc08fa28f6676e0f5e330176f00ef383"],["tags/gitlab-runner/index.html","75c447327fe30a2bcc2afe18b3c117a6"],["tags/gor/index.html","fe4f47d5e0fe641074fe02726efaf900"],["tags/hexo6/index.html","f753789771742032836fa350419e808f"],["tags/hexo美化/index.html","b417d995ebffc3d74b7a9c4b1a53cc02"],["tags/http流量复制工具/index.html","a761e64d4ba2f1bdef77a36ed3cfd183"],["tags/index.html","5d1a4278e829305c06f5d26697bc9369"],["tags/ip/index.html","afaea8175b7314ed788c7b41b621d167"],["tags/k3s/index.html","a6b0bd271ed163291b1d45ee3205ee57"],["tags/k8s/index.html","e39d31fcc5273b15c51f0559ce77853a"],["tags/k8s存储/index.html","203fad05d6b9bc71e682c790b3b8dc1d"],["tags/kubectl/index.html","e22dc0bf65aa323123b1c3a733a3e2e6"],["tags/linux/index.html","ffd2c7893ebf116a9e910e3e46e2e293"],["tags/logstash/index.html","4a607d9794df0107b839978c31c1f56c"],["tags/mac/index.html","929d3919be4600fb2b01a2f7f8567e94"],["tags/markdown/index.html","568d09798b4e18ab03f4b5a46870e940"],["tags/mysql/index.html","f0d421892fd0b62257de82d2e5551b83"],["tags/mysql5-7/index.html","14373f2573b41881732ffedc7511f9b9"],["tags/nfs/index.html","73c93d74135657b0bc23aad6d09d8a88"],["tags/nginx/index.html","2dad709d2d13f7590c99be6a50ba699a"],["tags/php/index.html","55b0c421429373702a719968ee5b20cf"],["tags/php5/index.html","2c1115921e7f75585d463c0dae9076ff"],["tags/php7/index.html","598c4e24919ed8234694ae8da56dc000"],["tags/raid/index.html","9e257afa3404034ff8957a75f52d0fa8"],["tags/shell/index.html","7445eda24a243055b09b59e7acbda4c9"],["tags/storageclass/index.html","1618dd5783ec258249012de4c186ac8e"],["tags/systemd/index.html","73676201a662f1011a853298f2bf68f3"],["tags/云原生/index.html","e60892f233d014da1c1fcee511609fc7"],["tags/大佬博客/index.html","6446d594b778dd5f0d7d8e60f0dd70ad"],["tags/收藏/index.html","80f3cf393f2a76985d5feede9dfeda46"],["tags/特效/index.html","5e87828643683bd91963edd6c8a0b369"],["tags/网址/index.html","296d746ee76a18f1ec00b0674dacd7b6"]];
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







