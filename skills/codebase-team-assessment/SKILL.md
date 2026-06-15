---
name: codebase-team-assessment
description: Use when analyzing a repository's team structure, commit history, knowledge distribution, architecture, or bus-factor risk. Triggers on "who owns what," "team report," "codebase report," "knowledge gaps," "bus factor," or when onboarding to a new repo or assessing team capacity after a departure.
---

# Codebase & Team Assessment

**When this skill triggers, start your response with:** `Using codebase-team-assessment skill`

## Overview

Strategic knowledge mapping of a codebase and the team around it. Not code review. Not debugging. This answers: who built what, who knows what, where are the gaps, and what's the risk profile.

Validated across 4 your project repos and 1 your client repo. These reports become long-lived reference documents that inform staffing decisions, ticket routing, and risk assessment.

## When to Run

- Significant developer departure or transition (Dan Krieger's departure triggered the first round)
- New team member onboarding (understand what they're walking into)
- Audit of knowledge distribution and risk
- Planning around technical debt or replatforming
- New repo being added to the portfolio

## The Process

### 1. Repo Orientation
- **Pull the latest first (non-negotiable).** `git fetch --all --prune && git pull`. Git archaeology on a stale checkout undercounts recent commits and misattributes who's active. Note the date range you're actually working with. If the local checkout is weeks behind, the whole assessment is skewed.
- Check the vault for existing notes: Basecamps, system integration docs, deployment flow docs.
- Identify the repo's role in the broader system (what breaks if this repo breaks?).

### 2. Git Archaeology
Run commit history analysis across the full life of the repo:

- **Total commits, date range, active contributors**
- **Commits by author** with percentage of total. Identify the dominant contributor.
- **Activity phases** (velocity changes over time). Look for inflection points: team transitions, departures, project pivots.
- **Multiple git identities.** Developers often commit under different emails (personal, work, PR merge identity). Consolidate before reporting.

### 3. Architecture Map
Document the tech stack and key architectural patterns:

- **Tech stack table** (backend, frontend, CSS, build, database, cache, auth, deployment, monitoring)
- **Key architectural patterns** and why they were chosen (Inertia.js for SPA-feel with server routing, Nova for admin, polymorphic pricing model, etc.)
- **Directory structure** of key areas with brief annotations
- **Key domain concepts** with definitions (what's a Franchise, what's a Lab Test, what's a Pricing Delegate)
- **Integration surface area** (what external systems does this connect to, what breaks if the connection drops)

### 4. Team Distribution
For each contributor:

- **Commit count, percentage, date range, current status** (active, departed, sporadic)
- **Specialization areas** with commit counts by directory/domain (Models, Controllers, Vue Pages, Migrations, Nova, Services, etc.)
- **Recent work** (last 1-2 months) with specific ticket IDs and descriptions
- **Cross-repo note** when a developer works across multiple repos. Flag when someone carries significant load on multiple codebases (bus-factor multiplier).

### 5. Domain Knowledge Matrix

| Domain Area | Primary Expert | Secondary | Knowledge Gap? |
|-------------|---------------|-----------|---------------|
| [Area] | [Name] | [Name or none] | [Yes/No + detail] |

This is the most actionable output. It shows where knowledge is concentrated and where departures would create blind spots.

### 6. Risk Assessment
- **Bus-factor risks** (areas where only one person understands the code)
- **Departed developer impact** (what knowledge left with them, what's undocumented)
- **Hot files** (files with the most changes. High-change files are where bugs concentrate.)
- **Architectural risks** (single-branch hotfix problems, missing staging environments, 160KB monolith files)
- **Integration fragility** (which external system connections are most likely to break)

## Output Structure

Create as `[Client] [Repo Name] Codebase & Team Report.md` in vault root.

### Required sections:
1. **Compass** (what this repo is, why it matters, key facts)
2. **Summary** (navigable index with wiki links to sections)
3. **What This Codebase Is** (problem it solves, why it matters to the stack)
4. **Tech Stack** (table format)
5. **Architecture** (key patterns, directory structure)
6. **Key Domain Concepts** (definitions)
7. **The Team** (per-contributor sections with analysis)
8. **Domain Knowledge Distribution** (matrix table)
9. **Cross-Repo Team Analysis** (how the same team splits time)
10. **Commit Activity** (timeline with phases and velocity analysis)

### Link to the vault web:
- Related Basecamps
- System integration docs
- Deployment flow docs
- Related codebase reports for other repos in the same ecosystem
- Active tickets that reference this codebase

## Keeping Reports Current

These reports are snapshots. Note the analysis date prominently. When the team changes or a major project ships, the report should be updated or a new analysis run. The vault should always reflect the current state, not a historical snapshot presented as current.
