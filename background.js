chrome.browserAction.onClicked.addListener(function(tab) {
  // No tabs or host permissions needed!
  chrome.tabs.executeScript({
	    code: 'var text = "h3. {color:#59afe1} *Environment* {color}\\n\\nh3. {color:#59afe1} *Setup* {color}\\n\\nh3. {color:#59afe1} *Steps* {color}\\n\\nh3. {color:#59afe1} *Result* {color}\\n\\nh3. {color:#59afe1} *Expected* {color}\\n\\nh3. {color:#59afe1} *Notes* {color}";var description = document.getElementById("description");description.value = description.value + text;'
	  });
});
