export interface Service {
  id: string;
  title: string;
  description: string;
  tech: string[];
}

export const services: Service[] = [
  {
    id: "software-dev",
    title: "CUSTOM SOFTWARE DEVELOPMENT",
    description: 
      "Spearheaded full-stack development for 5+ client applications, designing scalable architectures and high-quality production deployments.",
    tech: ["Node.js", "Java", "Python", "React.js", "AWS"],
  },
  {
    id: "mobile-engineering",
    title: "MOBILE APP ENGINEERING",
    description: 
      "Architecting feature-rich, high-performance cross-platform mobile apps with production-ready animations and clean architecture.",
    tech: ["Flutter/Dart", "Riverpod", "Material 3", "Clean Architecture"],
  },
  {
    id: "ai-systems",
    title: "AI & NEURAL SYSTEMS",
    description: 
      "Building low-level AI logic and neural network primitives from scratch, focusing on foundational machine learning and LLM integration.",
    tech: ["C++", "Neural Primitives", "LLM Inference", "Ollama"],
  },
];
