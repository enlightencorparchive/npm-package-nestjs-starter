import { Injectable } from '@nestjs/common';

@Injectable()
export class SampleService {
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
}
