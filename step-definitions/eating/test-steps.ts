import { Given, Then, When } from "@cucumber/cucumber";
import { CustomWorld } from "../../world";
import { SimpleOne } from "../../domains/eating/simple-one";
import expect from "expect";

Given("Alice is hungry", async function (this: CustomWorld) {
  this.instance = new SimpleOne();
});

When("she eats {int} cucumbers", async function (this: CustomWorld, _int) {
  this.instance.eat(_int);
});

Then("she is not full", async function (this: CustomWorld) {
  expect(this.instance.isFull()).toBe(false);
});

Then("she will be full", async function (this: CustomWorld) {
  expect(this.instance.isFull()).toBe(true);
});
