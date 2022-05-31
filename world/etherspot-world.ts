import { SimpleSdk } from "../domains/etherspot/account-one";
import { setWorldConstructor } from "@cucumber/cucumber";

export interface EtherspotWorldConstructorParams {
  parameters: { [key: string]: string };
}

export class EtherspotWorld {
  public instance: SimpleSdk = new SimpleSdk(
    "testnets",
    "0x8ce99745b7cde06cb1223f3644ccf11aee54166410856b0e226815e26bbd3860"
  );
  public parameters;

  /**
   *
   */
  constructor({ parameters }: EtherspotWorldConstructorParams) {
    this.parameters = parameters;
  }
}

setWorldConstructor(EtherspotWorld);
