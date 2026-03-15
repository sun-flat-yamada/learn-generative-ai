# 🤖 生成AI基礎講座 — Workshop Repository

[![Buy Me A Coffee](https://img.shields.io/badge/Buy%20Me%20A%20Coffee-FFDD00?style=flat&logo=buy-me-a-coffee&logoColor=black)](https://buymeacoffee.com/sun.flat.yamada)

> **対象者:** 日本の大学卒業レベルの新入社員  
> **目的:** 生成AIの基礎から実践的な活用まで、体系的に学ぶ  
> **所要時間:** 全7章 × 約0.5〜3時間、合計１日目安（ワークショップ含む）  
> **最終更新:** 2026-03-15

---

## 📁 リポジトリ構成

```txt
genai-workshop/
├── README.md                          # 本ファイル
├── docs/                              # 講義資料（章別 Markdown）
│   ├── 01_generative_ai_basics/       # 第1章: 生成AIの基礎
│   │   ├── 01_what_is_generative_ai.md
│   │   ├── 02_history.md
│   │   ├── 03_how_it_works.md
│   │   ├── 04_usage.md
│   │   ├── 05_constraints_risks.md
│   │   ├── 06_model_comparison.md
│   │   ├── 07_terminology.md
│   │   └── 08_future.md
│   ├── 02_how_to_use/                 # 第2章: 生成AIの活用方法
│   │   ├── 01_prompt_engineering.md
│   │   ├── 02_tool_types.md
│   │   └── 03_knowledge_mcp.md
│   ├── 03_security/                   # 第3章: セキュリティ対策
│   │   ├── 01_security_risks.md
│   │   └── 02_security_measures.md
│   ├── 04_learning/                   # 第4章: 学習方法
│   │   ├── 01_continuous_learning.md
│   │   └── 02_useful_links.md
│   ├── 05_chatgpt_workshop/           # 第5章: ChatGPT活用ワークショップ
│   │   └── README.md
│   ├── 06_m365_copilot_workshop/      # 第6章: M365 Copilot ワークショップ
│   │   └── README.md
│   └── 07_github_copilot_workshop/    # 第7章: GitHub Copilot ワークショップ
│       └── README.md
└── src/                               # ワークショップ用リソース
    ├── datasets/                      # サンプルデータセット
    │   ├── customer_feedback.csv
    │   ├── sales_data.csv
    │   ├── meeting_notes.txt
    │   └── code_review_samples/
    └── workshops/
        ├── chatgpt/                   # ChatGPT演習ファイル
        ├── m365_copilot/              # M365 Copilot演習ファイル
        └── github_copilot/            # GitHub Copilot演習ファイル
```

---

## 🗺️ 講座ロードマップ

| 章  | タイトル                   | 形式              | 目安時間 |
| --- | -------------------------- | ----------------- | -------- |
| 1   | 生成AIの基礎               | 講義              | 90分     |
| 2   | 生成AIの活用方法           | 講義 + ハンズオン | 120分    |
| 3   | セキュリティ対策           | 講義              | 60分     |
| 4   | 生成AIの学習方法           | 講義              | 30分     |
| 5   | ChatGPT 活用               | ワークショップ    | 90分     |
| 6   | Microsoft 365 Copilot 活用 | ワークショップ    | 90分     |
| 7   | GitHub Copilot 活用        | ワークショップ    | 120分    |

---

## 🚀 はじめ方

### 前提条件

- [ ] Microsoft 365 アカウント（Copilot ライセンス付き）
- [ ] GitHub アカウント（GitHub Copilot ライセンス付き）
- [ ] Visual Studio Code インストール済み
- [ ] Node.js 18+ インストール済み（ワークショップ7章用）
- [ ] ChatGPT アカウント（Plus 推奨）

### 受講の流れ

1. このリポジトリを clone またはダウンロード  

   ```bash
   git clone https://github.com/YOUR_ORG/genai-workshop.git
   cd genai-workshop
   ```

2. `docs/` ディレクトリから順番に読み進める
3. 各ワークショップ章では `src/` 以下のリソースを使用

---

## 🤝 Contribution & Support

Contributions are welcome! If you find this extension useful, please consider supporting its development.

[![Buy Me A Coffee](https://img.shields.io/badge/Buy%20Me%20A%20Coffee-FFDD00?style=flat&logo=buy-me-a-coffee&logoColor=black)](https://buymeacoffee.com/sun.flat.yamada)

---

## 📝 ライセンス・免責事項

- 本リポジトリはコミュニティ内での教育目的で作成した個人製作物であり、ライセンスは付与していません。
- PDF化したSnapshot資料のみ、ライセンスを付与して配置しています。
- 引用・参考資料の著作権は各著作者に帰属します。
- AI ツールの仕様・価格は常に変動しますので、最新情報は各公式サイトを確認してください。
