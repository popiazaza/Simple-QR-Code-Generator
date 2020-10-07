function onOpen(e) {
  FormApp.getUi()
    .createMenu("Simple QR Code Generator")
    .addItem("Use shorten URL", "showShortQRCode")
    .addItem("Use full URL", "showFullQRCode")
    .addToUi();
}
function showShortQRCode() {
  var form = FormApp.getActiveForm();
  var html = HtmlService.createTemplateFromFile("qrcode");
  html.formURL = form.shortenFormUrl(form.getPublishedUrl());
  html = html.evaluate().setHeight(500).setWidth(300);
  FormApp.getUi().showModalDialog(
    html,
    "Simple QR Code Generator (Shorten URL)"
  );
}

function showFullQRCode() {
  var form = FormApp.getActiveForm();
  var html = HtmlService.createTemplateFromFile("qrcode");
  html.formURL = form.getPublishedUrl();
  html = html.evaluate().setHeight(500).setWidth(300);
  FormApp.getUi().showModalDialog(html, "Simple QR Code Generator (Full URL)");
}

function onInstall(e) {
  onOpen(e);
}
