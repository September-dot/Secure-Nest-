# SecureNest: Edge-AI Security & Trust Layer for Connected Homes

[![License: MIT](https://img.shields.io/badge/License-MIT-emerald.svg)](https://opensource.org/licenses/MIT)
[![Platform](https://img.shields.io/badge/Hardware-Raspberry%20Pi%205%20%7C%20OpenWrt-cyan.svg)]()
[![Privacy](https://img.shields.io/badge/Privacy-100%25%20On--Device-green.svg)]()

> **SecureNest** turns any home network into an autonomous zero-trust perimeter using on-device edge AI. It discovers every connected device, baselines behavior locally, detects anomalies in seconds, and automatically quarantines compromised hardware with zero cloud reliance, zero subscription lock-in, and zero privacy leakage.

---

## 🆕 What's New (Hackathon Polish Pass)

- **Real anomaly-detection engine**: every test scenario now computes an actual anomaly score at runtime (traffic spike vs. learned per-device baseline) instead of playing a fixed script. A benign 40MB firmware update deliberately spikes traffic too, but is recognized as a known-safe update signature and scores low — demonstrating the engine doesn't just block *any* spike.
- **No PIN exposed in the UI**: the Master Security PIN is no longer printed anywhere in the app (settings page, unblock modal, or `alert()` prompts). It lives only in memory / `localStorage`.
  - **Demo default PIN: `1234`** — say this out loud during your demo rather than showing it on screen.
- **"Play Full Demo" button** (top-right header): auto-runs a ~60-second narrated walkthrough — new device discovery → camera hijack blocked → privacy leak blocked → benign update verified with zero false alarm → reset. Good for a hands-off stage demo; click "Stop Demo" to cancel mid-run.
- **Settings persist across reloads** (sound, PIN, auto-lockout, push alerts) via `localStorage`, so refreshing mid-demo doesn't lose your configuration.
- Refactored duplicated quarantine/threat-card logic in `app.js` into shared helper functions for easier maintenance.

## 🌟 Features & Multi-Face Architecture

1. **📱 Homeowner Mobile Companion App**:
   - Zero-Trust Shield status (*All Systems Safe* vs *Threat Intercepted*).
   - Plain-English threat explanation cards with 1-tap **"Keep Blocked"** and **"Unblock with PIN"** actions.
   - Live 24-device inventory with real-time category filtering and search.
   - Activity protection timeline and customizable guardian settings.

2. **🛡️ Visual Home Network Map**:
   - Interactive SVG topology map partitioned into **Personal Devices Zone**, **Smart Home Gadgets Zone**, and **Quarantine Isolation Vault**.
   - Dynamic packet pulse animations and click-to-inspect device sheets.

3. **⚡ Safe Protection Test Deck (Live Demo)**:
   - Interactive 1-click test scenarios: *Camera Hijack Simulation*, *Secret Video Leak Prevention*, *New Smart Plug Discovery*, and *Benign Software Update Verification*.
   - Live human-readable protection activity log stream.

4. **🔀 Side-by-Side Presentation Mode**:
   - Side-by-side view combining the active mobile app on the left with the test deck on the right, providing instant visual feedback for hackathon judges.

---

## 🚀 Quick Start (Run Locally)

### Prerequisites
- Python 3.8+ (No external package dependencies required for basic prototype).

### Running the Prototype Server
```bash
# Navigate to repository
cd securenest-prototype

# Start local server
python3 server.py
```

Open **[http://localhost:8080](http://localhost:8080)** in your web browser.

---

## 📂 Repository Structure

```
securenest-prototype/
├── index.html                       # Multi-face web application structure
├── style.css                        # Cyber-dark glassmorphism design system
├── app.js                           # Core reactive state and simulation engine
├── server.py                        # Local lightweight Python server
├── README.md                        # Project documentation & overview
└── SECURENEST_SPECIFICATION.md      # Full PRD, IEEE SRS, Architecture & Threat Model
```

---

## 📑 Detailed Specifications
For the full **Product Requirements Document (PRD)**, **IEEE-830 Software Requirements Specification (SRS)**, **System Architecture**, and **Threat Model**, see [`SECURENEST_SPECIFICATION.md`](./SECURENEST_SPECIFICATION.md).

---
*Created by Team SecureNest for Hackathon Review & IoT Security Innovation.*
