# Mali Health Forecast (มะลิ Care) — Prototype 🐾

> **Sea x OpenAI Regional Codex Hackathon Thailand**  
> แนวทาง: **ข้อ 1 (Autonomous & Adaptive AI) + ข้อ 3 (Deep Domain AI)**  
> *Prototype แอปพยากรณ์สุขภาพสัตว์เลี้ยงจากพฤติกรรมประจำวัน (ข้อมูลจำลอง)*

- 🌐 **Live Demo (GitHub Pages):** [https://turatime.github.io/OpenAIxSea/](https://turatime.github.io/OpenAIxSea/)
- 📄 **Executive Summary / Proposal:** [ONEPAGER.md](./ONEPAGER.md)

---

## 📌 บทนำ (Overview)

เจ้าของสัตว์เลี้ยงมักรู้ตัวว่าสัตว์ป่วยก็ต่อเมื่ออาการรุนแรงหรือเห็นได้ชัดแล้ว เพราะสัตว์ (โดยเฉพาะแมว) มีสัญชาตญาณในการซ่อนอาการ และสัตว์แต่ละตัวมี "เกณฑ์ปกติ" ที่ไม่เท่ากัน 

**Mali Care** ถูกออกแบบมาเพื่อแก้ปัญหานี้ด้วยแนวคิด:
1. **บันทึกเบามาก ๆ (Ultra-low Friction)**: แตะเดียวจบ ไม่สร้างภาระให้เจ้าของ
2. **เรียนรู้ค่าปกติรายตัว (Personalized Baseline)**: คำนวณช่วงปกติเฉพาะตัว (Moving baseline 7–14 วัน) แทนการใช้เกณฑ์เฉลี่ยทั่วไป
3. **ตรวจจับหลายสัญญาณรวมกัน (Multi-signal Anomaly Detection)**: วิเคราะห์การกินอาหาร ปริมาณน้ำดื่ม และเหตุการณ์ผิดปกติพร้อมกัน
4. **สรุปหนึ่งหน้าให้สัตวแพทย์ (1-Page Vet Summary)**: ส่งต่อข้อมูลให้หมอได้อย่างแม่นยำ พร้อมไทม์ไลน์และกราฟเปรียบเทียบก่อน-หลัง
5. **ปุ่มฉุกเฉิน (Emergency Triage)**: แนะนำให้พบแพทย์ทันทีหากมีอาการอันตราย โดยไม่เสียเวลาประเมิน

> ⚠️ **คำชี้แจง:** ข้อมูลทั้งหมดในระบบเป็นข้อมูลจำลองเพื่อการสาธิต ไม่ใช่การวินิจฉัยโรค และสัตวแพทย์เป็นผู้ตัดสินเสมอ

---

## 📱 หน้าจอและการทำงานหลัก (Core Features)

1. **หน้าวันนี้ (Today Dashboard)**
   - บันทึกการกิน/ดื่มด้วยรูปถ่าย พร้อมระบบอ่านระดับที่เหลือ (`หมด` / `ครึ่ง` / `เหลือมาก`)
   - บันทึกด่วน "วันนี้ปกติดี" แตะเดียว
   - การแสดงสถานะสุขภาพ 14 วันล่าสุด (อาหารที่กิน / น้ำที่ดื่ม)
   - การแจ้งเตือนเมื่อพฤติกรรมเริ่มเบี่ยงเบน
   - ปุ่มฉุกเฉินสำหรับการส่งต่อสัตวแพทย์ทันที

2. **หน้าบันทึกเหตุการณ์ (Events Log)**
   - บันทึกอาการเฉียบพลัน เช่น อาเจียน อุจจาระผิดปกติ
   - ถ่าย/แนบรูปประกอบ พร้อมบันทึกเวลาอัตโนมัติ
   - แสดงประวัติเหตุการณ์ย้อนหลัง

3. **หน้าแนวโน้ม (Trends & Analysis)**
   - กราฟเปรียบเทียบค่าพฤติกรรม 14 วัน
   - เปรียบเทียบมุมมอง: **ค่าปกติเฉพาะตัวของมะลิ (Personal Baseline Band)** vs **เกณฑ์ค่าเฉลี่ยทั่วไป (General Average)**
   - แสดงให้เห็นจุดที่เกณฑ์ทั่วไปยังไม่เตือน แต่เกณฑ์เฉพาะตัวเตือนได้เร็วกว่า

4. **หน้าฉุกเฉิน (Emergency Protocol)**
   - รายการอาการอันตราย เช่น ปัสสาวะไม่ออก / เบ่งนาน, อุจจาระมีเลือด, หายใจลำบาก, ชัก/หมดสติ
   - ปุ่มโทรออกคลินิกฉุกเฉินและสร้างเอกสารส่งต่อทันที

5. **หน้าสรุปให้หมอ (Veterinary Summary)**
   - ข้อมูลประวัติสัตว์เลี้ยง
   - ไทม์ไลน์สรุปการเปลี่ยนแปลง (วันที่เริ่มเบี่ยงเบน วันที่เตือน วันที่มีอาการ)
   - กราฟอาหารก่อน-หลัง
   - ปุ่มพิมพ์ / บันทึก PDF (Print-friendly)

---

## 🛠 เทคโนโลยี (Tech Stack)

- **Framework:** React 19 + TypeScript
- **Bundler / Build Tool:** Vite 6
- **Styling:** Tailwind CSS v4 (with OKLCH theme design tokens)
- **Icons:** Lucide React
- **Design:** Mobile-First Container (Adaptive Shell)

---

## 🚀 การติดตั้งและรันในเครื่อง (Getting Started)

### ความต้องการของระบบ
- Node.js >= 18
- npm / pnpm / yarn

### ขั้นตอนการรัน

```bash
# 1. ติดตั้ง Dependencies
npm install

# 2. เริ่มต้น Dev Server
npm run dev

# 3. Build สำหรับ Production
npm run build

# 4. Preview ผลการ Build
npm run preview
```

---

## 📂 โครงสร้างโปรเจกต์ (Project Structure)

```text
Prototype/
├── docs/                     # เอกสารไอเดียและกติกา Hackathon
│   ├── hackathon_ideas.md
│   └── pet_health_forecast_idea.md
├── public/                   # Static assets
│   ├── assets/
│   │   └── mali-cat-CSOzRKT-.jpg
│   └── favicon.ico
├── src/
│   ├── components/           # UI Components
│   │   ├── ui/
│   │   │   └── button.tsx
│   │   ├── BottomNav.tsx
│   │   ├── EmergencyTab.tsx
│   │   ├── EventsTab.tsx
│   │   ├── Header.tsx
│   │   ├── MetricChart.tsx
│   │   ├── PetHeader.tsx
│   │   ├── TodayTab.tsx
│   │   ├── TrendsTab.tsx
│   │   └── VetSummaryTab.tsx
│   ├── data/                 # Mock telemetry & pet dataset
│   │   └── mockData.ts
│   ├── lib/                  # Utilities (e.g. cn)
│   │   └── utils.ts
│   ├── App.tsx               # Root application shell
│   ├── index.css             # Tailwind v4 theme & design tokens
│   └── main.tsx              # Application entry point
├── package.json
├── tsconfig.json
└── vite.config.ts
```
