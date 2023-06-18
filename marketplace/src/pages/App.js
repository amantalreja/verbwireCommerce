import React, { Component } from "react";
import ImageGallery from './ImageList';
import MetaMaskSDK from '@metamask/sdk';
import verbwire from "./verbwire";
import './App.css';
import Firebase from './Firebase';
import FirebaseButton from "./FireBaseButton";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        {
          link: 'https://cdn.pixabay.com/photo/2014/02/21/10/57/glass-271151_1280.jpg',
          title: 'Image 1',
          description: 'This is the first image',
        },
        {
          link: 'https://cdn.pixabay.com/photo/2014/02/21/10/57/glass-271151_1280.jpg',
          title: 'Image 2',
          description: 'This is the second image',
        },
        {
          link: 'https://cdn.pixabay.com/photo/2014/02/21/10/57/glass-271151_1280.jpg',
          title: 'Image 3',
          description: 'This is the third image',
        },
      ],
      connectText: 'Connect to MetaMask',
      image: null,
      imageDiv: '',
      walletAddress: '',
      button: '',
      deployResponse: '',
      allTransactions: 'none',
      fbase: '',
    };
    // if we are using arrow function binding is not required
    //  this.onImageChange = this.onImageChange.bind(this);
  }


  onImageChange = event => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      console.log(URL.createObjectURL(img))
      this.setState({
        image: URL.createObjectURL(img),
        button: this.deployButton()
      });
      console.log("image chosen");
      this.setState({
        fbase:
          <div><Firebase></Firebase></div>
      });
    }
  };
  checker = async () => {
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
      .catch((err) => {
        if (err.code === 4001) {
          // EIP-1193 userRejectedRequest error
          // If this happens, the user rejected the connection request.
          console.log('Please connect to MetaMask.');
        } else {
          console.error(err);
        }
      });
    const account = accounts[0];
    console.log(account);

    this.setState({ walletAddress: account, connectText: 'MetaMask Connected', imageDiv: <input type="file" accept="image/png, image/jpeg" name="myImage" onChange={this.onImageChange} />, allTransactions: verbwire.Alltransactions(this.state.walletAddress) });
    console.log(this.state.allTransactions);
    return true
  }
  deployButton = () => {
    return (
      <button onClick={() => {
        verbwire.mintNFT("first", "nft that could serve a good", "0x868f92347EDfC4dCBDD9198Ec8Ec4d1821961edb", this.state.walletAddress, this.state.image).then((response) => {
          console.log("logging this")
          console.log(response);
          this.setState({
            deployResponse: <div>
              {Object.entries(response.transaction_details).map(([key, value]) => (
                <h3 key={key}>
                  {key}: {value}
                </h3>
              ))}
            </div>
          });
        });
      }}>
        Deploy NFT
      </button>
    )
  }
  render() {
    return (
      <div>
        <div className="h1"><h1>
          Save Art to Save people
        </h1></div>

        <div>
          <div>
            <div className="justifyContent flexAgain">
              <div className="flexAgainChild">
                <h3 id="wallet">{this.state.walletAddress.length == 0 ? 'Wallet Not Connected' : 'Wallet Address: '}{this.state.walletAddress}</h3>
                <button onClick={this.checker}>{this.state.connectText}</button>
              </div>
              <div className="flexAgainChild">
                <h1 style={{ marginBottom: 10 }}>Upload NFT</h1>
                {this.state.imageDiv.length < 1 ? 'Connect First to Upload' : this.state.imageDiv}
                {this.state.button}
                {this.state.deployResponse}
                {this.state.fbase}
                <div>
                  {console.log()}

                </div>
              </div>
              <div className="flexAgainChild">
                <img style={{ width: 400 }} src={this.state.image} />
              </div >
            </div>
          </div>
        </div>
        <FirebaseButton></FirebaseButton>
      </div>
    );
  }
}
export default App;
