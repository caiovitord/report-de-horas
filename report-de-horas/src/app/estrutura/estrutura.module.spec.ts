import { EstruturaModule } from './estrutura.module';

describe('EstruturaModule', () => {
  let estruturaModule: EstruturaModule;

  beforeEach(() => {
    estruturaModule = new EstruturaModule();
  });

  it('should create an instance', () => {
    expect(estruturaModule).toBeTruthy();
  });
});
