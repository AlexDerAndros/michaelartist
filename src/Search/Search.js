//Search
import { useState } from "react";
import './searchStyle.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {Link } from 'react-router-dom';
function FilterableProductTable({ products }) {
    const [filterText, setFilterText] = useState('');
    const [inStockOnly, setInStockOnly] = useState(false);
  
    return (
      <div>
        <SearchBar 
          filterText={filterText} 
          inStockOnly={inStockOnly} 
          onFilterTextChange={setFilterText} 
          onInStockOnlyChange={setInStockOnly} />
        <ProductTable 
          products={products} 
          filterText={filterText}
          inStockOnly={inStockOnly} />
      </div>
    );
  }
  
  
  
  function ProductRow({ product }) {
    const name = product.name;
   
  
    return (
   
      <tr>
        <td style={{color:'white'}}>{name}</td>
      </tr>
    
    );
  }
  
  function ProductTable({ products, filterText, inStockOnly }) {
    const rows = [];
    let lastCategory = null;
  
    products.forEach((product) => {
      if (
        product.name.toLowerCase().indexOf(
          filterText.toLowerCase()
        ) === -1
      ) {
        return;
      }
      if (inStockOnly && !product.stocked) {
        return;
      }
     
      rows.push(
        <ProductRow
          product={product}
          key={product.name} />
      );
      lastCategory = product.category;
    });
  
    return (
      <table>
        <thead>
          <tr>
            <th style={{color:'white'}}>
              Themes on the website
            </th>
          </tr>
        </thead>
        {rows}
      </table>
    );
  }
  
  function SearchBar({
    filterText,
    inStockOnly,
    onFilterTextChange,
    onInStockOnlyChange
  }) {
    return (
      <form>
        <input 
          type="text" 
          value={filterText} placeholder="Search..." 
          onChange={(e) => onFilterTextChange(e.target.value)} className='input' />
      </form>
    );
  }
  //<label>
   //<input type="checkbox" checked={inStockOnly} onChange={(e) => onInStockOnlyChange(e.target.checked)} />{' '}Only show products in stock</label>
  const PRODUCTS = [
    {category: "Main", name: "Home", component:'<Home/>'},
    {category: "Main", name: "Picture gallery", component:'<Bildgalerie/>'},
    {category: "Main",  name: "Chat", component:'<Chat/>' },
    {category:'Main', name: 'Login', component:'<Login/>'},
    {category:'Main', name: 'Signup', component:'<Signup/>', link:' '},
    {category:'Main', name:'Video gallery', component:'<Videogalerie/>', link: '/Videogalerie'},
    {category:'Main', name:'Picture shop', component:'<PictureShop/>', link:'/PictureShop'},
    {category:'Main', name:'About Us', component:'<AboutUs/>', link:'/AboutUs'},  
  ];
  
  export default function Search() {
  
    return (
      <div className='search'>
        <FilterableProductTable products={PRODUCTS}/>
      </div>
    );
  }
  
  