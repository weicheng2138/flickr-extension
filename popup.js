var getSelectedTab = (tab) => {
    var tabId = tab.id;
    var sendMessage = (messageObj) =>
        chrome.tabs.sendMessage(tabId, messageObj);

    sendMessage({ action: "EXECUTE" });
    // document
    //     .getElementById("execute")
    //     .addEventListener("click", () => sendMessage({ action: "EXECUTE" }));
};
chrome.tabs.getSelected(null, getSelectedTab);
