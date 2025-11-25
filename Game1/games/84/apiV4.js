window.mobileAPI = {
    showAd: function(c, f) {},
    trigger: function(e) {
        if (typeof e == 'object')
            for (i = 0; i < e.length; i++) $(window).trigger(e[i]);
        else $(window).trigger(e)
    },
    ads: {
        adCallback: function() {
            window.parent.mobileAPI.adCallback()
        },
        showAd: function(callback, force) {
            window.parent.mobileAPI.showAd(callback, force)
        }
    },
    redirect: function(url) {
        window.parent.document.location.href = url
    },
    showLeaderBoard: function(score, fw) {
        window.parent.mobileAPI.showLeaderBoard(score, fw)
    },
    removeIframe: function(i) {
        window.parent.mobileAPI.removeIframe(i)
    },
    events: {
        gameover: function(ad, callback) {
            try {
                window.parent.mobileAPI.showLeaderBoard(window.parent.mobileAPI.score)
            } catch (e) {
                (typeof ad != 'boolean' || ad === !0) && window.parent.mobileAPI.ads.showAd(callback)
            }
        },
        started: function(ad, callback) {
            (typeof ad != 'boolean' || ad === !0) && window.parent.mobileAPI.ads.showAd(callback)
        },
        stopped: function(ad, callback) {
            (typeof ad != 'boolean' || ad === !0) && window.parent.mobileAPI.ads.showAd(callback)
        },
        paused: function(ad, callback) {
            window.parent.mobileAPI.ads.showAd(callback)
        },
        resume: function(ad, callback) {
            window.parent.mobileAPI.ads.showAd(callback)
        },
        levelup: function(ad, callback) {
            window.parent.mobileAPI.ads.showAd(callback)
        },
        scored: function(score) {
            window.parent.mobileAPI.score += score
        }
    },
    getScore: function() {
        return window.parent.mobileAPI.score.score
    },
    setScore: function(score) {
        window.parent.mobileAPI.score = score
    }
};