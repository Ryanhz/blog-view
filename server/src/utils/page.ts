export default class Page {
  page: number
  pageSize: number

  constructor(page: number = 0, pageSize: number = 20) {
    this.page = isNaN(page) ? 0 : page
    this.pageSize = isNaN(pageSize) ? 20 : pageSize
  }

}