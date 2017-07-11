/**
 * Created by user on 2017/7/11.
 */

//对excel文件进行解析，读取数据
const ExcelParse = function (newPath, obj, next) {
    // obj = node_xlsx.parse(newPath);
    const excelObj = obj[0].data;//取得第一个excel表的数据
    //统计上传多少个学生信息
    let num = 0;


    //定义student实体类数组
    const constantArray = ['constantType', 'constantKey', 'value', 'description'];

    const valueArray = [];
    //循环遍历表每一行的数据
    for (let i = 1; i < excelObj.length; i++) {
        const rdata = excelObj[i];
        const constant = {};
        for (let j = 0; j < rdata.length; j++) {
            constant[constantArray[j]] = rdata[j];
        }
        valueArray.push(constant);
        // console.log(constant);
    }
    console.log(valueArray);
    if (!valueArray) {
        next(valueArray);
    }
};


// ExcelParse('../excel/constantConfig.xlsx');

// export default ExcelParse;
export default ExcelParse;