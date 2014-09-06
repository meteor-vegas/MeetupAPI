var	list=["getCategories","getCheckins","postCheckin","getCities","getOpenEvents","getConcierge","getEvents","postEvent","getEventComments","postEventComment","postEventCommentFlag","getEventCommentLikes","getEventRatings","postEventRating","getEventAttendance","takeEventAttendance","getEverywhereComments","postEverywhereComment","getEverywhereCommunities","postEverywhereCommunity","getEverywhereFollows","getEverywhereFollowers","postEverywhereFollow","postEverywhereContainer","getEverywhereContainers","postEverywhereSeed","postEverywhereEvent","getEverywhereEvents","postEverywhereRsvp","getEverywhereRsvps","getEverywhereSeeds","getActivity","getGroups","getComments","getMembers","postMemberPhoto","postMessage","getOEMBed","getOEMBed","getPhotoComments","postPhotoComment","getPhotoAlbums","getPhoto","getPhotos","postPhotoAlbum","postPhoto","getProfiles","postProfiles","postRSVP","getRSVPs","getOpenVenues","getVenues","getTopics"], 
	MeetupMe = Meteor.require("meetup-api"),
	meetup = new MeetupMe("376915111a5224393a202e7e1d474031");
    AsyncMeetup = Async.wrap(meetup, list);
Meteor.methods({
		MeetupAPI : function(endpoint,param) {
			switch(endpoint){
			case "getOpenEvents":
					return AsyncMeetup.getOpenEvents(param);				
					break
			case "getMembers":
					return AsyncMeetup.getMembers(param);				
					break
			case "getGroups":
					return AsyncMeetup.getGroups(param);				
					break
			default:
				
			}
    	}
});
