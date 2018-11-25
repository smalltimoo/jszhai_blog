webpackJsonp([0],{AseM:function(e,s,v){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var t={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this,s=e.$createElement,v=e._self._c||s;return v("div",{staticClass:"content"},[v("hr"),e._v(" "),v("h2",{attrs:{id:"name%3A-2018-11-23-asynclayout%3A-posttitle%3A-%22generator-%2B-promise-%E5%AE%9E%E7%8E%B0%E5%BC%82%E6%AD%A5%E7%BC%96%E7%A8%8B%22info%3A-%22%E6%80%8E%E6%A0%B7%E5%AE%9E%E7%8E%B0%E5%BC%82%E6%AD%A5%E7%BC%96%E7%A8%8B%E4%B8%80%E7%9B%B4%E6%98%AF%E4%B8%80%E4%B8%AAjavascript%E5%9C%A8%E6%8E%A2%E8%AE%A8%E7%9A%84%E9%97%AE%E9%A2%98%EF%BC%8C%E7%8E%B0%E5%9C%A8%E4%B9%9F%E5%B7%B2%E7%BB%8F%E6%9C%89%E4%BA%86%E8%AE%B8%E5%A4%9A%E6%88%90%E7%86%9F%E7%9A%84%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88%EF%BC%8C%E7%8E%B0%E5%9C%A8%E5%B0%B1generator-%2B-promise-%E8%BF%99%E7%A7%8D%E6%96%B9%E5%BC%8F%E6%9D%A5%E5%AE%9E%E7%8E%B0%E4%B8%80%E6%8A%8A%22date%3A-2018-11-23categories%3A-lifetags%3A-%5Bjavascript%2Casync%2Cgenerator%2Cpromise%5Dcoverimg%3A-%22http%3A%2F%2Fww1.sinaimg.cn%2Flarge%2F88b26e1cly1fxhw8iu0q0j23vc2kwnpk.jpg%22"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#name%3A-2018-11-23-asynclayout%3A-posttitle%3A-%22generator-%2B-promise-%E5%AE%9E%E7%8E%B0%E5%BC%82%E6%AD%A5%E7%BC%96%E7%A8%8B%22info%3A-%22%E6%80%8E%E6%A0%B7%E5%AE%9E%E7%8E%B0%E5%BC%82%E6%AD%A5%E7%BC%96%E7%A8%8B%E4%B8%80%E7%9B%B4%E6%98%AF%E4%B8%80%E4%B8%AAjavascript%E5%9C%A8%E6%8E%A2%E8%AE%A8%E7%9A%84%E9%97%AE%E9%A2%98%EF%BC%8C%E7%8E%B0%E5%9C%A8%E4%B9%9F%E5%B7%B2%E7%BB%8F%E6%9C%89%E4%BA%86%E8%AE%B8%E5%A4%9A%E6%88%90%E7%86%9F%E7%9A%84%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88%EF%BC%8C%E7%8E%B0%E5%9C%A8%E5%B0%B1generator-%2B-promise-%E8%BF%99%E7%A7%8D%E6%96%B9%E5%BC%8F%E6%9D%A5%E5%AE%9E%E7%8E%B0%E4%B8%80%E6%8A%8A%22date%3A-2018-11-23categories%3A-lifetags%3A-%5Bjavascript%2Casync%2Cgenerator%2Cpromise%5Dcoverimg%3A-%22http%3A%2F%2Fww1.sinaimg.cn%2Flarge%2F88b26e1cly1fxhw8iu0q0j23vc2kwnpk.jpg%22","aria-hidden":"true"}},[e._v("#")]),e._v(' name: 2018-11-23-Async\nlayout: post\ntitle:  "Generator + Promise 实现异步编程"\ninfo: "怎样实现异步编程一直是一个JavaScript在探讨的问题，现在也已经有了许多成熟的解决方案，现在就Generator + Promise 这种方式来实现一把"\ndate:   2018-11-23\ncategories: LIFE\ntags: [Javascript,Async,Generator,Promise]\ncoverimg: "http://ww1.sinaimg.cn/large/88b26e1cly1fxhw8iu0q0j23vc2kwnpk.jpg"')]),e._v(" "),v("h2",{attrs:{id:"%E5%9F%BA%E7%A1%80%E5%8E%9F%E7%90%86"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#%E5%9F%BA%E7%A1%80%E5%8E%9F%E7%90%86","aria-hidden":"true"}},[e._v("#")]),e._v(" 基础原理")]),e._v(" "),v("hr"),e._v(" "),v("p",[e._v("我们项目中使用的是"),v("code",[e._v("Generator")]),e._v("配合"),v("code",[e._v("Promise")]),e._v("来实现了异步的编程，在我们继续之前，我们需要明白：")]),e._v(" "),v("ol",[v("li",[v("code",[e._v("Generator")]),e._v("作为ES6中使用协程的解决方案来处理异步编程的具体实现，以下是它的特点")])]),e._v(" "),v("ul",[v("li",[e._v("\b"),v("code",[e._v("Generator")]),e._v("中可以使用"),v("code",[e._v("yield")]),e._v("关键字配合调用"),v("code",[e._v("gen.next()")]),e._v("来将其内部的语句分割执行。\n简言之 : "),v("code",[e._v("next()")]),e._v("被调用一次，则"),v("code",[e._v("yield")]),e._v("语句被执行一句，\b随着"),v("code",[e._v("next()")]),e._v("调用，"),v("code",[e._v("yield")]),e._v("语句被依次执行。")])]),e._v(" "),v("ol",{attrs:{start:"2"}},[v("li",[v("code",[e._v("Promise")]),e._v("表示一个异步操作的最终状态（完成或失败），以及其返回的值。\n参考"),v("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise"}},[e._v("Promise-MDN")])])]),e._v(" "),v("p",[e._v("所以,异步编程使用\b"),v("code",[e._v("Generator")]),e._v("和"),v("code",[e._v("Promise")]),e._v("来实现的原理是什么呢？")]),e._v(" "),v("ol",[v("li",[e._v("因为\b"),v("code",[e._v("Generator")]),e._v("本身"),v("code",[e._v("yield")]),e._v("语句是分离执行的，所以我们利用这一点，在"),v("code",[e._v("yield")]),e._v("语句中\b返回一个"),v("code",[e._v("Promise")])]),e._v(" "),v("li",[e._v("首次调用"),v("code",[e._v("Generator")]),e._v("中的"),v("code",[e._v("next()")]),e._v("后\b\b假设返回值叫"),v("code",[e._v("result")]),e._v(",那么此时"),v("code",[e._v("result.value")]),e._v("就是我们定义在"),v("code",[e._v("Generator")]),e._v("中的"),v("code",[e._v("Promise")]),e._v("对象")])]),e._v(" "),v("p",[v("em",[e._v("注意：在这一步，我们已经把原来的执行流程暂停，转而执行"),v("code",[e._v("Promise")]),e._v("的内容,\b已经实现了控制异步代码的执行，因为此时我们如果不继续执行"),v("code",[e._v("next()")]),e._v("则"),v("code",[e._v("generator")]),e._v("中当前被执行的"),v("code",[e._v("yield")]),e._v("后面的内容不会继续执行,这已经达到了我们需要的效果")]),e._v("\n3. 接下来我们就是在执行完当前"),v("code",[e._v("Promise")]),e._v("之后，让代码继续往下执行，直到遇到下一个"),v("code",[e._v("yield")]),e._v("语句:"),v("br"),e._v(" "),v("em",[e._v("请注意，这一步是最关键的")]),e._v(" \b 所以我们怎么做呢:")]),e._v(" "),v("p",[e._v("\b步骤1： 在当前的"),v("code",[e._v("Promise")]),e._v("的"),v("code",[e._v("then()")]),e._v("方法中，继续执行"),v("code",[e._v("gen.next()")]),e._v("\n步骤2： 当"),v("code",[e._v("gen.next()")]),e._v("返回的结果"),v("code",[e._v("result.done === true")]),e._v("时,我们拿到"),v("code",[e._v("result.value")]),e._v("【也就是一个新的"),v("code",[e._v("Promise")]),e._v("对象】再次执行并且在它的"),v("code",[e._v("then()")]),e._v("方法中继续上面的步骤1，直至"),v("code",[e._v("result.done === false")]),e._v("的时候。这时候调用"),v("code",[e._v("resolve()")]),e._v("使"),v("code",[e._v("promise")]),e._v("状态改变，因为所有的"),v("code",[e._v("yield")]),e._v("语句已经被执行完。")]),e._v(" "),v("ul",[v("li",[e._v("步骤1 保证了我们可以走到下一个"),v("code",[e._v("yield")]),e._v("语句")]),e._v(" "),v("li",[e._v("步骤2 保证了下一个"),v("code",[e._v("yield")]),e._v("语句执行完不会中断，直至"),v("code",[e._v("Generator")]),e._v("中的最后一个"),v("code",[e._v("yield")]),e._v("语句被执行完。\n示意图:")])]),e._v(" "),v("p",[v("img",{attrs:{src:"http://ww1.sinaimg.cn/large/88b26e1cgy1fxhu2b6k7qj220213s0yp.jpg",alt:""}})]),e._v(" "),v("h2",{attrs:{id:"%E5%85%B7%E4%BD%93%E5%AE%9E%E7%8E%B0"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#%E5%85%B7%E4%BD%93%E5%AE%9E%E7%8E%B0","aria-hidden":"true"}},[e._v("#")]),e._v(" 具体实现")]),e._v(" "),v("hr"),e._v(" "),v("blockquote",[v("p",[e._v("从"),v("code",[e._v("co")]),e._v("库中的一个demo开始，了解我们的整个异步请求封装实现")])]),e._v(" "),v("pre",{staticClass:"hljs"},[v("code",[e._v("co("),v("span",{staticClass:"hljs-function"},[v("span",{staticClass:"hljs-keyword"},[e._v("function")]),e._v("*("),v("span",{staticClass:"hljs-params"}),e._v(") ")]),e._v("{\n    "),v("span",{staticClass:"hljs-keyword"},[e._v("yield")]),e._v(" me.loginAction(me.form);\n    ...\n});\n")])]),e._v(" "),v("p",[e._v("在这里我们引入了"),v("code",[e._v("co")]),e._v("库，并且用"),v("code",[e._v("co")]),e._v("来包裹了一个"),v("code",[e._v("generator")]),e._v("（生成器）对象。"),v("br"),e._v("\n接下来我们看下"),v("code",[e._v("co")]),e._v("对于包裹起来的"),v("code",[e._v("generator")]),e._v("做了什么处理")]),e._v(" "),v("pre",{staticClass:"hljs"},[v("code",[v("span",{staticClass:"hljs-function"},[v("span",{staticClass:"hljs-keyword"},[e._v("function")]),e._v(" "),v("span",{staticClass:"hljs-title"},[e._v("co")]),e._v("("),v("span",{staticClass:"hljs-params"},[e._v("gen")]),e._v(") ")]),e._v("{\n  "),v("span",{staticClass:"hljs-comment"},[e._v("// 1.获取当前co函数的执行上下文环境,获取到参数列表")]),e._v("\n  "),v("span",{staticClass:"hljs-keyword"},[e._v("var")]),e._v(" ctx = "),v("span",{staticClass:"hljs-keyword"},[e._v("this")]),e._v(";\n  "),v("span",{staticClass:"hljs-keyword"},[e._v("var")]),e._v(" args = slice.call("),v("span",{staticClass:"hljs-built_in"},[e._v("arguments")]),e._v(", "),v("span",{staticClass:"hljs-number"},[e._v("1")]),e._v(");\n  "),v("span",{staticClass:"hljs-comment"},[e._v("// 2.返回一个Promise对象")]),e._v("\n  "),v("span",{staticClass:"hljs-keyword"},[e._v("return")]),e._v(" "),v("span",{staticClass:"hljs-keyword"},[e._v("new")]),e._v(" "),v("span",{staticClass:"hljs-built_in"},[e._v("Promise")]),e._v("("),v("span",{staticClass:"hljs-function"},[v("span",{staticClass:"hljs-keyword"},[e._v("function")]),e._v("("),v("span",{staticClass:"hljs-params"},[e._v("resolve, reject")]),e._v(") ")]),e._v("{\n    "),v("span",{staticClass:"hljs-comment"},[e._v("//  判断并且使用ctx:context(上下文环境)和arg:arguments(参数列表)初始化generator并且复制给gen")]),e._v("\n    "),v("span",{staticClass:"hljs-comment"},[e._v("// 注意:")]),e._v("\n    "),v("span",{staticClass:"hljs-comment"},[e._v("// gen = gen.apply(ctx, args)之后")]),e._v("\n    "),v("span",{staticClass:"hljs-comment"},[e._v("// 我们调用 gen.next() 时，返回的是一个指针，实际的值是一个对象")]),e._v("\n    "),v("span",{staticClass:"hljs-comment"},[e._v("// 对象的形式：{done:[false | true], value: ''}")]),e._v("\n    "),v("span",{staticClass:"hljs-keyword"},[e._v("if")]),e._v(" ("),v("span",{staticClass:"hljs-keyword"},[e._v("typeof")]),e._v(" gen === "),v("span",{staticClass:"hljs-string"},[e._v("'function'")]),e._v(") gen = gen.apply(ctx, args);\n    "),v("span",{staticClass:"hljs-comment"},[e._v("// 当返回值不为gen时或者gen.next的类型不为function【实际是判断是否为generator】时")]),e._v("\n    "),v("span",{staticClass:"hljs-comment"},[e._v("// 当前promise状态被设置为resolve而结束")]),e._v("\n    "),v("span",{staticClass:"hljs-keyword"},[e._v("if")]),e._v(" (!gen || "),v("span",{staticClass:"hljs-keyword"},[e._v("typeof")]),e._v(" gen.next !== "),v("span",{staticClass:"hljs-string"},[e._v("'function'")]),e._v(") "),v("span",{staticClass:"hljs-keyword"},[e._v("return")]),e._v(" resolve(gen);\n    "),v("span",{staticClass:"hljs-comment"},[e._v("// 否则执行onFulfilled()")]),e._v("\n    onFulfilled();\n  });\n}\n")])]),e._v(" "),v("p",[e._v("总结一下这里发生了什么")]),e._v(" "),v("ol",[v("li",[e._v("返回一个"),v("code",[e._v("promise")])]),e._v(" "),v("li",[e._v("promise中将被包裹的"),v("code",[e._v("generator")]),e._v("实例化为一个指针，指向"),v("code",[e._v("generator")]),e._v("中第一个"),v("code",[e._v("yield")]),e._v("语句")]),e._v(" "),v("li",[e._v("判断"),v("code",[e._v("generator")]),e._v("实例化出来的指针是否存在：如果没有"),v("code",[e._v("yield")]),e._v("语句则指针不存在\n判断指针"),v("code",[e._v("gen.next()")]),e._v("方法是否为"),v("code",[e._v("function")]),e._v("：如果不为"),v("code",[e._v("function")]),e._v("证明无法执行"),v("code",[e._v("gen.next()")]),e._v("\n条件有一项不满足就将"),v("code",[e._v("promise")]),e._v("的状态置为"),v("code",[e._v("resolve")]),e._v("\n否则执行"),v("code",[e._v("onFulfilled()")])])]),e._v(" "),v("p",[e._v("接下来我们看下"),v("code",[e._v("onFulfilled()")]),e._v("的实现")]),e._v(" "),v("pre",{staticClass:"hljs"},[v("code",[e._v("    "),v("span",{staticClass:"hljs-function"},[v("span",{staticClass:"hljs-keyword"},[e._v("function")]),e._v(" "),v("span",{staticClass:"hljs-title"},[e._v("onFulfilled")]),e._v("("),v("span",{staticClass:"hljs-params"},[e._v("res")]),e._v(") ")]),e._v("{\n      "),v("span",{staticClass:"hljs-comment"},[e._v("// 在执行onFulfilled时，定义了一个ret来储存gen.next(res)执行后的指针对象")]),e._v("\n      "),v("span",{staticClass:"hljs-keyword"},[e._v("var")]),e._v(" ret;\n      "),v("span",{staticClass:"hljs-keyword"},[e._v("try")]),e._v(" {\n        ret = gen.next(res);\n      "),v("span",{staticClass:"hljs-comment"},[e._v("// 在这里，yield\b语句\b抛出的值就是{value:me.loginAction(me.form), done:false}")]),e._v("\n      } "),v("span",{staticClass:"hljs-keyword"},[e._v("catch")]),e._v(" (e) {\n        "),v("span",{staticClass:"hljs-keyword"},[e._v("return")]),e._v(" reject(e);\n      }\n    "),v("span",{staticClass:"hljs-comment"},[e._v("// 将ret对象传入到我们定义在promise中的next方法中")]),e._v("\n      next(ret);\n      "),v("span",{staticClass:"hljs-keyword"},[e._v("return")]),e._v(" "),v("span",{staticClass:"hljs-literal"},[e._v("null")]),e._v(";\n    }\n")])]),e._v(" "),v("p",[e._v("总结一下，"),v("code",[e._v("onFulfilled")]),e._v("最主要的工作就是")]),e._v(" "),v("ol",[v("li",[e._v("执行"),v("code",[e._v("gen.next()")]),e._v(" 使代码执行到"),v("code",[e._v("yield")]),e._v("语句")]),e._v(" "),v("li",[e._v("将执行后返回的结果传入我们自定义的"),v("code",[e._v("next()")]),e._v("方法中")])]),e._v(" "),v("p",[e._v("那么我们再来看"),v("code",[e._v("next()")]),e._v("方法")]),e._v(" "),v("pre",{staticClass:"hljs"},[v("code",[e._v("    "),v("span",{staticClass:"hljs-function"},[v("span",{staticClass:"hljs-keyword"},[e._v("function")]),e._v(" "),v("span",{staticClass:"hljs-title"},[e._v("next")]),e._v("("),v("span",{staticClass:"hljs-params"},[e._v("ret")]),e._v(") ")]),e._v("{\n    "),v("span",{staticClass:"hljs-comment"},[e._v("// 进入next中首先判断我们传入的ret的done状态:")]),e._v("\n    "),v("span",{staticClass:"hljs-comment"},[e._v("// 情况1:ret.done = true 代表我们这个generator中所有yield语句都已经执行完。")]),e._v("\n    "),v("span",{staticClass:"hljs-comment"},[e._v("// 那么将ret.value传入到\bresolve()中，promise的状态变成解决，整个过程结束。")]),e._v("\n      "),v("span",{staticClass:"hljs-keyword"},[e._v("if")]),e._v(" (ret.done) "),v("span",{staticClass:"hljs-keyword"},[e._v("return")]),e._v(" resolve(ret.value);\n    "),v("span",{staticClass:"hljs-comment"},[e._v("// 情况2:当前ret.done = false 代表generator还未将所有的yield语句执行完，那么这时候")]),e._v("\n    "),v("span",{staticClass:"hljs-comment"},[e._v("// 我们把当前上下文和ret.value传入toPromise中，将其转换为对应的Promise对象`value`")]),e._v("\n      "),v("span",{staticClass:"hljs-keyword"},[e._v("var")]),e._v(" value = toPromise.call(ctx, ret.value);\n      "),v("span",{staticClass:"hljs-keyword"},[e._v("if")]),e._v(" (value && isPromise(value)) "),v("span",{staticClass:"hljs-keyword"},[e._v("return")]),e._v(" value.then(onFulfilled, onRejected);\n    "),v("span",{staticClass:"hljs-comment"},[e._v("// 当value确实是一个promise对象的时候，\breturn value.then(onFulfilled,onRejected)")]),e._v("\n    "),v("span",{staticClass:"hljs-comment"},[e._v("// 我们重新进入到了generator中，执行下一条yield语句")]),e._v("\n      "),v("span",{staticClass:"hljs-keyword"},[e._v("return")]),e._v(" onRejected("),v("span",{staticClass:"hljs-keyword"},[e._v("new")]),e._v(" "),v("span",{staticClass:"hljs-built_in"},[e._v("TypeError")]),e._v("("),v("span",{staticClass:"hljs-string"},[e._v("'You may only yield a function, promise, generator, array, or object, '")]),e._v("\n        + "),v("span",{staticClass:"hljs-string"},[e._v("'but the following object was passed: \"'")]),e._v(" + "),v("span",{staticClass:"hljs-built_in"},[e._v("String")]),e._v("(ret.value) + "),v("span",{staticClass:"hljs-string"},[e._v("'\"'")]),e._v("));\n    }\n")])]),e._v(" "),v("p",[e._v("总结一下，"),v("code",[e._v("next")]),e._v("主要工作")]),e._v(" "),v("ol",[v("li",[e._v("判断上一次"),v("code",[e._v("yield")]),e._v("语句的执行结果")]),e._v(" "),v("li",[e._v("将"),v("code",[e._v("yield")]),e._v("的\b"),v("code",[e._v("result")]),e._v("的"),v("code",[e._v("value")]),e._v("值【其实就是我们要异步执行的"),v("code",[e._v("Promise")]),e._v("】")]),e._v(" "),v("li",[e._v("执行"),v("code",[e._v("value")]),e._v("的"),v("code",[e._v("then")]),e._v("方法，重新进入到"),v("code",[e._v("onFulfilled")]),e._v("方法中，而在"),v("code",[e._v("onFulfilled")]),e._v("中，我们又将进入到当前方法，如此循环的调用，实现了"),v("code",[e._v("generator")]),e._v("和"),v("code",[e._v("Promise")]),e._v("的执行切换，从而实现了"),v("code",[e._v("Promise")]),e._v("的内容按照我们所定义的顺序执行。")])]),e._v(" "),v("p",[e._v("至此就是全部异步编程的实现。")])])}]},a=v("VU/8")(null,t,!1,null,null,null);s.default=a.exports}});
//# sourceMappingURL=0.6e95ed50ad63ce25853f.js.map