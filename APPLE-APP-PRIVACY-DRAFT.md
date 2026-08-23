# Apple App Privacy — Draft Mapping

Use this as a worksheet for App Store Connect. Verify against the final production build and legal policy before submission.

Likely disclosures for the current build:

- **Contact Info:** email address — account authentication and recovery; linked to identity.
- **User Content:** photos, messages, profile biography — app functionality and safety; linked to identity.
- **Identifiers:** Supabase user/account identifier — app functionality; linked to identity.
- **Other Data:** dating preferences, lifestyle selections, dog profile data, swipes, matches, blocks, safety reports — app functionality/personalization/safety; linked to identity.
- **Location:** review whether the manually entered approximate area should be disclosed as coarse location. The app does not currently request precise device GPS.
- **Tracking:** none in the current build; there is no advertising SDK or cross-app tracking SDK.

Before submission, re-check every dependency and any later analytics, crash-reporting, moderation, payment, or advertising SDK because those can change App Privacy answers.
