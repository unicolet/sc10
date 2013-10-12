
Pony.statechart = SC.Statechart.create({
    initialState:'login',
    statesAreConcurrent: NO,
    
    login: SC.State.extend({
        enterState: function() {
            Pony.getPath('loginPage.mainPane').append();
        },
        
        exitState: function() {
            Pony.getPath('loginPage.mainPane').remove();
        },
                
        doLogin: function(view) {
            console.log('doLogin');
            this.gotoState('loggedIn');
        }
    }),
    
    loggedIn: SC.State.extend({
        enterState: function() {
            Pony.getPath('mainPage.mainPane').append();
        },
        
        exitState: function() {
            Pony.getPath('mainPage.mainPane').remove();
        },
        
        doLogout: function(view) {
            this.gotoState('login');
        }
    })
});