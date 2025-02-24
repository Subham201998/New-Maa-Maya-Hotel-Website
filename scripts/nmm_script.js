window.onscroll = function() {scrollFunction()};

function scrollFunction()
{
    if (document.body.scrollTop > 698 || document.documentElement.scrollTop > 698)
    {
        document.getElementById("info-scroll").style.marginTop = "0px";
        document.getElementById("nav-bar").style.height = "270px";

    }
    else
    {
        document.getElementById("info-scroll").style.marginTop = "-136px";
        document.getElementById("nav-bar").style.height = "135px";
        navbar.style.height = "270px";
        document.getElementById("info-scroll").style.marginTop = "0px";
    }


    var mediaQuery = window.matchMedia("(max-width: 600px)");
    var navbar = document.getElementById("nav-bar");

    if (mediaQuery.matches)
      {
        navbar.style.height = "134px";
        document.getElementById("info-scroll").style.marginTop = "-136px";
      }
    else
      {
          //nothing, lol
      }
}




//setting menu window width fit to screen
  function openNav() 
  {
      document.getElementById("hamburger-menu-nav").style.width = "100%";
  }
  
//setting menu window width to 0
  function closeNav() 
  {
    document.getElementById("hamburger-menu-nav").style.width = "0%";
  }





  //setting menu window width fit to screen
  function openContact() 
  {
      document.getElementById("contact-menu-nav").style.width = "100%";
  }
  
//setting menu window width to 0
  function closeContact() 
  {
    document.getElementById("contact-menu-nav").style.width = "0%";
  }