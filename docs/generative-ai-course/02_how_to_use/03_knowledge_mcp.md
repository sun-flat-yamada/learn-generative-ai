# 2.3 ナレッジの蓄積と活用 — MCPサーバーと Microsoft IQ アーキテクチャ

> **本セクションの目標:** MCPプロトコルの概念を理解し、GitHub Copilot からMCPサーバーを活用できる。

---

## 本セクションの狙い

2024年末に誕生した **MCP（Model Context Protocol）** は、2026年現在、AIエージェントと外部データ・ツールを繋ぐ「USB-C」のような世界標準プロトコルとして定着しました。
本セクションでは、MCPの基本概念から、Microsoftが提唱する「3つのIQ」アーキテクチャによる知識統合、そして GitHub Copilot などの最新ツールからMCPを活用する実践的な方法を学びます。

### 期待される学習効果

1. MCPの標準化による「AIエージェントの相互運用性」の重要性を説明できる
2. Microsoft IQ（Work/Fabric/Foundry）が企業ナレッジをどう統合するかを理解する
3. 自社の独自データやツールをMCPサーバー化し、Copilotに連携させる具体的な手順を習得する

---

## MCP（Model Context Protocol）とは

2024年11月に Anthropic が発表し、現在は Linux Foundation 傘下の **Agentic AI Foundation (AAIF)** に寄贈され、業界標準となった**オープンプロトコル**。  
AIモデルと外部ツール・データソースを**標準化された方法で接続**します。

2026年現在、主要なLLM（Claude, GPT, Gemini, Llama等）のすべてがネイティブでMCPをサポートしており、開発者は一度MCPサーバーを構築すれば、あらゆるAIエージェントからそのツールやデータを利用可能になりました。

```txt
【従来のAI連携】
ChatGPT ─── 独自プラグイン A
Claude  ─── 独自プラグイン B
Copilot ─── 独自プラグイン C
→ ツールごとに実装が必要、再利用不可（断片化）

【MCPによる連携】
Claude  ─┐
ChatGPT ─┤─ [MCP Protocol] ─── MCPサーバー群
Gemini  ─┤         ├── GitHub MCPサーバー
Copilot ─┘         ├── Slack MCPサーバー
                    ├── Filesystem MCPサーバー
                    ├── 社内DBカスタムMCPサーバー
                    └── Enterprise Vector Search
→ 一度実装したMCPサーバーはどのAIでも再利用可能（標準化）

> [!NOTE]
> **2026年の進化: MCP 2.0**
> 2025年後半にリリースされた MCP 2.0 では、巨大なバイナリデータの効率的なストリーミング転送や、AIエージェント間での「コンテキストのバトンパス（Agent-to-Agent Handshake）」が標準化されました。これにより、個別の専門MCPサーバーが協力して一つのタスクを解く「マルチエージェント・オーケストレーション」が極めて容易になっています。
```

> 📚 参考:
>
> - [Model Context Protocol 公式ドキュメント](https://modelcontextprotocol.io/)  
> - [Agentic AI Foundation (AAIF)](https://example.com/aaif)  ※2026年現在の業界団体
> - [GitHub MCP Server](https://github.com/github/github-mcp-server)

---

## MCPサーバーの3つの機能

### 1. Tools（ツール）

AIが呼び出せる関数・アクション

```txt
例: GitHub MCPサーバーの Tools
- create_issue(): Issueを作成
- list_pull_requests(): PR一覧を取得
- search_code(): コードを検索
```

### 2. Resources（リソース）

AIが読み取れるデータ・ファイル

```txt
例:
- ローカルファイルシステム
- データベースの内容
- APIから取得したデータ
```

### 3. Prompts（プロンプト）

再利用可能なプロンプトテンプレート

```txt
例:
- コードレビュー用プロンプト
- バグ報告フォーマット
- ドキュメント生成テンプレート
```

---

## Microsoft の IQ アーキテクチャ（2026年現在の状況）

Microsoft は、AI の「知識層（Intelligence Layer）」として **3つの IQ** を統合し、2026年には「Agent 365」や「Copilot Cowork」として実用化されています。

```txt
Microsoft IQ 統合アーキテクチャ (2026)

┌─────────────────────────────────┐
│                 Agent 365 / Copilot                              │
│     (業務を自律的に遂行するエージェント・オーケストレーター)     │
└──────┬─────────┬─────────┬──────┘
              │                  │                  │
    ┌────▼───┐  ┌───▼───┐  ┌───▼───┐
    │  Work IQ       │  │ Fabric IQ    │  │ Foundry IQ   │
    │ (Personal)     │  │ (Business)   │  │ (Knowledge)  │
    │                │  │              │  │              │
    │ Microsoft 365  │  │ 企業データ   │  │ 統合知識基盤 │
    │ ユーザーの文脈 │  │ エンティティ │  │ 推論エンジン │
    └────────┘  └───────┘  └───────┘
```

### Work IQ — 個人の業務文脈と習慣

**2026年3月 GA（一般提供開始）**

- **個人のナレッジ:** メール、Teamsチャット、カレンダー、個人のOneDriveを学習。
- **Contextual Recall:** 「先週の会議で話したあの件」といった曖昧な指示を、Work IQ が具体的なファイルを特定して補完。

```txt
データソース:
├── メール（Outlook）
├── 会議メモ（Teams）
├── ドキュメント（SharePoint / OneDrive）
├── チャット（Teams）
└── カレンダー（Outlook）

提供機能:
├── 個人の作業パターン・習慣の学習
├── 組織構造の理解
├── 次のアクション予測
└── カスタムエージェントへのコンテキスト提供
```

### Fabric IQ — ビジネスデータのセマンティクス (知識層)

**Ontology 連携が強化された統合データ基盤**

- **Business Identity:** 組織図、製品、顧客などの関係性を「知識のグラフ」として保持。
- **Real-time Insights:** 構造化データ（SQL等）を、AIが即座に分析・アクションできる形に変換して提供。

```txt
機能:
├── Ontology: ビジネスエンティティの関係グラフ
├── Semantic Model: BI定義をAIに解釈可能な形に変換
├── Graph Engine: 多ホップ推論
└── Operations Agent: リアルタイムビジネス運用の自律管理
```

### Foundry IQ — 開発者向け統合知識 AI Foundry との統合

**Azure AI Foundry と MCP が完全に融合した知識 API**

- **MCP Native:** 自社で構築した MCP サーバーを Foundry IQ に登録すると、組織内の全 Copilot Agent からその知識を利用可能。
- **Advanced RAG:** 単なる検索ではなく、Foundry IQ が知識の「推論・要約」を行ってからエージェントに渡す。

```
特徴:
├── Microsoft 365, SharePoint, Fabric, OneLake, Azure Blob を横断
├── MCPサーバーとの統合（プレビュー）
├── Entra ID ベースのガバナンス
├── Microsoft Purview による感度ラベル対応
└── 再利用可能なナレッジベースAPI
```

> 📚 参考
>
> - [Microsoft Learn: Intelligence Layer (IQ) Overview](https://learn.microsoft.com/en-us/microsoft-365/iq-overview)  
> - [Microsoft Ignite 2025/2026 Summary](https://www.microsoft.com/en-us/microsoft-365/blog/2025/11/18/microsoft-ignite-2025-copilot-and-agents/)
> - [David Yack: Understanding Work IQ, Fabric IQ, and Foundry IQ](https://blog.davidyack.com/understanding-work-iq-fabric-iq-and-foundry-iq/)  
> - [Microsoft Ignite 2025 Blog](https://www.microsoft.com/en-us/microsoft-365/blog/2025/11/18/microsoft-ignite-2025-copilot-and-agents-built-to-power-the-frontier-firm/)

---

## GitHub Copilot から MCP サーバーを使う方法

> GitHub Copilot のUIは変化が激しいので、最新情報は公式ドキュメントを参照してください。

### 前提環境（Microsoft系）

- Windows 10/11 または macOS
- Visual Studio Code（最新版）
- GitHub Copilot ライセンス（Individual / Business）
- Node.js 18+ または Python 3.10+

### Step 1: VS Code でのMCPサーバー追加

#### 方法A: Extensions View / Copilot Settings から（推奨）

```txt
1. VS Code を起動
2. Copilot Chat の設定パネルまたは拡張機能パネルを開く
3. 「MCP Servers」のセクションを確認
4. 組み込みの GitHub / Filesystem MCP サーバーを有効化、または「Add Marketpace MCP Server」から追加
```

#### 方法B: Command Palette から

```txt
1. Ctrl+Shift+P でコマンドパレットを開く
2. 「MCP: Add Server」を実行
3. サーバータイプを選択
   - HTTP/SSE（リモートサーバー）
   - Local Process（ローカルサーバー）
4. Workspace または Global を選択
```

#### 方法C: Visual Studio 2026 での利用

```txt
1. VS 2026 の「AI Agents」ウィンドウを開く
2. 「Tools & Knowledge」から MCP サーバーを追加
3. NuGet MCP サーバーなどの標準搭載ツールを有効化
```

#### 方法D: Command Palette から（詳細設定）

#### 方法E: mcp.json を直接編集

**ワークスペース設定** (`.vscode/mcp.json`)  
**ユーザー設定** (`%APPDATA%\Code\User\mcp.json` on Windows)

```json
{
  "servers": {
    "github": {
      "type": "http",
      "url": "https://api.githubcopilot.com/mcp/"
    },
    "filesystem": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-filesystem", "/path/to/allowed/dir"]
    },
    "playwright": {
      "command": "npx",
      "args": ["-y", "@microsoft/mcp-server-playwright"]
    }
  }
}
```

> 📚 参考: [VS Code: Add and manage MCP servers](https://code.visualstudio.com/docs/copilot/customization/mcp-servers)

### Step 2: GitHub MCP サーバーの設定（リモート）

```txt
1. VS Code の拡張機能から「GitHub MCP Server」をインストール
2. Copilot Chat を開く（Ctrl+Alt+I）
3. モードドロップダウンから「Agent」を選択
4. OAuth 認証画面でGitHub アカウントでログイン
5. ツールが利用可能になったことを確認

mcp.json には以下が自動追加される:
{
  "servers": {
    "github": {
      "type": "http",
      "url": "https://api.githubcopilot.com/mcp/"
    }
  }
}
```

> 📚 参考: [GitHub Docs: Setting up the GitHub MCP Server](https://docs.github.com/en/copilot/how-tos/provide-context/use-mcp/set-up-the-github-mcp-server)

### Step 3: Agent モードで MCP ツールを使う

```txt
Copilot Chat のモード選択:
├── Chat モード: 通常の質問応答
├── Edit モード: ファイル編集に特化
└── Agent モード ← MCPツールが使えるのはここ
```

Agent モードで MCP ツールを使う例:

```txt
ユーザー: 「今週クローズしたIssueを一覧して、プロジェクトの週報を作成して」

→ Copilot が GitHub MCP サーバーの list_issues() を自動呼び出し
→ 取得したデータを元に週報を生成
```

---

## ローカルMCPサーバーの作成と GitHub Copilot からの利用

### TypeScript で最小限のMCPサーバーを作る

```bash
# プロジェクト作成
mkdir my-mcp-server
cd my-mcp-server
npm init -y
npm install @modelcontextprotocol/sdk@1.5.0 zod  # 2026年Q1時点の安定版
npm install -D typescript @types/node ts-node
```

**`src/index.ts`** — 社内QAデータベースを検索するMCPサーバーの例:

```typescript
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";

// MCPサーバーのインスタンス作成
const server = new McpServer({
  name: "company-qa-server",
  version: "1.0.0",
});

// 社内QAデータ（実際の実装ではDBから取得）
const qaData = [
  { id: 1, question: "有給休暇の申請方法は？", answer: "勤怠システム（HR Portal）から申請...", category: "HR" },
  { id: 2, question: "経費精算の締め切りは？", answer: "毎月25日が締め切りです...", category: "経理" },
  { id: 3, question: "VPNの設定方法は？", answer: "IT サポートページ（https://...）を参照...", category: "IT" },
];

// ツールの定義: 社内FAQを検索
server.tool(
  "search_company_qa",
  "社内のよくある質問（FAQ）を検索します",
  {
    query: z.string().describe("検索キーワード"),
    category: z.enum(["HR", "経理", "IT", "全て"]).optional().describe("カテゴリフィルター"),
  },
  async ({ query, category }) => {
    // キーワード検索（本番ではベクトル検索を推奨）
    const results = qaData.filter((item) => {
      const matchQuery =
        item.question.includes(query) || item.answer.includes(query);
      const matchCategory = !category || category === "全て" || item.category === category;
      return matchQuery && matchCategory;
    });

    if (results.length === 0) {
      return {
        content: [{ type: "text", text: `「${query}」に関するFAQは見つかりませんでした。ITサポートにお問い合わせください。` }],
      };
    }

    const text = results
      .map((r) => `**Q: ${r.question}**\nA: ${r.answer}\n(カテゴリ: ${r.category})`)
      .join("\n\n---\n\n");

    return {
      content: [{ type: "text", text }],
    };
  }
);

// サーバー起動
const transport = new StdioServerTransport();
await server.connect(transport);
console.error("Company QA MCP Server running...");
```

**`package.json`** (scripts追加):

```json
{
  "scripts": {
    "build": "tsc",
    "start": "node dist/index.js"
  }
}
```

### VS Code からローカルMCPサーバーに接続

**`.vscode/mcp.json`**:

```json
{
  "servers": {
    "company-qa": {
      "command": "node",
      "args": ["${workspaceFolder}/my-mcp-server/dist/index.js"],
      "description": "社内FAQ検索サーバー"
    }
  }
}
```

### GitHub Copilot で使ってみる

```txt
# Agent モードで以下を試す:
「有給休暇の申請方法を教えて」
→ company-qa MCP サーバーの search_company_qa が自動呼び出され、
  社内FAQの回答が返ってくる
```

> 📚 参考
>
> - [GitHub Blog: Building your first MCP server](https://github.blog/ai-and-ml/github-copilot/building-your-first-mcp-server-how-to-extend-ai-tools-with-custom-capabilities/)  
> - [VS Code Docs: Add and manage MCP servers](https://code.visualstudio.com/docs/copilot/customization/mcp-servers)  
> - [MCP Official Docs](https://modelcontextprotocol.io/)

---

## 💡 TIPS: MCPがなぜ革命的か？

> MCP 以前は「AIと社内システムをつなぐ」ためには、AIツールごとにカスタム統合を実装する必要がありました。  
>
> MCP により:  
>
> - **一度作れば複数AI（Copilot, Claude, ChatGPT）から使える**  
> - **「AIのためのプロトコル」としての進化**: 従来のAPIは人間用でしたが、MCPはAIが理解しやすいメタデータを含んでいます。
> - **エコシステムの爆発的成長**: 2026年現在、コミュニティによって数千のMCPサーバーが公開されています。
>
> 社内ナレッジベース・業務システムを MCP サーバーとして実装することで、  
> 「会社のことを何でも知っているAIアシスタント」が実現できます。  
>
> 📚 参考: [MCP Server Gallery](https://github.com/modelcontextprotocol/servers)

---

## 学習効果の確認

このセクションを振り返り、隣の人（または3名1組のグループ）で、以下のワークを行ってください。

> テーマ：「わが社の業務をMCPでどう自動化・高度化できるか？」(10分間)

1. **現在の課題の洗い出し**: 「毎回誰かに聞かないとわからないルール」や「複数のシステムを跨いで確認が必要な作業」を1つ挙げてください。
2. **MCPサーバーの設計**: その課題を解決するために「どのようなMCPサーバー（どんなToolやResourceを持つか）」を構築すべきか議論してください。
3. **期待される効果**: もしそのMCPサーバーがあれば、Copilotへのどんな問いかけで解決できるようになるか、具体的なプロンプトを考えてみましょう。

> 技術は単なる「部品」です。自社の業務にどう組み込むかという「想像力」こそが、AI時代の最大のスキルになります。

---

**次の章 →** [第3章: セキュリティ対策](../03_security/01_security_risks.md)
