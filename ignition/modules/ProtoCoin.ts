import { ProtoCoin } from './../../typechain-types/ProtoCoin';
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";


const ProtoCoinModule = buildModule("ProtoCoin", (m) => {

  const protoCoin = m.contract("ProtoCoin")

  return { protoCoin };
});

export default ProtoCoinModule;
