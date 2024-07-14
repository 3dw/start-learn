declare module 'vue-gtag' {
  import { PluginFunction } from 'vue';
  export interface VueGtagConfig {
    id: string;
    params?: {
      [key: string]: any;
    };
  }

  export interface VueGtagOptions {
    config: VueGtagConfig | VueGtagConfig[];
    appName?: string;
    pageTrackerScreenviewEnabled?: boolean;
  }

  const install: PluginFunction<VueGtagOptions>;
  export default install;
}
