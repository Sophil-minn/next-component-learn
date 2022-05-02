import React from 'react';
import CustomButton from './CustomButton';
import ListOfTenThings from './ListOfTenThings';
import TodoList from './TodoList';
import { PhotoStory, VideoStory } from './stories';

const element = <h1>Hello, world!</h1>;
  const name = 'Josh Perez';
  const element2 = <h1>Hello, {name}</h1>;

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};

const element3 = (
  <h1>
    Hello, {formatName(user)}!
  </h1>
);

function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}

const element5 = <div tabIndex="0"></div>;
// eslint-disable-next-line jsx-a11y/alt-text
const element6 = <img src={`https://avatars.githubusercontent.com/u/17451427?s=40&v=4`}></img>;
const element7 = (
  <div>
    <h1>Hello!</h1>
    <h2>Good to see you here.</h2>
  </div>
);

function WarningButton() {
  // return React.createElement(CustomButton, {color: 'red'}, null);
  return <CustomButton color="red" />;
}

const MyComponents = {
  DatePicker: function DatePicker(props) {
    return <span>Imagine a {props.color} datepicker here.</span>;
  }
}

function BlueDatePicker() {
  return <MyComponents.DatePicker color="blue" />;
}

// 正确！组件需要以大写字母开头：
function Hello(props) {
  // 正确！ 这种 <div> 的使用是合法的，因为 div 是一个有效的 HTML 标签：
  return <span>Hello {props.toWhat}</span>;
}

function HelloWorld() {
  // 正确！React 知道 <Hello /> 是一个组件，因为它是大写字母开头的：
  return <Hello toWhat="World" />;
}

const components = {
  photo: PhotoStory,
  video: VideoStory
};

function Story(props) {
  // 错误！JSX 类型不能是一个表达式。
  // return <components[props.storyType] story={props.story} />;
  // 正确！JSX 类型可以是大写字母开头的变量。
  const SpecificStory = components[props.storyType];
  return <SpecificStory story={props.storyType} />;
}

function Story2(storyType) {
  // 错误！JSX 类型不能是一个表达式。
  // return <components[props.storyType] story={props.story} />;
  // 正确！JSX 类型可以是大写字母开头的变量。
  const SpecificStory = components[storyType];
  return <SpecificStory story={storyType} />;
}

const MyComponent = props => (
  <div>
    JavaScript 表达式作为 Props: {props.foo}
    字符串字面量作为props prop： {props.message}
    props.children: {props.children}
  </div>
)

function Greeting(props) {
  return <h1>{props.firstName}-{props.lastName}</h1>;
}

function App1() {
  return <Greeting firstName="Ben" lastName="Hector" />;
}

function App2() {
  const props = {firstName: 'Ben', lastName: 'Hector'};
  return <Greeting {...props} />;
}

const Button = props => {
  const { kind, ...other } = props;
  const className = kind === "primary" ? "PrimaryButton" : "SecondaryButton";
  return <button className={className} {...other} />;
};

const App3 = () => {
  return (
    <div>
      <div style={{ margin: '10px'}}>
        <Button kind="primary" onClick={() => console.log("primary clicked!")}>
          Hello World!
        </Button>
      </div>
      <div style={{ margin: '10px'}}>
        <Button kind="SecondaryButton" onClick={() => console.log("SecondaryButton clicked!")}>
          Hello World!
        </Button>
      </div>
      <div style={{ margin: '10px'}}>
        <Button kind="thirdButton" onClick={() => console.log("thirdButton clicked!")} />
      </div>
    </div>
  );
};

const JsxDemo = () => {

  return (
    <div>
      {element}
      {element2}
      {element3}
      {getGreeting()}
      {getGreeting(user)}
      {element5}
      {element6}
      {element7}
      <div>WarningButton: {WarningButton()}</div>
      <div>BlueDatePicker: {BlueDatePicker()}</div>
      <div>HelloWorld: {HelloWorld()}</div>
      {<Story storyType="photo" />}
      {<Story storyType="video" />}
      {Story2('photo')}
      {Story2('video')}
      <MyComponent foo={ 1 + 2 + 3 + 4}  message=" &lt;3 hello world"  autocomplete />
      <MyComponent>Hello world!</MyComponent>
      <App1 />
      <App2 />
      <App3 />
      <TodoList />
      <ListOfTenThings />


    </div>
  );
}

export default JsxDemo;
