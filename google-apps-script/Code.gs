// Editkaro.in — Google Apps Script Web App
// Paste this into Extensions → Apps Script in your Google Sheet, then
// deploy as a Web App (Execute as: Me / Access: Anyone).

function doPost(e) {
  var data = JSON.parse(e.postData.contents);
  var ss = SpreadsheetApp.getActiveSpreadsheet();

  if (data.type === 'subscribe') {
    var sheet = ss.getSheetByName('Subscribers');
    sheet.appendRow([data.timestamp, data.email]);
  } else if (data.type === 'contact') {
    var sheet = ss.getSheetByName('Contacts');
    sheet.appendRow([data.timestamp, data.name, data.email, data.phone, data.message]);
  }

  return ContentService.createTextOutput(
    JSON.stringify({ ok: true })
  ).setMimeType(ContentService.MimeType.JSON);
}

function doGet() {
  return ContentService.createTextOutput('Editkaro.in form receiver is live.');
}
