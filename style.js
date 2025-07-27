// You can change name, score, and gain here
let students = [
  { name: "Rohan", score: 78, gain: 10 },
  { name: "Ritika", score: 74, gain: 0 },
  { name: "Amit", score: 85, gain: 3 },
  { name: "Priya", score: 69, gain: 7 },
  { name: "Kunal", score: 90, gain: 1 }
  // Add more students here!
];

// Apply gain before rendering
students.forEach(student => {
  student.score += student.gain;
});

function renderTable() {
  // Sort by score
  students.sort((a, b) => b.score - a.score);

  const table = document.getElementById("scoreBody");
  table.innerHTML = "";

  students.forEach((student, index) => {
    const crown = index === 0 ? "🥇" : index === 1 ? "🥈" : index === 2 ? "🥉" : "";

    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${index + 1} ${crown}</td>
      <td>${student.name}</td>
      <td class="score">${student.score.toFixed(1)}</td>
      <td class="gain">+${student.gain.toFixed(1)}</td>
    `;
    table.appendChild(row);
  });
}

renderTable();
