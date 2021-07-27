export default HugPagination;
declare class HugPagination {
  constructor(totalItems: any, options: any);
  options: any;
  init(): {
      totalItems: number;
      currentPage: any;
      pageSize: any;
      data: any;
      trigger: any;
      totalPages: number;
      startPage: number;
      endPage: number;
      startIndex: number;
      endIndex: number;
      pages: number[];
  };
  /**
   * Pagination resolve
   * @param {Number} totalItems
   * @returns Object
   */
  resolvePagination(totalItems: number): {
      totalItems: number;
      currentPage: any;
      pageSize: any;
      data: any;
      trigger: any;
      totalPages: number;
      startPage: number;
      endPage: number;
      startIndex: number;
      endIndex: number;
      pages: number[];
  };
  /**
   * Trigger
   * @returns Object
   */
  getTrigger(): any;
  getPagination(): any;
}
