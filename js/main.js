/*
	Published Lists
	By Harold Kim, @hcokim
	Frameworks: jQuery, Greensock
*/

var App = {};
App.lists = [];
App.list_length = 0

$(window).load(function(){
	
	fxn_gather_data();
	fxn_display_lists();
	fxn_check_hash();
	
	ixn_lists();
	ixn_items();
	ixn_menu();
	ixn_body();
	ixn_dragger();
	
});

function fxn_gather_data(){
	
	var lists = [
		{
			"name": "#abgt guestmixes",
			"hash": "abgt",
			"description": "My favorite guest mixes from Above & Beyond's Group Therapy podcast." +
				" They're always the last half hour, so skip ahead to 1:30.",
			"items": [
				{ "title": "024 - Andrew Bayer", "link": "http://goo.gl/0iZ9U7" },
				{ "title": "040 - Beckwith", "link": "http://goo.gl/rRiEkO" },
				{ "title": "051 - Mat Zo", "link": "http://goo.gl/4MWeHR" },
				{ "title": "057 - Juventa", "link": "http://goo.gl/q4Uasz" },
				{ "title": "063 - Lane 8", "link": "http://goo.gl/aombwF" }
			]
		},
		{
			"name": "adventure bucketlist",
			"hash": "adventure",
			"description": "Adventures to take on and conquer.",
			"items": [
				{ "title": "Mt. Kilimanjaro, Tanzania, Africa", "done": true },
				{ "title": "Mt. Everest Base Camp, Nepal", "link": "http://goo.gl/EcQ6kc" },
				{ "title": "Northern Lights and Dog Sledding, Sweden", "link": "http://goo.gl/FTauzG" },
				{ "title": "Bali and Mt. Lombok, Indonesia" },
				{ "title": "Hamilton Island & The Great Barrier Reef, Australia" },
				{ "title": "OFFF Design Festival, Barcelona" },
				{ "title": "Aoraki and Mt. Cook, New Zealand", "link": "http://goo.gl/jn2xqI" },
				{ "title": "Kumano Kodo Pilgrimage Walk, Japan", "link": "http://goo.gl/p2j7sV" },
				{ "title": "Volcano Hikes in Guatemala, Colombia" }
			]
		},
		{
			"name": "anjuna releases",
			"hash": "anjuna",
			"description": "A collection of my favorite releases on Anjunabeats and Anjunadeep.",
			"items": [
				{ "title": "2014. The One, Lane 8 feat. Patrick Baker", "link": "http://goo.gl/htoub0" },
				{ "title": "2014. Once Lydian, Andrew Bayer", "link": "http://goo.gl/mF1lY1" },
				{ "title": "2013. Only For You, Mat Zo feat. Rachel K Collier", "link": "http://goo.gl/tv6bfc" },
				{ "title": "2013. Back to Love, Beckwith feat. Catherine Porter", "link": "http://goo.gl/HI7W9L" },
				{ "title": "2013. Hey Now (Arty Remix), London Grammar" , "link": "http://goo.gl/eK8kvB" },
				{ "title": "2013. Wayfarer / Iris, Audien", "link": "http://goo.gl/EuWpR3" },
				{ "title": "2012. The Bipolar EP, Mat Zo", "link": 'http://goo.gl/i0NKTC' },
				{ "title": "2011. Rebound, Mat Zo & Arty", "link": "http://goo.gl/7oqn1" },
				{ "title": "2010. To the Six, Boom Jinx & Andrew Bayer", "link": "http://goo.gl/7Cma81" }
			]
		},
		{
			"name": "reading list",
			"hash": "reading",
			"description": "Readin's about design, technology, productivity, and process.",
			"items": [
				{ "title": "The Checklist Manifesto. Atul Gawande", "link": "http://goo.gl/lEN5cD", "done": true },
				{ "title": "The Circle. Dave Eggers", "link": "http://goo.gl/tPwJTQ" },
				{ "title": "Principles. Ray Dalio", "link": "http://goo.gl/RJsOH" },
				{ "title": "Quiet, The Power of Introverts. Susan Cain", "link": "http://goo.gl/V3I9kz" },
				{ "title": "Papillon. Henri Charriere", "link": "http://goo.gl/3fwqQn" },
				{ "title": "Information Design Workbook. Kim Baer", "link": "http://goo.gl/GstZ6E" },
				{ "title": "Thinking, Fast and Slow. Daniel Kahneman", "link": "http://goo.gl/1hgoUS" }
			]
		},
		{
			"name": "sydney food",
			"hash": "sydfood",
			"description": "A few of my favorite places to drink and eat in Sydney. " +
				"Some have good food, some have great vibes, most have both.",
			"items": [
				{ "title": "Rockpool Bar & Grill, Sydney CBD", "link": "http://goo.gl/Cu3gbq" },
				{ "title": "Thai Pothong, Newtown", "link": "http://goo.gl/eBDbHE" },
				{ "title": "Different Drummer Bar & Tapas, Glebe", "link": "http://goo.gl/an1f30" },
				{ "title": "Earl's Juke Joint, Newtown - great, cheap drinks", "link": "http://goo.gl/4tpgiR" },
				{ "title": "Ms. G's (Asian Fusion), Potts Point / King's Cross", "link": "http://goo.gl/McPx12" },
				{ "title": "Messina Gelato, Darlinghurst or The Star Pyrmont" },
				{ "title": "Glenmore Rooftop Hotel Bar, The Rocks - great post-work drinks" },
				{ "title": "4 Pines Brewery, Manly Beach - best after a long beach day", "link": "http://goo.gl/Lrm8V" },
				{ "title": "Hurricane's Grill, Bondi or Pyrmont - touristy, but dem ribs..", "link": "http://goo.gl/PN518k" },
				{ "title": "Eau de Vie, Darlinghurst - speakeasy with theatrical drinks", "link": "http://goo.gl/Kq34q6" }
			]
			
		},
		{
			"name": "+ create new list",
			"hash": "create",
			"description": "Functionality not yet implemented",
			"items": [
				{ "title": "Add your first item here", "disabled": true }
			]
		}
	]
	
	App.lists = lists
	App.list_length = lists.length
	
}
function fxn_populate_list_items(index, delay){
	
	var detail = App.lists[index],
		name = App.lists[index].name,
		items = App.lists[index].items,
		item_count = items.length,
		description = App.lists[index].description
	
	// set delay
	if ( delay == null )
		delay = 100

	// ========================
	
	// create a timeline of animations
	var timeline = new TimelineMax()
	
	// 1. fade out existing line items
	// 2. replace items with new content
	// 3. animate in the new items
	
	var box_items = $('#box_items'),
		old_items = $('#items > div'),
		old_items_count = old_items.length,
		box_contents = $('.header, #notes, #items > div', box_items ),
		box_content_count = box_contents.length
		
	// if existing items exist, animate them out	
	if ( old_items_count !== 0 ){
		
		delay = 500
		
		for ( var i = 0; i < box_content_count; i++ ){
		
			TweenMax.to( box_contents[i], 0.2, {
				autoAlpha: 0,
				delay: i * 0.015
			})
		}
	}
	
	setTimeout(function(){
		
		// clear out old items
		$('#items').empty()
		
		// set scroll position to top
		$('#box_items').scrollTop(0)
		
		$('#box_items .header').text( name )
		$('#notes').text( description )
		
		TweenMax.to( box_contents, 0.4, {
			autoAlpha: 1,
			x: 0, z: 0,
			ease: Expo.easeOut,
			startAt: { x: 60, z: 1, autoAlpha: 0 }
		})
		
		for ( var i = 0; i < item_count; i++ ){
			
			// create new items
			var item = $('<div><p>' + items[i].title + '</p></div>')
			fxn_review_add_ons(item, items[i])
			$('#items').append(item)
			
			TweenMax.to( item, 0.4, {
				x: 0, z: 0,
				autoAlpha: 1,
				delay: i * 0.03,
				ease: Expo.easeOut,
				startAt: { x: 60, z: 1, autoAlpha: 0 }
			})
		}
		
	}, delay)
	
}
function fxn_review_add_ons( item, detail ){
	
	var p = $('p', item)
	
	if ( detail.done )
		item.addClass('done')
		
	if ( detail.link ){
		var link = $('<a href="' + detail.link + '">#&rarr;</a>')
		item.prepend(link)	
	}
	
	if ( detail.disabled )
		item.addClass('disabled')
	
}
function fxn_display_lists(){
	
	var lists = App.lists,
		list_length = lists.length
	
	for ( var i = 0; i < list_length; i++ ){
		
		var list = $('<div class="list"></div>')
		list.text( lists[i].name )
		list.data('info', lists[i])
		
		$('#lists').append(list)
		
	}
	
	// fxn_populate_list_items(0)
	
	
}
function fxn_is_mobile(){
	
	var win_width = $(window).width()
	
	if ( win_width < 601 )
		return true
	else
		return false
	
}
function fxn_check_hash(){
	
	var hash = window.location.hash.substr(1)
	
	if ( hash ){
		
		var lists = $('#lists > .list'),
			list_count = lists.length
		
		for ( var i = 0; i < list_count; i++ ){
			
			var info = $(lists[i]).data('info'),
				index = $(lists[i]).index()
				
			if ( info.hash == hash ){
				
				$('#lists .active').removeClass('active')
				$(lists[i]).addClass('active')
				fxn_populate_list_items(i, 400)
				
				if ( fxn_is_mobile() ){
					TweenMax.to( $('#box_lists'), 0.7, {
						ease: Expo.easeIn,
						delay: 0.5,
						z: 1, y: -1 * $(window).height()
					})
				}
			}
				
		}
	}
}
function fxn_prevent_default(evnt){
	
	evnt.preventDefault()
	evnt.stopPropagation()
	evnt.gesture.preventDefault()
	evnt.gesture.stopPropagation()

}

function ixn_lists(){
	
	$('#lists').hammer().on('tap', 'div', function(ev){
		
		$('#lists .active').removeClass('active')
		$(this).addClass('active')
		
		var index = $(this).index(),
			hash = $(this).data('info').hash
			
		// change window hash
		window.location.hash = hash
		
		// populate list with new items
		fxn_populate_list_items( index )
		
		// if on mobile, slide away menu
		if ( fxn_is_mobile() ){
			TweenMax.to( $('#box_lists'), 0.6, {
				ease: Expo.easeOut,
				z: 1,
				y: -1 * $(window).height()
			})
		}
		
		ev.stopPropagation()
	})
	
}
function ixn_menu(){
	
	$('#menu').hammer().on('tap', function(ev){
		
		TweenMax.to( $('#box_lists'), 0.6, {
			ease: Expo.easeOut,
			z: 1,
			y: 0
		})
		
		ev.stopPropagation()
	})
	
	$('#menu').hammer().on('touch', function(evs){
		
		var _drag = function(evd){
			
			if ( Math.abs( evd.gesture.deltaY ) > 8 ){
				
				fxn_prevent_default(evd)
				
				var window_pos = -1 * $(window).height()
		
				TweenLite.to( $('#box_lists'), 0, {
					y: evd.gesture.deltaY + window_pos, 
					z: 1
				})
			}
		}
		
		var _release = function(evr){
			
			$('body').hammer().off()
			
			var destination = -1 * $(window).height(),
				ease = 'Expo.easeOut',
				duration = 0.3,
				delta = Math.abs(evr.gesture.deltaY)
			
			if ( delta < 10 ){
				
				// do nothing
				
			} else {
				
				if ( delta > 110 ){
					destination = 0
					ease = 'Expo.easeOut'
					duration = 0.4
				}
					
				TweenLite.to( $('#box_lists'), duration, {
					y: destination,
					ease: ease
				})
			}
			

		}
		
		$('body').hammer().on('drag', _drag)
		$('body').hammer().on('release', _release)
		
	})
	
}
function ixn_dragger(){
	
	$('#dragger').hammer().on('tap', function(evs){
		
		var box = $('#box_lists')
		
		TweenLite.to( box, 0.2, {
			y: -60, z: 1,
			ease: Expo.easeOut,
			onComplete: function(){
				TweenLite.to( box, 0.8, {
					y: 0, z: 0,
					ease: Bounce.easeOut
				})
			}
		})
		

	
	})
	
	$('#dragger').hammer().on('touch', function(evs){
		
		var _drag = function(evd){
			
			if ( Math.abs( evd.gesture.deltaY ) > 8 ){
				
				fxn_prevent_default(evd)
		
				TweenLite.to( $('#box_lists'), 0, {
					y: evd.gesture.deltaY, z: 1
				})
			}
		}
		
		var _release = function(evr){
			
			$('body').hammer().off()
			
			var destination = -1 * $(window).height(),
				ease = 'Expo.easeOut',
				duration = 0.3,
				delta = Math.abs(evr.gesture.deltaY)
			
			if ( delta < 10 ){
				
				// do nothing
				
			} else {
				
				if ( delta > 10 && delta < 110 ){
					destination = 0
					ease = 'Bounce.easeOut'
					duration = 0.8
				}
					
				TweenLite.to( $('#box_lists'), duration, {
					y: destination,
					ease: ease
				})
			}
			

		}
		
		$('body').hammer().on('drag', _drag)
		$('body').hammer().on('release', _release)
		
	})
	
}
function ixn_body(){
	
	$('body').hammer().on('drag', function(evs){
		evs.preventDefault()
		evs.stopPropagation()
	})
	
}