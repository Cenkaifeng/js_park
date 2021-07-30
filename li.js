1.假设有个 ul 列表下有 N 个子节点li，如何处理这 N 个子节点的点击回调（li 的子子元素点击也触发 li）？

<ul>
  <li>
     <a>xxxx</a> <!-- 点击 a 也要触发上面 li 的回调 -->
     <ul>
        <li>xxxxx</li> 
        ...
     </ul>
  </li>
  <li>
     <a>xxxx</a> <!-- 点击 a 也要触发上面 li 的回调 -->
     <ul>
        <li>xxxxx</li> 
        ...
     </ul>
  </li>
  ...
</ul>
function reduce(ul) {
}






2、假设一个可滚动的列表中有 10万 条数据，每条数据都存储了该元素的top和height（每个元素宽度固定为容器的宽度，高度不定），
已知容器（列表）的可视区域高度以及滚动偏移量，如何快速查找出出现在当前可视区域是哪些元素？

// 数据结构
const items = [[0, 200], [200, 100], [300, 400], ...]; // [[top, height],....] 10w 条数据

function find(items, scrollTop, clientHeight) {
   // TODO 返回找到可视区域元素的索引
   // [    ]
   //     [      ]
   // tips：scrollTop ～ (containerHeight + scrollTop)

}
// find(items, 100, 140) return  [0， 1]


3、假设拖动窗口触发 resize 事件会触发页面耗性能的任务，频繁拖动页面的时候会比较卡，如何去优化这个场景？

// TODO
function task(fn, delay) {
  // 比较耗性能
}
window.addEventListener('resize', task);
