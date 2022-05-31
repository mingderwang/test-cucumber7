@tag
Feature: A new account
    If you have an account, you can receive Ethers
    Scenario: Create a new account
        Given Alice apply a new account
        When she has a new account
        Then her account balance is 0 Ether
        When Alice receive 10 Ethers from a faucet
        Then her account balance is 10 Ethers
