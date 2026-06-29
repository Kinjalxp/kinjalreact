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
  {
    id: 11,
    question: "What does 'fitting the line of best fit' mean in Linear Regression?",
    options: [
      "Finding the slope and intercept that minimize prediction error",
      "Finding the cluster centroids closest to the data",
      "Finding the decision boundary with the widest margin",
      "Finding the principal components of the dataset",
    ],
    correct: 0,
  },
  {
    id: 12,
    question: "Why is Logistic Regression used for classification rather than regression problems?",
    options: [
      "It only works with continuous targets",
      "It outputs a probability that is thresholded into discrete classes",
      "It cannot model linear relationships",
      "It minimizes the sum of squared errors directly",
    ],
    correct: 1,
  },
  {
    id: 13,
    question: "What is a key benefit of using a Random Forest instead of a single Decision Tree?",
    options: [
      "It trains using fewer features",
      "It reduces overfitting by averaging across many trees",
      "It guarantees a linear decision boundary",
      "It eliminates the need for any training data",
    ],
    correct: 1,
  },
  {
    id: 14,
    question: "In a Random Forest, what makes each individual tree slightly different from the others?",
    options: [
      "Each tree is trained on a random subset of data and features",
      "Each tree uses a different activation function",
      "Each tree is trained on the full dataset with no randomness",
      "Each tree shares identical hyperparameters and splits",
    ],
    correct: 0,
  },
  {
    id: 15,
    question: "What are the data points closest to an SVM's decision boundary called?",
    options: ["Centroids", "Support vectors", "Principal components", "Residuals"],
    correct: 1,
  },
  {
    id: 16,
    question: "What is the purpose of a 'kernel' in a Support Vector Machine?",
    options: [
      "To reduce the number of training samples",
      "To transform data into a higher-dimensional space where it's separable",
      "To compute the confusion matrix",
      "To normalize the target labels",
    ],
    correct: 1,
  },
  {
    id: 17,
    question: "In PCA, what does a 'principal component' represent?",
    options: [
      "A single original feature from the dataset",
      "A direction of maximum variance in the data",
      "A cluster center",
      "A decision tree split point",
    ],
    correct: 1,
  },
  {
    id: 18,
    question: "What does the 'explained variance ratio' tell you in PCA?",
    options: [
      "How accurate the final classifier is",
      "How much information each principal component captures from the original data",
      "How many clusters the data should be split into",
      "How many nearest neighbors to use",
    ],
    correct: 1,
  },
  {
    id: 19,
    question: "What is a major drawback of choosing a very small value of K in KNN?",
    options: [
      "The model becomes too simple and underfits",
      "The model becomes sensitive to noise and can overfit",
      "The model can no longer make predictions",
      "The model ignores the nearest neighbors entirely",
    ],
    correct: 1,
  },
  {
    id: 20,
    question: "Why is KNN often called a 'lazy learner'?",
    options: [
      "It doesn't build an explicit model during training — it stores the data and computes at prediction time",
      "It requires no input features",
      "It only works on small datasets",
      "It cannot be used for classification",
    ],
    correct: 0,
  },
  {
    id: 21,
    question: "What does K-Means try to minimize when assigning points to clusters?",
    options: [
      "The number of clusters",
      "The distance between points and their assigned cluster centroid",
      "The number of features in the dataset",
      "The margin between classes",
    ],
    correct: 1,
  },
  {
    id: 22,
    question: "What happens during the 'update' step of the K-Means algorithm?",
    options: [
      "New data points are collected",
      "Cluster centroids are recalculated as the mean of assigned points",
      "Features are scaled to zero mean and unit variance",
      "The decision boundary margin is widened",
    ],
    correct: 1,
  },
  {
    id: 23,
    question: "Why might K-Means produce different results on different runs of the same data?",
    options: [
      "K-Means is deterministic and always gives the same result",
      "Initial centroid positions are often chosen randomly, affecting the final clusters",
      "The number of features changes between runs",
      "K-Means doesn't use centroids",
    ],
    correct: 1,
  },
  {
    id: 24,
    question: "Why do we split data into training and testing sets?",
    options: [
      "To make the dataset larger",
      "To evaluate how well a model generalizes to unseen data",
      "To remove the need for feature scaling",
      "To increase the number of clusters",
    ],
    correct: 1,
  },
  {
    id: 25,
    question: "What does it mean if a model has high accuracy on training data but low accuracy on test data?",
    options: [
      "The model is underfitting",
      "The model is overfitting",
      "The model needs more features",
      "The model has perfectly generalized",
    ],
    correct: 1,
  },
  {
    id: 26,
    question: "Which of these is an unsupervised learning algorithm?",
    options: ["Logistic Regression", "Random Forest", "K-Means Clustering", "Support Vector Machine"],
    correct: 2,
  },
  {
    id: 27,
    question: "Which of these is a supervised learning algorithm?",
    options: ["K-Means Clustering", "Principal Component Analysis", "K-Nearest Neighbors", "None of these"],
    correct: 2,
  },
  {
    id: 28,
    question: "What is the main difference between classification and regression tasks?",
    options: [
      "Classification predicts categories, regression predicts continuous values",
      "Classification predicts continuous values, regression predicts categories",
      "They are the same type of task",
      "Classification is always unsupervised, regression is always supervised",
    ],
    correct: 0,
  },
  {
    id: 29,
    question: "What does 'n_estimators' control in a Random Forest model?",
    options: [
      "The number of features used per split",
      "The number of decision trees in the forest",
      "The number of clusters formed",
      "The depth of the decision boundary",
    ],
    correct: 1,
  },
  {
    id: 30,
    question: "After reducing data to 2 principal components with PCA, what is a common next step?",
    options: [
      "Visualizing the data in a 2D scatter plot",
      "Calculating a confusion matrix directly on the components",
      "Skipping model training entirely",
      "Re-running K-Means on the original unscaled data",
    ],
    correct: 0,
  },
];
