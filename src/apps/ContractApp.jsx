// ═══════════════════════════════════════════════════════════════
// Contract Builder App
// Paste the full code from Document 3 here
// Change: export default function App() → export default function ContractApp()
// ═══════════════════════════════════════════════════════════════

import { useState } from "react";

// TODO: Paste the full Document 3 code here.
// For now, this is a placeholder.

export default function ContractApp() {
  return (
    <div style={{
      fontFamily: "'Segoe UI',sans-serif",
      minHeight: "100vh",
      background: "#f5f0eb",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}>
      <div style={{ textAlign: "center", padding: 40 }}>
        <div style={{ fontSize: 48, marginBottom: 16 }}>📝</div>
        <h2 style={{ fontSize: 24, fontWeight: 800, color: "#1a1a1a", marginBottom: 8 }}>Contract Builder</h2>
        <p style={{ color: "#8e8e93", fontSize: 14 }}>
          Paste the full Document 3 code into<br />
          <code style={{ background: "#e8e2d9", padding: "2px 8px", borderRadius: 6, fontSize: 13 }}>
            src/apps/ContractApp.jsx
          </code>
        </p>
      </div>
    </div>
  );
}
