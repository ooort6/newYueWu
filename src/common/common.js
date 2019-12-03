// export default{
//     getUrl(){
//         // return "http://192.168.1.7:8080/";
//         // return "http://192.168.1.31:8080/";
//         return '/user';
//         // return "http://192.168.1.64/";
//         // return "http://127.0.0.1:8080/";


//     },
//     // imgUrl(){
//     //     // return "http://192.168.1.7:8080/controlManager/";
//     //     return "http://47.102.203.203/controlManager/";
//     // }
// }

// export default {
//     install (vm) {
//         vm.prototype.$post = (url,data) => ajax.request({url,data});
//         vm.prototype.$common = (url,data) => common.request({url,data});
//     }
// }

export default { 
    install(vm){
        vm.prototype.$common={
            getUrl(){
                return "http://ztht.ztist.com/";
                // return 'user'
                // return "https://api.apiopen.top";
            },
            getFileUrl(){
                return "http://www.ztist.com/M01/";

            }
        }
    }
}
