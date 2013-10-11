// ==========================================================================
// Project:   Pony - mainPage
// Copyright: @2013 My Company, Inc.
// ==========================================================================
/*globals Pony */

Pony.transitionSpeed = 0.5;

// This page describes the main user interface for your application.
Pony.mainPage = SC.Page.design({

  // The main pane is made visible on screen as soon as your app is loaded.
  // Add childViews to this pane for views to display immediately on page
  // load.
  mainPane: SC.MainPane.design({
    childViews: 'toolbar main toolbox'.w(),

    toolbar: SC.ToolbarView.design({
        layout: { left: 0, right: 0, height: 32, zIndex: 10, top: 0 },
        // Automatic transitions, courtesy of SC 1.10
        transitionIn: SC.View.SLIDE_IN,
        transitionInOptions: { direction: 'down', duration: Pony.transitionSpeed, delay: Pony.transitionSpeed },

        transitionOut: SC.View.SLIDE_OUT,
        transitionOutOptions: { direction: 'up', duration: Pony.transitionSpeed, delay: Pony.transitionSpeed },
        
        childViews: "button1 button2".w(),
        
        button1: SC.ButtonView.design({
            layout: {centerY:0, width: 100, right: 25, height: 24},
            title: "Button1"
        }),
        button2: SC.ButtonView.design({
            layout: {centerY:0, width: 100, right: 150, height: 24},
            title: "Button2"
        })
    }),
    main: SC.LabelView.design({
        classNames: ['main'],
        layout: {top:32, bottom:0, left:0, right:0},
        value: "main",
        transitionIn: SC.View.SLIDE_IN,
        transitionInOptions: { direction: 'right', duration: Pony.transitionSpeed },

        transitionOut: SC.View.SLIDE_OUT,
        transitionOutOptions: { direction: 'left', duration: Pony.transitionSpeed }
    }),
    toolbox: SC.LabelView.design({
        classNames: ['toolbox'],
        layout: {top:32, bottom:0, width:300, right:0},
        value: "toolbox",
        transitionIn: SC.View.SLIDE_IN,
        transitionInOptions: { direction: 'left', duration: Pony.transitionSpeed },

        transitionOut: SC.View.SLIDE_OUT,
        transitionOutOptions: { direction: 'right', duration: Pony.transitionSpeed }
    })
  })

});
