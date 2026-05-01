const questionsByAge = {

  // ========== 0歳 ==========
  '0': [
    {
      id: 1,
      text: "初めて見るおもちゃを渡したとき、どんな反応をしますか？",
      options: [
        { text: "じっと観察してから触り始める",        type: "logical"   },
        { text: "声を上げて嬉しそうにする",            type: "emotional" },
        { text: "すぐ手を伸ばして触ろうとする",        type: "active"    },
        { text: "親の顔を見てから触る",                type: "stable"    }
      ]
    },
    {
      id: 2,
      text: "泣いているとき、何で落ち着きやすいですか？",
      options: [
        { text: "原因（空腹・濡れなど）を取り除くと落ち着く", type: "logical"   },
        { text: "抱っこや声かけで安心する",                    type: "emotional" },
        { text: "気を紛らわすものを渡すと切り替わる",          type: "active"    },
        { text: "いつもの抱き方や場所で落ち着く",              type: "stable"    }
      ]
    },
    {
      id: 3,
      text: "音や音楽が聴こえたとき、どんな反応をしますか？",
      options: [
        { text: "音の出どころを目で探す",                  type: "logical"   },
        { text: "表情豊かに体全体で反応する",              type: "emotional" },
        { text: "体を動かそうとする",                      type: "active"    },
        { text: "聴き慣れた音だと安心して落ち着く",        type: "stable"    }
      ]
    },
    {
      id: 4,
      text: "食事のとき、どんな様子ですか？",
      options: [
        { text: "食材をよく見てから口にする",              type: "logical"   },
        { text: "食事中の雰囲気や親の表情に敏感",          type: "emotional" },
        { text: "手づかみで積極的に食べようとする",        type: "active"    },
        { text: "初めての食材をなかなか受け入れない",      type: "stable"    }
      ]
    },
    {
      id: 5,
      text: "眠りにつくとき、どんな傾向がありますか？",
      options: [
        { text: "周りの様子を確認してから眠る",                type: "logical"   },
        { text: "抱っこや添い寝を強く求める",                  type: "emotional" },
        { text: "疲れたらすっと眠れる",                        type: "active"    },
        { text: "毎回同じルーティンでないと落ち着かない",      type: "stable"    }
      ]
    },
    {
      id: 6,
      text: "一人で遊んでいるとき、どんな様子ですか？",
      options: [
        { text: "周囲をじっくり観察している",              type: "logical"   },
        { text: "親がそばにいないと不安そうにする",        type: "emotional" },
        { text: "体を動かして活発に動き回る",              type: "active"    },
        { text: "静かに安定して一人で過ごせる",            type: "stable"    }
      ]
    },
    {
      id: 7,
      text: "知らない人に会ったとき、どんな反応をしますか？",
      options: [
        { text: "じっと相手を観察する",                type: "logical"   },
        { text: "親にしがみついて警戒する",            type: "emotional" },
        { text: "物怖じせず近づこうとする",            type: "active"    },
        { text: "慣れるまでかなり時間がかかる",        type: "stable"    }
      ]
    },
    {
      id: 8,
      text: "絵本の読み聞かせのとき、どんな様子ですか？",
      options: [
        { text: "絵を指差して確認したがる",                type: "logical"   },
        { text: "お気に入りのページで大きく反応する",      type: "emotional" },
        { text: "自分でページをめくりたがる",              type: "active"    },
        { text: "同じ本を何度も読んでほしがる",            type: "stable"    }
      ]
    },
    {
      id: 9,
      text: "他の赤ちゃんや子どもを見たとき、どんな様子ですか？",
      options: [
        { text: "しばらくじっと観察している",          type: "logical"   },
        { text: "相手の泣き声や表情に反応する",        type: "emotional" },
        { text: "すぐ近づこうとする",                  type: "active"    },
        { text: "親の近くから離れない",                type: "stable"    }
      ]
    },
    {
      id: 10,
      text: "欲しいものが手に入らないとき、どうなりやすいですか？",
      options: [
        { text: "別の方法を試そうとする",              type: "logical"   },
        { text: "激しく泣いて感情を表す",              type: "emotional" },
        { text: "すぐ別のものに切り替える",            type: "active"    },
        { text: "なかなか気持ちが切り替わらない",      type: "stable"    }
      ]
    },
    {
      id: 11,
      text: "どんな遊びに長く集中しやすいですか？",
      options: [
        { text: "積み木を積んだり崩したりする",            type: "logical"   },
        { text: "ぬいぐるみや人形を抱いて遊ぶ",            type: "emotional" },
        { text: "歩き回ったり部屋を探索する",              type: "active"    },
        { text: "毎日同じお気に入りの遊びを繰り返す",      type: "stable"    }
      ]
    },
    {
      id: 12,
      text: "親がこれから伸ばしてあげたいと思う力に近いのは？",
      options: [
        { text: "観察力・気づく力",                type: "logical"   },
        { text: "人とのつながり・安心して甘える力", type: "emotional" },
        { text: "行動力・探索する力",              type: "active"    },
        { text: "落ち着き・安定して続ける力",      type: "stable"    }
      ]
    }
  ],

  // ========== 1歳 ==========
  '1': [
    {
      id: 1,
      text: "新しい場所に行ったとき、どんな反応をしますか？",
      options: [
        { text: "全体をよく見回してから動き始める",      type: "logical"   },
        { text: "親の顔を確認しながら進む",              type: "emotional" },
        { text: "物怖じせずどんどん探索する",            type: "active"    },
        { text: "しばらく入口から離れられない",          type: "stable"    }
      ]
    },
    {
      id: 2,
      text: "転んだり失敗したとき、どんな反応をしますか？",
      options: [
        { text: "すぐ立ち上がって原因を確かめる",                type: "logical"   },
        { text: "親の顔を見て泣くかどうか確認する",              type: "emotional" },
        { text: "泣いてもすぐ立ち上がって再チャレンジ",          type: "active"    },
        { text: "しばらく立ち上がれない",                        type: "stable"    }
      ]
    },
    {
      id: 3,
      text: "初めて言葉を使うとき、どんな言葉が多いですか？",
      options: [
        { text: "物と言葉を結びつけてじっくり覚える",                type: "logical"   },
        { text: "人の名前や「ありがとう」など関係の言葉が多い",      type: "emotional" },
        { text: "「いく」「やって」など動きに関する言葉が多い",      type: "active"    },
        { text: "少ない言葉を繰り返し確認しながら使う",              type: "stable"    }
      ]
    },
    {
      id: 4,
      text: "食事のとき、どんな様子ですか？",
      options: [
        { text: "食べる前にじっくり食材を見る",            type: "logical"   },
        { text: "親と一緒に食べることを喜ぶ",              type: "emotional" },
        { text: "手づかみで積極的に食べようとする",        type: "active"    },
        { text: "食べ慣れたものしか受け入れにくい",        type: "stable"    }
      ]
    },
    {
      id: 5,
      text: "指差しや「あー！」で何かを伝えようとするとき、どんな様子ですか？",
      options: [
        { text: "気になるものをじっくり指差して確認する",  type: "logical"   },
        { text: "親が一緒に見てくれるかどうかを確かめる",  type: "emotional" },
        { text: "次々と興味が移っていく",                  type: "active"    },
        { text: "同じものを繰り返し指差す",                type: "stable"    }
      ]
    },
    {
      id: 6,
      text: "眠るとき、どんな傾向がありますか？",
      options: [
        { text: "眠くても周りをキョロキョロ観察する",          type: "logical"   },
        { text: "親のそばを離れると泣く",                      type: "emotional" },
        { text: "疲れたらすっと眠れる",                        type: "active"    },
        { text: "毎回同じ手順でないと落ち着かない",            type: "stable"    }
      ]
    },
    {
      id: 7,
      text: "他の子と同じ空間にいるとき、どんな様子ですか？",
      options: [
        { text: "相手をじっくり観察してから関わる",        type: "logical"   },
        { text: "相手の表情や泣き声に敏感に反応する",      type: "emotional" },
        { text: "すぐ近づいて触ろうとする",                type: "active"    },
        { text: "親の近くから離れない",                    type: "stable"    }
      ]
    },
    {
      id: 8,
      text: "積み木やカップ重ねで遊ぶとき、どんな様子ですか？",
      options: [
        { text: "崩れる様子を繰り返し観察する",      type: "logical"   },
        { text: "「みて！」と親に見せたがる",        type: "emotional" },
        { text: "どんどん試して壊して繰り返す",      type: "active"    },
        { text: "毎回同じ手順で積みたがる",          type: "stable"    }
      ]
    },
    {
      id: 9,
      text: "欲しいものが手の届かない場所にあるとき、どうしますか？",
      options: [
        { text: "別のルートや方法を試そうとする",          type: "logical"   },
        { text: "親の顔を見て泣いて訴える",                type: "emotional" },
        { text: "自分でどうにかしようと力を出す",          type: "active"    },
        { text: "あきらめて別の遊びに移れない",            type: "stable"    }
      ]
    },
    {
      id: 10,
      text: "散歩のとき、どんな様子ですか？",
      options: [
        { text: "立ち止まって虫や葉っぱをじっくり観察する",    type: "logical"   },
        { text: "親に何かを見せたくて引っ張る",                type: "emotional" },
        { text: "どんどん先へ進みたがる",                      type: "active"    },
        { text: "いつもと違うルートを嫌がる",                  type: "stable"    }
      ]
    },
    {
      id: 11,
      text: "何かを禁止されたとき、どんな反応をしますか？",
      options: [
        { text: "なぜダメなのかを確かめるように再度試す",    type: "logical"   },
        { text: "親の表情を見て気持ちが揺れる",              type: "emotional" },
        { text: "すぐ別のことに切り替える",                  type: "active"    },
        { text: "なかなか切り替えられずこだわる",            type: "stable"    }
      ]
    },
    {
      id: 12,
      text: "親がこれから伸ばしてあげたいと思う力に近いのは？",
      options: [
        { text: "観察力・気づく力",                type: "logical"   },
        { text: "人とのつながり・安心して甘える力", type: "emotional" },
        { text: "行動力・探索する力",              type: "active"    },
        { text: "落ち着き・安定して続ける力",      type: "stable"    }
      ]
    }
  ],

  // ========== 2歳 ==========
  '2': [
    {
      id: 1,
      text: "「イヤ！」とこだわるとき、何に対して多いですか？",
      options: [
        { text: "理由が納得できないことへの「イヤ」が多い",        type: "logical"   },
        { text: "気持ちを受け取ってほしくて「イヤ」と言う",        type: "emotional" },
        { text: "「自分でやりたい」という気持ちからの「イヤ」",    type: "active"    },
        { text: "いつもと違うことへの「イヤ」が多い",              type: "stable"    }
      ]
    },
    {
      id: 2,
      text: "気持ちが爆発して泣いたとき、どうすると落ち着きやすいですか？",
      options: [
        { text: "落ち着いてから理由を話すと納得する",          type: "logical"   },
        { text: "ひたすら抱きしめると安心する",                type: "emotional" },
        { text: "気持ちを切り替えるものを渡すと立ち直る",      type: "active"    },
        { text: "嵐が過ぎるまで待つしかない",                  type: "stable"    }
      ]
    },
    {
      id: 3,
      text: "言葉をたくさん使い始めたとき、どんな言葉が多いですか？",
      options: [
        { text: "「なに？」「なんで？」と知りたがる言葉",                type: "logical"   },
        { text: "「好き」「嫌い」など気持ちを表す言葉",                  type: "emotional" },
        { text: "「やって」「いく」など動きに関する言葉",                type: "active"    },
        { text: "「いつも」「また」など繰り返しを示す言葉",              type: "stable"    }
      ]
    },
    {
      id: 4,
      text: "「自分でやる！」という場面、どんな様子ですか？",
      options: [
        { text: "慎重にやり方を確かめながら進める",            type: "logical"   },
        { text: "できたとき「みてみて！」と強く求める",        type: "emotional" },
        { text: "とにかく勢いよく自分でやろうとする",          type: "active"    },
        { text: "うまくいかないとパニックになりやすい",        type: "stable"    }
      ]
    },
    {
      id: 5,
      text: "お友だちと同じ場所にいるとき、どんな様子ですか？",
      options: [
        { text: "じっくり観察してから関わりはじめる",                                  type: "logical"   },
        { text: "泣いているお友だちを気にする",                                        type: "emotional" },
        { text: "おもちゃを取ったり取られたりしながら積極的に関わる",                  type: "active"    },
        { text: "知っているお友だちとしか遊べない",                                    type: "stable"    }
      ]
    },
    {
      id: 6,
      text: "絵本の読み聞かせのとき、どんな様子ですか？",
      options: [
        { text: "「これなに？」と確認しながら聞く",            type: "logical"   },
        { text: "登場人物の感情に大きく反応する",              type: "emotional" },
        { text: "自分でページをめくりたがる",                  type: "active"    },
        { text: "同じ本を何度も読んでほしがる",                type: "stable"    }
      ]
    },
    {
      id: 7,
      text: "身支度（靴を履く・服を着るなど）のとき、どんな様子ですか？",
      options: [
        { text: "正しい手順を確かめながらやろうとする",    type: "logical"   },
        { text: "うまくできないと激しく落ち込む",          type: "emotional" },
        { text: "早く外に行きたくてがんばる",              type: "active"    },
        { text: "毎回同じ順番でやらないと嫌がる",          type: "stable"    }
      ]
    },
    {
      id: 8,
      text: "初めての場所に行ったとき、どんな反応をしますか？",
      options: [
        { text: "全体をよく観察してから行動する",          type: "logical"   },
        { text: "親の手をしっかり握って確認する",          type: "emotional" },
        { text: "物怖じせずどんどん動き回る",              type: "active"    },
        { text: "入口から長い間動けない",                  type: "stable"    }
      ]
    },
    {
      id: 9,
      text: "お片付けを促したとき、どんな様子ですか？",
      options: [
        { text: "どこに何を置くか整理しながら片付ける",    type: "logical"   },
        { text: "一緒にやってほしがる",                    type: "emotional" },
        { text: "さっさと終わらせて次に行こうとする",      type: "active"    },
        { text: "毎回同じ場所に戻したがる",                type: "stable"    }
      ]
    },
    {
      id: 10,
      text: "ごっこ遊びや見立て遊びのとき、どんな様子ですか？",
      options: [
        { text: "役割や設定をじっくり決めてから始める",            type: "logical"   },
        { text: "お母さん・お父さん役など人を中心に遊ぶ",          type: "emotional" },
        { text: "大きく動いて演じることを楽しむ",                  type: "active"    },
        { text: "毎回同じシナリオで遊びたがる",                    type: "stable"    }
      ]
    },
    {
      id: 11,
      text: "眠る前の時間、どんな様子ですか？",
      options: [
        { text: "明日の予定や今日あったことを確認したがる",        type: "logical"   },
        { text: "「もっとそばにいて」と甘えてくる",                type: "emotional" },
        { text: "眠くても動き続けたがる",                          type: "active"    },
        { text: "毎晩同じルーティンでないと落ち着かない",          type: "stable"    }
      ]
    },
    {
      id: 12,
      text: "親がこれから伸ばしてあげたいと思う力に近いのは？",
      options: [
        { text: "考える力・納得して動く力",                    type: "logical"   },
        { text: "感情を表現する力・つながりを感じる力",        type: "emotional" },
        { text: "行動力・自分でやり抜く力",                    type: "active"    },
        { text: "継続力・変化にも安定する力",                  type: "stable"    }
      ]
    }
  ],

  // ========== 3歳 ==========
  '3': [
    {
      id: 1,
      text: "公園や保育園で、どんな遊び方をしますか？",
      options: [
        { text: "遊具の使い方を観察してから遊ぶ",      type: "logical"   },
        { text: "友だちを誘って一緒に遊ぶ",            type: "emotional" },
        { text: "次々と遊具を試し回る",                type: "active"    },
        { text: "いつもの決まった遊びをしたがる",      type: "stable"    }
      ]
    },
    {
      id: 2,
      text: "うまくできないとき、どんな反応をしますか？",
      options: [
        { text: "「なんで？」「どうやるの？」と聞く",  type: "logical"   },
        { text: "悔しくて泣いたり怒ったりする",        type: "emotional" },
        { text: "すぐもう一度挑戦する",                type: "active"    },
        { text: "しばらく諦めてしまう",                type: "stable"    }
      ]
    },
    {
      id: 3,
      text: "友だちとトラブルになったとき（おもちゃの取り合いなど）、どうなりやすいですか？",
      options: [
        { text: "「順番だよ」とルールで解決しようとする",  type: "logical"   },
        { text: "相手の気持ちに影響されて泣く",            type: "emotional" },
        { text: "強引に主張する",                          type: "active"    },
        { text: "黙って引いてしまう",                      type: "stable"    }
      ]
    },
    {
      id: 4,
      text: "毎日の「なんで？」「どうして？」の質問は？",
      options: [
        { text: "毎日たくさん質問して深掘りする",              type: "logical"   },
        { text: "答えより大人の反応を楽しんでいる様子",        type: "emotional" },
        { text: "聞くより先に動いて自分で確かめる",            type: "active"    },
        { text: "あまり質問しない",                            type: "stable"    }
      ]
    },
    {
      id: 5,
      text: "お絵描きや工作のとき、どんな様子ですか？",
      options: [
        { text: "細かく考えながら丁寧に仕上げる",      type: "logical"   },
        { text: "自分の気持ちや物語を表現する",        type: "emotional" },
        { text: "どんどん量を作る",                    type: "active"    },
        { text: "いつも同じテーマで描く",              type: "stable"    }
      ]
    },
    {
      id: 6,
      text: "初めての場所に行ったとき、どんな様子ですか？",
      options: [
        { text: "全体をよく観察してから行動する",          type: "logical"   },
        { text: "親の顔を確認しながら進む",                type: "emotional" },
        { text: "物怖じせずどんどん探索する",              type: "active"    },
        { text: "しばらく入口から離れられない",            type: "stable"    }
      ]
    },
    {
      id: 7,
      text: "褒められたとき、どんな反応をしますか？",
      options: [
        { text: "「何が良かったの？」と確認したがる",  type: "logical"   },
        { text: "大喜びで満面の笑みを見せる",          type: "emotional" },
        { text: "もっとやろうとする",                  type: "active"    },
        { text: "照れながらも安心する",                type: "stable"    }
      ]
    },
    {
      id: 8,
      text: "寝る前の時間、どんな様子ですか？",
      options: [
        { text: "「明日は何するの？」と確認したがる",          type: "logical"   },
        { text: "「もっと一緒にいたい」と甘えてくる",          type: "emotional" },
        { text: "眠くても動き続けたがる",                      type: "active"    },
        { text: "毎晩同じルーティンでないと落ち着かない",      type: "stable"    }
      ]
    },
    {
      id: 9,
      text: "新しい習い事や体験に誘うと、どんな反応をしますか？",
      options: [
        { text: "「どんなことをするの？」と情報を集める",    type: "logical"   },
        { text: "「お友だちはいる？」と人のことを気にする",  type: "emotional" },
        { text: "「やってみたい！」とすぐ乗り気になる",      type: "active"    },
        { text: "なかなか踏み出せない",                      type: "stable"    }
      ]
    },
    {
      id: 10,
      text: "親が話しかけているとき、どんな様子ですか？",
      options: [
        { text: "理由や意味を知りたがる",              type: "logical"   },
        { text: "親の表情や声のトーンに敏感",          type: "emotional" },
        { text: "聞くより先に動き始める",              type: "active"    },
        { text: "ゆっくり確認しながら聞く",            type: "stable"    }
      ]
    },
    {
      id: 11,
      text: "好きな遊びや活動のとき、どんな集中の仕方をしますか？",
      options: [
        { text: "細かいところまで納得するまでやる",    type: "logical"   },
        { text: "役になりきって没頭する",              type: "emotional" },
        { text: "体全体を使って夢中になる",            type: "active"    },
        { text: "毎日同じ遊びを繰り返す",              type: "stable"    }
      ]
    },
    {
      id: 12,
      text: "親がこれから伸ばしてあげたいと思う力に近いのは？",
      options: [
        { text: "考える力・理解する力",                type: "logical"   },
        { text: "人との関わり・気持ちを伝える力",      type: "emotional" },
        { text: "行動力・チャレンジする力",            type: "active"    },
        { text: "継続する力・落ち着き",                type: "stable"    }
      ]
    }
  ],

  // ========== 4歳 ==========
  '4': [
    {
      id: 1,
      text: "ルールのある遊び（鬼ごっこ・ボードゲームなど）のとき、どんな様子ですか？",
      options: [
        { text: "まずルールをしっかり確認してから始める",      type: "logical"   },
        { text: "みんなで楽しめるかどうかを気にする",          type: "emotional" },
        { text: "ルールよりまず楽しみたい気持ちが先行する",    type: "active"    },
        { text: "いつもと同じ遊び方にしたがる",                type: "stable"    }
      ]
    },
    {
      id: 2,
      text: "「なんで？」「どうして？」の質問はどんな内容が多いですか？",
      options: [
        { text: "物の仕組みや理由に関する質問",                    type: "logical"   },
        { text: "人の気持ちや関係に関する質問",                    type: "emotional" },
        { text: "「やっていい？」「行っていい？」と行動確認の質問", type: "active"   },
        { text: "「いつものやつ？」と変化への確認質問",            type: "stable"    }
      ]
    },
    {
      id: 3,
      text: "お友だちと遊ぶとき、どんな立ち回りをしやすいですか？",
      options: [
        { text: "ルールを決めたり計画を立てたりする",            type: "logical"   },
        { text: "誰かが仲間外れにならないか気にする",            type: "emotional" },
        { text: "遊びをどんどん引っ張る",                        type: "active"    },
        { text: "特定の仲の良い子とだけ遊ぶ",                    type: "stable"    }
      ]
    },
    {
      id: 4,
      text: "工作やパズルに取り組むとき、どんな様子ですか？",
      options: [
        { text: "手順を考えながら丁寧に取り組む",        type: "logical"   },
        { text: "できた！と誰かに見せたがる",            type: "emotional" },
        { text: "どんどん試してうまくいかなくても続ける", type: "active"   },
        { text: "決まった手順でやらないと嫌がる",        type: "stable"    }
      ]
    },
    {
      id: 5,
      text: "予定が急に変わったとき、どんな反応をしますか？",
      options: [
        { text: "理由を説明されると納得しやすい",                      type: "logical"   },
        { text: "楽しみにしていたことが変わると強く落ち込む",          type: "emotional" },
        { text: "新しい予定にすぐ気持ちを切り替える",                  type: "active"    },
        { text: "いつもと違うと大きく不安になる",                      type: "stable"    }
      ]
    },
    {
      id: 6,
      text: "絵本や物語を聞くとき、どんな反応をしますか？",
      options: [
        { text: "「なんで？」「次どうなるの？」と深掘りする",    type: "logical"   },
        { text: "登場人物の気持ちに感情移入する",                type: "emotional" },
        { text: "自分なりの続きを作って話し始める",              type: "active"    },
        { text: "同じ本や同じ話を繰り返し聞きたがる",            type: "stable"    }
      ]
    },
    {
      id: 7,
      text: "集団の活動（体操・お遊戯など）のとき、どんな様子ですか？",
      options: [
        { text: "やり方を確認してから取り組む",                        type: "logical"   },
        { text: "先生や友だちの様子を気にしながら参加する",            type: "emotional" },
        { text: "積極的に前に出る",                                    type: "active"    },
        { text: "いつもの流れで安心して参加できる",                    type: "stable"    }
      ]
    },
    {
      id: 8,
      text: "何かを選ぶとき（おやつ・遊び・服など）、どんな傾向がありますか？",
      options: [
        { text: "比べて考えてから選ぶ",            type: "logical"   },
        { text: "好き嫌いや気分で選ぶ",            type: "emotional" },
        { text: "直感ですぐ選ぶ",                  type: "active"    },
        { text: "いつもと同じものを選ぶ",          type: "stable"    }
      ]
    },
    {
      id: 9,
      text: "うまくいかなかったとき、どんな反応をしますか？",
      options: [
        { text: "原因を考えてもう一度試す",            type: "logical"   },
        { text: "悔しさや悲しさを大きく表す",          type: "emotional" },
        { text: "気にせず別の挑戦に移る",              type: "active"    },
        { text: "しばらく立ち直れない",                type: "stable"    }
      ]
    },
    {
      id: 10,
      text: "お片付けや準備のとき、どんな様子ですか？",
      options: [
        { text: "どこに何を置くか整理しながらやる",            type: "logical"   },
        { text: "一緒にやってほしがる",                        type: "emotional" },
        { text: "さっさと終わらせて次のことに向かう",          type: "active"    },
        { text: "毎回同じ場所・同じ順番にこだわる",            type: "stable"    }
      ]
    },
    {
      id: 11,
      text: "新しい体験（遠足・行事など）に対して、どんな様子ですか？",
      options: [
        { text: "「どんなことをするの？」と事前に確認する",        type: "logical"   },
        { text: "「お友だちと一緒？」と人のことを気にする",        type: "emotional" },
        { text: "ワクワクして早く行きたがる",                      type: "active"    },
        { text: "不安そうにして当日まで落ち着かない",              type: "stable"    }
      ]
    },
    {
      id: 12,
      text: "親がこれから伸ばしてあげたいと思う力に近いのは？",
      options: [
        { text: "考える力・理解する力",                type: "logical"   },
        { text: "人との関わり・気持ちを伝える力",      type: "emotional" },
        { text: "行動力・チャレンジする力",            type: "active"    },
        { text: "継続する力・落ち着き",                type: "stable"    }
      ]
    }
  ],

  // ========== 5歳 ==========
  '5': [
    {
      id: 1,
      text: "新しいおもちゃや遊びを見たとき、どんな反応をしやすいですか？",
      options: [
        { text: "まず仕組みやルールを知りたがる",  type: "logical"   },
        { text: "誰かと一緒に楽しみたがる",        type: "emotional" },
        { text: "すぐに触って試そうとする",        type: "active"    },
        { text: "少し様子を見てから始める",        type: "stable"    }
      ]
    },
    {
      id: 2,
      text: "うまくできないことがあったとき、どんな反応をしやすいですか？",
      options: [
        { text: "なぜできなかったのか考える",              type: "logical"   },
        { text: "悔しさや悲しさを強く表す",                type: "emotional" },
        { text: "もう一度すぐ挑戦する",                    type: "active"    },
        { text: "いったんやめて落ち着こうとする",          type: "stable"    }
      ]
    },
    {
      id: 3,
      text: "友だちと遊ぶとき、どんな傾向がありますか？",
      options: [
        { text: "ルールや順番を気にする",              type: "logical"   },
        { text: "相手の気持ちをよく見ている",          type: "emotional" },
        { text: "遊びをリードしたがる",                type: "active"    },
        { text: "慣れた相手と安心して遊びたい",        type: "stable"    }
      ]
    },
    {
      id: 4,
      text: "予定が急に変わったとき、どんな反応をしやすいですか？",
      options: [
        { text: "理由を説明されると納得しやすい",  type: "logical"   },
        { text: "気持ちが揺れやすい",              type: "emotional" },
        { text: "すぐ次の行動に移れる",            type: "active"    },
        { text: "不安になりやすい",                type: "stable"    }
      ]
    },
    {
      id: 5,
      text: "集中しているときの様子は？",
      options: [
        { text: "一つのことを深く考える",              type: "logical"   },
        { text: "物語や人との関わりに入り込む",        type: "emotional" },
        { text: "体を動かしながら集中する",            type: "active"    },
        { text: "静かな環境で集中しやすい",            type: "stable"    }
      ]
    },
    {
      id: 6,
      text: "何かを選ぶとき、どんな傾向がありますか？",
      options: [
        { text: "比べて考えて選ぶ",            type: "logical"   },
        { text: "好き嫌いや気持ちで選ぶ",      type: "emotional" },
        { text: "直感ですぐ選ぶ",              type: "active"    },
        { text: "いつものものを選びやすい",    type: "stable"    }
      ]
    },
    {
      id: 7,
      text: "遊び方の特徴は？",
      options: [
        { text: "パズルや組み立てが好き",          type: "logical"   },
        { text: "ごっこ遊びや物語が好き",          type: "emotional" },
        { text: "外遊びや体を動かす遊びが好き",    type: "active"    },
        { text: "慣れた遊びを繰り返すのが好き",    type: "stable"    }
      ]
    },
    {
      id: 8,
      text: "子どもが安心しやすいのはどんなときですか？",
      options: [
        { text: "見通しや理由がわかるとき",            type: "logical"   },
        { text: "気持ちを受け止めてもらえたとき",      type: "emotional" },
        { text: "自由に動けるとき",                    type: "active"    },
        { text: "いつもの流れが守られているとき",      type: "stable"    }
      ]
    },
    {
      id: 9,
      text: "苦手なことに向き合うとき、どんな支援が合いやすいですか？",
      options: [
        { text: "手順を説明される",                type: "logical"   },
        { text: "気持ちに寄り添ってもらう",        type: "emotional" },
        { text: "まず一緒にやってみる",            type: "active"    },
        { text: "安心できる環境で練習する",        type: "stable"    }
      ]
    },
    {
      id: 10,
      text: "親が急かしたとき、どうなりやすいですか？",
      options: [
        { text: "考えがまとまりにくくなる",    type: "logical"   },
        { text: "気持ちが乱れやすくなる",      type: "emotional" },
        { text: "雑になりやすい",              type: "active"    },
        { text: "不安が強くなりやすい",        type: "stable"    }
      ]
    },
    {
      id: 11,
      text: "好きなことに取り組むときの特徴は？",
      options: [
        { text: "細かいところまでこだわる",        type: "logical"   },
        { text: "感情豊かに表現する",              type: "emotional" },
        { text: "夢中で動き続ける",                type: "active"    },
        { text: "同じことを安定して続ける",        type: "stable"    }
      ]
    },
    {
      id: 12,
      text: "伸ばしてあげたい力はどれに近いですか？",
      options: [
        { text: "考える力",                    type: "logical"   },
        { text: "人の気持ちを理解する力",      type: "emotional" },
        { text: "挑戦する力",                  type: "active"    },
        { text: "継続する力",                  type: "stable"    }
      ]
    }
  ],

  // ========== 6歳 ==========
  '6': [
    {
      id: 1,
      text: "ひらがなや数字を学ぶとき、どんな様子ですか？",
      options: [
        { text: "仕組みや法則を理解してから覚える",            type: "logical"   },
        { text: "「上手に書けた！」を誰かに見せたがる",        type: "emotional" },
        { text: "練習より早く全部覚えたくて先に進む",          type: "active"    },
        { text: "毎日コツコツ同じ練習を続ける",                type: "stable"    }
      ]
    },
    {
      id: 2,
      text: "学校や保育園での出来事を話してくれるとき、どんな内容が多いですか？",
      options: [
        { text: "「なんで〇〇なんだろう」と疑問を持った話",        type: "logical"   },
        { text: "友だちとのやり取りや感情の話",                    type: "emotional" },
        { text: "「〇〇できた！〇〇やった！」という体験談",        type: "active"    },
        { text: "「いつも通り〇〇した」という話",                  type: "stable"    }
      ]
    },
    {
      id: 3,
      text: "友だちとのトラブルがあったとき、どんな対処をしやすいですか？",
      options: [
        { text: "「どっちが正しいか」を論理で解決しようとする",        type: "logical"   },
        { text: "相手の気持ちを考えて謝ったり仲直りしようとする",      type: "emotional" },
        { text: "すぐ忘れて次の遊びに向かう",                          type: "active"    },
        { text: "しばらく引きずって立ち直れない",                      type: "stable"    }
      ]
    },
    {
      id: 4,
      text: "ルールを守ることに対して、どんな様子ですか？",
      options: [
        { text: "なぜそのルールがあるのか納得したい",              type: "logical"   },
        { text: "みんなと一緒に守ることを大切にしている",          type: "emotional" },
        { text: "理解しているが窮屈に感じることがある",            type: "active"    },
        { text: "決まったことを忠実に守ろうとする",                type: "stable"    }
      ]
    },
    {
      id: 5,
      text: "宿題や課題に取り組むとき、どんな様子ですか？",
      options: [
        { text: "やり方を理解してから取り組む",                type: "logical"   },
        { text: "誰かと一緒にやりたがる",                      type: "emotional" },
        { text: "早く終わらせようとする",                      type: "active"    },
        { text: "毎日決まった時間に取り組むのが安心",          type: "stable"    }
      ]
    },
    {
      id: 6,
      text: "発表や人前で話す場面で、どんな様子ですか？",
      options: [
        { text: "内容をしっかり準備してから話す",          type: "logical"   },
        { text: "緊張するが思いを伝えたい気持ちがある",    type: "emotional" },
        { text: "積極的に手を挙げて発言したがる",          type: "active"    },
        { text: "緊張して声が出にくい",                    type: "stable"    }
      ]
    },
    {
      id: 7,
      text: "友だちを見て「すごいな」と感じたとき、どうしやすいですか？",
      options: [
        { text: "「どうやってるの？」とやり方を聞く",              type: "logical"   },
        { text: "「いいな〜」と素直に気持ちを伝える",              type: "emotional" },
        { text: "自分もすぐ真似して試す",                          type: "active"    },
        { text: "じっくり観察して自分のペースで取り組む",          type: "stable"    }
      ]
    },
    {
      id: 8,
      text: "自由な時間（外遊び・室内遊びなど）、どう過ごしやすいですか？",
      options: [
        { text: "パズルや工作など頭を使う遊びを好む",            type: "logical"   },
        { text: "友だちや家族と一緒に過ごしたがる",              type: "emotional" },
        { text: "体を動かして活発に過ごす",                      type: "active"    },
        { text: "一人で落ち着いて同じ遊びを続ける",              type: "stable"    }
      ]
    },
    {
      id: 9,
      text: "何かを頑張ったとき、どんな言葉をかけると喜びますか？",
      options: [
        { text: "「よく考えたね」「どうやったの？」",            type: "logical"   },
        { text: "「嬉しかったよ」「気持ちが伝わったよ」",        type: "emotional" },
        { text: "「すごい！やったね！」と盛り上がる言葉",        type: "active"    },
        { text: "「毎日続けたんだね」「コツコツえらい」",        type: "stable"    }
      ]
    },
    {
      id: 10,
      text: "嫌なことや苦手なことがあるとき、どうしやすいですか？",
      options: [
        { text: "なぜ苦手なのかを考えて対処しようとする",    type: "logical"   },
        { text: "「嫌だ」という気持ちを誰かに話したい",      type: "emotional" },
        { text: "苦手でも「とりあえずやってみる」姿勢",      type: "active"    },
        { text: "慣れるまで時間をかけて向き合う",            type: "stable"    }
      ]
    },
    {
      id: 11,
      text: "習い事や趣味に取り組むとき、どんな特徴がありますか？",
      options: [
        { text: "上達の仕組みを理解しながら進める",            type: "logical"   },
        { text: "誰かと一緒にやることで楽しさが増す",          type: "emotional" },
        { text: "すぐに結果を出したがる",                      type: "active"    },
        { text: "地道にコツコツ続けることが得意",              type: "stable"    }
      ]
    },
    {
      id: 12,
      text: "伸ばしてあげたい力はどれに近いですか？",
      options: [
        { text: "考える力・論理的に理解する力",            type: "logical"   },
        { text: "人との関わり・感情を言葉にする力",        type: "emotional" },
        { text: "挑戦する力・行動力",                      type: "active"    },
        { text: "継続する力・丁寧さ",                      type: "stable"    }
      ]
    }
  ],

  // ========== 7歳 ==========
  '7': [
    {
      id: 1,
      text: "学校の勉強に取り組むとき、どんな様子ですか？",
      options: [
        { text: "「なぜそうなるの？」と理由にこだわる",        type: "logical"   },
        { text: "先生や友だちと一緒に学ぶことを楽しむ",        type: "emotional" },
        { text: "早く終わらせて次に進みたがる",                type: "active"    },
        { text: "毎日コツコツ決まった手順で取り組む",          type: "stable"    }
      ]
    },
    {
      id: 2,
      text: "友だちとの関係で、どんな傾向が見えますか？",
      options: [
        { text: "少数の深い友だち関係を好む",                type: "logical"   },
        { text: "友だちの感情や様子をよく気にする",          type: "emotional" },
        { text: "グループをリードしたがる",                  type: "active"    },
        { text: "いつもの仲良しグループ内で安心する",        type: "stable"    }
      ]
    },
    {
      id: 3,
      text: "宿題に取り組むとき、どんな様子ですか？",
      options: [
        { text: "問題の意味や解き方の理由を理解してから進める",    type: "logical"   },
        { text: "「一緒に見ていて」と親に求める",                  type: "emotional" },
        { text: "さっさと終わらせようとする",                      type: "active"    },
        { text: "毎日同じ時間・同じ場所でないと落ち着かない",      type: "stable"    }
      ]
    },
    {
      id: 4,
      text: "失敗したり叱られたりしたとき、どんな反応をしますか？",
      options: [
        { text: "原因を自分で考えて次はどうするか考える",        type: "logical"   },
        { text: "落ち込んで気持ちが長く引きずる",                type: "emotional" },
        { text: "「次こそ！」とすぐ前を向く",                    type: "active"    },
        { text: "しばらく慎重になって行動できなくなる",          type: "stable"    }
      ]
    },
    {
      id: 5,
      text: "好きなことや得意なことへの取り組み方は？",
      options: [
        { text: "深く研究したり仕組みを探ったりする",        type: "logical"   },
        { text: "誰かと一緒にやることで喜びが増す",          type: "emotional" },
        { text: "次々と新しいことに挑戦する",                type: "active"    },
        { text: "毎日同じことをコツコツ続ける",              type: "stable"    }
      ]
    },
    {
      id: 6,
      text: "グループ活動（班活動・チーム競技など）のとき、どんな立ち回りをしますか？",
      options: [
        { text: "作戦や手順を考えて提案する",                    type: "logical"   },
        { text: "メンバーの様子を気にしてまとめようとする",      type: "emotional" },
        { text: "積極的に中心を引っ張る",                        type: "active"    },
        { text: "自分の役割を確実にこなす",                      type: "stable"    }
      ]
    },
    {
      id: 7,
      text: "テストや発表など「評価される場面」で、どんな様子ですか？",
      options: [
        { text: "しっかり準備して内容で勝負したい",                type: "logical"   },
        { text: "緊張して結果より過程を評価されたい",              type: "emotional" },
        { text: "緊張より「やってやろう」という気持ちが強い",      type: "active"    },
        { text: "「練習通りにできるか」が一番の不安",              type: "stable"    }
      ]
    },
    {
      id: 8,
      text: "自由な時間の過ごし方は？",
      options: [
        { text: "調べ物や工作など頭を使う一人遊びを好む",          type: "logical"   },
        { text: "友だちや家族と過ごすことを優先する",              type: "emotional" },
        { text: "外で体を動かすことを好む",                        type: "active"    },
        { text: "決まったルーティンで一人で落ち着いて過ごす",      type: "stable"    }
      ]
    },
    {
      id: 9,
      text: "何か新しいことを始めるとき、どんな様子ですか？",
      options: [
        { text: "事前に調べてから始める",                          type: "logical"   },
        { text: "誰かと一緒にやれるか確認する",                    type: "emotional" },
        { text: "とにかく始めてみる",                              type: "active"    },
        { text: "慣れるまでなかなか踏み出せない",                  type: "stable"    }
      ]
    },
    {
      id: 10,
      text: "何か頑張ったとき、どんな言葉が響きやすいですか？",
      options: [
        { text: "「どこが工夫できた？」と過程を聞く言葉",      type: "logical"   },
        { text: "「嬉しかったよ」という気持ちを伝える言葉",    type: "emotional" },
        { text: "「すごい！やったね！」と一緒に盛り上がる言葉", type: "active"   },
        { text: "「毎日続けたね」とコツコツを認める言葉",      type: "stable"    }
      ]
    },
    {
      id: 11,
      text: "嫌いなことや苦手なことへの向き合い方は？",
      options: [
        { text: "なぜ苦手なのかを分析して工夫する",            type: "logical"   },
        { text: "「嫌だ」という気持ちを話してから動く",        type: "emotional" },
        { text: "苦手でもとりあえず挑戦する",                  type: "active"    },
        { text: "少しずつ慣らしながら取り組む",                type: "stable"    }
      ]
    },
    {
      id: 12,
      text: "伸ばしてあげたい力はどれに近いですか？",
      options: [
        { text: "考える力・論理的に理解する力",            type: "logical"   },
        { text: "人との関わり・感情を言葉にする力",        type: "emotional" },
        { text: "挑戦する力・行動力",                      type: "active"    },
        { text: "継続する力・丁寧さ",                      type: "stable"    }
      ]
    }
  ]
};

const resultData = {
  logical: {
    typeName: "じっくり考える探究タイプ",
    typeLabel: "論理型",
    typeEmoji: "🔍",
    typeColor: "#3B82F6",
    typeColorLight: "#EFF6FF",
    typeColorMid: "#BFDBFE",
    description: "物事の仕組みや理由に関心を持ちやすいタイプです。\n納得できると集中力を発揮し、深く考える力が伸びやすい傾向があります。",
    strengths: ["観察力がある", "理由を考える力がある", "集中して取り組みやすい"],
    weaknesses: ["急かされると混乱しやすい", "感覚的な指示だけでは動きにくい", "納得できないと進みにくい"],
    ngBehaviors: ["「いいから早くして」と急かす", "理由を説明せずに指示する", "質問を面倒がる"],
    goodPhrases: ["どうしてそう思ったの？", "どこが面白かった？", "一緒に理由を考えてみよう"],
    dailyAdvice: "結果だけでなく、考えた過程を褒める。質問が多いときは、すぐ答えを出さず一緒に考える。",
    guide: {
      parentingTips: [
        "「なぜ？」「どうして？」を面倒がらず、一緒に考える姿勢を見せる",
        "答えを教えるより、考えたプロセスを褒める",
        "行動する前に計画や見通しを伝えると安心して動きやすい"
      ],
      ageYoung: "行動の意味を短い言葉で伝えながら関わりましょう。「これはこうするよ」と声をかけることで観察する力が育ちます。正解を急がず、子どもが確かめる時間を大切に。",
      ageOlder: "「なぜそう思ったの？」と問いかけ、思考の過程を褒めましょう。間違えても「どうしてそうなったか」を一緒に探ることで、自分で考える力が育ちます。",
      activities: [
        "パズル・ブロック（法則性を見つけながら試す）",
        "図鑑・実験キット（仕組みや原理を調べる）",
        "ボードゲーム・将棋（ルールと戦略を考える）"
      ],
      lessons: "プログラミング・算数・理科実験・将棋・ロボット教室など「考えること」が軸の習い事が向いています。正解よりも「どう考えたか」を大切にしてくれる環境を選びましょう。",
      futureStrengths: [
        "論理的思考力・課題解決力",
        "深く集中して探究する力",
        "仮説を立てて検証するサイエンス思考"
      ]
    }
  },
  emotional: {
    typeName: "気持ちを感じ取る共感タイプ",
    typeLabel: "感情型",
    typeEmoji: "💗",
    typeColor: "#EC4899",
    typeColorLight: "#FDF2F8",
    typeColorMid: "#FBCFE8",
    description: "人の表情や雰囲気、気持ちに反応しやすいタイプです。\n安心できる関係の中で、表現力や共感力が伸びやすい傾向があります。",
    strengths: ["共感力がある", "表現が豊か", "人との関係を大切にしやすい"],
    weaknesses: ["強く言われると傷つきやすい", "気持ちの切り替えに時間がかかる", "周囲の雰囲気に影響されやすい"],
    ngBehaviors: ["泣くことを否定する", "感情を軽く扱う", "結果だけで評価する"],
    goodPhrases: ["悲しかったんだね", "そう感じたんだね", "気持ちを教えてくれてありがとう"],
    dailyAdvice: "まず気持ちを受け止めてから、次の行動を一緒に考える。感情を否定せず、言葉にする練習を支える。",
    guide: {
      parentingTips: [
        "まず感情を受け止めてから、次の行動を提案する",
        "「すごいね」より「どんな気持ちだった？」と感情を引き出す",
        "安心できる関係がこの子の力を引き出す土台になる"
      ],
      ageYoung: "泣いても怒っても、まず「そうだよね、〇〇だったんだね」と感情に名前をつけて受け取りましょう。感情を否定しないことが信頼関係の土台です。",
      ageOlder: "友達とのトラブルでは「相手はどんな気持ちだったかな？」と一緒に考えましょう。気持ちを言語化する力が、表現力と人間関係の豊かさにつながります。",
      activities: [
        "ごっこ遊び・おままごと（役を演じて感情を表現）",
        "絵日記・お手紙（気持ちを形にする）",
        "歌・ダンス・劇（表現を楽しむ）"
      ],
      lessons: "演劇・合唱・ダンス・ピアノ・絵画など「表現すること」を軸にした習い事が向いています。「上手に」より「楽しんで表現できる」環境を優先しましょう。",
      futureStrengths: [
        "高い共感力・対人関係力",
        "感情を言語化する表現力",
        "チームを調和させる力"
      ]
    }
  },
  active: {
    typeName: "まずやってみる挑戦タイプ",
    typeLabel: "行動型",
    typeEmoji: "⚡",
    typeColor: "#F97316",
    typeColorLight: "#FFF7ED",
    typeColorMid: "#FED7AA",
    description: "考える前に動きながら学ぶことが得意なタイプです。\n体験を通じて理解し、挑戦する中で力を伸ばしやすい傾向があります。",
    strengths: ["行動力がある", "挑戦を楽しめる", "体験から学びやすい"],
    weaknesses: ["待つことが苦手", "細かい説明を聞き続けるのが苦手", "勢いで動いて失敗することがある"],
    ngBehaviors: ["長く説明しすぎる", "動きたい気持ちを押さえつける", "失敗を強く叱る"],
    goodPhrases: ["まず一回やってみよう", "やってみて何がわかった？", "次はどうしたらうまくいきそう？"],
    dailyAdvice: "説明を短くし、体験の中で学ばせる。失敗した後に責めるのではなく、次の工夫につなげる。",
    guide: {
      parentingTips: [
        "「まずやってみて」と背中を押す声かけが最も効果的",
        "長い説明より体験させてから振り返る",
        "失敗を責めず「次はどうしようか」と前向きに切り替える"
      ],
      ageYoung: "探索したいという気持ちを尊重し、安全な環境でたっぷり体験させましょう。危険なこと以外は「ダメ」を減らして見守ることで、挑戦する力が育ちます。",
      ageOlder: "「やってみたらどうだった？」と振り返りの習慣をつけましょう。行動から学ぶ力が育ちます。挑戦したいという意欲を全力で応援してください。",
      activities: [
        "外遊び・かけっこ・公園遊び（体全体で動く）",
        "スポーツ・鬼ごっこ（競争と達成感を体験）",
        "工作・DIY（作って壊して試す）"
      ],
      lessons: "スポーツ全般・水泳・体操・武道など「体を動かすこと」が軸の習い事が向いています。体験型の理科教室や工作教室も合います。",
      futureStrengths: [
        "行動力・実行力",
        "失敗を恐れないチャレンジ精神",
        "体験から素早く学ぶ適応力"
      ]
    }
  },
  stable: {
    typeName: "安心して伸びる継続タイプ",
    typeLabel: "安定型",
    typeEmoji: "🌿",
    typeColor: "#10B981",
    typeColorLight: "#ECFDF5",
    typeColorMid: "#A7F3D0",
    description: "安心できる環境や見通しがあると力を発揮しやすいタイプです。\n同じことを繰り返す中で、着実に成長しやすい傾向があります。",
    strengths: ["継続力がある", "丁寧に取り組める", "安心できる環境で力を発揮しやすい"],
    weaknesses: ["急な変化が苦手", "初めてのことに慎重になりやすい", "慣れるまで時間がかかる"],
    ngBehaviors: ["いきなり新しいことをさせる", "慎重さを責める", "他の子と比べる"],
    goodPhrases: ["ゆっくりで大丈夫", "いつもの流れでやってみよう", "少しずつ慣れていこう"],
    dailyAdvice: "事前に予定や流れを伝える。小さな成功体験を積み重ねて、自信につなげる。",
    guide: {
      parentingTips: [
        "「次は〇〇するよ」と事前に予告して見通しを持たせる",
        "急かさず、その子のペースを尊重する",
        "慣れるまで待つことが、この子の力を最大限引き出す"
      ],
      ageYoung: "毎日同じルーティンを大切にしましょう。「お風呂→ご飯→絵本→おやすみ」などの流れが安心感につながり、力を発揮する土台になります。",
      ageOlder: "新しいことに挑戦する際は「少しだけ試してみよう」「嫌なら戻っていいよ」と安全地帯を確保しましょう。小さな成功体験を積み重ねることが大切です。",
      activities: [
        "同じおもちゃを繰り返して完成度を上げる遊び",
        "折り紙・粘土（じっくりコツコツ系）",
        "図書館・絵本（同じ本を何度も読む）"
      ],
      lessons: "ピアノ・習字・書道・そろばんなど「継続して積み上げること」が価値になる習い事が向いています。慣れるまで時間がかかりますが、続けると大きな力になります。",
      futureStrengths: [
        "粘り強さ・継続力",
        "丁寧さ・正確さ",
        "コツコツ積み上げる安定した実行力"
      ]
    }
  },
  balance: {
    typeName: "場面に合わせて力を出すバランスタイプ",
    typeLabel: "バランス型",
    typeEmoji: "🌈",
    typeColor: "#8B5CF6",
    typeColorLight: "#F5F3FF",
    typeColorMid: "#DDD6FE",
    description: "一つの傾向に偏りすぎず、場面によってさまざまな強みが出やすいタイプです。\n環境や関わる人によって、考える力・感じる力・動く力・続ける力が変化しやすい傾向があります。",
    strengths: ["柔軟性がある", "複数の力を持っている", "環境に合わせて変化しやすい"],
    weaknesses: ["得意な場面が見えにくい", "親が特徴をつかみにくい", "環境によってムラが出ることがある"],
    ngBehaviors: ["一つのタイプに決めつける", "その日の様子だけで判断する", "比較して評価する"],
    goodPhrases: ["今日はどんな感じだった？", "どれが一番やりやすかった？", "いろいろ試してみよう"],
    dailyAdvice: "複数の経験をさせながら、子どもが自然に力を発揮する場面を観察する。親が決めつけすぎず、得意が出る環境を探していく。",
    guide: {
      parentingTips: [
        "一つのタイプに決めつけず、場面ごとの反応を観察する",
        "どの場面でイキイキするかを観察してその文脈を増やす",
        "「この子は今どのモード？」と合わせた関わり方を試す"
      ],
      ageYoung: "様々な刺激を与えながら、どんな場面で笑顔が増えるかを観察しましょう。固定した遊び方にとらわれず、いろいろ試すことが大切です。",
      ageOlder: "「論理・感情・行動・安定」のどの場面で最もイキイキするかを観察し、その文脈でもっと経験を積ませましょう。得意が出る環境を探す視点を大切に。",
      activities: [
        "様々なジャンルの遊びをバランスよく体験する",
        "体験型の活動（料理・工作・自然遊び）",
        "友達と遊ぶ・一人で遊ぶ両方を取り入れる"
      ],
      lessons: "一つに絞らず2〜3つを試してみましょう。最も続けやすくイキイキするものが「本来の傾向」を教えてくれます。体験教室を積極的に利用しましょう。",
      futureStrengths: [
        "状況に応じた柔軟な対応力",
        "複数の視点を持てる多様性",
        "チームの中でつなぎ役になれる力"
      ]
    }
  }
};
