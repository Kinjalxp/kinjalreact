# What is Machine Learning?

*Notes coming soon — this page is a placeholder.*

---

**Machine Learning (ML)** is a subset of AI where systems learn patterns from data without being explicitly programmed for each task.

## Three Types of Machine Learning

### 1. Supervised Learning
- Trains on **labeled** data (input → known output)
- Goal: learn a mapping function
- Examples: spam detection, image classification, price prediction

### 2. Unsupervised Learning
- Trains on **unlabeled** data
- Goal: discover hidden structure
- Examples: customer segmentation, anomaly detection, topic modeling

### 3. Reinforcement Learning
- An agent learns by **trial and error** through rewards/penalties
- Goal: maximize cumulative reward
- Examples: game-playing AI, robotics, recommendation systems

## The ML Pipeline

```
Raw Data → Data Cleaning → Feature Engineering → Model Training → Evaluation → Deployment
```

## Key Terms

| Term | Meaning |
|------|---------|
| **Feature** | Input variable used for prediction |
| **Label / Target** | The output the model tries to predict |
| **Training set** | Data used to train the model |
| **Validation set** | Data used to tune hyperparameters |
| **Test set** | Held-out data for final evaluation |
| **Overfitting** | Model memorizes training data, fails on new data |
| **Underfitting** | Model is too simple to capture patterns |

## Bias-Variance Tradeoff

- **High bias** → underfitting (model too simple)
- **High variance** → overfitting (model too complex)
- Goal: find the sweet spot that generalizes well
