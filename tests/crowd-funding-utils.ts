import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import { BidLog, CampaignLog } from "../generated/CrowdFunding/CrowdFunding"

export function createBidLogEvent(param0: BigInt): BidLog {
  let bidLogEvent = changetype<BidLog>(newMockEvent())

  bidLogEvent.parameters = new Array()

  bidLogEvent.parameters.push(
    new ethereum.EventParam("param0", ethereum.Value.fromUnsignedBigInt(param0))
  )

  return bidLogEvent
}

export function createCampaignLogEvent(
  param0: Address,
  param1: BigInt
): CampaignLog {
  let campaignLogEvent = changetype<CampaignLog>(newMockEvent())

  campaignLogEvent.parameters = new Array()

  campaignLogEvent.parameters.push(
    new ethereum.EventParam("param0", ethereum.Value.fromAddress(param0))
  )
  campaignLogEvent.parameters.push(
    new ethereum.EventParam("param1", ethereum.Value.fromUnsignedBigInt(param1))
  )

  return campaignLogEvent
}
