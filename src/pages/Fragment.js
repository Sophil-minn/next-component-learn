import React from 'react'

function Example() {
  return (
    <>
      Some text.
      <h2>A heading</h2>
      More text.
      <h2>Another heading</h2>
      Even more text.
    </>
   );
}

class Columns extends React.Component {
  render() {
    // Fragments 允许你将子列表分组，而无需向 DOM 添加额外节点。
    return (
      <>
        <td>Hello</td>
        <td>World</td>
      </>
    );
  }
}

class Columns2 extends React.Component {
  render() {
    return (
      <React.Fragment>
        <td>Hello2</td>
        <td>World2</td>
      </React.Fragment>
    );
  }
}

class Table extends React.Component {
  render() {
    return (
      <table>
        <tbody>
          <tr>
            <Columns />
            <Columns2 />
          </tr>
        </tbody>
      </table>
    );
  }
}

function Glossary(props) {
  return (
    <dl>
      key 是唯一可以传递给 Fragment 的属性。未来我们可能会添加对其他属性的支持，例如事件。
      {props.items.map(item => (
        // 没有`key`，React 会发出一个关键警告
        <React.Fragment key={item.id}>
          <dt>{item.term}</dt>
          <dd>{item.description}</dd>
        </React.Fragment>
      ))}
    </dl>
  );
}

export default function Fragment() {
  const items = [
    {id: 1, term: '红玫瑰 ', description: 'red rose'},
    {id: 2, term: '白玫瑰 ', description: 'white rose'},
    {id: 3, term: '蓝玫瑰 ', description: 'blue rose'},
    {id: 4, term: '黄玫瑰 ', description: 'yellow rose'},
    {id: 5, term: '粉玫瑰 ', description: 'pink rose'},
  ];
  return (
    <div>
       <h5>fragment example</h5>
      <Example />
      <Table />
      <Glossary items={items} />
    </div>
  )
}
