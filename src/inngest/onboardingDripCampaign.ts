import { inngest } from "./client";
import email from "../lib/email";

/*
{
  "name": "app/user.signup",
  "data": { "email": "test@inngest.com", "user_id": "123456789" }
}
*/

export default inngest.createFunction(
  "Onboarding drip campaign",
  "app/user.signup",
  async ({ event, step }) => {
    // Send an email saying thanks
    await step.run("Send welcome email", async () => {
      await email.send("welcome", event.data.email);
    });

    // Sleep for 3 days
    await step.sleep("10s");

    // Send them another email with info on how to get the most out of the product
    await step.run("Send activation email", async () => {
      await email.send("activation", event.data.email);
    });
  }
);
