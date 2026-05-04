chrome.alarms.onAlarm.addListener((alarm) => {
    if (alarm.name === "leetcodeReminder" || alarm.name === "snoozeAlarm") {
        chrome.notifications.create({
            type: "basic",
            iconUrl: "icon.png",
            title: "LeetCode Time 🔥",
            message: "Go solve a problem NOW!",
            priority: 2
        });

        playSound();
    }
});

// play sound
function playSound() {
    const audio = new Audio(chrome.runtime.getURL("sound.mp3"));
    audio.play();
}