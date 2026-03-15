"""
[Role] 推論モデル (Reasoning Model) によるデバッグ演習用のバグを含んだスクリプト。
[Mechanism] 複雑な在庫計算ロジックにおいて、浮動小数点数の丸め誤差や条件分岐の論理的なミスをシミュレートする。
"""

def calculate_stock_reorder(inventory: list[dict], threshold: float) -> list[str]:
    """
    在庫リストから再発注が必要なアイテムを抽出する。
    [Bug] 在庫の計算ロジックに微妙な誤りがあり、特定の条件下で誤ったアラートを出す。
    """
    to_reorder = []
    for item in inventory:
        # 在庫数 = 現在の在庫 - 引当済み + 入荷予定
        # [Reasoning Point] 以下の計算には論理的な穴があります。
        effective_stock = item["current"] - item["reserved"] + item["incoming"]
        
        # 閾値以下の場合は再発注
        if effective_stock < threshold:
            to_reorder.append(item["name"])
            
    return to_reorder

# デバッグ用データ
sample_inventory = [
    {"name": "Laptop A", "current": 10, "reserved": 12, "incoming": 5, "price": 1000.50},  # 10 - 12 + 5 = 3 (Reorder)
    {"name": "Monitor B", "current": 5, "reserved": 2, "incoming": 0, "price": 300.75},   # 5 - 2 + 0 = 3 (Reorder)
    {"name": "Mouse C", "current": 20, "reserved": 5, "incoming": 10, "price": 25.00},   # 20 - 5 + 10 = 25
]

if __name__ == "__main__":
    reorder_list = calculate_stock_reorder(sample_inventory, 5.0)
    print(f"再発注が必要なアイテム: {reorder_list}")
