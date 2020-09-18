$(function() {
    $('body').removeClass('fade-out');
});

$( document ).ready(function() {
  
  var textboxH =  $("#text").height();
  var textH =  $("#text>div").height();
  var marginH = (textboxH - textH)/2;
  $('#text>div').css('margin-top', marginH);
  
  $(window).resize(function(){
    $('#text>div').css('margin-top', 0);
    var textboxH =  $("#text").height();
    var textH =  $("#text>div").height();
    var marginH = (textboxH - textH)/2;
    $('#text>div').css('margin-top', marginH);
  });
  
  $("#projectOne").mouseover(function(){
    $("#projectOne>h3").css("border-bottom", "dotted 3px");
    $("#projectOne>.tile").css("opacity", "0.5");
  });
  $("#projectOne").mouseout(function(){
    $("#projectOne>h3").css("border-bottom", "none");
    $("#projectOne>.tile").css("opacity", "1");
  });
  $("#projectTwo").mouseover(function(){
    $("#projectTwo>h3").css("border-bottom", "dotted 3px");
    $("#projectTwo>.tile").css("opacity", "0.5");
  });
  $("#projectTwo").mouseout(function(){
    $("#projectTwo>h3").css("border-bottom", "none");
    $("#projectTwo>.tile").css("opacity", "1");
  });
  $("#projectThree").mouseover(function(){
    $("#projectThree>h3").css("border-bottom", "dotted 3px");
    $("#projectThree>.tile").css("opacity", "0.5");
  });
  $("#projectThree").mouseout(function(){
    $("#projectThree>h3").css("border-bottom", "none");
    $("#projectThree>.tile").css("opacity", "1");
  });
  $("#projectFour").mouseover(function(){
    $("#projectFour>h3").css("border-bottom", "dotted 3px");
    $("#projectFour>.tile").css("opacity", "0.5");
  });
  $("#projectFour").mouseout(function(){
    $("#projectFour>h3").css("border-bottom", "none");
    $("#projectFour>.tile").css("opacity", "1");
  });
  $("#projectFive").mouseover(function(){
    $("#projectFive>h3").css("border-bottom", "dotted 3px");
    $("#projectFive>.tile").css("opacity", "0.5");
  });
  $("#projectFive").mouseout(function(){
    $("#projectFive>h3").css("border-bottom", "none");
    $("#projectFive>.tile").css("opacity", "1");
  });
  $(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
  });
});

var text = document.getElementById("descriptionText");

function pop(num){
  switch (num) {
    case 1:
      showOne();
      break;
    case 2:
      showTwo();
      break;
    case 3:
      showThree();
      break;
    case 4:
      showFour();
      break;
    case 5:
      showFive();
  }
  var tiles = document.getElementById("tiles");
  tiles.setAttribute('style','display: none;');
  var desc = document.getElementById("description");
  desc.setAttribute('style','display: block;');
}

function unPop(){
  var tiles = document.getElementById("tiles");
  tiles.setAttribute('style', 'display: grid;');
  var desc = document.getElementById("description");
  desc.setAttribute('style','display: none;');
  document.getElementById("descriptionImages").innerHTML = "";
}

function showOne(){
  document.getElementById("descriptionTitle").innerHTML = "Nile: Video Intro";
  document.getElementById("descriptionText").innerHTML = `
  <a href="https://nilehq.com" target="_blank">Nile</a> is a strategic design company which recently went through a re-brand. To fit with their new image, I was tasked with creating motion graphics to place at the start of future videos.
  <br><br>Although I was only animating a short sequence, attention to detail was important. After reviewing the brief, I created a mood board to gather ideas for the project. 
  <br><br>Nile’s new branding featured grid patterns, representing the importance of data. Using the grid as a starting point, I created storyboards and mock-ups with various styles of motion.
  <br><br>Finally, I refined a single design. In the finished sequence, squares randomly unfold to reveal a grid. This motion reflects a core value of the company: finding order and direction in confusing situations. The clip is short and simple, but it tells a story about the brand.
  `;
  document.getElementById("descriptionImages").innerHTML = `
  <img src="images/nile01.png" alt="Blue Grid Squares" class="descriptionImage">
  <img src="images/nile02.png" alt="Mood Board" class="descriptionImage">
  <img src="images/nile-motion.gif" alt="Motion Graphics" class="descriptionImage">
  `;
}

function showTwo(){
  document.getElementById("descriptionTitle").innerHTML = "Velappity: Onboarding Screens";
  document.getElementById("descriptionText").innerHTML = `
  The <a href="https://www.velappity.com" target="_blank">Velappity</a> app is an easy, streamlined alternative to filling in paper forms. I was tasked with designing a series of onboarding screens to introduce new users to the app.
  <br><br>Once I had sketched wireframes for the screens, I moved on to illustrating. I used a clean and simple style to give the illustrations a professional feel. I created a series of different vector-based images. From these, I chose the four strongest designs.
  <br><br>Finally, I combined the images with short phrases to create a simple design for each screen. I borrowed colours from the existing Velappity branding, but brightened them to make these initial screens more eye-catching.  By using bold images and snappy headings, the onboarding screens were easy to understand.
  `;
  document.getElementById("descriptionImages").innerHTML = `
  <img src="images/onboard01.jpg" alt="Onboarding Screens" class="descriptionImage">
  <img src="images/onboard02.jpg" alt="Illustrations" class="descriptionImage">
  <img src="images/onboard03.png" alt="Sketches" class="descriptionImage">
  `;
}

function showThree(){
  document.getElementById("descriptionTitle").innerHTML = "Velappity: Client Portal";
  document.getElementById("descriptionText").innerHTML = `
  <a href="https://www.velappity.com" target="_blank">Velappity</a> is a software for completing risk assessments and reports. It is accompanied by a Client Portal, an online tracker which allows companies to share their findings with clients. I was tasked with designing various aspects of the portal.
  <br><br>I began by creating mood boards to get a feel for different colours, shapes, and styles. As we were building the portal from scratch, it was important to define a look for the project early on.
  <br><br>The Client Portal homepage was designed as a dashboard with various widgets. One of my early designs was a tracking widget which would display information about recent inspections.
  <br><br>The next item I worked on was the Logbook – a calendar style planer which displays scheduled jobs. The previous prototype was a cluttered table with unclear labels. My calendar design made the information much clearer and easier to interact with.
  <br><br>Finally, I designed the Reports List. This page shows completed reports in a simple table format. On smaller screens, each table entry is expandable to show extra information. The search filter makes it easier to narrow down a specific report, meaning documents will not get lost.
  `;
  document.getElementById("descriptionImages").innerHTML = `
  <img src="images/portal01.png" alt="Statistics" class="descriptionImage">
  <img src="images/portal02.jpg" alt="Mood Boards" class="descriptionImage">
  <img src="images/portal03.jpg" alt="Log Book" class="descriptionImage">
  <img src="images/portal04.jpg" alt="Client Portal" class="descriptionImage">
  <img src="images/portal05.jpg" alt="Client Portal - Mobile" class="descriptionImage">
  `;
}

function showFour(){
  document.getElementById("descriptionTitle").innerHTML = "Plantpot: Plant Care Website";
  document.getElementById("descriptionText").innerHTML = `
  <a href="https://lottieholland.trinket.io/sites/plantpot" target="_blank">Plantpot</a> was a small personal project I undertook to improve my web coding skills. I set myself the challenge of building a website in three days, from concept to completion.
  <br><br>I focused on plants after glancing around for inspiration and spotting my windowsill houseplants. Most websites about plant care cater to outdoor gardeners or experienced plant collectors. I decided to create a website geared towards amateurs, those without garden spaces who can only grow potted plants indoors.
  <br><br>The whole site was built with a mobile-first design strategy. This was important for my imagined userbase - mostly young people -  who would be using smartphones to access the site.
  <br><br>I wanted to give the site an informal feel, to make it more inviting to inexperienced growers. As a “fun” feature, I added a houseplant quiz. This really helped me brush up my JavaScript skills as I had to configure the quiz validation.
  <br><br>Although this was just a short project, it was fun to get creative and work on something different.
  `;
  document.getElementById("descriptionImages").innerHTML = `
  <img src="images/plantpot01.PNG" alt="Plantpot" class="descriptionImage">
  <img src="images/plantpot02.png" alt="Plantpot Mobile" class="descriptionImage">
  <img src="images/plantpot03.jpg" alt="Plantpot Desktop" class="descriptionImage">
  `;
}

function showFive(){
  document.getElementById("descriptionTitle").innerHTML = "The Story of Sex Toys: Educational Video";
  document.getElementById("descriptionText").innerHTML = `
  I created this video in three weeks, as part of my art school portfolio. I was asked to make an animated video approximately two minutes in length. The video had to be educational, but I had complete control over the topic. 
  <br><br>I chose to focus on the taboo subject of sex toys – something I hadn’t seen done before. I wanted to create an animation which had personality and humour, whilst still being informative.
  <br><br>I chose to look at the past, present, and future of the sex toy, so that there was a clearly structured narrative. I began by writing a script and sketching a storyboard.
  <br><br>I kept the animation simple, using 2D vector illustrations. This was my first time creating a digital animation and I wanted to use a style which was simplified yet polished. I focussed on creating fluid motion and elegant scene transitions.
  <br><br>Although this video is very tongue-in-cheek, I could easily transfer these skills to a more “serious” animation project in the future.
  `;
  document.getElementById("descriptionImages").innerHTML = `
  <img src="images/story01.png" alt="Illustration" class="descriptionImage">
  <img src="images/story02.jpg" alt="Storyboard" class="descriptionImage">
  <img src="images/story03.jpg" alt="Sketches" class="descriptionImage">
  <img src="images/story04.jpg" alt="Illustration" class="descriptionImage">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/UJC8_EX3vXc" class="descriptionImage" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  `;
  jQuery(function() {
    function setAspectRatio() {
      jQuery('iframe').each(function() {
        jQuery(this).css('height', jQuery(this).width() * 9/16);
      });
    }
    setAspectRatio();   
    jQuery(window).resize(setAspectRatio);
  });
}
