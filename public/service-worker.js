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

var precacheConfig = [["2019/09/19/2-部署elk7-2-0/index.html","e668695abb3b5eba946214d2cb7bd013"],["2019/09/19/首次搭建hexo博客系统/index.html","0a56abffbcb013b9bd84c1fea1bbb20b"],["2019/09/20/3-k8s遇到的一些问题统计总结/index.html","33e1d4f2829370f9eae25c34a17a439f"],["2019/09/24/4-hexo鼠标移动和鼠标点击特效/index.html","c82c86c63589c3d1793b01ecb98b2e0d"],["2019/09/24/5-hexo添加看板娘/index.html","81176cd111f8e980179585eea047ec9f"],["2019/09/26/6-ceph安装部署/index.html","0b47c578c64ab6ea08bf8c49d2494bc7"],["2019/09/26/7-k8s部署storageclass动态创建pv-nfs-rbd/index.html","40af6e0c35e7295caa21575654afe22a"],["2019/09/26/8-mysql5-7二进制部署/index.html","5b5e28882636289ad1b5d86699155a81"],["2019/09/26/9-linux遇到一些问题统计总结/index.html","41a5c1e5e179b997af06dbde61f613e6"],["2019/09/27/10-centos6安装nginx1-16-php7-2/index.html","2ac10928f80d2692c3bda11a40434af3"],["2019/10/10/11-mysql简单记录/index.html","83fc516901653a6cbbaa187835bcfeca"],["2019/10/11/12-awk简单记录/index.html","f5230f586de7a813aa9f15d6a49563a0"],["2019/10/12/13-云原生博客汇总/index.html","8a444afab6559a25a09e54e3c907a6d6"],["2019/10/15/14-mysql目录copy方式迁移/index.html","ec3378688e5d307fb3481f974eac8e49"],["2019/10/16/15-docker简介和使用/index.html","9fecce33066fb3628290239de9588284"],["2019/10/16/16-dockerfile介绍/index.html","001e7c1acf6f17674811a427961c4c14"],["2019/10/16/17-markdown一些写法记录/index.html","005c28179a87f4b1aa6ec91f69925067"],["2019/10/17/18-收藏链接/index.html","3802edf54f8239d6dbacfac6dfa641af"],["2019/10/17/19-shell中gt和>的区别/index.html","1739863a6eda2ccaa7bc6e0deeb24260"],["2019/10/24/20-k8s搭建mysql5-7-24主从/index.html","b7f912d468656bc627919a215f6c445b"],["2019/10/28/21-流量复制工具gor/index.html","6a68e111e68b9e40794228fa69429e04"],["2019/10/28/22-es集群磁盘扩容/index.html","01bc73d72700678844e9b23f78e673ca"],["2019/10/29/23-mysql5-5主与mysql5-7从部署配置/index.html","657d872a0d34f850a7d1467411f48404"],["2019/10/30/24-filebeat7收集mysql慢日志到es/index.html","9f2f357dc0d56f4faf4c0eb989ba2831"],["2019/11/01/25-linux一些脚本汇总/index.html","34f9836515e496a65f0caa57d845c784"],["2019/11/08/26-logstash配置/index.html","a96549e0c844b889b9541c40e04b523c"],["2019/11/21/27-k8s一条命令部署es5-2-0集群/index.html","c19a5141561d2631451d8ca0235ffcab"],["2019/11/25/28-k8s1-16使用旧yml部署配置问题/index.html","494afb3cb0ee735e2bb7af109ca96999"],["2019/11/25/29-k3s集群部署项目报挂载nfs错误/index.html","59195ad0bd0df123696809067f52bef4"],["2019/11/25/30-k3s集群部署项目报挂载nfs错误/index.html","309e65b3544db28f3c4e98abf6babd91"],["2019/11/26/31-systemd一些命令/index.html","88b3c0d6c4fde3eadbf1a788ca99f990"],["2019/12/02/32-php错误502问题总结/index.html","d64a5a747989c33804b46ef2fa51ef9d"],["2019/12/03/29-k3s安装配置/index.html","065e0d2e1e1e1c8b42ec22a44502ec60"],["2019/12/03/33-k3s1.16部署nginx+php5.2.17/index.html","92b5d4cad699721fe50ad8667fb6b9b3"],["2019/12/05/34-k8s一些命令总结/index.html","f76da6ac45d4c7b2a070ce17f2dadea5"],["2020/02/27/35-raid1盘数据迁移/index.html","6705efb57798f9945a75e1e9eaa8d2ac"],["2020/02/27/36-centos单网卡配置多ip的几种方法/index.html","6fb0a19bf64df8d69b3879146481f951"],["2020/03/10/37-mac一些常用命令/index.html","aed9378ce1892c7b2a6f362cfa806b0f"],["2020/03/12/38-es集群节点出现overhead脱机的问题/index.html","0b5e9503a6060aebf7aa05c8760920b7"],["2020/03/18/39-记一次nginx的request-time-和upstream-response-time差值很大问题/index.html","cfc15fef2ce533e482a9f9f9fcc36dc0"],["2020/03/18/40-记一次跨域的nginx配置问题/index.html","00928aa00245bb1483b7299ce8983618"],["2020/03/19/41-记一次es集群内存溢出的问题/index.html","b2b1a22cf0b9eccd179723d90a5228e4"],["2020/03/24/42-kubeadm安装高可用k8s集群/index.html","489ac00472a229cf7ade8be9dfad8f02"],["2020/03/31/43-k8s的yaml配置名词解释-模板/index.html","e69a75e0ec68dac92b7c7e88c698bb83"],["2020/04/09/44-k8s部署fluentd-kafka-logstash-es/index.html","f288a995a87ef4762d50a6a804b85366"],["2020/04/23/45-gitlab-ci与k8s结合/index.html","de0e2d9be1a90b39728a36c301a1a29c"],["2020/05/13/46-docker安装nginx第三方模块/index.html","edcfe90b87279986b1f33de9b5b19642"],["2020/05/14/47-k8s安装promethues-alertmanager-grafana/index.html","c1bdb1fe8b4e1941ff71eb1fd9b5e23a"],["2020/05/18/48-k8s升级-1-10-1-15/index.html","78378b95a421bcc1a6f85edb932d3d5e"],["2020/05/27/49-go简单记录/index.html","9c57237fd1fb51486557e644a34760eb"],["2020/06/12/50-记一次windows安装OpenSSH问题/index.html","9d869298296da0c411a60ce27a73b4b2"],["2020/07/27/51-k8s搭建radius/index.html","096da949746ab2be9fda873291304910"],["2020/08/04/52-istio测试nginx-php项目/index.html","b7544c65dfd58fce97a94a36d6806932"],["2020/08/07/53-hexo部署到coding-net开启静态网站/index.html","6f0c84402138415f90097dc32690ff3d"],["2020/08/12/54-go单元测试和性能测试/index.html","d9e05acadb449b7ca65981363129e9d4"],["2020/09/16/55-helm部署metabase简介/index.html","5d70c2344a26c820d62c067dbec2a39b"],["archives/2019/09/index.html","23556b3275d63a7e485a920c35f93e21"],["archives/2019/10/index.html","13a3068481a6e68d8aee30de220d8155"],["archives/2019/11/index.html","62561b89d7123f2196acdce06d9fb481"],["archives/2019/12/index.html","27935d91c902c7ecd0c4dc83fb806791"],["archives/2019/index.html","44bc9c6ad33c33b90b5a6e6c311e8e1e"],["archives/2019/page/2/index.html","2ec361288f1c16073cfcb94621423954"],["archives/2020/02/index.html","a0837a2d4c5a8fad5a59fdf6abe260b1"],["archives/2020/03/index.html","d2e271737582f51d12d4e877144322f7"],["archives/2020/04/index.html","90ccf0c61cf31a7e2c2f89598cf20b8f"],["archives/2020/05/index.html","6ed35a6f24876a52c161db580f458b7f"],["archives/2020/06/index.html","d281a85e34ca253f5baf7168b8a05ca7"],["archives/2020/07/index.html","4f25469af09187c06a4c5c346d68cd3f"],["archives/2020/08/index.html","a20bfc8450ea300fc1ef8aa250e9716e"],["archives/2020/09/index.html","8fdf3c0e31a1eaf434a026ef6a9589ab"],["archives/2020/index.html","18ea46a09ea2387be6e50fee4d1fbf48"],["archives/2020/page/2/index.html","9fc1b0aca4dd405c9701a25404fff489"],["archives/index.html","9aa0d66c1e62048f4eb4a70639757130"],["archives/page/2/index.html","37f00e57fc3125fda395e177d96efc92"],["archives/page/3/index.html","c658f191b0932c801028ea0eab96c92c"],["assets/algolia_logo.svg","8e0e9838589ad42418fe5fa23fa7e9f1"],["assets/example_qr.png","851a661c0c87f5cf06e68dc5d603ffdb"],["assets/loading.svg","e213e506bd18e78aac4008b258ee195d"],["avatar/Misaka.jpg","5b007d28d8184757ae475eb62afd6202"],["baidu_verify_Og0HzH3bO9.html","a5e9cc551568f1e5721f148047e9bd6a"],["baidu_verify_SIdT0vzXib.html","b077295726c2eb8b22211cb0d3a2434b"],["categories/docker/Dockerfile/index.html","3b21f765db00e1e3c7f10189995ffbd4"],["categories/docker/index.html","a14585a0decabd3e9e8291d0eb48dc73"],["categories/elk/elasticsearch5/index.html","d2ad6a1648fcd6bef6ff5df8387dd473"],["categories/elk/elasticsearch7/index.html","985fdf603a99bc71faa9f1af294c1798"],["categories/elk/index.html","d80e72daf0774be2fea861f73e08a436"],["categories/elk/logstash/index.html","767649a727e55e368c957bff4d5a323c"],["categories/elk7/filebeat7/index.html","e47beabed487998c2340e32f4346d8ac"],["categories/elk7/index.html","1633fcf0589c780ce64215f8905b3799"],["categories/fluentd/index.html","f2cce5769e9d6b58a252b02b6a82de0d"],["categories/gitlab-ci/index.html","503f36119954babcb668e45975f8eaa8"],["categories/go/index.html","561f02e9ed6d41844475e50c89afba23"],["categories/index.html","425377a9f53e19a54a5bb1b29110c388"],["categories/item2/index.html","c3708a8d291282d7cd82b119fbf203b0"],["categories/k3s/index.html","80ddf025b36876d88214d8b613da815c"],["categories/k3s/lnmp/index.html","a0552b360fa8a82b3321303dcea22bd9"],["categories/k8s/elk5/index.html","7c3109be2e075c1b891416364612e893"],["categories/k8s/elk7/index.html","320eb4ccaf665fd871ab5b3d530e8f78"],["categories/k8s/index.html","f902053aedc6c134007dc574a9d3ea35"],["categories/k8s/kubectl/index.html","5797f20ba3372f7735376d7c986190b0"],["categories/k8s/mysql/index.html","814ce850ba4660fb11d1054462918010"],["categories/k8s/prometheus/index.html","f9b39c7899374b1fffb31423b08dab01"],["categories/k8s/storageclass/index.html","3404442012df707aafcf8bfac52c5599"],["categories/k8s/问题总结/index.html","21ce5e785e325117263148bfe5d18cc9"],["categories/linux/awk/index.html","729382589d19aed067f89c5a0590f849"],["categories/linux/index.html","47afe786c1bfdc379349c80692f4b09a"],["categories/linux/shell/index.html","267186058100b113f5404566d2d419df"],["categories/linux/systemd/index.html","9901efb5cd322329644fef446a904d4b"],["categories/linux/问题总结/index.html","b8c06d20755c90b7b5c56a11adcbfaeb"],["categories/mac/index.html","10ed57006d17dd010c84bc4f1193a3ad"],["categories/markdown/index.html","c954b770f3fb7a048dfc71422b419c0c"],["categories/mysql/index.html","19d06a56b203b806d75f4169886fb4b4"],["categories/mysql/主从/index.html","15a6facdffa072edd46723812139ac46"],["categories/nfs/index.html","3cce0d9406a210312ccbdb28064fa5f0"],["categories/nginx/index.html","af119de426e78235df056a1464e81d44"],["categories/nginx/问题总结/index.html","9ffe1af4578d7628efd8db848c85ae2c"],["categories/php/index.html","f43a7d3102dd779550a2a9e7127a0b6a"],["categories/php/问题总结/index.html","1047e582449baef151c369ae67645b96"],["categories/radius/index.html","429c0927ad64667725a324c7e46ce00d"],["categories/raid/index.html","5f8201f1c829bba68db4466fc593eaa4"],["categories/windows/index.html","b1f2271c9b9e36f08c41225b258fe019"],["categories/博客/index.html","8086daf00ff04d4c0db1190c343b4564"],["categories/博客/美化/index.html","822709db4f350c992de2d6e51216bd6a"],["categories/存储/ceph/index.html","71f8ebbca3f75b02d7a6ff692be76f0e"],["categories/存储/index.html","9bf970871976235b46c723fbdfdefe28"],["categories/存储/nfs/index.html","4ac9a83561578a56189c1706dc5335a2"],["categories/技术文档/index.html","ca61a7ed0c3c46b79486ce5f977aaade"],["categories/技术文档/page/2/index.html","fc65845040f312a559ce79c78ae6fe3c"],["categories/有趣/index.html","1740cb0039d20ebd7cc8cd3245a29d50"],["categories/有趣/二次元/index.html","65b1dcbe64238d2bb345eca0f16909e8"],["categories/流量复制工具/gor/index.html","b2b94cb110cbf521c64996129480b6a5"],["categories/流量复制工具/index.html","bfcfc7f717e202f710230db982351b1e"],["categories/网卡/index.html","af7e1c43d405285e0d8257e8827e21b9"],["categories/网址/index.html","4e8b74b743abd8741afa2b2b0c409ab6"],["categories/网址/大佬博客/index.html","ad20ead46c240abedce3ffaefa0cf08a"],["categories/网址/收藏/index.html","6201dd455a1ce4ccc5e63d27ae3d243c"],["css/mobile.css","9cdba0b7411a49fe8851a58b651b76d4"],["css/style.css","65d0f57ab033cbd012cebefe3c92d91f"],["font/Oswald-Regular.ttf","69f4403ef57d4268b2f4dffdf9e7cfe1"],["font/Source Sans Pro.woff","5097f81039d71344019a2ffbf6160f6c"],["font/SourceCodePro-Regular.ttf.woff","b6ba243267725a84615cfaba137a6f55"],["googleb6c70596855d90ca.html","bead4c9b1906f9c6c5ad81b622bcceda"],["images/16/容器的原理-1.png","1c184a092af6b6829c49ee20e70d132a"],["images/27/img1.png","74279f54a523a47f82a95a04ccfc9eb4"],["images/27/img2.jpg","93a32e8f4e52a9ea2a28b72a4223c2a9"],["images/38/gc1.jpg","dc31455119def3534b8b78213e6dcd29"],["images/38/gc2.jpg","ef5563c2f902a9b8550ed006747c94f5"],["images/38/gc3.jpg","3bef257bda43708e5c6d00598e5a6ccf"],["images/38/gc4.jpg","df24a1184fff79f3513b73fc1f4a6938"],["images/38/gc5.jpg","3e0fd4156b9666c1488b49d332875416"],["images/42/01.png","2a7524daaed26030a260df4e3fb58197"],["images/42/02.png","9c6ea26880ea0a13e900835c3fc75d65"],["images/42/03.png","d25c88fa33688ffe4a39aa59797e9e5d"],["images/42/04.png","8816231bb00c27abc8c97fc86797d474"],["images/45/01.png","95bacc819ae17e7e307034050799f3fb"],["images/45/02.png","be5e8c526b05c276cb9a1507a1a42323"],["images/45/03.png","c090ec8f8b444e05087d92b717e3ea8a"],["images/51/img.jpg","a2f5989183a4451b86968567755127c9"],["images/51/img2.jpg","572e1ec28c81be6cf350eb07ce52dcf5"],["images/52/img-all.png","0a63c2085b097a61f51611c9f48edc02"],["images/52/img-all2.jpg","9439588475c4cf0b60cb5dd1e05e1d4f"],["images/52/img-fpm-1-9.png","64d3bc0dd7c3ac24c6aa8aacb953fb14"],["images/53/img1.jpg","945011815dcef30570766dadef1e80b2"],["images/53/img2.jpg","a613182827884dbc4013e3fab5c5cda8"],["images/53/img3.jpg","42fa19420f095cd0c8dbd7d752b83935"],["images/53/img4.jpg","1c97844a91851b91acbd94c1ef4229b2"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["images/avatar.jpg","5b007d28d8184757ae475eb62afd6202"],["images/blog6/rancher-pv.png","d2a7e4bbfad5f71e75c9d5459cf5a464"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/docker1.jpg","5c611dd864017adeff648bca93d53f41"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/go1.gif","9b54b5b653edf8ad46925cb8bcb1b516"],["images/jixie-title.jpg","3ebd10201e23ecf68aba4524c020db0d"],["images/k8s_3part.jpg","8c72197f0daf342bc8b87d908527d638"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["images/tcp三次握手图.png","32ddd8df35bd5762604327b25758370e"],["images/tcp四次挥手图.png","684b2b4a0286acadc32247d693dbd961"],["images/test1/test1.jpg","60b725f10c9c85c70d97880dfe8191b3"],["images/title1.jpg","fa2db043867c4c5654471e21ad36e5c0"],["images/title2.jpg","b6e57860ebc3fcdcf150a6a4cf3402ab"],["images/title3.jpg","f0b1554cfa4dd1193719dcfeb9e4de28"],["images/title4.jpg","6eb7bcbb846d1123e830488d75028df7"],["images/wechat.jpg","a9d6b6d5bc4c08de2dcb03653946168d"],["index.html","497aa4d33031b3e14b63bd170a9890e5"],["intro/404-bg.jpg","bb987c26e0a0f36f7a4350cfdfc6b4ca"],["intro/about-bg.jpg","5c2f59e45c2d19a12cfa4e3305380e9a"],["intro/index-bg.jpg","10f3e3cf901a4d033fc208efff20e9a4"],["intro/post-bg.jpg","87bd4714afa098591e0cba60aae86f10"],["lib/jquery.min.js","a09e13ee94d51c524b7e2a728c7d4039"],["lib/webfontloader.min.js","b03e20d628025187c3ac981299387cc0"],["page/2/index.html","809bb7a3816bda502a65e9eded0c0dfd"],["page/3/index.html","7898ffb3d09a7ef273ba401eb3947499"],["page/4/index.html","a31d675de371089db905a74e764cb4b5"],["page/5/index.html","1bce8764eda32a891607428ea92daa7d"],["page/6/index.html","01ae50bd308a3ccab00dcbc04945ab88"],["scripts/main.js","daa7eca40f5b50fa75baf7d98f5390d7"],["scripts/search.js","366fbc102b7ccc5c9554bed0bb945f66"],["scripts/share.js","9ec0687984e4e409f1bcc935e6dd18f9"],["tags/awk/index.html","06bb5e264fe9dc5af5a7c70738c96ddf"],["tags/ceph/index.html","20adf58f508b24e627849c008f84a31a"],["tags/cephfs/index.html","68013ba6b232745592e03ee0527bbf9b"],["tags/cloud-native/index.html","320312488a20b4fd6d30a3696006a7ca"],["tags/daloradius/index.html","c683da431ba8f2c87ed552a5ceb63ea1"],["tags/docker/index.html","09f452b646b114a63514e0c516edbc1b"],["tags/elasticsearch5/index.html","c615c6a8f2aee928e44443558e3bde6e"],["tags/elasticsearch7/index.html","4b5dc7bda3254753bfd2c3a0312d4f5b"],["tags/elk/index.html","13cbb035c45e1c80dbde62ae06b7d690"],["tags/elk5/index.html","d486b7c147b1e6e1c082fe6a661323a2"],["tags/elk7/index.html","e5f35f15ef4245c4d0796190a3263a04"],["tags/filebeat7/index.html","98f45e1b780cf664c4d77501e760ac96"],["tags/fluentd/index.html","4f75ead7d9a1b971fd8e65b78efb92e9"],["tags/freeradius/index.html","8fa048368c63acd35ead9e27b47d3192"],["tags/gitlab-runner/index.html","52cbbf9ea04fef5c7611e149f019cb5c"],["tags/go/index.html","ece10dc21542ee6b486f484b9b47bb10"],["tags/gor/index.html","f90fc231d8d61170a5e3ab929111143b"],["tags/helm/index.html","229659aa185917bf11a056d4628fef7a"],["tags/hexo6/index.html","e42e1ca358ebbb48d7a44fdc13e35206"],["tags/hexo美化/index.html","720d2b5ccc7480d394da655b3ed6c871"],["tags/http流量复制工具/index.html","9cb803f2e363048a6202c5700cb05bab"],["tags/index.html","a4765a6252947f5bd21cbb5d38c6b856"],["tags/ip/index.html","25f33db59e266d84ba39bf06303858ff"],["tags/istio/index.html","64ba5ceea4e01944c7e647f02b9fe90f"],["tags/k3s/index.html","08f2ab181a22cb7f6f9159828fe8f352"],["tags/k8s/index.html","5b316eefda0d3f711ccae28d74e3b915"],["tags/k8s存储/index.html","89cc2fe09fcfd651047d9778177ab745"],["tags/kubectl/index.html","bd7422acb536cf93efbe4700106da5c8"],["tags/linux/index.html","c159cd6f4e010801c22d22bb1b2551f6"],["tags/logstash/index.html","8b36cfc6791ebe1f1bcfb06d52991e8d"],["tags/mac/index.html","e4b6f5e3edddce82f11ef69f1cd3cebc"],["tags/markdown/index.html","854d5a31454b7d6005323bc643bbc095"],["tags/metabase/index.html","47905093cfe7d032f0814ed464c23fbe"],["tags/mysql/index.html","8a2747e9ea736457d9150ce4ca1f3b9e"],["tags/mysql5-7/index.html","391a055fe4c7d92e46626791dde11764"],["tags/nfs/index.html","f32e7ae3394d43d79ccab95ef97f215b"],["tags/nginx/index.html","72a517bd5346ee0b89e5710dece515eb"],["tags/php/index.html","9c2cbe92556fc57e04f35ab765242bbc"],["tags/php5/index.html","24f2e3a3f4db8f1852e9ffbf68040651"],["tags/php7/index.html","689a56a2016022b9786e7738a6ac39ba"],["tags/promethues/index.html","0ae8c43ad8106e069b7c649db9697cfd"],["tags/raid/index.html","82abe2945c0ec20a985f71a84e19793e"],["tags/shell/index.html","676bd5c7e624fb7e9d9d0e94b9c25bcb"],["tags/ssh/index.html","1d582c7af7ce45bc1ce2c05869cd4d58"],["tags/storageclass/index.html","e429109cfb12a3557676e2cc08b224c8"],["tags/systemd/index.html","89ce0a00cd5cecedd2f9ebe4140e0ce3"],["tags/windows/index.html","e37048bf23e33cbda28f54a6896e684c"],["tags/云原生/index.html","02119936a78b99cd252b39b34efe34e6"],["tags/大佬博客/index.html","901f23e74b4789de1c02eaac3c8292d4"],["tags/收藏/index.html","7f97492821d98a47c641a00f2e3252ba"],["tags/特效/index.html","a5c9b8d3c7670782d4982b962480659d"],["tags/网址/index.html","7868ab852df30d4f66057a7d737a3c6e"]];
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







