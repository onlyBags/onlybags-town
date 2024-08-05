import { defaultWagmiConfig } from "@web3modal/wagmi/react/config";
import { QueryClient } from "@tanstack/react-query";
import { getChain } from "./eth";
import { Chain } from "viem";

export const walletConnectProjectId = "d238494c50702c4a3c04f610fdd33aef";
const chains: readonly [Chain, ...Chain[]] = [getChain()];

export const queryClient = new QueryClient();

const metadata = {
  name: "Bag Worlds",
  description: "Bag Worlds",
  url: "https://bagworlds.com",
  icons: ["https://bagworlds.com/logo.png"],
};

export const wagmiConfig = defaultWagmiConfig({
  chains,
  projectId: walletConnectProjectId,
  metadata,
});

export { chains };
