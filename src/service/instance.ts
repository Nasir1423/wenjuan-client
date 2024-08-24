const HOST = "http://localhost:3000";

/**
 * 对 fetch 的二次封装，可以用于发送 get、post 请求，并收到一个 Promise 对象
 */
const instance = {
  get: async (url: string): Promise<any> => {
    const res = await fetch(`${HOST}${url}`);
    const data = res.json();
    return data;
  },
  post: async (url: string, body: { [key: string]: any }): Promise<any> => {
    const res = await fetch(`${HOST}${url}`, {
      method: "post",
      body: JSON.stringify(body),
    });
    const data = res.json();
    return data;
  },
};

export default instance;
