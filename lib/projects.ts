export const projects = [
      {
    title: "ML Model Monitoring Service",
    description: "Production-shaped API detecting data, prediction, and multivariate drift in deployed ML models. Fixed real bugs: state-persistence issue, linear-classifier blind spot.",
    stack: ["Python", "FastAPI", "scikit-learn", "Docker"],
    github: "https://github.com/ABHISHEKTU/ml-model-monitoring-service",
    live: "https://ml-model-monitoring-service.onrender.com/docs",
  },
  {
    title: "Financial News Analyzer",
    description: "5-service Dockerized system scraping financial news and social sentiment, routing each to FinBERT or VADER, with a live market-mood dashboard.",
    stack: ["FastAPI", "Celery", "Redis", "PostgreSQL"],
    github: "https://github.com/ABHISHEKTU/news-analyzer",
    live: null,
  },
  
  {
    title: "Medical Image Diagnosis Assistant",
    description: "RAG + CNN diagnostic system for medical image analysis, deployed.",
    stack: ["Python", "PyTorch", "RAG", "FastAPI"],
    github: "https://github.com/ABHISHEKTU/medical-diagnosis-assistant",
    live: "https://medical-diagnosis-assistant-gilt.vercel.app",
  },
  {
    title: "Shopify-Odoo Sync",
    description: "Custom Odoo module syncing products/orders bidirectionally with Shopify (webhooks + cron), plus AI product enrichment and an ORM-grounded chatbot.",
    stack: ["Odoo", "Python", "PostgreSQL", "Groq API"],
    github: "https://github.com/ABHISHEKTU/odoo-shopify-sync",
    live: null,
  },
  {
    title: "TalentTrace",
    description: "AI resume screener that ranks and evaluates candidates automatically.",
    stack: ["Python", "spaCy", "FastAPI", "React"],
    github: "https://github.com/ABHISHEKTU/TalentTrace",
    live: "https://talent-trace-eight.vercel.app",
  },
  {
    title: "AI Interview Evaluation System",
    description: "Automated interview assessment pipeline using LLM-based evaluation.",
    stack: ["Python", "LangChain", "FastAPI"],
    github: "https://github.com/ABHISHEKTU/pgagi-interview-system",
    live: null,
  },
    {
    title: "Landslide Prediction System",
    description: "Django + CNN system predicting landslide risk, deployed on Railway with lazy model loading to avoid OOM crashes.",
    stack: ["Django", "CNN", "MySQL", "Railway"],
    github: "https://github.com/ABHISHEKTU/Landslide-Prediction-System",
    live: null,
  },
];