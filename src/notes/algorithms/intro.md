# Introduction to Algorithms

*Notes coming soon — this page is a placeholder.*

---

An **algorithm** is a finite sequence of well-defined instructions used to solve a problem or perform a computation.

## Why Algorithms Matter

- They determine *how efficiently* a program runs.
- A bad algorithm on fast hardware can still be slower than a good algorithm on slow hardware.
- Understanding algorithms is fundamental to computer science and AI.

## Key Properties

| Property | Description |
|----------|-------------|
| **Correctness** | Produces the right output for every valid input |
| **Efficiency** | Uses time and space resources wisely |
| **Finiteness** | Always terminates in a finite number of steps |
| **Definiteness** | Each step is precisely defined |

## Measuring Efficiency — Big-O Notation

Big-O describes the *worst-case* growth rate of an algorithm as input size `n` grows:

| Notation | Name | Example |
|----------|------|---------|
| O(1) | Constant | Array index access |
| O(log n) | Logarithmic | Binary search |
| O(n) | Linear | Linear search |
| O(n log n) | Linearithmic | Merge sort |
| O(n²) | Quadratic | Bubble sort |
| O(2ⁿ) | Exponential | Naive Fibonacci |

## Coming Up in This Section

- Sorting algorithms (bubble, merge, quick, heap)
- Searching algorithms (linear, binary)
- Graph algorithms (BFS, DFS, Dijkstra)
- Dynamic programming fundamentals
