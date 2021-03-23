import { Test, TestingModule } from '@nestjs/testing';
import { SampleService } from './sample.service';
import { SampleModule } from './sample.module';

describe('Synchronously register Module', () => {
  const sampleKey = 'KEY_FROM_SYNCHRONOUS_REGISTRATION';

  let service: SampleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [SampleModule.register({
        key: sampleKey,
      })],
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

  /**
   * module 작성 시 입력한 config 조회
   */
  it('config', () => {
    const config = service.getConfig();
    expect(config.key).toEqual(sampleKey);
  });
});


describe('Asynchronously register module', () => {

  const sampleKey = 'KEY_FROM_ASYNCHRONOUS_REGISTRATION';

  let service: SampleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [SampleModule.registerAsync({
        // To use code below, ConfigModule is required.
        // npm i --save @nestjs/config
        // imports: [ConfigModule],
        // inject: [ConfigService],
        // useFactory: (configService: ConfigService) => {
        useFactory: () => {
          // const key = configService.get<string>('KEY')
          return {
            key: sampleKey,
          };
        },
      })],
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

  /**
   * module 작성 시 입력한 config 조회
   */
  it('config', () => {
    const config = service.getConfig();
    expect(config.key).toEqual(sampleKey);
  });
});
