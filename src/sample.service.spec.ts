import { Test, TestingModule } from '@nestjs/testing';
import { SampleService } from './sample.service';

describe('SampleService', () => {
  let service: SampleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SampleService],
    }).compile();

    service = module.get<SampleService>(SampleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  /**
   * test code 작성
   */
  it('hello', () => {
    const result = service.hello('Test');
    expect(result).toBe('Hello, Test');
  });

  /**
   * test code 작성
   */
  it('now', () => {
    const now = new Date();
    const result = service.now();
    expect(now.getUTCMilliseconds() - result).toBeLessThan(1);
  });
});
