
Pony.statechart = SC.Statechart.create({
    initialState:'login',
    statesAreConcurrent: NO,
    
    login: SC.State.extend({
        enterState: function() {
            this.invokeLater(function(){
                Pony.getPath('loginPage.mainPane').append();
            }, Pony.transitionSpeed*1000);
        },
        
        exitState: function() {
            Pony.getPath('loginPage.mainPane').remove();
        },
                
        doLogin: function(view) {
            this.gotoState('loggedIn');
        }
    }),
    
    loggedIn: SC.State.extend({
        enterState: function() {
            this.invokeLater(function(){
                Pony.getPath('mainPage.mainPane').append();
            }, Pony.transitionSpeed*1000);
        },
        
        exitState: function() {
            Pony.getPath('mainPage.mainPane').remove();
        },
        
        doLogout: function(view) {
            this.gotoState('login');
        }
    })
});