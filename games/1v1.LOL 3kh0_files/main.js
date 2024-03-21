console.warn(
  "%cNote!",
  "color: purple; font-weight: 600; background: yellow; padding: 0 5px; border-radius: 5px",
  "If you want to add this game to your site, please reach out at our email: hello@senty.com.au\nPlease do not just add them without asking us first! Thank you!"
);

document.addEventListener("DOMContentLoaded", function() {
  const ad = document.createElement("script");
  ad.setAttribute("async", "");
  ad.setAttribute("src", "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3723218062742398");
  ad.setAttribute("crossorigin", "anonymous");
  document.head.append(ad);

  const stats = document.createElement("script");
  stats.setAttribute("defer", "");
  stats.setAttribute("data-domain", "player.work");
  stats.setAttribute("src", "https://stats.senty.com.au/js/script.js");
  document.head.append(stats);


  var stpd = document.createElement('script');
  // set the src attribute to the URL of the external script
  stpd.src = 'https://stpd.cloud/assets/libraries/inview.min.js';

  document.head.append(stpd);

  stpd.onload = function() {
      inView.offset(-200);
  };

  var gpt = document.createElement('script');
  gpt.src = 'https://securepubads.g.doubleclick.net/tag/js/gpt.js';
  gpt.async = true;
  document.head.append(gpt);

  gpt.onload = function() {
    window.googletag = window.googletag || {};
    googletag.cmd = googletag.cmd || [];
    googletag.cmd.push(function () {
      if (window.innerWidth >= 1480) {
            googletag.defineSlot('/147246189,22921845643/player.work_1000x100_desktop_anchor', [[1000, 100], [970, 90], [728, 90], [990, 90], [970, 50], [960, 90], [950, 90], [980, 90]], 'player_work_anchor_ad_responsive').addService(googletag.pubads());
            googletag.defineSlot('/147246189,22921845643/player.work_800x280_desktop_top_billboard', [[800,280],[800,250],[800,200],[750,280],[750,250],[750,200],[750,150],[750,100],[728,90]], 'player_work_top_billboard_reponsive').addService(googletag.pubads());
            googletag.defineSlot('/147246189,22921845643/player.work_300x600_desktop_side_left', [[300,600],[160,600],[300,250],[300,300]], 'player_work_sidebar_left_desktop').addService(googletag.pubads());
            googletag.defineSlot('/147246189,22921845643/player.work_300x600_desktop_side_right', [[300,600],[160,600],[300,250],[300,300]], 'player_work_sidebar_right_desktop').addService(googletag.pubads());
      }
      else if (window.innerWidth >= 1150){
            googletag.defineSlot('/147246189,22921845643/player.work_1000x100_desktop_anchor', [[1000,100],[970,90],[728,90],[990,90],[970,50],[960,90],[950,90],[980,90]], 'player_work_anchor_ad_responsive').addService(googletag.pubads());
            googletag.defineSlot('/147246189,22921845643/player.work_800x280_desktop_top_billboard', [[800,280],[800,250],[800,200],[750,280],[750,250],[750,200],[750,150],[750,100],[728,90]], 'player_work_top_billboard_reponsive').addService(googletag.pubads());
            googletag.defineSlot('/147246189,22921845643/player.work_160x600_desktop_side_left', [[160,600],[120,600]], 'player_work_sidebar_left_desktop').addService(googletag.pubads());
            googletag.defineSlot('/147246189,22921845643/player.work_160x600_desktop_side_right', [[160,600],[120,600]], 'player_work_sidebar_right_desktop').addService(googletag.pubads());
      }
      else if (window.innerWidth >= 1024){
            googletag.defineSlot('/147246189,22921845643/player.work_1000x100_desktop_anchor', [[1000,100],[970,90],[728,90],[990,90],[970,50],[960,90],[950,90],[980,90]], 'player_work_anchor_ad_responsive').addService(googletag.pubads());
            googletag.defineSlot('/147246189,22921845643/player.work_800x280_desktop_top_billboard', [[800,280],[800,250],[800,200],[750,280],[750,250],[750,200],[750,150],[750,100],[728,90]], 'player_work_top_billboard_reponsive').addService(googletag.pubads());
      } else {
            googletag.defineSlot('/147246189,22921845643/player.work_320x100_mobile_anchor', [[320,100],[320,50],[300,100],[300,50]], 'player_work_anchor_ad_responsive').addService(googletag.pubads());
            googletag.defineSlot('/147246189,22921845643/player.work_336x336_mobile_top', [[300,250],[336,336],[336,320],[320,320],[300,300],[336,280],[320,250],[320,336]], 'player_work_top_billboard_reponsive').addService(googletag.pubads());
      }
      var interstitialSlot = googletag.defineOutOfPageSlot('/147246189,22921845643/player.work_interstitial', googletag.enums.OutOfPageFormat.INTERSTITIAL);
      if (interstitialSlot) interstitialSlot.addService(googletag.pubads());

      googletag.pubads().enableSingleRequest();
      googletag.pubads().disableInitialLoad();
      googletag.pubads().collapseEmptyDivs();
      googletag.enableServices();
      googletag.display(interstitialSlot);

      // create sass script

      var saas = document.createElement('script');
      saas.src = 'https://stpd.cloud/saas/6882';
      saas.async = true;
      document.head.append(saas);


      var stpd = document.createElement('script');
      stpd.src = 'https://stpd.cloud/assets/libraries/inview.min.js';
      stpd.async = true;
      document.head.append(stpd);
    
      // add anchor div to body
      var anchor = document.createElement('div');
      anchor.setAttribute('id', 'player_work_anchor_ad_responsive');
      document.body.append(anchor);
      //create script
      var anchorScript = document.createElement('script');
      anchorScript.innerHTML = `googletag.cmd.push(function() { googletag.display('player_work_anchor_ad_responsive'); });`;
      // insert to anchor
      anchor.append(anchorScript);
    });
  }






  function createBadge() {
    const badge = document.createElement("div");
    badge.setAttribute('id', 'badge')
    badge.setAttribute("style", "position: fixed; top: 300px; left: 10px; z-index: 999999999999999999999; display: flex; align-items: left; border-radius: 4px; justify-content: left; width: auto; height: auto; box-shadow: 0 0 10px rgba(255,255,255,0.9); font-size: 20px;");

    badge.innerHTML = '<a href="https://ruslan.rocks" target="_blank" style="color: red; text-decoration: undeline; padding: 10px 20px; background: #ffff; border-radius: 5px; font-weight: 600; font-size: 20px; box-shadow: 0 0 10px rgba(0,0,0,0.5);">Find more<br> Unblocked Games here 🎮</a>';

    const closeButton = document.createElement("button");
    closeButton.setAttribute("style", "position: absolute; top: 5px; right: 0px; background: transparent; border: none; color: black; font-size: 16px; cursor: pointer;");
    closeButton.innerHTML = "X";
    closeButton.addEventListener("click", function() {
      badge.remove();
    });

    badge.appendChild(closeButton);
    document.body.append(badge);
  }

  setInterval(function() {
    const badge = document.getElementById('badge');
    if (!badge) {
      createBadge();
    }
  }, 30000);


  console.log('init complete')

});
