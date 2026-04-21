window.ZERO_COST_ROUTING = {
  "generated_at": "2026-04-21 23:08:40 JST",
  "source_generated_at": "2026-04-21 23:08:31 JST",
  "workbook_url": "https://docs.google.com/spreadsheets/d/1VjdUJavoijOkdjKtkdKy_zUcdkQqZwG0oRty57H5_lk/edit",
  "routing_tab": "94_販路配送ルーティング",
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
    "priority_route_option_id": "base_standard_kantan",
    "official_printerless_route_option_id": "base_standard_kantan",
    "fallback_route_option_id": "base_csv_bulk",
    "route_selection_guideline": "メルカリは既存本線を維持する。BASEはまず かんたん発送 で最短立ち上げ、その後 Ship&co で共通化する。詰まったら BASE公式の CSV / ラベル線へ逃がす。",
    "workbook_strategy_tab": "93_販路EC配送戦略",
    "workbook_routing_tab": "94_販路配送ルーティング",
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
        "href": "./shipping.html",
        "is_priority": false,
        "is_official": false,
        "is_fallback": false
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
        "next_step": "実注文1件で 注文画面 -> 集荷 -> 発送完了 の証跡を残す",
        "href": "./routing.html",
        "is_priority": true,
        "is_official": true,
        "is_fallback": false
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
        "next_step": "実注文1件で 注文取込 -> 送り状 -> 集荷予約 -> 発送済み反映 を記録する",
        "href": "./routing.html",
        "is_priority": false,
        "is_official": false,
        "is_fallback": false
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
        "href": "./routing.html",
        "is_priority": false,
        "is_official": false,
        "is_fallback": true
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
        "href": "./routing.html",
        "is_priority": false,
        "is_official": false,
        "is_fallback": false
      }
    ]
  },
  "summary": {
    "total": 36,
    "mercari_live": 1,
    "mercari_pending": 15,
    "review_waiting": 1,
    "base_ready": 17,
    "shipco_candidate": 17,
    "human_review_needed": 33,
    "image_review_waiting": 1,
    "publish_gate_waiting": 15,
    "master_waiting": 0,
    "draft_waiting": 0,
    "base_hold": 19,
    "qwen_review_pending": 0,
    "qwen_review_resolved": 2,
    "qwen_blocked": 1
  },
  "next_actions": [
    "反映待ち: カテゴリ審査が 1 件あります。",
    "要確認: 画像同一性確認待ちが 1 件あります。",
    "要確認: 公開可否確認待ちが 15 件あります。",
    "要確認: 人確認が必要なルーティングが 33 件あります。",
    "今すぐ進める: メルカリ本線の公開前整備が 15 件あります。",
    "準備済み: BASE 準備可は 17 件です。",
    "準備済み: Ship&co 候補は 17 件です。",
    "反映済み: Qwen本部判断を反映済みのものが 2 件あります。"
  ],
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
    "api_unresolved": "2",
    "api_mainline_blockers": "0",
    "api_headline": "今すぐの発送・集荷は shipping.html で固定済みです。Ship&co と YBM 返信は2段目です。",
    "api_detail": "メルカリは メルカリBiz配送 + 送り状印刷 + ヤマト集荷、BASEは BASE標準 かんたん発送 で進めます。待たないもの: YBM For Developers 返信 / Ship&co 国内 carrier 設定 / Ship&co API の live orders 疎通。",
    "api_stoplines_preview": "Ship&co carrier / ヤマト開発API"
  },
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
        "note": "BASE標準 かんたん発送 / 公式プリンタレス候補 / BASE準備可 33件 を前提に、注文画面 -> ヤマト集荷 -> 発送完了 の 1件通しを証跡化する",
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
        "note": "BASE準備可 33件 / Ship&co候補 33件",
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
      "next_step": "BASE準備可 33件 を前提に、注文画面 -> ヤマト集荷 -> 発送完了 の 1件通しを証跡化する",
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
      "headline": "メルカリ公開中 9件 / BASE公開 3件 / 売価合計 ¥13,540 / 平均 ¥1,504",
      "note": "0円仕入れ前提で、今は known fee だけを引いています。送料・梱包材・Ship&co月額按分はまだ差し引いていません。",
      "stats": [
        {
          "label": "メルカリ公開中",
          "value": "9件",
          "tone": "green"
        },
        {
          "label": "売価合計",
          "value": "¥13,540",
          "tone": "blue"
        },
        {
          "label": "平均売価",
          "value": "¥1,504",
          "tone": "purple"
        },
        {
          "label": "価格未設定",
          "value": "0件",
          "tone": "yellow"
        }
      ],
      "items": [
        {
          "tone": "blue",
          "label": "BASE live 商品",
          "note": "3件。BOX-001-ITEM-0022, BOX-001-ITEM-0026, BOX-001-ITEM-0001 は admin search / 商品一覧で公開確認済み。",
          "href": "./channel_listings.html"
        },
        {
          "tone": "green",
          "label": "メルカリ公開中の送料前ざっくり",
          "note": "メルカリShops の fee_rate 9-12% を差し引くと、売価合計 ¥13,540 は 送料前で ¥11,915〜¥12,321。",
          "href": "./channel_listings.html"
        },
        {
          "tone": "blue",
          "label": "BASE標準 かんたん発送の参考",
          "note": "メルカリ公開中平均 ¥1,504 なら、既知固定費後は ¥1,365。集荷ならさらに -¥80、実送料は別。",
          "href": "./routing.html"
        },
        {
          "tone": "purple",
          "label": "BASE + Ship&co の参考",
          "note": "メルカリ公開中平均 ¥1,504 なら、既知固定費後は ¥1,343。実送料と月額1,100円の按分は別。",
          "href": "./routing.html"
        },
        {
          "tone": "gray",
          "label": "価格整備の残り",
          "note": "価格未設定 0件 / 価格あり下書き 22件 / 相場あり 4件",
          "href": "./channel_listings.html"
        }
      ]
    },
    "alerts": [
      {
        "severity": "orange",
        "key": "2件",
        "title": "発送API / 認証に未設定が残っています",
        "note": "Ship&co carrier / ヤマト開発API",
        "href": "./shipping.html"
      },
      {
        "severity": "orange",
        "key": "21件",
        "title": "写真セット組み直しが必要です",
        "note": "FRONT/BACK/CODE の写真が別商品で混ざっているため、正しい3枚セットに直す必要があります。",
        "href": "./ops.html"
      },
      {
        "severity": "orange",
        "key": "26件",
        "title": "販路ルーティングで人確認が必要です",
        "note": "公開可否 23件 / 画像確認 2件",
        "href": "./routing.html"
      }
    ]
  },
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
      "href": "./shipping.html",
      "is_priority": false,
      "is_official": false,
      "is_fallback": false
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
      "next_step": "実注文1件で 注文画面 -> 集荷 -> 発送完了 の証跡を残す",
      "href": "./routing.html",
      "is_priority": true,
      "is_official": true,
      "is_fallback": false
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
      "next_step": "実注文1件で 注文取込 -> 送り状 -> 集荷予約 -> 発送済み反映 を記録する",
      "href": "./routing.html",
      "is_priority": false,
      "is_official": false,
      "is_fallback": false
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
      "href": "./routing.html",
      "is_priority": false,
      "is_official": false,
      "is_fallback": true
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
      "href": "./routing.html",
      "is_priority": false,
      "is_official": false,
      "is_fallback": false
    }
  ],
  "items": [
    {
      "商品ID": "PRD-BOX-001-002",
      "下書きID": "DRF-BOX-001-002",
      "管理番号": "BOX-001-ITEM-0002",
      "主販路": "メルカリShops",
      "メルカリ本線": "停止",
      "メルカリ投入条件": "停止",
      "画像ゲート": "実物のみで可",
      "外部EC": "停止",
      "BASE同期条件": "停止",
      "共通配送": "停止",
      "Ship&co条件": "停止",
      "メルカリ配送": "",
      "人確認": "要",
      "人確認理由": "precision guard: 色違い / 型番違い / サイズ違い / セット違い / 別商品mix / 停止条件あり / Qwen HQ判断: 比較画像照合担当 / actual-only固定優先",
      "低コストAI作業": "商品特定再調査",
      "AI次アクション": "実物のみで進める / 比較画像は後追い",
      "ルーティング状態": "HQ判断済み",
      "更新時刻": "2026-04-21 23:08:31 JST",
      "メモ": "name=保冷クーラーバッグ ネイビー ショルダー付 / publish_ok=確認待ち / draft_status=下書き / image_state=actual-only固定 / 現写真では1商品に断定不能 / image_ready=実物あり / 調査画像候補あり / delivery=小型軽量 / precision_guard=review_required / guard_reasons=色違い / 型番違い / サイズ違い / セット違い / 別商品mix / qwen_hq=actual-only固定優先 / 2026-04-21 current truth: actual-only固定。比較画像なしでも実物写真のみで進める。"
    },
    {
      "商品ID": "PRD-BOX-001-019",
      "下書きID": "DRF-BOX-001-019",
      "管理番号": "BOX-001-ITEM-0019",
      "主販路": "メルカリShops",
      "メルカリ本線": "一時取り下げ",
      "メルカリ投入条件": "一時取り下げ",
      "画像ゲート": "実物のみで可",
      "外部EC": "空き板維持",
      "BASE同期条件": "停止",
      "共通配送": "停止",
      "Ship&co条件": "停止",
      "メルカリ配送": "メルカリBiz配送 + 送り状印刷 + ヤマト集荷",
      "人確認": "例外時のみ",
      "人確認理由": "DD判断で一時取り下げ中",
      "低コストAI作業": "停止",
      "AI次アクション": "空き板を維持",
      "ルーティング状態": "一時停止",
      "更新時刻": "2026-04-21 23:08:31 JST",
      "メモ": "name=ポロベア キャンバス トートバッグ POLO BEAR LAUREN / publish_ok=確認待ち / draft_status=一時取り下げ / image_state=比較画像候補あり / exact-match保留 / image_ready=実物あり / 調査画像候補あり / delivery=小型軽量 / precision_guard=clear / inventory_status=一時取り下げ"
    },
    {
      "商品ID": "PRD-BOX-001-003",
      "下書きID": "DRF-BOX-001-003",
      "管理番号": "BOX-001-ITEM-0003",
      "主販路": "メルカリShops",
      "メルカリ本線": "出品準備中",
      "メルカリ投入条件": "公開可否確認待ち",
      "画像ゲート": "実物のみで可",
      "外部EC": "BASE準備可",
      "BASE同期条件": "同期準備可",
      "共通配送": "Ship&co候補",
      "Ship&co条件": "送り状共通化候補",
      "メルカリ配送": "メルカリBiz配送 + 送り状印刷 + ヤマト集荷",
      "人確認": "要",
      "人確認理由": "公開可否未確定",
      "低コストAI作業": "公開前チェック",
      "AI次アクション": "人確認後にメルカリ投入",
      "ルーティング状態": "人確認待ち",
      "更新時刻": "2026-04-21 23:08:31 JST",
      "メモ": "name=YUGYUG サングラス ブラック/グレー ケース付き / publish_ok=確認待ち / draft_status=下書き / image_state=actual-only固定 / 比較画像なし / image_ready=実物あり / 調査画像候補あり / delivery=小型軽量 / image_policy=actual-only / precision_guard=clear"
    },
    {
      "商品ID": "PRD-BOX-001-007",
      "下書きID": "DRF-BOX-001-007",
      "管理番号": "BOX-001-ITEM-0007",
      "主販路": "メルカリShops",
      "メルカリ本線": "出品準備中",
      "メルカリ投入条件": "公開可否確認待ち",
      "画像ゲート": "実物のみで可",
      "外部EC": "BASE準備可",
      "BASE同期条件": "同期準備可",
      "共通配送": "Ship&co候補",
      "Ship&co条件": "送り状共通化候補",
      "メルカリ配送": "メルカリBiz配送 + 送り状印刷 + ヤマト集荷",
      "人確認": "要",
      "人確認理由": "公開可否未確定",
      "低コストAI作業": "公開前チェック",
      "AI次アクション": "人確認後にメルカリ投入",
      "ルーティング状態": "人確認待ち",
      "更新時刻": "2026-04-21 23:08:31 JST",
      "メモ": "name=GIOVANA Tシャツ ベージュ 2XL / publish_ok=確認待ち / draft_status=下書き / image_state=actual-only固定 / 比較画像なし / image_ready=実物あり / 調査画像候補あり / delivery=小型軽量 / image_policy=actual-only / precision_guard=clear"
    },
    {
      "商品ID": "PRD-BOX-001-013",
      "下書きID": "DRF-BOX-001-013",
      "管理番号": "BOX-001-ITEM-0013",
      "主販路": "メルカリShops",
      "メルカリ本線": "出品準備中",
      "メルカリ投入条件": "公開可否確認待ち",
      "画像ゲート": "画像OK",
      "外部EC": "BASE準備可",
      "BASE同期条件": "同期準備可",
      "共通配送": "Ship&co候補",
      "Ship&co条件": "送り状共通化候補",
      "メルカリ配送": "メルカリBiz配送 + 送り状印刷 + ヤマト集荷",
      "人確認": "要",
      "人確認理由": "公開可否未確定",
      "低コストAI作業": "公開前チェック",
      "AI次アクション": "人確認後にメルカリ投入",
      "ルーティング状態": "人確認待ち",
      "更新時刻": "2026-04-21 23:08:31 JST",
      "メモ": "name=WOOSHIN LABOTTACH FOREHEAD FOCUSED PATCH 18枚入り / publish_ok=公開待ち / draft_status=公開待ち / image_state=100%同一確認済み / 候補1枚確保 / image_ready=実物あり / 調査画像候補あり / delivery=小型軽量 / precision_guard=clear"
    },
    {
      "商品ID": "PRD-BOX-001-015",
      "下書きID": "DRF-BOX-001-015",
      "管理番号": "BOX-001-ITEM-0015",
      "主販路": "メルカリShops",
      "メルカリ本線": "出品準備中",
      "メルカリ投入条件": "公開可否確認待ち",
      "画像ゲート": "実物のみで可",
      "外部EC": "BASE準備可",
      "BASE同期条件": "同期準備可",
      "共通配送": "Ship&co候補",
      "Ship&co条件": "送り状共通化候補",
      "メルカリ配送": "メルカリBiz配送 + 送り状印刷 + ヤマト集荷",
      "人確認": "要",
      "人確認理由": "公開可否未確定",
      "低コストAI作業": "公開前チェック",
      "AI次アクション": "人確認後にメルカリ投入",
      "ルーティング状態": "人確認待ち",
      "更新時刻": "2026-04-21 23:08:31 JST",
      "メモ": "name=Llink 靴下 5足セット ボーダー パステル / publish_ok=確認待ち / draft_status=下書き / image_state=actual-only固定 / 比較画像なし / image_ready=実物あり / 調査画像候補あり / delivery=小型軽量 / image_policy=actual-only / precision_guard=clear"
    },
    {
      "商品ID": "PRD-BOX-001-016",
      "下書きID": "DRF-BOX-001-016",
      "管理番号": "BOX-001-ITEM-0016",
      "主販路": "メルカリShops",
      "メルカリ本線": "出品準備中",
      "メルカリ投入条件": "公開可否確認待ち",
      "画像ゲート": "実物のみで可",
      "外部EC": "BASE準備可",
      "BASE同期条件": "同期準備可",
      "共通配送": "Ship&co候補",
      "Ship&co条件": "送り状共通化候補",
      "メルカリ配送": "メルカリBiz配送 + 送り状印刷 + ヤマト集荷",
      "人確認": "要",
      "人確認理由": "公開可否未確定",
      "低コストAI作業": "公開前チェック",
      "AI次アクション": "人確認後にメルカリ投入",
      "ルーティング状態": "人確認待ち",
      "更新時刻": "2026-04-21 23:08:31 JST",
      "メモ": "name=ZERUI 靴下 5足セット パステル 蝶リボン / publish_ok=確認待ち / draft_status=下書き / image_state=actual-only固定 / 比較画像なし / image_ready=実物あり / 調査画像候補あり / delivery=小型軽量 / image_policy=actual-only / precision_guard=clear"
    },
    {
      "商品ID": "PRD-BOX-001-018",
      "下書きID": "DRF-BOX-001-018",
      "管理番号": "BOX-001-ITEM-0018",
      "主販路": "メルカリShops",
      "メルカリ本線": "出品準備中",
      "メルカリ投入条件": "公開可否確認待ち",
      "画像ゲート": "実物のみで可",
      "外部EC": "BASE準備可",
      "BASE同期条件": "同期準備可",
      "共通配送": "Ship&co候補",
      "Ship&co条件": "送り状共通化候補",
      "メルカリ配送": "メルカリBiz配送 + 送り状印刷 + ヤマト集荷",
      "人確認": "要",
      "人確認理由": "公開可否未確定",
      "低コストAI作業": "公開前チェック",
      "AI次アクション": "人確認後にメルカリ投入",
      "ルーティング状態": "人確認待ち",
      "更新時刻": "2026-04-21 23:08:31 JST",
      "メモ": "name=SWEETBOY 子供パーカー ネイビー×イエロー 130 / publish_ok=確認待ち / draft_status=下書き / image_state=actual-only固定 / 比較画像なし / image_ready=実物あり / 調査画像候補あり / delivery=小型軽量 / image_policy=actual-only / precision_guard=clear"
    },
    {
      "商品ID": "PRD-BOX-001-020",
      "下書きID": "DRF-BOX-001-020",
      "管理番号": "BOX-001-ITEM-0020",
      "主販路": "メルカリShops",
      "メルカリ本線": "出品準備中",
      "メルカリ投入条件": "公開可否確認待ち",
      "画像ゲート": "実物のみで可",
      "外部EC": "BASE準備可",
      "BASE同期条件": "同期準備可",
      "共通配送": "Ship&co候補",
      "Ship&co条件": "送り状共通化候補",
      "メルカリ配送": "メルカリBiz配送 + 送り状印刷 + ヤマト集荷",
      "人確認": "要",
      "人確認理由": "公開可否未確定",
      "低コストAI作業": "公開前チェック",
      "AI次アクション": "人確認後にメルカリ投入",
      "ルーティング状態": "人確認待ち",
      "更新時刻": "2026-04-21 23:08:31 JST",
      "メモ": "name=首サポーター カバー付き グレー M HJ-GY-M / publish_ok=確認待ち / draft_status=下書き / image_state=actual-only固定 / 比較画像なし / image_ready=実物あり / 調査画像候補あり / delivery=小型軽量 / image_policy=actual+comparison-if-exact / precision_guard=clear"
    },
    {
      "商品ID": "PRD-BOX-001-022",
      "下書きID": "DRF-BOX-001-022",
      "管理番号": "BOX-001-ITEM-0022",
      "主販路": "メルカリShops",
      "メルカリ本線": "出品準備中",
      "メルカリ投入条件": "公開可否確認待ち",
      "画像ゲート": "実物のみで可",
      "外部EC": "BASE準備可",
      "BASE同期条件": "同期準備可",
      "共通配送": "Ship&co候補",
      "Ship&co条件": "送り状共通化候補",
      "メルカリ配送": "メルカリBiz配送 + 送り状印刷 + ヤマト集荷",
      "人確認": "要",
      "人確認理由": "公開可否未確定",
      "低コストAI作業": "公開前チェック",
      "AI次アクション": "人確認後にメルカリ投入",
      "ルーティング状態": "人確認待ち",
      "更新時刻": "2026-04-21 23:08:31 JST",
      "メモ": "name=LE BLANC フェムケアPRO 低刺激 デリケートゾーン 150mL / publish_ok=確認待ち / draft_status=下書き / image_state=actual-only固定 / 比較画像なし / image_ready=実物あり / 調査画像候補あり / delivery=小型軽量 / image_policy=actual+comparison-if-exact / precision_guard=clear"
    },
    {
      "商品ID": "PRD-BOX-001-026",
      "下書きID": "DRF-BOX-001-026",
      "管理番号": "BOX-001-ITEM-0026",
      "主販路": "メルカリShops",
      "メルカリ本線": "出品準備中",
      "メルカリ投入条件": "公開可否確認待ち",
      "画像ゲート": "実物のみで可",
      "外部EC": "BASE準備可",
      "BASE同期条件": "同期準備可",
      "共通配送": "Ship&co候補",
      "Ship&co条件": "送り状共通化候補",
      "メルカリ配送": "メルカリBiz配送 + 送り状印刷 + ヤマト集荷",
      "人確認": "要",
      "人確認理由": "公開可否未確定",
      "低コストAI作業": "公開前チェック",
      "AI次アクション": "人確認後にメルカリ投入",
      "ルーティング状態": "人確認待ち",
      "更新時刻": "2026-04-21 23:08:31 JST",
      "メモ": "name=MMC FACE LOTION 240ml / publish_ok=確認待ち / draft_status=下書き / image_state=比較画像候補あり / image_ready=実物あり / 調査画像候補あり / delivery=小型軽量 / image_policy=actual+comparison-if-exact / precision_guard=clear"
    },
    {
      "商品ID": "PRD-BOX-001-031",
      "下書きID": "DRF-BOX-001-031",
      "管理番号": "BOX-001-ITEM-0031",
      "主販路": "メルカリShops",
      "メルカリ本線": "出品準備中",
      "メルカリ投入条件": "公開可否確認待ち",
      "画像ゲート": "実物のみで可",
      "外部EC": "BASE準備可",
      "BASE同期条件": "同期準備可",
      "共通配送": "Ship&co候補",
      "Ship&co条件": "送り状共通化候補",
      "メルカリ配送": "メルカリBiz配送 + 送り状印刷 + ヤマト集荷",
      "人確認": "要",
      "人確認理由": "公開可否未確定",
      "低コストAI作業": "公開前チェック",
      "AI次アクション": "人確認後にメルカリ投入",
      "ルーティング状態": "人確認待ち",
      "更新時刻": "2026-04-21 23:08:31 JST",
      "メモ": "name=LEISURE WEAR ベージュ系レディース衣類 / publish_ok=確認待ち / draft_status=下書き / image_state=actual-only固定 / 比較画像なし / image_ready=実物あり / 調査画像待ち / delivery=小型軽量 / image_policy=actual+comparison-if-exact / precision_guard=clear"
    },
    {
      "商品ID": "PRD-BOX-001-035",
      "下書きID": "DRF-BOX-001-035",
      "管理番号": "BOX-001-ITEM-0035",
      "主販路": "メルカリShops",
      "メルカリ本線": "出品準備中",
      "メルカリ投入条件": "公開可否確認待ち",
      "画像ゲート": "実物のみで可",
      "外部EC": "BASE準備可",
      "BASE同期条件": "同期準備可",
      "共通配送": "Ship&co候補",
      "Ship&co条件": "送り状共通化候補",
      "メルカリ配送": "メルカリBiz配送 + 送り状印刷 + ヤマト集荷",
      "人確認": "要",
      "人確認理由": "公開可否未確定",
      "低コストAI作業": "公開前チェック",
      "AI次アクション": "人確認後にメルカリ投入",
      "ルーティング状態": "人確認待ち",
      "更新時刻": "2026-04-21 23:08:31 JST",
      "メモ": "name=Letshe ベビー前開きロンパース ピンク 110cm / publish_ok=確認待ち / draft_status=下書き / image_state=actual-only固定 / 比較画像なし / image_ready=実物あり / 調査画像候補あり / delivery=小型軽量 / image_policy=actual-only / precision_guard=clear"
    },
    {
      "商品ID": "PRD-BOX-001-038",
      "下書きID": "DRF-BOX-001-038",
      "管理番号": "BOX-001-ITEM-0038",
      "主販路": "メルカリShops",
      "メルカリ本線": "出品準備中",
      "メルカリ投入条件": "公開可否確認待ち",
      "画像ゲート": "実物のみで可",
      "外部EC": "BASE準備可",
      "BASE同期条件": "同期準備可",
      "共通配送": "Ship&co候補",
      "Ship&co条件": "送り状共通化候補",
      "メルカリ配送": "メルカリBiz配送 + 送り状印刷 + ヤマト集荷",
      "人確認": "要",
      "人確認理由": "公開可否未確定",
      "低コストAI作業": "公開前チェック",
      "AI次アクション": "人確認後にメルカリ投入",
      "ルーティング状態": "人確認待ち",
      "更新時刻": "2026-04-21 23:08:31 JST",
      "メモ": "name=裏起毛トップス オフホワイト L / publish_ok=確認待ち / draft_status=下書き / image_state=actual-only固定 / 比較画像なし / image_ready=実物あり / 調査画像候補あり / delivery=小型軽量 / image_policy=actual+comparison-if-exact / precision_guard=clear"
    },
    {
      "商品ID": "PRD-BOX-001-047",
      "下書きID": "DRF-BOX-001-047",
      "管理番号": "BOX-001-ITEM-0047",
      "主販路": "メルカリShops",
      "メルカリ本線": "出品準備中",
      "メルカリ投入条件": "公開可否確認待ち",
      "画像ゲート": "実物のみで可",
      "外部EC": "BASE準備可",
      "BASE同期条件": "同期準備可",
      "共通配送": "Ship&co候補",
      "Ship&co条件": "送り状共通化候補",
      "メルカリ配送": "メルカリBiz配送 + 送り状印刷 + ヤマト集荷",
      "人確認": "要",
      "人確認理由": "公開可否未確定",
      "低コストAI作業": "公開前チェック",
      "AI次アクション": "人確認後にメルカリ投入",
      "ルーティング状態": "人確認待ち",
      "更新時刻": "2026-04-21 23:08:31 JST",
      "メモ": "name=高視認性安全ベスト 蛍光イエロー / publish_ok=確認待ち / draft_status=下書き / image_state=actual-only固定 / 比較画像なし / image_ready=実物あり / 調査画像候補あり / delivery=小型軽量 / image_policy=actual+comparison-if-exact / precision_guard=clear"
    },
    {
      "商品ID": "PRD-BOX-001-050",
      "下書きID": "DRF-BOX-001-050",
      "管理番号": "BOX-001-ITEM-0050",
      "主販路": "メルカリShops",
      "メルカリ本線": "出品準備中",
      "メルカリ投入条件": "公開可否確認待ち",
      "画像ゲート": "実物のみで可",
      "外部EC": "BASE準備可",
      "BASE同期条件": "同期準備可",
      "共通配送": "Ship&co候補",
      "Ship&co条件": "送り状共通化候補",
      "メルカリ配送": "メルカリBiz配送 + 送り状印刷 + ヤマト集荷",
      "人確認": "要",
      "人確認理由": "公開可否未確定",
      "低コストAI作業": "公開前チェック",
      "AI次アクション": "人確認後にメルカリ投入",
      "ルーティング状態": "人確認待ち",
      "更新時刻": "2026-04-21 23:08:31 JST",
      "メモ": "name=CRZ YOGA レギンス 股下24インチ ダークグレー系 / publish_ok=確認待ち / draft_status=下書き / image_state=比較画像候補あり / actual-only固定 / image_ready=実物あり / 調査画像候補あり / delivery=小型軽量 / image_policy=actual+comparison-if-exact / precision_guard=clear"
    },
    {
      "商品ID": "PRD-BOX-A-002",
      "下書きID": "DRF-BOX-A-002",
      "管理番号": "BOX-A-ITEM-0002",
      "主販路": "メルカリShops",
      "メルカリ本線": "出品準備中",
      "メルカリ投入条件": "公開可否確認待ち",
      "画像ゲート": "実物のみで可",
      "外部EC": "BASE準備可",
      "BASE同期条件": "同期準備可",
      "共通配送": "Ship&co候補",
      "Ship&co条件": "送り状共通化候補",
      "メルカリ配送": "メルカリBiz配送 + 送り状印刷 + ヤマト集荷",
      "人確認": "要",
      "人確認理由": "公開可否未確定",
      "低コストAI作業": "公開前チェック",
      "AI次アクション": "人確認後にメルカリ投入",
      "ルーティング状態": "人確認待ち",
      "更新時刻": "2026-04-21 23:08:31 JST",
      "メモ": "name=AllenCOCO 18K Gold Plated Interlocking Rolling Trinity Band Ring 3GOLD サイズ7 / publish_ok=確認待ち / draft_status=下書き / image_state=actual-only固定 / 比較画像なし / image_ready=実物あり / 調査画像待ち / delivery=小型軽量 / image_policy=actual-only / precision_guard=clear"
    },
    {
      "商品ID": "PRD-BOX-001-004",
      "下書きID": "DRF-BOX-001-004",
      "管理番号": "BOX-001-ITEM-0004",
      "主販路": "メルカリShops",
      "メルカリ本線": "停止",
      "メルカリ投入条件": "停止",
      "画像ゲート": "実物のみで可",
      "外部EC": "停止",
      "BASE同期条件": "停止",
      "共通配送": "停止",
      "Ship&co条件": "停止",
      "メルカリ配送": "",
      "人確認": "要",
      "人確認理由": "precision guard: ブランド不一致 / 停止条件あり",
      "低コストAI作業": "商品特定再調査",
      "AI次アクション": "precision guard 解消",
      "ルーティング状態": "停止",
      "更新時刻": "2026-04-21 23:08:31 JST",
      "メモ": "name=IAWNI ショルダーバッグ メッセンジャーバッグ / publish_ok=確認待ち / draft_status=公開済み / image_state=比較画像候補あり / exact-match不可 / image_ready=実物あり / 調査画像候補あり / delivery=小型軽量 / precision_guard=review_required / guard_reasons=ブランド不一致 / inventory_status=販売中 / listingId=2JPSMJHwgfzNjEkYfN8SMv"
    },
    {
      "商品ID": "PRD-BOX-001-005",
      "下書きID": "DRF-BOX-001-005",
      "管理番号": "BOX-001-ITEM-0005",
      "主販路": "メルカリShops",
      "メルカリ本線": "停止",
      "メルカリ投入条件": "停止",
      "画像ゲート": "実物のみで可",
      "外部EC": "停止",
      "BASE同期条件": "停止",
      "共通配送": "停止",
      "Ship&co条件": "停止",
      "メルカリ配送": "",
      "人確認": "要",
      "人確認理由": "precision guard: 柄違い / 停止条件あり",
      "低コストAI作業": "商品特定再調査",
      "AI次アクション": "precision guard 解消",
      "ルーティング状態": "停止",
      "更新時刻": "2026-04-21 23:08:31 JST",
      "メモ": "name=CEEN サルエルパンツ 七分丈 ワイドパンツ / publish_ok=確認待ち / draft_status=公開済み / image_state=比較画像候補あり / exact-match不可 / image_ready=実物あり / 調査画像候補あり / delivery=小型軽量 / precision_guard=review_required / guard_reasons=柄違い / inventory_status=販売中 / listingId=2JPQCYwtnC7WCswDeG37b9"
    },
    {
      "商品ID": "PRD-BOX-001-008",
      "下書きID": "DRF-BOX-001-008",
      "管理番号": "BOX-001-ITEM-0008",
      "主販路": "メルカリShops",
      "メルカリ本線": "停止",
      "メルカリ投入条件": "停止",
      "画像ゲート": "実物のみで可",
      "外部EC": "停止",
      "BASE同期条件": "停止",
      "共通配送": "停止",
      "Ship&co条件": "停止",
      "メルカリ配送": "",
      "人確認": "要",
      "人確認理由": "precision guard: ブランド不一致 / 停止条件あり",
      "低コストAI作業": "商品特定再調査",
      "AI次アクション": "precision guard 解消",
      "ルーティング状態": "停止",
      "更新時刻": "2026-04-21 23:08:31 JST",
      "メモ": "name=オナーファッション 綿100% トップス ミントグリーン 3XL / publish_ok=確認待ち / draft_status=公開済み / image_state=比較画像候補あり / exact-match不可 / image_ready=実物あり / 調査画像待ち / delivery=小型軽量 / precision_guard=review_required / guard_reasons=ブランド不一致 / inventory_status=販売中 / listingId=2JPSMSqu7EDWJu3jDcTo5h"
    },
    {
      "商品ID": "PRD-BOX-001-010",
      "下書きID": "DRF-BOX-001-010",
      "管理番号": "BOX-001-ITEM-0010",
      "主販路": "メルカリShops",
      "メルカリ本線": "停止",
      "メルカリ投入条件": "停止",
      "画像ゲート": "実物のみで可",
      "外部EC": "停止",
      "BASE同期条件": "停止",
      "共通配送": "停止",
      "Ship&co条件": "停止",
      "メルカリ配送": "",
      "人確認": "要",
      "人確認理由": "precision guard: 色違い / 停止条件あり",
      "低コストAI作業": "商品特定再調査",
      "AI次アクション": "precision guard 解消",
      "ルーティング状態": "停止",
      "更新時刻": "2026-04-21 23:08:31 JST",
      "メモ": "name=SHANGCHU シェフユニフォーム ブラック 4XL / publish_ok=確認待ち / draft_status=下書き / image_state=比較画像候補あり / exact-match不可 / image_ready=実物あり / 調査画像候補あり / delivery=小型軽量 / image_policy=actual+comparison-if-exact / precision_guard=review_required / guard_reasons=色違い"
    },
    {
      "商品ID": "PRD-BOX-001-011",
      "下書きID": "DRF-BOX-001-011",
      "管理番号": "BOX-001-ITEM-0011",
      "主販路": "メルカリShops",
      "メルカリ本線": "停止",
      "メルカリ投入条件": "停止",
      "画像ゲート": "実物のみで可",
      "外部EC": "停止",
      "BASE同期条件": "停止",
      "共通配送": "停止",
      "Ship&co条件": "停止",
      "メルカリ配送": "",
      "人確認": "要",
      "人確認理由": "precision guard: 柄違い / 停止条件あり",
      "低コストAI作業": "商品特定再調査",
      "AI次アクション": "precision guard 解消",
      "ルーティング状態": "停止",
      "更新時刻": "2026-04-21 23:08:31 JST",
      "メモ": "name=Dkieta 帽子 レディース ネックカバー付き 花柄日よけ帽子 / publish_ok=確認待ち / draft_status=公開済み / image_state=比較画像候補あり / exact-match不可 / image_ready=実物あり / 調査画像候補あり / delivery=小型軽量 / precision_guard=review_required / guard_reasons=柄違い / inventory_status=販売中 / listingId=2JPSMPEuG8NMB3ZieyYzHU"
    },
    {
      "商品ID": "PRD-BOX-001-012",
      "下書きID": "DRF-BOX-001-012",
      "管理番号": "BOX-001-ITEM-0012",
      "主販路": "メルカリShops",
      "メルカリ本線": "停止",
      "メルカリ投入条件": "停止",
      "画像ゲート": "実物のみで可",
      "外部EC": "停止",
      "BASE同期条件": "停止",
      "共通配送": "停止",
      "Ship&co条件": "停止",
      "メルカリ配送": "",
      "人確認": "要",
      "人確認理由": "precision guard: セット違い / 停止条件あり",
      "低コストAI作業": "商品特定再調査",
      "AI次アクション": "precision guard 解消",
      "ルーティング状態": "停止",
      "更新時刻": "2026-04-21 23:08:31 JST",
      "メモ": "name=gany ガーゼハンカチ 30×30cm 10枚セット 綿100% / publish_ok=公開済み / draft_status=公開済み / image_state=比較画像候補あり / exact-match不可 / image_ready=実物あり / 調査画像候補あり / delivery=小型軽量 / precision_guard=review_required / guard_reasons=セット違い / inventory_status=販売中 / listingId=2JPTBgBM5kND3h8AhVf4bf"
    },
    {
      "商品ID": "PRD-BOX-001-014",
      "下書きID": "DRF-BOX-001-014",
      "管理番号": "BOX-001-ITEM-0014",
      "主販路": "メルカリShops",
      "メルカリ本線": "停止",
      "メルカリ投入条件": "停止",
      "画像ゲート": "実物のみで可",
      "外部EC": "停止",
      "BASE同期条件": "停止",
      "共通配送": "停止",
      "Ship&co条件": "停止",
      "メルカリ配送": "",
      "人確認": "要",
      "人確認理由": "precision guard: 柄違い / セット違い / 停止条件あり",
      "低コストAI作業": "商品特定再調査",
      "AI次アクション": "precision guard 解消",
      "ルーティング状態": "停止",
      "更新時刻": "2026-04-21 23:08:31 JST",
      "メモ": "name=HAYAHARU キッズ靴下 LS4602LS / publish_ok=確認待ち / draft_status=公開済み / image_state=比較画像候補あり / exact-match不可 / image_ready=実物あり / 調査画像候補あり / delivery=小型軽量 / precision_guard=review_required / guard_reasons=柄違い / セット違い / inventory_status=販売中 / listingId=2JPSMLyKhRCgPASDJFH2dc"
    },
    {
      "商品ID": "PRD-BOX-001-032",
      "下書きID": "DRF-BOX-001-032",
      "管理番号": "BOX-001-ITEM-0032",
      "主販路": "メルカリShops",
      "メルカリ本線": "停止",
      "メルカリ投入条件": "停止",
      "画像ゲート": "実物のみで可",
      "外部EC": "停止",
      "BASE同期条件": "停止",
      "共通配送": "停止",
      "Ship&co条件": "停止",
      "メルカリ配送": "",
      "人確認": "要",
      "人確認理由": "precision guard: 色違い / 形状違い / 停止条件あり",
      "低コストAI作業": "商品特定再調査",
      "AI次アクション": "precision guard 解消",
      "ルーティング状態": "停止",
      "更新時刻": "2026-04-21 23:08:31 JST",
      "メモ": "name=ZUCCA CLUB リラックス リカバリー サンダル / publish_ok=公開済み / draft_status=公開済み / image_state=比較画像候補あり / exact-match不可 / image_ready=実物あり / 調査画像候補あり / delivery=小型軽量 / precision_guard=review_required / guard_reasons=色違い / 形状違い / inventory_status=販売中 / listingId=2JPTBkWndxGku2L9EVw4UP"
    },
    {
      "商品ID": "PRD-BOX-001-027",
      "下書きID": "DRF-BOX-001-027",
      "管理番号": "BOX-001-ITEM-0027",
      "主販路": "メルカリShops",
      "メルカリ本線": "停止",
      "メルカリ投入条件": "停止",
      "画像ゲート": "実物のみで可",
      "外部EC": "停止",
      "BASE同期条件": "停止",
      "共通配送": "停止",
      "Ship&co条件": "停止",
      "メルカリ配送": "",
      "人確認": "要",
      "人確認理由": "precision guard: 別商品mix / 停止条件あり",
      "低コストAI作業": "商品特定再調査",
      "AI次アクション": "写真セットを正しい FRONT/BACK/CODE に組み直す",
      "ルーティング状態": "写真セット組み直し必要",
      "更新時刻": "2026-04-21 23:08:31 JST",
      "メモ": "name=MMC FACE LOTION 240ml / publish_ok=確認待ち / draft_status=下書き / image_state=比較画像候補あり / 現写真では1商品に断定不能 / image_ready=実物あり / 調査画像待ち / delivery=小型軽量 / image_policy=actual+comparison-if-exact / precision_guard=review_required / guard_reasons=別商品mix"
    },
    {
      "商品ID": "PRD-BOX-001-028",
      "下書きID": "DRF-BOX-001-028",
      "管理番号": "BOX-001-ITEM-0028",
      "主販路": "メルカリShops",
      "メルカリ本線": "停止",
      "メルカリ投入条件": "停止",
      "画像ゲート": "実物のみで可",
      "外部EC": "停止",
      "BASE同期条件": "停止",
      "共通配送": "停止",
      "Ship&co条件": "停止",
      "メルカリ配送": "",
      "人確認": "要",
      "人確認理由": "precision guard: 別商品mix / 写真セット組み直し必要 / 内容物未確認 / 停止条件あり / Qwen HQ判断: 公開前チェック担当 / needs_split / 写真セット組み直し計画: ローカル写真セット作成済み",
      "低コストAI作業": "商品特定再調査",
      "AI次アクション": "写真セットを正しい FRONT/BACK/CODE に組み直す / 現ID=Zukida維持 / 0028 FRONT保留 / 0029 FRONTは car hook 側として別扱い / 0059白箱は管理表・出品判断の止めどころ確認待ち / 0060SPEEDWOXは管理表・出品判断の止めどころ確認待ち",
      "ルーティング状態": "写真セット組み直し必要",
      "更新時刻": "2026-04-21 23:08:31 JST",
      "メモ": "name=写真セット組み直し候補: Zukida 車用ヘッドレストフック 後部座席用 アルミ合金製 Red / publish_ok=確認待ち / draft_status=下書き / image_state=actual-only固定 / 現写真では1商品に断定不能 / 内容物未確認 / 管理番号再分解待ち / HQレビュー済み / 新管理番号未採番 / image_ready=実物あり / 調査画像待ち / delivery=小型軽量 / precision_guard=review_required / guard_reasons=別商品mix / 写真セット組み直し必要 / 内容物未確認 / qwen_hq=needs_split / 0028 は FRONT=黒/緑の冬小物系、BACK/CODE=Zukida 車用フック Red。現IDは Zukida anchor のまま維持。0053 BACK/CODE は Hello Kitty 側候補。0053 FRONT と 0052 BACK/CODE は白箱 X00197BVHJ の同一箱を live 視認確認済みだが、shared sheet / manifest の正式な写真セット組み直しと Hello Kitty 側の正規性確認が終わるまで新管理番号は発番せず公開不可。0052 FRONT は別物。 / 写真セット組み直しメモ=現IDは Zukida を保持。0028 FRONT は未一致の冬小物系。0029 FRONT は car hook 側として別扱い。0053 FRONT と 0052 BACK/CODE は同一白箱として視認確認済みで、0052 FRONT は別物。0059白箱と0060SPEEDWOXはローカル写真セット作成・特定結果反映済み。"
    },
    {
      "商品ID": "PRD-BOX-001-033",
      "下書きID": "DRF-BOX-001-033",
      "管理番号": "BOX-001-ITEM-0033",
      "主販路": "メルカリShops",
      "メルカリ本線": "停止",
      "メルカリ投入条件": "停止",
      "画像ゲート": "実物のみで可",
      "外部EC": "停止",
      "BASE同期条件": "停止",
      "共通配送": "停止",
      "Ship&co条件": "停止",
      "メルカリ配送": "",
      "人確認": "要",
      "人確認理由": "precision guard: 別商品mix / 停止条件あり",
      "低コストAI作業": "商品特定再調査",
      "AI次アクション": "写真セットを正しい FRONT/BACK/CODE に組み直す",
      "ルーティング状態": "写真セット組み直し必要",
      "更新時刻": "2026-04-21 23:08:31 JST",
      "メモ": "name=jchinjia リュック メンズ ビジネスリュック 男女兼用 カジュアルバッグ おしゃれ トラベルバッグ / publish_ok=確認待ち / draft_status=下書き / image_state=actual-only固定 / 現写真では1商品に断定不能 / image_ready=実物あり / 調査画像候補あり / delivery=小型軽量 / image_policy=actual+comparison-if-exact / precision_guard=review_required / guard_reasons=別商品mix"
    },
    {
      "商品ID": "PRD-BOX-001-045",
      "下書きID": "DRF-BOX-001-045",
      "管理番号": "BOX-001-ITEM-0045",
      "主販路": "メルカリShops",
      "メルカリ本線": "停止",
      "メルカリ投入条件": "停止",
      "画像ゲート": "実物のみで可",
      "外部EC": "停止",
      "BASE同期条件": "停止",
      "共通配送": "停止",
      "Ship&co条件": "停止",
      "メルカリ配送": "",
      "人確認": "要",
      "人確認理由": "precision guard: 別商品mix / 停止条件あり",
      "低コストAI作業": "商品特定再調査",
      "AI次アクション": "写真セットを正しい FRONT/BACK/CODE に組み直す",
      "ルーティング状態": "写真セット組み直し必要",
      "更新時刻": "2026-04-21 23:08:31 JST",
      "メモ": "name=ロゴ刺繍ベースボールキャップ ブラック系 / publish_ok=確認待ち / draft_status=下書き / image_state=actual-only固定 / 現写真では1商品に断定不能 / image_ready=実物あり / 調査画像候補あり / delivery=小型軽量 / image_policy=actual+comparison-if-exact / precision_guard=review_required / guard_reasons=別商品mix"
    },
    {
      "商品ID": "PRD-BOX-001-046",
      "下書きID": "DRF-BOX-001-046",
      "管理番号": "BOX-001-ITEM-0046",
      "主販路": "メルカリShops",
      "メルカリ本線": "停止",
      "メルカリ投入条件": "停止",
      "画像ゲート": "実物のみで可",
      "外部EC": "停止",
      "BASE同期条件": "停止",
      "共通配送": "停止",
      "Ship&co条件": "停止",
      "メルカリ配送": "",
      "人確認": "要",
      "人確認理由": "precision guard: 別商品mix / 停止条件あり",
      "低コストAI作業": "商品特定再調査",
      "AI次アクション": "写真セットを正しい FRONT/BACK/CODE に組み直す",
      "ルーティング状態": "写真セット組み直し必要",
      "更新時刻": "2026-04-21 23:08:31 JST",
      "メモ": "name=ホワイト レディーストップス M / publish_ok=確認待ち / draft_status=下書き / image_state=actual-only固定 / 現写真では1商品に断定不能 / image_ready=実物あり / 調査画像待ち / delivery=小型軽量 / image_policy=actual+comparison-if-exact / precision_guard=review_required / guard_reasons=別商品mix"
    },
    {
      "商品ID": "PRD-BOX-001-054",
      "下書きID": "DRF-BOX-001-054",
      "管理番号": "BOX-001-ITEM-0054",
      "主販路": "メルカリShops",
      "メルカリ本線": "停止",
      "メルカリ投入条件": "停止",
      "画像ゲート": "実物のみで可",
      "外部EC": "停止",
      "BASE同期条件": "停止",
      "共通配送": "停止",
      "Ship&co条件": "停止",
      "メルカリ配送": "",
      "人確認": "要",
      "人確認理由": "precision guard: 別商品mix / 停止条件あり",
      "低コストAI作業": "商品特定再調査",
      "AI次アクション": "写真セットを正しい FRONT/BACK/CODE に組み直す",
      "ルーティング状態": "写真セット組み直し必要",
      "更新時刻": "2026-04-21 23:08:31 JST",
      "メモ": "name=Poperdision ブラック 3XL レディース衣類 / publish_ok=確認待ち / draft_status=下書き / image_state=actual-only固定 / 現写真では1商品に断定不能 / image_ready=実物あり / 調査画像待ち / delivery=小型軽量 / image_policy=actual+comparison-if-exact / precision_guard=review_required / guard_reasons=別商品mix"
    },
    {
      "商品ID": "PRD-BOX-001-055",
      "下書きID": "DRF-BOX-001-055",
      "管理番号": "BOX-001-ITEM-0055",
      "主販路": "メルカリShops",
      "メルカリ本線": "停止",
      "メルカリ投入条件": "停止",
      "画像ゲート": "実物のみで可",
      "外部EC": "停止",
      "BASE同期条件": "停止",
      "共通配送": "停止",
      "Ship&co条件": "停止",
      "メルカリ配送": "",
      "人確認": "要",
      "人確認理由": "precision guard: 別商品mix / 停止条件あり",
      "低コストAI作業": "商品特定再調査",
      "AI次アクション": "写真セットを正しい FRONT/BACK/CODE に組み直す",
      "ルーティング状態": "写真セット組み直し必要",
      "更新時刻": "2026-04-21 23:08:31 JST",
      "メモ": "name=ATIDIMU 美容液 / publish_ok=確認待ち / draft_status=下書き / image_state=比較画像候補あり / 現写真では1商品に断定不能 / image_ready=実物あり / 調査画像候補あり / delivery=小型軽量 / image_policy=actual+comparison-if-exact / precision_guard=review_required / guard_reasons=別商品mix"
    },
    {
      "商品ID": "PRD-BOX-001-057",
      "下書きID": "DRF-BOX-001-057",
      "管理番号": "BOX-001-ITEM-0057",
      "主販路": "メルカリShops",
      "メルカリ本線": "停止",
      "メルカリ投入条件": "停止",
      "画像ゲート": "画像同一性確認待ち",
      "外部EC": "停止",
      "BASE同期条件": "停止",
      "共通配送": "停止",
      "Ship&co条件": "停止",
      "メルカリ配送": "",
      "人確認": "要",
      "人確認理由": "画像同一性未確認 / precision guard: 別商品mix / 停止条件あり",
      "低コストAI作業": "比較画像照合",
      "AI次アクション": "写真セットを正しい FRONT/BACK/CODE に組み直す",
      "ルーティング状態": "写真セット組み直し必要",
      "更新時刻": "2026-04-21 23:08:31 JST",
      "メモ": "name=JODSONE UV LEDネイルランプ Professional Gel Polish LED Nail Dryer Lamp / publish_ok=確認待ち / draft_status=公開済み / image_state=比較画像候補あり / 現写真では1商品に断定不能 / image_ready=実物あり / 調査画像候補あり / delivery=小型軽量 / precision_guard=review_required / guard_reasons=別商品mix / inventory_status=販売中 / listingId=2JPSNX6qATG7NwnssYkshh"
    },
    {
      "商品ID": "PRD-BOX-001-001",
      "下書きID": "DRF-BOX-001-001",
      "管理番号": "BOX-001-ITEM-0001",
      "主販路": "メルカリShops",
      "メルカリ本線": "カテゴリ審査待ち",
      "メルカリ投入条件": "カテゴリ審査待ち",
      "画像ゲート": "画像OK",
      "外部EC": "BASE準備可",
      "BASE同期条件": "同期準備可",
      "共通配送": "Ship&co候補",
      "Ship&co条件": "送り状共通化候補",
      "メルカリ配送": "メルカリBiz配送 + 送り状印刷 + ヤマト集荷",
      "人確認": "例外時のみ",
      "人確認理由": "例外時のみ",
      "低コストAI作業": "審査監視",
      "AI次アクション": "カテゴリ審査反映待ち",
      "ルーティング状態": "審査待ち",
      "更新時刻": "2026-04-21 23:08:31 JST",
      "メモ": "name=WOOSHIN LABOTTACH FOREHEAD FOCUSED PATCH 18枚入り / publish_ok=カテゴリ審査待ち / draft_status=カテゴリ審査待ち / image_state=100%同一確認済み / 候補1枚確保 / image_ready=実物あり / 調査画像候補あり / delivery=小型軽量 / precision_guard=clear"
    },
    {
      "商品ID": "PRD-BOX-001-017",
      "下書きID": "DRF-BOX-001-017",
      "管理番号": "BOX-001-ITEM-0017",
      "主販路": "メルカリShops",
      "メルカリ本線": "停止",
      "メルカリ投入条件": "停止",
      "画像ゲート": "実物のみで可",
      "外部EC": "停止",
      "BASE同期条件": "停止",
      "共通配送": "停止",
      "Ship&co条件": "停止",
      "メルカリ配送": "",
      "人確認": "要",
      "人確認理由": "precision guard: 柄違い / 型番違い / 形状違い / 用途要確認 / 停止条件あり",
      "低コストAI作業": "商品特定再調査",
      "AI次アクション": "用途確認と商品名補正",
      "ルーティング状態": "用途確認待ち",
      "更新時刻": "2026-04-21 23:08:31 JST",
      "メモ": "name=FirstC ティアグッズ記念品ギフト オレンジ丸型ポーチ（用途要確認） / publish_ok=確認待ち / draft_status=下書き / image_state=actual-only固定 / 比較画像なし / 用途要確認 / image_ready=実物あり / 調査画像候補あり / delivery=小型軽量 / image_policy=actual+comparison-if-exact / precision_guard=review_required / guard_reasons=柄違い / 型番違い / 形状違い / 用途要確認"
    },
    {
      "商品ID": "PRD-BOX-001-009",
      "下書きID": "DRF-BOX-001-009",
      "管理番号": "BOX-001-ITEM-0009",
      "主販路": "メルカリShops",
      "メルカリ本線": "公開済み",
      "メルカリ投入条件": "公開済み",
      "画像ゲート": "実物のみで可",
      "外部EC": "BASE準備可",
      "BASE同期条件": "同期準備可",
      "共通配送": "Ship&co候補",
      "Ship&co条件": "送り状共通化候補",
      "メルカリ配送": "メルカリBiz配送 + 送り状印刷 + ヤマト集荷",
      "人確認": "例外時のみ",
      "人確認理由": "例外時のみ",
      "低コストAI作業": "受注監視",
      "AI次アクション": "受注待ち",
      "ルーティング状態": "販売中",
      "更新時刻": "2026-04-21 23:08:31 JST",
      "メモ": "name=Hotaty ピアス 金属アレルギー対応 ギフトBOX付き / publish_ok=確認待ち / draft_status=公開済み / image_state=比較画像候補あり / exact-match保留 / image_ready=実物あり / 調査画像候補あり / delivery=小型軽量 / precision_guard=clear / inventory_status=販売中 / listingId=2JPSMUTrpVNxK6fGZdtMqT"
    }
  ]
};
