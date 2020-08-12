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

var precacheConfig = [["2019/09/19/2-部署elk7-2-0/index.html","c14a6aeaa296beb58c49e3760bcc743a"],["2019/09/19/首次搭建hexo博客系统/index.html","12434606c75d5c955e1d7fa5857a6ad7"],["2019/09/20/3-k8s遇到的一些问题统计总结/index.html","096d76100d17893d17ce77d3c1dd4cb7"],["2019/09/24/4-hexo鼠标移动和鼠标点击特效/index.html","0c89205b0973e629fdab1a90a2aa0b72"],["2019/09/24/5-hexo添加看板娘/index.html","dd20b60632d98b6a8782ed60ef8ad75b"],["2019/09/26/6-ceph安装部署/index.html","393225a0ab6fd4fbcc55348f9464f186"],["2019/09/26/7-k8s部署storageclass动态创建pv-nfs-rbd/index.html","6c2276ba42249255cee2909f608f4787"],["2019/09/26/8-mysql5-7二进制部署/index.html","abd3154bb1ba1fb3cc454ae848216539"],["2019/09/26/9-linux遇到一些问题统计总结/index.html","34b713809fa67f9058c06dc8b3ef28bd"],["2019/09/27/10-centos6安装nginx1-16-php7-2/index.html","03d2ac3315156e1fc51b11264ac5c8e9"],["2019/10/10/11-mysql简单记录/index.html","1be46fcef153e35d0e2eb0b7b5a13fba"],["2019/10/11/12-awk简单记录/index.html","4eb0ad239dd297abda395fcd2e7f5a4f"],["2019/10/12/13-云原生博客汇总/index.html","a59693576b464abba61c33d8fed47517"],["2019/10/15/14-mysql目录copy方式迁移/index.html","fb15e8453e8fab3fefab5b485b113aa6"],["2019/10/16/15-docker简介和使用/index.html","ad96fea4bd9ec610ed244171643038e0"],["2019/10/16/16-dockerfile介绍/index.html","700fec10517d18a0c30012798253a58e"],["2019/10/16/17-markdown一些写法记录/index.html","e970800d1dcbc7f632f1799193692218"],["2019/10/17/18-收藏链接/index.html","9136fd64e0453c4c945b185baba69656"],["2019/10/17/19-shell中gt和>的区别/index.html","36d46ec215af85ce8ecc151da5216cfc"],["2019/10/24/20-k8s搭建mysql5-7-24主从/index.html","8e76a63692736f00170b3329ec34a7f9"],["2019/10/28/21-流量复制工具gor/index.html","47cd1e02c2e71bb457ee7fc91e481883"],["2019/10/28/22-es集群磁盘扩容/index.html","ef1c2a3f333eb35354fbfb31a36d234a"],["2019/10/29/23-mysql5-5主与mysql5-7从部署配置/index.html","d8da1976ba2792f3ad4a76a60b3c3a31"],["2019/10/30/24-filebeat7收集mysql慢日志到es/index.html","ff5700d1542301699f85ff41bf86f31d"],["2019/11/01/25-linux一些脚本汇总/index.html","e5b8857cf1eff518f836c92f0a89affb"],["2019/11/08/26-logstash配置/index.html","cedc12b7aa615a0df355d7d5ff7b4bee"],["2019/11/21/27-k8s一条命令部署es5-2-0集群/index.html","9dfbdcc4e3e92fff6aaa4a5fd0c47f51"],["2019/11/25/28-k8s1-16使用旧yml部署配置问题/index.html","2ebed408f9f761f3117013015a6f97bf"],["2019/11/25/29-k3s集群部署项目报挂载nfs错误/index.html","cf5752457a5befbd4210da5c1f840a1b"],["2019/11/25/30-k3s集群部署项目报挂载nfs错误/index.html","ba0610c83fad3b4dae47a9370f8cdb31"],["2019/11/26/31-systemd一些命令/index.html","2f427b850fd8a2915a83ea1c76b37c13"],["2019/12/02/32-php错误502问题总结/index.html","c20a11da85cfadaf49e3e475fb3583a0"],["2019/12/03/29-k3s安装配置/index.html","43d1f3ac7e73932f16d00298d7e9b02c"],["2019/12/03/33-k3s1.16部署nginx+php5.2.17/index.html","73b61ddbb963a2dd7d14a72b154973b0"],["2019/12/05/34-k8s一些命令总结/index.html","2f6c6341616355b467e2a83eabf64e62"],["2020/02/27/35-raid1盘数据迁移/index.html","eec52a5120a19e2dbc689725105b2532"],["2020/02/27/36-centos单网卡配置多ip的几种方法/index.html","d43e6bed9be7a4a523e6929bd378150f"],["2020/03/10/37-mac一些常用命令/index.html","481e54f2913c343282d6c73bf8ed2cd7"],["2020/03/12/38-es集群节点出现overhead脱机的问题/index.html","806cd37474fb95a11be7752e4a8fd9f8"],["2020/03/18/39-记一次nginx的request-time-和upstream-response-time差值很大问题/index.html","ff971b9648195becf2104fbe77147902"],["2020/03/18/40-记一次跨域的nginx配置问题/index.html","a22231dfe580190689c4009d241aa612"],["2020/03/19/41-记一次es集群内存溢出的问题/index.html","494b3fbc67b57238c19b4416ba5c82de"],["2020/03/24/42-kubeadm安装高可用k8s集群/index.html","eaa70e3e71baeb82ff50027d841c410d"],["2020/03/31/43-k8s的yaml配置名词解释-模板/index.html","558b51301583836e2f31f2fa2cfc4e40"],["2020/04/09/44-k8s部署fluentd-kafka-logstash-es/index.html","fca98737c6e4bd21b0e9dca0e60dc806"],["2020/04/23/45-gitlab-ci与k8s结合/index.html","08bed30093e7336284f0f69e5a6e2ffd"],["2020/05/13/46-docker安装nginx第三方模块/index.html","584aa1b511c69899d9f8386a891b9ae2"],["2020/05/14/47-k8s安装promethues-alertmanager-grafana/index.html","ae7a4c47f6cfd5d2cc274bebb46021dc"],["2020/05/18/48-k8s升级-1-10-1-15/index.html","92171b6bb51b8638f7ce87d347c7f3d8"],["2020/05/27/49-go简单记录/index.html","797367d62c8b9fd85edf3a6330f9c780"],["2020/06/12/50-记一次windows安装OpenSSH问题/index.html","ecf6bf415c5e164d5f32f42b8cf78267"],["2020/07/27/51-k8s搭建radius/index.html","a302f8ead16e33ace6a42bf434f389e6"],["2020/08/04/52-istio测试nginx-php项目/index.html","014c5f8158cfcebb4987e55aef969989"],["2020/08/07/53-hexo部署到coding-net开启静态网站/index.html","431b444c2438738f50180504c635dda5"],["2020/08/12/54-go单元测试和性能测试/index.html","9df4f97b9cb97403cd43420d7c74fbc2"],["archives/2019/09/index.html","cd2d305464b47da6669b6464410ad437"],["archives/2019/10/index.html","42c63210b0a20e94a6c1d658f7f333ff"],["archives/2019/11/index.html","b240ced06b3eabff5ffecc8c120b69fd"],["archives/2019/12/index.html","be193592dcda7ce2eed5183f62262b01"],["archives/2019/index.html","8afaf55435a84a6812cecae5fa163001"],["archives/2019/page/2/index.html","49e783abf0cfe19490de338443afe34b"],["archives/2020/02/index.html","a1354c5e69cca313e9adfd81114f05b4"],["archives/2020/03/index.html","7887c41cbe511f5a6b44a86a8ee9ed57"],["archives/2020/04/index.html","6f817326b1c9e94f55fb3eb8d07cc4fb"],["archives/2020/05/index.html","465f46ea826ee07c0634a5ef4ffd1f89"],["archives/2020/06/index.html","8847e4d7be1048ea7b3f7649fc83eca5"],["archives/2020/07/index.html","69b9001b45ae9a50398dbdd94edda970"],["archives/2020/08/index.html","dec5056648defcf53a15e2450137a328"],["archives/2020/index.html","d0797119a47a94f252358f86887b48f3"],["archives/index.html","de767f4e883c6f9cb217f1aacc1efea0"],["archives/page/2/index.html","bb5311885c17b3e0fc2323efc20d6691"],["archives/page/3/index.html","1350196f917518459e3626e255b36c7b"],["assets/algolia_logo.svg","8e0e9838589ad42418fe5fa23fa7e9f1"],["assets/example_qr.png","851a661c0c87f5cf06e68dc5d603ffdb"],["assets/loading.svg","e213e506bd18e78aac4008b258ee195d"],["avatar/Misaka.jpg","5b007d28d8184757ae475eb62afd6202"],["baidu_verify_Og0HzH3bO9.html","e16826970bbd70a6666e7abc1667668f"],["baidu_verify_SIdT0vzXib.html","43496fe246613993371f4a9bc69f3a0d"],["categories/docker/Dockerfile/index.html","d638ffffb73f9fa9d2ab58619a39c921"],["categories/docker/index.html","ae22c58153730356a1e83389bf6e6c77"],["categories/elk/elasticsearch5/index.html","9f901381a9203437a3f2e46aca9ece26"],["categories/elk/elasticsearch7/index.html","95a8de0c27d7322acc7faab97ef8a5ab"],["categories/elk/index.html","1b622eff8068500abf07d32921181c07"],["categories/elk/logstash/index.html","3b09aa938246b222fc3e62100120d3d6"],["categories/elk7/filebeat7/index.html","1b7935e49b4412b0afa9e12efd8ab49f"],["categories/elk7/index.html","e6e7f9f873f4d438ee220f8a6bb1c15e"],["categories/fluentd/index.html","f637cfe0ed38c8493356b1e0cd16ef46"],["categories/gitlab-ci/index.html","5c72daf6a3a1a6be77acbc275db10810"],["categories/go/index.html","c04db867fc573a6506684ae6fb23b9f5"],["categories/index.html","7822d79cbafc4750f70d8382f356c257"],["categories/item2/index.html","0c9b8190900b9f52a87172134dca7ee7"],["categories/k3s/index.html","cc337c64d745945ff90877b84b295462"],["categories/k3s/lnmp/index.html","e8fdfabca6723b42c5f3a2aadc25f295"],["categories/k8s/elk5/index.html","c6e71f4f8ad0ece20c5c6b3c1a8cc2c3"],["categories/k8s/elk7/index.html","f3c4dd9cb1f15785801ac96c59cf8fcb"],["categories/k8s/index.html","27c99ea4b4c660181847b2ff3bd5d203"],["categories/k8s/kubectl/index.html","c334182c06521422e64a22f2ae7556d4"],["categories/k8s/mysql/index.html","b13b8974138f3fa00900f55e757238e0"],["categories/k8s/prometheus/index.html","8f25f74dee3f2be4e5ab46db428bb451"],["categories/k8s/storageclass/index.html","21588eb0a86645c948358e9c6c98c203"],["categories/k8s/问题总结/index.html","0a4944d95fbcc6611b435261cdbdaff5"],["categories/linux/awk/index.html","cd2c887a73951c83fd86594ab1a2c56a"],["categories/linux/index.html","60f29beecb0bfc486d7dc98be47d5687"],["categories/linux/shell/index.html","68c3ce1f6a0baa25db732d0ea0530310"],["categories/linux/systemd/index.html","32c0c52ef2a124609303bab0e151d892"],["categories/linux/问题总结/index.html","cb075b4f45ac7ed634a1bf5cd0fb8399"],["categories/mac/index.html","a81c0b8035bc4eda3cfaccc3cee6abc1"],["categories/markdown/index.html","385a4c5ba82d5f09481b57ce5473e28e"],["categories/mysql/index.html","bbd43957c66b505ab291be46825bc8eb"],["categories/mysql/主从/index.html","0838060be635e8b80751b2dae5bebce3"],["categories/nfs/index.html","d8c203bfe6d0de08f3fe9ccd6e6afa7a"],["categories/nginx/index.html","208e985cdab68a4b5015acd139bf3ae6"],["categories/nginx/问题总结/index.html","c23f9c9fc715c66997576fa9e84af2d9"],["categories/php/index.html","1cb27233902f3fac495ac183e2910293"],["categories/php/问题总结/index.html","d7665301578f617be68d071965f7d738"],["categories/radius/index.html","300a2217cf891a0533ff3e5c33a05334"],["categories/raid/index.html","4fa7e8b3550dfc2cfd886d4a7d8a3f03"],["categories/windows/index.html","9453deed4617115e7c1710aa1713f04e"],["categories/博客/index.html","243e744ec13675876bb5e18b5ca14e4c"],["categories/博客/美化/index.html","b28b3511b77846893491435c97790cdd"],["categories/存储/ceph/index.html","03d17749a4f0f5d4754314bc606d9cf3"],["categories/存储/index.html","b3e9314aa4fbc3baa957b200982c5c12"],["categories/存储/nfs/index.html","5daba42b8a6b8149ddf9d16a91991c6d"],["categories/技术文档/index.html","01621788570f4efe09a3acef25d72a9e"],["categories/技术文档/page/2/index.html","290accd7cfdc8a1d5cfc77ffe2ee8add"],["categories/有趣/index.html","59b4602c118ced3819abff1accc37df6"],["categories/有趣/二次元/index.html","91a486259e4571198a7cc15bd67e0fcb"],["categories/流量复制工具/gor/index.html","25ca58ebf38fddcc65cdcb9381604ce2"],["categories/流量复制工具/index.html","00c174ffc3f87ac4808064608966e98a"],["categories/网卡/index.html","2f249bab5bd8b1078c46f4659a2fadc5"],["categories/网址/index.html","718030a9bbf4e2de6cba133a35f7b4ed"],["categories/网址/大佬博客/index.html","e9bb90038348e85e895a6280290d61fb"],["categories/网址/收藏/index.html","a4bed599cb9c66149bc05f5b7394b06d"],["css/main.css","d41d8cd98f00b204e9800998ecf8427e"],["css/mobile.css","9cdba0b7411a49fe8851a58b651b76d4"],["css/style.css","65d0f57ab033cbd012cebefe3c92d91f"],["font/Oswald-Regular.ttf","69f4403ef57d4268b2f4dffdf9e7cfe1"],["font/Source Sans Pro.woff","5097f81039d71344019a2ffbf6160f6c"],["font/SourceCodePro-Regular.ttf.woff","b6ba243267725a84615cfaba137a6f55"],["images/16/容器的原理-1.png","1c184a092af6b6829c49ee20e70d132a"],["images/27/img1.png","74279f54a523a47f82a95a04ccfc9eb4"],["images/27/img2.jpg","93a32e8f4e52a9ea2a28b72a4223c2a9"],["images/38/gc1.jpg","dc31455119def3534b8b78213e6dcd29"],["images/38/gc2.jpg","ef5563c2f902a9b8550ed006747c94f5"],["images/38/gc3.jpg","3bef257bda43708e5c6d00598e5a6ccf"],["images/38/gc4.jpg","df24a1184fff79f3513b73fc1f4a6938"],["images/38/gc5.jpg","3e0fd4156b9666c1488b49d332875416"],["images/42/01.png","2a7524daaed26030a260df4e3fb58197"],["images/42/02.png","9c6ea26880ea0a13e900835c3fc75d65"],["images/42/03.png","d25c88fa33688ffe4a39aa59797e9e5d"],["images/42/04.png","8816231bb00c27abc8c97fc86797d474"],["images/45/01.png","95bacc819ae17e7e307034050799f3fb"],["images/45/02.png","be5e8c526b05c276cb9a1507a1a42323"],["images/45/03.png","c090ec8f8b444e05087d92b717e3ea8a"],["images/51/img.jpg","a2f5989183a4451b86968567755127c9"],["images/51/img2.jpg","572e1ec28c81be6cf350eb07ce52dcf5"],["images/52/img-all.png","0a63c2085b097a61f51611c9f48edc02"],["images/52/img-all2.jpg","9439588475c4cf0b60cb5dd1e05e1d4f"],["images/52/img-fpm-1-9.png","64d3bc0dd7c3ac24c6aa8aacb953fb14"],["images/53/img1.jpg","945011815dcef30570766dadef1e80b2"],["images/53/img2.jpg","a613182827884dbc4013e3fab5c5cda8"],["images/53/img3.jpg","42fa19420f095cd0c8dbd7d752b83935"],["images/53/img4.jpg","1c97844a91851b91acbd94c1ef4229b2"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["images/avatar.jpg","5b007d28d8184757ae475eb62afd6202"],["images/blog6/rancher-pv.png","d2a7e4bbfad5f71e75c9d5459cf5a464"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/docker1.jpg","5c611dd864017adeff648bca93d53f41"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/go1.gif","9b54b5b653edf8ad46925cb8bcb1b516"],["images/jixie-title.jpg","3ebd10201e23ecf68aba4524c020db0d"],["images/k8s_3part.jpg","8c72197f0daf342bc8b87d908527d638"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["images/tcp三次握手图.png","32ddd8df35bd5762604327b25758370e"],["images/tcp四次挥手图.png","684b2b4a0286acadc32247d693dbd961"],["images/test1/test1.jpg","60b725f10c9c85c70d97880dfe8191b3"],["images/title1.jpg","fa2db043867c4c5654471e21ad36e5c0"],["images/title2.jpg","b6e57860ebc3fcdcf150a6a4cf3402ab"],["images/title3.jpg","f0b1554cfa4dd1193719dcfeb9e4de28"],["images/title4.jpg","6eb7bcbb846d1123e830488d75028df7"],["images/wechat.jpg","a9d6b6d5bc4c08de2dcb03653946168d"],["index.html","6c0a12d9d1a19dd10d77b872f8afa2e5"],["intro/404-bg.jpg","bb987c26e0a0f36f7a4350cfdfc6b4ca"],["intro/about-bg.jpg","5c2f59e45c2d19a12cfa4e3305380e9a"],["intro/index-bg.jpg","10f3e3cf901a4d033fc208efff20e9a4"],["intro/post-bg.jpg","87bd4714afa098591e0cba60aae86f10"],["js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["js/src/instantclick.js","865d92a4a07409b7fed739e6a108e9c4"],["js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["js/src/live2d.js","3359a94d733737dbdd290dd41f9cef0b"],["js/src/love.js","7bcfdb57debd43483174cf9e15ab37cc"],["js/src/love2.js","2b51ddac5207cba4153da31e9132414c"],["js/src/motion.js","706d085e6cfec6f3e92dedc590d68d68"],["js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["js/src/schemes/pisces.js","1bd23ed75238ebf11afe2aa6b1c3a25b"],["js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["js/src/utils.js","f06ffce70453ad3a4d9611fdde5ca6c3"],["lib/canvas-nest/canvas-nest.min.js","2361106788cc4ea719ed76f52b413e46"],["lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["lib/jquery.min.js","a09e13ee94d51c524b7e2a728c7d4039"],["lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["lib/webfontloader.min.js","b03e20d628025187c3ac981299387cc0"],["live2d-widget/README.html","9941b5173b7915eb6158e62f02cd9ea3"],["live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["live2d-widget/autoload.js","fc45c81e48138bde62e7e742cbbdabb9"],["live2d-widget/demo/demo1.html","82a14d37dbd83931644a4ad6ea1f9eb2"],["live2d-widget/demo/demo2.html","6babb045ef6905badc0dbc5e0d98cede"],["live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["live2d-widget/waifu.css","c4dae5924f2fb0b5ea6ef26aaab80db9"],["page/2/index.html","bba36b926c3bb81951699dd4d41740f5"],["page/3/index.html","6989b208e00061ebe24da1f6594497e6"],["page/4/index.html","dd42982a8e6a03dcc27026934c5feee0"],["page/5/index.html","e7e77a335e3a67200105b1e6cedb8efc"],["page/6/index.html","f6aa2bb723b71d73517f8cbd319300d0"],["scripts/main.js","daa7eca40f5b50fa75baf7d98f5390d7"],["scripts/search.js","366fbc102b7ccc5c9554bed0bb945f66"],["scripts/share.js","9ec0687984e4e409f1bcc935e6dd18f9"],["tags/awk/index.html","8208dd0d3e8ed93b20c93159a58be36e"],["tags/ceph/index.html","42e340196b043e391f6837d399ea03ca"],["tags/cephfs/index.html","0f7be18662292d56a78856b21d8b1f51"],["tags/cloud-native/index.html","5e7aab88c199717f827871e74737a06d"],["tags/daloradius/index.html","5f44d8cdaea55216712bbe0dddae60d8"],["tags/docker/index.html","cccfffee784765a261dec89d1e527f91"],["tags/elasticsearch5/index.html","6bb07583606d408620b59e1cdab5d0f9"],["tags/elasticsearch7/index.html","0a6e99371344afc87ba1e53e63fb808a"],["tags/elk/index.html","7142b565ee378b5127d867d82f26c929"],["tags/elk5/index.html","0e5d70dbfdbeb897d223f2efe449cae5"],["tags/elk7/index.html","fff6e08857b9e1533efb365fd7c50a00"],["tags/filebeat7/index.html","df689b38c50d8ef6b50ede9c3ffed3de"],["tags/fluentd/index.html","152e69409bf628f63838ee64abcd2aef"],["tags/freeradius/index.html","1d9883f04b207485398f19f5b2b2d6f7"],["tags/gitlab-runner/index.html","f246208745481594aec3de5371a5d6e7"],["tags/go/index.html","d10e9c071ea86547cfe884a47d18d484"],["tags/gor/index.html","5af6ab376cdaccd48ce94959254b3a00"],["tags/hexo6/index.html","5d0611c35df1291d7dd11465d7c0d443"],["tags/hexo美化/index.html","0178f2b7944d20ff0078281c92ad101b"],["tags/http流量复制工具/index.html","5b97805c3db9ff71e3926194b47ea561"],["tags/index.html","f2215996d79fce4f220eb5a94f2e41d5"],["tags/ip/index.html","7951a2dbc6a271df007f88b8b43c379b"],["tags/istio/index.html","b6a54fde836624b68d8b192290f83ab9"],["tags/k3s/index.html","9886633ecd64ae3e044cabea13eac5fc"],["tags/k8s/index.html","480560fa310bdf76d336815b462cb60a"],["tags/k8s存储/index.html","fa97037172cf52a7445ef7bec5da3f7d"],["tags/kubectl/index.html","5ffd1d8def18495a35226b3d297c87b5"],["tags/linux/index.html","894dbae6b1f4480d2a14afdd22b85b03"],["tags/logstash/index.html","4e8a6fc84815bb11dbaf8199cc61fc8a"],["tags/mac/index.html","131f2e39a7dc93ecc7063b84d7df826e"],["tags/markdown/index.html","11a8a42de9512e2544b35d8182d5304a"],["tags/mysql/index.html","47420623d189ef6c741af066eb044165"],["tags/mysql5-7/index.html","2efb61c465fc565a75c102a4d1c4d578"],["tags/nfs/index.html","4a13ffedbf944a4c9b7ab39c94af3ce8"],["tags/nginx/index.html","b17d6448893b7df03f7b0e3911649bae"],["tags/php/index.html","e39c7000fb3524d0d2eb3fe9f5c398eb"],["tags/php5/index.html","5847142dae23eb2f86f131d556eb4000"],["tags/php7/index.html","f22dc67fc5bd61aa45a1666de947e035"],["tags/promethues/index.html","7ab532c8637d4de8c37b39c14f16590f"],["tags/raid/index.html","f73422b3c69d54a510444ff56eb221da"],["tags/shell/index.html","95588f371945908aa85c765ca654da42"],["tags/ssh/index.html","43c4f65b921d9a946845a60c020ddc1d"],["tags/storageclass/index.html","0dfa1e454da854dcf6770f9d4d54d808"],["tags/systemd/index.html","acc7a9a76ec58821d40d09fe727b5b1b"],["tags/windows/index.html","4e0d9a3656635fba46f209e8ad107792"],["tags/云原生/index.html","99cb8117cdb89ba7725df2cf46c312d8"],["tags/大佬博客/index.html","d0bebc862ea007001eb9db51aac55cec"],["tags/收藏/index.html","fd4ad9eec489f3fcb5295859677c1b04"],["tags/特效/index.html","ccd17e2728df2aad4eb81cec53b3705e"],["tags/网址/index.html","ca8f90da42089de75f9f834496444897"]];
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







