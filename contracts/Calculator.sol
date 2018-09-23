pragma solidity ^0.4.16;

// Smart contract to manage order for an E-Commerce site
contract Calculator{
   uint public num1;
   uint public num2;
   
   constructor() public {
        num1 = 0;
        num2 = 0;
    }
    
    function add(uint _num1, uint _num2) public constant returns(uint){
        setNumbers(_num1, _num2);
        return num1 + num2;
    }
    
    function subtract(uint _num1, uint _num2) public constant returns(uint){
        setNumbers(_num1, _num2);
        if(num1 > num2 )
            return num1 - num2;
        else
            return num2 - num1;
    }
    
    function multiply(uint _num1, uint _num2) public constant returns(uint){
        setNumbers(_num1, _num2);
        return num1 * num2;
    }
    
    function divide(uint _num1, uint _num2) public constant returns(uint){
        setNumbers(_num1, _num2);
        if(num2 == 0){
            return 0;
        }
        return num1 / num2;
    }

    function setNumbers(uint _num1, uint _num2) private {
        num1 = _num1;
        num2 = _num2;
    }
}
