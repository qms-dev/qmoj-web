
export default [{
  title: "",
  dataIndex: "accepted",
  key: "accepted",
  customRender: ({text}: {text: boolean}) => {
    if(text === true){
      return "√"
    }else if (text === false) {
      return "×"
    } else {
      return "?"
    }
  }
},
{
  title: "#",
  dataIndex: "number",
  key: "number"
},
{
  title: "题名",
  dataIndex: "title",
  key: "title",
  ellipsis: true,
  customRender: ({text}: {text: string}): JSX.Element => {
    return (<a href="javascript:;">{text}</a>)
  }
},
{
  title: "题解",
  dataIndex: "answer",
  key: "answer"
},
{
  title: "通过率",
  dataIndex: "passRate",
  key: "passRate"
},
{
  title: "难度",
  dataIndex: "difficulty",
  key: "difficulty"
},
{
  title: "出现频率",
  dataIndex: "frequency",
  key: "frequency"
}
]