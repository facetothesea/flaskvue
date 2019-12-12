import Vue from 'vue'
import Router from 'vue-router'

import About from '@/components/About.vue'
import DataExport from '@/components/DataExport.vue'
import HelloWorld from '@/components/HelloWorld.vue'
import Help from '@/components/Help.vue'
import Home from '@/components/Home.vue'
import Inventory from '@/components/Inventory.vue'
import Material from '@/components/Material.vue'
import NotFound from '@/components/NotFound.vue'
import Others from '@/components/Others'
import SafetyInventory from '@/components/SafetyInventory.vue'
import StorageSpace from '@/components/StorageSpace.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/about',
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
    name: 'inventorymgmt',
    component: Inventory
  },
  {
    path: '/materialmgmt',
    name: 'materialmgmt',
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
  {
    path: '*',
    name: 'NoPage',
    component: NotFound
  }
  ]
})
