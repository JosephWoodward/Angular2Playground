System.register(['angular2/platform/browser', "./appPiano.component"], function(exports_1) {
    var browser_1, appPiano_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (appPiano_component_1_1) {
                appPiano_component_1 = appPiano_component_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(appPiano_component_1.AppPianoComponent);
        }
    }
});
//# sourceMappingURL=boot.js.map