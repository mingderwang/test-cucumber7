import { When, Then, Given } from "@cucumber/cucumber";
import { EtherspotWorld } from "../world";
import { SimpleSdk } from "../domains/etherspot/account-one";
import expect from "expect";

Given("Alice apply a new account", async function (this: EtherspotWorld) {
  this.instance = new SimpleSdk(
    "testnets",
    "0x8ce99745b7cde06cb1223f3644ccf11aee54166410856b0e226815e26bbd3860"
  );
  console.log("🐝 create instance ", this.instance);
});

When("she has a new account", async function (this: EtherspotWorld) {
  // Write code here that turns the phrase above into concrete actions
  expect(this.instance.getAddress()).toBe(
    "0xca87057e1F2C38702F769763EB00Cd18910991DF"
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
