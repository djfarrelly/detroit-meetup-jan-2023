import { inngest } from "./client";
import email from "../lib/email";

/*
{
  "name": "app/user.signup",
  "data": { "email": "test@inngest.com", "user_id": "123456789" }
}
{
  "name": "app/auction.created",
  "data": { "user_id": "123456789", "auction_id": "01GR5C2N87RBE28DZ8QEKNR6N4" }
}
*/

export default inngest.createFunction(
  "Dynamic drip campaign",
  "app/user.signup",
  async ({ event, step }) => {
    // Send an email saying thanks
    await step.run("Send welcome email", async () => {
      return await email.send("welcome", event.data.email);
    });

    // Wait up to 3d for an event for an auction to be created by this same user
    const createdAuction = await step.waitForEvent("app/auction.created", {
      timeout: "3d",
      match: "data.user_id",
    });

    // createdAuction is `null` if it hasn't been received within 3 days
    if (!createdAuction) {
      // If the auction hasn't been created - let's send them an email with info
      await step.run("Send activation email", async () => {
        return await email.send("activation", event.data.email);
      });
    } else {
      // Otherwise send them a congrats email encouraging them
      await step.run("Send congrats email", async () => {
        return await email.send("congrats_first_auction", event.data.email);
      });
    }
  }
);
