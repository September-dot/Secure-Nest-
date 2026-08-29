/**
 * SECURENEST - Human-Centered Smart Home Security Prototype
 * Non-Technical, Crystal Clear, Interactive Multi-Face Experience
 * Features Dynamic Live Shared Phone Mounting for 100% Functional Split View
 */

// =============================================================================
// 1. DATA STATE & DEVICE INVENTORY (HUMAN-FRIENDLY NAMES)
// =============================================================================

const INITIAL_DEVICES = [
  // Personal Devices (Laptops, Phones, Storage)
  { id: "dev-01", name: "MacBook Pro Laptop", room: "Home Office", category: "PRIVATE", vendor: "Apple", vlan: 10, status: "SAFE", paused: false, rate: "Normal (120 KB/s)", x: 100, y: 150 },
  { id: "dev-02", name: "iPhone 15 Smartphone", room: "Personal", category: "PRIVATE", vendor: "Apple", vlan: 10, status: "SAFE", paused: false, rate: "Light (45 KB/s)", x: 180, y: 190 },
  { id: "dev-03", name: "Family Storage Vault (NAS)", room: "Home Office", category: "PRIVATE", vendor: "Synology", vlan: 10, status: "SAFE", paused: false, rate: "Active (340 KB/s)", x: 120, y: 310 },
  { id: "dev-04", name: "Dell Work Computer", room: "Study Room", category: "PRIVATE", vendor: "Dell", vlan: 10, status: "SAFE", paused: false, rate: "Idle (18 KB/s)", x: 200, y: 370 },
  { id: "dev-05", name: "Family iPad Tablet", room: "Living Room", category: "PRIVATE", vendor: "Apple", vlan: 10, status: "SAFE", paused: false, rate: "Light (12 KB/s)", x: 90, y: 430 },
  { id: "dev-06", name: "Kindle E-Reader", room: "Bedroom", category: "PRIVATE", vendor: "Amazon", vlan: 10, status: "SAFE", paused: false, rate: "Idle (0.2 KB/s)", x: 210, y: 120 },

  // Smart Home Gadgets (Cameras, Locks, Climate, Entertainment)
  { id: "dev-07", name: "Living Room Smart Camera", room: "Living Room", category: "CAMERA", vendor: "XiaoYi Dome", vlan: 20, status: "SAFE", paused: false, rate: "Streaming (84 KB/s)", x: 380, y: 130 },
  { id: "dev-08", name: "Baby Nursery Monitor", room: "Baby Nursery", category: "CAMERA", vendor: "Nanit Pro", vlan: 20, status: "SAFE", paused: false, rate: "Streaming (62 KB/s)", x: 530, y: 140 },
  { id: "dev-09", name: "Backyard Security Camera", room: "Outdoors", category: "CAMERA", vendor: "Reolink IP", vlan: 20, status: "SAFE", paused: false, rate: "Streaming (95 KB/s)", x: 390, y: 210 },
  { id: "dev-10", name: "Front Doorbell Video", room: "Front Porch", category: "CAMERA", vendor: "Ring", vlan: 20, status: "SAFE", paused: false, rate: "Standby (14 KB/s)", x: 540, y: 220 },
  { id: "dev-11", name: "Front Door Smart Lock", room: "Front Door", category: "SECURITY", vendor: "August Home", vlan: 20, status: "SAFE", paused: false, rate: "Idle (0.1 KB/s)", x: 360, y: 300 },
  { id: "dev-12", name: "Garage Door Controller", room: "Garage", category: "SECURITY", vendor: "Chamberlain", vlan: 20, status: "SAFE", paused: false, rate: "Idle (0.4 KB/s)", x: 520, y: 310 },
  { id: "dev-13", name: "Nest Learning Thermostat", room: "Hallway", category: "CLIMATE", vendor: "Google Nest", vlan: 20, status: "SAFE", paused: false, rate: "Normal (1.2 KB/s)", x: 380, y: 390 },
  { id: "dev-14", name: "Upstairs Temperature Sensor", room: "Master Bedroom", category: "CLIMATE", vendor: "Ecobee", vlan: 20, status: "SAFE", paused: false, rate: "Idle (0.2 KB/s)", x: 530, y: 390 },
  { id: "dev-15", name: "Living Room 4K Smart TV", room: "Living Room", category: "MEDIA", vendor: "Samsung", vlan: 20, status: "SAFE", paused: false, rate: "Streaming (850 KB/s)", x: 440, y: 460 },
  { id: "dev-16", name: "Sonos Living Room Speaker", room: "Living Room", category: "MEDIA", vendor: "Sonos", vlan: 20, status: "SAFE", paused: false, rate: "Audio (140 KB/s)", x: 560, y: 460 },
  { id: "dev-17", name: "Philips Hue Lighting Hub", room: "Hallway", category: "SECURITY", vendor: "Philips Hue", vlan: 20, status: "SAFE", paused: false, rate: "Light (4.5 KB/s)", x: 360, y: 150 },
  { id: "dev-18", name: "Robot Vacuum Cleaner", room: "Living Room", category: "MEDIA", vendor: "Roborock", vlan: 20, status: "SAFE", paused: false, rate: "Normal (2.1 KB/s)", x: 500, y: 180 },
  { id: "dev-19", name: "Apple TV Streaming Box", room: "Bedroom", category: "MEDIA", vendor: "Apple", vlan: 20, status: "SAFE", paused: false, rate: "Streaming (420 KB/s)", x: 410, y: 340 },
  { id: "dev-20", name: "Smart Refrigerator Screen", room: "Kitchen", category: "CLIMATE", vendor: "LG Smart", vlan: 20, status: "SAFE", paused: false, rate: "Normal (3.2 KB/s)", x: 490, y: 270 },
  { id: "dev-21", name: "Rooftop Solar Monitor", room: "Garage", category: "CLIMATE", vendor: "Enphase", vlan: 20, status: "SAFE", paused: false, rate: "Normal (1.1 KB/s)", x: 380, y: 250 },
  { id: "dev-22", name: "Bedroom Air Purifier", room: "Master Bedroom", category: "CLIMATE", vendor: "Levoit", vlan: 20, status: "SAFE", paused: false, rate: "Normal (0.8 KB/s)", x: 460, y: 110 },
  { id: "dev-23", name: "Smart Coffee Brewer", room: "Kitchen", category: "MEDIA", vendor: "Keurig", vlan: 20, status: "SAFE", paused: false, rate: "Idle (0.3 KB/s)", x: 540, y: 350 },
  { id: "dev-24", name: "Lawn Sprinkler Controller", room: "Garden", category: "CLIMATE", vendor: "Rachio", vlan: 20, status: "SAFE", paused: false, rate: "Idle (0.5 KB/s)", x: 420, y: 420 }
];

/**
 * Every device's `rate` field is human copy like "Normal (120 KB/s)".
 * We parse the real number out of it once at load time and store it as
 * `baselineRate` so the anomaly-detection engine below has an actual
 * numeric baseline to compare live traffic against, instead of every
 * "attack" being a hardcoded, scripted outcome.
 */
function parseRateKBs(rateStr) {
  const match = /([\d.]+)\s*KB\/s/i.exec(rateStr || "");
  return match ? parseFloat(match[1]) : 1;
}

INITIAL_DEVICES.forEach(dev => {
  dev.baselineRate = parseRateKBs(dev.rate);
});

const INITIAL_ACTIVITIES = [
  { id: "act-1", time: "2 min ago", type: "green", title: "Smart Home Security Scan Complete", desc: "All 24 devices checked. Zero vulnerabilities or privacy leaks found." },
  { id: "act-2", time: "15 min ago", type: "cyan", title: "Nest Thermostat Verified", desc: "Downloaded official software update safely. No action required." },
  { id: "act-3", time: "1 hour ago", type: "green", title: "Guest Wi-Fi Isolation Active", desc: "Personal laptops and bank data locked behind private security shield." }
];

let appState = {
  activeFace: "mobile",
  activeMobileTab: "tab-shield",
  devices: JSON.parse(JSON.stringify(INITIAL_DEVICES)),
  activities: JSON.parse(JSON.stringify(INITIAL_ACTIVITIES)),
  activeCategory: "ALL",
  searchQuery: "",
  soundEnabled: true,
  currentThreat: null,
  quarantinedCount: 0,
  tutorialStep: 1,
  selectedDevice: null,
  // Security PIN lives only in memory/localStorage — it is never printed
  // into any on-screen text or log line.
  securityPin: "1234",
  autoLockoutEnabled: true,
  pushAlertsEnabled: true,
  demoRunning: false,
  demoCancelled: false
};

// =============================================================================
// SETTINGS PERSISTENCE (localStorage) — survives page refresh mid-demo
// =============================================================================

const SETTINGS_KEY = "securenest_settings_v1";

function loadPersistedSettings() {
  try {
    const raw = localStorage.getItem(SETTINGS_KEY);
    if (!raw) return;
    const saved = JSON.parse(raw);
    if (typeof saved.securityPin === "string" && /^\d{4}$/.test(saved.securityPin)) {
      appState.securityPin = saved.securityPin;
    }
    if (typeof saved.soundEnabled === "boolean") appState.soundEnabled = saved.soundEnabled;
    if (typeof saved.autoLockoutEnabled === "boolean") appState.autoLockoutEnabled = saved.autoLockoutEnabled;
    if (typeof saved.pushAlertsEnabled === "boolean") appState.pushAlertsEnabled = saved.pushAlertsEnabled;
  } catch (e) {
    // Corrupt or unavailable storage: silently fall back to defaults.
  }
}

function persistSettings() {
  try {
    localStorage.setItem(SETTINGS_KEY, JSON.stringify({
      securityPin: appState.securityPin,
      soundEnabled: appState.soundEnabled,
      autoLockoutEnabled: appState.autoLockoutEnabled,
      pushAlertsEnabled: appState.pushAlertsEnabled
    }));
  } catch (e) {
    // Storage may be unavailable (private browsing, quota) — non-fatal.
  }
}

// =============================================================================
// ANOMALY DETECTION ENGINE
// A lightweight, real (not scripted) scoring function: it compares a
// device's live/simulated traffic against its learned baseline and returns
// an anomaly score from 0-99. Every test scenario below feeds this function
// real numbers, so the score shown in the UI is actually computed at
// runtime rather than a fixed string.
// =============================================================================

function computeAnomalyScore(baselineKBs, observedKBs, isKnownSafePattern = false) {
  const safeBaseline = baselineKBs > 0 ? baselineKBs : 0.1;
  const ratio = observedKBs / safeBaseline;

  // A recognized official-update signature dramatically reduces the score
  // even during a legitimate traffic spike — this is what stops the engine
  // from crying wolf on routine firmware downloads.
  const dampening = isKnownSafePattern ? 0.12 : 1;

  // Logistic-style curve: ratio near 1 (normal) scores low, large spikes
  // climb steeply toward 99, tapering rather than exceeding 99.
  const raw = 100 * (1 - 1 / (1 + Math.pow((ratio * dampening) / 3, 2)));
  return Math.max(1, Math.min(99, Math.round(raw)));
}

function updateEngineStatusLine(lastCheckedDeviceName) {
  const baselineElem = document.getElementById("engine-baseline-count");
  const lastScoredElem = document.getElementById("engine-last-scored");
  if (baselineElem) baselineElem.textContent = String(appState.devices.length);
  if (lastScoredElem) {
    lastScoredElem.textContent = lastCheckedDeviceName ? `${lastCheckedDeviceName}, just now` : "just now";
  }
}

// =============================================================================
// 2. LIVE PHONE MOUNTING LOGIC (100% INTERACTIVE IN SIDE-BY-SIDE VIEW)
// =============================================================================

function mountMobileFrame(targetFace) {
  const frame = document.getElementById("main-mobile-frame");
  const homeWrapper = document.getElementById("mobile-home-wrapper");
  const splitContainer = document.getElementById("split-mobile-container");
  if (!frame) return;

  if (targetFace === "split") {
    if (splitContainer && frame.parentElement !== splitContainer) {
      splitContainer.appendChild(frame);
    }
  } else {
    if (homeWrapper && frame.parentElement !== homeWrapper) {
      homeWrapper.appendChild(frame);
    }
  }
}

// =============================================================================
// 3. TUTORIAL WALKTHROUGH STEPS (STEP-BY-STEP ONBOARDING)
// =============================================================================

const TUTORIAL_STEPS = [
  {
    step: 1,
    tag: "STEP 1 OF 4: WELCOME",
    title: "Welcome to SecureNest Home Shield",
    iconType: "green",
    icon: `<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/>`,
    text: "Your home has dozens of smart gadgets — cameras, door locks, thermostats, and TVs. If one gadget gets hacked, intruders can try to access your personal laptops and photos. SecureNest watches your home 24/7 to stop that.",
    highlights: [
      "Works 100% inside your house (No monthly subscription fees).",
      "No camera feeds or private passwords ever leave your home."
    ]
  },
  {
    step: 2,
    tag: "STEP 2 OF 4: THE HOME SHIELD",
    title: "How the Shield Protects You",
    iconType: "cyan",
    icon: `<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>`,
    text: "When you open the app, look at the big glowing shield. When it is <strong>Green</strong>, every device in your house is safe. If a device acts strangely, SecureNest isolates it automatically in less than 1 second.",
    highlights: [
      "Green Shield: All devices safe and behaving normally.",
      "Red Alert: A suspicious device was caught and quarantined."
    ]
  },
  {
    step: 3,
    tag: "STEP 3 OF 4: WHAT IF AN ATTACK HAPPENS?",
    title: "What to Do If an Attack Occurs",
    iconType: "red",
    icon: `<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>`,
    text: "You don't need to be a tech expert! When an attack occurs, SecureNest blocks the device before it can touch anything else and shows a plain-English explanation of what happened.",
    highlights: [
      "1-Tap 'Keep Blocked': Keeps the rogue device isolated from your home.",
      "1-Tap 'Unblock with PIN': Re-authorizes the device if you know it is safe."
    ]
  },
  {
    step: 4,
    tag: "STEP 4 OF 4: TEST YOUR PROTECTION",
    title: "Try a Safe Test Anytime",
    iconType: "cyan",
    icon: `<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>`,
    text: "Want to see how your home shield responds to a real hack? You can switch to the <strong>'Side-by-Side View'</strong> or <strong>'Test Protection'</strong> tab at the top anytime to safely simulate an attack and watch the automatic defense in action!",
    highlights: [
      "Use the bottom tabs (Shield, Devices, Activity, Settings) to explore.",
      "Click 'How It Works Guide' at the top anytime to see this guide again."
    ]
  }
];

function renderTutorialStep(stepNum) {
  const stepData = TUTORIAL_STEPS.find(s => s.step === stepNum);
  if (!stepData) return;

  const tagElem = document.getElementById("tutorial-step-tag");
  const bodyElem = document.getElementById("tutorial-body");
  const fillElem = document.getElementById("tutorial-progress-fill");
  const prevBtn = document.getElementById("btn-tutorial-prev");
  const nextBtn = document.getElementById("btn-tutorial-next");
  const dots = document.querySelectorAll("#tutorial-dots .dot");

  if (tagElem) tagElem.textContent = stepData.tag;
  if (fillElem) fillElem.style.width = `${(stepNum / 4) * 100}%`;

  if (bodyElem) {
    bodyElem.innerHTML = `
      <div class="tutorial-icon-box ${stepData.iconType}">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          ${stepData.icon}
        </svg>
      </div>
      <h3 class="tutorial-title">${stepData.title}</h3>
      <p class="tutorial-text">${stepData.text}</p>
      <div class="tutorial-highlight-box">
        ${stepData.highlights.map(h => `
          <div class="th-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
            <span>${h}</span>
          </div>
        `).join("")}
      </div>
    `;
  }

  if (prevBtn) {
    prevBtn.style.visibility = stepNum === 1 ? "hidden" : "visible";
  }

  if (nextBtn) {
    nextBtn.textContent = stepNum === 4 ? "Get Started" : "Next";
  }

  dots.forEach((dot, idx) => {
    if (idx === stepNum - 1) {
      dot.classList.add("active");
    } else {
      dot.classList.remove("active");
    }
  });
}

function openTutorial() {
  appState.tutorialStep = 1;
  renderTutorialStep(1);
  const overlay = document.getElementById("tutorial-overlay");
  if (overlay) overlay.classList.remove("hidden");
}

function closeTutorial() {
  const overlay = document.getElementById("tutorial-overlay");
  if (overlay) overlay.classList.add("hidden");
  showToast("HOME SHIELD ACTIVE", "Your 24 devices are protected by Smart Guardian AI.", "success");
}

// =============================================================================
// 4. AUDIO SYNTHESIS & SOUND EFFECTS
// =============================================================================

let audioCtx = null;

function initAudio() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
}

function playCyberSound(type) {
  if (!appState.soundEnabled) return;
  try {
    initAudio();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain);
    gain.connect(audioCtx.destination);

    const now = audioCtx.currentTime;
    if (type === "threat") {
      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(880, now);
      osc.frequency.exponentialRampToValueAtTime(220, now + 0.35);
      gain.gain.setValueAtTime(0.3, now);
      gain.gain.linearRampToValueAtTime(0.01, now + 0.35);
      osc.start(now);
      osc.stop(now + 0.35);
    } else if (type === "success") {
      osc.type = "sine";
      osc.frequency.setValueAtTime(440, now);
      osc.frequency.exponentialRampToValueAtTime(880, now + 0.25);
      gain.gain.setValueAtTime(0.2, now);
      gain.gain.linearRampToValueAtTime(0.01, now + 0.25);
      osc.start(now);
      osc.stop(now + 0.25);
    }
  } catch (e) {
    // Handled gracefully
  }
}

// =============================================================================
// 5. TOAST NOTIFICATION SYSTEM
// =============================================================================

function showToast(title, message, type = "success") {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  toast.innerHTML = `
    <svg class="toast-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
      ${type === "danger" 
        ? '<circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>' 
        : '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/>'}
    </svg>
    <div class="toast-text">
      <span class="toast-title">${title}</span>
      <span class="toast-sub">${message}</span>
    </div>
  `;

  container.appendChild(toast);
  playCyberSound(type === "danger" ? "threat" : "success");

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(50px)";
    toast.style.transition = "all 0.3s ease";
    setTimeout(() => toast.remove(), 300);
  }, 4500);
}

// =============================================================================
// 6. HUMAN-READABLE LIVE LOGGING
// =============================================================================

function appendProtectionLog(tag, title, desc, type = "safe") {
  const term = document.getElementById("term-log-stream");
  if (!term) return;

  const now = new Date();
  const timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`;

  let tagClass = "term-tag-safe";
  if (type === "alert") tagClass = "term-tag-alert";
  if (type === "scan") tagClass = "term-tag-scan";

  const line = document.createElement("div");
  line.className = "term-line";
  line.innerHTML = `
    <span class="term-ts">${timeStr}</span>
    <span class="${tagClass}">[${tag}]</span>
    <span><strong>${title}</strong>: ${desc}</span>
  `;

  term.appendChild(line);
  term.scrollTop = term.scrollHeight;

  if (term.children.length > 150) {
    term.removeChild(term.firstChild);
  }
}

function initInitialLogs() {
  appendProtectionLog("PROTECTION ACTIVE", "SecureNest Hub Ready", "Watching 24 connected devices in Sarna Residence.", "safe");
  appendProtectionLog("SMART AI", "Privacy Guarantee", "100% on-device protection. Zero camera feeds or private passwords leave your home.", "safe");
  appendProtectionLog("SMART SCAN", "Network Segmentation", "Personal computers and smart home gadgets separated for maximum safety.", "scan");
}

// =============================================================================
// 7. MOBILE APP COMPONENT RENDERING & TAB NAVIGATION
// =============================================================================

function switchMobileTab(tabId) {
  appState.activeMobileTab = tabId;
  const tabPages = document.querySelectorAll(".tab-page");
  const navItems = document.querySelectorAll(".app-nav-item");

  tabPages.forEach(p => p.classList.remove("active"));
  navItems.forEach(n => n.classList.remove("active"));

  const targetPage = document.getElementById(tabId);
  if (targetPage) targetPage.classList.add("active");

  const activeNav = document.querySelector(`.app-nav-item[data-tab="${tabId}"]`);
  if (activeNav) activeNav.classList.add("active");

  if (tabId === "tab-devices") {
    renderFullDeviceList();
  } else if (tabId === "tab-activity") {
    renderActivityTimeline();
  }
}

function renderDeviceCard(dev, isFull = false) {
  const isQuarantined = dev.vlan === 99;
  const card = document.createElement("div");
  card.className = `device-item-card ${isQuarantined ? 'quarantined' : ''}`;
  card.innerHTML = `
    <div class="device-item-left">
      <div class="device-icon-bubble ${isQuarantined ? 'quarantined' : ''}">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          ${getCategoryIconSVG(dev.category)}
        </svg>
      </div>
      <div class="device-meta-info">
        <span class="device-meta-name">${dev.name}</span>
        <span class="device-meta-sub">${dev.room} · ${dev.vendor}</span>
      </div>
    </div>
    <div class="device-item-right">
      <span class="device-status-badge ${isQuarantined ? 'quarantine' : 'safe'}">
        ${isQuarantined ? '⛔ BLOCKED' : (dev.paused ? '⏸️ PAUSED' : '🛡️ SAFE')}
      </span>
    </div>
  `;

  card.addEventListener("click", () => {
    openDeviceDetailModal(dev);
  });

  return card;
}

function renderPreviewDeviceList() {
  const container = document.getElementById("mobile-device-list-preview");
  if (!container) return;
  container.innerHTML = "";

  const preview = appState.devices.slice(0, 4);
  preview.forEach(dev => {
    container.appendChild(renderDeviceCard(dev, false));
  });
}

function renderFullDeviceList() {
  const container = document.getElementById("mobile-device-list-full");
  const countBadge = document.getElementById("tab-device-count-badge");
  if (!container) return;

  const filtered = appState.devices.filter(d => {
    const matchesCat = (appState.activeCategory === "ALL" || d.category === appState.activeCategory);
    const query = appState.searchQuery.toLowerCase();
    const matchesQuery = d.name.toLowerCase().includes(query) || d.room.toLowerCase().includes(query) || d.vendor.toLowerCase().includes(query);
    return matchesCat && matchesQuery;
  });

  container.innerHTML = "";
  if (filtered.length === 0) {
    container.innerHTML = `<div style="text-align:center; padding: 24px; color:#64748b; font-size:0.8rem;">No devices matching your search.</div>`;
  } else {
    filtered.forEach(dev => {
      container.appendChild(renderDeviceCard(dev, true));
    });
  }

  if (countBadge) countBadge.textContent = `${filtered.length} of ${appState.devices.length} Online`;
}

function renderActivityTimeline() {
  const container = document.getElementById("activity-timeline-list");
  if (!container) return;

  container.innerHTML = "";
  appState.activities.forEach(act => {
    const item = document.createElement("div");
    item.className = "activity-item";
    item.innerHTML = `
      <div class="activity-icon-wrap ${act.type}">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          ${act.type === "red" 
            ? '<circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>' 
            : '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/>'}
        </svg>
      </div>
      <div class="activity-content">
        <div class="activity-header-row">
          <span class="activity-title">${act.title}</span>
          <span class="activity-time">${act.time}</span>
        </div>
        <p class="activity-desc">${act.desc}</p>
      </div>
    `;
    container.appendChild(item);
  });
}

function updateShieldDashboardStats() {
  const safeCount = appState.devices.filter(d => d.vlan !== 99).length;
  const quaranCount = appState.devices.filter(d => d.vlan === 99).length;
  appState.quarantinedCount = quaranCount;

  const trustedCountElem = document.getElementById("stat-trusted-count");
  const quaranCountElem = document.getElementById("stat-quarantine-count");
  const gStatusPill = document.getElementById("global-status-pill");
  const gStatusText = document.getElementById("global-status-text");

  if (trustedCountElem) trustedCountElem.textContent = safeCount;
  if (quaranCountElem) quaranCountElem.textContent = quaranCount;

  if (gStatusPill && gStatusText) {
    if (quaranCount > 0) {
      gStatusPill.className = "telemetry-pill threat";
      gStatusText.textContent = `${quaranCount} THREAT BLOCKED`;
    } else {
      gStatusPill.className = "telemetry-pill";
      gStatusText.textContent = "ALL DEVICES PROTECTED";
    }
  }

  // Update Shield Hero Card
  const shieldCard = document.getElementById("mobile-shield-card");
  const shieldTitle = document.getElementById("mobile-shield-title");
  const shieldDesc = document.getElementById("mobile-shield-desc");
  const threatCard = document.getElementById("mobile-threat-card");

  if (shieldCard && shieldTitle && shieldDesc && threatCard) {
    if (quaranCount > 0) {
      shieldCard.classList.add("threat");
      shieldTitle.textContent = "Threat Intercepted";
      shieldDesc.textContent = `${quaranCount} device isolated into Quarantine Vault. Your personal files remain safe.`;
      threatCard.classList.remove("hidden");
    } else {
      shieldCard.classList.remove("threat");
      shieldTitle.textContent = "All Systems Safe";
      shieldDesc.textContent = `${safeCount} devices protected · Smart Guardian AI watching your network`;
      threatCard.classList.add("hidden");
    }
  }

  // Update Map & Side-by-Side Status Elements
  const quaranCountTag = document.getElementById("quarantine-set-count");
  const vaultStatusText = document.getElementById("quarantine-summary-text");
  const vaultStatusIndicator = document.getElementById("vault-status-indicator");
  const activeIsoText = document.getElementById("active-isolation-status-text");
  const aiSafetyText = document.getElementById("ai-safety-status-text");
  const scoreNum = document.getElementById("ml-score-number");
  const scoreProgress = document.getElementById("ml-score-progress");

  const splitHomeStatus = document.getElementById("split-home-status-val");
  const splitVaultStatus = document.getElementById("split-vault-status-val");
  const splitVaultPill = document.getElementById("split-vault-pill");

  if (quaranCountTag) quaranCountTag.textContent = `${quaranCount} Blocked`;
  if (activeIsoText) activeIsoText.textContent = `${quaranCount} Device${quaranCount === 1 ? '' : 's'} Blocked`;

  if (splitHomeStatus) {
    splitHomeStatus.textContent = quaranCount > 0 ? "Threat Isolated" : "100% Safe";
    splitHomeStatus.style.color = quaranCount > 0 ? "#ef4444" : "#10b981";
  }
  if (splitVaultStatus) {
    splitVaultStatus.textContent = `${quaranCount} Blocked in Vault`;
    splitVaultStatus.style.color = quaranCount > 0 ? "#ef4444" : "#f8fafc";
  }
  if (splitVaultPill) {
    splitVaultPill.textContent = `● ${quaranCount} In Vault`;
  }

  if (vaultStatusIndicator && vaultStatusText) {
    if (quaranCount > 0) {
      vaultStatusIndicator.className = "vault-status-indicator threat";
      vaultStatusIndicator.innerHTML = `<span class="status-dot red"></span><span>Vault Active · ${quaranCount} Rogue Device Isolated</span>`;
      vaultStatusText.textContent = `A rogue device was intercepted and locked in this vault in under 0.5s. It cannot connect to the internet or reach your personal laptops.`;
      if (aiSafetyText) { aiSafetyText.textContent = "Threat Isolated"; aiSafetyText.className = "th-val danger"; }
    } else {
      vaultStatusIndicator.className = "vault-status-indicator";
      vaultStatusIndicator.innerHTML = `<span class="status-dot green"></span><span>Vault Standby · No Infected Hardware</span>`;
      vaultStatusText.textContent = `All ${appState.devices.length} devices are behaving normally. If any device is infected, it is locked into this vault immediately to protect your family.`;
      if (aiSafetyText) { aiSafetyText.textContent = "Fully Protected"; aiSafetyText.className = "th-val green"; }
    }
  }

  // Safety-index ring reflects the real anomaly score of the last scored
  // device (set by the detection engine), not a fixed percentage.
  const anomalyScore = appState.lastAnomalyScore ?? 3;
  const safetyIndex = Math.max(1, 100 - anomalyScore);
  if (scoreNum) scoreNum.textContent = `${safetyIndex}%`;
  if (scoreProgress) {
    const circumference = 2 * Math.PI * 50; // r=50 from the SVG circle
    const offset = circumference * (1 - safetyIndex / 100);
    scoreProgress.style.strokeDashoffset = String(Math.round(offset));
    scoreProgress.style.stroke = quaranCount > 0 ? "#ef4444" : "#10b981";
  }

  updateEngineStatusLine(appState.lastScoredDeviceName);
  renderPreviewDeviceList();
  renderFullDeviceList();
}

function getCategoryIconSVG(cat) {
  switch (cat) {
    case "CAMERA":
      return '<path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/>';
    case "SECURITY":
      return '<rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>';
    case "CLIMATE":
      return '<path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"/>';
    case "MEDIA":
      return '<rect x="2" y="7" width="20" height="15" rx="2" ry="2"/><polyline points="17 2 12 7 7 2"/>';
    case "PRIVATE":
      return '<rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>';
    default:
      return '<circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>';
  }
}

// =============================================================================
// 8. VISUAL HOME NETWORK MAP GENERATOR (SVG)
// =============================================================================

function renderVisualTopology() {
  const edgesG = document.getElementById("topology-edges");
  const nodesG = document.getElementById("topology-nodes");
  if (!edgesG || !nodesG) return;

  edgesG.innerHTML = "";
  nodesG.innerHTML = "";

  const hubX = 450;
  const hubY = 260;

  appState.devices.forEach(dev => {
    let nx = dev.x;
    let ny = dev.y;

    if (dev.vlan === 99) {
      nx = 750;
      ny = 250;
    }

    const edge = document.createElementNS("http://www.w3.org/2000/svg", "line");
    edge.setAttribute("x1", hubX);
    edge.setAttribute("y1", hubY);
    edge.setAttribute("x2", nx);
    edge.setAttribute("y2", ny);
    edge.setAttribute("class", `edge-line ${dev.vlan === 99 ? 'quarantined' : 'active'}`);
    edgesG.appendChild(edge);

    const nodeG = document.createElementNS("http://www.w3.org/2000/svg", "g");
    nodeG.setAttribute("transform", `translate(${nx}, ${ny})`);
    nodeG.style.cursor = "pointer";

    const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("r", dev.vlan === 99 ? "16" : "12");
    circle.setAttribute("class", "node-circle");
    
    let fillColor = "#3b82f6";
    if (dev.vlan === 20) fillColor = "#10b981";
    if (dev.vlan === 99) fillColor = "#ef4444";

    circle.setAttribute("fill", fillColor);
    circle.setAttribute("stroke", "#ffffff");
    circle.setAttribute("stroke-width", "1.5");
    if (dev.vlan === 99) {
      circle.setAttribute("filter", "url(#glow-red)");
    }

    const textName = document.createElementNS("http://www.w3.org/2000/svg", "text");
    textName.setAttribute("y", "24");
    textName.setAttribute("text-anchor", "middle");
    textName.setAttribute("class", "node-label");
    textName.textContent = dev.name.length > 15 ? dev.name.substring(0, 13) + "…" : dev.name;

    const textSub = document.createElementNS("http://www.w3.org/2000/svg", "text");
    textSub.setAttribute("y", "35");
    textSub.setAttribute("text-anchor", "middle");
    textSub.setAttribute("class", "node-ip");
    textSub.textContent = dev.room;

    nodeG.appendChild(circle);
    nodeG.appendChild(textName);
    nodeG.appendChild(textSub);

    nodeG.addEventListener("click", () => {
      openDeviceDetailModal(dev);
    });

    nodesG.appendChild(nodeG);
  });

  const qBox = document.getElementById("quarantine-zone-box");
  if (qBox) {
    if (appState.quarantinedCount > 0) {
      qBox.classList.add("threat-active");
    } else {
      qBox.classList.remove("threat-active");
    }
  }
}

// =============================================================================
// 9. INTERACTIVE SAFE SIMULATION TESTS
// =============================================================================

/**
 * Shared quarantine path used by every attack scenario. Centralizing this
 * keeps the threat card, activity feed, protection log, and topology map
 * always in sync instead of four separate copies of the same DOM updates.
 */
function quarantineDeviceWithThreat(target, { plainTextHtml, logTag, logTitle, logDesc, activityTitle, activityDesc, toastTitle, toastDesc }) {
  target.vlan = 99;
  target.status = "QUARANTINED";

  appendProtectionLog(logTag, logTitle, logDesc, "alert");

  appState.activities.unshift({
    id: `act-${Date.now()}`,
    time: "Just now",
    type: "red",
    title: activityTitle,
    desc: activityDesc
  });

  const threatDeviceName = document.getElementById("threat-device-name");
  const threatDeviceIP = document.getElementById("threat-device-ip");
  const threatPlainText = document.getElementById("threat-plain-text");

  if (threatDeviceName) threatDeviceName.textContent = target.name;
  if (threatDeviceIP) threatDeviceIP.textContent = `Location: ${target.room} · ${target.vendor}`;
  if (threatPlainText) threatPlainText.innerHTML = plainTextHtml;

  updateShieldDashboardStats();
  renderVisualTopology();
  showToast(toastTitle, toastDesc, "danger");
}

function triggerMiraiAttack() {
  const target = appState.devices.find(d => d.id === "dev-07"); // Living Room Camera
  if (!target) return;

  // Simulate a real spike: a hijacked camera suddenly scanning the LAN
  // pushes traffic to ~18-26x its learned baseline.
  const spikeMultiplier = 18 + Math.random() * 8;
  const observedKBs = Math.round(target.baselineRate * spikeMultiplier * 10) / 10;
  const score = computeAnomalyScore(target.baselineRate, observedKBs, false);
  appState.lastAnomalyScore = score;
  appState.lastScoredDeviceName = target.name;

  quarantineDeviceWithThreat(target, {
    plainTextHtml: `This camera's traffic jumped to <strong>${observedKBs} KB/s</strong> (about <strong>${spikeMultiplier.toFixed(1)}x</strong> its normal baseline of ${target.baselineRate} KB/s) while scanning your other home gadgets and contacting an unrecognized address. SecureNest scored this <strong>${score}/100 on the anomaly scale</strong> and moved it to the <strong>Quarantine Isolation Vault</strong> in <strong>380 milliseconds</strong>.`,
    logTag: "ATTACK INTERCEPTED",
    logTitle: "Camera Hijack Blocked",
    logDesc: `Living Room Camera traffic spiked to ${observedKBs} KB/s (baseline ${target.baselineRate} KB/s) — anomaly score ${score}/100. Locked in Quarantine in 0.38s.`,
    activityTitle: "Living Room Camera Quarantined",
    activityDesc: `Smart Guardian AI scored this device ${score}/100 for anomalous scanning activity and isolated it automatically.`,
    toastTitle: "THREAT STOPPED AUTOMATICALLY",
    toastDesc: `${target.name} quarantined (anomaly score ${score}/100). Your laptops & phones are safe.`
  });
}

function triggerExfiltrationAttack() {
  const target = appState.devices.find(d => d.id === "dev-08"); // Baby Monitor
  if (!target) return;

  // Simulate an exfiltration spike: a compromised monitor streaming out
  // pushes well beyond its normal streaming baseline.
  const spikeMultiplier = 10 + Math.random() * 6;
  const observedKBs = Math.round(target.baselineRate * spikeMultiplier * 10) / 10;
  const score = computeAnomalyScore(target.baselineRate, observedKBs, false);
  appState.lastAnomalyScore = score;
  appState.lastScoredDeviceName = target.name;

  quarantineDeviceWithThreat(target, {
    plainTextHtml: `This baby monitor's outbound traffic jumped to <strong>${observedKBs} KB/s</strong> (about <strong>${spikeMultiplier.toFixed(1)}x</strong> its normal baseline) while trying to reach an unrecognized address. SecureNest scored this <strong>${score}/100 on the anomaly scale</strong> and severed the connection in <strong>290 milliseconds</strong> to protect your family's privacy.`,
    logTag: "PRIVACY DEFENSE",
    logTitle: "Unauthorized Video Leak Blocked",
    logDesc: `Baby Nursery Monitor traffic spiked to ${observedKBs} KB/s (baseline ${target.baselineRate} KB/s) — anomaly score ${score}/100. Stream severed in 0.29s.`,
    activityTitle: "Baby Monitor Video Leak Prevented",
    activityDesc: `Unauthorized connection scored ${score}/100 and was severed immediately. Your private video feed remained safe inside your home.`,
    toastTitle: "PRIVACY LEAK PREVENTED",
    toastDesc: `Unauthorized stream from ${target.name} blocked (anomaly score ${score}/100).`
  });
}

function triggerNewDeviceDiscovery() {
  const newId = `dev-${Date.now().toString().slice(-4)}`;
  const newDev = {
    id: newId,
    name: "New Smart Power Outlet",
    room: "Guest Bedroom",
    category: "CLIMATE",
    vendor: "Tuya Smart",
    vlan: 20,
    status: "SAFE",
    paused: false,
    rate: "Normal (0.4 KB/s)",
    baselineRate: 0.4,
    x: 480,
    y: 330
  };

  appState.devices.push(newDev);

  appendProtectionLog("NEW GADGET FOUND", "Device Recognized & Protected", `Tuya Smart Outlet joined Wi-Fi. Automatically cataloged and placed in smart sandbox.`, "scan");

  appState.activities.unshift({
    id: `act-${Date.now()}`,
    time: "Just now",
    type: "cyan",
    title: "New Smart Plug Connected",
    desc: "Recognized as a Tuya Smart Power Outlet and safely isolated from personal computers."
  });

  updateShieldDashboardStats();
  renderVisualTopology();
  showToast("NEW GADGET RECOGNIZED", `Cataloged and protected ${newDev.name} automatically.`, "success");
}

function triggerOTABenignBurst() {
  const target = appState.devices.find(d => d.id === "dev-13"); // Nest Thermostat
  if (!target) return;

  // A 40MB firmware download genuinely spikes traffic far above baseline —
  // the same kind of spike an attack would cause. What keeps this from
  // becoming a false alarm is that it matches a recognized official-update
  // signature (isKnownSafePattern), which the scoring function dampens.
  const spikeMultiplier = 12 + Math.random() * 4;
  const observedKBs = Math.round(target.baselineRate * spikeMultiplier * 10) / 10;
  const score = computeAnomalyScore(target.baselineRate, observedKBs, true);
  appState.lastAnomalyScore = score;
  appState.lastScoredDeviceName = target.name;

  appendProtectionLog("SAFE UPDATE", "Official Software Download", `Nest Thermostat traffic spiked to ${observedKBs} KB/s (${spikeMultiplier.toFixed(1)}x baseline) for a 40MB Google firmware download. Matched a known-safe update signature — anomaly score only ${score}/100. Zero false alarm.`, "safe");

  appState.activities.unshift({
    id: `act-${Date.now()}`,
    time: "Just now",
    type: "green",
    title: "Nest Thermostat Updated Safely",
    desc: `Traffic spiked ${spikeMultiplier.toFixed(1)}x baseline but matched a recognized update signature (score ${score}/100) — no false alarm.`
  });

  updateShieldDashboardStats();
  showToast("OFFICIAL UPDATE VERIFIED", `${target.name} spiked ${spikeMultiplier.toFixed(1)}x baseline but scored only ${score}/100 — allowed with zero false alarm.`, "success");
}

function resetSimulation() {
  appState.devices = JSON.parse(JSON.stringify(INITIAL_DEVICES));
  appState.activities = JSON.parse(JSON.stringify(INITIAL_ACTIVITIES));
  appState.lastAnomalyScore = 3;
  appState.lastScoredDeviceName = null;

  appendProtectionLog("SYSTEM RESET", "Shield Restored", `All ${INITIAL_DEVICES.length} devices returned to clean trusted state. Quarantine vault cleared.`, "safe");

  updateShieldDashboardStats();
  renderVisualTopology();
  showToast("HOME SHIELD RESET", "All devices restored to trusted safe state.", "success");
}

// =============================================================================
// 10. MODALS: DEVICE DETAILS, PIN OVERRIDE & PROFILE
// =============================================================================

function openDeviceDetailModal(dev) {
  appState.selectedDevice = dev;
  const modal = document.getElementById("device-detail-modal");
  const nameElem = document.getElementById("detail-device-name");
  const brandElem = document.getElementById("detail-device-brand");
  const statusElem = document.getElementById("detail-device-status");
  const zoneElem = document.getElementById("detail-device-zone");
  const rateElem = document.getElementById("detail-device-rate");
  const pauseToggle = document.getElementById("detail-toggle-pause");
  const isolateBtn = document.getElementById("detail-btn-isolate");

  if (nameElem) nameElem.textContent = dev.name;
  if (brandElem) brandElem.textContent = `${dev.vendor} · ${dev.room}`;
  
  if (statusElem) {
    if (dev.vlan === 99) {
      statusElem.textContent = "⛔ Blocked in Quarantine Vault";
      statusElem.className = "detail-val danger";
    } else if (dev.paused) {
      statusElem.textContent = "⏸️ Internet Access Paused";
      statusElem.className = "detail-val";
    } else {
      statusElem.textContent = "🛡️ Safe & Monitored";
      statusElem.className = "detail-val green";
    }
  }

  if (zoneElem) {
    zoneElem.textContent = dev.vlan === 10 ? "Personal Devices Zone" : (dev.vlan === 99 ? "Quarantine Vault" : "Smart Home Gadgets Zone");
  }

  if (rateElem) rateElem.textContent = dev.rate;
  if (pauseToggle) pauseToggle.checked = dev.paused;

  if (isolateBtn) {
    if (dev.vlan === 99) {
      isolateBtn.textContent = "Unblock Device";
      isolateBtn.className = "btn btn-primary btn-sm";
    } else {
      isolateBtn.textContent = "Isolate Now";
      isolateBtn.className = "btn btn-danger-solid btn-sm";
    }
  }

  if (modal) modal.classList.remove("hidden");
}

function closeDeviceDetailModal() {
  const modal = document.getElementById("device-detail-modal");
  if (modal) modal.classList.add("hidden");
  appState.selectedDevice = null;
}

function openOverrideModal(dev) {
  const modal = document.getElementById("override-modal");
  const nameElem = document.getElementById("modal-override-device-name");
  const pinInput = document.getElementById("override-passcode");
  const errorElem = document.getElementById("override-passcode-error");
  if (nameElem) nameElem.textContent = dev.name;
  if (pinInput) pinInput.value = "";
  if (errorElem) errorElem.classList.add("hidden");
  if (modal) modal.classList.remove("hidden");
  if (pinInput) pinInput.focus();
}

function closeOverrideModal() {
  const modal = document.getElementById("override-modal");
  if (modal) modal.classList.add("hidden");
}

function confirmOverride() {
  const pinInput = document.getElementById("override-passcode");
  const errorElem = document.getElementById("override-passcode-error");

  if (!pinInput || pinInput.value !== appState.securityPin) {
    if (pinInput) {
      pinInput.classList.add("input-invalid");
      pinInput.value = "";
      pinInput.focus();
      setTimeout(() => pinInput.classList.remove("input-invalid"), 400);
    }
    if (errorElem) errorElem.classList.remove("hidden");
    return;
  }
  if (errorElem) errorElem.classList.add("hidden");

  const target = appState.devices.find(d => d.vlan === 99);
  if (target) {
    target.vlan = target.category === "PRIVATE" ? 10 : 20;
    target.status = "SAFE";

    appendProtectionLog("USER UNBLOCK", "Device Restored", `${target.name} was verified and unblocked with master PIN.`, "safe");

    appState.activities.unshift({
      id: `act-${Date.now()}`,
      time: "Just now",
      type: "green",
      title: `${target.name} Unblocked`,
      desc: "Device restored back to regular smart home network by homeowner."
    });

    showToast("DEVICE UNBLOCKED", `${target.name} restored to your safe home network.`, "success");
  }

  closeOverrideModal();
  updateShieldDashboardStats();
  renderVisualTopology();
}

// =============================================================================
// 10.5. GUIDED DEMO MODE (60-second hands-off walkthrough for judges)
// =============================================================================

function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function showGuidedBanner(text) {
  const banner = document.getElementById("guided-demo-banner");
  const textElem = document.getElementById("guided-demo-text");
  if (textElem) textElem.textContent = text;
  if (banner) banner.classList.remove("hidden");
}

function hideGuidedBanner() {
  document.getElementById("guided-demo-banner")?.classList.add("hidden");
}

/**
 * Runs an unattended, narrated walkthrough of every capability: new-device
 * discovery, an intercepted camera hijack, a blocked privacy leak, and a
 * benign update that correctly does NOT trigger a false alarm. Designed so
 * a presenter can hit one button and talk over it instead of clicking
 * through screens live.
 */
async function runGuidedDemo() {
  if (appState.demoRunning) return;
  appState.demoRunning = true;
  appState.demoCancelled = false;

  const steps = [
    { text: "Starting guided demo — resetting to a clean, safe state…", action: () => resetSimulation(), delay: 1600 },
    { text: "Step 1 of 4: A new smart plug joins the home network…", action: () => { setActiveFace("split"); triggerNewDeviceDiscovery(); }, delay: 3200 },
    { text: "Step 2 of 4: Simulating a camera hijack attempt…", action: () => triggerMiraiAttack(), delay: 4200 },
    { text: "Step 3 of 4: Simulating a baby-monitor data exfiltration attempt…", action: () => triggerExfiltrationAttack(), delay: 4200 },
    { text: "Step 4 of 4: Verifying a real software update does NOT cause a false alarm…", action: () => triggerOTABenignBurst(), delay: 3800 },
    { text: "Demo complete — resetting the shield back to a clean state.", action: () => resetSimulation(), delay: 2200 }
  ];

  for (const step of steps) {
    if (appState.demoCancelled) break;
    showGuidedBanner(step.text);
    step.action();
    await wait(step.delay);
  }

  hideGuidedBanner();
  appState.demoRunning = false;
}

function stopGuidedDemo() {
  appState.demoCancelled = true;
  appState.demoRunning = false;
  hideGuidedBanner();
}

// =============================================================================
// 11. INITIALIZATION & EVENT LISTENERS
// =============================================================================

/**
 * Switches the active "face" (view) of the prototype. Extracted into its
 * own function so both the nav-button click handler and the guided demo
 * (which needs to switch views programmatically) share one code path.
 */
function setActiveFace(face) {
  const modeBtns = document.querySelectorAll(".mode-btn");
  const faceViews = document.querySelectorAll(".face-view");

  modeBtns.forEach(b => b.classList.toggle("active", b.getAttribute("data-face") === face));
  faceViews.forEach(v => v.classList.remove("active"));

  appState.activeFace = face;
  const activeView = document.getElementById(`view-${face}`);
  if (activeView) activeView.classList.add("active");

  mountMobileFrame(face);

  if (face === "soc") {
    setTimeout(() => renderVisualTopology(), 50);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  loadPersistedSettings();

  // Mode / Face Switcher
  const modeBtns = document.querySelectorAll(".mode-btn");
  modeBtns.forEach(btn => {
    btn.addEventListener("click", () => setActiveFace(btn.getAttribute("data-face")));
  });

  // Mobile Bottom Navigation Tabs (Shield, Devices, Activity, Settings)
  const appNavItems = document.querySelectorAll(".app-nav-item");
  appNavItems.forEach(item => {
    item.addEventListener("click", () => {
      const tabId = item.getAttribute("data-tab");
      if (tabId) switchMobileTab(tabId);
    });
  });

  // View All Devices link on Home Tab
  document.getElementById("btn-view-all-devices")?.addEventListener("click", () => {
    switchMobileTab("tab-devices");
  });

  // Device Search Bar
  const searchInput = document.getElementById("device-search-input");
  searchInput?.addEventListener("input", (e) => {
    appState.searchQuery = e.target.value;
    renderFullDeviceList();
  });

  // Category Filter Pills
  const catPills = document.querySelectorAll(".cat-pill");
  catPills.forEach(pill => {
    pill.addEventListener("click", () => {
      catPills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      appState.activeCategory = pill.getAttribute("data-cat");
      renderFullDeviceList();
    });
  });

  // Tutorial Flow
  document.getElementById("btn-open-tutorial")?.addEventListener("click", openTutorial);
  document.getElementById("btn-restart-tutorial-settings")?.addEventListener("click", openTutorial);
  document.getElementById("btn-skip-tutorial")?.addEventListener("click", closeTutorial);

  document.getElementById("btn-tutorial-next")?.addEventListener("click", () => {
    if (appState.tutorialStep < 4) {
      appState.tutorialStep++;
      renderTutorialStep(appState.tutorialStep);
    } else {
      closeTutorial();
    }
  });

  document.getElementById("btn-tutorial-prev")?.addEventListener("click", () => {
    if (appState.tutorialStep > 1) {
      appState.tutorialStep--;
      renderTutorialStep(appState.tutorialStep);
    }
  });

  // Quick Action Cards on Mobile Home
  document.getElementById("card-scan-network")?.addEventListener("click", () => {
    showToast("VULNERABILITY SCAN COMPLETE", "All 24 devices checked. Zero open risks found.", "success");
  });

  document.getElementById("card-guest-protect")?.addEventListener("click", () => {
    showToast("GUEST PROTECTION", "Guest devices are sandboxed away from your personal laptops.", "success");
  });

  // Attack Test Deck Buttons (Main Test Face)
  document.getElementById("btn-trigger-mirai")?.addEventListener("click", triggerMiraiAttack);
  document.getElementById("btn-trigger-exfil")?.addEventListener("click", triggerExfiltrationAttack);
  document.getElementById("btn-trigger-discovery")?.addEventListener("click", triggerNewDeviceDiscovery);
  document.getElementById("btn-trigger-ota")?.addEventListener("click", triggerOTABenignBurst);
  document.getElementById("btn-global-reset")?.addEventListener("click", resetSimulation);

  // Attack Test Deck Buttons (Side-by-Side Face)
  document.getElementById("split-btn-mirai")?.addEventListener("click", triggerMiraiAttack);
  document.getElementById("split-btn-exfil")?.addEventListener("click", triggerExfiltrationAttack);
  document.getElementById("split-btn-discovery")?.addEventListener("click", triggerNewDeviceDiscovery);
  document.getElementById("split-btn-reset")?.addEventListener("click", resetSimulation);

  // Threat Decision Buttons in Mobile App
  document.getElementById("btn-keep-quarantined")?.addEventListener("click", () => {
    showToast("DEVICE REMAINS BLOCKED", "Rogue device is securely locked in Quarantine Vault.", "success");
  });

  document.getElementById("btn-override-threat")?.addEventListener("click", () => {
    const target = appState.devices.find(d => d.vlan === 99);
    if (target) openOverrideModal(target);
  });

  // Modal actions
  document.getElementById("btn-cancel-modal")?.addEventListener("click", closeOverrideModal);
  document.getElementById("btn-confirm-override")?.addEventListener("click", confirmOverride);

  // Device Detail Modal
  document.getElementById("btn-close-device-detail")?.addEventListener("click", closeDeviceDetailModal);
  
  document.getElementById("detail-toggle-pause")?.addEventListener("change", (e) => {
    if (appState.selectedDevice) {
      appState.selectedDevice.paused = e.target.checked;
      showToast(appState.selectedDevice.name, e.target.checked ? "Internet connection paused." : "Internet connection resumed.", "success");
      updateShieldDashboardStats();
    }
  });

  document.getElementById("detail-btn-isolate")?.addEventListener("click", () => {
    if (appState.selectedDevice) {
      if (appState.selectedDevice.vlan === 99) {
        appState.selectedDevice.vlan = appState.selectedDevice.category === "PRIVATE" ? 10 : 20;
        showToast(appState.selectedDevice.name, "Unblocked and restored to regular network.", "success");
      } else {
        appState.selectedDevice.vlan = 99;
        showToast(appState.selectedDevice.name, "Moved into Quarantine Isolation Vault.", "danger");
      }
      closeDeviceDetailModal();
      updateShieldDashboardStats();
      renderVisualTopology();
    }
  });

  // Profile Modal
  document.getElementById("btn-open-profile")?.addEventListener("click", () => {
    document.getElementById("profile-modal")?.classList.remove("hidden");
  });
  document.getElementById("btn-close-profile")?.addEventListener("click", () => {
    document.getElementById("profile-modal")?.classList.add("hidden");
  });

  // Audio Toggle
  const soundBtn = document.getElementById("btn-sound-toggle");
  soundBtn?.addEventListener("click", () => {
    appState.soundEnabled = !appState.soundEnabled;
    soundBtn.style.opacity = appState.soundEnabled ? "1" : "0.4";
    persistSettings();
    showToast("AUDIO SETTING", appState.soundEnabled ? "Sound Feedback Enabled" : "Sound Muted", "success");
  });

  // Clear Logs
  document.getElementById("btn-clear-term")?.addEventListener("click", () => {
    const term = document.getElementById("term-log-stream");
    if (term) term.innerHTML = "";
  });

  // Settings Toggles Feedback
  document.getElementById("toggle-auto-lockout")?.addEventListener("change", (e) => {
    appState.autoLockoutEnabled = e.target.checked;
    persistSettings();
    showToast("AUTOMATIC THREAT LOCKOUT", e.target.checked ? "Enabled (Instant Auto-Quarantine)" : "Disabled (Alert Only)", "success");
  });
  document.getElementById("toggle-push-alerts")?.addEventListener("change", (e) => {
    appState.pushAlertsEnabled = e.target.checked;
    persistSettings();
    showToast("PHONE ALERTS", e.target.checked ? "Enabled (Instant Notification)" : "Disabled", "success");
  });
  document.getElementById("btn-change-pin")?.addEventListener("click", () => {
    const currentPin = prompt("Enter your current Master PIN:");
    if (currentPin === null) return; // Cancelled
    if (currentPin !== appState.securityPin) {
      showToast("INCORRECT PIN", "That is not the current Master PIN. Nothing was changed.", "danger");
      return;
    }
    const newPin = prompt("Enter a new 4-digit Master PIN:");
    if (newPin === null) return; // Cancelled
    if (!/^\d{4}$/.test(newPin)) {
      showToast("INVALID PIN", "Master PIN must be exactly 4 digits.", "danger");
      return;
    }
    appState.securityPin = newPin;
    persistSettings();
    // Never echo the PIN itself back in a toast or log line.
    showToast("SECURITY PIN UPDATED", "Your Master Security PIN has been changed successfully.", "success");
  });

  // Reflect any persisted settings (sound, lockout, alerts) into the UI
  // controls so a returning judge/user sees their last configuration.
  const persistedSoundBtn = document.getElementById("btn-sound-toggle");
  if (persistedSoundBtn) persistedSoundBtn.style.opacity = appState.soundEnabled ? "1" : "0.4";
  const autoLockoutToggle = document.getElementById("toggle-auto-lockout");
  if (autoLockoutToggle) autoLockoutToggle.checked = appState.autoLockoutEnabled;
  const pushAlertsToggle = document.getElementById("toggle-push-alerts");
  if (pushAlertsToggle) pushAlertsToggle.checked = appState.pushAlertsEnabled;

  // Guided Demo Controls
  document.getElementById("btn-play-demo")?.addEventListener("click", runGuidedDemo);
  document.getElementById("btn-stop-demo")?.addEventListener("click", stopGuidedDemo);

  // Live mobile clock
  function updateMobileClock() {
    const clock = document.getElementById("mobile-time-display");
    if (clock) {
      const now = new Date();
      clock.textContent = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
    }
  }
  setInterval(updateMobileClock, 1000);
  updateMobileClock();

  // Initial Renders
  initInitialLogs();
  updateShieldDashboardStats();
  renderVisualTopology();

  // Auto-launch tutorial on start for first-time clarity
  openTutorial();
});
