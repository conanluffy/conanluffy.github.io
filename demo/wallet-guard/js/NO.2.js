(function() {
  var ie6 = document.all;
  var dv = document.getElementById('navigator'), st;
  function getOffset(node, offset) {
    // 创建一个对象存储offset
    if (!offset) {
      offset = {};
      offset.top = 0;
      offset.left = 0;
    }
    
    // 当该节点为body节点时，结束递归
    if (node == document.body) {
      return offset;
    }
    
    offset.top += node.offsetTop;
    offset.left += node.offsetLeft;
    
    // 向父元素累加offset里的值
    return getOffset(node.parentNode, offset);
  }
  dv.setAttribute('otop', getOffset(dv).top); //存储原来的距离顶部的距离
  $(window).scroll(function () {
    st = Math.max(document.body.scrollTop || document.documentElement.scrollTop);
    if (st > parseInt(dv.getAttribute('otop'))) { 
      if (dv.style.position != 'fixed') {
        dv.setAttribute('style','position: fixed;top: 0;');
      }
    }
    else if (dv.style.position != 'static'){
      dv.setAttribute('style','position: static;');
    }
  });
})();
