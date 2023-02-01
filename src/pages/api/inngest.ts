import { serve } from "inngest/next";

import { inngest } from "@/inngest/client";
import sendWelcomeEmail from "@/inngest/sendWelcomeEmail";
import onboardingDripCampaign from "@/inngest/onboardingDripCampaign";
import dynamicDripCampaign from "@/inngest/dynamicDripCampaign";
import runAuction from "@/inngest/runAuction";
import runAuctionWorks from "@/inngest/runAuction.complete";

export default serve(inngest, [
  sendWelcomeEmail,
  // onboardingDripCampaign,
  // dynamicDripCampaign,
  // runAuction,
  // runAuctionWorks, // ⬅️ Use this if your live coding sucks
]);
