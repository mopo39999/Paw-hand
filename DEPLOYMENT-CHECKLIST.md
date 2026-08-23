# Paw & Hand deployment checklist — v6

## Backend and app foundation

- [x] Connect Supabase production project
- [x] Apply production schema
- [x] Enable RLS on all public app tables
- [x] Tighten profile discovery and media access
- [x] Apply least-privilege Data API grants
- [x] Create private profile-media bucket
- [x] Enable Realtime messages
- [x] Deploy protected account-deletion Edge Function
- [x] Wire production URL + publishable key into the client
- [x] Add in-app and external account deletion
- [x] Add pause/resume discovery
- [x] Add profile, conversation, and message-level reporting
- [x] Add block/remove controls
- [x] Add server-side baseline text moderation
- [x] Add message/report rate limits
- [x] Add Safety Center and public safety page
- [x] Add Privacy, Terms, account-deletion, Safety, and Support page templates
- [x] Add Android debug APK GitHub Actions workflow
- [x] Add signed Android AAB GitHub Actions workflow
- [x] Add store listing and privacy/data-safety worksheets
- [x] Run Supabase security advisor with no findings after v6 migration

## Device / production validation

- [ ] Install dependencies in an environment with npm registry access
- [ ] Run `npm run build`
- [ ] Test two-account reciprocal matching
- [ ] Test realtime chat on two devices
- [ ] Test moderation rejection and normal-message delivery
- [ ] Test message-level report context in the moderation queue
- [ ] Test profile image upload and signed display
- [ ] Test pause/resume discovery
- [ ] Test block access from both accounts
- [ ] Test Dog Date proposal flow
- [ ] Test in-app account deletion on a disposable account
- [ ] Test external `delete-account.html` flow on a disposable account
- [ ] Configure production Supabase Auth email templates and redirect/deep-link URLs
- [ ] Run Android closed testing
- [ ] Run TestFlight testing on iPhone

## Store launch

- [x] Produce 512 px and 1024 px PNG icon assets from the current Paw & Hand mark
- [ ] Decide whether the current icon is final brand artwork
- [ ] Create final phone screenshots / feature graphic / App Store promotional imagery
- [x] Host Privacy, Terms, Safety, Support, and account-deletion pages at stable HTTPS URLs
- [x] Publish monitored support/privacy contact: mopo39999@gmail.com
- [ ] Replace starter legal text with reviewed final documents and operator details
- [ ] Staff moderation/report/appeal operations
- [ ] Add production image/photo moderation appropriate to a dating platform
- [ ] Configure Play Console dating-app age restriction/minor blocking controls
- [ ] Complete Google Play Data safety form (external deletion URL is now live)
- [ ] Complete Apple App Privacy disclosures
- [ ] Create and securely back up the Android upload keystore
- [ ] Add Android signing secrets to GitHub Actions
- [ ] Configure Apple Developer signing/provisioning
- [ ] Verify app age/content ratings in both store questionnaires
- [ ] Submit to closed/internal review before public release
