function curriedAdd(total) {
    if(!total) return 0;
    let add=(val)=>{
        if(!val) return total
        total+=val;
        return add
    }
    return add;

}

module.exports = { curriedAdd };
