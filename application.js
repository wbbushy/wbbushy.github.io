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
};

function landingHoverReverse() {
  $('#landing-nav').css({'color': 'white'})
};



function profileHover() {
  $('#profile-nav').css({'color': '#2f4f4f'})
}

function profileHoverReverse() {
  $('#profile-nav').css({'color': 'white'})
}



function experienceHover() {
  $('#experience-nav').css({'color': '#2f4f4f'})
}

function experienceHoverReverse() {
  $('#experience-nav').css({'color': 'white'})
}



function projectsHover() {
  $('#projects-nav').css({'color': '#2f4f4f'})
}

function projectsHoverReverse() {
  $('#projects-nav').css({'color': 'white'})
}



function contactHover() {
  $('#contact-nav').css({'color': '#2f4f4f'})
}

function contactHoverReverse() {
  $('#contact-nav').css({'color': 'white'})
}


function createWaypoints() {
  $('#landing').waypoint(highlight)
  $('#profile').waypoint(highlight)
  $('#experience').waypoint(highlight)
  $('#projects').waypoint(highlight)
  $('#contact').waypoint(highlight)
}

function highlight() {
  $('#nav').children().css({'background-color': 'black'}, {offset:'50%'})
  var a = $(this).attr('id')
  $('#'+a+'-nav-li').css({'background-color': 'purple'}, {offset:'50%'})
}


