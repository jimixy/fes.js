(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{408:function(t,e,a){var l=a(2),n=a(6),i=a(214),s=[].slice,c=function(t){return function(e,a){var l=arguments.length>2,n=l?s.call(arguments,2):void 0;return t(l?function(){("function"==typeof e?e:Function(e)).apply(this,n)}:e,a)}};l({global:!0,bind:!0,forced:/MSIE .\./.test(i)},{setTimeout:c(n.setTimeout),setInterval:c(n.setInterval)})},511:function(t,e,a){"use strict";a.r(e);a(408);var l=a(118),n={data:function(){return{data:[{name:"Jiangsu",code:"js",expand:!0,children:[{name:"Nanjing",code:"nj",selected:!0},{name:"Suzhou",code:"sz",children:[{name:"Wujiang",code:"wj"},{name:"Changshu",code:"cs"}]}]},{name:"Yunnan",code:"yn"},{name:"Fujian",code:"fj"}],data2:[{name:"parent",children:[]}],actions:["增加子节点","删除节点","复制节点"]}},methods:{check:function(t){console.log(t)},select:function(t){console.log(t)},loadData:function(t,e){setTimeout((function(){e([{name:"children",children:[]},{name:"children",children:[]}])}),1e3)},doAction:function(t,e){var a=Object(l.a)(e,2),n=(a[0],a[1]);0===n&&this.$refs.tree.addNode(t,{name:"test",code:"111"}),1===n&&this.$refs.tree.removeNode(t)}}},i=a(57),s=Object(i.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"tree-树形控件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tree-树形控件"}},[t._v("#")]),t._v(" Tree 树形控件")]),t._v(" "),a("h2",{attrs:{id:"概述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[t._v("#")]),t._v(" 概述")]),t._v(" "),a("p",[t._v("文件夹、组织架构、生物分类、国家地区等等，世间万物的大多数结构都是树形结构。使用树控件可以完整展现其中的层级关系，并具有展开收起选择等交互功能。")]),t._v(" "),a("h2",{attrs:{id:"代码示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码示例"}},[t._v("#")]),t._v(" 代码示例")]),t._v(" "),a("ClientOnly",[a("row",[a("cell",{staticClass:"pr-20",attrs:{span:"12"}},[a("componetTemplate",{attrs:{title:"基础用法",template:"ui/templates/tree/1.html"},scopedSlots:t._u([{key:"demo",fn:function(){return[a("Tree",{attrs:{data:t.data}})]},proxy:!0},{key:"description",fn:function(){return[a("p",[t._v("最简单的用法，点击节点可选中节点。节点expand属性配置节点是否展开。")])]},proxy:!0}])}),t._v(" "),a("componetTemplate",{attrs:{title:"动态加载数据",template:"ui/templates/tree/2.html"},scopedSlots:t._u([{key:"demo",fn:function(){return[a("Tree",{attrs:{data:t.data2,"load-data":t.loadData}})]},proxy:!0},{key:"description",fn:function(){return[a("p",[t._v("点击展开时，动态去加载子数据，如果已经加载过，则改为展开和关闭")]),t._v(" "),a("p",[t._v("子节点是否选中继承父节点的状态")])]},proxy:!0}])})],1),t._v(" "),a("cell",{staticClass:"pl-20",attrs:{span:"12"}},[a("componetTemplate",{attrs:{title:"多选+非inline展示",template:"ui/templates/tree/3.html"},scopedSlots:t._u([{key:"demo",fn:function(){return[a("Tree",{attrs:{data:t.data,multiple:"",inline:!1}})]},proxy:!0},{key:"description",fn:function(){return[a("p",[t._v("设置multiple则Tree组件是多选的，则出现checkbox框。设置inline为false，则底层节点垂直排列，非横向排列")])]},proxy:!0}])}),t._v(" "),a("componetTemplate",{attrs:{title:"自定义节点内容",template:"ui/templates/tree/4.html"},scopedSlots:t._u([{key:"demo",fn:function(){return[a("Tree",{ref:"tree",attrs:{data:t.data},scopedSlots:t._u([{key:"default",fn:function(e){var l=e.node;e.root;return[a("contextmenu",{attrs:{data:t.actions},on:{"on-choose":function(e){return t.doAction(l,arguments)}}},[a("span",[t._v(" "+t._s(l.name)+" ")])])]}}])})]},proxy:!0},{key:"description",fn:function(){return[a("p",[t._v("通过slot-scope自定义节点内容，包含两个字段：当前节点node(object)和跟节点root(object)")])]},proxy:!0}])})],1)],1)],1),t._v(" "),a("h2",{attrs:{id:"api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[t._v("#")]),t._v(" API")]),t._v(" "),a("h3",{attrs:{id:"tree-props"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tree-props"}},[t._v("#")]),t._v(" Tree Props")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("属性")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("默认值")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("data")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("可嵌套的节点属性的数组，生成 tree 的数据")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Array")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Array")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("data.name")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("节点名称")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("null")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("data.expand")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("是否展开子节点")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("false")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("data.selected")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("是否选中子节点")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("false")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("data.checked")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("是否勾选(如果勾选，子节点也会全部勾选)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("false")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("data.children")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("子节点属性数组")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Array")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("null")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("multiple")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("是否支持多选")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("false")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("inline")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("底层节点是否横向排列")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("true")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("loadData")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("加载数据")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Function")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("null")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("twiceClickSelected")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("当节点被选中时，再次点击是否继续选中")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("false")])])])]),t._v(" "),a("h3",{attrs:{id:"tabs-events"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tabs-events"}},[t._v("#")]),t._v(" Tabs Events")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("事件名")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("返回值")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("on-select-change")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("点击节点时触发")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("(node)")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("on-check-change")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("点击节点前的复选框时触发")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("([node, node])")])])])])],1)}),[],!1,null,null,null);e.default=s.exports}}]);