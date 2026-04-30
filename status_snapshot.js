window.ZERO_COST_STATUS = {
  "generated_at": "2026-04-30 09:08:20 JST",
  "workbook_url": "https://docs.google.com/spreadsheets/d/1VjdUJavoijOkdjKtkdKy_zUcdkQqZwG0oRty57H5_lk/edit",
  "metrics": {
    "box_count": "1",
    "box_note": "受入対象の箱数です。先頭: BOX-001",
    "research_pending": "0",
    "research_note": "JAN / 型番 / 比較画像の確認待ち件数です。barcode_ready=0 / ocr_ready=0 / blocking_missing=0 / exception=1",
    "draft_pending": "7",
    "draft_note": "公開前に AI が整える下書き件数です。",
    "review_pending": "3",
    "review_note": "非コスメは API 公開済みです。コスメだけ審査継続中です。",
    "pickup_pending": "0",
    "pickup_note": "梱包後に集荷バッチへ流す待機件数です。",
    "split_required": "0",
    "dd_inquiry_pending": "0",
    "shipping_errors": "0",
    "shipping_warnings": "0"
  },
  "api_lane": {
    "label": "seller session GraphQL API で公開済み / 公開画像是正済み / コスメ審査継続",
    "note": "published_product=PRD-BOX-001-070 / listingId=2JQVbTmGfPBcrtSxmqi4Px / image_refreshed=10 / cosmetics_applicationId=2zpKKFVRC4aUXzG6o / 公開済み10件へ public image asset を再投入し、出品画像の基本は実物へ更新済み。比較画像は resident の照合用で、100%同一確認済みのものだけ出品画像に使う。 / Bearer /v1/graphql は 2026-04-11 のメルカリShops返信で連携見送り確定"
  },
  "strategy": {
    "priority": "売れた後の発送の楽さ優先",
    "decision_driver": "最初の1件を、設定が軽く、人が少ない手数で閉じられるか",
    "sales_channel": "メルカリShops",
    "ec_platform": "BASE",
    "ec_reason": "国内向けで軽く、Ship&co と組み合わせて売れた後の運用を簡単にしやすい",
    "shipping_platform": "Ship&co",
    "shipping_reason": "2段目で多販路の送り状発行、集荷、配送を共通化する本命",
    "immediate_easy_lane": "BASE標準 かんたん発送",
    "immediate_easy_reason": "設定が最も軽く、注文画面とヤマト集荷だけで進めやすい。最初の1件を最短で閉じる線",
    "multi_channel_first_lane": "BASE + Ship&co",
    "multi_channel_first_reason": "運送会社アカウントまで含めて整えた後に、多販路共通化へ進む2段目の本命",
    "future_upgrade": "Shopify",
    "future_reason": "件数が増え、より深い自動化と運用の伸びしろへ投資する段階で再評価する",
    "route_selection_guideline": "メルカリは既存本線を維持する。BASEはまず かんたん発送 で最短立ち上げ、その後 Ship&co で共通化する。詰まったら BASE公式の CSV / ラベル線へ逃がす。",
    "route_options": [
      {
        "id": "mercari_main_pickup",
        "priority": 1,
        "name": "メルカリShops本線",
        "lane": "メルカリBiz配送 + 送り状印刷 + ヤマト集荷",
        "category": "現本線",
        "status": "live運用",
        "tone": "green",
        "proof_level": "shipping gate 整備済み",
        "when_to_use": "メルカリShops受注を最優先で閉じたい時",
        "strength": "resident と shipping gate がすでにある",
        "caution": "メルカリ外の多販路共通化にはそのまま広がらない",
        "cost_summary": "送料はメルカリBiz配送 current rule に従う。本線は送り状印刷あり、らくらくの画面提示は予備線として残す。",
        "required_accounts": [
          "メルカリShops"
        ],
        "setup_steps": [
          "メルカリShops運用継続",
          "seller session GraphQL",
          "発送 gate 監視"
        ],
        "screen_flow": [
          "受注画面",
          "発送準備",
          "ヤマト集荷",
          "出荷完了"
        ],
        "screen_only_fit": "限定的",
        "screen_only_note": "本線は送り状印刷あり。画面提示は予備線で扱う",
        "proof_checkpoints": [
          {
            "label": "発送 gate を自動監視",
            "status": "done",
            "note": "09 -> 07 -> 08 -> 11 -> 10 の検査は script 化済み"
          },
          {
            "label": "owner 画面を 1本化",
            "status": "done",
            "note": "初受注が来たら shipping.html を見れば進められる"
          },
          {
            "label": "live 1件で通し証明",
            "status": "pending",
            "note": "まだ注文 0件。初受注で実通過を残す"
          }
        ],
        "proof_done_count": 2,
        "proof_total_count": 3,
        "proof_progress_label": "2/3 完了",
        "next_step": "最初の live 1件を 09 -> 07 -> 08 -> 11 -> 10 で閉じる",
        "href": "./shipping.html"
      },
      {
        "id": "base_standard_kantan",
        "priority": 2,
        "name": "BASE標準 かんたん発送",
        "lane": "BASE注文画面 + ヤマト集荷",
        "category": "公式プリンタレス候補",
        "status": "公式確認済み",
        "tone": "blue",
        "proof_level": "公開情報で強い",
        "when_to_use": "プリンタレスと集荷の軽さを最優先したい時",
        "strength": "注文画面から発送でき、ヤマトはネコポス以外で集荷できる",
        "caution": "かんたん発送を使った注文は orders/edit_status で発送更新できない",
        "cost_summary": "BASEスタンダードは月額0円。決済3.6% + 40円、サービス利用料3%。ヤマト集荷は +¥80、ネコポス集荷不可。",
        "required_accounts": [
          "BASEショップ"
        ],
        "setup_steps": [
          "BASEショップ開設",
          "注文画面",
          "かんたん発送利用開始"
        ],
        "screen_flow": [
          "注文画面",
          "かんたん発送",
          "ヤマト集荷",
          "発送完了"
        ],
        "screen_only_fit": "強い",
        "screen_only_note": "画面だけで進めやすい公式プリンタレス候補",
        "proof_checkpoints": [
          {
            "label": "owner task 登録",
            "status": "done",
            "note": "BASE開設と実注文1件通しの task は Google Tasks へ登録済み"
          },
          {
            "label": "公開情報を確認",
            "status": "done",
            "note": "注文画面から発送でき、ヤマトはネコポス以外で集荷可"
          },
          {
            "label": "アカウント準備",
            "status": "done",
            "note": "BASEショップ公開 / 運営情報 / public shop表示までは live確認済み。独立した かんたん発送ON 画面はなく、注文0件のため注文画面での出現だけ未確認"
          },
          {
            "label": "live 1件で通し証明",
            "status": "pending",
            "note": "注文画面 -> 集荷 -> 発送完了 の証跡待ち"
          }
        ],
        "proof_done_count": 3,
        "proof_total_count": 4,
        "proof_progress_label": "3/4 完了",
        "next_step": "BASE準備可 105件 を前提に、注文画面 -> ヤマト集荷 -> 発送完了 の 1件通しを証跡化する",
        "href": "./routing.html"
      },
      {
        "id": "base_shipandco",
        "priority": 3,
        "name": "BASE + Ship&co",
        "lane": "BASE + Ship&co + ヤマト等",
        "category": "多販路共通化の本命",
        "status": "優先検証中",
        "tone": "purple",
        "proof_level": "要live証明",
        "when_to_use": "多販路共通化も先に見据えたい時",
        "strength": "注文取込 / ラベル / 追跡 / 発送済み連携までは公開情報で確認できている",
        "caution": "プリンタレス + 集荷込みの 1件通しは未実証。public pricing は Ship&co pricing page と BASE Apps listing で差異があるため契約前に再確認する。",
        "cost_summary": "BASEスタンダード月額0円 + Ship&co料金。pricing page では 0-50件は 22円/件 + 月額1,100円。",
        "required_accounts": [
          "BASEショップ",
          "Ship&coアカウント",
          "運送会社アカウント",
          "荷送人情報",
          "クレジットカード"
        ],
        "setup_steps": [
          "Ship&co登録",
          "プロフィール登録",
          "BASE連携",
          "運送会社 / 荷送人 / カード登録"
        ],
        "screen_flow": [
          "BASE Apps連携",
          "注文同期",
          "送り状発行",
          "発送済み連携"
        ],
        "screen_only_fit": "中",
        "screen_only_note": "CSVより強いが、運送会社アカウント登録が前提",
        "proof_checkpoints": [
          {
            "label": "owner task 登録",
            "status": "done",
            "note": "Ship&co準備と実注文1件通しの task は Google Tasks へ登録済み"
          },
          {
            "label": "公開情報を確認",
            "status": "done",
            "note": "注文取込 / ラベル / 追跡 / 発送済み連携までは確認済み"
          },
          {
            "label": "アカウント準備",
            "status": "pending",
            "note": "Ship&co welcome で step1 連絡先・請求先 / step2 荷送人 / step4 BASE店舗登録 は live完了。step3 国内 carrier は契約情報不足で未完"
          },
          {
            "label": "live 1件で通し証明",
            "status": "pending",
            "note": "注文取込 -> 送り状 -> 集荷予約 -> 発送済み反映 の証跡待ち"
          }
        ],
        "proof_done_count": 2,
        "proof_total_count": 4,
        "proof_progress_label": "2/4 完了",
        "next_step": "BASE準備可 105件 / Ship&co候補 105件 を前提に、注文取込 -> 送り状 -> 集荷予約 -> 発送済み反映 の 1件通しを記録する",
        "href": "./routing.html"
      },
      {
        "id": "base_csv_bulk",
        "priority": 4,
        "name": "BASE + 送り状データDL / CSV一括発送",
        "lane": "BASE CSV + 配送会社システム",
        "category": "公式予備線",
        "status": "公式確認済み",
        "tone": "yellow",
        "proof_level": "公開情報で強い",
        "when_to_use": "Ship&co が詰まっても BASE 側で発送を閉じたい時",
        "strength": "送り状データ出力と発送済み一括更新を BASE 公式 apps が持っている",
        "caution": "CSV / ラベル運用で、プリンタレス前提ではない",
        "cost_summary": "BASEスタンダード月額0円。CSV往復ぶんの人手コストが増えやすい。",
        "required_accounts": [
          "BASEショップ",
          "配送会社システム"
        ],
        "setup_steps": [
          "BASEショップ開設",
          "送り状データDL",
          "CSV一括発送"
        ],
        "screen_flow": [
          "CSV出力",
          "配送会社システム",
          "CSV反映"
        ],
        "screen_only_fit": "弱い",
        "screen_only_note": "画面だけで完結しにくく、CSV往復が入る",
        "proof_checkpoints": [
          {
            "label": "公開情報を確認",
            "status": "done",
            "note": "送り状データDL と 発送済みCSV 反映の導線は確認済み"
          },
          {
            "label": "アカウント準備",
            "status": "pending",
            "note": "BASE と 配送会社CSV運用の実設定はまだ未確認"
          },
          {
            "label": "live 1件で通し証明",
            "status": "pending",
            "note": "CSV出力 -> 配送会社システム -> 発送済みCSV反映 の証跡待ち"
          }
        ],
        "proof_done_count": 1,
        "proof_total_count": 3,
        "proof_progress_label": "1/3 完了",
        "next_step": "B2クラウド向けCSVと発送済みCSVを 1件で通す",
        "href": "./routing.html"
      },
      {
        "id": "shopify_shipandco",
        "priority": 5,
        "name": "Shopify + Ship&co",
        "lane": "Shopify + Ship&co",
        "category": "後段拡張",
        "status": "後段候補",
        "tone": "gray",
        "proof_level": "後段設計",
        "when_to_use": "件数が増え、深いAPI自動化へ投資する時",
        "strength": "商品同期と大量処理の伸びしろが大きい",
        "caution": "今の 0円事業で最初に閉じる1件向けではない",
        "cost_summary": "Shopify月額 + Ship&co料金で、固定費はBASEより重い。",
        "required_accounts": [
          "Shopify",
          "Ship&coアカウント",
          "運送会社アカウント"
        ],
        "setup_steps": [
          "Shopify契約",
          "Ship&co登録",
          "運送会社登録"
        ],
        "screen_flow": [
          "Shopify連携",
          "注文同期",
          "送り状",
          "発送済み"
        ],
        "screen_only_fit": "中",
        "screen_only_note": "量が増えた後の深い自動化向け",
        "proof_checkpoints": [
          {
            "label": "route 評価",
            "status": "pending",
            "note": "今は BASE 側の最初の1件を閉じるまで着手しない"
          },
          {
            "label": "アカウント準備",
            "status": "pending",
            "note": "Shopify / Ship&co / 運送会社の準備はまだ未着手"
          },
          {
            "label": "live 1件で通し証明",
            "status": "pending",
            "note": "BASE proof 後に必要なら別レーンで設計し直す"
          }
        ],
        "proof_done_count": 0,
        "proof_total_count": 3,
        "proof_progress_label": "0/3 完了",
        "next_step": "BASE側の proof 後に再評価する",
        "href": "./routing.html"
      }
    ],
    "workbook_strategy_tab": "93_販路EC配送戦略",
    "workbook_routing_tab": "94_販路配送ルーティング"
  },
  "routing": {
    "total": "120",
    "mercari_live": "65",
    "mercari_pending": "31",
    "base_ready": "105",
    "shipco_candidate": "105",
    "human_review_needed": "45",
    "image_review_waiting": "2",
    "publish_gate_waiting": "31",
    "master_waiting": "0",
    "draft_waiting": "0",
    "base_hold": "17"
  },
  "shipping_guard": {
    "status": "ok",
    "badge": "OK",
    "errors": "0",
    "warnings": "0",
    "handoff_ready": "0",
    "blocked_capture": "0",
    "headline": "注文はまだありません。発送・集荷は shipping.html で固定済みです。",
    "detail": "メルカリShopsは メルカリBiz配送 + 送り状印刷 + ヤマト集荷、BASEは BASE標準 かんたん発送。残りは実注文 1件の通し確認です。",
    "api_badge": "本線固定",
    "api_unresolved": "3",
    "api_mainline_blockers": "0",
    "api_headline": "今すぐの発送・集荷は shipping.html で固定済みです。副販路連携は2段目で育てます。",
    "api_detail": "メルカリは メルカリBiz配送 + 送り状印刷 + ヤマト集荷、BASEは BASE標準 かんたん発送、Yahoo!ショッピングは Yahoo!ショッピング ストア配送 + ヤマト集荷 で進めます。待たないもの: YBM For Developers 返信 / Ship&co 国内 carrier 設定 / Ship&co API の live orders 疎通。",
    "api_stoplines_preview": "Yahoo!ショッピング / Ship&co carrier / ヤマト開発API"
  },
  "inquiries": {
    "total": "3",
    "ai_processing": "0",
    "dd_escalated": "0"
  },
  "channels": [
    {
      "id": "mercari",
      "name": "メルカリShops",
      "status": "active",
      "badge": "本線",
      "tone": "green",
      "published_count": 74,
      "draft_count": 21,
      "review_count": 1,
      "order_count_total": 0,
      "inquiry_count_open": 3,
      "shipping_lane": "メルカリBiz配送 + 送り状印刷 + ヤマト集荷",
      "owner_note": "本線は稼働中。売れた後の gate も検査付きで固定済み",
      "planned_count": 0,
      "blocked_count": 0,
      "auth_label": "",
      "plan_note": "",
      "next_step": "最初の live 1件を shipping.html で最後まで通す",
      "href": "./shipping.html"
    },
    {
      "id": "base",
      "name": "BASEショップ",
      "status": "active",
      "badge": "自社EC",
      "tone": "green",
      "published_count": 81,
      "draft_count": 0,
      "review_count": 0,
      "order_count_total": 0,
      "inquiry_count_open": 0,
      "shipping_lane": "BASE かんたん発送 / Ship&co",
      "owner_note": "自社EC は公開済み。公開確認は BASE admin 商品一覧 / search API / 通常ブラウザ表示 を正本にする",
      "planned_count": 2,
      "blocked_count": 0,
      "auth_label": "OAuth ready",
      "plan_note": "repo計画 2件 / OAuth ready",
      "next_step": "最初の live 1件を BASE注文 -> かんたん発送 / Ship&co 比較で証跡化する",
      "href": "./routing.html"
    },
    {
      "id": "rakuma",
      "name": "ラクマ公式",
      "status": "planned",
      "badge": "pilot候補",
      "tone": "blue",
      "published_count": 0,
      "draft_count": 1,
      "review_count": 0,
      "order_count_total": 0,
      "inquiry_count_open": 0,
      "shipping_lane": "Ship&co",
      "owner_note": "メルカリの商品を次に出しやすい、最短の副販路",
      "planned_count": 0,
      "blocked_count": 0,
      "auth_label": "",
      "plan_note": "",
      "next_step": "下書き 1件 を pilot 候補として固定する",
      "href": "./channel_listings.html"
    },
    {
      "id": "yahoo_flea",
      "name": "Yahoo!フリマ",
      "status": "planned",
      "badge": "準備中",
      "tone": "yellow",
      "published_count": 0,
      "draft_count": 0,
      "review_count": 0,
      "order_count_total": 0,
      "inquiry_count_open": 0,
      "shipping_lane": "Ship&co",
      "owner_note": "価格競争力が必要。手数料差で価格調整",
      "planned_count": 0,
      "blocked_count": 0,
      "auth_label": "",
      "plan_note": "",
      "next_step": "Phase 2",
      "href": "./routing.html"
    },
    {
      "id": "yahoo_auction",
      "name": "ヤフオク",
      "status": "planned",
      "badge": "準備中",
      "tone": "yellow",
      "published_count": 0,
      "draft_count": 0,
      "review_count": 0,
      "order_count_total": 0,
      "inquiry_count_open": 0,
      "shipping_lane": "Ship&co",
      "owner_note": "オークション型。価格発見力。在庫処分量",
      "planned_count": 0,
      "blocked_count": 0,
      "auth_label": "",
      "plan_note": "",
      "next_step": "Phase 3",
      "href": "./routing.html"
    },
    {
      "id": "yahoo_shopping",
      "name": "Yahoo!ショッピング",
      "status": "setup_ready",
      "badge": "pilot候補",
      "tone": "blue",
      "published_count": 0,
      "draft_count": 72,
      "review_count": 0,
      "order_count_total": 0,
      "inquiry_count_open": 0,
      "shipping_lane": "Yahoo!ショッピング ストア配送 + ヤマト集荷",
      "owner_note": "OAuth と token bundle は取得済み。初回の売却後フローは Yahoo!ショッピング標準のストア配送を優先し、Ship&co は後段の共通化候補として扱う。",
      "planned_count": 0,
      "blocked_count": 0,
      "auth_label": "seller/business設定待ち",
      "plan_note": "seller/business設定待ち",
      "next_step": "YAHOO_SHOPPING_SELLER_ID / YAHOO_SHOPPING_BUSINESS_ID を入れ、ストア配送優先で最初の1件を閉じる。",
      "href": "./routing.html"
    },
    {
      "id": "ebay",
      "name": "eBay",
      "status": "future",
      "badge": "後段",
      "tone": "gray",
      "published_count": 0,
      "draft_count": 0,
      "review_count": 0,
      "order_count_total": 0,
      "inquiry_count_open": 0,
      "shipping_lane": "international",
      "owner_note": "海外展開。ラクマ公式ショップ経由で出品可能",
      "planned_count": 0,
      "blocked_count": 0,
      "auth_label": "",
      "plan_note": "",
      "next_step": "Phase 4",
      "href": "./routing.html"
    },
    {
      "id": "shopee",
      "name": "Shopee",
      "status": "planned",
      "badge": "準備中",
      "tone": "yellow",
      "published_count": 0,
      "draft_count": 0,
      "review_count": 0,
      "order_count_total": 0,
      "inquiry_count_open": 0,
      "shipping_lane": "Shopee Logistics / region別 pickup or dropoff",
      "owner_note": "Shopee Open Platform v2 の public callback / auth status scaffold は repo に追加済み。正式 live 連携には Partner ID / Key、target region、shop_id か merchant_id のどちらで進めるかの固定が必要。",
      "planned_count": 0,
      "blocked_count": 0,
      "auth_label": "partner情報待ち",
      "plan_note": "partner情報待ち",
      "next_step": "SHOPEE_PARTNER_ID / SHOPEE_PARTNER_KEY / SHOPEE_REGION を入れ、shop_id か merchant_id の運用方針を決めて callback を app 設定へ戻す。",
      "href": "./routing.html"
    }
  ],
  "owner_view": {
    "headline": "発送 gate OK / DD返答 0件 / 優先は BASE標準 かんたん発送",
    "dd_today": [
      {
        "tone": "green",
        "label": "売れた後の gate",
        "note": "注文はまだありません。発送・集荷は shipping.html で固定済みです。 初受注が来たら shipping.html だけ見ればよい状態です。",
        "href": "./shipping.html"
      },
      {
        "tone": "blue",
        "label": "いま優先するルート",
        "note": "BASE標準 かんたん発送 / 公式プリンタレス候補 / BASE準備可 105件 を前提に、注文画面 -> ヤマト集荷 -> 発送完了 の 1件通しを証跡化する",
        "href": "./routing.html"
      }
    ],
    "auto_running": [
      {
        "tone": "blue",
        "label": "受注監視",
        "note": "受注監視を継続する",
        "href": "./shipping.html"
      },
      {
        "tone": "blue",
        "label": "画面回収反映",
        "note": "capture 反映の待ち案件はありません",
        "href": "./shipping.html"
      },
      {
        "tone": "blue",
        "label": "Qwen同期",
        "note": "qwen 実行直後も routing / role / resident まで同時更新する。",
        "href": "./roles.html"
      },
      {
        "tone": "blue",
        "label": "多販路下地",
        "note": "BASE準備可 105件 / Ship&co候補 105件",
        "href": "./routing.html"
      }
    ],
    "no_touch": [
      "梱包指示はまだ不要。注文が来るまで現物作業は発生しない",
      "集荷待ちはまだ 0件。送り状番号の確認作業はまだ不要",
      "発送レール検査は AI が見張るので、毎回の突き合わせは不要です。"
    ],
    "growth_focus_title": "いま優先するルート",
    "growth_focus": {
      "id": "base_standard_kantan",
      "priority": 2,
      "name": "BASE標準 かんたん発送",
      "lane": "BASE注文画面 + ヤマト集荷",
      "category": "公式プリンタレス候補",
      "status": "公式確認済み",
      "tone": "blue",
      "proof_level": "公開情報で強い",
      "when_to_use": "プリンタレスと集荷の軽さを最優先したい時",
      "strength": "注文画面から発送でき、ヤマトはネコポス以外で集荷できる",
      "caution": "かんたん発送を使った注文は orders/edit_status で発送更新できない",
      "cost_summary": "BASEスタンダードは月額0円。決済3.6% + 40円、サービス利用料3%。ヤマト集荷は +¥80、ネコポス集荷不可。",
      "required_accounts": [
        "BASEショップ"
      ],
      "setup_steps": [
        "BASEショップ開設",
        "注文画面",
        "かんたん発送利用開始"
      ],
      "screen_flow": [
        "注文画面",
        "かんたん発送",
        "ヤマト集荷",
        "発送完了"
      ],
      "screen_only_fit": "強い",
      "screen_only_note": "画面だけで進めやすい公式プリンタレス候補",
      "proof_checkpoints": [
        {
          "label": "owner task 登録",
          "status": "done",
          "note": "BASE開設と実注文1件通しの task は Google Tasks へ登録済み"
        },
        {
          "label": "公開情報を確認",
          "status": "done",
          "note": "注文画面から発送でき、ヤマトはネコポス以外で集荷可"
        },
        {
          "label": "アカウント準備",
          "status": "done",
          "note": "BASEショップ公開 / 運営情報 / public shop表示までは live確認済み。独立した かんたん発送ON 画面はなく、注文0件のため注文画面での出現だけ未確認"
        },
        {
          "label": "live 1件で通し証明",
          "status": "pending",
          "note": "注文画面 -> 集荷 -> 発送完了 の証跡待ち"
        }
      ],
      "proof_done_count": 3,
      "proof_total_count": 4,
      "proof_progress_label": "3/4 完了",
      "next_step": "BASE準備可 105件 を前提に、注文画面 -> ヤマト集荷 -> 発送完了 の 1件通しを証跡化する",
      "href": "./routing.html"
    },
    "route_options_title": "選べる発送ルート",
    "route_options": [
      {
        "tone": "green",
        "label": "メルカリShops本線 [live運用]",
        "note": "メルカリBiz配送 + 送り状印刷 + ヤマト集荷 / 使いどころ: メルカリShops受注を最優先で閉じたい時 / 注意: メルカリ外の多販路共通化にはそのまま広がらない",
        "href": "./shipping.html"
      },
      {
        "tone": "blue",
        "label": "BASE標準 かんたん発送 [公式確認済み]",
        "note": "BASE注文画面 + ヤマト集荷 / 使いどころ: プリンタレスと集荷の軽さを最優先したい時 / 注意: かんたん発送を使った注文は orders/edit_status で発送更新できない",
        "href": "./routing.html"
      },
      {
        "tone": "purple",
        "label": "BASE + Ship&co [優先検証中]",
        "note": "BASE + Ship&co + ヤマト等 / 使いどころ: 多販路共通化も先に見据えたい時 / 注意: プリンタレス + 集荷込みの 1件通しは未実証。public pricing は Ship&co pricing page と BASE Apps listing で差異があるため契約前に再確認する。",
        "href": "./routing.html"
      },
      {
        "tone": "yellow",
        "label": "BASE + 送り状データDL / CSV一括発送 [公式確認済み]",
        "note": "BASE CSV + 配送会社システム / 使いどころ: Ship&co が詰まっても BASE 側で発送を閉じたい時 / 注意: CSV / ラベル運用で、プリンタレス前提ではない",
        "href": "./routing.html"
      },
      {
        "tone": "gray",
        "label": "Shopify + Ship&co [後段候補]",
        "note": "Shopify + Ship&co / 使いどころ: 件数が増え、深いAPI自動化へ投資する時 / 注意: 今の 0円事業で最初に閉じる1件向けではない",
        "href": "./routing.html"
      }
    ],
    "profit_focus": {
      "headline": "メルカリ公開中 74件 / BASE公開 81件 / 売価合計 ¥107,320 / 平均 ¥1,450",
      "note": "0円仕入れ前提で、今は known fee だけを引いています。送料・梱包材・Ship&co月額按分はまだ差し引いていません。",
      "stats": [
        {
          "label": "メルカリ公開中",
          "value": "74件",
          "tone": "green"
        },
        {
          "label": "売価合計",
          "value": "¥107,320",
          "tone": "blue"
        },
        {
          "label": "平均売価",
          "value": "¥1,450",
          "tone": "purple"
        },
        {
          "label": "価格未設定",
          "value": "3件",
          "tone": "yellow"
        }
      ],
      "items": [
        {
          "tone": "blue",
          "label": "BASE live 商品",
          "note": "81件。BOX-001-ITEM-0001, BOX-001-ITEM-0002, BOX-001-ITEM-0003 は admin search / 商品一覧で公開確認済み。",
          "href": "./channel_listings.html"
        },
        {
          "tone": "green",
          "label": "メルカリ公開中の送料前ざっくり",
          "note": "メルカリShops の fee_rate 9-12% を差し引くと、売価合計 ¥107,320 は 送料前で ¥94,442〜¥97,661。",
          "href": "./channel_listings.html"
        },
        {
          "tone": "blue",
          "label": "BASE標準 かんたん発送の参考",
          "note": "メルカリ公開中平均 ¥1,450 なら、既知固定費後は ¥1,314。集荷ならさらに -¥80、実送料は別。",
          "href": "./routing.html"
        },
        {
          "tone": "purple",
          "label": "BASE + Ship&co の参考",
          "note": "メルカリ公開中平均 ¥1,450 なら、既知固定費後は ¥1,292。実送料と月額1,100円の按分は別。",
          "href": "./routing.html"
        },
        {
          "tone": "yellow",
          "label": "価格整備の残り",
          "note": "価格未設定 3件 / 価格あり下書き 94件 / 相場あり 4件",
          "href": "./channel_listings.html"
        }
      ]
    },
    "alerts": [
      {
        "severity": "orange",
        "key": "3件",
        "title": "発送API / 認証に未設定が残っています",
        "note": "Yahoo!ショッピング / Ship&co carrier",
        "href": "./shipping.html"
      },
      {
        "severity": "orange",
        "key": "45件",
        "title": "販路ルーティングで人確認が必要です",
        "note": "公開可否 31件 / 画像確認 2件",
        "href": "./routing.html"
      },
      {
        "severity": "orange",
        "key": "9件差",
        "title": "メルカリ公開件数の見え方に差があります",
        "note": "routing と channel config の counts を揃える必要があります。",
        "href": "./routing.html"
      }
    ]
  },
  "next_actions": [
    "live受注待ち: 注文1件 = 1回の購入で注文番号が1件発生すること。来たら受注画面 -> 集荷 -> 発送完了まで証跡化する",
    "今すぐ進める: 箱を進める BOX-001",
    "今すぐ進める: 商品特定キュー: barcode_ready=0 / ocr_ready=0 / missing=0 / exception=1",
    "反映待ち: カテゴリ審査反映待ち: applicationId=2zpKKFVRC4aUXzG6o",
    "要確認: 例外許容 BOX-001-ITEM-0006(FRONT/BACK/CODE は同一の長方形ギフト箱だが、箱の中身と正式商品名を実物写真から特定できないため、誤出品防止で例外保留とする)",
    "今すぐ進める: 出品下書き待ち WOOSHIN LABOTTACH FOREHEAD FOCUSED PATCH 18枚入り, WOOSHIN LABOTTACH FOREHEAD FOCUSED PATCH 18枚入り, MMC FACE LOTION 240ml",
    "反映待ち: カテゴリ審査待ち WOOSHIN LABOTTACH FOREHEAD FOCUSED PATCH 18枚入り, WOOSHIN LABOTTACH FOREHEAD FOCUSED PATCH 18枚入り, MMC FACE LOTION 240ml",
    "設定要: Yahoo!ショッピング / YAHOO_SHOPPING_SELLER_ID / YAHOO_SHOPPING_BUSINESS_ID を入れ、ストア配送優先で最初の1件を閉じる。",
    "設定要: Ship&co carrier / 日本郵便 / ヤマトB2 / 佐川の必要情報をそろえて Ship&co へ登録する。",
    "設定要: ヤマト開発API / 返信確認の正規 route は Chrome Profile 12 です。/Users/dd/000_AI組織/ops/ヤマトAPI返信を確認する.command を再実行すれば、degutidai@gmail.com で 365日以内の4 query を再確認できます。現時点では relevant reply は見えていないため、Mercari Shops post-sale pickup rail を継続します。",
    "要確認: 販路ルーティング BOX-001-ITEM-0021, BOX-001-ITEM-0022, BOX-001-ITEM-0023",
    "要確認: 画像同一性確認待ち 2件",
    "要確認: 公開可否確認待ち 31件"
  ]
};
