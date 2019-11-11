/**
 * 检查参数是否错误或者为空
 */
export function checkParamsIsNullOrError(params: Array<any>): boolean {
  for (const param of params) {
    if (param === '' || param === undefined || param === null || param === []) {
      return true;
    }
    if (Array.prototype.isPrototypeOf(param) && param.length === 0) { return true; }
    if (Object.prototype.isPrototypeOf(param) && Object.keys(param).length === 0) { return true; }
  }
  return false;
}


export function strToJson(str: string) {
  let jsonData = [];
  if (str === null || str === undefined || str === 'null' || str === '') {
    return jsonData;
  }
  try {
    jsonData = JSON.parse(str);
  } catch (e) {
    jsonData = [];
  }
  return jsonData;
}

export function JsonToStr(json: any) {
  try {
    return JSON.stringify(json);
  } catch (e) {
    return '';
  }
}

export function strToNumber(str: string): number {
  const strNum = parseInt(str, 10);
  if (isNaN(strNum)) {
    return null;
  }
  return strNum;
}

export function toBoolean(str: string): boolean {
  if (str === 'false' || str === '0' || str === '-0' || str === 'NaN') {
    return false;
  }
  return Boolean(str);
}
