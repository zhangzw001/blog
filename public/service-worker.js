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

var precacheConfig = [["2019/09/19/2-部署elk7-2-0/index.html","1edd1a9d09876576213b10e2bc97dead"],["2019/09/19/首次搭建hexo博客系统/index.html","85694d0aa3f29c4a5cf6c71132473c68"],["2019/09/20/3-k8s遇到的一些问题统计总结/index.html","e3351a99cb358dba1f581265e365be30"],["2019/09/24/4-hexo鼠标移动和鼠标点击特效/index.html","6cefc0d80d6786b9f6ff476070b46347"],["2019/09/24/5-hexo添加看板娘/index.html","c55a9f68a7cd1f0544799a7e4376ac80"],["2019/09/26/6-ceph安装部署/index.html","83348853aa8f23c64901e6e208cf195f"],["2019/09/26/7-k8s部署storageclass动态创建pv-nfs-rbd/index.html","cd7044b525f9f697e47a448e92dbdee4"],["2019/09/26/8-mysql5-7二进制部署/index.html","6ce92d0a6680e429a5dc16a3cf39f05b"],["2019/09/26/9-linux遇到一些问题统计总结/index.html","480b4bee812b539cdaea38c9b69fcbb1"],["2019/09/27/10-centos6安装nginx1-16-php7-2/index.html","a42a7a25e86c62885da49ff6299915bd"],["2019/10/10/11-mysql简单记录/index.html","432bcd70fb6c6b96fe7d9d267d6d64d1"],["2019/10/11/12-awk简单记录/index.html","96d0058fd14188e8b3fa02731f0a0a17"],["2019/10/12/13-云原生博客汇总/index.html","3462365c6d01bad418ffb621ef973108"],["2019/10/15/14-mysql目录copy方式迁移/index.html","206da4744680189e30aab049b46927da"],["2019/10/16/15-docker简介和使用/index.html","a5a30bee485d6870ca03bcbee85d5ae6"],["2019/10/16/16-dockerfile介绍/index.html","fa16fb14f6b10fc2df6310078946c6d1"],["2019/10/16/17-markdown一些写法记录/index.html","314fd4d16c078d93a45e12d21a63fe57"],["2019/10/17/18-收藏链接/index.html","6ea8dda71af733e1a5f356162168de0a"],["2019/10/17/19-shell中gt和>的区别/index.html","f953eb15ee97e394c191b24a476834ae"],["2019/10/24/20-k8s搭建mysql5-7-24主从/index.html","c323d394b111a008adf21e470e98592f"],["2019/10/28/21-流量复制工具gor/index.html","0ca8f3d0f9ae24efda53b04cd02b02f9"],["2019/10/28/22-es集群磁盘扩容/index.html","cb5dfed981bcc854febb06cb29890391"],["2019/10/29/23-mysql5-5主与mysql5-7从部署配置/index.html","a5732c5eda1acf195ef15e076efe5419"],["2019/10/30/24-filebeat7收集mysql慢日志到es/index.html","a1a756ec493c7c3c5889e3922cdc0335"],["2019/11/01/25-linux一些脚本汇总/index.html","eb807c5e6a8927e5f0ebd9624e725886"],["2019/11/08/26-logstash配置/index.html","4c858017234cd9f1521009516809ee35"],["2019/11/21/27-k8s一条命令部署es5-2-0集群/index.html","e945808f38e7c4465bf1dc2e52e58cb4"],["2019/11/25/28-k8s1-16使用旧yml部署配置问题/index.html","f1786b2fda0b25b8d1980b48d858fb21"],["2019/11/25/29-k3s集群部署项目报挂载nfs错误/index.html","0831aa855df14ed1106145503c31cec2"],["2019/11/25/30-k3s集群部署项目报挂载nfs错误/index.html","a78f947acc3ae2c25f06080168d62dee"],["2019/11/26/31-systemd一些命令/index.html","5da6173e42392dc48265ae1afcb28c54"],["2019/12/02/32-php错误502问题总结/index.html","56c8ee99acaf1910094b4156af22f4a4"],["2019/12/03/29-k3s安装配置/index.html","e671e58f0e9267060d8297d770e13c5c"],["2019/12/03/33-k3s1.16部署nginx+php5.2.17/index.html","8350e91728c611346965b82000d2db15"],["2019/12/05/34-k8s一些命令总结/index.html","b239d68314f64fe4bd5705e17d7856aa"],["2020/02/27/35-raid1盘数据迁移/index.html","e014e2fab328bbca5649d815723f25ce"],["2020/02/27/36-centos单网卡配置多ip的几种方法/index.html","d9f32b8f2040f01e65c3d335d45026f2"],["2020/03/10/37-mac一些常用命令/index.html","0cf4d15c1de9fc69f68d63c61f531667"],["2020/03/12/38-es集群节点出现overhead脱机的问题/index.html","289dac578bf52d4717ceceb336708b8d"],["2020/03/18/39-记一次nginx的request-time-和upstream-response-time差值很大问题/index.html","0ea214581c16dfdc076e0396cdfe16b0"],["2020/03/18/40-记一次跨域的nginx配置问题/index.html","9103a21e51223eca97ac937aecd1b943"],["2020/03/19/41-记一次es集群内存溢出的问题/index.html","0e8d7a9cbde924f1867b704901556550"],["2020/03/24/42-kubeadm安装高可用k8s集群/index.html","990cad7949bed15e8cb31f62e1d67671"],["2020/03/31/43-k8s的yaml配置名词解释-模板/index.html","833b55ff8a0c9496c10402bac1620c32"],["2020/04/09/44-k8s部署fluentd-kafka-logstash-es/index.html","215954247188f4b749cc3f49e4fa4350"],["2020/04/23/45-gitlab-ci与k8s结合/index.html","9bfffcb8e798e3a802d09ea8e1ab034b"],["2020/05/13/46-docker安装nginx第三方模块/index.html","c7023cd5dd566a2f1dafc65a6c225675"],["2020/05/14/47-k8s安装promethues-alertmanager-grafana/index.html","4e181d97c22b0c80bab8728d44fc5d1f"],["2020/05/18/48-k8s升级-1-10-1-15/index.html","a7676029663a9d67fdf8ec46cc7ca30d"],["2020/05/27/49-go简单记录/index.html","08d4cb586f4a37e345d62cc63ff0ab4a"],["2020/06/12/50-记一次windows安装OpenSSH问题/index.html","7514accdaeb1728223c76cb26275357a"],["2020/07/27/51-k8s搭建radius/index.html","2360f0e122cee7cdbe8c58f6d77f58b3"],["2020/08/04/52-istio测试nginx-php项目/index.html","c59e4109be8c8408ef491dfbd61ef759"],["2020/08/07/53-hexo部署到coding-net开启静态网站/index.html","41dde2b519878240bb05b17829d57776"],["2020/08/12/54-go单元测试和性能测试/index.html","6422aa2012bc88803245503720e05449"],["archives/2019/09/index.html","0ccf9ae7e083ab649335db7a513325eb"],["archives/2019/10/index.html","08fb945725ef5ac75352ea8fa09ad5d0"],["archives/2019/11/index.html","14a495b28f800e2624a3d219f5bfff1a"],["archives/2019/12/index.html","f05a2fc7672c9273a64cffcdeae8ea54"],["archives/2019/index.html","95796839d74fd08fc6b5b45bdfbd69b8"],["archives/2019/page/2/index.html","85e18d3e2936f614a8c326208b3ab93e"],["archives/2020/02/index.html","f455803bb9fae5d0c4d6213a96387584"],["archives/2020/03/index.html","41b83fe061ff5ac90dca46fdc47d938b"],["archives/2020/04/index.html","2ef5bd854b4598e5da1124a012752aac"],["archives/2020/05/index.html","03451530b83c4716ce79b56d72b142a0"],["archives/2020/06/index.html","6475323cbb9d9fc08fbb11707fc550a7"],["archives/2020/07/index.html","83b86abcafe476c7317923525ff68d14"],["archives/2020/08/index.html","d27c5d06630d5af28831782d573a1238"],["archives/2020/index.html","aaafd09e5da3097065d1cc96638db650"],["archives/index.html","ffac2a4a17332d2c2f35e3fba8cb3bdc"],["archives/page/2/index.html","0a2912ae4373b397ace000c6931f40ab"],["archives/page/3/index.html","0ec190c8faa3e88a005fded9dbf04331"],["assets/algolia_logo.svg","8e0e9838589ad42418fe5fa23fa7e9f1"],["assets/example_qr.png","851a661c0c87f5cf06e68dc5d603ffdb"],["assets/loading.svg","e213e506bd18e78aac4008b258ee195d"],["avatar/Misaka.jpg","5b007d28d8184757ae475eb62afd6202"],["baidu_verify_Og0HzH3bO9.html","71578b87ba7331342a2c11b3662e50a7"],["baidu_verify_SIdT0vzXib.html","5dfd7e19179c2e463b2fe67ace0a5ee8"],["categories/docker/Dockerfile/index.html","f6842234925ccdf1fc80bfffccb71049"],["categories/docker/index.html","b65a5b8098733e4065eec97c7c1e76bf"],["categories/elk/elasticsearch5/index.html","2009faf359ab03efd42ccafaf91bb8a6"],["categories/elk/elasticsearch7/index.html","76b192b880c16e636a9986d8d4cb150c"],["categories/elk/index.html","83294002d4af31876a4d9f1cb7ff20ca"],["categories/elk/logstash/index.html","0cd7de28d83c8259d83c20c66721c7d5"],["categories/elk7/filebeat7/index.html","bf3b968121854b4d99f095d1f1ebf937"],["categories/elk7/index.html","1c88cc3d2c6e0c369a0b0edd22474fd3"],["categories/fluentd/index.html","9a0161942c0a1fd53e3225af2d165cbb"],["categories/gitlab-ci/index.html","e46b9f7ddde20283538841e3f706f935"],["categories/go/index.html","08e8f7da385a0207169e47fa324b7bc3"],["categories/index.html","2b87365bc47c7a682d3b8f576580f00d"],["categories/item2/index.html","692ea36fe6a612b91d873d2b0f5bea7e"],["categories/k3s/index.html","9351d1929f2830e3c67b5ff6e75b52a7"],["categories/k3s/lnmp/index.html","ba6cea3f8cf9d8fc85c4876e064cb300"],["categories/k8s/elk5/index.html","81dcf1ebced11e3b2fbf4e00c904a893"],["categories/k8s/elk7/index.html","af508184e61a927454bc9011c34bc88c"],["categories/k8s/index.html","a2df454521122c5d4b6189404f1736b7"],["categories/k8s/kubectl/index.html","77f5fd025ba491004e97bd808f7b8b5c"],["categories/k8s/mysql/index.html","ae26771bdd577de2b125a3f8903921fc"],["categories/k8s/prometheus/index.html","e2571dc2f58200b9cfaddd8c82626238"],["categories/k8s/storageclass/index.html","cfde49ce8d9fb52a648c53002c27e238"],["categories/k8s/问题总结/index.html","9a6901b48b30026d7150af34a915e266"],["categories/linux/awk/index.html","f7c667761f6d4db3c9c8399455883c63"],["categories/linux/index.html","1a73a373397052cc5139fb6b61cde6ee"],["categories/linux/shell/index.html","54bfd46e5668ba1ed1a98a6e3a2ac4c6"],["categories/linux/systemd/index.html","158b6212b74887433b2e8f68cc7cbb8f"],["categories/linux/问题总结/index.html","5eb2301a98745835a4a4ad6cfb33a6af"],["categories/mac/index.html","c322f13c86944360c43e358efc0ff066"],["categories/markdown/index.html","7fd44ee9c92908cfd0dc1092aab36cdc"],["categories/mysql/index.html","8864d94c0cf5016e9ae9838fae7e8c2b"],["categories/mysql/主从/index.html","4f0c6eba021427fb8cf470d86efc4608"],["categories/nfs/index.html","9e020ab2e314adff6553c71810aa75f8"],["categories/nginx/index.html","59e7f514a364ce8aae53ce68b57217ca"],["categories/nginx/问题总结/index.html","0d713478773f24d346207e924d28ae72"],["categories/php/index.html","a6acbbd491854d937415244c7c69009f"],["categories/php/问题总结/index.html","70ab9da032e34a5877231292e534d805"],["categories/radius/index.html","5b55526a0e77db16cca9373380d3cf06"],["categories/raid/index.html","28cd9c033a793654f39c1eaf05bef388"],["categories/windows/index.html","4e67ca46b82cd521dea1e814515e7f67"],["categories/博客/index.html","93730aac234dfcff3916789d77966ecb"],["categories/博客/美化/index.html","ca5e9ae798cbe8a11d821f7ea8296a1c"],["categories/存储/ceph/index.html","d5074b0782f4aef6a88fc8c70f9466cd"],["categories/存储/index.html","303dbcd3f8491f5c16b86fc81190b0f7"],["categories/存储/nfs/index.html","bb2f0317c5efb899ba54a18d76b7cb1d"],["categories/技术文档/index.html","39d8f2bbb59451bfb0cd6540605c7c29"],["categories/技术文档/page/2/index.html","39d39125fd6b0c848ee3947ad8e1bbbc"],["categories/有趣/index.html","c69c9af0f1a9cd86a5eeda7f4cb091e7"],["categories/有趣/二次元/index.html","7ac2a37d80edde25907b2066c9e1ff87"],["categories/流量复制工具/gor/index.html","7af4fd276a9b1fa55f6d93dbceb22fba"],["categories/流量复制工具/index.html","8d2ee4f765891263fa2f66d22d3e87a8"],["categories/网卡/index.html","c99a44881019134c4cc766ed7b13876d"],["categories/网址/index.html","ed94139846d77267e94f40132bed2e79"],["categories/网址/大佬博客/index.html","90437b7e4f30614d90d25d5391779c99"],["categories/网址/收藏/index.html","42d1dd28270428c8ca8b0112651ba2bb"],["css/mobile.css","9cdba0b7411a49fe8851a58b651b76d4"],["css/style.css","65d0f57ab033cbd012cebefe3c92d91f"],["font/Oswald-Regular.ttf","69f4403ef57d4268b2f4dffdf9e7cfe1"],["font/Source Sans Pro.woff","5097f81039d71344019a2ffbf6160f6c"],["font/SourceCodePro-Regular.ttf.woff","b6ba243267725a84615cfaba137a6f55"],["images/16/容器的原理-1.png","1c184a092af6b6829c49ee20e70d132a"],["images/27/img1.png","74279f54a523a47f82a95a04ccfc9eb4"],["images/27/img2.jpg","93a32e8f4e52a9ea2a28b72a4223c2a9"],["images/38/gc1.jpg","dc31455119def3534b8b78213e6dcd29"],["images/38/gc2.jpg","ef5563c2f902a9b8550ed006747c94f5"],["images/38/gc3.jpg","3bef257bda43708e5c6d00598e5a6ccf"],["images/38/gc4.jpg","df24a1184fff79f3513b73fc1f4a6938"],["images/38/gc5.jpg","3e0fd4156b9666c1488b49d332875416"],["images/42/01.png","2a7524daaed26030a260df4e3fb58197"],["images/42/02.png","9c6ea26880ea0a13e900835c3fc75d65"],["images/42/03.png","d25c88fa33688ffe4a39aa59797e9e5d"],["images/42/04.png","8816231bb00c27abc8c97fc86797d474"],["images/45/01.png","95bacc819ae17e7e307034050799f3fb"],["images/45/02.png","be5e8c526b05c276cb9a1507a1a42323"],["images/45/03.png","c090ec8f8b444e05087d92b717e3ea8a"],["images/51/img.jpg","a2f5989183a4451b86968567755127c9"],["images/51/img2.jpg","572e1ec28c81be6cf350eb07ce52dcf5"],["images/52/img-all.png","0a63c2085b097a61f51611c9f48edc02"],["images/52/img-all2.jpg","9439588475c4cf0b60cb5dd1e05e1d4f"],["images/52/img-fpm-1-9.png","64d3bc0dd7c3ac24c6aa8aacb953fb14"],["images/53/img1.jpg","945011815dcef30570766dadef1e80b2"],["images/53/img2.jpg","a613182827884dbc4013e3fab5c5cda8"],["images/53/img3.jpg","42fa19420f095cd0c8dbd7d752b83935"],["images/53/img4.jpg","1c97844a91851b91acbd94c1ef4229b2"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["images/avatar.jpg","5b007d28d8184757ae475eb62afd6202"],["images/blog6/rancher-pv.png","d2a7e4bbfad5f71e75c9d5459cf5a464"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/docker1.jpg","5c611dd864017adeff648bca93d53f41"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/go1.gif","9b54b5b653edf8ad46925cb8bcb1b516"],["images/jixie-title.jpg","3ebd10201e23ecf68aba4524c020db0d"],["images/k8s_3part.jpg","8c72197f0daf342bc8b87d908527d638"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["images/tcp三次握手图.png","32ddd8df35bd5762604327b25758370e"],["images/tcp四次挥手图.png","684b2b4a0286acadc32247d693dbd961"],["images/test1/test1.jpg","60b725f10c9c85c70d97880dfe8191b3"],["images/title1.jpg","fa2db043867c4c5654471e21ad36e5c0"],["images/title2.jpg","b6e57860ebc3fcdcf150a6a4cf3402ab"],["images/title3.jpg","f0b1554cfa4dd1193719dcfeb9e4de28"],["images/title4.jpg","6eb7bcbb846d1123e830488d75028df7"],["images/wechat.jpg","a9d6b6d5bc4c08de2dcb03653946168d"],["index.html","b6b6a47c603fc7f504b6388dde23f611"],["intro/404-bg.jpg","bb987c26e0a0f36f7a4350cfdfc6b4ca"],["intro/about-bg.jpg","5c2f59e45c2d19a12cfa4e3305380e9a"],["intro/index-bg.jpg","10f3e3cf901a4d033fc208efff20e9a4"],["intro/post-bg.jpg","87bd4714afa098591e0cba60aae86f10"],["lib/jquery.min.js","a09e13ee94d51c524b7e2a728c7d4039"],["lib/webfontloader.min.js","b03e20d628025187c3ac981299387cc0"],["page/2/index.html","21d4427a76c290f0fc7c3975c7edadc4"],["page/3/index.html","db2b906c84ce88ea1b4dc7d62e54297c"],["page/4/index.html","e48b9b481d096ffaff8de4bca90e5e8f"],["page/5/index.html","0c6c755e503eaff75eb7034d2f60931a"],["page/6/index.html","c697bd0c26f9c9ef517bd1bb03d0cbb0"],["scripts/main.js","daa7eca40f5b50fa75baf7d98f5390d7"],["scripts/search.js","366fbc102b7ccc5c9554bed0bb945f66"],["scripts/share.js","9ec0687984e4e409f1bcc935e6dd18f9"],["tags/awk/index.html","0334d2da69a7dff1e3fe5f68fb7a5d70"],["tags/ceph/index.html","1cd07f1269c39d804e3bdb3a1e52ba41"],["tags/cephfs/index.html","de2af1f4ec2fcf78d43d147f4c878770"],["tags/cloud-native/index.html","b96e8fee8a0e524a02d013e8b7d0275a"],["tags/daloradius/index.html","35b155da92f61c72c906909edb1bdb16"],["tags/docker/index.html","ff4be32a263094ee1085f92175d10ced"],["tags/elasticsearch5/index.html","7e69887d86d931b530f54b1f5d3ad16b"],["tags/elasticsearch7/index.html","9dc8c298bf9283f0ab4ac19637e8052c"],["tags/elk/index.html","32a99e6ed7fff9f9e3c4f27db5eaa72b"],["tags/elk5/index.html","24b0a490ac32013633178b4e277ef139"],["tags/elk7/index.html","22b63f0ab19fd506e165e85c1f127715"],["tags/filebeat7/index.html","e4ec69dc485420c148df42f1191ada50"],["tags/fluentd/index.html","7c766b517bb1695910cbd1dc21687ad4"],["tags/freeradius/index.html","4bd8eedefdf3a1102d8e6602214faac6"],["tags/gitlab-runner/index.html","615367772667bedf62205e63f4ea6abf"],["tags/go/index.html","7bf42d4f6fbdd8d0858fe896f0d02644"],["tags/gor/index.html","907365fd9950a27ef04b261591149689"],["tags/hexo6/index.html","f53fc8a60551935e42bfe551a4a091fd"],["tags/hexo美化/index.html","b02eed9c2c12e99c9e6263c717e5aeea"],["tags/http流量复制工具/index.html","6c55b1eeb81077e6f0660119d2c8b18f"],["tags/index.html","40575a26a74c4038b2e67803a520783f"],["tags/ip/index.html","f2053d4df5048fe8cec278db7761331b"],["tags/istio/index.html","702c082606447750a58f1d46f14863e3"],["tags/k3s/index.html","05b5105c29b106b1b8a9a778e4281878"],["tags/k8s/index.html","f10bbbe1d3f8af1fa489e152a4981277"],["tags/k8s存储/index.html","bb40fa92ab7d1be04d01d9d6d68a1953"],["tags/kubectl/index.html","0cd0ca7f954d4836e5e4fbe960d271e5"],["tags/linux/index.html","741dac6c1ca1e3d4880e4a996813b5e6"],["tags/logstash/index.html","9d323db1ebb5621382a50b58bd1ba9ff"],["tags/mac/index.html","2ba4885a528e83a70c7c8a99d6ea9496"],["tags/markdown/index.html","e582d09c20e4655137107088688d5719"],["tags/mysql/index.html","782a251e91f7158a7caf2eb759435734"],["tags/mysql5-7/index.html","c1e09ad190c4e833fe1ef4546eb93016"],["tags/nfs/index.html","15c35945753265ef5945e3b6e6507f8c"],["tags/nginx/index.html","a07d1ab43bf6d857830b1754a77eebff"],["tags/php/index.html","944fe38b1cc795f8e5f49a1147f0699d"],["tags/php5/index.html","5131e6e162f69bd47c4977f45bc6fe9b"],["tags/php7/index.html","b9d4b1d43185e34e1b2724b796af19cc"],["tags/promethues/index.html","42bd127796543070d1cb87d80da84272"],["tags/raid/index.html","2a5dc779fbf66872e5e71f7bcd002e53"],["tags/shell/index.html","fa9533615cda846a1a0d1fe906ed90fb"],["tags/ssh/index.html","2690a7071fe2d9840ee83f5278b94e34"],["tags/storageclass/index.html","8ffbee7674a07ae1fe1f40097573d6ac"],["tags/systemd/index.html","aed50a5d34db660e7299a66aafa1eb70"],["tags/windows/index.html","5f0a800f75fdc06e8c857745ef15613f"],["tags/云原生/index.html","f009ecf855caf6060cba9a03a728d2a0"],["tags/大佬博客/index.html","fa091d2b8b258e4bb5ae25e631272bb0"],["tags/收藏/index.html","63b6fe43bd0ce73b16cb679d919afe13"],["tags/特效/index.html","f755bdc5bf7fad6fbf9b7a1137870dd2"],["tags/网址/index.html","a80fd81a9262a342a9ec3e52fed2287b"]];
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







