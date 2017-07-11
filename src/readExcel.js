/**
 * Created by user on 2017/7/11.
 */
const xlsx = require('node-xlsx');

//读取excel
const list = xlsx.parse('../excel/' + 'constantConfig.xlsx');

console.log(list.toString());
// export default list;

