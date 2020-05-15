require.config({
  waitSeconds: 0, paths: {
    jquery: "lib/jquery/jquery-1.11.3",
    "jQuery.plugin": "lib/jquery/jquery.plugin.min",
    "jquery.mousewheel": "lib/jquery/jquery.mousewheel.min",
    "jquery.colorbox": "lib/jquery/jquery.colorbox",
    "jquery.tabify": "lib/jquery/jquery.tabify",
    "jquery.ui": "lib/jquery/jquery-ui.min",
    "jquery.ui.sortable": "lib/jquery/jquery-ui.sortable",
    "jquery.scrollbar": "lib/jquery/jquery.scrollbar",
    "jQuery.countdown": "lib/jquery/jquery.countdown.min",
    "jQuery.countdown-zh-TW": "lib/jquery/jquery.countdown-zh-TW",
    "jQuery.countdown-ru": "lib/jquery/jquery.countdown-ru",
    "jQuery.countdown-th": "lib/jquery/jquery.countdown-th",
    daterangepicker: "lib/jquery/daterangepicker",
    select2: "lib/select2/select2",
    "backbone-raw": "lib/backbone/backbone-0.9.2",
    "backbone-relational": "lib/backbone/backbone-relational",
    "backbone-paginator": "lib/backbone/backbone.paginator",
    Backbone: "lib/backbone/backbone",
    Underscore: "lib/underscore/underscore",
    text: "lib/requirejs/plugins/text",
    goog: "lib/requirejs/plugins/goog",
    propertyParser: "lib/requirejs/plugins/propertyParser",
    async: "lib/requirejs/plugins/async",
    HandlebarsCore: "lib/handlebars-latest",
    Handlebars: "lib/Handlebars",
    moment: "lib/moment/moment",
    "moment-tz": "lib/moment/moment-tz",
    nprogress: "lib/nprogress",
    webfont: "lib/webfont-1.5.0",
    vue: "lib/vue.min",
    vuex: "lib/vue/vuex",
    "vue-router": "lib/vue/vue-router",
    "vue-infinite-scroll": "lib/vue/vue-infinite-scroll",
    "vue-multiselect": "lib/vue/vue-multiselect.min",
    "vue-toastr": "lib/vue/vue-toastr.min",
    "vue-modal": "lib/vue/vue-modal.min",
    clipboard: "lib/clipboard",
    "vue-clipboard": "lib/vue/vue-clipboard",
    "bootstrap-tooltip": "lib/bootstrap/bootstrap-tooltip",
    lscache: "lib/lscache",
    dygraph: "lib/dygraph",
    "es6-promise": "lib/es6-promise.auto.min",
    base64: "lib/base64",
    favico: "lib/favico",
    "progressive-image": "lib/progressive-image",
    flatpickr: "lib/flatpickr",
    "vue-flatpickr": "lib/vue/vue-flatpickr.min",
    "browser-acl": "lib/browser-acl.min",
    "vue-browser-acl": "lib/vue/vue-browser-acl.min",
    axios: "lib/axios.min",
    bootstrap: "lib/bootstrap/bootstrap-native-v4.min",
    fetch: "lib/polyfill/fetch.umd",
    "abort-controller": "lib/polyfill/abort-controller.umd",
    "custom-event": "lib/polyfill/custom-event",
    nodelist: "lib/polyfill/nodelist",
    "ace/ace": "lib/ace/ace",
    "ace/ext/language_tools": "lib/ace/ext-language_tools",
    "ace/theme/item_filter": "lib/ace/theme-item_filter",
    "ace/mode/item_filter": "lib/ace/mode-item_filter",
    "ace/ext/searchbox": "lib/ace/ext-searchbox"
  }, shim: {
    jquery: {exports: "$"},
    "jQuery.plugin": {deps: ["jquery"]},
    "jquery.mousewheel": {deps: ["jquery"]},
    "jquery.colorbox": {deps: ["jquery"]},
    "jquery.tabify": {deps: ["jquery"]},
    "jquery.ui": {deps: ["jquery"]},
    "jquery.ui.sortable": {deps: ["jquery"]},
    "jquery.scrollbar": {deps: ["jquery"]},
    "jQuery.countdown": {deps: ["jquery", "jQuery.plugin"]},
    "jQuery.countdown-zh-TW": {deps: ["jquery", "jQuery.plugin", "jQuery.countdown"]},
    "jQuery.countdown-ru": {deps: ["jquery", "jQuery.plugin", "jQuery.countdown"]},
    "jQuery.countdown-th": {deps: ["jquery", "jQuery.plugin", "jQuery.countdown"]},
    daterangepicker: {deps: ["jquery", "moment-tz"]},
    select2: {deps: ["jquery"], exports: "$.fn.select2"},
    "backbone-raw": {deps: ["Underscore", "jquery"], exports: "Backbone"},
    "backbone-relational": {deps: ["backbone-raw"]},
    "backbone-paginator": {deps: ["backbone-raw"]},
    Backbone: {deps: ["backbone-raw", "backbone-relational", "backbone-paginator"]},
    Underscore: {exports: "_"},
    HandlebarsCore: {exports: "Handlebars"},
    Handlebars: {deps: ["HandlebarsCore"], exports: "Handlebars"},
    nprogress: {deps: ["jquery"], exports: "NProgress"},
    webfont: {exports: "WebFont"},
    "PoE/Form": {deps: ["jquery"]},
    main: {deps: ["plugins"]},
    "main-admin": {deps: ["plugins"]},
    vue: {exports: "Vue"},
    vuex: {deps: ["vue", "es6-promise"]},
    "vue-router": {deps: ["vue", "es6-promise"]},
    "vue-infinite-scroll": {deps: ["vue"]},
    "vue-multiselect": {deps: ["vue"]},
    "vue-toastr": {deps: ["vue"]},
    "vue-flatpickr": {deps: ["vue", "flatpickr"]},
    "vue-clipboard": {deps: ["vue", "clipboard"]},
    "bootstrap-tooltip": {deps: ["plugins"]},
    lscache: {exports: "lscache"},
    "es6-promise": {exports: "Promise"},
    base64: {exports: "Base64"},
    fetch: {exports: "Fetch"},
    "abort-controller": {exports: "AbortController"},
    "custom-event": {exports: "CustomEvent"},
    "vue-browser-acl": {deps: ["vue", "browser-acl"]},
    trade: {deps: ["plugins"]},
    "ace/ace": {exports: ["ace"]},
    "ace/ext/language_tools": {deps: ["ace/ace"]},
    "ace/mode/item_filter": {deps: ["ace/ace"]},
    "ace/theme/item_filter": {deps: ["ace/ace"]},
    "ace/ext/searchbox": {deps: ["ace/ace"]}
  }
});
