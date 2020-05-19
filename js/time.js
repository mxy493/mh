$(document).ready(function () {
    setInterval(function () {
        var start = new Date('2011/3/12 0:0:0'); //开始时间
        var now = new Date(); //结束时间
        var between = now.getTime() - start.getTime(); //时间差秒

        //计算出相差天数
        var days = Math.floor(between / (24 * 3600 * 1000));

        //计算出小时数
        var leave1 = between % (24 * 3600 * 1000); //计算天数后剩余的毫秒数
        var hours = Math.floor(leave1 / (3600 * 1000));

        //计算相差分钟数
        var leave2 = leave1 % (3600 * 1000); //计算小时数后剩余的毫秒数
        var minutes = Math.floor(leave2 / (60 * 1000));

        //计算相差秒数
        var leave3 = leave2 % (60 * 1000); //计算分钟数后剩余的毫秒数
        var seconds = Math.round(leave3 / 1000);
        var str = "我们在一起的第" + days + "天" + hours + "时" + minutes + "分" + seconds + "秒";
        $("#time").text(str);
    }, 1000); //隔一秒更新
});