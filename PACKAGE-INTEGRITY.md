# Package integrity

Top-level npm dependencies are pinned to exact versions in `package.json`.

A committed `package-lock.json` is not included in this generated package because this execution environment cannot currently reach the npm registry to resolve the full transitive tree. Do not fabricate a lockfile. On the first networked development/build machine:

```bash
npm install --ignore-scripts
npm run validate
npm run build
```

Review the generated lockfile, run your dependency/security checks, then commit `package-lock.json` and switch CI from `npm install` to `npm ci` for reproducible release builds.
