chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
 
  console.log(request)
  sendResponse("i got data")
  
})

fetch('http://localhost:3000/api/blinji/htmlSendingReq',{
  method:"POST",
  body: data
})
  .then((response) => {
    
    return response.json()
  })
  .then((data) => {
   
    console.log(data)

  })
  .catch((error) => {console.log(error)})



/*
chrome.idle.onStateChanged.addListener(
    (browserActivityState) => {
      chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
          chrome.tabs.sendMessage(tabs[0].id, { browserActivityState: browserActivityState });
      });
    }
  )
*/
  /*
  chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status == 'complete' && tab.active) {
  
        console.log('tabs.onupdated')
        chrome.tabs.sendMessage(tabId, 'status')

     
       }
    })//getting request and sending response

    */
/*
async function getTab()
{
//アクティブなタブを取得
let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
chrome.tabs.sendMessage(tabsId, 'getTab')
}

*/
/*

function onWindowLoad() {
chrome.tabs.query({active:true,currentWindow:true},function(tabs){ //select tab, and execute factions with tubs 
    chrome.tabs.sendMessage(tabs[0].id,'getTab',function(response){  //sending tabID and message to context script(popup.js), and execute this function when it got s response.
       console.log(response);
    })
})
}

*/
