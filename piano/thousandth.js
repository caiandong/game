thousandth = function(value) {
    let res;
    if(value) {
        if(typeof value === "string") {
            // replace 方法用于在字符串中用一些字符串替换另一些字符串，或替换一个与正则表达式匹配的子串
            res = value.replace(/\d+/, (n) => {
                return n.replace(/(d)(?=(\d{3})+$)/g, ($1) => {
                    return $1 + ',';
                });
            })
        } else {
            res = value.toString().replace(/\d+/, (n) => {
                return n.replace(/(\d)(?=(\d{3})+$)/g, ($1) => {
                    return $1 +',';
                });
            })
        }
    }
}