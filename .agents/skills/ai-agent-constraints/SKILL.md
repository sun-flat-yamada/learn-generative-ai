---
name: AI Agent Constraints
description: Specific constraints for AI agents to follow when interacting with the codebase.
---

# AI Agent Constraints

When performing analysis or code execution that generates temporary files or logs:

1. **Do not use the project root** for temporary file output.
2. **Redirect output to `_tmp_ai/`**. Create this directory if it does not exist.
3. **Ensure your tools and scripts are configured to respect this path**.

Example:

```bash
# Bad
npm list > npm_list.txt

# Good
mkdir -p _tmp_ai
npm list > _tmp_ai/npm_list.txt
```
