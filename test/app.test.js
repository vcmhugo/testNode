const request = require('supertest');
const app = require('../src/index'); // Asegúrate de proporcionar la ruta correcta a tu archivo de aplicación

describe('POST /consulta', () => {
    it('Debería responder con el usuario proporcionado', async () => {
        const usuario = {
            name: 'John Doe',
            edad: 25
        };

        const response = await request(app)
            .post('/consulta')
            .send(usuario);

        expect(response.status).toBe(200);
        expect(response.body).toEqual(usuario);
    });
});
