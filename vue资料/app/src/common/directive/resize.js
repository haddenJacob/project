
/*
resize 拖拽方向  top|left|bottom|right| top-right|top-left|bottom-right|bottom-left
target 拖拽目标对象
handle 窗体编号
 */
//窗口最小高度
const minHeight = 188
  //窗口最小宽度
const minWidth = 137
export default function(el, binding,vnode){
  let oDiv=el;
  let handle = ''
  if(el.attributes['handle']!=undefined)//如果存在
     handle = el.attributes['handle'].value

  let selector = el.attributes['target'].value+handle;//获得指令指定的目标对象binding.expression+
  let directive = el.attributes['resize'].value;//拖拽方向

  if(selector==undefined || handle==undefined || directive==undefined || directive=='') return;//如果指令为空值


  oDiv.onmousedown=function(e){

    let wrapperObj = document.querySelector(selector);//移动元素的对象
    if(wrapperObj==null) return;//目标对象不存在
    //改变高度
    let dialog_top= wrapperObj.offsetTop
    let dialog_height = wrapperObj.offsetHeight
    let dialog_left = wrapperObj.offsetLeft
    let dialog_width = wrapperObj.offsetWidth

    document.onmousemove=function(e){
      e.preventDefault();//阻止鼠标的默认点击事件
      switch(directive){
        case 'top':
          if(dialog_top-e.clientY+dialog_height>=minHeight && e.clientY>=1){
              wrapperObj.style.top = e.clientY+'px'
              wrapperObj.style.height=  dialog_top-e.clientY + dialog_height+'px';
          }
          break
        case 'right':
            if(e.clientX-dialog_left>=minWidth){
              wrapperObj.style.width = e.clientX-dialog_left+'px'
            }
          break
        case 'bottom':
            if(e.clientY-dialog_top>=minHeight){
              wrapperObj.style.height = e.clientY-dialog_top+'px'
            }
          break
          case 'left':
              if(dialog_left-e.clientX+dialog_width>=minWidth){
                wrapperObj.style.left = e.clientX+'px'
                wrapperObj.style.width=  dialog_left-e.clientX + dialog_width+'px';
              }
            break
          case 'top-right':
            if(dialog_top-e.clientY + dialog_height>=minHeight && e.clientX-dialog_left>=minWidth ){
                    wrapperObj.style.top = e.clientY+'px';
                    wrapperObj.style.height=  dialog_top-e.clientY + dialog_height+'px';
                    wrapperObj.style.width=e.clientX-dialog_left+'px';
             }
            break
          case 'bottom-right':
            if( e.clientY-dialog_top>191 && e.clientX-dialog_left>minWidth ){//限制 防止 iframe内容挤破窗口
                    wrapperObj.style.width = e.clientX-dialog_left+'px';
                    wrapperObj.style.height = e.clientY-dialog_top+'px';
                    // contentObj.style.height = e.clientY-offTop+'px';
                }
            break
          case 'bottom-left':
            if(e.clientY-dialog_top>=minHeight && dialog_left-e.clientX + dialog_width>=minWidth){
                    wrapperObj.style.left = e.clientX +'px';
                    wrapperObj.style.height = e.clientY-dialog_top+'px';
                    wrapperObj.style.width=dialog_left-e.clientX + dialog_width+'px';
                }
            break
          case 'top-left':
            if(dialog_top-e.clientY + dialog_height>=minHeight && dialog_left-e.clientX + dialog_width>=minWidth ){
                    wrapperObj.style.top = e.clientY+'px';
                    wrapperObj.style.height=  dialog_top-e.clientY + dialog_height+'px';
                    wrapperObj.style.left = e.clientX+'px';
                    wrapperObj.style.width=dialog_left-e.clientX + dialog_width+'px';
                }
            break
    }

    };
    document.onmouseup=function(){
      document.onmousemove=null;
      wrapperObj.onmouseup=null;
    }
  }
}
