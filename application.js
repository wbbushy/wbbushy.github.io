$(document).ready(bindEvents)

function bindEvents() {
  createWaypoints();
  $('#landing-nav-li').mouseover(landingHover);
  $('#landing-nav-li').mouseleave(landingHoverReverse);
  $('#profile-nav-li').mouseover(profileHover);
  $('#profile-nav-li').mouseleave(profileHoverReverse);
  $('#experience-nav-li').mouseover(experienceHover);
  $('#experience-nav-li').mouseleave(experienceHoverReverse);
  $('#projects-nav-li').mouseover(projectsHover);
  $('#projects-nav-li').mouseleave(projectsHoverReverse);
  $('#contact-nav-li').mouseover(contactHover);
  $('#contact-nav-li').mouseleave(contactHoverReverse);
};



function landingHover() {
  $('#landing-nav').css({'color': '#2f4f4f'})
  // $('#landing-nav-li').css({'background-color': 'white'})
};

function landingHoverReverse() {
  $('#landing-nav').css({'color': 'white'})
  // $('#landing-nav-li').css({'background-color': 'black'})
};



function profileHover() {
  $('#profile-nav').css({'color': '#2f4f4f'})
  // $('#profile-nav-li').css({'background-color': 'white'})
}

function profileHoverReverse() {
  $('#profile-nav').css({'color': 'white'})
  // $('#profile-nav-li').css({'background-color': 'black'})
}



function experienceHover() {
  $('#experience-nav').css({'color': '#2f4f4f'})
  // $('#experience-nav-li').css({'background-color': 'white'})
}

function experienceHoverReverse() {
  $('#experience-nav').css({'color': 'white'})
  // $('#experience-nav-li').css({'background-color': 'black'})
}



function projectsHover() {
  $('#projects-nav').css({'color': '#2f4f4f'})
  // $('#projects-nav-li').css({'background-color': 'white'})
}

function projectsHoverReverse() {
  $('#projects-nav').css({'color': 'white'})
  // $('#projects-nav-li').css({'background-color': 'black'})
}



function contactHover() {
  $('#contact-nav').css({'color': '#2f4f4f'})
  // $('#contact-nav-li').css({'background-color': 'white'})
}

function contactHoverReverse() {
  $('#contact-nav').css({'color': 'white'})
  // $('#contact-nav-li').css({'background-color': 'black'})
}


function createWaypoints() {
  $('#landing').waypoint(highlightTop)
  $('#landing-bot').waypoint(highlightBottom)
  $('#profile').waypoint(highlightTop)
  $('#profile-bot').waypoint(highlightBottom)
  $('#experience').waypoint(highlightTop)
  $('#experience-bot').waypoint(highlightBottom)
  $('#projects').waypoint(highlightTop)
  $('#projects-bot').waypoint(highlightBottom)
  $('#contact').waypoint(highlightTop)
  $('#contact-bot').waypoint(highlightBottom)

}

function highlightTop() {
  $('#nav').children().css({'background-color': 'black'})
  var a = $(this).attr('id')
  $('#'+a+'-nav-li').css({'background-color': 'purple'})
}

function highlightBottom() {
  $('#nav').children().css({'background-color': 'black'})
  var a = $(this).attr('id')
  a = a.substring(0, a.length - 4);
  $('#'+a+'-nav-li').css({'background-color': 'purple'})
}


