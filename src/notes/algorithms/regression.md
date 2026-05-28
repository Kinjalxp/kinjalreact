# Regression Algorithms

**Regression** is the task of predicting a continuous value. Unlike classification (which outputs a label), regression outputs a number — a price, a temperature, a score.

## The Core Idea

Given input features X, find a function f such that:

```
f(X) ≈ y
```

where y is a real-valued target. The algorithm learns f by minimizing the difference between its predictions and the actual values.

## Linear Regression

The simplest regression model. It assumes the relationship between input and output is a straight line (or hyperplane in higher dimensions).

```python
# Closed-form solution (Normal Equation)
import numpy as np

def linear_regression(X, y):
    # Add bias term
    X_b = np.c_[np.ones(X.shape[0]), X]
    # Solve: theta = (X^T X)^{-1} X^T y
    theta = np.linalg.inv(X_b.T @ X_b) @ X_b.T @ y
    return theta
```

**Cost function:** Mean Squared Error (MSE)

```
MSE = (1/n) * Σ (y_pred - y_true)²
```

## Gradient Descent for Regression

For large datasets, the closed-form solution is too expensive. Gradient descent iteratively moves toward the minimum:

```python
def gradient_descent(X, y, lr=0.01, epochs=1000):
    m, n = X.shape
    theta = np.zeros(n)
    for _ in range(epochs):
        predictions = X @ theta
        errors = predictions - y
        gradient = (2/m) * X.T @ errors
        theta -= lr * gradient
    return theta
```

## Beyond Linear: Polynomial Regression

When the relationship is curved, you can extend linear regression by adding polynomial features:

```python
from sklearn.preprocessing import PolynomialFeatures

poly = PolynomialFeatures(degree=2)
X_poly = poly.fit_transform(X)
# Then apply linear regression on X_poly
```

This is still "linear" internally — linear in its parameters — but captures nonlinear patterns.

## Evaluating Regression Models

| Metric | Formula | Meaning |
|---|---|---|
| MSE | mean((y_pred - y)²) | Penalizes large errors heavily |
| RMSE | √MSE | Same units as y |
| MAE | mean(\|y_pred - y\|) | Robust to outliers |
| R² | 1 - SS_res/SS_tot | % of variance explained (0–1) |

## Key Takeaway

Regression algorithms find the best mapping from inputs to a continuous output. Start with linear regression as your baseline — it's fast, interpretable, and often surprisingly effective. Move to more complex models only when linear assumptions clearly fail.
