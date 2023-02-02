const email = {
  send: async function (
    template: string,
    to: string,
    data?: { [key: string]: any }
  ) {
    // Uncomment to test throwing errors
    // throw new Error("Email API: 500 Server Error");

    return {
      sent: true,
      template,
    };
  },
};

export default email;
