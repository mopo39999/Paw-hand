# Paw & Hand v9 Validation Record

Validation performed against the connected production Supabase project and the packaged source.

## Passed

- JavaScript syntax: `src/main.js`, `src/api.js`, `src/push.js`, account deletion helper, Vite config.
- JSON parsing: `package.json`, `capacitor.config.json`, PWA manifest.
- Required v9 migration/function files present.
- Supabase security advisor: **0 findings** after v9 hardening.
- All 11 public app tables have RLS enabled.
- Client notification UPDATE privilege is limited to `read_at` only.
- Client profile UPDATE privileges do not include `moderation_status`.
- Client report INSERT privileges do not include severity/review/admin-note columns.
- Match notification, message notification, and report-severity triggers are live.
- Required v9 database migrations appear in Supabase migration history.
- Live Edge Functions are ACTIVE: `delete-account`, `paw-hand-public` v3, `moderation-admin` v2, `paw-hand-admin` v2, `send-push` v2.
- Public-site function is version 3 and push dispatcher is version 2.
- Performance advisor has no missing-FK-index warnings after v9 index hardening; remaining notices are unused-index informational messages on the empty/new database.

## Environment-limited / still requires real accounts or credentials

- `npm install` / Vite native build cannot complete in this ChatGPT runtime because npm registry access times out.
- There are currently no Supabase Auth users, so two-account matching/chat and admin login cannot yet be exercised live.
- Native push provider credentials are not configured, so FCM/APNs network delivery is not yet testable.
- Supabase Auth redirect URL allow-list and production SMTP must be configured in the Dashboard.
- Android/iOS signing and real-device testing require the corresponding developer credentials/toolchains.

## Release checker

`npm run release:check` intentionally reports only the remaining legal blockers: legal operator identity and final reviewed Terms.
