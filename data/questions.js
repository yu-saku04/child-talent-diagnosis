const questionsByAge = {

  // ========== 0〜2歳 ==========
  '0-2': [
    {
      id: 1,
      text: "はじめて見るおもちゃを渡したとき、どんな反応をしますか？",
      options: [
        { text: "じっと観察してから触り始める",    type: "logical"   },
        { text: "嬉しそうに声を上げる",            type: "emotional" },
        { text: "すぐ手を伸ばして触ろうとする",    type: "active"    },
        { text: "親の顔を見てから触る",            type: "stable"    }
      ]
    },
    {
      id: 2,
      text: "泣いているとき、何で落ち着きやすいですか？",
      options: [
        { text: "原因を取り除くと落ち着く",                type: "logical"   },
        { text: "抱っこや声かけで安心する",                type: "emotional" },
        { text: "気を紛らわすものを渡すと切り替わる",      type: "active"    },
        { text: "いつもの抱き方や場所で落ち着く",          type: "stable"    }
      ]
    },
    {
      id: 3,
      text: "知らない人に会ったとき、どんな反応をしますか？",
      options: [
        { text: "じっと相手を観察する",                type: "logical"   },
        { text: "親にしがみついて警戒する",            type: "emotional" },
        { text: "物怖じせず近づこうとする",            type: "active"    },
        { text: "慣れるまでかなり時間がかかる",        type: "stable"    }
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
      text: "気に入ったおもちゃや遊びがあるとき、どんな様子ですか？",
      options: [
        { text: "同じ動作を繰り返して確かめる",        type: "logical"   },
        { text: "親に見せたがる・共有したがる",        type: "emotional" },
        { text: "どんどん次の遊びへ移っていく",        type: "active"    },
        { text: "毎日同じおもちゃや遊びを好む",        type: "stable"    }
      ]
    },
    {
      id: 6,
      text: "絵本の読み聞かせのとき、どんな様子ですか？",
      options: [
        { text: "絵を指差して確認したがる",                type: "logical"   },
        { text: "お気に入りのページで大きく反応する",      type: "emotional" },
        { text: "自分でページをめくりたがる",              type: "active"    },
        { text: "同じ本を何度も読んでほしがる",            type: "stable"    }
      ]
    },
    {
      id: 7,
      text: "体を動かす遊びのとき、どんな様子ですか？",
      options: [
        { text: "動き方を観察してからまねする",    type: "logical"   },
        { text: "楽しさを声や表情で表現する",      type: "emotional" },
        { text: "積極的に動き回る",                type: "active"    },
        { text: "慣れた動きを繰り返すのが好き",    type: "stable"    }
      ]
    },
    {
      id: 8,
      text: "他の子どもと同じ空間にいるとき、どんな様子ですか？",
      options: [
        { text: "相手をじっくり観察する",              type: "logical"   },
        { text: "相手の泣き声や表情に反応する",        type: "emotional" },
        { text: "すぐ近づいて関わろうとする",          type: "active"    },
        { text: "親の近くから離れにくい",              type: "stable"    }
      ]
    },
    {
      id: 9,
      text: "欲しいものが手に入らないとき、どうなりやすいですか？",
      options: [
        { text: "別の方法を試そうとする",              type: "logical"   },
        { text: "激しく泣いて感情を表す",              type: "emotional" },
        { text: "すぐ別のものに切り替える",            type: "active"    },
        { text: "なかなか気持ちが切り替わらない",      type: "stable"    }
      ]
    },
    {
      id: 10,
      text: "眠りにつくとき、どんな傾向がありますか？",
      options: [
        { text: "周りの様子を確認してから眠る",                type: "logical"   },
        { text: "抱っこや添い寝を強く求める",                  type: "emotional" },
        { text: "疲れたら自分からすっと眠れる",                type: "active"    },
        { text: "毎回同じルーティンでないと落ち着かない",      type: "stable"    }
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

  // ========== 3〜4歳 ==========
  '3-4': [
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

  // ========== 5〜7歳 ==========
  '5-7': [
    {
      id: 1,
      text: "新しいおもちゃや遊びを見たとき、子どもはどんな反応をしやすいですか？",
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
    dailyAdvice: "結果だけでなく、考えた過程を褒める。質問が多いときは、すぐ答えを出さず一緒に考える。"
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
    dailyAdvice: "まず気持ちを受け止めてから、次の行動を一緒に考える。感情を否定せず、言葉にする練習を支える。"
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
    dailyAdvice: "説明を短くし、体験の中で学ばせる。失敗した後に責めるのではなく、次の工夫につなげる。"
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
    dailyAdvice: "事前に予定や流れを伝える。小さな成功体験を積み重ねて、自信につなげる。"
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
    dailyAdvice: "複数の経験をさせながら、子どもが自然に力を発揮する場面を観察する。親が決めつけすぎず、得意が出る環境を探していく。"
  }
};
