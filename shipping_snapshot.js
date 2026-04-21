window.ZERO_COST_SHIPPING_BOARD = {
  "generated_at": "2026-04-21 10:39:51 JST",
  "workbook_url": "https://docs.google.com/spreadsheets/d/1VjdUJavoijOkdjKtkdKy_zUcdkQqZwG0oRty57H5_lk/edit",
  "resident_url": "./shipping.html",
  "git_url": "https://github.com/daideguchi/zero-cost-merch-branch",
  "main_lane": {
    "label": "メルカリShops注文",
    "value": "メルカリBiz配送 + 送り状印刷 + ヤマト集荷",
    "note": "DD方針で印刷可 / Biz配送 ready / DDは確認だけ"
  },
  "base_lane": {
    "label": "BASE注文",
    "value": "BASE標準 かんたん発送",
    "note": "BASE注文画面から進める。初注文で live 通しを閉じる"
  },
  "backup_lane": {
    "label": "予備線",
    "value": "らくらくメルカリ便 + ヤマト集荷 + 送り状番号提示",
    "note": "Bizで詰まる時だけ使う。さらに詰まるものは 配送方法未定 + ヤマトWeb集荷（送り状持参または印字送り状） へ逃がす"
  },
  "shared_logistics_lane": {
    "label": "多販路共通配送",
    "value": "Ship&co",
    "note": "2段目の多販路共通化。carrier がそろうまで実注文の本線にしない。"
  },
  "metrics": {
    "orders_total": 0,
    "orders_open": 0,
    "packing_waiting": 0,
    "packed_waiting_pickup": 0,
    "pickup_waiting": 0,
    "batch_open": 0,
    "shipped_total": 0,
    "shipping_candidates": 0
  },
  "strategy": {
    "priority": "売れた後の発送の楽さ優先",
    "sales_channel": "メルカリShops",
    "ec_platform": "BASE",
    "future_upgrade": "Shopify"
  },
  "guide_docs": {
    "quickstart": "/Users/dd/merch_deal_finder/zero_cost_merch_branch/docs/27_集荷を3分で理解する.md",
    "checklist": "/Users/dd/merch_deal_finder/zero_cost_merch_branch/docs/28_実注文が来た時の集荷チェックリスト.md",
    "detail": "/Users/dd/merch_deal_finder/zero_cost_merch_branch/docs/21_発送レール詳細手順.md",
    "rehearsal": "/Users/dd/merch_deal_finder/zero_cost_merch_branch/docs/33_注文前の集荷リハーサル.md"
  },
  "pickup_basics": [
    {
      "term": "集荷",
      "meaning": "ヤマトが荷物を取りに来ることです。コンビニ持ち込みではありません。"
    },
    {
      "term": "送り状番号",
      "meaning": "ドライバーへ見せる番号です。紙へ手書きせず、スマホ画面で提示します。"
    },
    {
      "term": "発送候補",
      "meaning": "売れた直後の準備段階です。まだ荷物は渡しません。"
    },
    {
      "term": "集荷待ち",
      "meaning": "梱包が終わり、番号と日時がそろい、渡せる直前の状態です。"
    }
  ],
  "dd_quickstart": [
    "shipping.html を開く",
    "販路がメルカリShopsかBASEかを見る",
    "メルカリShopsなら メルカリBiz配送 + 送り状印刷 + ヤマト集荷 で進める",
    "必要なら 印刷 / エクスポート から JSON / CSV / 印刷ビュー を出す",
    "Bizで詰まる注文は らくらくメルカリ便 + ヤマト集荷 + 送り状番号提示 へ逃がす",
    "さらに詰まるものだけ 配送方法未定 + ヤマトWeb集荷（送り状持参または印字送り状） へ逃がす",
    "BASEなら BASE標準 かんたん発送 で進める",
    "未完受注の対象商品名が合っているか確認する",
    "商品を梱包する",
    "集荷待ちで 送り状番号 / 引渡予定日 / 時間帯 が出ていることを確認する",
    "送り状または発送番号の準備ができていることを確認し、ヤマトへ荷物を渡す",
    "発送通知と resident 更新は AI が閉じる"
  ],
  "dd_stop_rules": [
    "shipping.html に 要修正 が出ている",
    "送り状番号がまだ出ていない",
    "商品が違う、または現物が見つからない",
    "引渡予定日か時間帯が空のまま"
  ],
  "dd_donts": [
    "住所や宛名を手書きしない",
    "毎回ゼロから配送方法を選び直さない",
    "メルカリBiz配送は準備完了。メルカリShops本線として使う（status=ready_for_live_use）",
    "YBM返信や Ship&co carrier を待って初回発送を止めない",
    "本線が詰まるまで未定+ヤマトWeb集荷へ逃がさない",
    "監視と one-shot を同時に走らせない"
  ],
  "status_summary": {
    "badge": "待機中",
    "headline": "注文はまだありません。発送・集荷は shipping.html で固定済みです。",
    "detail": "メルカリShopsは メルカリBiz配送 + 送り状印刷 + ヤマト集荷、BASEは BASE標準 かんたん発送。残りは実注文 1件の通し確認です。"
  },
  "daily_actions": {
    "dd": [
      "shipping.html を見て、注文なし / 止まりなし を短く確認する",
      "梱包指示はまだ不要。注文が来るまで現物作業は発生しない",
      "集荷待ちはまだ 0件。送り状番号の確認作業はまだ不要"
    ],
    "ai": [
      "受注監視を継続する",
      "capture 反映の待ち案件はありません",
      "monitor と one-shot を同時実行しない"
    ],
    "packer": [
      "梱包待ちはまだありません",
      "注文が来るまでは現物整理だけでよい"
    ]
  },
  "last_monitor": {
    "checked_at": "2026-04-21 10:36:10 JST",
    "orders_count": 0,
    "new_orders_count": 0,
    "apply_capture_enabled": true,
    "next_action": "No new orders detected."
  },
  "readiness": [
    {
      "id": "main_lane_fixed",
      "label": "本線固定",
      "progress": 10,
      "summary": "メルカリBiz配送 + 送り状印刷 + ヤマト集荷"
    },
    {
      "id": "base_lane_fixed",
      "label": "BASE注文固定",
      "progress": 9,
      "summary": "BASE標準 かんたん発送"
    },
    {
      "id": "backup_lane_fixed",
      "label": "予備線固定",
      "progress": 9,
      "summary": "らくらくメルカリ便 + ヤマト集荷 + 送り状番号提示"
    },
    {
      "id": "sheet_tabs_ready",
      "label": "発送系タブ準備",
      "progress": 10,
      "summary": "09/07/08/10/11 タブを発送レールで使える"
    },
    {
      "id": "sync_script_ready",
      "label": "受注同期スクリプト",
      "progress": 8,
      "summary": "09_受注一覧 から 07/08/11 へ流す器はある"
    },
    {
      "id": "shipping_board_ready",
      "label": "発送レール運転盤",
      "progress": 10,
      "summary": "resident UI / JSON / Markdown で現在地を見える化"
    },
    {
      "id": "print_packet_ready",
      "label": "印刷パケット出力",
      "progress": 9,
      "summary": "shipping.html から JSON / CSV / 印刷ビュー を出せる"
    },
    {
      "id": "shipping_sync_health",
      "label": "同期ヘルス",
      "progress": 10,
      "summary": "同期OK / Sheets fetch と shipping render は通りました。"
    },
    {
      "id": "shipping_validation",
      "label": "状態遷移検査",
      "progress": 10,
      "summary": "error=0 / warning=0 / 引渡準備完了=0"
    },
    {
      "id": "screen_capture_contract_ready",
      "label": "画面回収契約",
      "progress": 10,
      "summary": "送り状番号 / 受付番号 / QR / 時刻 の取得先と戻し先を固定"
    },
    {
      "id": "shipping_api_auth",
      "label": "発送API / 認証",
      "progress": 6,
      "summary": "本線固定 / 未解決 2件"
    },
    {
      "id": "live_order_proven",
      "label": "live実運用実証",
      "progress": 3,
      "summary": "実注文を1件通して閉じると完了"
    }
  ],
  "roles": {
    "ai": [
      "受注一覧を整える",
      "発送候補を作る",
      "集荷待ちへ流す",
      "集荷バッチを作る",
      "出荷実績へ閉じる"
    ],
    "dd": [
      "全体確認をする",
      "例外だけ判断する",
      "最終承認が必要な時だけ入る"
    ],
    "packer": [
      "商品を取る",
      "梱包する",
      "梱包済みを確認する",
      "荷物を渡す"
    ]
  },
  "queue_preview": {
    "orders_open": [],
    "pickup_waiting": [],
    "batch_open": [],
    "shipped_recent": []
  },
  "next_actions": [
    "集荷と発送は shipping.html で固定。メルカリShopsは メルカリBiz配送 + 送り状印刷 + ヤマト集荷、BASEは BASE標準 かんたん発送 で進める",
    "メルカリBiz配送は準備完了。メルカリShops本線として使い、Bizで詰まる注文は らくらくメルカリ便 + ヤマト集荷 + 送り状番号提示、さらに詰まるものだけ 配送方法未定 + ヤマトWeb集荷（送り状持参または印字送り状） へ逃がす",
    "待たないもの: YBM For Developers 返信 / Ship&co 国内 carrier 設定 / Ship&co API の live orders 疎通。これは今すぐの発送開始条件に入れない",
    "live受注はまだ 0件。最初の1件で 09_受注一覧 -> 07_発送候補 -> 08_集荷待ち -> 11_集荷バッチ -> 10_出荷実績 を通す",
    "受注発生時に AI が集荷バッチを束ねる前提は整っている。梱包担当は梱包に集中すればよい",
    "本線が詰まった時だけ、らくらくメルカリ便 + ヤマト集荷 + 送り状番号提示 へ逃がす",
    "予備線でも詰まる時だけ、配送方法未定 + ヤマトWeb集荷（送り状持参または印字送り状） へ逃がす",
    "shipping.html の 印刷 / エクスポート から JSON / CSV / 印刷ビュー を出せる状態を維持する",
    "多販路共通配送は Ship&co を候補に維持する。メルカリ本線は切り離して考える",
    "API整備: Ship&co carrier / 日本郵便 / ヤマトB2 / 佐川の必要情報をそろえて Ship&co へ登録する。",
    "API整備: ヤマト開発API / 返信確認の正規 route は Chrome Profile 12 です。/Users/dd/000_AI組織/ops/ヤマトAPI返信を確認する.command を再実行すれば、degutidai@gmail.com で 365日以内の4 query を再確認できます。現時点では relevant reply は見えていないため、Mercari Shops post-sale pickup rail を継続します。"
  ],
  "current_milestone": "m4_order_and_pickup_rail",
  "next_phase": "売れた後の発送と集荷レール",
  "operator_console": {
    "summary": {
      "badge": "待機中",
      "headline": "注文はまだありません。発送・集荷は shipping.html で固定済みです。",
      "detail": "メルカリShopsは メルカリBiz配送 + 送り状印刷 + ヤマト集荷、BASEは BASE標準 かんたん発送。残りは実注文 1件の通し確認です。",
      "next_operator_step": "shipping.html を見て、注文なし / 止まりなし を短く確認する"
    },
    "stats": [
      {
        "label": "未完受注",
        "value": 0,
        "note": "まだ閉じていない注文"
      },
      {
        "label": "引渡し可",
        "value": 0,
        "note": "いま渡せる荷物"
      },
      {
        "label": "後段",
        "value": 2,
        "note": "本線では待たない"
      },
      {
        "label": "印刷",
        "value": "sampleのみ",
        "note": "JSON / CSV / 印刷ビュー"
      }
    ],
    "routes": [
      {
        "label": "メルカリShops本線",
        "value": "メルカリBiz配送 + 送り状印刷 + ヤマト集荷",
        "note": "通常はここで進める"
      },
      {
        "label": "BASE本線",
        "value": "BASE標準 かんたん発送",
        "note": "BASE注文はこの線"
      },
      {
        "label": "予備線",
        "value": "らくらくメルカリ便 + ヤマト集荷 + 送り状番号提示",
        "note": "Bizで詰まる時だけ"
      },
      {
        "label": "第2予備線",
        "value": "配送方法未定 + ヤマトWeb集荷（送り状持参または印字送り状）",
        "note": "予備線でも詰まる時だけ"
      }
    ],
    "work_cards": [],
    "stop_rules": [
      "shipping.html に 要修正 が出ている",
      "送り状番号がまだ出ていない",
      "商品が違う、または現物が見つからない",
      "引渡予定日か時間帯が空のまま"
    ],
    "exceptions": [
      {
        "severity": "orange",
        "label": "Ship&co carrier",
        "detail": "本線では待たない: 2026-04-18 rerun でも orders 画面では shop filter に BASE店舗が見え、warehouse は Fukuoka-shi が見える一方、利用可能な運送会社は 0件。carriers 画面には DHL / FedEx / UPS / 日本郵便国内 / ヤマト運輸 B2 / 佐川急便 などが並ぶが、接続済み domestic carrier は増えていない。`degutidai@gmail.com` と `deguchi.11107@gmail.com` の両 inbox で Ship&co / 顧客コード / 運賃管理番号 / 承認コード / APIアクセスキー / B2クラウド などを actual 検索しても該当メールは見つからなかった。live pickup を閉じるには 日本郵便国内=承認コード / ヤマト運輸 B2=APIアクセスキー+運賃管理番号 / 佐川急便=顧客コード11桁 が引き続き不足"
      },
      {
        "severity": "yellow",
        "label": "ヤマト開発API",
        "detail": "本線では待たない: 問い合わせ送信済みですが、返信確認はまだ閉じていません。"
      }
    ],
    "print_center": {
      "badge": "sampleのみ",
      "headline": "shipping.html からプリンタ用パケットを出せます。",
      "detail": "live注文はまだ 0件です。直近の capture sample を使って JSON / CSV / 印刷ビューの動線を先に確認できます。",
      "mode": "sample",
      "download_ready": true,
      "coverage": [
        {
          "label": "見せるコード",
          "value": "1/1",
          "note": "引渡し時に見せる番号やQR"
        },
        {
          "label": "集荷日時",
          "value": "1/1",
          "note": "引渡予定日と時間帯"
        },
        {
          "label": "宛先",
          "value": "1/1",
          "note": "氏名・住所・電話番号"
        },
        {
          "label": "ラベル",
          "value": "1/1",
          "note": "URL または PDF の取得状況"
        }
      ],
      "missing_upstream": []
    },
    "supporting_panels": [
      {
        "label": "同期ヘルス",
        "items": [
          "同期OK / 2026-04-21 10:39:51 JST",
          "last-good: 2026-04-21 10:39:51 JST",
          "post-sale: ok / 2026-04-20T10:09:55.493496Z",
          "next: live注文が来たら 09 -> 07 -> 08 -> 11 -> 10 の順で閉じる"
        ]
      },
      {
        "label": "入口",
        "items": [
          "resident: ./shipping.html",
          "台帳: https://docs.google.com/spreadsheets/d/1VjdUJavoijOkdjKtkdKy_zUcdkQqZwG0oRty57H5_lk/edit"
        ]
      },
      {
        "label": "読む場所",
        "items": [
          "3分ガイド: /Users/dd/merch_deal_finder/zero_cost_merch_branch/docs/27_集荷を3分で理解する.md",
          "実注文チェック: /Users/dd/merch_deal_finder/zero_cost_merch_branch/docs/28_実注文が来た時の集荷チェックリスト.md",
          "詳細手順: /Users/dd/merch_deal_finder/zero_cost_merch_branch/docs/21_発送レール詳細手順.md"
        ]
      }
    ]
  },
  "backend_contract": {
    "version": "shipping-backend-v4",
    "entrypoints": {
      "resident": "./shipping.html",
      "workbook": "https://docs.google.com/spreadsheets/d/1VjdUJavoijOkdjKtkdKy_zUcdkQqZwG0oRty57H5_lk/edit",
      "quickstart_doc": "/Users/dd/merch_deal_finder/zero_cost_merch_branch/docs/27_集荷を3分で理解する.md",
      "detail_doc": "/Users/dd/merch_deal_finder/zero_cost_merch_branch/docs/21_発送レール詳細手順.md"
    },
    "source_tabs": [
      {
        "tab": "09_受注一覧",
        "role": "受注入口",
        "required_fields": [
          "注文ID",
          "商品ID",
          "商品名",
          "受注状態"
        ]
      },
      {
        "tab": "07_発送候補",
        "role": "出荷単位",
        "required_fields": [
          "出荷ID",
          "注文ID",
          "商品ID",
          "配送方法",
          "集荷モード",
          "梱包状態"
        ]
      },
      {
        "tab": "08_集荷待ち",
        "role": "引渡し直前",
        "required_fields": [
          "出荷ID",
          "注文ID",
          "商品ID",
          "送り状番号",
          "受付番号",
          "引渡予定日",
          "時間帯",
          "提示方法",
          "引渡状態",
          "集荷バッチID"
        ]
      },
      {
        "tab": "11_集荷バッチ",
        "role": "集荷単位",
        "required_fields": [
          "集荷バッチID",
          "対象件数",
          "集荷予定日",
          "時間帯",
          "送り状番号一覧",
          "対象注文ID一覧"
        ]
      }
    ],
    "operator_console_contract": {
      "summary_fields": [
        "badge",
        "headline",
        "detail",
        "next_operator_step"
      ],
      "card_fields": [
        "kind",
        "priority",
        "stage",
        "title",
        "id_label",
        "shipment_id",
        "order_id",
        "product_id",
        "route",
        "action",
        "code_to_show",
        "pickup_slot",
        "note",
        "missing_fields"
      ]
    },
    "capture_overlay_contract": {
      "store": "state/latest_shipping_capture.json",
      "match_keys": [
        "shipment_id",
        "order_id",
        "pickup_batch_id"
      ],
      "packet_fields": [
        "label_status",
        "label_download_url",
        "label_pdf_url",
        "label_format",
        "recipient_name",
        "recipient_zip",
        "recipient_address1",
        "recipient_address2",
        "recipient_phone",
        "service_name",
        "print_note"
      ],
      "policy": "workbook 列が未整備でも、直近 capture の値で shipping packet を補完する"
    },
    "print_export_contract": {
      "mode": "sample",
      "packet_fields": [
        "source_type",
        "status",
        "shipment_id",
        "order_id",
        "product_id",
        "product_name",
        "lane",
        "delivery_class",
        "packing_status",
        "pickup_request",
        "pickup_batch_id",
        "tracking_number",
        "reception_number",
        "reception_qr",
        "pickup_date",
        "pickup_window",
        "display_method",
        "printable_code",
        "capture_status",
        "captured_at",
        "handoff_status",
        "label_status",
        "label_download_url",
        "label_pdf_url",
        "label_format",
        "service_name",
        "print_note",
        "recipient_name",
        "recipient_zip",
        "recipient_address1",
        "recipient_address2",
        "recipient_address",
        "recipient_phone",
        "sender_shop_name",
        "sender_name",
        "sender_zip",
        "sender_address",
        "sender_phone",
        "note",
        "missing_fields",
        "coverage",
        "print_readiness"
      ],
      "shipment_fields": [
        "source_type",
        "状態",
        "出荷ID",
        "注文ID",
        "商品ID",
        "商品名",
        "レール",
        "配送区分",
        "梱包状態",
        "集荷依頼",
        "集荷バッチID",
        "送り状番号",
        "受付番号",
        "受付QR",
        "引渡予定日",
        "時間帯",
        "提示方法",
        "プリンタ用コード",
        "印刷可否",
        "ラベル状態",
        "ラベルURL",
        "ラベルPDF",
        "配送サービス",
        "宛先氏名",
        "宛先郵便番号",
        "宛先住所",
        "宛先電話番号",
        "発送元",
        "画面取得状態",
        "取得時刻",
        "引渡状態",
        "不足項目",
        "メモ"
      ],
      "batch_fields": [],
      "coverage_fields": [
        "handoff_code",
        "pickup_slot",
        "recipient",
        "label_asset"
      ],
      "missing_upstream": [],
      "note": "shipping.html が出すのは carrier 正式ラベルそのものではなく、印刷・持参・引渡し用の整理済みパケットです。"
    },
    "sync_health_contract": {
      "store": "state/shipping_sync_health.json",
      "post_sale_sync_store": "state/latest_post_sale_sync.json",
      "summary_fields": [
        "checked_at",
        "badge",
        "headline",
        "detail",
        "next_action",
        "fallback_in_use",
        "last_success_generated_at"
      ],
      "fetch_fields": [
        "label",
        "status",
        "attempts",
        "rows",
        "elapsed_ms",
        "error"
      ],
      "policy": "Sheets fetch が失敗した時は前回成功 snapshot を保持し、原因は sync health へ出す"
    }
  },
  "micro_steps": [
    {
      "id": "S01_order_imported",
      "label": "受注取込",
      "entry_condition": "09_受注一覧 に 注文ID がある",
      "ai_action": "受注行を検証し、注文ID / 商品ID / 配送区分 を確定する",
      "human_action": "なし",
      "write_targets": [
        "09_受注一覧"
      ],
      "required_fields": [
        "注文ID",
        "商品ID",
        "商品名",
        "受注状態"
      ],
      "stop_conditions": [
        "注文ID欠落",
        "商品ID欠落",
        "キャンセル注文"
      ]
    },
    {
      "id": "S02_shipping_candidate_created",
      "label": "発送候補生成",
      "entry_condition": "受注取込済み かつ 出荷済みでない",
      "ai_action": "07_発送候補 へ SHIP-注文ID を主キーに1行追加する",
      "human_action": "なし",
      "write_targets": [
        "07_発送候補"
      ],
      "required_fields": [
        "出荷ID",
        "注文ID",
        "商品ID",
        "配送方法",
        "集荷モード",
        "梱包状態"
      ],
      "stop_conditions": [
        "同じ出荷IDが既に存在",
        "配送区分未確定"
      ]
    },
    {
      "id": "S03_packing_waiting",
      "label": "梱包待ち",
      "entry_condition": "発送候補がある かつ 梱包状態が未完",
      "ai_action": "梱包担当が見るべき対象として resident に出す",
      "human_action": "商品を取り、梱包する",
      "write_targets": [
        "09_受注一覧",
        "07_発送候補"
      ],
      "required_fields": [
        "注文ID",
        "商品ID",
        "梱包状態"
      ],
      "stop_conditions": [
        "現物不一致",
        "梱包材不足",
        "現物不明"
      ]
    },
    {
      "id": "S04_packed",
      "label": "梱包済み",
      "entry_condition": "梱包担当が梱包を完了した",
      "ai_action": "08_集荷待ち に流し、集荷依頼前状態へ置く",
      "human_action": "梱包済み確認だけ行う",
      "write_targets": [
        "09_受注一覧",
        "07_発送候補",
        "08_集荷待ち"
      ],
      "required_fields": [
        "出荷ID",
        "注文ID",
        "梱包完了"
      ],
      "stop_conditions": [
        "出荷ID未生成",
        "梱包完了フラグ未反映"
      ]
    },
    {
      "id": "S05_pickup_waiting",
      "label": "集荷待ち",
      "entry_condition": "08_集荷待ち に 出荷ID があり 引渡状態が未完",
      "ai_action": "送り状番号、受付番号、受付QR、引渡予定日、時間帯、提示方法、画面取得状態を整理する",
      "human_action": "なし",
      "write_targets": [
        "08_集荷待ち"
      ],
      "required_fields": [
        "出荷ID",
        "注文ID",
        "送り状番号",
        "受付番号",
        "受付QR",
        "引渡予定日",
        "時間帯",
        "提示方法",
        "画面取得状態",
        "引渡状態"
      ],
      "stop_conditions": [
        "送り状番号未取得",
        "集荷予定日未設定"
      ]
    },
    {
      "id": "S06_pickup_batched",
      "label": "集荷バッチ化",
      "entry_condition": "集荷待ち案件が1件以上ある",
      "ai_action": "11_集荷バッチ に PICK-注文ID 単位で束ねる",
      "human_action": "DDは必要時だけ確認する",
      "write_targets": [
        "11_集荷バッチ"
      ],
      "required_fields": [
        "集荷バッチID",
        "対象件数",
        "集荷予定日",
        "時間帯",
        "送り状番号一覧",
        "受付番号一覧",
        "画面取得状態",
        "対象注文ID一覧"
      ],
      "stop_conditions": [
        "同じ集荷バッチIDが存在",
        "対象注文ID一覧が空"
      ]
    },
    {
      "id": "S07_handoff_ready",
      "label": "引渡準備完了",
      "entry_condition": "送り状番号と荷物が揃っている",
      "ai_action": "発送レールUIに 引渡し対象 を出す",
      "human_action": "印刷した送り状を貼った荷物を渡す",
      "write_targets": [
        "08_集荷待ち",
        "11_集荷バッチ"
      ],
      "required_fields": [
        "出荷ID",
        "送り状番号",
        "提示方法",
        "引渡状態"
      ],
      "stop_conditions": [
        "梱包未完",
        "送り状番号未取得",
        "荷物不在"
      ]
    },
    {
      "id": "S08_shipped",
      "label": "出荷済み",
      "entry_condition": "ヤマトへ引渡し済み",
      "ai_action": "10_出荷実績 へ append し、09/08 を 出荷済みへ閉じる",
      "human_action": "なし",
      "write_targets": [
        "10_出荷実績",
        "09_受注一覧",
        "08_集荷待ち"
      ],
      "required_fields": [
        "出荷ID",
        "注文ID",
        "商品ID",
        "出荷日",
        "追跡番号"
      ],
      "stop_conditions": [
        "追跡番号未取得",
        "出荷日未記録"
      ]
    }
  ],
  "validation": {
    "generated_at": "2026-04-21 10:39:51 JST",
    "contract_version": "2026-04-11",
    "summary": {
      "status": "ok",
      "badge": "OK",
      "errors": 0,
      "warnings": 0,
      "handoff_ready": 0,
      "blocked_capture": 0,
      "missing_shipping_candidate": 0,
      "duplicate_key_errors": 0
    },
    "errors": [],
    "warnings": []
  },
  "api_readiness": {
    "generated_at": "2026-04-21 10:39:51 JST",
    "summary": {
      "badge": "本線固定",
      "headline": "今すぐの発送・集荷は shipping.html で固定済みです。Ship&co と YBM 返信は2段目です。",
      "detail": "メルカリは メルカリBiz配送 + 送り状印刷 + ヤマト集荷、BASEは BASE標準 かんたん発送 で進めます。待たないもの: YBM For Developers 返信 / Ship&co 国内 carrier 設定 / Ship&co API の live orders 疎通。",
      "unresolved": 2,
      "mainline_blockers": 0,
      "optional_blockers": 2
    },
    "items": [
      {
        "id": "mercari_pickup_mainline",
        "label": "メルカリ本線集荷",
        "progress": 9,
        "status": "Biz配送 ready",
        "summary": "メルカリBiz配送 + 送り状印刷 + ヤマト集荷 の本線。発送系タブと監視は動いています。",
        "detail": "DD direct truth で Biz配送 ready。残りは実注文1件の通し確認です。"
      },
      {
        "id": "base_publish_api",
        "label": "BASE出品API",
        "progress": 9,
        "status": "認証あり",
        "summary": "公式 OAuth API ルート。publish は access token で認証します。",
        "detail": "OAuth ready / planned 19件 / total 21件 / already published 2件"
      },
      {
        "id": "base_kantan_shipping",
        "label": "BASEかんたん発送",
        "progress": 8,
        "status": "注文待ち",
        "summary": "運営者情報と公開状態は live確認済みです。",
        "detail": "ショップ公開 / 運営情報 / public表示は live確認済み。独立した かんたん発送ON 画面はなく、注文0件のため注文画面での出現だけ未確認。"
      },
      {
        "id": "shipandco_shared_shipping",
        "label": "Ship&co共通配送",
        "progress": 4,
        "status": "carrier待ち",
        "summary": "副販路を共通配送へ寄せるための本命線です。auth は api token で扱います。",
        "detail": "2026-04-18 rerun でも orders 画面では shop filter に BASE店舗が見え、warehouse は Fukuoka-shi が見える一方、利用可能な運送会社は 0件。carriers 画面には DHL / FedEx / UPS / 日本郵便国内 / ヤマト運輸 B2 / 佐川急便 などが並ぶが、接続済み domestic carrier は増えていない。`degutidai@gmail.com` と `deguchi.11107@gmail.com` の両 inbox で Ship&co / 顧客コード / 運賃管理番号 / 承認コード / APIアクセスキー / B2クラウド などを actual 検索しても該当メールは見つからなかった。live pickup を閉じるには 日本郵便国内=承認コード / ヤマト運輸 B2=APIアクセスキー+運賃管理番号 / 佐川急便=顧客コード11桁 が引き続き不足"
      },
      {
        "id": "yamato_developer_api",
        "label": "ヤマト開発API",
        "progress": 4,
        "status": "返信待ち",
        "summary": "YBM For Developers / 配送連携API",
        "detail": "返信確認の正規 route は Chrome Profile 12 です。/Users/dd/000_AI組織/ops/ヤマトAPI返信を確認する.command を再実行すれば、degutidai@gmail.com で 365日以内の4 query を再確認できます。現時点では relevant reply は見えていないため、Mercari Shops post-sale pickup rail を継続します。"
      }
    ],
    "stoplines": [
      {
        "severity": "orange",
        "area": "Ship&co carrier",
        "mainline_blocker": false,
        "message": "2026-04-18 rerun でも orders 画面では shop filter に BASE店舗が見え、warehouse は Fukuoka-shi が見える一方、利用可能な運送会社は 0件。carriers 画面には DHL / FedEx / UPS / 日本郵便国内 / ヤマト運輸 B2 / 佐川急便 などが並ぶが、接続済み domestic carrier は増えていない。`degutidai@gmail.com` と `deguchi.11107@gmail.com` の両 inbox で Ship&co / 顧客コード / 運賃管理番号 / 承認コード / APIアクセスキー / B2クラウド などを actual 検索しても該当メールは見つからなかった。live pickup を閉じるには 日本郵便国内=承認コード / ヤマト運輸 B2=APIアクセスキー+運賃管理番号 / 佐川急便=顧客コード11桁 が引き続き不足",
        "next_action": "日本郵便 / ヤマトB2 / 佐川の必要情報をそろえて Ship&co へ登録する。"
      },
      {
        "severity": "yellow",
        "area": "ヤマト開発API",
        "mainline_blocker": false,
        "message": "問い合わせ送信済みですが、返信確認はまだ閉じていません。",
        "next_action": "返信確認の正規 route は Chrome Profile 12 です。/Users/dd/000_AI組織/ops/ヤマトAPI返信を確認する.command を再実行すれば、degutidai@gmail.com で 365日以内の4 query を再確認できます。現時点では relevant reply は見えていないため、Mercari Shops post-sale pickup rail を継続します。"
      }
    ]
  },
  "print_exports": {
    "summary": {
      "badge": "sampleのみ",
      "headline": "shipping.html からプリンタ用パケットを出せます。",
      "detail": "live注文はまだ 0件です。直近の capture sample を使って JSON / CSV / 印刷ビューの動線を先に確認できます。"
    },
    "mode": "sample",
    "note": "shipping.html が出すのは carrier 正式ラベルそのものではなく、印刷・持参・引渡し用の整理済みパケットです。",
    "shipments": [],
    "sample_shipment": {
      "source_type": "sample",
      "status": "sample",
      "shipment_id": "SHIP-DRYRUN-ORDER-0001",
      "order_id": "DRYRUN-ORDER-0001",
      "product_id": "BOX-001-ITEM-DRYRUN-0001",
      "product_name": "",
      "lane": "メルカリBiz配送 + 送り状印刷 + ヤマト集荷",
      "delivery_class": "",
      "packing_status": "",
      "pickup_request": "",
      "pickup_batch_id": "PICK-DRYRUN-ORDER-0001",
      "tracking_number": "1234-5678-9012",
      "reception_number": "RCPT-0001-9999",
      "reception_qr": "qr://dryrun-0001",
      "pickup_date": "2026-04-12",
      "pickup_window": "14:00-16:00",
      "display_method": "送り状番号提示",
      "printable_code": "1234-5678-9012",
      "capture_status": "取得済み",
      "captured_at": "2026-04-11 18:00:00 JST",
      "handoff_status": "",
      "label_status": "download_ready",
      "label_download_url": "https://example.invalid/labels/SHIP-DRYRUN-ORDER-0001",
      "label_pdf_url": "https://example.invalid/labels/SHIP-DRYRUN-ORDER-0001.pdf",
      "label_format": "pdf",
      "service_name": "メルカリBiz配送",
      "print_note": "A4印刷 / 余白なし / バーコードを隠さない",
      "recipient_name": "出口大",
      "recipient_zip": "810-0072",
      "recipient_address1": "福岡県福岡市中央区長浜2-3-18-1415",
      "recipient_address2": "ドゥーエ赤坂",
      "recipient_address": "福岡県福岡市中央区長浜2-3-18-1415 ドゥーエ赤坂",
      "recipient_phone": "09044879771",
      "sender_shop_name": "掘り出し物ショップ【お宝探しshop】",
      "sender_name": "出口大",
      "sender_zip": "810-0072",
      "sender_address": "福岡市中央区長浜2-3-18-1415",
      "sender_phone": "09044879771",
      "note": "live注文がまだ 0件のため sample payload を表示",
      "missing_fields": [],
      "coverage": [
        {
          "key": "handoff_code",
          "label": "見せるコード",
          "status": "ready",
          "value": "1234-5678-9012"
        },
        {
          "key": "pickup_slot",
          "label": "集荷日時",
          "status": "ready",
          "value": "2026-04-12 14:00-16:00"
        },
        {
          "key": "recipient",
          "label": "宛先",
          "status": "ready",
          "value": "出口大 福岡県福岡市中央区長浜2-3-18-1415 ドゥーエ赤坂 09044879771"
        },
        {
          "key": "label_asset",
          "label": "ラベル",
          "status": "ready",
          "value": "download_ready"
        }
      ],
      "print_readiness": "印刷可"
    },
    "batches": [],
    "coverage_summary": {
      "packet_count": 1,
      "label_ready": 1,
      "recipient_ready": 1,
      "handoff_ready": 1,
      "pickup_slot_ready": 1
    },
    "sender_profile": {
      "shop_name": "掘り出し物ショップ【お宝探しshop】",
      "name": "出口大",
      "zip": "810-0072",
      "address": "福岡市中央区長浜2-3-18-1415",
      "phone": "09044879771"
    },
    "payload": {
      "generated_at": "2026-04-21 10:39:51 JST",
      "mode": "sample",
      "note": "shipping.html が出すのは carrier 正式ラベルそのものではなく、印刷・持参・引渡し用の整理済みパケットです。",
      "shipments": [
        {
          "source_type": "sample",
          "status": "sample",
          "shipment_id": "SHIP-DRYRUN-ORDER-0001",
          "order_id": "DRYRUN-ORDER-0001",
          "product_id": "BOX-001-ITEM-DRYRUN-0001",
          "product_name": "",
          "lane": "メルカリBiz配送 + 送り状印刷 + ヤマト集荷",
          "delivery_class": "",
          "packing_status": "",
          "pickup_request": "",
          "pickup_batch_id": "PICK-DRYRUN-ORDER-0001",
          "tracking_number": "1234-5678-9012",
          "reception_number": "RCPT-0001-9999",
          "reception_qr": "qr://dryrun-0001",
          "pickup_date": "2026-04-12",
          "pickup_window": "14:00-16:00",
          "display_method": "送り状番号提示",
          "printable_code": "1234-5678-9012",
          "capture_status": "取得済み",
          "captured_at": "2026-04-11 18:00:00 JST",
          "handoff_status": "",
          "label_status": "download_ready",
          "label_download_url": "https://example.invalid/labels/SHIP-DRYRUN-ORDER-0001",
          "label_pdf_url": "https://example.invalid/labels/SHIP-DRYRUN-ORDER-0001.pdf",
          "label_format": "pdf",
          "service_name": "メルカリBiz配送",
          "print_note": "A4印刷 / 余白なし / バーコードを隠さない",
          "recipient_name": "出口大",
          "recipient_zip": "810-0072",
          "recipient_address1": "福岡県福岡市中央区長浜2-3-18-1415",
          "recipient_address2": "ドゥーエ赤坂",
          "recipient_address": "福岡県福岡市中央区長浜2-3-18-1415 ドゥーエ赤坂",
          "recipient_phone": "09044879771",
          "sender_shop_name": "掘り出し物ショップ【お宝探しshop】",
          "sender_name": "出口大",
          "sender_zip": "810-0072",
          "sender_address": "福岡市中央区長浜2-3-18-1415",
          "sender_phone": "09044879771",
          "note": "live注文がまだ 0件のため sample payload を表示",
          "missing_fields": [],
          "coverage": [
            {
              "key": "handoff_code",
              "label": "見せるコード",
              "status": "ready",
              "value": "1234-5678-9012"
            },
            {
              "key": "pickup_slot",
              "label": "集荷日時",
              "status": "ready",
              "value": "2026-04-12 14:00-16:00"
            },
            {
              "key": "recipient",
              "label": "宛先",
              "status": "ready",
              "value": "出口大 福岡県福岡市中央区長浜2-3-18-1415 ドゥーエ赤坂 09044879771"
            },
            {
              "key": "label_asset",
              "label": "ラベル",
              "status": "ready",
              "value": "download_ready"
            }
          ],
          "print_readiness": "印刷可"
        }
      ],
      "batches": [],
      "coverage_summary": {
        "packet_count": 1,
        "label_ready": 1,
        "recipient_ready": 1,
        "handoff_ready": 1,
        "pickup_slot_ready": 1
      },
      "required_but_missing_upstream": []
    },
    "shipment_export_rows": [
      {
        "source_type": "sample",
        "状態": "sample",
        "出荷ID": "SHIP-DRYRUN-ORDER-0001",
        "注文ID": "DRYRUN-ORDER-0001",
        "商品ID": "BOX-001-ITEM-DRYRUN-0001",
        "商品名": "",
        "レール": "メルカリBiz配送 + 送り状印刷 + ヤマト集荷",
        "配送区分": "",
        "梱包状態": "",
        "集荷依頼": "",
        "集荷バッチID": "PICK-DRYRUN-ORDER-0001",
        "送り状番号": "1234-5678-9012",
        "受付番号": "RCPT-0001-9999",
        "受付QR": "qr://dryrun-0001",
        "引渡予定日": "2026-04-12",
        "時間帯": "14:00-16:00",
        "提示方法": "送り状番号提示",
        "プリンタ用コード": "1234-5678-9012",
        "印刷可否": "印刷可",
        "ラベル状態": "download_ready",
        "ラベルURL": "https://example.invalid/labels/SHIP-DRYRUN-ORDER-0001",
        "ラベルPDF": "https://example.invalid/labels/SHIP-DRYRUN-ORDER-0001.pdf",
        "配送サービス": "メルカリBiz配送",
        "宛先氏名": "出口大",
        "宛先郵便番号": "810-0072",
        "宛先住所": "福岡県福岡市中央区長浜2-3-18-1415 ドゥーエ赤坂",
        "宛先電話番号": "09044879771",
        "発送元": "出口大 福岡市中央区長浜2-3-18-1415 09044879771",
        "画面取得状態": "取得済み",
        "取得時刻": "2026-04-11 18:00:00 JST",
        "引渡状態": "",
        "不足項目": "",
        "メモ": "live注文がまだ 0件のため sample payload を表示"
      }
    ],
    "batch_export_rows": [],
    "required_but_missing_upstream": [],
    "download_ready": true,
    "filenames": {
      "json": "shipping_print_packets_20260421_103951.json",
      "shipment_csv": "shipping_print_packets_20260421_103951.csv",
      "batch_csv": "shipping_pickup_batches_20260421_103951.csv"
    }
  },
  "capture_contract": {
    "preferred_acquisition_order": [
      "既存ブラウザ session",
      "画面操作",
      "repo 内 session script",
      "人間へ不足情報を確認"
    ],
    "latest_capture": {
      "shipment_id": "SHIP-DRYRUN-ORDER-0001",
      "order_id": "DRYRUN-ORDER-0001",
      "product_id": "BOX-001-ITEM-DRYRUN-0001",
      "pickup_batch_id": "PICK-DRYRUN-ORDER-0001",
      "tracking_number": "1234-5678-9012",
      "reception_number": "RCPT-0001-9999",
      "reception_qr": "qr://dryrun-0001",
      "pickup_date": "2026-04-12",
      "pickup_window": "14:00-16:00",
      "capture_source": "mercari_shops_order_screen",
      "capture_status": "取得済み",
      "capture_browser": "Comet",
      "capture_profile": "Default",
      "captured_at": "2026-04-11 18:00:00 JST",
      "label_status": "download_ready",
      "label_download_url": "https://example.invalid/labels/SHIP-DRYRUN-ORDER-0001",
      "label_pdf_url": "https://example.invalid/labels/SHIP-DRYRUN-ORDER-0001.pdf",
      "label_format": "pdf",
      "recipient_name": "出口大",
      "recipient_zip": "810-0072",
      "recipient_address1": "福岡県福岡市中央区長浜2-3-18-1415",
      "recipient_address2": "ドゥーエ赤坂",
      "recipient_address": "福岡県福岡市中央区長浜2-3-18-1415 ドゥーエ赤坂",
      "recipient_phone": "09044879771",
      "service_name": "メルカリBiz配送",
      "print_note": "A4印刷 / 余白なし / バーコードを隠さない",
      "note": "sample payload for shipping capture apply script"
    }
  },
  "sync_health": {
    "checked_at": "2026-04-21 10:39:51 JST",
    "status": "ok",
    "badge": "同期OK",
    "headline": "Sheets fetch と shipping render は通りました。",
    "detail": "直近 monitor: 2026-04-21T01:36:10.332Z / orders=0. post-sale sync: 2026-04-20T10:09:55.493496Z.",
    "next_action": "live注文が来たら 09 -> 07 -> 08 -> 11 -> 10 の順で閉じる",
    "fallback_in_use": false,
    "last_success_generated_at": "2026-04-21 10:39:51 JST",
    "source_fetches": [
      {
        "label": "09_受注一覧",
        "range": "'09_受注一覧'!A1:Z2000",
        "status": "ok",
        "attempts": 1,
        "rows": 0,
        "elapsed_ms": 379
      },
      {
        "label": "07_発送候補",
        "range": "'07_発送候補'!A1:Z2000",
        "status": "ok",
        "attempts": 1,
        "rows": 0,
        "elapsed_ms": 317
      },
      {
        "label": "08_集荷待ち",
        "range": "'08_集荷待ち'!A1:Z2000",
        "status": "ok",
        "attempts": 1,
        "rows": 0,
        "elapsed_ms": 405
      },
      {
        "label": "10_出荷実績",
        "range": "'10_出荷実績'!A1:Z2000",
        "status": "ok",
        "attempts": 1,
        "rows": 0,
        "elapsed_ms": 315
      },
      {
        "label": "11_集荷バッチ",
        "range": "'11_集荷バッチ'!A1:Z2000",
        "status": "ok",
        "attempts": 1,
        "rows": 0,
        "elapsed_ms": 308
      }
    ],
    "failed_sources": [],
    "monitor": {
      "checked_at": "2026-04-21T01:36:10.332Z",
      "orders_count": 0,
      "new_orders_count": 0,
      "next_action": "No new orders detected."
    },
    "post_sale_sync": {
      "status": "ok",
      "completed_at": "2026-04-20T10:09:55.493496Z",
      "last_success_at": "2026-04-20T10:09:55.493496Z",
      "next_action": "render_shipping_board.py を回して resident へ反映する",
      "summary": "orders_seen=0 / shipping_added=0 / pickup_wait_added=0 / pickup_added=0"
    }
  }
};
