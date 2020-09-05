import Loadable from "react-loadable";
import Spinner from "../../components/Spinner/Spinner";
import config from "../../config";

const ITSMRoot = Loadable({
  loader:  () => import(/*webpackChunkName: "ITSMRoot"*/"../../pages/ITSMList/ITSMList"),
  loading: Spinner,
});

export default {
  permissions: [],
  routeProps: {
    path: config.routes.modules.itsm.path(),
    component: ITSMRoot,
  },
  name: config.routes.modules.itsm.name,
};
