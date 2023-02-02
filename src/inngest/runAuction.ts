import { inngest } from "./client";
import {
  openAuction,
  closeAuction,
  getAuctionWinningBid,
} from "../lib/auctions";
import { getUser } from "../lib/users";
import email from "../lib/email";

/*
{
  "name": "app/auction.created",
  "data": {
    "user_id": "123456789",
    "auction_id": "01GR5C2N87RBE28DZ8QEKNR6N4",
    "start_time": 1675292400424, // Wed Feb 01 2023 18:00:00 GMT-0500
    "end_time": 1675292460424, // Wed Feb 01 2023 18:01:00 GMT-0500
  }
}
*/

export default inngest.createFunction(
  "Run auction",
  "app/auction.created",
  async ({ event, step }) => {
    await step.sleepUntil(new Date(event.data.start_time));

    await step.run("Start auction", async () => {
      return await openAuction(event.data.auction_id);
    });

    await step.sleepUntil(new Date(event.data.end_time));

    await step.run("End auction", async () => {
      return await closeAuction(event.data.auction_id);
    });

    await step.run("Send winning bid notification", async () => {
      const winningBid = await getAuctionWinningBid(event.data.auction_id);
      const user = await getUser(event.data.user_id);
      await email.send("auction_closed", user.email, { winningBid });
    });
  }
);
