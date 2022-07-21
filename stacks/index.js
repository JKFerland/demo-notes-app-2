import { ApiStack } from "./ApiStack";
import { StorageStack } from "./StorageStack";
import { AuthStack } from "./AuthStack";
import { FrontendStack } from "./FrontendStack";
import { Amplify } from 'aws-amplify';
import config from './config';

export default function main(app) {
  app.setDefaultFunctionProps({
    runtime: "nodejs16.x",
    srcPath: "services",
    bundle: {
      format: "esm",
    },
  });
  app.stack(StorageStack).stack(ApiStack).stack(AuthStack).stack(FrontendStack);
}