# AI Agent Constraints

AI agents working on this project MUST adhere to the following constraints regarding temporary files and logs.

## Temporary Files

- AI agents **MUST NOT** output temporary analysis files or logs to the project root.
- Use the `_tmp_ai/` directory for any temporary files generated during analysis or code execution.
- Ensure that `_tmp_ai/` is ignored by the version control system (check `.gitignore`).
