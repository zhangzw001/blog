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

var precacheConfig = [["2019/09/19/2-部署elk7-2-0/index.html","c361d1bb7ca0a64bc37505fac4d0b9aa"],["2019/09/19/首次搭建hexo博客系统/index.html","e9d274efc8c3edee63dde1d5531d720d"],["2019/09/20/3-k8s遇到的一些问题统计总结/index.html","b4ea0ca52b61729da28e951cf77247a1"],["2019/09/24/4-hexo鼠标移动和鼠标点击特效/index.html","73dcc29ca293cfda504b0a8b4bfd0ca7"],["2019/09/24/5-hexo添加看板娘/index.html","16484d726dd854215afb4beb40e4e10e"],["2019/09/26/6-ceph安装部署/index.html","9038eef6893e8cb6bcf39eabae798c1f"],["2019/09/26/7-k8s部署storageclass动态创建pv-nfs-rbd/index.html","281c7148f3e9f151cb2ffabfdc3a66c3"],["2019/09/26/8-mysql5-7二进制部署/index.html","bf99ef8f2f1767f839e07838d9740eb8"],["2019/09/26/9-linux遇到一些问题统计总结/index.html","23964f58c41456a646922b3598663100"],["2019/09/27/10-centos6安装nginx1-16-php7-2/index.html","81bc8fa8f72881e5e35f1e68fc3f192b"],["2019/10/10/11-mysql简单记录/index.html","35b87c583a1406d2fd811dfdca7de846"],["2019/10/11/12-awk简单记录/index.html","9c798e6943e50fc750ff6fc6f8699503"],["2019/10/12/13-云原生博客汇总/index.html","3b31f1a807413693114f02f71cad084e"],["2019/10/15/14-mysql目录copy方式迁移/index.html","6457e78ebb4962808834f8eaf0e283d4"],["2019/10/16/15-docker简介和使用/index.html","4c6761c7d2f173cf080cd04d80e5404d"],["2019/10/16/16-dockerfile介绍/index.html","dd182f80c4a5ab8d91a45791bf94e9af"],["2019/10/16/17-markdown一些写法记录/index.html","c3a92fe866d9683e03c63719ee181380"],["2019/10/17/18-收藏链接/index.html","4ae08fc99fa74ce303fb75390b9efbda"],["2019/10/17/19-shell中gt和>的区别/index.html","b39bf5c41e6a3b3f9bb4c65c1c54e621"],["2019/10/24/20-k8s搭建mysql5-7-24主从/index.html","b0297e331a5eb4bc7b515b0bf881b6ba"],["2019/10/28/21-流量复制工具gor/index.html","4863d721dff8a9a55478a64ae45783ea"],["2019/10/28/22-es集群磁盘扩容/index.html","6567bc8a97b5cf8f5c021d380190d71f"],["2019/10/29/23-mysql5-5主与mysql5-7从部署配置/index.html","322bdd7643bd9221124a9424208d70c7"],["2019/10/30/24-filebeat7收集mysql慢日志到es/index.html","5e853f40f78d780456b644209450dc39"],["2019/11/01/25-linux一些脚本汇总/index.html","fecee63e35d3159e92e403f829ec3451"],["2019/11/08/26-logstash配置/index.html","f807e4342d74a7c430fcca4fd2ba4462"],["2019/11/21/27-k8s一条命令部署es5-2-0集群/index.html","988790e24902f08d90b233fc4ea6cb96"],["2019/11/25/28-k8s1-16使用旧yml部署配置问题/index.html","05de8016fe5c803fe187cba3b6d22695"],["2019/11/25/29-k3s集群部署项目报挂载nfs错误/index.html","ff66776370ef7bb025080fdc1eca28c6"],["2019/11/25/30-k3s集群部署项目报挂载nfs错误/index.html","bbe9d7031e1142ee464cc46ad7efc0d5"],["2019/11/26/31-systemd一些命令/index.html","782d97e139052437158cf7eff096975a"],["2019/12/02/32-php错误502问题总结/index.html","48718fb2e325e97257c40a2bfa0693ab"],["2019/12/03/29-k3s安装配置/index.html","fb90f1118ef254ba0a8d498c5b24a310"],["2019/12/03/33-k3s1.16部署nginx+php5.2.17/index.html","52f39ffef7ae3512c14388ee5c525781"],["2019/12/05/34-k8s一些命令总结/index.html","64afa46af83e41271d1d1a2c35ebbc8f"],["2020/02/27/35-raid1盘数据迁移/index.html","298052b661cfc25068f101d40e9cbfd2"],["2020/02/27/36-centos单网卡配置多ip的几种方法/index.html","40ebd869df343ccc118733ba6573da53"],["2020/03/10/37-mac一些常用命令/index.html","0a981aba123b15ebdd8b2e69ac5b442e"],["2020/03/12/38-es集群节点出现overhead脱机的问题/index.html","1b4ee218c71e3e55e7c2781625c855da"],["2020/03/18/39-记一次nginx的request-time-和upstream-response-time差值很大问题/index.html","39ed01e1b523bac1c2be50c0bd54b98b"],["2020/03/18/40-记一次跨域的nginx配置问题/index.html","e6c16ca32eca1a49dfe0c0752382fae5"],["2020/03/19/41-记一次es集群内存溢出的问题/index.html","3591b5ffd8d5b264b43db71034fd69fe"],["2020/03/24/42-kubeadm安装高可用k8s集群/index.html","fb8e0c4487ca4e02743e6a69ceb2ba2e"],["2020/03/31/43-k8s的yaml配置名词解释-模板/index.html","576065dce5faba0430e0c4f36dc9f723"],["2020/04/09/44-k8s部署fluentd-kafka-logstash-es/index.html","efc492d15524ef424e00c5b44d5048ab"],["2020/04/23/45-gitlab-ci与k8s结合/index.html","55a7118c9a79b08792823fc91511641c"],["2020/05/13/46-docker安装nginx第三方模块/index.html","e8048c3626e00903cf934be9ee90521c"],["2020/05/14/47-k8s安装promethues-alertmanager-grafana/index.html","403c75da57c7d732d3f10aed2832a181"],["2020/05/18/48-k8s升级-1-10-1-15/index.html","38948dca213ee115e689f492d7e7beb4"],["2020/05/27/49-go简单记录/index.html","f5dbaa37f07a50486d51dfdf10e106ff"],["2020/06/12/50-记一次windows安装OpenSSH问题/index.html","d8552c323f93ae2b5cc167c0cba5fb08"],["2020/07/27/51-k8s搭建radius/index.html","bf581598a3b4c616e8bd9bd514415250"],["2020/08/04/52-istio测试nginx-php项目/index.html","a36998367febe8bb1a4e4761ac1bf4a9"],["2020/08/07/53-hexo部署到coding-net开启静态网站/index.html","7361d533fecb737cd75fc88eb5f2b0e7"],["2020/08/12/54-go单元测试和性能测试/index.html","144edd6e32fb012b237d462e0513c9fe"],["archives/2019/09/index.html","6112a336a35671730aff01ac986c5279"],["archives/2019/10/index.html","048b4a44de22337a4a90fd8a82ddfe55"],["archives/2019/11/index.html","8b2e9b03925d6140693b905dd6bc33ad"],["archives/2019/12/index.html","a38d9389e8cee3cc0293e0668c7bfc4b"],["archives/2019/index.html","8064696d7c3daa8b48d14ec56bf5b32e"],["archives/2019/page/2/index.html","24f9ff2d58081e6a4b5c959f1b14fed5"],["archives/2020/02/index.html","e6f97017be79b299d9a23cb77a4579d8"],["archives/2020/03/index.html","d6812cecd1ed25405f6acfa37185f770"],["archives/2020/04/index.html","7e9dd8e0c25313330a28041696ef23a7"],["archives/2020/05/index.html","ea80130dd83f96c9b3b730df3a011fa7"],["archives/2020/06/index.html","90309b9606f9ab0527fa719bd73bcf88"],["archives/2020/07/index.html","03f2fa8102e7621aac7ca38a535ad6c3"],["archives/2020/08/index.html","a87872870c902802de2cb5d3ab729f61"],["archives/2020/index.html","e9fa78b091508e7ee6d9fc9f8f0ad448"],["archives/index.html","f8bb5a118e6c591551c2b3ae70c197a7"],["archives/page/2/index.html","bd4db6b4e4ead1d5e395b3fa3916b954"],["archives/page/3/index.html","2aad497c27cf7061b88f5d8753d669d1"],["assets/algolia_logo.svg","8e0e9838589ad42418fe5fa23fa7e9f1"],["assets/example_qr.png","851a661c0c87f5cf06e68dc5d603ffdb"],["assets/loading.svg","e213e506bd18e78aac4008b258ee195d"],["avatar/Misaka.jpg","5b007d28d8184757ae475eb62afd6202"],["baidu_verify_Og0HzH3bO9.html","580dee110dbc226966a5f6ff9f8e61d8"],["baidu_verify_SIdT0vzXib.html","3991de3316fa343670f84950ffc7e244"],["categories/docker/Dockerfile/index.html","7033e63e4b4d54c495926018a4953a0a"],["categories/docker/index.html","ccdda745379d4e38e4ee971f258131dc"],["categories/elk/elasticsearch5/index.html","321cfcf76439a61b334c144e2befb64d"],["categories/elk/elasticsearch7/index.html","d1b883ccf4841528111e29c6b5d336e1"],["categories/elk/index.html","14a9c78c5c625d1a6826ca393ce4efdc"],["categories/elk/logstash/index.html","7ece4052362f7af3b57507d9b851bd5b"],["categories/elk7/filebeat7/index.html","f0f2bf3ec8a9a4fd16008cecaa61f15c"],["categories/elk7/index.html","93b88963b9036bf9fb38daf972972ec8"],["categories/fluentd/index.html","921067548453ac933e69c4b21c7d17c7"],["categories/gitlab-ci/index.html","eb7ae97f7ce91896126e55e2581f6984"],["categories/go/index.html","57df72a573484aaa8bb0cc6017825686"],["categories/index.html","6cf5103d4816927028d04e49277901fc"],["categories/item2/index.html","3af9c46bb53de61edd7abb02cc745c6a"],["categories/k3s/index.html","a7755a7316edbd35fc0733e8de754c93"],["categories/k3s/lnmp/index.html","8bf1738a5b43059e5bc594b440aa3726"],["categories/k8s/elk5/index.html","f5cc972513f8d0ea0f3d12c406e70e10"],["categories/k8s/elk7/index.html","198a858ff2c8a162db3a1fbde05be080"],["categories/k8s/index.html","50d8510d0368f9a436298cebd73155d4"],["categories/k8s/kubectl/index.html","f6d95bc209122a6c1dbc0eea3c5f1b86"],["categories/k8s/mysql/index.html","40fe8b586fdf0de8a8ece6b26a75c575"],["categories/k8s/prometheus/index.html","a324791c4a1517884b3ec386a94a4ded"],["categories/k8s/storageclass/index.html","7c6b7ad74f525e95d3b8c1f3a1e5c569"],["categories/k8s/问题总结/index.html","f66dbefb232f146af2282aef428d8b5a"],["categories/linux/awk/index.html","168cf2cf10f861fcbf14a691154fad42"],["categories/linux/index.html","66b5480def98f03331b6e3b4ed16a868"],["categories/linux/shell/index.html","3e7f60a2baa896023e0f564bb1b6fe19"],["categories/linux/systemd/index.html","abc4f8d0dde89bb51d3d52d4ab9365c2"],["categories/linux/问题总结/index.html","e5b7a3cd890cb6fcfd589f986ff9f1aa"],["categories/mac/index.html","7fcefbfdb1d2e45fe446dd01818e07b7"],["categories/markdown/index.html","c7c2bff45f19ee52c1d365b2f47f9933"],["categories/mysql/index.html","2ae90854bd10022cb1cf5c040c439686"],["categories/mysql/主从/index.html","d2edd4248500f941643362ba112e808e"],["categories/nfs/index.html","c116bfa3b486ed99f772c3cec87e8bae"],["categories/nginx/index.html","0609492fc0a1f2e6f10d7e92710f2810"],["categories/nginx/问题总结/index.html","cb0dc6490787e7bdc7222b05f64e22b4"],["categories/php/index.html","6236b7cff86064787f10c70c0aeb9269"],["categories/php/问题总结/index.html","d8efbde97f52ab6b80a6f856c8e0ed1c"],["categories/radius/index.html","0c86c7527d4d2c529f19708ec682e0bb"],["categories/raid/index.html","259f89ec1ad41a09dbfca840d7b806ed"],["categories/windows/index.html","7e79e0fcc89c171b60aff9ba7961214e"],["categories/博客/index.html","e531d265646437490b302d355472673d"],["categories/博客/美化/index.html","b6099cea9127822b7e114b27bb257f83"],["categories/存储/ceph/index.html","38e7a37952e2609ba11bf3fd0619ba5a"],["categories/存储/index.html","c8ea05f97176a1a638f9e2ca00652917"],["categories/存储/nfs/index.html","399a98348b4f2f9e42137fa4063710dd"],["categories/技术文档/index.html","2120e7aea374d37eaeada97d5672e241"],["categories/技术文档/page/2/index.html","b1e131164599850eceb4f4a93bf19d94"],["categories/有趣/index.html","d09f5fc532ce4137b3631aa6cd271169"],["categories/有趣/二次元/index.html","9e5454c62fe1882512cbcdbc11018d10"],["categories/流量复制工具/gor/index.html","6d7cab615765345b719a2ae70326ee00"],["categories/流量复制工具/index.html","fe50b7d689056ccde9f43288d24922ff"],["categories/网卡/index.html","b286e3d5e363bd5a630535cbb73d798b"],["categories/网址/index.html","83de735e514d7264fdeee3f9b13ab05b"],["categories/网址/大佬博客/index.html","4c80b696ceea699e08b957ff328a2d44"],["categories/网址/收藏/index.html","ba7c421a9b3ec024f115622c7c69c9d1"],["css/mobile.css","9cdba0b7411a49fe8851a58b651b76d4"],["css/style.css","65d0f57ab033cbd012cebefe3c92d91f"],["font/Oswald-Regular.ttf","69f4403ef57d4268b2f4dffdf9e7cfe1"],["font/Source Sans Pro.woff","5097f81039d71344019a2ffbf6160f6c"],["font/SourceCodePro-Regular.ttf.woff","b6ba243267725a84615cfaba137a6f55"],["images/16/容器的原理-1.png","1c184a092af6b6829c49ee20e70d132a"],["images/27/img1.png","74279f54a523a47f82a95a04ccfc9eb4"],["images/27/img2.jpg","93a32e8f4e52a9ea2a28b72a4223c2a9"],["images/38/gc1.jpg","dc31455119def3534b8b78213e6dcd29"],["images/38/gc2.jpg","ef5563c2f902a9b8550ed006747c94f5"],["images/38/gc3.jpg","3bef257bda43708e5c6d00598e5a6ccf"],["images/38/gc4.jpg","df24a1184fff79f3513b73fc1f4a6938"],["images/38/gc5.jpg","3e0fd4156b9666c1488b49d332875416"],["images/42/01.png","2a7524daaed26030a260df4e3fb58197"],["images/42/02.png","9c6ea26880ea0a13e900835c3fc75d65"],["images/42/03.png","d25c88fa33688ffe4a39aa59797e9e5d"],["images/42/04.png","8816231bb00c27abc8c97fc86797d474"],["images/45/01.png","95bacc819ae17e7e307034050799f3fb"],["images/45/02.png","be5e8c526b05c276cb9a1507a1a42323"],["images/45/03.png","c090ec8f8b444e05087d92b717e3ea8a"],["images/51/img.jpg","a2f5989183a4451b86968567755127c9"],["images/51/img2.jpg","572e1ec28c81be6cf350eb07ce52dcf5"],["images/52/img-all.png","0a63c2085b097a61f51611c9f48edc02"],["images/52/img-all2.jpg","9439588475c4cf0b60cb5dd1e05e1d4f"],["images/52/img-fpm-1-9.png","64d3bc0dd7c3ac24c6aa8aacb953fb14"],["images/53/img1.jpg","945011815dcef30570766dadef1e80b2"],["images/53/img2.jpg","a613182827884dbc4013e3fab5c5cda8"],["images/53/img3.jpg","42fa19420f095cd0c8dbd7d752b83935"],["images/53/img4.jpg","1c97844a91851b91acbd94c1ef4229b2"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["images/avatar.jpg","5b007d28d8184757ae475eb62afd6202"],["images/blog6/rancher-pv.png","d2a7e4bbfad5f71e75c9d5459cf5a464"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/docker1.jpg","5c611dd864017adeff648bca93d53f41"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/go1.gif","9b54b5b653edf8ad46925cb8bcb1b516"],["images/jixie-title.jpg","3ebd10201e23ecf68aba4524c020db0d"],["images/k8s_3part.jpg","8c72197f0daf342bc8b87d908527d638"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["images/tcp三次握手图.png","32ddd8df35bd5762604327b25758370e"],["images/tcp四次挥手图.png","684b2b4a0286acadc32247d693dbd961"],["images/test1/test1.jpg","60b725f10c9c85c70d97880dfe8191b3"],["images/title1.jpg","fa2db043867c4c5654471e21ad36e5c0"],["images/title2.jpg","b6e57860ebc3fcdcf150a6a4cf3402ab"],["images/title3.jpg","f0b1554cfa4dd1193719dcfeb9e4de28"],["images/title4.jpg","6eb7bcbb846d1123e830488d75028df7"],["images/wechat.jpg","a9d6b6d5bc4c08de2dcb03653946168d"],["index.html","81aaf8631b5405cdf7d16c56349badcf"],["intro/404-bg.jpg","bb987c26e0a0f36f7a4350cfdfc6b4ca"],["intro/about-bg.jpg","5c2f59e45c2d19a12cfa4e3305380e9a"],["intro/index-bg.jpg","10f3e3cf901a4d033fc208efff20e9a4"],["intro/post-bg.jpg","87bd4714afa098591e0cba60aae86f10"],["lib/jquery.min.js","a09e13ee94d51c524b7e2a728c7d4039"],["lib/webfontloader.min.js","b03e20d628025187c3ac981299387cc0"],["page/2/index.html","c20a34b724f67cb0d541e4e7bc0d7b0f"],["page/3/index.html","e4c47a1670db97fad05221f67403132e"],["page/4/index.html","ea2397656ae4fa5f7f9f036748df511c"],["page/5/index.html","e1c512414cd29806a1580ca091a81d5b"],["page/6/index.html","cfd1c98a886e205b8c45bee59bd0ed1b"],["scripts/main.js","daa7eca40f5b50fa75baf7d98f5390d7"],["scripts/search.js","366fbc102b7ccc5c9554bed0bb945f66"],["scripts/share.js","9ec0687984e4e409f1bcc935e6dd18f9"],["tags/awk/index.html","9d4744ca724443a5653d9f47452af4bf"],["tags/ceph/index.html","845939cf843b3ba5776381f016f72846"],["tags/cephfs/index.html","c4ecdc2f25f64eb6127a44f10b11115f"],["tags/cloud-native/index.html","059d599d1ec74b9864a9b20d94cd9d4a"],["tags/daloradius/index.html","83edb1630a9e4d81f4655bc03929f18f"],["tags/docker/index.html","6b92f1152a575524de721ab59df97767"],["tags/elasticsearch5/index.html","24456b80bd08466d599f3b307a6fbe56"],["tags/elasticsearch7/index.html","275e0c73c2955a479329fac4edb75979"],["tags/elk/index.html","c0fcbc4539c5fe9903fdbb3f7928035b"],["tags/elk5/index.html","473b7adf1f17c755e834600417254fdf"],["tags/elk7/index.html","bb3f88870513f292777dd7cbf30a4703"],["tags/filebeat7/index.html","07fb4b33226fcc9463b32950f2cc39a7"],["tags/fluentd/index.html","559a16718c2621076ca3cdc149de9973"],["tags/freeradius/index.html","7abc51138ffd4f300bf5bf24706b9154"],["tags/gitlab-runner/index.html","ddd0ccf0349ed93d48145e3b081769ba"],["tags/go/index.html","09fa942f27025fcd53bee1d38712a847"],["tags/gor/index.html","aecccbdf1f089752a8ee73e1f2f88478"],["tags/hexo6/index.html","06597abcbfeef59445beb77d3eaba8a6"],["tags/hexo美化/index.html","79441d1b833226fb65a1728aea6ced08"],["tags/http流量复制工具/index.html","1c250146b1ed9791847aac07a4bab4e1"],["tags/index.html","810fa0a32a329e0534bca752055e56ac"],["tags/ip/index.html","c6c12d52cf757884405b17a0df096acc"],["tags/istio/index.html","8c441714c0a25b45252f6c4dd8a52f15"],["tags/k3s/index.html","a4089ad46d4544e0060409bb48692d82"],["tags/k8s/index.html","f275ccf14b1236c5725aac96d2450389"],["tags/k8s存储/index.html","41b809565624a8374c17cef3cc4d645b"],["tags/kubectl/index.html","dcab94df11b11a4cdb6bc3bb383a42f6"],["tags/linux/index.html","9745ce09690f8da6c6eeffb65bc6cd56"],["tags/logstash/index.html","7eb3ac3c758eaed8390affffc7d4e854"],["tags/mac/index.html","0a91ac439713489f57415bb13847189d"],["tags/markdown/index.html","c32a0d69f012a34e1b007646e906d46d"],["tags/mysql/index.html","642783e44ede54027507ecc9b2456da2"],["tags/mysql5-7/index.html","c984cfff7b854fe4b65f74ff85c19311"],["tags/nfs/index.html","b713aeb95b536b6e0214fec2440465bb"],["tags/nginx/index.html","c0d2b359a73303bd21ad32ba06b8d828"],["tags/php/index.html","40feb2ef6af87120e0749554032eb5aa"],["tags/php5/index.html","d6a22e6a03fe5a5b5108c8404f901f8f"],["tags/php7/index.html","2f62a997c4fa6dfd1956bcc188fdfd78"],["tags/promethues/index.html","64e9eda6011b8e358bd27a573f4074dd"],["tags/raid/index.html","d0772101fe3a6a60e7dd398c2b774402"],["tags/shell/index.html","6ab530924fc15db8744cfbfba26db9c9"],["tags/ssh/index.html","c9ef14f668b92d83b78ee52cc89ffa25"],["tags/storageclass/index.html","f6230cefd72e62f2930f3195d8e5b612"],["tags/systemd/index.html","873378cb0e69c320790d1d9f7f193832"],["tags/windows/index.html","095acb6478a82dd32fad7f3163a2c50d"],["tags/云原生/index.html","8390e597e56aebbc6fc315313182822e"],["tags/大佬博客/index.html","d80e3c2d0335b4f9dd84cd77a7120a7d"],["tags/收藏/index.html","392df20df552426a84cd2df57f6e6f7a"],["tags/特效/index.html","502946dd54de7cb7689d203527523cd7"],["tags/网址/index.html","5d29f137841eac0031827a3fb590b326"]];
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







