import { Test, TestingModule } from '@nestjs/testing';
import { HomeController } from './home.controller';

describe('HomeController', () => {
  let controller: HomeController;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HomeController],
      providers: []
    }).compile();
    controller = module.get<HomeController>(HomeController);
  });

  describe('healthCheck', () => {
    it('should return OK', async () => {
      const resp = await controller.healthCheck();
      expect(resp).toBeTruthy();
      expect(resp.data).toBe('OK');
    });
  });
});
