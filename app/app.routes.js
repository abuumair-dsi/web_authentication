/**
 * Created by jihan on 6/14/16.
 */

// UI-Router states
app.states = {
    'landing': {
        url: '/',
        title: '',
        views: {
            '': {
                templateUrl: 'app/shared/templates/layout/main.m.tpl.html'
            },
            'header@landing': {
                templateUrl: 'app/components/landing/landingHeaderView.m.tpl.html',
                controller: 'landingHeaderController'
            },
            'content@landing': {
                templateUrl: 'app/components/landing/landingView.m.tpl.html',
                controller: 'landingController'
            }
        }
    },
    'login': {
        url: '/login',
        views: {
            '': {
                templateUrl: 'app/shared/templates/layout/main.m.tpl.html'
            },
            'header@login': {
                templateUrl: 'app/components/login/loginHeaderView.m.tpl.html',
                controller: 'loginHeaderController'
            },
            'content@login': {
                templateUrl: 'app/components/login/loginView.m.tpl.html',
                controller: 'loginController'
            }
        }
    },
    'forgot': {
        url: '/password/forgot',
        views: {
            '': {
                templateUrl: 'app/shared/templates/layout/main.m.tpl.html'
            },
            'header@forgot': {
                templateUrl: 'app/components/login/loginHeaderView.m.tpl.html',
                controller: 'loginHeaderController'
            },
            'content@forgot': {
                templateUrl: 'app/components/forgot_password/forgotView.m.tpl.html',
                controller: 'forgotController'
            }
        }
    },
    'reset': {
        url: '/password/reset/:reset_token',
        views: {
            '': {
                templateUrl: 'app/shared/templates/layout/main.m.tpl.html'
            },
            'header@reset': {
                templateUrl: 'app/components/login/loginHeaderView.m.tpl.html',
                controller: 'loginHeaderController'
            },
            'content@reset': {
                templateUrl: 'app/components/reset_password/resetView.m.tpl.html',
                controller: 'resetController'
            }
        }
    },
    'change': {
        url: '/password/change',
        views: {
            '': {
                templateUrl: 'app/shared/templates/layout/main.m.tpl.html'
            },
            'header@change': {
                templateUrl: 'app/components/login/loginHeaderView.m.tpl.html',
                controller: 'loginHeaderController'
            },
            'content@change': {
                templateUrl: 'app/components/change_password/changeView.m.tpl.html',
                controller: 'changeController'
            }
        }
    }
};