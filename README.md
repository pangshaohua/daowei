##day01
  完成头部导航，使用swiper插件完成轮播图，家庭保洁列表
  省略号
    white-space:nowrap;
    text-overflow:ellipsis
  背景图居中
    background-position:50% 50% (center center)
##day02
  完成服务商页面，和部分服务详情页面,完成后台搭建
  问题：
    子div块中设置margin-top时影响父div块位置
  解决办法：
    解决办法1:
      若子div块中使用margin-top,则在父div块中添加：overflow:hidden;
    解决办法2:
      在子div块中用padding-top代替margin-top
    解决方法3：
      给父元素添加border 1px solid transparent，但整体高度和宽度需要减去对应的宽度2px
  问题2：
    同级的导航和内容，因内容层级高，文字遮挡导航，这时为导航设置层级
    z-index无效，原因分析：因导航未开启定位，设置层级无效
      如果我们想控制一个元素在层叠上下文中的位置，那么必须在css上增加两个东西
      position增加一个css属性，但是这个定位不能是static
      z-index 增加一个z-index的属性，这个属性控制元素在Z轴上面的位置
      想要提升某个元素的层级，必须为其设置定位
      
      层叠上下文是基于Z轴的一个环境，这个环境其实一直都存在。 
      它的默认层叠顺序原则是： 
      同级元素中，后面的元素覆盖前面的元素，
      父子元素中，子元素覆盖父元素
      层叠顺序，就是层叠上下文元素在层叠上下文中的前后顺序 
      举个例子