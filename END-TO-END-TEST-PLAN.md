# Paw & Hand v9 End-to-End Test Plan

Use disposable accounts before any store submission.

## Account A / Account B

1. Create two 18+ accounts and confirm both emails.
2. Complete profiles with reciprocal age/gender/dog preferences.
3. Verify each sees the other only when both sets of dealbreakers permit it.
4. Change one dealbreaker so eligibility fails; verify discovery excludes the pair.
5. Restore compatible preferences.
6. Like from A; Like/Paw Like from B; verify one reciprocal match is created.
7. Verify both match notifications appear in-app.
8. Send messages both directions and verify realtime updates.
9. Send a Dog Date and verify the Dog Date notification.
10. Register Android/iOS push devices when native provider configuration exists and verify remote delivery.
11. Disable one push device and verify it no longer receives remote pushes.
12. Report a profile, conversation and specific message; verify queue context in the moderation console.
13. Block the match and verify profile/chat access is removed as intended.

## Account security

1. Request forgot-password email.
2. Complete hosted reset-password flow.
3. Change password using current-password verification.
4. Change email and verify it.
5. Use global sign-out and confirm another session is revoked.
6. Delete a disposable account and confirm Auth/profile/media records are removed.

## Owner/admin

1. Create and verify the configured owner-email account.
2. Profile → Account Security → Activate owner moderation access.
3. Sign into the live moderation console.
4. Search users.
5. Mark a report reviewing/resolved/dismissed.
6. Warn a disposable user and verify the safety notification.
7. Suspend a disposable user and verify normal discovery/match access is restricted.
8. Ban and then restore the user.
9. Confirm moderation actions are recorded in the audit trail.

## Store build

1. Android debug APK on a physical device.
2. Signed Android AAB in Play internal/closed test.
3. iOS TestFlight build on a physical iPhone.
4. Test cold-start notification taps, permission denial, permission re-enable, offline launch, and network recovery.
