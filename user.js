// import { c as ze } from "./_commonjsHelpers-Cpj98o6Y.js";
var pe = {
    exports: {}
};
(function (e, i) {
    (function (t, c) {
        var b = "1.0.40"
            , l = ""
            , d = "?"
            , m = "function"
            , S = "undefined"
            , T = "object"
            , h = "string"
            , C = "major"
            , o = "model"
            , a = "name"
            , n = "type"
            , r = "vendor"
            , s = "version"
            , P = "architecture"
            , N = "console"
            , f = "mobile"
            , g = "tablet"
            , E = "smarttv"
            , M = "wearable"
            , Z = "embedded"
            , J = 500
            , z = "Amazon"
            , I = "Apple"
            , te = "ASUS"
            , ne = "BlackBerry"
            , G = "Browser"
            , V = "Chrome"
            , ge = "Edge"
            , O = "Firefox"
            , F = "Google"
            , oe = "Huawei"
            , Q = "LG"
            , $ = "Microsoft"
            , re = "Motorola"
            , W = "Opera"
            , X = "Samsung"
            , ae = "Sharp"
            , q = "Sony"
            , D = "Xiaomi"
            , ee = "Zebra"
            , se = "Facebook"
            , ce = "Chromium OS"
            , le = "Mac OS"
            , de = " Browser"
            , be = function (p, v) {
                var w = {};
                for (var y in p)
                    v[y] && v[y].length % 2 === 0 ? w[y] = v[y].concat(p[y]) : w[y] = p[y];
                return w
            }
            , j = function (p) {
                for (var v = {}, w = 0; w < p.length; w++)
                    v[p[w].toUpperCase()] = p[w];
                return v
            }
            , ue = function (p, v) {
                return typeof p === h ? U(v).indexOf(U(p)) !== -1 : !1
            }
            , U = function (p) {
                return p.toLowerCase()
            }
            , me = function (p) {
                return typeof p === h ? p.replace(/[^\d\.]/g, l).split(".")[0] : c
            }
            , k = function (p, v) {
                if (typeof p === h)
                    return p = p.replace(/^\s\s*/, l),
                        typeof v === S ? p : p.substring(0, J)
            }
            , K = function (p, v) {
                for (var w = 0, y, _, L, x, u, R; w < v.length && !u;) {
                    var he = v[w]
                        , Ce = v[w + 1];
                    for (y = _ = 0; y < he.length && !u && he[y];)
                        if (u = he[y++].exec(p),
                            u)
                            for (L = 0; L < Ce.length; L++)
                                R = u[++_],
                                    x = Ce[L],
                                    typeof x === T && x.length > 0 ? x.length === 2 ? typeof x[1] == m ? this[x[0]] = x[1].call(this, R) : this[x[0]] = x[1] : x.length === 3 ? typeof x[1] === m && !(x[1].exec && x[1].test) ? this[x[0]] = R ? x[1].call(this, R, x[2]) : c : this[x[0]] = R ? R.replace(x[1], x[2]) : c : x.length === 4 && (this[x[0]] = R ? x[3].call(this, R.replace(x[1], x[2])) : c) : this[x] = R || c;
                    w += 2
                }
            }
            , fe = function (p, v) {
                for (var w in v)
                    if (typeof v[w] === T && v[w].length > 0) {
                        for (var y = 0; y < v[w].length; y++)
                            if (ue(v[w][y], p))
                                return w === d ? c : w
                    } else if (ue(v[w], p))
                        return w === d ? c : w;
                return v.hasOwnProperty("*") ? v["*"] : p
            }
            , He = {
                "1.0": "/8",
                "1.2": "/1",
                "1.3": "/3",
                "2.0": "/412",
                "2.0.2": "/416",
                "2.0.3": "/417",
                "2.0.4": "/419",
                "?": "/"
            }
            , Se = {
                ME: "4.90",
                "NT 3.11": "NT3.51",
                "NT 4.0": "NT4.0",
                2e3: "NT 5.0",
                XP: ["NT 5.1", "NT 5.2"],
                Vista: "NT 6.0",
                7: "NT 6.1",
                8: "NT 6.2",
                "8.1": "NT 6.3",
                10: ["NT 6.4", "NT 10.0"],
                RT: "ARM"
            }
            , ye = {
                browser: [[/\b(?:crmo|crios)\/([\w\.]+)/i], [s, [a, "Chrome"]], [/edg(?:e|ios|a)?\/([\w\.]+)/i], [s, [a, "Edge"]], [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i], [a, s], [/opios[\/ ]+([\w\.]+)/i], [s, [a, W + " Mini"]], [/\bop(?:rg)?x\/([\w\.]+)/i], [s, [a, W + " GX"]], [/\bopr\/([\w\.]+)/i], [s, [a, W]], [/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i], [s, [a, "Baidu"]], [/\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i], [s, [a, "Maxthon"]], [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i, /(avant|iemobile|slim(?:browser|boat|jet))[\/ ]?([\d\.]*)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio|(?=comodo_)?dragon)\/([-\w\.]+)/i, /(heytap|ovi|115)browser\/([\d\.]+)/i, /(weibo)__([\d\.]+)/i], [a, s], [/quark(?:pc)?\/([-\w\.]+)/i], [s, [a, "Quark"]], [/\bddg\/([\w\.]+)/i], [s, [a, "DuckDuckGo"]], [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i], [s, [a, "UC" + G]], [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i, /micromessenger\/([\w\.]+)/i], [s, [a, "WeChat"]], [/konqueror\/([\w\.]+)/i], [s, [a, "Konqueror"]], [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i], [s, [a, "IE"]], [/ya(?:search)?browser\/([\w\.]+)/i], [s, [a, "Yandex"]], [/slbrowser\/([\w\.]+)/i], [s, [a, "Smart Lenovo " + G]], [/(avast|avg)\/([\w\.]+)/i], [[a, /(.+)/, "$1 Secure " + G], s], [/\bfocus\/([\w\.]+)/i], [s, [a, O + " Focus"]], [/\bopt\/([\w\.]+)/i], [s, [a, W + " Touch"]], [/coc_coc\w+\/([\w\.]+)/i], [s, [a, "Coc Coc"]], [/dolfin\/([\w\.]+)/i], [s, [a, "Dolphin"]], [/coast\/([\w\.]+)/i], [s, [a, W + " Coast"]], [/miuibrowser\/([\w\.]+)/i], [s, [a, "MIUI" + de]], [/fxios\/([\w\.-]+)/i], [s, [a, O]], [/\bqihoobrowser\/?([\w\.]*)/i], [s, [a, "360"]], [/\b(qq)\/([\w\.]+)/i], [[a, /(.+)/, "$1Browser"], s], [/(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i], [[a, /(.+)/, "$1" + de], s], [/samsungbrowser\/([\w\.]+)/i], [s, [a, X + " Internet"]], [/metasr[\/ ]?([\d\.]+)/i], [s, [a, "Sogou Explorer"]], [/(sogou)mo\w+\/([\d\.]+)/i], [[a, "Sogou Mobile"], s], [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i], [a, s], [/(lbbrowser|rekonq)/i, /\[(linkedin)app\]/i], [a], [/ome\/([\w\.]+) \w* ?(iron) saf/i, /ome\/([\w\.]+).+qihu (360)[es]e/i], [s, a], [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i], [[a, se], s], [/(Klarna)\/([\w\.]+)/i, /(kakao(?:talk|story))[\/ ]([\w\.]+)/i, /(naver)\(.*?(\d+\.[\w\.]+).*\)/i, /safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(alipay)client\/([\w\.]+)/i, /(twitter)(?:and| f.+e\/([\w\.]+))/i, /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i], [a, s], [/\bgsa\/([\w\.]+) .*safari\//i], [s, [a, "GSA"]], [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i], [s, [a, "TikTok"]], [/headlesschrome(?:\/([\w\.]+)| )/i], [s, [a, V + " Headless"]], [/ wv\).+(chrome)\/([\w\.]+)/i], [[a, V + " WebView"], s], [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i], [s, [a, "Android " + G]], [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i], [a, s], [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i], [s, [a, "Mobile Safari"]], [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i], [s, a], [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i], [a, [s, fe, He]], [/(webkit|khtml)\/([\w\.]+)/i], [a, s], [/(navigator|netscape\d?)\/([-\w\.]+)/i], [[a, "Netscape"], s], [/(wolvic|librewolf)\/([\w\.]+)/i], [a, s], [/mobile vr; rv:([\w\.]+)\).+firefox/i], [s, [a, O + " Reality"]], [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /(links) \(([\w\.]+)/i], [a, [s, /_/g, "."]], [/(cobalt)\/([\w\.]+)/i], [a, [s, /master.|lts./, ""]]],
                cpu: [[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i], [[P, "amd64"]], [/(ia32(?=;))/i], [[P, U]], [/((?:i[346]|x)86)[;\)]/i], [[P, "ia32"]], [/\b(aarch64|arm(v?8e?l?|_?64))\b/i], [[P, "arm64"]], [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i], [[P, "armhf"]], [/windows (ce|mobile); ppc;/i], [[P, "arm"]], [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i], [[P, /ower/, l, U]], [/(sun4\w)[;\)]/i], [[P, "sparc"]], [/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i], [[P, U]]],
                device: [[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i], [o, [r, X], [n, g]], [/\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i, /samsung[- ]((?!sm-[lr])[-\w]+)/i, /sec-(sgh\w+)/i], [o, [r, X], [n, f]], [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i], [o, [r, I], [n, f]], [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i], [o, [r, I], [n, g]], [/(macintosh);/i], [o, [r, I]], [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i], [o, [r, ae], [n, f]], [/(?:honor)([-\w ]+)[;\)]/i], [o, [r, "Honor"], [n, f]], [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i], [o, [r, oe], [n, g]], [/(?:huawei)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i], [o, [r, oe], [n, f]], [/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite|pro)?)(?: bui|\))/i], [[o, /_/g, " "], [r, D], [n, f]], [/oid[^\)]+; (2\d{4}(283|rpbf)[cgl])( bui|\))/i, /\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i], [[o, /_/g, " "], [r, D], [n, g]], [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i], [o, [r, "OPPO"], [n, f]], [/\b(opd2\d{3}a?) bui/i], [o, [r, "OPPO"], [n, g]], [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i], [o, [r, "Vivo"], [n, f]], [/\b(rmx[1-3]\d{3})(?: bui|;|\))/i], [o, [r, "Realme"], [n, f]], [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i], [o, [r, re], [n, f]], [/\b(mz60\d|xoom[2 ]{0,2}) build\//i], [o, [r, re], [n, g]], [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i], [o, [r, Q], [n, g]], [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i, /\blg-?([\d\w]+) bui/i], [o, [r, Q], [n, f]], [/(ideatab[-\w ]+)/i, /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i], [o, [r, "Lenovo"], [n, g]], [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i], [[o, /_/g, " "], [r, "Nokia"], [n, f]], [/(pixel c)\b/i], [o, [r, F], [n, g]], [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i], [o, [r, F], [n, f]], [/droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i], [o, [r, q], [n, f]], [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i], [[o, "Xperia Tablet"], [r, q], [n, g]], [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i], [o, [r, "OnePlus"], [n, f]], [/(alexa)webm/i, /(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i], [o, [r, z], [n, g]], [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i], [[o, /(.+)/g, "Fire Phone $1"], [r, z], [n, f]], [/(playbook);[-\w\),; ]+(rim)/i], [o, r, [n, g]], [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i], [o, [r, ne], [n, f]], [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i], [o, [r, te], [n, g]], [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i], [o, [r, te], [n, f]], [/(nexus 9)/i], [o, [r, "HTC"], [n, g]], [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i], [r, [o, /_/g, " "], [n, f]], [/droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])\w*(\)| bui)/i], [o, [r, "TCL"], [n, g]], [/(itel) ((\w+))/i], [[r, U], o, [n, fe, {
                    tablet: ["p10001l", "w7001"],
                    "*": "mobile"
                }]], [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i], [o, [r, "Acer"], [n, g]], [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i], [o, [r, "Meizu"], [n, f]], [/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i], [o, [r, "Ulefone"], [n, f]], [/; (energy ?\w+)(?: bui|\))/i, /; energizer ([\w ]+)(?: bui|\))/i], [o, [r, "Energizer"], [n, f]], [/; cat (b35);/i, /; (b15q?|s22 flip|s48c|s62 pro)(?: bui|\))/i], [o, [r, "Cat"], [n, f]], [/((?:new )?andromax[\w- ]+)(?: bui|\))/i], [o, [r, "Smartfren"], [n, f]], [/droid.+; (a(?:015|06[35]|142p?))/i], [o, [r, "Nothing"], [n, f]], [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron|infinix|tecno|micromax|advan)[-_ ]?([-\w]*)/i, /; (imo) ((?!tab)[\w ]+?)(?: bui|\))/i, /(hp) ([\w ]+\w)/i, /(asus)-?(\w+)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w]+)/i, /(jolla)/i, /(oppo) ?([\w ]+) bui/i], [r, o, [n, f]], [/(imo) (tab \w+)/i, /(kobo)\s(ereader|touch)/i, /(archos) (gamepad2?)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i], [r, o, [n, g]], [/(surface duo)/i], [o, [r, $], [n, g]], [/droid [\d\.]+; (fp\du?)(?: b|\))/i], [o, [r, "Fairphone"], [n, f]], [/(u304aa)/i], [o, [r, "AT&T"], [n, f]], [/\bsie-(\w*)/i], [o, [r, "Siemens"], [n, f]], [/\b(rct\w+) b/i], [o, [r, "RCA"], [n, g]], [/\b(venue[\d ]{2,7}) b/i], [o, [r, "Dell"], [n, g]], [/\b(q(?:mv|ta)\w+) b/i], [o, [r, "Verizon"], [n, g]], [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i], [o, [r, "Barnes & Noble"], [n, g]], [/\b(tm\d{3}\w+) b/i], [o, [r, "NuVision"], [n, g]], [/\b(k88) b/i], [o, [r, "ZTE"], [n, g]], [/\b(nx\d{3}j) b/i], [o, [r, "ZTE"], [n, f]], [/\b(gen\d{3}) b.+49h/i], [o, [r, "Swiss"], [n, f]], [/\b(zur\d{3}) b/i], [o, [r, "Swiss"], [n, g]], [/\b((zeki)?tb.*\b) b/i], [o, [r, "Zeki"], [n, g]], [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i], [[r, "Dragon Touch"], o, [n, g]], [/\b(ns-?\w{0,9}) b/i], [o, [r, "Insignia"], [n, g]], [/\b((nxa|next)-?\w{0,9}) b/i], [o, [r, "NextBook"], [n, g]], [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i], [[r, "Voice"], o, [n, f]], [/\b(lvtel\-)?(v1[12]) b/i], [[r, "LvTel"], o, [n, f]], [/\b(ph-1) /i], [o, [r, "Essential"], [n, f]], [/\b(v(100md|700na|7011|917g).*\b) b/i], [o, [r, "Envizen"], [n, g]], [/\b(trio[-\w\. ]+) b/i], [o, [r, "MachSpeed"], [n, g]], [/\btu_(1491) b/i], [o, [r, "Rotor"], [n, g]], [/(shield[\w ]+) b/i], [o, [r, "Nvidia"], [n, g]], [/(sprint) (\w+)/i], [r, o, [n, f]], [/(kin\.[onetw]{3})/i], [[o, /\./g, " "], [r, $], [n, f]], [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i], [o, [r, ee], [n, g]], [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i], [o, [r, ee], [n, f]], [/smart-tv.+(samsung)/i], [r, [n, E]], [/hbbtv.+maple;(\d+)/i], [[o, /^/, "SmartTV"], [r, X], [n, E]], [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i], [[r, Q], [n, E]], [/(apple) ?tv/i], [r, [o, I + " TV"], [n, E]], [/crkey/i], [[o, V + "cast"], [r, F], [n, E]], [/droid.+aft(\w+)( bui|\))/i], [o, [r, z], [n, E]], [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i], [o, [r, ae], [n, E]], [/(bravia[\w ]+)( bui|\))/i], [o, [r, q], [n, E]], [/(mitv-\w{5}) bui/i], [o, [r, D], [n, E]], [/Hbbtv.*(technisat) (.*);/i], [r, o, [n, E]], [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i], [[r, k], [o, k], [n, E]], [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i], [[n, E]], [/(ouya)/i, /(nintendo) ([wids3utch]+)/i], [r, o, [n, N]], [/droid.+; (shield) bui/i], [o, [r, "Nvidia"], [n, N]], [/(playstation [345portablevi]+)/i], [o, [r, q], [n, N]], [/\b(xbox(?: one)?(?!; xbox))[\); ]/i], [o, [r, $], [n, N]], [/\b(sm-[lr]\d\d[05][fnuw]?s?)\b/i], [o, [r, X], [n, M]], [/((pebble))app/i], [r, o, [n, M]], [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i], [o, [r, I], [n, M]], [/droid.+; (glass) \d/i], [o, [r, F], [n, M]], [/droid.+; (wt63?0{2,3})\)/i], [o, [r, ee], [n, M]], [/droid.+; (glass) \d/i], [o, [r, F], [n, M]], [/(pico) (4|neo3(?: link|pro)?)/i], [r, o, [n, M]], [/; (quest( \d| pro)?)/i], [o, [r, se], [n, M]], [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i], [r, [n, Z]], [/(aeobc)\b/i], [o, [r, z], [n, Z]], [/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i], [o, [n, f]], [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i], [o, [n, g]], [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i], [[n, g]], [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i], [[n, f]], [/(android[-\w\. ]{0,9});.+buil/i], [o, [r, "Generic"]]],
                engine: [[/windows.+ edge\/([\w\.]+)/i], [s, [a, ge + "HTML"]], [/(arkweb)\/([\w\.]+)/i], [a, s], [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i], [s, [a, "Blink"]], [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna|servo)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i, /\b(libweb)/i], [a, s], [/rv\:([\w\.]{1,9})\b.+(gecko)/i], [s, a]],
                os: [[/microsoft (windows) (vista|xp)/i], [a, s], [/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i], [a, [s, fe, Se]], [/windows nt 6\.2; (arm)/i, /windows[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i, /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i], [[s, fe, Se], [a, "Windows"]], [/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i, /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i, /cfnetwork\/.+darwin/i], [[s, /_/g, "."], [a, "iOS"]], [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i], [[a, le], [s, /_/g, "."]], [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i], [s, a], [/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish|openharmony)[-\/ ]?([\w\.]*)/i, /(blackberry)\w*\/([\w\.]*)/i, /(tizen|kaios)[\/ ]([\w\.]+)/i, /\((series40);/i], [a, s], [/\(bb(10);/i], [s, [a, ne]], [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i], [s, [a, "Symbian"]], [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i], [s, [a, O + " OS"]], [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i], [s, [a, "webOS"]], [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i], [s, [a, "watchOS"]], [/crkey\/([\d\.]+)/i], [s, [a, V + "cast"]], [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i], [[a, ce], s], [/panasonic;(viera)/i, /(netrange)mmh/i, /(nettv)\/(\d+\.[\w\.]+)/i, /(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux) ?([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i], [a, s], [/(sunos) ?([\w\.\d]*)/i], [[a, "Solaris"], s], [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i, /(unix) ?([\w\.]*)/i], [a, s]]
            }
            , A = function (p, v) {
                if (typeof p === T && (v = p,
                    p = c),
                    !(this instanceof A))
                    return new A(p, v).getResult();
                var w = typeof t !== S && t.navigator ? t.navigator : c
                    , y = p || (w && w.userAgent ? w.userAgent : l)
                    , _ = w && w.userAgentData ? w.userAgentData : c
                    , L = v ? be(ye, v) : ye
                    , x = w && w.userAgent == y;
                return this.getBrowser = function () {
                    var u = {};
                    return u[a] = c,
                        u[s] = c,
                        K.call(u, y, L.browser),
                        u[C] = me(u[s]),
                        x && w && w.brave && typeof w.brave.isBrave == m && (u[a] = "Brave"),
                        u
                }
                    ,
                    this.getCPU = function () {
                        var u = {};
                        return u[P] = c,
                            K.call(u, y, L.cpu),
                            u
                    }
                    ,
                    this.getDevice = function () {
                        var u = {};
                        return u[r] = c,
                            u[o] = c,
                            u[n] = c,
                            K.call(u, y, L.device),
                            x && !u[n] && _ && _.mobile && (u[n] = f),
                            x && u[o] == "Macintosh" && w && typeof w.standalone !== S && w.maxTouchPoints && w.maxTouchPoints > 2 && (u[o] = "iPad",
                                u[n] = g),
                            u
                    }
                    ,
                    this.getEngine = function () {
                        var u = {};
                        return u[a] = c,
                            u[s] = c,
                            K.call(u, y, L.engine),
                            u
                    }
                    ,
                    this.getOS = function () {
                        var u = {};
                        return u[a] = c,
                            u[s] = c,
                            K.call(u, y, L.os),
                            x && !u[a] && _ && _.platform && _.platform != "Unknown" && (u[a] = _.platform.replace(/chrome os/i, ce).replace(/macos/i, le)),
                            u
                    }
                    ,
                    this.getResult = function () {
                        return {
                            ua: this.getUA(),
                            browser: this.getBrowser(),
                            engine: this.getEngine(),
                            os: this.getOS(),
                            device: this.getDevice(),
                            cpu: this.getCPU()
                        }
                    }
                    ,
                    this.getUA = function () {
                        return y
                    }
                    ,
                    this.setUA = function (u) {
                        return y = typeof u === h && u.length > J ? k(u, J) : u,
                            this
                    }
                    ,
                    this.setUA(y),
                    this
            };
        A.VERSION = b,
            A.BROWSER = j([a, s, C]),
            A.CPU = j([P]),
            A.DEVICE = j([o, r, n, N, f, E, g, M, Z]),
            A.ENGINE = A.OS = j([a, s]),
            e.exports && (i = e.exports = A),
            i.UAParser = A;
        var Y = typeof t !== S && (t.jQuery || t.Zepto);
        if (Y && !Y.ua) {
            var we = new A;
            Y.ua = we.getResult(),
                Y.ua.get = function () {
                    return we.getUA()
                }
                ,
                Y.ua.set = function (p) {
                    we.setUA(p);
                    var v = we.getResult();
                    for (var w in v)
                        Y.ua[w] = v[w]
                }
        }
    }
    )(typeof window == "object" ? window : ze)
}
)(pe, pe.exports);
var Ve = pe.exports
    , ve = {
        exports: {}
    }
    , Ee = {
        exports: {}
    };
(function (e) {
    function i(t, c) {
        var b, l, d, m, S, T, h, C;
        for (b = t.length & 3,
            l = t.length - b,
            d = c,
            S = 3432918353,
            T = 461845907,
            C = 0; C < l;)
            h = t.charCodeAt(C) & 255 | (t.charCodeAt(++C) & 255) << 8 | (t.charCodeAt(++C) & 255) << 16 | (t.charCodeAt(++C) & 255) << 24,
                ++C,
                h = (h & 65535) * S + (((h >>> 16) * S & 65535) << 16) & 4294967295,
                h = h << 15 | h >>> 17,
                h = (h & 65535) * T + (((h >>> 16) * T & 65535) << 16) & 4294967295,
                d ^= h,
                d = d << 13 | d >>> 19,
                m = (d & 65535) * 5 + (((d >>> 16) * 5 & 65535) << 16) & 4294967295,
                d = (m & 65535) + 27492 + (((m >>> 16) + 58964 & 65535) << 16);
        switch (h = 0,
        b) {
            case 3:
                h ^= (t.charCodeAt(C + 2) & 255) << 16;
            case 2:
                h ^= (t.charCodeAt(C + 1) & 255) << 8;
            case 1:
                h ^= t.charCodeAt(C) & 255,
                    h = (h & 65535) * S + (((h >>> 16) * S & 65535) << 16) & 4294967295,
                    h = h << 15 | h >>> 17,
                    h = (h & 65535) * T + (((h >>> 16) * T & 65535) << 16) & 4294967295,
                    d ^= h
        }
        return d ^= t.length,
            d ^= d >>> 16,
            d = (d & 65535) * 2246822507 + (((d >>> 16) * 2246822507 & 65535) << 16) & 4294967295,
            d ^= d >>> 13,
            d = (d & 65535) * 3266489909 + (((d >>> 16) * 3266489909 & 65535) << 16) & 4294967295,
            d ^= d >>> 16,
            d >>> 0
    }
    e.exports = i
}
)(Ee);
var qe = Ee.exports
    , Pe = {
        exports: {}
    };
(function (e) {
    function i(t, c) {
        for (var b = t.length, l = c ^ b, d = 0, m; b >= 4;)
            m = t.charCodeAt(d) & 255 | (t.charCodeAt(++d) & 255) << 8 | (t.charCodeAt(++d) & 255) << 16 | (t.charCodeAt(++d) & 255) << 24,
                m = (m & 65535) * 1540483477 + (((m >>> 16) * 1540483477 & 65535) << 16),
                m ^= m >>> 24,
                m = (m & 65535) * 1540483477 + (((m >>> 16) * 1540483477 & 65535) << 16),
                l = (l & 65535) * 1540483477 + (((l >>> 16) * 1540483477 & 65535) << 16) ^ m,
                b -= 4,
                ++d;
        switch (b) {
            case 3:
                l ^= (t.charCodeAt(d + 2) & 255) << 16;
            case 2:
                l ^= (t.charCodeAt(d + 1) & 255) << 8;
            case 1:
                l ^= t.charCodeAt(d) & 255,
                    l = (l & 65535) * 1540483477 + (((l >>> 16) * 1540483477 & 65535) << 16)
        }
        return l ^= l >>> 13,
            l = (l & 65535) * 1540483477 + (((l >>> 16) * 1540483477 & 65535) << 16),
            l ^= l >>> 15,
            l >>> 0
    }
    e.exports = i
}
)(Pe);
var je = Pe.exports
    , ke = qe
    , Ke = je;
ve.exports = ke;
var Ye = ve.exports.murmur3 = ke;
ve.exports.murmur2 = Ke;
class Ze {
    constructor() {
        var i = ["monospace", "sans-serif", "serif"]
            , t = "mmmmmmmmmmlli"
            , c = "72px"
            , b = document.getElementsByTagName("body")[0]
            , l = document.createElement("span");
        l.style.fontSize = c,
            l.innerHTML = t;
        var d = {}
            , m = {};
        for (var S in i)
            l.style.fontFamily = i[S],
                b.appendChild(l),
                d[i[S]] = l.offsetWidth,
                m[i[S]] = l.offsetHeight,
                b.removeChild(l);
        function T(h) {
            var C = !1;
            for (var o in i) {
                l.style.fontFamily = h + "," + i[o],
                    b.appendChild(l);
                var a = l.offsetWidth != d[i[o]] || l.offsetHeight != m[i[o]];
                b.removeChild(l),
                    C = C || a
            }
            return C
        }
        this.detect = T
    }
}
var Je = new Ve.UAParser
    , B = Je.getResult();
const Me = new Ze;
let H = !1
    , xe = null
    , ie = 0;
async function Qe() {
    var e = Ae()
        , i = Le();
    const t = await Fe();
    var c = Oe()
        , b = Ie()
        , l = navigator.deviceMemory
        , d = We()
        , m = Ge()
        , S = "|"
        , T = e + S + i + S + t + S + c + S + l + S + d + S + b + S + m
        , h = 256;
    return Ye(T, h)
}
function Ae() {
    return B.ua
}
function $e() {
    return B.browser.name
}
function De() {
    return B.engine.name
}
function ei() {
    return B.os.name
}
function ii() {
    return B.os.version
}
function ti() {
    return B.device.model
}
function ni() {
    return B.device.type
}
function oi() {
    return B.device.vendor
}
function ri() {
    return B.cpu.architecture
}
function Le() {
    return "Current Resolution: " + _e() + ", Available Resolution: " + Be() + ", Color Depth: " + Re() + ", Device XDPI: " + Ue() + ", Device YDPI: " + Ne()
}
function Re() {
    return screen.colorDepth
}
function _e() {
    return screen.width + "x" + screen.height
}
function Be() {
    return screen.availWidth + "x" + screen.availHeight
}
function Ue() {
    var e = screen.deviceXDPI;
    return e === void 0
}
function Ne() {
    var e = screen.deviceYDPI;
    return e === void 0
}
function ai() {
    try {
        return !!globalThis.localStorage
    } catch {
        return !0
    }
}
function si() {
    try {
        return !!globalThis.sessionStorage
    } catch {
        return !0
    }
}
function ci() {
    return navigator.cookieEnabled
}
function Ie() {
    var e, i, t, c;
    return e = new Date,
        i = String(-(e.getTimezoneOffset() / 60)),
        i < 0 ? (i = i * -1,
            t = ("0" + i).slice(-2),
            c = "-" + t) : (t = ("0" + i).slice(-2),
                c = "+" + t),
        c
}
function li() {
    return navigator.language
}
function di() {
    return navigator.systemLanguage || window.navigator.language
}
function ui() {
    var e = document.createElement("canvas");
    try {
        return !!(e.getContext && e.getContext("2d"))
    } catch {
        return !1
    }
}
function Ge() {
    var e = document.createElement("canvas"), i;
    try {
        i = e.getContext("2d")
    } catch {
        return ""
    }
    var t = "Datopic,com <canvas> 1.0";
    return i.textBaseline = "top",
        i.font = "14px 'Arial'",
        i.textBaseline = "alphabetic",
        i.fillStyle = "#f60",
        i.fillRect(125, 1, 62, 20),
        i.fillStyle = "#069",
        i.fillText(t, 2, 15),
        i.fillStyle = "rgba(102, 204, 0, 0.7)",
        i.fillText(t, 4, 17),
        e.toDataURL()
}
function fi(e) {
    return Me.detect(e)
}
function Oe() {
    for (var e = ["Abadi MT Condensed Light", "Adobe Fangsong Std", "Adobe Hebrew", "Adobe Ming Std", "Agency FB", "Aharoni", "Andalus", "Angsana New", "AngsanaUPC", "Aparajita", "Arab", "Arabic Transparent", "Arabic Typesetting", "Arial Baltic", "Arial Black", "Arial CE", "Arial CYR", "Arial Greek", "Arial TUR", "Arial", "Batang", "BatangChe", "Bauhaus 93", "Bell MT", "Bitstream Vera Serif", "Bodoni MT", "Bookman Old Style", "Braggadocio", "Broadway", "Browallia New", "BrowalliaUPC", "Calibri Light", "Calibri", "Californian FB", "Cambria Math", "Cambria", "Candara", "Castellar", "Casual", "Centaur", "Century Gothic", "Chalkduster", "Colonna MT", "Comic Sans MS", "Consolas", "Constantia", "Copperplate Gothic Light", "Corbel", "Cordia New", "CordiaUPC", "Courier New Baltic", "Courier New CE", "Courier New CYR", "Courier New Greek", "Courier New TUR", "Courier New", "DFKai-SB", "DaunPenh", "David", "DejaVu LGC Sans Mono", "Desdemona", "DilleniaUPC", "DokChampa", "Dotum", "DotumChe", "Ebrima", "Engravers MT", "Eras Bold ITC", "Estrangelo Edessa", "EucrosiaUPC", "Euphemia", "Eurostile", "FangSong", "Forte", "FrankRuehl", "Franklin Gothic Heavy", "Franklin Gothic Medium", "FreesiaUPC", "French Script MT", "Gabriola", "Gautami", "Georgia", "Gigi", "Gisha", "Goudy Old Style", "Gulim", "GulimChe", "GungSeo", "Gungsuh", "GungsuhChe", "Haettenschweiler", "Harrington", "Hei S", "HeiT", "Heisei Kaku Gothic", "Hiragino Sans GB", "Impact", "Informal Roman", "IrisUPC", "Iskoola Pota", "JasmineUPC", "KacstOne", "KaiTi", "Kalinga", "Kartika", "Khmer UI", "Kino MT", "KodchiangUPC", "Kokila", "Kozuka Gothic Pr6N", "Lao UI", "Latha", "Leelawadee", "Levenim MT", "LilyUPC", "Lohit Gujarati", "Loma", "Lucida Bright", "Lucida Console", "Lucida Fax", "Lucida Sans Unicode", "MS Gothic", "MS Mincho", "MS PGothic", "MS PMincho", "MS Reference Sans Serif", "MS UI Gothic", "MV Boli", "Magneto", "Malgun Gothic", "Mangal", "Marlett", "Matura MT Script Capitals", "Meiryo UI", "Meiryo", "Menlo", "Microsoft Himalaya", "Microsoft JhengHei", "Microsoft New Tai Lue", "Microsoft PhagsPa", "Microsoft Sans Serif", "Microsoft Tai Le", "Microsoft Uighur", "Microsoft YaHei", "Microsoft Yi Baiti", "MingLiU", "MingLiU-ExtB", "MingLiU_HKSCS", "MingLiU_HKSCS-ExtB", "Miriam Fixed", "Miriam", "Mongolian Baiti", "MoolBoran", "NSimSun", "Narkisim", "News Gothic MT", "Niagara Solid", "Nyala", "PMingLiU", "PMingLiU-ExtB", "Palace Script MT", "Palatino Linotype", "Papyrus", "Perpetua", "Plantagenet Cherokee", "Playbill", "Prelude Bold", "Prelude Condensed Bold", "Prelude Condensed Medium", "Prelude Medium", "PreludeCompressedWGL Black", "PreludeCompressedWGL Bold", "PreludeCompressedWGL Light", "PreludeCompressedWGL Medium", "PreludeCondensedWGL Black", "PreludeCondensedWGL Bold", "PreludeCondensedWGL Light", "PreludeCondensedWGL Medium", "PreludeWGL Black", "PreludeWGL Bold", "PreludeWGL Light", "PreludeWGL Medium", "Raavi", "Rachana", "Rockwell", "Rod", "Sakkal Majalla", "Sawasdee", "Script MT Bold", "Segoe Print", "Segoe Script", "Segoe UI Light", "Segoe UI Semibold", "Segoe UI Symbol", "Segoe UI", "Shonar Bangla", "Showcard Gothic", "Shruti", "SimHei", "SimSun", "SimSun-ExtB", "Simplified Arabic Fixed", "Simplified Arabic", "Snap ITC", "Sylfaen", "Symbol", "Tahoma", "Times New Roman Baltic", "Times New Roman CE", "Times New Roman CYR", "Times New Roman Greek", "Times New Roman TUR", "Times New Roman", "TlwgMono", "Traditional Arabic", "Trebuchet MS", "Tunga", "Tw Cen MT Condensed Extra Bold", "Ubuntu", "Umpush", "Univers", "Utopia", "Utsaah", "Vani", "Verdana", "Vijaya", "Vladimir Script", "Vrinda", "Webdings", "Wide Latin", "Wingdings"], i = "", t = 0; t < e.length; t++)
        Me.detect(e[t]) && (t == e.length - 1 ? i += e[t] : i += e[t] + ", ");
    return i
}
function wi() {
    return navigator.javaEnabled()
}
function gi() {
    var e = navigator.plugins["Shockwave Flash"];
    return !!e
}
function bi() {
    var e = navigator.plugins["Silverlight Plug-In"];
    return !!e
}
function mi() {
    return !!(navigator.mimeTypes && navigator.mimeTypes.length)
}
function hi() {
    var e = "";
    if (navigator.mimeTypes)
        for (var i = 0; i < navigator.mimeTypes.length; i++)
            i == navigator.mimeTypes.length - 1 ? e += navigator.mimeTypes[i].description : e += navigator.mimeTypes[i].description + ", ";
    return e
}
function pi() {
    const e = document.createElement("canvas")
        , i = e.getContext("2d");
    return i.textBaseline = "top",
        i.font = "14px Arial",
        i.textBaseline = "alphabetic",
        i.fillStyle = "#f60",
        i.fillRect(125, 1, 62, 20),
        i.fillStyle = "#069",
        i.fillText("Browser Fingerprint", 2, 15),
        i.fillStyle = "rgba(102, 204, 0, 0.7)",
        i.fillText("Browser Fingerprint", 4, 17),
        e.toDataURL().split("").reduce((b, l) => {
            const d = l.charCodeAt(0);
            return b = (b << 5) - b + d,
                b & b
        }
            , 0).toString()
}
function vi() {
    const e = document.createElement("canvas");
    let i;
    try {
        i = e.getContext("webgl") || e.getContext("experimental-webgl")
    } catch {
        return null
    }
    if (!i)
        return null;
    const t = i.getExtension("WEBGL_debug_renderer_info")
        , c = i.getParameter(t.UNMASKED_RENDERER_WEBGL)
        , b = i.getParameter(t.UNMASKED_VENDOR_WEBGL);
    return `${c}_${b}`.split("").reduce((m, S) => {
        const T = S.charCodeAt(0);
        return m = (m << 5) - m + T,
            m & m
    }
        , 0).toString()
}
function xi() {
    return new Promise((e, i) => {
        if (window.RTCPeerConnection = window.RTCPeerConnection || window.webkitRTCPeerConnection || window.mozRTCPeerConnection,
            window.RTCPeerConnection) {
            const t = new RTCPeerConnection({
                iceServers: []
            });
            t.createDataChannel(""),
                t.createOffer().then(c => t.setLocalDescription(c)),
                t.onicecandidate = c => {
                    if (c && c.candidate && c.candidate.candidate) {
                        const b = c.candidate.candidate.split(" ");
                        e(b[4]),
                            t.close()
                    }
                }
        } else
            i(new Error("WebRTC is not supported by this browser."))
    }
    )
}
function Si() {
    return new Promise((e, i) => {
        const t = new RTCPeerConnection({
            iceServers: [{
                urls: "stun:stun.l.google.com:19302"
            }]
        })
            , c = () => { }
            ;
        let b = !1;
        t.createDataChannel(""),
            t.createOffer().then(l => t.setLocalDescription(l)).catch(i),
            t.onicecandidate = l => {
                if (!l || !l.candidate || b)
                    return;
                const m = l.candidate.candidate.split(" ")
                    , S = m[4];
                m[7] === "srflx" && (b = !0,
                    e(S),
                    t.onicecandidate = c,
                    t.close())
            }
    }
    )
}
async function yi(e) {
    const i = new TextEncoder().encode(e)
        , t = await crypto.subtle.digest("SHA-256", i);
    return Array.from(new Uint8Array(t)).map(l => l.toString(16).padStart(2, "0")).join("")
}
async function Fe() {
    const e = [];
    for (const i of navigator.plugins) {
        const t = i.name
            , c = i.version || "unknown"
            , b = await yi(`${t}${c}`);
        e.push({
            name: t,
            version: c,
            sha: b
        })
    }
    return e
}
async function Ci() {
    return new Promise((e, i) => {
        navigator.getBattery().then(t => {
            function c() {
                e({
                    charging: t.charging,
                    level: t.level * 100,
                    chargingTime: t.chargingTime,
                    dischargingTime: t.dischargingTime
                })
            }
            c(),
                t.addEventListener("chargingchange", c),
                t.addEventListener("levelchange", c),
                t.addEventListener("chargingtimechange", c),
                t.addEventListener("dischargingtimechange", c),
                window.addEventListener("beforeunload", () => {
                    t.removeEventListener("chargingchange", c),
                        t.removeEventListener("levelchange", c),
                        t.removeEventListener("chargingtimechange", c),
                        t.removeEventListener("dischargingtimechange", c)
                }
                ),
                document.hidden && i(new Error("Page is hidden on load"))
        }
        ).catch(t => {
            i(t)
        }
        )
    }
    )
}
async function Ti() {
    return new Promise((e, i) => {
        document.addEventListener("mousemove", t => {
            const c = t.clientX
                , b = t.clientY;
            e({
                x: c,
                y: b
            })
        }
        )
    }
    )
}
async function Ei() {
    return new Promise(e => {
        try {
            if (!navigator.bluetooth) {
                e(!1);
                return
            }
            navigator.bluetooth.getAvailability().then(i => {
                e(i)
            }
            ).catch(() => {
                e(!1)
            }
            )
        } catch {
            e(!1)
        }
    }
    )
}
async function Pi() {
    return new Promise((e, i) => {
        if ("connection" in navigator) {
            const t = navigator.connection;
            e({
                effectiveType: t.effectiveType,
                downlink: t.downlink,
                rtt: t.rtt,
                saveData: t.saveData
            })
        } else
            i(new Error("Network information is not supported by this browser."))
    }
    )
}
async function ki() {
    return new Promise(e => {
        const i = "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
        e(i)
    }
    )
}
async function Mi() {
    return new Promise(e => {
        "xr" in navigator ? navigator.xr.isSessionSupported("immersive-vr").then(i => {
            e(i)
        }
        ).catch(() => {
            e(!1)
        }
        ) : e(!1)
    }
    )
}
function Ai() {
    return new Promise(e => {
        const i = "SpeechRecognition" in window || "webkitSpeechRecognition" in window;
        e(i)
    }
    )
}
function Li() {
    return new Promise((e, i) => {
        const t = document.createElement("div");
        t.style.visibility = "hidden",
            t.style.position = "absolute",
            t.style.top = "-9999px",
            t.style.left = "-9999px",
            t.style.fontSize = "12px",
            t.innerHTML = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
            document.body.appendChild(t);
        const l = window.getComputedStyle(t).fontFamily.split(",").map(m => m.trim().replace(/['"]/g, ""))
            , d = Array.from(new Set(l));
        document.body.removeChild(t),
            e(d)
    }
    )
}
async function Ri() {
    return new Promise(e => {
        const i = new XMLHttpRequest;
        i.open("GET", location.origin, !0),
            i.onload = function () {
                const t = i.getAllResponseHeaders().toLowerCase().includes("http/2");
                e(t)
            }
            ,
            i.onerror = function () {
                e(!1)
            }
            ,
            i.send()
    }
    )
}
function _i() {
    const e = navigator.keyboard.layout || ""
        , i = navigator.language || "";
    return {
        layout: e,
        language: i
    }
}
async function Bi() {
    let e = !1;
    const i = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
    try {
        await fetch(new Request(i)).catch(t => e = !0)
    } catch {
        e = !0
    } finally { }
}
function We() {
    try {
        const e = document.createElement("canvas")
            , i = e.getContext("webgl") || e.getContext("experimental-webgl");
        if (!i)
            return;
        const t = i.getExtension("WEBGL_debug_renderer_info");
        return {
            renderer: t ? i.getParameter(t.UNMASKED_RENDERER_WEBGL) : "Unavailable",
            vendor: t ? i.getParameter(t.UNMASKED_VENDOR_WEBGL) : "Unavailable",
            maxTextureSize: i.getParameter(i.MAX_TEXTURE_SIZE),
            maxViewportDims: i.getParameter(i.MAX_VIEWPORT_DIMS),
            shadingLanguageVersion: i.getParameter(i.SHADING_LANGUAGE_VERSION),
            version: i.getParameter(i.VERSION),
            supportedExtensions: i.getSupportedExtensions()
        }
    } catch { }
}
We();
async function Ui() {
    try {
        var e = new Object
            , i = Ae();
        e.useragent = i;
        var t = $e();
        e.browser = t;
        var c = De();
        e.engine = c;
        var b = ei();
        e.os = b;
        var l = ii();
        e.osVersion = l;
        var d = ti();
        if (d === void 0)
            d = "PC",
                e.device = d;
        else {
            var m = ni()
                , S = oi();
            e.deviceType = m,
                e.deviceVendor = S
        }
        var T = ri();
        e.getCpu = T;
        var h = Le();
        e.getScreenPrint = h;
        var C = Re();
        e.getColorDepth = C;
        var o = _e();
        e.getCurrentResolution = o;
        var a = Be();
        e.getAvailableResolution = a;
        var n = Ue();
        e.getDeviceXDPI = n;
        var r = Ne();
        e.getDeviceYDPI = r;
        var s = wi();
        e.isJava = s;
        var P = gi();
        e.isFlash = P;
        var N = bi();
        e.isSilverlight = N;
        var f = mi();
        if (e.isMimeTypes = f,
            f === !0) {
            var g = hi();
            e.getMimeTypes = g
        }
        var E = fi();
        e.isFont = E;
        var M = Oe();
        e.getFonts = M;
        var Z = ai();
        e.isLocalStorage = Z;
        var J = si();
        e.isSessionStorage = J;
        var z = ci();
        e.isCookie = z;
        var I = Ie();
        e.getTimeZone = I;
        var te = li();
        e.getLanguage = te;
        var ne = di();
        e.getSystemLanguage = ne;
        var G = ui();
        if (e.isCanvas = G,
            G === !0) {
            var V = Ge();
            e.getCanvasPrint = V
        }
        const O = await Fe();
        e.plugins = O;
        const F = navigator.language;
        e.language = F;
        const oe = navigator.platform;
        e.platform = oe;
        const Q = navigator.hardwareConcurrency;
        e.hardwareConcurrency = Q;
        const $ = {
            width: window.screen.width,
            height: window.screen.height,
            colorDepth: window.screen.colorDepth,
            pixelRatio: window.devicePixelRatio
        };
        e.screenAttributes = $;
        const re = pi();
        e.canvasCapture = re;
        const W = vi();
        e.webGLCapture = W;
        const X = "audio_capture_placeholder";
        e.audioCapture = X;
        const ae = await xi().catch(k => "Error getting private IP");
        e.privateIP = ae;
        const q = await Si().catch(k => "Error getting public IP");
        e.publicIP = q;
        const D = await Ci().catch(k => null);
        e.batteryInfo = D;
        const ee = await Ti();
        e.mousePointerCoordinates = ee;
        const se = await Ei().catch(k => null);
        e.bluetoothSupport = se;
        const ce = navigator.deviceMemory;
        e.memory = ce;
        const le = await Pi().catch(k => null);
        e.networkInfo = le;
        const de = await ki();
        e.touchscreenSupport = de;
        const be = await Mi();
        e.vrarSupport = be;
        const j = await Ai();
        e.speechRecognitionSupported = j;
        const ue = await Li().catch(k => ({
            error: k
        }));
        e.fontuserDeviceData = ue;
        const U = await Ri();
        e.http2Support = U;
        const me = _i();
        e.keyboardLayoutInfo = me;
        var ge = await Qe();
        return e.user_id = ge,
            Bi(),
            new Promise((k, K) => {
                k(e)
            }
            )
    } catch { }
}
function Te() {
    if (document.hidden) {
        const i = (Date.now() - ie) / 1e3;
        H = !1,
            xe = {
                url: window.location.href,
                timeSpentInSeconds: i
            },
            Xe()
    } else
        ie = Date.now(),
            H = !0
}
async function Xe() {
    try {
        chrome.storage.local.get(["toggleState", "whitelistedUrls"], async e => {
            const i = e.toggleState !== void 0 ? e.toggleState : !1
                , t = e.whitelistedUrls || [];
            if (i && !function (l) {
                return t.some(d => l.includes(d))
            }(window.location.href)) {
                const l = await Ui();
                l.pageTimeInfo = xe,
                    chrome.runtime.sendMessage({
                        action: "sendDeviceStats",
                        data: l,
                        type: "Stats"
                    }, d => {
                        chrome.runtime.lastError || d && d.status
                    }
                    )
            }
        }
        )
    } catch { }
}
function Ni() {
    document.hidden || (ie = Date.now(),
        H = !0),
        document.addEventListener("visibilitychange", Te),
        window.addEventListener("focus", () => {
            H || (ie = Date.now(),
                H = !0)
        }
        ),
        window.addEventListener("blur", () => {
            if (H) {
                const i = (Date.now() - ie) / 1e3;
                xe = {
                    url: window.location.href,
                    timeSpentInSeconds: i
                },
                    H = !1,
                    Xe()
            }
        }
        ),
        Te()
}
window.onload = Ni;
export { Ui };


