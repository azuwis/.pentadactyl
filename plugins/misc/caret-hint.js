/* NEW BSD LICENSE {{{
Copyright (c) 2009-2011, anekos.
All rights reserved.

Redistribution and use in source and binary forms, with or without modification,
are permitted provided that the following conditions are met:

    1. Redistributions of source code must retain the above copyright notice,
       this list of conditions and the following disclaimer.
    2. Redistributions in binary form must reproduce the above copyright notice,
       this list of conditions and the following disclaimer in the documentation
       and/or other materials provided with the distribution.
    3. The names of the authors may not be used to endorse or promote products
       derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING,
BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR
OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF
THE POSSIBILITY OF SUCH DAMAGE.


###################################################################################
# http://sourceforge.jp/projects/opensource/wiki/licenses%2Fnew_BSD_license       #
# に参考になる日本語訳がありますが、有効なのは上記英文となります。                #
###################################################################################

}}} */

// INFO {{{
let PLUGIN_VERSION = "1.4.1";
let PLUGIN_HREF = "https://github.com/grassofhust/dotfiles/blob/master/.pentadactyl/archives/caret-hint.js"
let INFO =
<plugin name="Caret Hint" version={PLUGIN_VERSION}
        href={PLUGIN_VERSION}
        summary="Move caret position by hint"
        xmlns={NS}>
  <info lang="en-US" summary="Move caret position by hint"/>
  <info lang="ja" summary="Hint を使ってキャレット位置を移動"/>
  <info lang="zh-CN" summary="由 hint 来移动 caret 位置 或者选择内容"/>
  <author email="anekos@snca.net">anekos</author>
  <author email="frederick.zou@gmail.com">Yang Zou</author>
  <license>New BSD License</license>
  <project name="Pentadactyl" minVersion="1.0"/>

  <item lang="en-US">
    <tags>"caret_hint_key", "chk"</tags>
    <spec>"chk", "caret_hint_key"</spec>
    <type>string</type>
    <default>'m'</default>
    <description><p>
      Hint mode key.
      Move caret position to the head of selected element.
    </p></description>
  </item>
  <item lang="ja">
    <tags>"caret_hint_key", "chk"</tags>
    <spec>"chk", "caret_hint_key"</spec>
    <type>string</type>
    <default>'m'</default>
    <description><p>
      Hint モードのキー
      選択した要素の先頭にキャレットを移動する
    </p></description>
  </item>
  <item lang="zh-CN">
    <tags>"caret_hint_key", "chk"</tags>
    <spec>"chk", "caret_hint_key"</spec>
    <type>string</type>
    <default>'m'</default>
    <description><p>
      Hint 模式。
      移动光标到选定元素最前面。
    </p></description>
  </item>

  <item lang="en-US">
    <tags>'caret_hint_tail_key', 'chtk'</tags>
    <spec>'chtk', 'caret_hint_tail_key'</spec>
    <type>string</type>
    <default>'M'</default>
    <description><p>
      Hint mode key.
      Move caret position to the tail of selected element.
    </p></description>
  </item>
  <item lang="ja">
    <tags>'caret_hint_tail_key', 'chtk'</tags>
    <spec>'chtk', 'caret_hint_tail_key'</spec>
    <type>string</type>
    <default>'M'</default>
    <description><p>
      Hint モードのキー
      選択した要素の後尾にキャレットを移動する
    </p></description>
  </item>
  <item lang="zh-CN">
    <tags>'caret_hint_tail_key', 'chtk'</tags>
    <spec>'chtk', 'caret_hint_tail_key'</spec>
    <type>string</type>
    <default>'M'</default>
    <description><p>
      Hint 模式。
      移动光标到选定元素尾部。
    </p></description>
  </item>

  <item lang="en-US">
    <tags>'caret_hint_select_key', 'chsk'</tags>
    <spec>'chsk', 'caret_hint_select_key'</spec>
    <type>string</type>
    <default>'e'</default>
    <description><p>
      Hint mode key.
      Move caret position to the head of selected element, and select.
    </p></description>
  </item>
  <item lang="ja">
    <tags>'caret_hint_select_key', 'chsk'</tags>
    <spec>'chsk', 'caret_hint_select_key'</spec>
    <type>string</type>
    <default>'e'</default>
    <description><p>
      Hint モードのキー
      選択した要素の先頭にキャレットを移動し、要素を選択する
    </p></description>
  </item>
  <item lang="zh-CN">
    <tags>'caret_hint_select_key', 'chsk'</tags>
    <spec>'chsk', 'caret_hint_select_key'</spec>
    <type>string</type>
    <default>'e'</default>
    <description><p>
      Hint 模式。
      移动光标到选定元素的头部，然后选择。
    </p></description>
  </item>

  <item lang="en-US">
    <tags>'caret_hint_select_tail_key', 'chstk'</tags>
    <spec>'chstk', 'caret_hint_select_tail_key'</spec>
    <type>string</type>
    <default>'E'</default>
    <description><p>
      Hint mode key.
      Move caret position to the tail of selected element, and select.
    </p></description>
  </item>
  <item lang="ja">
    <tags>'caret_hint_select_tail_key', 'chstk'</tags>
    <spec>'chstk', 'caret_hint_select_tail_key'</spec>
    <type>string</type>
    <default>'E'</default>
    <description><p>
      Hint モードのキー
      選択した要素の後尾にキャレットを移動し、要素を選択する
    </p></description>
  </item>
  <item lang="zh-CN">
    <tags>'caret_hint_select_tail_key', 'chstk'</tags>
    <spec>'chstk', 'caret_hint_select_tail_key'</spec>
    <type>string</type>
    <default>'E'</default>
    <description><p>
      Hint 模式。
      移动光标到选定元素的尾部，然后选择。
    </p></description>
  </item>

  <note lang="en-US">If apply empty string ('') to these variables, these mapping or mode are not enabled.</note>
  <note lang="ja">これらの値に空文字列を与えれば、マッピングやモードは有効にされません。</note>
  <note lang="zh-CN">如果以上选项设置为空，则禁用以上模式和键绑定。</note>
</plugin>;
// }}}

/*       _\|/_
         (o o)
 +----oOO-{_}-OOo------------+
 |TODO count@action の使い道 |
 |     要素 A-B 間を選択     |
 +---------------------------*/

// XXX 空白も有効

let CH = {
  setup : function (/*modes*/) {

    var filter = function (elem) {
      if (elem.textContent.replace(/\n|\r/g, "").trim().length <= 5)
        return false;
      return true;
    };

    let gval = function(name, def) options[name] || def;

    let m = arguments[0] || {};
    let headMode = m["headMode"] || gval('caret_hint_key', '');
    let tailMode = m["tailMode"] || gval('caret_hint_tail_key', '');
    let selectHeadMode = m["selectHeadMode"] || gval('caret_hint_select_key', '');
    let selectTailMode = m["selectTailMode"] || gval('caret_hint_select_tail_key', '');

    [
      [[true,  false], [headMode]],
      [[false, false], [tailMode]],
      [[true,  true ], [selectHeadMode]],
      [[false, true ], [selectTailMode]],
    ].forEach(function ([[h, s], ms]) {
      ms.forEach(function (m) {
        if (!m)
          return;
        hints.addMode(
          m,
          'Move caret position to ' + (h ? 'head' : 'tail') + (s ? ' and Select' : ''),
          function (elem, loc, count) {
            moveCaret(elem, h, s);
          },
          filter,
          ["div", "span", "a", "p", "pre", "th", "td", "blockquote", "dt", "dd"]
        );
      });
    });

    var moveCaret = function (elem, head, select) {
      let doc = elem.ownerDocument;
      let win = new XPCNativeWrapper(doc.defaultView);
      win.focus();
      CH.win = win;
      let sel =  win.getSelection();
      let r = doc.createRange();

      sel.removeAllRanges();
      r.selectNodeContents(elem);

      if (!select) {
        if (head) {
          r.setEnd(r.startContainer, r.startOffset); // FIXME: wrong cursor location on selectTailMode
        } else {
          r.setStart(r.endContainer, r.endOffset);
        }
      };
      modes.reset();
      modes.push(modes.CARET);
      if (select)
        modes.push(modes.VISUAL);

      sel.addRange(r);

      if (select && head)
        CH.swapCaret();

    };
  },

  win: null,

  swapCaret: function () {
      let s = CH.win.getSelection();

      if (s.rangeCount <= 0)
        return false;

      // 位置交換時に元の情報が失われるので保存しておく
      let [a, f] = [[s.anchorNode, s.anchorOffset], [s.focusNode, s.focusOffset]];
      s.collapse.apply(s, f);
      s.extend.apply(s, a);
    }

};

group.options.add(["caret_hint_key", "chk"],
  "Move caret position to the head of selected element.",
  "string",
  "m",
  {
    validator: function (value) {
      if (value.length > 1)
        return false;
      if (value.length == 1 && value.charCodeAt(0) > 255)
        return false;
      return true;
    },
    setter: function (value) {
      if (this.hasChanged && (options["caret_hint_key"] !== value)) {
        delete hints.modes[options["caret_hint_key"]];
        if (value)
          CH.setup({headMode:value}); //
      }
      return value;
    }
  }
);
group.options.add(["caret_hint_tail_key", "chtk"],
  "Move caret position to the tail of selected element.",
  "string",
  "M",
  {
    validator: function (value) {
      if (value.length > 1)
        return false;
      if (value.length == 1 && value.charCodeAt(0) > 255)
        return false;
      return true;
    },
    setter: function (value) {
      if (this.hasChanged && (options["caret_hint_tail_key"] !== value)) {
        delete hints.modes[options["caret_hint_tail_key"]];
        if (value)
          CH.setup({tailMode:value}); //
      }
      return value;
    }
  }
);
group.options.add(["caret_hint_select_key", "chsk"],
  "Move caret position to the head of selected element, and select.",
  "string",
  "e",
  {
    validator: function (value) {
      if (value.length > 1)
        return false;
      if (value.length == 1 && value.charCodeAt(0) > 255)
        return false;
      return true;
    },
    setter: function (value) {
      if (this.hasChanged && (options["caret_hint_select_key"] !== value)) {
        delete hints.modes[options["caret_hint_select_key"]];
        if (value)
          CH.setup({selectHeadMode:value}); //
      }
      return value;
    }
  }
);
group.options.add(["caret_hint_select_tail_key", "chstk"],
  "Move caret position to the tail of selected element, and select.",
  "string",
  "E",
  {
    validator: function (value) {
      if (value.length > 1)
        return false;
      if (value.length == 1 && value.charCodeAt(0) > 255)
        return false;
      return true;
    },
    setter: function (value) {
      if (this.hasChanged && (options["caret_hint_select_tail_key"] !== value)) {
        delete hints.modes[options["caret_hint_select_tail_key"]];
        if (value)
          CH.setup({selectTailMode:value}); //
      }
      return value;
    }
  }
);

CH.setup();

group.commands.add(['caret'],
  "Caret control with hint",
  function (args) {
    if (args.length == 0)
      hints.show(options["caret_hint_key"]);
    else {
      let actions = [
        options["caret_hint_key"],
        options["caret_hint_tail_key"],
        options["caret_hint_select_key"],
        options["caret_hint_select_tail_key"]
      ];

      if (actions.indexOf(args[0]) >= 0)
        hints.show(args[0]);
      else
        dactyl.echo("Undefined Action!", commandline.FORCE_SINGLELINE);
    }
  },
  {
    argCount: "?",
    bang: true, // TODO
    completer: function (context, args) {
      switch (args.completeArg) {
        case 0:
        let completions = [];
        [
          "caret_hint_key", "caret_hint_tail_key",
          "caret_hint_select_key", "caret_hint_select_tail_key"
        ].forEach(function (item) {
            if (options[item])
              completions.push([options[item], options.get(item).description]);
        });
        context.completions = completions;
        context.compare = null;
        break;

        default:
        break;

      }
    }
  },
  true
);

// vim:sw=2 ts=2 et si fdm=marker:
