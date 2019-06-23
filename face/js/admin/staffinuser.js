$(function () {
    $('#searchBtn').on('click',function(){
        let userdate = $('#userdate').val().trim()
        let usercode = $('#usercode').val().trim()
        console.log(userdate)
        let usersearchurl = searchinfaceurl+'?mineStaffFaceInUserCode='+usercode+'&mineStaffFaceInUserDate='+userdate
        layer.load(2);
        setTimeout(function(){
            layer.closeAll('loading');
        }, 5000);
        searchFun(usersearchurl)

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
                    {type: 'checkbox', fixed: 'left'}
                    , {field: 'mineStaffFaceInUserId', align: 'center', title: 'ID', width: 80, sort: true,}
                    , {field: 'mineStaffFaceInUserName', align: 'center',  title: '用户名', width: 150}
                    , {field: 'mineStaffFaceInUserSex', align: 'center',  title: '性别', width: 80,}
                    , {field: 'mineStaffFaceInUserCode', align: 'center',  title: '工号', width: 150}
                    , {field: 'mineStaffFaceInUserTel', align: 'center',  title: '联系电话', width: 150,}
                    , {field: 'mineStaffFaceInUserDate', align: 'center', title: '创建时间', width: 150}
                    , {field: 'mineStaffFaceInUserDetail', align: 'center', title: '详细描述', width: 400,}
                    , {field: 'mineStaffFaceInUserAddress', align: 'center',  title: '居住地址', width: 400,}
                    , {field: 'mineStaffFaceInUserImg', align: 'center',  title: '一寸头像', width: 350,}
                    , {
                        title: '表格操作',
                        width: 178,
                        align: 'center',
                        fixed: 'right',
                        toolbar: '#test-table-operate-barDemo'
                    }

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
            table.render({
                elem: '#table-demo'
                , height: "700"
                , url: userfindallinfaceurl //数据接口
                , page: true //开启分页
                , parseData: function (res) { //res 即为原始返回的数据
                    // console.log(res.code+res.mag+res.count+res.data) //解析数据列表
                    layer.closeAll('loading')
                }
                , cols: [[ //表头
                    {type: 'checkbox', fixed: 'left'}
                    , {field: 'mineStaffFaceInUserId', align: 'center', title: 'ID', width: 80, sort: true,}
                    , {field: 'mineStaffFaceInUserName', align: 'center',  title: '用户名', width: 150}
                    , {field: 'mineStaffFaceInUserSex', align: 'center',  title: '性别', width: 80,}
                    , {field: 'mineStaffFaceInUserCode', align: 'center',  title: '工号', width: 150}
                    , {field: 'mineStaffFaceInUserTel', align: 'center',  title: '联系电话', width: 150,}
                    , {field: 'mineStaffFaceInUserDate', align: 'center', title: '创建时间', width: 150}
                    , {field: 'mineStaffFaceInUserDetail', align: 'center', title: '详细描述', width: 400,}
                    , {field: 'mineStaffFaceInUserAddress', align: 'center',  title: '居住地址', width: 400,}
                    , {field: 'mineStaffFaceInUserImg', align: 'center',  title: '一寸头像', width: 350,}
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
            }
        });
    });

})

var UserFun = {
    deleteFun:function (url,params,type) {
        return fetch(url,{mineStaffUserCode:params},type)
    }
}