/*
 * Starts an auction for all users to bid on
 **/
export async function openAuction(id: string): Promise<{ status: string }> {
  return Promise.resolve({ status: "auction open for bidding!" });
}
/*
 * Ends an auction for all users to bid on
 **/
export async function closeAuction(id: string): Promise<{ status: string }> {
  return Promise.resolve({ status: "auction closed!" });
}

/*
 * Gets winning bid
 **/
export async function getAuctionWinningBid(
  id: string
): Promise<{ user_id: string; amount: number }> {
  return Promise.resolve({
    user_id: "8439845498",
    amount: 300,
  });
}
