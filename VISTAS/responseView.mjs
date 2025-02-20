// views/responseView.mjs

import chalk from 'chalk';

// Formatear un solo superhéroe
export function renderizarSuperheroe(superheroe) {
    return `
${chalk.bold.blue('🔹 Superhéroe:')} ${chalk.bold(superheroe.nombre)}
${chalk.green('🆔 ID:')} ${superheroe.id}
${chalk.yellow('🦸‍♂️ Alias:')} ${superheroe.alias}
${chalk.magenta('💪 Poderes:')} ${superheroe.poder.join(', ')}
${chalk.cyan('🌍 Planeta de origen:')} ${superheroe.planetaOrigen}
${chalk.red('📅 Edad:')} ${superheroe.edad} años
--------------------------------------------------`;
}

// Formatear una lista de superhéroes
export function renderizarListaSuperheroes(superheroes) {
    if (superheroes.length === 0) {
        return chalk.red('⚠️ No se encontraron superhéroes.');
    }

    return superheroes.map(renderizarSuperheroe).join('\n');
}