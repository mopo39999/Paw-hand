# Paw & Hand — Moderation Playbook

This is the operating playbook for the safety features already present in the app. It should be owned by a real person or moderation team before public launch.

## Product controls already implemented

- 18+ declaration during account creation and profile age validation
- Server-side baseline text filtering for profile text, messages, and Dog Date text
- Message rate limit: 30 messages per minute per sender
- Report rate limit: 10 reports per hour per reporter
- Profile reporting
- Conversation reporting with `match_id` context
- Message-level reporting with `message_id` context
- Blocking, which removes access between the pair through RLS
- Private profile-media bucket
- Permanent account deletion
- Safety Center guidance

## Report priorities

### P0 — immediate safety risk

Examples: credible threat of violence, child sexual exploitation, trafficking indicators, extortion, imminent physical danger.

Action: preserve the report record, restrict the reported account as quickly as possible, escalate to the designated safety lead, and follow applicable legal/reporting obligations. Do not promise the reporter a law-enforcement outcome.

### P1 — serious abuse

Examples: targeted harassment, stalking behavior, hate, sexual coercion, repeated attempts to evade a block, serious fraud/scam behavior.

Target: human review as soon as operationally possible. Restrict or remove accounts when evidence supports the report.

### P2 — platform abuse

Examples: spam, commercial solicitation, deceptive/fake profiles, unwanted repeated messaging.

Target: review in the normal moderation queue. Consider warning, restriction, or removal depending on history and severity.

### P3 — low-severity disputes

Examples: compatibility disagreement, rude but non-threatening behavior, good-faith misunderstandings.

Target: review when needed; encourage use of block/unmatch controls where appropriate.

## Moderator workflow

1. Open the report in Supabase and review the reason, details, `match_id`, and `message_id` when present.
2. Confirm the reported account and relevant message/conversation context.
3. Check for prior reports or repeated behavior.
4. Record the decision outside user-editable fields and update `reports.status` through a trusted admin process.
5. Restrict or delete abusive accounts only from trusted server/admin tooling — never from a public client with a service-role key.
6. Keep a minimal audit note containing the reason for action and reviewer/time.
7. Support/appeal channel: mopo39999@gmail.com.

## Important limitation

The built-in phrase filter is only a baseline layer. It is intentionally conservative and cannot understand context, images, grooming patterns, coded language, or every abusive phrase. A public dating platform still needs human moderation operations and, ideally, dedicated image/text safety tooling.
