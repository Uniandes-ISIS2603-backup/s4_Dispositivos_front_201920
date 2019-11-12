import { DispositivoModule } from './dispositivo.module';

describe('DispositivoModule', () => {
  let dispositivoModule: DispositivoModule;

  beforeEach(() => {
    dispositivoModule = new DispositivoModule();
  });

  it('should create an instance', () => {
    expect(dispositivoModule).toBeTruthy();
  });
});
