// views/responseView.mjs

export function renderizarSuperheroe(superheroe) {
    if (!superheroe) {
        throw new Error("❌ No se proporcionó un superhéroe válido.");
    }

    return `
=============================
🔹 Superhéroe: ${superheroe.nombreSuperheroe} 
=============================
🆔 ID: ${superheroe.id}
🦸‍♂️ Alias: ${superheroe.nombreSociedad} 
💪 Poderes: ${superheroe.poder.join(', ')}
🌍 Planeta de origen: ${superheroe.planetaOrigen} 
📅 Edad: ${superheroe.edad} años 
⚡ Debilidad: ${superheroe.debilidad}
-----------------------------
`;
}

export function renderizarListaSuperheroes(superheroes) {
    if (!Array.isArray(superheroes)) {
        throw new Error("❌ El parámetro debe ser un array de superhéroes.");
    }

    return `
=============================
📜 LISTADO DE SUPERHÉROES 
=============================
${superheroes.map((sh, index) => `
${index + 1}. 🔹 Superhéroe: ${sh.nombreSuperheroe} 
   🆔 ID: ${sh.id}
   🦸‍♂️ Alias: ${sh.nombreSociedad} 
   💪 Poderes: ${sh.poder.join(', ')}
   🌍 Planeta de origen: ${sh.planetaOrigen} 
   📅 Edad: ${sh.edad} años 
   ⚡ Debilidad: ${sh.debilidad}
`).join("\n")}
-----------------------------
`;
}