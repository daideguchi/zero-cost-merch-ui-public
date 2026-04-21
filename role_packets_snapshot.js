window.ZERO_COST_ROLE_PACKETS = {
  "generated_at": "2026-04-21 17:26:11 JST",
  "business_name": "0円仕入れ物販事業",
  "meta": {
    "resident_url": "./roles.html",
    "parent_git_url": "https://github.com/daideguchi/zero-cost-merch-branch",
    "execution_git_url": "https://github.com/daideguchi/mercari-shops-bulk-branch"
  },
  "key_urls": {
    "resident": "./",
    "cards": "./intake_cards.html",
    "workbook": "https://docs.google.com/spreadsheets/d/1VjdUJavoijOkdjKtkdKy_zUcdkQqZwG0oRty57H5_lk/edit",
    "shared_sheet": "https://docs.google.com/spreadsheets/d/1CPJceNicgbuaj3vOL3IZ_condg5If713S4PW8-B3hq0/edit",
    "parent_git": "https://github.com/daideguchi/zero-cost-merch-branch",
    "execution_git": "https://github.com/daideguchi/mercari-shops-bulk-branch"
  },
  "counts": {
    "confirmed": 2,
    "provisional": 56,
    "official_image_pending": 0,
    "draft_ready": 19,
    "published": 9,
    "inquiry_open": 0,
    "barcode_ready": 0,
    "ocr_ready": 0,
    "split_required": 21,
    "exception": 2,
    "exact_pending": 56,
    "official_pending": 11,
    "market_priced": 5,
    "market_pending": 53,
    "pickup_pending": 0,
    "category_review_waiting": 1,
    "routing_total": 36,
    "image_review_waiting": 0,
    "publish_gate_waiting": 24,
    "base_ready_routing": 34,
    "qwen_review_pending": 0,
    "qwen_review_resolved": 2,
    "hq_blocked": 0,
    "exact_confirmed": 2
  },
  "packets": [
    {
      "role_name": "0円出品部長",
      "goal": "ショップ運営を優先し、問い合わせ・公開済み監査・審査待ち・下書き待ちを各担当へ振って resident と Git の整合まで持つ",
      "current_counts": {
        "inquiry_open": 0,
        "published": 9,
        "category_review_waiting": 1,
        "draft_ready": 19,
        "pickup_pending": 0,
        "image_review_waiting": 0,
        "publish_gate_waiting": 24,
        "qwen_review_pending": 0,
        "qwen_review_resolved": 2,
        "split_required": 21,
        "hq_blocked": 0
      },
      "target_ids": [
        "BOX-001-ITEM-0004",
        "BOX-001-ITEM-0005",
        "BOX-001-ITEM-0008",
        "BOX-001-ITEM-0009",
        "BOX-001-ITEM-0011",
        "BOX-001-ITEM-0012"
      ],
      "must_read": [
        "README.md",
        "docs/12_ルーティン運用マニュアル.md",
        "docs/14_AI担当役職と起動プロンプト集.md",
        "docs/16_UI起動パケット仕様.md"
      ],
      "constraints": [
        "100%同一確認済みでない比較画像を出品画像へ上げない",
        "README・resident・Z-98・Git を最後に必ずそろえる"
      ],
      "expected_outputs": [
        "今の件数",
        "次に進める商品ID",
        "どの担当へ何を振るか",
        "更新した正本"
      ],
      "key_urls": {
        "resident": "./",
        "cards": "./intake_cards.html",
        "workbook": "https://docs.google.com/spreadsheets/d/1VjdUJavoijOkdjKtkdKy_zUcdkQqZwG0oRty57H5_lk/edit",
        "shared_sheet": "https://docs.google.com/spreadsheets/d/1CPJceNicgbuaj3vOL3IZ_condg5If713S4PW8-B3hq0/edit",
        "parent_git": "https://github.com/daideguchi/zero-cost-merch-branch",
        "execution_git": "https://github.com/daideguchi/mercari-shops-bulk-branch"
      },
      "delegate_roles": [
        "商品特定担当",
        "比較画像精査担当",
        "相場調査担当",
        "出品下書き担当",
        "API公開担当",
        "問い合わせ対応担当",
        "集荷運用担当"
      ],
      "recommended_ai_tier": "高性能AI推奨",
      "handoff_when": [
        "顧客対応が絡む時",
        "商品同一性の断定に迷う時",
        "カテゴリ審査や API 異常が絡む時"
      ],
      "priority_ids": [
        "BOX-001-ITEM-0001",
        "BOX-001-ITEM-0013",
        "BOX-001-ITEM-0026",
        "BOX-001-ITEM-0027",
        "BOX-001-ITEM-0032",
        "BOX-001-ITEM-0034",
        "BOX-001-ITEM-0003",
        "BOX-001-ITEM-0004"
      ],
      "split_required_ids": [
        "BOX-001-ITEM-0028",
        "BOX-001-ITEM-0044",
        "BOX-001-ITEM-0056",
        "BOX-001-ITEM-0042",
        "BOX-001-ITEM-0039",
        "BOX-001-ITEM-0036",
        "BOX-001-ITEM-0025",
        "BOX-001-ITEM-0041"
      ],
      "launch_prompt": "あなたは 0円仕入れ物販事業の 0円出品部長 です。\nゴール: ショップ運営を優先し、問い合わせ・公開済み監査・審査待ち・下書き待ちを各担当へ振って resident と Git の整合まで持つ\n必ず見るもの:\n- README.md\n- docs/12_ルーティン運用マニュアル.md\n- docs/14_AI担当役職と起動プロンプト集.md\n- docs/16_UI起動パケット仕様.md\n制約:\n- 100%同一確認済みでない比較画像を出品画像へ上げない\n- README・resident・Z-98・Git を最後に必ずそろえる\n必要なら次の担当へ振ってください:\n- 商品特定担当\n- 比較画像精査担当\n- 相場調査担当\n- 出品下書き担当\n- API公開担当\n- 問い合わせ対応担当\n- 集荷運用担当\n次の条件では上位AIへ引き継いでください:\n- 顧客対応が絡む時\n- 商品同一性の断定に迷う時\n- カテゴリ審査や API 異常が絡む時\nいま優先して見るID:\n- BOX-001-ITEM-0001\n- BOX-001-ITEM-0013\n- BOX-001-ITEM-0026\n- BOX-001-ITEM-0027\n- BOX-001-ITEM-0032\n- BOX-001-ITEM-0034\n- BOX-001-ITEM-0003\n- BOX-001-ITEM-0004\n要再束ねのID:\n- BOX-001-ITEM-0028\n- BOX-001-ITEM-0044\n- BOX-001-ITEM-0056\n- BOX-001-ITEM-0042\n- BOX-001-ITEM-0039\n- BOX-001-ITEM-0036\n- BOX-001-ITEM-0025\n- BOX-001-ITEM-0041\n今回の対象ID:\n- BOX-001-ITEM-0004\n- BOX-001-ITEM-0005\n- BOX-001-ITEM-0008\n- BOX-001-ITEM-0009\n- BOX-001-ITEM-0011\n- BOX-001-ITEM-0012\n期待する出力:\n- 今の件数\n- 次に進める商品ID\n- どの担当へ何を振るか\n- 更新した正本\n最後に resident・README・Z-98・Git をそろえてください。"
    },
    {
      "role_name": "商品特定担当",
      "goal": "商品を confirmed / provisional / 要再束ね / 不明 に分ける",
      "current_counts": {
        "barcode_ready": 0,
        "ocr_ready": 0,
        "split_required": 21,
        "exception": 2
      },
      "target_ids": [],
      "must_read": [
        "docs/13_AI作業リード_商品特定担当.md",
        "state/intake/BOX-001_confirmed_identifications.json",
        "resident 商品カードDB"
      ],
      "constraints": [
        "コードラベルと本体表示が食い違う時は confirmed にしない",
        "split_required と exception は勝手に閉じない",
        "追加写真は求めず、いまある写真だけで判断する",
        "断定不能ならその旨を明記する"
      ],
      "expected_outputs": [
        "product_name",
        "status",
        "evidence",
        "next_action"
      ],
      "key_urls": {
        "resident": "./",
        "cards": "./intake_cards.html",
        "workbook": "https://docs.google.com/spreadsheets/d/1VjdUJavoijOkdjKtkdKy_zUcdkQqZwG0oRty57H5_lk/edit",
        "shared_sheet": "https://docs.google.com/spreadsheets/d/1CPJceNicgbuaj3vOL3IZ_condg5If713S4PW8-B3hq0/edit",
        "parent_git": "https://github.com/daideguchi/zero-cost-merch-branch",
        "execution_git": "https://github.com/daideguchi/mercari-shops-bulk-branch"
      },
      "recommended_ai_tier": "中性能AI以上",
      "handoff_when": [
        "本体表示とコードラベルが食い違う時",
        "医療・美容・健康系の断定が必要な時"
      ],
      "launch_prompt": "あなたは 0円仕入れ物販事業の 商品特定担当 です。\nゴール: 商品を confirmed / provisional / 要再束ね / 不明 に分ける\n必ず見るもの:\n- docs/13_AI作業リード_商品特定担当.md\n- state/intake/BOX-001_confirmed_identifications.json\n- resident 商品カードDB\n制約:\n- コードラベルと本体表示が食い違う時は confirmed にしない\n- split_required と exception は勝手に閉じない\n- 追加写真は求めず、いまある写真だけで判断する\n- 断定不能ならその旨を明記する\n次の条件では上位AIへ引き継いでください:\n- 本体表示とコードラベルが食い違う時\n- 医療・美容・健康系の断定が必要な時\n今回の対象ID:\n- いま固定の対象IDはありません\n期待する出力:\n- product_name\n- status\n- evidence\n- next_action\n最後に resident・README・Z-98・Git をそろえてください。"
    },
    {
      "role_name": "比較画像精査担当",
      "goal": "100%同一確認済み / 保留 / 不可 を判定する",
      "current_counts": {
        "verified_exact_match": 2,
        "pending_review": 0,
        "official_image_pending": 0
      },
      "target_ids": [],
      "must_read": [
        "docs/12_ルーティン運用マニュアル.md",
        "state/intake/BOX-001_official_image_candidates.json",
        "resident 商品カードDB"
      ],
      "constraints": [
        "100%同一確認済みでない比較画像を出品画像へ上げない",
        "保留と不可を混同しない"
      ],
      "expected_outputs": [
        "exact_match_status",
        "adoptable_images",
        "evidence"
      ],
      "key_urls": {
        "resident": "./",
        "cards": "./intake_cards.html",
        "workbook": "https://docs.google.com/spreadsheets/d/1VjdUJavoijOkdjKtkdKy_zUcdkQqZwG0oRty57H5_lk/edit",
        "shared_sheet": "https://docs.google.com/spreadsheets/d/1CPJceNicgbuaj3vOL3IZ_condg5If713S4PW8-B3hq0/edit",
        "parent_git": "https://github.com/daideguchi/zero-cost-merch-branch",
        "execution_git": "https://github.com/daideguchi/mercari-shops-bulk-branch"
      },
      "recommended_ai_tier": "高性能AI推奨",
      "handoff_when": [
        "100%同一確認済みを断定し切れない時",
        "比較画像の採用可否が顧客影響を持つ時"
      ],
      "launch_prompt": "あなたは 0円仕入れ物販事業の 比較画像精査担当 です。\nゴール: 100%同一確認済み / 保留 / 不可 を判定する\n必ず見るもの:\n- docs/12_ルーティン運用マニュアル.md\n- state/intake/BOX-001_official_image_candidates.json\n- resident 商品カードDB\n制約:\n- 100%同一確認済みでない比較画像を出品画像へ上げない\n- 保留と不可を混同しない\n次の条件では上位AIへ引き継いでください:\n- 100%同一確認済みを断定し切れない時\n- 比較画像の採用可否が顧客影響を持つ時\n今回の対象ID:\n- いま固定の対象IDはありません\n期待する出力:\n- exact_match_status\n- adoptable_images\n- evidence\n最後に resident・README・Z-98・Git をそろえてください。"
    },
    {
      "role_name": "相場調査担当",
      "goal": "最低価格と参照元を resident / 商品マスタに反映する",
      "current_counts": {
        "priced": 5,
        "market_pending": 8,
        "provisional": 56
      },
      "target_ids": [
        "BOX-001-ITEM-0001",
        "BOX-001-ITEM-0004",
        "BOX-001-ITEM-0005",
        "BOX-001-ITEM-0013",
        "BOX-001-ITEM-0027"
      ],
      "must_read": [
        "README.md",
        "state/intake/BOX-001_market_price_snapshot.json",
        "resident 商品カードDB"
      ],
      "constraints": [
        "最低価格は根拠URLと時刻を残す",
        "最低価格という語は説明欄へ書かない"
      ],
      "expected_outputs": [
        "market_floor_price",
        "market_source_url",
        "market_checked_at"
      ],
      "key_urls": {
        "resident": "./",
        "cards": "./intake_cards.html",
        "workbook": "https://docs.google.com/spreadsheets/d/1VjdUJavoijOkdjKtkdKy_zUcdkQqZwG0oRty57H5_lk/edit",
        "shared_sheet": "https://docs.google.com/spreadsheets/d/1CPJceNicgbuaj3vOL3IZ_condg5If713S4PW8-B3hq0/edit",
        "parent_git": "https://github.com/daideguchi/zero-cost-merch-branch",
        "execution_git": "https://github.com/daideguchi/mercari-shops-bulk-branch"
      },
      "recommended_ai_tier": "低コストAI可",
      "handoff_when": [
        "最低価格候補が複数に割れて特定不能な時"
      ],
      "launch_prompt": "あなたは 0円仕入れ物販事業の 相場調査担当 です。\nゴール: 最低価格と参照元を resident / 商品マスタに反映する\n必ず見るもの:\n- README.md\n- state/intake/BOX-001_market_price_snapshot.json\n- resident 商品カードDB\n制約:\n- 最低価格は根拠URLと時刻を残す\n- 最低価格という語は説明欄へ書かない\n次の条件では上位AIへ引き継いでください:\n- 最低価格候補が複数に割れて特定不能な時\n今回の対象ID:\n- BOX-001-ITEM-0001\n- BOX-001-ITEM-0004\n- BOX-001-ITEM-0005\n- BOX-001-ITEM-0013\n- BOX-001-ITEM-0027\n期待する出力:\n- market_floor_price\n- market_source_url\n- market_checked_at\n最後に resident・README・Z-98・Git をそろえてください。"
    },
    {
      "role_name": "出品下書き担当",
      "goal": "商品マスタと比較画像判定を踏まえて出品下書きを整える",
      "current_counts": {
        "draft_ready": 19,
        "confirmed": 2,
        "provisional": 56
      },
      "target_ids": [
        "BOX-001-ITEM-0001",
        "BOX-001-ITEM-0013",
        "BOX-001-ITEM-0004",
        "BOX-001-ITEM-0005",
        "BOX-001-ITEM-0026"
      ],
      "must_read": [
        "README.md",
        "docs/08_1商品を出品まで進める最短ルート.md",
        "resident 商品カードDB"
      ],
      "constraints": [
        "説明欄は 管理番号:+最低価格 の形式を守る",
        "出品画像の基本は実物画像とする"
      ],
      "expected_outputs": [
        "listing_title",
        "description",
        "image_order",
        "publish_ready_state"
      ],
      "key_urls": {
        "resident": "./",
        "cards": "./intake_cards.html",
        "workbook": "https://docs.google.com/spreadsheets/d/1VjdUJavoijOkdjKtkdKy_zUcdkQqZwG0oRty57H5_lk/edit",
        "shared_sheet": "https://docs.google.com/spreadsheets/d/1CPJceNicgbuaj3vOL3IZ_condg5If713S4PW8-B3hq0/edit",
        "parent_git": "https://github.com/daideguchi/zero-cost-merch-branch",
        "execution_git": "https://github.com/daideguchi/mercari-shops-bulk-branch"
      },
      "recommended_ai_tier": "中性能AI以上",
      "handoff_when": [
        "実物画像と比較画像の扱いに迷う時",
        "説明欄の表現が誤認を生みそうな時"
      ],
      "launch_prompt": "あなたは 0円仕入れ物販事業の 出品下書き担当 です。\nゴール: 商品マスタと比較画像判定を踏まえて出品下書きを整える\n必ず見るもの:\n- README.md\n- docs/08_1商品を出品まで進める最短ルート.md\n- resident 商品カードDB\n制約:\n- 説明欄は 管理番号:+最低価格 の形式を守る\n- 出品画像の基本は実物画像とする\n次の条件では上位AIへ引き継いでください:\n- 実物画像と比較画像の扱いに迷う時\n- 説明欄の表現が誤認を生みそうな時\n今回の対象ID:\n- BOX-001-ITEM-0001\n- BOX-001-ITEM-0013\n- BOX-001-ITEM-0004\n- BOX-001-ITEM-0005\n- BOX-001-ITEM-0026\n期待する出力:\n- listing_title\n- description\n- image_order\n- publish_ready_state\n最後に resident・README・Z-98・Git をそろえてください。"
    },
    {
      "role_name": "API公開担当",
      "goal": "seller session GraphQL API で公開し、listing_id と公開URLを残す",
      "current_counts": {
        "draft_ready": 19,
        "published": 9,
        "category_review_waiting": 1
      },
      "target_ids": [
        "BOX-001-ITEM-0037",
        "BOX-001-ITEM-0001",
        "BOX-001-ITEM-0026",
        "BOX-001-ITEM-0019",
        "BOX-001-ITEM-0022"
      ],
      "must_read": [
        "docs/09_公開から集荷までの自動化設計.md",
        "state/mercari_api_status.json",
        "README.md"
      ],
      "constraints": [
        "actual-only 画像ポリシーを守る",
        "カテゴリ審査待ちと API 不良を混同しない"
      ],
      "expected_outputs": [
        "listing_id",
        "public_url",
        "image_check_result"
      ],
      "key_urls": {
        "resident": "./",
        "cards": "./intake_cards.html",
        "workbook": "https://docs.google.com/spreadsheets/d/1VjdUJavoijOkdjKtkdKy_zUcdkQqZwG0oRty57H5_lk/edit",
        "shared_sheet": "https://docs.google.com/spreadsheets/d/1CPJceNicgbuaj3vOL3IZ_condg5If713S4PW8-B3hq0/edit",
        "parent_git": "https://github.com/daideguchi/zero-cost-merch-branch",
        "execution_git": "https://github.com/daideguchi/mercari-shops-bulk-branch"
      },
      "recommended_ai_tier": "高性能AI推奨",
      "handoff_when": [
        "API がエラーを返す時",
        "カテゴリ審査待ちと API 不良の切り分けが必要な時"
      ],
      "launch_prompt": "あなたは 0円仕入れ物販事業の API公開担当 です。\nゴール: seller session GraphQL API で公開し、listing_id と公開URLを残す\n必ず見るもの:\n- docs/09_公開から集荷までの自動化設計.md\n- state/mercari_api_status.json\n- README.md\n制約:\n- actual-only 画像ポリシーを守る\n- カテゴリ審査待ちと API 不良を混同しない\n次の条件では上位AIへ引き継いでください:\n- API がエラーを返す時\n- カテゴリ審査待ちと API 不良の切り分けが必要な時\n今回の対象ID:\n- BOX-001-ITEM-0037\n- BOX-001-ITEM-0001\n- BOX-001-ITEM-0026\n- BOX-001-ITEM-0019\n- BOX-001-ITEM-0022\n期待する出力:\n- listing_id\n- public_url\n- image_check_result\n最後に resident・README・Z-98・Git をそろえてください。"
    },
    {
      "role_name": "問い合わせ対応担当",
      "goal": "質問本文を踏まえて事実ベースで返信する",
      "current_counts": {
        "open_talk_rooms": 0,
        "published": 9
      },
      "target_ids": [],
      "must_read": [
        "README.md の問い合わせ節",
        "seller の talk-rooms",
        "resident 商品カードDB"
      ],
      "constraints": [
        "人間が書いたように見せない",
        "事実確認できないことを断定しない"
      ],
      "expected_outputs": [
        "question_text",
        "reply_text",
        "record_update"
      ],
      "key_urls": {
        "resident": "./",
        "cards": "./intake_cards.html",
        "workbook": "https://docs.google.com/spreadsheets/d/1VjdUJavoijOkdjKtkdKy_zUcdkQqZwG0oRty57H5_lk/edit",
        "shared_sheet": "https://docs.google.com/spreadsheets/d/1CPJceNicgbuaj3vOL3IZ_condg5If713S4PW8-B3hq0/edit",
        "parent_git": "https://github.com/daideguchi/zero-cost-merch-branch",
        "execution_git": "https://github.com/daideguchi/mercari-shops-bulk-branch",
        "talk_rooms": "seller talk-rooms"
      },
      "recommended_ai_tier": "最高優先 / 高性能AIのみ",
      "handoff_when": [
        "事実確認が弱い時は絶対に送信しない",
        "顧客感情に影響する文面の時"
      ],
      "launch_prompt": "あなたは 0円仕入れ物販事業の 問い合わせ対応担当 です。\nゴール: 質問本文を踏まえて事実ベースで返信する\n必ず見るもの:\n- README.md の問い合わせ節\n- seller の talk-rooms\n- resident 商品カードDB\n制約:\n- 人間が書いたように見せない\n- 事実確認できないことを断定しない\n次の条件では上位AIへ引き継いでください:\n- 事実確認が弱い時は絶対に送信しない\n- 顧客感情に影響する文面の時\n今回の対象ID:\n- いま固定の対象IDはありません\n期待する出力:\n- question_text\n- reply_text\n- record_update\n最後に resident・README・Z-98・Git をそろえてください。"
    },
    {
      "role_name": "集荷運用担当",
      "goal": "メルカリBiz配送 + 送り状印刷 + ヤマト集荷の本線を維持する",
      "current_counts": {
        "pickup_pending": 0,
        "published": 9,
        "mercari_biz_mainline": 1
      },
      "target_ids": [
        "BOX-001-ITEM-0001",
        "BOX-001-ITEM-0013",
        "BOX-001-ITEM-0004",
        "BOX-001-ITEM-0005",
        "BOX-001-ITEM-0026"
      ],
      "must_read": [
        "docs/04_受注_発送_集荷自動化.md",
        "docs/06_集荷ルール_現場版.md",
        "README.md"
      ],
      "constraints": [
        "手書きしない",
        "印刷ラベルは予備線として保持する"
      ],
      "expected_outputs": [
        "pickup_mode",
        "shipment_tracking_plan",
        "resident_status_update"
      ],
      "key_urls": {
        "resident": "./",
        "cards": "./intake_cards.html",
        "workbook": "https://docs.google.com/spreadsheets/d/1VjdUJavoijOkdjKtkdKy_zUcdkQqZwG0oRty57H5_lk/edit",
        "shared_sheet": "https://docs.google.com/spreadsheets/d/1CPJceNicgbuaj3vOL3IZ_condg5If713S4PW8-B3hq0/edit",
        "parent_git": "https://github.com/daideguchi/zero-cost-merch-branch",
        "execution_git": "https://github.com/daideguchi/mercari-shops-bulk-branch"
      },
      "recommended_ai_tier": "低コストAI可",
      "handoff_when": [
        "配送ラベルや送り状運用が変わる時"
      ],
      "launch_prompt": "あなたは 0円仕入れ物販事業の 集荷運用担当 です。\nゴール: メルカリBiz配送 + 送り状印刷 + ヤマト集荷の本線を維持する\n必ず見るもの:\n- docs/04_受注_発送_集荷自動化.md\n- docs/06_集荷ルール_現場版.md\n- README.md\n制約:\n- 手書きしない\n- 印刷ラベルは予備線として保持する\n次の条件では上位AIへ引き継いでください:\n- 配送ラベルや送り状運用が変わる時\n今回の対象ID:\n- BOX-001-ITEM-0001\n- BOX-001-ITEM-0013\n- BOX-001-ITEM-0004\n- BOX-001-ITEM-0005\n- BOX-001-ITEM-0026\n期待する出力:\n- pickup_mode\n- shipment_tracking_plan\n- resident_status_update\n最後に resident・README・Z-98・Git をそろえてください。"
    }
  ],
  "task_cards": [
    {
      "task_name": "OCR整形担当",
      "role_name": "低コストAI",
      "goal": "CODE画像の OCR 候補とバーコード候補を整形し、次の検索語まで作る",
      "current_counts": {
        "barcode_ready": 0,
        "ocr_ready": 0,
        "split_required": 21
      },
      "target_ids": [],
      "input_fields": [
        "management_id",
        "CODE画像",
        "barcode_candidates",
        "ocr_code_candidates",
        "ocr_refined_text"
      ],
      "write_targets": [
        "mercari_shops_bulk_branch/state/photo_batches/BOX-001_photo_identify.json",
        "zero_cost_merch_branch/state/operator_status.json"
      ],
      "must_not_do": [
        "confirmed / provisional を勝手に付けない",
        "顧客へ返答しない",
        "比較画像を出品画像へ上げない",
        "100%同一確認済み を勝手に付けない",
        "問い合わせへ直接返答しない",
        "出品や API 公開を実行しない"
      ],
      "stop_conditions": [
        "本体表示とコード候補が食い違う",
        "色違い / サイズ違い / 容量違いの疑いが出る",
        "医療・美容・健康系の断定が必要になる"
      ],
      "expected_outputs": [
        "clean_barcode_candidates",
        "clean_ocr_queries",
        "次に検索すべき文字列"
      ],
      "key_urls": {
        "resident": "./",
        "cards": "./intake_cards.html",
        "workbook": "https://docs.google.com/spreadsheets/d/1VjdUJavoijOkdjKtkdKy_zUcdkQqZwG0oRty57H5_lk/edit",
        "shared_sheet": "https://docs.google.com/spreadsheets/d/1CPJceNicgbuaj3vOL3IZ_condg5If713S4PW8-B3hq0/edit",
        "parent_git": "https://github.com/daideguchi/zero-cost-merch-branch",
        "execution_git": "https://github.com/daideguchi/mercari-shops-bulk-branch"
      },
      "recommended_ai_tier": "低コストAI可",
      "batch_size": 3,
      "launch_prompt": "あなたは 0円仕入れ物販事業の OCR整形担当 です。\nあなたのAI層は 低コストAI です。\nゴール: CODE画像の OCR 候補とバーコード候補を整形し、次の検索語まで作る\n今回の batch_size: 3\n今回の対象ID:\n- いま固定の対象IDはありません\n入力として見るもの:\n- management_id\n- CODE画像\n- barcode_candidates\n- ocr_code_candidates\n- ocr_refined_text\n書き戻してよい場所:\n- mercari_shops_bulk_branch/state/photo_batches/BOX-001_photo_identify.json\n- zero_cost_merch_branch/state/operator_status.json\nやってはいけないこと:\n- confirmed / provisional を勝手に付けない\n- 顧客へ返答しない\n- 比較画像を出品画像へ上げない\n- 100%同一確認済み を勝手に付けない\n- 問い合わせへ直接返答しない\n- 出品や API 公開を実行しない\n次に当てはまったら止めて上位AIへ渡してください:\n- 本体表示とコード候補が食い違う\n- 色違い / サイズ違い / 容量違いの疑いが出る\n- 医療・美容・健康系の断定が必要になる\n期待する出力:\n- clean_barcode_candidates\n- clean_ocr_queries\n- 次に検索すべき文字列\n最後に README・resident・Z-98・Git のうち、自分に許可された更新だけをそろえてください。"
    },
    {
      "task_name": "候補URL収集担当",
      "role_name": "低コストAI",
      "goal": "比較画像候補を集めて、同一性判断の材料だけを残す",
      "current_counts": {
        "exact_pending": 56,
        "official_image_pending": 0
      },
      "target_ids": [],
      "input_fields": [
        "management_id",
        "product_name",
        "GTIN / Amazon内部コード",
        "実物画像3枚",
        "current_exact_match_status"
      ],
      "write_targets": [
        "zero_cost_merch_branch/state/intake/BOX-001_official_image_candidates.json"
      ],
      "must_not_do": [
        "100%同一確認済み を勝手に付けない",
        "比較画像を listing へ反映しない",
        "問い合わせへ直接返答しない",
        "出品や API 公開を実行しない"
      ],
      "stop_conditions": [
        "色違い / 型番違い / サイズ違いが見えた",
        "候補画像が似ているだけで断定できない",
        "顧客影響のある商品に当たった"
      ],
      "expected_outputs": [
        "candidate_urls",
        "candidate_titles",
        "一致しそうな根拠メモ"
      ],
      "key_urls": {
        "resident": "./",
        "cards": "./intake_cards.html",
        "workbook": "https://docs.google.com/spreadsheets/d/1VjdUJavoijOkdjKtkdKy_zUcdkQqZwG0oRty57H5_lk/edit",
        "shared_sheet": "https://docs.google.com/spreadsheets/d/1CPJceNicgbuaj3vOL3IZ_condg5If713S4PW8-B3hq0/edit",
        "parent_git": "https://github.com/daideguchi/zero-cost-merch-branch",
        "execution_git": "https://github.com/daideguchi/mercari-shops-bulk-branch"
      },
      "recommended_ai_tier": "低コストAI可",
      "batch_size": 2,
      "job_target_ids": [],
      "launch_prompt": "あなたは 0円仕入れ物販事業の 候補URL収集担当 です。\nあなたのAI層は 低コストAI です。\nゴール: 比較画像候補を集めて、同一性判断の材料だけを残す\n今回の batch_size: 2\n今回の対象ID:\n- いま固定の対象IDはありません\n入力として見るもの:\n- management_id\n- product_name\n- GTIN / Amazon内部コード\n- 実物画像3枚\n- current_exact_match_status\n書き戻してよい場所:\n- zero_cost_merch_branch/state/intake/BOX-001_official_image_candidates.json\nやってはいけないこと:\n- 100%同一確認済み を勝手に付けない\n- 比較画像を listing へ反映しない\n- 問い合わせへ直接返答しない\n- 出品や API 公開を実行しない\n次に当てはまったら止めて上位AIへ渡してください:\n- 色違い / 型番違い / サイズ違いが見えた\n- 候補画像が似ているだけで断定できない\n- 顧客影響のある商品に当たった\n期待する出力:\n- candidate_urls\n- candidate_titles\n- 一致しそうな根拠メモ\n最後に README・resident・Z-98・Git のうち、自分に許可された更新だけをそろえてください。"
    },
    {
      "task_name": "比較画像照合担当",
      "role_name": "低コストAI",
      "goal": "routing 上の 画像同一性確認待ち を整理し、同一性判断の材料だけを残す",
      "current_counts": {
        "image_review_waiting": 0,
        "routing_total": 36
      },
      "target_ids": [],
      "input_fields": [
        "management_id",
        "product_name",
        "実物画像3枚",
        "比較画像候補",
        "routing_reason"
      ],
      "write_targets": [
        "zero_cost_merch_branch/state/intake/BOX-001_official_image_candidates.json",
        "zero_cost_merch_branch/state/routing_plan.json"
      ],
      "must_not_do": [
        "100%同一確認済み を勝手に付けない",
        "比較画像を listing へ反映しない",
        "顧客対応をしない",
        "問い合わせへ直接返答しない",
        "出品や API 公開を実行しない"
      ],
      "stop_conditions": [
        "色違い / 型番違い / サイズ違い / セット違いが見えた",
        "比較画像が似ているだけで断定できない",
        "顧客影響がある商品に当たった"
      ],
      "expected_outputs": [
        "comparison_findings",
        "risk_points",
        "hq_review_note"
      ],
      "key_urls": {
        "resident": "./",
        "cards": "./intake_cards.html",
        "workbook": "https://docs.google.com/spreadsheets/d/1VjdUJavoijOkdjKtkdKy_zUcdkQqZwG0oRty57H5_lk/edit",
        "shared_sheet": "https://docs.google.com/spreadsheets/d/1CPJceNicgbuaj3vOL3IZ_condg5If713S4PW8-B3hq0/edit",
        "parent_git": "https://github.com/daideguchi/zero-cost-merch-branch",
        "execution_git": "https://github.com/daideguchi/mercari-shops-bulk-branch"
      },
      "recommended_ai_tier": "低コストAI可",
      "batch_size": 2,
      "job_target_ids": [],
      "launch_prompt": "あなたは 0円仕入れ物販事業の 比較画像照合担当 です。\nあなたのAI層は 低コストAI です。\nゴール: routing 上の 画像同一性確認待ち を整理し、同一性判断の材料だけを残す\n今回の batch_size: 2\n今回の対象ID:\n- いま固定の対象IDはありません\n入力として見るもの:\n- management_id\n- product_name\n- 実物画像3枚\n- 比較画像候補\n- routing_reason\n書き戻してよい場所:\n- zero_cost_merch_branch/state/intake/BOX-001_official_image_candidates.json\n- zero_cost_merch_branch/state/routing_plan.json\nやってはいけないこと:\n- 100%同一確認済み を勝手に付けない\n- 比較画像を listing へ反映しない\n- 顧客対応をしない\n- 問い合わせへ直接返答しない\n- 出品や API 公開を実行しない\n次に当てはまったら止めて上位AIへ渡してください:\n- 色違い / 型番違い / サイズ違い / セット違いが見えた\n- 比較画像が似ているだけで断定できない\n- 顧客影響がある商品に当たった\n期待する出力:\n- comparison_findings\n- risk_points\n- hq_review_note\n最後に README・resident・Z-98・Git のうち、自分に許可された更新だけをそろえてください。"
    },
    {
      "task_name": "公開前チェック担当",
      "role_name": "低コストAI",
      "goal": "公開可否確認待ちの商品を、出品前チェックの材料だけに整理する",
      "current_counts": {
        "publish_gate_waiting": 24,
        "draft_ready": 19
      },
      "target_ids": [
        "BOX-001-ITEM-0002",
        "BOX-001-ITEM-0003",
        "BOX-001-ITEM-0007",
        "BOX-001-ITEM-0010",
        "BOX-001-ITEM-0013",
        "BOX-001-ITEM-0015",
        "BOX-001-ITEM-0016",
        "BOX-001-ITEM-0017"
      ],
      "input_fields": [
        "management_id",
        "product_name",
        "publish_ok",
        "draft_status",
        "image_gate",
        "routing_reason"
      ],
      "write_targets": [
        "zero_cost_merch_branch/state/routing_plan.json",
        "zero_cost_merch_branch/state/qwen_runs/"
      ],
      "must_not_do": [
        "公開可 と断定しない",
        "出品や API 公開を実行しない",
        "顧客対応をしない",
        "100%同一確認済み を勝手に付けない",
        "問い合わせへ直接返答しない"
      ],
      "stop_conditions": [
        "画像同一性が未確認",
        "説明文や価格に誤認リスクがある",
        "カテゴリ審査や規制確認が必要になる"
      ],
      "expected_outputs": [
        "preflight_checklist",
        "risk_flags",
        "hq_review_note"
      ],
      "key_urls": {
        "resident": "./",
        "cards": "./intake_cards.html",
        "workbook": "https://docs.google.com/spreadsheets/d/1VjdUJavoijOkdjKtkdKy_zUcdkQqZwG0oRty57H5_lk/edit",
        "shared_sheet": "https://docs.google.com/spreadsheets/d/1CPJceNicgbuaj3vOL3IZ_condg5If713S4PW8-B3hq0/edit",
        "parent_git": "https://github.com/daideguchi/zero-cost-merch-branch",
        "execution_git": "https://github.com/daideguchi/mercari-shops-bulk-branch"
      },
      "recommended_ai_tier": "低コストAI可",
      "batch_size": 3,
      "job_target_ids": [
        "BOX-001-ITEM-0002",
        "BOX-001-ITEM-0003",
        "BOX-001-ITEM-0007",
        "BOX-001-ITEM-0010",
        "BOX-001-ITEM-0013",
        "BOX-001-ITEM-0015",
        "BOX-001-ITEM-0016",
        "BOX-001-ITEM-0017"
      ],
      "launch_prompt": "あなたは 0円仕入れ物販事業の 公開前チェック担当 です。\nあなたのAI層は 低コストAI です。\nゴール: 公開可否確認待ちの商品を、出品前チェックの材料だけに整理する\n今回の batch_size: 3\n今回の対象ID:\n- BOX-001-ITEM-0002\n- BOX-001-ITEM-0003\n- BOX-001-ITEM-0007\n- BOX-001-ITEM-0010\n- BOX-001-ITEM-0013\n- BOX-001-ITEM-0015\n- BOX-001-ITEM-0016\n- BOX-001-ITEM-0017\n入力として見るもの:\n- management_id\n- product_name\n- publish_ok\n- draft_status\n- image_gate\n- routing_reason\n書き戻してよい場所:\n- zero_cost_merch_branch/state/routing_plan.json\n- zero_cost_merch_branch/state/qwen_runs/\nやってはいけないこと:\n- 公開可 と断定しない\n- 出品や API 公開を実行しない\n- 顧客対応をしない\n- 100%同一確認済み を勝手に付けない\n- 問い合わせへ直接返答しない\n次に当てはまったら止めて上位AIへ渡してください:\n- 画像同一性が未確認\n- 説明文や価格に誤認リスクがある\n- カテゴリ審査や規制確認が必要になる\n期待する出力:\n- preflight_checklist\n- risk_flags\n- hq_review_note\n最後に README・resident・Z-98・Git のうち、自分に許可された更新だけをそろえてください。"
    },
    {
      "task_name": "審査監視担当",
      "role_name": "低コストAI",
      "goal": "カテゴリ審査待ち商品の状態と次の確認点を整理する",
      "current_counts": {
        "category_review_waiting": 1
      },
      "target_ids": [
        "BOX-001-ITEM-0001"
      ],
      "input_fields": [
        "management_id",
        "product_name",
        "review_state",
        "application_id"
      ],
      "write_targets": [
        "zero_cost_merch_branch/state/mercari_api_status.json",
        "zero_cost_merch_branch/state/routing_plan.json"
      ],
      "must_not_do": [
        "審査通過済み と断定しない",
        "出品や API 公開を実行しない",
        "顧客対応をしない",
        "100%同一確認済み を勝手に付けない",
        "問い合わせへ直接返答しない"
      ],
      "stop_conditions": [
        "カテゴリ審査の current truth が見えない",
        "API 異常と審査待ちの区別がつかない"
      ],
      "expected_outputs": [
        "review_status_note",
        "next_check_timing"
      ],
      "key_urls": {
        "resident": "./",
        "cards": "./intake_cards.html",
        "workbook": "https://docs.google.com/spreadsheets/d/1VjdUJavoijOkdjKtkdKy_zUcdkQqZwG0oRty57H5_lk/edit",
        "shared_sheet": "https://docs.google.com/spreadsheets/d/1CPJceNicgbuaj3vOL3IZ_condg5If713S4PW8-B3hq0/edit",
        "parent_git": "https://github.com/daideguchi/zero-cost-merch-branch",
        "execution_git": "https://github.com/daideguchi/mercari-shops-bulk-branch"
      },
      "recommended_ai_tier": "低コストAI可",
      "batch_size": 2,
      "job_target_ids": [
        "BOX-001-ITEM-0001"
      ],
      "launch_prompt": "あなたは 0円仕入れ物販事業の 審査監視担当 です。\nあなたのAI層は 低コストAI です。\nゴール: カテゴリ審査待ち商品の状態と次の確認点を整理する\n今回の batch_size: 2\n今回の対象ID:\n- BOX-001-ITEM-0001\n入力として見るもの:\n- management_id\n- product_name\n- review_state\n- application_id\n書き戻してよい場所:\n- zero_cost_merch_branch/state/mercari_api_status.json\n- zero_cost_merch_branch/state/routing_plan.json\nやってはいけないこと:\n- 審査通過済み と断定しない\n- 出品や API 公開を実行しない\n- 顧客対応をしない\n- 100%同一確認済み を勝手に付けない\n- 問い合わせへ直接返答しない\n次に当てはまったら止めて上位AIへ渡してください:\n- カテゴリ審査の current truth が見えない\n- API 異常と審査待ちの区別がつかない\n期待する出力:\n- review_status_note\n- next_check_timing\n最後に README・resident・Z-98・Git のうち、自分に許可された更新だけをそろえてください。"
    },
    {
      "task_name": "BASE同期準備担当",
      "role_name": "低コストAI",
      "goal": "BASE 側へ流せる商品を、同期材料だけに整理する",
      "current_counts": {
        "base_ready_routing": 34
      },
      "target_ids": [],
      "input_fields": [
        "management_id",
        "product_name",
        "listing_title",
        "listing_price",
        "image_gate"
      ],
      "write_targets": [
        "zero_cost_merch_branch/state/routing_plan.json",
        "zero_cost_merch_branch/state/qwen_runs/"
      ],
      "must_not_do": [
        "BASE へ実登録しない",
        "価格や画像を確定扱いしない",
        "顧客対応をしない",
        "100%同一確認済み を勝手に付けない",
        "問い合わせへ直接返答しない",
        "出品や API 公開を実行しない"
      ],
      "stop_conditions": [
        "画像同一性が未確認",
        "商品名や価格が未確定"
      ],
      "expected_outputs": [
        "base_sync_fields",
        "missing_fields"
      ],
      "key_urls": {
        "resident": "./",
        "cards": "./intake_cards.html",
        "workbook": "https://docs.google.com/spreadsheets/d/1VjdUJavoijOkdjKtkdKy_zUcdkQqZwG0oRty57H5_lk/edit",
        "shared_sheet": "https://docs.google.com/spreadsheets/d/1CPJceNicgbuaj3vOL3IZ_condg5If713S4PW8-B3hq0/edit",
        "parent_git": "https://github.com/daideguchi/zero-cost-merch-branch",
        "execution_git": "https://github.com/daideguchi/mercari-shops-bulk-branch"
      },
      "recommended_ai_tier": "低コストAI可",
      "batch_size": 4,
      "job_target_ids": [],
      "launch_prompt": "あなたは 0円仕入れ物販事業の BASE同期準備担当 です。\nあなたのAI層は 低コストAI です。\nゴール: BASE 側へ流せる商品を、同期材料だけに整理する\n今回の batch_size: 4\n今回の対象ID:\n- いま固定の対象IDはありません\n入力として見るもの:\n- management_id\n- product_name\n- listing_title\n- listing_price\n- image_gate\n書き戻してよい場所:\n- zero_cost_merch_branch/state/routing_plan.json\n- zero_cost_merch_branch/state/qwen_runs/\nやってはいけないこと:\n- BASE へ実登録しない\n- 価格や画像を確定扱いしない\n- 顧客対応をしない\n- 100%同一確認済み を勝手に付けない\n- 問い合わせへ直接返答しない\n- 出品や API 公開を実行しない\n次に当てはまったら止めて上位AIへ渡してください:\n- 画像同一性が未確認\n- 商品名や価格が未確定\n期待する出力:\n- base_sync_fields\n- missing_fields\n最後に README・resident・Z-98・Git のうち、自分に許可された更新だけをそろえてください。"
    },
    {
      "task_name": "最低価格収集担当",
      "role_name": "低コストAI",
      "goal": "最低価格と根拠URLと調査時刻を集める",
      "current_counts": {
        "market_pending": 53,
        "provisional": 56,
        "published": 9
      },
      "target_ids": [
        "BOX-001-ITEM-0001",
        "BOX-001-ITEM-0004",
        "BOX-001-ITEM-0005",
        "BOX-001-ITEM-0013",
        "BOX-001-ITEM-0027",
        "BOX-001-ITEM-0008"
      ],
      "input_fields": [
        "management_id",
        "product_name",
        "exact_match_status",
        "current_min_price"
      ],
      "write_targets": [
        "zero_cost_merch_branch/state/intake/BOX-001_market_price_snapshot.json",
        "zero_cost_merch_branch/state/current_state.json"
      ],
      "must_not_do": [
        "最低価格という語を説明欄へ書かない",
        "相場の断定を顧客返答に使わない",
        "100%同一確認済み を勝手に付けない",
        "問い合わせへ直接返答しない",
        "出品や API 公開を実行しない"
      ],
      "stop_conditions": [
        "候補が複数に割れて exact 商品か分からない",
        "送料込み / 送料別で比較が崩れる"
      ],
      "expected_outputs": [
        "market_floor_price",
        "market_source_url",
        "market_checked_at"
      ],
      "key_urls": {
        "resident": "./",
        "cards": "./intake_cards.html",
        "workbook": "https://docs.google.com/spreadsheets/d/1VjdUJavoijOkdjKtkdKy_zUcdkQqZwG0oRty57H5_lk/edit",
        "shared_sheet": "https://docs.google.com/spreadsheets/d/1CPJceNicgbuaj3vOL3IZ_condg5If713S4PW8-B3hq0/edit",
        "parent_git": "https://github.com/daideguchi/zero-cost-merch-branch",
        "execution_git": "https://github.com/daideguchi/mercari-shops-bulk-branch"
      },
      "recommended_ai_tier": "低コストAI可",
      "batch_size": 4,
      "launch_prompt": "あなたは 0円仕入れ物販事業の 最低価格収集担当 です。\nあなたのAI層は 低コストAI です。\nゴール: 最低価格と根拠URLと調査時刻を集める\n今回の batch_size: 4\n今回の対象ID:\n- BOX-001-ITEM-0001\n- BOX-001-ITEM-0004\n- BOX-001-ITEM-0005\n- BOX-001-ITEM-0013\n- BOX-001-ITEM-0027\n- BOX-001-ITEM-0008\n入力として見るもの:\n- management_id\n- product_name\n- exact_match_status\n- current_min_price\n書き戻してよい場所:\n- zero_cost_merch_branch/state/intake/BOX-001_market_price_snapshot.json\n- zero_cost_merch_branch/state/current_state.json\nやってはいけないこと:\n- 最低価格という語を説明欄へ書かない\n- 相場の断定を顧客返答に使わない\n- 100%同一確認済み を勝手に付けない\n- 問い合わせへ直接返答しない\n- 出品や API 公開を実行しない\n次に当てはまったら止めて上位AIへ渡してください:\n- 候補が複数に割れて exact 商品か分からない\n- 送料込み / 送料別で比較が崩れる\n期待する出力:\n- market_floor_price\n- market_source_url\n- market_checked_at\n最後に README・resident・Z-98・Git のうち、自分に許可された更新だけをそろえてください。"
    },
    {
      "task_name": "resident整合担当",
      "role_name": "低コストAI",
      "goal": "resident と state の件数とリンクを再生成し、ズレを減らす",
      "current_counts": {
        "inquiry_open": 0,
        "published": 9,
        "draft_ready": 19,
        "pickup_pending": 0,
        "qwen_review_pending": 0
      },
      "target_ids": [
        "BOX-001-ITEM-0004",
        "BOX-001-ITEM-0005",
        "BOX-001-ITEM-0008",
        "BOX-001-ITEM-0009",
        "BOX-001-ITEM-0011",
        "BOX-001-ITEM-0012"
      ],
      "input_fields": [
        "operator_status.json",
        "current_state.json",
        "role_packets.json",
        "公開済み listing 状態"
      ],
      "write_targets": [
        "zero_cost_merch_branch/state/current_state.json",
        "zero_cost_merch_branch/state/operator_status.json",
        "zero_cost_merch_branch/state/role_packets.json",
        "resident snapshot js/html"
      ],
      "must_not_do": [
        "customer reply を送らない",
        "exact-match 判定を勝手に変えない",
        "API公開成功扱いを捏造しない",
        "100%同一確認済み を勝手に付けない",
        "問い合わせへ直接返答しない",
        "出品や API 公開を実行しない"
      ],
      "stop_conditions": [
        "resident と台帳の数字が食い違う",
        "公開URLや listing_id が消える",
        "問い合わせ対象が特定できない"
      ],
      "expected_outputs": [
        "render 実行結果",
        "ズレが残る項目",
        "更新した snapshot 一覧"
      ],
      "key_urls": {
        "resident": "./",
        "cards": "./intake_cards.html",
        "workbook": "https://docs.google.com/spreadsheets/d/1VjdUJavoijOkdjKtkdKy_zUcdkQqZwG0oRty57H5_lk/edit",
        "shared_sheet": "https://docs.google.com/spreadsheets/d/1CPJceNicgbuaj3vOL3IZ_condg5If713S4PW8-B3hq0/edit",
        "parent_git": "https://github.com/daideguchi/zero-cost-merch-branch",
        "execution_git": "https://github.com/daideguchi/mercari-shops-bulk-branch"
      },
      "recommended_ai_tier": "低コストAI可",
      "batch_size": 6,
      "launch_prompt": "あなたは 0円仕入れ物販事業の resident整合担当 です。\nあなたのAI層は 低コストAI です。\nゴール: resident と state の件数とリンクを再生成し、ズレを減らす\n今回の batch_size: 6\n今回の対象ID:\n- BOX-001-ITEM-0004\n- BOX-001-ITEM-0005\n- BOX-001-ITEM-0008\n- BOX-001-ITEM-0009\n- BOX-001-ITEM-0011\n- BOX-001-ITEM-0012\n入力として見るもの:\n- operator_status.json\n- current_state.json\n- role_packets.json\n- 公開済み listing 状態\n書き戻してよい場所:\n- zero_cost_merch_branch/state/current_state.json\n- zero_cost_merch_branch/state/operator_status.json\n- zero_cost_merch_branch/state/role_packets.json\n- resident snapshot js/html\nやってはいけないこと:\n- customer reply を送らない\n- exact-match 判定を勝手に変えない\n- API公開成功扱いを捏造しない\n- 100%同一確認済み を勝手に付けない\n- 問い合わせへ直接返答しない\n- 出品や API 公開を実行しない\n次に当てはまったら止めて上位AIへ渡してください:\n- resident と台帳の数字が食い違う\n- 公開URLや listing_id が消える\n- 問い合わせ対象が特定できない\n期待する出力:\n- render 実行結果\n- ズレが残る項目\n- 更新した snapshot 一覧\n最後に README・resident・Z-98・Git のうち、自分に許可された更新だけをそろえてください。"
    }
  ],
  "task_card_queue": [
    {
      "job_id": "公開前チェック担当-001",
      "task_name": "公開前チェック担当",
      "management_id": "BOX-001-ITEM-0002",
      "status": "open",
      "recommended_ai_tier": "低コストAI可",
      "goal": "公開可否確認待ちの商品を、出品前チェックの材料だけに整理する",
      "input_fields": [
        "management_id",
        "product_name",
        "publish_ok",
        "draft_status",
        "image_gate",
        "routing_reason"
      ],
      "write_targets": [
        "zero_cost_merch_branch/state/routing_plan.json",
        "zero_cost_merch_branch/state/qwen_runs/"
      ],
      "must_not_do": [
        "公開可 と断定しない",
        "出品や API 公開を実行しない",
        "顧客対応をしない",
        "100%同一確認済み を勝手に付けない",
        "問い合わせへ直接返答しない"
      ],
      "stop_conditions": [
        "画像同一性が未確認",
        "説明文や価格に誤認リスクがある",
        "カテゴリ審査や規制確認が必要になる"
      ],
      "expected_outputs": [
        "preflight_checklist",
        "risk_flags",
        "hq_review_note"
      ],
      "batch_size": 3,
      "routing_context": {
        "mercari_lane": "出品準備中",
        "mercari_gate": "公開可否確認待ち",
        "image_gate": "実物のみで可",
        "base_condition": "同期準備可",
        "shipco_condition": "送り状共通化候補",
        "review_reason": "公開可否未確定 / Qwen HQ判断: 比較画像照合担当 / actual-only固定優先",
        "low_cost_job": "公開前チェック"
      }
    },
    {
      "job_id": "公開前チェック担当-002",
      "task_name": "公開前チェック担当",
      "management_id": "BOX-001-ITEM-0003",
      "status": "open",
      "recommended_ai_tier": "低コストAI可",
      "goal": "公開可否確認待ちの商品を、出品前チェックの材料だけに整理する",
      "input_fields": [
        "management_id",
        "product_name",
        "publish_ok",
        "draft_status",
        "image_gate",
        "routing_reason"
      ],
      "write_targets": [
        "zero_cost_merch_branch/state/routing_plan.json",
        "zero_cost_merch_branch/state/qwen_runs/"
      ],
      "must_not_do": [
        "公開可 と断定しない",
        "出品や API 公開を実行しない",
        "顧客対応をしない",
        "100%同一確認済み を勝手に付けない",
        "問い合わせへ直接返答しない"
      ],
      "stop_conditions": [
        "画像同一性が未確認",
        "説明文や価格に誤認リスクがある",
        "カテゴリ審査や規制確認が必要になる"
      ],
      "expected_outputs": [
        "preflight_checklist",
        "risk_flags",
        "hq_review_note"
      ],
      "batch_size": 3,
      "routing_context": {
        "mercari_lane": "出品準備中",
        "mercari_gate": "公開可否確認待ち",
        "image_gate": "実物のみで可",
        "base_condition": "同期準備可",
        "shipco_condition": "送り状共通化候補",
        "review_reason": "公開可否未確定",
        "low_cost_job": "公開前チェック"
      }
    },
    {
      "job_id": "公開前チェック担当-003",
      "task_name": "公開前チェック担当",
      "management_id": "BOX-001-ITEM-0007",
      "status": "open",
      "recommended_ai_tier": "低コストAI可",
      "goal": "公開可否確認待ちの商品を、出品前チェックの材料だけに整理する",
      "input_fields": [
        "management_id",
        "product_name",
        "publish_ok",
        "draft_status",
        "image_gate",
        "routing_reason"
      ],
      "write_targets": [
        "zero_cost_merch_branch/state/routing_plan.json",
        "zero_cost_merch_branch/state/qwen_runs/"
      ],
      "must_not_do": [
        "公開可 と断定しない",
        "出品や API 公開を実行しない",
        "顧客対応をしない",
        "100%同一確認済み を勝手に付けない",
        "問い合わせへ直接返答しない"
      ],
      "stop_conditions": [
        "画像同一性が未確認",
        "説明文や価格に誤認リスクがある",
        "カテゴリ審査や規制確認が必要になる"
      ],
      "expected_outputs": [
        "preflight_checklist",
        "risk_flags",
        "hq_review_note"
      ],
      "batch_size": 3,
      "routing_context": {
        "mercari_lane": "出品準備中",
        "mercari_gate": "公開可否確認待ち",
        "image_gate": "実物のみで可",
        "base_condition": "同期準備可",
        "shipco_condition": "送り状共通化候補",
        "review_reason": "公開可否未確定",
        "low_cost_job": "公開前チェック"
      }
    },
    {
      "job_id": "公開前チェック担当-004",
      "task_name": "公開前チェック担当",
      "management_id": "BOX-001-ITEM-0010",
      "status": "open",
      "recommended_ai_tier": "低コストAI可",
      "goal": "公開可否確認待ちの商品を、出品前チェックの材料だけに整理する",
      "input_fields": [
        "management_id",
        "product_name",
        "publish_ok",
        "draft_status",
        "image_gate",
        "routing_reason"
      ],
      "write_targets": [
        "zero_cost_merch_branch/state/routing_plan.json",
        "zero_cost_merch_branch/state/qwen_runs/"
      ],
      "must_not_do": [
        "公開可 と断定しない",
        "出品や API 公開を実行しない",
        "顧客対応をしない",
        "100%同一確認済み を勝手に付けない",
        "問い合わせへ直接返答しない"
      ],
      "stop_conditions": [
        "画像同一性が未確認",
        "説明文や価格に誤認リスクがある",
        "カテゴリ審査や規制確認が必要になる"
      ],
      "expected_outputs": [
        "preflight_checklist",
        "risk_flags",
        "hq_review_note"
      ],
      "batch_size": 3,
      "routing_context": {
        "mercari_lane": "出品準備中",
        "mercari_gate": "公開可否確認待ち",
        "image_gate": "実物のみで可",
        "base_condition": "同期準備可",
        "shipco_condition": "送り状共通化候補",
        "review_reason": "公開可否未確定",
        "low_cost_job": "公開前チェック"
      }
    },
    {
      "job_id": "公開前チェック担当-005",
      "task_name": "公開前チェック担当",
      "management_id": "BOX-001-ITEM-0013",
      "status": "open",
      "recommended_ai_tier": "低コストAI可",
      "goal": "公開可否確認待ちの商品を、出品前チェックの材料だけに整理する",
      "input_fields": [
        "management_id",
        "product_name",
        "publish_ok",
        "draft_status",
        "image_gate",
        "routing_reason"
      ],
      "write_targets": [
        "zero_cost_merch_branch/state/routing_plan.json",
        "zero_cost_merch_branch/state/qwen_runs/"
      ],
      "must_not_do": [
        "公開可 と断定しない",
        "出品や API 公開を実行しない",
        "顧客対応をしない",
        "100%同一確認済み を勝手に付けない",
        "問い合わせへ直接返答しない"
      ],
      "stop_conditions": [
        "画像同一性が未確認",
        "説明文や価格に誤認リスクがある",
        "カテゴリ審査や規制確認が必要になる"
      ],
      "expected_outputs": [
        "preflight_checklist",
        "risk_flags",
        "hq_review_note"
      ],
      "batch_size": 3,
      "routing_context": {
        "mercari_lane": "出品準備中",
        "mercari_gate": "公開可否確認待ち",
        "image_gate": "画像OK",
        "base_condition": "同期準備可",
        "shipco_condition": "送り状共通化候補",
        "review_reason": "公開可否未確定",
        "low_cost_job": "公開前チェック"
      }
    },
    {
      "job_id": "公開前チェック担当-006",
      "task_name": "公開前チェック担当",
      "management_id": "BOX-001-ITEM-0015",
      "status": "open",
      "recommended_ai_tier": "低コストAI可",
      "goal": "公開可否確認待ちの商品を、出品前チェックの材料だけに整理する",
      "input_fields": [
        "management_id",
        "product_name",
        "publish_ok",
        "draft_status",
        "image_gate",
        "routing_reason"
      ],
      "write_targets": [
        "zero_cost_merch_branch/state/routing_plan.json",
        "zero_cost_merch_branch/state/qwen_runs/"
      ],
      "must_not_do": [
        "公開可 と断定しない",
        "出品や API 公開を実行しない",
        "顧客対応をしない",
        "100%同一確認済み を勝手に付けない",
        "問い合わせへ直接返答しない"
      ],
      "stop_conditions": [
        "画像同一性が未確認",
        "説明文や価格に誤認リスクがある",
        "カテゴリ審査や規制確認が必要になる"
      ],
      "expected_outputs": [
        "preflight_checklist",
        "risk_flags",
        "hq_review_note"
      ],
      "batch_size": 3,
      "routing_context": {
        "mercari_lane": "出品準備中",
        "mercari_gate": "公開可否確認待ち",
        "image_gate": "実物のみで可",
        "base_condition": "同期準備可",
        "shipco_condition": "送り状共通化候補",
        "review_reason": "公開可否未確定",
        "low_cost_job": "公開前チェック"
      }
    },
    {
      "job_id": "公開前チェック担当-007",
      "task_name": "公開前チェック担当",
      "management_id": "BOX-001-ITEM-0016",
      "status": "open",
      "recommended_ai_tier": "低コストAI可",
      "goal": "公開可否確認待ちの商品を、出品前チェックの材料だけに整理する",
      "input_fields": [
        "management_id",
        "product_name",
        "publish_ok",
        "draft_status",
        "image_gate",
        "routing_reason"
      ],
      "write_targets": [
        "zero_cost_merch_branch/state/routing_plan.json",
        "zero_cost_merch_branch/state/qwen_runs/"
      ],
      "must_not_do": [
        "公開可 と断定しない",
        "出品や API 公開を実行しない",
        "顧客対応をしない",
        "100%同一確認済み を勝手に付けない",
        "問い合わせへ直接返答しない"
      ],
      "stop_conditions": [
        "画像同一性が未確認",
        "説明文や価格に誤認リスクがある",
        "カテゴリ審査や規制確認が必要になる"
      ],
      "expected_outputs": [
        "preflight_checklist",
        "risk_flags",
        "hq_review_note"
      ],
      "batch_size": 3,
      "routing_context": {
        "mercari_lane": "出品準備中",
        "mercari_gate": "公開可否確認待ち",
        "image_gate": "実物のみで可",
        "base_condition": "同期準備可",
        "shipco_condition": "送り状共通化候補",
        "review_reason": "公開可否未確定",
        "low_cost_job": "公開前チェック"
      }
    },
    {
      "job_id": "公開前チェック担当-008",
      "task_name": "公開前チェック担当",
      "management_id": "BOX-001-ITEM-0017",
      "status": "open",
      "recommended_ai_tier": "低コストAI可",
      "goal": "公開可否確認待ちの商品を、出品前チェックの材料だけに整理する",
      "input_fields": [
        "management_id",
        "product_name",
        "publish_ok",
        "draft_status",
        "image_gate",
        "routing_reason"
      ],
      "write_targets": [
        "zero_cost_merch_branch/state/routing_plan.json",
        "zero_cost_merch_branch/state/qwen_runs/"
      ],
      "must_not_do": [
        "公開可 と断定しない",
        "出品や API 公開を実行しない",
        "顧客対応をしない",
        "100%同一確認済み を勝手に付けない",
        "問い合わせへ直接返答しない"
      ],
      "stop_conditions": [
        "画像同一性が未確認",
        "説明文や価格に誤認リスクがある",
        "カテゴリ審査や規制確認が必要になる"
      ],
      "expected_outputs": [
        "preflight_checklist",
        "risk_flags",
        "hq_review_note"
      ],
      "batch_size": 3,
      "routing_context": {
        "mercari_lane": "出品準備中",
        "mercari_gate": "公開可否確認待ち",
        "image_gate": "実物のみで可",
        "base_condition": "同期準備可",
        "shipco_condition": "送り状共通化候補",
        "review_reason": "公開可否未確定",
        "low_cost_job": "公開前チェック"
      }
    },
    {
      "job_id": "審査監視担当-001",
      "task_name": "審査監視担当",
      "management_id": "BOX-001-ITEM-0001",
      "status": "open",
      "recommended_ai_tier": "低コストAI可",
      "goal": "カテゴリ審査待ち商品の状態と次の確認点を整理する",
      "input_fields": [
        "management_id",
        "product_name",
        "review_state",
        "application_id"
      ],
      "write_targets": [
        "zero_cost_merch_branch/state/mercari_api_status.json",
        "zero_cost_merch_branch/state/routing_plan.json"
      ],
      "must_not_do": [
        "審査通過済み と断定しない",
        "出品や API 公開を実行しない",
        "顧客対応をしない",
        "100%同一確認済み を勝手に付けない",
        "問い合わせへ直接返答しない"
      ],
      "stop_conditions": [
        "カテゴリ審査の current truth が見えない",
        "API 異常と審査待ちの区別がつかない"
      ],
      "expected_outputs": [
        "review_status_note",
        "next_check_timing"
      ],
      "batch_size": 2,
      "routing_context": {
        "mercari_lane": "カテゴリ審査待ち",
        "mercari_gate": "カテゴリ審査待ち",
        "image_gate": "画像OK",
        "base_condition": "同期準備可",
        "shipco_condition": "送り状共通化候補",
        "review_reason": "例外時のみ",
        "low_cost_job": "審査監視"
      }
    },
    {
      "job_id": "最低価格収集担当-001",
      "task_name": "最低価格収集担当",
      "management_id": "BOX-001-ITEM-0001",
      "status": "open",
      "recommended_ai_tier": "低コストAI可",
      "goal": "最低価格と根拠URLと調査時刻を集める",
      "input_fields": [
        "management_id",
        "product_name",
        "exact_match_status",
        "current_min_price"
      ],
      "write_targets": [
        "zero_cost_merch_branch/state/intake/BOX-001_market_price_snapshot.json",
        "zero_cost_merch_branch/state/current_state.json"
      ],
      "must_not_do": [
        "最低価格という語を説明欄へ書かない",
        "相場の断定を顧客返答に使わない",
        "100%同一確認済み を勝手に付けない",
        "問い合わせへ直接返答しない",
        "出品や API 公開を実行しない"
      ],
      "stop_conditions": [
        "候補が複数に割れて exact 商品か分からない",
        "送料込み / 送料別で比較が崩れる"
      ],
      "expected_outputs": [
        "market_floor_price",
        "market_source_url",
        "market_checked_at"
      ],
      "batch_size": 4,
      "routing_context": {
        "mercari_lane": "カテゴリ審査待ち",
        "mercari_gate": "カテゴリ審査待ち",
        "image_gate": "画像OK",
        "base_condition": "同期準備可",
        "shipco_condition": "送り状共通化候補",
        "review_reason": "例外時のみ",
        "low_cost_job": "審査監視"
      }
    },
    {
      "job_id": "最低価格収集担当-002",
      "task_name": "最低価格収集担当",
      "management_id": "BOX-001-ITEM-0004",
      "status": "open",
      "recommended_ai_tier": "低コストAI可",
      "goal": "最低価格と根拠URLと調査時刻を集める",
      "input_fields": [
        "management_id",
        "product_name",
        "exact_match_status",
        "current_min_price"
      ],
      "write_targets": [
        "zero_cost_merch_branch/state/intake/BOX-001_market_price_snapshot.json",
        "zero_cost_merch_branch/state/current_state.json"
      ],
      "must_not_do": [
        "最低価格という語を説明欄へ書かない",
        "相場の断定を顧客返答に使わない",
        "100%同一確認済み を勝手に付けない",
        "問い合わせへ直接返答しない",
        "出品や API 公開を実行しない"
      ],
      "stop_conditions": [
        "候補が複数に割れて exact 商品か分からない",
        "送料込み / 送料別で比較が崩れる"
      ],
      "expected_outputs": [
        "market_floor_price",
        "market_source_url",
        "market_checked_at"
      ],
      "batch_size": 4,
      "routing_context": {
        "mercari_lane": "公開済み",
        "mercari_gate": "公開済み",
        "image_gate": "実物のみで可",
        "base_condition": "同期準備可",
        "shipco_condition": "送り状共通化候補",
        "review_reason": "例外時のみ",
        "low_cost_job": "受注監視"
      }
    },
    {
      "job_id": "最低価格収集担当-003",
      "task_name": "最低価格収集担当",
      "management_id": "BOX-001-ITEM-0005",
      "status": "open",
      "recommended_ai_tier": "低コストAI可",
      "goal": "最低価格と根拠URLと調査時刻を集める",
      "input_fields": [
        "management_id",
        "product_name",
        "exact_match_status",
        "current_min_price"
      ],
      "write_targets": [
        "zero_cost_merch_branch/state/intake/BOX-001_market_price_snapshot.json",
        "zero_cost_merch_branch/state/current_state.json"
      ],
      "must_not_do": [
        "最低価格という語を説明欄へ書かない",
        "相場の断定を顧客返答に使わない",
        "100%同一確認済み を勝手に付けない",
        "問い合わせへ直接返答しない",
        "出品や API 公開を実行しない"
      ],
      "stop_conditions": [
        "候補が複数に割れて exact 商品か分からない",
        "送料込み / 送料別で比較が崩れる"
      ],
      "expected_outputs": [
        "market_floor_price",
        "market_source_url",
        "market_checked_at"
      ],
      "batch_size": 4,
      "routing_context": {
        "mercari_lane": "公開済み",
        "mercari_gate": "公開済み",
        "image_gate": "実物のみで可",
        "base_condition": "同期準備可",
        "shipco_condition": "送り状共通化候補",
        "review_reason": "例外時のみ",
        "low_cost_job": "受注監視"
      }
    },
    {
      "job_id": "最低価格収集担当-004",
      "task_name": "最低価格収集担当",
      "management_id": "BOX-001-ITEM-0013",
      "status": "open",
      "recommended_ai_tier": "低コストAI可",
      "goal": "最低価格と根拠URLと調査時刻を集める",
      "input_fields": [
        "management_id",
        "product_name",
        "exact_match_status",
        "current_min_price"
      ],
      "write_targets": [
        "zero_cost_merch_branch/state/intake/BOX-001_market_price_snapshot.json",
        "zero_cost_merch_branch/state/current_state.json"
      ],
      "must_not_do": [
        "最低価格という語を説明欄へ書かない",
        "相場の断定を顧客返答に使わない",
        "100%同一確認済み を勝手に付けない",
        "問い合わせへ直接返答しない",
        "出品や API 公開を実行しない"
      ],
      "stop_conditions": [
        "候補が複数に割れて exact 商品か分からない",
        "送料込み / 送料別で比較が崩れる"
      ],
      "expected_outputs": [
        "market_floor_price",
        "market_source_url",
        "market_checked_at"
      ],
      "batch_size": 4,
      "routing_context": {
        "mercari_lane": "出品準備中",
        "mercari_gate": "公開可否確認待ち",
        "image_gate": "画像OK",
        "base_condition": "同期準備可",
        "shipco_condition": "送り状共通化候補",
        "review_reason": "公開可否未確定",
        "low_cost_job": "公開前チェック"
      }
    },
    {
      "job_id": "最低価格収集担当-005",
      "task_name": "最低価格収集担当",
      "management_id": "BOX-001-ITEM-0027",
      "status": "open",
      "recommended_ai_tier": "低コストAI可",
      "goal": "最低価格と根拠URLと調査時刻を集める",
      "input_fields": [
        "management_id",
        "product_name",
        "exact_match_status",
        "current_min_price"
      ],
      "write_targets": [
        "zero_cost_merch_branch/state/intake/BOX-001_market_price_snapshot.json",
        "zero_cost_merch_branch/state/current_state.json"
      ],
      "must_not_do": [
        "最低価格という語を説明欄へ書かない",
        "相場の断定を顧客返答に使わない",
        "100%同一確認済み を勝手に付けない",
        "問い合わせへ直接返答しない",
        "出品や API 公開を実行しない"
      ],
      "stop_conditions": [
        "候補が複数に割れて exact 商品か分からない",
        "送料込み / 送料別で比較が崩れる"
      ],
      "expected_outputs": [
        "market_floor_price",
        "market_source_url",
        "market_checked_at"
      ],
      "batch_size": 4,
      "routing_context": {
        "mercari_lane": "出品準備中",
        "mercari_gate": "公開可否確認待ち",
        "image_gate": "実物のみで可",
        "base_condition": "同期準備可",
        "shipco_condition": "送り状共通化候補",
        "review_reason": "公開可否未確定",
        "low_cost_job": "公開前チェック"
      }
    },
    {
      "job_id": "最低価格収集担当-006",
      "task_name": "最低価格収集担当",
      "management_id": "BOX-001-ITEM-0008",
      "status": "open",
      "recommended_ai_tier": "低コストAI可",
      "goal": "最低価格と根拠URLと調査時刻を集める",
      "input_fields": [
        "management_id",
        "product_name",
        "exact_match_status",
        "current_min_price"
      ],
      "write_targets": [
        "zero_cost_merch_branch/state/intake/BOX-001_market_price_snapshot.json",
        "zero_cost_merch_branch/state/current_state.json"
      ],
      "must_not_do": [
        "最低価格という語を説明欄へ書かない",
        "相場の断定を顧客返答に使わない",
        "100%同一確認済み を勝手に付けない",
        "問い合わせへ直接返答しない",
        "出品や API 公開を実行しない"
      ],
      "stop_conditions": [
        "候補が複数に割れて exact 商品か分からない",
        "送料込み / 送料別で比較が崩れる"
      ],
      "expected_outputs": [
        "market_floor_price",
        "market_source_url",
        "market_checked_at"
      ],
      "batch_size": 4,
      "routing_context": {
        "mercari_lane": "公開済み",
        "mercari_gate": "公開済み",
        "image_gate": "実物のみで可",
        "base_condition": "同期準備可",
        "shipco_condition": "送り状共通化候補",
        "review_reason": "例外時のみ",
        "low_cost_job": "受注監視"
      }
    },
    {
      "job_id": "resident整合担当-001",
      "task_name": "resident整合担当",
      "management_id": "BOX-001-ITEM-0004",
      "status": "open",
      "recommended_ai_tier": "低コストAI可",
      "goal": "resident と state の件数とリンクを再生成し、ズレを減らす",
      "input_fields": [
        "operator_status.json",
        "current_state.json",
        "role_packets.json",
        "公開済み listing 状態"
      ],
      "write_targets": [
        "zero_cost_merch_branch/state/current_state.json",
        "zero_cost_merch_branch/state/operator_status.json",
        "zero_cost_merch_branch/state/role_packets.json",
        "resident snapshot js/html"
      ],
      "must_not_do": [
        "customer reply を送らない",
        "exact-match 判定を勝手に変えない",
        "API公開成功扱いを捏造しない",
        "100%同一確認済み を勝手に付けない",
        "問い合わせへ直接返答しない",
        "出品や API 公開を実行しない"
      ],
      "stop_conditions": [
        "resident と台帳の数字が食い違う",
        "公開URLや listing_id が消える",
        "問い合わせ対象が特定できない"
      ],
      "expected_outputs": [
        "render 実行結果",
        "ズレが残る項目",
        "更新した snapshot 一覧"
      ],
      "batch_size": 6,
      "routing_context": {
        "mercari_lane": "公開済み",
        "mercari_gate": "公開済み",
        "image_gate": "実物のみで可",
        "base_condition": "同期準備可",
        "shipco_condition": "送り状共通化候補",
        "review_reason": "例外時のみ",
        "low_cost_job": "受注監視"
      }
    },
    {
      "job_id": "resident整合担当-002",
      "task_name": "resident整合担当",
      "management_id": "BOX-001-ITEM-0005",
      "status": "open",
      "recommended_ai_tier": "低コストAI可",
      "goal": "resident と state の件数とリンクを再生成し、ズレを減らす",
      "input_fields": [
        "operator_status.json",
        "current_state.json",
        "role_packets.json",
        "公開済み listing 状態"
      ],
      "write_targets": [
        "zero_cost_merch_branch/state/current_state.json",
        "zero_cost_merch_branch/state/operator_status.json",
        "zero_cost_merch_branch/state/role_packets.json",
        "resident snapshot js/html"
      ],
      "must_not_do": [
        "customer reply を送らない",
        "exact-match 判定を勝手に変えない",
        "API公開成功扱いを捏造しない",
        "100%同一確認済み を勝手に付けない",
        "問い合わせへ直接返答しない",
        "出品や API 公開を実行しない"
      ],
      "stop_conditions": [
        "resident と台帳の数字が食い違う",
        "公開URLや listing_id が消える",
        "問い合わせ対象が特定できない"
      ],
      "expected_outputs": [
        "render 実行結果",
        "ズレが残る項目",
        "更新した snapshot 一覧"
      ],
      "batch_size": 6,
      "routing_context": {
        "mercari_lane": "公開済み",
        "mercari_gate": "公開済み",
        "image_gate": "実物のみで可",
        "base_condition": "同期準備可",
        "shipco_condition": "送り状共通化候補",
        "review_reason": "例外時のみ",
        "low_cost_job": "受注監視"
      }
    },
    {
      "job_id": "resident整合担当-003",
      "task_name": "resident整合担当",
      "management_id": "BOX-001-ITEM-0008",
      "status": "open",
      "recommended_ai_tier": "低コストAI可",
      "goal": "resident と state の件数とリンクを再生成し、ズレを減らす",
      "input_fields": [
        "operator_status.json",
        "current_state.json",
        "role_packets.json",
        "公開済み listing 状態"
      ],
      "write_targets": [
        "zero_cost_merch_branch/state/current_state.json",
        "zero_cost_merch_branch/state/operator_status.json",
        "zero_cost_merch_branch/state/role_packets.json",
        "resident snapshot js/html"
      ],
      "must_not_do": [
        "customer reply を送らない",
        "exact-match 判定を勝手に変えない",
        "API公開成功扱いを捏造しない",
        "100%同一確認済み を勝手に付けない",
        "問い合わせへ直接返答しない",
        "出品や API 公開を実行しない"
      ],
      "stop_conditions": [
        "resident と台帳の数字が食い違う",
        "公開URLや listing_id が消える",
        "問い合わせ対象が特定できない"
      ],
      "expected_outputs": [
        "render 実行結果",
        "ズレが残る項目",
        "更新した snapshot 一覧"
      ],
      "batch_size": 6,
      "routing_context": {
        "mercari_lane": "公開済み",
        "mercari_gate": "公開済み",
        "image_gate": "実物のみで可",
        "base_condition": "同期準備可",
        "shipco_condition": "送り状共通化候補",
        "review_reason": "例外時のみ",
        "low_cost_job": "受注監視"
      }
    },
    {
      "job_id": "resident整合担当-004",
      "task_name": "resident整合担当",
      "management_id": "BOX-001-ITEM-0009",
      "status": "open",
      "recommended_ai_tier": "低コストAI可",
      "goal": "resident と state の件数とリンクを再生成し、ズレを減らす",
      "input_fields": [
        "operator_status.json",
        "current_state.json",
        "role_packets.json",
        "公開済み listing 状態"
      ],
      "write_targets": [
        "zero_cost_merch_branch/state/current_state.json",
        "zero_cost_merch_branch/state/operator_status.json",
        "zero_cost_merch_branch/state/role_packets.json",
        "resident snapshot js/html"
      ],
      "must_not_do": [
        "customer reply を送らない",
        "exact-match 判定を勝手に変えない",
        "API公開成功扱いを捏造しない",
        "100%同一確認済み を勝手に付けない",
        "問い合わせへ直接返答しない",
        "出品や API 公開を実行しない"
      ],
      "stop_conditions": [
        "resident と台帳の数字が食い違う",
        "公開URLや listing_id が消える",
        "問い合わせ対象が特定できない"
      ],
      "expected_outputs": [
        "render 実行結果",
        "ズレが残る項目",
        "更新した snapshot 一覧"
      ],
      "batch_size": 6,
      "routing_context": {
        "mercari_lane": "公開済み",
        "mercari_gate": "公開済み",
        "image_gate": "実物のみで可",
        "base_condition": "同期準備可",
        "shipco_condition": "送り状共通化候補",
        "review_reason": "例外時のみ",
        "low_cost_job": "受注監視"
      }
    },
    {
      "job_id": "resident整合担当-005",
      "task_name": "resident整合担当",
      "management_id": "BOX-001-ITEM-0011",
      "status": "open",
      "recommended_ai_tier": "低コストAI可",
      "goal": "resident と state の件数とリンクを再生成し、ズレを減らす",
      "input_fields": [
        "operator_status.json",
        "current_state.json",
        "role_packets.json",
        "公開済み listing 状態"
      ],
      "write_targets": [
        "zero_cost_merch_branch/state/current_state.json",
        "zero_cost_merch_branch/state/operator_status.json",
        "zero_cost_merch_branch/state/role_packets.json",
        "resident snapshot js/html"
      ],
      "must_not_do": [
        "customer reply を送らない",
        "exact-match 判定を勝手に変えない",
        "API公開成功扱いを捏造しない",
        "100%同一確認済み を勝手に付けない",
        "問い合わせへ直接返答しない",
        "出品や API 公開を実行しない"
      ],
      "stop_conditions": [
        "resident と台帳の数字が食い違う",
        "公開URLや listing_id が消える",
        "問い合わせ対象が特定できない"
      ],
      "expected_outputs": [
        "render 実行結果",
        "ズレが残る項目",
        "更新した snapshot 一覧"
      ],
      "batch_size": 6,
      "routing_context": {
        "mercari_lane": "公開済み",
        "mercari_gate": "公開済み",
        "image_gate": "実物のみで可",
        "base_condition": "同期準備可",
        "shipco_condition": "送り状共通化候補",
        "review_reason": "例外時のみ",
        "low_cost_job": "受注監視"
      }
    },
    {
      "job_id": "resident整合担当-006",
      "task_name": "resident整合担当",
      "management_id": "BOX-001-ITEM-0012",
      "status": "open",
      "recommended_ai_tier": "低コストAI可",
      "goal": "resident と state の件数とリンクを再生成し、ズレを減らす",
      "input_fields": [
        "operator_status.json",
        "current_state.json",
        "role_packets.json",
        "公開済み listing 状態"
      ],
      "write_targets": [
        "zero_cost_merch_branch/state/current_state.json",
        "zero_cost_merch_branch/state/operator_status.json",
        "zero_cost_merch_branch/state/role_packets.json",
        "resident snapshot js/html"
      ],
      "must_not_do": [
        "customer reply を送らない",
        "exact-match 判定を勝手に変えない",
        "API公開成功扱いを捏造しない",
        "100%同一確認済み を勝手に付けない",
        "問い合わせへ直接返答しない",
        "出品や API 公開を実行しない"
      ],
      "stop_conditions": [
        "resident と台帳の数字が食い違う",
        "公開URLや listing_id が消える",
        "問い合わせ対象が特定できない"
      ],
      "expected_outputs": [
        "render 実行結果",
        "ズレが残る項目",
        "更新した snapshot 一覧"
      ],
      "batch_size": 6,
      "routing_context": {
        "mercari_lane": "公開済み",
        "mercari_gate": "公開済み",
        "image_gate": "実物のみで可",
        "base_condition": "同期準備可",
        "shipco_condition": "送り状共通化候補",
        "review_reason": "例外時のみ",
        "low_cost_job": "受注監視"
      }
    }
  ]
};
