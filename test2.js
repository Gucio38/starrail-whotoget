var _0x5dec43 = _0x403e;
(function(_0x293d08, _0x24cf88) {
    var _0x2a2425 = _0x403e,
        _0x443c84 = _0x293d08();
    while (!![]) {
        try {
            var _0x3a6e4b = -parseInt(_0x2a2425(0x8e)) / 0x1 + -parseInt(_0x2a2425(0xb7)) / 0x2 * (-parseInt(_0x2a2425(0xa5)) / 0x3) + -parseInt(_0x2a2425(0xbf)) / 0x4 + parseInt(_0x2a2425(0xa4)) / 0x5 + parseInt(_0x2a2425(0xd0)) / 0x6 + -parseInt(_0x2a2425(0xb5)) / 0x7 * (-parseInt(_0x2a2425(0xb0)) / 0x8) + parseInt(_0x2a2425(0xc1)) / 0x9 * (-parseInt(_0x2a2425(0xc3)) / 0xa);
            if (_0x3a6e4b === _0x24cf88) break;
            else _0x443c84['push'](_0x443c84['shift']());
        } catch (_0xae21a1) {
            _0x443c84['push'](_0x443c84['shift']());
        }
    }
}(_0x32b3, 0x85e9c));
var wait = 0x14,
    stop = !![],
    checkOST = !![],
    checkSSJ = !![],
    jaka = 0x0,
    zmiana = !![],
    SENZU_BLUE = _0x5dec43(0xbc),
    SENZU_GREEN = _0x5dec43(0x94),
    SENZU_YELLOW = _0x5dec43(0xb4),
    SENZU_RED = _0x5dec43(0xae),
    moveTimeout, gk = GAME[_0x5dec43(0xc4)],
    reload = ![],
    multifight = !![],
    CONF_BLUE_AMOUNT = Math['floor'](GAME[_0x5dec43(0x89)]() / 0x64 * 0.7),
    CONF_GREEN_AMOUNT = Math[_0x5dec43(0xa0)](GAME[_0x5dec43(0x89)]() / 0xfa0 * 0.7),
    CONF_YELLOW_AMOUNT = 0x4,
    CONF_SENZU = ![];
$(document)[_0x5dec43(0x81)](_0x5dec43(0x82), '1', function() {
    var _0x3c6f63 = _0x5dec43;
    return JQS['chm']['is'](_0x3c6f63(0xcc)) == ![] && $('#gh_game_helper\x20.gh_exp')['click'](), ![];
});
const $css = '#gh_game_helper\x20{min-width:100px;\x20padding:5px;\x20border:solid\x20gray\x201px;\x20background:rgba(22,\x2022,\x2093,\x200.81);\x20color:gold;\x20position:\x20fixed;\x20top:\x2040px;\x20right:\x205px;\x20z-index:5;}#gh_game_helper\x20.gh_button\x20{cursor:pointer;text-align:center;\x20border-bottom:solid\x20gray\x201px;}',
    $html = _0x5dec43(0xc5);
$('body')[_0x5dec43(0x84)](_0x5dec43(0xa2) + $html + _0x5dec43(0x86))[_0x5dec43(0x84)](_0x5dec43(0x9e) + $css + _0x5dec43(0xa7)), $(_0x5dec43(0x8a))['click'](() => {
    var _0x2ef201 = _0x5dec43;
    stop ? ($('#gh_game_helper\x20.gh_exp'), $(_0x2ef201(0xca))[_0x2ef201(0x8c)](_0x2ef201(0xb9))[_0x2ef201(0x9c)](_0x2ef201(0xab))[_0x2ef201(0xaa)]('On'), stop = ![], reloadint = setInterval(reload_map, 0x4e200)) : ($(_0x2ef201(0x8a)), $('.gh_exp\x20.gh_status')[_0x2ef201(0x8c)](_0x2ef201(0xab))['addClass'](_0x2ef201(0xb9))['html'](_0x2ef201(0xc9)), stop = !![], clearInterval(reloadint));
}), $(_0x5dec43(0x80))[_0x5dec43(0xa8)](() => {
    var _0x22774f = _0x5dec43;
    checkOST ? ($(_0x22774f(0x80)), $('.gh_subka\x20.gh_status')[_0x22774f(0x8c)](_0x22774f(0xab))[_0x22774f(0x9c)](_0x22774f(0xb9))['html']('Off'), checkOST = ![], $('#gh_game_helper\x20.gh_xost')[_0x22774f(0x93)]()) : ($(_0x22774f(0x80)), $(_0x22774f(0xa3))[_0x22774f(0x8c)](_0x22774f(0xb9))[_0x22774f(0x9c)]('green')[_0x22774f(0xaa)]('On'), checkOST = !![], $(_0x22774f(0x9a))[_0x22774f(0xaf)]());
}), $(_0x5dec43(0x9a))[_0x5dec43(0xa8)](() => {
    var _0x36ceeb = _0x5dec43;
    zmiana ? ($('#gh_game_helper\x20.gh_xost'), checkOST && $(_0x36ceeb(0x9f))[_0x36ceeb(0x9c)](_0x36ceeb(0xab))[_0x36ceeb(0xaa)](_0x36ceeb(0x8b)), jaka = 0x1, zmiana = ![]) : ($(_0x36ceeb(0x9a)), checkOST && $(_0x36ceeb(0x9f))[_0x36ceeb(0x9c)](_0x36ceeb(0xab))[_0x36ceeb(0xaa)](_0x36ceeb(0xb1)), jaka = 0x0, zmiana = !![]);
});

$(_0x5dec43(0x95))[_0x5dec43(0xa8)](() => {
    var _0x8d6739 = _0x5dec43;
    if (multifight) $(_0x8d6739(0x95)), $(_0x8d6739(0xcf))['removeClass'](_0x8d6739(0xab))[_0x8d6739(0x9c)](_0x8d6739(0xb9))[_0x8d6739(0xaa)](_0x8d6739(0xc9)), multifight = ![];
    else {
        $(_0x8d6739(0x95)), $(_0x8d6739(0xcf))[_0x8d6739(0x8c)](_0x8d6739(0xb9))[_0x8d6739(0x9c)](_0x8d6739(0xab))[_0x8d6739(0xaa)]('On');;
        multifight = !![];
    }
}), $(_0x5dec43(0x92))[_0x5dec43(0xa8)](() => {
    var _0x4d96f6 = _0x5dec43;
    if (checkSSJ) $(_0x4d96f6(0x92)), $('.gh_ssj\x20.gh_status')[_0x4d96f6(0x8c)]('green')[_0x4d96f6(0x9c)](_0x4d96f6(0xb9))['html'](_0x4d96f6(0xc9)), checkSSJ = ![];
    else {
        $('#gh_game_helper\x20.gh_ssj'), $('.gh_ssj\x20.gh_status')['removeClass'](_0x4d96f6(0xb9))[_0x4d96f6(0x9c)](_0x4d96f6(0xab))[_0x4d96f6(0xaa)]('On');;
        checkSSJ = !![];
    }
}), $('#gh_game_helper\x20.gh_red')[_0x5dec43(0xa8)](() => {
    var _0x4db6a8 = _0x5dec43;
    CONF_SENZU == ![] ? ($('#gh_game_helper\x20.gh_red'), $('.gh_red\x20.gh_status')['removeClass'](_0x4db6a8(0xb9))[_0x4db6a8(0x9c)](_0x4db6a8(0xab))[_0x4db6a8(0xaa)]('On'), CONF_SENZU = SENZU_RED, $(_0x4db6a8(0x85))[_0x4db6a8(0x93)](), $(_0x4db6a8(0x99))['hide']()) : ($('#gh_game_helper\x20.gh_red'), $('.gh_red\x20.gh_status')[_0x4db6a8(0x8c)](_0x4db6a8(0xab))[_0x4db6a8(0x9c)]('red')[_0x4db6a8(0xaa)](_0x4db6a8(0xc9)), CONF_SENZU = ![], $(_0x4db6a8(0x85))[_0x4db6a8(0xaf)](), $('#gh_game_helper\x20.gh_blue')[_0x4db6a8(0xaf)]());
}), $(_0x5dec43(0x99))[_0x5dec43(0xa8)](() => {
    var _0x48f002 = _0x5dec43;
    CONF_SENZU == ![] ? ($(_0x48f002(0x99)), $('.gh_blue\x20.gh_status')[_0x48f002(0x8c)](_0x48f002(0xb9))['addClass'](_0x48f002(0xab))['html']('On'), CONF_SENZU = SENZU_BLUE, $(_0x48f002(0x85))[_0x48f002(0x93)](), $(_0x48f002(0x8f))[_0x48f002(0x93)]()) : ($(_0x48f002(0x99)), $('.gh_blue\x20.gh_status')[_0x48f002(0x8c)](_0x48f002(0xab))[_0x48f002(0x9c)](_0x48f002(0xb9))['html'](_0x48f002(0xc9)), CONF_SENZU = ![], $(_0x48f002(0x85))['show'](), $(_0x48f002(0x8f))[_0x48f002(0xaf)]());
}), $(_0x5dec43(0x85))['click'](() => {
    var _0x5d20fa = _0x5dec43;
    CONF_SENZU == ![] ? ($(_0x5d20fa(0x85)), $(_0x5d20fa(0x7f))['removeClass'](_0x5d20fa(0xb9))[_0x5d20fa(0x9c)](_0x5d20fa(0xab))[_0x5d20fa(0xaa)]('On'), CONF_SENZU = SENZU_YELLOW, $(_0x5d20fa(0x99))[_0x5d20fa(0x93)](), $(_0x5d20fa(0x8f))[_0x5d20fa(0x93)]()) : ($(_0x5d20fa(0x85)), $(_0x5d20fa(0x7f))[_0x5d20fa(0x8c)](_0x5d20fa(0xab))[_0x5d20fa(0x9c)]('red')[_0x5d20fa(0xaa)](_0x5d20fa(0xc9)), CONF_SENZU = ![], $(_0x5d20fa(0x99))['show'](), $(_0x5d20fa(0x8f))[_0x5d20fa(0xaf)]());
});

function _0x403e(_0x143956, _0x3e1409) {
    var _0x32b308 = _0x32b3();
    return _0x403e = function(_0x403e29, _0xbd232f) {
        _0x403e29 = _0x403e29 - 0x7e;
        var _0x48dfa2 = _0x32b308[_0x403e29];
        return _0x48dfa2;
    }, _0x403e(_0x143956, _0x3e1409);
}

function check() {
    var _0x326f39 = _0x5dec43;
    if (GAME[_0x326f39(0xa6)]['pr'] <= min_pa()) return useSenzu(), !![];
    else {
        if (checkOST && $(_0x326f39(0x90))[_0x326f39(0xac)](_0x326f39(0xb3)) === _0x326f39(0x91)) return GAME[_0x326f39(0xcd)][_0x326f39(0xa1)]('ga', {
            'a': 0xc,
            'type': 0xe,
            'iid': GAME[_0x326f39(0xa9)][_0x326f39(0xd3)][jaka]['id'],
            'page': GAME[_0x326f39(0x87)],
            'am': 0x1
        }), !![];
        else {
            if (checkOST && $(_0x326f39(0xbd))[_0x326f39(0x7e)]() <= _0x326f39(0xb2)) return !![];
            else {
                if (checkSSJ && GAME[_0x326f39(0xa9)][_0x326f39(0xb8)] && $(_0x326f39(0x96))['css'](_0x326f39(0xb3)) === _0x326f39(0x91)) return GAME['socket'][_0x326f39(0xa1)]('ga', {
                    'a': 0x12,
                    'type': 0x5,
                    'tech_id': GAME[_0x326f39(0xa9)][_0x326f39(0xb8)][0x0]
                }), !![];
                else {
                    if ($(_0x326f39(0xc2))[_0x326f39(0x7e)]() == _0x326f39(0xce)) return GAME['socket']['emit']('ga', {
                        'a': 0x12,
                        'type': 0x6
                    }), !![];
                }
            }
        }
    }
    return ![];
}
GAME[_0x5dec43(0xc6)] = _0x4fdeb7 => GAME['socket'][_0x5dec43(0xa1)]('ga', _0x4fdeb7);

function min_pa() {
    var _0x138ea3 = _0x5dec43;
    if (GAME['char_data']['doubler_rate']) {
        var _0x526e26 = GAME[_0x138ea3(0xa6)][_0x138ea3(0x8d)],
            _0x2bbace = _0x526e26 * 0x3c;
        return _0x2bbace;
    } else {
        var _0x2bbace = 0xc8;
        return _0x2bbace;
    }
}

function action() {
    var _0x2c37d0 = _0x5dec43;
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
    var _0x50dfc4 = _0x5dec43;
    MF() > 0x5 && GAME['field_mf'] < 0x2 || MF() > 0x5 && GAME[_0x50dfc4(0xad)] < 0x3 && GAME['field_mobs'][0x0][_0x50dfc4(0xd1)][0x3] || MF() > 0x5 && GAME[_0x50dfc4(0xad)] < 0x4 && GAME[_0x50dfc4(0xd4)][0x0][_0x50dfc4(0xd1)][0x4] || MF() > 0x5 && GAME[_0x50dfc4(0xad)] < 0x5 && GAME[_0x50dfc4(0xd4)][0x0][_0x50dfc4(0xd1)][0x5] &&  !multifight ? GAME[_0x50dfc4(0xc6)]({
        'a': 0x7,
        'order': 0x2,
        'quick': 0x1,
        'fo': GAME[_0x50dfc4(0xc0)]['ma']
    }) : (reload && (setTimeout(() => {
        var _0x398147 = _0x50dfc4;
        GAME['maploaded'] = ![], GAME[_0x398147(0x83)]();
    }, 0x12c), reload = ![]), GAME[_0x50dfc4(0xc6)]({
        'a': 0xd,
        'mob_num': 0x0,
        'fo': GAME['map_options']['ma']
    })), action();
}

function reload_map() {
    reload = !![];
}

function MF() {
    var _0x3dd64b = _0x5dec43;
    if (r = 0x0) return ![];
    r = 0x0;
    for (i = 0x0; i < GAME[_0x3dd64b(0xc0)]['ma']['length'] - 0x1; i++) {
        GAME[_0x3dd64b(0xc0)]['ma'][i] === 0x1 && (r += parseInt(GAME[_0x3dd64b(0xd4)][0x0][_0x3dd64b(0xd1)][i]));
    }
    return r;
}

function go() {
    var _0x19a508 = _0x5dec43;
    GAME[_0x19a508(0xc6)]({
        'a': 0x1bc,
        'max': GAME['spawner'][0x0],
        'ignore': GAME[_0x19a508(0x88)][0x1]
    }), action();
}

function getSenzu(_0x231616) {
    var _0x5a8b1e = _0x5dec43;
    switch (_0x231616) {
        case SENZU_BLUE:
            return GAME[_0x5a8b1e(0xa9)]['senzus'][_0x5a8b1e(0x97)](_0x492087 => _0x492087[_0x5a8b1e(0xb6)] === 0x4dc);
        case SENZU_GREEN:
            return GAME[_0x5a8b1e(0xa9)]['senzus'][_0x5a8b1e(0x97)](_0xb70ca8 => _0xb70ca8[_0x5a8b1e(0xb6)] === 0x4da);
        case SENZU_YELLOW:
            return GAME[_0x5a8b1e(0xa9)][_0x5a8b1e(0xba)]['find'](_0x197f80 => _0x197f80[_0x5a8b1e(0xb6)] === 0x4ec);
        case SENZU_RED:
            return GAME[_0x5a8b1e(0xa9)][_0x5a8b1e(0xba)][_0x5a8b1e(0x97)](_0x389e97 => _0x389e97[_0x5a8b1e(0xb6)] === 0x4db);
    }
}

function useSenzu() {
    var _0x196512 = _0x5dec43;
    if (stop) return;
    const _0x4abf88 = getSenzu(SENZU_BLUE),
        _0x2698cf = getSenzu(SENZU_GREEN),
        _0xe03859 = getSenzu(SENZU_YELLOW),
        _0x3fe67e = getSenzu(SENZU_RED);
    switch (CONF_SENZU) {
        case SENZU_BLUE:
            useBlue(Math[_0x196512(0x9d)](CONF_BLUE_AMOUNT, _0x4abf88[_0x196512(0xc8)]));
            break;
        case SENZU_GREEN:
            useGreen(Math[_0x196512(0x9d)](CONF_GREEN_AMOUNT, _0x2698cf[_0x196512(0xc8)]));
            break;
        case SENZU_YELLOW:
            useYellow(Math[_0x196512(0x9d)](CONF_YELLOW_AMOUNT, _0xe03859[_0x196512(0xc8)]));
            break;
        case SENZU_RED:
            useRed();
            break;
        default:
            if (_0x4abf88 && _0x4abf88[_0x196512(0xc8)] > CONF_BLUE_AMOUNT * 0x14) useBlue(Math[_0x196512(0x9d)](CONF_BLUE_AMOUNT, _0x4abf88[_0x196512(0xc8)]));
            else {
                if (_0x2698cf && _0x2698cf[_0x196512(0xc8)] > CONF_GREEN_AMOUNT * 0x5) useGreen(Math[_0x196512(0x9d)](CONF_GREEN_AMOUNT, _0x2698cf['stack']));
                else {
                    if (_0x3fe67e && _0x3fe67e[_0x196512(0xc8)] > 0x0) useRed();
                }
            }
    }
}

function useBlue(_0x4b559e = CONF_BLUE_AMOUNT) {
    var _0x28a422 = _0x5dec43;
    const _0x45ff30 = getSenzu(SENZU_BLUE);
    if (!_0x45ff30) return;
    GAME['emitOrder']({
        'a': 0xc,
        'type': 0xe,
        'iid': _0x45ff30['id'],
        'page': GAME[_0x28a422(0x87)],
        'am': _0x4b559e
    });
}
action();

function useGreen(_0x42a246 = CONF_GREEN_AMOUNT) {
    var _0x752d36 = _0x5dec43;
    const _0x30a5ee = getSenzu(SENZU_GREEN);
    if (!_0x30a5ee) return;
    GAME[_0x752d36(0xc6)]({
        'a': 0xc,
        'type': 0xe,
        'iid': _0x30a5ee['id'],
        'page': GAME[_0x752d36(0x87)],
        'am': _0x42a246
    });
}

function _0x32b3() {
    var _0x5dfebd = ['spawner', 'getCharMaxPr', '#gh_game_helper\x20.gh_exp', 'x20', 'removeClass', 'doubler_rate', '384480ObejLE', '#gh_game_helper\x20.gh_red', '#doubler_bar', 'none', '#gh_game_helper\x20.gh_ssj', 'hide', 'SENZU_GREEN', '#gh_game_helper\x20.gh_walka', '#ssj_bar', 'find', 'includes', '#gh_game_helper\x20.gh_blue', '#gh_game_helper\x20.gh_xost', 'dsafvxa', 'addClass', 'min', '<style>', '.gh_xost\x20.gh_status', 'floor', 'emit', '<div\x20id=\x27gh_game_helper\x27>', '.gh_subka\x20.gh_status', '2342145pMPEjX', '12Cinsqq', 'char_data', '</style>', 'click', 'quick_opts', 'html', 'green', 'css', 'field_mf', 'SENZU_RED', 'show', '976fOATjB', 'Ost', '00:00:04', 'display', 'SENZU_YELLOW', '721wTogMV', 'item_id', '374838IUPXmj', 'ssj', 'red', 'senzus', 'href', 'SENZU_BLUE', '#doubler_status', 'https://kosmiczni.pl/rules', '2260436WfBgHD', 'map_options', '99ZSyStO', '#ssj_status', '699790pBHRhf', 'pid', '<div\x20class=\x27gh_button\x20gh_exp\x27>Resp\x20<b\x20class=\x27gh_status\x20red\x27>Off</b></div><div\x20class=\x27gh_button\x20gh_subka\x27>Subka\x20<b\x20class=\x27gh_status\x20green\x27>On</b></div><div\x20class=\x27gh_button\x20gh_xost\x27>Jaka\x20<b\x20class=\x27gh_status\x20green\x27>Ost</b></div><div\x20class=\x27gh_button\x20gh_walka\x27>Multi\x20<b\x20class=\x27gh_status\x20green\x27>On</b></div><div\x20class=\x27gh_button\x20gh_ssj\x27>SSJ\x20<b\x20class=\x27gh_status\x20green\x27>On</b></div><div\x20class=\x27gh_button\x20gh_blue\x27>Blue\x20<b\x20class=\x27gh_status\x20red\x27>Off</b></div><div\x20class=\x27gh_button\x20gh_yellow\x27>Yellow\x20<b\x20class=\x27gh_status\x20red\x27>Off</b></div><div\x20class=\x27gh_button\x20gh_red\x27>Red\x20<b\x20class=\x27gh_status\x20red\x27>Off</b></div>', 'emitOrder', 'clear', 'stack', 'Off', '.gh_exp\x20.gh_status', 'disconnect', ':focus', 'socket', '--:--:--', '.gh_walka\x20.gh_status', '6223170eDrbSQ', 'ranks', 'bbfdbtrb', 'sub', 'field_mobs', 'text', '.gh_yellow\x20.gh_status', '#gh_game_helper\x20.gh_subka', 'bind', 'keydown', 'prepareMap', 'append', '#gh_game_helper\x20.gh_yellow', '</div>', 'ekw_page'];
    _0x32b3 = function() {
        return _0x5dfebd;
    };
    return _0x32b3();
}

function useYellow(_0x2af0cd = CONF_YELLOW_AMOUNT) {
    var _0x25d46c = _0x5dec43;
    const _0x5ab1a2 = getSenzu(SENZU_YELLOW);
    if (!_0x5ab1a2) return;
    GAME['emitOrder']({
        'a': 0xc,
        'type': 0xe,
        'iid': _0x5ab1a2['id'],
        'page': GAME[_0x25d46c(0x87)],
        'am': _0x2af0cd
    });
}

function useRed() {
    var _0x3871b4 = _0x5dec43;
    const _0x238a57 = getSenzu(SENZU_RED);
    if (!_0x238a57) return;
    GAME['emitOrder']({
        'a': 0xc,
        'type': 0xe,
        'iid': _0x238a57['id'],
        'page': GAME[_0x3871b4(0x87)],
        'am': 0x1
    });
}