const puppeteer = require('puppeteer')
 
const codeObj = require("./codes");

const loginLink = 'https://www.hackerrank.com/auth/login'
const email = 'hackervatsh01@gmail.com'
const password = 'Hacker@123'
 
let browserOpen = puppeteer.launch({
    headless :false,
 
    args :['--start-maximized'],
 
    defaultViewport:null
})
 
let page = 
 
browserOpen.then(function(browserObj){
    let browserOpenPromise =browserObj.newPage()
    return browserOpenPromise;
}).then(function(newTab){
   page = newTab 
   let hackerRankOpenPromise = newTab.goto(loginLink)
   return hackerRankOpenPromise
}).then(function(){
    let emailIsEntered = page.type("input[id='input-1']", email , )
    return emailIsEntered
}).then(function(){
    let passwordIsEntered = page.type("input[type='password']",password , )
    return passwordIsEntered
}).then(function(){
    let loginButtonClicked = page.click('button[data-analytics="LoginPassword"]')
    return loginButtonClicked
}).then(function(){
    let clickOnAlgoPromise = waitAndClick('.topic-card a[data-attr1="algorithms"]', page)
    return clickOnAlgoPromise
 
}).then(function(){
     page.waitFor(2000);
    let getToWarmUp = waitAndClick('input[value="warmup"]' , page)
    return getToWarmUp
}).then(function(){
    let waitfor3Seconds = page.waitFor(3000);
    return waitfor3Seconds
}).then(function(){
    let allChallangesPromise =page.$$('.ui-btn.ui-btn-normal.primary-cta.ui-btn-line-primary.ui-btn-styled',{delay:50})
    return allChallangesPromise;

}).then(function(questionArr){
    console.log('number of questions',questionArr.length)
    let questionWillBeSolved =questionSolver(page,questionArr[0] , codeObj.answers)
    return questionWillBeSolved
})
 
 
function waitAndClick(selector , cPage){
    return new Promise(function(resolve,reject){
        let waitForModalPromise =cPage.waitForSelector(selector)
        waitForModalPromise.then(function(){
            let clickModal =cPage.click(selector)
            return clickModal
        }).then(function(){
            resolve()
        }).catch(function(err){
            reject()
        })
 
    })
 
}
 
 
function questionSolver(page ,question , answer){
    return new Promise(function(resolve,reject){
        let questionWillBeClicked =question.click()
        questionWillBeClicked.then(function(){
            let EditorInfocusPromise = waitAndClick('.monaco-editor.no-user-select.vs' , page)
           return EditorInfocusPromise
        }).then(function(){
            return waitAndClick('.checkbox-input', page)
        }).then(function(){
            return page.waitForSelector('textarea.custominput', page)
        }).then(function(){
            return page.type('textarea.custominput', answer ,{delay:10}) 
        }).then(function(){
            let ctrlPressed = page.keyboard.down("Control");
            return ctrlPressed
        }).then(function(){
            let AisPressed = page.keyboard.down('A' , {delay : 1000})
            return AisPressed
        }).then(function(){
            let XisPressed = page.keyboard.press('X' , {delay : 1000})
            return XisPressed
        }).then(function(){
            CtrlisUnPressed = page.keyboard.up("Control")
            return CtrlisUnPressed
        }).then(function(){
            let mainEditorInFOcus = waitAndClick('.monaco-editor.no-user-select.vs' , page)
            return mainEditorInFOcus
        }).then(function(){
            let ctrlPressed = page.keyboard.down("Control");
            return ctrlPressed
        }).then(function(){
            let AisPressed = page.keyboard.down('A' , {delay : 1000})
            return AisPressed    
        }).then(function(){
            let VisPressed = page.keyboard.down('V' , {delay : 1000})
            return VisPressed
        }).then(function(){
            let ctrlPressed = page.keyboard.down("Control");
            return ctrlPressed
        }).then(function(){
            
            return page.click('.hr-monaco__run-code' , {delay : 50})
        }).then(function(){
            resolve()
        }).catch(function(err){
            reject();
        })
    })
 }