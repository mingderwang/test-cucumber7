import { Then, Given } from "@cucumber/cucumber";
import { CustomWorld } from "../world";
import { SimpleOne } from "../domains/eating/simple-one";
import expect from "expect";

Given("愛麗絲肚子有點餓2", async function (this: CustomWorld) {
  this.instance = new SimpleOne();
});

Then("她飽了耶", async function (this: CustomWorld) {
  expect(this.instance.isFull()).toBe(true);
});
