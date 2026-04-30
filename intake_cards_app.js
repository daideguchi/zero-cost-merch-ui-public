window.ZERO_COST_INTAKE_CARDS_APP_READY = true;
(function () {
  var ALL_BOXES_KEY = "ALL";
  var snapshot = window.ZERO_COST_INTAKE || {};
  var rolePackets = window.ZERO_COST_ROLE_PACKETS || {};
  var requestedBoxId = "";
  var requestedMid = "";
  try {
    var params = new URLSearchParams(window.location.search);
    requestedBoxId = params.get("box") || "";
    requestedMid = params.get("mid") || "";
  } catch (_) {}
  if (!requestedBoxId && requestedMid && requestedMid.indexOf("-ITEM-") !== -1) {
    requestedBoxId = requestedMid.split("-ITEM-")[0];
  }
  requestedBoxId = String(requestedBoxId || "").trim().toUpperCase() || ALL_BOXES_KEY;

  var search = document.getElementById("search");
  var sortSelect = document.getElementById("sort-select");
  var countPill = document.getElementById("count-pill");
  var selectionPill = document.getElementById("selection-pill");
  var selectVisibleBtn = document.getElementById("select-visible");
  var selectUnresolvedBtn = document.getElementById("select-unresolved");
  var clearSelectionBtn = document.getElementById("clear-selection");
  var bulkAiOnBtn = document.getElementById("bulk-ai-on");
  var bulkAiOffBtn = document.getElementById("bulk-ai-off");
  var bulkPublishOnBtn = document.getElementById("bulk-publish-on");
  var bulkPublishOffBtn = document.getElementById("bulk-publish-off");
  var bulkMessageEl = document.getElementById("bulk-message");
  var filtersEl = document.getElementById("filters");
  var listEl = document.getElementById("item-list");
  var emptyEl = document.getElementById("empty");
  var heroPills = document.getElementById("hero-pills");
  var heroTitle = document.getElementById("hero-title");
  var boxSwitchbar = document.getElementById("box-switchbar");
  var editModal = document.getElementById("edit-modal");
  var editSubtitle = document.getElementById("edit-subtitle");
  var editProductName = document.getElementById("edit-product-name");
  var editListingTitle = document.getElementById("edit-listing-title");
  var editMarketPrice = document.getElementById("edit-market-price");
  var editListingDescription = document.getElementById("edit-listing-description");
  var editManualNote = document.getElementById("edit-manual-note");
  var editSharedNote = document.getElementById("edit-shared-note");
  var editHumanGateNote = document.getElementById("edit-human-gate-note");
  var editMessage = document.getElementById("edit-message");
  var editCancel = document.getElementById("edit-cancel");
  var editSave = document.getElementById("edit-save");
  var copyToast = document.getElementById("copy-toast");

  var activeFilter = "all";
  var sortMode = (sortSelect && sortSelect.value) || "intake";
  var editingMid = "";
  var focusedRequestedMid = false;
  var copyToastTimer = 0;
  var bulkMessageTimer = 0;
  var selectedIds = {};
  var expandedIds = {};
  var inquiryTargets = {};

  (rolePackets.packets || []).forEach(function (packet) {
    if (packet.role_name === "問い合わせ対応担当") {
      (packet.target_ids || []).forEach(function (id) {
        inquiryTargets[String(id || "").toUpperCase()] = true;
      });
    }
  });

  function snapshotBoxList(data) {
    var boxes = Array.isArray(data.boxes) && data.boxes.length ? data.boxes.slice() : [];
    if (!boxes.length && data.box_id) boxes = [data];
    return boxes;
  }

  var boxSnapshots = snapshotBoxList(snapshot);
  var allItems = decorateAllItems(boxSnapshots);

  function escapeHtml(value) {
    return String(value || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function normalizeBoxLane(value) {
    return String(value || "").toLowerCase() === "alphabet" ? "alphabet" : "numeric";
  }

  function inferBoxLane(boxId, rawLane) {
    if (/^BOX-[A-Z]+$/i.test(String(boxId || "").trim())) return "alphabet";
    if (/^BOX-\d+$/i.test(String(boxId || "").trim())) return "numeric";
    return normalizeBoxLane(rawLane);
  }

  function boxCodeFromId(boxId) {
    var match = String(boxId || "").trim().match(/^BOX-([A-Z]+|\d+)$/i);
    return match ? match[1].toUpperCase() : String(boxId || "").trim().toUpperCase();
  }

  function boxDisplayLabel(boxId, rawLabel, rawLane, rawCode) {
    var lane = normalizeBoxLane(rawLane || inferBoxLane(boxId));
    var code = String(rawCode || boxCodeFromId(boxId) || "").trim().toUpperCase();
    var fallback = (lane === "alphabet" ? "英字箱 " : "数字箱 ") + code;
    var label = String(rawLabel || "").trim();
    if (!label || label === boxId) return fallback;
    if (lane === "numeric" && /^box\s*[A-Z]+$/i.test(label)) return fallback;
    if (lane === "alphabet" && /^box\s*\d+$/i.test(label)) return fallback;
    return label;
  }

  function parseDate(value) {
    if (!value) return null;
    var normalized = String(value).replace(/ JST$/, "").replace(/ UTC$/, "").replace(" ", "T");
    var parsed = new Date(normalized);
    return isNaN(parsed.getTime()) ? null : parsed;
  }

  function formatDate(value) {
    var parsed = parseDate(value);
    if (!parsed) return String(value || "");
    return (parsed.getMonth() + 1) + "/" + parsed.getDate() + " " + String(parsed.getHours()).padStart(2, "0") + ":" + String(parsed.getMinutes()).padStart(2, "0");
  }

  function formatPrice(value) {
    if (!value && value !== 0) return "未設定";
    var num = Number(value);
    return isFinite(num) && !isNaN(num) ? "¥" + num.toLocaleString() : String(value);
  }

  function numberFromPrice(value) {
    if (value == null) return null;
    var text = String(value).trim();
    if (!text) return null;
    var cleaned = text.replace(/[^\d.-]/g, "");
    if (!cleaned) return null;
    var parsed = Number(cleaned);
    return isFinite(parsed) && !isNaN(parsed) ? parsed : null;
  }

  function cleanText(value) {
    return String(value || "").replace(/\s+/g, " ").trim();
  }

  function productName(item) {
    return item.product_name || item.display_name || (item.commerce && item.commerce.product_name) || (item.resolved && item.resolved.product_name) || "未特定";
  }

  function requiresAiImagesOk(item) {
    var resolved = item.resolved || {};
    var resolutionStatus = String(resolved.resolution_status || "").trim();
    var resolvedName = String(resolved.product_name || productName(item) || "").trim();
    if (resolutionStatus) return true;
    return Boolean(resolvedName && resolvedName !== "未特定");
  }

  function normalizeHumanGate(item, gateEntry) {
    var gate = gateEntry || item.human_gate || {};
    var requires = requiresAiImagesOk(item);
    var aiImagesOk = Boolean(gate.ai_images_ok);
    var publishOk = Boolean(gate.publish_ok);
    var actualOnlyOk = Boolean(gate.actual_only_ok);
    var hold = Boolean(gate.hold);
    var reasons = [];
    if (hold) {
      reasons.push("保留中");
    } else if (!publishOk) {
      reasons.push("出品OK未確認");
    }
    if (requires && !aiImagesOk && !actualOnlyOk) reasons.push("AI画像未確認");
    var ready = publishOk && !hold && (!requires || aiImagesOk || actualOnlyOk);
    var status;
    if (hold) {
      status = "hold";
    } else if (ready) {
      status = "ready";
    } else if (publishOk && requires && !aiImagesOk && !actualOnlyOk) {
      status = "waiting_ai_images_ok";
    } else if (!publishOk && requires && !aiImagesOk && !actualOnlyOk) {
      status = "waiting_both";
    } else {
      status = "waiting_publish_ok";
    }
    return {
      management_id: String(item.management_id || "").trim().toUpperCase(),
      ai_images_ok: aiImagesOk,
      publish_ok: publishOk,
      actual_only_ok: actualOnlyOk,
      hold: hold,
      requires_ai_images_ok: requires,
      ready: ready,
      status: status,
      reason: reasons.join(" / "),
      reasons: reasons,
      note: String(gate.note || "").trim(),
      ai_images_ok_at: String(gate.ai_images_ok_at || "").trim(),
      publish_ok_at: String(gate.publish_ok_at || "").trim(),
      updated_at: String(gate.updated_at || "").trim(),
      mismatch_reason: String(gate.mismatch_reason || "").trim(),
      action_trail: Array.isArray(gate.action_trail) ? gate.action_trail.slice() : []
    };
  }

  function decorateAllItems(boxes) {
    var rows = [];
    boxes.forEach(function (box, boxIndex) {
      var boxId = String((box && box.box_id) || "").trim().toUpperCase();
      var boxLabel = boxDisplayLabel(boxId, box && box.box_label, box && box.box_lane, box && box.box_code);
      (box.items || []).forEach(function (item, itemIndex) {
        var copy = Object.assign({}, item);
        copy._box_id = boxId;
        copy._box_label = boxLabel;
        copy._box_lane = box && box.box_lane;
        copy._box_code = box && box.box_code;
        copy._box_order = boxIndex;
        copy._item_order = itemIndex;
        copy.human_gate = normalizeHumanGate(copy, copy.human_gate);
        rows.push(copy);
      });
    });
    return rows;
  }

  function currentBoxItems() {
    if (requestedBoxId === ALL_BOXES_KEY) return allItems.slice();
    return allItems.filter(function (item) {
      return String(item._box_id || "").toUpperCase() === requestedBoxId;
    });
  }

  function currentBoxLabel() {
    if (requestedBoxId === ALL_BOXES_KEY) return "全商品";
    var current = boxSnapshots.filter(function (box) {
      return String(box && box.box_id || "").toUpperCase() === requestedBoxId;
    })[0];
    return current
      ? boxDisplayLabel(current.box_id, current.box_label, current.box_lane, current.box_code)
      : requestedBoxId;
  }

  function syncGlobalBoxContext() {
    if (!window.zeroCostSetBoxId) return;
    if (requestedBoxId === ALL_BOXES_KEY) {
      window.zeroCostSetBoxId(ALL_BOXES_KEY, { label: "全商品", updateUrl: false });
      return;
    }
    window.zeroCostSetBoxId(requestedBoxId, { label: currentBoxLabel(), updateUrl: true });
  }

  syncGlobalBoxContext();

  function isLive(item) {
    return String(item.publish_state || (item.commerce && item.commerce.publish_state) || "").trim() === "API公開済み";
  }

  function routePlan(item) {
    return item.route_plan || {};
  }

  function actualPhotoCount(item) {
    return (item.slots || []).filter(function (slot) {
      return slot
        && slot.status === "present"
        && String(slot.slot || "").trim().toUpperCase() !== "CODE";
    }).length;
  }

  function sellAudit(item) {
    var commerce = item.commerce || {};
    var resolved = item.resolved || {};
    var price = numberFromPrice(manualListingPrice(item));
    var guard = String(
      resolved.exact_match_guard_state
      || (item.official && item.official.exact_match_guard_state)
      || item.exact_match_guard_state
      || ""
    ).trim();
    var hasEvidenceUrl = cleanText(commerce.market_source_url || "") !== "";
    var hasActual = actualPhotoCount(item) > 0;
    if (!hasActual) {
      return { state: "blocked", label: "写真不足", reason: "実物写真が不足しています。" };
    }
    if (price == null || price <= 0 || !hasEvidenceUrl) {
      return { state: "blocked", label: "根拠不足", reason: "価格根拠URLをまだ追加できていません。" };
    }
    if (guard === "clear") {
      return { state: "ready", label: "売れる候補", reason: "商品特定と価格根拠がそろっています。" };
    }
    return { state: "review", label: "要精査", reason: "商品特定か比較画像の確認を残しています。" };
  }

  function mediaSets(item) {
    var images = item.comparison_images || item.reference_images || [];
    return {
      official: images.filter(function (img) { return img && img.url && img.source !== "mercari_csv"; }),
      listing: images.filter(function (img) { return img && img.url && img.source === "mercari_csv"; })
    };
  }

  function humanGateLabel(gate) {
    if (gate.hold) return "保留中";
    if (gate.ready && gate.actual_only_ok) return "写真なし出品OK";
    if (gate.ready) return "人確認OK";
    if (gate.status === "waiting_both") return "両方待ち";
    if (gate.status === "waiting_ai_images_ok") return "AI画像確認待ち";
    return "出品OK待ち";
  }

  function gateActionLabel(updateKey) {
    if (updateKey === "human_ai_images_ok") return "AI画像OK";
    if (updateKey === "human_publish_ok") return "出品OK";
    if (updateKey === "human_actual_only_ok") return "写真なし出品";
    if (updateKey === "human_hold") return "保留";
    return String(updateKey || "").trim() || "人確認";
  }

  function gateUpdatesPayload(updateKey, value) {
    var updates = {};
    updates[updateKey] = value;
    if (updateKey === "human_ai_images_ok" && value) {
      updates.human_actual_only_ok = false;
    }
    if (updateKey === "human_publish_ok" && value) {
      updates.human_hold = false;
    }
    if (updateKey === "human_publish_ok" && !value) {
      updates.human_actual_only_ok = false;
      updates.human_hold = false;
    }
    return updates;
  }

  function gateActionMeta(updateKey, value) {
    var meta = {
      action: "gate_toggle",
      label: gateActionLabel(updateKey),
      detail: value ? "ON" : "OFF"
    };
    if (updateKey === "human_ai_images_ok" && value) meta.mismatch_reason = "";
    return meta;
  }

  function bulkGateActionMeta(updateKey, value) {
    var meta = {
      action: "bulk_gate_update",
      label: gateActionLabel(updateKey) + " 一括更新",
      detail: value ? "ON" : "OFF"
    };
    if (updateKey === "human_ai_images_ok" && value) meta.mismatch_reason = "";
    return meta;
  }

  function heroMetrics(rows) {
    var audits = (rows || []).map(sellAudit);
    return {
      total: rows.length,
      ready: audits.filter(function (audit) { return audit.state === "ready"; }).length,
      review: audits.filter(function (audit) { return audit.state === "review"; }).length,
      blocked: audits.filter(function (audit) { return audit.state === "blocked"; }).length,
      pending: rows.filter(function (item) { return !item.human_gate.ready && !isLive(item) && !item.human_gate.hold; }).length,
      hold: rows.filter(function (item) { return item.human_gate.hold && !isLive(item); }).length,
      unresolved: rows.filter(function (item) { return !item.human_gate.requires_ai_images_ok; }).length,
      live: rows.filter(isLive).length
    };
  }

  function summaryFromRows(rows) {
    var prices = [];
    var ready = 0;
    var review = 0;
    var blocked = 0;
    (rows || []).forEach(function(item) {
      var price = numberFromPrice(
        item && item.market_floor_price
        || item && item.listing_price
        || item && item.minimum_price
        || item && item.commerce && (item.commerce.market_floor_price || item.commerce.listing_price)
        || item && item.resolved && item.resolved.price_override
      );
      if (price == null || price <= 0) return;
      prices.push(price);
      var audit = sellAudit(item);
      if (audit.state === "ready") ready += 1;
      else if (audit.state === "review") review += 1;
      else blocked += 1;
    });
    (rows || []).forEach(function(item) {
      var price = numberFromPrice(
        item && item.market_floor_price
        || item && item.listing_price
        || item && item.minimum_price
        || item && item.commerce && (item.commerce.market_floor_price || item.commerce.listing_price)
        || item && item.resolved && item.resolved.price_override
      );
      if (price != null && price > 0) return;
      var audit = sellAudit(item);
      if (audit.state === "ready") ready += 1;
      else if (audit.state === "review") review += 1;
      else blocked += 1;
    });
    prices.sort(function(a, b) { return b - a; });
    var totalValue = prices.reduce(function(sum, price) { return sum + price; }, 0);
    var topSixValue = prices.slice(0, 6).reduce(function(sum, price) { return sum + price; }, 0);
    return {
      pricedItems: prices.length,
      totalValue: totalValue,
      topSixValue: topSixValue,
      averageValue: prices.length ? Math.round(totalValue / prices.length) : 0,
      readyItems: ready,
      reviewItems: review,
      blockedItems: blocked
    };
  }

  var FILTER_META = {
    all: { label: "全部" },
    hold: { label: "保留" },
    waiting_both: { label: "両方待ち" },
    waiting_publish_ok: { label: "出品OK待ち" },
    waiting_ai_images_ok: { label: "AI画像待ち" },
    ready: { label: "出品可" },
    unresolved: { label: "未特定" },
    live: { label: "公開済み" }
  };

  function filterTests() {
    return {
      all: function () { return true; },
      hold: function (item) { return !isLive(item) && item.human_gate.hold; },
      waiting_both: function (item) { return !isLive(item) && item.human_gate.status === "waiting_both"; },
      waiting_publish_ok: function (item) { return !isLive(item) && item.human_gate.status === "waiting_publish_ok"; },
      waiting_ai_images_ok: function (item) { return !isLive(item) && item.human_gate.status === "waiting_ai_images_ok"; },
      ready: function (item) { return !isLive(item) && item.human_gate.ready; },
      unresolved: function (item) { return !item.human_gate.requires_ai_images_ok; },
      live: isLive
    };
  }

  function localLiveBackendOrigin() {
    return "http://127.0.0.1:18777";
  }

  function portalOrigin() {
    if (window.location.protocol === "http:" || window.location.protocol === "https:") {
      return window.location.origin;
    }
    return localLiveBackendOrigin();
  }

  function backendOrigin() {
    var base = String(window.ZERO_COST_API_BASE || window.ZERO_COST_APP_BASE || "").trim().replace(/\/$/, "");
    if (base && base !== "null") return base;
    var origin = portalOrigin().replace(/\/$/, "");
    if (origin === "http://127.0.0.1:18778" || origin === "http://localhost:18778") {
      return localLiveBackendOrigin();
    }
    return origin;
  }

  function apiUrl(path) {
    try {
      return new URL(path, backendOrigin() + "/").toString();
    } catch (_) {
      return backendOrigin() + path;
    }
  }

  function parseJsonResponse(response) {
    return response.text().then(function (text) {
      var data = {};
      try {
        data = text ? JSON.parse(text) : {};
      } catch (_) {
        data = {};
      }
      if (!response.ok || (data.ok === false)) {
        throw new Error((data && data.error) || ("HTTP " + response.status));
      }
      return data;
    });
  }

  function postJson(url, payload) {
    return fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload || {})
    }).then(parseJsonResponse);
  }

  function getJson(url) {
    return fetch(url, { cache: "no-store" }).then(parseJsonResponse);
  }

  function itemUpdateApiUrl() {
    return apiUrl("/api/zero-cost/intake-item/update");
  }

  function itemBulkUpdateApiUrl() {
    return apiUrl("/api/zero-cost/intake-item/bulk-update");
  }

  function itemDeleteApiUrl() {
    return apiUrl("/api/zero-cost/intake-item/delete");
  }

  function humanGatesApiUrl() {
    return apiUrl("/api/zero-cost/human-gates");
  }

  function aiImageToSlotApiUrl() {
    return apiUrl("/api/zero-cost/ai-image/to-slot");
  }

  function itemMoveApiUrl() {
    return apiUrl("/api/zero-cost/intake-item/move");
  }

  function showCopyToast(message) {
    if (!copyToast) return;
    copyToast.textContent = message || "コピーしました";
    copyToast.classList.add("show");
    if (copyToastTimer) window.clearTimeout(copyToastTimer);
    copyToastTimer = window.setTimeout(function () {
      copyToast.classList.remove("show");
    }, 1100);
  }

  function setBulkMessage(message, isError) {
    if (!bulkMessageEl) return;
    bulkMessageEl.textContent = message || "";
    bulkMessageEl.classList.toggle("error", Boolean(isError));
    if (bulkMessageTimer) window.clearTimeout(bulkMessageTimer);
    if (message) {
      bulkMessageTimer = window.setTimeout(function () {
        bulkMessageEl.textContent = "";
        bulkMessageEl.classList.remove("error");
      }, 2200);
    }
  }

  function gateRefreshFeedback(data, savedText) {
    var refresh = data && data.refresh ? data.refresh : null;
    if (!refresh || refresh.triggered === false) {
      return { message: savedText, isError: false };
    }
    if (refresh.ok === false) {
      var reason = String(refresh.error || refresh.failed_step || "").trim();
      return {
        message: savedText + " ただし再計算に失敗しました。" + (reason ? " " + reason : ""),
        isError: true
      };
    }
    if (refresh.summary_line) {
      return {
        message: savedText + " " + String(refresh.summary_line || "").trim(),
        isError: false
      };
    }
    return { message: savedText, isError: false };
  }

  function copyText(value) {
    value = String(value || "");
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(value);
    }
    var textarea = document.createElement("textarea");
    textarea.value = value;
    textarea.setAttribute("readonly", "readonly");
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    return Promise.resolve();
  }

  function padSequence(value) {
    var parsed = Number(value);
    if (!isFinite(parsed) || isNaN(parsed)) return "----";
    return String(Math.max(0, parsed)).padStart(4, "0");
  }

  function manualListingTitle(item) {
    var commerce = item.commerce || {};
    var title = item.listing_title || commerce.listing_title || productName(item);
    return cleanText(title).slice(0, 80);
  }

  function manualListingPrice(item) {
    var commerce = item.commerce || {};
    var resolved = item.resolved || {};
    return item.manual_market_price
      || item.listing_price
      || commerce.listing_price
      || commerce.market_floor_price
      || resolved.price_override
      || item.price_override
      || "";
  }

  function priceDeltaLabel(chosenNum, floorNum) {
    if (chosenNum == null || floorNum == null) return "比較不可";
    var diff = chosenNum - floorNum;
    if (diff === 0) return "相場下限と同額";
    return diff > 0
      ? "相場下限より +" + formatPrice(diff).replace(/^¥/, "¥")
      : "相場下限より -" + formatPrice(Math.abs(diff)).replace(/^¥/, "¥");
  }

  function manualListingPriceEvidence(item) {
    var commerce = item.commerce || {};
    var resolved = item.resolved || {};
    var chosenValue = manualListingPrice(item);
    var listingValue = item.listing_price || commerce.listing_price || "";
    var marketFloorValue = commerce.market_floor_price || "";
    var overrideValue = resolved.price_override || item.price_override || "";
    var manualValue = item.manual_market_price || "";
    var chosenNum = numberFromPrice(chosenValue);
    var listingNum = numberFromPrice(listingValue);
    var marketFloorNum = numberFromPrice(marketFloorValue);
    var overrideNum = numberFromPrice(overrideValue);
    var manualNum = numberFromPrice(manualValue);
    var sourceLabel = cleanText(commerce.market_source_label || "");
    var sourceUrl = cleanText(commerce.market_source_url || "");
    var sampleUrls = Array.isArray(commerce.sample_urls)
      ? commerce.sample_urls.map(cleanText).filter(Boolean)
      : [];
    var checkedAt = cleanText(commerce.market_checked_at || "");
    var note = cleanText(commerce.market_note || "");
    var popularityLabel = cleanText(item.popularity_proxy_label || commerce.popularity_proxy_label || "");
    var popularityReason = cleanText(item.popularity_proxy_reason || commerce.popularity_proxy_reason || "");
    var chosenFrom = "未設定";
    var chosenText = String(chosenValue || "");
    if (manualNum !== null && chosenText === String(manualValue)) chosenFrom = "手動で調整した価格";
    else if (listingNum !== null && chosenText === String(listingValue)) chosenFrom = "出品候補価格";
    else if (marketFloorNum !== null && chosenText === String(marketFloorValue)) chosenFrom = "相場下限";
    else if (overrideNum !== null && chosenText === String(overrideValue)) chosenFrom = "price_override";
    else if (chosenNum !== null) chosenFrom = "保存済みの価格";

    var externalConfirmed = Boolean(sourceUrl);
    var fallbackOnly = /fallback|override|仮置き|参考価格/i.test(sourceLabel + " " + note);
    var levelClass = "safe";
    var levelLabel = "相場確認あり";
    var headline = "相場URL確認済みの参考価格";
    var summary = "確認URLを見た上での参考価格です。出品前の再確認負荷は低めです。";
    if (chosenNum === null) {
      levelClass = "danger";
      levelLabel = "要調査";
      headline = "価格未設定";
      summary = "まだ価格が入っていません。相場確認をしてから出品価格を決めてください。";
    } else if (!externalConfirmed && (fallbackOnly || marketFloorNum !== null || listingNum !== null || overrideNum !== null)) {
      levelClass = "warning";
      levelLabel = "仮置き";
      headline = "内部データで仮置き中";
      summary = "外部相場URLがまだ無いため、いまは price_override / 出品候補価格 / 相場下限 のどれかを採用しています。最終出品前にメルカリ画面で再確認してください。";
    } else if (!externalConfirmed) {
      levelClass = "danger";
      levelLabel = "根拠弱め";
      headline = "根拠が弱い価格";
      summary = "価格は入っていますが、相場根拠が薄い状態です。出品前に相場確認を推奨します。";
    }

    var lines = [
      { label: "採用元", text: chosenFrom },
      (marketFloorNum !== null && chosenNum !== null) ? { label: "相場との差", text: priceDeltaLabel(chosenNum, marketFloorNum) } : null,
      sourceLabel ? { label: "確認元", text: sourceLabel } : null,
      checkedAt ? { label: "確認日時", text: checkedAt } : null,
      sourceUrl ? { label: "確認URL", text: "確認ページを開く", href: sourceUrl } : null,
      popularityReason ? { label: "人気理由", text: popularityReason } : null,
      (!sourceUrl && chosenNum !== null) ? { label: "最終確認", text: "外部相場URLが無いので、出品前にメルカリ画面で再確認" } : null
    ].filter(Boolean);
    if (sampleUrls.length) {
      lines.push({ label: "比較URL数", text: String(sampleUrls.length) + "件" });
      sampleUrls.slice(0, 3).forEach(function(url, index) {
        if (url && url !== sourceUrl) {
          lines.push({ label: "参考URL " + String(index + 1), text: "比較ページを開く", href: url });
        }
      });
    }

    return {
      levelClass: levelClass,
      levelLabel: levelLabel,
      headline: headline,
      summary: summary,
      note: note,
      metrics: [
        { label: "採用価格", value: formatPrice(chosenValue) },
        { label: "相場下限", value: marketFloorNum !== null ? formatPrice(marketFloorValue) : "未取得" },
        { label: "出品候補", value: listingNum !== null ? formatPrice(listingValue) : "未設定" },
        { label: "人気見立て", value: popularityLabel || "未評価" }
      ],
      lines: lines
    };
  }

  function manualListingDescription(item) {
    var commerce = item.commerce || {};
    var existing = item.listing_description || item.description || commerce.listing_description || commerce.description || "";
    if (existing) return String(existing).trim();
    var lines = [
      item.management_id || "",
      manualListingTitle(item),
      "参考価格: " + formatPrice(manualListingPrice(item)),
      "実物写真のみ掲載。比較画像は使用していません。",
      "写真に写っているものが全てです。",
      "状態・付属品・サイズ感は写真で確認してください。"
    ];
    var evidence = item.resolved && Array.isArray(item.resolved.evidence) ? item.resolved.evidence.slice(0, 5).join(" / ") : "";
    if (evidence) lines.push("確認できた表示: " + evidence);
    return lines.filter(Boolean).join("\n");
  }

  function manualListingData(item) {
    var commerce = item.commerce || {};
    var priceEvidence = manualListingPriceEvidence(item);
    return {
      title: manualListingTitle(item),
      description: manualListingDescription(item),
      price: manualListingPrice(item),
      priceSource: priceEvidence.headline,
      priceEvidence: priceEvidence,
      popularityLabel: item.popularity_proxy_label || commerce.popularity_proxy_label || "",
      popularityReason: item.popularity_proxy_reason || commerce.popularity_proxy_reason || ""
    };
  }

  function manualListingBundle(listing) {
    return [
      "タイトル",
      listing.title || "",
      "",
      "価格",
      String(listing.price || ""),
      "",
      "説明文",
      listing.description || ""
    ].join("\n").trim();
  }

  function manualListingPriceEvidenceHtml(evidence) {
    if (!evidence) return "";
    return '<div class="manual-evidence">'
      + '<div class="manual-evidence-head">'
      + '<div class="manual-evidence-title">価格根拠</div>'
      + '<span class="manual-evidence-badge ' + escapeHtml(evidence.levelClass || "") + '">' + escapeHtml(evidence.levelLabel || "") + '</span>'
      + "</div>"
      + '<div class="manual-evidence-summary">' + escapeHtml(evidence.summary || "") + "</div>"
      + '<div class="manual-evidence-grid">'
      + (evidence.metrics || []).map(function(metric) {
        return '<div class="manual-evidence-cell">'
          + '<div class="manual-evidence-cell-label">' + escapeHtml(metric.label || "") + "</div>"
          + '<div class="manual-evidence-cell-value">' + escapeHtml(metric.value || "") + "</div>"
          + "</div>";
      }).join("")
      + "</div>"
      + ((evidence.lines || []).length
        ? '<div class="manual-evidence-list">'
          + (evidence.lines || []).map(function(line) {
            return '<div class="manual-evidence-line">'
              + '<span class="manual-evidence-line-label">' + escapeHtml(line.label || "") + "</span>"
              + '<span class="manual-evidence-line-value">'
              + (line.href
                ? '<a class="manual-evidence-link" href="' + escapeHtml(line.href) + '" target="_blank" rel="noopener noreferrer">' + escapeHtml(line.text || "") + "</a>"
                : escapeHtml(line.text || ""))
              + "</span>"
              + "</div>";
          }).join("")
          + "</div>"
        : "")
      + (evidence.note ? '<div class="manual-evidence-note">' + escapeHtml(evidence.note) + "</div>" : "")
      + "</div>";
  }

  function actualPhotosHtml(item) {
    var slotHtml = (item.slots || []).map(function (slot) {
      if (slot.status === "present" && slot.resident_url) {
        var isColorVariant = slot.source_type === "ai_color_variant";
        var colorBadge = isColorVariant
          ? '<span class="slot-source-badge color-variant">\uD83C\uDFA8 \u8272\u9055\u3044AI</span>'
            + (slot.reason ? '<span class="slot-variant-detail">' + escapeHtml(String(slot.reason).slice(0, 20)) + (slot.detail && slot.detail !== slot.reason ? ' · ' + escapeHtml(String(slot.detail).slice(0, 20)) : '') + '</span>' : '')
          : '';
        return '<div class="actual-card' + (isColorVariant ? ' color-variant-slot' : '') + '">'
          + '<img src="' + escapeHtml(slot.resident_url) + '" alt="' + escapeHtml(slot.slot || "") + '" loading="lazy">'
          + '<span class="media-label">' + escapeHtml(slot.slot || "") + '</span>'
          + colorBadge
          + '<div class="slot-actions">'
          + '<button type="button" class="slot-action-btn" data-replace-slot="' + escapeHtml(item.management_id || '') + '" data-slot-key="' + escapeHtml(slot.slot || '') + '">\uD83D\uDD04 \u5165\u308c\u66ff\u3048</button>'
          + '<button type="button" class="slot-action-btn danger" data-delete-slot="' + escapeHtml(item.management_id || '') + '" data-slot-key="' + escapeHtml(slot.slot || '') + '">\u2715 \u524a\u9664</button>'
          + '</div></div>';
      }
      return '<div class="actual-missing">'
        + '<button type="button" class="slot-add-btn" data-add-slot="' + escapeHtml(item.management_id || '') + '" data-slot-key="' + escapeHtml(slot.slot || '') + '">+ \u5199\u771f\u3092\u8ffd\u52a0</button>'
        + '</div>';
    }).join("");
    /* extra photo add affordance — always visible, appends a new PHOTO_XX slot */
    var nextPhotoNum = 1;
    (item.slots || []).forEach(function (s) {
      var m = String(s.slot || '').match(/^PHOTO_(\d+)$/i);
      if (m) {
        var n = parseInt(m[1], 10);
        if (n >= nextPhotoNum) nextPhotoNum = n + 1;
      }
    });
    var nextKey = 'PHOTO_' + String(nextPhotoNum).padStart(2, '0');
    slotHtml += '<div class="actual-missing actual-extra-add">'
      + '<button type="button" class="slot-add-btn" data-add-extra-slot="' + escapeHtml(item.management_id || '') + '" data-slot-key="' + escapeHtml(nextKey) + '">\uff0b \u5199\u771f\u8ffd\u52a0</button>'
      + '</div>';
    return slotHtml;
  }

  function aiPhotosGridHtml(item) {
    var media = mediaSets(item);
    var official = media.official;
    var html = '';
    if (official.length) {
      html += official.map(function (img, i) {
        var label = img.label || ('比較-' + (i + 1));
        return '<div class="ai-thumb">'
          + '<img src="' + escapeHtml(img.url) + '" alt="' + escapeHtml(label) + '" loading="lazy">'
          + '<span class="media-label">' + escapeHtml(label) + '</span>'
          + '<div class="slot-actions">'
          + '<button type="button" class="slot-action-btn danger" data-delete-comparison="' + escapeHtml(item.management_id || '') + '" data-image-url="' + escapeHtml(img.url) + '">✕ 削除</button>'
          + '</div></div>';
      }).join('');
    } else {
      html += '<div class="media-missing">AI画像なし</div>';
    }
    html += '<div class="actual-missing" style="aspect-ratio:1;min-height:auto;height:100px">'
      + '<button type="button" class="slot-add-btn" data-add-comparison="' + escapeHtml(item.management_id || '') + '" style="font-size:10px;padding:4px 8px">+ 画像追加</button>'
      + '</div>';
    return html;
  }

  function actualPhotosGridHtml(item) {
    return actualPhotosHtml(item);
  }

  function supplementalPageUrl(item) {
    return (item.official && item.official.supplemental_url)
      || (item.resolved && item.resolved.supplemental_url)
      || "";
  }

  function officialHeroHtml(img) {
    if (!img || !img.url) return '<div class="media-missing">AI画像がまだありません</div>';
    return '<div class="official-hero"><img src="' + escapeHtml(img.url) + '" alt="' + escapeHtml(img.label || "AI画像") + '" loading="lazy"><span class="media-label">' + escapeHtml(img.label || "AI画像") + "</span></div>";
  }

  function officialThumbHtml(img) {
    return '<div class="official-thumb"><img src="' + escapeHtml(img.url) + '" alt="' + escapeHtml(img.label || "AI画像") + '" loading="lazy"><span class="media-label">' + escapeHtml(img.label || "AI画像") + "</span></div>";
  }

  function officialGalleryHtml(item) {
    var media = mediaSets(item);
    var official = media.official;
    var hero = official[0];
    var thumbs = official.slice(1);
    var pageUrl = (item.official && item.official.official_page_url) || (item.resolved && item.resolved.official_page_url) || (hero && hero.page_url) || "";
    var extraPageUrl = supplementalPageUrl(item);
    var parts = [];
    parts.push('<div class="official-gallery">');
    parts.push(officialHeroHtml(hero));
    if (thumbs.length) {
      parts.push('<div class="official-thumb-grid">' + thumbs.map(officialThumbHtml).join("") + "</div>");
    }
    parts.push("</div>");
    if (official.length) {
      parts.push('<div class="source-row">');
      if (pageUrl) parts.push('<a class="link-chip" href="' + escapeHtml(pageUrl) + '" target="_blank" rel="noopener noreferrer">公式ページ →</a>');
      if (extraPageUrl) parts.push('<a class="link-chip" href="' + escapeHtml(extraPageUrl) + '" target="_blank" rel="noopener noreferrer">関連ページ →</a>');
      parts.push("</div>");
    }
    return parts.join("");
  }

  function itemActionLabel(item) {
    return item.human_gate.ready ? "出品詳細へ" : "商品を見る";
  }

  function humanActionStampHtml(item) {
    var gate = item.human_gate || {};
    var parts = [];
    if (gate.ai_images_ok && gate.ai_images_ok_at) {
      parts.push('<span class="human-action-stamp ai-ok">\u2705 AI\u753b\u50cfOK <span class="stamp-who">\u4eba\u9593\u78ba\u8a8d</span> <span class="stamp-when">' + escapeHtml(formatDate(gate.ai_images_ok_at)) + '</span></span>');
    }
    if (gate.publish_ok && gate.publish_ok_at) {
      parts.push('<span class="human-action-stamp publish-ok">\u2705 \u51fa\u54c1OK <span class="stamp-who">\u4eba\u9593\u78ba\u8a8d</span> <span class="stamp-when">' + escapeHtml(formatDate(gate.publish_ok_at)) + '</span></span>');
    }
    /* action_trail: most-recent first, cap at 4 */
    var trail = (gate.action_trail || []).slice().reverse().slice(0, 4);
    if (trail.length) {
      var trailItems = trail.map(function (entry) {
        var label = escapeHtml(entry.label || entry.action || '');
        var detail = entry.detail ? ' <span class="trail-detail">(' + escapeHtml(String(entry.detail).slice(0, 30)) + ')</span>' : '';
        var when = entry.at ? ' <span class="stamp-when">' + escapeHtml(formatDate(entry.at)) + '</span>' : '';
        return '<span class="action-trail-entry">' + label + detail + when + '</span>';
      }).join('');
      parts.push('<div class="action-trail-row">' + trailItems + '</div>');
    }
    if (!parts.length) return '';
    return '<div class="human-action-trail">' + parts.join('') + '</div>';
  }

  /* compact action trail for inline card display (last 3) */
  function actionTrailHtml(item) {
    var gate = item.human_gate || {};
    var trail = (gate.action_trail || []).slice().reverse().slice(0, 3);
    if (!trail.length) return '';
    var entries = trail.map(function (entry) {
      var label = escapeHtml(entry.label || entry.action || '');
      var detail = entry.detail ? ' <span class="trail-detail">(' + escapeHtml(String(entry.detail).slice(0, 24)) + ')</span>' : '';
      var when = entry.at ? ' <span class="stamp-when">' + escapeHtml(formatDate(entry.at)) + '</span>' : '';
      return '<span class="action-trail-entry">' + label + detail + when + '</span>';
    }).join('');
    return '<div class="action-trail-row compact">' + entries + '</div>';
  }

  function gateSectionHtml(item) {
    var gate = item.human_gate;
    var needsAi = gate.requires_ai_images_ok;
    var statusClass = gate.ready ? "ready" : "pending";
    var gateReason = gate.reason || (gate.ready ? "publish へ進めます" : "");
    var aiChecked = needsAi && gate.ai_images_ok;
    return '<section class="gate-section">'
      + '<div class="gate-head">'
      + '<div><div class="gate-title">人確認</div><div class="gate-caption">' + escapeHtml(gateReason || "人確認を入れてください") + "</div></div>"
      + '<div class="status-stack">'
      + '<span class="status-chip ' + statusClass + '">' + escapeHtml(humanGateLabel(gate)) + "</span>"
      + (isLive(item) ? '<span class="status-chip live">公開済み</span>' : "")
      + "</div></div>"
      + '<div class="gate-controls">'
      + '<label class="gate-toggle' + (needsAi ? "" : " disabled") + '">'
      + '<input type="checkbox" data-gate-toggle="human_ai_images_ok" data-mid="' + escapeHtml(item.management_id || "") + '"' + (aiChecked ? " checked" : "") + (needsAi ? "" : " disabled") + ">"
      + '<span><span class="gate-toggle-title">AI画像OK</span><span class="gate-toggle-note">' + escapeHtml(needsAi ? "AIが集めた画像と実物が合っている" : "未特定のため不要") + "</span></span>"
      + "</label>"
      + '<label class="gate-toggle primary">'
      + '<input type="checkbox" data-gate-toggle="human_publish_ok" data-mid="' + escapeHtml(item.management_id || "") + '"' + (gate.publish_ok ? " checked" : "") + ">"
      + '<span><span class="gate-toggle-title">出品OK</span><span class="gate-toggle-note">この内容で出してよい</span></span>'
      + "</label>"
      + "</div>"
      + humanActionStampHtml(item)
      + '<div class="gate-meta">'
      + '<span>' + escapeHtml(gate.updated_at ? ("更新 " + formatDate(gate.updated_at)) : "未確認") + "</span>"
      + (gate.note ? '<span>メモ: ' + escapeHtml(gate.note) + "</span>" : "")
      + "</div>"
      + "</section>";
  }

  function manualListingHtml(item) {
    var listing = manualListingData(item);
    var bundle = manualListingBundle(listing);
    return '<section class="manual-listing">'
      + '<div class="manual-head"><div class="manual-title">手動出品用</div><div class="manual-note">通常メルカリなど、APIなしで入力する時に使います</div></div>'
      + '<div class="manual-actions">'
      + '<button class="manual-action primary" type="button" data-copy-value="' + escapeHtml(bundle) + '">全部コピー</button>'
      + '<button class="manual-action" type="button" data-copy-value="' + escapeHtml(listing.title) + '">タイトル</button>'
      + '<button class="manual-action" type="button" data-copy-value="' + escapeHtml(String(listing.price || "")) + '">価格</button>'
      + '<button class="manual-action" type="button" data-copy-value="' + escapeHtml(listing.description) + '">説明文</button>'
      + '<button class="manual-action edit" type="button" data-edit-mid="' + escapeHtml(item.management_id || "") + '">編集</button>'
      + "</div>"
      + '<div class="manual-grid">'
      + '<div class="manual-field"><div class="manual-label"><span>タイトル</span><button class="copy-btn mobile-secondary" type="button" data-copy-value="' + escapeHtml(listing.title) + '">コピー</button></div><div class="manual-value">' + escapeHtml(listing.title || "未設定") + "</div></div>"
      + '<div class="manual-field"><div class="manual-label"><span>相場・価格</span><button class="copy-btn mobile-secondary" type="button" data-copy-value="' + escapeHtml(String(listing.price || "")) + '">コピー</button></div><div class="manual-value manual-price">' + escapeHtml(formatPrice(listing.price)) + '</div><div class="manual-source">' + escapeHtml(listing.priceSource || "") + '</div>' + manualListingPriceEvidenceHtml(listing.priceEvidence) + "</div>"
      + "</div>"
      + '<div class="manual-field"><div class="manual-label"><span>説明文</span><button class="copy-btn mobile-secondary" type="button" data-copy-value="' + escapeHtml(listing.description) + '">コピー</button></div><div class="manual-value manual-desc">' + escapeHtml(listing.description || "未設定") + "</div></div>"
      + "</section>";
  }

  function statusInfo(item) {
    var mid = String(item.management_id || "").toUpperCase();
    if (inquiryTargets[mid]) return "問い合わせ";
    if (isLive(item)) return "公開済み";
    if (!item.human_gate.requires_ai_images_ok) return "未特定";
    return "識別済み";
  }

  function selectionChecked(item) {
    return Boolean(selectedIds[String(item.management_id || "").toUpperCase()]);
  }

  function renderItem(item) {
    var commerce = item.commerce || {};
    var listingUrl = commerce.public_listing_url || item.public_listing_url || "";
    var sequence = padSequence(item.sequence);
    var actualCount = (item.slots || []).length;
    var aiCount = mediaSets(item).official.length;
    var officialPageUrl = (item.official && item.official.official_page_url) || (item.resolved && item.resolved.official_page_url) || "";
    var actionHref = "./ops.html?box=" + encodeURIComponent(item._box_id || requestedBoxId || "") + "&mid=" + encodeURIComponent(item.management_id || "");
    var shortName = productName(item);
    if (shortName.length > 45) shortName = shortName.slice(0, 44) + '\u2026';
    var gate = item.human_gate;
    var gateChipClass = gate.hold ? 'hold' : (gate.ready ? 'ready' : 'pending');
    var sell = sellAudit(item);
    var mid = String(item.management_id || '').trim().toUpperCase();
    var isExpanded = Boolean(expandedIds[mid]);
    var cardClass = isExpanded ? 'item-card expanded' : 'item-card';
    var needsAi = gate.requires_ai_images_ok;
    var aiChecked = needsAi && gate.ai_images_ok;
    var aiMismatch = needsAi && !gate.ai_images_ok && !gate.actual_only_ok && !gate.hold && (gate.mismatch_reason || gate.ai_images_ok_at);
    if (aiMismatch) cardClass += ' ai-mismatch';
    if (gate.hold) cardClass += ' is-hold';

    return '<div class="' + cardClass + '" data-mid="' + escapeHtml(item.management_id || '') + '">'
      + '<div class="item-shell">'

      /* ── header: No. + name + status ── */
      + '<div class="item-sequence-row" style="margin-bottom:4px">'
      + '<label class="select-toggle" onclick="event.stopPropagation()"><input type="checkbox" data-select-mid="' + escapeHtml(item.management_id || '') + '"' + (selectionChecked(item) ? ' checked' : '') + '>\u9078\u629e</label>'
      + '<span class="sequence-chip primary">No.' + escapeHtml(sequence) + '</span>'
      + '<span class="sequence-chip">' + escapeHtml(item._box_label || item._box_id || '') + '</span>'
      + '<span class="status-chip sell-' + escapeHtml(sell.state) + '">' + escapeHtml(sell.label) + '</span>'
      + '<span class="status-chip ' + gateChipClass + '">' + escapeHtml(humanGateLabel(gate)) + '</span>'
      + (gate.actual_only_ok && !gate.hold ? '<span class="status-chip actual-only">\u5b9f\u7269\u306e\u307f</span>' : '')
      + (isLive(item) ? '<span class="status-chip live">\u516c\u958b\u6e08\u307f</span>' : '')
      + (commerce.popularity_proxy_label ? '<span class="sequence-chip">\u4eba\u6c17\u5ea6(\u4eee) ' + escapeHtml(commerce.popularity_proxy_label) + '</span>' : '')
      + '</div>'
      + '<div class="item-name" style="font-size:14px;font-weight:900;margin-bottom:8px">' + escapeHtml(shortName) + '</div>'

      /* ── PHOTOS: always visible (main purpose) ── */
      + '<div class="photo-compare-section">'
      + '<div class="compare-col">'
      + '<div class="compare-label ai">\ud83e\udd16 AI\u753b\u50cf\uff08' + aiCount + '\u679a\uff09</div>'
      + '<div class="ai-photo-grid">' + aiPhotosGridHtml(item) + '</div>'
      + '</div>'
      + '<div class="compare-col">'
      + '<div class="compare-label actual">\ud83d\udcf7 \u5b9f\u7269\u5199\u771f\uff08' + actualCount + '\u679a\uff09</div>'
      + '<div class="actual-photo-grid">' + actualPhotosGridHtml(item) + '</div>'
      + '</div>'
      + '</div>'

      /* ── verdict bar: 写真なし出品(primary) / 写真合ってる / AI違う / 保留 / 全解除 ── */
      + '<div class="photo-verdict">'
      /* 1. 写真なし出品 — primary default path */
      + (gate.actual_only_ok
        ? '<div class="human-verdict-stamp verdict-actual-only-stamp">\ud83d\udcf7 \u5199\u771f\u306a\u3057\u51fa\u54c1OK \u2014 <span class="stamp-who">\u78ba\u8a8d\u6e08</span>' + (gate.publish_ok_at ? ' <span class="stamp-when">' + escapeHtml(formatDate(gate.publish_ok_at)) + '</span>' : '') + '</div>'
        : '<button class="verdict-btn verdict-actual-only big" type="button" data-actual-only="' + escapeHtml(item.management_id || '') + '">\ud83d\udcf7 \u5199\u771f\u306a\u3057\u51fa\u54c1</button>')
      /* 2. 写真合ってる */
      + (gate.ai_images_ok && gate.ai_images_ok_at
        ? '<div class="human-verdict-stamp">\u2705 \u5199\u771f\u5408\u3063\u3066\u308b \u2014 <span class="stamp-who">\u4eba\u9593\u78ba\u8a8d\u6e08</span> <span class="stamp-when">' + escapeHtml(formatDate(gate.ai_images_ok_at)) + '</span></div>'
        : '<button class="verdict-btn verdict-ok big" type="button" data-correct-ai="' + escapeHtml(item.management_id || '') + '">\u2705 \u5199\u771f\u5408\u3063\u3066\u308b</button>')
      /* 3. AI画像が違う */
      + '<button class="verdict-btn big" type="button" data-wrong-ai="' + escapeHtml(item.management_id || '') + '">\u274c AI\u753b\u50cf\u304c\u9055\u3046</button>'
      /* 4. 保留 */
      + (gate.hold
        ? '<span class="hold-badge">\u23f8 \u4fdd\u7559\u4e2d <button type="button" class="hold-clear-btn" data-uncheck-all="' + escapeHtml(item.management_id || '') + '">\u89e3\u9664</button></span>'
        : '<button class="verdict-btn verdict-hold big" type="button" data-hold="' + escapeHtml(item.management_id || '') + '">\u23f8 \u4fdd\u7559</button>')
      /* 5. チェック全解除 */
      + '<button class="verdict-btn uncheck-all" type="button" data-uncheck-all="' + escapeHtml(item.management_id || '') + '">\u21ba \u30c1\u30a7\u30c3\u30af\u5168\u89e3\u9664</button>'
      + '</div>'
      + (gate.mismatch_reason && !gate.ai_images_ok && !gate.actual_only_ok && !gate.hold
        ? '<div class="mismatch-reason-inline"><span class="mismatch-reason-badge">\u274c \u4e0d\u4e00\u81f4: <strong>' + escapeHtml(gate.mismatch_reason) + '</strong></span></div>'
        : '')
      + '<div class="gate-inline">'
      + '<label class="gate-pill' + (aiChecked ? ' checked' : '') + '"><input type="checkbox" data-gate-toggle="human_ai_images_ok" data-mid="' + escapeHtml(item.management_id || '') + '"' + (aiChecked ? ' checked' : '') + (needsAi ? '' : ' disabled') + '> AI\u753b\u50cfOK</label>'
      + '<label class="gate-pill' + (gate.publish_ok ? ' checked' : '') + '"><input type="checkbox" data-gate-toggle="human_publish_ok" data-mid="' + escapeHtml(item.management_id || '') + '"' + (gate.publish_ok ? ' checked' : '') + '> \u51fa\u54c1OK</label>'
      + '<button class="detail-toggle-btn" type="button" onclick="toggleItemCard(this)">' + (isExpanded ? '\u25b2 \u8a73\u7d30\u3092\u9589\u3058\u308b' : '\u25bc \u8a73\u7d30') + '</button>'
      + '</div>'
      + actionTrailHtml(item)

      /* ── detail-extra: hidden by default, toggled ── */
      + '<div class="detail-extra">'

      /* actions row */
      + '<div class="compact-actions">'
      + '<a class="item-action" href="' + actionHref + '">' + itemActionLabel(item) + '</a>'
      + '<button class="item-action secondary" type="button" data-edit-mid="' + escapeHtml(item.management_id || '') + '">\u7de8\u96c6</button>'
      + '<button class="item-action secondary" type="button" data-move-mid="' + escapeHtml(item.management_id || '') + '">\u2b50 \u7bb1\u79fb\u52d5</button>'
      + (officialPageUrl ? '<a class="link-chip" href="' + escapeHtml(officialPageUrl) + '" target="_blank" rel="noopener noreferrer">\u516c\u5f0f\u2192</a>' : '')
      + (listingUrl ? '<a class="link-chip" href="' + escapeHtml(listingUrl) + '" target="_blank" rel="noopener noreferrer">\u51fa\u54c1\u2192</a>' : '')
      + '<button class="item-action danger" type="button" data-delete-mid="' + escapeHtml(item.management_id || '') + '">\u524a\u9664</button>'
      + '</div>'

      /* manual listing (toggle, hidden by default) */
      + manualListingHtml(item)

      + '</div>'
      + '</div>'
      + '</div>';
  }

  function sortItems(rows) {
    var copy = rows.slice();
    copy.sort(function (a, b) {
      if (sortMode === "updated") {
        var leftUpdated = parseDate((a.commerce && a.commerce.updated_at) || a.edited_at || (a.human_gate && a.human_gate.updated_at) || "");
        var rightUpdated = parseDate((b.commerce && b.commerce.updated_at) || b.edited_at || (b.human_gate && b.human_gate.updated_at) || "");
        return (rightUpdated ? rightUpdated.getTime() : 0) - (leftUpdated ? leftUpdated.getTime() : 0);
      }
      if (sortMode === "id") {
        return String(a.management_id || "").localeCompare(String(b.management_id || ""));
      }
      var leftIntake = parseDate(a.intake_added_at);
      var rightIntake = parseDate(b.intake_added_at);
      if (leftIntake && rightIntake && leftIntake.getTime() !== rightIntake.getTime()) {
        return leftIntake.getTime() - rightIntake.getTime();
      }
      if (a._box_order !== b._box_order) return a._box_order - b._box_order;
      return Number(a.sequence || 0) - Number(b.sequence || 0);
    });
    return copy;
  }

  function filteredItems() {
    var tests = filterTests();
    var baseItems = currentBoxItems();
    var query = String((search && search.value) || "").trim().toUpperCase();
    return baseItems.filter(function (item) {
      if (!tests[activeFilter](item)) return false;
      if (!query) return true;
      return [
        item.management_id,
        productName(item),
        item._box_label,
        item.next_action,
        item.manual_note,
        item.qwen_hq_review_note,
        item.human_gate && item.human_gate.note,
        item.human_gate && item.human_gate.reason,
        item.human_gate && item.human_gate.mismatch_reason,
        item.publish_state,
        routePlan(item)["メモ"]
      ].join(" ").toUpperCase().indexOf(query) !== -1;
    });
  }

  function buildCounts() {
    var tests = filterTests();
    var counts = {};
    var base = currentBoxItems();
    Object.keys(tests).forEach(function (key) {
      counts[key] = base.filter(tests[key]).length;
    });
    return counts;
  }

  function renderHero() {
    var rows = currentBoxItems();
    var metrics = heroMetrics(rows);
    var summary = summaryFromRows(rows);
    heroTitle.textContent = currentBoxLabel() + " / " + rows.length + "件";
    heroPills.innerHTML = [
      '<span class="hero-pill">総数 ' + metrics.total + '件</span>',
      '<span class="hero-pill">売れる候補 ' + metrics.ready + '件</span>',
      '<span class="hero-pill">要精査 ' + metrics.review + '件</span>',
      metrics.blocked ? '<span class="hero-pill" style="color:#b91c1c;border-color:rgba(185,28,28,.22)">根拠不足 ' + metrics.blocked + '件</span>' : '',
      '<span class="hero-pill">人確認待ち ' + metrics.pending + '件</span>',
      metrics.hold ? '<span class="hero-pill" style="color:#b45309;border-color:rgba(217,119,6,.3)">保留 ' + metrics.hold + '件</span>' : '',
      '<span class="hero-pill">未特定 ' + metrics.unresolved + '件</span>',
      '<span class="hero-pill">公開済み ' + metrics.live + '件</span>',
      summary.pricedItems ? '<span class="hero-pill hero-pill-money">相場下限 ' + formatPrice(summary.totalValue) + '</span>' : '',
      summary.pricedItems ? '<span class="hero-pill hero-pill-money">上位6点 ' + formatPrice(summary.topSixValue) + '</span>' : ''
    ].filter(Boolean).join("");
    emptyEl.textContent = rows.length ? "該当する商品がありません" : "まだ商品がありません";
  }

  function renderFilters() {
    var counts = buildCounts();
    filtersEl.innerHTML = Object.keys(FILTER_META).map(function (key) {
      return '<button type="button" class="filter-card' + (activeFilter === key ? " active" : "") + '" data-filter="' + key + '">'
        + '<div class="filter-label">' + escapeHtml(FILTER_META[key].label) + "</div>"
        + '<div class="filter-count">' + (counts[key] || 0) + "件</div></button>";
    }).join("");
  }

  function renderBoxSwitch() {
    if (!boxSwitchbar) return;
    if (!boxSnapshots.length) {
      boxSwitchbar.style.display = "none";
      return;
    }
    boxSwitchbar.style.display = "";
    function boxSummary(items) {
      var summary = summaryFromRows(items);
      var parts = [];
      if (summary.pricedItems) parts.push(formatPrice(summary.totalValue));
      if (summary.readyItems) parts.push("売候補 " + summary.readyItems);
      if (!parts.length && summary.reviewItems) parts.push("要精査 " + summary.reviewItems);
      return parts.length ? parts.join(" / ") : "未集計";
    }
    var parts = [
      '<a class="box-switch' + (requestedBoxId === ALL_BOXES_KEY ? " active" : "") + '" href="./intake_cards.html?box=' + encodeURIComponent(ALL_BOXES_KEY) + '"><span>全商品</span><span class="box-switch-count">' + allItems.length + '点</span><span class="box-switch-total">' + boxSummary(allItems) + "</span></a>"
    ];
    boxSnapshots.forEach(function (box) {
      var boxId = String(box && box.box_id || "").trim();
      var label = boxDisplayLabel(boxId, box && box.box_label, box && box.box_lane, box && box.box_code);
      var count = Array.isArray(box && box.items) ? box.items.length : 0;
      parts.push('<a class="box-switch' + (boxId === requestedBoxId ? " active" : "") + '" href="./intake_cards.html?box=' + encodeURIComponent(boxId) + '"><span>' + escapeHtml(label) + '</span><span class="box-switch-count">' + count + '点</span><span class="box-switch-total">' + boxSummary(box.items || []) + "</span></a>");
    });
    boxSwitchbar.innerHTML = parts.join("");
  }

  function updateSelectionPill() {
    var selectedCount = Object.keys(selectedIds).filter(function (mid) { return selectedIds[mid]; }).length;
    if (selectionPill) selectionPill.textContent = "選択 " + selectedCount + "件";
  }

  var PAGE_SIZE = 10;
  var currentPage = 1;

  function renderList() {
    var rows = sortItems(filteredItems());
    if (!rows.length) {
      listEl.innerHTML = "";
      emptyEl.style.display = "";
      countPill.textContent = currentBoxLabel() + " / 0件";
      updateSelectionPill();
      return;
    }
    emptyEl.style.display = "none";
    var totalPages = Math.ceil(rows.length / PAGE_SIZE);
    if (currentPage > totalPages) currentPage = totalPages;
    if (currentPage < 1) currentPage = 1;
    var start = (currentPage - 1) * PAGE_SIZE;
    var pageRows = rows.slice(start, start + PAGE_SIZE);
    listEl.innerHTML = pageRows.map(renderItem).join("");
    countPill.textContent = currentBoxLabel() + " / " + rows.length + "件" + (totalPages > 1 ? " (" + currentPage + "/" + totalPages + ")" : "");
    renderPagination(totalPages);
    updateSelectionPill();
    focusRequestedMid();
  }

  function renderPagination(totalPages) {
    var existing = document.getElementById('pagination-bar');
    if (existing) existing.remove();
    if (totalPages <= 1) return;
    var bar = document.createElement('div');
    bar.id = 'pagination-bar';
    bar.className = 'pagination-bar';
    var buttons = '';
    buttons += '<button type="button" class="page-btn" data-page="prev"' + (currentPage <= 1 ? ' disabled' : '') + '>\u25c0 前</button>';
    for (var i = 1; i <= totalPages; i++) {
      buttons += '<button type="button" class="page-btn' + (i === currentPage ? ' active' : '') + '" data-page="' + i + '">' + i + '</button>';
    }
    buttons += '<button type="button" class="page-btn" data-page="next"' + (currentPage >= totalPages ? ' disabled' : '') + '>次 \u25b6</button>';
    bar.innerHTML = buttons;
    listEl.parentNode.insertBefore(bar, listEl.nextSibling);
  }

  document.addEventListener('click', function (e) {
    var btn = e.target.closest('#pagination-bar .page-btn');
    if (!btn) return;
    var val = btn.getAttribute('data-page');
    if (val === 'prev') { currentPage--; }
    else if (val === 'next') { currentPage++; }
    else { currentPage = parseInt(val, 10) || 1; }
    renderList();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  function focusRequestedMid() {
    if (focusedRequestedMid || !requestedMid) return;
    var cards = listEl.querySelectorAll("[data-mid]");
    for (var i = 0; i < cards.length; i += 1) {
      if (cards[i].getAttribute("data-mid") === requestedMid) {
        focusedRequestedMid = true;
        cards[i].classList.add("deep-linked");
        cards[i].scrollIntoView({ block: "center" });
        break;
      }
    }
  }

  function renderAll() {
    currentPage = 1;
    renderBoxSwitch();
    renderHero();
    renderFilters();
    renderList();
  }

  function findItemByMid(mid) {
    mid = String(mid || "").trim().toUpperCase();
    return allItems.filter(function (item) {
      return String(item && item.management_id || "").trim().toUpperCase() === mid;
    })[0] || null;
  }

  function patchHumanGate(mid, gatePayload) {
    var item = findItemByMid(mid);
    if (!item) return;
    item.human_gate = normalizeHumanGate(item, gatePayload);
    item.commerce = item.commerce || {};
    item.commerce.human_gate_status = item.human_gate.status;
    item.commerce.human_gate_ready = item.human_gate.ready;
    item.commerce.human_gate_reason = item.human_gate.reason;
  }

  function redirectToFresh(mid) {
    var href = "./intake_cards.html?box=" + encodeURIComponent(requestedBoxId || ALL_BOXES_KEY);
    if (mid) href += "&mid=" + encodeURIComponent(mid);
    href += "&fresh=" + encodeURIComponent(String(Date.now()));
    window.location.href = href;
  }

  function setEditMessage(message, isError) {
    editMessage.textContent = message || "";
    editMessage.classList.toggle("error", Boolean(isError));
  }

  function openEditModal(mid) {
    var item = findItemByMid(mid);
    if (!item) return;
    var listing = manualListingData(item);
    editingMid = String(item.management_id || "").trim();
    editSubtitle.textContent = editingMid;
    editProductName.value = productName(item) === "未特定" ? "" : productName(item);
    editListingTitle.value = listing.title;
    editMarketPrice.value = listing.price;
    editListingDescription.value = listing.description;
    editManualNote.value = String(item.manual_note || "");
    editSharedNote.value = String(item.shared_sheet_note || "");
    editHumanGateNote.value = String((item.human_gate && item.human_gate.note) || "");
    editSave.disabled = false;
    editCancel.disabled = false;
    setEditMessage("", false);
    editModal.hidden = false;
    editProductName.focus();
  }

  function closeEditModal() {
    editModal.hidden = true;
    editingMid = "";
    setEditMessage("", false);
  }

  function saveEditModal() {
    var item = findItemByMid(editingMid);
    if (!item) return;
    editSave.disabled = true;
    editCancel.disabled = true;
    setEditMessage("保存しています。", false);
    postJson(itemUpdateApiUrl(), {
      box_id: item._box_id || "",
      management_id: editingMid,
      updates: {
        product_name: editProductName.value,
        listing_title: editListingTitle.value,
        manual_market_price: editMarketPrice.value,
        listing_description: editListingDescription.value,
        manual_note: editManualNote.value,
        shared_sheet_note: editSharedNote.value,
        human_gate_note: editHumanGateNote.value
      },
      action_meta: { action: "edit_save", label: "\u7de8\u96c6\u4fdd\u5b58" }
    }).then(function () {
      setEditMessage("保存しました。画面を更新します。", false);
      redirectToFresh(editingMid);
    }).catch(function (error) {
      setEditMessage("保存に失敗しました。 " + (error && error.message ? error.message : ""), true);
      editSave.disabled = false;
      editCancel.disabled = false;
    });
  }

  function deleteItem(mid) {
    var item = findItemByMid(mid);
    if (!item) return;
    var confirmed = window.confirm(String(item.management_id || mid) + " を削除します。\n写真ファイルは消さず、登録一覧とmanifestから外します。\n\n" + productName(item));
    if (!confirmed) return;
    postJson(itemDeleteApiUrl(), {
      box_id: item._box_id || "",
      management_id: item.management_id || mid,
      reason: "UIから削除"
    }).then(function () {
      redirectToFresh("");
    }).catch(function (error) {
      window.alert("削除に失敗しました。 " + (error && error.message ? error.message : ""));
    });
  }

  function applyBulkUpdate(updateKey, value) {
    var selected = Object.keys(selectedIds).filter(function (mid) { return selectedIds[mid]; });
    if (!selected.length) {
      setBulkMessage("先に商品を選択してください。", true);
      return;
    }
    if (updateKey === "human_ai_images_ok") {
      selected = selected.filter(function (mid) {
        var item = findItemByMid(mid);
        return item && item.human_gate.requires_ai_images_ok;
      });
      if (!selected.length) {
        setBulkMessage("選択中は未特定のみなので、AI画像OK は不要です。", true);
        return;
      }
    }
    setBulkMessage("更新しています。", false);
    postJson(itemBulkUpdateApiUrl(), {
      management_ids: selected,
      updates: gateUpdatesPayload(updateKey, value),
      action_meta: bulkGateActionMeta(updateKey, value)
    }).then(function (data) {
      (data.items || []).forEach(function (row) {
        patchHumanGate(row.management_id, row.human_gate || {});
      });
      renderAll();
      var feedback = gateRefreshFeedback(data, (data.changed_ids || selected).length + "件更新しました。");
      setBulkMessage(feedback.message, feedback.isError);
    }).catch(function (error) {
      setBulkMessage("一括更新に失敗しました。 " + (error && error.message ? error.message : ""), true);
    });
  }

  function syncHumanGates() {
    getJson(humanGatesApiUrl()).then(function (data) {
      (data.items || []).forEach(function (gate) {
        patchHumanGate(gate.management_id, gate);
      });
      renderAll();
    }).catch(function () {
      renderAll();
    });
  }

  filtersEl.addEventListener("click", function (event) {
    var btn = event.target.closest("[data-filter]");
    if (!btn) return;
    activeFilter = btn.getAttribute("data-filter") || "all";
    renderAll();
  });

  listEl.addEventListener("click", function (event) {
    var copyBtn = event.target.closest("[data-copy-value]");
    if (copyBtn) {
      var originalText = copyBtn.textContent;
      copyText(copyBtn.getAttribute("data-copy-value") || "").then(function () {
        copyBtn.textContent = "コピー済み";
        showCopyToast("コピーしました");
        window.setTimeout(function () {
          copyBtn.textContent = originalText;
        }, 900);
      });
      return;
    }
    var editBtn = event.target.closest("[data-edit-mid]");
    if (editBtn) {
      openEditModal(editBtn.getAttribute("data-edit-mid") || "");
      return;
    }
    var deleteBtn = event.target.closest("[data-delete-mid]");
    if (deleteBtn) {
      deleteItem(deleteBtn.getAttribute("data-delete-mid") || "");
      return;
    }
    var moveBtn = event.target.closest('[data-move-mid]');
    if (moveBtn) {
      openMoveModal(moveBtn.getAttribute('data-move-mid') || '');
    }
  });

  listEl.addEventListener("change", function (event) {
    var selectInput = event.target.closest("[data-select-mid]");
    if (selectInput) {
      selectedIds[String(selectInput.getAttribute("data-select-mid") || "").toUpperCase()] = Boolean(selectInput.checked);
      updateSelectionPill();
      return;
    }
    var gateInput = event.target.closest("[data-gate-toggle]");
    if (!gateInput) return;
    var mid = String(gateInput.getAttribute("data-mid") || "").toUpperCase();
    var item = findItemByMid(mid);
    if (!item) return;
    var gateKey = gateInput.getAttribute("data-gate-toggle");
    var gateValue = Boolean(gateInput.checked);
    var updates = gateUpdatesPayload(gateKey, gateValue);
    gateInput.disabled = true;
    postJson(itemUpdateApiUrl(), {
      box_id: item._box_id || "",
      management_id: item.management_id || "",
      updates: updates,
      action_meta: gateActionMeta(gateKey, gateValue)
    }).then(function (data) {
      patchHumanGate(mid, (data.updates || {}).human_gate || {});
      renderAll();
      var feedback = gateRefreshFeedback(data, "更新しました。");
      setBulkMessage(feedback.message, feedback.isError);
    }).catch(function (error) {
      gateInput.checked = !gateInput.checked;
      gateInput.disabled = false;
      setBulkMessage("更新に失敗しました。 " + (error && error.message ? error.message : ""), true);
    });
  });

  editCancel.addEventListener("click", closeEditModal);
  editSave.addEventListener("click", saveEditModal);
  editModal.addEventListener("click", function (event) {
    if (event.target === editModal) closeEditModal();
  });
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && !editModal.hidden) closeEditModal();
  });

  search.addEventListener("input", function () {
    currentPage = 1;
    renderList();
  });
  sortSelect.addEventListener("change", function () {
    sortMode = sortSelect.value || "intake";
    currentPage = 1;
    renderList();
  });

  selectVisibleBtn.addEventListener("click", function () {
    filteredItems().forEach(function (item) {
      selectedIds[String(item.management_id || "").toUpperCase()] = true;
    });
    renderList();
  });

  selectUnresolvedBtn.addEventListener("click", function () {
    filteredItems().filter(function (item) {
      return !item.human_gate.requires_ai_images_ok;
    }).forEach(function (item) {
      selectedIds[String(item.management_id || "").toUpperCase()] = true;
    });
    renderList();
  });

  clearSelectionBtn.addEventListener("click", function () {
    selectedIds = {};
    renderList();
  });

  bulkAiOnBtn.addEventListener("click", function () {
    applyBulkUpdate("human_ai_images_ok", true);
  });
  bulkAiOffBtn.addEventListener("click", function () {
    applyBulkUpdate("human_ai_images_ok", false);
  });
  bulkPublishOnBtn.addEventListener("click", function () {
    applyBulkUpdate("human_publish_ok", true);
  });
  bulkPublishOffBtn.addEventListener("click", function () {
    applyBulkUpdate("human_publish_ok", false);
  });

  function toggleItemCard(el) {
    var card = el.closest('.item-card');
    if (!card) return;
    var mid = String(card.getAttribute('data-mid') || '').toUpperCase();
    var isExpanded = card.classList.contains('expanded');
    if (isExpanded) {
      card.classList.remove('expanded');
      if (mid) delete expandedIds[mid];
    } else {
      card.classList.add('expanded');
      if (mid) expandedIds[mid] = true;
    }
    var toggleBtn = card.querySelector('.detail-toggle-btn');
    if (toggleBtn) toggleBtn.textContent = card.classList.contains('expanded') ? '\u25b2 \u8a73\u7d30\u3092\u9589\u3058\u308b' : '\u25bc \u8a73\u7d30';
  }
  window.toggleItemCard = toggleItemCard;

  function toggleManualListing(head) {
    var section = head.closest('.manual-listing');
    if (section) {
      section.classList.toggle('compact');
      var btn = head.querySelector('.manual-toggle');
      if (btn) btn.textContent = section.classList.contains('compact') ? '\u5c55\u958b' : '\u9589\u3058\u308b';
    }
  }
  window.toggleManualListing = toggleManualListing;

  /* ── AI画像不一致モーダル ── */
  var wrongAiModal = document.createElement('div');
  wrongAiModal.className = 'wrong-ai-modal';
  wrongAiModal.hidden = true;
  wrongAiModal.innerHTML = '<div class="wrong-ai-panel">'
    + '<div class="wrong-ai-title">\u274c AI\u753b\u50cf\u304c\u9055\u3046</div>'
    + '<div class="wrong-ai-sub" id="wrong-ai-sub"></div>'
    + '<div class="wrong-ai-info">AI\u753b\u50cfOK\u30c1\u30a7\u30c3\u30af\u3092\u5916\u3057\u307e\u3059\u3002\u7406\u7531\u3092\u9078\u3076\u304b\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044\u3002<br>\u300c\u8272\u304c\u9055\u3046\u300d\u306e\u5834\u5408\u3001\u7a7a\u304d\u30b9\u30ed\u30c3\u30c8\u304c\u3042\u308c\u3070\u305d\u3053\u3078AI\u753b\u50cf\u3092\u8ffd\u52a0\u3057\u307e\u3059\u3002</div>'
    + '<div class="wrong-ai-reasons">'
    + '<button class="wrong-reason-btn" type="button" data-reason="\u5225\u306e\u5546\u54c1\u306e\u753b\u50cf">\u5225\u306e\u5546\u54c1\u306e\u753b\u50cf</button>'
    + '<button class="wrong-reason-btn" type="button" data-reason="\u8272\u304c\u9055\u3046">\u8272\u304c\u9055\u3046</button>'
    + '<button class="wrong-reason-btn" type="button" data-reason="\u578b\u304c\u9055\u3046">\u578b\u304c\u9055\u3046</button>'
    + '<button class="wrong-reason-btn" type="button" data-reason="\u30d1\u30c3\u30b1\u30fc\u30b8\u9055\u3044">\u30d1\u30c3\u30b1\u30fc\u30b8\u9055\u3044</button>'
    + '<button class="wrong-reason-btn" type="button" data-reason="\u5168\u304f\u7121\u95a2\u4fc2">\u5168\u304f\u7121\u95a2\u4fc2</button>'
    + '</div>'
    + '<div class="wrong-ai-field"><textarea id="wrong-ai-reason" rows="2" placeholder="\u305d\u306e\u4ed6\u306e\u7406\u7531\uff08\u4efb\u610f\uff09"></textarea></div>'
    + '<div class="wrong-ai-actions">'
    + '<button class="wrong-ai-cancel" type="button" id="wrong-ai-cancel">\u30ad\u30e3\u30f3\u30bb\u30eb</button>'
    + '<button class="wrong-ai-submit" type="button" id="wrong-ai-submit">\u2714 \u78ba\u5b9a\uff08\u30c1\u30a7\u30c3\u30af\u3092\u5916\u3059\uff09</button>'
    + '</div>'
    + '<div class="wrong-ai-msg" id="wrong-ai-msg"></div>'
    + '</div>';
  document.body.appendChild(wrongAiModal);

  var wrongAiMid = '';
  function normalizeWrongReasonText(value) {
    return String(value || '')
      .trim()
      .replace(/[。．、,\s]+/g, '')
      .toLowerCase();
  }
  function syncWrongAiReasonSelection(reasonText) {
    var normalized = normalizeWrongReasonText(reasonText);
    wrongAiModal.querySelectorAll('.wrong-reason-btn').forEach(function (button) {
      var buttonReason = button.getAttribute('data-reason') || '';
      var buttonNormalized = normalizeWrongReasonText(buttonReason);
      var matched = Boolean(
        normalized
        && buttonNormalized
        && (normalized.indexOf(buttonNormalized) !== -1 || buttonNormalized.indexOf(normalized) !== -1)
      );
      button.classList.toggle('selected', matched);
    });
  }
  function nextAiColorSlotKey(item) {
    var nextNum = 1;
    (item && item.slots || []).forEach(function (slot) {
      var matched = String(slot && slot.slot || '').match(/^AI_COLOR_(\d+)$/i);
      if (!matched) return;
      var current = parseInt(matched[1], 10);
      if (current >= nextNum) nextNum = current + 1;
    });
    return 'AI_COLOR_' + String(nextNum).padStart(2, '0');
  }
  function openWrongAiModal(mid) {
    var item = findItemByMid(mid);
    if (!item) return;
    var currentReason = String((item.human_gate && item.human_gate.mismatch_reason) || '').trim();
    wrongAiMid = mid;
    document.getElementById('wrong-ai-sub').textContent = productName(item) + ' (' + mid + ')';
    document.getElementById('wrong-ai-reason').value = currentReason;
    syncWrongAiReasonSelection(currentReason);
    document.getElementById('wrong-ai-msg').textContent = '';
    document.getElementById('wrong-ai-submit').disabled = false;
    wrongAiModal.hidden = false;
  }
  function closeWrongAiModal() {
    wrongAiModal.hidden = true;
    wrongAiMid = '';
  }
  wrongAiModal.addEventListener('click', function (e) {
    if (e.target === wrongAiModal) closeWrongAiModal();
  });
  document.getElementById('wrong-ai-cancel').addEventListener('click', closeWrongAiModal);
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !wrongAiModal.hidden) closeWrongAiModal();
  });

  /* quick-select reason */
  wrongAiModal.addEventListener('click', function (e) {
    var reasonBtn = e.target.closest('[data-reason]');
    if (reasonBtn) {
      var reasonText = reasonBtn.getAttribute('data-reason') || '';
      document.getElementById('wrong-ai-reason').value = reasonText;
      syncWrongAiReasonSelection(reasonText);
    }
  });
  document.getElementById('wrong-ai-reason').addEventListener('input', function (e) {
    syncWrongAiReasonSelection(e.target.value || '');
  });

  /* submit */
  document.getElementById('wrong-ai-submit').addEventListener('click', function () {
    var item = findItemByMid(wrongAiMid);
    if (!item) { closeWrongAiModal(); return; }
    var reason = document.getElementById('wrong-ai-reason').value.trim() || '\u7406\u7531\u672a\u8a18\u5165';
    var submitBtn = document.getElementById('wrong-ai-submit');
    var msgEl = document.getElementById('wrong-ai-msg');
    submitBtn.disabled = true;
    msgEl.textContent = '\u9001\u4fe1\u4e2d...';

    var isColorDiff = normalizeWrongReasonText(reason).indexOf(normalizeWrongReasonText('\u8272\u304c\u9055\u3046')) !== -1;
    var emptySlots = (item.slots || []).filter(function (s) { return s.status !== 'present'; });
    var slotKey = emptySlots.length ? (emptySlots[0].slot || '') : '';

    function finishWrongAi() {
      postJson(itemUpdateApiUrl(), {
        box_id: item._box_id || '',
        management_id: item.management_id || '',
        updates: {
          human_ai_images_ok: false,
          human_publish_ok: false
        },
        action_meta: {
          action: 'ai_mismatch',
          mismatch_reason: reason,
          label: 'AI\u753b\u50cf\u4e0d\u4e00\u81f4',
          detail: reason
        }
      }).then(function (data) {
        patchHumanGate(wrongAiMid, (data.updates || {}).human_gate || {});
        renderAll();
        var feedback = gateRefreshFeedback(data, 'AI\u753b\u50cfOK\u3092\u5916\u3057\u307e\u3057\u305f\u3002');
        setBulkMessage(feedback.message, feedback.isError);
        closeWrongAiModal();
      }).catch(function (error) {
        msgEl.textContent = '\u5931\u6557: ' + (error && error.message ? error.message : '');
        submitBtn.disabled = false;
      });
    }

    if (isColorDiff) {
      var aiImages = mediaSets(item).official || [];
      var firstAiUrl = aiImages.length ? aiImages[0].url : '';
      if (firstAiUrl) {
        msgEl.textContent = slotKey
          ? '\u8272\u9055\u3044AI\u753b\u50cf\u3092\u30b9\u30ed\u30c3\u30c8\u3078\u8ffd\u52a0\u4e2d...'
          : '\u8272\u9055\u3044AI\u753b\u50cf\u3092\u65b0\u3057\u3044\u67a0\u306b\u8ffd\u52a0\u4e2d...';
        postJson(aiImageToSlotApiUrl(), {
          management_id: item.management_id || '',
          box_id: item._box_id || '',
          image_url: firstAiUrl,
          slot_key: slotKey,
          reason: reason,
          detail: reason
        }).then(function (slotData) {
          /* update the slot in memory (optimistic or from response) */
          if (item && item.slots) {
            var newSlot = (slotData && slotData.slot)
              ? slotData.slot
              : { slot: slotKey || nextAiColorSlotKey(item), status: 'present', resident_url: firstAiUrl, source_type: 'ai_color_variant', reason: reason };
            var matched = false;
            item.slots = item.slots.map(function (s) {
              if (String(s.slot || '').toUpperCase() === String(newSlot.slot || '').toUpperCase()) {
                matched = true;
                return newSlot;
              }
              return s;
            });
            if (!matched) item.slots.push(newSlot);
          }
          finishWrongAi();
        }).catch(function (slotErr) {
          msgEl.textContent = '\u30b9\u30ed\u30c3\u30c8\u8ffd\u52a0\u5931\u6557\u3001\u30c1\u30a7\u30c3\u30af\u3060\u3051\u5916\u3057\u307e\u3059: ' + (slotErr && slotErr.message ? slotErr.message : '');
          finishWrongAi();
        });
      } else {
        finishWrongAi();
      }
    } else {
      finishWrongAi();
    }
  });

  /* ── 実物写真入れ替え・追加機能 ── */
  var slotFileInput = document.createElement('input');
  slotFileInput.type = 'file';
  slotFileInput.className = 'slot-file-input';
  slotFileInput.accept = 'image/*';
  document.body.appendChild(slotFileInput);

  var slotPreviewModal = document.createElement('div');
  slotPreviewModal.className = 'slot-preview-modal';
  slotPreviewModal.hidden = true;
  slotPreviewModal.innerHTML = '<div class="slot-preview-panel">'
    + '<div class="slot-preview-title" id="slot-preview-title">写真をアップロード</div>'
    + '<div class="slot-preview-sub" id="slot-preview-sub"></div>'
    + '<img class="slot-preview-img" id="slot-preview-img" alt="プレビュー">'
    + '<div class="slot-preview-actions">'
    + '<button type="button" id="slot-preview-cancel">キャンセル</button>'
    + '<button type="button" class="primary" id="slot-preview-upload">\u2713 アップロード</button>'
    + '</div></div>';
  document.body.appendChild(slotPreviewModal);

  var pendingSlotReplace = null;
  var pendingComparisonReplace = null;
  var pendingFile = null;

  slotFileInput.addEventListener('change', function () {
    var file = slotFileInput.files && slotFileInput.files[0];
    slotFileInput.value = '';
    if (!file) return;
    pendingFile = file;
    if (pendingComparisonReplace) {
      document.getElementById('slot-preview-title').textContent = '参考画像を追加';
      document.getElementById('slot-preview-sub').textContent = pendingComparisonReplace.mid + ' / 参考画像';
    } else if (pendingSlotReplace && pendingSlotReplace.isExtra) {
      document.getElementById('slot-preview-title').textContent = '写真を追加';
      document.getElementById('slot-preview-sub').textContent = (pendingSlotReplace.mid || '') + ' / 新しい写真 (' + (pendingSlotReplace.slotKey || '') + ')';
    } else if (pendingSlotReplace) {
      document.getElementById('slot-preview-title').textContent = '写真をアップロード';
      document.getElementById('slot-preview-sub').textContent = (pendingSlotReplace.mid || '') + ' / ' + (pendingSlotReplace.slotKey || '');
    }
    var url = URL.createObjectURL(file);
    document.getElementById('slot-preview-img').src = url;
    slotPreviewModal.hidden = false;
  });

  document.getElementById('slot-preview-cancel').addEventListener('click', function () {
    slotPreviewModal.hidden = true;
    pendingFile = null;
    pendingSlotReplace = null;
    pendingComparisonReplace = null;
  });

  document.getElementById('slot-preview-upload').addEventListener('click', function () {
    if (!pendingFile) return;
    var uploadBtn = document.getElementById('slot-preview-upload');
    uploadBtn.disabled = true;
    uploadBtn.textContent = 'アップロード中...';
    var formData = new FormData();
    formData.append('file', pendingFile);

    if (pendingComparisonReplace) {
      var mid = pendingComparisonReplace.mid;
      var item = findItemByMid(mid);
      formData.append('management_id', mid);
      formData.append('box_id', item ? (item._box_id || '') : '');
      fetch(apiUrl('/api/zero-cost/comparison/upload'), {
        method: 'POST', body: formData
      }).then(parseJsonResponse).then(function (data) {
        slotPreviewModal.hidden = true;
        uploadBtn.disabled = false;
        uploadBtn.textContent = '\u2713 アップロード';
        pendingFile = null;
        pendingComparisonReplace = null;
        if (item && data.image) {
          item.comparison_images = item.comparison_images || [];
          item.comparison_images.push(data.image);
        }
        renderAll();
        setBulkMessage('画像を追加しました。', false);
      }).catch(function (err) {
        uploadBtn.disabled = false;
        uploadBtn.textContent = '\u2713 アップロード';
        setBulkMessage('アップロード失敗: ' + (err.message || ''), true);
      });
    } else if (pendingSlotReplace) {
      var mid = pendingSlotReplace.mid;
      var slotKey = pendingSlotReplace.slotKey;
      var item = findItemByMid(mid);
      formData.append('management_id', mid);
      formData.append('slot_key', slotKey);
      formData.append('box_id', item ? (item._box_id || '') : '');
      fetch(apiUrl('/api/zero-cost/slot/upload'), {
        method: 'POST', body: formData
      }).then(parseJsonResponse).then(function (data) {
        slotPreviewModal.hidden = true;
        uploadBtn.disabled = false;
        uploadBtn.textContent = '\u2713 アップロード';
        var isExtra = pendingSlotReplace && Boolean(pendingSlotReplace.isExtra);
        pendingFile = null;
        pendingSlotReplace = null;
        if (data.slot) {
          if (isExtra && item) {
            /* append new extra slot instead of replacing existing */
            item.slots = (item.slots || []).filter(function (s) {
              return String(s.slot || '').toUpperCase() !== slotKey.toUpperCase();
            });
            item.slots.push(data.slot);
          } else if (item && item.slots) {
            item.slots = item.slots.map(function (s) {
              if (String(s.slot).toUpperCase() === slotKey.toUpperCase()) return data.slot;
              return s;
            });
          }
        }
        renderAll();
        setBulkMessage(isExtra ? '写真を追加しました。' : '写真をアップロードしました。', false);
      }).catch(function (err) {
        uploadBtn.disabled = false;
        uploadBtn.textContent = '\u2713 アップロード';
        setBulkMessage('アップロード失敗: ' + (err.message || ''), true);
      });
    }
  });

  slotPreviewModal.addEventListener('click', function (e) {
    if (e.target === slotPreviewModal) {
      slotPreviewModal.hidden = true;
      pendingFile = null;
    }
  });

  /* handle verdict + photo management buttons */
  listEl.addEventListener("click", function (event) {
    var target = event.target;

    /* 比較画像削除 */
    var deleteCompBtn = target.closest('[data-delete-comparison]');
    if (deleteCompBtn) {
      event.preventDefault();
      event.stopPropagation();
      var mid = deleteCompBtn.getAttribute('data-delete-comparison') || '';
      var imageUrl = deleteCompBtn.getAttribute('data-image-url') || '';
      var item = findItemByMid(mid);
      if (!item) return;
      if (!window.confirm(mid + ' の画像を削除しますか？')) return;
      deleteCompBtn.disabled = true;
      deleteCompBtn.textContent = '削除中...';
      postJson(apiUrl('/api/zero-cost/comparison/delete'), {
        management_id: mid, url: imageUrl, box_id: item._box_id || ''
      }).then(function () {
        if (item.comparison_images) {
          item.comparison_images = item.comparison_images.filter(function (img) { return img.url !== imageUrl; });
        }
        renderAll();
        setBulkMessage('画像を削除しました。', false);
      }).catch(function (err) {
        setBulkMessage('削除失敗: ' + (err.message || ''), true);
        deleteCompBtn.disabled = false;
        deleteCompBtn.textContent = '\u2715 削除';
      });
      return;
    }

    /* 実物写真削除 */
    var deleteSlotBtn = target.closest('[data-delete-slot]');
    if (deleteSlotBtn) {
      event.preventDefault();
      event.stopPropagation();
      var mid = deleteSlotBtn.getAttribute('data-delete-slot') || '';
      var slotKey = deleteSlotBtn.getAttribute('data-slot-key') || '';
      var item = findItemByMid(mid);
      if (!item) return;
      if (!window.confirm(mid + ' の写真 (' + slotKey + ') を削除しますか？')) return;
      deleteSlotBtn.disabled = true;
      deleteSlotBtn.textContent = '削除中...';
      postJson(apiUrl('/api/zero-cost/slot/delete'), {
        management_id: mid, slot_key: slotKey, box_id: item._box_id || ''
      }).then(function () {
        if (item.slots) {
          if (/^(PHOTO_|AI_COLOR_)/i.test(slotKey)) {
            item.slots = item.slots.filter(function (s) {
              return String(s.slot || '').toUpperCase() !== slotKey.toUpperCase();
            });
          } else {
            item.slots = item.slots.map(function (s) {
              if (String(s.slot).toUpperCase() === slotKey.toUpperCase()) {
                return { slot: slotKey, status: 'missing' };
              }
              return s;
            });
          }
        }
        renderAll();
        setBulkMessage('写真を削除しました。', false);
      }).catch(function (err) {
        setBulkMessage('削除失敗: ' + (err.message || ''), true);
        deleteSlotBtn.disabled = false;
        deleteSlotBtn.textContent = '\u2715 削除';
      });
      return;
    }

    /* アップロード・追加ボタン */
    var addCompBtn = target.closest('[data-add-comparison]');
    if (addCompBtn) {
      event.preventDefault();
      event.stopPropagation();
      pendingComparisonReplace = { mid: addCompBtn.getAttribute('data-add-comparison') || '' };
      pendingSlotReplace = null;
      slotFileInput.click();
      return;
    }
    var replaceBtn = target.closest('[data-replace-slot]');
    var addBtn = target.closest('[data-add-slot]');
    if (replaceBtn || addBtn) {
      event.preventDefault();
      event.stopPropagation();
      var targetBtn = replaceBtn || addBtn;
      var mid = targetBtn.getAttribute('data-replace-slot') || targetBtn.getAttribute('data-add-slot') || '';
      var slotKey = targetBtn.getAttribute('data-slot-key') || '';
      pendingSlotReplace = { mid: mid, slotKey: slotKey };
      pendingComparisonReplace = null;
      slotFileInput.click();
      return;
    }
    var addExtraBtn = target.closest('[data-add-extra-slot]');
    if (addExtraBtn) {
      event.preventDefault();
      event.stopPropagation();
      var mid = addExtraBtn.getAttribute('data-add-extra-slot') || '';
      var slotKey = addExtraBtn.getAttribute('data-slot-key') || '';
      pendingSlotReplace = { mid: mid, slotKey: slotKey, isExtra: true };
      pendingComparisonReplace = null;
      slotFileInput.click();
      return;
    }

    /* 判定ボタン */
    var wrongBtn = target.closest("[data-wrong-ai]");
    if (wrongBtn) {
      openWrongAiModal(wrongBtn.getAttribute("data-wrong-ai") || "");
      return;
    }
    /* 写真なし出品 */
    var actualOnlyBtn = target.closest("[data-actual-only]");
    if (actualOnlyBtn) {
      var mid = actualOnlyBtn.getAttribute("data-actual-only") || "";
      var item = findItemByMid(mid);
      if (!item) return;
      actualOnlyBtn.disabled = true;
      actualOnlyBtn.textContent = '\ud83d\udcf7 \u9001\u4fe1\u4e2d...';
      postJson(itemUpdateApiUrl(), {
        box_id: item._box_id || "",
        management_id: item.management_id || "",
        updates: { human_ai_images_ok: false, human_publish_ok: true, human_actual_only_ok: true, human_hold: false },
        action_meta: { action: "actual_only_ok", label: "\u5199\u771f\u306a\u3057\u51fa\u54c1", detail: "\u5b9f\u7269\u5199\u771f\u306e\u307f\u3067\u51fa\u54c1OK", mismatch_reason: "" }
      }).then(function (data) {
        patchHumanGate(mid, (data.updates || {}).human_gate || {});
        renderAll();
        var feedback = gateRefreshFeedback(data, "\u5199\u771f\u306a\u3057\u51fa\u54c1OK\u3092\u8a18\u9332\u3057\u307e\u3057\u305f\u3002");
        setBulkMessage(feedback.message, feedback.isError);
      }).catch(function (error) {
        setBulkMessage("\u66f4\u65b0\u306b\u5931\u6557\u3057\u307e\u3057\u305f\u3002 " + (error && error.message ? error.message : ""), true);
        actualOnlyBtn.disabled = false;
        actualOnlyBtn.textContent = '\ud83d\udcf7 \u5199\u771f\u306a\u3057\u51fa\u54c1';
      });
      return;
    }
    /* 写真合ってる */
    var correctBtn = target.closest("[data-correct-ai]");
    if (correctBtn) {
      var mid = correctBtn.getAttribute("data-correct-ai") || "";
      var item = findItemByMid(mid);
      if (!item) return;
      correctBtn.disabled = true;
      correctBtn.textContent = '\u2705 \u9001\u4fe1\u4e2d...';
      postJson(itemUpdateApiUrl(), {
        box_id: item._box_id || "",
        management_id: item.management_id || "",
        updates: { human_ai_images_ok: true, human_publish_ok: true, human_actual_only_ok: false, human_hold: false },
        action_meta: { action: "photo_correct", label: "\u5199\u771f\u5408\u3063\u3066\u308b", mismatch_reason: "" }
      }).then(function (data) {
        patchHumanGate(mid, (data.updates || {}).human_gate || {});
        renderAll();
        var feedback = gateRefreshFeedback(data, "\u5199\u771fOK\u3092\u8a18\u9332\u3057\u307e\u3057\u305f\u3002");
        setBulkMessage(feedback.message, feedback.isError);
      }).catch(function (error) {
        setBulkMessage("\u66f4\u65b0\u306b\u5931\u6557\u3057\u307e\u3057\u305f\u3002 " + (error && error.message ? error.message : ""), true);
        correctBtn.disabled = false;
        correctBtn.textContent = '\u2705 \u5199\u771f\u5408\u3063\u3066\u308b';
      });
      return;
    }
    /* 保留 */
    var holdBtn = target.closest("[data-hold]");
    if (holdBtn && !holdBtn.closest("[data-uncheck-all]")) {
      var mid = holdBtn.getAttribute("data-hold") || "";
      var item = findItemByMid(mid);
      if (!item) return;
      holdBtn.disabled = true;
      holdBtn.textContent = '\u23f8 \u9001\u4fe1\u4e2d...';
      postJson(itemUpdateApiUrl(), {
        box_id: item._box_id || "",
        management_id: item.management_id || "",
        updates: { human_publish_ok: false, human_actual_only_ok: false, human_hold: true },
        action_meta: { action: "hold", label: "\u4fdd\u7559", detail: "\u4fdd\u7559\u4e2d" }
      }).then(function (data) {
        patchHumanGate(mid, (data.updates || {}).human_gate || {});
        renderAll();
        var feedback = gateRefreshFeedback(data, "\u4fdd\u7559\u3057\u307e\u3057\u305f\u3002");
        setBulkMessage(feedback.message, feedback.isError);
      }).catch(function (error) {
        setBulkMessage("\u5931\u6557\u3057\u307e\u3057\u305f\u3002 " + (error && error.message ? error.message : ""), true);
        holdBtn.disabled = false;
        holdBtn.textContent = '\u23f8 \u4fdd\u7559';
      });
      return;
    }
    /* チェック全解除 */
    var uncheckBtn = target.closest("[data-uncheck-all]");
    if (uncheckBtn) {
      var mid2 = uncheckBtn.getAttribute("data-uncheck-all") || "";
      var item2 = findItemByMid(mid2);
      if (!item2) return;
      uncheckBtn.disabled = true;
      postJson(itemUpdateApiUrl(), {
        box_id: item2._box_id || "",
        management_id: item2.management_id || "",
        updates: { human_ai_images_ok: false, human_publish_ok: false, human_actual_only_ok: false, human_hold: false },
        action_meta: { action: "uncheck_all", label: "\u30c1\u30a7\u30c3\u30af\u5168\u89e3\u9664", mismatch_reason: "" }
      }).then(function (data) {
        patchHumanGate(mid2, (data.updates || {}).human_gate || {});
        renderAll();
        var feedback = gateRefreshFeedback(data, "\u30c1\u30a7\u30c3\u30af\u3092\u5168\u89e3\u9664\u3057\u307e\u3057\u305f\u3002");
        setBulkMessage(feedback.message, feedback.isError);
      }).catch(function (error) {
        setBulkMessage("\u5931\u6557\u3057\u307e\u3057\u305f\u3002 " + (error && error.message ? error.message : ""), true);
        uncheckBtn.disabled = false;
      });
    }
  });

  /* ── 箱移動モーダル ── */
  var moveModal = document.createElement('div');
  moveModal.className = 'edit-modal';
  moveModal.hidden = true;
  moveModal.innerHTML = '<div class="edit-panel" role="dialog" aria-modal="true">'
    + '<div class="edit-title">\u2b50 \u7bb1\u3078\u79fb\u52d5</div>'
    + '<div class="edit-subtitle" id="move-subtitle"></div>'
    + '<div class="wrong-ai-info">\u3053\u306e\u5546\u54c1\u3092\u5225\u306e\u7bb1\u3078\u79fb\u52d5\u3057\u307e\u3059\u3002\u7ba1\u7406\u756a\u53f7\u306f\u65b0\u3057\u3044\u7bb1\u306e\u9023\u756a\u306b\u5909\u308f\u308a\u307e\u3059\u3002</div>'
    + '<div class="edit-field">'
    + '<label for="move-target-box">\u79fb\u52d5\u5148\u306e\u7bb1ID</label>'
    + '<input id="move-target-box" type="text" maxlength="20" placeholder="\u4f8b: BOX-002">'
    + '</div>'
    + '<div class="edit-message" id="move-message"></div>'
    + '<div class="edit-actions">'
    + '<button type="button" id="move-cancel">\u30ad\u30e3\u30f3\u30bb\u30eb</button>'
    + '<button type="button" class="primary" id="move-submit">\u2714 \u79fb\u52d5\u3059\u308b</button>'
    + '</div>'
    + '</div>';
  document.body.appendChild(moveModal);

  var moveMid = '';
  function openMoveModal(mid) {
    var item = findItemByMid(mid);
    if (!item) return;
    moveMid = mid;
    document.getElementById('move-subtitle').textContent = mid + ' / ' + productName(item);
    document.getElementById('move-target-box').value = '';
    document.getElementById('move-message').textContent = '';
    document.getElementById('move-submit').disabled = false;
    moveModal.hidden = false;
    document.getElementById('move-target-box').focus();
  }
  function closeMoveModal() {
    moveModal.hidden = true;
    moveMid = '';
  }
  document.getElementById('move-cancel').addEventListener('click', closeMoveModal);
  moveModal.addEventListener('click', function (e) { if (e.target === moveModal) closeMoveModal(); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !moveModal.hidden) closeMoveModal(); });
  document.getElementById('move-submit').addEventListener('click', function () {
    var item = findItemByMid(moveMid);
    if (!item) { closeMoveModal(); return; }
    var targetBox = String(document.getElementById('move-target-box').value || '').trim().toUpperCase();
    if (!targetBox) {
      document.getElementById('move-message').textContent = '\u7bb1ID\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044\u3002';
      document.getElementById('move-message').classList.add('error');
      return;
    }
    if (targetBox === String(item._box_id || '').toUpperCase()) {
      document.getElementById('move-message').textContent = '\u540c\u3058\u7bb1\u3067\u3059\u3002';
      document.getElementById('move-message').classList.add('error');
      return;
    }
    var submitBtn = document.getElementById('move-submit');
    submitBtn.disabled = true;
    document.getElementById('move-message').textContent = '\u79fb\u52d5\u4e2d...';
    document.getElementById('move-message').classList.remove('error');
    postJson(itemMoveApiUrl(), {
      management_id: item.management_id || moveMid,
      source_box_id: item._box_id || '',
      target_box_id: targetBox
    }).then(function (data) {
      document.getElementById('move-message').textContent = '\u79fb\u52d5\u3057\u307e\u3057\u305f\u3002' + (data.old_management_id || '') + ' \u2192 ' + (data.new_management_id || '');
      window.setTimeout(function () { redirectToFresh(''); }, 800);
    }).catch(function (error) {
      document.getElementById('move-message').textContent = '\u5931\u6557: ' + (error && error.message ? error.message : '');
      document.getElementById('move-message').classList.add('error');
      submitBtn.disabled = false;
    });
  });

  /* image lightbox */
  listEl.addEventListener("click", function (event) {
    if (event.target.closest('.slot-actions')) return;
    var imageEl = event.target.closest(".ai-thumb img, .actual-card img, .official-thumb img, .official-hero img");
    if (!imageEl) return;
    var overlay = document.createElement("div");
    overlay.className = "lightbox-overlay";
    overlay.innerHTML = '<img src="' + escapeHtml(imageEl.src) + '" class="lightbox-img" alt="拡大">';
    overlay.addEventListener("click", function () { overlay.remove(); });
    document.body.appendChild(overlay);
  });

  renderAll();
  syncHumanGates();
})();
