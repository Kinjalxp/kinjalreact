const Regression = () => (
  <div className="px-2 sm:px-6 lg:px-20 py-8 animate-fadeIn">
    <h1 className="text-3xl font-bold mb-4">Regression Algorithms</h1>
    <p className="mb-4">
      <strong>Regression</strong> is the task of predicting a continuous value. Unlike classification (which outputs a label), regression outputs a number — a price, a temperature, a score.
    </p>

    <h2 className="text-2xl font-bold mb-4">The Core Idea</h2>
    <p className="mb-4">Given input features X, find a function f such that:</p>
    <pre className="bg-gray-100 p-4 rounded text-sm font-mono overflow-x-auto mb-4">
{`f(X) ≈ y`}
    </pre>
    <p className="mb-4">
      where y is a real-valued target. The algorithm learns f by minimizing the difference between its predictions and the actual values.
    </p>

    <h2 className="text-2xl font-bold mb-4">Linear Regression</h2>
    <p className="mb-4">
      The simplest regression model. It assumes the relationship between input and output is a straight line (or hyperplane in higher dimensions).
    </p>
    <pre className="bg-gray-100 p-4 rounded text-sm font-mono overflow-x-auto mb-4">
{`# Closed-form solution (Normal Equation)
import numpy as np

def linear_regression(X, y):
    # Add bias term
    X_b = np.c_[np.ones(X.shape[0]), X]
    # Solve: theta = (X^T X)^{-1} X^T y
    theta = np.linalg.inv(X_b.T @ X_b) @ X_b.T @ y
    return theta`}
    </pre>
    <p className="mb-2"><strong>Cost function:</strong> Mean Squared Error (MSE)</p>
    <pre className="bg-gray-100 p-4 rounded text-sm font-mono overflow-x-auto mb-4">
{`MSE = (1/n) * Σ (y_pred - y_true)²`}
    </pre>

    <h2 className="text-2xl font-bold mb-4">Gradient Descent for Regression</h2>
    <p className="mb-4">
      For large datasets, the closed-form solution is too expensive. Gradient descent iteratively moves toward the minimum:
    </p>
    <pre className="bg-gray-100 p-4 rounded text-sm font-mono overflow-x-auto mb-4">
{`def gradient_descent(X, y, lr=0.01, epochs=1000):
    m, n = X.shape
    theta = np.zeros(n)
    for _ in range(epochs):
        predictions = X @ theta
        errors = predictions - y
        gradient = (2/m) * X.T @ errors
        theta -= lr * gradient
    return theta`}
    </pre>

    <h2 className="text-2xl font-bold mb-4">Beyond Linear: Polynomial Regression</h2>
    <p className="mb-4">
      When the relationship is curved, you can extend linear regression by adding polynomial features:
    </p>
    <pre className="bg-gray-100 p-4 rounded text-sm font-mono overflow-x-auto mb-4">
{`from sklearn.preprocessing import PolynomialFeatures

poly = PolynomialFeatures(degree=2)
X_poly = poly.fit_transform(X)
# Then apply linear regression on X_poly`}
    </pre>
    <p className="mb-4">
      This is still "linear" internally — linear in its parameters — but captures nonlinear patterns.
    </p>

    <h2 className="text-2xl font-bold mb-4">Evaluating Regression Models</h2>
    <div className="overflow-x-auto mb-4">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2 text-left">Metric</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Formula</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Meaning</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 px-4 py-2 font-mono">MSE</td>
            <td className="border border-gray-300 px-4 py-2 font-mono">mean((y_pred - y)²)</td>
            <td className="border border-gray-300 px-4 py-2">Penalizes large errors heavily</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="border border-gray-300 px-4 py-2 font-mono">RMSE</td>
            <td className="border border-gray-300 px-4 py-2 font-mono">√MSE</td>
            <td className="border border-gray-300 px-4 py-2">Same units as y</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2 font-mono">MAE</td>
            <td className="border border-gray-300 px-4 py-2 font-mono">mean(|y_pred - y|)</td>
            <td className="border border-gray-300 px-4 py-2">Robust to outliers</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="border border-gray-300 px-4 py-2 font-mono">R²</td>
            <td className="border border-gray-300 px-4 py-2 font-mono">1 - SS_res/SS_tot</td>
            <td className="border border-gray-300 px-4 py-2">% of variance explained (0–1)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mb-4">Key Takeaway</h2>
    <p className="mb-4">
      Regression algorithms find the best mapping from inputs to a continuous output. Start with linear regression as your baseline — it's fast, interpretable, and often surprisingly effective. Move to more complex models only when linear assumptions clearly fail.
    </p>
  </div>
);

export default Regression;
