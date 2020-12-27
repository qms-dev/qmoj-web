
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
  dataIndex: "id",
  key: "id"
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
  title: "难度",
  dataIndex: "difficulty",
  key: "difficulty",
  customRender: ({text}: {text: number}): string => {
    switch (text) {
      case 0:
        return 'easy';
      case 1:
        return 'medium';
      default:
          return 'hard';
    }
  }
},
{
  title: "分类",
  dataIndex: "topicTags",
  key: "topicTags",
  customRender: ({text}: {text: string[]}): string => {
    let str = ""
    text.forEach(item => {
      str += item+" ";
    })
    return str;
  }
}
]