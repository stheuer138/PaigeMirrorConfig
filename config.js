/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information how you can configurate this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	address: "localhost", // Address to listen on, can be:
	                      // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
	                      // - another specific IPv4/6 to listen on a specific interface
	                      // - "", "0.0.0.0", "::" to listen on any interface
	                      // Default, when address config is left out, is "localhost"
	port: 8080,
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], // Set [] to allow all IP addresses
	                                                       // or add a specific IPv4 of 192.168.1.5 :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
	                                                       // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	language: "en",
	timeFormat: 24,
	units: "metric",

	modules: [
		{
			module: "alert",
		},
		{ module: "MMM-awesome-alexa",
  position: "bottom_bar",
  config:
   { wakeWord: "Alexa",
     clientId:
      "amzn1.application-oa2-client.252a0c663a324a7aa98dc935821d78b4",
     clientSecret:
      "906931e746490566b55920b7c69cc6ca1aa18274e416bcba0ff763e776710c6b",
     deviceId: "Sam_MM_Alexa",
     refreshToken:
     "Atzr|IwEBIBS93NBgY6gZI_gVKK-XMDHfgohK_TuI-HmehR6BsnDkOjtP8HHxxE_41QpmOzWTdSROfyY17wIGkJnW8uf_Artkft2UnyVZ0hhxm1rky8H5_uYP_9InnB-UAZrCF0xJLqo6pV5j5uOjYYUSIwzHC-qTnkLZBbItr3_JQAm4fk_l2FktUEYmu9kwjEYNod76GTWu_pKEOG_UZkE0Ta_69EICD_WOXYdoyHVS-VDQooU-CNp6MAMd0h_i_nuAU6wBGZbgKVaWmvkvh2MqMvO2NJcvhNquSFOuSkJoDhm3UpUo0x1mWKk-JIKEjDo9gIlAbWZma35QuKKSz1fXNaRwL_-RE1OihXkP8t9lmZGW75WVkpNgfcrW20ZGVjZYNg4-yNyCRKUi6SzwoDfO8myh27ipyApJ8Fsk53hZp5aNn5YpaDnZgTy_VgF9Hx8kj-THp88",
     lite: false,
     isSpeechVisualizationEnabled: false } },

		{
			module: "MMM-GooglePhotos",
			position: "top_right",
			config: {
			  albumId: ["AJRpkTl-yYwpxe0B3qeLH57gU3hHFefsJCLWntp0FjNKtAF-FyU1ca3KOy62NN03OTGzQtN3UIDC"],
			  refreshInterval: 1000 * 60,
			  scanInterval: 1000 * 60 * 10,
			 
			  sort: "time",
			  showWidth: "800px",
			  showHeight "600px",
		     	  originalWidthPx: 800,
			  originalHeightPx: 600,
			  opacity: 1,
			  mode: "hybrid",
			}
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left"
		},
		{
			module: "calendar",
			header: "US Holidays",
			position: "top_left",
			config: {
				calendars: [
					{
						symbol: "calendar-check",
						url: "webcal://www.calendarlabs.com/ical-calendar/ics/76/US_Holidays.ics"					}
				]
			}
		},
		{
			module: "compliments",
			position: "lower_third"
		},
		{
			module: "currentweather",
			position: "top_right",
			config: {
				location: "New York",
				locationID: "",  //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				appid: "YOUR_OPENWEATHER_API_KEY"
			}
		},
		{
			module: "weatherforecast",
			position: "top_right",
			header: "Weather Forecast",
			config: {
				location: "New York",
				locationID: "5128581",  //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				appid: "YOUR_OPENWEATHER_API_KEY"
			}
		},
		{
			module: "newsfeed",
			position: "bottom_bar",
			config: {
				feeds: [
					{
						title: "New York Times",
						url: "http://www.nytimes.com/services/xml/rss/nyt/HomePage.xml"
					}
				],
				showSourceTitle: true,
				showPublishDate: true,
				broadcastNewsFeeds: true,
				broadcastNewsUpdates: true
			}
		},
	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
