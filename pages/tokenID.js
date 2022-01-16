const [myTokenID, setMyTokenID] = useState([])

var nftArray = [];


// in callContractData
const token = await nftContract.methods.balanceOf(wallet).call({from:wallet})
setTokens(token)
console.log(token)

if (token > 0) {
  getNFTS(wallet,nftContract,token)

}

// functie
async  function getNFTS(wallet,contract, balance){
    var i;
    var tokens = [];

    if (contract != null) {
        for (i = 0; i < balance; i++) {
            await contract.methods.tokenOfOwnerByIndex(wallet, i).call({from:wallet}).then((id) => { nftArray.push(id) });
        }
        console.log(nftArray)
        setMyTokenID(nftArray)
    }
}

// in html
{
    token > 0 ?       
    <>
        { myTokenID.map(function(d, idx){
            return  (   
                <span className="flex Poppitandfinchsans text-5xl text-white items-center bg-grey-lighter rounded rounded-r-none my-4 ">{idx}</span>
            )
        })}
    </>
    :
        <span className="flex Poppitandfinchsans text-5xl text-white items-center bg-grey-lighter rounded rounded-r-none my-4 ">GEEN NFTs</span>

}