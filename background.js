






/*chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
 console.log(request)
  var data = request

  console.log("3:receiving html popup=>background")

  
  fetch('http://localhost:3000/api/blinji/htmlSendingReq',{
  method:"POST",
  body: data
  })
  .then((response) => {
    
    return  response.json()
  })
  .then((result) => {
    result = JSON.stringify(result)
    console.log(result)//object value
    console.log("5:receiving data api=>extension (background)" )
    sendResponse(result)
    
  


  })
  .catch((error) => {console.log(error)})

  return true;

  
})





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


//写し


// main()


//     async function main()
// {
 
      
      
// 	//アクティブなタブを取得
// 	  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
// 	//アクティブなタブでJavaScript(parseDOM)を実行
// 	        await chrome.scripting.executeScript({
// 		    target:{tabId:tab.id, allFrames: true},
// 		    func:parseDOM
            
//         }).then(injectionResults => {
//             injectionResults = injectionResults[0].result

//             data = injectionResults.toString()
//             console.log(data)
//             console.log("2:getting html success")
           
//             var newHomonymArray = getHardWord(data)
                
//                 console.log(newHomonymArray)
                           
          
//                 //apiへ送り、easywordsを得る
//                 for(var i=0; i<newHomonymArray.length; ++i){ 
//                  fetch('http://localhost:3000/api/blinji/easyWordReq/' + newHomonymArray[i],{
//                   method:"POST",
//                   body: newHomonymArray[i]
//                   })
//                   .then((response) => {
                    
//                     return response.json()
//                   })
//                   .then((message2) => {
//                     message2 = JSON.stringify(message2)
//                     console.log(message2)//object value
//                     console.log("5:receiving data api=>extension (background)" )

//                     document.getElementById('result').innerHTML = message2
                                        
//                   })
                  
//                 }
              
// })
// }






          
        
        
          

//     function parseDOM()
// {   
//     console.log("1")
//     return document.body.innerHTML;
   
    

//     // chrome.runtime.sendMessage(textString, function(sendResponse){
//     //     console.log(sendResponse)
//     //     console.log("6:receiving data background=>popup")
//     //     // sendResponse = JSON.stringify(sendResponse)
//     //     // sendResponse = JSON.parse(sendResponse)
    
        
//     // })

// }   

// function getHardWord(data)

// {
//   fetch('http://localhost:3000/api/blinji/gettingListReq')                
//                 .then((response) => {
                  
//                   return  response.json()
//                 })
//                 .then((message1) => {
//                   message1 = JSON.stringify(message1)
//                   console.log(message1)
//                   console.log("3:receiving data api=>extension " )
//                   //hardwordリスト（文字列）を整える["hard","暑い","氏"]
//                   var message1 = message1.replace(/[\"]/g,"") //""を消す
//                   var message1 = message1.slice( 1 ) ;
//                   var message1 = message1.slice( 0, -1 ) ;

//                   console.log(message1)//hard,暑い,氏

//                    var homonymArray = []
//                    homonymArray = message1.split(",");
//                    console.log(homonymArray)


//                  // リストと一致するhardwordを調べる 
//                  var newHomonymArray = []
//                    for( var i =0; i< homonymArray.length; ++i ) {
//                   if( data.match(homonymArray[i])){
//                    var result = data.match(homonymArray[i]) 
//                    console.log(result[0]) 
//                    newHomonymArray.push(result[0])
//                    }
//                   }
//                   console.log(newHomonymArray)
//                   return newHomonymArray
//                 }) 

// }
    

// /*

// main();
// async function main()
// {
// 	//アクティブなタブを取得
// 	let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
// 	//アクティブなタブでJavaScript(parseDOM)を実行
// 	chrome.scripting.executeScript({
// 		target:{tabId:tab.id},
// 		func:parseDOM
// 	}).then(function (r) {
// 		//実行結果をポップアップウィンドウへ表示
//         console.log(r)
//         console.log(2)
// 		document.getElementById('result').innerHTML = r[0].result;
// 	});
// }
// function parseDOM()
// {
//     console.log('1')
// 	return document.body.innerHTML;
// }

// */


//原作


// main()


//     async function main()
// {
 
      
      
// 	//アクティブなタブを取得
// 	  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
// 	//アクティブなタブでJavaScript(parseDOM)を実行
// 	        await chrome.scripting.executeScript({
// 		    target:{tabId:tab.id, allFrames: true},
// 		    func:parseDOM
            
//         }).then(injectionResults => {
//             injectionResults = injectionResults[0].result

//             data = injectionResults.toString()
//             console.log(data)
//             console.log("2:getting html success")
           
//             fetch('http://localhost:3000/api/blinji/gettingListReq')                
//                 .then((response) => {
                  
//                   return  response.json()
//                 })
//                 .then((message1) => {
//                   message1 = JSON.stringify(message1)
//                   console.log(message1)
//                   console.log("3:receiving data api=>extension " )
//                   //hardwordリスト（文字列）を整える["hard","暑い","氏"]
//                   var message1 = message1.replace(/[\"]/g,"") //""を消す
//                   var message1 = message1.slice( 1 ) ;
//                   var message1 = message1.slice( 0, -1 ) ;

//                   console.log(message1)//hard,暑い,氏

//                    var homonymArray = []
//                    homonymArray = message1.split(",");
//                    console.log(homonymArray)


//                  // リストと一致するhardwordを調べる 
//                  var newHomonymArray = []
//                    for( var i =0; i< homonymArray.length; ++i ) {
//                   if( data.match(homonymArray[i])){
//                    var result = data.match(homonymArray[i]) 
//                    console.log(result[0]) 
//                    newHomonymArray.push(result[0])
//                    }
//                   }
//                   console.log(newHomonymArray)

//                 //apiへ送り、easywordsを得る
//                 for(var i=0; i<newHomonymArray.length; ++i){ 
//                  fetch('http://localhost:3000/api/blinji/easyWordReq/' + newHomonymArray[i],{
//                   method:"POST",
//                   body: newHomonymArray[i]
//                   })
//                   .then((response) => {
                    
//                     return response.json()
//                   })
//                   .then((message2) => {
//                     message2 = JSON.stringify(message2)
//                     console.log(message2)//object value
//                     console.log("5:receiving data api=>extension (background)" )

                  
  
//                     return document.getElementById('result').innerHTML = message2
                    

                    
//                   })


                 
           
                  
//                 }})

//             //実行結果をポップアップウィンドウへ表示
           
//           }
//         )}
        
          

//     function parseDOM()
// {   
//     console.log("1")
//     return document.body.innerHTML;
   
    

//     // chrome.runtime.sendMessage(textString, function(sendResponse){
//     //     console.log(sendResponse)
//     //     console.log("6:receiving data background=>popup")
//     //     // sendResponse = JSON.stringify(sendResponse)
//     //     // sendResponse = JSON.parse(sendResponse)
    
        
//     // })

// }   

// function transform(final)

// {

// }
    

// /*

// main();
// async function main()
// {
// 	//アクティブなタブを取得
// 	let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
// 	//アクティブなタブでJavaScript(parseDOM)を実行
// 	chrome.scripting.executeScript({
// 		target:{tabId:tab.id},
// 		func:parseDOM
// 	}).then(function (r) {
// 		//実行結果をポップアップウィンドウへ表示
//         console.log(r)
//         console.log(2)
// 		document.getElementById('result').innerHTML = r[0].result;
// 	});
// }
// function parseDOM()
// {
//     console.log('1')
// 	return document.body.innerHTML;
// }

// */