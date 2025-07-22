document.getElementById('criteriaForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const jobTitle = document.getElementById('jobTitle').value;
  const diploma = document.getElementById('diploma').value;
  const experience = parseInt(document.getElementById('experience').value || 0);
  const location = document.getElementById('location').value;
  const resultDiv = document.getElementById('result');

  let base = 100000;
  const diplomaFactor = { "BEP/CAP": 1, "Bac": 0.8, "Bac+2": 0.6, "Bac+3": 0.4, "Bac+5": 0.25, "Doctorat": 0.1 }[diploma] || 1;
  const expFactor = experience > 10 ? 0.4 : experience > 5 ? 0.6 : experience > 2 ? 0.8 : 1;
  const total = Math.round(base * diplomaFactor * expFactor);
  const seekers = Math.round(total * 0.1);

  resultDiv.style.display = 'block';
  resultDiv.innerHTML = `
    <h3>Résultat pour : ${jobTitle || 'non spécifié'}</h3>
    <p><strong>${total}</strong> personnes correspondent aux critères.</p>
    <p>Parmi elles, environ <strong>${seekers}</strong> seraient en recherche d'emploi.</p>
  `;
});