App = {
  web3Provider: null,
  contracts: {},
  account: '0x0',

  init: function() {
    return App.initWeb3();
  },

  initWeb3: function() {
    if (typeof web3 !== 'undefined') {
      App.web3Provider = web3.currentProvider;
      web3 = new Web3(web3.currentProvider);
    } else {
      App.web3Provider = new Web3.providers.HttpProvider('http://localhost:7545');
      web3 = new Web3(App.web3Provider);
    }
    return App.initContract();
  },

  initContract: function() {
    $.getJSON("Calculator.json", function(calculator) {
      App.contracts.Calculator = TruffleContract(calculator);
      App.contracts.Calculator.setProvider(App.web3Provider);

      return App.render();
    });
  },

  render: function() {
    var calculatorInstance;
    var number1;
    var number2;
    var loader = $("#loader");
    var content = $("#content");
    $("#result").html("Result: ");
    var num1 = $("#num1");
    var num2 = $("#num2");
    num1.value = 0;
    num2.value = 0;
    loader.show();
    content.hide();

    // Load account data
    web3.eth.getCoinbase(function(err, account) {
      if (err === null) {
        App.account = account;
        $("#accountAddress").html("Your Account: " + account);
      }
    });

    loader.hide();
    content.show();
  },

  add: function() {
    App.contracts.Calculator.deployed().then(function(instance) {
      return instance.add(num1.value, num2.value);
    }).then(function(result) {
      $("#result").html("Result: " + result.c);
    }).catch(function(err) {
      console.error(err);
    });
  },

  subtract: function() {
    App.contracts.Calculator.deployed().then(function(instance) {
      return instance.subtract(num1.value, num2.value);
    }).then(function(result) {
      $("#result").html("Result: " + result.c);
    }).catch(function(err) {
      console.error(err);
    });
  },

  multiply: function() {
    App.contracts.Calculator.deployed().then(function(instance) {
      return instance.multiply(num1.value, num2.value);
    }).then(function(result) {
      $("#result").html("Result: " + result.c);
    }).catch(function(err) {
      console.error(err);
    });
  },

  divide: function() {
    App.contracts.Calculator.deployed().then(function(instance) {
      return instance.divide(num1.value, num2.value);
    }).then(function(result) {
      $("#result").html("Result: " + result.c);
    }).catch(function(err) {
      console.error(err);
    });
  }
};

$(function() {
  $(window).load(function() {
    App.init();
  });
});