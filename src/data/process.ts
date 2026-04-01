export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export const process: ProcessStep[] = [
  {
    number: "01",
    title: "ARCHITECTURAL PLANNING",
    description: 
      "Deep-diving into requirement specifications, designing scalable architectures (Clean Architecture), and mapping core feature workflows.",
  },
  {
    number: "02",
    title: "MODULAR ENGINEERING",
    description: 
      "Building robust, maintainable systems across C++, Java, or Flutter with a focus on code quality, modularity, and future AI integration.",
  },
  {
    number: "03",
    title: "PERFORMANCE OPTIMIZATION",
    description: 
      "Tightening logic loops and implementing performance-first UI strategies (60fps animations, lazy loading) for seamless digital experiences.",
  },
  {
    number: "04",
    title: "PRODUCTION DELIVERY",
    description: 
      "Finalizing high-quality deployments with Docker and CI/CD pipelines, ensuring production-ready reliability and engineering excellence.",
  },
];
