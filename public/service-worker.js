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

var precacheConfig = [["2019/09/19/2-部署elk7-2-0/index.html","abaacfa40726155c7f9dc9e5e7ccc404"],["2019/09/19/首次搭建hexo博客系统/index.html","100f7d0c3c854d00978ffdc83914b619"],["2019/09/20/3-k8s遇到的一些问题统计总结/index.html","db727f1743ad4f86b155d00ac83ca9db"],["2019/09/24/4-hexo鼠标移动和鼠标点击特效/index.html","e2d4fe68ed1c452af7d27629643cd475"],["2019/09/24/5-hexo添加看板娘/index.html","db5f50ee530d80fd8cfd08dd941ae8de"],["2019/09/26/6-ceph安装部署/index.html","eeebed6f39a0ba394d4bb2eda027fbba"],["2019/09/26/7-k8s部署storageclass动态创建pv-nfs-rbd/index.html","28430d1a1ff83704b7eb64a5f5d70bb7"],["2019/09/26/8-mysql5-7二进制部署/index.html","884f385cf5a0f6542028e2d2250b1c19"],["2019/09/26/9-linux遇到一些问题统计总结/index.html","f01dc3a844881e569c13fe52f0e9ff22"],["2019/09/27/10-centos6安装nginx1-16-php7-2/index.html","8029e7fb5de0944a45bae336bdd3a23e"],["2019/10/10/11-mysql简单记录/index.html","29379928d90509879890462d1440a31e"],["2019/10/11/12-awk简单记录/index.html","357cde40bdc8e2c4466383c022877d87"],["2019/10/12/13-云原生博客汇总/index.html","de90bb0c8dfcd31e6b2b2111dc39e085"],["2019/10/15/14-mysql目录copy方式迁移/index.html","9d0e778509fa2ebcee0979e900a58104"],["2019/10/16/15-docker简介和使用/index.html","b307732348a7e5fded4ba42e7abf837d"],["2019/10/16/16-dockerfile介绍/index.html","a8dc79379b301adae8e60907f4b3101e"],["2019/10/16/17-markdown一些写法记录/index.html","084b55216e16c408b4248343271a655e"],["2019/10/17/18-收藏链接/index.html","ca190a8c69d15cff5d7ab1a0c21ef66d"],["2019/10/17/19-shell中gt和>的区别/index.html","9f4d8fc13d004f5224dddd4812da4e11"],["2019/10/24/20-k8s搭建mysql5-7-24主从/index.html","6d53ca70b831cee3fb3c33f8d34f904c"],["2019/10/28/21-流量复制工具gor/index.html","86fe637ddb2d733034382d10747283ea"],["2019/10/28/22-es集群磁盘扩容/index.html","32e2621167255532bd9f88c1d2cc1212"],["2019/10/29/23-mysql5-5主与mysql5-7从部署配置/index.html","889880f048a8317f2dc78bab02a998e0"],["2019/10/30/24-filebeat7收集mysql慢日志到es/index.html","74ee85b58cfcf9a8fb2a81e4412e6ae7"],["2019/11/01/25-linux一些脚本汇总/index.html","60ba4f77c51ca54c82f19fae1e31de43"],["2019/11/08/26-logstash配置/index.html","8d593a543899df3e2948d268c0ce4275"],["2019/11/21/27-k8s一条命令部署es5-2-0集群/index.html","3c636c9440a3e7fc1331b7d0e6140932"],["2019/11/25/28-k8s1-16使用旧yml部署配置问题/index.html","e68ffb2e706de172fea59f8d950ce823"],["2019/11/25/29-k3s集群部署项目报挂载nfs错误/index.html","45c811d41a45666fcc800e4593963910"],["2019/11/25/30-k3s集群部署项目报挂载nfs错误/index.html","da180d6acdc82f47d86fe076e2393969"],["2019/11/26/31-systemd一些命令/index.html","7d03e28d56120b7db4c68282ed92d2cb"],["2019/12/02/32-php错误502问题总结/index.html","9f82b7af27670469dc946efb63acfdaa"],["2019/12/03/29-k3s安装配置/index.html","54f1ec560556aac0baa245374a0297cf"],["2019/12/03/33-k3s1.16部署nginx+php5.2.17/index.html","099542959380d39f766935346b2db4a0"],["2019/12/05/34-k8s一些命令总结/index.html","9ee66ada96a81a686c6969a072b2132b"],["2020/02/27/35-raid1盘数据迁移/index.html","9711b3905f166d2499871626c94b2588"],["2020/02/27/36-centos单网卡配置多ip的几种方法/index.html","5e15be1471e9c617ca04a4ae2d862e21"],["2020/03/10/37-mac一些常用命令/index.html","13c59bccc49243f3719ddbfe65f07e99"],["2020/03/12/38-es集群节点出现overhead脱机的问题/index.html","ebfe571acdbbc5f70fc1d8d35cd32a1a"],["2020/03/18/39-记一次nginx的request-time-和upstream-response-time差值很大问题/index.html","0b24e6bdf587a237f335e835efa35c83"],["2020/03/18/40-记一次跨域的nginx配置问题/index.html","9955909699e12fbb1167f7d6796ed211"],["2020/03/19/41-记一次es集群内存溢出的问题/index.html","2aa61914190642b21d74204eb8dc57c9"],["2020/03/24/42-kubeadm安装高可用k8s集群/index.html","506684f97a367712d4f4bc588f0207c0"],["2020/03/31/43-k8s的yaml配置名词解释-模板/index.html","cd9908c914ebb9a32e72d269199d1d5e"],["2020/04/09/44-k8s部署fluentd-kafka-logstash-es/index.html","60bd7f12e035b316dc08ef44ef4547ac"],["2020/04/23/45-gitlab-ci与k8s结合/index.html","ae182d9ea6dfc429f12dd157157577f8"],["2020/05/13/46-docker安装nginx第三方模块/index.html","973aacda8b323f0343edfab1f79e4ad3"],["2020/05/14/47-k8s安装promethues-alertmanager-grafana/index.html","6cc06310395e6d9697470863e1457c0b"],["2020/05/18/48-k8s升级-1-10-1-15/index.html","2464fe832f42af61e8fb4a208f60987d"],["2020/05/27/49-go简单记录/index.html","7e3ab37d98f270dd06b84056a1650cd4"],["2020/06/12/50-记一次windows安装OpenSSH问题/index.html","8c054e01219886bc2beab72497c4ceed"],["2020/07/27/51-k8s搭建radius/index.html","b8c9d4f041aa482f4b2fee60da97055c"],["2020/08/04/52-istio测试nginx-php项目/index.html","407fa5e53ffd37fdccbb765c5003cce0"],["2020/08/07/53-hexo部署到coding-net开启静态网站/index.html","c7057f1c5d313f8cf31fdef61769af4e"],["archives/2019/09/index.html","3ecc3734cc29d24df1e96aa251e4babe"],["archives/2019/10/index.html","100bb02853b9651f1f953d12b508abbb"],["archives/2019/11/index.html","e04f6c66c6f3fc0deaac6f49e2a816ba"],["archives/2019/12/index.html","84721b2d8b6de7803bf1ef4b3f01dc22"],["archives/2019/index.html","57b3b30c07680911eba1194256bf4e52"],["archives/2019/page/2/index.html","efa0a058ccb5c36b93035e30e2fc1a47"],["archives/2020/02/index.html","bb406bb31dc9a66c6254c6516d1c5dc0"],["archives/2020/03/index.html","19dab59150768de870b38036afbc5bb5"],["archives/2020/04/index.html","a57be70c70d248676d92f70bde0b3fbb"],["archives/2020/05/index.html","f28f24b4ea55c8a996fc41e0ecf46c39"],["archives/2020/06/index.html","ab0f3718669784b146a3be193c9d8ee7"],["archives/2020/07/index.html","b518de242e129ba77b5de47e4e2d3ac3"],["archives/2020/08/index.html","c5f119c68288030b37e24a4fde9daaba"],["archives/2020/index.html","cc1ff6a39d61e5ec3dbb356c26aa1d67"],["archives/index.html","9ac7052b0df0258cbe55dcfd2d9fcdbf"],["archives/page/2/index.html","e3bd66bbf741a5af83eeecfe08bfe7a6"],["archives/page/3/index.html","1d67b39a2ad9acaee368d6726bf9b23c"],["assets/algolia_logo.svg","8e0e9838589ad42418fe5fa23fa7e9f1"],["assets/example_qr.png","851a661c0c87f5cf06e68dc5d603ffdb"],["assets/loading.svg","e213e506bd18e78aac4008b258ee195d"],["avatar/Misaka.jpg","1f4eaa2515eeaab36d2acd2af5d29262"],["baidu_verify_Og0HzH3bO9.html","f09d0300a8945f7cbc05c164735c794c"],["baidu_verify_SIdT0vzXib.html","d1ade391362c55d0da4537a24aba06f7"],["categories/docker/Dockerfile/index.html","c28d17851c98a34f4bb1f443956de6f9"],["categories/docker/index.html","6f3fa5bd267d63e6da4072de773d28b8"],["categories/elk/elasticsearch5/index.html","b7bccd33294e9e2ced83858ab907ddaf"],["categories/elk/elasticsearch7/index.html","c3a89c00f3fb7e0954990c41842ebdcd"],["categories/elk/index.html","6693a4b1bd332a4a03b71c5b260fc19c"],["categories/elk/logstash/index.html","5f72b5699ed1adca1ea449657f74167b"],["categories/elk7/filebeat7/index.html","fd03e360ed9b89c2a16e23ae325b8f3f"],["categories/elk7/index.html","c1649ca54f8ceffca8bd0a62cb921371"],["categories/fluentd/index.html","65cf3ae1ae575786992f994edb871862"],["categories/gitlab-ci/index.html","9215d5cca54c061e4a971d89a5e2672a"],["categories/go/index.html","7751ca78357d2c3c345ebb8973fd44c8"],["categories/index.html","421803261276a18bbd796ff1d2c11b7e"],["categories/item2/index.html","f7f9132d1eb18eaa31e0551c0acb75f6"],["categories/k3s/index.html","f61529cb43d447bb94f24f048368c142"],["categories/k3s/lnmp/index.html","57779379567b2748c3dac0d6ed8ee6e7"],["categories/k8s/elk5/index.html","a843d3567485e7bf19dad40a9d61c246"],["categories/k8s/elk7/index.html","5371ff882340b48ee1607c14a7e6f04f"],["categories/k8s/index.html","967f3961b72aaa72d68953a63710645f"],["categories/k8s/kubectl/index.html","f485d0f108b5dc4ee5c25bf411322755"],["categories/k8s/mysql/index.html","dacfed89541d54081d6f5e3c8ae2a38f"],["categories/k8s/prometheus/index.html","b46b3a95902e2dcce4d52a6d7eb0d35a"],["categories/k8s/storageclass/index.html","e886196c0055640cae953ed0cbc608da"],["categories/k8s/问题总结/index.html","e164568882b4aca9364431341c0af9de"],["categories/linux/awk/index.html","aba16ac9eb4945b0a1bf69e15042fe71"],["categories/linux/index.html","2d6e5951411edbfad40c8cbccdda2802"],["categories/linux/shell/index.html","a422996bdff92e3f304c83fa80601de2"],["categories/linux/systemd/index.html","b6136780f578e75c78648c429499946e"],["categories/linux/问题总结/index.html","bf31f3f42140c30e6d02823fbdfce342"],["categories/mac/index.html","55ca4a4c6f1bb4196ba298802c507bde"],["categories/markdown/index.html","82c367de83f97fb825e30fa049af5123"],["categories/mysql/index.html","74d9ecb8fe88bd7d0e235103b8ed68c5"],["categories/mysql/主从/index.html","c29e75db67e96c8fdd41415e41722a70"],["categories/nfs/index.html","c966d2006bb5fad183ee095de53666b1"],["categories/nginx/index.html","06b164a87d3b126026347e5b378278a6"],["categories/nginx/问题总结/index.html","0c211db9f6fe418278d7c9d780fd9c3a"],["categories/php/index.html","18a9a2dab19158603fbd16c3f4072771"],["categories/php/问题总结/index.html","000d0ad5f7acc453ddbd18089bbe2a92"],["categories/radius/index.html","078fdf080ed36c2e5e731c9ff08d86e0"],["categories/raid/index.html","7ba71e609035cc60496e92d7c6b109fe"],["categories/windows/index.html","15d95618a7702692bb24f08f690f0e6d"],["categories/博客/index.html","066027f0c7f01f69cdd2e9003764e081"],["categories/博客/美化/index.html","e6930bc6f018795ab6c15d727fb225a4"],["categories/存储/ceph/index.html","19a81d2c9c9b96178eb59c03288eef41"],["categories/存储/index.html","7f80cf0df775d49111061a9b351376bf"],["categories/存储/nfs/index.html","8c39d19c65d9a245bb481fb4cabbebef"],["categories/技术文档/index.html","7c00854f8800a3e3b5e9d4ea649339c5"],["categories/技术文档/page/2/index.html","0d2fb80cf4c030e63d570fdac9e01011"],["categories/有趣/index.html","b833cc80c7eabb62c0c1699e45b3672a"],["categories/有趣/二次元/index.html","283179acd5d8732517030a2be813617c"],["categories/流量复制工具/gor/index.html","273e38b29f03ed1d441d86703e12b903"],["categories/流量复制工具/index.html","18d0578c57e460bdc17114b2d090affe"],["categories/网卡/index.html","e2bcc8b64514e6eb4bc43a00e4d3289f"],["categories/网址/index.html","760dacc97b75787585200996fea7d837"],["categories/网址/大佬博客/index.html","d819b6383f704e27ae08742d5474b6c7"],["categories/网址/收藏/index.html","fe40a125f18017b9c7654a655e636c5c"],["css/main.css","d41d8cd98f00b204e9800998ecf8427e"],["css/mobile.css","9cdba0b7411a49fe8851a58b651b76d4"],["css/style.css","65d0f57ab033cbd012cebefe3c92d91f"],["font/Oswald-Regular.ttf","69f4403ef57d4268b2f4dffdf9e7cfe1"],["font/Source Sans Pro.woff","5097f81039d71344019a2ffbf6160f6c"],["font/SourceCodePro-Regular.ttf.woff","b6ba243267725a84615cfaba137a6f55"],["images/16/容器的原理-1.png","1c184a092af6b6829c49ee20e70d132a"],["images/27/img1.png","74279f54a523a47f82a95a04ccfc9eb4"],["images/27/img2.jpg","93a32e8f4e52a9ea2a28b72a4223c2a9"],["images/38/gc1.jpg","dc31455119def3534b8b78213e6dcd29"],["images/38/gc2.jpg","ef5563c2f902a9b8550ed006747c94f5"],["images/38/gc3.jpg","3bef257bda43708e5c6d00598e5a6ccf"],["images/38/gc4.jpg","df24a1184fff79f3513b73fc1f4a6938"],["images/38/gc5.jpg","3e0fd4156b9666c1488b49d332875416"],["images/42/01.png","2a7524daaed26030a260df4e3fb58197"],["images/42/02.png","9c6ea26880ea0a13e900835c3fc75d65"],["images/42/03.png","d25c88fa33688ffe4a39aa59797e9e5d"],["images/42/04.png","8816231bb00c27abc8c97fc86797d474"],["images/45/01.png","95bacc819ae17e7e307034050799f3fb"],["images/45/02.png","be5e8c526b05c276cb9a1507a1a42323"],["images/45/03.png","c090ec8f8b444e05087d92b717e3ea8a"],["images/51/img.jpg","a2f5989183a4451b86968567755127c9"],["images/51/img2.jpg","572e1ec28c81be6cf350eb07ce52dcf5"],["images/52/img-all.png","0a63c2085b097a61f51611c9f48edc02"],["images/52/img-all2.jpg","9439588475c4cf0b60cb5dd1e05e1d4f"],["images/52/img-fpm-1-9.png","64d3bc0dd7c3ac24c6aa8aacb953fb14"],["images/53/img1.jpg","945011815dcef30570766dadef1e80b2"],["images/53/img2.jpg","a613182827884dbc4013e3fab5c5cda8"],["images/53/img3.jpg","42fa19420f095cd0c8dbd7d752b83935"],["images/53/img4.jpg","1c97844a91851b91acbd94c1ef4229b2"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["images/avatar.jpg","5b007d28d8184757ae475eb62afd6202"],["images/blog6/rancher-pv.png","d2a7e4bbfad5f71e75c9d5459cf5a464"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/docker1.jpg","5c611dd864017adeff648bca93d53f41"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/go1.gif","6e961a51dd6b4ef6518b1190631589cf"],["images/jixie-title.jpg","3ebd10201e23ecf68aba4524c020db0d"],["images/k8s_3part.jpg","8c72197f0daf342bc8b87d908527d638"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["images/tcp三次握手图.png","32ddd8df35bd5762604327b25758370e"],["images/tcp四次挥手图.png","684b2b4a0286acadc32247d693dbd961"],["images/test1/test1.jpg","60b725f10c9c85c70d97880dfe8191b3"],["images/title1.jpg","fa2db043867c4c5654471e21ad36e5c0"],["images/title2.jpg","b6e57860ebc3fcdcf150a6a4cf3402ab"],["images/title3.jpg","f0b1554cfa4dd1193719dcfeb9e4de28"],["images/title4.jpg","6eb7bcbb846d1123e830488d75028df7"],["images/wechat.jpg","a9d6b6d5bc4c08de2dcb03653946168d"],["index.html","7432b8ec4ad002740b69e31cebbf2da1"],["intro/404-bg.jpg","bb987c26e0a0f36f7a4350cfdfc6b4ca"],["intro/about-bg.jpg","5c2f59e45c2d19a12cfa4e3305380e9a"],["intro/index-bg.jpg","10f3e3cf901a4d033fc208efff20e9a4"],["intro/post-bg.jpg","87bd4714afa098591e0cba60aae86f10"],["js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["js/src/instantclick.js","865d92a4a07409b7fed739e6a108e9c4"],["js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["js/src/live2d.js","3359a94d733737dbdd290dd41f9cef0b"],["js/src/love.js","7bcfdb57debd43483174cf9e15ab37cc"],["js/src/love2.js","2b51ddac5207cba4153da31e9132414c"],["js/src/motion.js","706d085e6cfec6f3e92dedc590d68d68"],["js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["js/src/schemes/pisces.js","1bd23ed75238ebf11afe2aa6b1c3a25b"],["js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["js/src/utils.js","f06ffce70453ad3a4d9611fdde5ca6c3"],["lib/canvas-nest/canvas-nest.min.js","2361106788cc4ea719ed76f52b413e46"],["lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["lib/jquery.min.js","a09e13ee94d51c524b7e2a728c7d4039"],["lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["lib/webfontloader.min.js","b03e20d628025187c3ac981299387cc0"],["live2d-widget/README.html","9941b5173b7915eb6158e62f02cd9ea3"],["live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["live2d-widget/autoload.js","fc45c81e48138bde62e7e742cbbdabb9"],["live2d-widget/demo/demo1.html","82a14d37dbd83931644a4ad6ea1f9eb2"],["live2d-widget/demo/demo2.html","6babb045ef6905badc0dbc5e0d98cede"],["live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["live2d-widget/waifu.css","c4dae5924f2fb0b5ea6ef26aaab80db9"],["page/2/index.html","44c703865b0fa1dd7cc28232da4da402"],["page/3/index.html","3520424261d82ba5e8edb80db2b57340"],["page/4/index.html","ad080ca6e7be44cf18d2b6a91ca6f915"],["page/5/index.html","b884f712b84ff7903d304a7d091fa809"],["page/6/index.html","871867234d1f8418271409c1d4de625d"],["scripts/main.js","daa7eca40f5b50fa75baf7d98f5390d7"],["scripts/search.js","366fbc102b7ccc5c9554bed0bb945f66"],["scripts/share.js","9ec0687984e4e409f1bcc935e6dd18f9"],["tags/awk/index.html","ace75353bfbed032e1209cc39ac993f5"],["tags/ceph/index.html","a3b57fc729122dbaa1d1a43c63c9fb71"],["tags/cephfs/index.html","f9bfdf1cece9babf747bbe01a66b855a"],["tags/cloud-native/index.html","fd43a07ad3c732101dfb10838ec0d9be"],["tags/daloradius/index.html","d7af53406a28ecd1ba564037ebd05756"],["tags/docker/index.html","c3e8f49372c21947ab017c10ca29d366"],["tags/elasticsearch5/index.html","2ad47a6d5b82f80b524a879c4422a9db"],["tags/elasticsearch7/index.html","ea3be2b024c68326b76ca69d4fe9eac8"],["tags/elk/index.html","30f778a2a39727703635c9599817a754"],["tags/elk5/index.html","b343251fe85f4270f73987f8cce97d7a"],["tags/elk7/index.html","aa3942aa0d05ed259b78a5496c70e72f"],["tags/filebeat7/index.html","47dcaf9186789b785d0b7087969d7056"],["tags/fluentd/index.html","68f937acb20febd44d997d100acb16c7"],["tags/freeradius/index.html","de3b9b61cd44704a5989d3ed49b6ec1f"],["tags/gitlab-runner/index.html","2f59c7676b67de22c143c32fdded6ae9"],["tags/go/index.html","6d028764779cfd11fe61785900026af7"],["tags/gor/index.html","5e1a2d02825be8c53f4a6237846f70b8"],["tags/hexo6/index.html","86e0dd1e401badf07badbf68b4439bdb"],["tags/hexo美化/index.html","2b2a324f9e2369292d2b122af808908e"],["tags/http流量复制工具/index.html","5a8cda0eebcea20da4506992d791c2f3"],["tags/index.html","2540bdda59fec883e20c43f50c48f7ae"],["tags/ip/index.html","54d108df02aed833ab2df961ce7dd6d8"],["tags/istio/index.html","cd04bcd28eb8b1674c2f6089bf267295"],["tags/k3s/index.html","0194d4c52d2383f44d912cd49e9fca79"],["tags/k8s/index.html","fa4991bd9dd38d3f50973a6294c31079"],["tags/k8s存储/index.html","d43f1243c5741464bd91799aff63741c"],["tags/kubectl/index.html","baa683e1c154abcccec0b1ae2d12ff76"],["tags/linux/index.html","5e546f5a4db2085701ae47aacd3b14cc"],["tags/logstash/index.html","abb762a4a1dec7236d36547945bf9e94"],["tags/mac/index.html","49310a5d837b601a07d00a9e8cf041a7"],["tags/markdown/index.html","86cff9c650248d94b3225961b6a67136"],["tags/mysql/index.html","9fe86d00e801cfa84571d259fe7aacc0"],["tags/mysql5-7/index.html","3f1ce62711551d1b8ae287ef78ac6c12"],["tags/nfs/index.html","99bfdfdc96b8730ec6d9e1549ae8d807"],["tags/nginx/index.html","e203e04548044d229620083fffd3f345"],["tags/php/index.html","08dd7347e9b5feb7df9e72d4a966b546"],["tags/php5/index.html","eeda460af1edf84b3c6effc5e912cff7"],["tags/php7/index.html","9c2263f39e2d68e0d554b84c25cec79e"],["tags/promethues/index.html","bb245d422f9499a4600016ea53f26ac5"],["tags/raid/index.html","d893d63c9eefdb6cb16fc7665407f8f9"],["tags/shell/index.html","6dfbc71135d60a300e005efd723f1d9c"],["tags/ssh/index.html","a020fcaee96b2c80c001f22d279c1c29"],["tags/storageclass/index.html","648fb45dd3c1276c55d61dc49437a3db"],["tags/systemd/index.html","988df8aad25554b0bbddfeceb8386cb6"],["tags/windows/index.html","5e4895cca7f2df0643408c4baaef6242"],["tags/云原生/index.html","f5682b98e5faa0417f5275efca224adc"],["tags/大佬博客/index.html","39d00e7706233cd14f2c50940701763d"],["tags/收藏/index.html","02c92ab107686519eadb16807de941c7"],["tags/特效/index.html","a2a2c5b5c0bcb4e8d3409c9d1ba1cc0d"],["tags/网址/index.html","3c7d2ef2db3a39f783d27003dd28b7cd"]];
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







