export type Category = "technology" | "science" | "education" | "ai-algorithms";

export interface Question {
  id: number;
  question: string;
  options: string[];
  correct: number;
}

export const categoryInfo: Record<Category, { label: string; emoji: string; description: string }> = {
  technology: {
    label: "Technology",
    emoji: "💻",
    description: "Computers, programming languages, the internet & the digital world.",
  },
  science: {
    label: "Science",
    emoji: "🔬",
    description: "Physics, chemistry, biology & the wonders of the natural world.",
  },
  education: {
    label: "K-12 Education",
    emoji: "📚",
    description: "History, geography & core school subjects.",
  },
  "ai-algorithms": {
    label: "AI Algorithms",
    emoji: "🤖",
    description: "Linear & logistic regression, random forests, SVM, PCA, KNN & K-Means.",
  },
};

export const aiAlgorithmsQuestions: Question[] = [
  {
    id: 1,
    question: "What does Linear Regression primarily predict?",
    options: [
      "A continuous numerical value",
      "A discrete class label",
      "A probability between 0 and 1",
      "A cluster assignment",
    ],
    correct: 0,
  },
  {
    id: 2,
    question:
      "Which function does Logistic Regression use to map its output to a probability between 0 and 1?",
    options: ["ReLU function", "Sigmoid function", "Softmax function", "Linear function"],
    correct: 1,
  },
  {
    id: 3,
    question: "A Random Forest model is an ensemble made up of which base learners?",
    options: ["Neural networks", "Support vector machines", "Decision trees", "Linear regressors"],
    correct: 2,
  },
  {
    id: 4,
    question: "What does a Support Vector Machine try to maximize when finding a decision boundary?",
    options: [
      "The number of support vectors",
      "The margin between classes",
      "The training accuracy",
      "The number of features",
    ],
    correct: 1,
  },
  {
    id: 5,
    question: "What is the main goal of Principal Component Analysis (PCA)?",
    options: [
      "Classify data into discrete labels",
      "Reduce dimensionality while preserving variance",
      "Cluster data into groups",
      "Predict continuous outcomes",
    ],
    correct: 1,
  },
  {
    id: 6,
    question: "How does the K-Nearest Neighbors (KNN) algorithm classify a new data point?",
    options: [
      "By fitting a regression line through the data",
      "By majority vote among its closest neighbors",
      "By splitting data into decision tree branches",
      "By maximizing the margin between classes",
    ],
    correct: 1,
  },
  {
    id: 7,
    question: "In K-Means Clustering, what does the letter 'K' represent?",
    options: ["The number of features", "The number of clusters", "The number of iterations", "The learning rate"],
    correct: 1,
  },
  {
    id: 8,
    question: "What is the 'elbow method' used for in K-Means clustering?",
    options: [
      "Scaling the input features",
      "Choosing the optimal number of clusters",
      "Splitting data into train/test sets",
      "Measuring classification accuracy",
    ],
    correct: 1,
  },
  {
    id: 9,
    question:
      "Why is feature scaling (e.g. StandardScaler) especially important before applying SVM, KNN, PCA, or K-Means?",
    options: [
      "These algorithms ignore feature scale entirely",
      "These algorithms rely on distance or variance calculations that are sensitive to scale",
      "Scaling is only ever needed for linear regression",
      "It speeds up training but never changes the result",
    ],
    correct: 1,
  },
  {
    id: 10,
    question: "What is the purpose of a confusion matrix?",
    options: [
      "To visualize the decision boundary of a model",
      "To show the number of correct vs. incorrect predictions per class",
      "To reduce the dimensionality of a dataset",
      "To select the optimal number of clusters",
    ],
    correct: 1,
  },
];
