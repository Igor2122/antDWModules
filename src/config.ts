export default {
  publicEndpoint: "https://pexpats-fe.herokuapp.com/v1",
  privateEndpoint: "https://pexpats-fe.herokuapp.com/v1",
  routes: {
    modules: {
      crm: {
        name: "CRM",
        path: () => "/crm",
        allowedAccess: [],
      },
      itsm: {
        name: "ITSM",
        path: () => "/itsm",
        allowedAccess: [],
      },
      supplyChain: {
        name: "supplyChain",
        path: () => "/supplyChain",
        allowedAccess: [],
      },
    },
    home: {
      name: "home",
      path: "/",
      allowedAccess: null,
    },
    public: {
      name: "public",
      path: "/public",
      allowedAccess: null,
    },
    app: {
      name: "app",
      path: "/app",
      allowedAccess: null,
    },
    pagesList: {
      name: "pageList",
      path: "/app/pagesList",
      allowedAccess: null,
    },
  },
};
