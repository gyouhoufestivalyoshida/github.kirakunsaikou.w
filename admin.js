// admin.js
const waitTimeRef = db.ref("waitTime");

document.getElementById("update-btn").addEventListener("click", () => {
  const time = Number(document.getElementById("time-input").value);

  if (isNaN(time)) {
    alert("数字を入力してください");
    return;
  }

  waitTimeRef.set(time);
  alert("更新しました！");
});
