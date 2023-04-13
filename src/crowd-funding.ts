import { Address, BigInt } from '@graphprotocol/graph-ts';
import {
  Bid as BidEvent,
  CampaignLog as CampaignLogEvent,
} from "../generated/CrowdFunding/CrowdFunding";
import { Bid, Campaign } from "../generated/schema";

export function handleBid(event: BidEvent): void {
    let bid = new Bid(event.params.campaignID.toString());
    bid.funder = event.params.funder as Address;
    bid.amount = event.params.amount as BigInt;
    bid.save()
}

export function handleCampaignLog(event: CampaignLogEvent): void {
  let campaign = Campaign.load(event.params.campaignID.toString());

  if (campaign == null) {
    campaign = new Campaign(event.params.campaignID.toString());
    campaign.receiver = event.params.receiver as Address;
    campaign.goal = event.params.goal as BigInt;
    campaign.save()
  }
}
