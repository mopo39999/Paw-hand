# Paw & Hand v10

Paw & Hand is a lightweight, dog-first dating app for web, Android, and iPhone. It combines human compatibility, dog compatibility, lifestyle fit, reciprocal dealbreakers, realtime chat, Dog Date planning, safety tooling, and an operator moderation console.

## Architecture

- Frontend: vanilla JavaScript + CSS
- Build: Vite 8
- Native shell: Capacitor 8
- Backend: Supabase / PostgreSQL
- Auth: Supabase Auth
- Realtime: messages + in-app notifications
- Media: private Supabase Storage with signed URLs
- Admin: JWT-protected Supabase Edge Functions
- Native notifications: Capacitor Push Notifications with FCM/APNs delivery plumbing

The client contains a Supabase publishable key only. No service-role key, Firebase private key, Apple `.p8` key, or Android signing secret is shipped in the app.

## v10 product features

### Dating + matching

- 18+ account creation
- Email verification and resend
- Human + dog onboarding
- Multiple lifestyle/activity signals
- People / Dog / Lifestyle compatibility scores
- User-adjustable score weighting
- Reciprocal age-range filtering
- Reciprocal gender preference filtering
- Reciprocal smoker dealbreaker
- Reciprocal dog-size and dog-energy preferences
- Optional shared-activity dealbreaker
- Like / Paw Like / Pass
- PostgreSQL-created reciprocal matches
- Separate Matches and Messages views
- Realtime chat
- Dog Date proposals
- Pause/resume discovery

### Account security

- Forgot-password email
- Hosted password-reset page
- Change email
- Change password with current-password verification support
- Global sign-out
- Permanent account + media deletion
- Public external account-deletion flow

### Notifications

- In-app notification inbox and unread badge
- New-match notifications
- Message notifications
- Dog Date notifications
- Safety/account notifications
- User notification preferences
- Native push token registration
- Disable old device registrations
- FCM/APNs Edge Function delivery plumbing

Native OS-level push requires the provider credentials described in `PUSH-SETUP.md`.

### Safety + moderation

- Baseline server-side text screening
- Server-side message/report rate limits
- Profile/conversation/message reporting
- Blocking
- Report severity triage
- Suspended/banned account enforcement
- Moderator/admin audit trail
- Live operator moderation console
- User search
- Warn / review / resolve / dismiss
- Admin-only suspend / ban / restore
- Safety Center and public safety/support pages

## Live operator tools

Moderation console:

https://fnzyffiqbembsvrispzj.supabase.co/functions/v1/paw-hand-admin

The page has no privileged key. It signs into Supabase Auth and calls the protected `moderation-admin` function.

### Activate the first owner

There are currently no Auth users in the connected project. Create and verify a normal Paw & Hand account using the configured owner email. In **Profile → Account security**, use **Activate owner moderation access**. The JWT-protected `bootstrap-owner` function will grant `admin` only when the authenticated, email-confirmed account exactly matches the configured owner address.

No password is sent to an operator and no service-role credential is exposed.

## Connected production backend

Project ref: `fnzyffiqbembsvrispzj`

The included `.env.production` points to this project and uses its publishable client key.

For another Supabase project, copy `.env.example` to `.env` and set:

```env
VITE_SUPABASE_URL=https://YOUR-PROJECT.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=YOUR_PUBLISHABLE_KEY
VITE_PUBLIC_SITE_URL=https://YOUR-PUBLIC-SITE
```

Then reproduce `supabase/schema.sql` / migrations and deploy the included Edge Functions.

## Local development

Requires Node.js 22.12+.

```bash
npm install
npm run validate
npm run dev
```

Production web build:

```bash
npm run build
```

The current ChatGPT runtime cannot reliably reach the npm registry, so dependency installation/build compilation cannot be completed inside this environment. Dependency-free syntax/config validation passes, and the Edge Functions deployed successfully on Supabase.

## Android

Debug APK workflow:

- `.github/workflows/android-debug.yml`

Signed Play AAB workflow:

- `.github/workflows/android-release.yml`
- `HOW-TO-SIGN-ANDROID-AAB.md`

Package ID: `com.pawandhand.app`

## iPhone

See `IOS-RELEASE-GUIDE.md`. Bundle ID: `com.pawandhand.app`.

## Live public URLs

- Privacy: https://fnzyffiqbembsvrispzj.supabase.co/functions/v1/paw-hand-public/privacy
- Terms: https://fnzyffiqbembsvrispzj.supabase.co/functions/v1/paw-hand-public/terms
- Safety: https://fnzyffiqbembsvrispzj.supabase.co/functions/v1/paw-hand-public/safety
- Support: https://fnzyffiqbembsvrispzj.supabase.co/functions/v1/paw-hand-public/support
- Password reset: https://fnzyffiqbembsvrispzj.supabase.co/functions/v1/paw-hand-public/reset-password
- Verification completion: https://fnzyffiqbembsvrispzj.supabase.co/functions/v1/paw-hand-public/verified
- Account deletion: https://fnzyffiqbembsvrispzj.supabase.co/functions/v1/paw-hand-public/delete-account

## Validation

```bash
npm run validate
npm run release:check
```

The release checker intentionally remains red until the legal operator identity is supplied and the starter Terms receive final legal review.

## Important remaining launch work

- Legal operator/company identity
- Final legal review
- Custom SMTP + auth redirect URL configuration in Supabase Dashboard
- Production photo/image moderation
- Staffed moderation/appeals process
- FCM/APNs provider credentials for OS-level push
- Android/iOS signing credentials
- Google Play dating/minor-blocking configuration
- Apple/Google privacy questionnaires
- Real-device closed beta / TestFlight testing
