const openBtn = document.getElementById("openLeetCode");
const doneBtn = document.getElementById("markDone");
const streakText = document.getElementById("streak");

// Open LeetCode
openBtn.addEventListener("click", () => {
    chrome.tabs.create({ url: "https://leetcode.com" });
});

// Load streak
chrome.storage.local.get(["streak", "lastDone"], (data) => {
    streakText.innerText = `Streak: ${data.streak || 0}`;
});

// Mark as done
doneBtn.addEventListener("click", () => {
    const today = new Date().toDateString();

    chrome.storage.local.get(["streak", "lastDone"], (data) => {
        let streak = data.streak || 0;

        if (data.lastDone !== today) {
            streak += 1;
        }

        chrome.storage.local.set({
            streak: streak,
            lastDone: today
        });

        streakText.innerText = `Streak: ${streak}`;
    });
});