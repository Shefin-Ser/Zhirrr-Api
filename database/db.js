var __path = process.cwd(),
      monk = require('monk'),
     { color } = require(__path + '/lib/color.js')

// Connection URL
var url = 'https://zahirr-web.herokuapp.com';
try {
if(url == 'https://zahirr-web.herokuapp.com') throw console.log(color('Check database configuration, var url belum diisi','red'));
} catch (e) {
	return;
	}
var db = monk(url);

db.then(() => {
  console.log(color('Connected correctly to server, ShefinKl14','green'))
})
.catch ((e) => {
	console.log(color('Error : '+ e +'\n\nFailed to connect database, \nCheck the database configuration whether the Connection URL is correct',','red'))
	})


module.exports = db
