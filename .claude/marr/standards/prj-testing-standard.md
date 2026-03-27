---
marr: standard
version: 1
title: Testing Standard
scope: All testing activities including running, writing, and modifying tests

triggers:
  - WHEN running, writing, or modifying tests
  - WHEN evaluating test coverage or testing strategy
  - WHEN investigating test failures or flaky tests
  - WHEN making code changes that should have test coverage
---

# Testing Standard

> **AI Agent Instructions**: This document defines testing philosophy and practices. Follow these rules when running, writing, or modifying tests.

---

## Core Rules (NEVER VIOLATE)

1. **Test behavior, not implementation** because users care about outcomes
2. **Focus on critical paths** because that's where bugs have highest impact
3. **Meaningful tests over metrics** because quality trumps quantity
4. **Never commit with test failures** because broken tests break everyone's workflow

---

## Testing Priorities

### High-Value Testing (ALWAYS test)

- Critical user workflows
- Data validation and transformation
- Error handling paths
- Security-sensitive operations
- Integration points between systems

### Low-Value Testing (SKIP these)

- Framework functionality (tested by the framework)
- Third-party library behavior
- Trivial getters/setters
- UI appearance (unless critical to functionality)

---

## Testing Approach

### Unit Tests
- Test individual functions and methods
- Mock external dependencies
- Fast execution, run frequently

### Integration Tests
- Test component interactions
- Use real dependencies where practical
- Verify data flows correctly

### End-to-End Tests
- Test complete user workflows
- Run against realistic environments
- Focus on critical paths only

---

## Coverage Philosophy

**Focus on meaningful tests, not coverage numbers.**

- High coverage on critical paths
- Moderate coverage on supporting code
- Lower coverage acceptable for utilities and helpers

**Coverage is a guide, not a goal.** A well-tested critical path is more valuable than 100% coverage of trivial code.

---

## Anti-Patterns (FORBIDDEN)

- **Testing framework features** — Don't test what the framework already guarantees
- **Testing third-party libraries** — Trust published, maintained libraries
- **Chasing coverage metrics** — Focus on meaningful tests
- **Committing with failing tests** — All tests must pass before commit
- **Writing tests after the fact only** — Consider testability during design
- **Ignoring flaky tests** — Fix or remove unreliable tests immediately

---

**This testing standard ensures high-quality code without wasting effort on low-value tests.**
