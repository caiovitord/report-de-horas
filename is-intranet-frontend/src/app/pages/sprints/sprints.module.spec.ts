import { SprintsModule } from './sprints.module';

describe('SprintsModule', () => {
  let sprintsModule: SprintsModule;

  beforeEach(() => {
    sprintsModule = new SprintsModule();
  });

  it('should create an instance', () => {
    expect(sprintsModule).toBeTruthy();
  });
});
