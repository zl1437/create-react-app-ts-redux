

export const LinkHost = 'api.goldenfinance.com.cn';
//url host 设定
declare const location: any;
//ts location对象

export const getEnv = () => {//环境判断
    let host = location.host;
    let env = host.match(/[^\-]*-/);
    // 开发环境
    if (env === null) {
        return ""
    }
    if (env[0] === 'dev-') {
        return 't-';
    }
    // 正式环境
    if (env[0] !== 'dev-' && env[0] !== 't-' && env[0] !== 'pre-') {
        return '';
    }
    // 测试、pre
    return env[0]
}

export const test: any = {

}

export const checkMobile = () => {
    (function (doc, win) {
        var docEl = doc.documentElement,
            resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
            recalc = function () {
                var clientWidth = docEl.clientWidth;
                if (!clientWidth) return;

                docEl.style.fontSize = 100 * (clientWidth / 375) + 'px';

            };

        if (!doc.addEventListener) return;
        win.addEventListener(resizeEvt, recalc, false);
        doc.addEventListener('DOMContentLoaded', recalc, false);
    })(document, window);
}

export const getQueryVariable = (variable: string) => {//获取URL参数
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == variable) { return pair[1]; }
    }
    return '';
}

export const setLocal = (key, value) => {
    let curTime = new Date().getTime();
    localStorage.setItem(key, JSON.stringify({ data: value, time: curTime }));
}
export const refreshStorage = (key, exp) => {
    let data = localStorage.getItem(key) || '';
    if (typeof data !== "undefined" && data !== null && data !== "") {
        let dataObj = JSON.parse(data);
        if (new Date().getTime() - dataObj.time > exp) {
            return false;
        } else {
            return JSON.parse(data).data || '';
        }
    } else {
        return false;
    }
}
export const haveStorage = (key) => {
    let data = localStorage.getItem(key) || '';
    if (typeof data !== "undefined" && data !== null && data !== "") {
        return JSON.parse(data).data || '';
    } else {
        return false;
    }
}


