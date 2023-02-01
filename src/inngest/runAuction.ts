import { inngest } from "./client";
import { openAuction, closeAuction } from "../lib/auctions";
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
    openAuction();
    closeAuction();
  }
);
