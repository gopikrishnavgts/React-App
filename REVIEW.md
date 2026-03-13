# Code Review Guidelines

This document contains automated review rules enforced by Claude on every pull request.

## React Best Practices

- **Hooks**: Ensure all React hooks follow the Rules of Hooks (only call at top level, only in React functions)
- **PropTypes**: All components should have PropTypes or TypeScript types defined for props
- **Key Props**: All list items must have unique, stable key props (avoid using array indices)
- **useEffect Dependencies**: All useEffect hooks must have correct dependency arrays

## Code Quality Standards

- **No Console Logs**: Remove all `console.log` statements before merging to production
- **Error Handling**: All async functions must have proper try-catch blocks
- **Naming Conventions**:
  - Components: PascalCase (e.g., `UserProfile`)
  - Functions/variables: camelCase (e.g., `fetchUser`)
  - Constants: UPPER_SNAKE_CASE (e.g., `API_BASE_URL`)
- **Magic Numbers**: Avoid hardcoded numbers; use named constants instead

## Security Requirements

- **Input Validation**: All user inputs must be validated before processing
- **XSS Prevention**: Never use `dangerouslySetInnerHTML` without proper sanitization
- **API Keys**: No hardcoded API keys or secrets in code
- **HTTPS**: All external API calls must use HTTPS

## Performance

- **Memoization**: Use `useMemo` and `useCallback` for expensive computations and function props
- **Code Splitting**: Large components should be lazy-loaded
- **Image Optimization**: All images should have appropriate alt text and be optimized

## Testing Requirements

- **Unit Tests**: All utility functions must have unit tests
- **Component Tests**: Critical user flows must have integration tests
- **Test Coverage**: Aim for minimum 80% code coverage

## Documentation

- **JSDoc Comments**: All exported functions should have JSDoc comments
- **README Updates**: Update README.md if adding new features or changing setup process
- **Inline Comments**: Complex logic should have explanatory comments

## Accessibility

- **ARIA Labels**: Interactive elements must have appropriate ARIA labels
- **Keyboard Navigation**: All interactive elements must be keyboard accessible
- **Alt Text**: All images must have descriptive alt text

## Git Commit Standards

- **Commit Messages**: Use conventional commits format (feat:, fix:, docs:, etc.)
- **Branch Naming**: Use format `feature/description` or `bugfix/description`
- **PR Description**: All PRs must include description of changes and testing done
