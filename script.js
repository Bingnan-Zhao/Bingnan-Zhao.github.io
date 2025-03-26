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

  submitBtn.addEventListener("click", async () => {
    const start = document.getElementById("startTime").value;
    const end = document.getElementById("endTime").value;

    if (!start || !end) {
      alert("Please select both start and end times.");
      return;
    }

    const data = {
      start,
      end,
      people: count
    };

    try {
      const response = await fetch("https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec", {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });

      confirmation.classList.remove("hidden");
      setTimeout(() => confirmation.classList.add("hidden"), 3000);
    } catch (error) {
      alert("Submission failed. Please try again.");
      console.error(error);
    }
  });
});

