// ─────────────────────────────────────────────────────────────────────────
// Editkaro.in — Google Sheets integration config
//
// This single file powers BOTH the newsletter email-capture widget and the
// Contact page form. It posts form data to a Google Apps Script Web App,
// which appends a row to a Google Sheet.
//
// SETUP INSTRUCTIONS
// 1. Create a new Google Sheet. Add a sheet tab named "Subscribers" with
//    header row: Timestamp | Email
//    Add a second sheet tab named "Contacts" with header row:
//    Timestamp | Name | Email | Phone | Message
// 2. In the Sheet, open Extensions → Apps Script and replace the default
//    code with the snippet in /google-apps-script/Code.gs (included in this
//    project root).
// 3. Click Deploy → New deployment → Type: "Web app".
//      - Execute as: Me
//      - Who has access: Anyone
// 4. Copy the generated Web App URL and paste it below as APPS_SCRIPT_URL.
// 5. Redeploy ("Manage deployments" → edit → new version) any time you
//    change the script.
// ─────────────────────────────────────────────────────────────────────────

export const APPS_SCRIPT_URL =
  import.meta.env.VITE_GOOGLE_SCRIPT_URL ||
  'https://script.google.com/macros/s/REPLACE_WITH_YOUR_DEPLOYMENT_ID/exec'

/**
 * Submits a payload to the Apps Script Web App.
 * Uses no-cors + text/plain to avoid Apps Script's CORS preflight issues.
 * @param {'subscribe'|'contact'} type
 * @param {Record<string,string>} data
 */
export async function submitToSheet(type, data) {
  const body = JSON.stringify({ type, ...data, timestamp: new Date().toISOString() })

  try {
    await fetch(APPS_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body,
    })
    // no-cors responses are opaque — we optimistically treat the request as
    // successful once it doesn't throw. Validate end-to-end against the
    // sheet itself the first time you wire this up.
    return { ok: true }
  } catch (err) {
    return { ok: false, error: err?.message || 'Network error' }
  }
}

export const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
export const isValidPhone = (phone) => /^[+]?[\d\s().-]{7,16}$/.test(phone)
