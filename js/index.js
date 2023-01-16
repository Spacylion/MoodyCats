const NFTAddress = "0x0FEa9d046e026afb3854C53FB36cA6c5a6EED107"

const NFTABI = [
  {
    type: "constructor",
    name: "",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "error",
    name: "ApprovalCallerNotOwnerNorApproved",
    inputs: [],
    outputs: [],
  },
  {
    type: "error",
    name: "ApprovalQueryForNonexistentToken",
    inputs: [],
    outputs: [],
  },
  {
    type: "error",
    name: "ApprovalToCurrentOwner",
    inputs: [],
    outputs: [],
  },
  {
    type: "error",
    name: "ApproveToCaller",
    inputs: [],
    outputs: [],
  },
  {
    type: "error",
    name: "BalanceQueryForZeroAddress",
    inputs: [],
    outputs: [],
  },
  {
    type: "error",
    name: "MintToZeroAddress",
    inputs: [],
    outputs: [],
  },
  {
    type: "error",
    name: "MintZeroQuantity",
    inputs: [],
    outputs: [],
  },
  {
    type: "error",
    name: "OperatorNotAllowed",
    inputs: [
      {
        type: "address",
        name: "operator",
        internalType: "address",
      },
    ],
    outputs: [],
  },
  {
    type: "error",
    name: "OwnerQueryForNonexistentToken",
    inputs: [],
    outputs: [],
  },
  {
    type: "error",
    name: "TransferCallerNotOwnerNorApproved",
    inputs: [],
    outputs: [],
  },
  {
    type: "error",
    name: "TransferFromIncorrectOwner",
    inputs: [],
    outputs: [],
  },
  {
    type: "error",
    name: "TransferToNonERC721ReceiverImplementer",
    inputs: [],
    outputs: [],
  },
  {
    type: "error",
    name: "TransferToZeroAddress",
    inputs: [],
    outputs: [],
  },
  {
    type: "error",
    name: "URIQueryForNonexistentToken",
    inputs: [],
    outputs: [],
  },
  {
    type: "event",
    name: "Approval",
    inputs: [
      {
        type: "address",
        name: "owner",
        indexed: true,
        internalType: "address",
      },
      {
        type: "address",
        name: "approved",
        indexed: true,
        internalType: "address",
      },
      {
        type: "uint256",
        name: "tokenId",
        indexed: true,
        internalType: "uint256",
      },
    ],
    outputs: [],
    anonymous: false,
  },
  {
    type: "event",
    name: "ApprovalForAll",
    inputs: [
      {
        type: "address",
        name: "owner",
        indexed: true,
        internalType: "address",
      },
      {
        type: "address",
        name: "operator",
        indexed: true,
        internalType: "address",
      },
      {
        type: "bool",
        name: "approved",
        indexed: false,
        internalType: "bool",
      },
    ],
    outputs: [],
    anonymous: false,
  },
  {
    type: "event",
    name: "ClaimConditionsUpdated",
    inputs: [
      {
        type: "tuple[]",
        name: "claimConditions",
        components: [
          {
            type: "uint256",
            name: "startTimestamp",
            internalType: "uint256",
          },
          {
            type: "uint256",
            name: "maxClaimableSupply",
            internalType: "uint256",
          },
          {
            type: "uint256",
            name: "supplyClaimed",
            internalType: "uint256",
          },
          {
            type: "uint256",
            name: "quantityLimitPerWallet",
            internalType: "uint256",
          },
          {
            type: "bytes32",
            name: "merkleRoot",
            internalType: "bytes32",
          },
          {
            type: "uint256",
            name: "pricePerToken",
            internalType: "uint256",
          },
          {
            type: "address",
            name: "currency",
            internalType: "address",
          },
          {
            type: "string",
            name: "metadata",
            internalType: "string",
          },
        ],
        indexed: false,
        internalType: "struct IClaimCondition.ClaimCondition[]",
      },
      {
        type: "bool",
        name: "resetEligibility",
        indexed: false,
        internalType: "bool",
      },
    ],
    outputs: [],
    anonymous: false,
  },
  {
    type: "event",
    name: "ContractURIUpdated",
    inputs: [
      {
        type: "string",
        name: "prevURI",
        indexed: false,
        internalType: "string",
      },
      {
        type: "string",
        name: "newURI",
        indexed: false,
        internalType: "string",
      },
    ],
    outputs: [],
    anonymous: false,
  },
  {
    type: "event",
    name: "DefaultRoyalty",
    inputs: [
      {
        type: "address",
        name: "newRoyaltyRecipient",
        indexed: true,
        internalType: "address",
      },
      {
        type: "uint256",
        name: "newRoyaltyBps",
        indexed: false,
        internalType: "uint256",
      },
    ],
    outputs: [],
    anonymous: false,
  },
  {
    type: "event",
    name: "Initialized",
    inputs: [
      {
        type: "uint8",
        name: "version",
        indexed: false,
        internalType: "uint8",
      },
    ],
    outputs: [],
    anonymous: false,
  },
  {
    type: "event",
    name: "MaxTotalSupplyUpdated",
    inputs: [
      {
        type: "uint256",
        name: "maxTotalSupply",
        indexed: false,
        internalType: "uint256",
      },
    ],
    outputs: [],
    anonymous: false,
  },
  {
    type: "event",
    name: "OperatorRestriction",
    inputs: [
      {
        type: "bool",
        name: "restriction",
        indexed: false,
        internalType: "bool",
      },
    ],
    outputs: [],
    anonymous: false,
  },
  {
    type: "event",
    name: "OwnerUpdated",
    inputs: [
      {
        type: "address",
        name: "prevOwner",
        indexed: true,
        internalType: "address",
      },
      {
        type: "address",
        name: "newOwner",
        indexed: true,
        internalType: "address",
      },
    ],
    outputs: [],
    anonymous: false,
  },
  {
    type: "event",
    name: "PlatformFeeInfoUpdated",
    inputs: [
      {
        type: "address",
        name: "platformFeeRecipient",
        indexed: true,
        internalType: "address",
      },
      {
        type: "uint256",
        name: "platformFeeBps",
        indexed: false,
        internalType: "uint256",
      },
    ],
    outputs: [],
    anonymous: false,
  },
  {
    type: "event",
    name: "PrimarySaleRecipientUpdated",
    inputs: [
      {
        type: "address",
        name: "recipient",
        indexed: true,
        internalType: "address",
      },
    ],
    outputs: [],
    anonymous: false,
  },
  {
    type: "event",
    name: "RoleAdminChanged",
    inputs: [
      {
        type: "bytes32",
        name: "role",
        indexed: true,
        internalType: "bytes32",
      },
      {
        type: "bytes32",
        name: "previousAdminRole",
        indexed: true,
        internalType: "bytes32",
      },
      {
        type: "bytes32",
        name: "newAdminRole",
        indexed: true,
        internalType: "bytes32",
      },
    ],
    outputs: [],
    anonymous: false,
  },
  {
    type: "event",
    name: "RoleGranted",
    inputs: [
      {
        type: "bytes32",
        name: "role",
        indexed: true,
        internalType: "bytes32",
      },
      {
        type: "address",
        name: "account",
        indexed: true,
        internalType: "address",
      },
      {
        type: "address",
        name: "sender",
        indexed: true,
        internalType: "address",
      },
    ],
    outputs: [],
    anonymous: false,
  },
  {
    type: "event",
    name: "RoleRevoked",
    inputs: [
      {
        type: "bytes32",
        name: "role",
        indexed: true,
        internalType: "bytes32",
      },
      {
        type: "address",
        name: "account",
        indexed: true,
        internalType: "address",
      },
      {
        type: "address",
        name: "sender",
        indexed: true,
        internalType: "address",
      },
    ],
    outputs: [],
    anonymous: false,
  },
  {
    type: "event",
    name: "RoyaltyForToken",
    inputs: [
      {
        type: "uint256",
        name: "tokenId",
        indexed: true,
        internalType: "uint256",
      },
      {
        type: "address",
        name: "royaltyRecipient",
        indexed: true,
        internalType: "address",
      },
      {
        type: "uint256",
        name: "royaltyBps",
        indexed: false,
        internalType: "uint256",
      },
    ],
    outputs: [],
    anonymous: false,
  },
  {
    type: "event",
    name: "TokenURIRevealed",
    inputs: [
      {
        type: "uint256",
        name: "index",
        indexed: true,
        internalType: "uint256",
      },
      {
        type: "string",
        name: "revealedURI",
        indexed: false,
        internalType: "string",
      },
    ],
    outputs: [],
    anonymous: false,
  },
  {
    type: "event",
    name: "TokensClaimed",
    inputs: [
      {
        type: "uint256",
        name: "claimConditionIndex",
        indexed: true,
        internalType: "uint256",
      },
      {
        type: "address",
        name: "claimer",
        indexed: true,
        internalType: "address",
      },
      {
        type: "address",
        name: "receiver",
        indexed: true,
        internalType: "address",
      },
      {
        type: "uint256",
        name: "startTokenId",
        indexed: false,
        internalType: "uint256",
      },
      {
        type: "uint256",
        name: "quantityClaimed",
        indexed: false,
        internalType: "uint256",
      },
    ],
    outputs: [],
    anonymous: false,
  },
  {
    type: "event",
    name: "TokensLazyMinted",
    inputs: [
      {
        type: "uint256",
        name: "startTokenId",
        indexed: true,
        internalType: "uint256",
      },
      {
        type: "uint256",
        name: "endTokenId",
        indexed: false,
        internalType: "uint256",
      },
      {
        type: "string",
        name: "baseURI",
        indexed: false,
        internalType: "string",
      },
      {
        type: "bytes",
        name: "encryptedBaseURI",
        indexed: false,
        internalType: "bytes",
      },
    ],
    outputs: [],
    anonymous: false,
  },
  {
    type: "event",
    name: "Transfer",
    inputs: [
      {
        type: "address",
        name: "from",
        indexed: true,
        internalType: "address",
      },
      {
        type: "address",
        name: "to",
        indexed: true,
        internalType: "address",
      },
      {
        type: "uint256",
        name: "tokenId",
        indexed: true,
        internalType: "uint256",
      },
    ],
    outputs: [],
    anonymous: false,
  },
  {
    type: "function",
    name: "DEFAULT_ADMIN_ROLE",
    inputs: [],
    outputs: [
      {
        type: "bytes32",
        name: "",
        internalType: "bytes32",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "approve",
    inputs: [
      {
        type: "address",
        name: "operator",
        internalType: "address",
      },
      {
        type: "uint256",
        name: "tokenId",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "balanceOf",
    inputs: [
      {
        type: "address",
        name: "owner",
        internalType: "address",
      },
    ],
    outputs: [
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "burn",
    inputs: [
      {
        type: "uint256",
        name: "tokenId",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "claim",
    inputs: [
      {
        type: "address",
        name: "_receiver",
        internalType: "address",
      },
      {
        type: "uint256",
        name: "_quantity",
        internalType: "uint256",
      },
      {
        type: "address",
        name: "_currency",
        internalType: "address",
      },
      {
        type: "uint256",
        name: "_pricePerToken",
        internalType: "uint256",
      },
      {
        type: "tuple",
        name: "_allowlistProof",
        components: [
          {
            type: "bytes32[]",
            name: "proof",
            internalType: "bytes32[]",
          },
          {
            type: "uint256",
            name: "quantityLimitPerWallet",
            internalType: "uint256",
          },
          {
            type: "uint256",
            name: "pricePerToken",
            internalType: "uint256",
          },
          {
            type: "address",
            name: "currency",
            internalType: "address",
          },
        ],
        internalType: "struct IDrop.AllowlistProof",
      },
      {
        type: "bytes",
        name: "_data",
        internalType: "bytes",
      },
    ],
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "function",
    name: "claimCondition",
    inputs: [],
    outputs: [
      {
        type: "uint256",
        name: "currentStartId",
        internalType: "uint256",
      },
      {
        type: "uint256",
        name: "count",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "contractType",
    inputs: [],
    outputs: [
      {
        type: "bytes32",
        name: "",
        internalType: "bytes32",
      },
    ],
    stateMutability: "pure",
  },
  {
    type: "function",
    name: "contractURI",
    inputs: [],
    outputs: [
      {
        type: "string",
        name: "",
        internalType: "string",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "contractVersion",
    inputs: [],
    outputs: [
      {
        type: "uint8",
        name: "",
        internalType: "uint8",
      },
    ],
    stateMutability: "pure",
  },
  {
    type: "function",
    name: "encryptDecrypt",
    inputs: [
      {
        type: "bytes",
        name: "data",
        internalType: "bytes",
      },
      {
        type: "bytes",
        name: "key",
        internalType: "bytes",
      },
    ],
    outputs: [
      {
        type: "bytes",
        name: "result",
        internalType: "bytes",
      },
    ],
    stateMutability: "pure",
  },
  {
    type: "function",
    name: "encryptedData",
    inputs: [
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        type: "bytes",
        name: "",
        internalType: "bytes",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getActiveClaimConditionId",
    inputs: [],
    outputs: [
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getApproved",
    inputs: [
      {
        type: "uint256",
        name: "tokenId",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        type: "address",
        name: "",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getBaseURICount",
    inputs: [],
    outputs: [
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getBatchIdAtIndex",
    inputs: [
      {
        type: "uint256",
        name: "_index",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getClaimConditionById",
    inputs: [
      {
        type: "uint256",
        name: "_conditionId",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        type: "tuple",
        name: "condition",
        components: [
          {
            type: "uint256",
            name: "startTimestamp",
            internalType: "uint256",
          },
          {
            type: "uint256",
            name: "maxClaimableSupply",
            internalType: "uint256",
          },
          {
            type: "uint256",
            name: "supplyClaimed",
            internalType: "uint256",
          },
          {
            type: "uint256",
            name: "quantityLimitPerWallet",
            internalType: "uint256",
          },
          {
            type: "bytes32",
            name: "merkleRoot",
            internalType: "bytes32",
          },
          {
            type: "uint256",
            name: "pricePerToken",
            internalType: "uint256",
          },
          {
            type: "address",
            name: "currency",
            internalType: "address",
          },
          {
            type: "string",
            name: "metadata",
            internalType: "string",
          },
        ],
        internalType: "struct IClaimCondition.ClaimCondition",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getDefaultRoyaltyInfo",
    inputs: [],
    outputs: [
      {
        type: "address",
        name: "",
        internalType: "address",
      },
      {
        type: "uint16",
        name: "",
        internalType: "uint16",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getPlatformFeeInfo",
    inputs: [],
    outputs: [
      {
        type: "address",
        name: "",
        internalType: "address",
      },
      {
        type: "uint16",
        name: "",
        internalType: "uint16",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getRevealURI",
    inputs: [
      {
        type: "uint256",
        name: "_batchId",
        internalType: "uint256",
      },
      {
        type: "bytes",
        name: "_key",
        internalType: "bytes",
      },
    ],
    outputs: [
      {
        type: "string",
        name: "revealedURI",
        internalType: "string",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getRoleAdmin",
    inputs: [
      {
        type: "bytes32",
        name: "role",
        internalType: "bytes32",
      },
    ],
    outputs: [
      {
        type: "bytes32",
        name: "",
        internalType: "bytes32",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getRoleMember",
    inputs: [
      {
        type: "bytes32",
        name: "role",
        internalType: "bytes32",
      },
      {
        type: "uint256",
        name: "index",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        type: "address",
        name: "member",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getRoleMemberCount",
    inputs: [
      {
        type: "bytes32",
        name: "role",
        internalType: "bytes32",
      },
    ],
    outputs: [
      {
        type: "uint256",
        name: "count",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getRoyaltyInfoForToken",
    inputs: [
      {
        type: "uint256",
        name: "_tokenId",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        type: "address",
        name: "",
        internalType: "address",
      },
      {
        type: "uint16",
        name: "",
        internalType: "uint16",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getSupplyClaimedByWallet",
    inputs: [
      {
        type: "uint256",
        name: "_conditionId",
        internalType: "uint256",
      },
      {
        type: "address",
        name: "_claimer",
        internalType: "address",
      },
    ],
    outputs: [
      {
        type: "uint256",
        name: "supplyClaimedByWallet",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "grantRole",
    inputs: [
      {
        type: "bytes32",
        name: "role",
        internalType: "bytes32",
      },
      {
        type: "address",
        name: "account",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "hasRole",
    inputs: [
      {
        type: "bytes32",
        name: "role",
        internalType: "bytes32",
      },
      {
        type: "address",
        name: "account",
        internalType: "address",
      },
    ],
    outputs: [
      {
        type: "bool",
        name: "",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "hasRoleWithSwitch",
    inputs: [
      {
        type: "bytes32",
        name: "role",
        internalType: "bytes32",
      },
      {
        type: "address",
        name: "account",
        internalType: "address",
      },
    ],
    outputs: [
      {
        type: "bool",
        name: "",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "initialize",
    inputs: [
      {
        type: "address",
        name: "_defaultAdmin",
        internalType: "address",
      },
      {
        type: "string",
        name: "_name",
        internalType: "string",
      },
      {
        type: "string",
        name: "_symbol",
        internalType: "string",
      },
      {
        type: "string",
        name: "_contractURI",
        internalType: "string",
      },
      {
        type: "address[]",
        name: "_trustedForwarders",
        internalType: "address[]",
      },
      {
        type: "address",
        name: "_saleRecipient",
        internalType: "address",
      },
      {
        type: "address",
        name: "_royaltyRecipient",
        internalType: "address",
      },
      {
        type: "uint128",
        name: "_royaltyBps",
        internalType: "uint128",
      },
      {
        type: "uint128",
        name: "_platformFeeBps",
        internalType: "uint128",
      },
      {
        type: "address",
        name: "_platformFeeRecipient",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "isApprovedForAll",
    inputs: [
      {
        type: "address",
        name: "owner",
        internalType: "address",
      },
      {
        type: "address",
        name: "operator",
        internalType: "address",
      },
    ],
    outputs: [
      {
        type: "bool",
        name: "",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "isEncryptedBatch",
    inputs: [
      {
        type: "uint256",
        name: "_batchId",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        type: "bool",
        name: "",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "isTrustedForwarder",
    inputs: [
      {
        type: "address",
        name: "forwarder",
        internalType: "address",
      },
    ],
    outputs: [
      {
        type: "bool",
        name: "",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "lazyMint",
    inputs: [
      {
        type: "uint256",
        name: "_amount",
        internalType: "uint256",
      },
      {
        type: "string",
        name: "_baseURIForTokens",
        internalType: "string",
      },
      {
        type: "bytes",
        name: "_data",
        internalType: "bytes",
      },
    ],
    outputs: [
      {
        type: "uint256",
        name: "batchId",
        internalType: "uint256",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "maxTotalSupply",
    inputs: [],
    outputs: [
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "multicall",
    inputs: [
      {
        type: "bytes[]",
        name: "data",
        internalType: "bytes[]",
      },
    ],
    outputs: [
      {
        type: "bytes[]",
        name: "results",
        internalType: "bytes[]",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "name",
    inputs: [],
    outputs: [
      {
        type: "string",
        name: "",
        internalType: "string",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "nextTokenIdToClaim",
    inputs: [],
    outputs: [
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "nextTokenIdToMint",
    inputs: [],
    outputs: [
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "operatorRestriction",
    inputs: [],
    outputs: [
      {
        type: "bool",
        name: "",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "owner",
    inputs: [],
    outputs: [
      {
        type: "address",
        name: "",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "ownerOf",
    inputs: [
      {
        type: "uint256",
        name: "tokenId",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        type: "address",
        name: "",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "primarySaleRecipient",
    inputs: [],
    outputs: [
      {
        type: "address",
        name: "",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "renounceRole",
    inputs: [
      {
        type: "bytes32",
        name: "role",
        internalType: "bytes32",
      },
      {
        type: "address",
        name: "account",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "reveal",
    inputs: [
      {
        type: "uint256",
        name: "_index",
        internalType: "uint256",
      },
      {
        type: "bytes",
        name: "_key",
        internalType: "bytes",
      },
    ],
    outputs: [
      {
        type: "string",
        name: "revealedURI",
        internalType: "string",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "revokeRole",
    inputs: [
      {
        type: "bytes32",
        name: "role",
        internalType: "bytes32",
      },
      {
        type: "address",
        name: "account",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "royaltyInfo",
    inputs: [
      {
        type: "uint256",
        name: "tokenId",
        internalType: "uint256",
      },
      {
        type: "uint256",
        name: "salePrice",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        type: "address",
        name: "receiver",
        internalType: "address",
      },
      {
        type: "uint256",
        name: "royaltyAmount",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "safeTransferFrom",
    inputs: [
      {
        type: "address",
        name: "from",
        internalType: "address",
      },
      {
        type: "address",
        name: "to",
        internalType: "address",
      },
      {
        type: "uint256",
        name: "tokenId",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "safeTransferFrom",
    inputs: [
      {
        type: "address",
        name: "from",
        internalType: "address",
      },
      {
        type: "address",
        name: "to",
        internalType: "address",
      },
      {
        type: "uint256",
        name: "tokenId",
        internalType: "uint256",
      },
      {
        type: "bytes",
        name: "data",
        internalType: "bytes",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "setApprovalForAll",
    inputs: [
      {
        type: "address",
        name: "operator",
        internalType: "address",
      },
      {
        type: "bool",
        name: "approved",
        internalType: "bool",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "setClaimConditions",
    inputs: [
      {
        type: "tuple[]",
        name: "_conditions",
        components: [
          {
            type: "uint256",
            name: "startTimestamp",
            internalType: "uint256",
          },
          {
            type: "uint256",
            name: "maxClaimableSupply",
            internalType: "uint256",
          },
          {
            type: "uint256",
            name: "supplyClaimed",
            internalType: "uint256",
          },
          {
            type: "uint256",
            name: "quantityLimitPerWallet",
            internalType: "uint256",
          },
          {
            type: "bytes32",
            name: "merkleRoot",
            internalType: "bytes32",
          },
          {
            type: "uint256",
            name: "pricePerToken",
            internalType: "uint256",
          },
          {
            type: "address",
            name: "currency",
            internalType: "address",
          },
          {
            type: "string",
            name: "metadata",
            internalType: "string",
          },
        ],
        internalType: "struct IClaimCondition.ClaimCondition[]",
      },
      {
        type: "bool",
        name: "_resetClaimEligibility",
        internalType: "bool",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "setContractURI",
    inputs: [
      {
        type: "string",
        name: "_uri",
        internalType: "string",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "setDefaultRoyaltyInfo",
    inputs: [
      {
        type: "address",
        name: "_royaltyRecipient",
        internalType: "address",
      },
      {
        type: "uint256",
        name: "_royaltyBps",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "setMaxTotalSupply",
    inputs: [
      {
        type: "uint256",
        name: "_maxTotalSupply",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "setOperatorRestriction",
    inputs: [
      {
        type: "bool",
        name: "_restriction",
        internalType: "bool",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "setOwner",
    inputs: [
      {
        type: "address",
        name: "_newOwner",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "setPlatformFeeInfo",
    inputs: [
      {
        type: "address",
        name: "_platformFeeRecipient",
        internalType: "address",
      },
      {
        type: "uint256",
        name: "_platformFeeBps",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "setPrimarySaleRecipient",
    inputs: [
      {
        type: "address",
        name: "_saleRecipient",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "setRoyaltyInfoForToken",
    inputs: [
      {
        type: "uint256",
        name: "_tokenId",
        internalType: "uint256",
      },
      {
        type: "address",
        name: "_recipient",
        internalType: "address",
      },
      {
        type: "uint256",
        name: "_bps",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "supportsInterface",
    inputs: [
      {
        type: "bytes4",
        name: "interfaceId",
        internalType: "bytes4",
      },
    ],
    outputs: [
      {
        type: "bool",
        name: "",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "symbol",
    inputs: [],
    outputs: [
      {
        type: "string",
        name: "",
        internalType: "string",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "tokenURI",
    inputs: [
      {
        type: "uint256",
        name: "_tokenId",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        type: "string",
        name: "",
        internalType: "string",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "totalMinted",
    inputs: [],
    outputs: [
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "totalSupply",
    inputs: [],
    outputs: [
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "transferFrom",
    inputs: [
      {
        type: "address",
        name: "from",
        internalType: "address",
      },
      {
        type: "address",
        name: "to",
        internalType: "address",
      },
      {
        type: "uint256",
        name: "tokenId",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "verifyClaim",
    inputs: [
      {
        type: "uint256",
        name: "_conditionId",
        internalType: "uint256",
      },
      {
        type: "address",
        name: "_claimer",
        internalType: "address",
      },
      {
        type: "uint256",
        name: "_quantity",
        internalType: "uint256",
      },
      {
        type: "address",
        name: "_currency",
        internalType: "address",
      },
      {
        type: "uint256",
        name: "_pricePerToken",
        internalType: "uint256",
      },
      {
        type: "tuple",
        name: "_allowlistProof",
        components: [
          {
            type: "bytes32[]",
            name: "proof",
            internalType: "bytes32[]",
          },
          {
            type: "uint256",
            name: "quantityLimitPerWallet",
            internalType: "uint256",
          },
          {
            type: "uint256",
            name: "pricePerToken",
            internalType: "uint256",
          },
          {
            type: "address",
            name: "currency",
            internalType: "address",
          },
        ],
        internalType: "struct IDrop.AllowlistProof",
      },
    ],
    outputs: [
      {
        type: "bool",
        name: "isOverride",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
]

let wab3Object, web3Modal, metaMaskAddress
window.addEventListener("load", () => {
  const Web3Modal = window.Web3Modal.default
  web3Modal = new Web3Modal({
    cacheProvider: false,
    disableInjectedProvider: false,
  })
  if (window.ethereum) {
    window.ethereum
      .request({ method: "eth_accounts" })
      .then((accounts) => {
        if (accounts.length) {
          if (window.location.pathname === "/") {
            if (document.getElementById("startstory"))
              document.getElementById("startstory").style.display = "block"
            if (document.getElementById("connectwallet"))
              document.getElementById("connectwallet").style.display = "none"
          }
          if (sessionStorage.getItem("dataUrl")) {
            handleRendering()
          } else {
            toHomePage()
          }
        } else {
          toHomePage()
        }
      })
      .catch((err) => {
        console.log("err:", err)
      })
  } else {
    toHomePage()
  }
})

function toHomePage() {
  window.location.pathname !== "/" ? (window.location.pathname = "/") : ""
}

async function changeNFT() {
  sessionStorage.clear()
  await onConnect()
}

async function onConnect() {
  sessionStorage.clear()
  try {
    let provider = await web3Modal.connect()
    onProvider(provider)
    provider.on("accountsChanged", (accounts) => {
      console.log("accounts", accounts)
      onProvider(provider)
    })
    provider.on("chainChanged", (chainId) => {
      console.log("chainId", chainId)
      onProvider(provider)
    })
  } catch (e) {
    console.log("Could not get a wallet connection", e)
    return
  }
}

async function onProvider(provider) {
  try {
    wab3Object = new Web3(provider)
    let accounts = await wab3Object.eth.getAccounts()
    metaMaskAddress = accounts[0]
    console.log(metaMaskAddress)
    if (document.getElementById("startstory"))
      document.getElementById("startstory").style.display = "block"
    if (document.getElementById("connectwallet"))
      document.getElementById("connectwallet").style.display = "none"
    readValue()
  } catch (e) {
    console.log("Could not get a wallet connection", e)
    return
  }
}

function readValue() {
  let NFTInstance = new wab3Object.eth.Contract(NFTABI, NFTAddress)
  Promise.all([NFTInstance.methods.tokensOfOwner(metaMaskAddress).call()]).then(
    async ([tokensOwner]) => {
      console.log("tokensOwner:", tokensOwner)
      let tokenURLList = []
      if (tokensOwner.length) {
        document.getElementById("exampleModal").style.display = "block"
        tokensOwner.forEach(async (NFT, i) => {
          let tokenURI = await NFTInstance.methods.tokenURI(NFT).call()
          console.log("i:", i)
          tokenURI =
            "https://sartoshigob.mypinata.cloud/" +
            tokenURI.replaceAll("://", "/")
          tokenURLList.push(tokenURI)

          if (i + 1 === tokensOwner.length)
            setTimeout(() => {
              fetchJSON(tokenURLList)
            }, 1000)
        })
      } else {
        alert("No NFT found")
      }
    }
  )
}

function fetchJSON(tokenURLList) {
  let tokenImgList = []
  tokenURLList.forEach((URL) => {
    fetch(URL)
      .then(async (response) => {
        let res = await response.json()
        let NFTURL = res.image
        NFTURL =
          "https://sartoshigob.mypinata.cloud/" + NFTURL.replaceAll("://", "/")
        imagetoBase64(NFTURL, (dataUrl) => {
          tokenImgList.push(dataUrl)
          var img = document.createElement("img")
          img.src = dataUrl
          img.addEventListener("click", function () {
            selectNFT(dataUrl)
          })
          document.getElementById("modal-content").append(img)
        })
      })
      .catch((error) => {
        console.log("error:", error)
      })
  })
}
function selectNFT(dataUrl) {
  sessionStorage.setItem("dataUrl", dataUrl)
  document.getElementById("exampleModal").style.display = "none"
  handleRendering()
}

function openMintModel() {
  document.getElementById("exampleModal").style.display = "none"
  document.getElementById("mintModal").style.display = "block"
}

function closeMintModel() {
  document.getElementById("exampleModal").style.display = "none"
  document.getElementById("mintModal").style.display = "none"
}
async function onMint() {
  let amount = document.getElementById("mintAmount").value
  console.log("amount:", amount)
  let NFTInstance = new wab3Object.eth.Contract(NFTABI, NFTAddress)
  let price = await NFTInstance.methods.nftPrice().call()
  let value = Number(price) * Number(amount)
  NFTInstance.methods
    .mint(amount)
    .send({
      from: metaMaskAddress,
      value: value,
    })
    .on("transactionHash", (hash) => {
      console.log("Transaction Hash: ", hash)
      notify("Transaction sent to network!")
    })
    .on("receipt", async (receipt) => {
      console.log("Receipt: ", receipt)
      notify("Minted Successfully!")
    })
    .on("error", (error, receipt) => {
      notify("Transaction failed!")
      console.log("Error receipt: ", error, receipt)
    })
}
function humanized(number, fix) {
  return Number(number.toString() / 1e9).toFixed(number == 0 ? 3 : fix)
}

function addrTruncation(addr) {
  return addr.slice(0, 6) + "…" + addr.slice(addr.length - 4, addr.length)
}

function notify(msg) {
  Toastify({
    text: msg,
    duration: 3000,
    gravity: "bottom",
    position: "right",
  }).showToast()
}

function imagetoBase64(url, callback) {
  let xhRequest = new XMLHttpRequest()
  xhRequest.onload = function () {
    let reader = new FileReader()
    reader.onloadend = function () {
      callback(reader.result)
    }
    reader.readAsDataURL(xhRequest.response)
  }
  xhRequest.open("GET", url)
  xhRequest.responseType = "blob"
  xhRequest.send()
}

function handleRendering() {
  let dataUrl = sessionStorage.getItem("dataUrl")
  let ele
  switch (window.location.pathname) {
    case "/page-1.html":
      ele = document.getElementsByClassName("page2NFT")[0]
      ele.src = dataUrl
      break
    case "/page-2.html":
      ele = document.getElementsByClassName("bg-shelf-img-pg2")[0]
      ele.src = dataUrl
      ele.srcset = dataUrl
      ele.style.rotate = "90deg"
      break
    case "/page-3.html":
      ele = document.getElementsByClassName("page-3-nft")[0]
      ele.src = dataUrl
      break
    case "/page-4.html":
      ele = document.getElementsByClassName("page-4-nft")[0]
      ele.src = dataUrl
      ele.srcset = dataUrl
      break
    case "/page-5.html":
      ele = document.getElementsByClassName("page-5-nft")[0]
      ele.src = dataUrl
      ele.srcset = dataUrl
      break
    case "/page-6.html":
      ele = document.getElementsByClassName("page-6-nft")[0]
      ele.src = dataUrl
      ele.srcset = dataUrl
      break
    case "/page-7.html":
      ele = document.getElementsByClassName("page-7-nft")[0]
      ele.src = dataUrl
      ele.srcset = dataUrl
      break
    case "/page-8.html":
      ele = document.getElementsByClassName("page-8-nft")[0]
      ele.src = dataUrl
      ele.srcset = dataUrl
      break
    case "/page-9.html":
      ele = document.getElementsByClassName("page-9-nft")[0]
      ele.src = dataUrl
      ele.srcset = dataUrl
      break
  }
}
