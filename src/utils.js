let _limit = 10;
export const setCurrentLimit = (limit)=>{
    _limit = limit;
};

export const getCurrentLimit = ()=>{
    return _limit;
}