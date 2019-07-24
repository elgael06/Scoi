
const menus =[
    {
        title:"Settings",
        subtitle:'Custom Settings',
        id:'collapseUtilities',
        icon:'fas fa-sliders-h',
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
            }
        ]
    }
]

export default menus;