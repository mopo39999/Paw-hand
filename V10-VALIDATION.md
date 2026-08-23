# Paw & Hand v10 validation

Validated on 2026-08-22:

- `npm run validate` passes.
- All JavaScript and MJS files pass Node syntax checks.
- Required JSON configuration files parse successfully.
- Required release files are present.
- Discover UI includes reciprocal-candidate status, improved real-data empty state, labeled swipe actions, and a protected `Why this match?` control layer.
- Supabase v10 schema tail mirrors the least-privilege grants applied to the live project.
- No service-role/private-key credential is embedded in the source. The publishable Supabase client key is intentionally public.

Full `npm install` / Vite production build could not be executed in the packaging runtime because DNS access to registry.npmjs.org returned `EAI_AGAIN`. Dependency versions remain pinned in `package.json`; CI or a normal development environment with npm network access can run `npm install`, `npm run validate`, and `npm run build`.

Commercial-release checklist still requires the legal operator/company identity and final legal review of Terms.
