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
    defaultResponder: 'Pony.statechart',

    toolbar: SC.ToolbarView.design({
        layout: { left: 0, right: 0, height: 32, zIndex: 10, top: 0 },
        // Automatic transitions, courtesy of SC 1.10
        transitionIn: SC.View.SLIDE_IN,
        transitionInOptions: { direction: 'down', duration: Pony.transitionSpeed, delay: Pony.transitionSpeed },

        transitionOut: SC.View.SLIDE_OUT,
        transitionOutOptions: { direction: 'up', duration: Pony.transitionSpeed, delay: Pony.transitionSpeed },
        
        childViews: "button1 button2".w(),
        
        button1: SC.ButtonView.design({
            layout: {centerY:0, width: 100, right: 150, height: 24},
            title: "save"
        }),
        button2: SC.ButtonView.design({
            layout: {centerY:0, width: 100, right: 25, height: 24},
            title: "logout",
            action: "doLogout"
        })
    }),
    main: SC.LabelView.design({
        classNames: ['main'],
        layout: {top:32, bottom:0, left:0, right:300},
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

Pony.loginPage = SC.Page.design({

  mainPane: SC.MainPane.design({
    childViews: 'form'.w(),
    defaultResponder: 'Pony.statechart',

    form: SC.View.design({
        classNames: ['form'],
        // use $.width/height because centerX/Y stutters towards the end of the animation
        layout: {width: 300, height: 200, left: $( window ).width()/2 - 150, top: $( window ).height()/2 - 100},
        childViews: "login pwd button".w(),
        
        transitionIn: SC.View.SLIDE_IN,
        transitionInOptions: { direction: 'up', duration: Pony.transitionSpeed },

        transitionOut: SC.View.SLIDE_OUT,
        transitionOutOptions: { direction: 'down', duration: Pony.transitionSpeed },
        
        login: SC.TextFieldView.design({
            layout: { width: 250, height: 24, centerX:0, top: 30},
            hint: "username"
        }),
        pwd: SC.TextFieldView.design({
            layout: { width: 250, height: 24, centerX:0, top: 70},
            hint: "password"
        }),
        button: SC.ButtonView.design({
            layout: { width: 100, height: 24, centerX:0, top: 110},
            action: "doLogin",
            title: "Login"
        })
    })
  })
});