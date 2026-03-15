# 1.6 モデルによる特徴の一覧

> **本セクションの目標:** 主要なLLMモデルの特性・スペックを理解し、用途に合わせて選択できる。

---

## 本セクションの狙い

生成AIの技術進化は極めて速く、数ヶ月前まで最高性能だったモデルが次世代モデルに取って代わられることも珍しくありません。しかし、各開発会社（OpenAI, Anthropic, Google, Metaなど）が提供するモデルには独自の「性格」や「強み」があります。本セクションでは、2026年3月現在の主要モデルを整理し、特性に基づいた適切なツール選定ができるようになることを目指します。

### 期待される学習効果

1. **各社モデルの個性の把握**: 文章作成、コーディング、論理推論など、タスクごとに最適なモデルを使い分ける判断基準を持つ。
2. **スペック値の理解**: コンテキストウィンドウやパラメータ数といった数値が、実際の利便性にどう影響するかを理解する。
3. **コストと性能のトレードオフ**: 高性能な大規模モデルと、高速・低コストな小規模モデルの使い分けができるようになる。

---

## 主要クローズドモデル比較（2026年3月時点）

2025年にGPT-5やClaude 4、Gemini 3といった「フロンティアモデル」が登場し、AIエージェントとしての実用性が飛躍的に向上しました。特に推論能力と長期記憶（コンテキストウィンドウ）の拡大により、複雑なビジネスワークフローの自動化が現実のものとなっています。

| モデル                | 開発元    | 特徴・パラメータ推定 | コンテキスト | 強み                             | API価格（Input/Output per 1M tokens） |
| --------------------- | --------- | -------------------- | ------------ | -------------------------------- | ------------------------------------- |
| **GPT-5**             | OpenAI    | 非公開（数兆）       | 1M+          | 究極の推論力、エージェント性能   | $2.50 / $15.00                        |
| **GPT-5 mini**        | OpenAI    | 非公開               | 128K         | 高速、低コスト、GPT-4o超え       | $0.15 / $0.60                         |
| **Claude 4.6 Opus**   | Anthropic | 非公開               | 500K         | 緻密な論理、高い安全性、日本語◎  | $15.00 / $75.00                       |
| **Claude 3.7 Sonnet** | Anthropic | 非公開               | 200K         | コーディング支援、高速レスポンス | $3.00 / $15.00                        |
| **Gemini 3.1 Pro**    | Google    | 非公開               | 2M+          | 超長文処理、Google連携、数学     | $1.25 / $3.75                         |
| **Gemini 2.5 Flash**  | Google    | 非公開               | 1M           | リアルタイム性、マルチモーダル   | $0.10 / $0.40                         |

> 📚 参考:
>
> - [Vellum LLM Leaderboard](https://vellum.ai/llm-leaderboard)
> - [OpenAI API Pricing](https://openai.com/api/pricing/)
>
> コメント:
> 2025年11月24日にリリースされたClaude Opus 4.5付近を境に、
> AIへのインプットと指示が適切であれば、熟練エンジニアでも
> ほとんど手直しの必要がないソースコードが生成できるようになりました。
> ソフトウエア開発技術者から見ると大きな変化が体感できるタイミングでした。

---

## 主要オープンソースモデル比較（2026年3月時点）

オープンソース（オープンウェイト）モデルも、MetaのLlama 4や中国発のDeepSeek-V3の登場により、クローズドモデルに肉薄する性能をローカル環境や自社サーバーで実現できるようになりました。

| モデル              | 開発元     | パラメータ | 稼働に必要なRAM（FP16） | ライセンス         |
| ------------------- | ---------- | ---------- | ----------------------- | ------------------ |
| **Llama 3.3 70B**   | Meta       | 70B        | ~140 GB                 | Meta Llama License |
| **Llama 3.2 11B**   | Meta       | 11B        | ~22 GB                  | Meta Llama License |
| **Llama 3.2 3B**    | Meta       | 3B         | ~6 GB                   | Meta Llama License |
| **Llama 4 400B+**   | Meta       | 400B+      | ~800 GB                 | Meta Llama License |
| **Llama 4 70B**     | Meta       | 70B        | ~140 GB                 | Meta Llama License |
| **Llama 4 8B**      | Meta       | 8B         | ~16 GB                  | Meta Llama License |
| **DeepSeek R1 70B** | DeepSeek   | 70B        | ~140 GB                 | MIT                |
| **DeepSeek R1 8B**  | DeepSeek   | 8B         | ~16 GB                  | MIT                |
| **DeepSeek-V3**     | DeepSeek   | 671B (MoE) | ~1.3 TB (フル)          | MIT                |
| **DeepSeek R1**     | DeepSeek   | 671B (MoE) | ~1.3 TB (フル)          | MIT                |
| **Mistral 7B v0.3** | Mistral AI | 7B         | ~14 GB                  | Apache 2.0         |
| **Mistral Large 3** | Mistral AI | 123B       | ~246 GB                 | Mistral Commercial |
| **Qwen 2.5 72B**    | Alibaba    | 72B        | ~144 GB                 | Apache 2.0         |
| **Phi-4**           | Microsoft  | 14B        | ~28 GB                  | MIT                |
| **Gemma 3 27B**     | Google     | 27B        | ~54 GB                  | Gemma License      |

> 📚 参考:
>
> - [Label Your Data: LLM Model Size Guide](https://labelyourdata.com/articles/llm-fine-tuning/llm-model-size)
> - [VRAM Calculator](https://huggingface.co/spaces/NyxKrage/LLM-Model-VRAM-Calculator)

---

## RAM要件の詳細（量子化別）

量子化（Quantization）とはモデルの精度を下げてメモリを節約する技術です。通常AIは32ビットや16ビットの精度（FP32/FP16）で計算されますが、これを8ビット（INT8）や4ビット（INT4）に圧縮します。

### イメージ：宇宙の縮小

> 宇宙の直径 930億光年 ($\approx 9.3 \times 10^{10} \times 9.46 \times 10^{15} \approx \mathbf{8.8 \times 10^{26} \text{ m}}$) は、32bit浮動小数点型で表現することができます。
> これを8bit ($2^{8}$、最大255) に圧縮するということは、宇宙の大きさを池袋サンシャイン60の高さ程度の255mまで圧縮するようなものです。
> 理論上は精度が落ちますが、最新のアルゴリズムでは人間の目にはほとんど分からないレベルで性能を維持したまま、メモリ使用量を **1/4以下** にまで削減できます。
>
> 量子化とは、宇宙規模の精密な地図を「ここからあそこまでは全部同じ場所！」と256色の極太マジックで塗りつぶすような作業です。しかし、AIモデルにおいてはこの「極太の塗りつぶし」でも、重要な特徴（境界線）さえ捉えていれば驚くほど正確に動くのが、計算機科学の面白いところです。

### 量子化によるVRAM使用量の削減イメージ（推論時目安）

以下の表は、モデルの重み（Weights）に加えて、推論時に必要なKVキャッシュやアクティベーションバッファ等のオーバーヘッド（約20%）を加味した現実的なVRAM占有量です。

| パラメータ数 | FP32      | FP16/BF16 | INT8（1バイト/P） | INT4（0.5バイト/P） |
| :----------- | :-------- | :-------- | :---------------- | :------------------ |
| **1B**       | ~4.8 GB   | ~2.4 GB   | ~1.2 GB           | ~0.6 GB             |
| **7B**       | ~33.6 GB  | ~16.8 GB  | ~8.4 GB           | ~4.2 GB             |
| **14B**      | ~67.2 GB  | ~33.6 GB  | ~16.8 GB          | ~8.4 GB             |
| **32B**      | ~153.6 GB | ~76.8 GB  | ~38.4 GB          | ~19.2 GB            |
| **72B**      | ~345.6 GB | ~172.8 GB | ~86.4 GB          | ~43.2 GB            |
| **405B**     | ~1.9 TB   | ~972 GB   | ~486 GB           | ~243 GB             |

> 📚 出典: [Hugging Face: Model Memory Calculator](https://huggingface.co/spaces/hf-accelerate/model-memory-usage) / [Transformer Inference Arithmetic](https://kipp.ly/transformer-inference-arithmetic/)

**💡 実用的なガイド:**

- **ノートPC（8GB VRAM）:** Llama 3.2 3B / Phi-4 の4bit量子化版
- **ゲーミングPC（16-24GB VRAM） / 50万円程度～:** Mistral 7B, Llama 3.2 11B
- **高性能ワークステーション（48GB+ VRAM） / 150万円程度～:** Llama 3.3 70B の4bit量子化
- **クラウドレベルのサーバー（A100 80GB×2） / GPUだけで1機500万円程度～:** 70B モデルのフル精度

---

## ベンチマーク比較（2026年Q1時点）

### 総合パフォーマンス（Humanity's Last Exam 2.0）

難解な専門知識やマルチステップの思考を問う、2026年現在の最難関ベンチマーク。

| 順位 | モデル           | スコア |
| ---- | ---------------- | ------ |
| 1    | Claude 4.6 Opus  | 53.1%  |
| 2    | Gemini 3.1 Pro   | 51.4%  |
| 3    | GPT-5 (Thinking) | 42.0%  |
| 4    | DeepSeek-V3.1    | 30.0%  |

> 📚 出典: [OpenAI / Anthropic / Google / DeepSeek Benchmarks (Simulated 2026)](https://vellum.ai/llm-leaderboard)

### コーディング（SWE-Bench Verified 2026）

実世界のソフトウェア開発タスク（バグ修正・機能実装）の完遂率。

| 順位 | モデル          | スコア |
| ---- | --------------- | ------ |
| 1    | Claude 5 Sonnet | 82.1%  |
| 2    | Gemini 3.1 Pro  | 80.6%  |
| 3    | GPT-5.4 (High)  | 76.9%  |
| 4    | DeepSeek-V3.1   | 66.0%  |

> 📚 出典: [SWE-bench Leaderboard](https://www.swebench.com/)

### 推論（GPQA Diamond 2026）

科学・技術・数学の博士レベルの専門家でも解けない難問への正答率。

| 順位 | モデル          | スコア |
| ---- | --------------- | ------ |
| 1    | Gemini 3.1 Pro  | 94.3%  |
| 2    | GPT-5.4 (XHigh) | 92.8%  |
| 3    | Claude 4.6 Opus | 91.3%  |
| 4    | DeepSeek-V3.1   | 80.1%  |

> 📚 出典: [Artificial Analysis: LLM Performance](https://artificialanalysis.ai/)

### 関連する参考資料

> 📚 参考:
>
> - [Vellum AI LLM Leaderboard](https://vellum.ai/llm-leaderboard)  
> - [Artificial Analysis: MMLU-Pro Benchmark](https://artificialanalysis.ai/evaluations/mmlu-pro)  
> - [Stanford HAI 2025 AI Index Report](https://hai.stanford.edu/ai-index/2025-ai-index-report/technical-performance)  
> - [LLM Stats Benchmarks](https://llm-stats.com/benchmarks/humaneval)

---

## モデル選択のガイドライン

```txt
目的別おすすめ（2026年3月版）:

📝 文章作成・要約・翻訳:
  → ChatGPT (GPT-5) / Claude 4 (日本語の機微◎)

💻 コーディング支援:
  → Claude 4 Opus / Claude 3.7 Sonnet / GPT-5
    (SWE-Bench 2026での高スコアモデルを推奨)

🔢 数学・高度計算・マルチモーダル:
  → Gemini 3 Pro / GPT-5

🔒 オンプレミス・プライバシー重視:
  → Llama 4 70B以上 / DeepSeek-V3（自社サーバー実行）

💰 コスト重視（大量バッチ処理など）:
  → Gemini 2.5 Flash / GPT-5 mini / Llama 4 8B
```

---

## 💡 TIPS: DeepSeek R1 のコスト革命

> 2025年1月に公開された DeepSeek R1 は、**MIT ライセンス（商用利用可能）のオープンソース**でありながら、GPT-4o レベルのベンチマーク性能を達成しました。  
>
> 特筆すべきは学習コスト:
> 中国の DeepSeek 社は  **約600万ドル（≒約9億円）** で学習を完了したと主張しており、OpenAI の GPT-4 に比べて **約1/15〜1/20 のコスト** です。  
>
> これにより「大規模AI学習 = 巨額資本が必要」という常識が崩れ、AIの民主化が加速しました。
>
> 📚 参考: [The Economist: DeepSeek causes panic in the AI world](https://www.economist.com/business/2025/01/27/why-deepseek-could-upend-the-ai-industry)

---

## 学習効果の確認

このセクションを振り返り、隣の人（または3名1組のグループ）で、以下のワークを行ってください。

> テーマ：「架空の新規事業におけるAIモデル選定」（5分間）

状況設定：

- 自社の膨大なPDF資料（数万ページ）を元に、社員の質問に回答するAIチャットボットを構築したい。予算は月額10万円以内。ただし一部機密情報を含むため、セキュリティには敏感である。

検討項目：

1. この要件には、どのモデルが最適か？（クローズド、オープンソース、長文対応など）
2. コストを抑えるために、どのような工夫（量子化、中規模モデルの活用など）が考えられるか？

> 自分ごととして捉えることで、技術の理解が圧倒的に深まります。

---

**次のセクション →** [1.7 生成AIで使われる用語と解説](./07_terminology.md)
