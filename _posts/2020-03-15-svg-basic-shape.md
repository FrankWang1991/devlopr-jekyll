---
layout: post
title: SVG 中的基础图形(rect , line ,circle 等)以及在 D3.js 中的应用
author: 王森
date: '2020-03-15 19:05:34'
category: [d3js]
summary:  SVG 中的基础图形(rect , line ,circle 等)以及在 D3.js 中的应用
keywords: d3.js, emberjs , typescript , svg 
thumbnail: svg-basic-shape.jpg
---


在 D3.js 中,根据要展示的数据,我们挑选合适的 svg 中的基础图形,然后进行一系列的设置等,使其达到我们的要求.  

这里就把自己在使用 D3.js 绘制图形的过程中,使用到的一些基本图形记录下来.    

[项目地址](https://frankwang1991.github.io/ember-d3-demo/#/d3)  

## 矩形 - rect

矩形在可视化的图表中,可以用来展示柱状图以及柱状堆积图等.  

![rect](https://i.loli.net/2020/03/15/HoIdRe6mFM5Tv38.png)

现在来看一下在页面中生成的这样的图形的 HTML 代码是什么:  

```html
<svg width="100" height="100" style="background-color: rgb(250, 251, 252);">
    <rect x="10" y="10" width="24" height="80" fill="lightblue"></rect>
</svg>
```

通过代码我们大概可以得出,画出一个矩形,需要两个步骤:

- 绘制 svg 容器
- 添加 rect 元素(表示矩形)  

所以我们使用 D3.js 来绘制这样的矩形的代码就是:  

```javascript
initRect() {
  let container = select(".b-rect");
  let rectSvg = container.append('svg')
  .attr('width',100)
  .attr('height',100)
  .style('background-color','#fafbfc');

  rectSvg.append('rect')
    .attr('x',10)
    .attr('y',10)
    .attr('width',24)
    .attr('height',80)
    .attr('fill','lightblue')
}
```

可以看出,代码也是遵循的上文所说的两步.  

需要注意的是,我们如何控制一个 rect 元素的属性,使其可以达到我们想要的样式,那就需要修改 rect 元素的基本的四个属性:

- x - 控制当前矩形(左上角)距离 svg 坐标系的横轴 0 点的距离;
- y - 控制当前矩形(左上角)距离 svg 坐标系的纵轴 0 点的距离;
- width - 控制当前矩形的宽度.(D3.js 中可以使用 bandWidth 属性获取)
- height - 控制当前矩形的高度.

这四个属性设置了之后,我们的矩形就出来了.进一步的设置样式的话,需要使用其他的属性,例如 `fill` 等.  

**注意** 这里需要特别注意的是 svg 中画布的坐标系:

![Canvas_default_grid](https://i.loli.net/2020/03/15/zMJ74X8r3SPnxkh.png)

可以看这个来自 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Tutorial/Positions) 的图片.x 轴的正方向是 x 轴 0 点的位置水平向右. y 轴的正方向是 y 轴零点的位置垂直向下.  

## 直线 - line

直线通常在可视化图形中作为图例中线条的图例而使用.

![屏幕快照 2020-03-15 下午6.09.31](https://i.loli.net/2020/03/15/Ef6bxm27onG51Bt.png)

还是先来看一下直线在 HTML 代码中是什么样的:

```html
<svg width="100" height="100" style="background-color: #f8f9fa;">
    <line x1="10" y1="10" x2="60" y2="60" stroke="lightblue" stroke-width="4"></line></svg>
```

同样的,生成一条直线也是需要两步:  

- svg 容器
- line 元素

同样的使用 D3.js 来绘制一条直线那就没多大问题了:

``` javascript
initLine() {
    let container = select(".b-line");
    let rectSvg = container.append('svg')
    .attr('width',100)
    .attr('height',100)
    .style('background-color','white');

    rectSvg.append('line')
        .attr('x1',10)
        .attr('y1',10)
        .attr('x2',60)
        .attr('y2',60)
        .attr('stroke',"lightblue")
        .attr('stroke-width',4)
}
```

和上文中生成矩形的代码大致相同,所以我们的关注点放在 line 元素必须属性的相关设置:

- x1 / x2 - 直线起点/终点的 x 轴方向上的坐标位置
- y1 / y2 - 直线起点/终点的 y 轴方向上的坐标位置
- stroke-width - 直线的宽度
- stroke - 直线填充的颜色

其中 x1 / x2 / y1 / y2 为 line 元素特有的属性.  

有了这四个属性如果不添加 stroke 相关的属性,直线还是不会在页面中展示出来的.因为直线在几何中是一维的.  

## 圆形 - circle

圆形在可视化中可以作为散点图中的气泡等.  

![屏幕快照 2020-03-15 下午6.34.38](https://i.loli.net/2020/03/15/wnH1oskB9g7ycav.png)

同样,还是先看 circle 元素在 HTML 中的展现形式:

```html
<svg width="100" height="100" style="background-color: rgb(250, 251, 252);">
    <circle cx="50" cy="50" r="25" fill="lightblue"></circle>
</svg>
```

这次是使用的 svg 中的 cirlce 元素标签.

那么使用 D3.js 绘制一个这样的圆形的代码则是:

```javascript
initCircle() {
    let container = select(".b-circle");
    let rectSvg = container.append('svg')
    .attr('width',100)
    .attr('height',100)
    .style('background-color','#fafbfc');

    rectSvg.append('circle')
        .attr('cx',50)
        .attr('cy',50)
        .attr('r',25)
        .attr('fill',"lightblue")
}
```

每个 svg 的图形元素都会有自己的一些专有属性,那属于 circle 元素的专有属性为:

- cx - circle 的圆心 x 轴坐标
- cy - circle 的圆心 y 轴坐标
- r - circle 的半径

那既然有 circle ,椭圆的画法也就很明了了:

## 椭圆 - ellipse

![image-20200315192130685](https://i.loli.net/2020/03/15/LqZlrPzVFiR5p1s.png)

由于跟 circle 相差不大,所以直接上相关的代码:

```html
<svg width="100" height="100" style="background-color: rgb(250, 251, 252);">
    <ellipse cx="50" cy="50" rx="30" ry="20" fill="lightblue"></ellipse>
</svg>
```

使用 D3.js 来生成这样的图形的代码则是:

```javascript
initEllipse() {
    let container = select(".b-ellipse");
    let rectSvg = container.append('svg')
    .attr('width',100)
    .attr('height',100)
    .style('background-color','#fafbfc');

    rectSvg.append('ellipse')
        .attr('cx',50)
        .attr('cy',50)
        .attr('rx',30)
        .attr('ry',20)
        .attr('fill',"lightblue")
}
```

椭圆的相关属性:

- cx / cy 同 circle 中的相应属性
- rx / ry 也是很好理解,对应椭圆 x / y 轴的长度,与数学上定义的椭圆一样.  

折现&多边形 - polyline&polygon

这个在实际的生产中暂时没有用到,就简单的提一下:

![image-20200315193546918](https://i.loli.net/2020/03/15/5aL9I1X2ABulUcj.png)

```html
<svg width="100" height="100" style="background-color: rgb(250, 251, 252);">
    <polyline points="05,30 15,30 15,20 25,20 25,10 35,10" stroke-width="4" stroke="lightblue" fill="none"></polyline>
    <polygon points="80,80 100,80 100,100 80,100" stroke-width="4" stroke="lightblue" fill="lightgreen"></polygon>
</svg>
```

看了代码应该比较清楚.  

但是在 D3.js 中是不会使用 `<line>` ,`<polyline>` 生成相关的折线图的. D3.js 中使用的相关 API 是 `d3.line` ,而使用的 svg 元素则是 path. 详情请查看[d3.line](https://github.com/xswei/d3-shape/blob/master/README.md#line) .

