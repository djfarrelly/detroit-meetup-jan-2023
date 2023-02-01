const email = {
  send: async function (
    template: string,
    to: string,
    data?: { [key: string]: any }
  ) {
    return {
      sent: true,
      template,
    };
  },
};

export default email;
