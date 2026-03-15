# 1.4 生成AIの活用方法

> **本セクションの目標:** 業務の中でどのような場面でどのように生成AIが役立つか理解し、特徴に応じて使いわけることができるようになる。

---

## 本セクションの狙い

生成AIが「単なる便利なツール」から「自律的なワークフローのパートナー（AIエージェント）」へと進化した2026年現在の活用パラダイムを理解します。日常業務から高度な専門業務まで、どのAIをどの場面で活用すべきかの判断基準を身につけます。

> 注意:
> このセクションの内容は2026年3月時点の内容ですが、賞味期限が短い可能性が高いです。
> あなたが参照した時には古くなっている可能性もあります。

### 期待される学習効果

1. テキスト、コード、マルチモーダルなど、目的別に最適な最新モデル（GPT-5.4, Claude 4.6等）を選択できるようになる。
2. 「AIに指示を出す（Prompting）」だけでなく、「AIと共創する（Agentic Workflow / Vibe Coding）」視点を獲得する。
3. 業務プロセスの中でAIが得意な部分と人間が責任を持つべき部分を明確に切り分けられるようになる。

---

## 生成AIの主要ユースケース

> [!NOTE]
> 各ツールの公式サイトや詳細なリンクについては、本ページの最下部にある[参考: 各ツールへのリンク一覧](#参考: 各ツールへのリンク一覧)にまとめています。

### 📝 テキスト系

| ユースケース   | 具体例                             | おすすめツール                     |
| -------------- | ---------------------------------- | ---------------------------------- |
| 文書作成・要約 | 議事録作成、報告書要約、メール文面 | ChatGPT (GPT-5.4), M365 Copilot    |
| 翻訳・校正     | 英語メール翻訳、文章の校正         | Claude 4.6 Opus, DeepL Write       |
| アイデア発散   | ブレインストーミング、企画案の骨子 | Gemini 3.1 Pro, ChatGPT            |
| Q&A・調査      | 社内ポリシー確認、技術調査         | Perplexity, SearchGPT, DeepSeek V4 |

### 💻 コード系

| ユースケース   | 具体例                               | おすすめツール                         |
| -------------- | ------------------------------------ | -------------------------------------- |
| コード補完     | 関数の自動補完、ボイラープレート生成 | GitHub Copilot, Cursor                 |
| バグ修正       | エラーの原因特定と修正案             | Windsurf, ChatGPT                      |
| コードレビュー | コード品質チェック、セキュリティ確認 | GitHub Copilot Chat, Claude 4.6 Sonnet |
| システム構築   | 自然言語からのアプリ生成・修正       | Replit Agent, Llama 4 Maverick         |

### 📊 データ分析系

| ユースケース | 具体例                       | おすすめツール                    |
| ------------ | ---------------------------- | --------------------------------- |
| データ可視化 | Excelデータのグラフ作成提案  | M365 Copilot (Work IQ)            |
| SQL生成      | 自然言語からSQLクエリ生成    | ChatGPT (Advanced Analysis), Vibe |
| 予測分析     | 売上データの将来トレンド予測 | M365 Copilot (Fabric IQ)          |

### 🎨 クリエイティブ系

| ユースケース   | 具体例                     | おすすめツール                |
| -------------- | -------------------------- | ----------------------------- |
| 画像生成       | プレゼン用イラスト、ロゴ案 | Midjourney v7.2, DALL-E 3     |
| プレゼン作成   | スライド構成・デザイン提案 | Gamma, M365 Copilot (Foundry) |
| 動画コンテンツ | 短尺動画、説明動画作成     | Sora 2, Runway Gen-4.5, Kling |

---

## 💡 TIPS: 生産性向上の実測値

> McKinsey の調査（2023-2025年累計）によると、  
> **エージェントAIの導入により、コーディング作業で最大70〜80%の生産性向上**、  
> **定型業務で最大60%の時間削減**が一般的となっています。  
>
> 2026年現在のトレンドは、AIを単なるツールとして使う段階から、自律的に動く **「AIエージェント」** と共創する段階（Vibe Coding 等）へ移行しています。  
>
> 📚 参考: [GitHub: The state of AI in 2026](https://github.blog/2026-03-state-of-ai)  
> 📚 参考: [Microsoft: Work IQ Impact Report 2026](https://www.microsoft.com/en-us/work-iq-impact-2026)

---

## AIと人間の役割分担の考え方

生成AIを最も効果的に活用するための思考フレームワーク：

```txt
【AIが得意なこと】
✓ 大量のテキスト処理
✓ パターンの認識・生成
✓ 知識の整理・要約
✓ ボイラープレートな処理の自動化
✓ 24時間365日疲れない

【人間が得意なこと（AIが苦手なこと）】
✓ 最終的な判断・責任
✓ 倫理的・道徳的判断
✓ 新しい概念の創造（本当の意味で）
✓ 複雑な感情・社会的文脈の理解
✓ リアルな経験に基づく洞察
```

**ポイント:** AIは「アシスタント」であり、「決定権者」ではない

---

## 業務別：生成AI活用の「始め方」

### 営業・マーケティング職

1. 顧客向けメール文面の下書き作成
2. 競合比較資料の調査・まとめ
3. プレゼン資料のアウトライン作成

### エンジニア・開発職

1. **GitHub Copilot / Cursor**: コードの自動補完やリファクタリングの自動提案
2. **エラーメッセージの解析**: ログをそのままAIに渡し、修正案を即座に得る
3. **テストコードの自動生成**: 既存コードからユニットテストや結合テストを生成
4. **Spec Driven Development (SDD)**: 仕様書（Spec）をAIに読み込ませ、自律的にコードを生成・修正させる開発手法

### バックオフィス・管理職

1. 議事録の要約・アクション項目抽出
2. 定型メールの文面テンプレート化
3. 社内ポリシードキュメントの検索

---

## 学習効果の確認

このセクションを振り返り、隣の人（または3名1組のグループ）で、以下のワークを行ってください。

> テーマ：「日常業務の中で『AIエージェント』に自律的に任せられそうなタスクは何か？」（5分間）

1. 自分の業務の中で、現在「自分で判断して実行している定型タスク」を3つ書き出す。
2. それらのタスクに対し、「AIに丸投げできる部分」と「人間が最終確認・責任を持つべき部分」の境界線を議論する。

> 自分ごととして捉えることで、技術の理解が圧倒的に深まります。

---

## Appendix

---

## 参考: Vibe Coding（バイブコーディング）

2025年2月に AI 研究者の **Andrej Karpathy** が提唱したソフトウェア開発スタイル。  
**自然言語でAIに指示を出し、生成されたコードをほぼそのまま使う**開発手法。

```txt
従来のコーディング:
開発者がコードを書く → テスト → デバッグ → コミット

Vibe Coding:
「ユーザー認証機能を作って」と自然言語で指示
    ↓
AIがコードを生成
    ↓
動けばOK（コードを細かく読まない）
    ↓
動かなければ「エラーが出た、直して」と伝える
```

**メリット:** 高速プロトタイピング、技術的負債を気にしない探索  
**デメリット:** 本番環境では品質・セキュリティ問題が発生しやすい

> 📚 参考: [Augment Code: Vibe Coding vs Spec-Driven Development](https://www.augmentcode.com/guides/vibe-coding-vs-spec-driven-development)

---

## 参考: SDD（Spec-Driven Development / 仕様駆動開発）

Vibe Coding の次の進化形として2025年に注目された開発手法。  
**形式的な仕様書（スペック）を先に作り、AIはその仕様に従って実装する**。

> 補足:
>
> ここでの**仕様書**とは、一般的に人間がソフトウエア開発を行っている時の要求仕様書とは必ずしも一致しません。
> ソースコードの実装**【条件】**を指示する文書とイメージいただくとわかりやすいかもしれません。

- **仕組み**: 開発者が「どのようなシステムを作りたいか」を詳細なマークダウン等の仕様書（.md）に書き、AI（Cursor, Windsurf, Replit Agent 等）にその仕様に従ってコードを書くよう指示します。
- **メリット**: 人間が一行ずつコードを書くのではなく、仕様を定義することに集中できるため、従来の数倍〜数十倍の速度でプロダクトを構築可能になります。
- **ポイント**: AIに「丸投げ」するのではなく、**「仕様を正確に伝える能力」**がエンジニアのコアスキルとなっています。

> ポイント:
>
> 高精度に高品質な結果を得たい場合には、AIに何を指示するかよりも、**AIに何を見せるか**が重要になってきています。

```txt
SDD のワークフロー:
1. Specify（仕様化）: 機能要件を形式的なMarkdown/YAML/TypeScript型で定義
2. Plan（計画）: アーキテクチャ、依存関係を設計
3. Implement（実装）: 仕様に従ってAIがコードを生成
4. Verify（検証）: 自動テストで仕様との整合性を確認
```

> 📚 参考:
>
> - [Thoughtworks: Spec-driven development](https://www.thoughtworks.com/en-us/insights/blog/agile-engineering-practices/spec-driven-development-unpacking-2025-new-engineering-practices)  
> - [GitHub Blog: Spec-driven development with AI](https://github.blog/ai-and-ml/generative-ai/spec-driven-development-with-ai-get-started-with-a-new-open-source-toolkit/)

---

## 参考: 各ツールへのリンク一覧

| ツール名              | カテゴリ         | リンク                                                                         |
| --------------------- | ---------------- | ------------------------------------------------------------------------------ |
| **ChatGPT (GPT-5.4)** | テキスト         | [chatgpt.com](https://chatgpt.com)                                             |
| **Claude 4.6**        | テキスト         | [claude.ai](https://claude.ai)                                                 |
| **Gemini 3.1**        | テキスト         | [gemini.google.com](https://gemini.google.com)                                 |
| **DeepSeek V4**       | テキスト         | [deepseek.com](https://www.deepseek.com)                                       |
| **Llama 4**           | テキスト・コード | [llama.meta.com](https://llama.meta.com)                                       |
| **Perplexity**        | 検索・調査       | [perplexity.ai](https://www.perplexity.ai)                                     |
| **GitHub Copilot**    | コード           | [github.com/.../copilot](https://github.com/features/copilot)                  |
| **Cursor**            | コード           | [cursor.com](https://www.cursor.com)                                           |
| **Windsurf**          | コード           | [codeium.com/windsurf](https://codeium.com/windsurf)                           |
| **M365 Copilot**      | 生産性           | [microsoft.com/copilot](https://www.microsoft.com/en-us/microsoft-365/copilot) |
| **Midjourney**        | 画像             | [midjourney.com](https://www.midjourney.com)                                   |
| **Sora 2**            | 動画             | [openai.com/sora](https://openai.com/sora)                                     |
| **Runway Gen-4.5**    | 動画             | [runwayml.com](https://runwayml.com)                                           |

---

**次のセクション →** [1.5 制約とリスク](./05_constraints_risks.md)
