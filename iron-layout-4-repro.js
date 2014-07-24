if (Meteor.isClient) {
    var t = 0;
    Meteor.setInterval(function () {
        t += 33 / 1000;
        Session.set('time', t);
    }, 33);

    Template.content2.helpers({time: function () {
        return Session.get('time');
    }});
}
Router.map(function () {
    this.route('anotherRoute', {
        path: '/route',
        layoutTemplate: 'layoutWithRegions',
        yieldTemplates: {
            'content1': {to: 'position1'},
            'content2': {to: 'position2'},
            'content3': {to: 'position3'}
        },
        action: function() {
            this.renderRegions();
        }
    });

    this.route('redirectRoute', {
        path: '/',
        action: function () {
            this.redirect('anotherRoute');
        }
    });
});