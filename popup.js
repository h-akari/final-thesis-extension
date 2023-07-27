
main();
async function main()
{
	//アクティブなタブを取得
	let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
	//アクティブなタブでJavaScript(parseDOM)を実行
	chrome.scripting.executeScript({
		target:{tabId:tab.id},
		func:parseDOM
	}).then(function (final) {
		//実行結果をポップアップウィンドウへ表示
		document.getElementById('result').outerHTML = final[0].result;
	}).catch(function (error) {
        message.innerText = 'There was an error injecting script : \n' + error.message;
    });
}
function parseDOM()
{
    text = document.body.innerHTML;

    textString = text.toString()
    var final = textString.replace(/大/g,'jkkkkkkk')
 console.log(final)
   return final
}









/*
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){  //waiting and getting values, and executing function and sending response
    if (request !== 'getTab') return   
    alert('background => popup: message passing ok')
    sendResponse('received')

    // chrome.scripting.executeScript({
	//	target:{tabId:tab.id},
	//	func:parseDOM
	//})




})

-/*

function parseDOM()
{
    text = document.body.innerHTML;

    textString = text.toString()
    //return final textString ="kkkkk"

   let final = textString.replace(/大/g,'jkkkkkkk')
   console.log(final)
   final = document.getElementById('replacedText').innerHTML
	
}

*/
