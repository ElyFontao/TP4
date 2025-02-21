import express from 'express';
import { obtenerSuperheroePorIdController, buscarSuperheroesPorAtributoController, obtenerSuperheroesMayoresDe30Controller } from './CONTROLADORES/superheroesController.mjs';

const app = express();
const PORT = 3009;
const HOST = 'http://localhost';

// Rutas
app.get('/superheroes/id/:id', obtenerSuperheroePorIdController);
app.get('/superheroes/atributo/:atributo/:valor', buscarSuperheroesPorAtributoController);
app.get('/superheroes/edad/mayorA30', obtenerSuperheroesMayoresDe30Controller);

// Iniciar el servidor con mensaje mejorado en consola
app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en: ${HOST}:${PORT}`);
    console.log(`🔗 Accede a: ${HOST}:${PORT}/superheroes/id/1`);
    console.log(`📌 Para buscar por atributo: ${HOST}:${PORT}/superheroes/atributo/nombreSuperHeroe/Spiderman`);
    console.log(`🦸‍♂️ Superhéroes mayores de 30 años: ${HOST}:${PORT}/superheroes/edad/mayorA30`);
});