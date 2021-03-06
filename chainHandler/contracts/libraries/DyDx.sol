// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

library Types {
  enum AssetDenomination {
    Wei,
    Par
  }

  enum AssetReference {
    Delta,
    Target
  }

  struct AssetAmount {
    bool sign;
    AssetDenomination denomination;
    AssetReference ref;
    uint256 value;
  }
}

library Account {
  struct Info {
    address owner;
    uint256 number;
  }
}

library Actions {
  enum ActionType {
    Deposit,
    Withdraw,
    Transfer,
    Buy,
    Sell,
    Trade,
    Liquidate,
    Vaporize,
    Call
  }

  struct ActionArgs {
    ActionType actionType;
    uint256 accountId;
    Types.AssetAmount amount;
    uint256 primaryMarketId;
    uint256 secondaryMarketId;
    address otherAddress;
    uint256 otherAccountId;
    bytes data;
  }
}
