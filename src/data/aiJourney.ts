import type { ComponentType } from "react";
import Linear from "../notes/algorithms/linear";
import Logistic from "../notes/algorithms/logistic";
import RandForest from "../notes/algorithms/randForest";
import SVM from "../notes/algorithms/svm";

import mlContent from "../notes/machine-learning/intro.md?raw";
import boostingContent from "../notes/boosting/intro.md?raw";
import deepLearningContent from "../notes/deep-learning/neural-networks.md?raw";
import agentsContent from "../notes/ai-agents/intro.md?raw";
import agenticContent from "../notes/agentic-ai/intro.md?raw";
import ragContent from "../notes/rag/intro.md?raw";

export interface AISubtopic {
  slug: string;
  title: string;
  description: string;
  content?: string;
  component?: ComponentType;
}

export interface AITopic {
  slug: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  subtopics: AISubtopic[];
}

export const aiTopics: AITopic[] = [
  {
    slug: "algorithms",
    title: "Algorithms",
    description:
      "Foundations of computation — efficiency, sorting, searching, and problem-solving strategies.",
    icon: "GitBranch",
    color: "blue",
    subtopics: [
      {
        slug: "linear-regression",
        title: "Linear Regression",
        description:
          "Predict house prices by learning the relationship between a home's area and its price.",
        component: Linear,
      },
      {
        slug: "logistic",
        title: "Logistic Regression",
        description:
          "Predict whether a person is likely to purchase insurance based on their age.",
        component: Logistic,
      },
      {
        slug: "random-forest",
        title: "Random Forest",
        description:
          "Classify handwritten digits (0–9) using image pixel data from Scikit-learn's Digits dataset.",
        component: RandForest,
      },
      {
        slug: "svm",
        title: "Support Vector Machine",
        description:
          "Classify iris flower species using sepal and petal measurements from the Iris dataset.",
        component: SVM,
      },
    ],
  },
  {
    slug: "machine-learning",
    title: "Machine Learning",
    description:
      "Core ML concepts and intuitions — from linear models to ensemble methods.",
    icon: "Brain",
    color: "green",
    subtopics: [
      {
        slug: "intro",
        title: "Introduction",
        description:
          "Supervised, unsupervised, and reinforcement learning explained.",
        content: mlContent,
      },
    ],
  },
  {
    slug: "boosting",
    title: "Boosting",
    description:
      "Ensemble methods that turn weak learners into strong predictors.",
    icon: "TrendingUp",
    color: "orange",
    subtopics: [
      {
        slug: "intro",
        title: "Introduction",
        description: "The core idea: sequential learning from mistakes.",
        content: boostingContent,
      },
    ],
  },
  {
    slug: "deep-learning",
    title: "Deep Learning",
    description:
      "Neural networks, backpropagation, CNNs, and the transformer revolution.",
    icon: "Layers",
    color: "purple",
    subtopics: [
      {
        slug: "intro",
        title: "Introduction",
        description:
          "Neurons, layers, activation functions, and backpropagation.",
        content: deepLearningContent,
      },
    ],
  },
  {
    slug: "ai-agents",
    title: "AI Agents",
    description:
      "Systems that perceive, reason, and act — LLMs as autonomous problem-solvers.",
    icon: "Bot",
    color: "rose",
    subtopics: [
      {
        slug: "intro",
        title: "Introduction",
        description:
          "The observe-think-act loop and what makes a system agentic.",
        content: agentsContent,
      },
    ],
  },
  {
    slug: "agentic-ai",
    title: "Agentic AI",
    description:
      "Autonomous, goal-directed AI — multi-agent architectures and orchestration.",
    icon: "Workflow",
    color: "indigo",
    subtopics: [
      {
        slug: "intro",
        title: "Introduction",
        description:
          "What distinguishes agentic systems from simple LLM calls.",
        content: agenticContent,
      },
    ],
  },
  {
    slug: "rag",
    title: "RAG",
    description:
      "Retrieval-Augmented Generation — grounding LLMs in real documents.",
    icon: "Database",
    color: "teal",
    subtopics: [
      {
        slug: "intro",
        title: "Introduction",
        description:
          "The retriever-generator pipeline and why it beats fine-tuning for knowledge tasks.",
        content: ragContent,
      },
    ],
  },
];
