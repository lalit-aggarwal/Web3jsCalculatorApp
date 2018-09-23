var Calculator = artifacts.require("./Calculator.sol");

contract("Calculator", function(accounts){
    it("Initializes the number 1", function(){
        return Calculator.deployed().then(function(instance){
            return instance.num1();
        }).then(function(number){
            assert.equal(number, 0);
        })
    });
});

contract("Calculator", function(accounts){
    it("Initializes the number 2", function(){
        return Calculator.deployed().then(function(instance){
            return instance.num2();
        }).then(function(number){
            assert.equal(number, 0);
        })
    });
});

contract("Calculator", function(accounts){
    it("Initializes the number 2", function(){
        return Calculator.deployed().then(function(instance){
            return instance.add(50, 25);
        }).then(function(number){
            assert.equal(number, 75);
        })
    });
});

contract("Calculator", function(accounts){
    it("Initializes the number 2", function(){
        return Calculator.deployed().then(function(instance){
            return instance.subtract(50, 25);
        }).then(function(number){
            assert.equal(number, 25);
        })
    });
});

contract("Calculator", function(accounts){
    it("Initializes the number 2", function(){
        return Calculator.deployed().then(function(instance){
            return instance.multiply(50, 25);
        }).then(function(number){
            assert.equal(number, 1250);
        })
    });
});

contract("Calculator", function(accounts){
    it("Initializes the number 2", function(){
        return Calculator.deployed().then(function(instance){
            return instance.divide(50, 25);
        }).then(function(number){
            assert.equal(number, 2);
        })
    });
});