# Introduction to RAG

*Notes coming soon — this page is a placeholder.*

---

**Retrieval-Augmented Generation (RAG)** enhances LLMs by fetching relevant external knowledge at query time, rather than relying solely on what was learned during training.

## The Problem RAG Solves

LLMs have limitations:
- **Knowledge cutoff** — don't know about recent events
- **Hallucination** — confabulate facts with confidence
- **Limited context** — can't "memorize" your entire document library

RAG fixes this by dynamically retrieving relevant information and injecting it into the prompt.

## The RAG Pipeline

```
User Query
    ↓
[Retriever] → Search vector DB for similar documents
    ↓
[Retrieved Chunks] → Injected into prompt context
    ↓
[Generator (LLM)] → Produces answer grounded in retrieved docs
    ↓
Response
```

## Two Core Components

### 1. Retriever
- Converts documents and queries into **embeddings** (vectors)
- Finds the K most semantically similar documents using **vector similarity**
- Most common: **cosine similarity** over a vector database

### 2. Generator
- An LLM that uses retrieved documents as grounding context
- Prompt template: `"Answer the question based on the following context: {docs}\n\nQuestion: {query}"`

## When to Use RAG

| Use Case | Suitable? |
|----------|-----------|
| Company knowledge base Q&A | Yes |
| Legal/medical document search | Yes |
| Real-time news queries | Yes |
| Simple factual QA (stable facts) | Maybe (fine-tuning might suffice) |
| Creative writing | No |

## Naive RAG vs Advanced RAG

- **Naive RAG**: embed → retrieve → generate
- **Advanced RAG**: query rewriting, re-ranking, hybrid search, iterative retrieval
