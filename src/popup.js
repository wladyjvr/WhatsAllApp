var statusEnabled = document.getElementById("statusEnabled");
var statusDisabled = document.getElementById("statusDisabled");

var setEnabled = function(val) {
    chrome.storage.sync.set({pluginEnabled: val});

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {

        chrome.tabs.executeScript(
            tabs[0].id,
            {code: 'window.location.reload()'});
        window.close();
    });



}

chrome.storage.sync.get('pluginEnabled', function(data) {
    if (data.pluginEnabled) {
        statusEnabled.checked = true;
    } else {
        statusDisabled.checked = true;
    }
});

statusEnabled.onchange = function(e){
    setEnabled(e.target.checked)
}

statusDisabled.onchange = function(e){
    setEnabled(!e.target.checked)
}

