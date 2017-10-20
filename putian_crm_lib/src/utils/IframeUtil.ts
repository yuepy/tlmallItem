/// <reference path='./CommonUtil.ts'/>
namespace pt.ui{

    export class IframeUtil{

        public static createIframe(name:string,targetUrl:string,mount:string){
           let topWin:any = CommonUtil.getTopWin();
           if(topWin.frames[name]){
               IframeUtil.switchIframe(name,targetUrl);
           }else{
               let doc:Document = topWin.document;
               let temp:string = `<iframe src=${targetUrl} name=${name}></iframe>`;
               let mountEl:Element =  doc.querySelector(mount);
               let iframe
               try{
                   iframe = document.createElement(`<iframe src=${targetUrl} name=${name}></iframe>`);  
               }catch(e){
                   iframe = document.createElement('iframe');  
                   iframe.name = name; 
                   iframe.src = targetUrl;
               }
               if(iframe){
                   mountEl.appendChild(iframe);
               }
           }
        }

        public static switchIframe(name:string,targetUrl:string){
            let topWin:any = CommonUtil.getTopWin();
            let childWin = topWin.frames[name];
            if(childWin){
                childWin.location.href = targetUrl;
            }  
        }
    }
}