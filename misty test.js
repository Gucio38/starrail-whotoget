var _0x1b6a6b = _0x57a8;
(function (_0x139fec, _0x4918d3) {
  var _0x25b5c6 = _0x57a8,
    _0x1b02f1 = _0x139fec();
  while (!![]) {
    try {
      var _0x2ef4c6 = -parseInt(_0x25b5c6(0x1d4)) / 0x1 * (parseInt(_0x25b5c6(0x1cd)) / 0x2) + parseInt(_0x25b5c6(0x1fa)) / 0x3 + -parseInt(_0x25b5c6(0x1f5)) / 0x4 * (-parseInt(_0x25b5c6(0x1ba)) / 0x5) + -parseInt(_0x25b5c6(0x1f1)) / 0x6 * (parseInt(_0x25b5c6(0x1c8)) / 0x7) + -parseInt(_0x25b5c6(0x1b8)) / 0x8 * (-parseInt(_0x25b5c6(0x1fc)) / 0x9) + parseInt(_0x25b5c6(0x1ea)) / 0xa * (-parseInt(_0x25b5c6(0x1d2)) / 0xb) + -parseInt(_0x25b5c6(0x1f3)) / 0xc;
      if (_0x2ef4c6 === _0x4918d3) break;
      else _0x1b02f1['push'](_0x1b02f1['shift']());
    } catch (_0x217c32) {
      _0x1b02f1['push'](_0x1b02f1['shift']());
    }
  }
}(_0x132d, 0x2b630));
var wait = 0xa,
  stop = !![],
  checkOST = !![],
  checkSSJ = !![],
  jaka = 0x0,
  zmiana = !![],
  SENZU_BLUE = _0x1b6a6b(0x1d3),
  SENZU_GREEN = _0x1b6a6b(0x1c9),
  SENZU_YELLOW = _0x1b6a6b(0x1b6),
  SENZU_RED = _0x1b6a6b(0x1db),
  moveTimeout, gk = GAME[_0x1b6a6b(0x1c0)],
  GG, CONF_BLUE_AMOUNT = Math[_0x1b6a6b(0x1c6)](GAME[_0x1b6a6b(0x1e2)]() / 0x64 * 0.7),
  CONF_GREEN_AMOUNT = Math[_0x1b6a6b(0x1c6)](GAME[_0x1b6a6b(0x1e2)]() / 0xfa0 * 0.7),
  CONF_YELLOW_AMOUNT = 0x4,
  CONF_SENZU = ![];
$(document)['bind'](_0x1b6a6b(0x1d8), '1', function () {
  var _0x27482d = _0x1b6a6b;
  return JQS[_0x27482d(0x1d9)]['is'](_0x27482d(0x1cb)) == ![] && $(_0x27482d(0x1d7))[_0x27482d(0x1f2)](), ![];
});
const $css = _0x1b6a6b(0x1ee),
  $html = _0x1b6a6b(0x1c1);
$('body')[_0x1b6a6b(0x1e7)](_0x1b6a6b(0x1bc) + $html + _0x1b6a6b(0x1bf))[_0x1b6a6b(0x1e7)](_0x1b6a6b(0x1e6) + $css + _0x1b6a6b(0x1ec)), $(_0x1b6a6b(0x1d7))[_0x1b6a6b(0x1f2)](() => {
  var _0x2930e0 = _0x1b6a6b;
  stop ? ($(_0x2930e0(0x1d7)), $(_0x2930e0(0x1f8))[_0x2930e0(0x1c2)](_0x2930e0(0x1e5))[_0x2930e0(0x1c4)]('green')['html']('On'), stop = ![]) : ($('#gh_game_helper\x20.gh_exp'), $(_0x2930e0(0x1f8))[_0x2930e0(0x1c2)](_0x2930e0(0x1be))[_0x2930e0(0x1c4)](_0x2930e0(0x1e5))['html']('Off'), stop = !![]);
}), $(_0x1b6a6b(0x1c5))[_0x1b6a6b(0x1f2)](() => {
  var _0x429dc3 = _0x1b6a6b;
  if (checkOST) $(_0x429dc3(0x1c5)), $('.gh_subka\x20.gh_status')[_0x429dc3(0x1c2)](_0x429dc3(0x1be))[_0x429dc3(0x1c4)](_0x429dc3(0x1e5))[_0x429dc3(0x1cf)](_0x429dc3(0x1bd)), checkOST = ![];
  else {
    $(_0x429dc3(0x1c5)), $(_0x429dc3(0x1dc))[_0x429dc3(0x1c2)]('red')[_0x429dc3(0x1c4)](_0x429dc3(0x1be))['html']('On');;
    checkOST = !![];
  }
}), $(_0x1b6a6b(0x1b9))[_0x1b6a6b(0x1f2)](() => {
  var _0x10f7f0 = _0x1b6a6b;
  zmiana ? ($('#gh_game_helper\x20.gh_xost'), $('.gh_xost\x20.gh_status')[_0x10f7f0(0x1c4)](_0x10f7f0(0x1be))[_0x10f7f0(0x1cf)](_0x10f7f0(0x1b7)), jaka = 0x1, zmiana = ![]) : ($('#gh_game_helper\x20.gh_xost'), $(_0x10f7f0(0x1d6))['addClass'](_0x10f7f0(0x1be))[_0x10f7f0(0x1cf)]('Ost'), jaka = 0x0, zmiana = !![]);
});

function check() {
  var _0x15a047 = _0x1b6a6b;
  if (GAME['char_data']['pr'] <= min_pa()) return useSenzu(), !![];
  else {
    if (checkOST && $('#doubler_bar')[_0x15a047(0x1d5)](_0x15a047(0x1e4)) === _0x15a047(0x1f0)) return GAME['socket']['emit']('ga', {
      'a': 0xc,
      'type': 0xe,
      'iid': GAME['quick_opts']['sub'][jaka]['id'],
      'page': GAME[_0x15a047(0x1d1)],
      'am': 0x1
    }), !![];
    else {
      if (checkOST && $(_0x15a047(0x1da))[_0x15a047(0x1bb)]() <= '00:00:10') return setTimeout(() => {
        var _0x5ab53f = _0x15a047;
        GAME[_0x5ab53f(0x1ce)][_0x5ab53f(0x1eb)]('ga', {
          'a': 0xc,
          'type': 0xf
        });
      }, 0x9c4), !![];
      else {
        if (checkSSJ && GAME[_0x15a047(0x1d0)]['ssj'] && $('#ssj_bar')['css'](_0x15a047(0x1e4)) === 'none') return GAME[_0x15a047(0x1ce)][_0x15a047(0x1eb)]('ga', {
          'a': 0x12,
          'type': 0x5,
          'tech_id': GAME[_0x15a047(0x1d0)]['ssj'][0x0]
        }), !![];
        else {
          if ($(_0x15a047(0x1ed))[_0x15a047(0x1bb)]() == _0x15a047(0x1e8)) return GAME[_0x15a047(0x1ce)][_0x15a047(0x1eb)]('ga', {
            'a': 0x12,
            'type': 0x6
          }), !![];
        }
      }
    }
  }
  return ![];
}
GAME[_0x1b6a6b(0x1dd)] = _0x27ef86 => GAME[_0x1b6a6b(0x1ce)][_0x1b6a6b(0x1eb)]('ga', _0x27ef86);

function min_pa() {
  var _0x5874b2 = _0x1b6a6b;
  if (GAME[_0x5874b2(0x1de)][_0x5874b2(0x1e9)]) {
    var _0x3a6232 = GAME[_0x5874b2(0x1de)][_0x5874b2(0x1e9)],
      _0xf7ecbe = _0x3a6232 * 0x3c;
    return _0xf7ecbe;
  } else {
    var _0xf7ecbe = 0xc8;
    return _0xf7ecbe;
  }
}

function action() {
  var _0x42f67d = _0x1b6a6b;
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
  var _0x395189 = _0x1b6a6b;
  MF() > 0x5 && GAME[_0x395189(0x1cc)] < 0x2 || MF() > 0x5 && GAME[_0x395189(0x1cc)] < 0x3 && GAME[_0x395189(0x1c3)][0x0][_0x395189(0x1ca)][0x3] || MF() > 0x5 && GAME[_0x395189(0x1cc)] < 0x4 && GAME['field_mobs'][0x0][_0x395189(0x1ca)][0x4] || MF() > 0x5 && GAME[_0x395189(0x1cc)] < 0x5 && GAME[_0x395189(0x1c3)][0x0]['ranks'][0x5] ? GAME[_0x395189(0x1dd)]({
    'a': 0x7,
    'order': 0x2,
    'quick': 0x1,
    'fo': GAME[_0x395189(0x1e3)]['ma']
  }) : GAME[_0x395189(0x1dd)]({
    'a': 0xd,
    'mob_num': 0x0,
    'fo': GAME[_0x395189(0x1e3)]['ma']
  }), action();
}

function MF() {
  var _0x2a84fa = _0x1b6a6b;
  if (r = 0x0) return ![];
  r = 0x0;
  for (i = 0x0; i < GAME[_0x2a84fa(0x1e3)]['ma'][_0x2a84fa(0x1f6)] - 0x1; i++) {
    GAME[_0x2a84fa(0x1e3)]['ma'][i] === 0x1 && (r += parseInt(GAME[_0x2a84fa(0x1c3)][0x0][_0x2a84fa(0x1ca)][i]));
  }
  return r;
}

function go() {
  var _0x2940ff = _0x1b6a6b;
  GAME[_0x2940ff(0x1dd)]({
    'a': 0x1bc,
    'max': GAME[_0x2940ff(0x1e1)][0x0],
    'ignore': GAME[_0x2940ff(0x1e1)][0x1]
  }), action();
}

function getSenzu(_0x45c27b) {
  var _0x5c5fcf = _0x1b6a6b;
  switch (_0x45c27b) {
  case SENZU_BLUE:
    return GAME['quick_opts'][_0x5c5fcf(0x1ef)][_0x5c5fcf(0x1f9)](_0x452ed6 => _0x452ed6[_0x5c5fcf(0x1c7)] === 0x4dc);
  case SENZU_GREEN:
    return GAME[_0x5c5fcf(0x1d0)][_0x5c5fcf(0x1ef)][_0x5c5fcf(0x1f9)](_0xe37af8 => _0xe37af8[_0x5c5fcf(0x1c7)] === 0x4da);
  case SENZU_YELLOW:
    return GAME[_0x5c5fcf(0x1d0)][_0x5c5fcf(0x1ef)]['find'](_0xdcf09c => _0xdcf09c[_0x5c5fcf(0x1c7)] === 0x4ec);
  case SENZU_RED:
    return GAME[_0x5c5fcf(0x1d0)]['senzus'][_0x5c5fcf(0x1f9)](_0x5bb12a => _0x5bb12a[_0x5c5fcf(0x1c7)] === 0x4db);
  }
}

function useSenzu() {
  var _0x21dc9c = _0x1b6a6b;
  if (stop) return;
  const _0x349706 = getSenzu(SENZU_BLUE),
    _0x2b2d2e = getSenzu(SENZU_GREEN),
    _0x484a24 = getSenzu(SENZU_YELLOW),
    _0x564dd9 = getSenzu(SENZU_RED);
  switch (CONF_SENZU) {
  case SENZU_BLUE:
    useBlue(Math['min'](CONF_BLUE_AMOUNT, _0x349706[_0x21dc9c(0x1fd)]));
    break;
  case SENZU_GREEN:
    useGreen(Math['min'](CONF_GREEN_AMOUNT, _0x2b2d2e[_0x21dc9c(0x1fd)]));
    break;
  case SENZU_YELLOW:
    useYellow(Math[_0x21dc9c(0x1f4)](CONF_YELLOW_AMOUNT, _0x484a24['stack']));
    break;
  case SENZU_RED:
    useRed(), stop = ![];
    break;
  default:
    if (_0x349706 && _0x349706[_0x21dc9c(0x1fd)] > CONF_BLUE_AMOUNT * 0x2) useBlue(Math[_0x21dc9c(0x1f4)](CONF_BLUE_AMOUNT, _0x349706['stack']));
    else {
      if (_0x2b2d2e && _0x2b2d2e[_0x21dc9c(0x1fd)] > CONF_GREEN_AMOUNT) useGreen(Math[_0x21dc9c(0x1f4)](CONF_GREEN_AMOUNT, _0x2b2d2e[_0x21dc9c(0x1fd)]));
      else {
        if (_0x564dd9 && _0x564dd9[_0x21dc9c(0x1fd)] > 0x0) useRed();
      }
    }
  }
}

function useBlue(_0x43dc74 = CONF_BLUE_AMOUNT) {
  var _0xed7abb = _0x1b6a6b;
  const _0x3b982a = getSenzu(SENZU_BLUE);
  if (!_0x3b982a) return;
  GAME[_0xed7abb(0x1dd)]({
    'a': 0xc,
    'type': 0xe,
    'iid': _0x3b982a['id'],
    'page': GAME[_0xed7abb(0x1d1)],
    'am': _0x43dc74
  });
}
action();

function useGreen(_0x1e65ef = CONF_GREEN_AMOUNT) {
  var _0x361b9b = _0x1b6a6b;
  const _0x12acd8 = getSenzu(SENZU_GREEN);
  if (!_0x12acd8) return;
  GAME[_0x361b9b(0x1dd)]({
    'a': 0xc,
    'type': 0xe,
    'iid': _0x12acd8['id'],
    'page': GAME[_0x361b9b(0x1d1)],
    'am': _0x1e65ef
  });
}


function useYellow(_0x135694 = CONF_YELLOW_AMOUNT) {
  var _0x51b918 = _0x1b6a6b;
  const _0x54cfec = getSenzu(SENZU_YELLOW);
  if (!_0x54cfec) return;
  GAME[_0x51b918(0x1dd)]({
    'a': 0xc,
    'type': 0xe,
    'iid': _0x54cfec['id'],
    'page': GAME['ekw_page'],
    'am': _0x135694
  });
}

function useRed() {
  var _0x316ef9 = _0x1b6a6b;
  const _0x5391fb = getSenzu(SENZU_RED);
  if (!_0x5391fb) return;
  GAME[_0x316ef9(0x1dd)]({
    'a': 0xc,
    'type': 0xe,
    'iid': _0x5391fb['id'],
    'page': GAME['ekw_page'],
    'am': 0x1
  });
}

function _0x57a8(_0x51cfb1, _0x379302) {
  var _0x132dc8 = _0x132d();
  return _0x57a8 = function (_0x57a856, _0x424850) {
    _0x57a856 = _0x57a856 - 0x1b6;
    var _0x413847 = _0x132dc8[_0x57a856];
    return _0x413847;
  }, _0x57a8(_0x51cfb1, _0x379302);
}

function _0x132d() {
  var _0x17e1b0 = ['text', '<div\x20id=\x27gh_game_helper\x27>', 'Off', 'green', '</div>', 'pid', '<div\x20class=\x27gh_button\x20gh_exp\x27>Resp\x20<b\x20class=\x27gh_status\x20red\x27>Off</b></div><div\x20class=\x27gh_button\x20gh_xost\x27>Jaka\x20<b\x20class=\x27gh_status\x20green\x27>Ost</b></div><div\x20class=\x27gh_button\x20gh_subka\x27>Subka\x20<b\x20class=\x27gh_status\x20green\x27>On</b></div>', 'removeClass', 'field_mobs', 'addClass', '#gh_game_helper\x20.gh_subka', 'floor', 'item_id', '7zuVMHV', 'SENZU_GREEN', 'ranks', ':focus', 'field_mf', '1086vbfoaq', 'socket', 'html', 'quick_opts', 'ekw_page', '11gFoKLK', 'SENZU_BLUE', '174vJgncw', 'css', '.gh_xost\x20.gh_status', '#gh_game_helper\x20.gh_exp', 'keydown', 'chm', '#doubler_status', 'SENZU_RED', '.gh_subka\x20.gh_status', 'emitOrder', 'char_data', 'dsafvxa', 'disconnect', 'spawner', 'getCharMaxPr', 'map_options', 'display', 'red', '<style>', 'append', '--:--:--', 'doubler_rate', '62570umdzQN', 'emit', '</style>', '#ssj_status', '#gh_game_helper\x20{min-width:100px;\x20padding:5px;\x20border:solid\x20gray\x201px;\x20background:rgba(22,\x2022,\x2093,\x200.81);\x20color:gold;\x20position:\x20fixed;\x20top:\x2040px;\x20right:\x205px;\x20z-index:5;}#gh_game_helper\x20.gh_button\x20{cursor:pointer;text-align:center;\x20border-bottom:solid\x20gray\x201px;}', 'senzus', 'none', '809526YITQoJ', 'click', '5518224sqJhoe', 'min', '15832OxeXmm', 'length', 'includes', '.gh_exp\x20.gh_status', 'find', '755229ugdwVW', 'bbfdbtrb', '1017VNICsW', 'stack', 'SENZU_YELLOW', 'x20', '24664dkmjKG', '#gh_game_helper\x20.gh_xost', '345jHjeIy'];
  _0x132d = function () {
    return _0x17e1b0;
  };
  return _0x132d();
}