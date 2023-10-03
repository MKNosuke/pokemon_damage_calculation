'use strict';
//season11 2023/10/1-2023/11/1 2023/10/3時点 TOP100

const POKE_DATA = [
  {
    index: 1017,
    name: "オーガポン"
  },

  {
    index: 149,
    name: "カイリュー"
  },

  {
    index: 987,
    name: "ハバタクカミ"
  },

  {
    index: 901,
    name: "ガチグマ（アカツキ）"
  },
  
  {
    index: 1000,
    name: "サーフゴー"
  },
  
  {
    index: 1002,
    name: "パオジアン"
  },
  
  {
    index: 892,
    name: "ウーラオス(連撃)"
  },
  
  {
    index: 38,
    name: "キュウコン（アローラ）"
  },
  
  {
    index: 991,
    name: "テツノツツミ"
  },
  
  {
    index: 212,
    name: "ハッサム"
  },
  
  {
    index: 1004,
    name: "イーユイ"
  },
  
  {
    index: 645,
    name: "ランドロス（霊獣）"
  },
  
  {
    index: 472,
    name: "グライオン"
  },
  
  {
    index: 892,
    name: "ウーラオス（一撃）"
  },
  
  {
    index: 1003,
    name: "ディンルー"
  },
  
  {
    index: 445,
    name: "ガブリアス"
  },
  
  {
    index: 395,
    name: "エンペルト"
  },
  
  {
    index: 998,
    name: "セグレイブ"
  },
  
  {
    index: 902,
    name: "イダイトウ（♂）"
  },
  
  {
    index: 485,
    name: "ヒードラン"
  },
  
  {
    index: 934,
    name: "キョジオーン"
  },
  
  {
    index: 979,
    name: "コノヨザル"
  },
  
  {
    index: 977,
    name: "ヘイラッシャ"
  },
  
  {
    index: 350,
    name: "ミロカロス"
  },
  
  {
    index: 812,
    name: "ゴリランダー"
  },
  
  {
    index: 778,
    name: "ミミッキュ"
  },
  
  {
    index: 970,
    name: "キラフロル"
  },
  
  {
    index: 479,
    name: "ロトム（ウォッシュ）"
  },
  
  {
    index: 887,
    name: "ドラパルト"
  },
  
  {
    index: 706,
    name: "ヌメルゴン（ヒスイ）"
  },
  
  {
    index: 1013,
    name: "ヤバソチャ"
  },
  
  {
    index: 784,
    name: "ジャラランガ"
  },
  
  {
    index: 748,
    name: "ドヒドイデ"
  },
  
  {
    index: 738,
    name: "クワガノン"
  },
  
  {
    index: 145,
    name: "サンダー"
  },
  
  {
    index: 1005,
    name: "トドロクツキ"
  },
  
  {
    index: 143,
    name: "カビゴン"
  },
  
  {
    index: 488,
    name: "クレセリア"
  },
  
  {
    index: 462,
    name: "ジバコイル"
  },
  
  {
    index: 983,
    name: "ドドゲザン"
  },
  
  {
    index: 823,
    name: "アーマーガア"
  },
  
  {
    index: 389,
    name: "ドダイトス"
  },
  
  {
    index: 36,
    name: "ピクシー"
  },
  
  {
    index: 903,
    name: "オオニューラ"
  },
  
  {
    index: 1014,
    name: "イイネイヌ"
  },
  
  {
    index: 286,
    name: "キノガッサ"
  },
  
  {
    index: 184,
    name: "マリルリ"
  },
  
  {
    index: 911,
    name: "ラウドボーン"
  },
  
  {
    index: 994,
    name: "テツノドクガ"
  },
  
  {
    index: 908,
    name: "マスカーニャ"
  },
  
  {
    index: 197,
    name: "ブラッキー"
  },
  
  {
    index: 1006,
    name: "テツノブジン"
  },
  
  {
    index: 980,
    name: "ドオー"
  },
  {
    index: 609,
    name: "シャンデラ"
  },
  
  {
    index: 956,
    name: "クエスパトラ"
  },
  
  {
    index: 637,
    name: "ウルガモス"
  },
  
  {
    index: 861,
    name: "オーロンゲ"
  },

  {
    index: 992,
    name: "テツノカイナ"
  },
  
  {
    index: 901,
    name: "ガチグマ"
  },
  
  {
    index: 594,
    name: "ママンボウ"
  },
  
  {
    index: 450,
    name: "カバルドン"
  },
  
  {
    index: 900,
    name: "バサギリ"
  },
  
  {
    index: 248,
    name: "バンギラス"
  },
  
  {
    index: 1001,
    name: "チオンジェン"
  },
  
  {
    index: 473,
    name: "マンムー"
  },
  
  {
    index: 534,
    name: "ローブシン"
  },
  
  {
    index: 894,
    name: "レジエレキ"
  },
  
  {
    index: 937,
    name: "ソウブレイズ"
  },
  
  {
    index: 642,
    name: "ボルトロス（霊獣）"
  },
  
  {
    index: 59,
    name: "ウインディ（ヒスイ）"
  },
  
  {
    index: 44,
    name: "ギャラドス"
  },
  
  {
    index: 324,
    name: "コータス"
  },
  
  {
    index: 1016,
    name: "キチキギス"
  },
  
  {
    index: 858,
    name: "ブリムオン"
  },
  
  {
    index: 635,
    name: "サザンドラ"
  },
  
  {
    index: 392,
    name: "ゴウカザル"
  },
  
  {
    index: 279,
    name: "ペリッパー"
  },
  
  {
    index: 959,
    name: "デカヌチャン"
  },
  
  {
    index: 985,
    name: "サケブシッポ"
  },
  
  {
    index: 571,
    name: "ゾロアーク（ヒスイ）"
  },
  
  {
    index: 700,
    name: "ニンフィア"
  },
  
  {
    index: 984,
    name: "イダイナキバ"
  },
  
  {
    index: 469,
    name: "メガヤンマ"
  },
  
  {
    index: 242,
    name: "ハピナス"
  },
  
  {
    index: 658,
    name: "ゲッコウガ"
  },
  
  {
    index: 964,
    name: "イルカマン"
  },
  
  {
    index: 373,
    name: "ボーマンダ"
  },
  
  {
    index: 38,
    name: "キュウコン"
  },
  
  {
    index: 110,
    name: "マタドガス（ガラル）"
  },
  
  {
    index: 591,
    name: "モロバレル"
  },
  
  {
    index: 342,
    name: "シザリガー"
  },
  
  {
    index: 448,
    name: "ルカリオ"
  },
  
  {
    index: 713,
    name: "クレベース"
  },
  
  {
    index: 845,
    name: "ウッウ"
  },
  
  {
    index: 282,
    name: "サーナイト"
  },
  
  {
    index: 479,
    name: "ロトム（ヒート）"
  },
  
  {
    index: 113,
    name: "ラッキー"
  },
  
  {
    index: 1011,
    name: "カミッチュ"
  },
  
  {
    index: 128,
    name: "ケンタロス（炎）"
  },
  
  {
    index: 989,
    name: "スナノケガワ"
  },
  
]