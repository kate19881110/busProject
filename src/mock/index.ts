/**
 * 1. mockjs 在 main.js 呼叫, 呼叫後執行此頁面, mock 會註冊對應的 api
 * 2. 註冊方法有另外封裝過, 放在 '@/src/mock/mock.js', 對原生寫法有興趣請自行 google mockjs
 * 3. 註冊格式: mock.[restful verbs](url, callback fn)
 * 4. 若 axios 打出去的 api 條件符合(例如是 get 方法且位址為 /table/getList)
 * 則會被 mock 捕捉, 就不會再往外打出去了, 捕捉後觸發 callback 參數.
 * 5. callback fn 在 '@/src/mock/data' 資料夾底下統一管理
 */
