document.addEventListener("DOMContentLoaded", () => {
  const decreaseBtn = document.getElementById("decreaseBtn");
  const increaseBtn = document.getElementById("increaseBtn");
  const peopleCount = document.getElementById("peopleCount");
  const submitBtn = document.getElementById("submitBtn");
  const confirmation = document.getElementById("confirmation");

  let count = 1;

  decreaseBtn.addEventListener("click", () => {
    if (count > 1) {
      count--;
      peopleCount.textContent = count;
    }
  });

  increaseBtn.addEventListener("click", () => {
    if (count < 50) {
      count++;
      peopleCount.textContent = count;
    }
  });

  submitBtn.addEventListener("click", () => {
    const start = document.getElementById("startTime").value;
    const end = document.getElementById("endTime").value;

    if (!start || !end) {
      alert("Please select both start and end time.");
      return;
    }

    const csvContent = `Start Time,End Time,People Count\n${start},${end},${count}`;
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = `attendance_${Date.now()}.csv`;
    a.click();
    URL.revokeObjectURL(url);

    confirmation.classList.remove("hidden");
    setTimeout(() => confirmation.classList.add("hidden"), 3000);
  });
});
