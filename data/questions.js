const questions = [
  {
    id: 1,
    text: "新しいおもちゃや遊びを見たとき、子どもはどんな反応をしやすいですか？",
    options: [
      { text: "まず仕組みやルールを知りたがる", type: "logical" },
      { text: "誰かと一緒に楽しみたがる", type: "emotional" },
      { text: "すぐに触って試そうとする", type: "active" },
      { text: "少し様子を見てから始める", type: "stable" }
    ]
  },
  {
    id: 2,
    text: "うまくできないことがあったとき、どんな反応をしやすいですか？",
    options: [
      { text: "なぜできなかったのか考える", type: "logical" },
      { text: "悔しさや悲しさを強く表す", type: "emotional" },
      { text: "もう一度すぐ挑戦する", type: "active" },
      { text: "いったんやめて落ち着こうとする", type: "stable" }
    ]
  },
  {
    id: 3,
    text: "友だちと遊ぶとき、どんな傾向がありますか？",
    options: [
      { text: "ルールや順番を気にする", type: "logical" },
      { text: "相手の気持ちをよく見ている", type: "emotional" },
      { text: "遊びをリードしたがる", type: "active" },
      { text: "慣れた相手と安心して遊びたい", type: "stable" }
    ]
  },
  {
    id: 4,
    text: "予定が急に変わったとき、どんな反応をしやすいですか？",
    options: [
      { text: "理由を説明されると納得しやすい", type: "logical" },
      { text: "気持ちが揺れやすい", type: "emotional" },
      { text: "すぐ次の行動に移れる", type: "active" },
      { text: "不安になりやすい", type: "stable" }
    ]
  },
  {
    id: 5,
    text: "集中しているときの様子は？",
    options: [
      { text: "一つのことを深く考える", type: "logical" },
      { text: "物語や人との関わりに入り込む", type: "emotional" },
      { text: "体を動かしながら集中する", type: "active" },
      { text: "静かな環境で集中しやすい", type: "stable" }
    ]
  },
  {
    id: 6,
    text: "何かを選ぶとき、どんな傾向がありますか？",
    options: [
      { text: "比べて考えて選ぶ", type: "logical" },
      { text: "好き嫌いや気持ちで選ぶ", type: "emotional" },
      { text: "直感ですぐ選ぶ", type: "active" },
      { text: "いつものものを選びやすい", type: "stable" }
    ]
  },
  {
    id: 7,
    text: "遊び方の特徴は？",
    options: [
      { text: "パズルや組み立てが好き", type: "logical" },
      { text: "ごっこ遊びや物語が好き", type: "emotional" },
      { text: "外遊びや体を動かす遊びが好き", type: "active" },
      { text: "慣れた遊びを繰り返すのが好き", type: "stable" }
    ]
  },
  {
    id: 8,
    text: "子どもが安心しやすいのはどんなときですか？",
    options: [
      { text: "見通しや理由がわかるとき", type: "logical" },
      { text: "気持ちを受け止めてもらえたとき", type: "emotional" },
      { text: "自由に動けるとき", type: "active" },
      { text: "いつもの流れが守られているとき", type: "stable" }
    ]
  },
  {
    id: 9,
    text: "苦手なことに向き合うとき、どんな支援が合いやすいですか？",
    options: [
      { text: "手順を説明される", type: "logical" },
      { text: "気持ちに寄り添ってもらう", type: "emotional" },
      { text: "まず一緒にやってみる", type: "active" },
      { text: "安心できる環境で練習する", type: "stable" }
    ]
  },
  {
    id: 10,
    text: "親が急かしたとき、どうなりやすいですか？",
    options: [
      { text: "考えがまとまりにくくなる", type: "logical" },
      { text: "気持ちが乱れやすくなる", type: "emotional" },
      { text: "雑になりやすい", type: "active" },
      { text: "不安が強くなりやすい", type: "stable" }
    ]
  },
  {
    id: 11,
    text: "好きなことに取り組むときの特徴は？",
    options: [
      { text: "細かいところまでこだわる", type: "logical" },
      { text: "感情豊かに表現する", type: "emotional" },
      { text: "夢中で動き続ける", type: "active" },
      { text: "同じことを安定して続ける", type: "stable" }
    ]
  },
  {
    id: 12,
    text: "伸ばしてあげたい力はどれに近いですか？",
    options: [
      { text: "考える力", type: "logical" },
      { text: "人の気持ちを理解する力", type: "emotional" },
      { text: "挑戦する力", type: "active" },
      { text: "継続する力", type: "stable" }
    ]
  }
];

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
