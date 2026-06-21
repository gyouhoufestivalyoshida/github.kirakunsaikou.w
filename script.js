// script.js
const waitTimeRef = db.ref("waitTime");

waitTimeRef.on("value", (snapshot) => {
  const time = snapshot.val();
  document.getElementById("wait-time").textContent =
    time !== null ? time + " 分" : "未設定";
});
