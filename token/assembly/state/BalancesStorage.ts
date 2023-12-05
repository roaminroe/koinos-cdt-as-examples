import { Storage } from '@koinos/sdk-as';
import { token } from '../proto/token';
import { SpaceIds } from './SpaceIds';

export class BalancesStorage extends Storage.Map<Uint8Array, token.uint64_object> {
  constructor(contractId: Uint8Array) {
    super(
      contractId, 
      SpaceIds.balances, 
      token.uint64_object.decode, 
      token.uint64_object.encode,
      // default balance is 0
      () => new token.uint64_object(0)
    );
  }
}