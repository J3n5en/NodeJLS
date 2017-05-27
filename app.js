const Koa = require('koa');
const sign = require('./signer');
const router = require('koa-router')();
const app = new Koa();
app
  .use(router.routes())
  .use(router.allowedMethods());

const data = [
  {
    url: '/rpc/ping.action',
    data: (query) => {
      return `<PingResponse><message></message><responseCode>OK</responseCode>`+
      `<salt>${query.salt}</salt></PingResponse>`;
    },
  }, {
   url: '/rpc/obtainTicket.action',
   data: (query) => {
    return `<ObtainTicketResponse><message></message><prolongationPeriod>`+
        `607875500</prolongationPeriod><responseCode>OK</responseCode><salt>`+
        `${query.salt}</salt><ticketId>1</ticketId><ticketProperties>licensee=`+
        `${query.name || query.userName}\tlicenseType=0\t`+
        `</ticketProperties></ObtainTicketResponse>`;
  },
  },
];





for (let i = 0; i < data.length; i++) {
  router.all([data[i].url, `/:uname${data[i].url}`], (ctx) => {
    let query = ctx.query;
    query.name = ctx.params.uname;
    renderData = data[i]['data'](query);
    ctx.body = `<!-- ${sign(renderData)} -->\n${renderData}`;
  });
}

router.all(['/rpc/releaseTicket.action', '/:uname/rpc/releaseTicket.action'],
(ctx) => {
  ctx.status = 301;
  ctx.body = 'Not ok';
});

app.listen(3000);
