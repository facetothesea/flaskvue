import Vue from 'vue'
import Router from 'vue-router'

import About from '@/components/About'
import DataExport from '@/components/DataExport'
import HelloWorld from '@/components/HelloWorld'
import Help from '@/components/Help'
import Home from '@/components/Home'
import Inventory from '@/components/Inventory'
import Material from '@/components/Material'
import NotFound from '@/components/NotFound'
import Others from '@/components/Others'
import SafetyInventory from '@/components/SafetyInventory'
import StorageSpace from '@/components/StorageSpace'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/dataexport',
      name: 'dataexport',
      component: DataExport
    },
    {
      path: '/hello',
      name: 'hello',
      component: HelloWorld
    },
    {
      path: '/help',
      name: 'help',
      component: Help
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/inventorymgmt',
      name: 'inventory',
      component: Inventory
    },
    {
      path: '/materialmgmt',
      name: 'material',
      component: Material
    },
    {
      path: '/others',
      name: 'others',
      component: Others
    },
    {
      path: '/safetyinventory',
      name: 'safetyinventory',
      component: SafetyInventory
    },
    {
      path: '/storagespacemgmt',
      name: 'storagespace',
      component: StorageSpace
    },
    { path: '*',
      name: 'NoPage',
      component: NotFound
    }
  ]
})
