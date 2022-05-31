import { SimpleSdk } from "../domains/etherspot/account-one";

export interface EtherspotWorldConstructorParams {
  parameters: { [key: string]: string };
}

export class EtherspotWorld {
  public instance: SimpleSdk = new SimpleSdk(
    "testnets",
    "0x5a82b283668ad6d22ad8175be3ba5abedf4b5e4e4bdba4a6d88bc469faa2a537" //new
  );
  public parameters;

  /**
   *
   */
  constructor({ parameters }: EtherspotWorldConstructorParams) {
    this.parameters = parameters;
  }
}
