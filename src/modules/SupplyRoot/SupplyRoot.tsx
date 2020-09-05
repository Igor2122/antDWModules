import Loadable from 'react-loadable';
import Spinner from "../../components/Spinner/Spinner";
import config from "../../config";

const SupplyRoot = Loadable({
    loader: () => import(/*webpackChunkName: "SupplyRoot"*/ '../../pages/SupplyList/SupplyList'),
    loading: Spinner
});


export default {
    routeProps: {
        path: config.routes.modules.supplyChain.path(),
        exact: true,
        component: SupplyRoot,
    },
    name: 'SupplyRoot',
};