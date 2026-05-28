# Neural Network Basics

*Notes coming soon — this page is a placeholder.*

---

A **Neural Network** is a computational model loosely inspired by the brain. It consists of layers of interconnected nodes (neurons) that transform inputs into outputs through learned weights.

## Architecture

```
Input Layer → Hidden Layer(s) → Output Layer
   [x₁]         [h₁  h₂]         [ŷ]
   [x₂]    →    [h₃  h₄]    →
   [x₃]         [h₅  h₆]
```

## The Neuron

Each neuron:
1. Takes a weighted sum of inputs: `z = Σ wᵢxᵢ + b`
2. Applies an activation function: `a = f(z)`

## Activation Functions

| Function | Formula | Use Case |
|----------|---------|----------|
| **ReLU** | max(0, x) | Hidden layers (default) |
| **Sigmoid** | 1/(1+e⁻ˣ) | Binary output |
| **Softmax** | eˣⁱ/Σeˣʲ | Multi-class output |
| **Tanh** | (eˣ-e⁻ˣ)/(eˣ+e⁻ˣ) | Normalized hidden layers |

## Training — Backpropagation

1. **Forward pass**: compute predictions
2. **Compute loss**: measure error (cross-entropy, MSE, etc.)
3. **Backward pass**: compute gradients via chain rule
4. **Update weights**: `w := w - α · ∂L/∂w`

## Key Concepts

- **Epoch**: one full pass through the training data
- **Batch size**: number of samples per gradient update
- **Learning rate**: step size for weight updates
- **Dropout**: randomly zeros neurons during training to prevent overfitting
- **Batch normalization**: normalizes layer inputs for faster, more stable training
