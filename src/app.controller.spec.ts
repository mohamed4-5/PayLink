import { AppController } from './app.controller.js';

describe('AppController', () => {
  it('health returns status ok', () => {
    expect(new AppController().health()).toEqual({ status: 'ok' });
  });
});