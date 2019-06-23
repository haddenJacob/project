$(function () {
    $('#searchBtn').on('click',function(){
        let username = $('#username').val().trim()
        let usercode = $('#usercode').val().trim()

        let newusersearchurl = usersearchurl+'?mineStaffUserCode='+usercode+'&mineStaffUserName='+username
        layer.load(2);
        setTimeout(function(){
            layer.closeAll('loading');
        }, 5000);
        searchFun(newusersearchurl)

    })

    function searchFun(url) {
        layui.use('table', function(){
            var table = layui.table;
            table.render({
                elem: '#table-demo'
                ,height: "500"
                ,url: url //数据接口
                ,page: true //开启分页
                ,parseData: function(res){ //res 即为原始返回的数据
                    if(res.code == '0'){
                        layer.closeAll('loading');
                    }
                }
                ,cols: [[ //表头
                    {type:'checkbox', fixed: 'left'}
                    ,{field: 'mineStaffUserId',align:'center', title: 'ID', width:80, sort: true,}
                    ,{field: 'mineStaffUserName',align:'center',edit: 'text', title: '用户名', width:150}
                    ,{field: 'mineStaffUserSex',align:'center', edit: 'text',title: '性别', width:80,}
                    ,{field: 'mineStaffUserCode',align:'center', edit: 'text',title: '工号', width:150}
                    ,{field: 'mineStaffUserTel',align:'center', edit: 'text',title: '联系电话', width: 150,}
                    ,{field: 'mineStaffUserAge',align:'center', edit: 'text',title: '年龄', width: 60}
                    ,{field: 'mineStaffUserDetail',align:'center',edit: 'text', title: '详细描述', width: 350,}
                    ,{field: 'mineStaffUserAddress',align:'center',edit: 'text', title: '居住地址', width: 300,}
                    ,{field: 'mineStaffUserImg',align:'center',edit: 'text', title: '一寸头像', width: 300,}
                    ,{title: '表格操作',width:178, align:'center', fixed: 'right', toolbar: '#test-table-operate-barDemo'}
                ]]

            });
        });
    }

    // JavaScript代码区域

    layui.use('element', function(){
        var element = layui.element;
        // console.log($.cookie('flag'))
    });

        layui.use('table', function(){
            var table = layui.table;
            layer.load(2);
            //此处演示关闭
            setTimeout(function(){
                layer.closeAll('loading');
            }, 5000);
            //第一个实例
            if($.cookie('flag') == '1') {
                layer.msg("登录成功");
                table.render({
                    elem: '#table-demo'
                    , height: "700"
                    , url: userallurl //数据接口
                    , page: true //开启分页
                    , parseData: function (res) { //res 即为原始返回的数据
                        // console.log(res.code+res.mag+res.count+res.data) //解析数据列表
                        layer.closeAll('loading')
                    }
                    , cols: [[ //表头
                        {type: 'checkbox', fixed: 'left'}
                        , {field: 'mineStaffUserId', align: 'center', title: 'ID', width: 80, sort: true,}
                        , {field: 'mineStaffUserName', align: 'center', edit: 'text', title: '用户名', width: 150}
                        , {field: 'mineStaffUserSex', align: 'center', edit: 'text', title: '性别', width: 80,}
                        , {field: 'mineStaffUserCode', align: 'center', edit: 'text', title: '工号', width: 150}
                        , {field: 'mineStaffUserTel', align: 'center', edit: 'text', title: '联系电话', width: 150,}
                        , {field: 'mineStaffUserAge', align: 'center', edit: 'text', title: '年龄', width: 150}
                        , {field: 'mineStaffUserDetail', align: 'center', edit: 'text', title: '详细描述', width: 400,}
                        , {field: 'mineStaffUserAddress', align: 'center', edit: 'text', title: '居住地址', width: 400,}
                        , {field: 'mineStaffUserImg', align: 'center', edit: 'text', title: '一寸头像', width: 350,}
                        , {
                            title: '表格操作',
                            width: 178,
                            align: 'center',
                            fixed: 'right',
                            toolbar: '#test-table-operate-barDemo'
                        }
                    ]]
                });
            }else {
                // window.location.href = "../../../pages/login/login.html"
                layer.msg("你还没有登录，请登录");return;
            }
            //监听复选框
            table.on('checkbox(table-demo)', function(obj){
                console.log(obj)
            });
            //监听工具条
            table.on('tool(table-demo)', function(obj){
                var data = obj.data;
                if(obj.event === 'del'){
                    // console.log("1**")
                    layer.confirm('真的删除行么', function(index){
                        let mineStaffUserCode = data.mineStaffUserCode
                        layer.load(2);
                        //此处演示关闭
                        setTimeout(function(){
                            layer.closeAll('loading');
                        }, 5000);
                        UserFun.deleteFun(userdeleteurl,mineStaffUserCode,type='GET').then(res => {
                            layer.closeAll('loading');
                            if(res.status == '1'){
                                layer.msg("删除当前行数据成功");return;
                                obj.del();
                                layer.close(index);
                            }else{
                                layer.msg("删除当前行数据成功失败，重新操作");return;
                            }
                        }).catch(err => {
                            layer.msg("服务出错");return;
                        })
                    });
                } else if(obj.event === 'edit'){
                    // console.log("编辑行：<br>"+ JSON.stringify(data))
                    // console.log(data.mineStaffUserId)
                    layer.load(2);
                    //此处演示关闭
                    setTimeout(function(){
                        layer.closeAll('loading');
                    }, 5000);
                    let params = {
                        mineStaffUserId: data.mineStaffUserId,
                        mineStaffUserCode: data.mineStaffUserCode,
                        mineStaffUserName: data.mineStaffUserName,
                        mineStaffUserTel: data.mineStaffUserTel,
                        mineStaffUserSex: data.mineStaffUserSex,
                        mineStaffUserAge: data.mineStaffUserAge,
                        mineStaffUserAddress: data.mineStaffUserAddress,
                        mineStaffUserDetail: data.mineStaffUserDetail,
                        mineStaffUserImg: data.mineStaffUserImg
                    }
                    UserFun.editFun(userediturl,params,type='GET').then(res =>{
                        layer.closeAll('loading');
                        if(res.status == '1'){
                            layer.msg("已经保存成功，可以刷新查看");return;
                        }else{
                            layer.msg("保存失败，重新操作");return;
                        }
                    }).catch(err =>{
                        ayer.msg(err.msg);return;
                    })
                }
            });
            //监听单元格编辑
            table.on('edit(table-demo)', function(obj){
                var value = obj.value //得到修改后的值
                    ,data = obj.data //得到所在行所有键值
                    ,field = obj.field; //得到字段
                layer.msg('[ID: '+ data.id +'] ' + field + ' 字段更改为：'+ value);
            });
        });

})

var UserFun = {
    editFun:function (url,params,type) {
        return fetch(url,{
            mineStaffUserId:params.mineStaffUserId,
            mineStaffUserName:params.mineStaffUserName,
            mineStaffUserTel:params.mineStaffUserTel,
            mineStaffUserCode:params.mineStaffUserCode,
            mineStaffUserSex:params.mineStaffUserSex,
            mineStaffUserAge:params.mineStaffUserAge,
            mineStaffUserAddress:params.mineStaffUserAddress,
            mineStaffUserDetail:params.mineStaffUserDetail,
            mineStaffUserImg:params.mineStaffUserImg
        },type)
    },
    deleteFun:function (url,params,type) {
        return fetch(url,{mineStaffUserCode:params},type)
    }
}