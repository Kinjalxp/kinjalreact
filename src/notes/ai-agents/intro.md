# What is an AI Agent?

*Notes coming soon — this page is a placeholder.*

---

An **AI agent** is a system that perceives its environment, reasons about it, and takes actions to achieve a goal — often in a loop until the task is complete.

## The Agent Loop

```
Observe → Think → Act → Observe → Think → Act → ...
```

Unlike a simple model that produces one output per input, an agent:
- Takes **sequences of actions**
- Interacts with **external tools and APIs**
- Maintains **state across steps**
- Adapts its plan based on **feedback**

## Key Components

| Component | Role |
|-----------|------|
| **LLM (Brain)** | Reasons, plans, and decides what to do next |
| **Tools** | Functions the agent can call (search, code exec, APIs) |
| **Memory** | Stores conversation history and learned facts |
| **Planning** | Breaks complex goals into sub-tasks |
| **Observation** | Processes tool outputs to inform next step |

## Types of Agents

- **ReAct agents** — interleave Reasoning and Action steps
- **Tool-calling agents** — use structured function calls
- **Plan-and-execute** — create a full plan first, then execute
- **Self-refine** — critique and iteratively improve outputs

## Why Agents?

Single LLM calls are limited:
- Can't browse the web or run code
- Context window limits long tasks
- One-shot output can't self-correct

Agents overcome these limits by **acting in the world**.
