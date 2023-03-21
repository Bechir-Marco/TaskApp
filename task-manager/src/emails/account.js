const mailgun = require('mailgun-js');
const mailgun = require('mailgun-js');
const DOMAIN = 'sandboxd1778f2f58b345ed89d88dee527afbdc.mailgun.org';
const mg = mailgun({ apiKey: api_key, domain: DOMAIN });
const data = {
  from: 'Excited User <bechir.marko@gmail.com>',
  to: 'bechir.marko@gmail.com, YOU@YOUR_DOMAIN_NAME',
  subject: 'Hello',
  text: 'Testing some Mailgun awesomness!',
};
mg.messages().send(data, function (error, body) {
  console.log(body);
});
