const obj = {
    add : function(a, b){
        return a + b;
    },

    subtract : function(a,b){
        return b - a;
    },

    variable : "This is a temporary property"

}

console.log(obj.subtract(5,10));
fs.export(obj)