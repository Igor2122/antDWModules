import Loadable from "react-loadable";
import Spinner from "../../components/Spinner/Spinner";
import config from "../../config";

const CRMRoot = Loadable({
    loader:  () => import(/*webpackChunkName: "CRMRoot"*/"../../pages/CRMList/CRMList"),
    loading: Spinner,
});

export default {
    routeProps: {
        path: config.routes.modules.crm.path(),
        component: CRMRoot,
    },
    name: 'CRM',
};