export class Pagination {
    constructor(public currentPage: number =1 ,

        public itemsPerPage: number =10,
    
        public totalItems?: number,
    
        public totalPages?: number,

        public orderBy?:string,

        public orderByType?:string
    ){

    }
}

export class PaginationResult<T> {
    result: T[];
    pagination: Pagination;
}

