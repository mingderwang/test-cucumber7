import { Sdk, Env, EnvNames, NetworkNames } from "etherspot";
// import { randomPrivateKey } from "etherspot";

// const privateKey = randomPrivateKey();
export class SimpleSdk implements TheOne {
  public sdk: Sdk;
  public privateKey: string; // input a private key

  /*
   * network is either "testnets" or "mainnets"
   * privateKey is a private key, such as "0x8ce99745b7cde06cb1223f3644ccf11aee54166410856b0e226815e26bbd3860"
   *
   */
  constructor(
    chain: string = "etherspot",
    network: string = "mainnets",
    privateKey: string
  ) {
    Env.defaultName = network as EnvNames;
    this.privateKey = privateKey;
    this.sdk = new Sdk(
      { privateKey: this.privateKey },
      {
        // chain: default("etherspot"), could be "mumbai", "xdai", "ropsten", etc.
        networkName: chain as NetworkNames,
      }
    );
    //  console.info("new random private key (not been used) ", privateKey);
    console.info("✅ SDK created", this.sdk.state.accountAddress);
  }
  public getAddress(): string {
    console.info("💥 SDK created", this.sdk.state.accountAddress);
    return this.sdk.state.accountAddress;
  }
}

export interface TheOne {
  getAddress: () => string;
}
