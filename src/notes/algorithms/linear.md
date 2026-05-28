# Linear Algorithms

A **linear algorithm** runs in O(n) time — it processes each element in the input exactly once. These are among the most efficient algorithms possible for problems that require examining every element.

## Why O(n) Matters

If you have 1 million items:
- O(log n) → ~20 steps
- O(n) → 1,000,000 steps
- O(n²) → 1,000,000,000,000 steps

Linear time is the sweet spot for many real-world tasks where you cannot avoid touching each element at least once.

## Linear Search

The simplest example. Scan every element until you find the target.

```python
def linear_search(arr, target):
    for i, val in enumerate(arr):
        if val == target:
            return i
    return -1
```

**When to use it:** unsorted data, small datasets, or when you need to find all matches (not just one).

**When not to use it:** if the data is sorted, binary search (O(log n)) is far faster.

## Common Linear Algorithms

| Algorithm | What it does |
|---|---|
| Linear search | Find an element in an unsorted list |
| Array traversal | Visit every element once |
| Counting sort | Sort integers in a bounded range |
| Kadane's algorithm | Maximum subarray sum |
| Dutch flag problem | Partition array into three groups |

## Kadane's Algorithm (Classic O(n) Problem)

Find the contiguous subarray with the largest sum:

```python
def max_subarray(arr):
    max_sum = current = arr[0]
    for num in arr[1:]:
        current = max(num, current + num)
        max_sum = max(max_sum, current)
    return max_sum
```

The key insight: at each step, decide whether to extend the current subarray or start fresh.

## Key Takeaway

If your algorithm touches each element a fixed number of times and does constant work per element, it's O(n). Linear algorithms are often optimal — they're as fast as reading the input itself.
