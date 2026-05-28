# Introduction to Boosting

*Notes coming soon — this page is a placeholder.*

---

**Boosting** is an ensemble technique that combines many **weak learners** (models slightly better than random) sequentially, where each new model focuses on the mistakes made by the previous ones.

## Core Idea

> "Can a set of weak learners create a strong learner?"

Instead of training one powerful model, boosting trains a sequence of simple models — each correcting the errors of the last — and combines their outputs.

## How It Differs from Bagging

| | Bagging (e.g., Random Forest) | Boosting |
|--|-------------------------------|---------|
| Training | Parallel (independent) | Sequential (dependent) |
| Focus | Reduce variance | Reduce bias |
| Error handling | Each model trained on random subset | Each model trained on previous errors |
| Example | Random Forest | AdaBoost, XGBoost |

## General Boosting Process

1. Train a weak learner on the training data
2. Evaluate its errors
3. Increase weight of misclassified examples
4. Train next weak learner on the reweighted data
5. Repeat steps 2–4 for T rounds
6. Final prediction = weighted vote / sum of all weak learners

## Key Boosting Algorithms

- **AdaBoost** — the original boosting algorithm
- **Gradient Boosting** — frames boosting as gradient descent in function space
- **XGBoost** — extreme gradient boosting with regularization and speed optimizations
- **LightGBM** — leaf-wise tree growth for faster training on large datasets
- **CatBoost** — handles categorical features natively
