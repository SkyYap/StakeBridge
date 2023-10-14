import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import { ethers } from "ethers";

export default function ButtonAppBar() {
  const [walletConnection, setWalletConnection] = React.useState();
  const connectToWallet = async () => {
    console.log("Connecting to wallet");
    console.log(walletConnection);

    if (window.ethereum) {
      // Check if the window.Ethereum object exists
      // connectivity to web3 app
      const provider = new ethers.BrowserProvider(window.ethereum);
      const address = await provider.getSigner();
      console.log(address.address);
      setWalletConnection(address.address);
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ backgroundColor: "#FFFFFF" }}>
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, color: "#2563eB" }}
          >
            Web3Xplorer-CrossChain
          </Typography>
          {walletConnection ? (
            <Typography variant="body1" sx={{ color: "#2563eB" }}>
              Your Contract Address: {walletConnection}
            </Typography>
          ) : (
            <Button
              color="inherit"
              onClick={() => connectToWallet()}
              sx={{ color: "#ffffff", backgroundColor: "#2563eB", borderRadius: "1.5rem" }}
            >
              Connect Wallet
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
