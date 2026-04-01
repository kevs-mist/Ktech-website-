export interface Project {
  id: string;
  tag: string;         // "PROJECT 01 / C++ / ML"
  title: string;       // "LOW-LEVEL NEURAL NW"
  badge: string;       // "MACHINE LEARNING"
  period: string;      // "2024-2025"
  location: string;
  description: string;
  bullets: string[];
  stack: string[];
  githubUrl: string;   // githubUrl field (PRD §3.7)
}

export const projects: Project[] = [
  {
    id: "neural-network-cpp",
    tag: "PROJECT 01 / C++ / ML",
    title: "LOW-LEVEL NEURAL NW",
    badge: "MACHINE LEARNING",
    period: "MAY 2025 – JUNE 2025",
    location: "AHMEDABAD, GUJARAT",
    description: "Built a fully functional neural network from scratch in C++, implementing core AI primitives without using any external ML libraries.",
    bullets: [
      "Forward propagation, backpropagation, and gradient descent from scratch",
      "CSV-based dataset loading (Iris dataset) with configurable architecture",
      "90%+ classification accuracy without any ML library dependencies",
    ],
    stack: ["C++", "Neural Networks", "Backpropagation", "Gradient Descent"],
    githubUrl: "https://github.com/kevsi-mist/neural-network-cpp",
  },
  {
    id: "retrocode-editor",
    tag: "PROJECT 02 / JAVA / IDE",
    title: "RETROCODE EDITOR",
    badge: "DEVELOPER TOOLS",
    period: "APRIL 2025 – MAY 2025",
    location: "AHMEDABAD, GUJARAT",
    description: "Designed and developed a lightweight code editor in Java using Swing, implementing efficient rendering and planned local LLM inference.",
    bullets: [
      "Modular UI with Swing, file I/O, and efficient rendering for large files",
      "Architected for future AI integration via Ollama local LLM inference",
      "Context-aware, cursor-level code correction pipeline planned",
    ],
    stack: ["Java", "Swing", "File I/O", "LLM Integration"],
    githubUrl: "https://github.com/kevsi-mist/retrocode-editor",
  },
  {
    id: "myofficehub",
    tag: "PROJECT 03 / FLUTTER / ERP",
    title: "MYOFFICEHUB PLATFORM",
    badge: "PRODUCTION APP",
    period: "DEC 2025 – CURRENT",
    location: "AHMEDABAD, GUJARAT",
    description: "Architected and delivered a mobile-first office management platform for a client under KTech, implementing Clean Architecture with Flutter.",
    bullets: [
      "Clean Architecture with Flutter, Riverpod, and GoRouter (14+ screens)",
      "Role-based workflows (Admin/Tenant) with mock API abstraction",
      "Material 3 UI with lazy loading, minimal rebuilds, 60fps animations",
    ],
    stack: ["Flutter", "Dart", "Riverpod", "GoRouter", "Material 3"],
    githubUrl: "https://github.com/kevsi-mist/myofficehub",
  },
];
