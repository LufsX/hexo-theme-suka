(async () => {
  function GetUrlRelativePath() {
    var url = document.location.toString();
    var arrUrl = url.split("//");

    var start = arrUrl[1].indexOf("/");
    var relUrl = arrUrl[1].substring(start);

    if (relUrl.indexOf("?") != -1) {
      relUrl = relUrl.split("?")[0];
    }
    return relUrl;
  }

  const query = GetUrlRelativePath();
  const json = await fetch(
    `${window.post_views_api}?page=${query}`
  ).then((res) => res.json());

  const hit = json[0].hit;

  if (hit !== undefined) {
    var obj = document.getElementById("pv-counter");
    obj.innerHTML = `${hit}`;
    var show = document.getElementById("post-meta-views");
    show.hidden = false;
  }
})();
