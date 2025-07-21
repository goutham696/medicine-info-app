async function searchMedicine() {
  const input = document.getElementById('searchInput').value.toLowerCase();
  const resultDiv = document.getElementById('result');

  const res = await fetch('data/medicines.json');
  const medicines = await res.json();

  const found = medicines.find(med => med.name.toLowerCase() === input);

  if (found) {
    resultDiv.innerHTML = `
      <h3>${found.name}</h3>
      <p><strong>Uses:</strong> ${found.uses}</p>
      <p><strong>Side Effects:</strong> ${found.sideEffects}</p>
      <p><strong>Dosage:</strong> ${found.dosage}</p>
    `;
  } else {
    resultDiv.innerHTML = `<p style="color:red;">Medicine not found!</p>`;
  }
}
