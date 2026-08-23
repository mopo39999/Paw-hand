# Paw & Hand iOS release path

A signed iOS archive requires macOS, Xcode, an Apple Developer membership, and signing credentials tied to your Apple account.

## Build

```bash
npm install
npm run build
npx cap add ios
npx cap sync ios
npx cap open ios
```

In Xcode:

1. Select the Paw & Hand app target.
2. Confirm bundle ID `com.pawandhand.app`.
3. Select the correct Apple Developer Team.
4. Enable automatic signing unless you intentionally manage profiles manually.
5. Add the final 1024x1024 App Store icon to the asset catalog.
6. Test signup, auth callbacks, photo upload, match/chat, reports, block, Dog Date, and account deletion on a real device.
7. Product → Archive.
8. Validate and upload to App Store Connect / TestFlight.

Before review, enter the live Privacy Policy (https://fnzyffiqbembsvrispzj.supabase.co/functions/v1/paw-hand-public/privacy) and Support (https://fnzyffiqbembsvrispzj.supabase.co/functions/v1/paw-hand-public/support) URLs and prepare reviewer access if email confirmation would otherwise block review.
