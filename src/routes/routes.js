import DashboardLayout from '../layout/DashboardLayout.vue'
import HomeLayout from '../layout/HomeLayout.vue'

// GeneralViews
// import NotFound from '../pages/NotFoundPage.vue'


// Admin pages
import Overview from 'src/pages/Overview.vue'
import UserProfile from 'src/pages/UserProfile.vue'
import ProductList from 'src/pages/ProductList.vue'
import Category from 'src/pages/Category.vue'
import Suppliers from 'src/pages/Suppliers.vue'
import Users from 'src/pages/Users.vue'
import Notifications from 'src/pages/Notifications.vue'
import Home from 'src/pages/Home.vue'

const routes = [
  {
    path: '/home',
    component: HomeLayout,
    redirect: '/home/page',
    children: [
      {
        path: 'home',
        name: 'Home',
        component: Home
      },
    ]
  },
  // {
  //   path: '/',
  //   component: DashboardLayout,
  //   redirect: '/admin/overview',
  // },
  {
    path: '/admin',
    component: DashboardLayout,
    redirect: '/admin/overview',
    children: [
      {
        path: 'overview',
        name: 'Overview',
        component: Overview
      },
      {
        path: 'user',
        name: 'User',
        component: UserProfile
      },
      {
        path: 'product-list',
        name: 'Product List',
        component: ProductList
      },
      {
        path: 'category',
        name: 'Category',
        component: Category
      },
      {
        path: 'suppliers',
        name: 'Suppliers',
        component: Suppliers
      },
      {
        path: 'users',
        name: 'Users',
        component: Users
      },
      {
        path: 'notifications',
        name: 'Notifications',
        component: Notifications
      }
    ]
  },
  { path: '*', component: HomeLayout }
]

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
//  *  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes