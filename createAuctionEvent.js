const dayjs = require("dayjs");
const start = dayjs(new Date()).add(30, "seconds");
const end = dayjs(new Date()).add(60, "seconds");

console.log(`
Now: ${dayjs().toISOString()}
Start: ${start.toISOString()}
End: ${end.toISOString()}
`);

console.log(
  JSON.stringify(
    {
      name: "app/auction.created",
      data: {
        user_id: "123456789",
        auction_id: "01GR5C2N87RBE28DZ8QEKNR6N4",
        start_time: start.valueOf(),
        end_time: end.valueOf(),
      },
    },
    null,
    2
  )
);
