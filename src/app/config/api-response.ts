interface ApiResponse extends Response {
    code: string,
    data: object | Array<any> | any,
    message: string
}
