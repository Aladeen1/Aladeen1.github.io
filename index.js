console.log("welcome home")

if (window.innerWidth < 1200) {
    const sideSection = document.getElementById("desktop-side-section")
    const mainSection = document.getElementById("mobile-section-target")
    const template = `
        <div class="section">
            <h2 class="section-title">Plus d'informations</h2>
            <div class="separator"></div>
            ${sideSection.innerHTML}
        </div>
    `

    mainSection.insertAdjacentHTML("beforeend", template);
    sideSection.remove()
}