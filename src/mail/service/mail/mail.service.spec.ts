import { Test, TestingModule } from '@nestjs/testing';
import { ConfirmationMailService } from './mail.service';

describe('MainService', () => {
  let service: ConfirmationMailService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConfirmationMailService],
    }).compile();

    service = module.get<ConfirmationMailService>(ConfirmationMailService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
