let $ = document;

//---Dark Mode Toggle
const container = $.querySelector(":root");
const darkMode = $.getElementById("dark-mode-toggle");
let isMoved = false;
darkMode.addEventListener("click", () => {
  container.classList.toggle("dark-mode");

  if (!isMoved) {
    darkMode.style.left = "2.7vw";
    darkMode.style.backgroundImage = "url('image/icons-sun.png')";
  } else {
    darkMode.style.left = "7.3vw";
    darkMode.style.backgroundImage = "url('image/icons-moon.png')";
  }
  isMoved = !isMoved;
});

//---Move Plus - add Forms - add result items
const puls = $.getElementById("plus");
const table = $.querySelector(".inputs-lists");
const messageBoxOne = $.querySelector(".message");
const resultDisplay = $.getElementsByClassName("disNone");
let form = `
<form action="#" class="form-section">
  <input name="course-name" class="inputs course-name" type="text" placeholder="course name">
  <input name="unit" class="inputs unit" type="number" placeholder="unit" required>
  <input name="score" class="inputs score" type="number" placeholder="score" required>
  <button type="button" class="form-button restart-button">
      <svg version="1.1" class="iconRT" xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1080 1080"
          style="enable-background:new 0 0 1080 1080;" xml:space="preserve">
          <path
              d="M991.6,598.9c8.1-1.7,15.4,5.2,14.1,13.4c-11.1,71.5-38.3,137.7-78,194.7c-84.6,121.8-225.5,201.5-385,201.5
c-258.6,0-468.2-209.5-468.6-468c-0.3-255.1,205.4-464.7,460.5-469c225.7-3.8,415.7,152,464.5,362c3.7,16-7,31.9-23.3,34.3
l-43.4,6.5c-14.5,2.2-28.2-7.2-31.6-21.5c-15.7-65.1-49-124.7-97.6-173.3c-69.7-69.7-164.9-108.6-263.5-107.9
c-97.3,0.8-188.7,39-257.5,107.9C212.6,349.1,174.3,441.6,174.3,540c0,98.4,38.3,190.9,107.9,260.5c69,69,160.5,107.2,257.9,107.9
c96.8,0.7,190.3-36.9,259.6-104.5c19.9-19.4,37.3-40.6,52.1-63.3l-71.8-62.7c-12.7-11.1-7.7-31.9,8.7-35.9l114.2-24.2L991.6,598.9z" />
      </svg>
  </button>
  <button type="button" class="form-button trashcan-button">
      <svg version="1.1" class="iconRT" xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1080 1080"
          style="enable-background:new 0 0 1080 1080;" xml:space="preserve">
          <g>
              <path d="M850.6,388.7c-18-1.4-33.7,12.1-35,30.1l-33.4,439.7c-2.7,35.1-31.9,62.1-67,62.1h-92H461.9h-92c-35.2,0-64.4-27.1-67-62.1
l-33.4-439.7c-1.4-18-17-31.4-35-30.1h0c-18,1.4-31.4,17-30.1,35l34.4,452.4c4.7,62,56.4,109.8,118.5,109.8h104.7h161.2h104.7
c62.1,0,113.8-47.9,118.5-109.8l34.4-452.4C882.1,405.8,868.6,390.1,850.6,388.7L850.6,388.7z" />
              <g>
                  <path
                      d="M888.5,239.4H735.8l-18.2-80.6v0c-8.6-37.8-42.2-64.7-80.9-64.7H444.3c-38.8,0-72.4,26.9-80.9,64.7l-0.4,1.7l-17.8,78.9
c0,0-153.6,0-153.6,0c-17.8,0-31.1,16.1-31.1,33.2c0,18.3,13.9,33.2,31.1,33.2h696.9c17.2,0,31.1-14.8,31.1-33.2
S905.6,239.4,888.5,239.4z M417.9,239.4l13-57.5c2.8-12.5,14-21.4,26.8-21.4h165.5c12.8,0,24,8.9,26.8,21.4l13,57.5H417.9z" />
              </g>
          </g>
      </svg>
  </button>
</form>
`;

let isClick = false,
  countOfForm = 0;

puls.addEventListener("click", () => {
  if (!isClick) {
    puls.style = "transform: translate(-31vw, -26vh) scale(0.2)";
    isClick = true;
    messageBoxOne.style.display = "none";
    resultDisplay[0].style.display = "block";
    resultDisplay[1].style.display = "block";
    resultDisplay[2].style.display = "block";
  }
  table.insertAdjacentHTML("beforeend", form);
  countOfForm++;
});

table.addEventListener("click", (event) => {
  if (event.target.closest(".restart-button")) {
    const form = event.target.closest("form");
    form.reset();
  }
  if (event.target.closest(".trashcan-button")) {
    const form = event.target.closest("form");
    form.remove();
    countOfForm--;
    if (countOfForm == 0) {
      isClick = false;
      puls.style = "transform: none";
      messageBoxOne.style.display = "block";
      resultDisplay[0].style.display = "none";
      resultDisplay[1].style.display = "none";
      resultDisplay[2].style.display = "none";
      gpaResult.textContent = "";
    }
  }
});

// calculate GPA and show
const calculateButton = $.getElementById("calculate");
calculateButton.addEventListener("click", () => {
  const forms = table.querySelectorAll(".form-section");
  
  let totalUnits = 0;
  let totalWeightedScores = 0;

  forms.forEach((form) => {
    const unit = parseFloat(form.querySelector(".unit").value);
    const score = parseFloat(form.querySelector(".score").value);

    if (!isNaN(unit) && !isNaN(score)) {
      totalUnits += unit;
      totalWeightedScores += unit * score;
    }
  });

  const gpa = totalUnits ? (totalWeightedScores / totalUnits).toFixed(2) : 0;
  const gpaResult = $.getElementById("gpaResult");
  gpaResult.textContent = `${gpa}`;
});
