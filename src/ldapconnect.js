
var LdapAuth = require('ldapauth-fork');

var ldap = new LdapAuth({
  url: "ldaps://adapps.cable.comcast.com:3269",
  bindDn: "DC=comcast,DC=com",
  searchFilter: "(&(objectclass=user)(displayName=TestUser)(attribute=something))",
  reconnect: true
});
// var rejectBasicAuth = function(res) {
//   res.statusCode = 401;
//   res.setHeader('WWW-Authenticate', 'Basic realm="Example"');
//   res.end('Access denied');
// }

var basicAuthMiddleware = function(req, res, next) {
//   var credentials = basicAuth(req);
//   if (!credentials) {
//     return rejectBasicAuth(res);
//   }

  ldap.authenticate("hdesai200", "Comcast123", function(err, user) {
    if (err) {
      return rejectBasicAuth(res);
    }
    console.log("success");
  //  req.user = user;
   // next();
  });
};