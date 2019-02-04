import { LayoutModule } from './layout.module';

describe('EstruturaModule', () => {
  let estruturaModule: LayoutModule;

  beforeEach(() => {
    estruturaModule = new LayoutModule();
  });

  it('should create an instance', () => {
    expect(estruturaModule).toBeTruthy();
  });
});
