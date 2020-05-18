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

var precacheConfig = [["2019/09/19/2-部署elk7-2-0/index.html","a4dddaef99db992c6f018848542afb68"],["2019/09/19/首次搭建hexo博客系统/index.html","7ece5945505ad81c46c4c467ffe82a75"],["2019/09/20/3-k8s遇到的一些问题统计总结/index.html","881c3389eac161a076ac2a20e98dc469"],["2019/09/24/4-hexo鼠标移动和鼠标点击特效/index.html","2b2dd6c1d14339bf453025e60d83614d"],["2019/09/24/5-hexo添加看板娘/index.html","475e878c4b74e72f4a4627ed2231ebc2"],["2019/09/26/6-ceph安装部署/index.html","f1ad1d2181ce07fcfa562f8b6b97787a"],["2019/09/26/7-k8s部署storageclass动态创建pv-nfs-rbd/index.html","379ca13cab3612a5d6ea4d960eb014fb"],["2019/09/26/8-mysql5-7二进制部署/index.html","f39d96bce72c9ba8b3878afbb1fab216"],["2019/09/26/9-linux遇到一些问题统计总结/index.html","3a6f34baeee351521af1a24cd2673bf2"],["2019/09/27/10-centos6安装nginx1-16-php7-2/index.html","018f0c6d5a75d55d5438cdd3454a6f54"],["2019/10/10/11-mysql简单记录/index.html","d77c2c037370ef0ab845d65017936fc5"],["2019/10/11/12-awk简单记录/index.html","27d99503fa7446d9c7cd32cb11d8630e"],["2019/10/12/13-云原生博客汇总/index.html","ac6505963e3b255a2a15aae08fb2de48"],["2019/10/15/14-mysql目录copy方式迁移/index.html","fb8f821a7837102bd48001a99bdc9430"],["2019/10/16/15-docker简介和使用/index.html","2c127c672d5148472a00f9e7fad053a1"],["2019/10/16/16-dockerfile介绍/index.html","98276ae00f71bbe0d3b0d07e9a075b23"],["2019/10/16/17-markdown一些写法记录/index.html","5c4cec2f9e10f678bd72d99633eebb4a"],["2019/10/17/18-收藏链接/index.html","db4d772c3b708774050e8764c238c401"],["2019/10/17/19-shell中gt和>的区别/index.html","00c8395b905849387c86270903068131"],["2019/10/24/20-k8s搭建mysql5-7-24主从/index.html","21c3aa8317a1899487182ae1f91a29df"],["2019/10/28/21-流量复制工具gor/index.html","b9e19bd3ca014e45c5877d75bcbc189b"],["2019/10/28/22-es集群磁盘扩容/index.html","e8a70a731b477ee56ce59654fced2edf"],["2019/10/29/23-mysql5-5主与mysql5-7从部署配置/index.html","6068a3b3ce60fdfa3f566ee1337455ce"],["2019/10/30/24-filebeat7收集mysql慢日志到es/index.html","cbf7d752a77bdb138e184e1ecc868479"],["2019/11/01/25-linux一些脚本汇总/index.html","e341ce9ff284f295a427625841f5596f"],["2019/11/01/25-一些脚本汇总/index.html","4ba444a14d3510f2535c524844bfd3ae"],["2019/11/08/26-logstash配置/index.html","3afbf89a3cb75d8610e3bb6af5166bb4"],["2019/11/21/27-k8s一条命令部署es5-2-0集群/index.html","e3babdf8446f4ca7a0dd234193a82eea"],["2019/11/25/28-k8s1-16使用旧yml部署配置问题/index.html","54047364d4bccbd37aeebb37c0d71889"],["2019/11/25/29-k3s集群部署项目报挂载nfs错误/index.html","6e2ad4985e9c8a31e8e8d146ce29d92c"],["2019/11/25/30-k3s集群部署项目报挂载nfs错误/index.html","68b03cb4f394c5ac9f544b41a1f46491"],["2019/11/26/31-systemd一些命令/index.html","e529d7a767b068258913b4d9b029274a"],["2019/12/02/32-php错误502问题总结/index.html","bd88d9eda3969140857523c8c3298806"],["2019/12/03/29-k3s安装配置/index.html","010b3cfcae7377be16a741827060d649"],["2019/12/03/33-k3s1.16部署nginx+php5.2.17/index.html","22ff25e4190f434e24f50e41c330cb34"],["2019/12/05/34-k8s一些命令总结/index.html","eec129866d5f48ebb166916686980c13"],["2020/02/27/35-raid1盘数据迁移/index.html","937dae8735ca12f7b673b8d5f72076b2"],["2020/02/27/36-centos单网卡配置多ip的几种方法/index.html","2325724d8669dcca60497bfec14881a1"],["2020/03/10/37-mac一些常用命令/index.html","391c31a2c4f77e01298312fbcf981705"],["2020/03/12/38-es集群节点出现overhead脱机的问题/index.html","3901605d92c3105cc9483940b3513fa5"],["2020/03/18/39-记一次nginx的request-time-和upstream-response-time差值很大问题/index.html","03ce2155a3996a7830a021cbdbc3bc20"],["2020/03/18/40-记一次跨域的nginx配置问题/index.html","06816ff43c3f1de716a092737d05300f"],["2020/03/19/41-记一次es集群内存溢出的问题/index.html","18a18f380d22c7f721bac7706eb3528e"],["2020/03/24/42-kubeadm安装高可用k8s集群/index.html","8685eb5bb9add66bc2999f6c65260c3c"],["2020/03/31/43-k8s的yaml配置名词解释-模板/index.html","b5da9cb8144fce61ae5fd49661de0142"],["2020/04/09/44-k8s部署fluentd-kafka-logstash-es/index.html","db4429a5d72a68bd6fa54bcda152d57d"],["2020/04/23/45-gitlab-ci与k8s结合/index.html","4ea259ff8bb81b41825e1d5012a99194"],["2020/05/13/46-docker安装nginx第三方模块/index.html","c58b275fdb89384cf4165b147eec59bd"],["2020/05/14/47-k8s安装promethues-alertmanager-grafana/index.html","f214e7f361b38fab4a884c0e22d1d86f"],["2020/05/18/48-k8s升级-1-10-1-15/index.html","7f3416b0cce3eb9bde51482294860c77"],["archives/2019/09/index.html","ab59f1156ef90785b5f49183420a4d51"],["archives/2019/10/index.html","89e46bc45c1e38727e468fbeac08fb13"],["archives/2019/11/index.html","ab37cfca3172ead26532999295f6303a"],["archives/2019/12/index.html","3e4dfaf8a29017822194de9f5bd8dc9e"],["archives/2019/index.html","2332faf5d56a3261581dfb73a70ff109"],["archives/2019/page/2/index.html","9dfe80a4b4f972c2720ea5d16b6a3b98"],["archives/2020/02/index.html","3fde3b72cb0b8276fbc3bbbbe12775b0"],["archives/2020/03/index.html","ac00fd1d23fada22365c507af2533563"],["archives/2020/04/index.html","474ba31bd566faebbce962a2e831c687"],["archives/2020/05/index.html","32b5315b82c3cdb7cb9aa90082adc8e6"],["archives/2020/index.html","0936f6250421999bb7b1e33111a50b35"],["archives/index.html","c048f358869f5298fc7996e3325662de"],["archives/page/2/index.html","daadb7c136fcfef218215fda29be06c8"],["archives/page/3/index.html","94692d62bac2c2160fff9a629e7ed669"],["categories/docker/Dockerfile/index.html","397f26c1b78b2947319d18cf182e1b1b"],["categories/docker/index.html","922b3b84736387c716d3f36ff8c9f414"],["categories/elk/elasticsearch5/index.html","4cb1c85cb2b5d2b119acc9fc105d796c"],["categories/elk/elasticsearch7/index.html","3850e8f49bb3c38862c42a5f6702d310"],["categories/elk/index.html","9d561e523322b46219adfb5f9935c761"],["categories/elk/logstash/index.html","db19b75ca6ebd86aae889cadaa907181"],["categories/elk7/filebeat7/index.html","2eb4133555f70cee165b8c2c30a36c45"],["categories/elk7/index.html","47a37556d4cad0eb61e3e872dd1cc65d"],["categories/fluentd/index.html","1881c2fc5622f1b3af8fd88818e83488"],["categories/gitlab-ci/index.html","84a902c07690957a9fe97b157cecb16f"],["categories/index.html","a607c8f97588c02168f93dcad8117913"],["categories/item2/index.html","150ed754de7fde5f1d3dc47a481ddbfc"],["categories/k3s/index.html","fd8c29f824d096a7e7bd6da3a8415030"],["categories/k3s/lnmp/index.html","c493ef454df7ab3c18ce62a6d424e529"],["categories/k8s/elk5/index.html","4989c132cc853073db4345a809fec068"],["categories/k8s/elk7/index.html","b3032bc9473e3cbdb8b9a2f49a7cd648"],["categories/k8s/index.html","c42ab8718cdea281ae2cd2297602c6fb"],["categories/k8s/kubectl/index.html","0e6ae2e06a7d446d83c7140222e6d310"],["categories/k8s/mysql/index.html","99ef7aa66797c340b0d8cdd8f0e432aa"],["categories/k8s/prometheus/index.html","65de8d7cae521900bd893e9e95ae7c6e"],["categories/k8s/storageclass/index.html","9295e611751ead1249bbbf1e326af2cb"],["categories/k8s/问题总结/index.html","1ebe2e0c74164dfcf7145e9e6020dde8"],["categories/linux/awk/index.html","ad36057a2c8b948756831ec070ae1d66"],["categories/linux/index.html","6898fd1b0933ff6b68110780c25a4fb4"],["categories/linux/shell/index.html","267b4d48e2876fc1b174aa4a9d7f2c8c"],["categories/linux/systemd/index.html","ab64fe2c745c8eb567e02df79ccda48c"],["categories/linux/问题总结/index.html","a6b032fba1fcae89837ae07f7e735e76"],["categories/mac/index.html","c3374492abbf49ac9ec8406e72d78444"],["categories/markdown/index.html","2d83febbe4e04c65a76c688f8bbdd01f"],["categories/mysql/index.html","2dcf68ed3972ebc86dd48d58aff6853c"],["categories/mysql/主从/index.html","062610a0326fa8591a82fcbadb2237dd"],["categories/nfs/index.html","5e6111358e13e1a95daedcf20dd6b1b5"],["categories/nginx/index.html","6bca2e10129811a91577d6097f8552ca"],["categories/nginx/问题总结/index.html","6c73fbef44fd917ef6c0602106611a2e"],["categories/php/index.html","dd3a8bdc2e029ab520f91da14011080d"],["categories/php/问题总结/index.html","4a0d33d5db8e73fb0f175b855a53c244"],["categories/raid/index.html","097dcbc835d1364df3f6af5903cdfa6a"],["categories/博客/index.html","d8c2c2b5df247342d77383d72eff8dab"],["categories/博客/美化/index.html","2e5c2015727a3de057552036065ed52e"],["categories/存储/ceph/index.html","92e9ae17d085d6f5c97889d3a2f418c7"],["categories/存储/index.html","d3355323372990dfdbb72c947461bc80"],["categories/存储/nfs/index.html","6fd601db59ea322535178df78cb32db2"],["categories/技术文档/index.html","0823a4be85c8a3a06d22e82b73f5838e"],["categories/技术文档/page/2/index.html","8003a665301fb29031f59a779bcc84b2"],["categories/有趣/index.html","767d718993b73c11afb24265a1fd0bb0"],["categories/有趣/二次元/index.html","1c6a5ce5cc065d677e49310167b107f7"],["categories/流量复制工具/gor/index.html","4071c3dfdf156eeccc9c8e273eff5fa3"],["categories/流量复制工具/index.html","e59ecfd569b8876531f81b8d5ac80cbb"],["categories/网卡/index.html","b55c8a96b47c4c5d3900b30973654283"],["categories/网址/index.html","c171b57014d2874f0f29ebc026e91cda"],["categories/网址/大佬博客/index.html","fe33816c99f996481f9d3d25480ee644"],["categories/网址/收藏/index.html","0a0cdb79479ba53dc651d825d08a0327"],["css/main.css","eb221bb1c1af6ac6e238411e307edba3"],["images/16/容器的原理-1.png","1c184a092af6b6829c49ee20e70d132a"],["images/27/img1.png","74279f54a523a47f82a95a04ccfc9eb4"],["images/27/img2.jpg","93a32e8f4e52a9ea2a28b72a4223c2a9"],["images/38/gc1.jpg","dc31455119def3534b8b78213e6dcd29"],["images/38/gc2.jpg","ef5563c2f902a9b8550ed006747c94f5"],["images/38/gc3.jpg","3bef257bda43708e5c6d00598e5a6ccf"],["images/38/gc4.jpg","df24a1184fff79f3513b73fc1f4a6938"],["images/38/gc5.jpg","3e0fd4156b9666c1488b49d332875416"],["images/42/01.png","2a7524daaed26030a260df4e3fb58197"],["images/42/02.png","9c6ea26880ea0a13e900835c3fc75d65"],["images/42/03.png","d25c88fa33688ffe4a39aa59797e9e5d"],["images/42/04.png","8816231bb00c27abc8c97fc86797d474"],["images/45/01.png","95bacc819ae17e7e307034050799f3fb"],["images/45/02.png","be5e8c526b05c276cb9a1507a1a42323"],["images/45/03.png","c090ec8f8b444e05087d92b717e3ea8a"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["images/blog6/rancher-pv.png","d2a7e4bbfad5f71e75c9d5459cf5a464"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/docker1.jpg","5c611dd864017adeff648bca93d53f41"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/jixie-title.jpg","3ebd10201e23ecf68aba4524c020db0d"],["images/k8s_3part.jpg","8c72197f0daf342bc8b87d908527d638"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["images/tcp三次握手图.png","32ddd8df35bd5762604327b25758370e"],["images/tcp四次挥手图.png","684b2b4a0286acadc32247d693dbd961"],["images/test1/test1.jpg","60b725f10c9c85c70d97880dfe8191b3"],["images/title1.jpg","fa2db043867c4c5654471e21ad36e5c0"],["images/title2.jpg","b6e57860ebc3fcdcf150a6a4cf3402ab"],["images/title3.jpg","f0b1554cfa4dd1193719dcfeb9e4de28"],["images/title4.jpg","6eb7bcbb846d1123e830488d75028df7"],["index.html","62c5ccda92a186e0b0663acf321fb7fe"],["js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["js/src/instantclick.js","865d92a4a07409b7fed739e6a108e9c4"],["js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["js/src/live2d.js","3359a94d733737dbdd290dd41f9cef0b"],["js/src/love.js","7bcfdb57debd43483174cf9e15ab37cc"],["js/src/love2.js","2b51ddac5207cba4153da31e9132414c"],["js/src/motion.js","706d085e6cfec6f3e92dedc590d68d68"],["js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["js/src/schemes/pisces.js","1bd23ed75238ebf11afe2aa6b1c3a25b"],["js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["js/src/utils.js","f06ffce70453ad3a4d9611fdde5ca6c3"],["lib/canvas-nest/canvas-nest.min.js","2361106788cc4ea719ed76f52b413e46"],["lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["live2d-widget/README.html","9941b5173b7915eb6158e62f02cd9ea3"],["live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["live2d-widget/autoload.js","fc45c81e48138bde62e7e742cbbdabb9"],["live2d-widget/demo/demo1.html","82a14d37dbd83931644a4ad6ea1f9eb2"],["live2d-widget/demo/demo2.html","6babb045ef6905badc0dbc5e0d98cede"],["live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["live2d-widget/waifu.css","c4dae5924f2fb0b5ea6ef26aaab80db9"],["page/2/index.html","e47c50b81a12c0b787a4555fab1a2271"],["page/3/index.html","b13fe1d6cc249f9901778bd228fc46af"],["page/4/index.html","85d0cbf7675e4e6601450e5dc5574f47"],["page/5/index.html","4b25aa68f1b30ffbac8fc84b5d6ce7ab"],["tags/awk/index.html","1e0b9373ccd6e008ea6458c7d5883c7c"],["tags/ceph/index.html","23c9df162bda9e3adb9e8aa22d65ead5"],["tags/cephfs/index.html","28f3592825576e87d4311dc560a28c64"],["tags/cloud-native/index.html","aac96e2db0204c5b5ef9abccedeb32f6"],["tags/docker/index.html","5764698b61da5ab73fe9fc614fdc4dc5"],["tags/elasticsearch5/index.html","0d87e886028030f228bad842c905389c"],["tags/elasticsearch7/index.html","7c41c0b6eada1bd8d046957cb2b11d22"],["tags/elk/index.html","7317ed70c012fffb3989a44602b6126e"],["tags/elk5/index.html","368d99eed3c93f0951152b0464ef6300"],["tags/elk7/index.html","561e8956c04d0bae0fce33437a5ab909"],["tags/filebeat7/index.html","ddd6f767447391f1c1924c4a097fe708"],["tags/fluentd/index.html","a04bfb270d944827b43ec6cb4127acbe"],["tags/gitlab-runner/index.html","1d8e6d01d665df90488bfd741d173f30"],["tags/gor/index.html","3aa4341b75780a329deb0ed7422f076d"],["tags/hexo6/index.html","59bec536f3261e5b16c5cc1e381e8ab0"],["tags/hexo美化/index.html","c94e6a936582acc44f567dfdfcd5f32c"],["tags/http流量复制工具/index.html","b095b0b0e851a14a388de6a6362977ab"],["tags/index.html","f84e37789e7a5a39dd4e7d631b954642"],["tags/ip/index.html","8842e8f716cf115f3a8290a276a2c547"],["tags/k3s/index.html","3f52e3408509bc3a68c73d3ea0d768d0"],["tags/k8s/index.html","f529ca32a4b83349a30518e4adb44824"],["tags/k8s存储/index.html","652d31fdc4b2d31a8232e2fc7d80ef80"],["tags/kubectl/index.html","c4728f1820787493b4c53fcdece49d28"],["tags/linux/index.html","b7f91b114a2cf35d7ead0e11ecbe9448"],["tags/logstash/index.html","409f4d30dfa8bd5b3fefe6d32d8dbdb7"],["tags/mac/index.html","0a17d70026494f1efb3c351a197257a6"],["tags/markdown/index.html","72e8df6cd9738faed2320e870f2a97fa"],["tags/mysql/index.html","79fffc4a102519eae77f15933aeb341f"],["tags/mysql5-7/index.html","3c174ffcdd640eb676350b06cf34f575"],["tags/nfs/index.html","abda17ceddd93252ce09967ff47b54ac"],["tags/nginx/index.html","1d380605e1c03ed1f966c06f6737b15e"],["tags/php/index.html","77c85c854445d5f8b1a9cf70d40be140"],["tags/php5/index.html","246e0c431f98d94946f116a8836f7765"],["tags/php7/index.html","3fb32346128d57b6ff5e6ff00b0796c7"],["tags/promethues/index.html","3e23b6aee8fa4d554a541619394b5874"],["tags/raid/index.html","0efd45711867b8abeb810f71371e9587"],["tags/shell/index.html","d8256ac26560870ee865caa53deef7f2"],["tags/storageclass/index.html","cca1f7c6e1e633cfc337b3a7d93dd68f"],["tags/systemd/index.html","e71a3c4c2adaf92e021b5a6e74473bcd"],["tags/云原生/index.html","417f04f4c3b6515829900f0971cefa7c"],["tags/大佬博客/index.html","3f64e1ef140b6a5633943d192f4baec7"],["tags/收藏/index.html","c500b85839b387eb2ae3b47e3d087b90"],["tags/特效/index.html","2a35bcc8d03d545ab2428bbe3fef5f5b"],["tags/网址/index.html","466d241d89ac673ea53b33240ccda57d"]];
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







