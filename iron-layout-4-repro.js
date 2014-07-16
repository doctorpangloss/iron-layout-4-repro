
Router.map(function() {
    this.route('redirectBackToOrdinaryRoute', {
        path: '/redirect-back',
        action: function() {
            this.redirect('ordinaryRoute');
        }
    });

    this.route('ordinaryRoute', {
        path: '/'
    });
});