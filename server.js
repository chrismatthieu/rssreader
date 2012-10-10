
// getting xml and convert to json object using xml-simple example
var http=require('http'), simplexml=require('xml-simple'), config= {host:'v01c3.com', path:'/rss', port:80}, body='';

http.get( config, function( res ) {
	res.addListener('end', function() {
		simplexml.parse(body, function(e, parsed) {
			// console.log(parsed.channel.item[0].pubDate);
			// console.log(parsed.channel.item[0].title);
			// console.log(parsed.channel.item[0].description);
			// console.log(JSON.stringify(parsed));

			// console.log(parsed.channel.item);

			for (var i = 0; i < parsed.channel.item.length; i++) {
				console.log(parsed.channel.item[i].pubDate);
				console.log(parsed.channel.item[i].title);
				console.log(parsed.channel.item[i].description);

			}

		});
	});
	res.setEncoding('utf8');
	res.on('data', function(d) {
		body+=d;
	});
});