---
name: codebase-team-assessment
description: Use when analyzing a repository's team structure, commit history, knowledge distribution, architecture, or bus-factor risk. Triggers on "who owns what," "team report," "codebase report," "knowledge gaps," "bus factor," or when onboarding to a new repo or assessing team capacity after a departure.
---

# Codebase & Team Assessment

## Overview

Strategic knowledge mapping of a codebase and the team around it. Not code review. Not debugging. This answers: who built what, who knows what, where are the gaps, and what's the risk profile.

These reports become long-lived reference documents that inform staffing decisions, ticket routing, and risk assessment.

## When to Run

- Developer departure or transition
- New team member onboarding
- Audit of knowledge distribution and risk
- Planning around technical debt or replatforming
- New repo being added to the portfolio

## The Process

### 1. Repo Orientation
- Get the repo and its full git history
- Check the vault for existing notes: Basecamps, system docs, deployment docs
- Identify the repo's role in the broader system (what breaks if this repo breaks?)

### 2. Git Archaeology
Commit history analysis across the full life of the repo:

- **Total commits, date range, active contributors**
- **Commits by author** with percentage of total. Identify the dominant contributor.
- **Activity phases.** Look for velocity changes over time: team transitions, departures, project pivots.
- **Multiple git identities.** Developers often commit under different emails. Consolidate before reporting.

### 3. Architecture Map
- **Tech stack table** (backend, frontend, database, deployment, etc.)
- **Key architectural patterns** and why they were chosen
- **Directory structure** of key areas with brief annotations
- **Key domain concepts** with definitions
- **Integration surface area** (what external systems connect, what breaks if the connection drops)

### 4. Team Distribution
For each contributor:
- Commit count, percentage, date range, current status (active, departed, sporadic)
- Specialization areas with commit counts by directory/domain
- Recent work (last 1-2 months) with specifics
- Cross-repo notes when someone works across multiple repos (bus-factor multiplier)

### 5. Domain Knowledge Matrix

| Domain Area | Primary Expert | Secondary | Knowledge Gap? |
|-------------|---------------|-----------|---------------|
| [Area] | [Name] | [Name or none] | [Yes/No + detail] |

The most actionable output. Shows where knowledge is concentrated and where departures would create blind spots.

### 6. Risk Assessment
- **Bus-factor risks** (areas where only one person understands the code)
- **Departed developer impact** (what knowledge left, what's undocumented)
- **Hot files** (most-changed files. Where bugs concentrate.)
- **Architectural risks** (missing staging, monolith files, single-branch deploys)
- **Integration fragility** (which external connections are most likely to break)

## Output

Create as a standalone note in the vault root with a Compass section linking to related Basecamps and system docs. These are reference documents. Note the analysis date prominently. Update when the team changes or a major project ships.
