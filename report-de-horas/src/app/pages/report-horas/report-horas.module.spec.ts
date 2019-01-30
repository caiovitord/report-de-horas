import { ReportHorasModule } from './report-horas.module';

describe('ReportHorasModule', () => {
  let reportHorasModule: ReportHorasModule;

  beforeEach(() => {
    reportHorasModule = new ReportHorasModule();
  });

  it('should create an instance', () => {
    expect(reportHorasModule).toBeTruthy();
  });
});
