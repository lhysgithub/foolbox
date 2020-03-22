(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{252:function(t,e,a){"use strict";a.r(e);var o=a(28),n=Object(o.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"development"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#development"}},[t._v("#")]),t._v(" Development")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("NOTE")]),t._v(" "),a("p",[t._v("The following is only necessary if you want to contribute features or\nadversarial attacks to Foolbox. As a user of Foolbox, you can just do a normal\n"),a("a",{attrs:{href:"./getting-started"}},[t._v("installation")]),t._v(".")])]),t._v(" "),a("h2",{attrs:{id:"installation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[t._v("#")]),t._v(" Installation")]),t._v(" "),a("p",[t._v("First clone the repsository using "),a("code",[t._v("git")]),t._v(":")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/bethgelab/foolbox\n")])])]),a("p",[t._v("You can then do an editable installation using "),a("code",[t._v("pip -e")]),t._v(":")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" foolbox\npip3 "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -e "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("Create a new branch for each new feature or contribution.\nThis will be necessary to open a pull request later.")])]),t._v(" "),a("h2",{attrs:{id:"coding-style"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#coding-style"}},[t._v("#")]),t._v(" Coding Style")]),t._v(" "),a("p",[t._v("We follow the "),a("a",{attrs:{href:"https://www.python.org/dev/peps/pep-0008/",target:"_blank",rel:"noopener noreferrer"}},[t._v("PEP 8 Style Guide for Python Code"),a("OutboundLink")],1),t._v(".\nWe use "),a("a",{attrs:{href:"https://github.com/psf/black",target:"_blank",rel:"noopener noreferrer"}},[t._v("black"),a("OutboundLink")],1),t._v(" for automatic code formatting.\nIn addition, we use "),a("a",{attrs:{href:"https://flake8.pycqa.org/en/latest/",target:"_blank",rel:"noopener noreferrer"}},[t._v("flake8"),a("OutboundLink")],1),t._v(" to detect\ncertain PEP 8 violations.")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("Have a look at the "),a("code",[t._v("Makefile")]),t._v(". It contains many useful commands, e.g. "),a("code",[t._v("make black")]),t._v(" or "),a("code",[t._v("make flake8")]),t._v(".")])]),t._v(" "),a("h2",{attrs:{id:"type-annotions-and-mypy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#type-annotions-and-mypy"}},[t._v("#")]),t._v(" Type annotions and MyPy")]),t._v(" "),a("p",[t._v("Foolbox uses Python type annotations introduced in "),a("a",{attrs:{href:"https://www.python.org/dev/peps/pep-0484/",target:"_blank",rel:"noopener noreferrer"}},[t._v("PEP 484"),a("OutboundLink")],1),t._v(".\nWe use "),a("a",{attrs:{href:"http://mypy-lang.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("mypy"),a("OutboundLink")],1),t._v(" for static type checking with relatively\nstrict settings. All code in Foolbox has to be type annotated.")]),t._v(" "),a("p",[t._v("We recommend to run MyPy or a comparable type checker automatically in your\neditor (e.g. VIM) or IDE (e.g. PyCharm). You can also run MyPy from the\ncommand line:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" mypy  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# run this in the root folder that contains the Makefile")]),t._v("\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("NOTE")]),t._v(" "),a("p",[a("code",[t._v("__init__")]),t._v(" methods in Foolbox should not have return type annotations unless\nthey have no type annotated arguments (i.e. only "),a("code",[t._v("self")]),t._v("), in which case\nthe return type of "),a("code",[t._v("__init__")]),t._v(" should be specifed as "),a("code",[t._v("None")]),t._v(".")])]),t._v(" "),a("h2",{attrs:{id:"creating-a-pull-request-on-github"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-pull-request-on-github"}},[t._v("#")]),t._v(" Creating a pull request on GitHub")]),t._v(" "),a("p",[t._v("First, fork the "),a("a",{attrs:{href:"https://github.com/bethgelab/foolbox",target:"_blank",rel:"noopener noreferrer"}},[t._v("Foolbox repository on GitHub"),a("OutboundLink")],1),t._v(".\nThen, add the fork to your local GitHub repository:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" fork https://github.com/YOUR USERNAME/foolbox\n")])])]),a("p",[t._v("Finally, push your new branch to GitHub and open a pull request.")])])}),[],!1,null,null,null);e.default=n.exports}}]);