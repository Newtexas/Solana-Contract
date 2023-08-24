import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { ContractMaker } from "../target/types/contract_maker";

describe("contract-maker", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.ContractMaker as Program<ContractMaker>;

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.methods.initialize().rpc();
    console.log("Your transaction signature", tx);
  });
});
