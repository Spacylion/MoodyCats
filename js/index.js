const NFTAddress = "0x5d9a232cc4a572b4fa3717ab048e23c936fddfca";

const NFTABI = [
  {
    inputs: [{ internalType: "string", name: "_initURI", type: "string" }],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      { indexed: false, internalType: "bool", name: "approved", type: "bool" },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "from", type: "address" },
      { indexed: true, internalType: "address", name: "to", type: "address" },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "tokenId", type: "uint256" },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "owner", type: "address" }],
    name: "balanceOf",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "baseURI",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "capPublic",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "capWhitelist",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "contractURI",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
    name: "getApproved",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "owner", type: "address" },
      { internalType: "address", name: "operator", type: "address" },
    ],
    name: "isApprovedForAll",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "_amount", type: "uint256" }],
    name: "mint",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "nftLimit",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "nftPrice",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
    name: "ownerOf",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "presaleAddresses",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address[]", name: "_tos", type: "address[]" }],
    name: "reserve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "reserved",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "from", type: "address" },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "tokenId", type: "uint256" },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "from", type: "address" },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "tokenId", type: "uint256" },
      { internalType: "bytes", name: "_data", type: "bytes" },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "salePublic",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "saleWhitelist",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "operator", type: "address" },
      { internalType: "bool", name: "approved", type: "bool" },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "string", name: "_newBaseURI", type: "string" }],
    name: "setBaseURI",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "_nftLimit", type: "uint256" }],
    name: "setNftLimit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "_nftPrice", type: "uint256" }],
    name: "setNftPrice",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "bytes4", name: "interfaceId", type: "bytes4" }],
    name: "supportsInterface",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "toggleSalePublic",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "toggleSaleWhitelist",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
    name: "tokenURI",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "_owner", type: "address" }],
    name: "tokensOfOwner",
    outputs: [{ internalType: "uint256[]", name: "", type: "uint256[]" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "_owner", type: "address" },
      { internalType: "uint256", name: "_index", type: "uint256" },
    ],
    name: "tokensOfOwnerByIndex",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "from", type: "address" },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "tokenId", type: "uint256" },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "newOwner", type: "address" }],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "withdraw",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
];

let wab3Object,
  web3Modal,
  metaMaskAddress,
  NFTInstance,
  NFTImageURI,
  tokensOfOwner;

window.addEventListener("load", () => {
  const Web3Modal = window.Web3Modal.default;
  web3Modal = new Web3Modal({
    cacheProvider: false,
    disableInjectedProvider: false,
  });
  if (window.ethereum) {
    window.ethereum
      .request({ method: "eth_accounts" })
      .then((accounts) => {
        if (accounts.length) {
          if (window.location.pathname === "/") {
            document.getElementById("startstory").style.display = "block";
            document.getElementById("connectwallet").style.display = "none";
          }
          if (sessionStorage.getItem("dataUrl")) {
            handleRendering(sessionStorage.getItem("dataUrl"));
          } else {
            toHomePage();
          }
        } else {
          toHomePage();
        }
      })
      .catch((err) => {
        console.log("err:", err);
      });
  } else {
    toHomePage();
  }
});
function toHomePage() {
  window.location.pathname !== "/" ? (window.location.pathname = "/") : "";
}
async function onConnect() {
  sessionStorage.clear()
  try {
    let provider = await web3Modal.connect();
    onProvider(provider);
    provider.on("accountsChanged", (accounts) => {
      console.log("accounts", accounts);
      onProvider(provider);
    });
    provider.on("chainChanged", (chainId) => {
      console.log("chainId", chainId);
      onProvider(provider);
    });
  } catch (e) {
    console.log("Could not get a wallet connection", e);
    return;
  }
}

async function onProvider(provider) {
  try {
    wab3Object = new Web3(provider);
    let accounts = await wab3Object.eth.getAccounts();
    metaMaskAddress = accounts[0];
    console.log(metaMaskAddress);
    NFTInstance = new wab3Object.eth.Contract(NFTABI, NFTAddress);
    document.getElementById("startstory").style.display = "block";
    document.getElementById("connectwallet").style.display = "none";
    readValue();
  } catch (e) {
    console.log("Could not get a wallet connection", e);
    return;
  }
}

function readValue() {
  Promise.all([NFTInstance.methods.tokensOfOwner(metaMaskAddress).call()]).then(
    async ([tokensOfOwner]) => {
      console.log("tokensOfOwner:", tokensOfOwner);
      tokensOfOwner = tokensOfOwner;
      if (tokensOfOwner.length) {
        let tokenURI = await NFTInstance.methods
          .tokenURI(tokensOfOwner[0])
          .call();
        console.log("tokenURI:", tokenURI);
        tokenURI = tokenURI.replaceAll("://", "/");
        let tokenURL = "https://sartoshigob.mypinata.cloud/" + tokenURI;
        console.log("tokenURL:", tokenURL);
        fetchJSON(tokenURL);
      } else {
        alert("No NFT found");
      }
    }
  );
}
function fetchJSON(URL) {
  fetch(URL)
    .then(async (response) => {
      let res = await response.json();
      console.log("response:", res);
      NFTImageURI = res.image;
      console.log("NFTImageURI:", NFTImageURI);
      NFTImageURI = NFTImageURI.replaceAll("://", "/");
      let NFTImageURL = "https://sartoshigob.mypinata.cloud/" + NFTImageURI;
      console.log("NFTImageURL:", NFTImageURL);
      imagetoBase64(NFTImageURL, (dataUrl) => {
        sessionStorage.setItem("dataUrl", dataUrl);
      });
    })
    .catch((error) => {
      console.log("error:", error);
    });
}
function humanized(number, fix) {
  return Number(number.toString() / 1e9).toFixed(number == 0 ? 3 : fix);
}

function addrTruncation(addr) {
  return addr.slice(0, 6) + "…" + addr.slice(addr.length - 4, addr.length);
}

function disconnect() {
  wab3Object = null;
  NFTInstance = null;
  metaMaskAddress = null;
}

function notify(msg) {
  Toastify({
    text: msg,
    duration: 3000,
    gravity: "bottom",
    position: "right",
  }).showToast();
}

function imagetoBase64(url, callback) {
  let xhRequest = new XMLHttpRequest();
  xhRequest.onload = function () {
    let reader = new FileReader();
    reader.onloadend = function () {
      callback(reader.result);
    };
    reader.readAsDataURL(xhRequest.response);
  };
  xhRequest.open("GET", url);
  xhRequest.responseType = "blob";
  xhRequest.send();
}

function handleRendering(dataUrl) {
  let ele;
  switch (window.location.pathname) {
    case "/page-1.html":
      ele = document.getElementsByClassName("page2NFT")[0];
      ele.src = dataUrl;
      break;
    case "/page-2.html":
      ele = document.getElementsByClassName("bg-shelf-img-pg2")[0];
      ele.src = dataUrl;
      ele.srcset = dataUrl;
      ele.style.rotate = "90deg";
      break;
    case "/page-3.html":
      ele = document.getElementsByClassName("page-3-nft")[0];
      ele.src = dataUrl;
      break;
    case "/page-4.html":
      ele = document.getElementsByClassName("page-4-nft")[0];
      ele.src = dataUrl;
      ele.srcset = dataUrl;
      break;
    case "/page-5.html":
      ele = document.getElementsByClassName("page-5-nft")[0];
      ele.src = dataUrl;
      ele.srcset = dataUrl;
      break;
    case "/page-6.html":
      ele = document.getElementsByClassName("page-6-nft")[0];
      ele.src = dataUrl;
      ele.srcset = dataUrl;
      break;
    case "/page-7.html":
      ele = document.getElementsByClassName("page-7-nft")[0];
      ele.src = dataUrl;
      ele.srcset = dataUrl;
      break;
    case "/page-8.html":
      ele = document.getElementsByClassName("page-8-nft")[0];
      ele.src = dataUrl;
      ele.srcset = dataUrl;
      break;
    case "/page-9.html":
      ele = document.getElementsByClassName("page-9-nft")[0];
      ele.src = dataUrl;
      ele.srcset = dataUrl;
      break;
  }
}
