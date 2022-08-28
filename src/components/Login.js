import React from 'react'
import { useState ,useContext} from 'react';
import { AppState} from '../App';
const Login = () => {
    const App=useContext(AppState);
    const {ethereum} = window;
    const LoginWallet = async () => {
        try {
          await ethereum.request({method: "wallet_requestPermissions", params: [{eth_accounts: {}}]})
          const accounts = await ethereum.request({method: "eth_requestAccounts"})
          App.setAddress(accounts[0])
          
          const chainId = await ethereum.request({method: "eth_chainId"})
    
          App.getBal();
        
          if(chainId === "0x3") {
            App.setChain("Ropsten")
            App.setCurrency("RopstenEther")
            App.setSymbol("rEth")
            App.setLogin(true);
            App.setPaypalContractAddress('0x792fE1A901CE52a9D9358662048A86327f743F7f')
            App.setExplorer("https://ropsten.etherscan.io")
          } else if(chainId === "0x4") {
            App.setChain("Rinkeby")
            App.setCurrency("RinkebyEther")
            App.setSymbol("rEth")
            App.setLogin(true);
            App.setPaypalContractAddress('0x964ae05511BC7C2aa3356B489Badd5e7c5bAde15')
            App.setExplorer("https://rinkeby.etherscan.io")
          } else if(chainId === "0x13881") {
            App.setChain("Polygon")
            App.setCurrency("Matic")
            App.setSymbol("Matic")
            App.setPaypalContractAddress('0x9Ad232e2D3812d5E915B864119f8212D51BFB9F5')
            App.setLogin(true);
            App.setExplorer("https://mumbai.polygonscan.com")
          } else {
            setError("Can only access with Ropsten, Rinkeby, Polygon Mumbai")
            App.setLogin(false);
          }
          
        } catch (error) {
          setError(`"${error.message}"`)
        }
      } 
    const [error, setError] = useState('');
  return (
    <div className="min-w-full h-4/5 flex justify-center flex-col items-center">
        <img className='h-15 ' alt='' src='crypto2.jpeg'/>
        <div className='w-1/3 h-40 mt-4 bg-black bg-opacity-70 p-2 rounded-lg shadow-lg border-opacity-40 border-4 border-black flex flex-col justify-center items-center'>
        <h1 className='text-white text-2xl font-medium text-center'>Login</h1>
        {ethereum !== undefined ?
         <div onClick={LoginWallet} className='flex border-opacity-60 bg-opacity-90 text-lg font-medium border-2 border-blue-800 cursor-pointer bg-green-800 text-white mt-4 rounded-lg justify-center items-center py-1 px-2'>
          Connect With Metamask 
          <img className='h-10' alt='' src='metamask.png' />
         </div>
          :
          <div className='flex flex-col justify-center items-center'>
            {/* install Metamask */}
            <a target={"_blank"} rel="noreferrer" href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn">
              <div className='flex border-opacity-60 bg-opacity-90 text-lg font-medium border-2 border-blue-800 cursor-pointer bg-green-800 text-white mt-4 rounded-lg justify-center items-center py-1 px-2'>
               Install Metamask
               <img className='h-10' alt='' src='metamask.png' />
              </div>
            </a>
              <p className='text-red-600 text-lg mt-2'>Login Required Metamask Extension</p>
          </div>
        } 
        <p className='text-red-600 text-lg mt-2'>{error}</p>
        <h1 className='text-green-600 text-lg mt-2'>Created with &#128151; By Rakshit</h1>
      </div>
    </div>
  )
}

export default Login