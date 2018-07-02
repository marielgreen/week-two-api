import {WeekTwoApiApplication} from './application';
import {ApplicationConfig} from '@loopback/core';

export {WeekTwoApiApplication};

export async function main(options?: ApplicationConfig) {
  const app = new WeekTwoApiApplication(options);
  await app.boot();
  await app.start();
  return app;
}
