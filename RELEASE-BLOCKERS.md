# Paw & Hand v9 — Remaining release blockers

The product/backend are substantially built, but do not submit publicly until the owner-specific and external-platform items below are complete.

## Legal/operator

- Legal operator/company name
- [x] Public support/privacy/safety contact: mopo39999@gmail.com
- Mailing/business address if required by launch jurisdiction/store disclosures
- Final attorney/legal review of Terms, Privacy and moderation/appeals language
- [x] Stable HTTPS URLs for Privacy, Terms, Safety, Support, reset and account deletion

## Supabase/Auth operations

- Configure production SMTP
- Configure Site URL and allowed auth redirect URLs for verification/password recovery
- Create and verify the owner account
- Activate owner admin access through Profile → Account Security

## Safety operations

- Staff human moderation and appeals
- Add production photo/image moderation
- Define incident escalation procedure
- Establish backup/monitoring/alerting plan

## Native push

- Firebase Android app + `google-services.json`
- FCM service-account Edge Function secrets
- Apple Push capability + APNs `.p8` Edge Function secrets

## Store/account actions

- Google Play dating/age-restricted/minor-blocking controls
- Google Play Data safety form
- Apple App Privacy disclosures
- Final content/age rating questionnaires
- Android upload keystore/GitHub signing secrets
- Apple Developer signing/provisioning

## Testing

- Android closed test
- iOS TestFlight test
- Two-account end-to-end test: reciprocal filtering, match creation, chat, notifications, report/block, Dog Date, password reset and deletion
- Admin test: warn, suspend, ban, restore and report-state transitions
