/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/09/19/2-部署elk7-2-0/index.html","f3064dbab69f9c7640468ba3e6295b72"],["/2019/09/19/首次搭建hexo博客系统/index.html","e13764d4498813c19ca62f03b7aca57a"],["/2019/09/20/3-k8s遇到的一些问题统计总结/index.html","db65ee626a8647382a6e978c23ae1c96"],["/2019/09/24/4-hexo鼠标移动和鼠标点击特效/index.html","bd36edfe4991a55bb0c20248a6aae6fa"],["/2019/09/24/5-hexo添加看板娘/index.html","a89ba1feeec9b10b9d387330f106564b"],["/2019/09/26/6-ceph安装部署/index.html","f38c4770c968231a85ed183487014b93"],["/2019/09/26/7-k8s部署storageclass动态创建pv-nfs-rbd/index.html","383f3350d5a4cdede096db0c39401fc8"],["/2019/09/26/8-mysql5-7二进制部署/index.html","7e7db1ec8cd95f573172746c873bf4c0"],["/2019/09/26/9-linux遇到一些问题统计总结/index.html","f3fbae12db51999087d1c92d90b349f4"],["/2019/09/27/10-centos6安装nginx1-16-php7-2/index.html","4ea1e86262e5487cbb5c02b66246d270"],["/archives/index.html","bea668bb702d10fbb1d940e5f9bd8bc4"],["/categories/index.html","b64085f0158012c59350f5f40ab74d64"],["/categories/k8s/elk7/index.html","596a3b5b96b726636cf76b01dffcc35d"],["/categories/k8s/index.html","c9f7ffe809f1f8bd5885fa28b29052ee"],["/categories/k8s/storageclass/index.html","f7c273b5671ca1ccda72f7827ff4c39a"],["/categories/k8s/问题总结/index.html","2e5e1c9fbfdb2d6af6e7689cf42c7ba8"],["/categories/linux/index.html","149fe8e10380f825cc483ff95dd16784"],["/categories/linux/问题总结/index.html","dc237e63f1e3773fdcb4fd2c09a27fab"],["/categories/mysql/index.html","7c00503ba8c331fc0cb0b113df58638f"],["/categories/nginx/index.html","19822b0db2ac3578b7f6bd580f50ad9e"],["/categories/博客/index.html","579aa6b799fcb82b7868535b7c82f7aa"],["/categories/博客/美化/index.html","00f0b56dd23bd348e428f08e2d9cc5e0"],["/categories/存储/ceph/index.html","0c0348685865161a9a11743cdc2dd51f"],["/categories/存储/index.html","3cf279658a7c30cbad34a05dd4f28431"],["/categories/存储/nfs/index.html","4e8e5535560c7e08f7929f8aee9ba9d9"],["/categories/技术文档/index.html","206dc421595179e3a3f1f40abc7f5d9b"],["/categories/有趣/index.html","ab4cf9bb45f8d90a5c872f92335ff296"],["/categories/有趣/二次元/index.html","9974eac810e6237bd6f85acf5262b067"],["/css/main.css","ab9980fcebe5a3ae444f761792685c42"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/blog6/rancher-pv.png","d2a7e4bbfad5f71e75c9d5459cf5a464"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/docker1.jpg","5c611dd864017adeff648bca93d53f41"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/jixie-title.jpg","3ebd10201e23ecf68aba4524c020db0d"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/test1/test1.jpg","60b725f10c9c85c70d97880dfe8191b3"],["/images/title1.jpg","fa2db043867c4c5654471e21ad36e5c0"],["/images/title2.jpg","b6e57860ebc3fcdcf150a6a4cf3402ab"],["/images/title3.jpg","6eb7bcbb846d1123e830488d75028df7"],["/index.html","a6aa0cfd2daac9002a8d2628709c7b2e"],["/js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["/js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["/js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["/js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["/js/src/instantclick.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/live2d.js","3359a94d733737dbdd290dd41f9cef0b"],["/js/src/love.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/src/love2.js","2b51ddac5207cba4153da31e9132414c"],["/js/src/motion.js","706d085e6cfec6f3e92dedc590d68d68"],["/js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["/js/src/schemes/pisces.js","1bd23ed75238ebf11afe2aa6b1c3a25b"],["/js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["/js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["/js/src/utils.js","f06ffce70453ad3a4d9611fdde5ca6c3"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2d-widget/README.html","9941b5173b7915eb6158e62f02cd9ea3"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","fc45c81e48138bde62e7e742cbbdabb9"],["/live2d-widget/demo/demo1.html","f3a5c8536c8e915bb3e8180b4fbde425"],["/live2d-widget/demo/demo2.html","e1f2247124a3b0fc343ef3ef3bed8ad3"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["/live2d-widget/waifu.css","c4dae5924f2fb0b5ea6ef26aaab80db9"],["/public/abcd.html","4dc1b74dad98384068117816631f472b"],["/sw-register.js","53577a7a65b4e83af5ec21eda3df5ba4"],["/tags/ceph/index.html","135709a8f496ea7bc91d237c46c60d05"],["/tags/cephfs/index.html","f1700f048ce80e370656a6affb1515f8"],["/tags/elk/index.html","e766408fe1b4794816506a0aaaa2c439"],["/tags/elk7/index.html","3b62fa23f47c6f5b413132ad888b45f6"],["/tags/hexo6/index.html","7173eb8ddf6053842fae1c569facc8f7"],["/tags/hexo美化/index.html","23846d12e094638266700bb4b37e9adb"],["/tags/index.html","ebece9054014310a99b2b99b18cda797"],["/tags/k8s/index.html","b365706342ab883ee56a2d3b571b1bc4"],["/tags/k8s存储/index.html","33fea6e7ceac0d6de24d257ebaeef305"],["/tags/linux/index.html","f6a95c5f22104ff35e72312aefbc2d21"],["/tags/mysql/index.html","cd4eae878e89d10b99d9dc104c0c0c3e"],["/tags/mysql5-7/index.html","2e125ec799703115c7544e665b627b54"],["/tags/nfs/index.html","c970e85df369e16ea4fa7a9760bf460e"],["/tags/nginx/index.html","875ab608d6914abcdc43c45804da143c"],["/tags/php7/index.html","4c93bd452e55238586b9538c1e3b8964"],["/tags/storageclass/index.html","7fc7ac86d088ad4ffc30db12757c1d7d"],["/tags/特效/index.html","0d2a1820b2bd18f994596f2023ae11fc"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
