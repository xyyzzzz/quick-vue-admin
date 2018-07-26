module.exports = {
    title: 'HR系统',
    nav_menu: [{
            path: '/',
            name: '功能',
            iconCls: 'el-icon-menu', //图标样式class       
            children: [
                { path: '/company/Employee', name: '员工' },
                { path: '/company/Approve', name: '审批' },
                { path: '/company/Doc', name: '文档' }
            ]
        },
        {
            path: '/',
            name: '设置',
            iconCls: 'el-icon-menu', //图标样式class       
            children: [
                { path: '/company/Department', name: '部门' }
            ]
        }
    ]
};