# Paw & Hand Public Site

Live base URL:

https://fnzyffiqbembsvrispzj.supabase.co/functions/v1/paw-hand-public

Routes:

- `/privacy` — Privacy Policy
- `/terms` — Terms & Community Rules
- `/safety` — Safety Center
- `/support` — Support contact
- `/verified` — email-verification completion page
- `/reset-password` — hosted recovery password update page
- `/delete-account` — credential-verified external deletion flow

The public information pages intentionally do not require JWT authentication. Sensitive account deletion still calls the separate JWT-protected `delete-account` Edge Function after credentials are verified.

The v9 Privacy page discloses notification preferences/device tokens and moderation records in addition to existing account/profile/chat/safety data.
