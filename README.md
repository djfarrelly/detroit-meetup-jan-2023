# Inngest - Detroit Meetup - Jan 2023

> ⚠️ This is using the Inngest SDK beta version 1.x and a pre-release version of the Inngest dev server ([pull request](https://github.com/inngest/inngest/pull/351)) which should be merged and live by ~Feb 7, 2023 ⚠️

```bash
yarn dev
```

```bash
npx inngest-cli@latest dev
```

## Test events

```json
{
  "name": "app/user.signup",
  "data": { "email": "test@inngest.com", "user_id": "123456789" }
}
{
  "name": "app/auction.created",
  "data": { "user_id": "123456789", "auction_id": "01GR5C2N87RBE28DZ8QEKNR6N4" }
}
```
