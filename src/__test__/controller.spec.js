const validator = require('express-validator');
const express = require('express');
const { app } = require('../app');
const { getPolicyholderById } = require('../../src/controller');

jest.mock('express-validator', () => ({
  matchedData: jest.fn(),
  checkSchema: jest.fn()
}));

jest.mock('express', () => ({
    post: jest.fn()
}))

describe('testes para a rota de busca de segurados por ID', () => {
    
    it('Deve retornar um segurado existente quando um ID válido é fornecido', () => {
        const segurado = {
            id: 475,
            name: "Aline"
        };
        const response = getPolicyholderById(app).get(`/policyholders/${segurado.id}`);

        expect(response.status).toBe(200);
        expect(response.body).toEqual({
            id: segurado.id,
            name: segurado.name
        })
    })
})
