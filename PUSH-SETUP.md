# Paw & Hand Native Push Setup

Paw & Hand v9 has four push layers already implemented:

1. Match/message/Dog Date inserts create a `notifications` row.
2. The installed app registers a native device token into `push_devices`.
3. User notification preferences are stored in `notification_preferences`.
4. JWT-protected Edge Function `send-push` validates the sender/event and dispatches to FCM or APNs when provider credentials exist.

## Android / Firebase Cloud Messaging

Create/register Android app package:

`com.pawandhand.app`

Put Firebase's `google-services.json` in:

`android/app/google-services.json`

For GitHub Actions, base64-encode the file and save it as repository secret:

`FIREBASE_GOOGLE_SERVICES_JSON_BASE64`

The included debug/release workflows restore it automatically when present.

For server delivery, set these Supabase Edge Function secrets:

- `FCM_PROJECT_ID`
- `FCM_CLIENT_EMAIL`
- `FCM_PRIVATE_KEY`

Use the Firebase service-account values; keep the private key server-side only.

## iOS / APNs

After `npx cap add ios`, run:

```bash
npm run ios:prepare
```

This inserts Capacitor's current remote-notification callbacks into `AppDelegate.swift`.

In Xcode, enable the **Push Notifications** capability for bundle ID:

`com.pawandhand.app`

Set these Supabase Edge Function secrets:

- `APNS_TEAM_ID`
- `APNS_KEY_ID`
- `APNS_PRIVATE_KEY` — contents of the Apple `.p8` key
- `APNS_BUNDLE_ID=com.pawandhand.app`
- `APNS_ENVIRONMENT=production` (or `sandbox` for development)

Never commit the `.p8` file or Firebase private key.

## What works before provider secrets

In-app notifications and realtime badge updates still work. Native token registration can work when the platform project is configured, but remote OS-level delivery will report provider configuration required until server credentials are supplied.
