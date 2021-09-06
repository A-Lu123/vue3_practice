import request from "../utils/request";

export const  featchTableData = (query) => {
    return request({
        url: "./table.json",
        method: "get",
        params: query
    })
}