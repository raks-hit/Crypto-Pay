import React from 'react'
import {ethers} from 'ethers'
const Ethers = async() => {
    const provider=new ethers.providers.Web3Provider(window.ethereum);
    const signer=provider.getSigner();
    const balance=signer.getBalance();
    const chainId=signer.getChainId();
    setBalance(ethers.utils.formatEther(balance));
    const ERC=new ethers.Contract(address,abi,signer)
    await window.ethereum.request({method:"wallet_requestpermissions",params:[{eth_accounts:{}}]})
    
  return (
    <div>Ethers</div>
  )
}

export default Ethers