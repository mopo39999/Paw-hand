# Paw & Hand Admin / Moderation

## Live console

https://fnzyffiqbembsvrispzj.supabase.co/functions/v1/paw-hand-admin

The console contains no privileged key. It signs into Supabase Auth and calls the JWT-protected `moderation-admin` function.

## Roles

- `moderator`: view reports/context, search users, mark reviewing, resolve/dismiss, and warn users.
- `admin`: all moderator actions plus suspend, ban and restore accounts.

Role authorization is verified server-side from protected Auth `app_metadata`, never `user_metadata`.

## Bootstrap the owner

1. Create a normal Paw & Hand account using the configured owner email.
2. Confirm the email address.
3. Open Profile → Account Security.
4. Tap **Activate owner moderation access**.
5. Open the moderation console and sign in.

The `bootstrap-owner` Edge Function grants `admin` only when the authenticated account is email-confirmed and its email exactly equals the configured owner email. It does not expose a service-role key.

## Queue behavior

Reports carry reason/details plus optional match/message context and server-assigned severity:

- Critical: underage concern, sexual exploitation, threats/violence
- Urgent: hate/discrimination, unsafe behavior, harassment
- Normal: spam/scam, fake profile, other

Actions are written to `moderation_actions` for an audit trail.

## Operational recommendation

Before public launch, define on-call ownership for critical reports, response-time targets, appeals, emergency/law-enforcement escalation criteria, and image/photo review procedures. Use `MODERATION-PLAYBOOK.md` as the starting runbook.
