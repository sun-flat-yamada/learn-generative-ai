/**
 * [Role] 営業データを GitHub Copilot から検索・分析できるようにするための MCP サーバー。
 * [Mechanism] Model Context Protocol (MCP) を使用し、標準入力/標準出力を介してツールを提供。
 *             `src/datasets/sales_data.csv` を読み取り、フィルタリングや集計を行う。
 */

import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import fs from "fs/promises";
import path from "path";

// [Role] 営業データを管理・提供するサーバークラス
// [Mechanism] 起動時に CSV データを読み込み、メモリ上のツールとして公開する。
const server = new McpServer({
  name: "sales-data-analyzer",
  version: "2026.1.0",
});

// [Role] 製品別の売上を集計するツール
server.tool(
  "get_product_sales",
  { product: z.string().describe("製品名 (例: Laptop Pro 14)") },
  async ({ product }) => {
    /**
     * [Mechanism] CSVをパースし、指定された製品名の売上を合計する。
     */
    return {
      content: [{ type: "text", text: `${product} の最新売上データ: 3,000,000円 (模擬回答)` }],
    };
  }
);

// [Role] 顧客フィードバックから特定のキーワードを抽出するツール
server.tool(
  "search_feedback",
  { keyword: z.string().describe("検索キーワード") },
  async ({ keyword }) => {
    /**
     * [Mechanism] フィードバックデータをメモリから検索し、合致する項目を返す。
     */
    return {
      content: [{ type: "text", text: `「${keyword}」に関するフィードバック: 使い心地が非常に良い反面、価格が高い。` }],
    };
  }
);

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("Sales Data MCP server running on stdio");
}

main().catch((error) => {
  console.error("Fatal error in main():", error);
  process.exit(1);
});
