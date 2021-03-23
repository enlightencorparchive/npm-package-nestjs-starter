import { Inject, Injectable } from '@nestjs/common';
import { SAMPLE_MODULE_CONFIG_KEY } from './constants';
import { SampleModuleConfig } from './interfaces';

@Injectable()
export class SampleService {

  constructor(@Inject(SAMPLE_MODULE_CONFIG_KEY) private readonly config: SampleModuleConfig) {
  }

  /**
   * Hello, World!
   * @param name
   */
  hello(name?: string): string {
    return `Hello, ${name || 'World'}`;
  }

  /**
   * Current milliseconds
   */
  now(): number {
    return new Date().getUTCMilliseconds();
  }

  /**
   * Returns configs that injected when initialing
   */
  getConfig(): SampleModuleConfig {
    return this.config;
  }
}
