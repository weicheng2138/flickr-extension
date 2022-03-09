const execute = () => {
    // console.log($(".max-zoom-level").length);
    if ($(".max-zoom-level img").length) {
        downloadImg(getLargestImg(".max-zoom-level img"));
    } else {
        if ($(".zoom-photo-container img").length) {
            downloadImg(getLargestImg(".zoom-photo-container img"));
        }
    }
};

const pixelMapping = {
    z: 0,
    c: 1,
    b: 2,
    h: 3,
    k: 4,
    "3k": 5,
    "4k": 6,
    "5k": 7,
    "6k": 8,
    o: 9,
};

const getLargestImg = (className) => {
    var toReturn;
    let max = 0;
    $(className).each(function () {
        console.log($(this)[0].src.split("/").pop());
        const fileName = $(this)[0].src.split("/").pop();
        let fileNameTailNumber =
            pixelMapping[fileName.split("_").pop().split(".").shift()];
        if (fileNameTailNumber > max) {
            max = fileNameTailNumber;
            toReturn = $(this)[0].src;
        }
        // console.log(fileName.split("_").pop().split(".").shift());
    });
    // console.log(max);
    return toReturn;
};

const downloadImg = async (url) => {
    var a = await $("<a>").attr("href", url).attr("download", "");
    await a[0].click();
};

const onMessage = (message) => {
    switch (message.action) {
        case "EXECUTE":
            execute();
            break;
        default:
            break;
    }
};
window.onload = function () {
    if (window.jQuery) {
        // jQuery is loaded
        console.log("jQuery has loaded!");
    } else {
        // jQuery is not loaded
        console.log("jQuery has not loaded!");
    }
};
chrome.runtime.onMessage.addListener(onMessage);
