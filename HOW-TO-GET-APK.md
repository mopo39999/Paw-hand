# Quickest way to get Paw & Hand on an Android phone

## Option A — GitHub Actions (no local Android SDK required)

1. Put this project in a GitHub repository.
2. Open **Actions**.
3. Choose **Build Android Debug APK**.
4. Run the workflow.
5. Download the `paw-and-hand-debug-apk` artifact.
6. Install `app-debug.apk` on your Android test phone.

The debug APK is for private testing, not Google Play production.

## Option B — Android Studio

```bash
npm install
npm run build
npx cap add android
npx cap sync android
npx cap open android
```

Then choose **Build APK(s)** in Android Studio.

## Google Play release

Use the signed AAB workflow described in `HOW-TO-SIGN-ANDROID-AAB.md`. Google Play production/internal testing should use an Android App Bundle (`.aab`) rather than the debug APK.
