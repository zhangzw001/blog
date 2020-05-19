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

var precacheConfig = [["2019/09/19/2-部署elk7-2-0/index.html","e873d0aacea9de8571a1f89e17d96e9b"],["2019/09/19/首次搭建hexo博客系统/index.html","b8676715f0b481233486c3f6fa870ee1"],["2019/09/20/3-k8s遇到的一些问题统计总结/index.html","b1c4d26a2a6556df7b58f27fc5234e93"],["2019/09/24/4-hexo鼠标移动和鼠标点击特效/index.html","f9b5ec0b8df033b45b283adb2ee58690"],["2019/09/24/5-hexo添加看板娘/index.html","e670e75adb48d5c2f5eb6fa7f2378e7d"],["2019/09/26/6-ceph安装部署/index.html","36fda10d08b2938cc019ddc89a78f975"],["2019/09/26/7-k8s部署storageclass动态创建pv-nfs-rbd/index.html","9bb159f67b10fced0095aa07aa166982"],["2019/09/26/8-mysql5-7二进制部署/index.html","23ccab501da938eada9f619573113196"],["2019/09/26/9-linux遇到一些问题统计总结/index.html","0942b372a9b78171fc11e81f3bb4940f"],["2019/09/27/10-centos6安装nginx1-16-php7-2/index.html","612ada737a855812f0f27d003ec3a305"],["2019/10/10/11-mysql简单记录/index.html","d88df6fab6aab129f8482b44e2aa2e2d"],["2019/10/11/12-awk简单记录/index.html","cb048be4fbf7ced1d31490efab959a0f"],["2019/10/12/13-云原生博客汇总/index.html","56ef1902c1369d3773e8d0bf31596cda"],["2019/10/15/14-mysql目录copy方式迁移/index.html","ceafd6299e2b3820cae7cf02896b040b"],["2019/10/16/15-docker简介和使用/index.html","8525cb6ec34f131d6ca9942eefa038e7"],["2019/10/16/16-dockerfile介绍/index.html","423a868b8c7e58110da6dadeb3e9e1b1"],["2019/10/16/17-markdown一些写法记录/index.html","c355b8f9d86934f5dbb999fe46a2d695"],["2019/10/17/18-收藏链接/index.html","1a1840572c9c1b23c6781d539acdeeca"],["2019/10/17/19-shell中gt和>的区别/index.html","9315c792534fa5bf3a0964cc11b28b7c"],["2019/10/24/20-k8s搭建mysql5-7-24主从/index.html","b182653415706f869c8432775f88ee7b"],["2019/10/28/21-流量复制工具gor/index.html","9318070e23f8d2185b2cdf63dce0cba9"],["2019/10/28/22-es集群磁盘扩容/index.html","b7541f3d6b622ae50c338e8e79c1b58d"],["2019/10/29/23-mysql5-5主与mysql5-7从部署配置/index.html","482569fd36fc62e4fe8c554037c7e263"],["2019/10/30/24-filebeat7收集mysql慢日志到es/index.html","2fb318cfc2166566e42131ff818a4cc7"],["2019/11/01/25-linux一些脚本汇总/index.html","1e597de77c4b1750edb88d1e2a139064"],["2019/11/08/26-logstash配置/index.html","c1e8ac11929a27d48cd00979dd3f1a78"],["2019/11/21/27-k8s一条命令部署es5-2-0集群/index.html","92482aecf5f9c4014de579d766584ce8"],["2019/11/25/28-k8s1-16使用旧yml部署配置问题/index.html","ae29e433ebd13b52d761a6ed4dc790fa"],["2019/11/25/29-k3s集群部署项目报挂载nfs错误/index.html","9f7c1a0a6814cab877c2620a148e9aea"],["2019/11/25/30-k3s集群部署项目报挂载nfs错误/index.html","45046176a66c3e7a1cdd730a33ad8c4f"],["2019/11/26/31-systemd一些命令/index.html","b99c1fb4ff2743846043f49cd95d24d9"],["2019/12/02/32-php错误502问题总结/index.html","62945528eb2a8c7120fa20bf2211b00a"],["2019/12/03/29-k3s安装配置/index.html","2b3774db567c6ee3d7fd722d599405db"],["2019/12/03/33-k3s1.16部署nginx+php5.2.17/index.html","9ca3a8ffd316a9cf3919b420a149197c"],["2019/12/05/34-k8s一些命令总结/index.html","a17caf1dba416de6a4532ef3d0b99946"],["2020/02/27/35-raid1盘数据迁移/index.html","8629b5f24561343335d53c7099feebeb"],["2020/02/27/36-centos单网卡配置多ip的几种方法/index.html","2f533e84281a8d534d808546a29e9c8c"],["2020/03/10/37-mac一些常用命令/index.html","6ac4d51ccbc774b83886710cc521f215"],["2020/03/12/38-es集群节点出现overhead脱机的问题/index.html","c360ec4e80cd751b529dceeb332e4853"],["2020/03/18/39-记一次nginx的request-time-和upstream-response-time差值很大问题/index.html","f50d9efdb0e1cfab580c41788f6db138"],["2020/03/18/40-记一次跨域的nginx配置问题/index.html","3c9951c9a2e8cf80bb79d135edb66a3b"],["2020/03/19/41-记一次es集群内存溢出的问题/index.html","9c65795cd35eeff8bc509c49fcf6ca65"],["2020/03/24/42-kubeadm安装高可用k8s集群/index.html","096d9752976486ac86a7eac8f0658bb7"],["2020/03/31/43-k8s的yaml配置名词解释-模板/index.html","a5b35f2a6957e8657a4341e899c91a69"],["2020/04/09/44-k8s部署fluentd-kafka-logstash-es/index.html","fd5dbbe0c642d508f5fac553e212fc92"],["2020/04/23/45-gitlab-ci与k8s结合/index.html","094f3b1b03f97086074bd88420bed64a"],["2020/05/13/46-docker安装nginx第三方模块/index.html","d6aaa00c134b5e60fc4ae7ae8a7e238c"],["2020/05/14/47-k8s安装promethues-alertmanager-grafana/index.html","1632c49f1ef978db36e1a606ab1afa2e"],["2020/05/18/48-k8s升级-1-10-1-15/index.html","60ce9eb089a5a5a946d49afbc5f2495a"],["archives/2019/09/index.html","ae0db741d9dc188c47db795e9b6a9250"],["archives/2019/10/index.html","5e5ce0f587bee82943802dd3c654afa7"],["archives/2019/11/index.html","12ecc281e65159be8f8c1beb37759d4f"],["archives/2019/12/index.html","18601332b169c66fd4c02da5cb72c86a"],["archives/2019/index.html","a8e026e8bd92111ae9ba6188e5d7f169"],["archives/2019/page/2/index.html","7c04a2bcf857c00f5d0a3a9e9f848022"],["archives/2020/02/index.html","9bfc855c01ad4ac2b1a21482cfab95cc"],["archives/2020/03/index.html","baa97271c4ad2b7adc76162e91eb3bf3"],["archives/2020/04/index.html","844836ccc962f4bb3c893d2926e3d99d"],["archives/2020/05/index.html","42356b46fd4b611a14b3c0422f74ebda"],["archives/2020/index.html","c626aa2953431851c58f272480cfce47"],["archives/index.html","44c004ac50e10a3a51431177892ccf80"],["archives/page/2/index.html","acc5d12be470bf373bddea1d554de356"],["archives/page/3/index.html","900b64fb78e7b6187b6aa7b296dc91cd"],["categories/docker/Dockerfile/index.html","3537ea5db722adc7a745031e7510afb1"],["categories/docker/index.html","5ac29318101ea48d3b93fe51f5870864"],["categories/elk/elasticsearch5/index.html","e80affef3acc96eb9278442d4c6f823f"],["categories/elk/elasticsearch7/index.html","38d2fe5a867c46bad7bcd5f624e650c3"],["categories/elk/index.html","e7e714cfaac6682642e66d78399158d8"],["categories/elk/logstash/index.html","79c964465d580994899f66a3f065892e"],["categories/elk7/filebeat7/index.html","5f9c3c5921b742b203db5de4cb6e663f"],["categories/elk7/index.html","e9dd80be263edc01ae2b36d8da324707"],["categories/fluentd/index.html","92cb1c95cef128266f80e9c558a8e42d"],["categories/gitlab-ci/index.html","18a6a9f8c4403736a01773244d9c3a60"],["categories/index.html","ea3c720f4616fea283258a1bf115d488"],["categories/item2/index.html","9f31ed2ccbb8c1036154262ce351a1ad"],["categories/k3s/index.html","bd2bb5a9b894a65727ff6c43237a616a"],["categories/k3s/lnmp/index.html","a23ef7e5b9ce8cd8bf49935642dc7d97"],["categories/k8s/elk5/index.html","e8853eab1edb314eb4fc9a16e41e9163"],["categories/k8s/elk7/index.html","c3cd04b6ee6300748aef495ef47bb0c2"],["categories/k8s/index.html","9700db30588a0ea1a76aa9dbe359fa64"],["categories/k8s/kubectl/index.html","5df0e8a98ffb34b2240b1a45f33a6573"],["categories/k8s/mysql/index.html","acacb452cb4879b1a9c4cecd82332cd2"],["categories/k8s/prometheus/index.html","6bb7b146ed6e2c893a8a629b27bcf834"],["categories/k8s/storageclass/index.html","78cafc710bdd25d87cc66d13ab6d43e6"],["categories/k8s/问题总结/index.html","59fb30b3ee2513b241fe44cf94e522f5"],["categories/linux/awk/index.html","49890fed45b9ca9a027b89c6a29421e4"],["categories/linux/index.html","dfa75a26dee9e3590930fc1bc19f6cf0"],["categories/linux/shell/index.html","69e51eae0343e874d5ea0ed75ef81e81"],["categories/linux/systemd/index.html","40cb5f2a95e306703716ac2928902148"],["categories/linux/问题总结/index.html","c73d118a1a9e72e21c8e1cb8d2cf2b24"],["categories/mac/index.html","749d8d1bbe5df37cbb05f9e5c4453507"],["categories/markdown/index.html","101f00427c63d1791a30532a8c7fb5d4"],["categories/mysql/index.html","e719d6062e69c6f6dd02947f87049c0d"],["categories/mysql/主从/index.html","5a092322e65b197bb098702ead5ceaf5"],["categories/nfs/index.html","86c9aa4cfda561682d5e9fc3477db8c8"],["categories/nginx/index.html","847804cca220f04628af83a723cbb673"],["categories/nginx/问题总结/index.html","8211cba380529a3b719b999f705cc4fb"],["categories/php/index.html","d9ef460f51dffe886f296cd37ded5181"],["categories/php/问题总结/index.html","98b0e800350db14c82df2c8a8d4ef235"],["categories/raid/index.html","f9cfce1cd7790c0a7e238f4489fc99ac"],["categories/博客/index.html","eef823a64e1aecfce9d3ad386558e303"],["categories/博客/美化/index.html","db02babe8f2df347fedbc055fb113d05"],["categories/存储/ceph/index.html","de516a8622e3945ae281e12580b140ed"],["categories/存储/index.html","4193a9abb01893e4781e5eb8f5ca024c"],["categories/存储/nfs/index.html","9e115cbe7f257c37086e0f5d6da73d21"],["categories/技术文档/index.html","aeb993218d04a0f8c1aea18bde1b1b7a"],["categories/技术文档/page/2/index.html","7bf2dfc387e7a81d658f9929425a8af8"],["categories/有趣/index.html","5cec7bf2c1139db6ece9854212dfa5c0"],["categories/有趣/二次元/index.html","02edab1d936122df1d65d5b0dcbf2d43"],["categories/流量复制工具/gor/index.html","5583f82c7a59ee97c85ad1d8062fb46c"],["categories/流量复制工具/index.html","3f9c86876ab021ef6cad071e29026af7"],["categories/网卡/index.html","daf759e128d4278935dcbdefe7f22793"],["categories/网址/index.html","ec2b23c3c6fe1f0ed16e3a490ef95237"],["categories/网址/大佬博客/index.html","2e6a72f22d5c10d8569d6196e7e7cd85"],["categories/网址/收藏/index.html","cb239cbbb76f99e6eb65f35dd38c4b80"],["css/main.css","eb221bb1c1af6ac6e238411e307edba3"],["images/16/容器的原理-1.png","1c184a092af6b6829c49ee20e70d132a"],["images/27/img1.png","74279f54a523a47f82a95a04ccfc9eb4"],["images/27/img2.jpg","93a32e8f4e52a9ea2a28b72a4223c2a9"],["images/38/gc1.jpg","dc31455119def3534b8b78213e6dcd29"],["images/38/gc2.jpg","ef5563c2f902a9b8550ed006747c94f5"],["images/38/gc3.jpg","3bef257bda43708e5c6d00598e5a6ccf"],["images/38/gc4.jpg","df24a1184fff79f3513b73fc1f4a6938"],["images/38/gc5.jpg","3e0fd4156b9666c1488b49d332875416"],["images/42/01.png","2a7524daaed26030a260df4e3fb58197"],["images/42/02.png","9c6ea26880ea0a13e900835c3fc75d65"],["images/42/03.png","d25c88fa33688ffe4a39aa59797e9e5d"],["images/42/04.png","8816231bb00c27abc8c97fc86797d474"],["images/45/01.png","95bacc819ae17e7e307034050799f3fb"],["images/45/02.png","be5e8c526b05c276cb9a1507a1a42323"],["images/45/03.png","c090ec8f8b444e05087d92b717e3ea8a"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["images/blog6/rancher-pv.png","d2a7e4bbfad5f71e75c9d5459cf5a464"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/docker1.jpg","5c611dd864017adeff648bca93d53f41"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/jixie-title.jpg","3ebd10201e23ecf68aba4524c020db0d"],["images/k8s_3part.jpg","8c72197f0daf342bc8b87d908527d638"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["images/tcp三次握手图.png","32ddd8df35bd5762604327b25758370e"],["images/tcp四次挥手图.png","684b2b4a0286acadc32247d693dbd961"],["images/test1/test1.jpg","60b725f10c9c85c70d97880dfe8191b3"],["images/title1.jpg","fa2db043867c4c5654471e21ad36e5c0"],["images/title2.jpg","b6e57860ebc3fcdcf150a6a4cf3402ab"],["images/title3.jpg","f0b1554cfa4dd1193719dcfeb9e4de28"],["images/title4.jpg","6eb7bcbb846d1123e830488d75028df7"],["index.html","9a2623097bcfce4123e115aee87d7ed2"],["js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["js/src/instantclick.js","865d92a4a07409b7fed739e6a108e9c4"],["js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["js/src/live2d.js","3359a94d733737dbdd290dd41f9cef0b"],["js/src/love.js","7bcfdb57debd43483174cf9e15ab37cc"],["js/src/love2.js","2b51ddac5207cba4153da31e9132414c"],["js/src/motion.js","706d085e6cfec6f3e92dedc590d68d68"],["js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["js/src/schemes/pisces.js","1bd23ed75238ebf11afe2aa6b1c3a25b"],["js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["js/src/utils.js","f06ffce70453ad3a4d9611fdde5ca6c3"],["lib/canvas-nest/canvas-nest.min.js","2361106788cc4ea719ed76f52b413e46"],["lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["live2d-widget/README.html","9941b5173b7915eb6158e62f02cd9ea3"],["live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["live2d-widget/autoload.js","fc45c81e48138bde62e7e742cbbdabb9"],["live2d-widget/demo/demo1.html","82a14d37dbd83931644a4ad6ea1f9eb2"],["live2d-widget/demo/demo2.html","6babb045ef6905badc0dbc5e0d98cede"],["live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["live2d-widget/waifu.css","c4dae5924f2fb0b5ea6ef26aaab80db9"],["page/2/index.html","f20d3c950355e54a5579a12ea55ead71"],["page/3/index.html","aabe0245a0f1dce95eead8522cebfdc1"],["page/4/index.html","48588fb312a4bbc05d15b900acaa03ac"],["page/5/index.html","7f04f3da4bf253954980aba4ee50f6f7"],["tags/awk/index.html","954703f31527a2ba381ca8797c523570"],["tags/ceph/index.html","a4f43d8091f5dc16c8f65985e219835a"],["tags/cephfs/index.html","ee218a2eb9b38206e79802725d4dc454"],["tags/cloud-native/index.html","71b3b8cc9586574fa7ba1e9b15c26e3d"],["tags/docker/index.html","9b2184ad6795d3dada338f5951c3dd1e"],["tags/elasticsearch5/index.html","9bc5b49d354e0fa8930171bf88e788c6"],["tags/elasticsearch7/index.html","6119a6ec8351a241e276328d25dc30f4"],["tags/elk/index.html","988d5d9b2af9146a12a4fd3af33a9373"],["tags/elk5/index.html","84e3d59527af3e7394bbe85ff928a003"],["tags/elk7/index.html","b067b2d996ad78f786ac1a2efc7ec234"],["tags/filebeat7/index.html","f2f0b61ba6e47b77f7b3c57d50dddb29"],["tags/fluentd/index.html","d6d57699cb0705749627efb3d723cf22"],["tags/gitlab-runner/index.html","10dbb1bcbf93b1a78cb8e93b5a3ba036"],["tags/gor/index.html","21f9c98a8c14c0b9c88ff9cdc57b885f"],["tags/hexo6/index.html","c231f3e49f4c1dfca3489838d05b69e2"],["tags/hexo美化/index.html","43f0f279f56d51a90bd0673bbe513990"],["tags/http流量复制工具/index.html","67e9972fb20d19545122423b1c790781"],["tags/index.html","041922e59d22964486889ff634cca45f"],["tags/ip/index.html","bf3904a7d924ee2ffdf8896d72253cf2"],["tags/k3s/index.html","897a9c0d15469a842d5a671d2a00c126"],["tags/k8s/index.html","4848e0c9156eda3f95d28def182bc61b"],["tags/k8s存储/index.html","522b97feccdf41d70fde0d4567578e05"],["tags/kubectl/index.html","b016570da8ace83e5542662c030957ce"],["tags/linux/index.html","593c0c9e051f5c574652d529555c99ab"],["tags/logstash/index.html","92fd1c0d6ee49407c297c38cc8400392"],["tags/mac/index.html","922268163d9ff01776d66e191570728b"],["tags/markdown/index.html","948c3665894b1f8e45f374a97f96b9d6"],["tags/mysql/index.html","fa7e48c7a8abc758db1e3290a9cfa11d"],["tags/mysql5-7/index.html","07b5efadf3ff2272104fd67303b7d6a2"],["tags/nfs/index.html","e555d9713c68b6a1906e48b48238b2b6"],["tags/nginx/index.html","3b6d3f082bf47b1b326a5de8b44cef50"],["tags/php/index.html","21d7692bf214300320867ed983411f39"],["tags/php5/index.html","c45702754547bde06eec8730f1fb60a7"],["tags/php7/index.html","344a1f6cc40d5498dde62d2a10b22a18"],["tags/promethues/index.html","097e98e1d32fb88d6cbb08d49907e4b3"],["tags/raid/index.html","b6d8996c03fc81332c89d0c5e3d82b26"],["tags/shell/index.html","1bb88fc69b5f1e6c288c0750f2d896f5"],["tags/storageclass/index.html","abeebbe6a8a3cc55d04b2bec8b20f78c"],["tags/systemd/index.html","79dc417a774737cd07901a8e416e1c63"],["tags/云原生/index.html","507f1443483c40ab2fa6482d62661544"],["tags/大佬博客/index.html","ebf6314d9d5305a029402f4ef1b62e0e"],["tags/收藏/index.html","aac05a6acb949c6f72f30d999a4d2576"],["tags/特效/index.html","cf5359a087712f442a2da4392540537b"],["tags/网址/index.html","09fd16620105d337beb938bad3d66305"]];
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







