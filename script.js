const container = document.getElementById("demoContainer");
const btnFlex = document.getElementById("btnFlex");
const btnGrid =document.getElementById ("btnGrid");
const txtAxis = document.getElementById ("txtAxis");
const txtIdeal = document.getElementById ("txtIdeal");

const itens = 8;
for (let i=1; i <=itens; i++){
    const iten = document.createElement("div");
    iten.className = 'gallery-item'
    const hue = (i * 40) % 360;

    iten.innerHTML = `
    <div class="img-box" style="background: linear-gradient(135deg, hsl(${hue}, 70%, 60%), hsl(${hue}, 70%, 40%))">
        Item ${i}
        </div>
        <div class="content-box">
            <h4>Card Exemplo ${i}</h4>
            <p>Observe como esse elemento se comporta ao alterar entre os modos de exibição</p>
            </div>
    `;
    container.appendChild(iten);

    function setMode(mode) {
    if (mode === 'flex') {

        container.className = "demo-container mode-flex";

        btnFlex.classList.add("active-flex");
        btnGrid.classList.remove("active-grid");

        txtAxis.innerText = "Unidimensional (linha)";
        txtIdeal.innerText = "O layout é calculado item a item. Ótimo para distribuir espaço em uma linha";

    } else {

        container.className = "demo-container mode-grid";

        btnGrid.classList.add("active-grid");
        btnFlex.classList.remove("active-flex");

        txtAxis.innerText = "Bidimensional (Grade)";
        txtIdeal.innerText = "Define a estrutura primeiro. Alinhamento rigoroso de colunas e linhas";
    }
}
}
