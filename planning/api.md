## YELP API

Client ID
_ztTK6Y6ePansNfuFqXvNA

API Key
3FxorwFkiispOQxQL72PTEX5wxO2oKMf6YuMHEPhNKpuaiUPIwF6-TchJlW3Q_9kLzM12ZJ1vn4XuY4Ib890nhB_Losa73PLo49J3g4qTmkj67o-Z7XqI6gRDXx2ZHYx


## RAPID API - MOVIES AND SHOWS

 mode: "cors",

JS (fetch)

const url = 'https://moviesdatabase.p.rapidapi.com/titles/series/%7BseriesId%7D';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '976181ede8msh8db849df77064aep11246cjsn64c186ae1e1a',
		'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}




APP NAME: Matt Rostad

APPID: Y9X4HG-X95U8E2PJ6

USAGE TYPE: Personal/Non-commercial Only

