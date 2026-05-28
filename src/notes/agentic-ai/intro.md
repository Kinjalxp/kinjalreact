# Agentic AI Overview

*Notes coming soon — this page is a placeholder.*

---

**Agentic AI** refers to AI systems that exhibit **autonomous, goal-directed behavior** over extended tasks — acting with greater independence, initiative, and capability than traditional chatbots or single-call LLMs.

## What Makes AI "Agentic"?

| Property | Description |
|----------|-------------|
| **Autonomy** | Acts without constant human supervision |
| **Goal-directedness** | Pursues objectives across multiple steps |
| **Adaptability** | Adjusts plans based on feedback and results |
| **Tool use** | Interacts with external systems |
| **Long horizon** | Completes tasks that span hours or days |

## Spectrum of Agency

```
Chatbot → Tool-calling LLM → ReAct Agent → Multi-Agent System → Fully Autonomous Agent
  (low autonomy)                                                    (high autonomy)
```

## Core Challenges

- **Reliability**: agents can make mistakes mid-task that compound
- **Safety**: hard to constrain behavior across arbitrary action sequences  
- **Observability**: difficult to know what the agent is "thinking"
- **Cost**: many LLM calls per task = high token cost
- **Trust**: when should the agent ask for human confirmation?

## Human-in-the-Loop

Most production agentic systems include checkpoints where humans:
- Review and approve plans before execution
- Confirm high-stakes actions (deleting data, sending emails)
- Provide clarification when the agent is uncertain

## The Future of Agentic AI

As models get better at planning, tool use, and self-correction, agentic systems will handle increasingly complex real-world tasks — software development, scientific research, business process automation.
