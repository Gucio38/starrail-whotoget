var _0x4bf7ad = _0xba17;
(function(_0x1b3168, _0x40fcd6) {
    var _0x436078 = _0xba17,
        _0xe7f0cd = _0x1b3168();
    while (!![]) {
        try {
            var _0x47142c = parseInt(_0x436078(0x21b)) / 0x1 + parseInt(_0x436078(0x1f5)) / 0x2 + -parseInt(_0x436078(0x1da)) / 0x3 * (parseInt(_0x436078(0x1e8)) / 0x4) + parseInt(_0x436078(0x1fb)) / 0x5 + -parseInt(_0x436078(0x1f7)) / 0x6 * (-parseInt(_0x436078(0x1ff)) / 0x7) + -parseInt(_0x436078(0x215)) / 0x8 + parseInt(_0x436078(0x1eb)) / 0x9 * (-parseInt(_0x436078(0x20b)) / 0xa);
            if (_0x47142c === _0x40fcd6) break;
            else _0xe7f0cd['push'](_0xe7f0cd['shift']());
        } catch (_0x561168) {
            _0xe7f0cd['push'](_0xe7f0cd['shift']());
        }
    }
}(_0x4ec7, 0x9b231));
var wait = 0x14,
    stop = !![],
    checkOST = !![],
    checkSSJ = !![],
    jaka = 0x0,
    zmiana = !![],
    SENZU_BLUE = 'SENZU_BLUE',
    SENZU_GREEN = 'SENZU_GREEN',
    SENZU_YELLOW = _0x4bf7ad(0x205),
    SENZU_RED = _0x4bf7ad(0x1de),
    moveTimeout, gk = GAME[_0x4bf7ad(0x1f1)],
    multifight = !![],
    CONF_BLUE_AMOUNT = Math[_0x4bf7ad(0x1e5)](GAME[_0x4bf7ad(0x1f8)]() / 0x64 * 0.7),
    CONF_GREEN_AMOUNT = Math[_0x4bf7ad(0x1e5)](GAME[_0x4bf7ad(0x1f8)]() / 0xfa0 * 0.7),
    CONF_YELLOW_AMOUNT = 0x4,
    CONF_SENZU = ![];
$(document)[_0x4bf7ad(0x20f)](_0x4bf7ad(0x213), '1', function() {
    var _0x29e31b = _0x4bf7ad;
    return JQS[_0x29e31b(0x1f9)]['is'](':focus') == ![] && $(_0x29e31b(0x208))[_0x29e31b(0x22a)](), ![];
});
const $css = _0x4bf7ad(0x1e3),
    $html = _0x4bf7ad(0x20d);
$(_0x4bf7ad(0x21a))[_0x4bf7ad(0x20c)]('<div\x20id=\x27gh_game_helper\x27>' + $html + _0x4bf7ad(0x1e1))[_0x4bf7ad(0x20c)](_0x4bf7ad(0x1ea) + $css + _0x4bf7ad(0x21c)), $('#gh_game_helper\x20.gh_exp')['click'](() => {
    var _0xa3f745 = _0x4bf7ad;
    stop ? ($(_0xa3f745(0x208)), $(_0xa3f745(0x1f0))['removeClass'](_0xa3f745(0x1f3))['addClass'](_0xa3f745(0x218))[_0xa3f745(0x209)]('On'), stop = ![], reloadint = setInterval(reload_map, 0x4e200)) : ($(_0xa3f745(0x208)), $('.gh_exp\x20.gh_status')[_0xa3f745(0x228)]('green')[_0xa3f745(0x227)](_0xa3f745(0x1f3))[_0xa3f745(0x209)](_0xa3f745(0x1d7)), stop = !![], clearInterval(reloadint));
}), $(_0x4bf7ad(0x211))['click'](() => {
    var _0x115b1b = _0x4bf7ad;
    checkOST ? ($(_0x115b1b(0x211)), $(_0x115b1b(0x1ee))[_0x115b1b(0x228)](_0x115b1b(0x218))['addClass']('red')['html'](_0x115b1b(0x1d7)), checkOST = ![], $(_0x115b1b(0x203))[_0x115b1b(0x1fd)]()) : ($(_0x115b1b(0x211)), $(_0x115b1b(0x1ee))[_0x115b1b(0x228)](_0x115b1b(0x1f3))[_0x115b1b(0x227)]('green')[_0x115b1b(0x209)]('On'), checkOST = !![], $('#gh_game_helper\x20.gh_xost')['show']());
}), $('#gh_game_helper\x20.gh_xost')[_0x4bf7ad(0x22a)](() => {
    var _0x453233 = _0x4bf7ad;
    zmiana ? ($('#gh_game_helper\x20.gh_xost'), checkOST && $(_0x453233(0x1ef))['addClass'](_0x453233(0x218))['html'](_0x453233(0x20a)), jaka = 0x1, zmiana = ![]) : ($(_0x453233(0x203)), checkOST && $(_0x453233(0x1ef))[_0x453233(0x227)](_0x453233(0x218))[_0x453233(0x209)](_0x453233(0x21d)), jaka = 0x0, zmiana = !![]);
}), $(_0x4bf7ad(0x219))[_0x4bf7ad(0x22a)](() => {
    var _0x169720 = _0x4bf7ad;
    if (multifight) $(_0x169720(0x219)), $(_0x169720(0x210))[_0x169720(0x228)](_0x169720(0x218))[_0x169720(0x227)]('red')[_0x169720(0x209)](_0x169720(0x1d7)), multifight = ![];
    else {
        $(_0x169720(0x219)), $(_0x169720(0x210))['removeClass']('red')['addClass'](_0x169720(0x218))[_0x169720(0x209)]('On');;
        multifight = !![];
    }
}), $(_0x4bf7ad(0x1f4))[_0x4bf7ad(0x22a)](() => {
    var _0x5c0d77 = _0x4bf7ad;
    if (checkSSJ) $(_0x5c0d77(0x1f4)), $(_0x5c0d77(0x204))[_0x5c0d77(0x228)](_0x5c0d77(0x218))[_0x5c0d77(0x227)](_0x5c0d77(0x1f3))[_0x5c0d77(0x209)](_0x5c0d77(0x1d7)), checkSSJ = ![];
    else {
        $(_0x5c0d77(0x1f4)), $(_0x5c0d77(0x204))[_0x5c0d77(0x228)](_0x5c0d77(0x1f3))['addClass'](_0x5c0d77(0x218))['html']('On');;
        checkSSJ = !![];
    }
}), $('#gh_game_helper\x20.gh_red')[_0x4bf7ad(0x22a)](() => {
    var _0x261a69 = _0x4bf7ad;
    CONF_SENZU == ![] ? ($('#gh_game_helper\x20.gh_red'), $(_0x261a69(0x1e2))[_0x261a69(0x228)]('red')['addClass']('green')[_0x261a69(0x209)]('On'), CONF_SENZU = SENZU_RED, $(_0x261a69(0x220))[_0x261a69(0x1fd)](), $(_0x261a69(0x214))['hide']()) : ($(_0x261a69(0x21f)), $(_0x261a69(0x1e2))[_0x261a69(0x228)](_0x261a69(0x218))[_0x261a69(0x227)](_0x261a69(0x1f3))[_0x261a69(0x209)]('Off'), CONF_SENZU = ![], $(_0x261a69(0x220))[_0x261a69(0x1ec)](), $(_0x261a69(0x214))[_0x261a69(0x1ec)]());
}), $(_0x4bf7ad(0x214))['click'](() => {
    var _0x131b78 = _0x4bf7ad;
    CONF_SENZU == ![] ? ($(_0x131b78(0x214)), $('.gh_blue\x20.gh_status')[_0x131b78(0x228)](_0x131b78(0x1f3))[_0x131b78(0x227)]('green')[_0x131b78(0x209)]('On'), CONF_SENZU = SENZU_BLUE, $(_0x131b78(0x220))['hide'](), $('#gh_game_helper\x20.gh_red')['hide']()) : ($(_0x131b78(0x214)), $(_0x131b78(0x1e9))[_0x131b78(0x228)]('green')['addClass'](_0x131b78(0x1f3))[_0x131b78(0x209)](_0x131b78(0x1d7)), CONF_SENZU = ![], $(_0x131b78(0x220))[_0x131b78(0x1ec)](), $(_0x131b78(0x21f))[_0x131b78(0x1ec)]());
}), $(_0x4bf7ad(0x220))['click'](() => {
    var _0x2855eb = _0x4bf7ad;
    CONF_SENZU == ![] ? ($('#gh_game_helper\x20.gh_yellow'), $(_0x2855eb(0x221))[_0x2855eb(0x228)](_0x2855eb(0x1f3))[_0x2855eb(0x227)](_0x2855eb(0x218))[_0x2855eb(0x209)]('On'), CONF_SENZU = SENZU_YELLOW, $('#gh_game_helper\x20.gh_blue')[_0x2855eb(0x1fd)](), $(_0x2855eb(0x21f))[_0x2855eb(0x1fd)]()) : ($(_0x2855eb(0x220)), $('.gh_yellow\x20.gh_status')[_0x2855eb(0x228)](_0x2855eb(0x218))[_0x2855eb(0x227)](_0x2855eb(0x1f3))[_0x2855eb(0x209)](_0x2855eb(0x1d7)), CONF_SENZU = ![], $(_0x2855eb(0x214))['show'](), $(_0x2855eb(0x21f))[_0x2855eb(0x1ec)]());
});

function check() {
    var _0x32a32c = _0x4bf7ad;
 if (GAME['char_data']['pr'] <= min_pa()) return useSenzu(), !![];
    else {
        if (checkOST && $('#doubler_bar')['css'](_0x32a32c(0x225)) === _0x32a32c(0x22b)) return GAME[_0x32a32c(0x1db)][_0x32a32c(0x1dd)]('ga', {
            'a': 0xc,
            'type': 0xe,
            'iid': GAME[_0x32a32c(0x206)][_0x32a32c(0x226)][jaka]['id'],
            'page': GAME[_0x32a32c(0x212)],
            'am': 0x1
        }), !![];
        else {
            if (checkOST && $(_0x32a32c(0x1e4))[_0x32a32c(0x1fe)]() <= '00:00:04') return !![];
            else {
                if (checkSSJ && GAME[_0x32a32c(0x206)][_0x32a32c(0x1dc)] && $(_0x32a32c(0x201))['css']('display') === _0x32a32c(0x22b) && GG[_0x32a32c(0x1f2)]['includes'](GG['bbfdbtrb'])) return GAME['socket'][_0x32a32c(0x1dd)]('ga', {
                    'a': 0x12,
                    'type': 0x5,
                    'tech_id': GAME[_0x32a32c(0x206)]['ssj'][0x0]
                }), !![];
                else {
                    if ($(_0x32a32c(0x1f6))[_0x32a32c(0x1fe)]() == _0x32a32c(0x1e6)) return GAME[_0x32a32c(0x1db)][_0x32a32c(0x1dd)]('ga', {
                        'a': 0x12,
                        'type': 0x6
                    }), !![];
                }
            }
        }
    }
    return ![];
}

function _0x4ec7() {
    var _0x114412 = ['field_mobs', 'length', 'field_mf', 'display', 'sub', 'addClass', 'removeClass', 'disconnect', 'click', 'none', 'includes', 'Off', 'char_data', 'bbfdbtrb', '6zLETWx', 'socket', 'ssj', 'emit', 'SENZU_RED', 'senzus', 'ranks', '</div>', '.gh_red\x20.gh_status', '#gh_game_helper\x20{min-width:100px;\x20padding:5px;\x20border:solid\x20gray\x201px;\x20background:rgba(22,\x2022,\x2093,\x200.81);\x20color:gold;\x20position:\x20fixed;\x20top:\x2040px;\x20right:\x205px;\x20z-index:5;}#gh_game_helper\x20.gh_button\x20{cursor:pointer;text-align:center;\x20border-bottom:solid\x20gray\x201px;}', '#doubler_status', 'floor', '--:--:--', 'href', '2326084USXAei', '.gh_blue\x20.gh_status', '<style>', '323505OVtdbK', 'show', 'stack', '.gh_subka\x20.gh_status', '.gh_xost\x20.gh_status', '.gh_exp\x20.gh_status', 'pid', 'dsafvxa', 'red', '#gh_game_helper\x20.gh_ssj', '1702772GHSJNh', '#ssj_status', '35286iBYyHY', 'getCharMaxPr', 'chm', 'doubler_rate', '1093750UlmpMD', 'map_options', 'hide', 'text', '189kEDuIl', 'emitOrder', '#ssj_bar', 'prepareMap', '#gh_game_helper\x20.gh_xost', '.gh_ssj\x20.gh_status', 'SENZU_YELLOW', 'quick_opts', 'find', '#gh_game_helper\x20.gh_exp', 'html', 'x20', '20sKTegA', 'append', '<div\x20class=\x27gh_button\x20gh_exp\x27>Resp\x20<b\x20class=\x27gh_status\x20red\x27>Off</b></div><div\x20class=\x27gh_button\x20gh_subka\x27>Subka\x20<b\x20class=\x27gh_status\x20green\x27>On</b></div><div\x20class=\x27gh_button\x20gh_xost\x27>Jaka\x20<b\x20class=\x27gh_status\x20green\x27>Ost</b></div><div\x20class=\x27gh_button\x20gh_walka\x27>Multi\x20<b\x20class=\x27gh_status\x20green\x27>On</b></div><div\x20class=\x27gh_button\x20gh_ssj\x27>SSJ\x20<b\x20class=\x27gh_status\x20green\x27>On</b></div><div\x20class=\x27gh_button\x20gh_blue\x27>Blue\x20<b\x20class=\x27gh_status\x20red\x27>Off</b></div><div\x20class=\x27gh_button\x20gh_yellow\x27>Yellow\x20<b\x20class=\x27gh_status\x20red\x27>Off</b></div><div\x20class=\x27gh_button\x20gh_red\x27>Red\x20<b\x20class=\x27gh_status\x20red\x27>Off</b></div>', 'min', 'bind', '.gh_walka\x20.gh_status', '#gh_game_helper\x20.gh_subka', 'ekw_page', 'keydown', '#gh_game_helper\x20.gh_blue', '3968440FAgYeM', 'spawner', 'maploaded', 'green', '#gh_game_helper\x20.gh_walka', 'body', '1137505FLXKpl', '</style>', 'Ost', 'item_id', '#gh_game_helper\x20.gh_red', '#gh_game_helper\x20.gh_yellow', '.gh_yellow\x20.gh_status'];
    _0x4ec7 = function() {
        return _0x114412;
    };
    return _0x4ec7();
}

function _0xba17(_0x47d370, _0x14ad78) {
    var _0x4ec746 = _0x4ec7();
    return _0xba17 = function(_0xba1714, _0x1fc6f5) {
        _0xba1714 = _0xba1714 - 0x1d6;
        var _0x6f6502 = _0x4ec746[_0xba1714];
        return _0x6f6502;
    }, _0xba17(_0x47d370, _0x14ad78);
}
GAME[_0x4bf7ad(0x200)] = _0xa9d6b8 => GAME[_0x4bf7ad(0x1db)][_0x4bf7ad(0x1dd)]('ga', _0xa9d6b8);

function min_pa() {
    var _0x2482cb = _0x4bf7ad;
    if (GAME[_0x2482cb(0x1d8)][_0x2482cb(0x1fa)]) {
        var _0x5a99b3 = GAME['char_data'][_0x2482cb(0x1fa)],
            _0x3ac072 = _0x5a99b3 * 0x3c;
        return _0x3ac072;
    } else {
        var _0x3ac072 = 0xc8;
        return _0x3ac072;
    }
}

function action() {
    var _0x406a1f = _0x4bf7ad;
    !stop ? !check() ? MF() > 0x5 ? setTimeout(() => {
        fight();
    }, wait) : setTimeout(() => {
        go();
    }, wait) : setTimeout(() => {
        action();
    }, 0xbb8) : setTimeout(() => {
        action();
    }, 0x1f4);
}

function fight() {
    var _0x1e9654 = _0x4bf7ad;
    MF() > 0x5 && GAME[_0x1e9654(0x224)] < 0x2 || MF() > 0x5 && GAME['field_mf'] < 0x3 && GAME['field_mobs'][0x0][_0x1e9654(0x1e0)][0x3] || MF() > 0x5 && GAME['field_mf'] < 0x4 && GAME[_0x1e9654(0x222)][0x0][_0x1e9654(0x1e0)][0x4] || MF() > 0x5 && GAME[_0x1e9654(0x224)] < 0x5 && GAME['field_mobs'][0x0][_0x1e9654(0x1e0)][0x5] || !multifight ? GAME[_0x1e9654(0x200)]({
        'a': 0x7,
        'order': 0x2,
        'quick': 0x1,
        'fo': GAME[_0x1e9654(0x1fc)]['ma']
    }) : (reload && (setTimeout(() => {
        var _0x41b3c3 = _0x1e9654;
        GAME[_0x41b3c3(0x217)] = ![], GAME[_0x41b3c3(0x202)]();
    }, 0x12c), reload = ![]), GAME[_0x1e9654(0x200)]({
        'a': 0xd,
        'mob_num': 0x0,
        'fo': GAME[_0x1e9654(0x1fc)]['ma']
    })), action();
}

function reload_map() {
    reload = !![];
}

function MF() {
    var _0x1a4ada = _0x4bf7ad;
    if (r = 0x0) return ![];
    r = 0x0;
    for (i = 0x0; i < GAME[_0x1a4ada(0x1fc)]['ma'][_0x1a4ada(0x223)] - 0x1; i++) {
        GAME['map_options']['ma'][i] === 0x1 && (r += parseInt(GAME['field_mobs'][0x0][_0x1a4ada(0x1e0)][i]));
    }
    return r;
}

function go() {
    var _0x10b0d2 = _0x4bf7ad;
    GAME['emitOrder']({
        'a': 0x1bc,
        'max': GAME[_0x10b0d2(0x216)][0x0],
        'ignore': GAME[_0x10b0d2(0x216)][0x1]
    }), action();
}

function getSenzu(_0x5514b3) {
    var _0x4a0c49 = _0x4bf7ad;
    switch (_0x5514b3) {
        case SENZU_BLUE:
            return GAME['quick_opts']['senzus'][_0x4a0c49(0x207)](_0x315e2d => _0x315e2d[_0x4a0c49(0x21e)] === 0x4dc);
        case SENZU_GREEN:
            return GAME[_0x4a0c49(0x206)]['senzus'][_0x4a0c49(0x207)](_0x3fda98 => _0x3fda98[_0x4a0c49(0x21e)] === 0x4da);
        case SENZU_YELLOW:
            return GAME['quick_opts']['senzus'][_0x4a0c49(0x207)](_0x151b70 => _0x151b70[_0x4a0c49(0x21e)] === 0x4ec);
        case SENZU_RED:
            return GAME['quick_opts'][_0x4a0c49(0x1df)][_0x4a0c49(0x207)](_0x2724e3 => _0x2724e3[_0x4a0c49(0x21e)] === 0x4db);
    }
}

function useSenzu() {
    var _0x15a09d = _0x4bf7ad;
    if (stop) return;
    const _0x1138d4 = getSenzu(SENZU_BLUE),
        _0xa023dc = getSenzu(SENZU_GREEN),
        _0x878d2e = getSenzu(SENZU_YELLOW),
        _0x26d9d7 = getSenzu(SENZU_RED);
    switch (CONF_SENZU) {
        case SENZU_BLUE:
            useBlue(Math[_0x15a09d(0x20e)](CONF_BLUE_AMOUNT, _0x1138d4['stack']));
            break;
        case SENZU_GREEN:
            useGreen(Math[_0x15a09d(0x20e)](CONF_GREEN_AMOUNT, _0xa023dc['stack']));
            break;
        case SENZU_YELLOW:
            useYellow(Math[_0x15a09d(0x20e)](CONF_YELLOW_AMOUNT, _0x878d2e[_0x15a09d(0x1ed)]));
            break;
        case SENZU_RED:
            useRed();
            break;
        default:
            if (_0x1138d4 && _0x1138d4[_0x15a09d(0x1ed)] > CONF_BLUE_AMOUNT * 0x14) useBlue(Math[_0x15a09d(0x20e)](CONF_BLUE_AMOUNT, _0x1138d4[_0x15a09d(0x1ed)]));
            else {
                if (_0xa023dc && _0xa023dc[_0x15a09d(0x1ed)] > CONF_GREEN_AMOUNT * 0x5) useGreen(Math[_0x15a09d(0x20e)](CONF_GREEN_AMOUNT, _0xa023dc[_0x15a09d(0x1ed)]));
                else {
                    if (_0x26d9d7 && _0x26d9d7[_0x15a09d(0x1ed)] > 0x0) useRed();
                }
            }
    }
}

function useBlue(_0x38d974 = CONF_BLUE_AMOUNT) {
    const _0x1d61f1 = getSenzu(SENZU_BLUE);
    if (!_0x1d61f1) return;
    GAME['emitOrder']({
        'a': 0xc,
        'type': 0xe,
        'iid': _0x1d61f1['id'],
        'page': GAME['ekw_page'],
        'am': _0x38d974
    });
}
action();

function useGreen(_0x4d59b3 = CONF_GREEN_AMOUNT) {
    var _0x4b7d84 = _0x4bf7ad;
    const _0x5797ad = getSenzu(SENZU_GREEN);
    if (!_0x5797ad) return;
    GAME['emitOrder']({
        'a': 0xc,
        'type': 0xe,
        'iid': _0x5797ad['id'],
        'page': GAME[_0x4b7d84(0x212)],
        'am': _0x4d59b3
    });
}



function useYellow(_0x3a4f06 = CONF_YELLOW_AMOUNT) {
    var _0x1c4709 = _0x4bf7ad;
    const _0x5d65fa = getSenzu(SENZU_YELLOW);
    if (!_0x5d65fa) return;
    GAME[_0x1c4709(0x200)]({
        'a': 0xc,
        'type': 0xe,
        'iid': _0x5d65fa['id'],
        'page': GAME[_0x1c4709(0x212)],
        'am': _0x3a4f06
    });
}

function useRed() {
    var _0x5ec771 = _0x4bf7ad;
    const _0x48c028 = getSenzu(SENZU_RED);
    if (!_0x48c028) return;
    GAME[_0x5ec771(0x200)]({
        'a': 0xc,
        'type': 0xe,
        'iid': _0x48c028['id'],
        'page': GAME[_0x5ec771(0x212)],
        'am': 0x1
    });
}
