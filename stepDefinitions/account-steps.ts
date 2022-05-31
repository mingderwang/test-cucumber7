import { When, Then, Given, setWorldConstructor } from "@cucumber/cucumber";
import { EtherspotWorld } from "../world";
import expect from "expect";
import { BigNumber } from "ethers";

setWorldConstructor(EtherspotWorld); // only one world at a time.

Given("Alice apply a new account", async function (this: EtherspotWorld) {
  const { account } = this.instance.sdk.state;
  console.log("🐝 create instance account ", account); // create instance in the world
});

When("she has a new account", async function (this: EtherspotWorld) {
  // Write code here that turns the phrase above into concrete actions
  expect(this.instance.getAddress()).toBe(
    "0x9A8db6791a1786CBC1A245c24003254739Fd3Df3" // privateKey: "0x5a82b283668ad6d22ad8175be3ba5abedf4b5e4e4bdba4a6d88bc469faa2a537"
  );
});

When(
  "Alice receive {int} Ether(s) from a faucet",
  async function (this: EtherspotWorld, int) {
    // When('Alice receive {float} Ethers from a faucet', async function (float) {
    // Write code here that turns the phrase above into concrete actions
    console.log(int);
    return "pending";
  }
);

Then(
  "her account balance is {int} Ether(s)",
  async function (this: EtherspotWorld, int: string) {
    // Then('her account balance is {float} Ethers', async function (float) {
    // Write code here that turns the phrase above into concrete actions
    const balance = await this.instance.sdk.getAccountBalances();
    console.log("balance ", balance);
    const item = balance?.items[0].balance;
    const result = BigNumber.from(int);
    expect(item.eq(result)).toBe(true);
  }
);
