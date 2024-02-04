
main()


async function main()
{
 
      
  
	//アクティブなタブを取得
	let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
	//アクティブなタブでJavaScript(parseDOM)を実行
	await chrome.scripting.executeScript({
		target:{tabId:tab.id, allFrames: true},
		func:parseDOM    //htmlを取得する関数をブラウザ上で実行
    }).then(injectionResults => {
      injectionResults = injectionResults[0].result  //HTML取得

      data = injectionResults.toString()   //取得したhtmlを変数dataに格納
      console.log(data)
      console.log("2:getting html success")
    }) 
           
  var newHomonymArray = []

  await fetch('http://localhost:3000/api/blinji/gettingListReq')     //databaseからすべての難語を取得           
  .then((response) => {
    return  response.json()
  })
  .then((message1) => {
    message1 = JSON.stringify(message1)
    console.log(message1)
    console.log("3:receiving data api=>extension " )
    //hardwordリスト（文字列）を整える（["hard","暑い","氏"]みたいなかたちだから）
    var message1 = message1.replace(/[\"]/g,"") //""を消す
    var message1 = message1.slice( 1 ) ;
    var message1 = message1.slice( 0, -1 ) ;

    console.log(message1)//hard,暑い,氏

    var homonymArray = []
    homonymArray = message1.split(",");
    console.log(homonymArray)  //整形完了。もっと簡略化できると思う笑


    // リスト（すべての難語）と一致するhardword（html上の難語）を調べる 
    
    for( var i =0; i< homonymArray.length; ++i ) {  //難語リスト内の単語の数だけループ
      if( data.match(homonymArray[i])){            
        var result = data.match(homonymArray[i]) //比較
        console.log(result[0]) 
        newHomonymArray.push(result[0]) //一致した難語を格納
      }
    }
                  
    console.log(newHomonymArray)
  })

  var final

    //抽出した難語をapiへ送り、easywords（平易語）を得る
  for(var i=0; i<newHomonymArray.length; ++i){ 
  await fetch('http://localhost:3000/api/blinji/easyWordReq/' + newHomonymArray[i],{
    method:"POST",
    body: newHomonymArray[i]
   })
  .then((response) => {        //結果の取得        
    return response.json()
   })
  .then((message2) => {  
    message2 = message2.easyword    //難語と平易語のセットを変数に格納
    console.log(newHomonymArray[i])
    console.log(message2)//object value
    
    console.log("5:receiving data api=>extension success")
      let reg = newHomonymArray[i]
      data = data.replace(new RegExp(reg,'g'),message2) //HTML上の難語を平易語に変換
  })
    final = data
    
  }

  console.log(final)
  document.getElementById('result').outerHTML = "変換完了" //ポップアップに[変換完了]と出力


  let [tab1] = await chrome.tabs.query({ active: true, currentWindow: true }); //変換し終わったhtmlをブラウザに表示する
  await chrome.scripting.executeScript({
		target:{tabId:tab1.id, allFrames: true},
		func:modification,
    args:[final]
    })
}
        
          

    function parseDOM()
{   
    console.log("1")
    return document.body.innerHTML;
}   


function modification(final)
{   
    console.log("modify")
    document.body.innerHTML=final
    return 0

}
    
//もしbackgraundを使う場合はこんな感じでデータの受け渡しするよ
    // chrome.runtime.sendMessage(textString, function(sendResponse){
    //     console.log(sendResponse)
    //     console.log("6:receiving data background=>popup")
    //     // sendResponse = JSON.stringify(sendResponse)
    //     // sendResponse = JSON.parse(sendResponse)
    
        
    // })