/*
用法
target是拖动的目标div  值是目标div的标识 如：target="#diloag"  target=".dialog"
移动的目标元素必须是绝对定位

handle Dialog唯一标识  标识拖拽目标对象的handle

还需要优化
当鼠标超过浏览器可视区域后不能拖动
当target为空或不存在时拖动目标对象为自身
 */

export default function(el, binding,vnode){
  let oDiv=el;
  let handle = el.attributes['handle'].value;
  let selector = el.attributes['target'].value+handle;//获得指令指定的目标对象binding.expression+

  if(selector==undefined || handle==undefined) return;//如果指令为空值

  oDiv.onmousedown=function(e){
    if(handle=='forbidendrag-1') return  //约定当句柄为forbidendrag-1是表示禁止拖动
    let wrapperObj = document.querySelector(selector);//移动元素的对象
    if(wrapperObj==null) return;//目标对象不存在

    /*
    如果窗口此时是全屏模式则不能拖拽
     */
    if(wrapperObj.offsetWidth>=window.innerWidth && wrapperObj.offsetHeight >= window.innerHeight) return
    //改变高度
    let l=e.clientX-wrapperObj.offsetLeft;
    let t=e.clientY-wrapperObj.offsetTop;

    document.onmousemove=function(e){
      e.preventDefault();//阻止鼠标的默认点击事件
      if(e.clientY>=10)//纵坐标不能出浏览器可视化区域，否则标题被挡住后拖不动了
        wrapperObj.style.top=e.clientY-t+'px';
      wrapperObj.style.left=e.clientX-l+'px';
    };
    document.onmouseup=function(){
      document.onmousemove=null;
      wrapperObj.onmouseup=null;
    }
  }
}
