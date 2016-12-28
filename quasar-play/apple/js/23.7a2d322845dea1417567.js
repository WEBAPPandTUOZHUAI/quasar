webpackJsonp([23,95],{210:function(t,a,e){var i,s;i=e(280);var o=e(366);s=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(s=i=i.default),"function"==typeof s&&(s=s.options),s.render=o.render,s.staticRenderFns=o.staticRenderFns,t.exports=i},280:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=e(2);a.default={data:function(){return{types:[{label:"Basic",ref:"basicModal"},{label:"Basic with Events",ref:"eventsModal"},{label:"With Layout",ref:"layoutModal"},{label:"Always Minimized",ref:"minimizedModal"},{label:"Always Maximized",ref:"maximizedModal"}]}},methods:{notify:function(t){i.Toast.create('Event "'+t+'" was triggered.')}}}},366:function(t,a){t.exports={render:function(){var t=this,a=(t.$createElement,t._c);return a("div",[a("div",{staticClass:"layout-padding"},[t._m(0),t._v(" "),a("div",{staticClass:"list",staticStyle:{"max-width":"600px"}},t._l(t.types,function(e){return a("div",{staticClass:"item item-link",on:{click:function(a){t.$refs[e.ref].open()}}},[a("i",{staticClass:"item-primary"},[t._v("open_in_new")]),t._v(" "),a("div",{staticClass:"item-content has-secondary"},[a("div",[t._v(t._s(e.label))])]),t._v(" "),a("i",{staticClass:"item-secondary"},[t._v("keyboard_arrow_right")])])}))]),t._v(" "),a("q-modal",{ref:"basicModal",attrs:{"content-css":{padding:"50px",minWidth:"50vw"}}},[a("h4",[t._v("Basic Modal")]),t._v(" "),t._l(25,function(e){return a("p",[t._v("Scroll down to close")])}),t._v(" "),a("button",{staticClass:"primary",on:{click:function(a){t.$refs.basicModal.close()}}},[t._v("Close")])],2),t._v(" "),a("q-modal",{ref:"eventsModal",attrs:{"content-css":{padding:"50px",minWidth:"50vw"}},on:{open:function(a){t.notify("open")},"escape-key":function(a){t.notify("escape-key")},close:function(a){t.notify("close")}}},[a("h4",[t._v("Modal with Events")]),t._v(" "),t._l(25,function(e){return a("p",[t._v("Scroll down to close")])}),t._v(" "),a("button",{staticClass:"primary",on:{click:function(a){t.$refs.eventsModal.close()}}},[t._v("Close")])],2),t._v(" "),a("q-modal",{ref:"layoutModal",attrs:{"content-css":{minWidth:"80vw",minHeight:"80vh"}}},[a("q-layout",[a("div",{staticClass:"toolbar",slot:"header"},[a("button",{on:{click:function(a){t.$refs.layoutModal.close()}}},[a("i",[t._v("keyboard_arrow_left")])]),t._v(" "),a("q-toolbar-title",{attrs:{padding:1}},[t._v("\n          Header\n        ")])],1),t._v(" "),a("div",{staticClass:"toolbar primary",slot:"header"},[a("q-search",{staticClass:"primary"})],1),t._v(" "),a("div",{staticClass:"toolbar",slot:"footer"},[a("q-toolbar-title",{attrs:{padding:1}},[t._v("\n          Footer\n        ")])],1),t._v(" "),a("div",{staticClass:"layout-view"},[a("div",{staticClass:"layout-padding"},[a("h1",[t._v("Modal")]),t._v(" "),a("button",{staticClass:"primary",on:{click:function(a){t.$refs.layoutModal.close()}}},[t._v("Close")]),t._v(" "),t._l(15,function(e){return a("p",{staticClass:"caption"},[t._v("This is a Modal presenting a Layout.")])})],2)])])],1),t._v(" "),a("q-modal",{ref:"minimizedModal",staticClass:"minimized",attrs:{"content-css":{padding:"50px"}}},[a("h4",[t._v("Minimized Modal")]),t._v(" "),a("p",[t._v("This one has backdrop on small screens too.")]),t._v(" "),a("button",{staticClass:"tertiary",on:{click:function(a){t.$refs.basicModal.close()}}},[t._v("Close Me")])]),t._v(" "),a("q-modal",{ref:"maximizedModal",staticClass:"maximized",attrs:{"content-css":{padding:"50px"}}},[a("h4",[t._v("Maximized Modal")]),a("p",[t._v("This one is maximized on bigger screens too.")]),t._v(" "),a("button",{staticClass:"tertiary",on:{click:function(a){t.$refs.maximizedModal.close()}}},[t._v("Close Me")])])],1)},staticRenderFns:[function(){var t=this,a=(t.$createElement,t._c);return a("p",{staticClass:"caption"},[a("span",{staticClass:"desktop-only"},[t._v("Click")]),t._v(" "),a("span",{staticClass:"mobile-only"},[t._v("Tap")]),t._v("\n      on each type to see it in action.\n    ")])}]}}});