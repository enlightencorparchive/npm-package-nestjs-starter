import { DynamicModule, Module } from '@nestjs/common';
import { SampleService } from './sample.service';
import { SAMPLE_MODULE_CONFIG_KEY } from './constants';
import { SampleModuleAsyncConfig, SampleModuleConfig } from './interfaces';

/**
 * Sample NestJS Module
 */
@Module({})
export class SampleModule {
  /**
   *
   * @param config
   */
  static register(config: SampleModuleConfig): DynamicModule {
    return {
      module: SampleModule,
      providers: [
        {
          provide: SAMPLE_MODULE_CONFIG_KEY,
          useValue: config,
        },
        SampleService,
      ],
      exports: [SampleService],
    };
  }

  /**
   *
   * @param options
   */
  static registerAsync({
                         useFactory,
                         imports = [],
                         inject,
                       }: SampleModuleAsyncConfig): DynamicModule {
    return {
      module: SampleModule,
      imports: [...imports],
      providers: [
        {
          provide: SAMPLE_MODULE_CONFIG_KEY,
          useFactory,
          inject,
        },
        SampleService,
      ],
      exports: [SampleService],
    };
  }
}
