import { When, Then, Given, setWorldConstructor } from "@cucumber/cucumber";
import { EtherspotWorld, CustomWorld } from "../world";
//import { SimpleSdk } from "../domains/etherspot/account-one";
import expect from "expect";

setWorldConstructor(CustomWorld);
setWorldConstructor(EtherspotWorld);

Given("Alice apply a new account", async function (this: EtherspotWorld) {
  console.log("🐝 create instance ", this.instance);
});

When("she has a new account", async function (this: EtherspotWorld) {
  // Write code here that turns the phrase above into concrete actions
  expect(this.instance.getAddress()).toBe(
    "0x9A8db6791a1786CBC1A245c24003254739Fd3Df3"
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

Then("her account balance is {int} Ether(s)", async function (int) {
  // Then('her account balance is {float} Ethers', async function (float) {
  // Write code here that turns the phrase above into concrete actions
  console.log(int);
  return "pending";
});
