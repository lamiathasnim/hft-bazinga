const web3 = require('web3')

// var arrayABI =
// var contractAddress=


if (typeof web3 !== 'undefined'){
    web3.eth.getAccounts(function(err,accounts){
        myAccountAddress = accounts[0];
        //get wallet address of person who logged into metamask

        var myContract = new web3.eth.Contract(arrayABI, contractAddress, {
            from: myAccountAddress, // default from address
            // gasPrice: '20000000000' // default gas price in wei, 20 gwei in this case
        });

        function getdetails(name,password,myAccountAddress) {
            return myContract.methods.verifyc(name,password,myAccountAddress).call()
          }

        function write(name,hash,myAccountAddress){
            return myContract.methods.__adminadd(name,hash,myAccountAddress)
        }


    })
}
    

