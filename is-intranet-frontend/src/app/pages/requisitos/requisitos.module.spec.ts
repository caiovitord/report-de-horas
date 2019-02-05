import { RequisitosModule } from './requisitos.module';

describe('RequisitosModule', () => {
  let requisitosModule: RequisitosModule;

  beforeEach(() => {
    requisitosModule = new RequisitosModule();
  });

  it('should create an instance', () => {
    expect(requisitosModule).toBeTruthy();
  });
});
