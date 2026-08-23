# Paw & Hand Account Security — v9

Implemented:

- Signup email verification redirect
- Resend verification email
- Forgot-password email
- Hosted password-reset page
- Change email
- Change password with current-password verification support
- Global sign-out
- Permanent account deletion
- Verified-owner admin bootstrap

## Live URLs

Verification completion:
https://fnzyffiqbembsvrispzj.supabase.co/functions/v1/paw-hand-public/verified

Password reset:
https://fnzyffiqbembsvrispzj.supabase.co/functions/v1/paw-hand-public/reset-password

## Required Supabase Dashboard setup

In Authentication → URL Configuration, allow the Paw & Hand production public-site redirect URLs. Configure a production Site URL.

For production mail delivery, configure custom SMTP instead of relying on the default trial/best-effort sender.

## Owner activation

After creating and verifying the configured owner-email account, Profile → Account Security exposes **Activate owner moderation access**. The server verifies both the exact email and email-confirmed state before granting `app_metadata.role=admin`.

## Disposable-account test plan

1. Signup → email verification → sign in.
2. Forgot password → recovery link → new password → sign in.
3. Change email → verify new address.
4. Change password with current password.
5. Sign out all devices.
6. Delete a disposable account and verify Auth/profile/media removal.
