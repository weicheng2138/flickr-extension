var getSelectedTab = (tabs) => {
    if (tabs && tabs.length > 0) {
        var tabId = tabs[0].id;
        var sendMessage = (messageObj) =>
            chrome.tabs.sendMessage(tabId, messageObj);

        sendMessage({ action: "EXECUTE" });
        // document
        //     .getElementById("execute")
        //     .addEventListener("click", () => sendMessage({ action: "EXECUTE" }));
    }
};
chrome.tabs.query({active: true, currentWindow: true}, getSelectedTab);
