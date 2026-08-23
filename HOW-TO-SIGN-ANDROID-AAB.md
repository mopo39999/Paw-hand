# Build a signed Android AAB with GitHub Actions

The repository includes `.github/workflows/android-release.yml`.

## 1. Create your Android upload keystore locally

Do this on a computer you control and keep the keystore backed up securely:

```bash
keytool -genkeypair -v \
  -keystore paw-hand-upload.jks \
  -alias pawhand \
  -keyalg RSA -keysize 4096 -validity 10000
```

Do not commit `paw-hand-upload.jks` to Git.

## 2. Convert it to base64 for a GitHub secret

macOS:

```bash
base64 -i paw-hand-upload.jks | pbcopy
```

Linux:

```bash
base64 -w 0 paw-hand-upload.jks
```

## 3. Add GitHub Actions secrets

Repository → Settings → Secrets and variables → Actions:

- `ANDROID_KEYSTORE_BASE64`
- `ANDROID_KEY_ALIAS`
- `ANDROID_KEYSTORE_PASSWORD`
- `ANDROID_KEY_PASSWORD`

## 4. Run the workflow

Actions → **Build Signed Android AAB** → Run workflow.

Enter a version name such as `1.0.0` and a monotonically increasing integer version code such as `1`.

The workflow:

1. Builds the Vite app.
2. Generates the Capacitor Android project.
3. Syncs the web assets.
4. Sets version name/code.
5. Builds the release AAB.
6. Signs and verifies it with your upload key.
7. Uploads the signed `.aab` as a GitHub Actions artifact.

Use that AAB for Google Play internal/closed testing. Keep Google Play App Signing enabled so the upload key is not the final distribution signing key.
