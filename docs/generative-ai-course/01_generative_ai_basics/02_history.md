# 1.2 生成AIの歴史

> **本セクションの目標:** 生成AIがどのような歴史的文脈で生まれ、現在に至るかを理解する。

---

## 本セクションの狙い

生成AIは、限られた研究者や大企業の専有物から、誰もが日常的に使える「民主化された知能」へと急速に進化しました。本セクションでは、AIが過去数十年の停滞期（AIの冬）をいかに乗り越え、2017年の **Transformer** 登場を境にどのような加速を見せたのか、その歴史的変遷を辿ります。

### 期待される学習効果

1. **進化速度の体感**: 過去と比較して、現在の生成AIの進化がいかに異常なスピードで進んでいるか、その開発コストやモデル性能の推移から理解する。
2. **技術的転換点の把握**: Transformer、スケーリング則、ChatGPTの公開といった重要なマイルストーンが、なぜ「革命的」だったのかを説明できる。
3. **将来予測の視点獲得**: 歴史の延長線上に「AIエージェント時代」を捉え、技術が今後どの方向へ向かうのか、自分なりの予測を持つ。

---

## 年表：生成AIの進化

現在の生成AIにつながる大きな転換点は 🔑 で示した２つです。

```txt
1943  ──  マカロックとピッツが人工ニューロンモデルを発表
1950  ──  チューリングテスト提唱（Alan Turing）
1958  ──  パーセプトロン発明（Frank Rosenblatt）
1986  ──  バックプロパゲーションの実用化
1997  ──  LSTM（長短期記憶）発明
2014  ──  GAN（敵対的生成ネットワーク）発明（Ian Goodfellow）
2017  ──  🔑 Transformer 論文「Attention Is All You Need」発表（Google Brain）
2018  ──  BERT（Google）、GPT-1（OpenAI）登場
2020  ──  GPT-3 登場（1750億パラメータ）
2021  ──  DALL-E（画像生成）登場
2022  ──  🔑 ChatGPT 公開（OpenAI）→ 5日で100万ユーザー達成
2023  ──  GPT-4、Gemini（Google）、Claude（Anthropic）登場
2024  ──  Llama 3（Meta）、GPT-4o、Claude 3.5 など群雄割拠
2025  ──  DeepSeek R1、GPT-5、エージェントAI時代へ
2026  ──  Llama 4、Personal AI Agents、本格的な共創（Vibe Coding）時代へ
```

---

## Transformer が変えたすべて

2017年の「Attention Is All You Need」論文以前と以後では、AIの進化速度が劇的に変わりました。

```txt
【Transformer以前の世界】
RNN/LSTM → 長い文章は前の情報を忘れる、並列処理不可

【Transformer以後の世界】
・Self-Attention: 文章全体を一度に見る
・並列処理: GPUで大規模学習が可能に
・スケーリング則: データ・パラメータ・計算量を増やすほど性能向上
→ GPT-3, GPT-4, Claude, Gemini すべての基盤
```

---

## 💥 TIPS — LLMの学習コストはいくら？

飲み会や会議で「それってどれくらい凄いの？」と聞かれたときに使える、モデルの訓練コスト情報です。

| モデル           | 登場年 | 推定訓練コスト                              |
| ---------------- | ------ | ------------------------------------------- |
| **GPT-3**        | 2020   | 約 **$1,200万** (約18億円)                  |
| **GPT-4**        | 2023   | 約 **$1億** (約150億円)                     |
| **DeepSeek R1**  | 2025   | 約 **$600万** (約9億円) ※効率化により激減   |
| **GPT-5**        | 2025   | 約 **$5億〜25億** (推定)                    |
| **Llama 4 / V3** | 2026   | 約 **$10億〜** (大規模推論基盤の構築コスト) |

「GPT-4を1つ作るのにスーパーカーが数百台買えるほどのコストがかかっています」と言うと、そのスケール感が伝わります。
また、数億円から数百億円あれば学習できるということは、技術を持った大企業であれば独自モデルをつくることができる時代になったともいえます。

> OpenAI の Sam Altman CEO は、2023年4月の MIT イベントで  
> **「GPT-4 の学習コストは1億ドル以上かかった」** と発言しています。  
> （具体的な金額は非公開ですが、業界推定は $80M〜$100M）
>
> 一方、中国の DeepSeek R1（2025年1月）は約 **600万ドル** で同等性能を達成したと報告され、AI界に衝撃を与えました。  
> これは「AIの民主化」を象徴する出来事として注目されています。  

📖 **出典:**

- [Forbes: The Extreme Cost Of Training AI Models (2024)](https://www.forbes.com/sites/katharinabuchholz/2024/08/23/the-extreme-cost-of-training-ai-models/)  
- [TechRadar: OpenAI spent $80M to $100M training GPT-4 (2025)](https://www.techradar.com/pro/openai-spent-usd80m-to-usd100m-training-gpt-4-chinese-firm-claims-it-trained-its-rival-ai-model-for-usd3-million-using-just-2-000-gpus)
- [CNBC (2025)](https://www.cnbc.com/2025/01/31/deepseeks-hardware-spend-could-be-as-high-as-500-million-report.html)
- [The Decoder: Meta's Llama 4 is trained on 100,000+ H100s (2026)](https://the-decoder.com/metas-llama-4-is-trained-on-more-than-100000-h100-gpus-zuckerberg-says/)

---

## 学習効果の確認

このセクションを振り返り、隣の人（または3名1組のグループ）で、以下のワークを行ってください。

> テーマ：「技術の加速度的な進化と、自分たちの役割の変化」（10分間）

1. 年表や学習コストの推移を見て、最も「衝撃的だ」と感じたポイントはどこですか？その理由も共有してください。
2. 「1人1台のパーソナルAIエージェント」が普及する2026年、今の自分の業務や学習の何割がAIに置き換わり、自分は「人間にしかできない何」に時間を使いたいですか？

> 自分ごととして捉えることで、技術の理解が圧倒的に深まります。

---

## Apppendix

---

## 参考: 年表詳細 － 生成AIの歩み

### 🕰️ 黎明期（1950年代〜2000年代）

| 年        | 出来事                                                                   |
| --------- | ------------------------------------------------------------------------ |
| **1950**  | Alan Turing が「チューリングテスト」を提唱。「機械は思考できるか？」     |
| **1956**  | ダートマス会議でAI研究が本格スタート                                     |
| **1966**  | 世界初のチャットボット「ELIZA」登場（MIT）                               |
| **1980s** | ニューラルネットワークの基礎研究（Hopfield Network, Backpropagation）    |
| **1997**  | IBM Deep Blue がチェス世界王者を破る                                     |
| **2006**  | Geoffrey Hinton らによるディープラーニング再発見（Deep Belief Networks） |

### 🚀 深層学習の時代（2010年代）

| 年       | 出来事                                                                                    |
| -------- | ----------------------------------------------------------------------------------------- |
| **2012** | AlexNet が ImageNet で圧勝。深層学習ブームへ                                              |
| **2014** | GAN（敵対的生成ネットワーク）を Ian Goodfellow が発明                                     |
| **2015** | Google DeepMind の AlphaGo が囲碁のプロを超える                                           |
| **2017** | Google が「**Attention Is All You Need**」論文を発表 → **Transformer アーキテクチャ誕生** |
| **2018** | OpenAI が GPT-1 を公開（1.17億パラメータ）                                                |
| **2019** | GPT-2（15億パラメータ）、「危険すぎて公開できない」と話題に                               |

> 📚 参考: Vaswani et al., "[Attention Is All You Need](https://arxiv.org/abs/1706.03762)", 2017

### 🌟 生成AIの爆発（2020年代）

| 年          | 出来事                                                                     |
| ----------- | -------------------------------------------------------------------------- |
| **2020**    | GPT-3 公開（1750億パラメータ）。少ない例示で多様なタスクをこなす           |
| **2021**    | GitHub Copilot プレビュー版公開（Codex ベース）                            |
| **2021**    | DALL-E（第1版）公開。テキストから画像生成                                  |
| **2022/3**  | **ChatGPT 公開**（GPT-3.5 ベース）。2ヶ月でMAU 1億人突破                   |
| **2022/8**  | Stable Diffusion オープンソース公開。画像生成AI民主化                      |
| **2023/3**  | GPT-4 公開。マルチモーダル対応                                             |
| **2023/3**  | Microsoft 365 Copilot 発表（Teams, Word, Excel 統合）                      |
| **2023/11** | OpenAI の「Altman 解任劇」と復帰                                           |
| **2024/2**  | Google Gemini 1.5 Pro 公開（100万トークンコンテキスト）                    |
| **2024/3**  | Claude 3（Anthropic）公開、GPT-4を超えるベンチマーク                       |
| **2024/5**  | OpenAI GPT-4o 公開（リアルタイム音声対話）                                 |
| **2025/1**  | **DeepSeek R1** 公開。オープンソースで GPT-4 レベルの性能、中国発で衝撃    |
| **2025/2**  | **Vibe Coding** という概念が Andrej Karpathy によって提唱                  |
| **2025/3**  | GPT-4.5, Claude 3.7 Sonnet, Gemini 2.5 Pro 相次いで公開                    |
| **2025/5**  | OpenAI **GPT-5** 公開、Anthropic Claude 4, Google Gemini 3 が登場          |
| **2025/11** | Microsoft Ignite 2025 で **Work IQ / Fabric IQ / Foundry IQ** 発表         |
| **2026/1**  | **Llama 4** (Meta) と **DeepSeek-V3** 登場。推論効率の極限へ               |
| **2026/2**  | **Personal AI Agents** がOS標準搭載（Windows Work IQ, Apple Intelligence） |
| **2026/3**  | **Human-AI Collaboration**。マルチモーダル推論と AI 共創の一般化           |

> 📚 参考: [Qualcomm: The rise of generative AI — A timeline of breakthrough innovations](https://www.qualcomm.com/news/onq/2024/02/the-rise-of-generative-ai-timeline-of-breakthrough-innovations)  
> 📚 参考: [Microsoft Ignite 2025: Work IQ and Agentic Future](https://www.microsoft.com/en-us/microsoft-365/blog/2025/11/18/microsoft-ignite-2025-copilot-and-agents-built-to-power-the-frontier-firm/)
> 📚 参考: [Wikipedia: Timeline of artificial intelligence](https://en.wikipedia.org/wiki/Timeline_of_artificial_intelligence)

---

**次のセクション →** [1.3 生成AIの仕組み](./03_how_it_works.md)
