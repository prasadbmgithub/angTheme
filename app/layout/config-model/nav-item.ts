export interface navItem{
    id:number;
    name:string; 
    routeLink:string;
}


export interface navCollapseItem{
    id:number;
    name:string;
    children?:navItem[];
}
