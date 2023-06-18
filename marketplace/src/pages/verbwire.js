class verbwire {
  constructor() {
  }
  static async deploy(wallet) {
    const form = new FormData();
    form.append('chain', 'goerli');
    form.append('contractType', 'nft721');
    form.append('contractCategory', 'simple');
    form.append('isCollectionContract', 'false');
    form.append('recipientAddress', wallet);
    form.append('contractName', 'Edu');
    const options = {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'X-API-Key': 'sk_live_271f9963-2031-4e3a-b0e7-483f1fdf7b11'
      }
    };
    options.body = form;
    var result = 'empty';
    await fetch('https://api.verbwire.com/v1/nft/deploy/deployContract', options)
      .then(response => response.json())
      .then(response => { result = response; console.log(response) })
      .catch(err => console.error(err));
    console.log("new");
    console.log(result.code);
    return (result.message);
  }
  static async Alltransactions(wallet) {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        'X-API-Key': 'sk_live_271f9963-2031-4e3a-b0e7-483f1fdf7b11'
      }
    };

    fetch('https://api.verbwire.com/v1/nft/data/transactions?walletAddress=' + wallet + '&chain=ethereum', options)
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err));
  }

  static async mintNFT(name, description, contractAddress,walletAddress,imageURL) {
    const form = new FormData();
    form.append('quantity', '1');
    form.append('chain', 'goerli');
    form.append('allowPlatformToOperateToken', 'true');
    form.append('metadataUrl', imageURL);
    form.append('contractAddress', contractAddress);
    form.append('recipientAddress', walletAddress);
    
    const options = {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'X-API-Key': 'sk_live_271f9963-2031-4e3a-b0e7-483f1fdf7b11'
      }
    };
    options.body = form;
  var result= "";
  await fetch('https://api.verbwire.com/v1/nft/mint/mintFromMetadataUrl', options)
      .then(response => response.json())
      .then(response => { result = response; console.log(response) })
      .catch(err => console.error(err));
  return result;
  }
}
export default verbwire
