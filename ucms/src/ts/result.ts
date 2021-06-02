interface Result {
    code: number;
    data: any;
    message: string;
}

export function checkValid(result: Result): boolean {
    if (result.code == 0) {
        alert("查询出错！");
        return false;
    } else if (result.code == 2) {
        alert("未查询到结果！");
        return false;
    }
    return true;
}

export default Result;