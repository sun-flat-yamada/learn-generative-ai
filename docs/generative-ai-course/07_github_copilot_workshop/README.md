# 第7章: GitHub Copilot 活用ワークショップ

> **形式:** ハンズオン（個人）  
> **所要時間:** 約150分  
> **準備:** GitHub Copilot ライセンス（Individual/Business/Enterprise）、VS Code、Node.js 20+、Python 3.12+

---

## 事前準備

```bash
# このリポジトリをクローン
git clone https://github.com/YOUR_ORG/genai-workshop.git
cd genai-workshop

# ワークショップ用ディレクトリに移動
cd src/workshops/github_copilot

# 依存関係のインストール（後述）
```

---

## お題1: コード補完とチャットの基本（30分）

### Step1: GitHub Copilot の起動確認

```markdown
1. VS Code で拡張機能「GitHub Copilot」および「GitHub Copilot Chat」が最新か確認
2. 右下のステータスバーに Copilot アイコンがあるか確認
3. `Ctrl+Alt+I` で Copilot Chat を開き、使用するモデルを選択（例: `GPT-4o`, `Claude 3.5 Sonnet`, `Gemini 1.5 Pro`）
4. 右上の設定アイコンから「Copilot Edits」が有効になっているか確認
```

### Step2: コード補完を体験する

`src/workshops/github_copilot/01_basic_completion.py` を開いて、  
以下のコメントを書き、Copilot が補完するのを体験しましょう:

```python
# 顧客フィードバックのCSVを読み込み、
# 評価（rating）が3以上のコメントだけを抽出する関数を書く

def filter_positive_feedback(csv_path: str) -> list[dict]:
    # ← ここで Tab キーを押して補完を受け入れる
```

**観察ポイント:**

- 関数名・コメントから意図を読み取って補完されましたか？
- 補完をカスタマイズしたい場合は `Alt+]` で次の候補を見る
- 2026年現在の Copilot は、周辺ファイル（RAG）を考慮したより高度な補完が可能です。

### Step3: Copilot Chat でコードを理解する

```markdown
Copilot Chat (Ctrl+Alt+I) に以下を入力:

「@workspace このプロジェクトの構成を説明して」

「以下のコードを説明して:
[コードを貼り付け]」

「このコードのバグを見つけて修正して」
```

### Step4: テストコードの自動生成

```python
# テストしたい関数を選択して右クリック
# → 「Copilot」→「Generate Tests」

# またはチャットで:
「filter_positive_feedback 関数の
 pytest テストケースを5つ書いて。
 エッジケース（空ファイル、全レコードが低評価等）も含める」
```

---

## お題2: 推論モデル (Reasoning Models) で難解なバグを解く（20分）

> 📁 `src/workshops/github_copilot/02_buggy_code.py` を開いてください

### Step1: 推論モデルを選択

```markdown
Copilot Chat のモデル選択で「OpenAI o1」または「o3」を選択。
```

### Step2: 複雑なデバッグ

```markdown
「この複雑なアルゴリズムの論理的ミスを、ステップバイステップで推論して指摘して。
修正案は、パフォーマンスとメモリ効率を最優先して提示すること」
```

> [!TIP]
> **推論モデル (Reasoning Models)** は、従来の LLM よりも「深く考える」プロセスを経て回答を導き出します。特にアルゴリズムの最適化や、複数のファイルが絡む複雑なデバッグに非常に強力です。

---

## お題3: Copilot Edits で一括修正を行う（30分）

> ★ 2024年末に導入され、2026年現在は標準機能となった強力な機能です。

### 目標

複数のファイルにまたがるコード変更（リファクタリング）を一度に行います。

### Step1: Copilot Edits を起動

```markdown
1. チャットパネルの「Edits」タブを選択、または Ctrl+Shift+I (デフォルト設定による)
2. 「Add Files...」をクリックし、関連する複数のファイルを追加
```

### Step2: 意図を伝える

```markdown
「現在、ユーザーIDが int 型ですが、将来の拡張性のために UUID (string) に変更したいです。
影響を受ける全ての関数と、関連するテストコードを一括で修正してください」
```

### Step3: 変更の確認と適用

```markdown
1. Copilot が提案する変更（diff）を確認
2. 問題なければ「Apply」または「Accept All」をクリック
3. テストを実行して、整合性が保たれているか確認
```

---

## お題4: MCPサーバーを作って GitHub Copilot から使う（40分）

> ★ このお題はメインチャレンジです！

### 目標

社内の営業データを検索できる MCP サーバーを作り、  
GitHub Copilot Agent モードから使えるようにします。

### Step1: プロジェクトセットアップ

```bash
cd src/workshops/github_copilot/mcp-sales-server
npm install
```

### Step2: 営業データMCPサーバーの構築

`src/mcp_server.ts` を開き、以下のコメントを書いてCopilotに実装させてみましょう:

```typescript
// 営業データMCPサーバー
// 機能:
// 1. 製品別売上を検索するツール
// 2. 顧客フィードバックを検索するツール
// 3. 日付範囲で売上データをフィルターするツール

import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
// ← Copilot が続きを補完してくれます
```

**完成版コードは `src/workshops/github_copilot/mcp-sales-server/src/index.ts` にあります**

### Step3: VS Code の mcp.json に登録

`.vscode/mcp.json` を作成・編集:

```json
{
  "servers": {
    "sales-data": {
      "command": "node",
      "args": [
        "${workspaceFolder}/src/workshops/github_copilot/mcp-sales-server/dist/index.js"
      ],
      "description": "営業データ分析MCPサーバー"
    }
  }
}
```

### Step4: GitHub Copilot Agent モードで動作確認

```markdown
1. Copilot Chat を開く
2. モードを「Agent」に切り替え
3. 以下を試す:

「売上データから、今月最も売れた製品TOP3を教えて」

「製品Bについての顧客フィードバックのネガティブな意見をまとめて」

「先月と今月の売上を比較して、増加・減少した製品を教えて」
```

### Step5: SDD（仕様駆動開発）を試す

まず仕様書を書いてから、Copilot に実装させます:

```markdown
# spec/sales-report-generator.spec.md を作成

## 機能仕様: 売上レポート生成ツール

### 概要
月次売上レポートをMarkdown形式で自動生成するツール

### 入力
- 対象月: YYYY-MM 形式
- 出力先: ファイルパス

### 出力形式
```markdown
# 月次売上レポート: {YYYY年MM月}
## サマリー
- 総売上: X円
- 前月比: +X%
## 製品別売上（上位10件）
| 製品名 | 売上 | 前月比 |
...
```

### エラー処理

- 対象月のデータがない場合: エラーメッセージを返す
- ファイル書き込み失敗: 例外をスロー

### テスト要件

- 正常系: 全フォーマット要素が含まれること
- 異常系: データなし・ファイルエラー
```

Copilot Chat で:

```markdown
「@workspace spec/sales-report-generator.spec.md の仕様に従って
実装コードとテストコードを生成してください」
```

---

## お題5: GitHub Copilot Workspace（Issue to Implementation）（30分）

> ★ 2025年に完全に統合された、GitHub 本体の新機能です。

### 目標

ブラウザ上の GitHub から、Issue（課題）を直接コード解決します。

### Step1: Issue の作成

1. GitHub のリポジトリページで `New Issue` を作成
2. タイトル: `[Feature] 顧客ランクに応じた割引率計算ロジックの追加`
3. 本文: 具体的なランク（Gold: 20%, Silver: 10%）などを記述して保存

### Step2: Open in Workspace

1. 作成した Issue のサイドバーにある 「Open in Workspace」 をクリック
2. Copilot が Issue の内容から「Plan（実装計画）」を自動生成

### Step3: 実装の実行

1. 生成された Plan を確認（修正が必要ならチャットで指示）
2. 「Implement Selection」 または 「Create Pull Request」 をクリック
3. 数秒後、自動的にコードが生成され、Pull Request が作成されるのを体験

---

## ボーナスチャレンジ: Vibe Coding vs SDD vs Agentic Work

```markdown
チャレンジ:
同じ機能（在庫アラートシステム）を2つの方法で作ってみる

方法1（Vibe Coding）:
「在庫が10個以下になったらアラートを出すシステムを作って」
と一言だけ言って実装させる

方法2（SDD）:
spec/ に仕様書を先に書いてから
「この仕様書に従って実装して」
と依頼する

比較:
- コードの品質・読みやすさ
- テスト網羅性
- エラー処理の堅牢さ
- 実装にかかった時間
```

---

## 💡 TIPS: GitHub Copilot の「最高の使い方」

> **GitHub 社の統計（2026年）によると、Copilot ユーザーは:**  
>
> - 開発プロセス全体の生産性 **75% 向上** (Copilot Workspace/Agent 活用による)
> - 重大なバグの早期発見率 **60% 向上** (推論モデルによる解析)
> - 新規プロジェクトの立ち上げ時間 **80% 短縮**
>
> ただし、**AI への丸投げは禁物**です。  
> どんなに AI が強力になっても、「なぜこのコードが必要なのか」「メンテナンス性はどうか」を判断するのは人間の開発者の役割です。
>
> 「Copilot は頭の良いペアプログラマー。  
>  最終責任は必ずあなたが持つ」  
>
> 📚 参考: [GitHub Research: Productivity and happiness](https://github.blog/2022-09-07-research-quantifying-github-copilots-impact-on-developer-productivity-and-happiness/)

---

## ワークショップ まとめ

```markdown
今日のポイント:
✓ コード補完は「コメント→補完」の流れで品質が上がる
✓ 推論モデル (Reasoning) で高度なデバッグが可能になった
✓ Copilot Edits で複数ファイルの一括修正が容易になった
✓ MCPサーバーを使えば社内データとCopilotを連携できる
✓ Copilot Workspace により、Issue から PR 作成までを AI が伴走する
✓ SDD（仕様駆動開発）は AI との対話における「設計図」として重要

習慣として身につけること:
1. 書くより先にコメントで意図を書く
2. 生成されたコードは必ず読んで理解する
3. テストコードの生成も必ずCopilotに依頼する
4. 本番コードへのマージ前にセキュリティレビューを依頼する
```

---

**🎉 全7章のワークショップ完了おめでとうございます！**

**次のステップ:**

- [4.1 継続的な学習方法](../04_learning/01_continuous_learning.md)
- [4.2 お役立ちリンク集](../04_learning/02_useful_links.md)
