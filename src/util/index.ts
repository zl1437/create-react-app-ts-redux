import moment from "moment"
/**
 * 通过课程获取课程标签数组
 * @param course 课程对象
 */
export const getCourseTag = (course) => {
    let tagArray: String[] = [];
    for(let i in course) {
        if(i.includes("keywords")) {
            let tag = course[i];
            if(tag) {
                tagArray.push(tag)
            }
        }
    }
    return tagArray
}

export const getCourseActiveTime = (start, end) => {
    let startDate = moment(start).format('YYYY/MM/DD');
    let endDate = moment(end).format('YYYY/MM/DD');
    let startTime = moment(start).format('HH:mm');
    let endTime = moment(end).format('HH:mm');
    // 如果日期相同
    if(startDate === endDate) {
        return `${startDate} ${startTime} ~ ${endTime}`;
    }else {
        return `${startDate} ${startTime} ~ ${endDate} ${endTime}`
    }
}

export const getSeatActiveTime = (start, end) => {
    let startYear = new Date(start.replace(/-/g,'/')).getFullYear()
    let endYear = new Date(end.replace(/-/g,'/')).getFullYear()
    let startDate = moment(start).format('YYYY/MM/DD');
    let endDate = moment(end).format('MM/DD');
    if(startYear !== endYear) {
        endDate = moment(end).format('YYYY/MM/DD');
    }
    return `${startDate} ~ ${endDate}`;
}

export const getPayActiveTime = (start, end) => {
    if (start) {
        let startDate = moment(start.replace(/-/g,'/')).format('YYYY/MM/DD');
        let endDate = moment(end.replace(/-/g,'/')).format('YYYY/MM/DD');
        return `${startDate} ~ ${endDate}`;
    }
}

export const getOneTime = (time) => {
    let startDate = moment(time).format('MM/DD');
    return `${startDate}`;
}

export const getOneTimeChina = (time) => {
    let startDate = moment(time).format('YYYY年MM月DD日');
    return `${startDate}`;
}