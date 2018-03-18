import React from 'react';
import ReactDOM from 'react-dom';

let array = [1, 1, 1, 1, 1];
//let lists = array.map((item, index) => <li key={index}>{item}</li>);
//Each child in an array or iterator should have a unique "key" prop.
//Encountered two children with the same key, `1`. Keys should be unique so that components maintain their identity across updates
// {表达式
// <开头就是JSX XML
//{}只能放表达式，不能放JS语句。因为它 一定需要一个返回值
ReactDOM.render(<ul>
    {
        array.map((item, index) => <li key={index}>{item}</li>)
    }
</ul>, document.getElementById('root'));