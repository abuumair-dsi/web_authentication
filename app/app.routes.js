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
                templateUrl: 'app/shared/templates/layout/main.html'
            },
            'header@landing': {
                templateUrl: 'app/components/landing/landingHeaderView.html',
                controller: 'landingHeaderController'
            },
            'content@landing': {
                templateUrl: 'app/components/landing/landingView.html',
                controller: 'landingController'
            }
        }
    },
    'login': {
        url: '/login',
        views: {
            '': {
                templateUrl: 'app/shared/templates/layout/main.html'
            },
            'header@login': {
                templateUrl: 'app/components/login/loginHeaderView.html',
                controller: 'loginHeaderController'
            },
            'content@login': {
                templateUrl: 'app/components/login/loginView.html',
                controller: 'loginController'
            }
        }
    },
    'forgot': {
        url: '/password/forgot',
        views: {
            '': {
                templateUrl: 'app/shared/templates/layout/main.html'
            },
            'header@forgot': {
                templateUrl: 'app/components/login/loginHeaderView.html',
                controller: 'loginHeaderController'
            },
            'content@forgot': {
                templateUrl: 'app/components/forgot_password/forgotView.html',
                controller: 'forgotController'
            }
        }
    },
    'reset': {
        url: '/password/reset',
        views: {
            '': {
                templateUrl: 'app/shared/templates/layout/main.html'
            },
            'header@reset': {
                templateUrl: 'app/components/login/loginHeaderView.html',
                controller: 'loginHeaderController'
            },
            'content@reset': {
                templateUrl: 'app/components/reset_password/resetView.html',
                controller: 'resetController'
            }
        }
    },
    'change': {
        url: '/password/change',
        views: {
            '': {
                templateUrl: 'app/shared/templates/layout/main.html'
            },
            'header@reset': {
                templateUrl: 'app/components/login/loginHeaderView.html',
                controller: 'loginHeaderController'
            },
            'content@reset': {
                templateUrl: 'app/components/reset_password/changeView.html',
                controller: 'changeController'
            }
        }
    }
}