const scenarios = [
    {
      title: "Transport Choices",
      description: "You're planning a weekend getaway to a nearby town, 200 km away. How will you travel?",
      options: [
        { text: "Drive your personal car", img: "https://cdn-icons-png.flaticon.com/512/741/741407.png" },
        { text: "Take a train", img: "https://cdn-icons-png.flaticon.com/512/171/171813.png" },
        { text: "Carpool with friends", img: "https://cdn-icons-png.flaticon.com/512/3063/3063828.png" },
        { text: "Fly there for convenience", img: "https://cdn-icons-png.flaticon.com/512/3448/3448650.png" },
      ],
      correctOption: 1,
      feedback: [
        "Driving your personal car emits a lot of CO2 compared to public transport. Try carpooling or taking the train!",
        "Excellent choice! Trains are one of the most eco-friendly modes of transport.",
        "Good choice! Sharing rides reduces emissions per person.",
        "Not ideal for short distances. Planes have a higher carbon footprint per km traveled.",
      ],
    },
    {
      title: "Energy Usage",
      description: "It's winter, and you want to stay warm. What's the most eco-friendly option?",
      options: [
        { text: "Use an electric heater", img: "https://cdn-icons-png.flaticon.com/512/833/833455.png" },
        { text: "Wear warm clothes and use blankets", img: "https://cdn-icons-png.flaticon.com/512/2646/2646134.png" },
        { text: "Install central heating", img: "https://cdn-icons-png.flaticon.com/512/3036/3036856.png" },
        { text: "Burn firewood", img: "https://cdn-icons-png.flaticon.com/512/616/616565.png" },
      ],
      correctOption: 1,
      feedback: [
        "Electric heaters use a lot of energy. Consider alternatives like wearing warm clothes.",
        "Great choice! Wearing warm clothes and using blankets saves a lot of energy.",
        "Central heating is less efficient than localized heating.",
        "Burning firewood contributes to air pollution and deforestation.",
      ],
    },
    {
      title: "Waste Disposal",
      description: "You have an old mobile phone that you no longer use. What should you do with it?",
      options: [
        { text: "Throw it in the trash", img: "https://cdn-icons-png.flaticon.com/512/446/446991.png" },
        { text: "Recycle it at an e-waste facility", img: "https://cdn-icons-png.flaticon.com/512/4212/4212674.png" },
        { text: "Keep it in a drawer", img: "https://cdn-icons-png.flaticon.com/512/435/435008.png" },
        { text: "Donate it to charity", img: "https://cdn-icons-png.flaticon.com/512/1769/1769511.png" },
      ],
      correctOption: 1,
      feedback: [
        "Throwing electronics in the trash harms the environment due to toxic materials.",
        "Excellent! Recycling ensures proper handling of hazardous materials.",
        "Storing unused electronics wastes resources that could be reused.",
        "Donating is great, but only if the phone is still functional.",
      ],
    },
    {
      title: "Water Conservation",
      description: "Your faucet is leaking a small stream of water. What will you do?",
      options: [
        { text: "Ignore it; it's a small leak", img: "https://cdn-icons-png.flaticon.com/512/1356/1356567.png" },
        { text: "Place a bucket to collect the water", img: "https://cdn-icons-png.flaticon.com/512/2844/2844525.png" },
        { text: "Call a plumber to fix it", img: "https://cdn-icons-png.flaticon.com/512/3062/3062914.png" },
        { text: "Use tape to temporarily stop the leak", img: "https://cdn-icons-png.flaticon.com/512/4324/4324904.png" },
      ],
      correctOption: 2,
      feedback: [
        "Ignoring leaks wastes gallons of water every day.",
        "Collecting water is good but not a permanent solution.",
        "Great choice! Fixing leaks saves water in the long run.",
        "Temporary fixes may help, but the issue needs permanent repair.",
      ],
    },
    {
      title: "Food Waste",
      description: "You have leftover food from dinner. What should you do with it?",
      options: [
        { text: "Throw it in the trash", img: "https://cdn-icons-png.flaticon.com/512/2029/2029517.png" },
        { text: "Compost it", img: "https://cdn-icons-png.flaticon.com/512/3135/3135731.png" },
        { text: "Save it for another meal", img: "https://cdn-icons-png.flaticon.com/512/2738/2738811.png" },
        { text: "Feed it to animals", img: "https://cdn-icons-png.flaticon.com/512/7656/7656073.png" },
      ],
      correctOption: 2,
      feedback: [
        "Throwing food in the trash contributes to methane emissions in landfills.",
        "Composting is a great way to recycle organic waste.",
        "Saving leftovers reduces food waste and conserves resources.",
        "Feeding animals is an option but not always appropriate.",
      ],
    },
    {
      title: "Lighting Choices",
      description: "Your house uses incandescent bulbs. What will you replace them with?",
      options: [
        { text: "LED bulbs", img: "https://cdn-icons-png.flaticon.com/512/2917/2917688.png" },
        { text: "Halogen bulbs", img: "https://cdn-icons-png.flaticon.com/512/2976/2976593.png" },
        { text: "Fluorescent bulbs", img: "https://cdn-icons-png.flaticon.com/512/3635/3635292.png" },
        { text: "Keep the incandescent bulbs", img: "https://cdn-icons-png.flaticon.com/512/1410/1410946.png" },
      ],
      correctOption: 0,
      feedback: [
        "Great choice! LED bulbs are energy-efficient and long-lasting.",
        "Halogen bulbs are less efficient than LEDs.",
        "Fluorescent bulbs save energy but contain mercury, which is hazardous.",
        "Incandescent bulbs waste a lot of energy. Upgrade to LEDs!",
      ],
    },
    {
      title: "Reusable Products",
      description: "You are going grocery shopping. What bag will you take?",
      options: [
        { text: "A plastic bag", img: "https://cdn-icons-png.flaticon.com/512/1056/1056826.png" },
        { text: "A paper bag", img: "https://cdn-icons-png.flaticon.com/512/2274/2274322.png" },
        { text: "A reusable cloth bag", img: "https://cdn-icons-png.flaticon.com/512/2978/2978386.png" },
        { text: "No bag; just carry items in hand", img: "https://cdn-icons-png.flaticon.com/512/4332/4332785.png" },
      ],
      correctOption: 2,
      feedback: [
        "Plastic bags harm the environment and take years to decompose.",
        "Paper bags are better than plastic but still require resources to produce.",
        "Perfect choice! Reusable bags are sustainable and reduce waste.",
        "Carrying items without a bag may be inconvenient.",
      ],
    },
    {
      title: "Appliance Use",
      description: "You’re doing laundry. How can you make it eco-friendly?",
      options: [
        { text: "Use hot water for washing", img: "https://cdn-icons-png.flaticon.com/512/2934/2934764.png" },
        { text: "Wash only full loads", img: "https://cdn-icons-png.flaticon.com/512/1933/1933812.png" },
        { text: "Use a dryer", img: "https://cdn-icons-png.flaticon.com/512/3228/3228610.png" },
        { text: "Hang clothes to dry", img: "https://cdn-icons-png.flaticon.com/512/4038/4038107.png" },
      ],
      correctOption: 1,
      feedback: [
        "Hot water uses more energy. Cold water is just as effective for most clothes.",
        "Washing full loads saves water and energy.",
        "Using a dryer consumes a lot of energy. Air-drying is better.",
        "Air-drying is great but ensure you wash full loads too.",
      ],
    },
  ];

let currentScenario = 0;
let score = 0;
let responses = [];

const scenarioTitle = document.getElementById("scenario-title");
const scenarioDescription = document.getElementById("scenario-description");
const optionsContainer = document.getElementById("options-container");
const feedbackContainer = document.getElementById("feedback-container");
const nextBtn = document.getElementById("next-btn");
const restartBtn = document.getElementById("restart-btn");
const resultsContainer = document.getElementById("results");
const scoreDisplay = document.getElementById("score");
const detailedFeedback = document.getElementById("detailed-feedback");

function loadScenario() {
    const scenario = scenarios[currentScenario];
    scenarioTitle.textContent = scenario.title;
    scenarioDescription.textContent = scenario.description;

    optionsContainer.innerHTML = "";
    feedbackContainer.textContent = "";

    scenario.options.forEach((option, index) => {
        const optionDiv = document.createElement("div");
        optionDiv.classList.add("option");
        optionDiv.innerHTML = `
            <img src="${option.img}" alt="${option.text}" />
            <p>${option.text}</p>
        `;
        optionDiv.addEventListener("click", () => handleOptionClick(index));
        optionsContainer.appendChild(optionDiv);
    });

    nextBtn.style.display = "none";
}

function handleOptionClick(selectedIndex) {
    const scenario = scenarios[currentScenario];
    const options = optionsContainer.children;

    for (let i = 0; i < options.length; i++) {
        if (i === scenario.correctOption) {
            options[i].classList.add("correct");
        } else if (i === selectedIndex) {
            options[i].classList.add("wrong");
        }
    }

    if (selectedIndex === scenario.correctOption) {
        score++;
    }

    // Store the user's response
    responses.push({
        question: scenario.title,
        yourChoice: scenario.options[selectedIndex].text,
        feedback: scenario.feedback[selectedIndex],
        isCorrect: selectedIndex === scenario.correctOption,
    });

    feedbackContainer.textContent = scenario.feedback[selectedIndex];
    nextBtn.style.display = "block";
}

nextBtn.addEventListener("click", () => {
    currentScenario++;
    if (currentScenario < scenarios.length) {
        loadScenario();
    } else {
        showResults();
    }
});

function showResults() {
    // Hide quiz and show results container
    document.querySelector(".quiz-container").style.display = "none";
    resultsContainer.style.display = "block";

    // Display the score
    scoreDisplay.textContent = `You scored ${score} out of ${scenarios.length}!`;

    // Draw the pie chart based on the score
    drawPieChart();

    // Display detailed feedback for each question
    detailedFeedback.innerHTML = responses.map(response => `
        <div>
            <p><strong>Question:</strong> ${response.question}</p>
            <p><strong>Your Choice:</strong> ${response.yourChoice}</p>
            <p>${response.feedback}</p>
            <p>${response.isCorrect ? "Correct ✅" : "Incorrect ❌"}</p>
            <hr>
        </div>
    `).join("");

    // Show the restart button
    restartBtn.style.display = "block";
}

function drawPieChart() {
    const canvas = document.getElementById("score-chart");
    const ctx = canvas.getContext("2d");

    // Calculate the percentage of correct answers
    const percentage = (score / scenarios.length) * 100;

    // Set up the properties of the pie chart
    const startAngle = -0.5 * Math.PI;  // Start angle (top of the circle)
    const endAngle = (percentage / 100) * 2 * Math.PI + startAngle;  // Calculate end angle based on score percentage

    const radius = canvas.width / 2;

    // Clear the canvas before drawing
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw the background circle (gray)
    ctx.beginPath();
    ctx.arc(radius, radius, radius - 10, 0, 2 * Math.PI);
    ctx.fillStyle = "#eaeaea"; // Light gray background
    ctx.fill();

    // Draw the "filled" part (correct answers)
    ctx.beginPath();
    ctx.arc(radius, radius, radius - 10, startAngle, endAngle);
    ctx.lineTo(radius, radius);  // Connect to the center
    ctx.fillStyle = "#38a169"; // Green color for correct answers
    ctx.fill();

    // Draw the score percentage text in the center
    ctx.fillStyle = "#2c7a7b"; // Text color
    ctx.font = "24px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(`${Math.round(percentage)}%`, radius, radius);
}

// Function to restart the quiz
function restartQuiz() {
    // Reset the score and scenario index
    score = 0;
    currentScenario = 0;
    responses = [];

    // Hide the results screen and show the quiz container
    resultsContainer.style.display = "none";
    document.querySelector(".quiz-container").style.display = "block";

    // Load the first scenario again
    loadScenario();
}

// Add event listener to restart button
restartBtn.addEventListener("click", restartQuiz);

// Initialize the first scenario
loadScenario();
