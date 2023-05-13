import {
  Created as CreatedEvent,
  Transfer as TransferEvent,
} from '../generated/TBANFT/TBANFT';
import { Lenshub } from '../generated/TBANFT/Lenshub';
import { Created } from '../generated/schema';
import { Address } from '@graphprotocol/graph-ts';

export function handleCreated(event: CreatedEvent): void {
  let entity = new Created(event.params.tokenId.toString());

  const lenshub = Lenshub.bind(
    Address.fromString('0x60Ae865ee4C725cd04353b5AAb364553f56ceF82')
  );

  entity.accountAddress = event.params.accountAddress;
  entity.ownedBy = event.params.ownedBy;
  entity.tokenId = event.params.tokenId;
  entity.handle = event.params.handle;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  const profileId = lenshub.try_getProfileIdByHandle(event.params.handle);

  entity.profileId = profileId.value;

  entity.save();
}

export function handleTransfer(event: TransferEvent): void {
  let entity = Created.load(event.params.tokenId.toString());

  if (entity) {
    entity.ownedBy = event.params.to;
    entity.save();
  }
}
