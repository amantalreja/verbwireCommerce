class verbwire{
  constructor(){
  }
  static deploy(wallet){
    const form = new FormData();
    form.append('chain', 'goerli');
    form.append('contractType', 'nft721');
    form.append('contractCategory', 'simple');
    form.append('isCollectionContract', 'false');
    form.append('recipientAddress',wallet);
    form.append('contractName', 'Edu');

    const options = {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'X-API-Key': 'sk_live_271f9963-2031-4e3a-b0e7-483f1fdf7b11'
      }
    };

    options.body = form;

    fetch('https://api.verbwire.com/v1/nft/deploy/deployContract', options)
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err));
  return true;
  }
}
  export default verbwire
