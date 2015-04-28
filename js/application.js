$(document).ready(bindEvents)

function bindEvents() {
  createWaypoints();
  hoverMaster();
};

function createWaypoints() {
  $('#header').waypoint(highlightTop)
  $('#header-bot').waypoint(highlightBottom)
  $('#about').waypoint(highlightTop)
  $('#about-bot').waypoint(highlightBottom)
  $('#projects').waypoint(highlightTop)
  $('#projects-bot').waypoint(highlightBottom)
  $('#contact').waypoint(highlightTop)
  $('#contact-bot').waypoint(highlightBottom)
}

function highlightTop() {
  $('#nav').children().children().css({'background-color': 'black'})
  var a = $(this).attr('id')
  $('#nav-' + a).css({'background-color': 'purple'})
}

function highlightBottom() {
  $('#nav').children().children().css({'background-color': 'black'})
  var a = $(this).attr('id')
  a = a.substring(0, a.length - 4);
  $('#nav-' + a).css({'background-color': 'purple'})
}


function hoverMaster() {
  $('#nav-header').mouseover(headerHover);
  $('#nav-header').mouseleave(headerHoverReverse);
  $('#nav-about').mouseover(aboutHover);
  $('#nav-about').mouseleave(aboutHoverReverse);
  $('#nav-projects').mouseover(projectsHover);
  $('#nav-projects').mouseleave(projectsHoverReverse);
  $('#nav-contact').mouseover(contactHover);
  $('#nav-contact').mouseleave(contactHoverReverse);
}


function headerHover() {
  $('#nav-header').css({'color': '#2f4f4f'})
};

function headerHoverReverse() {
  $('#nav-header').css({'color': 'white'})
};

function aboutHover() {
  $('#nav-about').css({'color': '#2f4f4f'})
};

function aboutHoverReverse() {
  $('#nav-about').css({'color': 'white'})
};

function projectsHover() {
  $('#nav-projects').css({'color': '#2f4f4f'})
};

function projectsHoverReverse() {
  $('#nav-projects').css({'color': 'white'})
};

function contactHover() {
  $('#nav-contact').css({'color': '#2f4f4f'})
};

function contactHoverReverse() {
  $('#nav-contact').css({'color': 'white'})
};
