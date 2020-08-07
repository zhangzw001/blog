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

var precacheConfig = [["2019/09/19/2-部署elk7-2-0/index.html","51d638fd2c1310481c0a33daa59e6def"],["2019/09/19/首次搭建hexo博客系统/index.html","07809e0223576d52887185f501eb8b53"],["2019/09/20/3-k8s遇到的一些问题统计总结/index.html","4ed6e77d848bc5dcde8dae43afc52cfc"],["2019/09/24/4-hexo鼠标移动和鼠标点击特效/index.html","26e5a0fd5b4d7449b3eaf51fb86be540"],["2019/09/24/5-hexo添加看板娘/index.html","3c7751e364fb540dcd21bc985e88dc3a"],["2019/09/26/6-ceph安装部署/index.html","7c709f1fcb8f2a73bd071f89799be3d3"],["2019/09/26/7-k8s部署storageclass动态创建pv-nfs-rbd/index.html","1e1de38c3242718d26f2349375546fe8"],["2019/09/26/8-mysql5-7二进制部署/index.html","91cc4c4fa334bce2b8a5149722e068bb"],["2019/09/26/9-linux遇到一些问题统计总结/index.html","709d97212c4a6f113928d7b8b940f102"],["2019/09/27/10-centos6安装nginx1-16-php7-2/index.html","5ba63f4d0b6ec44126ab264d2580de93"],["2019/10/10/11-mysql简单记录/index.html","f535fbecb99f7f38334381215e2a4b0c"],["2019/10/11/12-awk简单记录/index.html","153aee021491c10b924ec7d5463e207a"],["2019/10/12/13-云原生博客汇总/index.html","234d14783ac646b501983709a7f6bf27"],["2019/10/15/14-mysql目录copy方式迁移/index.html","350a5705f7cfdd68dd894f9a5de189a9"],["2019/10/16/15-docker简介和使用/index.html","102788e807a62e6a8d0960e6f2582dea"],["2019/10/16/16-dockerfile介绍/index.html","dce56366c6d31abee4b2c0b06c27fc92"],["2019/10/16/17-markdown一些写法记录/index.html","254fdfc2873fc4bc7db9c7e4b5f89a18"],["2019/10/17/18-收藏链接/index.html","3e2d236101554110050884f4d7097d8e"],["2019/10/17/19-shell中gt和>的区别/index.html","da87d43945113acbd79bc8792d1a3c03"],["2019/10/24/20-k8s搭建mysql5-7-24主从/index.html","42175c7cb8ccef45240a4633c06a1c90"],["2019/10/28/21-流量复制工具gor/index.html","16bda2e6400cd0837836dd9dc72ce2b5"],["2019/10/28/22-es集群磁盘扩容/index.html","6d487d172ed1acb8c6dd4363f9d50151"],["2019/10/29/23-mysql5-5主与mysql5-7从部署配置/index.html","3fdabcc9c66175cedfe6b569f3c14fd6"],["2019/10/30/24-filebeat7收集mysql慢日志到es/index.html","5d2082f0fe44c7e551721aa2da6341b7"],["2019/11/01/25-linux一些脚本汇总/index.html","c4e8e56a291201c6931f2a019bcff7c7"],["2019/11/08/26-logstash配置/index.html","3e31e969948d5429c0532d0f932136b6"],["2019/11/21/27-k8s一条命令部署es5-2-0集群/index.html","96c088eda9c5c191fe4d19c9da4e4b48"],["2019/11/25/28-k8s1-16使用旧yml部署配置问题/index.html","6d35ee2f11a4c8480878b59271e17fae"],["2019/11/25/29-k3s集群部署项目报挂载nfs错误/index.html","0478be24c58ec70a3451fc06ed43ed1f"],["2019/11/25/30-k3s集群部署项目报挂载nfs错误/index.html","d1fbfac927c0b36c5c212f537fde6e8b"],["2019/11/26/31-systemd一些命令/index.html","29a263b0a2d85fb99e1be4167ef8adcb"],["2019/12/02/32-php错误502问题总结/index.html","ffde9371e6606ee9c02c4d9b0b8d8c27"],["2019/12/03/29-k3s安装配置/index.html","d9ba507b772ce20e09b6d43337278fbc"],["2019/12/03/33-k3s1.16部署nginx+php5.2.17/index.html","413994d714d8bf7076d32976be69e147"],["2019/12/05/34-k8s一些命令总结/index.html","16f7a967884c7e33fa1466ce99ce6e8e"],["2020/02/27/35-raid1盘数据迁移/index.html","31f122e6181787ae36592c75d8df6cc6"],["2020/02/27/36-centos单网卡配置多ip的几种方法/index.html","7a8d08a0e2475a13ec297cb1d90e888b"],["2020/03/10/37-mac一些常用命令/index.html","64aed62fb2d7cb062c0e20f48efa01eb"],["2020/03/12/38-es集群节点出现overhead脱机的问题/index.html","9746007743fda447fe899ac8bb57c5bb"],["2020/03/18/39-记一次nginx的request-time-和upstream-response-time差值很大问题/index.html","e41f302578c300edfea533d7a1de0e7a"],["2020/03/18/40-记一次跨域的nginx配置问题/index.html","f82700d64ccf470e8bfc922bb040bf14"],["2020/03/19/41-记一次es集群内存溢出的问题/index.html","fe090dc695a63f1cba8e69a2364cc263"],["2020/03/24/42-kubeadm安装高可用k8s集群/index.html","2e52d297f0a1177a07ecec7ba10efdbc"],["2020/03/31/43-k8s的yaml配置名词解释-模板/index.html","0a45cff42625ac542d90e76cb454425c"],["2020/04/09/44-k8s部署fluentd-kafka-logstash-es/index.html","a65f0a7651cfe5935bdae26505dddc3c"],["2020/04/23/45-gitlab-ci与k8s结合/index.html","ff5a5e6a6a51d98b50b3060f93add284"],["2020/05/13/46-docker安装nginx第三方模块/index.html","0bdb60616d7a3334f14247b7eed60ded"],["2020/05/14/47-k8s安装promethues-alertmanager-grafana/index.html","7ee08cf30f32dc07047277cfe433b5de"],["2020/05/18/48-k8s升级-1-10-1-15/index.html","d27c9d31b1ded08892abc5c5aefa7992"],["2020/05/27/49-go简单记录/index.html","0e45a3925c3a730ffed203ea2052a382"],["2020/06/12/50-记一次windows安装OpenSSH问题/index.html","108cfd678501a2199f7dbcd267978e2c"],["2020/07/27/51-k8s搭建radius/index.html","c260a049aa97e74e961278b47eeb54e9"],["2020/08/04/52-istio测试nginx-php项目/index.html","aa479e4e280ed4efdc27f294efb788ed"],["2020/08/07/53-hexo部署到coding-net开启静态网站/index.html","7cbed7d0ed1bb8607e5a34daaabc6ffb"],["archives/2019/09/index.html","2559b29be8579f095fb3e99747aa9c79"],["archives/2019/10/index.html","d10ce13ac22abc70584c05e92730fa2b"],["archives/2019/11/index.html","022f9d750df4889620093473c7eec141"],["archives/2019/12/index.html","f81a9c8dd99e426b78cba1f2c38463b3"],["archives/2019/index.html","6fa92bc9f877df7098b0149a388bb979"],["archives/2019/page/2/index.html","66f2fdf4489aa59176e836388701c698"],["archives/2020/02/index.html","512c7aadc64ebc5e3de0a37b8d6241b7"],["archives/2020/03/index.html","3846aeb6d0df7392f15f09abfe69edd3"],["archives/2020/04/index.html","f4845acc376fddce2000862c59479e81"],["archives/2020/05/index.html","a96e7740bbd4366099e1e8f14e4e0b5c"],["archives/2020/06/index.html","443a79ae60a72eeb791b883c1496b3a1"],["archives/2020/07/index.html","6605870738641b74730f4c3fd5ecbd4b"],["archives/2020/08/index.html","28bf2918ebb23579c4312123a15166fa"],["archives/2020/index.html","3727c01fefd6fdc3b0cf24cb651d2585"],["archives/index.html","abcb8394e30ae18c65f91aff59b9aae7"],["archives/page/2/index.html","65f75124ed54c2abf12bd89f5230036a"],["archives/page/3/index.html","909cb104ae1e6c8bca18965a2784e6f0"],["assets/algolia_logo.svg","8e0e9838589ad42418fe5fa23fa7e9f1"],["assets/example_qr.png","851a661c0c87f5cf06e68dc5d603ffdb"],["assets/loading.svg","e213e506bd18e78aac4008b258ee195d"],["avatar/Misaka.jpg","1f4eaa2515eeaab36d2acd2af5d29262"],["baidu_verify_Og0HzH3bO9.html","c2679bf7c4478071ea6fa7070a4961ee"],["baidu_verify_SIdT0vzXib.html","57478274b57aa3dde0e74cce75f05603"],["categories/docker/Dockerfile/index.html","075759edc0b6f8fcb8c841f27a1b3821"],["categories/docker/index.html","8ae5fd43988284a1534cb439de21d1f3"],["categories/elk/elasticsearch5/index.html","ef0a635815335c0b3a73d8b3221f9a99"],["categories/elk/elasticsearch7/index.html","7e2caf7dffe1172f0cdc6af3b29c4a80"],["categories/elk/index.html","0769d4f4fa59b294bd674e46c40c4de7"],["categories/elk/logstash/index.html","cd736bec49491ab5a5774da1706ae500"],["categories/elk7/filebeat7/index.html","fc5ebba25083629dd8d4d6aa29bbfa08"],["categories/elk7/index.html","356303636f7922aa5afee282984b1839"],["categories/fluentd/index.html","553ec9f90a8899a505044c6f73061248"],["categories/gitlab-ci/index.html","f892dd29957b88812212ae3af0f4c761"],["categories/go/index.html","6c82973585810d61ac227189f4f50d89"],["categories/index.html","d710a14c3e18ea64602aed0be0dd828c"],["categories/item2/index.html","073a6719a18686e41f72ba1e89b5a98d"],["categories/k3s/index.html","32dcdf5d8d98fa3c13d0764f30835f56"],["categories/k3s/lnmp/index.html","6d33e16cf1386320ec39d85c64107b6e"],["categories/k8s/elk5/index.html","4c7e139293fa84123d086b182a91bc85"],["categories/k8s/elk7/index.html","2c3d00a7230bcdfa6c3ce04180369175"],["categories/k8s/index.html","fcf6a766eea9add0066dbafee8779141"],["categories/k8s/kubectl/index.html","037a963bc26f0ea1add0eb0838a9e8d1"],["categories/k8s/mysql/index.html","35c4ad22f479f9ffdd465cbbdb0b4eaa"],["categories/k8s/prometheus/index.html","da21ec3fb40189b12b1e912bdbb897e9"],["categories/k8s/storageclass/index.html","71eb1f9b0b7b6d08de46cad95137c03a"],["categories/k8s/问题总结/index.html","6a79dc262fcbd3516a9b00a84ec17892"],["categories/linux/awk/index.html","c0ae9e7d342a137b170cd6773ee9efe2"],["categories/linux/index.html","37d680a628b2bd260c23ca2cce106473"],["categories/linux/shell/index.html","9ad2facb257f55c6a4ec7e739865563e"],["categories/linux/systemd/index.html","005a7edaa0d016356e202a9f9c4a0ebf"],["categories/linux/问题总结/index.html","41ff552816d958dbbf5ba5c174f43d07"],["categories/mac/index.html","0a8367c74c6ef99f97a25065b27148c6"],["categories/markdown/index.html","3f003c767dac7422922fbf51072223bd"],["categories/mysql/index.html","83feda9eb83b5244e8d13191c21383c8"],["categories/mysql/主从/index.html","ffc06deb0e105feb361451a43713709a"],["categories/nfs/index.html","d257a0b28c930e5f397ce5bb45937836"],["categories/nginx/index.html","80a83453c501222a73df42c3c9d90119"],["categories/nginx/问题总结/index.html","b36b65d1a0a7e6e1e3ad46be4c5a891a"],["categories/php/index.html","d3b1e988d6ce94a24d9ce85ce04da2b4"],["categories/php/问题总结/index.html","2472f43a2934d2863b4f926d9e6df260"],["categories/radius/index.html","8c4a2416f574d1d2acd4e53255b94ca4"],["categories/raid/index.html","383499d5e3a1b7c50b0e3674d541b8e8"],["categories/windows/index.html","7d05051616358c4336d0f7b0104500de"],["categories/博客/index.html","f39b80638dfd3c03d1fa101959577f0b"],["categories/博客/美化/index.html","9159e82d1c470fe68a3b2f4c91df2138"],["categories/存储/ceph/index.html","608d8975f0344004772eb9de23ec7111"],["categories/存储/index.html","e8bfd3a37719de4ef5249a9fa8241bee"],["categories/存储/nfs/index.html","e9241ab69a9b73942af3221d441c36c8"],["categories/技术文档/index.html","8763aa4a6626191023c06e8da7b49943"],["categories/技术文档/page/2/index.html","d31f6e688e26d281505ab7870c65fc5c"],["categories/有趣/index.html","cfd80e44636596580b1df257add08cc3"],["categories/有趣/二次元/index.html","c2d577b48cb7573a760b20a2a775d42d"],["categories/流量复制工具/gor/index.html","35199cfe7057fe4eb39e06d4f50f381b"],["categories/流量复制工具/index.html","6b2067e835a30a6477960a2c10a802ba"],["categories/网卡/index.html","ea94db7cdf534e669f726e0f06577e3f"],["categories/网址/index.html","a50f56b1dbe043f2fab04198017fea5e"],["categories/网址/大佬博客/index.html","3bc202a7b67d090adcc0ccc19e4d3fbf"],["categories/网址/收藏/index.html","3261ffd330436e093202e01e74b91cb5"],["css/main.css","d41d8cd98f00b204e9800998ecf8427e"],["css/mobile.css","9cdba0b7411a49fe8851a58b651b76d4"],["css/style.css","65d0f57ab033cbd012cebefe3c92d91f"],["font/Oswald-Regular.ttf","69f4403ef57d4268b2f4dffdf9e7cfe1"],["font/Source Sans Pro.woff","5097f81039d71344019a2ffbf6160f6c"],["font/SourceCodePro-Regular.ttf.woff","b6ba243267725a84615cfaba137a6f55"],["images/16/容器的原理-1.png","1c184a092af6b6829c49ee20e70d132a"],["images/27/img1.png","74279f54a523a47f82a95a04ccfc9eb4"],["images/27/img2.jpg","93a32e8f4e52a9ea2a28b72a4223c2a9"],["images/38/gc1.jpg","dc31455119def3534b8b78213e6dcd29"],["images/38/gc2.jpg","ef5563c2f902a9b8550ed006747c94f5"],["images/38/gc3.jpg","3bef257bda43708e5c6d00598e5a6ccf"],["images/38/gc4.jpg","df24a1184fff79f3513b73fc1f4a6938"],["images/38/gc5.jpg","3e0fd4156b9666c1488b49d332875416"],["images/42/01.png","2a7524daaed26030a260df4e3fb58197"],["images/42/02.png","9c6ea26880ea0a13e900835c3fc75d65"],["images/42/03.png","d25c88fa33688ffe4a39aa59797e9e5d"],["images/42/04.png","8816231bb00c27abc8c97fc86797d474"],["images/45/01.png","95bacc819ae17e7e307034050799f3fb"],["images/45/02.png","be5e8c526b05c276cb9a1507a1a42323"],["images/45/03.png","c090ec8f8b444e05087d92b717e3ea8a"],["images/51/img.jpg","a2f5989183a4451b86968567755127c9"],["images/51/img2.jpg","572e1ec28c81be6cf350eb07ce52dcf5"],["images/52/img-all.png","0a63c2085b097a61f51611c9f48edc02"],["images/52/img-all2.jpg","9439588475c4cf0b60cb5dd1e05e1d4f"],["images/52/img-fpm-1-9.png","64d3bc0dd7c3ac24c6aa8aacb953fb14"],["images/53/img1.jpg","945011815dcef30570766dadef1e80b2"],["images/53/img2.jpg","a613182827884dbc4013e3fab5c5cda8"],["images/53/img3.jpg","42fa19420f095cd0c8dbd7d752b83935"],["images/53/img4.jpg","1c97844a91851b91acbd94c1ef4229b2"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["images/avatar.jpg","5b007d28d8184757ae475eb62afd6202"],["images/blog6/rancher-pv.png","d2a7e4bbfad5f71e75c9d5459cf5a464"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/docker1.jpg","5c611dd864017adeff648bca93d53f41"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/jixie-title.jpg","3ebd10201e23ecf68aba4524c020db0d"],["images/k8s_3part.jpg","8c72197f0daf342bc8b87d908527d638"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["images/tcp三次握手图.png","32ddd8df35bd5762604327b25758370e"],["images/tcp四次挥手图.png","684b2b4a0286acadc32247d693dbd961"],["images/test1/test1.jpg","60b725f10c9c85c70d97880dfe8191b3"],["images/title1.jpg","fa2db043867c4c5654471e21ad36e5c0"],["images/title2.jpg","b6e57860ebc3fcdcf150a6a4cf3402ab"],["images/title3.jpg","f0b1554cfa4dd1193719dcfeb9e4de28"],["images/title4.jpg","6eb7bcbb846d1123e830488d75028df7"],["images/wechat.jpg","a9d6b6d5bc4c08de2dcb03653946168d"],["index.html","9cd07933c10d0ef321c408c98a573d5c"],["intro/404-bg.jpg","bb987c26e0a0f36f7a4350cfdfc6b4ca"],["intro/about-bg.jpg","5c2f59e45c2d19a12cfa4e3305380e9a"],["intro/index-bg.jpg","10f3e3cf901a4d033fc208efff20e9a4"],["intro/post-bg.jpg","87bd4714afa098591e0cba60aae86f10"],["js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["js/src/instantclick.js","865d92a4a07409b7fed739e6a108e9c4"],["js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["js/src/live2d.js","3359a94d733737dbdd290dd41f9cef0b"],["js/src/love.js","7bcfdb57debd43483174cf9e15ab37cc"],["js/src/love2.js","2b51ddac5207cba4153da31e9132414c"],["js/src/motion.js","706d085e6cfec6f3e92dedc590d68d68"],["js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["js/src/schemes/pisces.js","1bd23ed75238ebf11afe2aa6b1c3a25b"],["js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["js/src/utils.js","f06ffce70453ad3a4d9611fdde5ca6c3"],["lib/canvas-nest/canvas-nest.min.js","2361106788cc4ea719ed76f52b413e46"],["lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["lib/jquery.min.js","a09e13ee94d51c524b7e2a728c7d4039"],["lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["lib/webfontloader.min.js","b03e20d628025187c3ac981299387cc0"],["live2d-widget/README.html","9941b5173b7915eb6158e62f02cd9ea3"],["live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["live2d-widget/autoload.js","fc45c81e48138bde62e7e742cbbdabb9"],["live2d-widget/demo/demo1.html","82a14d37dbd83931644a4ad6ea1f9eb2"],["live2d-widget/demo/demo2.html","6babb045ef6905badc0dbc5e0d98cede"],["live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["live2d-widget/waifu.css","c4dae5924f2fb0b5ea6ef26aaab80db9"],["page/2/index.html","38b103fe069de173e69e56bdf92f80b4"],["page/3/index.html","2dca9a9934ae71ed10654f8e4dc35d9e"],["page/4/index.html","6287c5a37b5f1f0942f17bcdca440431"],["page/5/index.html","612f8e2e71367ac85945a604ea17da0b"],["page/6/index.html","40b485c920f1d3baa227b7595e00c951"],["scripts/main.js","daa7eca40f5b50fa75baf7d98f5390d7"],["scripts/search.js","366fbc102b7ccc5c9554bed0bb945f66"],["scripts/share.js","9ec0687984e4e409f1bcc935e6dd18f9"],["tags/awk/index.html","e86954eec4fb8945270fb961b61194e1"],["tags/ceph/index.html","42bd9f66819b2c56f17f23487c7ccd5f"],["tags/cephfs/index.html","6a4e97b7a2c4f4e0a99c14eb7bf168bb"],["tags/cloud-native/index.html","b31d491616431b5882115457f8d9b15e"],["tags/daloradius/index.html","bceea1e9cd6be0924eda432b9f4ad39e"],["tags/docker/index.html","da6142a7210ef759ccaf4aee6f8a428f"],["tags/elasticsearch5/index.html","b66517a2a13bd0ba55aa384ed59e886b"],["tags/elasticsearch7/index.html","bc103d6ee934c2eb57606e10d525b0f7"],["tags/elk/index.html","09ad5e62413fd3d22efbdae31d465046"],["tags/elk5/index.html","9982da021efdc2c78b9c69d100fca8e1"],["tags/elk7/index.html","f1f7afdce7c206064b92c5287f2b2178"],["tags/filebeat7/index.html","d37b10971f5a93fb569fe0dc0a5d6df3"],["tags/fluentd/index.html","f26d27dfc9e230d1eda5ec39ca02dcbc"],["tags/freeradius/index.html","f82432c31c0ebc0cd7cb3d8dac551872"],["tags/gitlab-runner/index.html","534adcca80080ee5e3e8a1be66b35063"],["tags/go/index.html","de5c658106b6eea38a154c04dd365741"],["tags/gor/index.html","6358f967237158dd977292f73685b95f"],["tags/hexo6/index.html","c7f616f2a4340b5f9ac4c2f4d761c047"],["tags/hexo美化/index.html","0acc176721209b626c417e49e4131784"],["tags/http流量复制工具/index.html","e628e933a0cb36db9f5698bb4d0719fb"],["tags/index.html","00e3c54a42027fc7db4f10a5d0ddcde7"],["tags/ip/index.html","c1ffdfeb1b5204da278dddded94f9ffc"],["tags/istio/index.html","4129c03737e657f7d433af68f751ffc2"],["tags/k3s/index.html","3f67d7dfebaf8910ec596a8e9a91985b"],["tags/k8s/index.html","d8b71738fd858ceedc86df3981f9ec9a"],["tags/k8s存储/index.html","75d7642b0c4bfbcba2efb6715e13b347"],["tags/kubectl/index.html","b869fa0f71196a7c0d3a75d361bbeb4b"],["tags/linux/index.html","cffc9296e930b6b1afd9db3906bbcbd2"],["tags/logstash/index.html","94726ac95eb3bf199fe67dd957654ab7"],["tags/mac/index.html","191cf26ea29c7794642f967c567d9ded"],["tags/markdown/index.html","7a694d237507f5d97e95390938b1aa54"],["tags/mysql/index.html","83194cf856bff3a161b471f39d04f1ed"],["tags/mysql5-7/index.html","7e635430a56501d71786f3160a871d50"],["tags/nfs/index.html","31bac9435a819a165a2b734f1179add0"],["tags/nginx/index.html","4cf2b3ebb3a42c5dd21e0e2ea9a09601"],["tags/php/index.html","8dedd106535963c62111a7da56d7a824"],["tags/php5/index.html","d7335750da2c19acf0259be8e3d29331"],["tags/php7/index.html","547b88be174705e1e7f49b076464d9e7"],["tags/promethues/index.html","84fa93ea38ae4cbcc849615fac20197e"],["tags/raid/index.html","b85814b032cf7a88f3619e771bd5d2ba"],["tags/shell/index.html","1f4d2f17c4fe7365e65ddd962b0966f2"],["tags/ssh/index.html","9d6307cccdf595b199ef63f50dee82aa"],["tags/storageclass/index.html","521a60bbbfc0314e32e427df62fd3756"],["tags/systemd/index.html","06cccef4d1b53323862620b6e9630b33"],["tags/windows/index.html","b080fb377206813895ff26fe2cfce492"],["tags/云原生/index.html","105a8b4403549ccc0c1079249f27e82c"],["tags/大佬博客/index.html","a3723b53cc64ce2faee3ab8ff6c0ae55"],["tags/收藏/index.html","a504c1115652b7039374a0ae3ead3040"],["tags/特效/index.html","953394ace88102405a33ec4a1c0c4cd5"],["tags/网址/index.html","8846b39c10e650b62678748f29d47ae5"]];
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







