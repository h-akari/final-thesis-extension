
main()


async function main()
{
 
      
      
	//アクティブなタブを取得
	let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
	//アクティブなタブでJavaScript(parseDOM)を実行
	await chrome.scripting.executeScript({
		target:{tabId:tab.id, allFrames: true},
		func:parseDOM
    }).then(injectionResults => {
      injectionResults = injectionResults[0].result

      data = injectionResults.toString()
      console.log(data)
      console.log("2:getting html success")
    })
           
  var newHomonymArray = []

  await fetch('http://localhost:3000/api/blinji/gettingListReq')                
  .then((response) => {
    return  response.json()
  })
  .then((message1) => {
    message1 = JSON.stringify(message1)
    console.log(message1)
    console.log("3:receiving data api=>extension " )
    //hardwordリスト（文字列）を整える["hard","暑い","氏"]
    var message1 = message1.replace(/[\"]/g,"") //""を消す
    var message1 = message1.slice( 1 ) ;
    var message1 = message1.slice( 0, -1 ) ;

    console.log(message1)//hard,暑い,氏

    var homonymArray = []
    homonymArray = message1.split(",");
    console.log(homonymArray)


    // リストと一致するhardwordを調べる 
    
    for( var i =0; i< homonymArray.length; ++i ) {
      if( data.match(homonymArray[i])){
        var result = data.match(homonymArray[i]) 
        console.log(result[0]) 
        newHomonymArray.push(result[0])
      }
    }
                  
    console.log(newHomonymArray)
  })

    //apiへ送り、easywordsを得る
  for(var i=0; i<newHomonymArray.length; ++i){ 
  await fetch('http://localhost:3000/api/blinji/easyWordReq/' + newHomonymArray[i],{
    method:"POST",
    body: newHomonymArray[i]
   })
  .then((response) => {              
    return response.json()
   })
  .then((message2) => {
    message2 = JSON.stringify(message2)
    console.log(message2)//object value
    console.log(newHomonymArray[i])
    console.log("5:receiving data api=>extension (background)" )
      let reg = newHomonymArray[i]
      let rep = message2
    data = data.replace(new RegExp(reg,'g'),new RegExp(rep))
  })
    final = data
    
                    

                    
   


  }
  console.log(final)
  document.getElementById('result').innerHTML = final
}
        
          

    function parseDOM()
{   
    console.log("1")
    return document.body.innerHTML;
   
    

    // chrome.runtime.sendMessage(textString, function(sendResponse){
    //     console.log(sendResponse)
    //     console.log("6:receiving data background=>popup")
    //     // sendResponse = JSON.stringify(sendResponse)
    //     // sendResponse = JSON.parse(sendResponse)
    
        
    // })

}   

function transform(final)

{

}
    

/*

main();
async function main()
{
	//アクティブなタブを取得
	let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
	//アクティブなタブでJavaScript(parseDOM)を実行
	chrome.scripting.executeScript({
		target:{tabId:tab.id},
		func:parseDOM
	}).then(function (r) {
		//実行結果をポップアップウィンドウへ表示
        console.log(r)
        console.log(2)
		document.getElementById('result').innerHTML = r[0].result;
	});
}
function parseDOM()
{
    console.log('1')
	return document.body.innerHTML;
}

*/