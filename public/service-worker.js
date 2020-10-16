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

var precacheConfig = [["2019/09/19/2-部署elk7-2-0/index.html","065e0da4c44f5f7b77608b20729ec2ad"],["2019/09/19/首次搭建hexo博客系统/index.html","24f93f0404ddc5e39a0dcd9747810f3e"],["2019/09/20/3-k8s遇到的一些问题统计总结/index.html","7b64709ddd1e525109b1d0203eb7f1ad"],["2019/09/24/4-hexo鼠标移动和鼠标点击特效/index.html","b9c30e91db1961be415813c59df92286"],["2019/09/24/5-hexo添加看板娘/index.html","77a1d202815a2590ff5fa2d97082efe2"],["2019/09/26/6-ceph安装部署/index.html","cf6c4672d2cf58e4b20feb58ff3bdb3f"],["2019/09/26/7-k8s部署storageclass动态创建pv-nfs-rbd/index.html","afdfb0e241f98813b08fc7bac152163b"],["2019/09/26/8-mysql5-7二进制部署/index.html","8b3a77f54e6de4e6e6aafc8cca30b12c"],["2019/09/26/9-linux遇到一些问题统计总结/index.html","fc6c7878eff719f7c1c65962afe25abd"],["2019/09/27/10-centos6安装nginx1-16-php7-2/index.html","fd1c4bc6e0ae1baccfc36858b85208a9"],["2019/10/10/11-mysql简单记录/index.html","5d142b9ce10b15406ef637a5a5b067c5"],["2019/10/11/12-awk简单记录/index.html","861900ec4154e814422f79dc9ccb140b"],["2019/10/12/13-云原生博客汇总/index.html","6d3481d166c27dc39cf8b84dd7f9ef88"],["2019/10/15/14-mysql目录copy方式迁移/index.html","fb33b1788e74a7a3ecf7e0fbcd9494ff"],["2019/10/16/15-docker简介和使用/index.html","0235ec801f0240b450fbf109ec74b88f"],["2019/10/16/16-dockerfile介绍/index.html","5fc432bfae08cd8936e7183eee13e842"],["2019/10/16/17-markdown一些写法记录/index.html","5c4a1c3455b19685564ea6994bfcf0e7"],["2019/10/17/18-收藏链接/index.html","e59e3477d0d8407f41cea2b7917f4076"],["2019/10/17/19-shell中gt和>的区别/index.html","ae15c2014c50aae810d0ea5836c2b19d"],["2019/10/24/20-k8s搭建mysql5-7-24主从/index.html","523262fe09a5b5bd911fe5b3a22ba228"],["2019/10/28/21-流量复制工具gor/index.html","edf85b1e0d967e3d9c413c3f1928db52"],["2019/10/28/22-es集群磁盘扩容/index.html","92d6c2cc866f082037fcd298ee617053"],["2019/10/29/23-mysql5-5主与mysql5-7从部署配置/index.html","88d1633a5f7809d7a4c6c39295e7d480"],["2019/10/30/24-filebeat7收集mysql慢日志到es/index.html","35e8493d0820c59b0ef0c17ad11abe05"],["2019/11/01/25-linux一些脚本汇总/index.html","cc8b2b709346683619a92698ccd7ede4"],["2019/11/08/26-logstash配置/index.html","b0101b24d18e27234b0177059cb313e3"],["2019/11/21/27-k8s一条命令部署es5-2-0集群/index.html","95310b88a8c9a3c07eaf8fb5a079f9a6"],["2019/11/25/28-k8s1-16使用旧yml部署配置问题/index.html","2e37b303cfabd3e463e6af46be91b2e1"],["2019/11/25/29-k3s集群部署项目报挂载nfs错误/index.html","b3824d2b672d05b04e865dcd1280ad52"],["2019/11/25/30-k3s集群部署项目报挂载nfs错误/index.html","b9d55da3a5b624bd0a8cfc5b7dae71dc"],["2019/11/26/31-systemd一些命令/index.html","6dcab86b5cd7f2c363dcafbe4b9c98ec"],["2019/12/02/32-php错误502问题总结/index.html","4ee25277fa2136425bd2fb442021916f"],["2019/12/03/29-k3s安装配置/index.html","94ba31c60e1609c6ddbe5ded30975859"],["2019/12/03/33-k3s1.16部署nginx+php5.2.17/index.html","cbee9bb45f3e9e9b982c9f2ae16cfe80"],["2019/12/05/34-k8s一些命令总结/index.html","885c3090f40c7dd06729db4903b86ed1"],["2020/02/27/35-raid1盘数据迁移/index.html","79be8b746d05ac5cba1be2ed1f5d118d"],["2020/02/27/36-centos单网卡配置多ip的几种方法/index.html","9a7b5f691076e1c48b75276d4274015c"],["2020/03/10/37-mac一些常用命令/index.html","3ca19decb04334e2cf9a89eb3778eef6"],["2020/03/12/38-es集群节点出现overhead脱机的问题/index.html","22fc5032a244f8c66caf58be1be6d136"],["2020/03/18/39-记一次nginx的request-time-和upstream-response-time差值很大问题/index.html","d33ae211b574fadbdcd7436b12283186"],["2020/03/18/40-记一次跨域的nginx配置问题/index.html","bdbbcdefc8f12cef50c67991139ecb0b"],["2020/03/19/41-记一次es集群内存溢出的问题/index.html","ad721d632c38a5bb306216b05b34eb81"],["2020/03/24/42-kubeadm安装高可用k8s集群/index.html","da02d0287f8c4be4739d9263cfbf9331"],["2020/03/31/43-k8s的yaml配置名词解释-模板/index.html","c4878eb837360dcda4b6d392d2be297b"],["2020/04/09/44-k8s部署fluentd-kafka-logstash-es/index.html","fec4424eb6023451e094e9ecfe87fd8a"],["2020/04/23/45-gitlab-ci与k8s结合/index.html","7814475333d1415e95943bd41330ed5a"],["2020/05/13/46-docker安装nginx第三方模块/index.html","e6e24abd773c253ea3136ee5d51f166f"],["2020/05/14/47-k8s安装promethues-alertmanager-grafana/index.html","3da406634447b91c10cf5cce6c3aab16"],["2020/05/18/48-k8s升级-1-10-1-15/index.html","14a1d49e7c74566ed23060479dea18e3"],["2020/05/27/49-go简单记录/index.html","29f334468f5fa8e4ffe76ca315cc5756"],["2020/06/12/50-记一次windows安装OpenSSH问题/index.html","67681e82c9bfecceca34f8a2902d4cc2"],["2020/07/27/51-k8s搭建radius/index.html","1add4e99c7b1691af54652cb91116365"],["2020/08/04/52-istio测试nginx-php项目/index.html","8d44e17bf9aea3b1485dbe24cf4d408c"],["2020/08/07/53-hexo部署到coding-net开启静态网站/index.html","f718b4b28d5389a6f0c9a3ad7c76a683"],["2020/08/12/54-go单元测试和性能测试/index.html","7b7d520341e6629689ae6291a9fe5611"],["2020/09/16/55-helm部署metabase简介/index.html","afdfad02823db95f47aeb74e72274b23"],["2020/09/25/56-centos8初体验/index.html","b0b7ac4e88227e427c1c3bd02f8b2e81"],["2020/10/15/57-gin记录说明/index.html","dcaa68f4c710cafbabbfc7343d2f792b"],["archives/2019/09/index.html","1fb36259cc37b60b8d098c22b872471b"],["archives/2019/10/index.html","12e6fdb91143ecafb947c3f81e496bbb"],["archives/2019/11/index.html","688e11bd41b83cadd7853f4e1621fe51"],["archives/2019/12/index.html","af1403e352e81c512ccf0fd3893f7fff"],["archives/2019/index.html","5c20770011fcd89bc798b63887c1db29"],["archives/2019/page/2/index.html","07832d3add2cbcb5942823c824432471"],["archives/2020/02/index.html","030d0a1b9c9c16b8e11f2190cfbd6ee5"],["archives/2020/03/index.html","66b4a77bc1a6f56b5977f7f93d633120"],["archives/2020/04/index.html","709c7af4c3c0188f99834a57bb297ca8"],["archives/2020/05/index.html","b3fea5e0ebaeee1e967a78d7f51f121e"],["archives/2020/06/index.html","ee704439060fa9782e10f216e97843d3"],["archives/2020/07/index.html","68820675355183e942e65223a8c4777a"],["archives/2020/08/index.html","9aacd21c30e9d16badbfb1074f205a9c"],["archives/2020/09/index.html","12b186edb72f8f2e2affad6b84761e4e"],["archives/2020/10/index.html","f247f1e7dd17ccaa71e63c66e8520fba"],["archives/2020/index.html","42116571327431f2ffa38122d26ad210"],["archives/2020/page/2/index.html","a7a9d40270524756eb646eae974765bc"],["archives/index.html","1e5a450ddc43543854696362dee640f2"],["archives/page/2/index.html","36441d4ce1dbe89220f2bd1e6460390e"],["archives/page/3/index.html","b5b96580e4f2f75e53cc8b8eebb4aaeb"],["assets/algolia_logo.svg","8e0e9838589ad42418fe5fa23fa7e9f1"],["assets/example_qr.png","851a661c0c87f5cf06e68dc5d603ffdb"],["assets/loading.svg","e213e506bd18e78aac4008b258ee195d"],["avatar/Misaka.jpg","5b007d28d8184757ae475eb62afd6202"],["baidu_verify_Og0HzH3bO9.html","a5e9cc551568f1e5721f148047e9bd6a"],["baidu_verify_SIdT0vzXib.html","b077295726c2eb8b22211cb0d3a2434b"],["categories/centos/index.html","c4b2040d725f04df878caaebda490a1b"],["categories/docker/Dockerfile/index.html","63513a53c3be6e13dc894116cfe3e942"],["categories/docker/index.html","8559c80558c1f38256a4c77f1977fbb4"],["categories/elk/elasticsearch5/index.html","f0252d7d0f87d14f122acf369c383278"],["categories/elk/elasticsearch7/index.html","ffc852abe43ca03a6595f231b8a89d0f"],["categories/elk/index.html","3b31dc84998f46f77c9f70b389422502"],["categories/elk/logstash/index.html","ffaa9073b41b8139ff556fd70d366fbb"],["categories/elk7/filebeat7/index.html","d1d0203090be316a6bebc1714a6d0577"],["categories/elk7/index.html","5831d64656b240121227faee4ede2ac9"],["categories/fluentd/index.html","207094a49bc947295855a4958ab402f1"],["categories/gitlab-ci/index.html","63f6cfa8b0a8a57bb9c46909b388b30b"],["categories/go/index.html","b35d1265a556fa56bf313a95238852e5"],["categories/index.html","144d1b78c40ed38d0b16fb034ab7f38c"],["categories/item2/index.html","0cb947cf750b39dfc9a8a9c01e990ae2"],["categories/k3s/index.html","8d4ab59986eb89d48550c4087dee5ffc"],["categories/k3s/lnmp/index.html","2e85d550560c348f4874ac1a77a46a08"],["categories/k8s/elk5/index.html","475d6856ccbcadf66e7c6025f04d1519"],["categories/k8s/elk7/index.html","ef3eaf8058fb9c340a9badfa7c550c37"],["categories/k8s/index.html","281639627b66f654b87fae0cdd079426"],["categories/k8s/kubectl/index.html","4db9836b7609b3a15baeecf4789b3ee0"],["categories/k8s/mysql/index.html","5c7b348ed91a8bc2154cb44084674774"],["categories/k8s/prometheus/index.html","02411d877bbc500b8a6c767106a6959e"],["categories/k8s/storageclass/index.html","0379353fcb5e152ed450cf7487399a0e"],["categories/k8s/问题总结/index.html","dd0c8e1203c46e1f17fd7cf21f496f6e"],["categories/linux/awk/index.html","f830ac5a4421ba8e0d1950feb0280515"],["categories/linux/index.html","eb2468390a481a4fb3b6e050410ffd30"],["categories/linux/shell/index.html","b133cf89960140aaa3abf261a2c80c16"],["categories/linux/systemd/index.html","848ecde80d9d4ce8ba97de3a5d11217b"],["categories/linux/问题总结/index.html","9b43ca58bacc6e07e197e41ff49451eb"],["categories/mac/index.html","d87535b45c132902379d4a551d1a7fc5"],["categories/markdown/index.html","d816da2e29a4a082e70c4b132adf2544"],["categories/mysql/index.html","5a7abada644e0895d5ad0c33b74c37bd"],["categories/mysql/主从/index.html","c399c222598e6d8de827ce09ecdee956"],["categories/nfs/index.html","a608395f797b6742debfb1e0267b80eb"],["categories/nginx/index.html","3b204ef7328e2b5257d2c9454b592c2b"],["categories/nginx/问题总结/index.html","47b11b32f9cf3cadba78312da05ab718"],["categories/php/index.html","3b751495cbf360b76ecc7998ef46ca69"],["categories/php/问题总结/index.html","b86e657466b34e18870179636aeddf89"],["categories/radius/index.html","79bcaf6d7d99b80c89a729408ef79532"],["categories/raid/index.html","9597f802a47f20d6c030ab20f75a01cf"],["categories/windows/index.html","0c278c175663fae2acae9d76fce419bf"],["categories/博客/index.html","c051e60c6a7fbf9772bc140bd3307f76"],["categories/博客/美化/index.html","7c6e2d0441af3a1d3e7e6b7e19572f6f"],["categories/存储/ceph/index.html","baa98405bc59a4ebd84a980bd450feaa"],["categories/存储/index.html","cd2ee2395d81acb19a65c6e1acc32e81"],["categories/存储/nfs/index.html","915b94767b4106a47711bf05aab886da"],["categories/技术文档/index.html","1bd2782a7cefe35f9032b155d3a50ae6"],["categories/技术文档/page/2/index.html","d5c13389458fb1d4222e5d27e1a5b56c"],["categories/有趣/index.html","a5fbe7dc19d9a714b099116142fdcf09"],["categories/有趣/二次元/index.html","35c4d220b8aaca7098e02597adfd8a2c"],["categories/流量复制工具/gor/index.html","f7753ac22552f2dbcff386bf2364eea7"],["categories/流量复制工具/index.html","284fb07338c2b03bbe1399faad70cf80"],["categories/网卡/index.html","b7c91fe2416e17004ad81787859e84f0"],["categories/网址/index.html","421408173cf5dea56b1e98700e3e8a8d"],["categories/网址/大佬博客/index.html","c8e8b67429f49c8a560ac14c64c29e4b"],["categories/网址/收藏/index.html","b9dabdfa6ab26a19d330fc4c128c1aad"],["css/mobile.css","9cdba0b7411a49fe8851a58b651b76d4"],["css/style.css","65d0f57ab033cbd012cebefe3c92d91f"],["font/Oswald-Regular.ttf","69f4403ef57d4268b2f4dffdf9e7cfe1"],["font/Source Sans Pro.woff","5097f81039d71344019a2ffbf6160f6c"],["font/SourceCodePro-Regular.ttf.woff","b6ba243267725a84615cfaba137a6f55"],["googleb6c70596855d90ca.html","bead4c9b1906f9c6c5ad81b622bcceda"],["images/16/容器的原理-1.png","1c184a092af6b6829c49ee20e70d132a"],["images/27/img1.png","74279f54a523a47f82a95a04ccfc9eb4"],["images/27/img2.jpg","93a32e8f4e52a9ea2a28b72a4223c2a9"],["images/38/gc1.jpg","dc31455119def3534b8b78213e6dcd29"],["images/38/gc2.jpg","ef5563c2f902a9b8550ed006747c94f5"],["images/38/gc3.jpg","3bef257bda43708e5c6d00598e5a6ccf"],["images/38/gc4.jpg","df24a1184fff79f3513b73fc1f4a6938"],["images/38/gc5.jpg","3e0fd4156b9666c1488b49d332875416"],["images/42/01.png","2a7524daaed26030a260df4e3fb58197"],["images/42/02.png","9c6ea26880ea0a13e900835c3fc75d65"],["images/42/03.png","d25c88fa33688ffe4a39aa59797e9e5d"],["images/42/04.png","8816231bb00c27abc8c97fc86797d474"],["images/45/01.png","95bacc819ae17e7e307034050799f3fb"],["images/45/02.png","be5e8c526b05c276cb9a1507a1a42323"],["images/45/03.png","c090ec8f8b444e05087d92b717e3ea8a"],["images/51/img.jpg","a2f5989183a4451b86968567755127c9"],["images/51/img2.jpg","572e1ec28c81be6cf350eb07ce52dcf5"],["images/52/img-all.png","0a63c2085b097a61f51611c9f48edc02"],["images/52/img-all2.jpg","9439588475c4cf0b60cb5dd1e05e1d4f"],["images/52/img-fpm-1-9.png","64d3bc0dd7c3ac24c6aa8aacb953fb14"],["images/53/img1.jpg","945011815dcef30570766dadef1e80b2"],["images/53/img2.jpg","a613182827884dbc4013e3fab5c5cda8"],["images/53/img3.jpg","42fa19420f095cd0c8dbd7d752b83935"],["images/53/img4.jpg","1c97844a91851b91acbd94c1ef4229b2"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["images/avatar.jpg","5b007d28d8184757ae475eb62afd6202"],["images/blog6/rancher-pv.png","d2a7e4bbfad5f71e75c9d5459cf5a464"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/docker1.jpg","5c611dd864017adeff648bca93d53f41"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/go1.gif","9b54b5b653edf8ad46925cb8bcb1b516"],["images/jixie-title.jpg","3ebd10201e23ecf68aba4524c020db0d"],["images/k8s_3part.jpg","8c72197f0daf342bc8b87d908527d638"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["images/tcp三次握手图.png","32ddd8df35bd5762604327b25758370e"],["images/tcp四次挥手图.png","684b2b4a0286acadc32247d693dbd961"],["images/test1/test1.jpg","60b725f10c9c85c70d97880dfe8191b3"],["images/title1.jpg","fa2db043867c4c5654471e21ad36e5c0"],["images/title2.jpg","b6e57860ebc3fcdcf150a6a4cf3402ab"],["images/title3.jpg","f0b1554cfa4dd1193719dcfeb9e4de28"],["images/title4.jpg","6eb7bcbb846d1123e830488d75028df7"],["images/wechat.jpg","a9d6b6d5bc4c08de2dcb03653946168d"],["index.html","2ac66ac2e33935456735321f6ff55e4e"],["intro/404-bg.jpg","bb987c26e0a0f36f7a4350cfdfc6b4ca"],["intro/about-bg.jpg","5c2f59e45c2d19a12cfa4e3305380e9a"],["intro/index-bg.jpg","10f3e3cf901a4d033fc208efff20e9a4"],["intro/post-bg.jpg","87bd4714afa098591e0cba60aae86f10"],["lib/jquery.min.js","a09e13ee94d51c524b7e2a728c7d4039"],["lib/webfontloader.min.js","b03e20d628025187c3ac981299387cc0"],["page/2/index.html","ca6899cfa7c862429fbf75995c8897c6"],["page/3/index.html","5a6fbb40064c453522dd1d5236a03096"],["page/4/index.html","476eaffa94d86c40f0ec152e1cbb605a"],["page/5/index.html","7fbee1241a0e69cef71e45b4717aeb6d"],["page/6/index.html","64e61d195124a3bfc2e9052a564fdacf"],["scripts/main.js","daa7eca40f5b50fa75baf7d98f5390d7"],["scripts/search.js","366fbc102b7ccc5c9554bed0bb945f66"],["scripts/share.js","9ec0687984e4e409f1bcc935e6dd18f9"],["tags/awk/index.html","3bdb4cbcf4f11887a01cf546aac46523"],["tags/centos8/index.html","a21d1c1a4d75db660b355faf1310f95d"],["tags/ceph/index.html","f1b44f46cfe79a3a221808225a47171d"],["tags/cephfs/index.html","2d0464030b9153a6aec4759a9009335e"],["tags/cloud-native/index.html","287572f25f7cee4b2b91f7d8e710f732"],["tags/daloradius/index.html","5bbc712a81210d584e51d879bf210edc"],["tags/docker/index.html","db68af50513ac5521badfb2b6b9f9569"],["tags/elasticsearch5/index.html","e2000b37826b25145b14cf215df59def"],["tags/elasticsearch7/index.html","ae2439fb132fc198b8cf630499cc954d"],["tags/elk/index.html","080c3df78a9f6be6dbe5ce8e442f1151"],["tags/elk5/index.html","6cbda5a8737ff61a315b6ddbe1016794"],["tags/elk7/index.html","60ab1badabd631e7462d50c42a1c4101"],["tags/filebeat7/index.html","afbbc43c18603085d487684ee50aa26e"],["tags/fluentd/index.html","eda58ae4c13e533057b97fc3cf437615"],["tags/freeradius/index.html","bf53f33d503bb26e501cc1ce502cfe03"],["tags/gin/index.html","2f6a08547abea9bf03bb850d46f49628"],["tags/gitlab-runner/index.html","2ce7b9f336511380ff703ee56e89c2bb"],["tags/go/index.html","c4c104aba274d7f46e287a605969badf"],["tags/gor/index.html","b0b3fdfe386c4c7f77ff31dd16f52180"],["tags/helm/index.html","5dc6881fa54e23446eacb30662095694"],["tags/hexo6/index.html","aa1b0a4f66e2dbee5ef364fef8f5dae2"],["tags/hexo美化/index.html","410c2c7a58dfb1543b71bb6de77c7659"],["tags/http流量复制工具/index.html","db8258a19402e0ebccc8339ee7a4d4a6"],["tags/index.html","21d4c9b5b85290e0d6cd8d0ce834931d"],["tags/ip/index.html","8f67dd670d6424367206499ed9ea7a03"],["tags/istio/index.html","22da9ddfe75ef2efd082d90cd923c3cd"],["tags/k3s/index.html","dc141881d87b14a50e3459a4fce4ee13"],["tags/k8s/index.html","e2d5802a48218a3f33e2a4eb5aa64455"],["tags/k8s存储/index.html","4c85097a7a74e6b81c4e4c13be1c8a72"],["tags/kubectl/index.html","97e6103bad3cef342ec9150e86e76dcf"],["tags/linux/index.html","68aa3f8881b1da00b39c21bd40e482c8"],["tags/logstash/index.html","0d171558b110ee15a48bbfa76c6f6502"],["tags/mac/index.html","6708271f15b3fec78d484f774f9f6f6c"],["tags/markdown/index.html","07cb3c1070e216178314435a6726f146"],["tags/metabase/index.html","923565936069dee5cc95203c0537dc58"],["tags/mysql/index.html","c3bb94b9602c1b81422b10538dd688e7"],["tags/mysql5-7/index.html","f949f495769d1d7e60aadbe2aa744378"],["tags/nfs/index.html","feeda61d5c69c8c62743e9d76b2a3fe0"],["tags/nginx/index.html","0acf9bb47c7c9bf47467dc582c5ec43d"],["tags/php/index.html","fe1177ab3a752b90ddee0781a4e3fd00"],["tags/php5/index.html","52da44bd9e7120f01a2385de69a2fd20"],["tags/php7/index.html","d91e448e5c162712075d0a6ceba2e374"],["tags/promethues/index.html","b8e93f5eb60ae42d367ebc16f140a105"],["tags/raid/index.html","15c9aae08a0fcff8f55ed783beaf85ca"],["tags/shell/index.html","fa84555f826b81dc422edf49b3b01665"],["tags/ssh/index.html","f9d2a12f9ea6777732e66a21ade76cdf"],["tags/storageclass/index.html","316f5f004f929ba3bde271a9b01072e8"],["tags/systemd/index.html","328b5f1d502ec826821d476b24343582"],["tags/windows/index.html","aebed0353414f03b9843ce13648a6c3c"],["tags/云原生/index.html","328223593a6cd771ecb5db6de09fc60f"],["tags/大佬博客/index.html","63db7315c405c76517ebd87b52520b80"],["tags/收藏/index.html","c0b783e2b55fc2eff64050e8adee0569"],["tags/特效/index.html","962ee6c8763045ee72bafa830cd0327e"],["tags/网址/index.html","a7be22f072976cf213daf08dfaac7491"]];
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







