/// Cookie widget (widget.js)
/// Source code: https://github.com/kirillzhosul/cookie-widget
/// Web page: https://kirillzhosul.github.io/cookie-widget/

const _cookieWidgetDomain = "https://kirillzhosul.github.io/cookie-widget";
let _cookieWidgetDivContainer = null;

_cookieWidgetLoadStyles = function (onLoad) {
  /// Will create style import, and call `onLoad` callback function on loading.
  /// load callback used to know that body is ready, styling is ready.
  let _cookieWidgetStyleImport = document.createElement("link");
  _cookieWidgetStyleImport.setAttribute("rel", "stylesheet");
  _cookieWidgetStyleImport.setAttribute("type", "text/css");
  _cookieWidgetStyleImport.setAttribute(
    "href",
    _cookieWidgetDomain + "/widget.css"
  );
  if (onLoad) {
    _cookieWidgetStyleImport.addEventListener("load", onLoad);
    console.log("widget.js => Loading widget...");
  }
  document.head.appendChild(_cookieWidgetStyleImport);
  return _cookieWidgetStyleImport;
};

_cookieWidgetCreate_ = function () {
  /// Create widget.

  // Root.
  _cookieWidgetDivContainer = document.createElement("div");
  // Child.
  let _cookieWidgetTextContent = document.createElement("div");
  let _cookieWidgetHeaderLabel = document.createElement("div");
  let _cookieWidgetButtonsDiv = document.createElement("div");
  let _cookieWidgetAcceptButton = document.createElement("button");

  // Root.
  _cookieWidgetDivContainer.setAttribute("id", "_cookieWidget_");
  _cookieWidgetDivContainer.setAttribute("class", "_cookieWidget_");

  // Header.
  _cookieWidgetHeaderLabel.innerText = "Cookie Widget";
  _cookieWidgetHeaderLabel.setAttribute("class", "_cookieWidgetHeader_");

  // Text.
  _cookieWidgetTextContent.innerText =
    "This site is using cookies! Cookie-files and another things is used by this website. If You do not leave website after reading that, You are not reject using this technologies.";

  // Accept button.
  _cookieWidgetAcceptButton.innerText = "Accept";
  _cookieWidgetAcceptButton.addEventListener("click", _cookieWidgetOnClose);

  // Buttons.
  _cookieWidgetButtonsDiv.setAttribute("class", "_cookieWidgetButtons_");

  // Links.
  //let _cookieWidgetLink = document.createElement("a");
  //_cookieWidgetLink.setAttribute("class", "_cookieWidgetLink_");
  //_cookieWidgetLink.setAttribute("href", _cookieWidgetDomain);
  //_cookieWidgetLink.innerText = "Add to my site!";

  // Inject children.
  _cookieWidgetDivContainer.appendChild(_cookieWidgetHeaderLabel);
  _cookieWidgetDivContainer.appendChild(_cookieWidgetTextContent);
  _cookieWidgetButtonsDiv.appendChild(_cookieWidgetAcceptButton);
  _cookieWidgetDivContainer.appendChild(_cookieWidgetButtonsDiv);
  //_cookieWidgetTextContent.appendChild(_cookieWidgetLink);

  // Inject final container.
  document.body.appendChild(_cookieWidgetDivContainer);
  console.log("widget.js => Widget was created!");
};

_cookieWidgetOnClose = function () {
  /// Closes widget.
  if (_cookieWidgetDivContainer === null) return;
  _cookieWidgetDivContainer.remove();
};
// Load styles, and after ready this will create widget itself.
_cookieWidgetLoadStyles(_cookieWidgetCreate_);
