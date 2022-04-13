import { authority, chain, System, Protobuf } from "koinos-as-sdk";
import { wallet } from "./proto/wallet";

const VARS_SPACE_ID = 0;
const AUTHORITIES_SPACE_ID = 1;
const PROTECTED_CONTRACTS_SPACE_ID = 2;

const AUTHORITY_NAMES_KEY = new Uint8Array(1);
const PROTECTED_KEYS_KEY = new Uint8Array(1);
AUTHORITY_NAMES_KEY[0] = 0;
PROTECTED_KEYS_KEY[0] = 1;

export class State {
  contractId: Uint8Array;
  varsSpace: chain.object_space;
  authoritiesSpace: chain.object_space;
  protectedContractsSpace: chain.object_space;

  constructor(contractId: Uint8Array) {
    this.contractId = contractId;

    this.varsSpace = new chain.object_space(false, contractId, VARS_SPACE_ID);
    this.authoritiesSpace = new chain.object_space(false, contractId, AUTHORITIES_SPACE_ID);
    this.protectedContractsSpace = new chain.object_space(false, contractId, PROTECTED_CONTRACTS_SPACE_ID);
  }

  setAuthority(name: string, authority: wallet.authority): void {
    System.putObject(this.authoritiesSpace, name, authority, wallet.authority.encode);
  }

  getAuthority(name: string): wallet.authority | null {
    const authority = System.getObject<String, wallet.authority>(this.authoritiesSpace, name, wallet.authority.decode);
    return authority;
  }

  setAuthorityNames(authNames: wallet.authority_names): void {
    System.putObject(this.varsSpace, AUTHORITY_NAMES_KEY, authNames, wallet.authority_names.encode);
  }

  getAuthorityNames(): wallet.authority_names {
    const authNames = System.getObject<Uint8Array, wallet.authority_names>(this.varsSpace, AUTHORITY_NAMES_KEY, wallet.authority_names.decode);
    return authNames ? authNames : new wallet.authority_names();
  }

  setProtection(key: Uint8Array, authority: wallet.authority_contract): void {
    //const key = Protobuf.encode(protectedContract, wallet.protected_contract.encode);
    System.putObject(this.protectedContractsSpace, key, authority, wallet.authority_contract.encode);
  }

  getProtection(key: Uint8Array): wallet.authority_contract | null {
    return System.getObject<Uint8Array, wallet.authority_contract>(this.protectedContractsSpace, key, wallet.authority_contract.decode);
  }

  getProtectionByTarget(call: authority.call_target, remainingEntryPoints: bool): wallet.authority_contract | null {
    const protectedContract = new wallet.protected_contract(call.contract_id, call.entry_point, remainingEntryPoints);
    const key = Protobuf.encode(protectedContract, wallet.protected_contract.encode);
    const authority = System.getObject<Uint8Array, wallet.authority_contract>(this.protectedContractsSpace, key, wallet.authority_contract.decode);
    return authority;
  }
  
  setProtectedContractKeys(keys: wallet.key_array): void {
    System.putObject(this.varsSpace, PROTECTED_KEYS_KEY, keys, wallet.key_array.encode);
  }

  getProtectedContractKeys(): wallet.key_array {
    const keys = System.getObject<Uint8Array, wallet.key_array>(this.varsSpace, PROTECTED_KEYS_KEY, wallet.key_array.decode);
    return keys ? keys : new wallet.key_array();
  }
}