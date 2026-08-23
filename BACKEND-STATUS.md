# Paw & Hand Backend Status — v9

Connected Supabase project: `fnzyffiqbembsvrispzj`

## Live database

- PostgreSQL schema applied
- 11 public app tables protected by RLS
- Reciprocal discovery filters age, gender preference, smoking, dog size, dog energy and optional shared activities
- Reciprocal likes create matches automatically
- Suspended/banned users are removed from normal discovery/match access
- Private `profile-media` bucket with signed media URLs
- Realtime enabled for messages and notifications
- Baseline text moderation + message/report rate limits
- Severity-aware safety reports
- Moderation action audit table
- Notification preferences and push-device registrations

## Live Edge Functions

- `delete-account` — JWT protected
- `paw-hand-public` — public policy/support/recovery/deletion pages
- `moderation-admin` — JWT-protected moderation API
- `paw-hand-admin` — public shell; no privileged key, requires moderator/admin sign-in for data/actions
- `send-push` — JWT-protected push dispatcher
- `bootstrap-owner` — JWT-protected one-time owner role activation for the verified configured owner email

## Security status

Latest Supabase security advisor result: **0 findings**.

Performance advisor currently reports only unused-index informational notices, expected because the project has no production traffic/users yet.

The browser/mobile app receives only a Supabase publishable key. Service/admin credentials remain server-side.

## Account state

At the time v9 was packaged there were no Auth users. The first owner can create/verify the configured owner-email account and activate admin access from Profile → Account Security.

## Provider-dependent features

In-app notification rows/realtime work now. Remote OS push requires FCM/APNs credentials stored as Edge Function secrets; see `PUSH-SETUP.md`.

Auth email flows require production SMTP and allowed redirect URLs to be configured in the Supabase Dashboard before launch.
