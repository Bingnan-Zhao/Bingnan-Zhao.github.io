document.addEventListener("DOMContentLoaded", () => {
  const decreaseBtn = document.getElementById("decreaseBtn");
  const increaseBtn = document.getElementById("increaseBtn");
  const peopleCount = document.getElementById("peopleCount");
  const submitBtn = document.getElementById("submitBtn");
  const confirmation = document.getElementById("confirmation");
  const startInput = document.getElementById("startTime");
  const endInput = document.getElementById("endTime");

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
    const start = startInput.value;
    const end = endInput.value;

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
      await fetch("https://script.google.com/macros/s/AKfycbxJDwMi6_izKQWATK2_me9MhWOXaaLoH4FApimHFJK1Lskm8cpeHFi1v7tQCezcuhic/exec", {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });

      // 显示提交成功提示
      confirmation.classList.remove("hidden");

      // 禁用按钮和输入
      submitBtn.disabled = true;
      decreaseBtn.disabled = true;
      increaseBtn.disabled = true;
      startInput.disabled = true;
      endInput.disabled = true;

      // 变灰提示用户不可再次提交
      submitBtn.classList.add("bg-gray-400", "hover:bg-gray-400");
      submitBtn.classList.remove("bg-green-500", "hover:bg-green-600");

    } catch (error) {
      alert("Submission failed. Please try again.");
      console.error(error);
    }
  });
});

  });
});

