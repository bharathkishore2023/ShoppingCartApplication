
import React, { Component } from 'react'

export const DataContext = React.createContext();

export class DataProvider extends Component {
    state = {
        products : [
            {
                "_id": "1",
                "title": "Nike shoes 01",
                "src": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f9522b40-4cc5-4fd2-b6fe-27f60b3ba886/air-max-97-og-shoes-pKxPsp.png",
                "description":"UI/UX designing, html css tutorials",
                "content": "Welcome to our channel Dev At. Here you can learn web designing, UI/UX designing,html css tutorial",
                "price": 23,
                "colors": ["red","black","crimson","teal"],
                "count": 1
            
            },
            {
                "_id": "2",
                "title": "Nike shoes 02",
                "src": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f9522b40-4cc5-4fd2-b6fe-27f60b3ba886/air-max-97-og-shoes-pKxPsp.png",
                "description":"UI/UX designing, html css tutorials",
                "content": "Welcome to our channel Dev At. Here you can learn web designing, UI/UX designing,html css tutorial",
                "price": 19,
                "colors": ["red","crimson","teal"],
                "count": 1
            
            },
            {
                "_id": "3",
                "title": "Nike shoes 03",
                "src": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f9522b40-4cc5-4fd2-b6fe-27f60b3ba886/air-max-97-og-shoes-pKxPsp.png",
                "description":"UI/UX designing, html css tutorials",
                "content": "Welcome to our channel Dev At. Here you can learn web designing, UI/UX designing,html css tutorial",
                "price": 50,
                "colors": ["lightblue", "white","crimson","teal"],
                "count": 1
        
            },
            {
                "_id": "4",
                "title": "Nike shoes 04",
                "src": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f9522b40-4cc5-4fd2-b6fe-27f60b3ba886/air-max-97-og-shoes-pKxPsp.png",
                "description":"UI/UX designing, html css tutorials",
                "content": "Welcome to our channel Dev At. Here you can learn web designing, UI/UX designing,html css tutorial",
                "price": 15,
                "colors": ["orange","black","crimson","teal"],
                "count": 1
        
            },
            {
                "_id": "5",
                "title": "Nike shoes 05",
                "src": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f9522b40-4cc5-4fd2-b6fe-27f60b3ba886/air-max-97-og-shoes-pKxPsp.png",
                "description":"UI/UX designing, html css tutorials",
                "content": "Welcome to our channel Dev At. Here you can learn web designing, UI/UX designing,html css tutorial",
                "price": 10,
                "colors": ["orange","black","crimson","teal"],
                "count": 1
        
            },
            {
                "_id": "6",
                "title": "Nike shoes 06",
                "src": "https://www.upsieutoc.com/images/2020/06/2https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f9522b40-4cc5-4fd2-b6fe-27f60b3ba886/air-max-97-og-shoes-pKxPsp.png7/img6.jpg",
                "description":"UI/UX designing, html css tutorials",
                "content": "Welcome to our channel Dev At. Here you can learn web designing, UI/UX designing,html css tutorial",
                "price": 17,
                "colors": ["orange","black","crimson","teal"],
                "count": 1
        
            }
        ]
    }
    
    render() {
        const {products} = this.state; 
  return (
   <DataContext.Provider value={{products}}>
    {this.props.children}
   </DataContext.Provider>
  )

  }
}


