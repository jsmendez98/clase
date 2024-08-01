// export interface product{
//     id: number;
//     title: string;
//     description: string;
//     price: number;
//     category:  string;
//     imageUrl: string; 
//     // rating:number;
//     // const rating: number
//     rating{
//         rate: number;
//         count: number;
//     }
// }
export interface Product{
    id: number;
     title: string;
     price: number;
     description: string;
     category:  string;
     image: string; 
     rating: Rating
     
}
export interface Rating{
    rate: number;
    count: number;
 }