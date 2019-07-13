
const menus =[
    {
        title:"Utilities",
        subtitle:'Custom Utilities',
        id:'collapseUtilities',
        icon:'fas fa-fw fa-wrench',
        urls:[ 
            {
                name:'Custom',
                url:'/Custom'
            },
            {
                name:'Colors',
                url:'/Custom/Colors'
            },
            {
                name:'Borders',
                url:'/Styles/Borders'
            }
        ]
    },{
        title:"Access",
        subtitle:'Access Menus',
        id:'collapseAccess',
        icon:'fas fa-globe',
        urls:[ 
            {
                name:'Menus',
                url:'/Custom/menus'
            },
            {
                name:'Users',
                url:'/Users'
            },
            {
                name:'login',
                url:'/login'
            }
        ]
    }
]

export default menus;