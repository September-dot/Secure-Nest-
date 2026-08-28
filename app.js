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
  selectedDevice: null
};

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
      if (scoreNum) scoreNum.textContent = "78%";
      if (scoreProgress) { scoreProgress.style.strokeDashoffset = "70"; scoreProgress.style.stroke = "#ef4444"; }
    } else {
      vaultStatusIndicator.className = "vault-status-indicator";
      vaultStatusIndicator.innerHTML = `<span class="status-dot green"></span><span>Vault Standby · No Infected Hardware</span>`;
      vaultStatusText.textContent = `All 24 devices are behaving normally. If any device is infected, it is locked into this vault immediately to protect your family.`;
      if (aiSafetyText) { aiSafetyText.textContent = "Fully Protected"; aiSafetyText.className = "th-val green"; }
      if (scoreNum) scoreNum.textContent = "99%";
      if (scoreProgress) { scoreProgress.style.strokeDashoffset = "10"; scoreProgress.style.stroke = "#10b981"; }
    }
  }

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

function triggerMiraiAttack() {
  const target = appState.devices.find(d => d.id === "dev-07"); // Living Room Camera
  if (!target) return;

  target.vlan = 99;
  target.status = "QUARANTINED";

  appendProtectionLog("ATTACK INTERCEPTED", "Camera Hijack Blocked", `Living Room Camera attempted unauthorized scanning. SecureNest locked it in Quarantine in 0.38 seconds.`, "alert");

  appState.activities.unshift({
    id: `act-${Date.now()}`,
    time: "Just now",
    type: "red",
    title: "Living Room Camera Quarantined",
    desc: "Smart Guardian AI caught suspicious scanning activity and isolated the camera automatically."
  });

  const threatDeviceName = document.getElementById("threat-device-name");
  const threatDeviceIP = document.getElementById("threat-device-ip");
  const threatPlainText = document.getElementById("threat-plain-text");

  if (threatDeviceName) threatDeviceName.textContent = target.name;
  if (threatDeviceIP) threatDeviceIP.textContent = `Location: ${target.room} · ${target.vendor}`;
  if (threatPlainText) {
    threatPlainText.innerHTML = `This camera suddenly began scanning your other home gadgets and attempted to contact an unauthorized server overseas. SecureNest stopped it and moved it to the <strong>Quarantine Isolation Vault</strong> in <strong>380 milliseconds</strong>.`;
  }

  updateShieldDashboardStats();
  renderVisualTopology();
  showToast("THREAT STOPPED AUTOMATICALLY", `${target.name} quarantined into Vault. Your laptops & phones are safe.`, "danger");
}

function triggerExfiltrationAttack() {
  const target = appState.devices.find(d => d.id === "dev-08"); // Baby Monitor
  if (!target) return;

  target.vlan = 99;
  target.status = "QUARANTINED";

  appendProtectionLog("PRIVACY DEFENSE", "Unauthorized Video Leak Blocked", `Baby Nursery Monitor attempted to send video to an unverified overseas address. Stream severed in 0.29 seconds.`, "alert");

  appState.activities.unshift({
    id: `act-${Date.now()}`,
    time: "Just now",
    type: "red",
    title: "Baby Monitor Video Leak Prevented",
    desc: "Unauthorized foreign connection severed immediately. Your private video feed remained safe inside your home."
  });

  const threatDeviceName = document.getElementById("threat-device-name");
  const threatDeviceIP = document.getElementById("threat-device-ip");
  const threatPlainText = document.getElementById("threat-plain-text");

  if (threatDeviceName) threatDeviceName.textContent = target.name;
  if (threatDeviceIP) threatDeviceIP.textContent = `Location: ${target.room} · ${target.vendor}`;
  if (threatPlainText) {
    threatPlainText.innerHTML = `This baby monitor attempted to transmit an unauthorized video stream to an unknown foreign server. SecureNest severed the connection in <strong>290 milliseconds</strong> to protect your family's privacy.`;
  }

  updateShieldDashboardStats();
  renderVisualTopology();
  showToast("PRIVACY LEAK PREVENTED", `Unauthorized camera stream from ${target.name} blocked.`, "danger");
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

  appendProtectionLog("SAFE UPDATE", "Official Software Download", `Nest Thermostat downloaded official Google update. Smart Guardian AI confirmed it is safe. Zero false alarm.`, "safe");

  appState.activities.unshift({
    id: `act-${Date.now()}`,
    time: "Just now",
    type: "green",
    title: "Nest Thermostat Updated Safely",
    desc: "Official software update verified. No false alarms or unnecessary blockages."
  });

  showToast("OFFICIAL UPDATE VERIFIED", `Software update on ${target.name} allowed with zero false alarms.`, "success");
}

function resetSimulation() {
  appState.devices = JSON.parse(JSON.stringify(INITIAL_DEVICES));
  appState.activities = JSON.parse(JSON.stringify(INITIAL_ACTIVITIES));

  appendProtectionLog("SYSTEM RESET", "Shield Restored", `All 24 devices returned to clean trusted state. Quarantine vault cleared.`, "safe");

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
  if (nameElem) nameElem.textContent = dev.name;
  if (modal) modal.classList.remove("hidden");
}

function closeOverrideModal() {
  const modal = document.getElementById("override-modal");
  if (modal) modal.classList.add("hidden");
}

function confirmOverride() {
  const pinInput = document.getElementById("override-passcode");
  if (pinInput && pinInput.value !== "1234") {
    alert("Incorrect Master Security PIN. Please enter '1234'.");
    return;
  }

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
// 11. INITIALIZATION & EVENT LISTENERS
// =============================================================================

document.addEventListener("DOMContentLoaded", () => {
  // Mode / Face Switcher
  const modeBtns = document.querySelectorAll(".mode-btn");
  const faceViews = document.querySelectorAll(".face-view");

  modeBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      modeBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const face = btn.getAttribute("data-face");
      appState.activeFace = face;

      faceViews.forEach(v => v.classList.remove("active"));
      const activeView = document.getElementById(`view-${face}`);
      if (activeView) activeView.classList.add("active");

      // Shared live phone mounting
      mountMobileFrame(face);

      if (face === "soc") {
        setTimeout(() => renderVisualTopology(), 50);
      }
    });
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
    showToast("AUDIO SETTING", appState.soundEnabled ? "Sound Feedback Enabled" : "Sound Muted", "success");
  });

  // Clear Logs
  document.getElementById("btn-clear-term")?.addEventListener("click", () => {
    const term = document.getElementById("term-log-stream");
    if (term) term.innerHTML = "";
  });

  // Settings Toggles Feedback
  document.getElementById("toggle-auto-lockout")?.addEventListener("change", (e) => {
    showToast("AUTOMATIC THREAT LOCKOUT", e.target.checked ? "Enabled (Instant Auto-Quarantine)" : "Disabled (Alert Only)", "success");
  });
  document.getElementById("toggle-push-alerts")?.addEventListener("change", (e) => {
    showToast("PHONE ALERTS", e.target.checked ? "Enabled (Instant Notification)" : "Disabled", "success");
  });
  document.getElementById("btn-change-pin")?.addEventListener("click", () => {
    const newPin = prompt("Enter new 4-digit Master Security PIN:", "1234");
    if (newPin && newPin.length === 4) {
      showToast("SECURITY PIN UPDATED", `Master PIN changed successfully to ${newPin}.`, "success");
    }
  });

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
