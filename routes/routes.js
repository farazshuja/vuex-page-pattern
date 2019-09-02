import Home from '../pages/Home/Home.vue';
import Navigation from '../pages/Navigation/Navigation.vue';
import ItemOverview from '../pages/Navigation/ItemOverview/ItemOverview.vue';
import Reporting from '../pages/Navigation/Reporting/Reporting.vue';
import Dashboard from '../pages/Dashboard/Dasboard.vue'

export default [
    { path: '/home', component: Home },
    {
      path: '/navigation',
      components: {
          default: Navigation,
      },
      children: [{
          path: 'itemoverview',
          components: {
              navigationView: ItemOverview,
          },
          name: 'Navigation',
      }, {
          path: 'reporting',
          components: {
              navigationView: Reporting,
          },
          name: 'Reporting',
      }],
  },
  { path: '/dashboard', component: Dashboard },
];
  