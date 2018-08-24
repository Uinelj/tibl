async function render(url, id='content', set_title=false) {
  console.log("Render called on " + url + ", id " + id + ", set_title " + set_title);
  try {

    // Get the page
    const ans = await fetch(url);

    // If github returns a 404, display it and log it into the console.
    // TODO: Redirect to a 404 page.
    if(ans.status == 404) {
      document.getElementById(id).innerHTML = marked("url " + url + " not found.");
      console.log(ans);
    
    // 200 means that everything is going well.
    // We set the document title and serve the content.
    // TODO: Redo the title setting when we'll have metadata.
    // If there's title in the yaml, use it, if not, parse this way.
    } else if (ans.status == 200) {

      ans_text = await ans.text()
      if(set_title) {
        document.title = ans_text.split('\n')[0].replace('#', '');
      }
      document.getElementById(id).innerHTML = marked(ans_text);

    // :shrug:
    } else {

      document.getElementById(id).innerHTML = marked("Something weird happened. See console.");
      console.log(ans)
    }

  // :shrug: :shrug:
  } catch (err) {
    console.log(err);
    // document.getElementById(id).innerHTML = marked("*Post not found :/\nTODO: Add nice 404 page.*");
    console.log("Error getting " + url);

  }
}
