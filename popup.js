const setBtn = document.getElementById("setReminder");
const timeInput = document.getElementById("reminderTime");

// Save time + create alarm
setBtn.addEventListener("click", () => {
    const time = timeInput.value;

    chrome.storage.local.set({ reminderTime: time });

    createDailyAlarm(time);
});

// Snooze buttons
document.querySelectorAll(".snooze").forEach(btn => {
    btn.addEventListener("click", () => {
        const mins = parseInt(btn.dataset.time);

        chrome.alarms.create("snoozeAlarm", {
            delayInMinutes: mins
        });
    });
});

// function to create daily alarm
function createDailyAlarm(time) {
    const [hours, minutes] = time.split(":").map(Number);

    let now = new Date();
    let alarmTime = new Date();

    alarmTime.setHours(hours, minutes, 0, 0);

    if (alarmTime < now) {
        alarmTime.setDate(alarmTime.getDate() + 1);
    }

    chrome.alarms.create("leetcodeReminder", {
        when: alarmTime.getTime(),
        periodInMinutes: 1440
    });
}