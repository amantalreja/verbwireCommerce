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
        'X-API-Key': 'sk_live_e3ea9118-701a-4c48-8c74-b930d0d30d9e'
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
        'X-API-Key': 'sk_live_e3ea9118-701a-4c48-8c74-b930d0d30d9e'
      }
    };

    fetch('https://api.verbwire.com/v1/nft/data/transactions?walletAddress=' + wallet + '&chain=ethereum', options)
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err));
  }

  static async mintNFT(name, description, contractAddress,imageURL) {
    const form = new FormData();
    form.append('allowPlatformToOperateToken', 'true');
    form.append('filePath', imageURL);
    form.append('quantity', '1');
    form.append('chain', 'ethereum');
    form.append('name', name);
    form.append('description', description);
    form.append('contractAddress', contractAddress);

    const options = {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'X-API-Key': 'sk_live_e3ea9118-701a-4c48-8c74-b930d0d30d9e'
      }
    };
    options.body = form;

    fetch('https://api.verbwire.com/v1/nft/mint/mintFromFile', options)
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err));
  }


}
export default verbwire
