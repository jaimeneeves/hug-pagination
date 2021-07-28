class HugPagination {

  constructor(totalItems, options) {

    this.options = {};

    const defaults = {
      type: 'default',
      totalItems: 0,
      totalPages: 0,
      currentPage: 1,
      pageSize: 10,
      maxPages: 10,
      data: []
    }

    if(!totalItems) {
      throw new Error('Missing input argument')
    }

    defaults.totalItems = totalItems

    if(typeof options === 'object') {
      this.options = Object.assign({}, defaults, options)
    } else {
      this.options = defaults
    }
  }

  init() {

    let totalItems = this.options.data.length > 0
      ? this.options.data.length
      : this.options.totalItems

    if (totalItems === 0) {
      throw new Error('There is no data')
    }

    return this.resolvePagination(totalItems);
  }

  /**
   * Pagination resolve
   * @param {Number} totalItems
   * @returns Object
   */
  resolvePagination(totalItems) {

    let totalPages = Math.ceil(totalItems / this.options.pageSize)

    this.options.totalPages = totalPages

    // ensure current page isn't out of range
    if (this.options.currentPage < 1) {
      this.options.currentPage = 1
    } else if (this.options.currentPage > totalPages) {
      this.options.currentPage = totalPages
    }

    let startPage = 0
    let endPage   = 0

    if (totalPages <= this.options.maxPages) {
      // total pages less than max so show all pages
      startPage = 1;
      endPage = totalPages;
    } else {
      // total pages more than max so calculate start and end pages
      let maxPagesBeforeCurrentPage = Math.floor(this.options.maxPages / 2)
      let maxPagesAfterCurrentPage = Math.ceil(this.options.maxPages / 2) - 1

      if (this.options.currentPage <= maxPagesBeforeCurrentPage) {
        // current page near the start
        startPage = 1
        endPage = this.options.maxPages
      } else if (this.options.currentPage + maxPagesAfterCurrentPage >= totalPages) {
        // current page near the end
        startPage = totalPages - this.options.maxPages + 1
        endPage = totalPages
      } else {
        // current page somewhere in the middle
        startPage = this.options.currentPage - maxPagesBeforeCurrentPage
        endPage = this.options.currentPage + maxPagesAfterCurrentPage
      }
    }

    // calculate start and end item indexes
    let startIndex = (this.options.currentPage - 1) * this.options.pageSize
    let endIndex = Math.min(startIndex + this.options.pageSize - 1, totalItems - 1)

    // create an array of pages to ng-repeat in the pager control
    let pages = Array.from(Array((endPage + 1) - startPage).keys()).map(i => startPage + i)

    const results = {
      totalItems: totalItems,
      currentPage: this.options.currentPage,
      pageSize: this.options.pageSize,
      totalPages: totalPages,
      startPage: startPage,
      endPage: endPage,
      startIndex: startIndex,
      endIndex: endIndex,
      pages: pages
    }

    if(this.options.data.length > 0) {
      results.data = this.options.data
    }

    return results
  }

  /**
   * Trigger
   * @returns Object
   */
  getTrigger() {
    return this.options.trigger
  }

  getPagination() {
    return this.options
  }
}

export default HugPagination
