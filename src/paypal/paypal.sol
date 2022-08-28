//SPDX-Licence-Identifier: unlicensed
pragma solidity >=0.5.0 <0.9.0;

contract paypal{
    event transactions(address indexed from,address to,uint amount,string symbol);
    event recipients(address indexed recipientOf,address recipient,string recipientName);
    function transfer(address payable _to,string memory symbol) public payable{
        _to.transfer(msg.value);
        emit transactions(msg.sender,_to,msg.value,symbol);
    }
    function savetx(address from,address to,uint amount,string memory symbol) public{
        emit transactions(from,to,amount,symbol);
    }
    function addRecipient(address recipient,string memory name) public{
        emit recipients(msg.sender,recipient,name);
    }
}