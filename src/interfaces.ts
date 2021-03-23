import { ModuleMetadata } from '@nestjs/common';

/**
 * Sample module option
 */
export interface SampleModuleConfig {
  /**
   * key
   * required
   */
  key: string;
}

/**
 * Sample module option
 */
export interface SampleModuleAsyncConfig
  extends Pick<ModuleMetadata, 'imports'> {
  /**
   * Function returning options (or a Promise resolving to options) to configure the Sample module.
   * @param args
   */
  useFactory?: (
    ...args: any[]
  ) => Promise<SampleModuleConfig> | SampleModuleConfig;
  /**
   * Dependencies that a Factory may inject.
   */
  inject?: any[];
}