import { MainRuntime } from '@teambit/cli';
import { ReactAspect, ReactMain } from '@teambit/react';
import { SportsStoreAspect } from './sports-store.aspect';

export class SportsStoreMain {
  static slots = [];
  static dependencies = [ReactAspect];
  static runtime = MainRuntime;

  static async provider([react]: [ReactMain]) {
    react.registerReactApp({
      name: 'sports-store',
      entry: [require.resolve('./sports-store.app-root')]
    });
    return new SportsStoreMain();
  }
}

SportsStoreAspect.addRuntime(SportsStoreMain);
