## YELP API

Client ID
_ztTK6Y6ePansNfuFqXvNA

API Key
3FxorwFkiispOQxQL72PTEX5wxO2oKMf6YuMHEPhNKpuaiUPIwF6-TchJlW3Q_9kLzM12ZJ1vn4XuY4Ib890nhB_Losa73PLo49J3g4qTmkj67o-Z7XqI6gRDXx2ZHYx


## RAPID API - MOVIES AND SHOWS

node.js(axios)

const settings = {
	async: true,
	crossDomain: true,
	url: 'https://moviesdatabase.p.rapidapi.com/titles/series/%7BseriesId%7D',
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '976181ede8msh8db849df77064aep11246cjsn64c186ae1e1a',
		'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
});


APP NAME: Matt Rostad

APPID: Y9X4HG-X95U8E2PJ6

USAGE TYPE: Personal/Non-commercial Only

