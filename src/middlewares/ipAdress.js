import ip from 'ip'

export default (req, res, next) => {
  req.body.ip = ip.address()
  next();
}
