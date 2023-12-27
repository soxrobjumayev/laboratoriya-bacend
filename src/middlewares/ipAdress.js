export default (req, res, next) => {

  const forwardedFor = req.headers['x-forwarded-for'];
  const clientIp = forwardedFor ? forwardedFor.split(',')[0] : req.connection.remoteAddress;

  console.log('Client IPv4 Address: $', { clientIp });
  req.body.ip = clientIp
  next();


}
