const menu = [
  {
    name: 'Dashboard',
    routerLink: [''],
    identifier: 'dashboard',
    iconClass: 'icofont-home fs-5',
    breadcrumbMessage: 'Welcome to Employee Dashboard.',
    isCategory: false,
    isApp: false,
    isToggled: false,
    isManager: false,
    isAdmin: false,
    children: [
      {
        name: 'User Dashboard',
        routerLink: [''],
        identifier: 'Dashboard',
        iconClass: '',
        breadcrumbMessage: '',
        isCategory: false,
        isApp: false,
        isManager: false,
        isAdmin: false,
        children: []
      },
      {
        name: 'Profile',
        routerLink: ['members-profile'],
        identifier: 'Profile',
        iconClass: '',
        breadcrumbMessage: '',
        isCategory: false,
        isApp: false,
        isManager: false,
        isAdmin: false,
        children: []
      }
    ]
  },
  {
    name: 'Attendance',
    routerLink: ['attendance-employees'],
    identifier: 'Attendance',
    iconClass: 'icofont-briefcase',
    breadcrumbMessage: '',
    isCategory: false,
    isApp: false,
    isToggled: false,
    isManager: false,
    isAdmin: false,
    children: [
      {
        name: 'Attendance',
        routerLink: ['attendance-employees'],
        identifier: 'Attendance',
        iconClass: '',
        breadcrumbMessage: '',
        isCategory: false,
        isApp: false,
        isManager: false,
        isAdmin: false,
        children: []
      }
    ]
  },
  {
    name: 'Leave',
    routerLink: ['my-leave-requests'],
    identifier: 'Leave',
    iconClass: 'icofont-travelling',
    breadcrumbMessage: '',
    isCategory: false,
    isApp: false,
    isToggled: false,
    isManager: false,
    isAdmin: false,
    children: [
      {
        name: 'My Leave Requests',
        routerLink: ['my-leave-requests'],
        identifier: 'My Leave Requests',
        iconClass: '',
        breadcrumbMessage: '',
        isCategory: false,
        isApp: false,
        isManager: false,
        isAdmin: false,
        children: []
      },
      {
        name: 'Manage Leave Requests',
        routerLink: ['manage-leave-requests'],
        identifier: 'Leave Requests',
        iconClass: '',
        breadcrumbMessage: '',
        isCategory: false,
        isApp: false,
        isManager: true,
        isAdmin: false,
        children: []
      },
      {
        name: 'Leave Calendar',
        routerLink: ['leave-calendar'],
        identifier: 'Leave Calendar',
        iconClass: '',
        breadcrumbMessage: '',
        isCategory: false,
        isApp: false,
        isManager: false,
        isAdmin: true,
        children: []
      }
    ]
  }
  // {
  //   name: 'Events',
  //   routerLink: ['events-calendar'],
  //   identifier: 'Events',
  //   iconClass: 'icofont-calendar',
  //   breadcrumbMessage: '',
  //   isCategory: false,
  //   isApp: false,
  //   isToggled: false,
  //   isManager: false,
  //   isAdmin: false,
  //   children: [
  //     {
  //       name: 'Events',
  //       routerLink: ['events-calendar'],
  //       identifier: 'Events',
  //       iconClass: '',
  //       breadcrumbMessage: '',
  //       isCategory: false,
  //       isApp: false,
  //       isManager: false,
  //       isAdmin: false,
  //       children: []
  //     }
  //   ]
  // }
]

const menu2 = [
  {
    name: 'Home',
    routerLink: [''],
    identifier: 'Home',
    iconClass: 'icofont-ui-home',
    breadcrumbMessage: 'Welcome to Analytics Dashboard.',
    isCategory: false,
    isApp: false,
    isToggled: true,
    isManager: false,
    isAdmin: false,
    children: []
  },
  {
    name: 'Authentication',
    routerLink: [''],
    identifier: 'Authentication',
    iconClass: 'icofont-ui-lock',
    breadcrumbMessage: 'Welcome to Analytics Dashboard.',
    isCategory: false,
    isApp: false,
    isToggled: false,
    isManager: false,
    isAdmin: false,
    children: [
      {
        name: 'Sign in',
        routerLink: ['sign-in'],
        identifier: 'Sign in',
        iconClass: 'icofont-ui-home',
        breadcrumbMessage: 'Welcome to Analytics Dashboard.',
        isCategory: false,
        isApp: false,
        isManager: false,
        isAdmin: false,
        children: []
      },
      {
        name: 'Sign up',
        routerLink: ['sign-up'],
        identifier: 'Sign up',
        iconClass: 'icofont-ui-home',
        breadcrumbMessage: 'Welcome to Analytics Dashboard.',
        isCategory: false,
        isApp: false,
        isManager: false,
        isAdmin: false,
        children: []
      },
      {
        name: 'Password reset',
        routerLink: ['password-reset'],
        identifier: 'Password reset',
        iconClass: 'icofont-ui-home',
        breadcrumbMessage: 'Welcome to Analytics Dashboard.',
        isCategory: false,
        isApp: false,
        isManager: false,
        isAdmin: false,
        children: []
      },
      {
        name: '2-Step Authentication',
        routerLink: ['2-step-authentication'],
        identifier: '2-Step Authentication',
        iconClass: 'icofont-ui-home',
        breadcrumbMessage: 'Welcome to Analytics Dashboard.',
        isCategory: false,
        isApp: false,
        isManager: false,
        isAdmin: false,
        children: []
      },
      {
        name: '404',
        routerLink: ['page-404'],
        identifier: '404',
        iconClass: 'icofont-ui-home',
        breadcrumbMessage: 'Welcome to Analytics Dashboard.',
        isCategory: false,
        isApp: false,
        isManager: false,
        isAdmin: false,
        children: []
      }
    ]
  },
  {
    name: 'Stater page',
    routerLink: ['stater-page'],
    identifier: 'Stater page',
    iconClass: 'icofont-code',
    breadcrumbMessage: 'Welcome to Analytics Dashboard.',
    isCategory: false,
    isApp: false,
    isToggled: false,
    isManager: false,
    isAdmin: false,
    children: []
  },
  {
    name: 'UI Components',
    routerLink: [''],
    identifier: 'uiComponents',
    iconClass: 'icofont-paint',
    breadcrumbMessage: '',
    isCategory: false,
    isApp: false,
    isToggled: false,
    isManager: false,
    isAdmin: false,
    children: [
      {
        name: 'Alerts',
        routerLink: ['ui-alerts'],
        identifier: 'Alerts',
        iconClass: '',
        breadcrumbMessage: '',
        isCategory: false,
        isApp: false,
        isManager: false,
        isAdmin: false,
        children: []
      },
      {
        name: 'Badge',
        routerLink: ['ui-badge'],
        identifier: 'Badge',
        iconClass: '',
        breadcrumbMessage: '',
        isCategory: false,
        isApp: false,
        isManager: false,
        isAdmin: false,
        children: []
      },
      {
        name: 'Breadcrumb',
        routerLink: ['ui-breadcrumb'],
        identifier: 'Breadcrumb',
        iconClass: '',
        breadcrumbMessage: '',
        isCategory: false,
        isApp: false,
        isManager: false,
        isAdmin: false,
        children: []
      },
      {
        name: 'Buttons',
        routerLink: ['ui-buttons'],
        identifier: 'Buttons',
        iconClass: '',
        breadcrumbMessage: '',
        isCategory: false,
        isApp: false,
        isManager: false,
        isAdmin: false,
        children: []
      },
      {
        name: 'Card',
        routerLink: ['ui-card'],
        identifier: 'Card',
        iconClass: '',
        breadcrumbMessage: '',
        isCategory: false,
        isApp: false,
        isManager: false,
        isAdmin: false,
        children: []
      },
      {
        name: 'Carousel',
        routerLink: ['ui-carousel'],
        identifier: 'Carousel',
        iconClass: '',
        breadcrumbMessage: '',
        isCategory: false,
        isApp: false,
        isManager: false,
        isAdmin: false,
        children: []
      },
      {
        name: 'Collapse',
        routerLink: ['ui-collapse'],
        identifier: 'Collapse',
        iconClass: '',
        breadcrumbMessage: '',
        isCategory: false,
        isApp: false,
        isManager: false,
        isAdmin: false,
        children: []
      },
      {
        name: 'Dropdowns',
        routerLink: ['ui-dropdowns'],
        identifier: 'Dropdowns',
        iconClass: '',
        breadcrumbMessage: '',
        isCategory: false,
        isApp: false,
        isManager: false,
        isAdmin: false,
        children: []
      },
      {
        name: 'List Group',
        routerLink: ['ui-listgroup'],
        identifier: 'ListGroup',
        iconClass: '',
        breadcrumbMessage: '',
        isCategory: false,
        isApp: false,
        isManager: false,
        isAdmin: false,
        children: []
      },
      {
        name: 'Modal',
        routerLink: ['ui-modalui'],
        identifier: 'Modal',
        iconClass: '',
        breadcrumbMessage: '',
        isCategory: false,
        isApp: false,
        isManager: false,
        isAdmin: false,
        children: []
      },
      {
        name: 'Navs',
        routerLink: ['ui-navsui'],
        identifier: 'Navs',
        iconClass: '',
        breadcrumbMessage: '',
        isCategory: false,
        isApp: false,
        isManager: false,
        isAdmin: false,
        children: []
      },
      {
        name: 'Navbar',
        routerLink: ['ui-navbarui'],
        identifier: 'Navbar',
        iconClass: '',
        breadcrumbMessage: '',
        isCategory: false,
        isApp: false,
        isManager: false,
        isAdmin: false,
        children: []
      },
      {
        name: 'Pagination',
        routerLink: ['ui-paginationui'],
        identifier: 'Pagination',
        iconClass: '',
        breadcrumbMessage: '',
        isCategory: false,
        isApp: false,
        isManager: false,
        isAdmin: false,
        children: []
      },
      {
        name: 'Popovers',
        routerLink: ['ui-popoversui'],
        identifier: 'Popovers',
        iconClass: '',
        breadcrumbMessage: '',
        isCategory: false,
        isApp: false,
        isManager: false,
        isAdmin: false,
        children: []
      },
      {
        name: 'Progress',
        routerLink: ['ui-progressui'],
        identifier: 'Progress',
        iconClass: '',
        breadcrumbMessage: '',
        isCategory: false,
        isApp: false,
        isManager: false,
        isAdmin: false,
        children: []
      },
      {
        name: 'Scrollspy',
        routerLink: ['ui-Scrollspyui'],
        identifier: 'Scrollspy',
        iconClass: '',
        breadcrumbMessage: '',
        isCategory: false,
        isApp: false,
        isManager: false,
        isAdmin: false,
        children: []
      },
      {
        name: 'Spinners',
        routerLink: ['ui-spinnersui'],
        identifier: 'Spinners',
        iconClass: '',
        breadcrumbMessage: '',
        isCategory: false,
        isApp: false,
        isManager: false,
        isAdmin: false,
        children: []
      },
      {
        name: 'Toasts',
        routerLink: ['ui-toastsui'],
        identifier: 'Toasts',
        iconClass: '',
        breadcrumbMessage: '',
        isCategory: false,
        isApp: false,
        isManager: false,
        isAdmin: false,
        children: []
      }
    ]
  },
  {
    name: 'Documentation',
    routerLink: ['documentation'],
    identifier: 'Documentation',
    iconClass: 'icofont-law-document',
    breadcrumbMessage: 'Welcome to Analytics Dashboard.',
    isCategory: false,
    isApp: false,
    isToggled: false,
    isManager: false,
    isAdmin: false,
    children: []
  },
  {
    name: 'Changelog',
    routerLink: ['changelog'],
    identifier: 'Changelog',
    iconClass: 'icofont-edit',
    breadcrumbMessage: 'Welcome to Analytics Dashboard.',
    isCategory: false,
    isApp: false,
    isToggled: false,
    isManager: false,
    isAdmin: false,
    children: []
  }
]

export { menu, menu2 }
