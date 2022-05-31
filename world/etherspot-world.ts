import { SimpleSdk, SimpleSdkOption } from "../domains/etherspot/account-one";
import keys from "../.project_key.json";

export interface EtherspotWorldConstructorParams {
  parameters: { [key: string]: string };
}

export class EtherspotWorld {
  options: SimpleSdkOption = {
    project: keys.testnet_project_key,
    chain: "ropsten",
    network: "testnets",
    privateKey:
      "0x5a82b283668ad6d22ad8175be3ba5abedf4b5e4e4bdba4a6d88bc469faa2a537", // address: "0x9A8db6791a1786CBC1A245c24003254739Fd3Df3"
  };
  public instance: SimpleSdk = new SimpleSdk(this.options);
  public parameters;

  /**
   *
   */
  constructor({ parameters }: EtherspotWorldConstructorParams) {
    this.parameters = parameters;
  }
}
