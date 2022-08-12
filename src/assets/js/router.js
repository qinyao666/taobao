import VueRouter from "vue-router"
import index from "../../components/index.vue"
import cls from "../../components/cls.vue"
import detail from "../../components/detail.vue"
import first from "../../components/first.vue"
import my from "../../components/my.vue"
import list from "../../components/list.vue"
import login1 from "../../components/login1.vue"
import shop from "../../components/shop.vue"
import set from "../../components/set.vue"

var router = new VueRouter({
    routes:[
        {
            path:"/",
            component:first,
            children:[
                {
                    path:"/index",
                    component:index,
                },
                {
                    path:"/shop",
                    component:shop,
                },
                {
                    path:"/my",
                    component:my,
                }
            ],
            redirect:"index"
        },
        {
            path:"/login1",
            component:login1,
        },
        {
            path:"/cls",
            component:cls,
        },
        {
            path:"/detail",
            component:detail,
        },
        {
            path:"/list",
            component:list,
        },
        {
            path:"/set",
            component:set,
        }
    ]
})
export default router;