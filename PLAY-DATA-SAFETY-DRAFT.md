# Google Play Data Safety — Draft Mapping

Use this as a worksheet when completing Play Console. Verify each answer against the production build and any future SDKs before submitting.

## Data currently handled

| Data | Purpose | Linked to identity? | Shared with advertising? |
|---|---|---|---|
| Email address | Account authentication/recovery | Yes | No |
| Name / age / gender / dating preferences | Profile, discovery, compatibility | Yes | No |
| Approximate location label entered by user | Matching context | Yes | No |
| Dog profile information | Matching and profile display | Yes | No |
| Profile photos | Profile display | Yes | No |
| Messages | Realtime match chat / safety | Yes | No |
| Swipes and matches | Core matching functionality | Yes | No |
| Blocks and safety reports | Safety, abuse prevention | Yes | No |
| Dog Date proposals | Match communication | Yes | No |

## Current design facts

- No ad SDK is included.
- No third-party analytics SDK is included.
- The MVP does not request precise GPS.
- Account deletion is available in-app and through an external web page.
- Profile media is stored in a private bucket.
- Supabase is the backend service provider for Auth, Database, Realtime, and Storage.

## Before Play submission

- Complete the Play Data safety questionnaire using the deployed production behavior, not this draft alone.
- Account-deletion URL: https://fnzyffiqbembsvrispzj.supabase.co/functions/v1/paw-hand-public/delete-account
- Privacy Policy URL: https://fnzyffiqbembsvrispzj.supabase.co/functions/v1/paw-hand-public/privacy
- Complete the age-restricted/dating declarations and use any Play Console minor-blocking controls required for dating apps at submission time.
