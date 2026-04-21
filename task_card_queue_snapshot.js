window.ZERO_COST_TASK_CARD_QUEUE = {
  "generated_at": "2026-04-21 17:26:11 JST",
  "business_name": "0円仕入れ物販事業",
  "counts": {
    "open_jobs": 21,
    "task_cards": 8
  },
  "jobs": [
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
