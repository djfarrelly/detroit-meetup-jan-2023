import { inngest } from "./client";
import email from "../lib/email";

/*
{
  "name": "app/user.signup",
  "data": { "email": "test@inngest.com", "user_id": "123456789" }
}
*/

export default inngest.createFunction(
  "Send welcome email",
  "app/user.signup",
  async ({ event }) => {
    return await email.send("welcome", event.data.email);
  }
);
