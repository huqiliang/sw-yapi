import request from "@/utils/request";

export function update(data) {
  return request({
    // baseURL: "http://localhost:3308/",
    url: "/api/yapi",
    method: "post",
    data
  });
}
