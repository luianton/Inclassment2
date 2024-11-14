document.addEventListener("DOMContentLoaded", () => {
  const letterButtons = document.querySelectorAll(".letter-btn");
  const hideButtons = document.querySelectorAll(".hide-btn");

  // show result upon button click
  letterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const letter = btn.dataset.letter; // Get the letter
      const resultDiv = document.getElementById(`result-${letter}`);
      resultDiv.style.display = "block"; // Show result
    });
  });

  // hide result upon button click
  hideButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const letter = btn.dataset.letter; // Get the letter
      const resultDiv = document.getElementById(`result-${letter}`);
      resultDiv.style.display = "none"; // hide result
    });
  });
});
