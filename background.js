chrome.runtime.onInstalled.addListener(() => {
    chrome.alarms.create("leetcodeReminder", {
        periodInMinutes: 1440
    });
});

// When alarm triggers → show notification
chrome.alarms.onAlarm.addListener((alarm) => {
    if (alarm.name === "leetcodeReminder") {
        chrome.notifications.create({
            type: "basic",
            iconUrl: "icon.png",
            title: "LeetCode Time 🔥",
            message: "Solve at least 1 problem today!",
            priority: 2
        });
    }
});