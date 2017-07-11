/**
 * Created by user on 2017/7/11.
 */
import tool from './index';
const path = './excel/constantConfig.xlsx';
const node_xlsx = require('node-xlsx');
const obj = node_xlsx.parse(path);

tool(path, obj, function (value) {
    console.log(value);
});
